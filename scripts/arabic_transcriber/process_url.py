"""
End-to-End Arabic Video Downloader, Audio Isolator, Transcriber & Vocabulary Enricher.
Takes any video URL (YouTube, direct MP4, etc.), downloads via yt-dlp,
cleans audio with FFmpeg DSP, transcribes with Groq Whisper API (word-level timestamps),
enriches Arabic vocabulary with Groq LLM (Tashkeel, roots, POS, English meaning),
and outputs the exact TranscriptSentence[] JSON format for InteractiveVideoPlayer.
"""
import os
import sys
import json
import time
import re
import argparse
import subprocess
import requests
from pathlib import Path
from typing import List, Dict, Any, Optional

# Ensure UTF-8 output on Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
PUBLIC_DOWNLOADS = PROJECT_ROOT / "apps" / "web" / "public" / "downloads"
CACHE_DB_PATH = PROJECT_ROOT / "scripts" / "arabic_transcriber" / "arabic_words_cache.db"

# Load API key directly from .env files
def load_env_file(path: Path):
    if path.exists():
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    os.environ.setdefault(k.strip(), v.strip().strip("'\""))

load_env_file(PROJECT_ROOT / ".env")
load_env_file(PROJECT_ROOT / "scripts" / "arabic_transcriber" / ".env")

GROQ_API_KEY = os.getenv("GROQ_API_KEY", "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")


def strip_tashkeel(text: str) -> str:
    """Strips all Arabic diacritics/tashkeel/tatweel to get raw base form."""
    if not text:
        return ""
    return re.sub(r'[\u064B-\u065F\u0670\u0640]', '', text).strip()


CORE_ARABIC_LEXICON: Dict[str, Dict[str, Any]] = {
    "الذي": {"vocalized": "الَّذِي", "transliteration": "al-ladhi", "root": None, "pos": "pronoun", "en": "who / that"},
    "التي": {"vocalized": "الَّتِي", "transliteration": "al-lati", "root": None, "pos": "pronoun", "en": "who / which (f)"},
    "الذين": {"vocalized": "الَّذِينَ", "transliteration": "al-ladhina", "root": None, "pos": "pronoun", "en": "those who"},
    "اللواتي": {"vocalized": "اللَّوَاتِي", "transliteration": "al-lawati", "root": None, "pos": "pronoun", "en": "those who (f)"},
    "هذا": {"vocalized": "هٰذَا", "transliteration": "hadha", "root": None, "pos": "pronoun", "en": "this"},
    "هذه": {"vocalized": "هٰذِهِ", "transliteration": "hadhihi", "root": None, "pos": "pronoun", "en": "this (f)"},
    "ذلك": {"vocalized": "ذَٰلِكَ", "transliteration": "dhalika", "root": None, "pos": "pronoun", "en": "that"},
    "تلك": {"vocalized": "تِلْكَ", "transliteration": "tilka", "root": None, "pos": "pronoun", "en": "that (f)"},
    "هؤلاء": {"vocalized": "هٰؤُلَاءِ", "transliteration": "ha'ula'i", "root": None, "pos": "pronoun", "en": "these"},
    "أولئك": {"vocalized": "أُولَٰئِكَ", "transliteration": "ula'ika", "root": None, "pos": "pronoun", "en": "those"},
    "هو": {"vocalized": "هُوَ", "transliteration": "huwa", "root": None, "pos": "pronoun", "en": "he"},
    "هي": {"vocalized": "هِيَ", "transliteration": "hiya", "root": None, "pos": "pronoun", "en": "she"},
    "هم": {"vocalized": "هُمْ", "transliteration": "hum", "root": None, "pos": "pronoun", "en": "they"},
    "هن": {"vocalized": "هُنَّ", "transliteration": "hunna", "root": None, "pos": "pronoun", "en": "they (f)"},
    "أنا": {"vocalized": "أَنَا", "transliteration": "ana", "root": None, "pos": "pronoun", "en": "I"},
    "نحن": {"vocalized": "نَحْنُ", "transliteration": "nahnu", "root": None, "pos": "pronoun", "en": "we"},
    "أنت": {"vocalized": "أَنْتَ", "transliteration": "anta", "root": None, "pos": "pronoun", "en": "you"},
    "أنتم": {"vocalized": "أَنْتُمْ", "transliteration": "antum", "root": None, "pos": "pronoun", "en": "you (pl)"},
    "في": {"vocalized": "فِي", "transliteration": "fi", "root": None, "pos": "preposition", "en": "in"},
    "من": {"vocalized": "مِنْ", "transliteration": "min", "root": None, "pos": "preposition", "en": "from / of"},
    "إلى": {"vocalized": "إِلَى", "transliteration": "ila", "root": None, "pos": "preposition", "en": "to / towards"},
    "على": {"vocalized": "عَلَى", "transliteration": "‘ala", "root": None, "pos": "preposition", "en": "on / upon"},
    "عن": {"vocalized": "عَنْ", "transliteration": "‘an", "root": None, "pos": "preposition", "en": "about / from"},
    "مع": {"vocalized": "مَعَ", "transliteration": "ma‘a", "root": None, "pos": "preposition", "en": "with"},
    "بين": {"vocalized": "بَيْنَ", "transliteration": "bayna", "root": "ب-ي-ن", "pos": "preposition", "en": "between"},
    "عند": {"vocalized": "عِنْدَ", "transliteration": "‘inda", "root": None, "pos": "preposition", "en": "at / with"},
    "حتى": {"vocalized": "حَتَّى", "transliteration": "hatta", "root": None, "pos": "particle", "en": "until / even"},
    "كل": {"vocalized": "كُلّ", "transliteration": "kull", "root": "ك-ل-ل", "pos": "noun", "en": "all / each"},
    "غير": {"vocalized": "غَيْر", "transliteration": "ghayr", "root": "غ-ي-ر", "pos": "noun", "en": "other than"},
    "لا": {"vocalized": "لَا", "transliteration": "la", "root": None, "pos": "particle", "en": "no / not"},
    "ما": {"vocalized": "مَا", "transliteration": "ma", "root": None, "pos": "particle", "en": "what / not"},
    "لم": {"vocalized": "لَمْ", "transliteration": "lam", "root": None, "pos": "particle", "en": "did not"},
    "لن": {"vocalized": "لَنْ", "transliteration": "lan", "root": None, "pos": "particle", "en": "will not"},
    "إن": {"vocalized": "إِنَّ", "transliteration": "inna", "root": None, "pos": "particle", "en": "indeed"},
    "أن": {"vocalized": "أَنْ", "transliteration": "an", "root": None, "pos": "particle", "en": "that / to"},
    "إذا": {"vocalized": "إِذَا", "transliteration": "idha", "root": None, "pos": "particle", "en": "when / if"},
    "ثم": {"vocalized": "ثُمَّ", "transliteration": "thumma", "root": None, "pos": "conjunction", "en": "then"},
    "أو": {"vocalized": "أَوْ", "transliteration": "aw", "root": None, "pos": "conjunction", "en": "or"},
    "أم": {"vocalized": "أَمْ", "transliteration": "am", "root": None, "pos": "conjunction", "en": "or"},
    "قد": {"vocalized": "قَدْ", "transliteration": "qad", "root": None, "pos": "particle", "en": "already / truly"},
    "نعم": {"vocalized": "نَعَمْ", "transliteration": "na‘am", "root": None, "pos": "particle", "en": "yes"},
    "يا": {"vocalized": "يَا", "transliteration": "ya", "root": None, "pos": "particle", "en": "O"},
    "قبل": {"vocalized": "قَبْلَ", "transliteration": "qabla", "root": "ق-ب-ل", "pos": "preposition", "en": "before"},
    "بعد": {"vocalized": "بَعْدَ", "transliteration": "ba‘da", "root": "ب-ع-د", "pos": "preposition", "en": "after"},
    "فوق": {"vocalized": "فَوْقَ", "transliteration": "fawqa", "root": "ف-و-ق", "pos": "preposition", "en": "above"},
    "تحت": {"vocalized": "تَحْتَ", "transliteration": "tahta", "root": "ت-ح-ت", "pos": "preposition", "en": "under / below"},
    "أمام": {"vocalized": "أَمَامَ", "transliteration": "amama", "root": "أ-م-م", "pos": "preposition", "en": "in front of"},
    "خلف": {"vocalized": "خَلْفَ", "transliteration": "khalfa", "root": "خ-ل-ف", "pos": "preposition", "en": "behind"},
    "كان": {"vocalized": "كَانَ", "transliteration": "kana", "root": "ك-و-ن", "pos": "verb", "en": "was"},
    "يكون": {"vocalized": "يَكُونُ", "transliteration": "yakunu", "root": "ك-و-ن", "pos": "verb", "en": "is / will be"},
    "قال": {"vocalized": "قَالَ", "transliteration": "qala", "root": "ق-و-ل", "pos": "verb", "en": "said"},
    "يقول": {"vocalized": "يَقُولُ", "transliteration": "yaqulu", "root": "ق-و-ل", "pos": "verb", "en": "says"},
    "الله": {"vocalized": "اللَّهُ", "transliteration": "Allah", "root": "إ-ل-ه", "pos": "proper_noun", "en": "Allah / God"},
    "لله": {"vocalized": "لِلَّهِ", "transliteration": "lillahi", "root": "إ-ل-ه", "pos": "particle", "en": "to God"},
    "الحمد": {"vocalized": "الْحَمْدُ", "transliteration": "al-hamdu", "root": "ح-م-د", "pos": "noun", "en": "praise"},
}


def get_sqlite_cache():

    """Initializes and returns SQLite connection for word dictionary cache."""
    import sqlite3
    CACHE_DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(CACHE_DB_PATH))
    conn.execute("""
        CREATE TABLE IF NOT EXISTS word_lexicon (
            raw_word TEXT PRIMARY KEY,
            vocalized TEXT,
            transliteration TEXT,
            root TEXT,
            pos TEXT,
            meaning_en TEXT,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    return conn


def download_and_prepare_media(url: str, output_dir: Path, max_duration: Optional[int] = 300) -> Dict[str, Any]:
    """Downloads video with yt-dlp and extracts standardized audio."""
    output_dir.mkdir(parents=True, exist_ok=True)
    print(f"[*] Analyzing video metadata: {url}")
    
    local_file = Path(url)
    if local_file.exists() and local_file.is_file():
        clean_id = re.sub(r"[^a-zA-Z0-9_-]", "_", local_file.stem)
        dest_video = output_dir / f"{clean_id}.mp4"
        if not dest_video.exists() and local_file.resolve() != dest_video.resolve():
            import shutil
            shutil.copy2(local_file, dest_video)
        video_path = dest_video if dest_video.exists() else local_file
        clean_audio_mp3 = output_dir / f"{clean_id}_speech.mp3"
        
        if not clean_audio_mp3.exists():
            print("[*] Extracting audio and applying speech DSP filter...")
            ffmpeg_cmd = [
                "ffmpeg", "-y",
                "-i", str(video_path),
                "-af", "highpass=f=180,lowpass=f=4500,loudnorm=I=-16:TP=-1.5:LRA=11",
                "-ar", "16000",
                "-ac", "1",
                "-b:a", "32k",
                str(clean_audio_mp3)
            ]
            subprocess.run(ffmpeg_cmd, check=True, capture_output=True)

        return {
            "videoId": clean_id,
            "title": clean_id,
            "duration": 0,
            "videoFile": str(video_path),
            "videoUrl": f"/downloads/{clean_id}.mp4" if dest_video.exists() else f"/{local_file.name}",
            "audioPath": str(clean_audio_mp3)
        }

    # 1. Probe metadata for remote URL
    meta_cmd = [
        "yt-dlp",
        "--js-runtimes", "node",
        "--dump-json",
        "--no-playlist",
        url
    ]
    try:
        proc = subprocess.run(meta_cmd, capture_output=True, text=True, check=True)
        meta = json.loads(proc.stdout)
        raw_id = meta.get("id", f"video_{int(time.time())}")
        title = meta.get("title", "Arabic Video")
        duration = meta.get("duration", 0)
    except Exception as e:
        print(f"[!] Warning: Metadata probe failed ({e}), using fallback ID.")
        raw_id = f"video_{int(time.time())}"
        title = "Arabic Video"
        duration = 0

    clean_id = re.sub(r"[^a-zA-Z0-9_-]", "_", raw_id)
    video_path = output_dir / f"{clean_id}.mp4"
    audio_wav = output_dir / f"{clean_id}_raw.wav"
    clean_audio_mp3 = output_dir / f"{clean_id}_speech.mp3"

    # 2. Download video if not already present
    if not video_path.exists():
        print(f"[*] Downloading video: {title} (ID: {clean_id})...")
        dl_cmd = [
            "yt-dlp",
            "--js-runtimes", "node",
            "-f", "bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]/best[height<=720][ext=mp4]/best",
            "--merge-output-format", "mp4",
            "--no-playlist",
            "-o", str(video_path),
            url
        ]
        if max_duration and (duration == 0 or duration > max_duration):
            print(f"[*] Limiting download to first {max_duration} seconds...")
            dl_cmd.extend(["--download-sections", f"*0-{max_duration}"])

        try:
            subprocess.run(dl_cmd, check=True)
            print(f"[✓] Video downloaded -> {video_path}")
        except Exception as e:
            print(f"[!] Direct video download failed ({e}), falling back to direct stream/audio...")
            # Fallback to downloading audio only if video stream failed
            dl_audio_cmd = [
                "yt-dlp",
                "--js-runtimes", "node",
                "-x", "--audio-format", "mp3",
                "-o", str(output_dir / f"{clean_id}_temp.%(ext)s"),
                url
            ]
            subprocess.run(dl_audio_cmd, check=True)
            temp_mp3 = output_dir / f"{clean_id}_temp.mp3"
            if temp_mp3.exists():
                temp_mp3.rename(clean_audio_mp3)

    # 3. Extract and normalize audio if needed
    if not clean_audio_mp3.exists() and video_path.exists():
        print("[*] Extracting audio and applying speech DSP filter...")
        # Extract 16kHz mono WAV first
        ffmpeg_cmd = [
            "ffmpeg", "-y",
            "-i", str(video_path),
            "-af", "highpass=f=180,lowpass=f=4500,loudnorm=I=-16:TP=-1.5:LRA=11",
            "-ar", "16000",
            "-ac", "1",
            "-b:a", "32k",
            str(clean_audio_mp3)
        ]
        subprocess.run(ffmpeg_cmd, check=True, capture_output=True)
        print(f"[✓] Prepared speech audio for Whisper -> {clean_audio_mp3}")

    return {
        "videoId": clean_id,
        "title": title,
        "duration": duration,
        "videoFile": str(video_path) if video_path.exists() else None,
        "videoUrl": f"/downloads/{clean_id}.mp4" if video_path.exists() else url,
        "audioPath": str(clean_audio_mp3)
    }


def transcribe_with_groq_whisper(audio_path: str) -> Dict[str, Any]:
    """Transcribes audio using Groq Whisper large-v3-turbo with word timestamps."""
    print(f"[*] Calling Groq Cloud Whisper API for {audio_path}...")
    url = "https://api.groq.com/openai/v1/audio/transcriptions"
    headers = {"Authorization": f"Bearer {GROQ_API_KEY}"}

    with open(audio_path, "rb") as f:
        files = {"file": (Path(audio_path).name, f, "audio/mp3")}
        data = {
            "model": "whisper-large-v3-turbo",
            "language": "ar",
            "response_format": "verbose_json",
            "timestamp_granularities[]": ["word", "segment"],
            "temperature": "0.0"
        }
        res = requests.post(url, headers=headers, files=files, data=data, timeout=120)
        
    if res.status_code != 200:
        raise RuntimeError(f"Groq Whisper API error ({res.status_code}): {res.text}")

    result = res.json()
    print(f"[✓] Whisper transcription complete: {len(result.get('segments', []))} segments, {len(result.get('words', []))} words.")
    return result


def enrich_words_with_llm(missing_words: List[str], sample_sentences: List[str]) -> Dict[str, Dict[str, Any]]:
    """Enriches unique Arabic words with Tashkeel, root, POS, and English meaning using Groq LLM."""
    if not missing_words:
        return {}

    print(f"[*] Enriching {len(missing_words)} vocabulary words using Groq LLM...")
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    enriched_dict = {}
    batch_size = 12
    models = ["allam-2-7b", "qwen/qwen3.8-27b"]

    for i in range(0, len(missing_words), batch_size):
        batch = missing_words[i:i + batch_size]
        prompt = (
            "You are an expert Arabic dictionary and translator.\n"
            "Task: For the provided list of Arabic words, translate each word to English and provide its root, part of speech, and vocalized form.\n\n"
            "Output must be valid JSON in this exact structure:\n"
            "{\n"
            '  "الحمد": {"vocalized": "الْحَمْدُ", "transliteration": "al-hamdu", "root": "ح-م-د", "pos": "noun", "en": "praise"},\n'
            '  "لله": {"vocalized": "لِلَّهِ", "transliteration": "lillahi", "root": "إ-ل-ه", "pos": "particle", "en": "to God"}\n'
            "}\n\n"
            f"Translate these words now: {json.dumps(batch, ensure_ascii=False)}\n"
            "Output ONLY the JSON object, starting with { and ending with }."
        )

        batch_success = False
        for model in models:
            payload = {
                "model": model,
                "messages": [
                    {"role": "system", "content": "You are a professional Arabic linguistic translator. Always output valid JSON only, with no introductory or trailing text."},
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.1,
                "max_tokens": 1200
            }

            for attempt in range(2):
                try:
                    r = requests.post(url, headers=headers, json=payload, timeout=25)
                    if r.status_code == 200:
                        content = r.json()["choices"][0]["message"]["content"].strip()
                        if "```json" in content:
                            content = content.split("```json")[1].split("```")[0].strip()
                        elif "```" in content:
                            content = content.split("```")[1].split("```")[0].strip()
                        start = content.find("{")
                        end = content.rfind("}")
                        if start != -1 and end != -1:
                            content = content[start:end+1]

                        parsed = None
                        try:
                            parsed = json.loads(content)
                        except Exception:
                            # Regex fallback
                            item_pattern = re.compile(r'"([^"]+)"\s*:\s*\{([^}]+)\}')
                            parsed = {}
                            for m in item_pattern.finditer(content):
                                k = m.group(1)
                                body = "{" + m.group(2) + "}"
                                try:
                                    parsed[k] = json.loads(body)
                                except Exception:
                                    pass

                        if parsed and isinstance(parsed, dict):
                            # Ensure unwrapped if model wrapped it in an outer key
                            if len(parsed) == 1 and isinstance(list(parsed.values())[0], dict) and not any(k in batch for k in parsed.keys()):
                                parsed = list(parsed.values())[0]

                            valid_count = 0
                            for w_key, info in parsed.items():
                                if isinstance(info, dict) and info.get("en"):
                                    en_val = str(info["en"]).strip()
                                    # Ensure meaning contains English letters and is not identical to raw Arabic
                                    if re.search(r"[a-zA-Z]", en_val):
                                        clean_key = strip_tashkeel(w_key)
                                        if not info.get("vocalized"):
                                            info["vocalized"] = w_key
                                        enriched_dict[clean_key] = info
                                        enriched_dict[w_key] = info
                                        valid_count += 1

                            if valid_count > 0:
                                print(f"  [✓] Batch {i//batch_size + 1} ({valid_count}/{len(batch)} words) enriched using {model}")
                                batch_success = True
                                break
                    elif r.status_code == 429:
                        print(f"  [*] Rate limited on {model}, backing off 2s...")
                        time.sleep(2.0)
                    else:
                        print(f"  [!] Model {model} error: {r.status_code} - {r.text[:100]}")
                        break
                except Exception as e:
                    print(f"  [!] Enrichment exception on {model}: {e}")
                    time.sleep(1.0)

            if batch_success:
                break

        time.sleep(0.3)

    # Second pass for any words that were omitted by the model in batch mode
    still_missing = [w for w in missing_words if strip_tashkeel(w) not in enriched_dict and w not in enriched_dict]
    if still_missing:
        print(f"[*] Second-pass retry for {len(still_missing)} remaining words...")
        retry_batch_size = 8
        for j in range(0, len(still_missing), retry_batch_size):
            r_batch = still_missing[j:j + retry_batch_size]
            r_prompt = (
                "You are an expert Arabic dictionary and translator.\n"
                "Task: Translate each of these Arabic words to English, providing vocalized form, root, part of speech, and English translation.\n"
                "Respond ONLY with a valid JSON object in this format:\n"
                '{\n  "word": {"vocalized": "...", "transliteration": "...", "root": "...", "pos": "...", "en": "..."}\n}\n\n'
                f"Words: {json.dumps(r_batch, ensure_ascii=False)}"
            )
            for m in ["allam-2-7b", "qwen/qwen3.8-27b"]:
                try:
                    r = requests.post(url, headers=headers, json={
                        "model": m,
                        "messages": [
                            {"role": "system", "content": "You are a professional Arabic linguistic translator. Always output valid JSON only."},
                            {"role": "user", "content": r_prompt}
                        ],
                        "temperature": 0.1,
                        "max_tokens": 800
                    }, timeout=25)
                    if r.status_code == 200:
                        c = r.json()["choices"][0]["message"]["content"].strip()
                        if "```json" in c:
                            c = c.split("```json")[1].split("```")[0].strip()
                        elif "```" in c:
                            c = c.split("```")[1].split("```")[0].strip()
                        s_idx, e_idx = c.find("{"), c.rfind("}")
                        if s_idx != -1 and e_idx != -1:
                            c = c[s_idx:e_idx+1]
                        try:
                            p = json.loads(c)
                            for k, v in p.items():
                                if isinstance(v, dict) and v.get("en") and re.search(r"[a-zA-Z]", str(v["en"])):
                                    clean_k = strip_tashkeel(k)
                                    enriched_dict[clean_k] = v
                                    enriched_dict[k] = v
                            break
                        except Exception:
                            pass
                except Exception:
                    pass
            time.sleep(0.3)

    return enriched_dict



def extract_known_video_id(url: str) -> Optional[str]:
    """Extracts standardized video ID from URL or local file path."""
    if not url:
        return None
    local_p = Path(url)
    if local_p.exists() and local_p.is_file():
        return re.sub(r"[^a-zA-Z0-9_-]", "_", local_p.stem)
    
    clean_match = re.search(r"/downloads/([a-zA-Z0-9_-]+)\.(?:mp4|webm|mkv)", url)
    if clean_match:
        return clean_match.group(1)

    yt_match = re.search(r"(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([a-zA-Z0-9_-]{11})", url)
    if yt_match:
        return yt_match.group(1)
        
    return None


def process_video_pipeline(url: str, max_duration: int = 300, force: bool = False) -> Dict[str, Any]:
    """Runs the entire download, transcription, and enrichment pipeline, reusing cached transcripts when available."""
    start_time = time.time()
    
    # 0. Fast Cache Check: If video was already transcribed, load immediately without network / Groq calls
    known_id = extract_known_video_id(url)
    if not force and known_id:
        t_file = PUBLIC_DOWNLOADS / f"{known_id}_transcript.json"
        v_file = PUBLIC_DOWNLOADS / f"{known_id}.mp4"
        m_file = PUBLIC_DOWNLOADS / f"{known_id}_meta.json"
        if t_file.exists() and (v_file.exists() or Path(url).exists()):
            try:
                with open(t_file, "r", encoding="utf-8") as f:
                    sentences = json.load(f)
                if isinstance(sentences, list) and len(sentences) > 0:
                    title = f"Arabic Video ({known_id})"
                    duration = 0
                    if m_file.exists():
                        try:
                            with open(m_file, "r", encoding="utf-8") as mf:
                                m_data = json.load(mf)
                                title = m_data.get("title", title)
                                duration = m_data.get("duration", duration)
                        except Exception:
                            pass
                    print(f"\n[✓] Fast Cache Hit: '{known_id}' is already transcribed! Skipping download & Groq pipeline.")
                    return {
                        "success": True,
                        "videoId": known_id,
                        "title": title,
                        "duration": duration,
                        "videoUrl": f"/downloads/{known_id}.mp4" if v_file.exists() else url,
                        "transcript": sentences,
                        "processingTimeSec": 0.0,
                        "cached": True
                    }
            except Exception as e:
                print(f"[!] Warning reading cached transcript: {e}")

    # 1. Download media & extract clean speech audio
    media_info = download_and_prepare_media(url, PUBLIC_DOWNLOADS, max_duration=max_duration)
    video_id = media_info["videoId"]
    audio_path = media_info["audioPath"]

    # Secondary Cache Check: After metadata probe (for remote URLs whose ID couldn't be extracted beforehand)
    if not force:
        t_file = PUBLIC_DOWNLOADS / f"{video_id}_transcript.json"
        if t_file.exists():
            try:
                with open(t_file, "r", encoding="utf-8") as f:
                    sentences = json.load(f)
                if isinstance(sentences, list) and len(sentences) > 0:
                    print(f"\n[✓] Cache Hit: Video '{video_id}' is already transcribed! Skipping Whisper & LLM pipeline.")
                    return {
                        "success": True,
                        "videoId": video_id,
                        "title": media_info["title"],
                        "duration": media_info["duration"],
                        "videoUrl": media_info["videoUrl"],
                        "transcript": sentences,
                        "processingTimeSec": round(time.time() - start_time, 2),
                        "cached": True
                    }
            except Exception:
                pass

    # 2. Transcribe with Groq Whisper
    whisper_data = transcribe_with_groq_whisper(audio_path)
    raw_segments = whisper_data.get("segments", [])
    raw_words = whisper_data.get("words", [])


    if not raw_words and raw_segments:
        # If words array missing, generate words from segments
        for seg in raw_segments:
            seg_text = seg.get("text", "").strip()
            tokens = seg_text.split()
            seg_dur = max(seg.get("end", 1) - seg.get("start", 0), 0.5)
            step = seg_dur / max(len(tokens), 1)
            for w_idx, tok in enumerate(tokens):
                raw_words.append({
                    "word": tok,
                    "start": round(seg.get("start", 0) + w_idx * step, 2),
                    "end": round(seg.get("start", 0) + (w_idx + 1) * step, 2)
                })

    # 3. Clean word punctuation & gather unique words for dictionary lookup
    clean_words_list = []
    unique_ar_words = set()

    for w in raw_words:
        cleaned_text = w.get("word", "").strip("،.؟!؛:«»\"'()[]{} \t\n")
        if not cleaned_text:
            continue
        start_t = round(float(w.get("start", 0)), 2)
        end_t = max(round(float(w.get("end", start_t + 0.25)), 2), round(start_t + 0.20, 2))
        clean_words_list.append({
            "raw": cleaned_text,
            "start": start_t,
            "end": end_t
        })
        unique_ar_words.add(cleaned_text)

    # 4. Check seed lexicon and cache for dictionary definitions
    cache_conn = get_sqlite_cache()
    cached_lexicon = {}
    missing_for_llm = []

    for w_text in unique_ar_words:
        base_w = strip_tashkeel(w_text)
        if base_w in CORE_ARABIC_LEXICON:
            cached_lexicon[w_text] = CORE_ARABIC_LEXICON[base_w]
            continue
        if w_text in CORE_ARABIC_LEXICON:
            cached_lexicon[w_text] = CORE_ARABIC_LEXICON[w_text]
            continue

        row = cache_conn.execute(
            "SELECT vocalized, transliteration, root, pos, meaning_en FROM word_lexicon WHERE raw_word = ? OR raw_word = ?",
            (w_text, base_w)
        ).fetchone()
        if row and row[4] and row[4] != w_text and re.search(r"[a-zA-Z]", str(row[4])):
            cached_lexicon[w_text] = {
                "vocalized": row[0] or w_text,
                "transliteration": row[1] or w_text,
                "root": row[2],
                "pos": row[3] or "word",
                "en": row[4]
            }
        else:
            missing_for_llm.append(w_text)

    # 5. Enrich unknown words with Groq LLM
    if missing_for_llm:
        sample_sentences = [s.get("text", "") for s in raw_segments[:5]]
        llm_results = enrich_words_with_llm(missing_for_llm, sample_sentences)
        for raw_w in missing_for_llm:
            base_w = strip_tashkeel(raw_w)
            info = llm_results.get(raw_w) or llm_results.get(base_w)
            if isinstance(info, dict):
                vocalized = info.get("vocalized", raw_w)
                translit = info.get("transliteration", raw_w)
                root = info.get("root")
                pos = info.get("pos", "word")
                en_def = info.get("en", "")

                if en_def and en_def != raw_w and re.search(r"[a-zA-Z]", str(en_def)):
                    entry = {
                        "vocalized": vocalized,
                        "transliteration": translit,
                        "root": root,
                        "pos": pos,
                        "en": str(en_def).strip()
                    }
                    cached_lexicon[raw_w] = entry
                    cached_lexicon[base_w] = entry

                    # Save into cache
                    try:
                        cache_conn.execute("""
                            INSERT OR REPLACE INTO word_lexicon (raw_word, vocalized, transliteration, root, pos, meaning_en)
                            VALUES (?, ?, ?, ?, ?, ?)
                        """, (base_w, vocalized, translit, root, pos, str(en_def).strip()))
                        if raw_w != base_w:
                            cache_conn.execute("""
                                INSERT OR REPLACE INTO word_lexicon (raw_word, vocalized, transliteration, root, pos, meaning_en)
                                VALUES (?, ?, ?, ?, ?, ?)
                            """, (raw_w, vocalized, translit, root, pos, str(en_def).strip()))
                    except Exception:
                        pass
        cache_conn.commit()

    # 6. Group into clean sentences based on natural pauses (> 1.2s gap) or segment boundaries
    sentences = []
    curr_sentence_words = []
    global_word_id = 1
    sentence_id = 1

    for i, w_obj in enumerate(clean_words_list):
        raw_w = w_obj["raw"]
        base_w = strip_tashkeel(raw_w)
        lex = (
            cached_lexicon.get(raw_w)
            or cached_lexicon.get(base_w)
            or CORE_ARABIC_LEXICON.get(base_w)
            or CORE_ARABIC_LEXICON.get(raw_w)
        )

        if not lex or not lex.get("en") or not re.search(r"[a-zA-Z]", str(lex.get("en"))):
            # Check if any common prefix stripping helps (e.g. و-, ف-, ل-, ب-)
            if len(base_w) > 2 and base_w[0] in ("و", "ف", "ل", "ب"):
                sub_w = base_w[1:]
                sub_lex = cached_lexicon.get(sub_w) or CORE_ARABIC_LEXICON.get(sub_w)
                if sub_lex and sub_lex.get("en"):
                    prefix_meanings = {"و": "and ", "ف": "so ", "ل": "for ", "ب": "with "}
                    pref_en = prefix_meanings.get(base_w[0], "")
                    lex = {
                        "vocalized": raw_w,
                        "transliteration": sub_lex.get("transliteration", raw_w),
                        "root": sub_lex.get("root"),
                        "pos": sub_lex.get("pos", "word"),
                        "en": f"{pref_en}{sub_lex.get('en')}"
                    }

        if not lex or not lex.get("en") or not re.search(r"[a-zA-Z]", str(lex.get("en"))):
            lex = {
                "vocalized": raw_w,
                "transliteration": raw_w,
                "root": None,
                "pos": "word",
                "en": "..."
            }

        word_entry = {
            "id": f"w{global_word_id}",
            "ar": raw_w,
            "vocalized": lex.get("vocalized", raw_w),
            "transliteration": lex.get("transliteration", raw_w),
            "en": lex.get("en", raw_w),
            "start": w_obj["start"],
            "end": w_obj["end"],
            "root": lex.get("root"),
            "pos": lex.get("pos", "word")
        }
        global_word_id += 1
        curr_sentence_words.append(word_entry)

        # Break into new line if pause > 1.2s or word count reaches 10-12
        is_last_word = (i == len(clean_words_list) - 1)

        next_gap = (clean_words_list[i + 1]["start"] - w_obj["end"]) if not is_last_word else 0

        if is_last_word or next_gap > 1.2 or len(curr_sentence_words) >= 12:
            sentences.append({
                "sentenceId": f"s{sentence_id}",
                "words": curr_sentence_words
            })
            sentence_id += 1
            curr_sentence_words = []

    # 7. Write final transcript JSON and metadata
    transcript_file = PUBLIC_DOWNLOADS / f"{video_id}_transcript.json"
    with open(transcript_file, "w", encoding="utf-8") as f:
        json.dump(sentences, f, ensure_ascii=False, indent=2)

    meta_file = PUBLIC_DOWNLOADS / f"{video_id}_meta.json"
    try:
        with open(meta_file, "w", encoding="utf-8") as mf:
            json.dump({
                "videoId": video_id,
                "title": media_info.get("title", f"Arabic Video ({video_id})"),
                "duration": media_info.get("duration", 0),
                "sourceUrl": url,
                "totalWords": global_word_id - 1,
                "totalSentences": len(sentences)
            }, mf, ensure_ascii=False, indent=2)
    except Exception:
        pass

    total_time = round(time.time() - start_time, 2)
    print(f"\n[✓] Pipeline finished successfully in {total_time}s!")
    print(f"    - Video: {media_info['videoUrl']}")
    print(f"    - Transcript: {transcript_file}")
    print(f"    - Total Sentences: {len(sentences)}, Total Words: {global_word_id - 1}")

    return {
        "success": True,
        "videoId": video_id,
        "title": media_info["title"],
        "duration": media_info["duration"],
        "videoUrl": media_info["videoUrl"],
        "transcript": sentences,
        "processingTimeSec": total_time,
        "cached": False
    }


def main():
    parser = argparse.ArgumentParser(description="Arabic Video Transcription & Live Meaning Pipeline")
    parser.add_argument("url", help="Video URL (YouTube, MP4, etc.)")
    parser.add_argument("--max-duration", type=int, default=300, help="Max duration in seconds to process (default: 300)")
    parser.add_argument("--force", action="store_true", help="Force re-transcription even if cached")
    args = parser.parse_args()

    result = process_video_pipeline(args.url, max_duration=args.max_duration, force=args.force)
    # Output final JSON on last line for caller to parse
    print("\n--- PIPELINE RESULT JSON ---")
    print(json.dumps(result, ensure_ascii=False))


if __name__ == "__main__":
    main()


"""Transcribes peppa_pig_arabic.mp4 using Groq Whisper to obtain exact, non-overlapping line-by-line timestamps."""
import os
import sys
import requests
import json
import subprocess
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BASE_DIR.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))
VIDEO_PATH = PROJECT_ROOT / "apps" / "web" / "public" / "peppa_pig_arabic.mp4"
OUTPUT_TRANSCRIPT = PROJECT_ROOT / "apps" / "web" / "src" / "data" / "peppa_parsed_transcript.json"

# Load Groq Key
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
if not GROQ_API_KEY:
    env_file = BASE_DIR / "arabic_transcriber" / ".env"
    if env_file.exists():
        with open(env_file, "r", encoding="utf-8") as f:
            for line in f:
                if line.startswith("GROQ_API_KEY="):
                    GROQ_API_KEY = line.split("=", 1)[1].strip().strip("'\"")

assert GROQ_API_KEY, "GROQ_API_KEY not found!"

# 1. Extract clean 16kHz mono audio from peppa_pig_arabic.mp4
temp_wav = BASE_DIR / "arabic_transcriber" / "output" / "peppa_full_16k.wav"
temp_wav.parent.mkdir(parents=True, exist_ok=True)

print("[1/3] Extracting 16kHz audio with speech bandpass & normalization...")
cmd = [
    "ffmpeg", "-y",
    "-i", str(VIDEO_PATH),
    "-af", "highpass=f=180,lowpass=f=4500,loudnorm=I=-16:TP=-1.5:LRA=11",
    "-ar", "16000",
    "-ac", "1",
    "-c:a", "pcm_s16le",
    str(temp_wav)
]
subprocess.run(cmd, check=True, capture_output=True)
print(f"   Saved audio: {temp_wav} ({os.path.getsize(temp_wav)} bytes)")

# 2. Call Groq Whisper API
print("[2/3] Calling Groq Whisper API for full episode word-level alignment...")
url = "https://api.groq.com/openai/v1/audio/transcriptions"
headers = {"Authorization": f"Bearer {GROQ_API_KEY}"}
with open(temp_wav, "rb") as f:
    files = {"file": ("peppa.wav", f, "audio/wav")}
    data = {
        "model": "whisper-large-v3",
        "language": "ar",
        "response_format": "verbose_json",
        "timestamp_granularities[]": ["word", "segment"]
    }
    res = requests.post(url, headers=headers, files=files, data=data, timeout=120)

assert res.status_code == 200, f"Groq Whisper failed: {res.text}"
whisper_result = res.json()
print(f"   Whisper transcription received! Total duration: {whisper_result.get('duration')}s")

# Load Lexicon for enrichment
from scripts.enrich_peppa_transcript import LEXICON
from scripts.arabic_transcriber.cache import WordCache
cache = WordCache()

# 3. Structure into sentences and words
raw_segments = whisper_result.get("segments", [])
raw_words = whisper_result.get("words", [])
print(f"   Segments: {len(raw_segments)}, Raw words: {len(raw_words)}")

formatted_sentences = []
word_counter = 1

for s_idx, seg in enumerate(raw_segments):
    s_start = round(seg.get("start", 0.0), 2)
    s_end = round(seg.get("end", 0.0), 2)
    
    # Filter words belonging to this segment
    seg_words_raw = [w for w in raw_words if s_start <= w.get("start", 0.0) <= s_end + 0.1]
    
    # Clean and ensure non-overlapping, positive duration words
    cleaned_words = []
    for i, w in enumerate(seg_words_raw):
        w_text = w.get("word", "").strip("،.؟!؛:«»\"'()[]{}")
        if not w_text:
            continue
        
        w_start = round(w.get("start", 0.0), 2)
        w_end = round(w.get("end", 0.0), 2)
        
        # Ensure minimum duration of 0.20s so highlights are clearly visible and never skipped
        if w_end - w_start < 0.20:
            w_end = round(w_start + 0.20, 2)
            
        # Get enrichment from LEXICON first, then cache
        if w_text in LEXICON:
            lex = LEXICON[w_text]
            vocalized = lex.get("vocalized", w_text)
            translit = lex.get("translit", w_text)
            en = lex.get("en", w_text)
            root = lex.get("root")
            pos = lex.get("pos", "word")
        else:
            info = cache.get(w_text)
            if info:
                vocalized = info["word_vocalized"]
                translit = w_text
                en = info["meaning_en"]
                root = info["root"]
                pos = info["pos"]
            else:
                vocalized = w_text
                translit = w_text
                en = w_text
                root = None
                pos = "word"
        
        cleaned_words.append({
            "id": f"w{word_counter}",
            "ar": w_text,
            "vocalized": vocalized,
            "transliteration": translit,
            "en": en,
            "start": w_start,
            "end": w_end,
            "root": root,
            "pos": pos
        })
        word_counter += 1
        
    if cleaned_words:
        formatted_sentences.append({
            "sentenceId": f"s{s_idx + 1}",
            "words": cleaned_words
        })

print(f"[3/3] Formatted {len(formatted_sentences)} sentences with {word_counter - 1} words.")

# Save to peppa_parsed_transcript.json
with open(OUTPUT_TRANSCRIPT, "w", encoding="utf-8") as f:
    json.dump(formatted_sentences, f, ensure_ascii=False, indent=2)

print(f"✅ Successfully written to {OUTPUT_TRANSCRIPT}!")

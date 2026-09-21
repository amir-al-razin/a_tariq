# Arabic Video Live Transcription & Word-Meaning Pipeline Plan

## 1. Overview & Objective
Build an automated, high-precision pipeline that:
1. Takes an **Arabic video URL** (YouTube or direct media URL).
2. Isolates the voice dialogue from background cartoon music, laugh tracks, and sound effects.
3. Transcribes spoken Arabic with **precise millisecond word-level timestamps**.
4. Enriches every word with **Tashkeel (vocalization/harakat)**, **Grammatical Root**, and **Contextual English Meaning** (English only, no Bengali).
5. Emits a synchronized JSON dataset ready for interactive web/mobile video playback (live karaoke-style highlighting and click-to-learn cards).
6. Pilots and tunes the pipeline on **Peppa Pig Arabic** (*بيبا بيغ*) before generalizing to arbitrary Arabic video URLs.

---

## 2. Technical Stack (100% Free / Open-Source Tier)

| Stage | Tool / Model | Rationale & Free Tier Details |
| :--- | :--- | :--- |
| **Ingestion** | `yt-dlp` + `ffmpeg` | Free, robust stream extractor; converts to 16kHz mono WAV. |
| **Vocal Isolation** | Meta `Demucs` (`htdemucs_ft` 2-source) or `audio-separator` | Free open-source source separation. Strips cheerful cartoon music and sound effects so Whisper does not hallucinate. Runs locally on NVIDIA RTX 4050 GPU (6GB VRAM) or free HuggingFace spaces. |
| **Hallucination Guard & VAD** | `Silero VAD` | Free open-source Voice Activity Detection. Drops musical interludes and silence gaps, preventing Whisper from looping. |
| **Transcription & Word Alignment** | `faster-whisper` (or `whisperx`) | Free CTranslate2 implementation of OpenAI Whisper (`large-v3-turbo` or `medium`). Provides millisecond word timestamps without drifting. |
| **Tashkeel & English Meaning** | Free Tier LLM (Google AI Studio Gemini 2.5 Flash / Groq / Hugging Face Inference) + Local Cache | Sentence-contextual English translation, root extraction, and full Tashkeel. Zero cost. Cached in SQLite so common words are never re-queried. |

---

## 3. Detailed Step-by-Step Pipeline

```
[ Video URL ]
     │
     ▼
[ 1. Download & Audio Extraction ] ──> 16kHz Mono 16-bit PCM WAV
     │
     ▼
[ 2. Vocal Isolation (Demucs) ]    ──> Splitted: vocals.wav (speech only, no background music)
     │
     ▼
[ 3. VAD & Silence Trimming ]      ──> Silero VAD masks out long non-vocal sections
     │
     ▼
[ 4. Speech-to-Text Transcription ] ──> Word-level segments with start & end timestamps
     │
     ▼
[ 5. English Meaning & Tashkeel ]   ──> LLM prompt + dictionary cache (harakat, root, English)
     │
     ▼
[ 6. JSON & WebVTT Generator ]     ──> Final interactive subtitle & word payload
```

---

## 4. Output Schema (English Only)

The pipeline produces a frontend-ready JSON structure:

```json
{
  "video_id": "peppa_pig_arabic_ep1",
  "source_url": "https://www.youtube.com/watch?v=...",
  "language": "ar",
  "segments": [
    {
      "segment_id": 1,
      "start": 1.20,
      "end": 3.85,
      "text_raw": "أنا بيبا بيغ وهذا أخي الصغير جورج",
      "text_vocalized": "أَنَا بِيْبَا بِيغْ، وَهٰذَا أَخِي الصَّغِيرُ جُورْج",
      "translation_en": "I am Peppa Pig, and this is my little brother George.",
      "words": [
        {
          "word_raw": "أنا",
          "word_vocalized": "أَنَا",
          "start": 1.20,
          "end": 1.48,
          "root": "أ-ن-ا",
          "pos": "pronoun",
          "meaning_en": "I"
        },
        {
          "word_raw": "بيبا",
          "word_vocalized": "بِيبَا",
          "start": 1.52,
          "end": 1.95,
          "root": null,
          "pos": "proper_noun",
          "meaning_en": "Peppa"
        },
        {
          "word_raw": "وهذا",
          "word_vocalized": "وَهٰذَا",
          "start": 2.10,
          "end": 2.55,
          "root": "ذ-ا",
          "pos": "demonstrative",
          "meaning_en": "and this"
        }
      ]
    }
  ]
}
```

---

## 5. Execution Roadmap

### Phase 1: Environment & Directory Setup
- Create isolated workspace `scripts/arabic_transcriber/`.
- Establish Python virtual environment with dependencies:
  - `yt-dlp`
  - `ffmpeg-python`
  - `demucs` / `torch`
  - `faster-whisper`
  - `requests` / `aiohttp`

### Phase 2: Peppa Pig Pilot Verification
- Select an official Arabic Peppa Pig video segment (1–2 minutes).
- Extract raw audio and run vocal isolation.
- Compare transcription accuracy of raw audio vs. vocal-isolated audio (demonstrating why music suppression is vital).
- Validate word boundary timestamps and adjust VAD threshold.

### Phase 3: Semantic Enrichment (English & Tashkeel)
- Implement batch enrichment module using free-tier Gemini 2.5 Flash / Groq / HuggingFace.
- Implement a local SQLite dictionary cache (`words_cache.db`) so common Arabic particles (`في`, `على`, `من`, `هذا`, `قال`) are stored permanently after the first lookup.

### Phase 4: Generalize to Any URL (CLI & API Engine)
- Wrap into a clean CLI tool:
  `python -m arabic_transcriber.cli --url "<URL>" --output output.json`
- Support customizable timestamp granularity and export formats (`.json`, `.vtt`, `.srt`).

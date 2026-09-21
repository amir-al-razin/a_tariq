# Arabic Video Live Transcription & Word-Meaning Pipeline

An automated, noise-resilient pipeline designed for Arabic videos (cartoons like Peppa Pig, TV shows, and YouTube lessons).

## Features
- **100% Free / Open-Source Tier**: Works with free local models (`faster-whisper`, `demucs`, `ffmpeg`) or free cloud tiers (Groq Whisper, Gemini Flash).
- **Vocal Isolation & Music Stripping**: Strips upbeat cartoon music, pig snorts, laughing, and background sound effects before transcription, preventing Whisper from hallucinating loops.
- **Word-Level Millisecond Timestamps**: Precise start and end times for every Arabic word.
- **Diacritization & Vocabulary Enrichment**: Attaches vocalized Tashkeel (harakat), grammatical root, part of speech, and contextual English meaning.
- **Local SQLite Caching**: Automatically saves discovered words to `arabic_words_cache.db`, preventing redundant lookups.
- **Dual Export**: Generates both interactive JSON (for web/mobile live word highlighting) and standard WebVTT subtitles.

## Quickstart

### 1. Test Pilot with Peppa Pig Arabic (60-second clip):
```bash
scripts/.venv/Scripts/python.exe -m scripts.arabic_transcriber.cli \
  --url "https://www.youtube.com/watch?v=YOUR_PEPPA_PIG_URL" \
  --duration 60
```

### 2. Transcribe Any Arabic Video URL:
```bash
scripts/.venv/Scripts/python.exe -m scripts.arabic_transcriber.cli \
  --url "https://www.youtube.com/watch?v=..." \
  --output "output/my_video.json"
```

### 3. Transcribe a Local Video or Audio File:
```bash
scripts/.venv/Scripts/python.exe -m scripts.arabic_transcriber.cli \
  --file "path/to/arabic_video.mp4"
```

## Free Cloud Speed Boost (Optional)
If you have a free [Groq API key](https://console.groq.com):
```bash
set GROQ_API_KEY=gsk_...
# Transcribe at 200x real-time speed for free!
```

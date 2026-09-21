"""End-to-End Arabic Video Live Transcription & Word-Meaning Pipeline."""
import json
import time
import sys
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
from typing import Dict, Any, Optional
from .config import OUTPUT_DIR
from .downloader import extract_video_audio
from .vocal_separator import isolate_vocals
from .vad_filter import detect_speech_intervals
from .transcriber import transcribe_arabic_audio
from .enricher import ArabicEnricher


def run_pipeline(
    video_source: str,
    output_path: Optional[str] = None,
    start_time: Optional[float] = None,
    duration: Optional[float] = None,
    groq_key: Optional[str] = None,
    force_dsp_vocal: bool = False
) -> Dict[str, Any]:
    """
    Executes the full pipeline:
    1. Audio Extraction (yt-dlp + ffmpeg)
    2. Vocal Isolation (Demucs / DSP)
    3. Voice Activity Detection (VAD)
    4. Speech-to-Text Transcription with Word Timings (Whisper)
    5. English Meaning & Tashkeel Enrichment (LLM + Cache)
    6. Synchronized Output Generation
    """
    start_ts = time.time()
    print(f"\n=======================================================")
    print(f"🎬 Starting Arabic Transcription Pipeline for:")
    print(f"   Source: {video_source}")
    print(f"=======================================================\n")

    # 1. Download / Extract 16kHz mono WAV
    if video_source.startswith("http://") or video_source.startswith("https://"):
        print("[Step 1/5] Extracting audio stream from URL...")
        meta = extract_video_audio(video_source, start_time=start_time, duration=duration)
        raw_wav = meta["raw_wav_path"]
        video_id = meta["video_id"]
        title = meta["title"]
    else:
        # Local audio/video file
        video_id = Path(video_source).stem
        title = video_id
        out_dir = Path(output_path).parent if output_path else OUTPUT_DIR
        out_dir.mkdir(parents=True, exist_ok=True)
        raw_wav = str(out_dir / f"{video_id}_raw.wav")

        print(f"[Step 1/5] Preparing local media file: {video_source}")
        cmd = ["ffmpeg", "-y"]
        if start_time is not None:
            cmd.extend(["-ss", str(start_time)])
        if duration is not None:
            cmd.extend(["-t", str(duration)])
        cmd.extend([
            "-i", video_source,
            "-ar", "16000",
            "-ac", "1",
            "-c:a", "pcm_s16le",
            raw_wav
        ])
        import subprocess
        subprocess.run(cmd, check=True, capture_output=True)
        print(f"   Saved standardized audio: {raw_wav}")

    # 2. Vocal Isolation (Strip cartoon music & sound effects)
    print("\n[Step 2/5] Running vocal isolation (music & sound effect stripping)...")
    vocal_res = isolate_vocals(raw_wav, force_fallback=force_dsp_vocal)
    clean_audio = vocal_res["vocals_path"]

    # 3. Voice Activity Detection
    print("\n[Step 3/5] Inspecting speech activity...")
    intervals = detect_speech_intervals(clean_audio)
    print(f"   Detected {len(intervals)} speech interval(s).")

    # 4. Speech-to-Text with Word Timestamps
    print("\n[Step 4/5] Transcribing Arabic speech with word timestamps...")
    segments = transcribe_arabic_audio(clean_audio, language="ar", groq_key=groq_key)

    # 5. English Meaning & Tashkeel Enrichment
    print("\n[Step 5/5] Enriching words with Tashkeel, root, and English meaning...")
    enricher = ArabicEnricher()
    enriched_segments = enricher.enrich_segments(segments)

    # Compile Final JSON Payload
    total_words = sum(len(s.get("words", [])) for s in enriched_segments)
    elapsed = round(time.time() - start_ts, 2)

    result_payload = {
        "video_id": video_id,
        "title": title,
        "source": video_source,
        "language": "ar",
        "total_segments": len(enriched_segments),
        "total_words": total_words,
        "processing_time_sec": elapsed,
        "segments": enriched_segments
    }

    # Save to JSON file
    out_file = Path(output_path) if output_path else OUTPUT_DIR / f"{video_id}_transcription.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(result_payload, f, ensure_ascii=False, indent=2)

    # Also generate WebVTT with word timing cues
    vtt_file = out_file.with_suffix(".vtt")
    _write_webvtt(enriched_segments, vtt_file)

    print(f"\n✅ Pipeline Complete in {elapsed}s!")
    print(f"   Interactive JSON: {out_file}")
    print(f"   WebVTT Subtitles: {vtt_file}")
    print(f"   Total words: {total_words} across {len(enriched_segments)} segments.\n")

    return result_payload


def _write_webvtt(segments: list, vtt_path: Path):
    """Generates standard WebVTT subtitle file with vocalized text and English translation."""
    def format_ts(sec: float) -> str:
        mins = int(sec // 60)
        s = int(sec % 60)
        ms = int((sec - int(sec)) * 1000)
        return f"{mins:02d}:{s:02d}.{ms:03d}"

    lines = ["WEBVTT", ""]
    for seg in segments:
        start_str = format_ts(seg["start"])
        end_str = format_ts(seg["end"])
        lines.append(f"{start_str} --> {end_str}")
        lines.append(f"{seg['text_vocalized']}")
        lines.append(f"{seg['translation_en']}")
        lines.append("")

    with open(vtt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

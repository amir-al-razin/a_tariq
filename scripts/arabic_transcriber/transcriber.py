"""Speech-to-text module supporting local Faster-Whisper and Groq Whisper (free tier)."""
import os
import subprocess
import json
from pathlib import Path
from typing import List, Dict, Any, Optional
from .config import (
    WHISPER_MODEL,
    WHISPER_DEVICE,
    WHISPER_COMPUTE_TYPE,
    GROQ_API_KEY
)


def transcribe_arabic_audio(
    audio_path: str,
    language: str = "ar",
    groq_key: Optional[str] = None
) -> List[Dict[str, Any]]:
    """
    Transcribes audio into Arabic segments with word-level timestamps.
    Tries local faster-whisper first; falls back to Groq free API if available.
    """
    audio_file = Path(audio_path)
    if not audio_file.exists():
        raise FileNotFoundError(f"Audio file not found: {audio_path}")

    # Check if Groq API key is set
    active_groq_key = groq_key or GROQ_API_KEY or os.getenv("GROQ_API_KEY")

    # 1. Try local faster-whisper first
    try:
        from faster_whisper import WhisperModel
        print(f"[transcriber] Running local Faster-Whisper ({WHISPER_MODEL}) on {WHISPER_DEVICE}...")
        model = WhisperModel(
            WHISPER_MODEL,
            device=WHISPER_DEVICE,
            compute_type=WHISPER_COMPUTE_TYPE
        )
        segments_gen, info = model.transcribe(
            str(audio_file),
            language=language,
            word_timestamps=True,
            vad_filter=True,
            vad_parameters=dict(min_silence_duration_ms=500)
        )
        output_segments = []
        for seg in segments_gen:
            words = []
            if seg.words:
                for w in seg.words:
                    words.append({
                        "word": w.word.strip(),
                        "start": round(w.start, 2),
                        "end": round(w.end, 2),
                        "probability": round(w.probability, 3)
                    })
            output_segments.append({
                "segment_id": len(output_segments) + 1,
                "start": round(seg.start, 2),
                "end": round(seg.end, 2),
                "text": seg.text.strip(),
                "words": words
            })
        print(f"[transcriber] Local transcription done. Produced {len(output_segments)} segments.")
        return output_segments
    except ImportError:
        print("[transcriber] faster-whisper not installed locally.")
    except Exception as e:
        print(f"[transcriber] faster-whisper execution failed: {e}")

    # 2. Try Groq Cloud Whisper API (Free tier, extremely fast)
    if active_groq_key:
        print("[transcriber] Using Groq Cloud Whisper API (word-level timestamps)...")
        try:
            import requests
            url = "https://api.groq.com/openai/v1/audio/transcriptions"
            headers = {"Authorization": f"Bearer {active_groq_key}"}
            with open(str(audio_file), "rb") as f:
                files = {"file": (audio_file.name, f, "audio/wav")}
                data = {
                    "model": "whisper-large-v3",
                    "language": language,
                    "response_format": "verbose_json",
                    "timestamp_granularities[]": ["word", "segment"]
                }
                res = requests.post(url, headers=headers, files=files, data=data, timeout=60)
            if res.status_code == 200:
                result = res.json()
                segments = []
                for s in result.get("segments", []):
                    seg_words = []
                    # Filter words belonging to this segment
                    s_start, s_end = s.get("start", 0.0), s.get("end", 0.0)
                    for w in result.get("words", []):
                        if s_start <= w.get("start", 0.0) <= s_end:
                            seg_words.append({
                                "word": w.get("word", "").strip(),
                                "start": round(w.get("start", 0.0), 2),
                                "end": round(w.get("end", 0.0), 2),
                            })
                    segments.append({
                        "segment_id": len(segments) + 1,
                        "start": round(s_start, 2),
                        "end": round(s_end, 2),
                        "text": s.get("text", "").strip(),
                        "words": seg_words
                    })
                return segments
            else:
                print(f"[transcriber] Groq API error ({res.status_code}): {res.text}")
        except Exception as e:
            print(f"[transcriber] Groq API call failed: {e}")

    # 3. Fallback: Provide a clear instruction if neither local model nor API key is available
    raise RuntimeError(
        "No transcription engine available! Either:\n"
        "1. Install faster-whisper locally: pip install faster-whisper\n"
        "2. Or set a free Groq API key: export GROQ_API_KEY='your_key_here'\n"
    )

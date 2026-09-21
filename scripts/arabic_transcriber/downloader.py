"""Audio extraction module using yt-dlp and ffmpeg."""
import subprocess
import json
import shutil
from pathlib import Path
from typing import Dict, Any, Optional
from .config import SAMPLE_RATE, CHANNELS, OUTPUT_DIR


def extract_video_audio(
    url: str,
    output_dir: Optional[Path] = None,
    start_time: Optional[float] = None,
    duration: Optional[float] = None,
) -> Dict[str, Any]:
    """
    Downloads and extracts a 16kHz Mono WAV from a video URL.
    Returns metadata and audio file path.
    """
    out_dir = output_dir or OUTPUT_DIR
    out_dir.mkdir(parents=True, exist_ok=True)

    # 1. Fetch metadata first without downloading
    meta_cmd = [
        "yt-dlp",
        "--js-runtimes", "node",
        "--dump-json",
        "--no-playlist",
        url,
    ]
    try:
        proc = subprocess.run(meta_cmd, capture_output=True, text=True, check=True)
        meta = json.loads(proc.stdout)
        video_id = meta.get("id", "audio_clip")
        title = meta.get("title", "Unknown Title")
        total_duration = meta.get("duration", 0)
    except Exception as e:
        # Fallback if dump-json fails or direct file url
        video_id = "arabic_clip"
        title = "Arabic Video"
        total_duration = 0

    clean_video_id = "".join(c for c in video_id if c.isalnum() or c in ("-", "_"))
    raw_wav_path = out_dir / f"{clean_video_id}_raw.wav"

    # 2. Download audio using yt-dlp & ffmpeg
    download_cmd = [
        "yt-dlp",
        "--js-runtimes", "node",
        "-x",
        "--audio-format", "wav",
        "--no-playlist",
        "-o", str(out_dir / f"{clean_video_id}_temp.%(ext)s"),
        url,
    ]

    # If time slice requested
    if start_time is not None or duration is not None:
        download_cmd.extend(["--download-sections", f"*{start_time or 0}-{ (start_time or 0) + (duration or 60) }"])

    subprocess.run(download_cmd, check=True)

    # Find the downloaded file
    temp_files = list(out_dir.glob(f"{clean_video_id}_temp.*"))
    if not temp_files:
        raise FileNotFoundError(f"Failed to find downloaded audio file for {url}")
    temp_audio = temp_files[0]

    # 3. Standardize to 16kHz mono WAV using ffmpeg
    ffmpeg_cmd = [
        "ffmpeg",
        "-y",
        "-i", str(temp_audio),
        "-ar", str(SAMPLE_RATE),
        "-ac", str(CHANNELS),
        "-c:a", "pcm_s16le",
        str(raw_wav_path)
    ]
    subprocess.run(ffmpeg_cmd, check=True, capture_output=True)

    # Clean up temp audio
    try:
        temp_audio.unlink()
    except Exception:
        pass

    return {
        "video_id": clean_video_id,
        "title": title,
        "duration": total_duration,
        "raw_wav_path": str(raw_wav_path),
    }

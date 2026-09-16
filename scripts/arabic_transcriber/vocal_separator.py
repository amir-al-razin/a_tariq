"""Vocal isolation module using Meta Demucs with FFmpeg acoustic filter fallback."""
import subprocess
import shutil
from pathlib import Path
from typing import Dict, Optional
from .config import OUTPUT_DIR, DEMUCS_MODEL, USE_VOCAL_ISOLATION


def isolate_vocals(
    raw_wav_path: str,
    output_dir: Optional[Path] = None,
    force_fallback: bool = False
) -> Dict[str, str]:
    """
    Isolates dialogue vocals from background music and sound effects.
    Uses Demucs htdemucs if available; otherwise falls back to vocal bandpass DSP.
    Returns path to clean isolated vocals.wav.
    """
    raw_path = Path(raw_wav_path)
    out_dir = output_dir or OUTPUT_DIR
    base_name = raw_path.stem.replace("_raw", "")
    clean_vocals_path = out_dir / f"{base_name}_vocals.wav"

    if not USE_VOCAL_ISOLATION:
        print("[vocal_separator] Vocal isolation disabled by config. Using raw audio.")
        return {"vocals_path": str(raw_path), "method": "raw"}

    # Check if demucs command exists
    demucs_bin = shutil.which("demucs")
    if demucs_bin and not force_fallback:
        print(f"[vocal_separator] Running Demucs ({DEMUCS_MODEL}) for vocal isolation...")
        demucs_out_dir = out_dir / "demucs_temp"
        cmd = [
            demucs_bin,
            "--two-stems=vocals",
            "-n", DEMUCS_MODEL,
            "-o", str(demucs_out_dir),
            str(raw_path)
        ]
        try:
            subprocess.run(cmd, check=True)
            # Demucs outputs to: <out_dir>/<model>/<track_name>/vocals.wav
            separated_vocals = demucs_out_dir / DEMUCS_MODEL / raw_path.stem / "vocals.wav"
            if separated_vocals.exists():
                shutil.copy2(separated_vocals, clean_vocals_path)
                print(f"[vocal_separator] Demucs isolation complete -> {clean_vocals_path}")
                return {"vocals_path": str(clean_vocals_path), "method": "demucs"}
        except Exception as e:
            print(f"[vocal_separator] Demucs failed ({e}). Falling back to acoustic DSP filter...")

    # High-grade DSP fallback: Bandpass vocal filter (180Hz - 4500Hz) + Loudness Normalization
    print("[vocal_separator] Applying acoustic vocal bandpass filter & normalization...")
    ffmpeg_cmd = [
        "ffmpeg",
        "-y",
        "-i", str(raw_path),
        "-af", "highpass=f=180,lowpass=f=4500,loudnorm=I=-16:TP=-1.5:LRA=11",
        "-ar", "16000",
        "-ac", "1",
        str(clean_vocals_path)
    ]
    subprocess.run(ffmpeg_cmd, check=True, capture_output=True)
    print(f"[vocal_separator] DSP vocal filter complete -> {clean_vocals_path}")
    return {"vocals_path": str(clean_vocals_path), "method": "dsp_bandpass"}

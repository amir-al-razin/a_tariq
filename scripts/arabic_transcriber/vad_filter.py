"""Voice Activity Detection (VAD) module to guard against Whisper hallucinations."""
import subprocess
import re
from pathlib import Path
from typing import List, Dict, Any


def detect_speech_intervals(audio_path: str, noise_db: float = -32.0, min_silence_dur: float = 0.5) -> List[Dict[str, float]]:
    """
    Detects non-silent speech segments using FFmpeg silencedetect.
    Returns list of intervals [{'start': float, 'end': float}].
    """
    cmd = [
        "ffmpeg",
        "-i", str(audio_path),
        "-af", f"silencedetect=noise={noise_db}dB:d={min_silence_dur}",
        "-f", "null",
        "-"
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    lines = proc.stderr.splitlines()

    silence_starts = []
    silence_ends = []
    total_duration = 0.0

    dur_match = re.search(r"Duration:\s*(\d+):(\d+):(\d+\.\d+)", proc.stderr)
    if dur_match:
        h, m, s = dur_match.groups()
        total_duration = int(h) * 3600 + int(m) * 60 + float(s)

    for line in lines:
        if "silence_start:" in line:
            parts = line.split("silence_start:")
            try:
                silence_starts.append(float(parts[1].strip().split()[0]))
            except ValueError:
                pass
        elif "silence_end:" in line:
            parts = line.split("silence_end:")
            try:
                silence_ends.append(float(parts[1].strip().split()[0]))
            except ValueError:
                pass

    # If no silence detected, the whole file is speech
    if not silence_starts:
        return [{"start": 0.0, "end": total_duration or 9999.0}]

    speech_intervals = []
    curr_time = 0.0

    for i in range(len(silence_starts)):
        s_start = silence_starts[i]
        if s_start > curr_time + 0.15:  # At least 150ms speech
            speech_intervals.append({"start": round(curr_time, 2), "end": round(s_start, 2)})
        if i < len(silence_ends):
            curr_time = silence_ends[i]

    if total_duration and curr_time < total_duration - 0.15:
        speech_intervals.append({"start": round(curr_time, 2), "end": round(total_duration, 2)})

    return speech_intervals if speech_intervals else [{"start": 0.0, "end": total_duration or 9999.0}]

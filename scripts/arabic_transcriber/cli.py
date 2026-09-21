"""Command-line interface for Arabic Video Transcription Pipeline."""
import argparse
import sys

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
from .pipeline import run_pipeline


def main():
    parser = argparse.ArgumentParser(
        description="Arabic Video Live Transcription & English Word-Meaning Pipeline"
    )
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--url", type=str, help="URL of the Arabic video (e.g. YouTube)")
    group.add_argument("--file", type=str, help="Path to local video or audio file")

    parser.add_argument("--start", type=float, default=None, help="Start offset in seconds")
    parser.add_argument("--duration", type=float, default=None, help="Duration to process in seconds (useful for fast pilots)")
    parser.add_argument("--output", type=str, default=None, help="Destination JSON path")
    parser.add_argument("--groq-key", type=str, default=None, help="Groq API key for ultra-fast cloud Whisper")
    parser.add_argument("--force-dsp", action="store_true", help="Force FFmpeg DSP bandpass filter instead of Demucs")

    args = parser.parse_args()

    source = args.url or args.file
    try:
        run_pipeline(
            video_source=source,
            output_path=args.output,
            start_time=args.start,
            duration=args.duration,
            groq_key=args.groq_key,
            force_dsp_vocal=args.force_dsp
        )
    except Exception as e:
        print(f"\n❌ Error running pipeline: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

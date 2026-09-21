import sys
import os
import asyncio
import subprocess
import tempfile
import edge_tts

VOICE = os.environ.get("ARABIC_TTS_VOICE", "ar-SA-HamedNeural")

async def synthesize(text: str):
    clean_text = text.strip()
    if not clean_text:
        return

    with tempfile.TemporaryDirectory() as tmpdir:
        raw_path = os.path.join(tmpdir, "raw.mp3")
        out_path = os.path.join(tmpdir, "out.mp3")

        # Append Wasl token to force full pronunciation of ending vowel/tanween marks
        wasl_text = f"{clean_text} نَعَمْ"
        communicate = edge_tts.Communicate(wasl_text, VOICE, boundary="WordBoundary")

        wb_list = []
        with open(raw_path, "wb") as f:
            async for chunk in communicate.stream():
                if chunk["type"] == "audio":
                    f.write(chunk["data"])
                elif chunk["type"] == "WordBoundary":
                    wb_list.append(chunk)

        if len(wb_list) >= 2:
            target_wb = wb_list[-2]
            next_wb = wb_list[-1]
            end_sec = (target_wb["offset"] + target_wb["duration"]) / 10_000_000
            next_start = next_wb["offset"] / 10_000_000
            cut_time = next_start
            fade_start = max(0, cut_time - 0.03)
            subprocess.run([
                "ffmpeg", "-y", "-ss", "0", "-to", f"{cut_time:.3f}",
                "-i", raw_path,
                "-af", f"afade=t=out:st={fade_start:.3f}:d=0.03",
                "-c:a", "libmp3lame", "-b:a", "128k",
                out_path
            ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

            with open(out_path, "rb") as f:
                sys.stdout.buffer.write(f.read())
        else:
            # Fallback to direct raw output if boundaries are missing
            with open(raw_path, "rb") as f:
                sys.stdout.buffer.write(f.read())

if __name__ == "__main__":
    if len(sys.argv) > 1:
        text = " ".join(sys.argv[1:])
        asyncio.run(synthesize(text))

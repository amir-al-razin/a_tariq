import sys
import os
import asyncio
import subprocess
import tempfile
import edge_tts

VOICE = "ar-SA-HamedNeural"

async def synthesize(text: str):
    clean_text = text.strip()
    if not clean_text:
        return

    communicate = edge_tts.Communicate(clean_text, VOICE)
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            sys.stdout.buffer.write(chunk["data"])

if __name__ == "__main__":
    if len(sys.argv) > 1:
        text = " ".join(sys.argv[1:])
        asyncio.run(synthesize(text))

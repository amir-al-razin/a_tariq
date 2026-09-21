import json
import sys

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

with open("scripts/raw_whisper_result.json", "r", encoding="utf-8") as f:
    d = json.load(f)

words = d.get("words", [])
print(f"Total raw words: {len(words)}")
for i, w in enumerate(words):
    print(f"{i+1:03d} [{w['start']:6.2f} - {w['end']:6.2f}]: {w['word']}")

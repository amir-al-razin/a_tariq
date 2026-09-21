import json
import sys

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

with open("apps/web/src/data/peppa_parsed_transcript.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total Sentences: {len(data)}")
for i, s in enumerate(data):
    w_text = " | ".join(w["vocalized"] for w in s["words"])
    start = s["words"][0]["start"]
    end = s["words"][-1]["end"]
    print(f"{s['sentenceId']} [{start:5.2f}s - {end:5.2f}s]: {w_text}")

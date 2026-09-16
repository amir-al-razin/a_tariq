import json
import sys

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

with open("scripts/raw_whisper_result.json", "r", encoding="utf-8") as f:
    d = json.load(f)

segments = d.get("segments", [])
print(f"Total raw segments: {len(segments)}")
for i, s in enumerate(segments):
    print(f"S{i+1:02d} [{s['start']:6.2f} - {s['end']:6.2f}]: {s['text']}")

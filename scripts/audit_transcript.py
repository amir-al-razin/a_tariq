import json
import re
import sys

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

data = json.load(open(r"D:\Tariq\a_tariq\apps\web\src\data\peppa_parsed_transcript.json", encoding="utf-8"))

print(f"Total sentences: {len(data)}")

arabic_char_re = re.compile(r"[\u0600-\u06FF]")

arabic_in_en = []
all_words = set()

for s_idx, s in enumerate(data):
    words_text = [w["ar"] for w in s["words"]]
    sentence_str = " ".join(words_text)
    
    # Check if this sentence repeats words from previous sentence
    if s_idx > 0:
        prev_words = [w["ar"] for w in data[s_idx - 1]["words"]]
        # Check overlap
        overlap = set(words_text).intersection(set(prev_words))
        if overlap and len(overlap) >= len(words_text) * 0.5:
            print(f"Duplicate/overlapping sentence: {s['sentenceId']} repeats {overlap} from {data[s_idx - 1]['sentenceId']}")
            print(f"  Prev ({data[s_idx-1]['words'][0]['start']}s): {' '.join(prev_words)}")
            print(f"  Curr ({s['words'][0]['start']}s): {sentence_str}")

    for w in s["words"]:
        all_words.add(w["ar"])
        if arabic_char_re.search(w.get("en", "")):
            arabic_in_en.append((w["ar"], w.get("en")))

print(f"\nUnique words: {len(all_words)}")
print(f"Words with Arabic in 'en' meaning: {len(arabic_in_en)}")
for item in arabic_in_en[:20]:
    print(f"  {item[0]} -> {item[1]}")

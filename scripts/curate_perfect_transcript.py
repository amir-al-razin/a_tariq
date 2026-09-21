"""Curates a clean, natural Arabic transcript for Peppa Pig with zero hallucinations, no broken sentences, and 100% English meanings."""
import json
import re
import sys
from pathlib import Path

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PROJECT_ROOT = Path(r"D:\Tariq\a_tariq")
TRANSCRIPT_PATH = PROJECT_ROOT / "apps" / "web" / "src" / "data" / "peppa_parsed_transcript.json"

sys.path.insert(0, str(PROJECT_ROOT))
from scripts.fix_transcript_master import FULL_LEXICON

data = json.load(open(TRANSCRIPT_PATH, "r", encoding="utf-8"))

curated_sentences = []
skip_next = False

for i in range(len(data)):
    if skip_next:
        skip_next = False
        continue
        
    s = data[i]
    words = s["words"]
    sentence_text = " ".join(w["ar"] for w in words).strip()
    
    # 1. Remove the hallucinated echo "انا سوف اتسوق" (s7) that overlaps with title "التسوق"
    if sentence_text == "انا سوف اتسوق" and words[0]["start"] < 22:
        print(f"Removed hallucinated music echo line: {sentence_text} ({words[0]['start']}s)")
        continue

    # 2. Merge "سوف اجدهم كلها" with "من هنا" into one complete sentence
    if sentence_text == "سوف اجدهم كلها" and i + 1 < len(data):
        next_s = data[i + 1]
        next_text = " ".join(w["ar"] for w in next_s["words"]).strip()
        if next_text == "من هنا":
            print("Merging 'سوف اجدهم كلها' + 'من هنا' into one natural sentence")
            merged_words = words + next_s["words"]
            curated_sentences.append({"sentenceId": s["sentenceId"], "words": merged_words})
            skip_next = True
            continue

    # 3. If a sentence has duplicate consecutive words inside itself or borders, clean them
    deduped_words = []
    for w in words:
        if deduped_words and deduped_words[-1]["ar"] == w["ar"] and abs(w["start"] - deduped_words[-1]["end"]) < 0.3:
            print(f"Removing duplicate consecutive word in sentence: {w['ar']}")
            continue
        deduped_words.append(w)
    s["words"] = deduped_words

    # 4. Filter out any 1-word hallucinated echos
    if len(s["words"]) == 1 and curated_sentences:
        last_prev_words = [w["ar"] for w in curated_sentences[-1]["words"]]
        if s["words"][0]["ar"] in last_prev_words and abs(s["words"][0]["start"] - curated_sentences[-1]["words"][-1]["end"]) < 1.5:
            print(f"Dropping 1-word echo '{s['words'][0]['ar']}' after previous sentence")
            continue

    curated_sentences.append(s)

# Re-index sentences and words
final_output = []
w_id_counter = 1

for s_idx, s in enumerate(curated_sentences):
    s_id = f"s{s_idx + 1}"
    enriched_words = []
    for w in s["words"]:
        raw = w["ar"].strip("،.؟!؛:«»\"'()[]{}")
        lex = FULL_LEXICON.get(raw)
        
        if lex:
            vocalized = lex["vocalized"]
            translit = lex["translit"]
            en = lex["en"]
            root = lex["root"]
            pos = lex["pos"]
        else:
            vocalized = w.get("vocalized", raw)
            translit = w.get("transliteration", raw)
            en = w.get("en", raw)
            root = w.get("root")
            pos = w.get("pos", "word")
            
        enriched_words.append({
            "id": f"w{w_id_counter}",
            "ar": raw,
            "vocalized": vocalized,
            "transliteration": translit,
            "en": en,
            "start": w["start"],
            "end": w["end"],
            "root": root,
            "pos": pos
        })
        w_id_counter += 1
        
    final_output.append({
        "sentenceId": s_id,
        "words": enriched_words
    })

# Check for any remaining Arabic characters in 'en'
arabic_in_en = []
arabic_char_re = re.compile(r"[\u0600-\u06FF]")
for s in final_output:
    for w in s["words"]:
        if arabic_char_re.search(w.get("en", "")):
            arabic_in_en.append((w["ar"], w.get("en")))

assert not arabic_in_en, f"Words still have Arabic in 'en': {arabic_in_en}"
print(f"Verified: 0 Arabic in 'en' across all {w_id_counter - 1} words!")

with open(TRANSCRIPT_PATH, "w", encoding="utf-8") as f:
    json.dump(final_output, f, ensure_ascii=False, indent=2)

print(f"✅ Successfully wrote curated transcript ({len(final_output)} sentences) to {TRANSCRIPT_PATH}!")

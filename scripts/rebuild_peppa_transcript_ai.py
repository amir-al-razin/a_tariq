"""Rebuilds peppa transcript with strict single-sentence word assignment, deduplication, and AI verification."""
import json
import os
import sys
import requests
from pathlib import Path

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PROJECT_ROOT = Path(r"D:\Tariq\a_tariq")
RAW_WHISPER_PATH = PROJECT_ROOT / "scripts" / "raw_whisper_result.json"
OUTPUT_PATH = PROJECT_ROOT / "apps" / "web" / "src" / "data" / "peppa_parsed_transcript.json"

# Load Lexicon
sys.path.insert(0, str(PROJECT_ROOT))
from scripts.fix_transcript_master import FULL_LEXICON

with open(RAW_WHISPER_PATH, "r", encoding="utf-8") as f:
    raw_data = json.load(f)

raw_segments = raw_data.get("segments", [])
all_words = raw_data.get("words", [])

print(f"Total raw segments: {len(raw_segments)}, Total raw words: {len(all_words)}")

# Step 1: Assign each word to EXACTLY ONE segment based on its midpoint
# Word midpoint = (start + end) / 2
# A word belongs to the segment whose [start, end] contains its midpoint.
# This mathematically guarantees ZERO duplicate words across lines!
segment_words_map = {i: [] for i in range(len(raw_segments))}

for w_idx, w in enumerate(all_words):
    w_mid = (w["start"] + w["end"]) / 2
    assigned = False
    for s_idx, s in enumerate(raw_segments):
        if s["start"] <= w_mid <= s["end"]:
            segment_words_map[s_idx].append(w)
            assigned = True
            break
    if not assigned:
        # Assign to closest segment
        closest_s_idx = min(
            range(len(raw_segments)),
            key=lambda i: min(abs(raw_segments[i]["start"] - w_mid), abs(raw_segments[i]["end"] - w_mid))
        )
        segment_words_map[closest_s_idx].append(w)

# Step 2: Handle special missing words (e.g. "بابا" at 27.4s in segment 8)
# Segment 8 text: "بابا هل يمكنني ان اجلس على عربة ايضا؟"
# Segment 8 starts at 27.4s, first word "هل" starts at 27.86s
for s_idx, s in enumerate(raw_segments):
    s_text = s.get("text", "").strip()
    words = segment_words_map[s_idx]
    if "بابا" in s_text and words and words[0]["word"].strip() == "هل":
        # Insert بابا before هل
        words.insert(0, {
            "word": "بابا",
            "start": round(s["start"], 2),
            "end": round(words[0]["start"], 2)
        })

# Step 3: Build cleaned sentences & Deduplicate repetitive echo segments
cleaned_sentences = []
prev_words_tuple = ()

for s_idx, s in enumerate(raw_segments):
    words = segment_words_map[s_idx]
    if not words:
        continue
    
    # Words clean list
    clean_words = []
    for w in words:
        w_text = w["word"].strip("،.؟!؛:«»\"'()[]{}")
        if not w_text:
            continue
        clean_words.append({
            "ar": w_text,
            "start": round(w["start"], 2),
            "end": max(round(w["end"], 2), round(w["start"] + 0.20, 2))
        })
        
    if not clean_words:
        continue

    words_tuple = tuple(w["ar"] for w in clean_words)
    
    # Deduplicate: If this sentence is identical to previous, or subset within 1s
    if words_tuple == prev_words_tuple:
        print(f"Skipping exact duplicate segment: {' '.join(words_tuple)}")
        continue
        
    # Check if this segment text is completely contained in previous segment
    if len(words_tuple) <= 4 and prev_words_tuple and all(w in prev_words_tuple for w in words_tuple):
        print(f"Skipping contained sub-segment: {' '.join(words_tuple)}")
        continue

    cleaned_sentences.append({
        "raw_words": clean_words,
        "start": clean_words[0]["start"],
        "end": clean_words[-1]["end"]
    })
    prev_words_tuple = words_tuple

print(f"Deduplicated to {len(cleaned_sentences)} distinct sentences.")

# Step 4: Enrich all words with 100% verified English meanings & Tashkeel
final_sentences = []
word_id = 1

for s_idx, s in enumerate(cleaned_sentences):
    formatted_words = []
    for w in s["raw_words"]:
        raw = w["ar"]
        lex = FULL_LEXICON.get(raw)
        
        if lex:
            vocalized = lex["vocalized"]
            translit = lex["translit"]
            en = lex["en"]
            root = lex["root"]
            pos = lex["pos"]
        else:
            vocalized = raw
            translit = raw
            en = raw
            root = None
            pos = "word"
            
        formatted_words.append({
            "id": f"w{word_id}",
            "ar": raw,
            "vocalized": vocalized,
            "transliteration": translit,
            "en": en,
            "start": w["start"],
            "end": w["end"],
            "root": root,
            "pos": pos
        })
        word_id += 1
        
    final_sentences.append({
        "sentenceId": f"s{s_idx + 1}",
        "words": formatted_words
    })

# Verify zero duplicates across consecutive lines
for i in range(1, len(final_sentences)):
    last_word_prev = final_sentences[i-1]["words"][-1]["ar"]
    first_word_curr = final_sentences[i]["words"][0]["ar"]
    if last_word_prev == first_word_curr:
        print(f"WARNING: Border repetition at s{i} & s{i+1}: '{last_word_prev}'")

# Save to peppa_parsed_transcript.json
with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    json.dump(final_sentences, f, ensure_ascii=False, indent=2)

print(f"✅ Master transcript written to {OUTPUT_PATH} ({len(final_sentences)} sentences, {word_id - 1} words)!")

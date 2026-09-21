"""Pilot test runner to verify components and test Peppa Pig Arabic transcription."""
import sys
import json
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

from .cache import WordCache
from .enricher import ArabicEnricher
from .vad_filter import detect_speech_intervals
from .vocal_separator import isolate_vocals


def test_cache_and_enricher():
    print("\n--- [Test 1] Testing Word Cache & Semantic Enrichment ---")
    cache = WordCache()
    test_words = ["أنا", "بيبا", "بيغ", "وهذا", "أخي", "الصغير", "جورج"]
    
    mock_segments = [{
        "segment_id": 1,
        "start": 1.20,
        "end": 3.85,
        "text": "أنا بيبا بيغ وهذا أخي الصغير جورج",
        "words": [
            {"word": "أنا", "start": 1.20, "end": 1.45},
            {"word": "بيبا", "start": 1.46, "end": 1.80},
            {"word": "بيغ", "start": 1.82, "end": 2.10},
            {"word": "وهذا", "start": 2.15, "end": 2.45},
            {"word": "أخي", "start": 2.50, "end": 2.80},
            {"word": "الصغير", "start": 2.85, "end": 3.30},
            {"word": "جورج", "start": 3.35, "end": 3.80},
        ]
    }]

    enricher = ArabicEnricher(cache=cache)
    enriched = enricher.enrich_segments(mock_segments)
    
    assert len(enriched) == 1
    seg = enriched[0]
    print(f"Arabic Vocalized: {seg['text_vocalized']}")
    print(f"English Translation: {seg['translation_en']}")
    print(f"Enriched Words ({len(seg['words'])}):")
    for w in seg['words']:
        print(f"  • {w['word_vocalized']} ({w['word_raw']}) -> {w['meaning_en']} [root: {w['root']}, pos: {w['pos']}] | {w['start']}s - {w['end']}s")

    print("✅ Test 1 Passed: Cache & Enricher functional!\n")


if __name__ == "__main__":
    test_cache_and_enricher()

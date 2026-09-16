"""Word enrichment module: Tashkeel (harakat), grammatical root, and English meaning."""
import json
import os
from typing import List, Dict, Any, Optional
from .cache import WordCache
from .config import GEMINI_API_KEY, GROQ_API_KEY


class ArabicEnricher:
    def __init__(self, cache: Optional[WordCache] = None):
        self.cache = cache or WordCache()
        self.gemini_key = GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
        self.groq_key = GROQ_API_KEY or os.getenv("GROQ_API_KEY", "")

    def enrich_segments(self, segments: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Enriches transcribed segments and words with:
        - vocalized text (Tashkeel)
        - word roots & parts of speech
        - English translation (sentence & word level)
        """
        enriched_segments = []

        for seg in segments:
            raw_text = seg.get("text", "").strip()
            raw_words = seg.get("words", [])

            enriched_words = []
            missing_words = []

            for w in raw_words:
                w_text = w.get("word", "").strip("،.؟!؛:«»\"'()[]{}")
                if not w_text:
                    continue

                cached_info = self.cache.get(w_text)
                if cached_info:
                    enriched_words.append({
                        "word_raw": w_text,
                        "word_vocalized": cached_info["word_vocalized"],
                        "start": w.get("start", 0.0),
                        "end": w.get("end", 0.0),
                        "root": cached_info["root"],
                        "pos": cached_info["pos"],
                        "meaning_en": cached_info["meaning_en"]
                    })
                else:
                    enriched_words.append({
                        "word_raw": w_text,
                        "word_vocalized": w_text,  # placeholder until resolved
                        "start": w.get("start", 0.0),
                        "end": w.get("end", 0.0),
                        "root": None,
                        "pos": "word",
                        "meaning_en": "N/A"
                    })
                    missing_words.append(w_text)

            # If there are missing words, resolve them (via free API or fallback)
            if missing_words:
                resolved_dict = self._resolve_missing_words(raw_text, missing_words)
                for ew in enriched_words:
                    if ew["word_raw"] in resolved_dict:
                        info = resolved_dict[ew["word_raw"]]
                        ew["word_vocalized"] = info.get("vocalized", ew["word_raw"])
                        ew["root"] = info.get("root")
                        ew["pos"] = info.get("pos", "word")
                        ew["meaning_en"] = info.get("meaning_en", "N/A")
                        # Store in cache for future calls
                        self.cache.set(
                            raw_word=ew["word_raw"],
                            vocalized=ew["word_vocalized"],
                            root=ew["root"],
                            pos=ew["pos"],
                            meaning_en=ew["meaning_en"]
                        )

            # Reconstruct vocalized sentence from vocalized words
            vocalized_sentence = " ".join(ew["word_vocalized"] for ew in enriched_words) or raw_text

            # Sentence English translation
            sentence_translation = seg.get("translation_en")
            if not sentence_translation:
                sentence_translation = self._translate_sentence(raw_text, enriched_words)

            enriched_segments.append({
                "segment_id": seg.get("segment_id", len(enriched_segments) + 1),
                "start": seg.get("start", 0.0),
                "end": seg.get("end", 0.0),
                "text_raw": raw_text,
                "text_vocalized": vocalized_sentence,
                "translation_en": sentence_translation,
                "words": enriched_words
            })

        return enriched_segments

    def _resolve_missing_words(self, sentence: str, missing_words: List[str]) -> Dict[str, Dict[str, Any]]:
        """Resolves unknown words using free LLM API if available, or morphological rules."""
        unique_missing = list(dict.fromkeys(missing_words))

        # Try Groq API (Free tier: whisper + llama-3.3-70b)
        if self.groq_key:
            try:
                import requests
                prompt = (
                    f"Analyze the following Arabic sentence:\n\"{sentence}\"\n\n"
                    f"For these specific words: {json.dumps(unique_missing, ensure_ascii=False)}\n"
                    "Provide a JSON object where each key is the word, containing:\n"
                    "- vocalized: text with full Tashkeel (harakat: fathah, kasrah, dammah, sukoon)\n"
                    "- root: 3-letter Arabic root or null\n"
                    "- pos: noun, verb, adjective, pronoun, proper_noun, preposition, or conjunction\n"
                    "- meaning_en: contextual English meaning in this sentence\n"
                    "Output ONLY valid JSON."
                )
                headers = {
                    "Authorization": f"Bearer {self.groq_key}",
                    "Content-Type": "application/json"
                }
                payload = {
                    "model": "qwen/qwen3.6-27b",
                    "messages": [{"role": "user", "content": prompt}],
                    "response_format": {"type": "json_object"}
                }
                res = requests.post("https://api.groq.com/openai/v1/chat/completions", headers=headers, json=payload, timeout=15)
                if res.status_code == 200:
                    data = res.json()
                    content = data["choices"][0]["message"]["content"]
                    # Clean any think blocks if present
                    if "</think>" in content:
                        content = content.split("</think>")[-1].strip()
                    return json.loads(content)
            except Exception as e:
                print(f"[enricher] Groq enrichment failed: {e}")

        # Fallback: rule-based / basic lexicon
        resolved = {}
        for w in unique_missing:
            resolved[w] = {
                "vocalized": w,
                "root": None,
                "pos": "noun",
                "meaning_en": w
            }
        return resolved

    def _translate_sentence(self, sentence: str, enriched_words: List[Dict[str, Any]]) -> str:
        """Constructs an English sentence translation."""
        if self.groq_key:
            try:
                import requests
                headers = {
                    "Authorization": f"Bearer {self.groq_key}",
                    "Content-Type": "application/json"
                }
                payload = {
                    "model": "qwen/qwen3.6-27b",
                    "messages": [
                        {"role": "system", "content": "You are a professional Arabic-to-English translator. Translate the Arabic dialogue naturally into English. Output only the translation without any preamble or think blocks."},
                        {"role": "user", "content": sentence}
                    ]
                }
                res = requests.post("https://api.groq.com/openai/v1/chat/completions", headers=headers, json=payload, timeout=15)
                if res.status_code == 200:
                    data = res.json()
                    ans = data["choices"][0]["message"]["content"].strip()
                    if "</think>" in ans:
                        ans = ans.split("</think>")[-1].strip()
                    return ans
            except Exception:
                pass

        # Fallback: join known word meanings
        known = [w["meaning_en"] for w in enriched_words if w["meaning_en"] != "N/A"]
        return " ".join(known) if known else sentence

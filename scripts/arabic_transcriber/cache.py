"""SQLite cache for storing Arabic word vocalization, roots, parts of speech, and English meanings."""
import sqlite3
from typing import Optional, Dict
from .config import CACHE_DB_PATH

INIT_SCHEMA = """
CREATE TABLE IF NOT EXISTS arabic_words (
    raw_word TEXT PRIMARY KEY,
    vocalized TEXT NOT NULL,
    root TEXT,
    pos TEXT,
    meaning_en TEXT NOT NULL,
    frequency INTEGER DEFAULT 1
);
CREATE INDEX IF NOT EXISTS idx_raw_word ON arabic_words(raw_word);
"""

# Pre-seeded common Arabic words (especially common in cartoons & dialogues)
SEED_WORDS = [
    # Pronouns & Demonstratives
    ("أنا", "أَنَا", "أ-ن-ا", "pronoun", "I / me"),
    ("هذا", "هٰذَا", "ذ-ا", "demonstrative", "this (masc.)"),
    ("هذه", "هٰذِهِ", "ذ-ه", "demonstrative", "this (fem.)"),
    ("ذلك", "ذٰلِكَ", "ذ-ل-ك", "demonstrative", "that (masc.)"),
    ("تلك", "تِلْكَ", "ت-ل-ك", "demonstrative", "that (fem.)"),
    ("هو", "هُوَ", "ه-و", "pronoun", "he / it"),
    ("هي", "هِيَ", "ه-ي", "pronoun", "she / it"),
    ("نحن", "نَحْنُ", "ن-ح-ن", "pronoun", "we"),
    ("أنت", "أَنْتَ", "أ-ن-ت", "pronoun", "you (masc. sing.)"),
    ("أنتِ", "أَنْتِ", "أ-ن-ت", "pronoun", "you (fem. sing.)"),
    # Family & Cartoon characters (Peppa Pig context)
    ("بيبا", "بِيبَا", None, "proper_noun", "Peppa"),
    ("بيغ", "بِيغْ", None, "proper_noun", "Pig"),
    ("جورج", "جُورْج", None, "proper_noun", "George"),
    ("أخي", "أَخِي", "أ-خ-و", "noun", "my brother"),
    ("أختي", "أُخْتِي", "أ-خ-و", "noun", "my sister"),
    ("أبي", "أَبِي", "أ-ب-و", "noun", "my father / Daddy"),
    ("أمي", "أُمِّي", "أ-م-م", "noun", "my mother / Mummy"),
    ("بابا", "بَابَا", None, "noun", "Daddy / Papa"),
    ("ماما", "مَامَا", None, "noun", "Mummy / Mama"),
    ("الصغير", "الصَّغِيرُ", "ص-غ-ر", "adjective", "the little / the young"),
    ("الكبير", "الكَبِيرُ", "ك-ب-ر", "adjective", "the big / the old"),
    ("خنزير", "خِنْزِيرٌ", "خ-ن-ز-ر", "noun", "pig"),
    ("ديناصور", "دِينَاصُور", None, "noun", "dinosaur"),
    ("طين", "طِين", "ط-ي-ن", "noun", "mud"),
    ("بركة", "بِرْكَة", "ب-ر-ك", "noun", "puddle / pond"),
    ("البركة", "البِرْكَةُ", "ب-ر-ك", "noun", "the puddle"),
    ("أحب", "أُحِبُّ", "ح-ب-ب", "verb", "I love / I like"),
    ("يحب", "يُحِبُّ", "ح-ب-ب", "verb", "he loves / he likes"),
    ("تحب", "تُحِبُّ", "ح-ب-ب", "verb", "she loves / she likes"),
    ("قفز", "قَفَزَ", "ق-ف-ز", "verb", "jumped"),
    ("القفز", "القَفْزُ", "ق-ف-ز", "noun", "jumping"),
    ("في", "فِي", None, "preposition", "in / into"),
    ("على", "عَلَى", None, "preposition", "on / upon"),
    ("من", "مِنْ", None, "preposition", "from / of"),
    ("إلى", "إِلَى", None, "preposition", "to / towards"),
    ("نعم", "نَعَمْ", None, "particle", "yes"),
    ("لا", "لَا", None, "particle", "no / not"),
    ("ما", "مَا", None, "interrogative", "what"),
    ("ماذا", "مَاذَا", None, "interrogative", "what (with verbs)"),
    ("هل", "هَلْ", None, "interrogative", "is it / does (question particle)"),
    ("أين", "أَيْنَ", None, "interrogative", "where"),
    ("و", "وَ", None, "conjunction", "and"),
    ("وهذا", "وَهٰذَا", "ذ-ا", "conjunction_demonstrative", "and this"),
    ("وهذه", "وَهٰذِهِ", "ذ-ه", "conjunction_demonstrative", "and this"),
    ("قال", "قَالَ", "ق-و-ل", "verb", "said (he)"),
    ("قالت", "قَالَتْ", "ق-و-ل", "verb", "said (she)"),
    ("ذهب", "ذَهَبَ", "ذ-ه-ب", "verb", "went (he)"),
    ("اليوم", "اليَوْمَ", "ي-و-م", "noun", "today"),
    ("جميل", "جَمِيلٌ", "ج-م-ل", "adjective", "beautiful / lovely"),
    ("جديد", "جَدِيدٌ", "ج-د-د", "adjective", "new"),
]


class WordCache:
    def __init__(self, db_path=CACHE_DB_PATH):
        self.db_path = db_path
        self._init_db()

    def _get_conn(self):
        return sqlite3.connect(str(self.db_path))

    def _init_db(self):
        with self._get_conn() as conn:
            cursor = conn.cursor()
            cursor.executescript(INIT_SCHEMA)
            # Seed initial common words if empty
            cursor.execute("SELECT COUNT(*) FROM arabic_words")
            count = cursor.fetchone()[0]
            if count == 0:
                cursor.executemany(
                    """
                    INSERT OR IGNORE INTO arabic_words 
                    (raw_word, vocalized, root, pos, meaning_en)
                    VALUES (?, ?, ?, ?, ?)
                    """,
                    SEED_WORDS
                )
            conn.commit()

    def get(self, raw_word: str) -> Optional[Dict[str, str]]:
        clean_word = raw_word.strip("،.؟!؛:«»\"'()[]{}")
        with self._get_conn() as conn:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT vocalized, root, pos, meaning_en FROM arabic_words WHERE raw_word = ?",
                (clean_word,)
            )
            row = cursor.fetchone()
            if row:
                return {
                    "word_raw": clean_word,
                    "word_vocalized": row[0],
                    "root": row[1],
                    "pos": row[2],
                    "meaning_en": row[3],
                }
        return None

    def set(self, raw_word: str, vocalized: str, root: Optional[str], pos: Optional[str], meaning_en: str):
        clean_word = raw_word.strip("،.؟!؛:«»\"'()[]{}")
        with self._get_conn() as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO arabic_words (raw_word, vocalized, root, pos, meaning_en, frequency)
                VALUES (?, ?, ?, ?, ?, 1)
                ON CONFLICT(raw_word) DO UPDATE SET
                    vocalized=excluded.vocalized,
                    root=excluded.root,
                    pos=excluded.pos,
                    meaning_en=excluded.meaning_en,
                    frequency=frequency + 1
                """,
                (clean_word, vocalized, root, pos, meaning_en)
            )
            conn.commit()

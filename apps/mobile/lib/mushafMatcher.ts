/**
 * mushafMatcher.ts
 * High-performance Arabic lemma and token normalization matcher.
 * Powers Real-Time Quran Mushaf Illumination and Lexical Vault for Mobile.
 */

// Regex for Arabic diacritical marks (Tashkeel / Harakat / Quranic annotation glyphs)
const HARAKAT_REGEX = /[\u064B-\u065F\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u0640]/g;

// Common prefixes in Quranic Arabic: wa (وَ), fa (فَ), bi (بِ), li (لِ), ka (كَ), al (ال)
const ATTACHED_PREFIXES = ['ال', 'و', 'ف', 'ب', 'ل', 'ك'];

/**
 * Strips all diacritics and vowel marks from Arabic text.
 */
export function stripHarakat(text: string): string {
  if (!text) return '';
  return text
    .replace(/\u0670/g, '')
    .replace(HARAKAT_REGEX, '')
    .trim();
}

/**
 * Normalizes Arabic text for flexible pedagogical matching:
 * - Handles Uthmani dagger alif (waw/ya with dagger alif -> alif as in صلوٰة -> صلاة)
 * - Converts dagger alif to regular alif for defective script matching (e.g. كِتَٰب -> كتاب, رَحْمَٰن -> رحمان)
 * - Strips all Harakat / Tashkeel
 * - Normalizes Alif variants (أ, إ, آ, ٱ -> ا)
 * - Normalizes Taa Marbuta (ة -> ه)
 * - Normalizes Alif Maqsura (ى -> ي)
 * - Normalizes demonstratives (هاذا -> هذا, ذالك -> ذلك, هاذه -> هذه)
 * - Removes non-letter glyphs and punctuation
 */
export function normalizeArabic(text: string): string {
  if (!text) return '';
  // Waw or Ya with dagger alif in Uthmanic script represents an Alif (e.g., صلوٰة -> صلاة)
  let s = text.replace(/[\u0648\u0649]\u0670/g, 'ا');
  // Dagger alif (Alif Khanjariyah \u0670) represents phonemic long vowel 'a' in defective script (e.g., كتٰب -> كتاب)
  s = s.replace(/\u0670/g, 'ا');
  // Strip remaining harakat
  s = s.replace(HARAKAT_REGEX, '').trim();
  // Normalize Alifs
  s = s.replace(/[أإآٱ]/g, 'ا');
  // Normalize Taa Marbuta to Ha
  s = s.replace(/ة/g, 'ه');
  // Normalize Alif Maqsura to Ya
  s = s.replace(/ى/g, 'ي');
  // Clean out common punctuation
  s = s.replace(/[.,/#!$%^&*;:{}=\-_`~()؟،]/g, '');
  // Normalize demonstratives where spoken alif is omitted in standard orthography
  s = s.replace(/^هاذا$/, 'هذا');
  s = s.replace(/^هاذه$/, 'هذه');
  s = s.replace(/^ذالك$/, 'ذلك');

  return s.trim();
}

/**
 * Builds a fast lookup Set of normalized tokens from learned retention items.
 */
export function buildKnownTokensSet(items: { arabic: string; lemma?: string }[]): Set<string> {
  const set = new Set<string>();

  for (const item of items) {
    if (item.arabic) {
      // Add full normalized item
      const norm = normalizeArabic(item.arabic);
      if (norm.length > 0) {
        set.add(norm);
        // Also add individual words if phrase
        const words = norm.split(/\s+/);
        if (words.length > 1) {
          for (const w of words) {
            if (w.length > 1) set.add(w);
          }
        }
      }
    }

    if (item.lemma && item.lemma !== item.arabic) {
      const normLemma = normalizeArabic(item.lemma);
      if (normLemma.length > 0) set.add(normLemma);
    }
  }

  return set;
}

/**
 * Checks whether a given Quranic word token matches any learned vocabulary in the retention set.
 * Handles attached proclitics (wa-, fa-, bi-, li-, al-).
 */
export function isWordMatch(rawUthmaniText: string, knownTokensSet: Set<string>): boolean {
  if (!rawUthmaniText || knownTokensSet.size === 0) return false;

  const normalized = normalizeArabic(rawUthmaniText);
  if (!normalized) return false;

  // Direct match
  if (knownTokensSet.has(normalized)) return true;

  // Prefix stripping check
  for (const prefix of ATTACHED_PREFIXES) {
    if (normalized.startsWith(prefix) && normalized.length > prefix.length + 1) {
      const stem = normalized.slice(prefix.length);
      if (knownTokensSet.has(stem)) return true;
    }
  }

  return false;
}

/**
 * Calculates page-level comprehension percentage based on matched words.
 */
export function calculatePageComprehension(
  words: { text_uthmani: string; char_type_name: 'word' | 'end' }[],
  knownTokensSet: Set<string>
): { totalWords: number; matchedWords: number; percentage: number } {
  const actualWords = words.filter((w) => w.char_type_name === 'word');
  const totalWords = actualWords.length;

  if (totalWords === 0 || knownTokensSet.size === 0) {
    return { totalWords, matchedWords: 0, percentage: 0 };
  }

  let matchedWords = 0;
  for (const word of actualWords) {
    if (isWordMatch(word.text_uthmani, knownTokensSet)) {
      matchedWords++;
    }
  }

  const percentage = Math.round((matchedWords / totalWords) * 100);
  return { totalWords, matchedWords, percentage };
}

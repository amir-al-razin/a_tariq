/**
 * Harakat Fading Engine - Maulana Abu Taher Misbah's Methodology
 * Features a 5-Stage Systematic Harakat Fading FSM (STAGE_0 to STAGE_4) with:
 * 1. Immutable Shaddah preservation across all stages.
 * 2. Homograph disambiguation (anta vs anti with permanent Ta-Kasra, -ka vs -ki pronoun suffixes).
 */

export type HarakatStage = 'STAGE_0' | 'STAGE_1' | 'STAGE_2' | 'STAGE_3' | 'STAGE_4';
export type ArabicFontFamily = 'cairo' | 'tajawal' | 'vazirmatn' | 'noto';

export interface StageConfig {
  stage: HarakatStage;
  level: number; // 0 to 4
  name: string;
  shortDesc: string;
  description: string;
  badge: string;
}

export interface ArabicFontOption {
  id: ArabicFontFamily;
  name: string;
  className: string;
  sample: string;
}

export const ARABIC_FONT_OPTIONS: ArabicFontOption[] = [
  { id: 'cairo', name: 'Cairo', className: 'font-cairo', sample: 'خط القاهرة' },
  { id: 'tajawal', name: 'Tajawal', className: 'font-tajawal', sample: 'خط تجوال' },
  { id: 'vazirmatn', name: 'Vazirmatn', className: 'font-vazirmatn', sample: 'خط وزير متن' },
  { id: 'noto', name: 'Noto Sans Arabic', className: 'font-noto', sample: 'خط نوتو' },
];

export const STAGE_CONFIGS: Record<HarakatStage, StageConfig> = {
  STAGE_0: {
    stage: 'STAGE_0',
    level: 0,
    name: 'Full Vocalization',
    shortDesc: 'Beginner / Full Tashkeel',
    description: 'Complete vowel diacritics on all characters. Provides unconditional phonetic support for foundational reading.',
    badge: 'Stage 0',
  },
  STAGE_1: {
    stage: 'STAGE_1',
    level: 1,
    name: "Ending Tanween / I'rab Fading",
    shortDesc: 'Waqf Stop Training',
    description: 'Final inflectional endings and tanween are faded to train natural stop reading (Waqf) while preserving internal root vowels and Shaddah.',
    badge: 'Stage 1',
  },
  STAGE_2: {
    stage: 'STAGE_2',
    level: 2,
    name: 'Pattern & Article Fading',
    shortDesc: 'Structural Removal',
    description: 'Predictable prefixes (such as the definite article Alif-Lam) and standard structural particles drop their harakat.',
    badge: 'Stage 2',
  },
  STAGE_3: {
    stage: 'STAGE_3',
    level: 3,
    name: 'Disambiguation / Root Only',
    shortDesc: 'Selective Diacritics',
    description: 'Standard words transition to unvoweled form while preserving selective diacritics on ambiguous homographs and irregular patterns.',
    badge: 'Stage 3',
  },
  STAGE_4: {
    stage: 'STAGE_4',
    level: 4,
    name: 'Zero Harakat Mastery',
    shortDesc: 'Native Authentic Reading',
    description: '100% unvoweled authentic reading text, preserving only immutable Shaddah and permanent gender homograph indicators.',
    badge: 'Stage 4',
  },
};

const STAGE_SEQUENCE: HarakatStage[] = ['STAGE_0', 'STAGE_1', 'STAGE_2', 'STAGE_3', 'STAGE_4'];

// Regex matching short vowels and tanween, EXCLUDING Shaddah (U+0651)
// Includes Fathatan, Dammatan, Kasratan, Fatha, Damma, Kasra, Sukun, Dagger Alif
const VOWELS_REGEX = /[\u064B-\u0650\u0652\u0670]/g;

// Common structural particles, pronouns, and prepositions that lose diacritics in STAGE_2+
const STRUCTURAL_WORDS_BASE = new Set([
  'هذا', 'هذه', 'ذلك', 'تلك', 'أولئك', 'هؤلاء',
  'في', 'من', 'إلى', 'على', 'عن', 'مع', 'عند',
  'هو', 'هي', 'هم', 'هن', 'نحن', 'أنا',
  'الذي', 'التي', 'الذين', 'اللاتي',
  'ما', 'هل', 'أين', 'كيف', 'متى', 'كم', 'كل',
  'بين', 'تحت', 'فوق', 'أمام', 'خلف', 'قبل', 'بعد',
  'هنا', 'هناك', 'نعم', 'لا', 'بل', 'أو', 'ثم',
]);

// Words requiring internal vowel disambiguation preserved through Stage 3
const AMBIGUOUS_DISAMBIGUATION_WORDS = new Set([
  'كتبا', 'كتب', 'ظلمة', 'مجتهد', 'علم', 'عَلَمٌ', 'عَلَم', 'وسخ', 'وسخات', 'مصباح', 'مظلة', 'قلنسوة', 'عمامة',
]);

/**
 * Helper to strip all vowels from a word while preserving Shaddah (U+0651).
 */
function stripVowelsKeepShaddah(text: string): string {
  return text.replace(VOWELS_REGEX, '');
}

/**
 * Protects critical homographs (anta vs anti, -ka vs -ki) before harakat stripping
 * and returns a function to restore them with appropriate permanent diacritics.
 */
function protectHomographs(word: string): { protectedWord: string; restore: (processed: string) => string } {
  let temp = word;
  const replacements: Array<{ token: string; value: string }> = [];
  
  // Base Arabic characters without diacritics or Shaddah for matching exact pronouns
  const baseLetters = temp.replace(VOWELS_REGEX, '').replace(/\u0651/g, '');

  // 1. Homograph: anta (أنتَ) vs anti (أنتِ) with permanent Ta-Kasra or Ta-Fatha
  if (baseLetters === 'أنت' || baseLetters === 'انت') {
    if (temp.includes('\u062A\u0650') || temp.includes('\u0650')) { // Anti (feminine)
      return {
        protectedWord: temp,
        restore: () => 'أنتِ', // Permanent Ta-Kasra preserved across all stages
      };
    }
    if (temp.includes('\u062A\u064E')) { // Anta (masculine)
      return {
        protectedWord: temp,
        restore: () => 'أنتَ', // Permanent Ta-Fatha preserved across all stages
      };
    }
  }

  // 2. Attached second person pronouns: -ki (-كِ, feminine) vs -ka (-كَ, masculine)
  // Match final Kaf + optional Shaddah + Kasra/Fatha at the end of the word token
  const kafKasraMatch = temp.match(/(\u0643\u0651?\u0650)$/);
  if (kafKasraMatch) {
    const origSuffix = kafKasraMatch[1];
    const token = '§§KAF_KASRA§§';
    temp = temp.slice(0, -origSuffix.length) + token;
    replacements.push({ token, value: origSuffix });
  } else {
    const kafFathaMatch = temp.match(/(\u0643\u0651?\u064E)$/);
    if (kafFathaMatch) {
      const origSuffix = kafFathaMatch[1];
      const token = '§§KAF_FATHA§§';
      temp = temp.slice(0, -origSuffix.length) + token;
      replacements.push({ token, value: origSuffix });
    }
  }

  return {
    protectedWord: temp,
    restore: (processed: string): string => {
      let res = processed;
      for (const r of replacements) {
        res = res.replace(r.token, r.value);
      }
      return res;
    },
  };
}

/**
 * Transforms a single Arabic word according to the requested stage rules.
 */
function transformWord(word: string, stage: HarakatStage): string {
  if (stage === 'STAGE_0') {
    return word;
  }

  const { protectedWord, restore } = protectHomographs(word);

  // In STAGE_4, strip all vowels (preserving Shaddah and protected homographs)
  if (stage === 'STAGE_4') {
    const unvoweled = stripVowelsKeepShaddah(protectedWord);
    return restore(unvoweled);
  }

  // Calculate base unvoweled string for dictionary lookups
  const baseString = stripVowelsKeepShaddah(word).replace(/\u0651/g, '');

  let current = protectedWord;

  // STAGE_1+: Remove final inflectional endings (Tanween and ending short case vowels)
  // Note: Shaddah (U+0651) is retained on final consonant
  // Strip tanween (Fathatan, Dammatan, Kasratan) and ending short vowels from noun/adjective endings
  current = current.replace(/([\u0621-\u064A\u0671-\u06D3])(\u0651?)([\u064B-\u0650])+$/u, '$1$2');
  // If ending in Tanween Fatha with Alif (e.g., كُتُبًا becomes كُتُبا in stop reading)
  current = current.replace(/([\u064B-\u064D])\u0627$/u, '\u0627');

  // STAGE_2+: Remove harakat from structural words and definite article Alif-Lam
  if (stage === 'STAGE_2' || stage === 'STAGE_3') {
    if (STRUCTURAL_WORDS_BASE.has(baseString)) {
      current = stripVowelsKeepShaddah(current);
    } else {
      // Strip vowels from starting definite article Alif-Lam (e.g. اَلْ or الْ or ألْ)
      current = current.replace(/^(اَلْ|أَلْ|الْ|اَل)/u, 'ال');
      current = current.replace(/^(بِالْ|بِاَلْ)/u, 'بال');
      current = current.replace(/^(لِلْ|لِأَلْ)/u, 'لِل');
      current = current.replace(/^(وَالْ|وَاَلْ)/u, 'وال');
    }
  }

  // STAGE_3: Disambiguation / Root Only
  // Keep selective vowels only on ambiguous homographs or irregular root patterns
  if (stage === 'STAGE_3') {
    if (!AMBIGUOUS_DISAMBIGUATION_WORDS.has(baseString) && !AMBIGUOUS_DISAMBIGUATION_WORDS.has(word)) {
      current = stripVowelsKeepShaddah(current);
    }
  }

  return restore(current);
}

/**
 * Core utility function to render Arabic text at a designated Harakat fading stage.
 * Preserves spaces, emojis, English text, and punctuation while processing Arabic word tokens.
 */
export function renderHarakat(text: string, stage: HarakatStage = 'STAGE_0'): string {
  if (!text) return '';
  if (stage === 'STAGE_0') return text;

  // Regex matching contiguous sequences of Arabic letters, diacritics, and Shaddah
  const arabicWordRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+/g;

  return text.replace(arabicWordRegex, (match) => {
    return transformWord(match, stage);
  });
}

/**
 * Harakat Fading FSM Engine Class
 * Manages stage state transitions and text vocalization rendering.
 */
export class HarakatEngine {
  private currentStage: HarakatStage;

  constructor(initialStage: HarakatStage = 'STAGE_0') {
    this.currentStage = initialStage;
  }

  public getStage(): HarakatStage {
    return this.currentStage;
  }

  public setStage(stage: HarakatStage): void {
    if (STAGE_SEQUENCE.includes(stage)) {
      this.currentStage = stage;
    }
  }

  public nextStage(): HarakatStage {
    const idx = STAGE_SEQUENCE.indexOf(this.currentStage);
    if (idx < STAGE_SEQUENCE.length - 1) {
      this.currentStage = STAGE_SEQUENCE[idx + 1];
    }
    return this.currentStage;
  }

  public prevStage(): HarakatStage {
    const idx = STAGE_SEQUENCE.indexOf(this.currentStage);
    if (idx > 0) {
      this.currentStage = STAGE_SEQUENCE[idx - 1];
    }
    return this.currentStage;
  }

  public reset(): void {
    this.currentStage = 'STAGE_0';
  }

  public getConfig(stage?: HarakatStage): StageConfig {
    return STAGE_CONFIGS[stage || this.currentStage];
  }

  public render(text: string, overrideStage?: HarakatStage): string {
    const target = overrideStage || this.currentStage;
    return renderHarakat(text, target);
  }
}

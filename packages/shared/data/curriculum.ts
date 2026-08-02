export type ChunkType =
    | 'vocabulary'
    | 'grammar_rule'
    | 'application'
    | 'q_and_a'
    | 'assessment'
    | 'mixed'
    | 'tarkeeb'
    | 'verb_table'
    | 'idafah_drill'
    | 'paragraph'
    | 'masdar_factory'
    | 'distance_intuition'
    | 'phrase_building';

export type PedagogicalStage =
    | 'stage_1_vocabulary'
    | 'stage_2_distance_intuition'
    | 'stage_3_phrase_building'
    | 'stage_4_conversational_drills';

// ─────────────────────────────────────────────
// Payload types (typed for engine templates)
// ─────────────────────────────────────────────

export interface VocabWord {
    id: number;
    /** Arabic with full diacritics (harakat) - exactly as in the book */
    ar: string;
    /** Transliteration */
    romanized: string;
    /** English meaning */
    en: string;
    /** Secondary language translation - stored but not rendered (multilingual future use) */
    bn?: string;
    emoji?: string;
    imageUrl?: string;
    /** Grammatical gender intuited from phonetics and form (e.g. masculine vs feminine ta-marbuta) */
    gender?: 'masculine' | 'feminine' | 'neutral' | 'pair';
    /** Vocabulary classification Category (e.g. 'noun', 'adjective', 'demonstrative_pronoun', 'household', 'academic') */
    category?: string;
    /** Visual cue representing object or concept directly to avoid reliance on English translation */
    visualCue?: string;
}

export interface GrammarRule {
    label: string;
    labelBn?: string;
    arabic: string;
    romanized: string;
    meaning: string;
    meaningBn?: string;
    examples?: { ar: string; en: string; bn?: string }[];
}

export interface ApplicationItem {
    emoji: string;
    imageUrl?: string;
    ar: string;
    en: string;
    bn?: string;
}

export interface QAItem {
    emoji: string;
    imageUrl?: string;
    question_ar: string;
    question_en: string;
    question_bn?: string;
    correct_ar: string;
    correct_en: string;
    correct_bn?: string;
    options_ar: string[];
    /** 'hal' = yes/no (هَلْ), 'a_am' = either/or (أَ...أَمْ), 'general' = open, 'ma' = what (مَا), 'confirmation' = confirmation question */
    questionType?: 'hal' | 'a_am' | 'general' | 'ma' | 'confirmation';
    explanation?: string;
    gender?: 'masculine' | 'feminine';
}

/** Stage 2: Distance & Pronoun Intuition pairing (near vs far spatial pointing) */
export interface DistancePairingItem {
    id?: number;
    pronounAr: string;        // e.g. 'هَذَا' or 'ذَلِكَ' / 'هَذِهِ' or 'تِلْكَ'
    pronounRomanized: string; // e.g. 'hādhā', 'dhālika'
    distance: 'near' | 'far'; // Spatial relationship
    gender: 'masculine' | 'feminine'; // Intuitive matching without formal jargon
    nounAr?: string;          // Optional paired concrete noun (e.g. 'كِتَابٌ')
    exampleAr: string;        // Full intuitive demonstration (e.g. 'هَذَا كِتَابٌ')
    exampleEn: string;        // English translation
    exampleBn?: string;
    emoji?: string;
    imageUrl?: string;
}

/** Stage 3: Instinctive Phrase Building item (combining demonstrative + noun + optional adjective) */
export interface PhraseBuilderItem {
    id?: number;
    demonstrativeAr?: string; // e.g. 'هَذَا', 'ذَلِكَ'
    nounAr: string;           // Concrete noun (e.g. 'مَسْجِدٌ', 'كُرَّاسَةٌ')
    adjectiveAr?: string;     // Optional matching adjective (e.g. 'جَدِيدٌ', 'صَغِيرَةٌ')
    completePhraseAr: string; // Combined full statement (e.g. 'هَذَا مَسْجِدٌ جَدِيدٌ')
    translationEn: string;    // English translation
    translationBn?: string;
    gender: 'masculine' | 'feminine';
    emoji?: string;
    imageUrl?: string;
}

/** A single node in a Tarkeeb (sentence-diagram) tree */
export interface TarkeebNode {
    label: string;    // grammatical role in Arabic (مُبْتَدَأ, خَبَر, مَوْصُوف, صِفَة…)
    labelEn: string;  // English label (Subject, Predicate, Qualified Noun, Adjective…)
    labelBn?: string; // Bangla label
    text: string;     // the Arabic word(s)
    children?: TarkeebNode[];
}

export interface TarkeebItem {
    sentence: string;            // full Arabic sentence
    sentenceEn: string;          // English translation
    sentenceBn?: string;         // secondary translation - future use
    type: 'complete' | 'incomplete';
    tree: TarkeebNode[];
}

export interface VerbTableRow {
    root: string;    // verb root (فَعَلَ)
    meaning: string; // English meaning (e.g. "to do")
    meaningBn?: string;
    he?: string;      // هُوَ
    she?: string;     // هِيَ
    youM?: string;    // أَنْتَ
    youF?: string;    // أَنْتِ
    i?: string;       // أَنَا
    theyM?: string;   // هُمْ
    theyF?: string;   // هُنَّ
    youPluralM?: string; // أَنْتُمْ
    youPluralF?: string; // أَنْتُنَّ
    we?: string;      // نَحْنُ
}

export interface MasdarRow {
    masdar: string;
    masdarEn: string;
    masdarBn?: string;
    past: string;
    present: string;
    imperative: string;
    prohibitive: string;
    baab?: string;
}

/** A phrase-pair for Idafah drill: base phrase -> expanded possession phrase */
export interface IdafahPair {
    baseAr: string;      // Arabic base (e.g. "هَذِهِ الغُرْفَةُ")
    baseEn: string;      // English base (e.g. "This room")
    expandedAr: string;  // Arabic answer (e.g. "بَابُ هَذِهِ الغُرْفَةِ")
    expandedEn: string;  // English expanded (e.g. "The door of this room")
    baseBn?: string;     // secondary translation - future use
    expandedBn?: string; // secondary translation - future use
}

/** A paragraph block for reading comprehension */
export interface ParagraphBlock {
    title?: string;       // e.g. "فِي غُرْفَةِ فَاطِمَةَ"
    titleEn?: string;
    titleBn?: string;
    lines: string[];      // Arabic sentences in order
    translationEn?: string; // optional full English translation
    translationBn?: string;
}

export interface ChunkPayload {
    words?: VocabWord[];
    rules?: GrammarRule[];
    items?: ApplicationItem[];
    questions?: QAItem[];
    distancePairings?: DistancePairingItem[];
    phraseBuilderItems?: PhraseBuilderItem[];
    tarkeeb?: TarkeebItem[];
    verbTable?: VerbTableRow[];
    /** tense label shown above verb table: 'past' | 'present' | 'imperative' */
    verbTense?: 'past' | 'present' | 'imperative';
    isPlural?: boolean;
    isDual?: boolean;
    masdarRows?: MasdarRow[];
    masdarColumnOverrides?: {
        imperativeAr?: string;
        imperativeEn?: string;
        prohibitiveAr?: string;
        prohibitiveEn?: string;
    };
    baabLabel?: string;
    idafahPairs?: IdafahPair[];
    paragraphs?: ParagraphBlock[];
    instruction?: string;
    instructionBn?: string;
    text?: string;
    sourceText?: string;
    exercises?: Record<string, unknown>;
}

export interface CurriculumChunk {
    id: string;
    type: ChunkType;
    stage?: PedagogicalStage;
    titleEn: string;
    titleBn?: string;
    titleAr: string;
    payload?: ChunkPayload;
}

export interface LessonData {
    darsNumber: number;
    chunks: CurriculumChunk[];
}

export interface ChapterData {
    id: number;
    titleAr: string;
    titleEn: string;
    titleBn?: string;
    subtitle: string;
    subtitleBn?: string;
    lessons: LessonData[];
}

// ─────────────────────────────────────────────
// Real Pedagogical Data - Let's Learn Arabic
// Diacritics strategy: full tashkeel in early lessons,
// gradually fading per the author's teaching method.
// ─────────────────────────────────────────────
import { lesson01 } from './vol1/ch1/lesson01';
import { lesson02 } from './vol1/ch1/lesson02';
import { lesson03 } from './vol1/ch1/lesson03';
import { lesson04 } from './vol1/ch1/lesson04';
import { lesson05 } from './vol1/ch1/lesson05';
import { lesson06 } from './vol1/ch1/lesson06';
import { lesson07 } from './vol1/ch1/lesson07';
import { lesson08 } from './vol1/ch1/lesson08';
import { lesson09 } from './vol1/ch1/lesson09';

export { lesson01, lesson02, lesson03, lesson04, lesson05, lesson06, lesson07, lesson08, lesson09 };


export const CHAPTERS: ChapterData[] = [
    {
        id: 1,
        titleAr: 'الباب الأول',
        titleEn: 'Chapter One',
        subtitle: 'Beginner-friendly foundations',
        lessons: [
            lesson01,
            lesson02,
            lesson03,
            lesson04,
            lesson05,
            lesson06,
            lesson07,
            lesson08,
            lesson09,
        ],
    },
    {
        id: 2,
        titleAr: 'الباب الثاني',
        titleEn: 'Chapter Two',
        subtitle: 'Q&A Logic, Tarkeeb & Verb Conjugation',
        lessons: [
            {
                darsNumber: 1,
                chunks: [
                    {
                        id: '2-1-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Military & Transport',
                        titleAr: 'مُفْرَدَات: الحَرْب وَالنَّقْل',
                        payload: {
                            words: [
                                { id: 1, ar: 'بَاخِرَةٌ', romanized: 'bākhiratun', en: 'A steamer', bn: 'একটি স্টীমার', emoji: '🚢' },
                                { id: 2, ar: 'مَدْفَعٌ', romanized: "madfa'un", en: 'A cannon', bn: 'একটি কামান', emoji: '💣' },
                                { id: 3, ar: 'حِصْنٌ', romanized: 'hisnun', en: 'A fort', bn: 'একটি দুর্গ', emoji: '🏰' },
                                { id: 4, ar: 'سَهْمٌ', romanized: 'sahmun', en: 'An arrow', bn: 'একটি তীর', emoji: '🏹' },
                                { id: 5, ar: 'بُنْدُقِيَّةٌ', romanized: 'bunduqiyyatun', en: 'A rifle', bn: 'একটি বন্দুক', emoji: '🔫' },
                                { id: 6, ar: 'دَبَّابَةٌ', romanized: 'dabbābatun', en: 'A tank', bn: 'একটি ট্যাঙ্ক', emoji: '🪖' },
                                { id: 7, ar: 'قُنْبَلَةٌ', romanized: 'qunbalatun', en: 'A bomb', bn: 'একটি বোমা', emoji: '💥' },
                                { id: 8, ar: 'سَيْفٌ', romanized: 'sayfun', en: 'A sword', bn: 'একটি তরবারি', emoji: '⚔️' },
                                { id: 9, ar: 'قَوْسٌ', romanized: 'qawsun', en: 'A bow', bn: 'ধনুক', emoji: '🏹' },
                            ],
                        },
                    },
                    {
                        id: '2-1-2',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Kitchen & Dining',
                        titleAr: 'مُفْرَدَات: المَطْبَخ',
                        payload: {
                            words: [
                                { id: 1, ar: 'فِنْجَانٌ', romanized: 'finjānun', en: 'A teacup', bn: 'একটি চায়ের কাপ', emoji: '☕' },
                                { id: 2, ar: 'مِمْلَحَةٌ', romanized: 'mimlahatun', en: 'A salt shaker', bn: 'একটি নিমকদানি', emoji: '🧂' },
                                { id: 3, ar: 'صَحْنٌ', romanized: 'sahnun', en: 'A plate', bn: 'একটি থালা', emoji: '��️' },
                                { id: 4, ar: 'مَطْبَخٌ', romanized: 'matbakhun', en: 'A kitchen', bn: 'একটি রান্নাঘর', emoji: '🍳' },
                                { id: 5, ar: 'مِلْعَقَةٌ', romanized: "mil'aqatun", en: 'A spoon', bn: 'একটি চামচ', emoji: '🥄' },
                                { id: 6, ar: 'كُوْبٌ', romanized: 'kūbun', en: 'A glass', bn: 'একটি গ্লাস', emoji: '🥛' },
                                { id: 7, ar: 'إِبْرِيْقٌ', romanized: 'ibrīqun', en: 'A jug', bn: 'একটি জগ', emoji: '🫖' },
                                { id: 8, ar: 'مَوْقِدٌ', romanized: 'mawqidun', en: 'A stove', bn: 'একটি চুলা', emoji: '🔥' },
                            ],
                        },
                    },
                    {
                        id: '2-1-3',
                        type: 'application',
                        titleEn: 'Image Indication: Near & Far',
                        titleAr: 'الإِشَارَة: هَذَا / تِلْكَ / ذَلِكَ',
                        payload: {
                            items: [
                                { emoji: '🕌', ar: 'هَذَا مَسْجِدٌ', en: 'This is a mosque' },
                                { emoji: '🏫', ar: 'تِلْكَ مَدْرَسَةٌ', en: 'That is a madrasa' },
                                { emoji: '📏', ar: 'هَذِهِ مِسْطَرَةٌ', en: 'This is a ruler' },
                                { emoji: '🏠', ar: 'ذَلِكَ بَيْتٌ', en: 'That is a house' },
                                { emoji: '✈️', ar: 'هَذِهِ طَائِرَةٌ', en: 'This is an airplane' },
                                { emoji: '🪖', ar: 'تِلْكَ دَبَّابَةٌ', en: 'That is a tank' },
                                { emoji: '💣', ar: 'هَذَا مَدْفَعٌ', en: 'This is a cannon' },
                                { emoji: '🏹', ar: 'ذَلِكَ سَهْمٌ', en: 'That is an arrow' },
                                { emoji: '🏹', ar: 'هَذِهِ قَوْسٌ', en: 'This is a bow' },
                                { emoji: '🚢', ar: 'تِلْكَ بَاخِرَةٌ', en: 'That is a steamer' },
                                { emoji: '⚔️', ar: 'ذَلِكَ سَيْفٌ', en: 'That is a sword' },
                            ],
                        },
                    },
                    {
                        id: '2-1-4',
                        type: 'grammar_rule',
                        titleEn: 'General Questions (هَلْ)',
                        titleAr: 'سُؤَالٌ عَامٌ',
                        payload: {
                            instruction: 'شُدُهُ বোঝার জন্য - Yes/No questions using هَلْ. Answer with نَعَمْ (yes) or لَا (no).',
                            rules: [
                                {
                                    label: 'سُؤَالٌ عَامٌ - General Question',
                                    arabic: 'هَلْ',
                                    romanized: 'hal',
                                    meaning: 'Is / Are? (Yes/No question particle)',
                                    examples: [
                                        { ar: 'هَلْ هَذَا قَلَمٌ ؟ - نَعَمْ .. هَذَا قَلَمٌ', en: 'Is this a pen? - Yes, this is a pen.' },
                                        { ar: 'هَلْ هَذَا مِفْتَاحٌ ؟ - لَا .. هَذَا قُفْلٌ', en: 'Is this a key? - No, this is a lock.' },
                                        { ar: 'هَلْ هَذَا إِبْرِيْقٌ ؟ - نَعَمْ .. هَذَا إِبْرِيْقٌ', en: 'Is this a jug? - Yes, this is a jug.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '2-1-5',
                        type: 'grammar_rule',
                        titleEn: 'Special Questions (أَ...أَمْ)',
                        titleAr: 'سُؤَالٌ خَاصٌّ',
                        payload: {
                            instruction: 'Either/Or questions using أَ...أَمْ. Answer by stating the correct choice directly.',
                            rules: [
                                {
                                    label: 'سُؤَالٌ خَاصٌّ - Special Question',
                                    arabic: 'أَ ... أَمْ',
                                    romanized: 'a ... am',
                                    meaning: 'Is it X or Y? (Choice question)',
                                    examples: [
                                        { ar: 'أَ قَلَمٌ هَذَا أَمْ مِفْتَاحٌ ؟ - قَلَمٌ', en: 'Is this a pen or a key? - A pen.' },
                                        { ar: 'أَ مِفْتَاحٌ هَذَا أَمْ قَلَمٌ ؟ - قَلَمٌ', en: 'Is this a key or a pen? - A pen.' },
                                        { ar: 'أَ مِسْطَرَةٌ هَذِهِ أَمْ قَلَمٌ ؟ - قَلَمٌ', en: 'Is this a ruler or a pen? - A pen.' },
                                        { ar: 'أَ هَذَا قَلَمٌ أَمْ ذَلِكَ ؟ - ذَلِكَ', en: 'Is this a pen or that? - That.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '2-1-6',
                        type: 'q_and_a',
                        titleEn: 'Q&A Practice: هَلْ & أَ...أَمْ',
                        titleAr: 'تَمْرِين: السُّؤَال وَالجَوَاب',
                        payload: {
                            questions: [
                                { emoji: '🖊️', question_ar: 'هَلْ هَذَا قَلَمٌ ؟', question_en: 'Is this a pen?', correct_ar: 'نَعَمْ .. هَذَا قَلَمٌ', correct_en: 'Yes, this is a pen.', options_ar: ['نَعَمْ .. هَذَا قَلَمٌ', 'لَا .. هَذَا مِفْتَاحٌ', 'لَا .. هَذَا قُفْلٌ'], questionType: 'hal' },
                                { emoji: '🔒', question_ar: 'هَلْ هَذَا مِفْتَاحٌ ؟', question_en: 'Is this a key?', correct_ar: 'لَا .. هَذَا قُفْلٌ', correct_en: 'No, this is a lock.', options_ar: ['نَعَمْ .. هَذَا مِفْتَاحٌ', 'لَا .. هَذَا قُفْلٌ', 'لَا .. هَذَا قَلَمٌ'], questionType: 'hal' },
                                { emoji: '🥄', question_ar: 'أَ مِلْعَقَةٌ هَذِهِ أَمْ مِمْلَحَةٌ ؟', question_en: 'Is this a spoon or a salt shaker?', correct_ar: 'مِلْعَقَةٌ', correct_en: 'A spoon.', options_ar: ['مِلْعَقَةٌ', 'مِمْلَحَةٌ', 'صَحْنٌ'], questionType: 'a_am' },
                                { emoji: '🚢', question_ar: 'أَ بَاخِرَةٌ تِلْكَ أَمْ طَائِرَةٌ ؟', question_en: 'Is that a steamer or an airplane?', correct_ar: 'بَاخِرَةٌ', correct_en: 'A steamer.', options_ar: ['بَاخِرَةٌ', 'طَائِرَةٌ', 'دَبَّابَةٌ'], questionType: 'a_am' },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 2,
                chunks: [
                    {
                        id: '2-2-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Adjectives (Opposites)',
                        titleAr: 'مُفْرَدَات: الصِّفَات',
                        payload: {
                            words: [
                                { id: 1, ar: 'طَازَجٌ / طَازَجَةٌ', romanized: 'tāzajun / tāzajatun', en: 'Fresh (m/f)', bn: 'তাজা', emoji: '🌿' },
                                { id: 2, ar: 'بَايِتٌ / بَايِتَةٌ', romanized: 'bāyitun / bāyitatun', en: 'Stale (m/f)', bn: 'বাসি', emoji: '🍞' },
                                { id: 3, ar: 'خَالِصٌ / خَالِصَةٌ', romanized: 'khāliṣun / khāliṣatun', en: 'Pure (m/f)', bn: 'খাঁটি', emoji: '✨' },
                                { id: 4, ar: 'فَاسِدٌ / فَاسِدَةٌ', romanized: 'fāsidun / fāsidatun', en: 'Spoiled (m/f)', bn: 'নষ্ট', emoji: '🤢' },
                                { id: 5, ar: 'بَارِدٌ / بَارِدَةٌ', romanized: 'bāridun / bāridatun', en: 'Cold (m/f)', bn: 'ঠাণ্ডা', emoji: '🧊' },
                                { id: 6, ar: 'حَارٌّ / حَارَّةٌ', romanized: 'ḥārrun / ḥārratun', en: 'Hot (m/f)', bn: 'গরম', emoji: '🔥' },
                                { id: 7, ar: 'غَالٍ / غَالِيَةٌ', romanized: 'ghālin / ghāliyatun', en: 'Expensive (m/f)', bn: 'দামী', emoji: '💎' },
                                { id: 8, ar: 'قَلِيلٌ / قَلِيلَةٌ', romanized: 'qalīlun / qalīlatun', en: 'Few/Little (m/f)', bn: 'কম', emoji: '🔽' },
                                { id: 9, ar: 'كَثِيرٌ / كَثِيرَةٌ', romanized: 'kathīrun / kathīratun', en: 'Many/Much (m/f)', bn: 'বেশী', emoji: '🔼' },
                            ],
                        },
                    },
                    {
                        id: '2-2-2',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Nature & Food',
                        titleAr: 'مُفْرَدَات: الطَّبِيعَة وَالطَّعَام',
                        payload: {
                            words: [
                                { id: 1, ar: 'سَمَكَةٌ', romanized: 'samakatun', en: 'A fish', bn: 'একটি মাছ', emoji: '🐟' },
                                { id: 2, ar: 'بَيْضَةٌ', romanized: 'bayḍatun', en: 'An egg', bn: 'একটি ডিম', emoji: '🥚' },
                                { id: 3, ar: 'لَبَنٌ', romanized: 'labanun', en: 'Milk', bn: 'দুধ', emoji: '🥛' },
                                { id: 4, ar: 'عَسَلٌ', romanized: "'asalun", en: 'Honey', bn: 'মধু', emoji: '🍯' },
                                { id: 5, ar: 'خُبْزٌ', romanized: 'khubzun', en: 'Bread', bn: 'রুটি', emoji: '🍞' },
                                { id: 6, ar: 'لَحْمٌ', romanized: 'laḥmun', en: 'Meat', bn: 'গোশত', emoji: '🥩' },
                                { id: 7, ar: 'شَجَرَةٌ', romanized: 'shajaratun', en: 'A tree', bn: 'একটি গাছ', emoji: '🌳' },
                                { id: 8, ar: 'زَهْرَةٌ', romanized: 'zahratun', en: 'A flower', bn: 'একটি ফুল', emoji: '🌸' },
                                { id: 9, ar: 'غَابَةٌ', romanized: 'ghābatun', en: 'A forest', bn: 'একটি বন', emoji: '🌲' },
                                { id: 10, ar: 'جَبَلٌ', romanized: 'jabalun', en: 'A mountain', bn: 'একটি পাহাড়', emoji: '⛰️' },
                            ],
                        },
                    },
                    {
                        id: '2-2-3',
                        type: 'grammar_rule',
                        titleEn: 'Noun-Adjective Agreement (Mawsuf & Sifat)',
                        titleAr: 'المَوْصُوف وَالصِّفَة',
                        payload: {
                            rules: [
                                {
                                    label: 'Rule: Adjective follows & matches noun in gender',
                                    arabic: 'مَوْصُوف + صِفَة',
                                    romanized: 'mawṣūf + ṣifah',
                                    meaning: 'The adjective (Sifah) must follow and match the noun (Mawsuf) in gender.',
                                    examples: [
                                        { ar: 'لَحْمٌ طَازَجٌ', en: 'Fresh meat (masc. noun + masc. adj.)' },
                                        { ar: 'سَمَكَةٌ طَازَجَةٌ', en: 'A fresh fish (fem. noun + fem. adj.)' },
                                        { ar: 'عَسَلٌ خَالِصٌ', en: 'Pure honey' },
                                        { ar: 'بَيْضَةٌ فَاسِدَةٌ', en: 'A spoiled egg' },
                                        { ar: 'قِطَارٌ سَرِيعٌ', en: 'A fast train' },
                                        { ar: 'دَبَّابَةٌ سَرِيعَةٌ', en: 'A fast tank' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '2-2-4',
                        type: 'application',
                        titleEn: 'Descriptive Sentences with Adjectives',
                        titleAr: 'جُمَل وَصْفِيَّة',
                        payload: {
                            items: [
                                { emoji: '🥄', ar: 'هَذِهِ مِلْعَقَةٌ صَغِيرَةٌ', en: 'This is a small spoon.' },
                                { emoji: '🥛', ar: 'ذَلِكَ كُوبٌ كَبِيرٌ - فِيهِ مَاءٌ بَارِدٌ', en: 'That is a big glass - in it is cold water.' },
                                { emoji: '🌸', ar: 'تِلْكَ زَهْرَةٌ جَمِيلَةٌ', en: 'That is a beautiful flower.' },
                                { emoji: '🔑', ar: 'ذَلِكَ مِفْتَاحٌ صَغِيرٌ', en: 'That is a small key.' },
                                { emoji: '🍽️', ar: 'ذَلِكَ طَعَامٌ حَارٌّ - ذَلِكَ طَعَامٌ لَذِيذٌ', en: 'That is hot food - that is delicious food.' },
                                { emoji: '🐟', ar: 'هَذِهِ السَّمَكَةُ طَازَجَةٌ', en: 'This fish is fresh.' },
                                { emoji: '🕌', ar: 'هَذَا الْمَسْجِدُ كَبِيرٌ وَ جَمِيلٌ', en: 'This mosque is big and beautiful.' },
                            ],
                        },
                    },
                    {
                        id: '2-2-5',
                        type: 'q_and_a',
                        titleEn: 'Q&A: هَلْ with Adjectives',
                        titleAr: 'سُؤَال عَامٌ مَعَ الصِّفَات',
                        payload: {
                            questions: [
                                { emoji: '🖊️', question_ar: 'هَلْ هَذَا قَلَمٌ جَيِّدٌ ؟', question_en: 'Is this a good pen?', correct_ar: 'نَعَمْ .. هَذَا قَلَمٌ جَيِّدٌ', correct_en: 'Yes, this is a good pen.', options_ar: ['نَعَمْ .. هَذَا قَلَمٌ جَيِّدٌ', 'لَا .. هَذَا قَلَمٌ رَدِيءٌ', 'لَا .. هَذَا مِفْتَاحٌ'], questionType: 'hal' },
                                { emoji: '🔑', question_ar: 'هَلْ ذَلِكَ مِفْتَاحٌ كَبِيرٌ ؟', question_en: 'Is that a big key?', correct_ar: 'لَا .. ذَلِكَ مِفْتَاحٌ صَغِيرٌ', correct_en: 'No, that is a small key.', options_ar: ['نَعَمْ .. ذَلِكَ مِفْتَاحٌ كَبِيرٌ', 'لَا .. ذَلِكَ مِفْتَاحٌ صَغِيرٌ', 'لَا .. ذَلِكَ قُفْلٌ'], questionType: 'hal' },
                                { emoji: '🔑', question_ar: 'أَمِفْتَاحٌ كَبِيرٌ هَذَا أَمْ مِفْتَاحٌ صَغِيرٌ ؟', question_en: 'Is this a big key or a small key?', correct_ar: 'مِفْتَاحٌ كَبِيرٌ', correct_en: 'A big key.', options_ar: ['مِفْتَاحٌ كَبِيرٌ', 'مِفْتَاحٌ صَغِيرٌ', 'قُفْلٌ كَبِيرٌ'], questionType: 'a_am' },
                                { emoji: '🌸', question_ar: 'هَلْ هَذِهِ زَهْرَةٌ جَمِيلَةٌ ؟', question_en: 'Is this a beautiful flower?', correct_ar: 'نَعَمْ .. هَذِهِ زَهْرَةٌ جَمِيلَةٌ', correct_en: 'Yes, this is a beautiful flower.', options_ar: ['نَعَمْ .. هَذِهِ زَهْرَةٌ جَمِيلَةٌ', 'لَا .. هَذِهِ شَجَرَةٌ', 'لَا .. هَذِهِ زَهْرَةٌ قَبِيحَةٌ'], questionType: 'hal' },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 3,
                chunks: [
                    {
                        id: '2-3-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: People & Character',
                        titleAr: 'مُفْرَدَات: النَّاس وَالأَخْلَاق',
                        payload: {
                            words: [
                                { id: 1, ar: 'طَبِيبٌ', romanized: 'ṭabībun', en: 'Doctor', bn: 'চিকিৎসক', emoji: '👨‍⚕️' },
                                { id: 2, ar: 'مَرِيضٌ', romanized: 'marīḍun', en: 'Patient (sick)', bn: 'রোগী', emoji: '🤒' },
                                { id: 3, ar: 'أَمِينٌ', romanized: 'amīnun', en: 'Trustworthy', bn: 'বিশ্বস্ত', emoji: '🤝' },
                                { id: 4, ar: 'سَخِيٌّ', romanized: 'sakhiyyun', en: 'Generous', bn: 'দানশীল', emoji: '🎁' },
                                { id: 5, ar: 'بَخِيلٌ', romanized: 'bakhīlun', en: 'Miserly', bn: 'কৃপণ', emoji: '💰' },
                                { id: 6, ar: 'نَشِيطٌ', romanized: 'nashīṭun', en: 'Active/Energetic', bn: 'উদ্যমী', emoji: '⚡' },
                                { id: 7, ar: 'كَسْلَانُ', romanized: 'kaslānu', en: 'Lazy', bn: 'অলস', emoji: '😴' },
                                { id: 8, ar: 'صَادِقٌ', romanized: 'ṣādiqun', en: 'Truthful', bn: 'সত্যবাদী', emoji: '✅' },
                                { id: 9, ar: 'كَاذِبٌ', romanized: 'kādhibun', en: 'Liar', bn: 'মিথ্যাবাদী', emoji: '❌' },
                                { id: 10, ar: 'مُتَوَاضِعٌ', romanized: 'mutawādi-un', en: 'Humble', bn: 'বিনীত', emoji: '🙏' },
                                { id: 11, ar: 'مُتَكَبِّرٌ', romanized: 'mutakabbirun', en: 'Arrogant', bn: 'অহংকারী', emoji: '😤' },
                            ],
                        },
                    },
                    {
                        id: '2-3-2',
                        type: 'grammar_rule',
                        titleEn: 'Negating Adjectives with غَيْرُ',
                        titleAr: 'النَّفْي بِـ غَيْرُ',
                        payload: {
                            rules: [
                                {
                                    label: 'غَيْرُ = non- / un-',
                                    arabic: 'غَيْرُ + صِفَة مَجْرُور',
                                    romanized: 'ghayru + adjective (genitive)',
                                    meaning: 'غَيْرُ negates an adjective. The following adjective takes kasrah (genitive).',
                                    examples: [
                                        { ar: 'مَاهِرٌ ← غَيْرُ مَاهِرٍ', en: 'Skilled → Unskilled' },
                                        { ar: 'مَشْهُورٌ ← غَيْرُ مَشْهُورٍ', en: 'Famous → Unknown' },
                                        { ar: 'رَاشِدٌ لَاعِبٌ مَاهِرٌ وَ أَنْتَ لَاعِبٌ غَيْرُ مَاهِرٍ', en: 'Rashid is a skilled player and you are an unskilled player.' },
                                        { ar: 'هَذَا قِطَارٌ سَرِيعٌ وَ ذَلِكَ قِطَارٌ غَيْرُ سَرِيعٍ', en: 'This is a fast train and that is a non-fast train.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '2-3-3',
                        type: 'application',
                        titleEn: 'Reading: People Descriptions',
                        titleAr: 'قِرَاءَة: وَصْف الأَشْخَاص',
                        payload: {
                            items: [
                                { emoji: '👨‍💼', ar: 'مَاجِدٌ تَاجِرٌ كَبِيرٌ - هُوَ تَاجِرٌ أَمِينٌ', en: 'Majid is a big merchant - he is a trustworthy merchant.' },
                                { emoji: '👩‍⚕️', ar: 'فَاطِمَةُ طَبِيبَةٌ - هِيَ طَبِيبَةٌ مَشْهُورَةٌ', en: 'Fatima is a doctor - she is a famous doctor.' },
                                { emoji: '👨', ar: 'يَا مَحْمُودُ! أَنْتَ رَجُلٌ سَخِيٌّ - قَلْبُكَ وَاسِعٌ', en: 'O Mahmud! You are a generous man - your heart is broad.' },
                                { emoji: '👦', ar: 'هَذَا الوَلَدُ صَادِقٌ وَ ذَلِكَ الوَلَدُ كَاذِبٌ', en: 'This boy is truthful and that boy is a liar.' },
                            ],
                        },
                    },
                    {
                        id: '2-3-4',
                        type: 'q_and_a',
                        titleEn: 'Q&A: هَلْ & أَ...أَمْ with People',
                        titleAr: 'سُؤَال وَجَوَاب: الأَشْخَاص',
                        payload: {
                            questions: [
                                { emoji: '👨‍🏫', question_ar: 'هَلْ هُوَ مُعَلِّمٌ ؟', question_en: 'Is he a teacher?', correct_ar: 'لَا .. هُوَ تِلْمِيذٌ', correct_en: 'No, he is a student.', options_ar: ['نَعَمْ .. هُوَ مُعَلِّمٌ', 'لَا .. هُوَ تِلْمِيذٌ', 'لَا .. هُوَ طَبِيبٌ'], questionType: 'hal' },
                                { emoji: '🤝', question_ar: 'هَلْ أَنْتَ مُسْلِمٌ ؟', question_en: 'Are you a Muslim?', correct_ar: 'نَعَمْ .. أَنَا مُسْلِمٌ', correct_en: 'Yes, I am a Muslim.', options_ar: ['نَعَمْ .. أَنَا مُسْلِمٌ', 'لَا .. أَنَا كَافِرٌ', 'لَا .. أَنَا مُشْرِكٌ'], questionType: 'hal' },
                                { emoji: '👨‍🏫', question_ar: 'أَ تِلْمِيذٌ خَالِدٌ أَمْ مُعَلِّمٌ ؟', question_en: 'Is Khaled a student or a teacher?', correct_ar: 'مُعَلِّمٌ', correct_en: 'A teacher.', options_ar: ['مُعَلِّمٌ', 'تِلْمِيذٌ', 'طَبِيبٌ'], questionType: 'a_am' },
                                { emoji: '🤝', question_ar: 'أَ مُسْلِمٌ أَنْتَ أَمْ مُشْرِكٌ ؟', question_en: 'Are you a Muslim or a polytheist?', correct_ar: 'مُسْلِمٌ', correct_en: 'A Muslim.', options_ar: ['مُسْلِمٌ', 'مُشْرِكٌ', 'كَافِرٌ'], questionType: 'a_am' },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 4,
                chunks: [
                    {
                        id: '2-4-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Animals & Fruits',
                        titleAr: 'مُفْرَدَات: الحَيَوَانَات وَالفَوَاكِه',
                        payload: {
                            words: [
                                { id: 1, ar: 'فِيلٌ', romanized: 'fīlun', en: 'An elephant', bn: 'একটি হাতি', emoji: '🐘' },
                                { id: 2, ar: 'قِرْدٌ', romanized: 'qirdun', en: 'A monkey', bn: 'একটি বানর', emoji: '🐒' },
                                { id: 3, ar: 'ذِئْبٌ', romanized: "dhi'bun", en: 'A wolf', bn: 'একটি নেকড়ে', emoji: '🐺' },
                                { id: 4, ar: 'نَمِرٌ', romanized: 'namirun', en: 'A tiger', bn: 'একটি বাঘ', emoji: '🐯' },
                                { id: 5, ar: 'ظَبْيٌ', romanized: 'ẓabyun', en: 'A deer', bn: 'একটি হরিণ', emoji: '🦌' },
                                { id: 6, ar: 'غُرَابٌ', romanized: 'ghurābun', en: 'A crow', bn: 'একটি কাক', emoji: '🐦‍⬛' },
                                { id: 7, ar: 'بُلْبُلٌ', romanized: 'bulbulun', en: 'A nightingale', bn: 'বুলবুলি পাখি', emoji: '🐦' },
                                { id: 8, ar: 'تُفَّاحَةٌ', romanized: 'tuffāḥatun', en: 'An apple', bn: 'একটি আপেল', emoji: '🍎' },
                                { id: 9, ar: 'رُمَّانَةٌ', romanized: 'rummānatun', en: 'A pomegranate', bn: 'একটি আনার', emoji: '🍎' },
                                { id: 10, ar: 'بِطِّيخَةٌ', romanized: 'biṭṭīkhatun', en: 'A watermelon', bn: 'একটি তরমুজ', emoji: '🍉' },
                            ],
                        },
                    },
                    {
                        id: '2-4-2',
                        type: 'grammar_rule',
                        titleEn: 'Definite Article: الـ (Al)',
                        titleAr: 'أَدَاة التَّعْرِيف: الـ',
                        payload: {
                            rules: [
                                {
                                    label: 'Adding الـ makes a noun definite',
                                    arabic: 'الـ + اسم',
                                    romanized: 'al + noun',
                                    meaning: 'Adding الـ (al) to a noun makes it definite. The adjective also takes الـ when the noun is definite.',
                                    examples: [
                                        { ar: 'كِتَابٌ مَفْتُوحٌ ← اَلْكِتَابُ الْمَفْتُوحُ', en: 'An open book → The open book' },
                                        { ar: 'مَسْجِدٌ جَمِيلٌ ← اَلْمَسْجِدُ جَمِيلٌ', en: 'A beautiful mosque → The mosque is beautiful' },
                                        { ar: 'اَلْقُفْلُ جَيِّدٌ ← قُفْلٌ جَيِّدٌ', en: 'The lock is good → A good lock' },
                                        { ar: 'اَلتُّفَّاحَةُ حُلْوَةٌ ← تُفَّاحَةٌ حُلْوَةٌ', en: 'The apple is sweet → A sweet apple' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '2-4-3',
                        type: 'tarkeeb',
                        titleEn: 'Tarkeeb: Sentence Diagrams',
                        titleAr: 'تَرْكِيب: تَحْلِيل الجُمْلَة',
                        payload: {
                            tarkeeb: [
                                {
                                    sentence: 'مَسْجِدٌ جَمِيلٌ',
                                    sentenceEn: 'A beautiful mosque',
                                    sentenceBn: 'একটি সুন্দর মসজিদ',
                                    type: 'incomplete',
                                    tree: [
                                        { label: 'مَوْصُوف', labelEn: 'Qualified Noun', text: 'مَسْجِدٌ', children: [] },
                                        { label: 'صِفَة', labelEn: 'Adjective', text: 'جَمِيلٌ', children: [] },
                                    ],
                                },
                                {
                                    sentence: 'هَذَا مَسْجِدٌ جَمِيلٌ',
                                    sentenceEn: 'This is a beautiful mosque.',
                                    sentenceBn: 'এটি একটি সুন্দর মসজিদ।',
                                    type: 'complete',
                                    tree: [
                                        { label: 'مُبْتَدَأ', labelEn: 'Subject', text: 'هَذَا', children: [] },
                                        {
                                            label: 'خَبَر', labelEn: 'Predicate', text: 'مَسْجِدٌ جَمِيلٌ',
                                            children: [
                                                { label: 'مَوْصُوف', labelEn: 'Qualified Noun', text: 'مَسْجِدٌ', children: [] },
                                                { label: 'صِفَة', labelEn: 'Adjective', text: 'جَمِيلٌ', children: [] },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    sentence: 'اَلْمَسْجِدُ جَمِيلٌ',
                                    sentenceEn: 'The mosque is beautiful.',
                                    sentenceBn: 'মসজিদটি সুন্দর।',
                                    type: 'complete',
                                    tree: [
                                        { label: 'مُبْتَدَأ', labelEn: 'Subject (Definite)', text: 'اَلْمَسْجِدُ', children: [] },
                                        { label: 'خَبَر', labelEn: 'Predicate (Indefinite)', text: 'جَمِيلٌ', children: [] },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '2-4-4',
                        type: 'application',
                        titleEn: 'Reading: Animals & Nature',
                        titleAr: 'قِرَاءَة: الحَيَوَانَات وَالطَّبِيعَة',
                        payload: {
                            items: [
                                { emoji: '🐒', ar: 'اَلْقِرْدُ حَيَوَانٌ ذَكِيٌّ وَ الْحِمَارُ حَيَوَانٌ غَبِيٌّ', en: 'The monkey is a clever animal and the donkey is a stupid animal.' },
                                { emoji: '🐦‍⬛', ar: 'اَلْغُرَابُ طَائِرٌ قَبِيحٌ وَ الْبُلْبُلُ طَائِرٌ جَمِيلٌ', en: 'The crow is an ugly bird and the nightingale is a beautiful bird.' },
                                { emoji: '🐘', ar: 'رَأْسُ الْفِيلِ صَغِيرٌ وَ جِسْمُهُ عَظِيمٌ وَ خُرْطُومُهُ طَوِيلٌ', en: "The elephant's head is small, its body is huge, and its trunk is long." },
                                { emoji: '🍉', ar: 'اَلْبِطِّيخَةُ كَبِيرَةٌ وَ حُلْوَةٌ', en: 'The watermelon is big and sweet.' },
                                { emoji: '📖', ar: 'اَلْكِتَابُ صَدِيقُ الْإِنْسَانِ', en: 'The book is the friend of man.' },
                            ],
                        },
                    },
                    {
                        id: '2-4-5',
                        type: 'q_and_a',
                        titleEn: 'Q&A: Animals & Definite Nouns',
                        titleAr: 'سُؤَال وَجَوَاب',
                        payload: {
                            questions: [
                                { emoji: '🐘', question_ar: 'هَلِ الْفِيلُ حَيَوَانٌ كَبِيرٌ ؟', question_en: 'Is the elephant a big animal?', correct_ar: 'نَعَمْ .. الْفِيلُ حَيَوَانٌ كَبِيرٌ', correct_en: 'Yes, the elephant is a big animal.', options_ar: ['نَعَمْ .. الْفِيلُ حَيَوَانٌ كَبِيرٌ', 'لَا .. الْفِيلُ حَيَوَانٌ صَغِيرٌ', 'لَا .. الْفِيلُ طَائِرٌ'], questionType: 'hal' },
                                { emoji: '🐦', question_ar: 'أَ الْبُلْبُلُ طَائِرٌ جَمِيلٌ أَمْ قَبِيحٌ ؟', question_en: 'Is the nightingale a beautiful bird or an ugly one?', correct_ar: 'جَمِيلٌ', correct_en: 'Beautiful.', options_ar: ['جَمِيلٌ', 'قَبِيحٌ', 'صَغِيرٌ'], questionType: 'a_am' },
                                { emoji: '🍎', question_ar: 'هَلِ التُّفَّاحَةُ حُلْوَةٌ ؟', question_en: 'Is the apple sweet?', correct_ar: 'نَعَمْ .. التُّفَّاحَةُ حُلْوَةٌ', correct_en: 'Yes, the apple is sweet.', options_ar: ['نَعَمْ .. التُّفَّاحَةُ حُلْوَةٌ', 'لَا .. التُّفَّاحَةُ حَامِضَةٌ', 'لَا .. التُّفَّاحَةُ مُرَّةٌ'], questionType: 'hal' },
                                { emoji: '🐒', question_ar: 'أَ الْقِرْدُ حَيَوَانٌ ذَكِيٌّ أَمِ الْحِمَارُ ؟', question_en: 'Is the monkey a clever animal or the donkey?', correct_ar: 'الْقِرْدُ', correct_en: 'The monkey.', options_ar: ['الْقِرْدُ', 'الْحِمَارُ', 'الْفِيلُ'], questionType: 'a_am' },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 5,
                chunks: [
                    {
                        id: '2-5-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Body Parts & Possessives',
                        titleAr: 'مُفْرَدَات: أَعْضَاء الجِسْم',
                        payload: {
                            words: [
                                { id: 1, ar: 'وَجْهٌ', romanized: 'wajhun', en: 'Face', bn: 'মুখ, চেহারা', emoji: '😊' },
                                { id: 2, ar: 'أَنْفٌ', romanized: 'anfun', en: 'Nose', bn: 'নাক', emoji: '👃' },
                                { id: 3, ar: 'عَيْنٌ', romanized: "'aynun", en: 'Eye', bn: 'চোখ', emoji: '👁️' },
                                { id: 4, ar: 'خَدٌّ', romanized: 'khaddun', en: 'Cheek', bn: 'গাল', emoji: '😊' },
                                { id: 5, ar: 'شَعْرٌ', romanized: "sha'run", en: 'Hair', bn: 'চুল', emoji: '💇' },
                                { id: 6, ar: 'بَطْنٌ', romanized: 'batnun', en: 'Belly', bn: 'পেট', emoji: '🫃' },
                                { id: 7, ar: 'ظَهْرٌ', romanized: 'ẓahrun', en: 'Back', bn: 'পিঠ', emoji: '🔙' },
                                { id: 8, ar: 'لَوْنٌ', romanized: 'lawnun', en: 'Color', bn: 'রং', emoji: '🎨' },
                                { id: 9, ar: 'رَائِحَةٌ', romanized: "rā'iḥatun", en: 'Smell/Scent', bn: 'ঘ্রাণ, গন্ধ', emoji: '👃' },
                                { id: 10, ar: 'زَمِيلٌ', romanized: 'zamīlun', en: 'Classmate/Companion', bn: 'সাথী, সহপাঠী', emoji: '🤝' },
                            ],
                        },
                    },
                    {
                        id: '2-5-2',
                        type: 'grammar_rule',
                        titleEn: 'Possessive Pronouns (Singular)',
                        titleAr: 'ضَمَائِر المِلْكِيَّة',
                        payload: {
                            rules: [
                                {
                                    label: 'Attached pronouns for possession',
                                    arabic: 'اسم + ضَمِير مُتَّصِل',
                                    romanized: 'noun + attached pronoun',
                                    meaning: 'Attach pronoun suffixes to nouns to show possession.',
                                    examples: [
                                        { ar: 'بَيْتِي - بَيْتُكَ - بَيْتُكِ - بَيْتُهُ - بَيْتُهَا', en: 'My house - Your house (m) - Your house (f) - His house - Her house' },
                                        { ar: 'سَاعَتِي - سَاعَتُكَ - سَاعَتُهُ - سَاعَتُهَا', en: 'My watch - Your watch - His watch - Her watch' },
                                        { ar: 'اللهُ رَبِّي وَ رَبُّكَ', en: 'Allah is my Lord and your Lord (m).' },
                                        { ar: 'اللهُ رَبِّي وَ رَبُّكِ', en: 'Allah is my Lord and your Lord (f).' },
                                        { ar: 'اللهُ رَبِّي وَ رَبُّهُ', en: 'Allah is my Lord and his Lord.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '2-5-3',
                        type: 'application',
                        titleEn: 'Conversational Possessives',
                        titleAr: 'الضَّمَائِر فِي الحِوَار',
                        payload: {
                            items: [
                                { emoji: '🏠', ar: 'هَذَا بَيْتِي وَ ذَلِكَ بَيْتُكَ - بَيْتِي قَدِيمٌ وَ بَيْتُكَ جَدِيدٌ', en: 'This is my house and that is your house - my house is old and your house is new.' },
                                { emoji: '⌚', ar: 'هَذِهِ سَاعَتِي وَ تِلْكَ سَاعَتُكَ - سَاعَتِي رَخِيصَةٌ وَ سَاعَتُكَ غَالِيَةٌ', en: 'This is my watch and that is your watch - my watch is cheap and your watch is expensive.' },
                                { emoji: '🚗', ar: 'تِلْكَ سَيَّارَةُ خَالِدٍ - سَيَّارَتُهُ جَمِيلَةٌ - لَوْنُهَا جَمِيلٌ', en: "That is Khalid's car - his car is beautiful - its color is beautiful." },
                                { emoji: '👧', ar: 'فَاطِمَةُ صَدِيقَتِي - شَعْرُهَا طَوِيلٌ وَ لَوْنُهُ جَمِيلٌ', en: 'Fatima is my friend - her hair is long and its color is beautiful.' },
                            ],
                        },
                    },
                    {
                        id: '2-5-4',
                        type: 'q_and_a',
                        titleEn: 'Q&A: Possessives',
                        titleAr: 'سُؤَال وَجَوَاب: المِلْكِيَّة',
                        payload: {
                            questions: [
                                { emoji: '🏠', question_ar: 'هَلْ هَذَا الرَّجُلُ أَبُوكَ ؟', question_en: 'Is this man your father?', correct_ar: 'نَعَمْ .. هُوَ أَبِي', correct_en: 'Yes, he is my father.', options_ar: ['نَعَمْ .. هُوَ أَبِي', 'لَا .. هُوَ عَمِّي', 'لَا .. هُوَ أَخِي'], questionType: 'hal' },
                                { emoji: '🤝', question_ar: 'أَ أَبُوكَ هَذَا الرَّجُلُ أَمْ عَمُّكَ ؟', question_en: 'Is this man your father or your uncle?', correct_ar: 'أَبِي', correct_en: 'My father.', options_ar: ['أَبِي', 'عَمِّي', 'أَخِي'], questionType: 'a_am' },
                                { emoji: '🤝', question_ar: 'أَ مَاجِدٌ صَدِيقُكَ أَمْ خَالِدٌ ؟', question_en: 'Is Majid your friend or Khalid?', correct_ar: 'مَاجِدٌ', correct_en: 'Majid.', options_ar: ['مَاجِدٌ', 'خَالِدٌ', 'مَحْمُودٌ'], questionType: 'a_am' },
                            ],
                        },
                    },
                    {
                        id: '2-5-5',
                        type: 'verb_table',
                        titleEn: 'Verb Conjugation: Past Tense (Memorization)',
                        titleAr: 'تَصْرِيف الفِعْل المَاضِي',
                        payload: {
                            instruction: 'شُدُهُ মুখস্থ করার জন্য, ব্যবহার করার জন্য নয় - For memorization only, not for use yet.',
                            verbTense: 'past',
                            verbTable: [
                                { root: 'فَعَلَ', meaning: 'করা', he: 'فَعَلَ', she: 'فَعَلَتْ', youM: 'فَعَلْتَ', youF: 'فَعَلْتِ', i: 'فَعَلْتُ' },
                                { root: 'خَرَجَ', meaning: 'বের হওয়া', he: 'خَرَجَ', she: 'خَرَجَتْ', youM: 'خَرَجْتَ', youF: 'خَرَجْتِ', i: 'خَرَجْتُ' },
                                { root: 'ذَهَبَ', meaning: 'যাওয়া', he: 'ذَهَبَ', she: 'ذَهَبَتْ', youM: 'ذَهَبْتَ', youF: 'ذَهَبْتِ', i: 'ذَهَبْتُ' },
                                { root: 'جَلَسَ', meaning: 'বসা', he: 'جَلَسَ', she: 'جَلَسَتْ', youM: 'جَلَسْتَ', youF: 'جَلَسْتِ', i: 'جَلَسْتُ' },
                                { root: 'قَرَأَ', meaning: 'পড়া', he: 'قَرَأَ', she: 'قَرَأَتْ', youM: 'قَرَأْتَ', youF: 'قَرَأْتِ', i: 'قَرَأْتُ' },
                                { root: 'كَتَبَ', meaning: 'লেখা', he: 'كَتَبَ', she: 'كَتَبَتْ', youM: 'كَتَبْتَ', youF: 'كَتَبْتِ', i: 'كَتَبْتُ' },
                                { root: 'رَجَعَ', meaning: 'ফেরা', he: 'رَجَعَ', she: 'رَجَعَتْ', youM: 'رَجَعْتَ', youF: 'رَجَعْتِ', i: 'رَجَعْتُ' },
                                { root: 'لَعِبَ', meaning: 'খেলা', he: 'لَعِبَ', she: 'لَعِبَتْ', youM: 'لَعِبْتَ', youF: 'لَعِبْتِ', i: 'لَعِبْتُ' },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 6,
                chunks: [
                    {
                        id: '2-6-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Places & Objects',
                        titleAr: 'مُفْرَدَات: الأَمَاكِن وَالأَشْيَاء',
                        payload: {
                            words: [
                                { id: 1, ar: 'مَكْتَبَةٌ', romanized: 'maktabatun', en: 'Library', bn: 'পাঠাগার, লাইব্রেরী', emoji: '📚' },
                                { id: 2, ar: 'قَيِّمٌ', romanized: 'qayyimun', en: 'Valuable', bn: 'মূল্যবান', emoji: '💎' },
                                { id: 3, ar: 'خَيْرٌ', romanized: 'khayrun', en: 'Good/Welfare', bn: 'কল্যাণ', emoji: '✅' },
                                { id: 4, ar: 'شَرٌّ', romanized: 'sharrun', en: 'Evil/Harm', bn: 'অকল্যাণ', emoji: '❌' },
                                { id: 5, ar: 'فَأْرٌ', romanized: "fa'run", en: 'Mouse', bn: 'ইঁদুর', emoji: '🐭' },
                                { id: 6, ar: 'أَسَدٌ', romanized: 'asadun', en: 'Lion', bn: 'সিংহ', emoji: '🦁' },
                                { id: 7, ar: 'سَقْفٌ', romanized: 'saqfun', en: 'Roof', bn: 'ছাদ', emoji: '🏠' },
                                { id: 8, ar: 'مَنْظَرٌ', romanized: 'manẓarun', en: 'View/Scene', bn: 'দৃশ্য', emoji: '🌅' },
                            ],
                        },
                    },
                    {
                        id: '2-6-2',
                        type: 'application',
                        titleEn: 'Reading: Mosque, Madrasa & House',
                        titleAr: 'قِرَاءَة: المَسْجِد وَالمَدْرَسَة وَالبَيْت',
                        payload: {
                            items: [
                                { emoji: '🕌', ar: 'ذَلِكَ مَسْجِدُ الْعَاصِمَةِ - مَسْجِدُ الْعَاصِمَةِ كَبِيرٌ وَ جَمِيلٌ', en: 'That is the capital mosque - the capital mosque is big and beautiful.' },
                                { emoji: '🕌', ar: 'الْمَسْجِدُ بَيْتُ اللهِ - فِي الْمَسْجِدِ خَيْرٌ وَ فِي السُّوقِ شَرٌّ', en: 'The mosque is the house of Allah - in the mosque is good and in the market is evil.' },
                                { emoji: '🏫', ar: 'تِلْكَ مَدْرَسَةُ الْقَرْيَةِ - فِي هَذِهِ الْمَدْرَسَةِ مَكْتَبَةٌ صَغِيرَةٌ', en: 'That is the village madrasa - in this madrasa there is a small library.' },
                                { emoji: '🏠', ar: 'هَذَا بَيْتُ مَاجِدٍ - بَيْتُهُ جَدِيدٌ - مَنْظَرُ الْبَيْتِ جَمِيلٌ جِدًّا', en: "This is Majid's house - his house is new - the view of the house is very beautiful." },
                                { emoji: '📖', ar: 'هَذَا كِتَابُ الْقِصَّةِ - إِسْمُ الْقِصَّةِ الْفَأْرُ وَ الْأَسَدُ', en: 'This is the story book - the name of the story is The Mouse and the Lion.' },
                            ],
                        },
                    },
                    {
                        id: '2-6-3',
                        type: 'q_and_a',
                        titleEn: 'Q&A: Genitive Constructions (Idafah)',
                        titleAr: 'سُؤَال وَجَوَاب: الإِضَافَة',
                        payload: {
                            questions: [
                                { emoji: '🕌', question_ar: 'هَلْ ذَلِكَ مَسْجِدُ الْعَاصِمَةِ ؟', question_en: 'Is that the capital mosque?', correct_ar: 'نَعَمْ .. ذَلِكَ مَسْجِدُ الْعَاصِمَةِ', correct_en: 'Yes, that is the capital mosque.', options_ar: ['نَعَمْ .. ذَلِكَ مَسْجِدُ الْعَاصِمَةِ', 'لَا .. ذَلِكَ مَسْجِدُ الْقَرْيَةِ', 'لَا .. ذَلِكَ مَدْرَسَةٌ'], questionType: 'hal' },
                                { emoji: '��', question_ar: 'أَ مَدْرَسَةُ الْمَدِينَةِ تِلْكَ أَمْ مَدْرَسَةُ الْقَرْيَةِ ؟', question_en: 'Is that the city madrasa or the village madrasa?', correct_ar: 'مَدْرَسَةُ الْقَرْيَةِ', correct_en: 'The village madrasa.', options_ar: ['مَدْرَسَةُ الْقَرْيَةِ', 'مَدْرَسَةُ الْمَدِينَةِ', 'مَسْجِدُ الْقَرْيَةِ'], questionType: 'a_am' },
                                { emoji: '🏠', question_ar: 'أَ بَيْتُ مَحْمُودٍ هَذَا أَمْ بَيْتُ مَاجِدٍ ؟', question_en: "Is this Mahmud's house or Majid's house?", correct_ar: 'بَيْتُ مَاجِدٍ', correct_en: "Majid's house.", options_ar: ['بَيْتُ مَاجِدٍ', 'بَيْتُ مَحْمُودٍ', 'بَيْتُ خَالِدٍ'], questionType: 'a_am' },
                                { emoji: '🚪', question_ar: 'هَلْ بَابُ الْبَيْتِ مَفْتُوحٌ ؟', question_en: 'Is the door of the house open?', correct_ar: 'نَعَمْ .. بَابُ الْبَيْتِ مَفْتُوحٌ', correct_en: 'Yes, the door of the house is open.', options_ar: ['نَعَمْ .. بَابُ الْبَيْتِ مَفْتُوحٌ', 'لَا .. بَابُ الْبَيْتِ مُغْلَقٌ', 'لَا .. لَيْسَ هُنَاكَ بَابٌ'], questionType: 'hal' },
                            ],
                        },
                    },
                    {
                        id: '2-6-4',
                        type: 'verb_table',
                        titleEn: 'Verb Conjugation: Present/Future Tense',
                        titleAr: 'تَصْرِيف الفِعْل المُضَارِع',
                        payload: {
                            instruction: 'শুধু মুখস্থ করার জন্য, ব্যবহার করার জন্য নয় - For memorization only.',
                            verbTense: 'present',
                            verbTable: [
                                { root: 'يَفْعَلُ', meaning: 'করা', he: 'يَفْعَلُ', she: 'تَفْعَلُ', youM: 'تَفْعَلُ', youF: 'تَفْعَلِينَ', i: 'أَفْعَلُ' },
                                { root: 'يَخْرُجُ', meaning: 'বের হওয়া', he: 'يَخْرُجُ', she: 'تَخْرُجُ', youM: 'تَخْرُجُ', youF: 'تَخْرُجِينَ', i: 'أَخْرُجُ' },
                                { root: 'يَذْهَبُ', meaning: 'যাওয়া', he: 'يَذْهَبُ', she: 'تَذْهَبُ', youM: 'تَذْهَبُ', youF: 'تَذْهَبِينَ', i: 'أَذْهَبُ' },
                                { root: 'يَجْلِسُ', meaning: 'বসা', he: 'يَجْلِسُ', she: 'تَجْلِسُ', youM: 'تَجْلِسُ', youF: 'تَجْلِسِينَ', i: 'أَجْلِسُ' },
                                { root: 'يَقْرَأُ', meaning: 'পড়া', he: 'يَقْرَأُ', she: 'تَقْرَأُ', youM: 'تَقْرَأُ', youF: 'تَقْرَئِينَ', i: 'أَقْرَأُ' },
                                { root: 'يَكْتُبُ', meaning: 'লেখা', he: 'يَكْتُبُ', she: 'تَكْتُبُ', youM: 'تَكْتُبُ', youF: 'تَكْتُبِينَ', i: 'أَكْتُبُ' },
                                { root: 'يَرْجِعُ', meaning: 'ফেরা', he: 'يَرْجِعُ', she: 'تَرْجِعُ', youM: 'تَرْجِعُ', youF: 'تَرْجِعِينَ', i: 'أَرْجِعُ' },
                                { root: 'يَلْعَبُ', meaning: 'খেলা', he: 'يَلْعَبُ', she: 'تَلْعَبُ', youM: 'تَلْعَبُ', youF: 'تَلْعَبِينَ', i: 'أَلْعَبُ' },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 7,
                chunks: [
                    {
                        id: '2-7-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Spatial Adverbs & Nature',
                        titleAr: 'مُفْرَدَات: ظُرُوف المَكَان',
                        payload: {
                            words: [
                                { id: 1, ar: 'فَوْقَ', romanized: 'fawqa', en: 'Above / On top of', bn: 'উপরে', emoji: '⬆️' },
                                { id: 2, ar: 'تَحْتَ', romanized: 'taḥta', en: 'Under / Below', bn: 'নিচে', emoji: '⬇️' },
                                { id: 3, ar: 'أَمَامَ', romanized: 'amāma', en: 'In front of', bn: 'সামনে', emoji: '↗️' },
                                { id: 4, ar: 'خَلْفَ', romanized: 'khalfa', en: 'Behind', bn: 'পেছনে', emoji: '↩️' },
                                { id: 5, ar: 'نَهْرٌ', romanized: 'nahrun', en: 'A river', bn: 'একটি নদী', emoji: '🏞️' },
                                { id: 6, ar: 'بَحْرٌ', romanized: 'baḥrun', en: 'A sea/ocean', bn: 'একটি সাগর', emoji: '🌊' },
                                { id: 7, ar: 'جِسْرٌ', romanized: 'jisrun', en: 'A bridge', bn: 'একটি পোল', emoji: '🌉' },
                                { id: 8, ar: 'زَوْرَقٌ', romanized: 'zawraqun', en: 'A boat', bn: 'একটি নৌকা', emoji: '🚣' },
                            ],
                        },
                    },
                    {
                        id: '2-7-2',
                        type: 'grammar_rule',
                        titleEn: 'Spatial Adverbs + Genitive (مَجْرُور)',
                        titleAr: 'ظُرُوف المَكَان مَعَ المَجْرُور',
                        payload: {
                            rules: [
                                {
                                    label: 'Rule: Noun after spatial adverb takes kasrah (genitive)',
                                    arabic: 'فَوْقَ / تَحْتَ / أَمَامَ / خَلْفَ + اسم مَجْرُور',
                                    romanized: 'fawqa / taḥta / amāma / khalfa + noun (genitive)',
                                    meaning: 'The noun following a spatial adverb is in the genitive state (مَجْرُور), taking a kasrah.',
                                    examples: [
                                        { ar: 'فَوْقَ الطَّاوِلَةِ كِتَابٌ وَ قَلَمٌ', en: 'On top of the table (there is) a book and a pen.' },
                                        { ar: 'تَحْتَ الطَّاوِلَةِ حَقِيبَةٌ', en: 'Under the table (there is) a bag.' },
                                        { ar: 'أَمَامَ الْمُعَلِّمِ سَبُّورَةٌ', en: 'In front of the teacher (there is) a blackboard.' },
                                        { ar: 'فَوْقَ النَّهْرِ جِسْرٌ - تَحْتَ الْجِسْرِ زَوْرَقٌ', en: 'Above the river (there is) a bridge - under the bridge (there is) a boat.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '2-7-3',
                        type: 'application',
                        titleEn: 'Reading: Locations & Positions',
                        titleAr: 'قِرَاءَة: المَوَاضِع وَالأَمَاكِن',
                        payload: {
                            items: [
                                { emoji: '📚', ar: 'فَوْقَ الطَّاوِلَةِ كِتَابٌ وَ قَلَمٌ - اَلْكِتَابُ وَ الْقَلَمُ فَوْقَ الطَّاوِلَةِ', en: 'On the table (there is) a book and a pen - the book and pen are on the table.' },
                                { emoji: '👜', ar: 'تَحْتَ الطَّاوِلَةِ حَقِيبَةٌ وَ مِظَلَّةٌ', en: 'Under the table (there is) a bag and an umbrella.' },
                                { emoji: '🖥️', ar: 'أَمَامَ الْمُعَلِّمِ سَبُّورَةٌ - اَلسَّبُّورَةُ أَمَامَ الْمُعَلِّمِ', en: 'In front of the teacher (there is) a blackboard - the blackboard is in front of the teacher.' },
                                { emoji: '🌉', ar: 'فَوْقَ النَّهْرِ جِسْرٌ - هَذَا الْجِسْرُ طَوِيلٌ جِدًّا', en: 'Above the river (there is) a bridge - this bridge is very long.' },
                                { emoji: '🚣', ar: 'تَحْتَ الْجِسْرِ زَوْرَقٌ - هَذَا الزَّوْرَقُ صَغِيرٌ', en: 'Under the bridge (there is) a boat - this boat is small.' },
                            ],
                        },
                    },
                    {
                        id: '2-7-4',
                        type: 'q_and_a',
                        titleEn: 'Q&A: Where is it? (أَيْنَ / فَوْقَ / تَحْتَ)',
                        titleAr: 'سُؤَال وَجَوَاب: أَيْنَ؟',
                        payload: {
                            questions: [
                                { emoji: '📚', question_ar: 'أَكِتَابٌ فَوْقَ الطَّاوِلَةِ أَمْ كُرَّاسَةٌ ؟', question_en: 'Is there a book on the table or a notebook?', correct_ar: 'كِتَابٌ', correct_en: 'A book.', options_ar: ['كِتَابٌ', 'كُرَّاسَةٌ', 'قَلَمٌ'], questionType: 'a_am' },
                                { emoji: '🌉', question_ar: 'أَجَدِيدٌ هَذَا الْجِسْرُ أَمْ قَدِيمٌ ؟', question_en: 'Is this bridge new or old?', correct_ar: 'جَدِيدٌ', correct_en: 'New.', options_ar: ['جَدِيدٌ', 'قَدِيمٌ', 'صَغِيرٌ'], questionType: 'a_am' },
                                { emoji: '🚣', question_ar: 'هَلِ الزَّوْرَقُ فَوْقَ الْجِسْرِ ؟', question_en: 'Is the boat above the bridge?', correct_ar: 'لَا .. الزَّوْرَقُ تَحْتَ الْجِسْرِ', correct_en: 'No, the boat is under the bridge.', options_ar: ['نَعَمْ .. الزَّوْرَقُ فَوْقَ الْجِسْرِ', 'لَا .. الزَّوْرَقُ تَحْتَ الْجِسْرِ', 'لَا .. الزَّوْرَقُ أَمَامَ الْجِسْرِ'], questionType: 'hal' },
                                { emoji: '🖊️', question_ar: 'أَ فَوْقَ الطَّاوِلَةِ الْكِتَابُ أَمْ تَحْتَهَا ؟', question_en: 'Is the book on top of the table or under it?', correct_ar: 'فَوْقَهَا', correct_en: 'On top of it.', options_ar: ['فَوْقَهَا', 'تَحْتَهَا', 'أَمَامَهَا'], questionType: 'a_am' },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 8,
                chunks: [
                    {
                        id: '2-8-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Classroom & Places',
                        titleAr: 'مُفْرَدَات: الفَصْل وَالأَمَاكِن',
                        payload: {
                            words: [
                                { id: 1, ar: 'صَفٌّ', romanized: 'ṣaffun', en: 'Class/Grade', bn: 'শ্রেণী', emoji: '🏫' },
                                { id: 2, ar: 'فَصْلٌ', romanized: 'faṣlun', en: 'Classroom', bn: 'শ্রেণী কক্ষ', emoji: '🏫' },
                                { id: 3, ar: 'نَارٌ', romanized: 'nārun', en: 'Fire / Hell', bn: 'আগুন / জাহান্নাম', emoji: '🔥' },
                                { id: 4, ar: 'مَكْتَبٌ', romanized: 'maktabun', en: 'Office', bn: 'দফতর', emoji: '🏢' },
                                { id: 5, ar: 'جَنَّةٌ', romanized: 'jannatun', en: 'Paradise', bn: 'জান্নাত', emoji: '🌟' },
                            ],
                        },
                    },
                    {
                        id: '2-8-2',
                        type: 'application',
                        titleEn: 'Reading: فِي (In/Inside) Constructions',
                        titleAr: 'قِرَاءَة: حَرْف فِي',
                        payload: {
                            items: [
                                { emoji: '🏫', ar: 'هَذَا فَصْلُ الصَّفِّ الْخَامِسِ - فِي هَذَا الْفَصْلِ سَبُّورَةٌ وَ كُرْسِيٌّ وَ طَاوِلَةٌ', en: 'This is the 5th grade classroom - in this classroom there is a blackboard, a chair, and a table.' },
                                { emoji: '🥛', ar: 'فِي هَذَا الْكُوبِ مَاءٌ وَ فِي ذَلِكَ الْكُوبِ لَبَنٌ', en: 'In this glass there is water and in that glass there is milk.' },
                                { emoji: '🛏️', ar: 'فَاطِمَةُ فِي غُرْفَتِهَا - فِي غُرْفَتِهَا سَرِيرٌ وَ مِصْبَاحٌ وَ مِرْوَحَةٌ', en: 'Fatima is in her room - in her room there is a bed, a lamp, and a fan.' },
                                { emoji: '⚔️', ar: 'فِي يَدِ الْمُجَاهِدِ سَيْفٌ وَ فِي يَدِ الْعَالِمِ قَلَمٌ', en: 'In the hand of the warrior (there is) a sword and in the hand of the scholar (there is) a pen.' },
                                { emoji: '💡', ar: 'فِي قَلْبِ الْمُسْلِمِ نُورٌ وَ فِي قَلْبِ الْكَافِرِ ظُلْمَةٌ', en: 'In the heart of the Muslim (there is) light and in the heart of the disbeliever (there is) darkness.' },
                                { emoji: '🕌', ar: 'اَلْخَيْرُ فِي الْمَسْجِدِ وَ الشَّرُّ فِي السُّوقِ', en: 'Good is in the mosque and evil is in the market.' },
                            ],
                        },
                    },
                    {
                        id: '2-8-3',
                        type: 'q_and_a',
                        titleEn: 'Q&A: فِي (In) Constructions',
                        titleAr: 'سُؤَال وَجَوَاب: حَرْف فِي',
                        payload: {
                            questions: [
                                { emoji: '🏫', question_ar: 'هَلْ فِي هَذَا الْفَصْلِ كُرْسِيٌّ وَ طَاوِلَةٌ ؟', question_en: 'Is there a chair and table in this classroom?', correct_ar: 'نَعَمْ .. فِي الْفَصْلِ كُرْسِيٌّ وَ طَاوِلَةٌ', correct_en: 'Yes, in the classroom there is a chair and table.', options_ar: ['نَعَمْ .. فِي الْفَصْلِ كُرْسِيٌّ وَ طَاوِلَةٌ', 'لَا .. الْفَصْلُ فَارِغٌ', 'لَا .. فِيهِ سَرِيرٌ فَقَطْ'], questionType: 'hal' },
                                { emoji: '🥛', question_ar: 'أَ الْمَاءُ فِي هَذَا الْكُوبِ أَمِ اللَّبَنُ ؟', question_en: 'Is the water in this glass or the milk?', correct_ar: 'الْمَاءُ', correct_en: 'The water.', options_ar: ['الْمَاءُ', 'اللَّبَنُ', 'الْعَصِيرُ'], questionType: 'a_am' },
                                { emoji: '🛏️', question_ar: 'أَ سَرِيرٌ فِي غُرْفَتِهَا أَمْ كُرْسِيٌّ ؟', question_en: "Is there a bed in her room or a chair?", correct_ar: 'سَرِيرٌ', correct_en: 'A bed.', options_ar: ['سَرِيرٌ', 'كُرْسِيٌّ', 'طَاوِلَةٌ'], questionType: 'a_am' },
                                { emoji: '🏢', question_ar: 'أَ فِي الْفَصْلِ الْكُرْسِيُّ أَمْ فِي الْمَكْتَبِ ؟', question_en: 'Is the chair in the classroom or in the office?', correct_ar: 'فِي الْفَصْلِ', correct_en: 'In the classroom.', options_ar: ['فِي الْفَصْلِ', 'فِي الْمَكْتَبِ', 'فِي الْغُرْفَةِ'], questionType: 'a_am' },
                            ],
                        },
                    },
                    {
                        id: '2-8-4',
                        type: 'verb_table',
                        titleEn: 'Verb Conjugation: Commands & Prohibitions',
                        titleAr: 'الأَمْر وَالنَّهْي',
                        payload: {
                            instruction: 'শুধু মুখস্থ করার জন্য - For memorization only. Command (m/f) and Prohibition (m/f).',
                            verbTense: 'imperative',
                            verbTable: [
                                { root: 'اِفْعَلْ', meaning: 'করো', he: 'اِفْعَلْ', she: 'اِفْعِلِي', youM: 'لَا تَفْعَلْ', youF: 'لَا تَفْعِلِي', i: '-' },
                                { root: 'اُخْرُجْ', meaning: 'বের হও', he: 'اُخْرُجْ', she: 'اُخْرُجِي', youM: 'لَا تَخْرُجْ', youF: 'لَا تَخْرُجِي', i: '-' },
                                { root: 'اِذْهَبْ', meaning: 'যাও', he: 'اِذْهَبْ', she: 'اِذْهَبِي', youM: 'لَا تَذْهَبْ', youF: 'لَا تَذْهَبِي', i: '-' },
                                { root: 'اِجْلِسْ', meaning: 'বসো', he: 'اِجْلِسْ', she: 'اِجْلِسِي', youM: 'لَا تَجْلِسْ', youF: 'لَا تَجْلِسِي', i: '-' },
                                { root: 'اِقْرَأْ', meaning: 'পড়ো', he: 'اِقْرَأْ', she: 'اِقْرَئِي', youM: 'لَا تَقْرَأْ', youF: 'لَا تَقْرَئِي', i: '-' },
                                { root: 'اُكْتُبْ', meaning: 'লেখো', he: 'اُكْتُبْ', she: 'اُكْتُبِي', youM: 'لَا تَكْتُبْ', youF: 'لَا تَكْتُبِي', i: '-' },
                                { root: 'اِرْجِعْ', meaning: 'ফিরো', he: 'اِرْجِعْ', she: 'اِرْجِعِي', youM: 'لَا تَرْجِعْ', youF: 'لَا تَرْجِعِي', i: '-' },
                                { root: 'اِلْعَبْ', meaning: 'খেলো', he: 'اِلْعَبْ', she: 'اِلْعَبِي', youM: 'لَا تَلْعَبْ', youF: 'لَا تَلْعَبِي', i: '-' },
                            ],
                        },
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        titleAr: 'الباب الثالث',
        titleEn: 'Chapter Three',
        subtitle: 'Complex Phrases, Idafah & Paragraph Reading',
        lessons: [
            {
                darsNumber: 1,
                chunks: [
                    {
                        id: '3-1-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: People & Attributes',
                        titleAr: 'مُفْرَدَات',
                        payload: {
                            words: [
                                { id: 1, ar: 'غِلَافٌ', romanized: 'ghilāfun', en: 'Cover', bn: 'গিলাফ, কভার', emoji: '📦' },
                                { id: 2, ar: 'ظِلٌّ', romanized: 'ẓillun', en: 'Shade/Shadow', bn: 'ছায়া', emoji: '🌤️' },
                                { id: 3, ar: 'خَادِمٌ', romanized: 'khādimun', en: 'Servant', bn: 'সেবক', emoji: '🙇' },
                                { id: 4, ar: 'صَالِحٌ', romanized: 'ṣāliḥun', en: 'Pious/Good', bn: 'সৎ', emoji: '✅' },
                                { id: 5, ar: 'مَلِكٌ', romanized: 'malikun', en: 'King', bn: 'বাদশাহ', emoji: '👑' },
                                { id: 6, ar: 'صُوْرَةٌ', romanized: 'ṣūratun', en: 'Picture', bn: 'ছবি', emoji: '🖼️' },
                                { id: 7, ar: 'مُرِيحٌ', romanized: 'murīḥun', en: 'Comfortable', bn: 'আরামদায়ক', emoji: '😌' },
                                { id: 8, ar: 'رَاحَةٌ', romanized: 'rāḥatun', en: 'Comfort/Peace', bn: 'আরাম, শান্তি', emoji: '☮️' },
                                { id: 9, ar: 'مُدِيرٌ', romanized: 'mudīrun', en: 'Director/Manager', bn: 'পরিচালক', emoji: '👔' },
                            ],
                        },
                    },
                    {
                        id: '3-1-2',
                        type: 'grammar_rule',
                        titleEn: 'Idafah: Possession with Demonstratives',
                        titleAr: 'الإِضَافَة مَعَ أَسْمَاء الإِشَارَة',
                        payload: {
                            rules: [
                                {
                                    label: 'Pattern: Noun + Demonstrative Phrase (genitive)',
                                    arabic: 'مُضَاف + مُضَاف إِلَيْه',
                                    romanized: 'muḍāf + muḍāf ilayhi',
                                    meaning: 'To show possession with a pointed noun: the possessed noun comes first, then the demonstrative phrase in genitive.',
                                    examples: [
                                        { ar: 'هَذَا المَسْجِدُ ← إِمَامُ هَذَا المَسْجِدِ', en: 'This mosque → The imam of this mosque' },
                                        { ar: 'هَذَا البَيْتُ ← بَابُ هَذَا البَيْتِ', en: 'This house → The door of this house' },
                                        { ar: 'تِلْكَ القَرْيَةُ ← فَلَّاحُ تِلْكَ القَرْيَةِ', en: 'That village → The farmer of that village' },
                                        { ar: 'هَذِهِ المَدْرَسَةُ ← مُعَلِّمُ هَذِهِ المَدْرَسَةِ', en: 'This madrasa → The teacher of this madrasa' },
                                        { ar: 'ذَلِكَ القُفْلُ ← مِفْتَاحُ ذَلِكَ القُفْلِ', en: 'That lock → The key to that lock' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '3-1-3',
                        type: 'idafah_drill',
                        titleEn: 'Drill: Build the Possession Phrase',
                        titleAr: 'تَمْرِين: الإِضَافَة',
                        payload: {
                            instruction: 'Tap the right card to reveal the Arabic possession phrase.',
                            idafahPairs: [
                                { baseAr: 'هَذِهِ الغُرْفَةُ', baseEn: 'This room', expandedAr: 'بَابُ هَذِهِ الغُرْفَةِ', expandedEn: 'The door of this room' },
                                { baseAr: 'تِلْكَ القَرْيَةُ', baseEn: 'That village', expandedAr: 'مَنْظَرُ تِلْكَ القَرْيَةِ', expandedEn: 'The view of that village' },
                                { baseAr: 'هَذِهِ الحَدِيقَةُ', baseEn: 'This garden', expandedAr: 'أَمَامَ هَذِهِ الحَدِيقَةِ', expandedEn: 'In front of this garden' },
                                { baseAr: 'ذَلِكَ الفَاكِهَةُ', baseEn: 'That fruit', expandedAr: 'لَوْنُ ذَلِكَ الفَاكِهَةِ', expandedEn: 'The color of that fruit' },
                                { baseAr: 'ذَلِكَ الرَّجُلُ', baseEn: 'That man', expandedAr: 'سَيَّارَةُ ذَلِكَ الرَّجُلِ', expandedEn: "That man's car" },
                                { baseAr: 'ذَلِكَ القُفْلُ', baseEn: 'That lock', expandedAr: 'مِفْتَاحُ ذَلِكَ القُفْلِ', expandedEn: 'The key of that lock' },
                                { baseAr: 'هَذَا الطَّرِيقُ', baseEn: 'This road', expandedAr: 'بِجَانِبِ هَذَا الطَّرِيقِ', expandedEn: 'Beside this road' },
                                { baseAr: 'تِلْكَ المَرْأَةُ', baseEn: 'That woman', expandedAr: 'عِقْدُ تِلْكَ المَرْأَةِ', expandedEn: "That woman's necklace" },
                            ],
                        },
                    },
                    {
                        id: '3-1-4',
                        type: 'paragraph',
                        titleEn: 'Reading: The House of Allah (Al-Kaaba)',
                        titleAr: 'قِرَاءَة: بَيْتُ اللهِ',
                        payload: {
                            instruction: 'Read the paragraph carefully. Each sentence builds on the previous.',
                            paragraphs: [
                                {
                                    title: 'بَيْتُ اللهِ',
                                    titleEn: 'The House of Allah',
                                    lines: [
                                        'رَبُّ هَذَا البَيْتِ - اللهُ رَبُّ هَذَا البَيْتِ .',
                                        'هَذَا البَيْتُ - اِسْمُ هَذَا البَيْتِ الكَعْبَةُ .',
                                        'غِلَافُ هَذَا البَيْتِ - غِلَافُ هَذَا البَيْتِ جَمِيْلٌ .',
                                        'خَادِمُ هَذَا البَيْتِ - المَلِكُ خَادِمُ هَذَا البَيْتِ .',
                                        'مِفْتَاحُ هَذَا البَيْتِ عِنْدَ رَجُلٍ صَالِحٍ .',
                                        'ظِلُّ هَذَا البَيْتِ مُرِيحٌ - فِي ظِلِّ هَذَا البَيْتِ رَاحَةٌ .',
                                        'سَقْفُ هَذَا البَيْتِ مَفْتُوحٌ - بَابُ هَذَا البَيْتِ جَمِيْلٌ .',
                                        'صُوْرَةُ هَذَا البَيْتِ جَمِيْلَةٌ - هَذَا بَيْتُ اللهِ .',
                                    ],
                                    translationEn: 'The Lord of this house - Allah is the Lord of this house. This house - the name of this house is Al-Kaaba. The cover of this house is beautiful. The king is the servant of this house. The key to this house is with a pious man. The shade of this house is comfortable - in its shade is peace. The roof is open, the door is beautiful. The picture of this house is beautiful - this is the house of Allah.',
                                },
                            ],
                        },
                    },
                    {
                        id: '3-1-5',
                        type: 'q_and_a',
                        titleEn: 'Q&A: Comprehension - Al-Kaaba',
                        titleAr: 'أَسْئِلَة الفَهْم',
                        payload: {
                            questions: [
                                { emoji: '🕋', question_ar: 'مَنْ رَبُّ هَذَا البَيْتِ ؟', question_en: 'Who is the Lord of this house?', correct_ar: 'اللهُ رَبُّ هَذَا البَيْتِ', correct_en: 'Allah is the Lord of this house.', options_ar: ['اللهُ رَبُّ هَذَا البَيْتِ', 'المَلِكُ رَبُّ هَذَا البَيْتِ', 'الإِمَامُ رَبُّ هَذَا البَيْتِ'], questionType: 'general' },
                                { emoji: '🕋', question_ar: 'مَا اِسْمُ هَذَا البَيْتِ ؟', question_en: 'What is the name of this house?', correct_ar: 'اِسْمُهُ الكَعْبَةُ', correct_en: 'Its name is Al-Kaaba.', options_ar: ['اِسْمُهُ الكَعْبَةُ', 'اِسْمُهُ المَسْجِدُ', 'اِسْمُهُ البَيْتُ'], questionType: 'general' },
                                { emoji: '👑', question_ar: 'مَنْ خَادِمُ هَذَا البَيْتِ ؟', question_en: 'Who is the servant of this house?', correct_ar: 'المَلِكُ خَادِمُ هَذَا البَيْتِ', correct_en: 'The king is the servant of this house.', options_ar: ['المَلِكُ خَادِمُ هَذَا البَيْتِ', 'الإِمَامُ خَادِمُ هَذَا البَيْتِ', 'الفَلَّاحُ خَادِمُ هَذَا البَيْتِ'], questionType: 'general' },
                                { emoji: '🕋', question_ar: 'هَلْ سَقْفُ هَذَا البَيْتِ مَفْتُوحٌ ؟', question_en: 'Is the roof of this house open?', correct_ar: 'نَعَمْ .. سَقْفُهُ مَفْتُوحٌ', correct_en: 'Yes, its roof is open.', options_ar: ['نَعَمْ .. سَقْفُهُ مَفْتُوحٌ', 'لَا .. سَقْفُهُ مُغْلَقٌ', 'لَا .. لَيْسَ لَهُ سَقْفٌ'], questionType: 'hal' },
                                { emoji: '🌤️', question_ar: 'هَلْ فِي ظِلِّ هَذَا البَيْتِ رَاحَةٌ ؟', question_en: 'Is there peace in the shade of this house?', correct_ar: 'نَعَمْ .. فِي ظِلِّهِ رَاحَةٌ', correct_en: 'Yes, in its shade there is peace.', options_ar: ['نَعَمْ .. فِي ظِلِّهِ رَاحَةٌ', 'لَا .. فِي ظِلِّهِ حَرٌّ', 'لَا .. ظِلُّهُ قَبِيحٌ'], questionType: 'hal' },
                            ],
                        },
                    },
                    {
                        id: '3-1-6',
                        type: 'application',
                        titleEn: 'Complex Sentences: Idafah in Context',
                        titleAr: 'جُمَل مُرَكَّبَة',
                        payload: {
                            items: [
                                { emoji: '🕌', ar: 'إِمَامُ هَذَا المَسْجِدِ عَالِمٌ كَبِيرٌ', en: 'The imam of this mosque is a great scholar.' },
                                { emoji: '🏫', ar: 'أَبُو رَاشِدٍ مُعَلِّمُ تِلْكَ المَدْرَسَةِ', en: "Rashid's father is the teacher of that madrasa." },
                                { emoji: '🚪', ar: 'بَابُ هَذَا البَيْتِ مَفْتُوحٌ', en: 'The door of this house is open.' },
                                { emoji: '🏪', ar: 'دُكَّانُ هَذَا التَّاجِرِ فِي سُوقِ المَدِينَةِ', en: "This merchant's shop is in the city market." },
                                { emoji: '🌸', ar: 'رَائِحَةُ تِلْكَ الزَّهْرَةِ طَيِّبَةٌ', en: 'The fragrance of that flower is good.' },
                                { emoji: '👦', ar: 'قَلَمُ هَذَا الوَلَدِ عِنْدَ ذَلِكَ الوَلَدِ', en: "This boy's pen is with that boy." },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 2,
                chunks: [
                    {
                        id: '3-2-1',
                        type: 'grammar_rule',
                        titleEn: 'Definite Descriptive Phrases (Al + Sifah-Mawsuf)',
                        titleAr: 'الصِّفَة المَوْصُوف مَعَ الـ',
                        payload: {
                            rules: [
                                {
                                    label: 'The 4-step progression',
                                    arabic: 'وَرْدَةٌ ← وَرْدَةٌ كَبِيرَةٌ ← الوَرْدَةُ كَبِيرَةٌ ← الوَرْدَةُ الكَبِيرَةُ جَمِيلَةٌ',
                                    romanized: 'wardatun → wardatun kabīratun → al-wardatu kabīratun → al-wardatu al-kabīratu jamīlatun',
                                    meaning: 'Adding Al to BOTH noun and adjective creates a definite phrase (incomplete). Adding a predicate makes it a complete sentence.',
                                    examples: [
                                        { ar: 'وَرْدَةٌ كَبِيرَةٌ', en: 'A big rose (indefinite phrase - incomplete)' },
                                        { ar: 'الوَرْدَةُ كَبِيرَةٌ', en: 'The rose is big (complete sentence: Mubtada + Khabar)' },
                                        { ar: 'الوَرْدَةُ الكَبِيرَةُ', en: 'The big rose (definite phrase - still incomplete)' },
                                        { ar: 'الوَرْدَةُ الكَبِيرَةُ جَمِيلَةٌ', en: 'The big rose is beautiful (complete: definite Mawsuf-Sifah as Mubtada + Khabar)' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '3-2-2',
                        type: 'tarkeeb',
                        titleEn: 'Tarkeeb: Complete vs Incomplete with Al',
                        titleAr: 'تَرْكِيب: الجُمْلَة التَّامَّة وَالنَّاقِصَة',
                        payload: {
                            tarkeeb: [
                                {
                                    sentence: 'الوَرْدَةُ الكَبِيرَةُ',
                                    sentenceEn: 'The big rose',
                                    sentenceBn: 'বড় গোলাপটি (অপূর্ণ)',
                                    type: 'incomplete',
                                    tree: [
                                        { label: 'مَوْصُوف', labelEn: 'Qualified Noun', text: 'الوَرْدَةُ', children: [] },
                                        { label: 'صِفَة', labelEn: 'Adjective', text: 'الكَبِيرَةُ', children: [] },
                                    ],
                                },
                                {
                                    sentence: 'الوَرْدَةُ كَبِيرَةٌ',
                                    sentenceEn: 'The rose is big.',
                                    sentenceBn: 'গোলাপটি বড়। (পূর্ণ)',
                                    type: 'complete',
                                    tree: [
                                        { label: 'مُبْتَدَأ', labelEn: 'Subject', text: 'الوَرْدَةُ', children: [] },
                                        { label: 'خَبَر', labelEn: 'Predicate', text: 'كَبِيرَةٌ', children: [] },
                                    ],
                                },
                                {
                                    sentence: 'الوَرْدَةُ الكَبِيرَةُ جَمِيلَةٌ',
                                    sentenceEn: 'The big rose is beautiful.',
                                    sentenceBn: 'বড় গোলাপটি সুন্দর। (পূর্ণ)',
                                    type: 'complete',
                                    tree: [
                                        {
                                            label: 'مُبْتَدَأ', labelEn: 'Subject', text: 'الوَرْدَةُ الكَبِيرَةُ',
                                            children: [
                                                { label: 'مَوْصُوف', labelEn: 'Qualified Noun', text: 'الوَرْدَةُ', children: [] },
                                                { label: 'صِفَة', labelEn: 'Adjective', text: 'الكَبِيرَةُ', children: [] },
                                            ],
                                        },
                                        { label: 'خَبَر', labelEn: 'Predicate', text: 'جَمِيلَةٌ', children: [] },
                                    ],
                                },
                                {
                                    sentence: 'مَحْمُودٌ التَّاجِرُ غَنِيٌّ',
                                    sentenceEn: 'The merchant Mahmud is rich.',
                                    sentenceBn: 'ব্যবসায়ী মাহমুদ ধনী। (পূর্ণ)',
                                    type: 'complete',
                                    tree: [
                                        {
                                            label: 'مُبْتَدَأ', labelEn: 'Subject', text: 'مَحْمُودٌ التَّاجِرُ',
                                            children: [
                                                { label: 'مَوْصُوف', labelEn: 'Qualified Noun', text: 'مَحْمُودٌ', children: [] },
                                                { label: 'صِفَة', labelEn: 'Adjective/Title', text: 'التَّاجِرُ', children: [] },
                                            ],
                                        },
                                        { label: 'خَبَر', labelEn: 'Predicate', text: 'غَنِيٌّ', children: [] },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '3-2-3',
                        type: 'paragraph',
                        titleEn: 'Reading: Definite Phrases in Context',
                        titleAr: 'قِرَاءَة: الصِّفَة المَعْرِفَة',
                        payload: {
                            paragraphs: [
                                {
                                    title: 'الكِتَاب',
                                    titleEn: 'The Book',
                                    lines: [
                                        'هَذَا كِتَابٌ - كِتَابٌ جَدِيدٌ - هَذَا كِتَابٌ جَدِيدٌ',
                                        'الكِتَابُ جَدِيدٌ - الكِتَابُ الجَدِيدُ',
                                        'الكِتَابُ الجَدِيدُ جَمِيلٌ - الكِتَابُ الجَدِيدُ عِنْدَ مَحْمُودٍ',
                                        'الكِتَابُ الجَدِيدُ قِصَّةٌ عَجِيبَةٌ',
                                        'فِي هَذَا الكِتَابِ الجَدِيدِ صُورَةٌ جَمِيلَةٌ .',
                                    ],
                                },
                                {
                                    title: 'المَسْجِد',
                                    titleEn: 'The Mosque',
                                    lines: [
                                        'هَذَا مَسْجِدٌ قَدِيمٌ - المَسْجِدُ القَدِيمُ مَشْهُورٌ',
                                        'أَمَامَ المَسْجِدِ القَدِيمِ حَدِيقَةٌ',
                                        'إِمَامُ المَسْجِدِ القَدِيمِ عَالِمٌ كَبِيرٌ',
                                        'عَمُّ مَاجِدٍ إِمَامُ المَسْجِدِ القَدِيمِ .',
                                    ],
                                },
                                {
                                    title: 'السَّمَكَة',
                                    titleEn: 'The Fish',
                                    lines: [
                                        'سَمَكَةٌ كَبِيرَةٌ - هَذِهِ سَمَكَةٌ كَبِيرَةٌ',
                                        'السَّمَكَةُ كَبِيرَةٌ - السَّمَكَةُ الكَبِيرَةُ',
                                        'السَّمَكَةُ الكَبِيرَةُ لَذِيذَةٌ',
                                        'السَّمَكَةُ الكَبِيرَةُ فِي حَوْضٍ كَبِيرٍ .',
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '3-2-4',
                        type: 'q_and_a',
                        titleEn: 'Q&A: Definite Phrases',
                        titleAr: 'سُؤَال وَجَوَاب',
                        payload: {
                            questions: [
                                { emoji: '📖', question_ar: 'هَلِ الكِتَابُ الجَدِيدُ عِنْدَ مَحْمُودٍ ؟', question_en: 'Is the new book with Mahmud?', correct_ar: 'نَعَمْ .. الكِتَابُ الجَدِيدُ عِنْدَهُ', correct_en: 'Yes, the new book is with him.', options_ar: ['نَعَمْ .. الكِتَابُ الجَدِيدُ عِنْدَهُ', 'لَا .. الكِتَابُ عِنْدَ خَالِدٍ', 'لَا .. الكِتَابُ فِي المَكْتَبَةِ'], questionType: 'hal' },
                                { emoji: '🕌', question_ar: 'كَيْفَ إِمَامُ المَسْجِدِ القَدِيمِ ؟', question_en: 'How is the imam of the old mosque?', correct_ar: 'إِمَامُهُ عَالِمٌ كَبِيرٌ', correct_en: 'Its imam is a great scholar.', options_ar: ['إِمَامُهُ عَالِمٌ كَبِيرٌ', 'إِمَامُهُ رَجُلٌ فَقِيرٌ', 'إِمَامُهُ تِلْمِيذٌ صَغِيرٌ'], questionType: 'general' },
                                { emoji: '🐟', question_ar: 'أَ السَّمَكَةُ الكَبِيرَةُ لَذِيذَةٌ أَمْ غَيْرُ لَذِيذَةٍ ؟', question_en: 'Is the big fish tasty or not tasty?', correct_ar: 'لَذِيذَةٌ', correct_en: 'Tasty.', options_ar: ['لَذِيذَةٌ', 'غَيْرُ لَذِيذَةٍ', 'بَايِتَةٌ'], questionType: 'a_am' },
                                { emoji: '🕌', question_ar: 'مَنْ إِمَامُ المَسْجِدِ القَدِيمِ ؟', question_en: 'Who is the imam of the old mosque?', correct_ar: 'عَمُّ مَاجِدٍ إِمَامُهُ', correct_en: "Majid's uncle is its imam.", options_ar: ['عَمُّ مَاجِدٍ إِمَامُهُ', 'أَبُو رَاشِدٍ إِمَامُهُ', 'خَالِدٌ إِمَامُهُ'], questionType: 'general' },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 3,
                chunks: [
                    {
                        id: '3-3-1',
                        type: 'vocabulary',
                        titleEn: 'Vocabulary: Final Lesson',
                        titleAr: 'مُفْرَدَات: الدَّرْس الأَخِير',
                        payload: {
                            words: [
                                { id: 1, ar: 'صَافٍ', romanized: 'ṣāfin', en: 'Clean/Clear', bn: 'পরিচ্ছন্ন', emoji: '✨' },
                                { id: 2, ar: 'قَذِرٌ', romanized: 'qadhirun', en: 'Dirty', bn: 'ময়লা', emoji: '🗑️' },
                                { id: 3, ar: 'مَعْبَدٌ', romanized: "ma'badun", en: 'Place of worship', bn: 'উপাসনালয়', emoji: '🛕' },
                                { id: 4, ar: 'سِكَّةٌ', romanized: 'sikkatun', en: 'Road/Path', bn: 'রাস্তা', emoji: '🛤️' },
                                { id: 5, ar: 'سَجَّادَةٌ', romanized: 'sajjādatun', en: 'Prayer mat', bn: 'জায়নামায', emoji: '🧎' },
                            ],
                        },
                    },
                    {
                        id: '3-3-2',
                        type: 'paragraph',
                        titleEn: "Reading: Fatima's Room",
                        titleAr: 'قِرَاءَة: غُرْفَةُ فَاطِمَةَ',
                        payload: {
                            instruction: 'Read the full paragraph. Notice how Idafah, Sifah-Mawsuf, and spatial adverbs all combine.',
                            paragraphs: [
                                {
                                    title: 'فِي غُرْفَةِ فَاطِمَةَ',
                                    titleEn: "In Fatima's Room",
                                    lines: [
                                        'هَذِهِ غُرْفَةٌ . هَذِهِ غُرْفَةٌ صَغِيرَةٌ .',
                                        'الغُرْفَةُ الصَّغِيرَةُ نَظِيفَةٌ .',
                                        'هَذِهِ الغُرْفَةُ صَغِيرَةٌ وَنَظِيفَةٌ .',
                                        'هَذِهِ غُرْفَةُ فَاطِمَةَ . فَاطِمَةُ بِنْتٌ طَيِّبَةٌ .',
                                        'غُرْفَتُهَا نَظِيفَةٌ وَ فِرَاشُهَا نَظِيفٌ . فَاطِمَةُ فِي غُرْفَتِهَا .',
                                        'فِي غُرْفَةِ فَاطِمَةَ سَرِيرٌ وَ مِنْضَدَةٌ .',
                                        'فِي غُرْفَتِهَا مِصْبَاحٌ وَ مِرْوَحَةٌ .',
                                        'المِصْبَاحُ جَدِيدٌ وَ المِرْوَحَةُ جَيِّدَةٌ .',
                                        'المِرْوَحَةُ تَحْتَ السَّقْفِ .',
                                        'فَوْقَ المِنْضَدَةِ سَاعَةٌ جَمِيلَةٌ . السَّاعَةُ الجَمِيلَةُ فَوْقَ المِنْضَدَةِ .',
                                        'بِجَانِبِ السَّاعَةِ الجَمِيلَةِ قَلَمٌ .',
                                        'بَابُ هَذِهِ الغُرْفَةِ مَفْتُوحٌ . بَابُ هَذِهِ الغُرْفَةِ الصَّغِيرَةِ وَاسِعٌ .',
                                    ],
                                    translationEn: "This is a room. This is a small room. The small room is clean. This room is small and clean. This is Fatima's room. Fatima is a good girl. Her room is clean and her bed is clean. Fatima is in her room. In Fatima's room there is a bed and a table. In her room there is a lamp and a fan. The lamp is new and the fan is good. The fan is under the ceiling. On the table there is a beautiful clock. The beautiful clock is on the table. Beside the beautiful clock there is a pen. The door of this room is open. The door of this small room is wide.",
                                },
                            ],
                        },
                    },
                    {
                        id: '3-3-3',
                        type: 'paragraph',
                        titleEn: 'Reading: The Old Village',
                        titleAr: 'قِرَاءَة: القَرْيَةُ القَدِيمَةُ',
                        payload: {
                            paragraphs: [
                                {
                                    title: 'القَرْيَةُ القَدِيمَةُ',
                                    titleEn: 'The Old Village',
                                    lines: [
                                        'هَذِهِ قَرْيَةٌ قَدِيمَةٌ .',
                                        'القَرْيَةُ بِجَانِبِ النَّهْرِ .',
                                        'القَرْيَةُ القَدِيمَةُ بِجَانِبِ النَّهْرِ الوَاسِعِ .',
                                        'مَاءُ هَذَا النَّهْرِ صَافٍ .',
                                        'فِي هَذِهِ القَرْيَةِ مَسْجِدٌ كَبِيرٌ وَ مَعْبَدٌ صَغِيرٌ .',
                                        'المَسْجِدُ الكَبِيرُ جَمِيلٌ .',
                                        'اِسْمُ هَذَا المَسْجِدِ مَسْجِدُ النُّورِ .',
                                        'فِي مَسْجِدِ النُّورِ سَجَّادَةٌ غَالِيَةٌ .',
                                        'فِي هَذِهِ القَرْيَةِ شَجَرَةٌ عَالِيَةٌ .',
                                        'الشَّجَرَةُ العَالِيَةُ بِجَانِبِ البَيْتِ الصَّغِيرِ .',
                                        'هَذَا البَيْتُ الصَّغِيرُ بِجَانِبِ الشَّجَرَةِ العَالِيَةِ .',
                                    ],
                                    translationEn: 'This is an old village. The village is beside the river. The old village is beside the wide river. The water of this river is clean. In this village there is a big mosque and a small temple. The big mosque is beautiful. The name of this mosque is Masjid al-Nur. In Masjid al-Nur there is an expensive prayer mat. In this village there is a tall tree. The tall tree is beside the small house. This small house is beside the tall tree.',
                                },
                            ],
                        },
                    },
                    {
                        id: '3-3-4',
                        type: 'q_and_a',
                        titleEn: "Q&A: Fatima's Room & The Village",
                        titleAr: 'أَسْئِلَة الفَهْم: الغُرْفَة وَالقَرْيَة',
                        payload: {
                            questions: [
                                { emoji: '🛏️', question_ar: 'أَنَظِيفَةٌ غُرْفَةُ فَاطِمَةَ أَمْ قَذِرَةٌ ؟', question_en: "Is Fatima's room clean or dirty?", correct_ar: 'نَظِيفَةٌ', correct_en: 'Clean.', options_ar: ['نَظِيفَةٌ', 'قَذِرَةٌ', 'وَاسِعَةٌ'], questionType: 'a_am' },
                                { emoji: '💡', question_ar: 'أَيْنَ المِرْوَحَةُ ؟', question_en: 'Where is the fan?', correct_ar: 'المِرْوَحَةُ تَحْتَ السَّقْفِ', correct_en: 'The fan is under the ceiling.', options_ar: ['المِرْوَحَةُ تَحْتَ السَّقْفِ', 'المِرْوَحَةُ فَوْقَ المِنْضَدَةِ', 'المِرْوَحَةُ بِجَانِبِ البَابِ'], questionType: 'general' },
                                { emoji: '🚪', question_ar: 'هَلْ بَابُ هَذِهِ الغُرْفَةِ مَفْتُوحٌ ؟', question_en: 'Is the door of this room open?', correct_ar: 'نَعَمْ .. بَابُهَا مَفْتُوحٌ', correct_en: 'Yes, its door is open.', options_ar: ['نَعَمْ .. بَابُهَا مَفْتُوحٌ', 'لَا .. بَابُهَا مُغْلَقٌ', 'لَا .. لَيْسَ لَهَا بَابٌ'], questionType: 'hal' },
                                { emoji: '🌊', question_ar: 'هَلْ مَاءُ هَذَا النَّهْرِ صَافٍ ؟', question_en: 'Is the water of this river clean?', correct_ar: 'نَعَمْ .. مَاؤُهُ صَافٍ', correct_en: 'Yes, its water is clean.', options_ar: ['نَعَمْ .. مَاؤُهُ صَافٍ', 'لَا .. مَاؤُهُ قَذِرٌ', 'لَا .. لَيْسَ فِيهِ مَاءٌ'], questionType: 'hal' },
                                { emoji: '🌳', question_ar: 'أَيْنَ الشَّجَرَةُ العَالِيَةُ ؟', question_en: 'Where is the tall tree?', correct_ar: 'بِجَانِبِ البَيْتِ الصَّغِيرِ', correct_en: 'Beside the small house.', options_ar: ['بِجَانِبِ البَيْتِ الصَّغِيرِ', 'أَمَامَ المَسْجِدِ', 'فِي وَسَطِ القَرْيَةِ'], questionType: 'general' },
                                { emoji: '🕌', question_ar: 'مَا اِسْمُ المَسْجِدِ الكَبِيرِ ؟', question_en: 'What is the name of the big mosque?', correct_ar: 'اِسْمُهُ مَسْجِدُ النُّورِ', correct_en: 'Its name is Masjid al-Nur.', options_ar: ['اِسْمُهُ مَسْجِدُ النُّورِ', 'اِسْمُهُ مَسْجِدُ الكَعْبَةِ', 'اِسْمُهُ مَسْجِدُ القَرْيَةِ'], questionType: 'general' },
                            ],
                        },
                    },
                ],
            },
        ],
    },
];

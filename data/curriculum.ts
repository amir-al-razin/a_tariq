export type ChunkType =
    | 'vocabulary'
    | 'grammar_rule'
    | 'application'
    | 'q_and_a'
    | 'assessment'
    | 'mixed';

// ─────────────────────────────────────────────
// Payload types (typed for engine templates)
// ─────────────────────────────────────────────

export interface VocabWord {
    id: number;
    /** Arabic with full diacritics (harakat) — exactly as in the book */
    ar: string;
    /** Transliteration */
    romanized: string;
    /** English meaning */
    en: string;
    /** Bengali meaning */
    bn: string;
    emoji?: string;
}

export interface GrammarRule {
    label: string;
    arabic: string;
    romanized: string;
    meaning: string;
    examples?: { ar: string; en: string }[];
}

export interface ApplicationItem {
    emoji: string;
    ar: string;
    en: string;
}

export interface QAItem {
    emoji: string;
    question_ar: string;
    question_en: string;
    correct_ar: string;
    correct_en: string;
    options_ar: string[];
}

export interface ChunkPayload {
    words?: VocabWord[];
    rules?: GrammarRule[];
    items?: ApplicationItem[];
    questions?: QAItem[];
    instruction?: string;
}

export interface CurriculumChunk {
    id: string;
    type: ChunkType;
    titleEn: string;
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
    subtitle: string;
    lessons: LessonData[];
}

// ─────────────────────────────────────────────
// Real Pedagogical Data — Let's Learn Arabic
// Diacritics strategy: full tashkeel in early lessons,
// gradually fading per the author's teaching method.
// ─────────────────────────────────────────────
export const CHAPTERS: ChapterData[] = [
    {
        id: 1,
        titleAr: 'الباب الأول',
        titleEn: 'Chapter One',
        subtitle: 'Beginner-friendly foundations',
        lessons: [
            {
                darsNumber: 1,
                chunks: [
                    {
                        id: '1-1-1',
                        type: 'vocabulary',
                        titleEn: 'Initial Vocabulary (Masculine)',
                        titleAr: 'مُفْرَدَات (مُذَكَّر)',
                        payload: {
                            words: [
                                { id: 1, ar: 'كِتَابٌ', romanized: 'kitābun', en: 'A book', bn: 'একটি বই', emoji: '📖' },
                                { id: 2, ar: 'قَلَمٌ', romanized: 'qalamun', en: 'A pen', bn: 'একটি কলম', emoji: '🖊️' },
                                { id: 3, ar: 'كُرْسِيٌّ', romanized: 'kursiyyun', en: 'A chair', bn: 'একটি চেয়ার', emoji: '🪑' },
                                { id: 4, ar: 'بَيْتٌ', romanized: 'baytun', en: 'A house', bn: 'একটি ঘর', emoji: '🏠' },
                                { id: 5, ar: 'بَابٌ', romanized: 'bābun', en: 'A door', bn: 'একটি দরজা', emoji: '🚪' },
                                { id: 6, ar: 'مِصْبَاحٌ', romanized: 'miṣbāḥun', en: 'A lamp', bn: 'একটি বাতি', emoji: '💡' },
                                { id: 7, ar: 'جِدَارٌ', romanized: 'jidārun', en: 'A wall', bn: 'একটি দেয়াল', emoji: '🧱' },
                                { id: 8, ar: 'سَرِيْرٌ', romanized: 'sarīrun', en: 'A bed', bn: 'একটি খাট', emoji: '🛏️' },
                            ],
                        },
                    },
                    {
                        id: '1-1-2',
                        type: 'grammar_rule',
                        titleEn: 'Masculine Demonstrative Pronouns',
                        titleAr: 'أَسْمَاءُ الإِشَارَة (مُذَكَّر)',
                        payload: {
                            rules: [
                                {
                                    label: 'NEAR — This',
                                    arabic: 'هَذَا',
                                    romanized: 'hādhā',
                                    meaning: 'This (masculine)',
                                    examples: [
                                        { ar: 'هَذَا كِتَابٌ', en: 'This is a book.' },
                                        { ar: 'هَذَا بَابٌ', en: 'This is a door.' },
                                    ],
                                },
                                {
                                    label: 'FAR — That',
                                    arabic: 'ذَلِكَ',
                                    romanized: 'dhālika',
                                    meaning: 'That (masculine)',
                                    examples: [
                                        { ar: 'ذَلِكَ قَلَمٌ', en: 'That is a pen.' },
                                        { ar: 'ذَلِكَ كُرْسِيٌّ', en: 'That is a chair.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-1-3',
                        type: 'application',
                        titleEn: 'Application — Images & Translation (Part 1)',
                        titleAr: 'تَطْبِيق الإِشَارَة وَالمُفْرَدَات',
                        payload: {
                            items: [
                                { emoji: '🚪', ar: 'هَذَا بَابٌ', en: 'This is a door.' },
                                { emoji: '💡', ar: 'ذَلِكَ مِصْبَاحٌ', en: 'That is a lamp.' },
                                { emoji: '🧱', ar: 'هَذَا جِدَارٌ', en: 'This is a wall.' },
                                { emoji: '🪑', ar: 'ذَلِكَ كُرْسِيٌّ', en: 'That is a chair.' },
                                { emoji: '🕌', ar: 'هَذَا مَسْجِدٌ', en: 'This is a mosque.' },
                            ],
                        },
                    },
                    {
                        id: '1-1-4',
                        type: 'vocabulary',
                        titleEn: 'Secondary Vocabulary (Feminine)',
                        titleAr: 'مُفْرَدَات (مُؤَنَّث)',
                        payload: {
                            words: [
                                { id: 1, ar: 'مَدْرَسَةٌ', romanized: 'madrasatun', en: 'A madrasa', bn: 'একটি মাদ্রাসা', emoji: '🏫' },
                                { id: 2, ar: 'سَبُّوْرَةٌ', romanized: 'sabbūratun', en: 'A blackboard', bn: 'একটি ব্ল্যাকবোর্ড', emoji: '🖊️' },
                                { id: 3, ar: 'مِسْطَرَةٌ', romanized: 'misṭaratun', en: 'A ruler', bn: 'একটি রুলার', emoji: '📏' },
                                { id: 4, ar: 'حَقِيْبَةٌ', romanized: 'ḥaqībatun', en: 'A bag', bn: 'একটি ব্যাগ', emoji: '🎒' },
                                { id: 5, ar: 'كُرَّاسَةٌ', romanized: 'kurrāsatun', en: 'A notebook', bn: 'একটি খাতা', emoji: '📓' },
                                { id: 6, ar: 'طَاوِلَةٌ', romanized: 'ṭāwilatun', en: 'A table', bn: 'একটি টেবিল', emoji: '🪵' },
                                { id: 7, ar: 'حُجْرَةٌ', romanized: 'ḥujratun', en: 'A room', bn: 'একটি কামরা', emoji: '🚪' },
                                { id: 8, ar: 'نَافِذَةٌ', romanized: 'nāfidhatun', en: 'A window', bn: 'একটি জানালা', emoji: '🪟' },
                            ],
                        },
                    },
                    {
                        id: '1-1-5',
                        type: 'grammar_rule',
                        titleEn: 'Feminine Demonstrative Pronouns',
                        titleAr: 'أَسْمَاءُ الإِشَارَة (مُؤَنَّث)',
                        payload: {
                            rules: [
                                {
                                    label: 'NEAR — This (fem.)',
                                    arabic: 'هَذِهِ',
                                    romanized: 'hādhihi',
                                    meaning: 'This (feminine)',
                                    examples: [
                                        { ar: 'هَذِهِ مَدْرَسَةٌ', en: 'This is a madrasa.' },
                                        { ar: 'هَذِهِ حُجْرَةٌ', en: 'This is a room.' },
                                    ],
                                },
                                {
                                    label: 'FAR — That (fem.)',
                                    arabic: 'تِلْكَ',
                                    romanized: 'tilka',
                                    meaning: 'That (feminine)',
                                    examples: [
                                        { ar: 'تِلْكَ سَبُّوْرَةٌ', en: 'That is a blackboard.' },
                                        { ar: 'تِلْكَ حَقِيْبَةٌ', en: 'That is a bag.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-1-6',
                        type: 'application',
                        titleEn: 'Application — Images & Translation (Part 2)',
                        titleAr: 'تَطْبِيق الإِشَارَة وَالمُفْرَدَات ٢',
                        payload: {
                            items: [
                                { emoji: '🏫', ar: 'هَذِهِ مَدْرَسَةٌ', en: 'This is a madrasa.' },
                                { emoji: '🖊️', ar: 'تِلْكَ سَبُّوْرَةٌ', en: 'That is a blackboard.' },
                                { emoji: '🚪', ar: 'هَذِهِ حُجْرَةٌ', en: 'This is a room.' },
                                { emoji: '🎒', ar: 'تِلْكَ حَقِيْبَةٌ', en: 'That is a bag.' },
                            ],
                        },
                    },
                    {
                        id: '1-1-7',
                        type: 'vocabulary',
                        titleEn: 'Tertiary Vocabulary (Mixed)',
                        titleAr: 'مُفْرَدَات (مُخْتَلِط)',
                        payload: {
                            words: [
                                { id: 1, ar: 'قُفْلٌ', romanized: 'quflun', en: 'A lock', bn: 'একটি তালা', emoji: '🔒' },
                                { id: 2, ar: 'مِفْتَاحٌ', romanized: 'miftāḥun', en: 'A key', bn: 'একটি চাবি', emoji: '🔑' },
                                { id: 3, ar: 'صُنْدُوْقٌ', romanized: 'ṣundūqun', en: 'A box', bn: 'একটি বাক্স', emoji: '📦' },
                                { id: 4, ar: 'سَاعَةٌ', romanized: "sā'atun", en: 'A watch/clock', bn: 'একটি ঘড়ি', emoji: '⌚' },
                                { id: 5, ar: 'مِظَلَّةٌ', romanized: 'midhallatun', en: 'An umbrella', bn: 'একটি ছাতা', emoji: '☂️' },
                                { id: 6, ar: 'نَظَّارَةٌ', romanized: 'nadhdharatun', en: 'Glasses', bn: 'একটি চশমা', emoji: '👓' },
                                { id: 7, ar: 'سَيَّارَةٌ', romanized: 'sayyāratun', en: 'A car', bn: 'একটি কার', emoji: '🚗' },
                                { id: 8, ar: 'دَرَّاجَةٌ', romanized: 'darrājatun', en: 'A bicycle', bn: 'একটি সাইকেল', emoji: '🚲' },
                            ],
                        },
                    },
                    {
                        id: '1-1-8',
                        type: 'grammar_rule',
                        titleEn: 'Interrogative Grammar Rule (مَا)',
                        titleAr: 'أَدَوَاتُ الاسْتِفْهَام (مَا)',
                        payload: {
                            rules: [
                                {
                                    label: 'What is THIS? (masc.)',
                                    arabic: 'مَا هَذَا ؟',
                                    romanized: 'mā hādhā?',
                                    meaning: 'What is this? (masculine)',
                                    examples: [
                                        { ar: 'مَا هَذَا ؟ — هَذَا كِتَابٌ', en: 'What is this? — This is a book.' },
                                    ],
                                },
                                {
                                    label: 'What is THAT? (masc.)',
                                    arabic: 'مَا ذَلِكَ ؟',
                                    romanized: 'mā dhālika?',
                                    meaning: 'What is that? (masculine)',
                                    examples: [
                                        { ar: 'مَا ذَلِكَ ؟ — ذَلِكَ قَلَمٌ', en: 'What is that? — That is a pen.' },
                                    ],
                                },
                                {
                                    label: 'What is THIS? (fem.)',
                                    arabic: 'مَا هَذِهِ ؟',
                                    romanized: 'mā hādhihi?',
                                    meaning: 'What is this? (feminine)',
                                    examples: [
                                        { ar: 'مَا هَذِهِ ؟ — هَذِهِ مِسْطَرَةٌ', en: 'What is this? — This is a ruler.' },
                                    ],
                                },
                                {
                                    label: 'What is THAT? (fem.)',
                                    arabic: 'مَا تِلْكَ ؟',
                                    romanized: 'mā tilka?',
                                    meaning: 'What is that? (feminine)',
                                    examples: [
                                        { ar: 'مَا تِلْكَ ؟ — تِلْكَ سَبُّوْرَةٌ', en: 'What is that? — That is a blackboard.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-1-9',
                        type: 'q_and_a',
                        titleEn: 'Explicit Q&A Practice',
                        titleAr: 'تَدْرِيب سُؤَال وَجَوَاب',
                        payload: {
                            instruction: 'Read the Q&A and say the meaning (প্রশ্নোত্তরগুলো পড়ো ও অর্থ বলো)',
                            questions: [
                                {
                                    emoji: '📖',
                                    question_ar: 'مَا هَذَا ؟',
                                    question_en: 'What is this?',
                                    correct_ar: 'هَذَا كِتَابٌ',
                                    correct_en: 'This is a book.',
                                    options_ar: ['هَذَا كِتَابٌ', 'ذَلِكَ بَابٌ', 'هَذِهِ كُرَّاسَةٌ'],
                                },
                                {
                                    emoji: '🖊️',
                                    question_ar: 'مَا ذَلِكَ ؟',
                                    question_en: 'What is that?',
                                    correct_ar: 'ذَلِكَ قَلَمٌ',
                                    correct_en: 'That is a pen.',
                                    options_ar: ['هَذَا كِتَابٌ', 'ذَلِكَ قَلَمٌ', 'تِلْكَ مِسْطَرَةٌ'],
                                },
                                {
                                    emoji: '📏',
                                    question_ar: 'مَا هَذِهِ ؟',
                                    question_en: 'What is this?',
                                    correct_ar: 'هَذِهِ مِسْطَرَةٌ',
                                    correct_en: 'This is a ruler.',
                                    options_ar: ['هَذِهِ مِسْطَرَةٌ', 'تِلْكَ سَبُّوْرَةٌ', 'هَذَا قَلَمٌ'],
                                },
                                {
                                    emoji: '🖊️',
                                    question_ar: 'مَا تِلْكَ ؟',
                                    question_en: 'What is that?',
                                    correct_ar: 'تِلْكَ سَبُّوْرَةٌ',
                                    correct_en: 'That is a blackboard.',
                                    options_ar: ['هَذِهِ حَقِيْبَةٌ', 'تِلْكَ سَبُّوْرَةٌ', 'هَذَا مِصْبَاحٌ'],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-1-10',
                        type: 'assessment',
                        titleEn: 'Interactive Assessment',
                        titleAr: 'تَدْرِيب عَمَلِي',
                        payload: {
                            instruction: 'Answer by looking at the pictures (ছবি দেখে উত্তর দাও)',
                            questions: [
                                {
                                    emoji: '🪑',
                                    question_ar: 'مَا هَذَا ؟',
                                    question_en: 'What is this?',
                                    correct_ar: 'هَذَا كُرْسِيٌّ',
                                    correct_en: 'This is a chair.',
                                    options_ar: ['هَذَا كُرْسِيٌّ', 'ذَلِكَ سَرِيْرٌ', 'هَذَا بَابٌ'],
                                },
                                {
                                    emoji: '🏠',
                                    question_ar: 'مَا ذَلِكَ ؟',
                                    question_en: 'What is that?',
                                    correct_ar: 'ذَلِكَ بَيْتٌ',
                                    correct_en: 'That is a house.',
                                    options_ar: ['ذَلِكَ مَسْجِدٌ', 'ذَلِكَ بَيْتٌ', 'هَذَا جِدَارٌ'],
                                },
                                {
                                    emoji: '🪟',
                                    question_ar: 'مَا هَذِهِ ؟',
                                    question_en: 'What is this?',
                                    correct_ar: 'هَذِهِ نَافِذَةٌ',
                                    correct_en: 'This is a window.',
                                    options_ar: ['هَذِهِ نَافِذَةٌ', 'تِلْكَ حُجْرَةٌ', 'هَذِهِ مَدْرَسَةٌ'],
                                },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 2,
                chunks: [
                    {
                        id: '1-2-1',
                        type: 'vocabulary',
                        titleEn: 'Adjectives (Masculine & Feminine)',
                        titleAr: 'الصِّفَات (مُذَكَّر وَمُؤَنَّث)',
                        payload: {
                            words: [
                                { id: 1, ar: 'جَدِيدٌ / جَدِيدَةٌ', romanized: 'jadīdun / jadīdatun', en: 'New (m/f)', bn: 'নতুন', emoji: '✨' },
                                { id: 2, ar: 'قَدِيمٌ / قَدِيمَةٌ', romanized: 'qadīmun / qadīmatun', en: 'Old (m/f)', bn: 'পুরোনো', emoji: '🕰️' },
                                { id: 3, ar: 'جَمِيلٌ / جَمِيلَةٌ', romanized: 'jamīlun / jamīlatun', en: 'Beautiful (m/f)', bn: 'সুন্দর', emoji: '🌸' },
                                { id: 4, ar: 'كَبِيرٌ / كَبِيرَةٌ', romanized: 'kabīrun / kabīratun', en: 'Big (m/f)', bn: 'বড়', emoji: '🏔️' },
                                { id: 5, ar: 'صَغِيرٌ / صَغِيرَةٌ', romanized: 'ṣaghīrun / ṣaghīratun', en: 'Small (m/f)', bn: 'ছোট', emoji: '🔬' },
                                { id: 6, ar: 'جَيِّدٌ / جَيِّدَةٌ', romanized: "jayyidun / jayyidatun", en: 'Good (m/f)', bn: 'ভালো', emoji: '👍' },
                                { id: 7, ar: 'نَظِيفٌ / نَظِيفَةٌ', romanized: 'naẓīfun / naẓīfatun', en: 'Clean (m/f)', bn: 'পরিষ্কার', emoji: '🧹' },
                                { id: 8, ar: 'وَسِخٌ / وَسِخَةٌ', romanized: 'wasikhun / wasikhatun', en: 'Dirty (m/f)', bn: 'ময়লা', emoji: '🪣' },
                            ],
                        },
                    },
                    {
                        id: '1-2-2',
                        type: 'grammar_rule',
                        titleEn: 'Noun-Adjective Agreement',
                        titleAr: 'مُطَابَقَة الصِّفَة لِلْمَوْصُوف',
                        payload: {
                            rules: [
                                {
                                    label: 'Masculine noun → masculine adjective',
                                    arabic: 'كِتَابٌ جَدِيدٌ',
                                    romanized: 'kitābun jadīdun',
                                    meaning: 'A new book',
                                    examples: [
                                        { ar: 'مَسْجِدٌ كَبِيرٌ', en: 'A big mosque' },
                                        { ar: 'قُفْلٌ جَيِّدٌ', en: 'A good lock' },
                                        { ar: 'بَيْتٌ صَغِيرٌ', en: 'A small house' },
                                    ],
                                },
                                {
                                    label: 'Feminine noun (ة) → feminine adjective',
                                    arabic: 'كُرَّاسَةٌ جَدِيدَةٌ',
                                    romanized: 'kurrāsatun jadīdatun',
                                    meaning: 'A new notebook',
                                    examples: [
                                        { ar: 'مَدْرَسَةٌ كَبِيرَةٌ', en: 'A big madrasa' },
                                        { ar: 'حُجْرَةٌ صَغِيرَةٌ', en: 'A small room' },
                                        { ar: 'سَاعَةٌ قَدِيمَةٌ', en: 'An old clock' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-2-3',
                        type: 'application',
                        titleEn: 'Images & Noun-Adjective Phrases',
                        titleAr: 'تَطْبِيق الصِّفَة مَعَ الصُّوَر',
                        payload: {
                            items: [
                                { emoji: '📖', ar: 'هَذَا كِتَابٌ جَدِيدٌ', en: 'This is a new book.' },
                                { emoji: '⌚', ar: 'تِلْكَ سَاعَةٌ جَدِيدَةٌ', en: 'That is a new clock.' },
                                { emoji: '🚩', ar: 'ذَلِكَ عَلَمٌ جَمِيلٌ', en: 'That is a beautiful flag.' },
                                { emoji: '🪭', ar: 'هَذِهِ مِرْوَحَةٌ جَيِّدَةٌ', en: 'This is a good fan.' },
                                { emoji: '🎒', ar: 'تِلْكَ حَقِيبَةٌ جَمِيلَةٌ', en: 'That is a beautiful bag.' },
                                { emoji: '🏠', ar: 'هَذَا بَيْتٌ صَغِيرٌ', en: 'This is a small house.' },
                                { emoji: '🕌', ar: 'ذَلِكَ مَسْجِدٌ كَبِيرٌ', en: 'That is a big mosque.' },
                                { emoji: '☂️', ar: 'هَذِهِ مِظَلَّةٌ قَدِيمَةٌ', en: 'This is an old umbrella.' },
                                { emoji: '👓', ar: 'تِلْكَ نَظَّارَةٌ جَدِيدَةٌ', en: 'That is a new pair of glasses.' },
                            ],
                        },
                    },
                    {
                        id: '1-2-4',
                        type: 'vocabulary',
                        titleEn: 'Secondary Vocabulary (Clothing & Household)',
                        titleAr: 'مُفْرَدَات (مَلَابِس وَأَدَوَات)',
                        payload: {
                            words: [
                                { id: 1, ar: 'فِرَاشٌ', romanized: 'firāshun', en: 'A mattress/bed', bn: 'একটি বিছানা', emoji: '🛏️' },
                                { id: 2, ar: 'وِسَادَةٌ', romanized: 'wisādatun', en: 'A pillow', bn: 'একটি বালিশ', emoji: '🛏️' },
                                { id: 3, ar: 'قَمِيصٌ', romanized: 'qamīṣun', en: 'A shirt', bn: 'একটি জামা', emoji: '👕' },
                                { id: 4, ar: 'قَلَنْسُوَةٌ', romanized: 'qalansuwatun', en: 'A cap', bn: 'একটি টুপি', emoji: '🧢' },
                                { id: 5, ar: 'لِبَاسٌ', romanized: 'libāsun', en: 'Clothing/dress', bn: 'একটি পোশাক', emoji: '👗' },
                                { id: 6, ar: 'عِمَامَةٌ', romanized: "'imāmatun", en: 'A turban', bn: 'একটি পাগড়ী', emoji: '🎩' },
                                { id: 7, ar: 'مِنْدِيلٌ', romanized: 'mindīlun', en: 'A handkerchief', bn: 'একটি রুমাল', emoji: '🧣' },
                                { id: 8, ar: 'حِذَاءٌ', romanized: "ḥidhā'un", en: 'A shoe', bn: 'একটি জুতা', emoji: '👟' },
                            ],
                        },
                    },
                    {
                        id: '1-2-5',
                        type: 'q_and_a',
                        titleEn: 'Sentence Reading Practice',
                        titleAr: 'تَدْرِيب قِرَاءَة الجُمَل',
                        payload: {
                            instruction: 'Read each sentence and say its meaning (প্রতিটি বাক্য পড়ো ও অর্থ বলো)',
                            questions: [
                                { emoji: '🕌', question_ar: 'مَا هَذَا ؟', question_en: 'What is this?', correct_ar: 'هَذَا مَسْجِدٌ جَدِيدٌ', correct_en: 'This is a new mosque.', options_ar: ['هَذَا مَسْجِدٌ جَدِيدٌ', 'هَذَا بَيْتٌ كَبِيرٌ', 'ذَلِكَ مَسْجِدٌ قَدِيمٌ'] },
                                { emoji: '🔒', question_ar: 'مَا هَذَا ؟', question_en: 'What is this?', correct_ar: 'هَذَا قُفْلٌ جَيِّدٌ', correct_en: 'This is a good lock.', options_ar: ['هَذَا قُفْلٌ جَيِّدٌ', 'ذَلِكَ قُفْلٌ صَغِيرٌ', 'هَذَا مِفْتَاحٌ جَدِيدٌ'] },
                                { emoji: '👕', question_ar: 'مَا هَذَا ؟', question_en: 'What is this?', correct_ar: 'هَذَا قَمِيصٌ جَدِيدٌ', correct_en: 'This is a new shirt.', options_ar: ['هَذَا قَمِيصٌ جَدِيدٌ', 'هَذَا لِبَاسٌ كَبِيرٌ', 'تِلْكَ عِمَامَةٌ جَدِيدَةٌ'] },
                                { emoji: '🧢', question_ar: 'مَا تِلْكَ ؟', question_en: 'What is that?', correct_ar: 'تِلْكَ قَلَنْسُوَةٌ جَدِيدَةٌ', correct_en: 'That is a new cap.', options_ar: ['هَذِهِ وِسَادَةٌ جَمِيلَةٌ', 'تِلْكَ قَلَنْسُوَةٌ جَدِيدَةٌ', 'تِلْكَ عِمَامَةٌ قَدِيمَةٌ'] },
                            ],
                        },
                    },
                    {
                        id: '1-2-6',
                        type: 'application',
                        titleEn: 'Fluency Reading Block',
                        titleAr: 'قِرَاءَة لِلطَّلَاقَة',
                        payload: {
                            items: [
                                { emoji: '🕌', ar: 'هَذَا مَسْجِدٌ جَدِيدٌ', en: 'This is a new mosque.' },
                                { emoji: '🔒', ar: 'هَذَا قُفْلٌ جَيِّدٌ', en: 'This is a good lock.' },
                                { emoji: '🛏️', ar: 'هَذَا فِرَاشٌ نَظِيفٌ', en: 'This is a clean bed.' },
                                { emoji: '🚪', ar: 'تِلْكَ حُجْرَةٌ نَظِيفَةٌ', en: 'That is a clean room.' },
                                { emoji: '🧣', ar: 'ذَلِكَ مِنْدِيلٌ صَغِيرٌ', en: 'That is a small handkerchief.' },
                                { emoji: '🎩', ar: 'هَذِهِ عِمَامَةٌ جَدِيدَةٌ', en: 'This is a new turban.' },
                                { emoji: '👕', ar: 'هَذَا قَمِيصٌ جَدِيدٌ', en: 'This is a new shirt.' },
                                { emoji: '🧢', ar: 'تِلْكَ قَلَنْسُوَةٌ جَدِيدَةٌ', en: 'That is a new cap.' },
                                { emoji: '🪣', ar: 'هَذِهِ سَبُّورَةٌ وَسِخَةٌ', en: 'This blackboard is dirty.' },
                                { emoji: '🧣', ar: 'ذَلِكَ مِنْدِيلٌ وَسِخٌ', en: 'That handkerchief is dirty.' },
                            ],
                        },
                    },
                    {
                        id: '1-2-7',
                        type: 'assessment',
                        titleEn: 'Exercise Assessment (Lesson 2)',
                        titleAr: 'تَقْيِيم التَّمَارِين (الدَّرْس ٢)',
                        payload: {
                            instruction: 'Select the correct adjective+noun pairing from the lesson drills.',
                            questions: [
                                { emoji: '🚩', question_ar: 'اِخْتَرِ التَّرْكِيبَ الصَّحِيحَ لِـ "A beautiful flag"', question_en: 'Choose the correct Arabic for “A beautiful flag”.', correct_ar: 'عَلَمٌ جَمِيلٌ', correct_en: 'A beautiful flag.', options_ar: ['عَلَمٌ جَمِيلٌ', 'عَلَمٌ جَمِيلَةٌ', 'عَلَمَةٌ جَمِيلَةٌ'] },
                                { emoji: '🕌', question_ar: 'اِخْتَرِ التَّرْكِيبَ الصَّحِيحَ لِـ "A big madrasa"', question_en: 'Choose the correct Arabic for “A big madrasa”.', correct_ar: 'مَدْرَسَةٌ كَبِيرَةٌ', correct_en: 'A big madrasa.', options_ar: ['مَدْرَسَةٌ كَبِيرَةٌ', 'مَدْرَسَةٌ كَبِيرٌ', 'مَدْرَسٌ كَبِيرٌ'] },
                                { emoji: '💡', question_ar: 'اِخْتَرِ التَّرْكِيبَ الصَّحِيحَ لِـ "An old lamp"', question_en: 'Choose the correct Arabic for “An old lamp”.', correct_ar: 'مِصْبَاحٌ قَدِيمٌ', correct_en: 'An old lamp.', options_ar: ['مِصْبَاحٌ قَدِيمٌ', 'مِصْبَاحٌ قَدِيمَةٌ', 'مِصْبَاحَةٌ قَدِيمَةٌ'] },
                                { emoji: '⌚', question_ar: 'اِخْتَرِ التَّرْكِيبَ الصَّحِيحَ لِـ "An old clock"', question_en: 'Choose the correct Arabic for “An old clock”.', correct_ar: 'سَاعَةٌ قَدِيمَةٌ', correct_en: 'An old clock.', options_ar: ['سَاعَةٌ قَدِيمَةٌ', 'سَاعَةٌ قَدِيمٌ', 'سَاعَةٌ جَدِيدٌ'] },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 3,
                chunks: [
                    {
                        id: '1-3-1',
                        type: 'vocabulary',
                        titleEn: 'People & Adjectives (Part 1)',
                        titleAr: 'مُفْرَدَات (الأشْخَاص والصِّفَات)',
                        payload: {
                            words: [
                                { id: 1, ar: 'تِلْمِيذٌ', romanized: 'tilmīdhun', en: 'A male student', bn: 'একজন ছাত্র', emoji: '👦' },
                                { id: 2, ar: 'تِلْمِيذَةٌ', romanized: 'tilmīdhatun', en: 'A female student', bn: 'একজন ছাত্রী', emoji: '👧' },
                                { id: 3, ar: 'مُعَلِّمٌ', romanized: "mu'allimun", en: 'A male teacher', bn: 'একজন শিক্ষক', emoji: '👨‍🏫' },
                                { id: 4, ar: 'مُعَلِّمَةٌ', romanized: "mu'allimatun", en: 'A female teacher', bn: 'একজন শিক্ষিকা', emoji: '👩‍🏫' },
                                { id: 5, ar: 'وَلَدٌ', romanized: 'waladun', en: 'A boy', bn: 'একটি ছেলে', emoji: '👶' },
                                { id: 6, ar: 'بِنْتٌ', romanized: 'bintun', en: 'A girl', bn: 'একটি মেয়ে', emoji: '👧' },
                                { id: 7, ar: 'مُؤَدَّبٌ', romanized: "mu'addabun", en: 'Polite / well-behaved', bn: 'ভদ্র, সভ্য', emoji: '😊' },
                                { id: 8, ar: 'طِفْلٌ / طِفْلَةٌ', romanized: 'ṭiflun / ṭiflatun', en: 'A child (m/f)', bn: 'একটি শিশু', emoji: '🍼' },
                            ],
                        },
                    },
                    {
                        id: '1-3-2',
                        type: 'grammar_rule',
                        titleEn: 'Personal Pronouns',
                        titleAr: 'الضَّمَائِر الشَّخْصِيَّة',
                        payload: {
                            rules: [
                                { label: '1st person', arabic: 'أَنَا', romanized: 'anā', meaning: 'I (m/f)', examples: [{ ar: 'أَنَا تِلْمِيذٌ', en: 'I am a student.' }] },
                                { label: '2nd person masculine', arabic: 'أَنْتَ', romanized: 'anta', meaning: 'You (male)', examples: [{ ar: 'أَنْتَ تِلْمِيذٌ جَدِيدٌ', en: 'You are a new student.' }] },
                                { label: '2nd person feminine', arabic: 'أَنْتِ', romanized: 'anti', meaning: 'You (female)', examples: [{ ar: 'أَنْتِ تِلْمِيذَةٌ جَدِيدَةٌ', en: 'You are a new (female) student.' }] },
                                { label: '3rd person masculine', arabic: 'هُوَ', romanized: 'huwa', meaning: 'He', examples: [{ ar: 'هُوَ مُعَلِّمٌ', en: 'He is a teacher.' }] },
                                { label: '3rd person feminine', arabic: 'هِيَ', romanized: 'hiya', meaning: 'She', examples: [{ ar: 'هِيَ تِلْمِيذَةٌ ذَكِيَّةٌ', en: 'She is an intelligent student.' }] },
                            ],
                        },
                    },
                    {
                        id: '1-3-3',
                        type: 'grammar_rule',
                        titleEn: 'Interrogative Particles: هَلْ & مَنْ',
                        titleAr: 'أَدَوَات الاسْتِفْهَام: هَلْ وَمَنْ',
                        payload: {
                            rules: [
                                {
                                    label: 'هَلْ — Yes/No question',
                                    arabic: 'هَلْ ؟',
                                    romanized: "hal?",
                                    meaning: 'Are you / Is he…?',
                                    examples: [
                                        { ar: 'هَلْ أَنْتَ تِلْمِيذٌ ؟ — نَعَمْ', en: 'Are you a student? — Yes.' },
                                        { ar: 'هَلْ هُوَ مُعَلِّمٌ ؟ — لَا، بَلْ هُوَ تِلْمِيذٌ', en: 'Is he a teacher? — No, rather he is a student.' },
                                    ],
                                },
                                {
                                    label: 'مَنْ — Who question',
                                    arabic: 'مَنْ ؟',
                                    romanized: 'man?',
                                    meaning: 'Who?',
                                    examples: [
                                        { ar: 'مَنْ أَنْتَ يَا وَلَدُ ؟ — أَنَا بِلَالٌ', en: 'Who are you, O boy? — I am Bilal.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-3-4',
                        type: 'vocabulary',
                        titleEn: 'People & Adjectives (Part 2)',
                        titleAr: 'مُفْرَدَات (المِهَن وَالصِّفَات)',
                        payload: {
                            words: [
                                { id: 1, ar: 'تَاجِرٌ', romanized: 'tājirun', en: 'A merchant', bn: 'একজন ব্যবসায়ী', emoji: '🛒' },
                                { id: 2, ar: 'فَلَّاحٌ', romanized: 'fallāḥun', en: 'A farmer', bn: 'একজন কৃষক', emoji: '👨‍🌾' },
                                { id: 3, ar: 'رَجُلٌ', romanized: 'rajulun', en: 'A man', bn: 'একজন লোক/পুরুষ', emoji: '👨' },
                                { id: 4, ar: 'اِمْرَأَةٌ', romanized: "imra'atun", en: 'A woman', bn: 'একজন মহিলা', emoji: '👩' },
                                { id: 5, ar: 'غَنِيٌّ', romanized: 'ghaniyyun', en: 'Rich', bn: 'ধনী', emoji: '💰' },
                                { id: 6, ar: 'فَقِيرٌ', romanized: 'faqīrun', en: 'Poor', bn: 'দরিদ্র, গরীব', emoji: '🙏' },
                                { id: 7, ar: 'ذَكِيٌّ', romanized: 'dhakiyyun', en: 'Intelligent', bn: 'মেধাবী, বুদ্ধিমান', emoji: '🧠' },
                                { id: 8, ar: 'غَبِيٌّ', romanized: 'ghabiyyun', en: 'Dull / Stupid', bn: 'মেধাহীন, নির্বোধ', emoji: '😵' },
                            ],
                        },
                    },
                    {
                        id: '1-3-5',
                        type: 'q_and_a',
                        titleEn: 'Conversational Q&A Practice',
                        titleAr: 'تَدْرِيب المُحَادَثَة',
                        payload: {
                            instruction: 'Practice the conversation patterns (কথোপকথনের ধরন অনুশীলন করো)',
                            questions: [
                                {
                                    emoji: '👦',
                                    question_ar: 'مَنْ أَنْتَ يَا وَلَدُ ؟',
                                    question_en: 'Who are you, O boy?',
                                    correct_ar: 'أَنَا بِلَالٌ',
                                    correct_en: 'I am Bilal.',
                                    options_ar: ['أَنَا بِلَالٌ', 'هُوَ بِلَالٌ', 'أَنْتَ بِلَالٌ'],
                                },
                                {
                                    emoji: '📚',
                                    question_ar: 'هَلْ أَنْتَ تِلْمِيذٌ جَدِيدٌ ؟',
                                    question_en: 'Are you a new student?',
                                    correct_ar: 'نَعَمْ، أَنَا تِلْمِيذٌ جَدِيدٌ',
                                    correct_en: 'Yes, I am a new student.',
                                    options_ar: ['نَعَمْ، أَنَا تِلْمِيذٌ جَدِيدٌ', 'لَا، أَنَا مُعَلِّمٌ', 'بَلْ أَنَا وَلَدٌ'],
                                },
                                {
                                    emoji: '👨‍🏫',
                                    question_ar: 'هَلْ هُوَ مُعَلِّمٌ ؟',
                                    question_en: 'Is he a teacher?',
                                    correct_ar: 'لَا، بَلْ هُوَ تِلْمِيذٌ',
                                    correct_en: 'No, rather he is a student.',
                                    options_ar: ['نَعَمْ، هُوَ مُعَلِّمٌ', 'لَا، بَلْ هُوَ تِلْمِيذٌ', 'هِيَ مُعَلِّمَةٌ'],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-3-6',
                        type: 'application',
                        titleEn: 'Self-Introduction and Description Reading',
                        titleAr: 'قِرَاءَة التَّعْرِيف بِالنَّفْس وَالوَصْف',
                        payload: {
                            items: [
                                { emoji: '👦', ar: 'أَنَا بِلَالٌ - أَنَا تِلْمِيذٌ جَدِيدٌ - أَنَا وَلَدٌ مُؤَدَّبٌ', en: 'I am Bilal — I am a new student — I am a polite boy.' },
                                { emoji: '👧', ar: 'أَنَا عَائِشَةُ - أَنَا تِلْمِيذَةٌ جَدِيدَةٌ - أَنَا بِنْتٌ مُؤَدَّبَةٌ', en: 'I am Aisha — I am a new female student — I am a polite girl.' },
                                { emoji: '🧍', ar: 'هُوَ بِلَالٌ - هُوَ تِلْمِيذٌ جَدِيدٌ', en: 'He is Bilal — he is a new student.' },
                                { emoji: '🧍‍♀️', ar: 'هِيَ عَائِشَةُ - هِيَ تِلْمِيذَةٌ جَدِيدَةٌ', en: 'She is Aisha — she is a new female student.' },
                                { emoji: '🛒', ar: 'مَحْمُودٌ تَاجِرٌ غَنِيٌّ وَأَنَا فَلَّاحٌ فَقِيرٌ', en: 'Mahmud is a rich merchant and I am a poor farmer.' },
                                { emoji: '🧠', ar: 'بِلَالٌ تِلْمِيذٌ ذَكِيٌّ وَزَيْنَبُ تِلْمِيذَةٌ ذَكِيَّةٌ', en: 'Bilal is an intelligent student and Zainab is an intelligent female student.' },
                                { emoji: '👩', ar: 'عَائِشَةُ امْرَأَةٌ ذَكِيَّةٌ جِدًّا', en: 'Aisha is a very intelligent woman.' },
                            ],
                        },
                    },
                    {
                        id: '1-3-7',
                        type: 'assessment',
                        titleEn: 'Pronoun and Dialogue Assessment',
                        titleAr: 'تَقْيِيم الضَّمَائِر وَالحِوَار',
                        payload: {
                            instruction: 'Choose the answer that follows the dialogue pattern from Lesson 3.',
                            questions: [
                                { emoji: '👦', question_ar: 'مَنْ أَنْتَ يَا وَلَدُ ؟', question_en: 'Who are you, O boy?', correct_ar: 'أَنَا بِلَالٌ', correct_en: 'I am Bilal.', options_ar: ['أَنَا بِلَالٌ', 'هُوَ بِلَالٌ', 'أَنْتَ بِلَالٌ'] },
                                { emoji: '👧', question_ar: 'مَنْ أَنْتِ يَا بِنْتُ ؟', question_en: 'Who are you, O girl?', correct_ar: 'أَنَا زَيْنَبُ', correct_en: 'I am Zainab.', options_ar: ['أَنَا زَيْنَبُ', 'هُوَ زَيْنَبُ', 'أَنْتَ زَيْنَبُ'] },
                                { emoji: '📚', question_ar: 'هَلْ زَيْنَبُ تِلْمِيذَةٌ غَبِيَّةٌ ؟', question_en: 'Is Zainab a dull student?', correct_ar: 'لَا، بَلْ هِيَ تِلْمِيذَةٌ ذَكِيَّةٌ', correct_en: 'No, rather she is an intelligent student.', options_ar: ['لَا، بَلْ هِيَ تِلْمِيذَةٌ ذَكِيَّةٌ', 'نَعَمْ، هِيَ غَبِيَّةٌ', 'هُوَ تِلْمِيذٌ ذَكِيٌّ'] },
                                { emoji: '👨‍🏫', question_ar: 'هَلْ هُوَ مُعَلِّمٌ ؟', question_en: 'Is he a teacher?', correct_ar: 'لَا، بَلْ هُوَ تِلْمِيذٌ', correct_en: 'No, rather he is a student.', options_ar: ['لَا، بَلْ هُوَ تِلْمِيذٌ', 'نَعَمْ، هِيَ مُعَلِّمَةٌ', 'أَنْتَ مُعَلِّمٌ'] },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 4,
                chunks: [
                    {
                        id: '1-4-1',
                        type: 'grammar_rule',
                        titleEn: 'The Definite Article (ال) — Moon Letters',
                        titleAr: 'أَل التَّعْرِيف — حُرُوف القَمَرِيَّة',
                        payload: {
                            rules: [
                                {
                                    label: 'Moon letters — ل is pronounced',
                                    arabic: 'الْكِتَابُ',
                                    romanized: 'al-kitābu',
                                    meaning: 'The book (ل is clearly pronounced)',
                                    examples: [
                                        { ar: 'كِتَابٌ ➔ الْكِتَابُ', en: 'a book ➔ the book' },
                                        { ar: 'قَلَمٌ ➔ الْقَلَمُ', en: 'a pen ➔ the pen' },
                                        { ar: 'بَابٌ ➔ الْبَابُ', en: 'a door ➔ the door' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-4-2',
                        type: 'grammar_rule',
                        titleEn: 'The Definite Article (ال) — Sun Letters',
                        titleAr: 'أَل التَّعْرِيف — حُرُوف الشَّمْسِيَّة',
                        payload: {
                            rules: [
                                {
                                    label: 'Sun letters — ل is assimilated (shaddah)',
                                    arabic: 'الرَّجُلُ',
                                    romanized: 'ar-rajulu',
                                    meaning: 'The man (ل is silent, next letter doubles)',
                                    examples: [
                                        { ar: 'رَجُلٌ ➔ الرَّجُلُ', en: 'a man ➔ the man' },
                                        { ar: 'تِلْمِيذٌ ➔ التِّلْمِيذُ', en: 'a student ➔ the student' },
                                        { ar: 'سَاعَةٌ ➔ السَّاعَةُ', en: 'a clock ➔ the clock' },
                                        { ar: 'نَافِذَةٌ ➔ النَّافِذَةُ', en: 'a window ➔ the window' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-4-3',
                        type: 'vocabulary',
                        titleEn: 'New Adjectives',
                        titleAr: 'صِفَات جَدِيدَة',
                        payload: {
                            words: [
                                { id: 1, ar: 'شَرِيفٌ', romanized: 'sharīfun', en: 'Noble / Gentle', bn: 'ভদ্র, সম্মানিত', emoji: '🤝' },
                                { id: 2, ar: 'مَاهِرٌ', romanized: 'māhirun', en: 'Skilled', bn: 'দক্ষ', emoji: '🎯' },
                                { id: 3, ar: 'مَفْتُوحٌ', romanized: 'maftūḥun', en: 'Open', bn: 'খোলা', emoji: '🚪' },
                                { id: 4, ar: 'مُغْلَقٌ', romanized: 'mughlaqun', en: 'Closed', bn: 'বন্ধ', emoji: '🔒' },
                                { id: 5, ar: 'وَاسِعٌ', romanized: "wāsi'un", en: 'Spacious / Wide', bn: 'প্রশস্ত', emoji: '🏟️' },
                                { id: 6, ar: 'ضَيِّقٌ', romanized: 'ḍayyiqun', en: 'Narrow', bn: 'সংকীর্ণ', emoji: '🪜' },
                                { id: 7, ar: 'قَوِيٌّ', romanized: 'qawiyyun', en: 'Strong', bn: 'শক্তিশালী', emoji: '💪' },
                                { id: 8, ar: 'ضَعِيفٌ', romanized: "ḍa'īfun", en: 'Weak', bn: 'দুর্বল', emoji: '🪶' },
                                { id: 9, ar: 'مُجْتَهِدٌ', romanized: 'mujtahidun', en: 'Hardworking', bn: 'পরিশ্রমী', emoji: '📚' },
                                { id: 10, ar: 'مَشْهُورٌ', romanized: 'mashhūrun', en: 'Famous', bn: 'প্রসিদ্ধ', emoji: '⭐' },
                            ],
                        },
                    },
                    {
                        id: '1-4-4',
                        type: 'application',
                        titleEn: 'Definite Article in Sentences',
                        titleAr: 'تَطْبِيق أَل التَّعْرِيف فِي الجُمَل',
                        payload: {
                            items: [
                                { emoji: '📖', ar: 'الْكِتَابُ جَدِيدٌ', en: 'The book is new.' },
                                { emoji: '🏫', ar: 'الْمَدْرَسَةُ جَمِيلَةٌ', en: 'The school is beautiful.' },
                                { emoji: '🕌', ar: 'الْمَسْجِدُ كَبِيرٌ', en: 'The mosque is big.' },
                                { emoji: '⌚', ar: 'السَّاعَةُ جَدِيدَةٌ', en: 'The clock is new.' },
                                { emoji: '👨', ar: 'الرَّجُلُ شَرِيفٌ', en: 'The man is noble.' },
                                { emoji: '👦', ar: 'الْوَلَدُ ذَكِيٌّ', en: 'The boy is intelligent.' },
                                { emoji: '🚪', ar: 'الْبَابُ مَفْتُوحٌ', en: 'The door is open.' },
                                { emoji: '👕', ar: 'الْقَمِيصُ نَظِيفٌ', en: 'The shirt is clean.' },
                            ],
                        },
                    },
                    {
                        id: '1-4-5',
                        type: 'q_and_a',
                        titleEn: 'Q&A with كَيْفَ (How is…?)',
                        titleAr: 'أَسْئِلَة المُرَاجَعَة مَعَ كَيْفَ',
                        payload: {
                            instruction: 'Read the Q&A and say the meaning (প্রশ্নোত্তরগুলো পড়ো ও অর্থ বলো)',
                            questions: [
                                { emoji: '⌚', question_ar: 'كَيْفَ السَّاعَةُ ؟', question_en: 'How is the clock?', correct_ar: 'السَّاعَةُ جَمِيلَةٌ', correct_en: 'The clock is beautiful.', options_ar: ['السَّاعَةُ جَمِيلَةٌ', 'السَّاعَةُ قَدِيمَةٌ', 'الْكِتَابُ كَبِيرٌ'] },
                                { emoji: '📚', question_ar: 'كَيْفَ التِّلْمِيذُ ؟', question_en: 'How is the student?', correct_ar: 'التِّلْمِيذُ ذَكِيٌّ', correct_en: 'The student is intelligent.', options_ar: ['التِّلْمِيذُ ذَكِيٌّ', 'التِّلْمِيذُ ضَعِيفٌ', 'الرَّجُلُ مَاهِرٌ'] },
                                { emoji: '🎒', question_ar: 'هَلْ هَذِهِ الْحَقِيبَةُ جَمِيلَةٌ ؟', question_en: 'Is this bag beautiful?', correct_ar: 'نَعَمْ، هَذِهِ الْحَقِيبَةُ جَمِيلَةٌ', correct_en: 'Yes, this bag is beautiful.', options_ar: ['نَعَمْ، هَذِهِ الْحَقِيبَةُ جَمِيلَةٌ', 'لَا، هِيَ صَغِيرَةٌ', 'بَلْ هِيَ قَدِيمَةٌ'] },
                                { emoji: '⌚', question_ar: 'هَلْ تِلْكَ السَّاعَةُ جَدِيدَةٌ ؟', question_en: 'Is that clock new?', correct_ar: 'لَا، تِلْكَ السَّاعَةُ قَدِيمَةٌ', correct_en: 'No, that clock is old.', options_ar: ['نَعَمْ، هِيَ جَدِيدَةٌ', 'لَا، تِلْكَ السَّاعَةُ قَدِيمَةٌ', 'بَلْ هِيَ جَمِيلَةٌ'] },
                            ],
                        },
                    },
                    {
                        id: '1-4-6',
                        type: 'grammar_rule',
                        titleEn: 'Demonstratives with Definite Nouns',
                        titleAr: 'أَسْمَاء الإِشَارَة مَعَ الأَسْمَاء المُعَرَّفَة',
                        payload: {
                            rules: [
                                {
                                    label: 'Meaning shift: هٰذَا / ذٰلِكَ with definite noun',
                                    arabic: 'هٰذَا كِتَابٌ ➔ هٰذَا الْكِتَابُ',
                                    romanized: 'hādhā kitābun → hādhā al-kitābu',
                                    meaning: '“This is a book” becomes “this book”.',
                                    examples: [
                                        { ar: 'ذٰلِكَ قَلَمٌ ➔ ذٰلِكَ الْقَلَمُ', en: 'That is a pen → that pen' },
                                        { ar: 'هٰذِهِ سَاعَةٌ ➔ هٰذِهِ السَّاعَةُ', en: 'This is a clock → this clock' },
                                    ],
                                },
                                {
                                    label: 'Special form with امْرَأَةٌ',
                                    arabic: 'امْرَأَةٌ ➔ الْمَرْأَةُ',
                                    romanized: 'imraʾatun → al-marʾatu',
                                    meaning: 'When definite article is added, the form changes to الْمَرْأَةُ.',
                                    examples: [
                                        { ar: 'الْمَرْأَةُ شَرِيفَةٌ', en: 'The woman is noble.' },
                                        { ar: 'هِيَ امْرَأَةٌ شَرِيفَةٌ', en: 'She is a noble woman.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-4-7',
                        type: 'assessment',
                        titleEn: 'Definite-Noun Comprehension',
                        titleAr: 'تَقْيِيم فَهْم المُعَرَّف بِـ «ال»',
                        payload: {
                            instruction: 'Answer using the definite noun pattern and appropriate demonstrative.',
                            questions: [
                                { emoji: '📘', question_ar: 'كَيْفَ هٰذَا الْكِتَابُ ؟', question_en: 'How is this book?', correct_ar: 'هٰذَا الْكِتَابُ مُفِيدٌ', correct_en: 'This book is useful.', options_ar: ['هٰذَا الْكِتَابُ مُفِيدٌ', 'هٰذِهِ الْكِتَابُ مُفِيدَةٌ', 'هٰذَا كِتَابٌ مُفِيدٌ'] },
                                { emoji: '⌚', question_ar: 'كَيْفَ تِلْكَ السَّاعَةُ ؟', question_en: 'How is that clock?', correct_ar: 'تِلْكَ السَّاعَةُ جَدِيدَةٌ', correct_en: 'That clock is new.', options_ar: ['تِلْكَ السَّاعَةُ جَدِيدَةٌ', 'ذٰلِكَ السَّاعَةُ جَدِيدٌ', 'هُوَ جَدِيدٌ'] },
                                { emoji: '👨', question_ar: 'مَنْ هٰذَا الرَّجُلُ ؟', question_en: 'Who is this man?', correct_ar: 'هُوَ مَحْمُودٌ، هُوَ تَاجِرٌ كَبِيرٌ', correct_en: 'He is Mahmud, he is a big merchant.', options_ar: ['هُوَ مَحْمُودٌ، هُوَ تَاجِرٌ كَبِيرٌ', 'هِيَ مَحْمُودٌ', 'ذٰلِكَ سَاعَةٌ'] },
                                { emoji: '👩', question_ar: 'كَيْفَ الْمَرْأَةُ ؟', question_en: 'How is the woman?', correct_ar: 'الْمَرْأَةُ شَرِيفَةٌ', correct_en: 'The woman is noble.', options_ar: ['الْمَرْأَةُ شَرِيفَةٌ', 'الْمَرْأَةُ شَرِيفٌ', 'هُوَ شَرِيفٌ'] },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 5,
                chunks: [
                    {
                        id: '1-5-1',
                        type: 'grammar_rule',
                        titleEn: 'Singular Possessive Pronouns (My / Your / His / Her)',
                        titleAr: 'ضَمَائِر المِلْكِيَّة المُفْرَدَة',
                        payload: {
                            rules: [
                                { label: 'My (ـِي)', arabic: 'كِتَابِي', romanized: 'kitābī', meaning: 'My book', examples: [{ ar: 'قَلَمِي', en: 'My pen' }, { ar: 'مُعَلِّمِي', en: 'My teacher' }] },
                                { label: 'Your — male (ـُكَ)', arabic: 'كِتَابُكَ', romanized: 'kitābuka', meaning: 'Your book (m)', examples: [{ ar: 'قَلَمُكَ', en: 'Your pen (m)' }] },
                                { label: 'Your — female (ـُكِ)', arabic: 'كِتَابُكِ', romanized: 'kitābuki', meaning: 'Your book (f)', examples: [{ ar: 'سَاعَتُكِ', en: 'Your watch (f)' }] },
                                { label: 'His (ـُهُ)', arabic: 'كِتَابُهُ', romanized: 'kitābuhu', meaning: 'His book', examples: [{ ar: 'مُعَلِّمُهُ', en: 'His teacher' }] },
                                { label: 'Her (ـُهَا)', arabic: 'كِتَابُهَا', romanized: 'kitābuhā', meaning: 'Her book', examples: [{ ar: 'سَاعَتُهَا', en: 'Her watch' }] },
                            ],
                        },
                    },
                    {
                        id: '1-5-2',
                        type: 'vocabulary',
                        titleEn: 'Family Members',
                        titleAr: 'أَفْرَاد الأُسْرَة',
                        payload: {
                            words: [
                                { id: 1, ar: 'أَبٌ', romanized: 'abun', en: 'Father', bn: 'আব্বা', emoji: '👨' },
                                { id: 2, ar: 'أُمٌّ', romanized: 'ummun', en: 'Mother', bn: 'আম্মা', emoji: '👩' },
                                { id: 3, ar: 'أَخٌ', romanized: 'akhun', en: 'Brother', bn: 'ভাই', emoji: '👦' },
                                { id: 4, ar: 'أُخْتٌ', romanized: 'ukhtun', en: 'Sister', bn: 'বোন', emoji: '👧' },
                                { id: 5, ar: 'عَمٌّ', romanized: "'ammun", en: 'Paternal Uncle', bn: 'চাচা', emoji: '👴' },
                                { id: 6, ar: 'عَمَّةٌ', romanized: "'ammatun", en: 'Paternal Aunt', bn: 'ফুফু', emoji: '👵' },
                                { id: 7, ar: 'خَالٌ', romanized: 'khālun', en: 'Maternal Uncle', bn: 'মামা', emoji: '🧔' },
                                { id: 8, ar: 'خَالَةٌ', romanized: 'khālatun', en: 'Maternal Aunt', bn: 'খালা', emoji: '👱‍♀️' },
                                { id: 9, ar: 'جَدٌّ', romanized: 'jaddun', en: 'Grandfather', bn: 'দাদা/নানা', emoji: '🧓' },
                                { id: 10, ar: 'جَدَّةٌ', romanized: 'jaddatun', en: 'Grandmother', bn: 'দাদী/নানী', emoji: '👵' },
                                { id: 11, ar: 'صَدِيقٌ', romanized: 'ṣadīqun', en: 'Friend', bn: 'বন্ধু', emoji: '🤝' },
                                { id: 12, ar: 'اِسْمٌ', romanized: 'ismun', en: 'Name', bn: 'নাম', emoji: '🏷️' },
                            ],
                        },
                    },
                    {
                        id: '1-5-3',
                        type: 'grammar_rule',
                        titleEn: 'Irregular: Father (أَبٌ) & Brother (أَخٌ)',
                        titleAr: 'الأَسْمَاء الخَمْسَة: أَبٌ وَأَخٌ',
                        payload: {
                            rules: [
                                {
                                    label: 'Father with possessive pronouns',
                                    arabic: 'أَبُوكَ',
                                    romanized: 'abūka',
                                    meaning: 'Your father (م adds و for non-my forms)',
                                    examples: [
                                        { ar: 'أَبِي (my father)', en: 'abī — My father' },
                                        { ar: 'أَبُوكَ (your father)', en: 'abūka — Your father (m)' },
                                        { ar: 'أَبُوهُ (his father)', en: 'abūhu — His father' },
                                    ],
                                },
                                {
                                    label: 'Brother with possessive pronouns',
                                    arabic: 'أَخُوكَ',
                                    romanized: 'akhūka',
                                    meaning: 'Your brother (adds و for non-my forms)',
                                    examples: [
                                        { ar: 'أَخِي (my brother)', en: 'akhī — My brother' },
                                        { ar: 'أَخُوكَ (your brother)', en: 'akhūka — Your brother (m)' },
                                        { ar: 'أَخُوهَا (her brother)', en: 'akhūhā — Her brother' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-5-4',
                        type: 'q_and_a',
                        titleEn: 'Possessive Pronoun Q&A',
                        titleAr: 'أَسْئِلَة الضَّمَائِر المِلْكِيَّة',
                        payload: {
                            instruction: 'Read the Q&A and say the meaning',
                            questions: [
                                { emoji: '👦', question_ar: 'مَا اسْمُكَ يَا وَلَدُ ؟', question_en: 'What is your name, O boy?', correct_ar: 'اِسْمِي شَاهِدٌ', correct_en: 'My name is Shahid.', options_ar: ['اِسْمِي شَاهِدٌ', 'اِسْمُهُ شَاهِدٌ', 'اِسْمُكَ شَاهِدٌ'] },
                                { emoji: '🖊️', question_ar: 'كَيْفَ قَلَمُكَ ؟', question_en: 'How is your pen?', correct_ar: 'قَلَمِي جَيِّدٌ', correct_en: 'My pen is good.', options_ar: ['قَلَمِي جَيِّدٌ', 'قَلَمُهُ كَبِيرٌ', 'قَلَمُكَ جَدِيدٌ'] },
                                { emoji: '👧', question_ar: 'هَلْ فَاطِمَةُ أُخْتُكَ ؟', question_en: 'Is Fatima your sister?', correct_ar: 'نَعَمْ، هِيَ أُخْتِي', correct_en: 'Yes, she is my sister.', options_ar: ['نَعَمْ، هِيَ أُخْتِي', 'لَا، هِيَ أُمِّي', 'بَلْ هِيَ أُخْتُهُ'] },
                            ],
                        },
                    },
                    {
                        id: '1-5-5',
                        type: 'grammar_rule',
                        titleEn: 'Plural Possessive Pronouns (Our / Your [pl] / Their)',
                        titleAr: 'ضَمَائِر المِلْكِيَّة الجَمْع',
                        payload: {
                            rules: [
                                { label: 'Our (ـُنَا)', arabic: 'كِتَابُنَا', romanized: 'kitābunā', meaning: 'Our book', examples: [{ ar: 'اللهُ رَبُّنَا', en: 'Allah is our Lord' }, { ar: 'الْإِسْلَامُ دِيْنُنَا', en: 'Islam is our religion' }] },
                                { label: 'Your plural — male (ـُكُمْ)', arabic: 'كِتَابُكُمْ', romanized: 'kitābukum', meaning: 'Your book (pl. m)', examples: [{ ar: 'رَبُّكُمْ', en: 'Your Lord (pl)' }] },
                                { label: 'Their — male (ـُهُمْ)', arabic: 'كِتَابُهُمْ', romanized: 'kitābuhum', meaning: 'Their book (m)', examples: [{ ar: 'مُعَلِّمُهُمْ', en: 'Their teacher (m)' }] },
                            ],
                        },
                    },
                    {
                        id: '1-5-6',
                        type: 'application',
                        titleEn: 'Possessive Reading Passage',
                        titleAr: 'قِرَاءَة تَطْبِيقِيَّة لِلْمِلْكِيَّة',
                        payload: {
                            items: [
                                { emoji: '🏷️', ar: 'اِسْمِي شَاهِدٌ - هٰذَا كِتَابِي وَذٰلِكَ قَلَمِي', en: 'My name is Shahid — this is my book and that is my pen.' },
                                { emoji: '🎒', ar: 'هٰذِهِ حَقِيبَتِي وَتِلْكَ كُرَّاسَتِي', en: 'This is my bag and that is my notebook.' },
                                { emoji: '👧', ar: 'فَاطِمَةُ أُخْتِي وَأَنَا أَخُوهَا', en: 'Fatima is my sister and I am her brother.' },
                                { emoji: '🚪', ar: 'غُرْفَتِي نَظِيفَةٌ وَبَابُهَا مَفْتُوحٌ', en: 'My room is clean and its door is open.' },
                                { emoji: '👨‍🏫', ar: 'بَشِيرٌ مُعَلِّمِي وَأَنَا تِلْمِيذُهُ', en: 'Bashir is my teacher and I am his student.' },
                                { emoji: '👨‍👩‍👧', ar: 'أَبُونَا رَجُلٌ طَيِّبٌ وَأُمُّنَا امْرَأَةٌ طَيِّبَةٌ', en: 'Our father is a good man and our mother is a good woman.' },
                                { emoji: '🕌', ar: 'اللهُ رَبُّنَا وَرَبُّكُمْ - الإِسْلَامُ دِينُنَا وَدِينُكُمْ', en: 'Allah is our Lord and your Lord — Islam is our religion and your religion.' },
                            ],
                        },
                    },
                    {
                        id: '1-5-7',
                        type: 'assessment',
                        titleEn: 'Possessive Pronoun Assessment',
                        titleAr: 'تَقْيِيم ضَمَائِر المِلْكِيَّة',
                        payload: {
                            instruction: 'Pick the correct possessive form based on Lesson 5 patterns.',
                            questions: [
                                { emoji: '🖊️', question_ar: 'هَلْ هٰذَا قَلَمُكَ ؟', question_en: 'Is this your pen?', correct_ar: 'نَعَمْ، هٰذَا قَلَمِي', correct_en: 'Yes, this is my pen.', options_ar: ['نَعَمْ، هٰذَا قَلَمِي', 'نَعَمْ، هٰذَا قَلَمُهُ', 'لَا، هُوَ قَلَمُكَ'] },
                                { emoji: '👧', question_ar: 'هَلْ فَاطِمَةُ أُخْتُكَ ؟', question_en: 'Is Fatima your sister?', correct_ar: 'نَعَمْ، هِيَ أُخْتِي', correct_en: 'Yes, she is my sister.', options_ar: ['نَعَمْ، هِيَ أُخْتِي', 'لَا، هِيَ أُمِّي', 'هِيَ أُخْتُهُ'] },
                                { emoji: '📿', question_ar: 'يَا زَيْنَبُ! هَلْ هٰذَا عِقْدُكِ ؟', question_en: 'O Zainab! Is this your necklace?', correct_ar: 'نَعَمْ، هٰذَا عِقْدِي', correct_en: 'Yes, this is my necklace.', options_ar: ['نَعَمْ، هٰذَا عِقْدِي', 'نَعَمْ، هٰذَا عِقْدُهَا', 'لَا، هٰذَا عِقْدُكَ'] },
                                { emoji: '🌙', question_ar: 'مَنْ رَبُّكَ يَا مُسْلِمُ ؟', question_en: 'Who is your Lord, O Muslim?', correct_ar: 'رَبِّيَ اللهُ', correct_en: 'My Lord is Allah.', options_ar: ['رَبِّيَ اللهُ', 'دِينِي الإِسْلَامُ', 'هُوَ تِلْمِيذٌ'] },
                                { emoji: '🕋', question_ar: 'مَا قِبْلَتُنَا وَقِبْلَتُكُمْ ؟', question_en: 'What is our and your qiblah?', correct_ar: 'الْكَعْبَةُ قِبْلَتُنَا وَقِبْلَتُكُمْ', correct_en: 'The Kaaba is our qiblah and your qiblah.', options_ar: ['الْكَعْبَةُ قِبْلَتُنَا وَقِبْلَتُكُمْ', 'الْقُرْآنُ كِتَابُنَا', 'الْجَنَّةُ دَارُنَا'] },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 6,
                chunks: [
                    {
                        id: '1-6-1',
                        type: 'grammar_rule',
                        titleEn: 'Idafah Core Rule (Possessive Construction)',
                        titleAr: 'قَاعِدَة الإِضَافَة (المُضَاف وَالمُضَاف إِلَيْهِ)',
                        payload: {
                            rules: [
                                {
                                    label: 'Possessed noun (المُضَاف)',
                                    arabic: 'كِتَابُ رَاشِدٍ',
                                    romanized: 'kitābu rāshidin',
                                    meaning: 'Rashid\'s book',
                                    examples: [
                                        { ar: 'المُضَافُ لَا يَأْخُذُ التَّنْوِينَ', en: 'Mudaf does not take tanween.' },
                                        { ar: 'كِتَابُ عَائِشَةَ', en: 'Aisha\'s book' },
                                        { ar: 'كِتَابُ الْمُعَلِّمِ', en: 'The teacher\'s book' },
                                    ],
                                },
                                {
                                    label: 'Possessor noun (المُضَاف إِلَيْهِ)',
                                    arabic: 'رَاشِدٍ / عَائِشَةَ / الْمُعَلِّمِ',
                                    romanized: 'rāshidin / ʿāʾishata / al-muʿallimi',
                                    meaning: 'The second noun becomes genitive (majrur).',
                                    examples: [
                                        { ar: 'الرَّجُلُ المُذَكَّر: كِسْرَة (ــِ) أَوْ تَنْوِين كَسْر (ــٍ)', en: 'Masculine noun takes kasra / kasratan in genitive.' },
                                        { ar: 'اِسْمُ الأُنْثَى: فَتْحَة (ــَ) فِي هٰذَا الدَّرْس', en: 'Female proper names appear with fat-ha here.' },
                                    ],
                                },
                                {
                                    label: 'Special nouns: أَبٌ / أَخٌ',
                                    arabic: 'أَبُو فَاطِمَةَ ، أَخُو سَعِيدٍ',
                                    romanized: 'abū fāṭimata, akhū saʿīdin',
                                    meaning: 'When used as mudaf, they commonly appear with wāw.',
                                    examples: [
                                        { ar: 'أَبُو مَاجِدٍ', en: 'Majid\'s father' },
                                        { ar: 'أَخُو سَعِيدٍ', en: 'Saeed\'s brother' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-6-2',
                        type: 'application',
                        titleEn: 'Idafah Phrase Drills',
                        titleAr: 'تَدْرِيبَات عِبَارَات الإِضَافَة',
                        payload: {
                            items: [
                                { emoji: '🖊️', ar: 'قَلَمُ خَالِدٍ', en: 'Khalid\'s pen' },
                                { emoji: '⌚', ar: 'سَاعَةُ بَشِيرٍ', en: 'Bashir\'s watch' },
                                { emoji: '🏠', ar: 'بَيْتُ مَحْمُودٍ', en: 'Mahmud\'s house' },
                                { emoji: '👦', ar: 'أَخُو سَعِيدٍ', en: 'Saeed\'s brother' },
                                { emoji: '👧', ar: 'أُخْتُ بِلالٍ', en: 'Bilal\'s sister' },
                                { emoji: '🤝', ar: 'صَدِيقُ مَاجِدٍ', en: 'Majid\'s friend' },
                                { emoji: '📿', ar: 'عِقْدُ آمِنَةَ', en: 'Amina\'s necklace' },
                                { emoji: '🎒', ar: 'حَقِيبَةُ فَاطِمَةَ', en: 'Fatima\'s bag' },
                                { emoji: '🕌', ar: 'بَابُ الْمَسْجِدِ', en: 'The mosque\'s door' },
                                { emoji: '🏷️', ar: 'اِسْمُ الْوَلَدِ', en: 'The boy\'s name' },
                                { emoji: '🔑', ar: 'مِفْتَاحُ الْقُفْلِ', en: 'The lock\'s key' },
                                { emoji: '💡', ar: 'مِصْبَاحُ الْغُرْفَةِ', en: 'The room\'s lamp' },
                            ],
                        },
                    },
                    {
                        id: '1-6-3',
                        type: 'grammar_rule',
                        titleEn: 'Pronoun Substitution in Possessives',
                        titleAr: 'إِبْدَال المُضَاف إِلَيْهِ بِالضَّمِير',
                        payload: {
                            rules: [
                                {
                                    label: 'From noun possessor to pronoun',
                                    arabic: 'قَلَمُ مَحْمُودٍ ➔ قَلَمُهُ',
                                    romanized: 'qalamu maḥmūdin → qalamuhu',
                                    meaning: 'Replace explicit possessor with attached pronoun.',
                                    examples: [
                                        { ar: 'سَاعَةُ بَشِيرٍ جَمِيلَةٌ ➔ سَاعَتُهُ جَمِيلَةٌ', en: 'Bashir\'s watch is beautiful → His watch is beautiful.' },
                                        { ar: 'عِقْدُ آمِنَةَ جَمِيلٌ ➔ عِقْدُهَا جَمِيلٌ', en: 'Amina\'s necklace is beautiful → Her necklace is beautiful.' },
                                        { ar: 'أَبُو فَاطِمَةَ عَالِمٌ كَبِيرٌ ➔ أَبُوهَا عَالِمٌ كَبِيرٌ', en: 'Fatima\'s father is a great scholar → Her father is a great scholar.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-6-4',
                        type: 'q_and_a',
                        titleEn: 'Lesson 6 Q&A Practice',
                        titleAr: 'تَدْرِيب سُؤَال وَجَوَاب (الدَّرْس ٦)',
                        payload: {
                            instruction: 'Read the dialogue and answer like the book pattern.',
                            questions: [
                                { emoji: '👤', question_ar: 'مَنْ أَنْتَ أَيُّهَا الرَّجُلُ ؟', question_en: 'Who are you, O man?', correct_ar: 'أَنَا أَبُو فَاطِمَةَ وَعَمُّ خَالِدٍ', correct_en: 'I am Fatima\'s father and Khalid\'s uncle.', options_ar: ['أَنَا أَبُو فَاطِمَةَ وَعَمُّ خَالِدٍ', 'أَنَا تِلْمِيذٌ', 'أَنَا فِي الْبَيْتِ'] },
                                { emoji: '🕌', question_ar: 'هَلْ أَنْتَ إِمَامُ الْمَسْجِدِ ؟', question_en: 'Are you the mosque imam?', correct_ar: 'نَعَمْ، أَنَا إِمَامُ الْمَسْجِدِ', correct_en: 'Yes, I am the mosque imam.', options_ar: ['نَعَمْ، أَنَا إِمَامُ الْمَسْجِدِ', 'لَا، أَنَا تَاجِرٌ', 'هَلْ أَنْتَ؟'] },
                                { emoji: '🖊️', question_ar: 'هَلْ هٰذَا قَلَمُ خَالِدٍ ؟', question_en: 'Is this Khalid\'s pen?', correct_ar: 'نَعَمْ، هٰذَا قَلَمُ خَالِدٍ', correct_en: 'Yes, this is Khalid\'s pen.', options_ar: ['نَعَمْ، هٰذَا قَلَمُ خَالِدٍ', 'لَا، هٰذِهِ سَاعَةٌ', 'هٰذَا بَيْتٌ'] },
                                { emoji: '🚪', question_ar: 'هَلْ بَابُ الْبَيْتِ مَفْتُوحٌ ؟', question_en: 'Is the house door open?', correct_ar: 'لَا، بَابُ الْبَيْتِ مُغْلَقٌ', correct_en: 'No, the house door is closed.', options_ar: ['نَعَمْ، هُوَ مَفْتُوحٌ', 'لَا، بَابُ الْبَيْتِ مُغْلَقٌ', 'هُوَ جَمِيلٌ'] },
                            ],
                        },
                    },
                    {
                        id: '1-6-5',
                        type: 'vocabulary',
                        titleEn: 'New Vocabulary (Village & City Context)',
                        titleAr: 'مُفْرَدَات جَدِيدَة (القَرْيَة وَالمَدِينَة)',
                        payload: {
                            words: [
                                { id: 1, ar: 'طَرِيقٌ', romanized: 'ṭarīqun', en: 'Road / path', bn: 'পথ', emoji: '🛣️' },
                                { id: 2, ar: 'سُوقٌ', romanized: 'sūqun', en: 'Market', bn: 'বাজার', emoji: '🏪' },
                                { id: 3, ar: 'قَرْيَةٌ', romanized: 'qaryatun', en: 'Village', bn: 'গ্রাম', emoji: '🏡' },
                                { id: 4, ar: 'مَدِينَةٌ', romanized: 'madīnatun', en: 'City', bn: 'শহর', emoji: '🏙️' },
                                { id: 5, ar: 'مَنْظَرٌ', romanized: 'manẓarun', en: 'View / scenery', bn: 'দৃশ্য', emoji: '🌄' },
                                { id: 6, ar: 'جِدًّا', romanized: 'jiddan', en: 'Very', bn: 'খুব', emoji: '✨' },
                                { id: 7, ar: 'زَوْجٌ', romanized: 'zawjun', en: 'Husband', bn: 'স্বামী', emoji: '👨' },
                                { id: 8, ar: 'زَوْجَةٌ', romanized: 'zawjatun', en: 'Wife', bn: 'স্ত্রী', emoji: '👩' },
                                { id: 9, ar: 'وَالِدٌ', romanized: 'wālidun', en: 'Father', bn: 'আব্বা', emoji: '👴' },
                                { id: 10, ar: 'وَالِدَةٌ', romanized: 'wālidatun', en: 'Mother', bn: 'আম্মা', emoji: '👵' },
                            ],
                        },
                    },
                    {
                        id: '1-6-6',
                        type: 'application',
                        titleEn: 'Descriptive Reading (Village vs City)',
                        titleAr: 'قِرَاءَة وَصْفِيَّة (القَرْيَة وَالمَدِينَة)',
                        payload: {
                            items: [
                                { emoji: '🌄', ar: 'هٰذَا مَنْظَرُ الْقَرْيَةِ', en: 'This is the view of the village.' },
                                { emoji: '✨', ar: 'مَنْظَرُ الْقَرْيَةِ جَمِيلٌ جِدًّا', en: 'The village view is very beautiful.' },
                                { emoji: '🏪', ar: 'سُوقُ الْقَرْيَةِ صَغِيرٌ وَسُوقُ الْمَدِينَةِ كَبِيرٌ', en: 'The village market is small and the city market is big.' },
                                { emoji: '🧑‍🌾', ar: 'عَمُّ خَالِدٍ فَلَّاحٌ، اِسْمُهُ بَشِيرٌ', en: 'Khalid\'s uncle is a farmer; his name is Bashir.' },
                                { emoji: '👩‍🌾', ar: 'وَعَمَّةُ خَالِدٍ فَلَّاحَةٌ، اِسْمُهَا زَيْنَبُ', en: 'Khalid\'s aunt is a farmer woman; her name is Zainab.' },
                                { emoji: '🤝', ar: 'عَمُّ خَالِدٍ رَجُلٌ طَيِّبٌ وَعَمَّتُهُ امْرَأَةٌ طَيِّبَةٌ', en: 'Khalid\'s uncle is a good man and his aunt is a good woman.' },
                                { emoji: '💰', ar: 'تَاجِرُ الْمَدِينَةِ غَنِيٌّ جِدًّا وَفَلَّاحُ الْقَرْيَةِ فَقِيرٌ جِدًّا', en: 'The city merchant is very rich and the village farmer is very poor.' },
                                { emoji: '🛣️', ar: 'هٰذَا الطَّرِيقُ وَاسِعٌ وَذٰلِكَ الطَّرِيقُ ضَيِّقٌ', en: 'This road is wide and that road is narrow.' },
                            ],
                        },
                    },
                    {
                        id: '1-6-7',
                        type: 'application',
                        titleEn: 'Islamic Context Reading',
                        titleAr: 'قِرَاءَة سِيَاق إِسْلَامِي',
                        payload: {
                            items: [
                                { emoji: '📖', ar: 'الْقُرْآنُ كِتَابُ اللهِ', en: 'The Quran is the Book of Allah.' },
                                { emoji: '🕋', ar: 'الْكَعْبَةُ بَيْتُ اللهِ', en: 'The Kaaba is the House of Allah.' },
                                { emoji: '🕌', ar: 'مُحَمَّدٌ رَسُولُ اللهِ', en: 'Muhammad is the Messenger of Allah.' },
                                { emoji: '👨', ar: 'عَبْدُ اللهِ وَالِدُ الرَّسُولِ', en: 'Abdullah is the father of the Messenger.' },
                                { emoji: '👩', ar: 'آمِنَةُ وَالِدَتُهُ', en: 'Amina is his mother.' },
                                { emoji: '🤍', ar: 'خَدِيجَةُ زَوْجَةُ الرَّسُولِ', en: 'Khadijah is the wife of the Messenger.' },
                                { emoji: '👧', ar: 'فَاطِمَةُ بِنْتُ مُحَمَّدٍ', en: 'Fatimah is the daughter of Muhammad.' },
                                { emoji: '👳', ar: 'عَلِيٌّ زَوْجُ فَاطِمَةَ', en: 'Ali is Fatimah\'s husband.' },
                            ],
                        },
                    },
                    {
                        id: '1-6-8',
                        type: 'assessment',
                        titleEn: 'Comprehension Review (Lesson 6)',
                        titleAr: 'مُرَاجَعَة الفَهْم (الدَّرْس ٦)',
                        payload: {
                            instruction: 'Answer based on the reading and Q&A of Lesson 6.',
                            questions: [
                                { emoji: '🌄', question_ar: 'كَيْفَ مَنْظَرُ الْقَرْيَةِ ؟', question_en: 'How is the village view?', correct_ar: 'مَنْظَرُ الْقَرْيَةِ جَمِيلٌ جِدًّا', correct_en: 'The village view is very beautiful.', options_ar: ['مَنْظَرُ الْقَرْيَةِ جَمِيلٌ جِدًّا', 'مَنْظَرُ الْقَرْيَةِ قَدِيمٌ', 'مَنْظَرُ الْقَرْيَةِ ضَيِّقٌ'] },
                                { emoji: '🏪', question_ar: 'كَيْفَ سُوقُ الْقَرْيَةِ وَسُوقُ الْمَدِينَةِ ؟', question_en: 'How are the village and city markets?', correct_ar: 'سُوقُ الْقَرْيَةِ صَغِيرٌ وَسُوقُ الْمَدِينَةِ كَبِيرٌ', correct_en: 'Village market is small and city market is big.', options_ar: ['سُوقُ الْقَرْيَةِ صَغِيرٌ وَسُوقُ الْمَدِينَةِ كَبِيرٌ', 'كِلَاهُمَا صَغِيرٌ', 'كِلَاهُمَا كَبِيرٌ'] },
                                { emoji: '🧑‍🌾', question_ar: 'مَنْ بَشِيرٌ وَمَنْ زَيْنَبُ ؟', question_en: 'Who are Bashir and Zainab?', correct_ar: 'بَشِيرٌ فَلَّاحٌ وَزَيْنَبُ فَلَّاحَةٌ', correct_en: 'Bashir is a farmer and Zainab is a farmer woman.', options_ar: ['بَشِيرٌ فَلَّاحٌ وَزَيْنَبُ فَلَّاحَةٌ', 'بَشِيرٌ مُعَلِّمٌ وَزَيْنَبُ طَالِبَةٌ', 'بَشِيرٌ تَاجِرٌ وَزَيْنَبُ مُدِيرَةٌ'] },
                                { emoji: '👦', question_ar: 'مَنْ بِلَالٌ وَكَيْفَ هُوَ ؟', question_en: 'Who is Bilal and how is he?', correct_ar: 'بِلَالٌ تِلْمِيذٌ مُجْتَهِدٌ', correct_en: 'Bilal is a hardworking student.', options_ar: ['بِلَالٌ تِلْمِيذٌ مُجْتَهِدٌ', 'بِلَالٌ رَجُلٌ ضَعِيفٌ', 'بِلَالٌ تَاجِرٌ غَنِيٌّ'] },
                                { emoji: '👧', question_ar: 'مَنْ فَاطِمَةُ وَكَيْفَ هِيَ ؟', question_en: 'Who is Fatima and how is she?', correct_ar: 'فَاطِمَةُ تِلْمِيذَةٌ مُجْتَهِدَةٌ', correct_en: 'Fatima is a hardworking female student.', options_ar: ['فَاطِمَةُ تِلْمِيذَةٌ مُجْتَهِدَةٌ', 'فَاطِمَةُ بِنْتٌ ضَعِيفَةٌ', 'فَاطِمَةُ مُعَلِّمَةٌ'] },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 7,
                chunks: [
                    {
                        id: '1-7-1',
                        type: 'vocabulary',
                        titleEn: 'Prepositions of Place',
                        titleAr: 'حُرُوف وَظُرُوف المَكَان',
                        payload: {
                            words: [
                                { id: 1, ar: 'عِنْدَ', romanized: 'ʿinda', en: 'Near / with', bn: 'কাছে', emoji: '📍' },
                                { id: 2, ar: 'أَمَامَ', romanized: 'amāma', en: 'In front of', bn: 'সামনে', emoji: '↗️' },
                                { id: 3, ar: 'وَرَاءَ', romanized: 'warāʾa', en: 'Behind', bn: 'পেছনে', emoji: '↩️' },
                                { id: 4, ar: 'خَلْفَ', romanized: 'khalfa', en: 'Behind', bn: 'পিছনে', emoji: '↩️' },
                                { id: 5, ar: 'تَحْتَ', romanized: 'taḥta', en: 'Under', bn: 'নীচে', emoji: '⬇️' },
                                { id: 6, ar: 'فَوْقَ', romanized: 'fawqa', en: 'Above', bn: 'উপরে', emoji: '⬆️' },
                                { id: 7, ar: 'بِجَانِبِ', romanized: 'bijānibi', en: 'Beside', bn: 'পাশে', emoji: '↔️' },
                                { id: 8, ar: 'أَيْنَ ؟', romanized: 'ayna?', en: 'Where?', bn: 'কোথায়?', emoji: '❓' },
                            ],
                        },
                    },
                    {
                        id: '1-7-2',
                        type: 'grammar_rule',
                        titleEn: 'Prepositions with Pronouns & Nouns',
                        titleAr: 'اِسْتِعْمَال الظُّرُوف مَعَ الضَّمَائِر وَالأَسْمَاء',
                        payload: {
                            rules: [
                                {
                                    label: 'Two equivalent sentence patterns',
                                    arabic: 'عِنْدِي كِتَابٌ / الْكِتَابُ عِنْدِي',
                                    romanized: 'ʿindī kitābun / al-kitābu ʿindī',
                                    meaning: 'Both mean: The book is with me.',
                                    examples: [
                                        { ar: 'أَمَامَكَ كِتَابٌ / الْكِتَابُ أَمَامَكَ', en: 'A book is in front of you / The book is in front of you.' },
                                        { ar: 'فَوْقَهَا مِرْوَحَةٌ / الْمِرْوَحَةُ فَوْقَهَا', en: 'A fan is above her / The fan is above her.' },
                                    ],
                                },
                                {
                                    label: 'Question pattern with مَنْ',
                                    arabic: 'مَنْ عِنْدَهُ القَلَمُ ؟ / عِنْدَ مَنْ القَلَمُ ؟',
                                    romanized: 'man ʿindahu al-qalamu? / ʿinda man al-qalamu?',
                                    meaning: 'Who has the pen?',
                                    examples: [
                                        { ar: 'عِنْدَ مَنِ السَّاعَةُ ؟', en: 'Who has the watch?' },
                                        { ar: 'فَوْقَ مَنِ المِصْبَاحُ ؟', en: 'Above whom is the lamp?' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-7-3',
                        type: 'application',
                        titleEn: 'Place-Relation Sentence Drill',
                        titleAr: 'تَدْرِيب جُمَلِ المَوْقِع',
                        payload: {
                            items: [
                                { emoji: '⌚', ar: 'يَا مَاجِدُ! عِنْدَكَ سَاعَةٌ', en: 'O Majid! You have a watch.' },
                                { emoji: '🌀', ar: 'فَوْقَكَ مِرْوَحَةٌ', en: 'A fan is above you.' },
                                { emoji: '🚗', ar: 'وَرَاءَكَ سَيَّارَةٌ', en: 'A car is behind you.' },
                                { emoji: '🚲', ar: 'بِجَانِبِكَ دَرَّاجَةٌ', en: 'A bicycle is beside you.' },
                                { emoji: '🖊️', ar: 'يَا عَائِشَةُ! عِنْدَكِ قَلَمٌ', en: 'O Aisha! You have a pen.' },
                                { emoji: '🖤', ar: 'أَمَامَ المُعَلِّمِ سَبُّورَةٌ وَمَسَّاحَةٌ', en: 'In front of the teacher are a board and duster.' },
                                { emoji: '🕌', ar: 'صَدِيقُ بَشِيرٍ أَمَامَ المَسْجِدِ', en: 'Bashir\'s friend is in front of the mosque.' },
                                { emoji: '🌌', ar: 'السَّمَاءُ فَوْقَنَا وَالأَرْضُ تَحْتَنَا', en: 'The sky is above us and the earth is below us.' },
                            ],
                        },
                    },
                    {
                        id: '1-7-4',
                        type: 'q_and_a',
                        titleEn: 'Lesson 7 Q&A',
                        titleAr: 'أَسْئِلَة وَأَجْوِبَة الدَّرْس ٧',
                        payload: {
                            instruction: 'Answer using location prepositions from the lesson.',
                            questions: [
                                { emoji: '⌚', question_ar: 'مَاذَا عِنْدَكَ يَا مَاجِدُ ؟', question_en: 'What do you have, O Majid?', correct_ar: 'عِنْدِي سَاعَةٌ', correct_en: 'I have a watch.', options_ar: ['عِنْدِي سَاعَةٌ', 'عِنْدِي مِصْبَاحٌ', 'عِنْدِي مَسْجِدٌ'] },
                                { emoji: '🖊️', question_ar: 'مَاذَا عِنْدَ عَائِشَةَ ؟', question_en: 'What does Aisha have?', correct_ar: 'عِنْدَهَا قَلَمٌ', correct_en: 'She has a pen.', options_ar: ['عِنْدَهَا قَلَمٌ', 'عِنْدَهَا سَيَّارَةٌ', 'عِنْدَهَا مِفْتَاحٌ'] },
                                { emoji: '🖤', question_ar: 'مَاذَا أَمَامَ المُعَلِّمِ ؟', question_en: 'What is in front of the teacher?', correct_ar: 'أَمَامَ المُعَلِّمِ سَبُّورَةٌ وَمَسَّاحَةٌ', correct_en: 'A board and a duster are in front of the teacher.', options_ar: ['أَمَامَ المُعَلِّمِ سَبُّورَةٌ وَمَسَّاحَةٌ', 'أَمَامَهُ مِصْبَاحٌ', 'أَمَامَهُ قُفْلٌ'] },
                                { emoji: '🌌', question_ar: 'أَيْنَ السَّمَاءُ وَأَيْنَ الأَرْضُ ؟', question_en: 'Where are the sky and earth?', correct_ar: 'السَّمَاءُ فَوْقَنَا وَالأَرْضُ تَحْتَنَا', correct_en: 'The sky is above us and the earth is below us.', options_ar: ['السَّمَاءُ فَوْقَنَا وَالأَرْضُ تَحْتَنَا', 'السَّمَاءُ تَحْتَنَا', 'الأَرْضُ فَوْقَنَا'] },
                            ],
                        },
                    },
                    {
                        id: '1-7-5',
                        type: 'vocabulary',
                        titleEn: 'Supplementary Vocabulary',
                        titleAr: 'مُفْرَدَات إِضَافِيَّة',
                        payload: {
                            words: [
                                { id: 1, ar: 'مَسَّاحَةٌ', romanized: 'massāḥatun', en: 'Duster', bn: 'ডাস্টার', emoji: '🧽' },
                                { id: 2, ar: 'خَارِطَةٌ', romanized: 'khāriṭatun', en: 'Map', bn: 'ম্যাপ', emoji: '🗺️' },
                                { id: 3, ar: 'مِحْرَاثٌ', romanized: 'miḥrāthun', en: 'Plough', bn: 'লাঙ্গল', emoji: '🧑‍🌾' },
                                { id: 4, ar: 'مَكْسُورٌ', romanized: 'maksūrun', en: 'Broken', bn: 'ভাঙা', emoji: '🪓' },
                                { id: 5, ar: 'السَّمَاءُ', romanized: 'as-samāʾu', en: 'Sky', bn: 'আসমান', emoji: '☁️' },
                                { id: 6, ar: 'الأَرْضُ', romanized: 'al-arḍu', en: 'Earth', bn: 'পৃথিবী', emoji: '🌍' },
                                { id: 7, ar: 'قَلْبٌ', romanized: 'qalbun', en: 'Heart', bn: 'হৃদয়', emoji: '❤️' },
                                { id: 8, ar: 'نُورٌ', romanized: 'nūrun', en: 'Light', bn: 'আলো', emoji: '💫' },
                                { id: 9, ar: 'ظُلْمَةٌ', romanized: 'ẓulmatun', en: 'Darkness', bn: 'অন্ধকার', emoji: '🌑' },
                            ],
                        },
                    },
                    {
                        id: '1-7-6',
                        type: 'application',
                        titleEn: 'Dialogue Drill (Where? / With whom?)',
                        titleAr: 'تَدْرِيب الحِوَار (أَيْنَ؟ / عِنْدَ مَنْ؟)',
                        payload: {
                            items: [
                                { emoji: '⌚', ar: 'مَاذَا عِنْدَكَ يَا مَاجِدُ؟ — عِنْدِي سَاعَةٌ', en: 'What do you have, O Majid? — I have a watch.' },
                                { emoji: '🖊️', ar: 'وَمَاذَا عِنْدَ عَائِشَةَ؟ — عِنْدَهَا قَلَمٌ', en: 'And what does Aisha have? — She has a pen.' },
                                { emoji: '📍', ar: 'أَيْنَ السَّاعَةُ وَأَيْنَ الْقَلَمُ؟', en: 'Where are the watch and the pen?' },
                                { emoji: '📍', ar: 'السَّاعَةُ عِنْدِي وَالْقَلَمُ عِنْدَ عَائِشَةَ', en: 'The watch is with me and the pen is with Aisha.' },
                                { emoji: '🌀', ar: 'مَاذَا فَوْقَكِ يَا عَائِشَةُ؟ — فَوْقِي مِصْبَاحٌ', en: 'What is above you, O Aisha? — A lamp is above me.' },
                                { emoji: '🌀', ar: 'وَمَاذَا فَوْقَ مَاجِدٍ؟ — فَوْقَهُ مِرْوَحَةٌ', en: 'And what is above Majid? — A fan is above him.' },
                                { emoji: '🗺️', ar: 'عِنْدَ مَنِ الْخَارِطَةُ؟ — الْخَارِطَةُ عِنْدَ الْمُعَلِّمَةِ', en: 'Who has the map? — The map is with the female teacher.' },
                                { emoji: '🌌', ar: 'أَيْنَ السَّمَاءُ وَالْأَرْضُ؟ — السَّمَاءُ فَوْقَنَا وَالْأَرْضُ تَحْتَنَا', en: 'Where are the sky and the earth? — The sky is above us and the earth is below us.' },
                            ],
                        },
                    },
                    {
                        id: '1-7-7',
                        type: 'assessment',
                        titleEn: 'Comprehension Assessment (Lesson 7)',
                        titleAr: 'تَقْيِيم الفَهْم (الدَّرْس ٧)',
                        payload: {
                            instruction: 'Answer using prepositions of place from the lesson context.',
                            questions: [
                                { emoji: '📘', question_ar: 'عِنْدَ مَنِ الْقَلَمُ؟', question_en: 'With whom is the pen?', correct_ar: 'الْقَلَمُ عِنْدَ عَائِشَةَ', correct_en: 'The pen is with Aisha.', options_ar: ['الْقَلَمُ عِنْدَ عَائِشَةَ', 'الْقَلَمُ فَوْقَ مَاجِدٍ', 'الْقَلَمُ تَحْتَ الطَّاوِلَةِ'] },
                                { emoji: '🧽', question_ar: 'مَاذَا أَمَامَ الْمُعَلِّمِ؟', question_en: 'What is in front of the teacher?', correct_ar: 'أَمَامَهُ سَبُّورَةٌ وَمَسَّاحَةٌ', correct_en: 'A board and a duster are in front of him.', options_ar: ['أَمَامَهُ سَبُّورَةٌ وَمَسَّاحَةٌ', 'أَمَامَهُ مِفْتَاحٌ', 'أَمَامَهُ حَقِيبَةٌ'] },
                                { emoji: '🕌', question_ar: 'مَنْ أَمَامَ الْمَسْجِدِ؟', question_en: 'Who is in front of the mosque?', correct_ar: 'صَدِيقُ بَشِيرٍ أَمَامَ الْمَسْجِدِ', correct_en: 'Bashir’s friend is in front of the mosque.', options_ar: ['صَدِيقُ بَشِيرٍ أَمَامَ الْمَسْجِدِ', 'بَشِيرٌ فِي الْمَسْجِدِ', 'خَالِدٌ خَلْفَ الْمَسْجِدِ'] },
                                { emoji: '🎒', question_ar: 'عِنْدَ مَنْ عِقْدُ عَائِشَةَ؟', question_en: 'With whom is Aisha’s necklace?', correct_ar: 'عِقْدُهَا عِنْدَ فَاطِمَةَ', correct_en: 'Her necklace is with Fatima.', options_ar: ['عِقْدُهَا عِنْدَ فَاطِمَةَ', 'عِقْدُهَا عِنْدَ مَاجِدٍ', 'عِقْدُهَا فَوْقَ الْمِنْضَدَةِ'] },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 8,
                chunks: [
                    {
                        id: '1-8-1',
                        type: 'grammar_rule',
                        titleEn: 'Preposition فِي and Genitive Case',
                        titleAr: 'حَرْف الجَرّ «فِي» وَحَالَة الجَرّ',
                        payload: {
                            rules: [
                                {
                                    label: 'Core rule',
                                    arabic: 'فِي + اِسْم = مَجْرُور',
                                    romanized: 'fī + ism = majrūr',
                                    meaning: 'After فِي, the noun becomes genitive (kasra ending).',
                                    examples: [
                                        { ar: 'الْمَسْجِدُ ➔ فِي الْمَسْجِدِ', en: 'The mosque ➔ in the mosque' },
                                        { ar: 'الْقَرْيَةُ ➔ فِي الْقَرْيَةِ', en: 'The village ➔ in the village' },
                                        { ar: 'سُوقُ الْقَرْيَةِ ➔ فِي سُوقِ الْقَرْيَةِ', en: 'Village market ➔ in the village market' },
                                    ],
                                },
                                {
                                    label: 'With attached pronouns',
                                    arabic: 'غُرْفَتُهُ ➔ فِي غُرْفَتِهِ',
                                    romanized: 'ghurfatuhu → fī ghurfatihi',
                                    meaning: 'Pronoun-linked nouns also shift vowel in genitive context.',
                                    examples: [
                                        { ar: 'غُرْفَتُكَ ➔ فِي غُرْفَتِكَ', en: 'Your room (m) ➔ in your room' },
                                        { ar: 'غُرْفَتُكِ ➔ فِي غُرْفَتِكِ', en: 'Your room (f) ➔ in your room' },
                                        { ar: 'غُرْفَتُهَا ➔ فِي غُرْفَتِهَا', en: 'Her room ➔ in her room' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-8-2',
                        type: 'application',
                        titleEn: 'Sentence Pairs with فِي',
                        titleAr: 'تَطْبِيق جُمَل «فِي»',
                        payload: {
                            items: [
                                { emoji: '🕌', ar: 'فِي الْمَسْجِدِ رَجُلٌ', en: 'There is a man in the mosque.' },
                                { emoji: '🕌', ar: 'الرَّجُلُ فِي الْمَسْجِدِ', en: 'The man is in the mosque.' },
                                { emoji: '💡', ar: 'فِي الْغُرْفَةِ مِصْبَاحٌ', en: 'There is a lamp in the room.' },
                                { emoji: '📿', ar: 'فِي الصُّنْدُوقِ عِقْدٌ', en: 'There is a necklace in the box.' },
                                { emoji: '🌳', ar: 'فِي الْحَدِيقَةِ شَجَرَةٌ', en: 'There is a tree in the garden.' },
                                { emoji: '🎒', ar: 'فِي حَقِيبَةِ عَائِشَةَ كِتَابٌ وَقَلَمٌ', en: 'In Aisha\'s bag there is a book and a pen.' },
                                { emoji: '🌀', ar: 'عَائِشَةُ فِي غُرْفَتِهَا', en: 'Aisha is in her room.' },
                                { emoji: '🚗', ar: 'هُوَ فِي سَيَّارَتِهِ', en: 'He is in his car.' },
                            ],
                        },
                    },
                    {
                        id: '1-8-3',
                        type: 'q_and_a',
                        titleEn: 'Lesson 8 Q&A',
                        titleAr: 'أَسْئِلَة وَأَجْوِبَة الدَّرْس ٨',
                        payload: {
                            instruction: 'Answer by locating people/things using فِي.',
                            questions: [
                                { emoji: '🕌', question_ar: 'مَنْ فِي الْمَسْجِدِ ؟', question_en: 'Who is in the mosque?', correct_ar: 'فِي الْمَسْجِدِ رَجُلٌ', correct_en: 'A man is in the mosque.', options_ar: ['فِي الْمَسْجِدِ رَجُلٌ', 'الرَّجُلُ أَمَامَكَ', 'فِي الْمَسْجِدِ بَابٌ'] },
                                { emoji: '🧍', question_ar: 'أَيْنَ الرَّجُلُ ؟', question_en: 'Where is the man?', correct_ar: 'هُوَ فِي الْمَسْجِدِ', correct_en: 'He is in the mosque.', options_ar: ['هُوَ فِي الْمَسْجِدِ', 'هُوَ فَوْقَ الْمَسْجِدِ', 'هُوَ وَرَاءَ الْبَابِ'] },
                                { emoji: '🎒', question_ar: 'مَاذَا فِي حَقِيبَةِ عَائِشَةَ ؟', question_en: 'What is in Aisha\'s bag?', correct_ar: 'فِي حَقِيبَةِ عَائِشَةَ كِتَابٌ وَقَلَمٌ', correct_en: 'A book and a pen are in Aisha\'s bag.', options_ar: ['فِي حَقِيبَةِ عَائِشَةَ كِتَابٌ وَقَلَمٌ', 'فِيهَا سَاعَةٌ فَقَطْ', 'فِيهَا مِفْتَاحٌ'] },
                                { emoji: '🚗', question_ar: 'أَيْنَ مَحْمُودٌ ؟', question_en: 'Where is Mahmud?', correct_ar: 'هُوَ فِي سَيَّارَتِهِ', correct_en: 'He is in his car.', options_ar: ['هُوَ فِي سَيَّارَتِهِ', 'هُوَ فِي بَيْتِهِ', 'هُوَ تَحْتَ السَّيَّارَةِ'] },
                                { emoji: '🌙', question_ar: 'فِي قَلْبِ مَنِ الظُّلْمَةُ ؟', question_en: 'In whose heart is darkness?', correct_ar: 'فِي قَلْبِ الْكَافِرِ', correct_en: 'In the heart of the disbeliever.', options_ar: ['فِي قَلْبِ الْكَافِرِ', 'فِي قَلْبِ الْمُسْلِمِ', 'فِي الْمَسْجِدِ'] },
                            ],
                        },
                    },
                    {
                        id: '1-8-4',
                        type: 'application',
                        titleEn: 'Extended Meaning Sentences',
                        titleAr: 'جُمَل مُوَسَّعَة لِتَثْبِيت المَعْنَى',
                        payload: {
                            items: [
                                { emoji: '💚', ar: 'فِي قَلْبِ الْمُسْلِمِ نُورٌ', en: 'In the Muslim\'s heart there is light.' },
                                { emoji: '🌑', ar: 'فِي قَلْبِ الْكَافِرِ ظُلْمَةٌ', en: 'In the disbeliever\'s heart there is darkness.' },
                                { emoji: '📖', ar: 'فِي كِتَابِ اللهِ قِصَّةٌ جَمِيلَةٌ', en: 'In the Book of Allah there is a beautiful story.' },
                                { emoji: '🕌', ar: 'قَبْرُ الرَّسُولِ فِي الْمَدِينَةِ الْمُنَوَّرَةِ', en: 'The Messenger\'s grave is in Madinah Al-Munawwarah.' },
                            ],
                        },
                    },
                    {
                        id: '1-8-5',
                        type: 'vocabulary',
                        titleEn: 'Core Words in Context',
                        titleAr: 'مُفْرَدَات سِيَاقِيَّة',
                        payload: {
                            words: [
                                { id: 1, ar: 'فِي', romanized: 'fī', en: 'In / at', bn: 'ভিতরে / মধ্যে', emoji: '📍' },
                                { id: 2, ar: 'دُكَّانٌ', romanized: 'dukkānun', en: 'Shop', bn: 'দোকান', emoji: '🏪' },
                                { id: 3, ar: 'شَجَرَةٌ', romanized: 'shajaratun', en: 'Tree', bn: 'গাছ', emoji: '🌳' },
                                { id: 4, ar: 'قَبْرٌ', romanized: 'qabrun', en: 'Grave', bn: 'কবর', emoji: '🪦' },
                                { id: 5, ar: 'الْمَدِينَةُ الْمُنَوَّرَةُ', romanized: 'al-madīnatu al-munawwaratu', en: 'Madinah Al-Munawwarah', bn: 'মদিনা মুনাওয়ারা', emoji: '🕌' },
                            ],
                        },
                    },
                    {
                        id: '1-8-6',
                        type: 'assessment',
                        titleEn: 'Preposition فِي Assessment',
                        titleAr: 'تَقْيِيم حَرْف الجَرّ «فِي»',
                        payload: {
                            instruction: 'Choose answers that correctly apply the فِي pattern from Lesson 8.',
                            questions: [
                                { emoji: '🕌', question_ar: 'أَيْنَ الرَّجُلُ؟', question_en: 'Where is the man?', correct_ar: 'هُوَ فِي الْمَسْجِدِ', correct_en: 'He is in the mosque.', options_ar: ['هُوَ فِي الْمَسْجِدِ', 'هُوَ فَوْقَ الْمَسْجِدِ', 'هُوَ أَمَامَ الْمَسْجِدِ'] },
                                { emoji: '🎒', question_ar: 'مَاذَا فِي حَقِيبَةِ عَائِشَةَ؟', question_en: 'What is in Aisha’s bag?', correct_ar: 'فِيهَا كِتَابٌ وَقَلَمٌ', correct_en: 'A book and a pen are in it.', options_ar: ['فِيهَا كِتَابٌ وَقَلَمٌ', 'فِيهَا مِفْتَاحٌ وَقُفْلٌ', 'فِيهَا سَاعَةٌ فَقَطْ'] },
                                { emoji: '🌀', question_ar: 'يَا عَائِشَةُ! مَاذَا فِي غُرْفَتِكِ؟', question_en: 'O Aisha! What is in your room?', correct_ar: 'فِي غُرْفَتِي مِرْوَحَةٌ', correct_en: 'There is a fan in my room.', options_ar: ['فِي غُرْفَتِي مِرْوَحَةٌ', 'فِي غُرْفَتِي سَيَّارَةٌ', 'فِي غُرْفَتِي مَسْجِدٌ'] },
                                { emoji: '🌙', question_ar: 'فِي قَلْبِ مَنِ النُّورُ؟', question_en: 'In whose heart is the light?', correct_ar: 'فِي قَلْبِ الْمُسْلِمِ', correct_en: 'In the heart of the Muslim.', options_ar: ['فِي قَلْبِ الْمُسْلِمِ', 'فِي قَلْبِ الْكَافِرِ', 'فِي الْحَدِيقَةِ'] },
                                { emoji: '🪦', question_ar: 'أَيْنَ قَبْرُ الرَّسُولِ؟', question_en: 'Where is the grave of the Messenger?', correct_ar: 'قَبْرُهُ فِي الْمَدِينَةِ الْمُنَوَّرَةِ', correct_en: 'His grave is in Madinah Al-Munawwarah.', options_ar: ['قَبْرُهُ فِي الْمَدِينَةِ الْمُنَوَّرَةِ', 'قَبْرُهُ فِي الْقَرْيَةِ', 'قَبْرُهُ خَلْفَ الْمَسْجِدِ'] },
                            ],
                        },
                    },
                ],
            },
            {
                darsNumber: 9,
                chunks: [
                    {
                        id: '1-9-1',
                        type: 'vocabulary',
                        titleEn: 'New Vocabulary of Lesson 9',
                        titleAr: 'مُفْرَدَات الدَّرْس ٩',
                        payload: {
                            words: [
                                { id: 1, ar: 'عَاصِمَةٌ', romanized: 'ʿāṣimatun', en: 'Capital city', bn: 'রাজধানী', emoji: '🏛️' },
                                { id: 2, ar: 'طَائِرَةٌ', romanized: 'ṭāʾiratun', en: 'Airplane', bn: 'বিমান', emoji: '✈️' },
                                { id: 3, ar: 'بَطِيءٌ', romanized: 'baṭīʾun', en: 'Slow', bn: 'ধীরগামী', emoji: '🐢' },
                                { id: 4, ar: 'سَرِيعٌ', romanized: 'sarīʿun', en: 'Fast', bn: 'দ্রুতগামী', emoji: '⚡' },
                                { id: 5, ar: 'فَاكِهَةٌ', romanized: 'fākihatun', en: 'Fruit', bn: 'ফল', emoji: '🍎' },
                                { id: 6, ar: 'لَذِيذٌ', romanized: 'ladhīdhun', en: 'Delicious', bn: 'সুস্বাদু', emoji: '😋' },
                                { id: 7, ar: 'مَطَارٌ', romanized: 'maṭārun', en: 'Airport', bn: 'বিমানবন্দর', emoji: '🛫' },
                                { id: 8, ar: 'وَرْدَةٌ', romanized: 'wardatun', en: 'Rose', bn: 'গোলাপ', emoji: '🌹' },
                                { id: 9, ar: 'مِنْضَدَةٌ', romanized: 'minḍadatun', en: 'Small table', bn: 'তেপায়া/টেবিল', emoji: '🪵' },
                                { id: 10, ar: 'يَدٌ', romanized: 'yadun', en: 'Hand', bn: 'হাত', emoji: '✋' },
                                { id: 11, ar: 'كُرَةٌ', romanized: 'kuratun', en: 'Ball', bn: 'বল', emoji: '⚽' },
                                { id: 12, ar: 'لَاعِبٌ', romanized: 'lāʿibun', en: 'Player', bn: 'খেলোয়াড়', emoji: '🏃' },
                                { id: 13, ar: 'لَاعِبَةٌ', romanized: 'lāʿibatun', en: 'Female player', bn: 'মহিলা খেলোয়াড়', emoji: '🏃‍♀️' },
                            ],
                        },
                    },
                    {
                        id: '1-9-2',
                        type: 'application',
                        titleEn: 'Reading Block A (Mosque & Family)',
                        titleAr: 'قِرَاءَة أ: المَسْجِد وَالأُسْرَة',
                        payload: {
                            items: [
                                { emoji: '🕌', ar: 'هٰذَا الْمَسْجِدُ جَدِيدٌ وَجَمِيلٌ', en: 'This mosque is new and beautiful.' },
                                { emoji: '🚪', ar: 'بَابُ الْمَسْجِدِ مَفْتُوحٌ', en: 'The mosque door is open.' },
                                { emoji: '🧍', ar: 'رَاشِدٌ أَمَامَ الْمَسْجِدِ وَأَخُوهُ فِي الْمَسْجِدِ', en: 'Rashid is in front of the mosque and his brother is in it.' },
                                { emoji: '👨‍🏫', ar: 'أَنَا مُعَلِّمُ الْمَدْرَسَةِ وَوَلَدِي إِمَامُ الْمَسْجِدِ', en: 'I am the school teacher, and my son is the mosque imam.' },
                                { emoji: '📚', ar: 'عِنْدَهُ كِتَابٌ مُفِيدٌ', en: 'He has a beneficial book.' },
                                { emoji: '🏷️', ar: 'اِسْمُ الْكِتَابِ «نُورُ الإِسْلَامِ»', en: 'The name of the book is “Nur al-Islam”.' },
                            ],
                        },
                    },
                    {
                        id: '1-9-3',
                        type: 'application',
                        titleEn: 'Reading Block B (Aisha, Airport, Garden)',
                        titleAr: 'قِرَاءَة ب: عَائِشَة، المَطَار، الحَدِيقَة',
                        payload: {
                            items: [
                                { emoji: '👧', ar: 'يَا عَائِشَةُ! أَنْتِ تِلْمِيذَةٌ ذَكِيَّةٌ', en: 'O Aisha! You are an intelligent student.' },
                                { emoji: '⌚', ar: 'سَاعَتُكِ جَمِيلَةٌ وَعِقْدُكِ جَمِيلٌ', en: 'Your watch is beautiful and your necklace is beautiful.' },
                                { emoji: '📦', ar: 'عِقْدُكِ فِي صُنْدُوقِكِ وَسَاعَتُكِ فَوْقَ الْمِنْضَدَةِ', en: 'Your necklace is in your box and your watch is on the table.' },
                                { emoji: '🛫', ar: 'هٰذَا مَطَارُ الْعَاصِمَةِ', en: 'This is the capital airport.' },
                                { emoji: '✈️', ar: 'فِي مَطَارِ الْعَاصِمَةِ طَائِرَةٌ كَبِيرَةٌ', en: 'There is a big plane in the capital airport.' },
                                { emoji: '⚡', ar: 'هٰذِهِ الطَّائِرَةُ سَرِيعَةٌ جِدًّا', en: 'This airplane is very fast.' },
                                { emoji: '🌹', ar: 'فِي حَدِيقَةِ بَشِيرٍ وَرْدَةٌ كَبِيرَةٌ', en: 'In Bashir\'s garden there is a big rose.' },
                                { emoji: '🤲', ar: 'مِنْدِيلُهَا فِي يَدِهَا', en: 'Her handkerchief is in her hand.' },
                            ],
                        },
                    },
                    {
                        id: '1-9-4',
                        type: 'assessment',
                        titleEn: 'Comprehension Questions (Lesson 9)',
                        titleAr: 'أَسْئِلَة الفَهْم (الدَّرْس ٩)',
                        payload: {
                            instruction: 'Answer according to the reading text of Lesson 9.',
                            questions: [
                                { emoji: '🕌', question_ar: 'مَنْ أَمَامَ الْمَسْجِدِ وَمَنْ فِي الْمَسْجِدِ ؟', question_en: 'Who is in front of the mosque and who is inside?', correct_ar: 'رَاشِدٌ أَمَامَ الْمَسْجِدِ وَأَخُوهُ فِي الْمَسْجِدِ', correct_en: 'Rashid is in front of the mosque and his brother is inside.', options_ar: ['رَاشِدٌ أَمَامَ الْمَسْجِدِ وَأَخُوهُ فِي الْمَسْجِدِ', 'كِلَاهُمَا فِي الْمَسْجِدِ', 'كِلَاهُمَا أَمَامَ الْمَسْجِدِ'] },
                                { emoji: '📘', question_ar: 'مَا اسْمُ الْكِتَابِ ؟', question_en: 'What is the name of the book?', correct_ar: 'اِسْمُ الْكِتَابِ نُورُ الإِسْلَامِ', correct_en: 'The book name is Nur al-Islam.', options_ar: ['اِسْمُ الْكِتَابِ نُورُ الإِسْلَامِ', 'اِسْمُ الْكِتَابِ الْعَرَبِيَّةُ', 'اِسْمُهُ قَلَمٌ'] },
                                { emoji: '⌚', question_ar: 'كَيْفَ سَاعَةُ عَائِشَةَ ؟', question_en: 'How is Aisha\'s watch?', correct_ar: 'سَاعَتُهَا جَمِيلَةٌ', correct_en: 'Her watch is beautiful.', options_ar: ['سَاعَتُهَا جَمِيلَةٌ', 'سَاعَتُهَا قَدِيمَةٌ', 'سَاعَتُهَا مَكْسُورَةٌ'] },
                                { emoji: '📦', question_ar: 'أَيْنَ عِقْدُهَا ؟', question_en: 'Where is her necklace?', correct_ar: 'عِقْدُهَا فِي صُنْدُوقِهَا', correct_en: 'Her necklace is in her box.', options_ar: ['عِقْدُهَا فِي صُنْدُوقِهَا', 'عِقْدُهَا أَمَامَ الْمَسْجِدِ', 'عِقْدُهَا فِي يَدِ زَيْنَبَ'] },
                                { emoji: '🛫', question_ar: 'مَاذَا فِي مَطَارِ الْعَاصِمَةِ ؟', question_en: 'What is in the capital airport?', correct_ar: 'فِيهِ طَائِرَةٌ كَبِيرَةٌ', correct_en: 'There is a big airplane there.', options_ar: ['فِيهِ طَائِرَةٌ كَبِيرَةٌ', 'فِيهِ سُوقٌ صَغِيرٌ', 'فِيهِ كُرَةٌ جَدِيدَةٌ'] },
                                { emoji: '⚽', question_ar: 'مَاذَا أَمَامَ اللَّاعِبِ ؟', question_en: 'What is in front of the player?', correct_ar: 'أَمَامَهُ كُرَةٌ جَمِيلَةٌ', correct_en: 'There is a beautiful ball in front of him.', options_ar: ['أَمَامَهُ كُرَةٌ جَمِيلَةٌ', 'أَمَامَهُ مِفْتَاحٌ', 'أَمَامَهُ مِصْبَاحٌ'] },
                            ],
                        },
                    },
                    {
                        id: '1-9-5',
                        type: 'assessment',
                        titleEn: 'Extended Comprehension (Lesson 9)',
                        titleAr: 'تَقْيِيم مُوَسَّع (الدَّرْس ٩)',
                        payload: {
                            instruction: 'Continue answering from the full reading passage.',
                            questions: [
                                { emoji: '📍', question_ar: 'أَيْنَ رَاشِدٌ وَأَيْنَ أَخُوهُ ؟', question_en: 'Where is Rashid and where is his brother?', correct_ar: 'رَاشِدٌ أَمَامَ الْمَسْجِدِ وَأَخُوهُ فِي الْمَسْجِدِ', correct_en: 'Rashid is in front of the mosque and his brother is inside.', options_ar: ['رَاشِدٌ أَمَامَ الْمَسْجِدِ وَأَخُوهُ فِي الْمَسْجِدِ', 'رَاشِدٌ فِي السُّوقِ', 'رَاشِدٌ فِي الْمَطَارِ'] },
                                { emoji: '👧', question_ar: 'مَنْ زَيْنَبُ وَكَيْفَ هِيَ ؟', question_en: 'Who is Zainab and how is she?', correct_ar: 'زَيْنَبُ بِنْتٌ طَيِّبَةٌ جِدًّا', correct_en: 'Zainab is a very good girl.', options_ar: ['زَيْنَبُ بِنْتٌ طَيِّبَةٌ جِدًّا', 'زَيْنَبُ رَجُلٌ', 'زَيْنَبُ مَرِيضَةٌ'] },
                                { emoji: '🤲', question_ar: 'مَاذَا فِي يَدِ زَيْنَبَ ؟', question_en: 'What is in Zainab’s hand?', correct_ar: 'فِي يَدِ زَيْنَبَ كِتَابٌ جَمِيلٌ', correct_en: 'A beautiful book is in Zainab’s hand.', options_ar: ['فِي يَدِ زَيْنَبَ كِتَابٌ جَمِيلٌ', 'فِي يَدِهَا مِفْتَاحٌ', 'فِي يَدِهَا سَاعَةٌ'] },
                                { emoji: '📚', question_ar: 'مَاذَا فِي هٰذَا الْكِتَابِ ؟', question_en: 'What is in this book?', correct_ar: 'فِيهِ قِصَّةٌ جَمِيلَةٌ', correct_en: 'There is a beautiful story in it.', options_ar: ['فِيهِ قِصَّةٌ جَمِيلَةٌ', 'فِيهِ خَارِطَةٌ فَقَطْ', 'فِيهِ مِصْبَاحٌ'] },
                                { emoji: '🚪', question_ar: 'هَلْ بَابُ الْمَسْجِدِ مُغْلَقٌ ؟', question_en: 'Is the mosque door closed?', correct_ar: 'لَا، بَابُ الْمَسْجِدِ مَفْتُوحٌ', correct_en: 'No, the mosque door is open.', options_ar: ['لَا، بَابُ الْمَسْجِدِ مَفْتُوحٌ', 'نَعَمْ، هُوَ مُغْلَقٌ', 'هُوَ قَدِيمٌ'] },
                                { emoji: '🏡', question_ar: 'أَيْنَ حَدِيقَةُ بَشِيرٍ وَمَاذَا فِيهَا ؟', question_en: 'Where is Bashir’s garden and what is in it?', correct_ar: 'حَدِيقَتُهُ بِجَانِبِ الطَّرِيقِ وَفِيهَا وَرْدَةٌ كَبِيرَةٌ', correct_en: 'His garden is beside the road and has a big rose.', options_ar: ['حَدِيقَتُهُ بِجَانِبِ الطَّرِيقِ وَفِيهَا وَرْدَةٌ كَبِيرَةٌ', 'حَدِيقَتُهُ فِي الْمَسْجِدِ', 'حَدِيقَتُهُ تَحْتَ الْبَيْتِ'] },
                            ],
                        },
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        titleAr: 'الباب الثاني',
        titleEn: 'Chapter Two',
        subtitle: 'Core lesson expansion',
        lessons: Array.from({ length: 8 }, (_, i) => ({ darsNumber: i + 1, chunks: [] })),
    },
    {
        id: 3,
        titleAr: 'الباب الثالث',
        titleEn: 'Chapter Three',
        subtitle: 'Completion lessons',
        lessons: Array.from({ length: 3 }, (_, i) => ({ darsNumber: i + 1, chunks: [] })),
    },
];

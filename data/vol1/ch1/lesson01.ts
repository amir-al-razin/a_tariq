import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
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
                                { id: 2, ar: 'سَبُّوْرَةٌ', romanized: 'sabbūratun', en: 'A blackboard', bn: 'একটি ব্ল্যাকবোর্ড', emoji: '🖥️' },
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
                                { emoji: '🖥️', ar: 'تِلْكَ سَبُّوْرَةٌ', en: 'That is a blackboard.' },
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
            };

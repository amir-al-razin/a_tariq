import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
    darsNumber: 3,
    chunks: [
        {
            id: '2-3-3-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary - Dual, Plural & Comparative',
            titleAr: 'الْمُفْرَدَاتُ - الْمُثَنَّى وَالْجَمْعُ وَاسْمُ التَّفْضِيل',
            payload: {
                words: [
                    { id: 1, ar: 'كِتَابَانِ', romanized: 'kitābāni', en: 'Two books (dual)', emoji: '📚' },
                    { id: 2, ar: 'وَلَدَانِ', romanized: 'waladāni', en: 'Two boys (dual)', emoji: '👦👦' },
                    { id: 3, ar: 'أَنْتُمَا', romanized: 'antumā', en: 'You two (dual pronoun)', emoji: '👥' },
                    { id: 4, ar: 'هُمَا', romanized: 'humā', en: 'They two (dual pronoun)', emoji: '👥' },
                    { id: 5, ar: 'هَؤُلَاءِ', romanized: "hāʾulāʾi", en: 'These (plural)', emoji: '👥' },
                    { id: 6, ar: 'أُولَئِكَ', romanized: "ūlāʾika", en: 'Those (plural)', emoji: '👥' },
                    { id: 7, ar: 'كَسْلَانُ', romanized: 'kaslānu', en: 'Lazy', emoji: '😴' },
                    { id: 8, ar: 'كُسَالَى', romanized: 'kusālā', en: 'Lazy (plural)', emoji: '😴' },
                    { id: 9, ar: 'فَرَاغٌ', romanized: 'farāghun', en: 'Blank space / Empty space', emoji: '⬜' },
                    { id: 10, ar: 'أَكْبَرُ مِنْ', romanized: 'akbaru min', en: 'Bigger / older than', emoji: '📏' },
                    { id: 11, ar: 'أَصْغَرُ مِنْ', romanized: 'aṣgharu min', en: 'Smaller / younger than', emoji: '📏' },
                    { id: 12, ar: 'أَطْوَلُ مِنْ', romanized: 'aṭwalu min', en: 'Taller than', emoji: '📏' },
                    { id: 13, ar: 'أَقْصَرُ مِنْ', romanized: 'aqṣaru min', en: 'Shorter than', emoji: '📏' },
                    { id: 14, ar: 'أَوْسَعُ مِنْ', romanized: "awsa'u min", en: 'Wider than', emoji: '📏' },
                    { id: 15, ar: 'أَرْخَصُ مِنْ', romanized: 'arkhaṣu min', en: 'Cheaper than', emoji: '💰' },
                ],
            },
        },
        {
            id: '2-3-3-2',
            type: 'grammar_rule',
            titleEn: 'Grammar - The Dual Form (الْمُثَنَّى)',
            titleAr: 'قَاعِدَة - الْمُثَنَّى',
            payload: {
                rules: [
                    {
                        label: 'الْمُثَنَّى - Dual Form',
                        arabic: 'مُعَلِّمٌ → مُعَلِّمَانِ',
                        romanized: "mu'allimun → mu'allimāni",
                        meaning: 'Nouns and adjectives are made dual by adding the suffix ـَانِ (aan) to the singular form. The dual pronouns are هُمَا (they two), أَنْتُمَا (you two), and نَحْنُ (we two).',
                        examples: [
                            { ar: 'رَاشِدٌ وَخَالِدٌ تِلْمِيذَانِ ذَكِيَّانِ', en: 'Rashid and Khalid are two smart students.' },
                            { ar: 'فَاطِمَةُ وَعَائِشَةُ تِلْمِيذَتَانِ ذَكِيَّتَانِ', en: 'Fatima and Aisha are two smart female students.' },
                            { ar: 'نَحْنُ مُعَلِّمَانِ مَاهِرَانِ', en: 'We are two skilled male teachers.' },
                        ],
                    },
                    {
                        label: 'الْجَمْعُ وَالْإِشَارَة - Plurals and Demonstratives',
                        arabic: 'هَؤُلَاءِ الرِّجَالُ / أُولَئِكَ النِّسَاءُ',
                        romanized: "hāʾulāʾi r-rijālu / ūlāʾika n-nisāʾu",
                        meaning: 'هَؤُلَاءِ (These) and أُولَئِكَ (Those) are used with plural human nouns. Non-human plurals are treated as feminine singular.',
                        examples: [
                            { ar: 'هَؤُلَاءِ الْأَوْلَادُ صَادِقُونَ', en: 'These boys are truthful.' },
                            { ar: 'أُولَئِكَ الرِّجَالُ كَاذِبُونَ', en: 'Those men are liars.' },
                            { ar: 'هَذِهِ الْكُتُبُ جَدِيدَةٌ', en: 'These books are new. (non-human plural = feminine singular)' },
                        ],
                    },
                    {
                        label: 'اسْمُ التَّفْضِيل - Comparative Adjective',
                        arabic: 'أَكْبَرُ مِنْ - pattern أَفْعَلُ',
                        romanized: 'akbaru min',
                        meaning: "The comparative adjective is formed on the pattern أَفْعَلُ (Af'alu), often followed by مِنْ (than).",
                        examples: [
                            { ar: 'خَالِدٌ أَكْبَرُ مِنْ رَاشِدٍ', en: 'Khalid is older than Rashid.' },
                            { ar: 'اللهُ أَكْبَرُ', en: 'Allah is the Greatest.' },
                            { ar: 'سُوقُ الْقَرْيَةِ أَصْغَرُ مِنْ سُوقِ الْمَدِينَةِ', en: 'The village market is smaller than the city market.' },
                        ],
                    },
                    {
                        label: 'لَا النَّافِيَةُ لِلْجِنْس - Absolute Negation',
                        arabic: 'لَا شَكَّ / لَا رَيْبَ / لَا نُورَ',
                        romanized: 'lā shakka / lā rayba / lā nūra',
                        meaning: "Using لَا followed by a noun ending in a single fathah means 'Absolutely no...' (negation of the entire category).",
                        examples: [
                            { ar: 'لَا شَكَّ فِي كَلَامِكَ', en: 'There is no doubt in your speech.' },
                            { ar: 'لَا نُورَ فِي قَلْبِ الْمُنَافِقِ', en: "There is no light in the hypocrite\'s heart." },
                            { ar: 'لَا نَبِيَّ بَعْدِي', en: 'There is no prophet after me.' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-3-3-3',
            type: 'masdar_factory',
            titleEn: 'أَنْ as a Verbal Noun (الْمَصْدَرُ الْمُؤَوَّل)',
            titleAr: 'أَنْ بِمَعْنَى الْمَصْدَر',
            payload: {
                baabLabel: 'الْمَصْدَرُ الْمُؤَوَّل',
                instruction: 'The particle أَنْ followed by a present tense verb acts as a verbal noun (masdar)',
                masdarRows: [
                    { masdar: 'أَنْ تَصُومَ', masdarEn: 'to fast / your fasting', past: 'صَامَ', present: 'يَصُومُ', imperative: 'صُمْ', prohibitive: 'لَا تَصُمْ' },
                    { masdar: 'أَنْ تَسْعَى', masdarEn: 'to strive / your striving', past: 'سَعَى', present: 'يَسْعَى', imperative: 'اِسْعَ', prohibitive: 'لَا تَسْعَ' },
                    { masdar: 'أَنْ تَعْمَلَ', masdarEn: 'to work / your working', past: 'عَمِلَ', present: 'يَعْمَلُ', imperative: 'اِعْمَلْ', prohibitive: 'لَا تَعْمَلْ' },
                ],
            },
        },
        {
            id: '2-3-3-4',
            type: 'paragraph',
            titleEn: 'Reading Passages',
            titleAr: 'قِرَاءَة',
            payload: {
                paragraphs: [
                    {
                        title: 'الْمُثَنَّى',
                        titleEn: 'The Dual',
                        lines: [
                            'رَاشِدٌ وَخَالِدٌ تِلْمِيذَانِ ذَكِيَّانِ - هُمَا تِلْمِيذَانِ ذَكِيَّانِ.',
                            'فَاطِمَةُ وَعَائِشَةُ تِلْمِيذَتَانِ ذَكِيَّتَانِ - هُمَا تِلْمِيذَتَانِ ذَكِيَّتَانِ.',
                            'أَنَا وَأَنْتَ مُعَلِّمَانِ - نَحْنُ مُعَلِّمَانِ مَاهِرَانِ.',
                        ],
                        translationEn: 'Rashid and Khalid are two smart students - they are two smart students. Fatima and Aisha are two smart female students - they are two smart female students. You and I are two male teachers - we are two skilled male teachers.',
                    },
                    {
                        title: 'الْجَمْعُ وَالْمُفْرَد',
                        titleEn: 'Plural and Singular',
                        lines: [
                            'الْكِتَابُ جَدِيدٌ - الْكِتَابَانِ جَدِيدَانِ - الْكُتُبُ جَدِيدَةٌ.',
                            'الْمَسْجِدُ جَمِيلٌ - الْمَسْجِدَانِ جَمِيلَانِ - الْمَسَاجِدُ جَمِيلَةٌ.',
                            'الْوَلَدُ مُجْتَهِدٌ - الْوَلَدَانِ مُجْتَهِدَانِ - الْأَوْلَادُ مُجْتَهِدُونَ.',
                            'الْبِنْتُ مُجْتَهِدَةٌ - الْبِنْتَانِ مُجْتَهِدَتَانِ - الْبَنَاتُ مُجْتَهِدَاتٌ.',
                        ],
                        translationEn: 'The book is new - the two books are new - the books are new. The mosque is beautiful - the two mosques are beautiful - the mosques are beautiful. The boy is hardworking - the two boys are hardworking - the boys are hardworking. The girl is hardworking - the two girls are hardworking - the girls are hardworking.',
                    },
                    {
                        title: 'اسْمُ التَّفْضِيل',
                        titleEn: 'Comparative Adjectives',
                        lines: [
                            'خَالِدٌ أَكْبَرُ مِنْ رَاشِدٍ - فَاطِمَةُ أَكْبَرُ مِنْ عَائِشَةَ - اللهُ أَكْبَرُ.',
                            'هَذَا الدَّوَاءُ نَافِعٌ وَذَلِكَ الدَّوَاءُ أَنْفَعُ مِنْهُ.',
                            'سُوقُ الْقَرْيَةِ أَصْغَرُ مِنْ سُوقِ الْمَدِينَةِ.',
                            'أَنَا أَطْوَلُ مِنْكَ وَأَنْتَ أَقْصَرُ مِنِّي.',
                        ],
                        translationEn: 'Khalid is older than Rashid - Fatima is older than Aisha - Allah is the Greatest. This medicine is beneficial and that medicine is more beneficial than it. The village market is smaller than the city market. I am taller than you and you are shorter than me.',
                    },
                    {
                        title: 'لَا النَّافِيَةُ لِلْجِنْس',
                        titleEn: 'Absolute Negation',
                        lines: [
                            'لَا شَكَّ فِي كَلَامِكَ - ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ.',
                            'لَا نُورَ فِي قَلْبِ الْمُنَافِقِ - لَا بَرَكَةَ فِي مَالِ الْبَخِيلِ.',
                            'قَالَ رَسُولُ اللهِ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) : لَا نَبِيَّ بَعْدِي.',
                        ],
                        translationEn: "There is no doubt in your speech - that book, there is no doubt in it. There is no light in the hypocrite's heart - there is no blessing in the miser's wealth. The Messenger of Allah (peace be upon him) said: 'There is no prophet after me.'",
                    },
                    {
                        title: 'أَنْ بِمَعْنَى الْمَصْدَر',
                        titleEn: 'أَنْ as a Verbal Noun',
                        lines: [
                            'أَنْ تَصُومَ خَيْرٌ لَكَ - صَوْمُكَ خَيْرٌ لَكَ.',
                            'أَنْ تَسْعَى خَيْرٌ لَكَ - سَعْيُكَ خَيْرٌ لَكَ.',
                            'أَنْ تَعْمَلَ خَيْرٌ لَكَ - عَمَلُكَ خَيْرٌ لَكَ.',
                            'يَفْتَحُ لَكَ بَابَ السَّعَادَةِ سَعْيُكَ وَاجْتِهَادُكَ.',
                            'سَيُضَيِّعُ مُسْتَقْبَلَكَ كَسَلُكَ وَقُعُودُكَ عَنِ الْعَمَلِ.',
                        ],
                        translationEn: 'To fast is better for you - your fasting is better for you. To strive is better for you - your striving is better for you. To work is better for you - your working is better for you. Your striving and diligence open the door of happiness for you. Your laziness and sitting back from work will ruin your future.',
                    },
                ],
            },
        },
        {
            id: '2-3-3-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '👥',
                        question_ar: 'مَنْ هُمَا التِّلْمِيذَانِ الذَّكِيَّانِ ؟',
                        question_en: 'Who are the two smart students?',
                        correct_ar: 'رَاشِدٌ وَخَالِدٌ',
                        correct_en: 'Rashid and Khalid.',
                        options_ar: [
                            'رَاشِدٌ وَخَالِدٌ',
                            'فَاطِمَةُ وَعَائِشَةُ',
                            'مَاجِدٌ وَبِلَالٌ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '📏',
                        question_ar: 'أَيُّهُمَا أَكْبَرُ - سُوقُ الْقَرْيَةِ أَمْ سُوقُ الْمَدِينَةِ ؟',
                        question_en: 'Which is bigger - the village market or the city market?',
                        correct_ar: 'سُوقُ الْمَدِينَةِ أَكْبَرُ',
                        correct_en: 'The city market is bigger.',
                        options_ar: [
                            'سُوقُ الْمَدِينَةِ أَكْبَرُ',
                            'سُوقُ الْقَرْيَةِ أَكْبَرُ',
                            'هُمَا مُتَسَاوِيَانِ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🌟',
                        question_ar: 'مَاذَا يَفْتَحُ لَكَ بَابَ السَّعَادَةِ ؟',
                        question_en: 'What opens the door of happiness for you?',
                        correct_ar: 'سَعْيُكَ وَاجْتِهَادُكَ',
                        correct_en: 'Your striving and diligence.',
                        options_ar: [
                            'سَعْيُكَ وَاجْتِهَادُكَ',
                            'كَسَلُكَ وَقُعُودُكَ',
                            'مَالُكَ وَثَرْوَتُكَ',
                        ],
                        questionType: 'general',
                    },
                ],
            },
        },
        {
            id: '2-3-3-6',
            type: 'assessment',
            titleEn: 'Exercise - Fill in the Blanks (Dual & Comparative)',
            titleAr: 'تَمْرِين - أَمْلَأِ الْفَرَاغَ',
            payload: {
                instruction: 'Choose the correct form to complete each sentence.',
                questions: [
                    {
                        emoji: '👨‍🌾',
                        question_ar: 'أَنَا فَلَّاحٌ وَأَنْتَ فَلَّاحٌ - نَحْنُ ___',
                        question_en: 'I am a farmer and you are a farmer - we are ___',
                        correct_ar: 'فَلَّاحَانِ',
                        correct_en: 'two farmers (dual)',
                        options_ar: ['فَلَّاحَانِ', 'فَلَّاحُونَ', 'فَلَّاحٌ'],
                    },
                    {
                        emoji: '📏',
                        question_ar: 'أَنْتَ ضَعِيفٌ وَرَاشِدٌ ___ مِنْكَ',
                        question_en: 'You are weak and Rashid is ___ than you.',
                        correct_ar: 'أَضْعَفُ',
                        correct_en: 'weaker (comparative)',
                        options_ar: ['أَضْعَفُ', 'ضَعِيفٌ', 'ضَعِيفَانِ'],
                    },
                    {
                        emoji: '🕌',
                        question_ar: 'الْمَسْجِدُ جَمِيلٌ - الْمَسْجِدَانِ ___ - الْمَسَاجِدُ ___',
                        question_en: 'The mosque is beautiful - the two mosques are ___ - the mosques are ___',
                        correct_ar: 'جَمِيلَانِ / جَمِيلَةٌ',
                        correct_en: 'beautiful (dual) / beautiful (non-human plural)',
                        options_ar: [
                            'جَمِيلَانِ / جَمِيلَةٌ',
                            'جَمِيلُونَ / جَمِيلَةٌ',
                            'جَمِيلَانِ / جَمِيلُونَ',
                        ],
                    },
                ],
            },
        },
    ],
};

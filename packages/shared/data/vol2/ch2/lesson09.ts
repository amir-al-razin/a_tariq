import type { LessonData } from '../../curriculum';

export const lesson09: LessonData = {
    darsNumber: 9,
    chunks: [
        {
            id: '2-2-9-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary',
            titleAr: 'الْمُفْرَدَاتُ',
            payload: {
                words: [
                    { id: 1, ar: 'طَائِرٌ', romanized: "ṭā'irun", en: 'Bird', emoji: '🐦' },
                    { id: 2, ar: 'طُيُورٌ', romanized: 'ṭuyūrun', en: 'Birds (plural)', emoji: '🐦' },
                    { id: 3, ar: 'قِصَّةٌ', romanized: 'qiṣṣatun', en: 'Story', emoji: '📖' },
                    { id: 4, ar: 'قِصَصٌ', romanized: 'qiṣaṣun', en: 'Stories (plural)', emoji: '📚' },
                    { id: 5, ar: 'سَهْمٌ', romanized: 'sahmun', en: 'Arrow', emoji: '🏹' },
                    { id: 6, ar: 'سِهَامٌ', romanized: 'sihāmun', en: 'Arrows (plural)', emoji: '🏹' },
                    { id: 7, ar: 'التَّوَسُّخُ', romanized: 'at-tawassukhu', en: 'To become dirty', emoji: '🧹' },
                    { id: 8, ar: 'الْقَضَاءُ', romanized: 'al-qaḍāʾu', en: 'To spend (time)', emoji: '⏰' },
                    { id: 9, ar: 'الْمُضِيُّ', romanized: 'al-muḍiyyu', en: 'To pass / elapse', emoji: '⏩' },
                    { id: 10, ar: 'مَوْجٌ', romanized: 'mawjun', en: 'Wave', emoji: '🌊' },
                    { id: 11, ar: 'أَمْوَاجٌ', romanized: 'amwājun', en: 'Waves (plural)', emoji: '🌊' },
                    { id: 12, ar: 'أَخٌ', romanized: 'akhun', en: 'Brother', emoji: '👦' },
                    { id: 13, ar: 'إِخْوَةٌ', romanized: 'ikhwatun', en: 'Brothers (plural)', emoji: '👦👦' },
                    { id: 14, ar: 'أُخْتٌ', romanized: 'ukhtun', en: 'Sister', emoji: '👧' },
                    { id: 15, ar: 'أَخَوَاتٌ', romanized: 'akhawātun', en: 'Sisters (plural)', emoji: '👧👧' },
                    { id: 16, ar: 'سِنٌّ', romanized: 'sinnun', en: 'Tooth', emoji: '🦷' },
                    { id: 17, ar: 'أَسْنَانٌ', romanized: 'asnānun', en: 'Teeth (plural)', emoji: '🦷' },
                ],
            },
        },
        {
            id: '2-2-9-2',
            type: 'grammar_rule',
            titleEn: 'Grammar - Pluralizing Non-Human Nouns',
            titleAr: 'قَاعِدَة - جَمْعُ غَيْرِ الْعَاقِل',
            payload: {
                rules: [
                    {
                        label: 'جَمْعُ غَيْرِ الْعَاقِل - Non-Human Plural',
                        arabic: 'هَذَا كِتَابٌ جَدِيدٌ → هَذِهِ كُتُبٌ جَدِيدَةٌ',
                        romanized: 'hādhā kitābun jadīdun → hādhihi kutubun jadīdatun',
                        meaning: 'When a non-human noun is pluralized, its adjectives and demonstrative pronouns change to singular feminine form.',
                        examples: [
                            { ar: 'الْكِتَابُ جَدِيدٌ', en: 'The book is new.' },
                            { ar: 'الْكُتُبُ جَدِيدَةٌ', en: 'The books are new.' },
                            { ar: 'هَذَا الثَّوْبُ جَدِيدٌ', en: 'This garment is new.' },
                            { ar: 'هَذِهِ الثِّيَابُ جَدِيدَةٌ', en: 'These garments are new.' },
                        ],
                    },
                    {
                        label: 'أَلْوَانٌ مَعَ أَلْ - Colors with Definite Article',
                        arabic: 'يَطِيرُ فِي سَمَاءٍ زَرْقَاءَ → يَطِيرُ فِي السَّمَاءِ الزَّرْقَاءِ',
                        romanized: 'yaṭīru fī samāʾin zarqāʾa → yaṭīru fī s-samāʾi z-zarqāʾi',
                        meaning: 'Color adjectives (diptotes) normally take fathah in the genitive. However, when prefixed with the definite article ال, they accept a standard kasrah.',
                        examples: [
                            { ar: 'يَطِيرُ فِي سَمَاءٍ زَرْقَاءَ', en: 'It flies in a blue sky.' },
                            { ar: 'يَطِيرُ فِي السَّمَاءِ الزَّرْقَاءِ', en: 'It flies in the blue sky.' },
                            { ar: 'اكْتُبْ بِقَلَمٍ أَسْوَدَ', en: 'Write with a black pen.' },
                            { ar: 'اكْتُبْ بِالْقَلَمِ الْأَسْوَدِ', en: 'Write with the black pen.' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-2-9-3',
            type: 'verb_table',
            titleEn: 'Verb Table - Past Plural (نَصَرَ)',
            titleAr: 'الْمَاضِي - صِيَغُ الْجَمْع',
            payload: {
                isPlural: true,
                verbTense: 'past',
                instruction: 'Past tense plural conjugations for memorization - apply the same pattern to فَتَحَ, ضَرَبَ, سَمِعَ',
                verbTable: [
                    { 
                        root: 'نَصَرَ', 
                        meaning: 'to help', 
                        theyM: 'نَصَرُوا', 
                        theyF: 'نَصَرْنَ', 
                        youPluralM: 'نَصَرْتُمْ', 
                        youPluralF: 'نَصَرْتُنَّ', 
                        we: 'نَصَرْنَا' 
                    },
                ],
            },
        },
        {
            id: '2-2-9-3b',
            type: 'verb_table',
            titleEn: 'Verb Table - Present Plural (نَصَرَ)',
            titleAr: 'الْمُضَارِع - صِيَغُ الْجَمْع',
            payload: {
                isPlural: true,
                verbTense: 'present',
                instruction: 'Present tense plural conjugations for memorization - apply the same pattern to يَفْتَحُ, يَضْرِبُ, يَسْمَعُ',
                verbTable: [
                    { 
                        root: 'يَنْصُرُ', 
                        meaning: 'to help', 
                        theyM: 'يَنْصُرُونَ', 
                        theyF: 'يَنْصُرْنَ', 
                        youPluralM: 'تَنْصُرُونَ', 
                        youPluralF: 'تَنْصُرْنَ', 
                        we: 'نَنْصُرُ' 
                    },
                ],
            },
        },
        {
            id: '2-2-9-4',
            type: 'paragraph',
            titleEn: 'Reading Passages',
            titleAr: 'قِرَاءَة',
            payload: {
                paragraphs: [
                    {
                        title: 'الْأَيَّامُ الْمَاضِيَة',
                        titleEn: 'The Past Days',
                        lines: [
                            'لَنْ يَعُودَ الْيَوْمُ الْمَاضِي - لَنْ تَعُودَ الْأَيَّامُ الْمَاضِيَةُ.',
                            'مَضَتْ أَيَّامُ الْعُطْلَةِ - انْتَهَتِ الْعُطْلَةُ.',
                            'عُدْتُ إِلَى الْمَدْرَسَةِ بَعْدَ أَنْ قَضَيْتُ أَيَّامَ الْعُطْلَةِ الْجَمِيلَةَ بَيْنَ أَبِي وَأُمِّي وَبَيْنَ إِخْوَتِي وَأَخَوَاتِي.',
                        ],
                        translationEn: 'The past day will never return - the past days will never return. The vacation days have passed - the vacation has ended. I returned to school after spending the beautiful vacation days between my father and mother and between my brothers and sisters.',
                    },
                    {
                        title: 'الطُّيُورُ وَالسَّمَاء',
                        titleEn: 'Birds and the Sky',
                        lines: [
                            'يَطِيرُ الطَّائِرُ - تَطِيرُ الطُّيُورُ.',
                            'كَانَتِ الطُّيُورُ تَطِيرُ فِي السَّمَاءِ الزَّرْقَاءِ.',
                        ],
                        translationEn: 'The bird flies - the birds fly. The birds were flying in the blue sky.',
                    },
                    {
                        title: 'الزَّوَارِقُ وَالْأَمْوَاج',
                        titleEn: 'Boats and Waves',
                        lines: [
                            'غَرِقَ الزَّوْرَقُ - غَرِقَتِ الزَّوَارِقُ فِي النَّهْرِ.',
                            'أَغْرَقَتْهَا الْأَمْوَاجُ الْعَالِيَةُ.',
                        ],
                        translationEn: 'The boat sank - the boats sank in the river. The high waves sank them.',
                    },
                    {
                        title: 'فَاطِمَةُ وَالْأَزْهَار',
                        titleEn: 'Fatima and the Flowers',
                        lines: [
                            'اشْتَرَتْ فَاطِمَةُ مِنْ دُكَّانِ الْأَزْهَارِ أَزْهَارًا جَمِيلَةً لِتُزَيِّنَ بِهَا غُرْفَتَهَا.',
                            'كَانَتْ ثِيَابُ فَاطِمَةَ جَمِيلَةً وَكَانَتْ تَلْبَسُ ثِيَابًا نَظِيفَةً.',
                        ],
                        translationEn: 'Fatima bought beautiful flowers from the flower shop to decorate her room with them. Fatima\'s clothes were beautiful and she used to wear clean clothes.',
                    },
                ],
            },
        },
        {
            id: '2-2-9-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '📅',
                        question_ar: 'هَلْ تَعُودُ الْأَيَّامُ الْمَاضِيَةُ أَبَدًا ؟',
                        question_en: 'Will the past days ever return?',
                        correct_ar: 'لَا، لَنْ تَعُودَ الْأَيَّامُ الْمَاضِيَةُ أَبَدًا',
                        correct_en: 'No, the past days will never return.',
                        options_ar: [
                            'لَا، لَنْ تَعُودَ الْأَيَّامُ الْمَاضِيَةُ أَبَدًا',
                            'نَعَمْ، تَعُودُ كُلَّ سَنَةٍ',
                            'نَعَمْ، تَعُودُ أَحْيَانًا',
                        ],
                        questionType: 'hal',
                    },
                    {
                        emoji: '🌊',
                        question_ar: 'لِمَاذَا غَرِقَتِ الزَّوَارِقُ ؟',
                        question_en: 'Why did the boats sink?',
                        correct_ar: 'أَغْرَقَتْهَا الْأَمْوَاجُ الْعَالِيَةُ',
                        correct_en: 'The high waves sank them.',
                        options_ar: [
                            'أَغْرَقَتْهَا الْأَمْوَاجُ الْعَالِيَةُ',
                            'كَانَتِ الزَّوَارِقُ قَدِيمَةً',
                            'لَمْ يَكُنْ فِيهَا مَاءٌ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🌸',
                        question_ar: 'لِمَاذَا اشْتَرَتْ فَاطِمَةُ الْأَزْهَارَ ؟',
                        question_en: 'Why did Fatima buy the flowers?',
                        correct_ar: 'لِتُزَيِّنَ بِهَا غُرْفَتَهَا',
                        correct_en: 'To decorate her room with them.',
                        options_ar: [
                            'لِتُزَيِّنَ بِهَا غُرْفَتَهَا',
                            'لِتُهْدِيَهَا لِصَدِيقَتِهَا',
                            'لِتَزْرَعَهَا فِي الْحَدِيقَةِ',
                        ],
                        questionType: 'general',
                    },
                ],
            },
        },
        {
            id: '2-2-9-6',
            type: 'assessment',
            titleEn: 'Exercise - Pluralize Non-Human Nouns',
            titleAr: 'تَمْرِين - جَمْعُ غَيْرِ الْعَاقِل',
            payload: {
                instruction: 'Choose the correct plural transformation.',
                questions: [
                    {
                        emoji: '🚪',
                        question_ar: 'بَابُ هَذَا الْمَسْجِدِ مَفْتُوحٌ - (الْجَمْع)',
                        question_en: 'Pluralize the underlined noun:',
                        correct_ar: 'أَبْوَابُ هَذِهِ الْمَسَاجِدِ مَفْتُوحَةٌ',
                        correct_en: 'The doors of these mosques are open.',
                        options_ar: [
                            'أَبْوَابُ هَذِهِ الْمَسَاجِدِ مَفْتُوحَةٌ',
                            'أَبْوَابُ هَذَا الْمَسْجِدِ مَفْتُوحُونَ',
                            'أَبْوَابُ هَذِهِ الْمَسَاجِدِ مَفْتُوحُونَ',
                        ],
                    },
                    {
                        emoji: '🐦',
                        question_ar: 'يَجْلِسُ الطَّائِرُ عَلَى غُصْنِ الشَّجَرِ - (الْجَمْع)',
                        question_en: 'Pluralize the underlined noun:',
                        correct_ar: 'تَجْلِسُ الطُّيُورُ عَلَى غُصْنِ الشَّجَرِ',
                        correct_en: 'The birds sit on the branch of the tree.',
                        options_ar: [
                            'تَجْلِسُ الطُّيُورُ عَلَى غُصْنِ الشَّجَرِ',
                            'يَجْلِسُونَ الطُّيُورُ عَلَى غُصْنِ الشَّجَرِ',
                            'يَجْلِسُ الطُّيُورُ عَلَى غُصْنِ الشَّجَرِ',
                        ],
                    },
                ],
            },
        },
    ],
};

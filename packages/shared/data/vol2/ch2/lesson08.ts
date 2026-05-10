import type { LessonData } from '../../curriculum';

export const lesson08: LessonData = {
    darsNumber: 8,
    chunks: [
        {
            id: '2-2-8-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary',
            titleAr: 'الْمُفْرَدَاتُ',
            payload: {
                words: [
                    { id: 1, ar: 'النَّقْلُ', romanized: 'an-naqlu', en: 'To transfer / move (something)', emoji: '📦' },
                    { id: 2, ar: 'الِانْتِقَالُ', romanized: 'al-intiqāl', en: 'To move (oneself) / pass away', emoji: '🚶' },
                    { id: 3, ar: 'الرَّحْمَةُ', romanized: 'ar-raḥmatu', en: 'Mercy', emoji: '💚' },
                    { id: 4, ar: 'مُسْتَشْفَى', romanized: 'mustashfā', en: 'Hospital', emoji: '🏥' },
                    { id: 5, ar: 'غَارٌ', romanized: 'ghārun', en: 'Cave', emoji: '🪨' },
                    { id: 6, ar: 'بِئْرٌ', romanized: "bi'run", en: 'Well', emoji: '🪣' },
                    { id: 7, ar: 'غَيْمٌ', romanized: 'ghaymun', en: 'Cloud', emoji: '☁️' },
                    { id: 8, ar: 'أَحْمَرُ / حَمْرَاءُ', romanized: 'aḥmaru / ḥamrāʾu', en: 'Red (m/f)', emoji: '🔴' },
                    { id: 9, ar: 'أَبْيَضُ / بَيْضَاءُ', romanized: 'abyaḍu / bayḍāʾu', en: 'White (m/f)', emoji: '⚪' },
                    { id: 10, ar: 'أَسْوَدُ / سَوْدَاءُ', romanized: 'aswadu / sawdāʾu', en: 'Black (m/f)', emoji: '⚫' },
                    { id: 11, ar: 'أَخْضَرُ / خَضْرَاءُ', romanized: 'akhḍaru / khaḍrāʾu', en: 'Green (m/f)', emoji: '🟢' },
                    { id: 12, ar: 'أَزْرَقُ / زَرْقَاءُ', romanized: 'azraqu / zarqāʾu', en: 'Blue (m/f)', emoji: '🔵' },
                    { id: 13, ar: 'أَصْفَرُ / صَفْرَاءُ', romanized: 'aṣfaru / ṣafrāʾu', en: 'Yellow (m/f)', emoji: '🟡' },
                    { id: 14, ar: 'حَمَامٌ / حَمَامَةٌ', romanized: 'ḥamāmun / ḥamāmatun', en: 'Pigeon / Dove', emoji: '🕊️' },
                    { id: 15, ar: 'رِيشٌ / رِيشَةٌ', romanized: 'rīshun / rīshatun', en: 'Feather', emoji: '🪶' },
                    { id: 16, ar: 'فَحْمٌ / فَحْمَةٌ', romanized: 'faḥmun / faḥmatun', en: 'Coal', emoji: '🪨' },
                ],
            },
        },
        {
            id: '2-2-8-2',
            type: 'masdar_factory',
            titleEn: 'Masdar Factory — Form VIII Defective Verbs (بَابُ الِافْتِعَال)',
            titleAr: 'مَصَادِرُ بَابِ الِافْتِعَال (نَاقِص)',
            payload: {
                baabLabel: 'بَابُ الِافْتِعَال — اِفْتَعَلَ يَفْتَعِلُ',
                instruction: 'Form VIII defective verbs — conjugation model: اِشْتَرَى',
                masdarRows: [
                    { masdar: 'الِاشْتِرَاءُ', masdarEn: 'to buy / purchase', past: 'اِشْتَرَى', present: 'يَشْتَرِي', imperative: 'اِشْتَرِ', prohibitive: 'لَا تَشْتَرِ' },
                    { masdar: 'الِاخْتِفَاءُ', masdarEn: 'to hide / conceal oneself', past: 'اِخْتَفَى', present: 'يَخْتَفِي', imperative: 'اِخْتَفِ', prohibitive: 'لَا تَخْتَفِ' },
                    { masdar: 'الِانْتِهَاءُ', masdarEn: 'to end / finish', past: 'اِنْتَهَى', present: 'يَنْتَهِي', imperative: 'اِنْتَهِ', prohibitive: 'لَا تَنْتَهِ' },
                    { masdar: 'الِارْتِوَاءُ', masdarEn: 'to be quenched (by drinking)', past: 'اِرْتَوَى', present: 'يَرْتَوِي', imperative: 'اِرْتَوِ', prohibitive: 'لَا تَرْتَوِ' },
                    { masdar: 'الِاسْتِوَاءُ', masdarEn: 'to be equal / level', past: 'اِسْتَوَى', present: 'يَسْتَوِي', imperative: 'اِسْتَوِ', prohibitive: 'لَا تَسْتَوِ' },
                ],
            },
        },
        {
            id: '2-2-8-3',
            type: 'grammar_rule',
            titleEn: 'Grammar — Colors as Diptotes (مَمْنُوعٌ مِنَ الصَّرْف)',
            titleAr: 'قَاعِدَة — أَلْوَانٌ مَمْنُوعَةٌ مِنَ الصَّرْف',
            payload: {
                rules: [
                    {
                        label: 'أَلْوَانٌ مَمْنُوعَةٌ مِنَ الصَّرْف',
                        arabic: 'أَحْمَرُ / حَمْرَاءُ — pattern أَفْعَلُ / فَعْلَاءُ',
                        romanized: 'aḥmaru / ḥamrāʾu',
                        meaning: 'Color adjectives follow the pattern أَفْعَلُ (m) and فَعْلَاءُ (f). They are diptotes: no tanween, and take fathah instead of kasrah in the genitive state.',
                        examples: [
                            { ar: 'جَاءَتْ عَائِشَةُ', en: 'Aisha came. (nominative)' },
                            { ar: 'دَعَوْتُ عَائِشَةَ', en: 'I called Aisha. (accusative)' },
                            { ar: 'سَلَّمْتُ عَلَى عَائِشَةَ', en: 'I greeted Aisha. (genitive — takes fathah, not kasrah)' },
                            { ar: 'لَبِسْتُ ثَوْبًا أَبْيَضَ', en: 'I wore a white garment.' },
                            { ar: 'دَخَلْتُ حَدِيقَةً خَضْرَاءَ', en: 'I entered a green garden.' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-2-8-4',
            type: 'paragraph',
            titleEn: 'Reading Passages',
            titleAr: 'قِرَاءَة',
            payload: {
                paragraphs: [
                    {
                        title: 'الشِّرَاءُ لِوَجْهِ اللهِ',
                        titleEn: 'Buying for the Sake of Allah',
                        lines: [
                            'أَخِي الْمُسْلِمُ ! قَدِ اشْتَرَى رَبُّكَ مِنْكَ نَفْسَكَ وَمَالَكَ بِالْجَنَّةِ.',
                            'فَقَاتِلْ فِي سَبِيلِ اللهِ لِتَدْخُلَ الْجَنَّةَ.',
                        ],
                        translationEn: 'O my Muslim brother! Your Lord has bought from you your soul and your wealth in exchange for Paradise. So fight in the path of Allah so that you may enter Paradise.',
                    },
                    {
                        title: 'الْحَيَاةُ وَالِانْتِقَال',
                        titleEn: 'Life and Passing Away',
                        lines: [
                            'قَالَ الْعَالِمُ فِي وَعْظِهِ : سَتَنْتَهِي هَذِهِ الْحَيَاةُ فِي يَوْمٍ مِنَ الْأَيَّامِ.',
                            'يَنْتَقِلُ الْإِنْسَانُ إِلَى الْعَالَمِ الْآخِرَةِ بَعْدَ أَنْ تَنْتَهِيَ هَذِهِ الْحَيَاةُ.',
                            'انْتَقَلَ وَالِدُ مَاجِدٍ إِلَى رَحْمَةِ اللهِ مَسَاءَ الْيَوْمِ.',
                        ],
                        translationEn: 'The scholar said in his sermon: "This life will end one day." A person moves to the next world after this life ends. Majid\'s father passed away to the mercy of Allah this evening.',
                    },
                    {
                        title: 'الِاخْتِفَاءُ فِي غَارِ ثَوْر',
                        titleEn: 'Hiding in the Cave of Thawr',
                        lines: [
                            'اخْتَفَى نُورُ الشَّمْسِ خَلْفَ الْغَيْمِ.',
                            'عِنْدَ الْهِجْرَةِ دَخَلَ رَسُولُ اللهِ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) غَارَ ثَوْرٍ لِيَخْتَفِيَ مِنْ عُيُونِ قُرَيْشٍ.',
                        ],
                        translationEn: 'The light of the sun hid behind the cloud. During the Hijra, the Messenger of Allah (peace be upon him) entered the Cave of Thawr to hide from the eyes of Quraysh.',
                    },
                ],
            },
        },
        {
            id: '2-2-8-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '🛒',
                        question_ar: 'لِمَاذَا ذَهَبَ مَاجِدٌ مَعَ أَبِيهِ إِلَى الْمَدِينَةِ ؟',
                        question_en: 'Why did Majid go with his father to the city?',
                        correct_ar: 'لِيَشْتَرِيَ كُتُبًا جَدِيدَةً وَأَوْرَاقًا جَيِّدَةً',
                        correct_en: 'To buy new books and good papers.',
                        options_ar: [
                            'لِيَشْتَرِيَ كُتُبًا جَدِيدَةً وَأَوْرَاقًا جَيِّدَةً',
                            'لِيَزُورَ صَدِيقَهُ',
                            'لِيَذْهَبَ إِلَى الْمَسْجِدِ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🕊️',
                        question_ar: 'لِمَاذَا دَخَلَ رَسُولُ اللهِ غَارَ ثَوْرٍ ؟',
                        question_en: 'Why did the Messenger of Allah enter the Cave of Thawr?',
                        correct_ar: 'لِيَخْتَفِيَ مِنْ عُيُونِ قُرَيْشٍ',
                        correct_en: 'To hide from the eyes of Quraysh.',
                        options_ar: [
                            'لِيَخْتَفِيَ مِنْ عُيُونِ قُرَيْشٍ',
                            'لِيَسْتَرِيحَ مِنَ السَّفَرِ',
                            'لِيُصَلِّيَ فِيهِ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🔴',
                        question_ar: 'هَلْ تُحِبُّ فَاطِمَةُ اللَّوْنَ الْأَحْمَرَ ؟',
                        question_en: 'Does Fatima like the color red?',
                        correct_ar: 'لَا، لَا تُحِبُّ اللَّوْنَ الْأَحْمَرَ',
                        correct_en: 'No, she does not like the color red.',
                        options_ar: [
                            'لَا، لَا تُحِبُّ اللَّوْنَ الْأَحْمَرَ',
                            'نَعَمْ، تُحِبُّهُ كَثِيرًا',
                            'نَعَمْ، لَكِنَّهَا تُفَضِّلُ الْأَزْرَقَ',
                        ],
                        questionType: 'hal',
                    },
                ],
            },
        },
        {
            id: '2-2-8-6',
            type: 'assessment',
            titleEn: 'Exercise — Color Adjectives (Diptotes)',
            titleAr: 'تَمْرِين — أَلْوَانٌ مَمْنُوعَةٌ مِنَ الصَّرْف',
            payload: {
                instruction: 'Choose the correct color adjective form.',
                questions: [
                    {
                        emoji: '🥛',
                        question_ar: 'لَوْنُ اللَّبَنِ ___',
                        question_en: 'The color of milk is ___',
                        correct_ar: 'أَبْيَضُ',
                        correct_en: 'white (nominative)',
                        options_ar: ['أَبْيَضُ', 'أَبْيَضَ', 'بَيْضَاءُ'],
                    },
                    {
                        emoji: '🌿',
                        question_ar: 'دَخَلْتُ حَدِيقَةً ___',
                        question_en: 'I entered a ___ garden.',
                        correct_ar: 'خَضْرَاءَ',
                        correct_en: 'green (accusative, diptote)',
                        options_ar: ['خَضْرَاءَ', 'خَضْرَاءُ', 'أَخْضَرَ'],
                    },
                    {
                        emoji: '⚫',
                        question_ar: 'الْحِبْرُ ___',
                        question_en: 'The ink is ___',
                        correct_ar: 'أَسْوَدُ',
                        correct_en: 'black (nominative)',
                        options_ar: ['أَسْوَدُ', 'أَسْوَدَ', 'سَوْدَاءُ'],
                    },
                ],
            },
        },
    ],
};

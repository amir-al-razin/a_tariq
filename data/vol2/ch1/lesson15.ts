import type { LessonData } from '../../curriculum';

export const lesson15: LessonData = {
    darsNumber: 15,
    chunks: [
        {
            id: '2-15-1',
            type: 'vocabulary',
            titleEn: 'Form V Masdars (بَابُ التَّفَعُّل)',
            titleAr: 'مَصَادِر بَابِ التَّفَعُّل',
            payload: {
                words: [
                    { id: 1, ar: 'التَّعَلُّمُ', romanized: "at-ta\'allum", en: 'Learning', emoji: '📖' },
                    { id: 2, ar: 'التَّنَوُّرُ', romanized: 'at-tanawwur', en: 'Being enlightened', emoji: '💡' },
                    { id: 3, ar: 'التَّقَبُّلُ', romanized: 'at-taqabbul', en: 'Accepting', emoji: '✅' },
                    { id: 4, ar: 'التَّصَدُّقُ', romanized: 'at-taṣadduq', en: 'Giving in charity', emoji: '💝' },
                    { id: 5, ar: 'التَّكَلُّمُ', romanized: 'at-takallum', en: 'Speaking / talking', emoji: '🗣️' },
                    { id: 6, ar: 'بَدْرٌ', romanized: 'badr', en: 'Full moon', emoji: '🌕' },
                    { id: 7, ar: 'الْإِنْجِلِيزِيَّةُ', romanized: 'al-injilīziyyah', en: 'English (language)', emoji: '🇬🇧' },
                ],
            },
        },
        {
            id: '2-15-2',
            type: 'masdar_factory',
            titleEn: 'Form V Verb: تَعَلَّمَ (to learn)',
            titleAr: 'بَابُ التَّفَعُّل — تَعَلَّمَ يَتَعَلَّمُ',
            payload: {
                baabLabel: 'بَابُ التَّفَعُّلِ (Form V)',
                instruction: 'Form V adds تَـ prefix to Form II root. Present tense uses يَتَفَعَّلُ pattern.',
                masdarRows: [
                    { masdar: 'التَّعَلُّمُ', masdarEn: 'to learn', past: 'تَعَلَّمَ', present: 'يَتَعَلَّمُ', imperative: 'تَعَلَّمْ', prohibitive: 'لَا تَتَعَلَّمْ' },
                    { masdar: 'التَّنَوُّرُ', masdarEn: 'to be enlightened', past: 'تَنَوَّرَ', present: 'يَتَنَوَّرُ', imperative: 'تَنَوَّرْ', prohibitive: 'لَا تَتَنَوَّرْ' },
                    { masdar: 'التَّقَبُّلُ', masdarEn: 'to accept', past: 'تَقَبَّلَ', present: 'يَتَقَبَّلُ', imperative: 'تَقَبَّلْ', prohibitive: 'لَا تَتَقَبَّلْ' },
                    { masdar: 'التَّصَدُّقُ', masdarEn: 'to give in charity', past: 'تَصَدَّقَ', present: 'يَتَصَدَّقُ', imperative: 'تَصَدَّقْ', prohibitive: 'لَا تَتَصَدَّقْ' },
                    { masdar: 'التَّكَلُّمُ', masdarEn: 'to speak', past: 'تَكَلَّمَ', present: 'يَتَكَلَّمُ', imperative: 'تَكَلَّمْ', prohibitive: 'لَا تَتَكَلَّمْ' },
                ],
            },
        },
        {
            id: '2-15-3',
            type: 'paragraph',
            titleEn: 'Reading — Form V Verbs in Context',
            titleAr: 'قِرَاءَة — بَابُ التَّفَعُّل فِي الْجُمَل',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'يَتَنَوَّرُ قَلْبُ الْمُؤْمِنِ بِنُورِ اللهِ.',
                            'طَلَعَ الْبَدْرُ فَتَنَوَّرَتِ الدُّنْيَا بِنُورِهِ.',
                            'تَنَوَّرَتِ الْغُرْفَةُ بِنُورِ الْمِصْبَاحِ.',
                        ],
                        translationEn: 'The heart of the believer is illuminated by the light of Allah. The full moon rose, and the world was illuminated by its light. The room was illuminated by the light of the lamp.',
                    },
                    {
                        lines: [
                            'أَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ لِأَفْهَمَ الْقُرْآنَ.',
                            'تَعَلَّمَتْ فَاطِمَةُ الصَّغِيرَةُ الْخِيَاطَةَ مِنْ أُمِّهَا.',
                            'يَا بِنْتَ مَاجِدٍ الصَّغِيرَةَ! تَعَلَّمِي الْقِرَاءَةَ وَالْكِتَابَةَ مِنْ أَبِيكِ.',
                        ],
                        translationEn: "I learn the Arabic language to understand the Quran. Little Fatima learned sewing from her mother. O little daughter of Majid! Learn reading and writing from your father.",
                    },
                ],
            },
        },
        {
            id: '2-15-4',
            type: 'q_and_a',
            titleEn: 'Comprehension Questions',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                questions: [
                    { emoji: '📖', question_ar: 'مَاذَا قُلْتَ لِبِنْتِ مَاجِدٍ الصَّغِيرَةِ؟', question_en: "What did you say to Majid's little daughter?", correct_ar: 'قُلْتُ لَهَا: تَعَلَّمِي الْقِرَاءَةَ وَالْكِتَابَةَ مِنْ أَبِيكِ', correct_en: 'I said to her: Learn reading and writing from your father.', options_ar: ['قُلْتُ لَهَا: تَعَلَّمِي الْقِرَاءَةَ وَالْكِتَابَةَ مِنْ أَبِيكِ', 'قُلْتُ لَهَا: اِذْهَبِي إِلَى الْمَدْرَسَةِ', 'قُلْتُ لَهَا: اِلْعَبِي'], questionType: 'general' },
                    { emoji: '🧵', question_ar: 'مِمَّنْ تَعَلَّمَتْ فَاطِمَةُ الْخِيَاطَةَ؟', question_en: 'From whom did Fatima learn sewing?', correct_ar: 'تَعَلَّمَتْهَا مِنْ أُمِّهَا', correct_en: 'She learned it from her mother.', options_ar: ['تَعَلَّمَتْهَا مِنْ أُمِّهَا', 'تَعَلَّمَتْهَا مِنْ أَبِيهَا', 'تَعَلَّمَتْهَا مِنَ الْمَدْرَسَةِ'], questionType: 'general' },
                    { emoji: '🕌', question_ar: 'هَلْ يَتَقَبَّلُ اللهُ عَمَلَ الْمُنَافِقِ؟', question_en: 'Does Allah accept the deed of the hypocrite?', correct_ar: 'لَا .. لَا يَتَقَبَّلُ اللهُ عَمَلَ الْمُنَافِقِ', correct_en: 'No, Allah does not accept the deed of the hypocrite.', options_ar: ['لَا .. لَا يَتَقَبَّلُ اللهُ عَمَلَ الْمُنَافِقِ', 'نَعَمْ .. يَتَقَبَّلُهُ', 'أَحْيَانًا يَتَقَبَّلُهُ'], questionType: 'hal' },
                ],
            },
        },
        {
            id: '2-15-5',
            type: 'grammar_rule',
            titleEn: 'كَلَّمَ vs تَكَلَّمَ مَعَ — Usage Difference',
            titleAr: 'الْفَرْق بَيْنَ كَلَّمَ وَتَكَلَّمَ مَعَ',
            payload: {
                rules: [
                    {
                        label: 'كَلَّمَ (Form II) vs تَكَلَّمَ مَعَ (Form V)',
                        arabic: 'كَلَّمْتُ رَاشِدًا / تَكَلَّمْتُ مَعَ رَاشِدٍ',
                        romanized: "kallamtu Rāshidan / takallamtu ma\'a Rāshid",
                        meaning: 'كَلَّمَ = spoke to (direct object). تَكَلَّمَ مَعَ = spoke with (using مَعَ + genitive)',
                        examples: [
                            { ar: 'كَلَّمْتُ رَاشِدًا', en: 'I spoke to Rashid' },
                            { ar: 'تَكَلَّمْتُ مَعَ رَاشِدٍ', en: 'I spoke with Rashid' },
                            { ar: 'أُكَلِّمُهُ', en: 'I will speak to him' },
                            { ar: 'أَتَكَلَّمُ مَعَهُ', en: 'I will speak with him' },
                        ],
                    },
                ],
            },
        },
    ],
};

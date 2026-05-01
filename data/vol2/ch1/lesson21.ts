import type { LessonData } from '../../curriculum';

export const lesson21: LessonData = {
    darsNumber: 21,
    chunks: [
        {
            id: '2-21-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary — Lesson 21',
            titleAr: 'الْمُفْرَدَات',
            payload: {
                words: [
                    { id: 1, ar: 'الظُّهُورُ', romanized: 'aẓ-ẓuhūr', en: 'Appearing / becoming visible', emoji: '👁️' },
                    { id: 2, ar: 'التَّزَيُّنُ', romanized: 'at-tazayyun', en: 'Adorning / decorating oneself', emoji: '💎' },
                    { id: 3, ar: 'السَّعَادَةُ', romanized: "as-sa\'ādah", en: 'Happiness / good fortune', emoji: '😊' },
                    { id: 4, ar: 'خَيْرٌ', romanized: 'khayr', en: 'Better / best', emoji: '⭐' },
                    { id: 5, ar: 'الطَّلَبُ', romanized: 'aṭ-ṭalab', en: 'Demanding / seeking / wanting', emoji: '🎯' },
                ],
            },
        },
        {
            id: '2-21-2',
            type: 'grammar_rule',
            titleEn: 'أَنْ — Same vs Different Subject',
            titleAr: 'أَنْ — نَفْسُ الْفَاعِل أَوْ فَاعِل مُخْتَلِف',
            payload: {
                rules: [
                    {
                        label: 'Same subject: أَرَادَ أَنْ يَفْعَلَ / Different subject: أَرَادَ أَنْ أَفْعَلَ',
                        arabic: 'أَرَادَ الرَّجُلُ أَنْ يَتَصَدَّقَ / أَرَادَ الرَّجُلُ أَنْ أَتَصَدَّقَ',
                        romanized: 'arāda r-rajulu an yataṣaddaqa / arāda r-rajulu an ataṣaddaqa',
                        meaning: 'When the subject of both verbs is the same, use the matching pronoun. When different, use the pronoun of the second subject.',
                        examples: [
                            { ar: 'أَرَادَ الرَّجُلُ أَنْ يَتَصَدَّقَ', en: 'The man wanted to give charity (he himself)' },
                            { ar: 'أَرَادَ الرَّجُلُ أَنْ أَتَصَدَّقَ بِمَالِي', en: 'The man wanted me to give my wealth in charity (different subject)' },
                            { ar: 'أُرِيدُ أَنْ أُعَلِّمَكَ اللُّغَةَ الْعَرَبِيَّةَ', en: 'I want to teach you Arabic (I = teacher)' },
                            { ar: 'أُرِيدُ أَنْ تُعَلِّمَنِي اللُّغَةَ الْعَرَبِيَّةَ', en: 'I want you to teach me Arabic (you = teacher)' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-21-3',
            type: 'grammar_rule',
            titleEn: 'بَعْدَ أَنْ / قَبْلَ أَنْ — Before and After',
            titleAr: 'بَعْدَ أَنْ وَقَبْلَ أَنْ',
            payload: {
                rules: [
                    {
                        label: 'قَبْلَ أَنْ + مُضَارِع / بَعْدَ أَنْ + مَاضٍ',
                        arabic: 'قَبْلَ أَنْ يَأْكُلَ / بَعْدَ أَنْ أَكَلَ',
                        romanized: "qabla an ya\'kula / ba\'da an akala',
                        meaning: 'قَبْلَ أَنْ (before) takes the present subjunctive. بَعْدَ أَنْ (after) takes the past tense.',
                        examples: [
                            { ar: 'غَسَلَ الْوَلَدُ يَدَهُ قَبْلَ أَنْ يَأْكُلَ', en: 'The boy washed his hands before he ate' },
                            { ar: 'غَسَلَ الْوَلَدُ يَدَهُ بَعْدَ أَنْ أَكَلَ', en: 'The boy washed his hands after he ate' },
                            { ar: 'اُخْرُجْ مِنَ الْبَيْتِ بَعْدَ أَنْ تُسَلِّمَ عَلَى أَبِيكَ', en: 'Leave the house after you greet your father' },
                            { ar: 'اِغْتَسَلْتُ قَبْلَ أَنْ أَلْبَسَ اللِّبَاسَ الْجَدِيدَ', en: 'I bathed before I wore the new clothes' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-21-4',
            type: 'assessment',
            titleEn: 'Exercise — Read and Translate أَنْ Constructions',
            titleAr: 'تَمْرِين — اِقْرَأْ وَتَرْجِمْ',
            payload: {
                instruction: 'Choose the correct English translation.',
                questions: [
                    { emoji: '✈️', question_ar: 'أَرَادَ أَنْ يُسَافِرَ', question_en: 'What does this mean?', correct_ar: 'He wanted to travel', correct_en: 'He wanted to travel', options_ar: ['He wanted to travel', 'He wants to travel', 'He traveled'] },
                    { emoji: '🗣️', question_ar: 'يُرِيدُ أَنْ يَتَكَلَّمَ', question_en: 'What does this mean?', correct_ar: 'He wants to speak', correct_en: 'He wants to speak', options_ar: ['He wants to speak', 'He wanted to speak', 'He spoke'] },
                    { emoji: '🚪', question_ar: 'لَا يَسْتَطِيعُ أَنْ يَخْرُجَ', question_en: 'What does this mean?', correct_ar: 'He cannot go out', correct_en: 'He cannot go out', options_ar: ['He cannot go out', 'He does not want to go out', 'He went out'] },
                    { emoji: '😌', question_ar: 'يُرِيدُ أَنْ يَسْتَرِيحَ', question_en: 'What does this mean?', correct_ar: 'He wants to rest', correct_en: 'He wants to rest', options_ar: ['He wants to rest', 'He rested', 'He does not want to rest'] },
                ],
            },
        },
        {
            id: '2-21-5',
            type: 'paragraph',
            titleEn: 'Reading — أَنْ Constructions in Context',
            titleAr: 'قِرَاءَة — أَنْ فِي الْجُمَل',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'قَالَ الْمُعَلِّمُ لِتِلْمِيذِهِ: أَطْلُبُ مِنْكَ أَنْ تَجْتَهِدَ فِي دِرَاسَتِكَ.',
                            'وَقَالَ الْعَالِمُ لِلتَّاجِرِ: أَطْلُبُ مِنْكَ أَنْ تُنْفِقَ مَالَكَ فِي سَبِيلِ اللهِ لِيَفْتَحَ اللهُ لَكَ بَابَ السَّعَادَةِ.',
                        ],
                        translationEn: 'The teacher said to his student: I ask you to strive in your studies. And the scholar said to the merchant: I ask you to spend your wealth in the path of Allah so that Allah may open for you the door of happiness.',
                    },
                    {
                        lines: [
                            'لَا أَسْتَطِيعُ أَنْ أَتَكَلَّمَ مَعَ أَحَدٍ بِالْعَرَبِيَّةِ، لِأَنِّي مَا تَعَلَّمْتُهَا.',
                            'يَا بِلَالُ! أُرِيدُ مِنْكَ أَنْ تُعَلِّمَنِي اللُّغَةَ الْعَرَبِيَّةَ.',
                            'أُرِيدُ أَنْ أَتَعَلَّمَهَا لِأَفْهَمَ الْقُرْآنَ وَالسُّنَّةَ وَلِأُكَلِّمَ النَّاسَ بِالْعَرَبِيَّةِ.',
                        ],
                        translationEn: 'I am not able to speak with anyone in Arabic, because I have not learned it. O Bilal! I want you to teach me the Arabic language. I want to learn it to understand the Quran and Sunnah and to speak to people in Arabic.',
                    },
                    {
                        lines: [
                            'أُرِيدُ أَنْ أُزَيِّنَ نَفْسِي بِالْعِلْمِ وَلَا أُرِيدُ أَنْ أُزَيِّنَهَا بِاللِّبَاسِ، لِأَنَّ زِينَةَ الْعِلْمِ خَيْرٌ مِنْ زِينَةِ اللِّبَاسِ.',
                            'يَا طَالِبَ الْعِلْمِ! اُطْلُبِ الْعِلْمَ مِنْ صَاحِبِ الْعِلْمِ، وَالْعِلْمُ يَطْلُبُ مِنْكَ الاِجْتِهَادَ.',
                        ],
                        translationEn: 'I want to adorn myself with knowledge and I do not want to adorn myself with clothes, because the adornment of knowledge is better than the adornment of clothes. O seeker of knowledge! Seek knowledge from the one who has knowledge, and knowledge demands diligence from you.',
                    },
                ],
            },
        },
        {
            id: '2-21-6',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                questions: [
                    { emoji: '📚', question_ar: 'مَاذَا طَلَبَ الْمُعَلِّمُ مِنْ تِلْمِيذِهِ؟', question_en: 'What did the teacher ask of his student?', correct_ar: 'طَلَبَ مِنْهُ أَنْ يَجْتَهِدَ فِي دِرَاسَتِهِ', correct_en: 'He asked him to strive in his studies.', options_ar: ['طَلَبَ مِنْهُ أَنْ يَجْتَهِدَ فِي دِرَاسَتِهِ', 'طَلَبَ مِنْهُ أَنْ يَلْعَبَ', 'طَلَبَ مِنْهُ أَنْ يَنَامَ'], questionType: 'general' },
                    { emoji: '🗣️', question_ar: 'لِمَ لَا تَسْتَطِيعُ أَنْ تَتَكَلَّمَ بِالْعَرَبِيَّةِ؟', question_en: 'Why are you not able to speak in Arabic?', correct_ar: 'لِأَنِّي مَا تَعَلَّمْتُهَا', correct_en: 'Because I have not learned it.', options_ar: ['لِأَنِّي مَا تَعَلَّمْتُهَا', 'لِأَنِّي لَا أُرِيدُ', 'لِأَنِّي مَشْغُولٌ'], questionType: 'general' },
                    { emoji: '💎', question_ar: 'بِمَ تُرِيدُ أَنْ تُزَيِّنَ نَفْسَكَ؟', question_en: 'With what do you want to adorn yourself?', correct_ar: 'أُرِيدُ أَنْ أُزَيِّنَ نَفْسِي بِالْعِلْمِ', correct_en: 'I want to adorn myself with knowledge.', options_ar: ['أُرِيدُ أَنْ أُزَيِّنَ نَفْسِي بِالْعِلْمِ', 'أُرِيدُ أَنْ أُزَيِّنَهَا بِاللِّبَاسِ', 'أُرِيدُ أَنْ أُزَيِّنَهَا بِالذَّهَبِ'], questionType: 'general' },
                    { emoji: '📖', question_ar: 'لِمَاذَا تُرِيدُ أَنْ تَتَعَلَّمَ اللُّغَةَ الْعَرَبِيَّةَ؟', question_en: 'Why do you want to learn the Arabic language?', correct_ar: 'لِأَفْهَمَ الْقُرْآنَ وَالسُّنَّةَ', correct_en: 'To understand the Quran and Sunnah.', options_ar: ['لِأَفْهَمَ الْقُرْآنَ وَالسُّنَّةَ', 'لِأُسَافِرَ إِلَى الْعَرَبِيَّةِ', 'لِأَكْتُبَ كِتَابًا'], questionType: 'general' },
                ],
            },
        },
    ],
};

import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
    darsNumber: 5,
    chunks: [
        {
            id: '2-2-5-1',
            type: 'masdar_factory',
            titleEn: 'Masdar Factory - Form IV Defective Verbs (بَابُ الْإِفْعَال)',
            titleAr: 'الْمَصَادِرُ - بَابُ الْإِفْعَال (نَاقِص)',
            payload: {
                baabLabel: 'بَابُ الْإِفْعَال - أَفْعَلَ يُفْعِلُ',
                instruction: 'Form IV defective verbs - the masdar follows the pattern إِفْعَال',
                masdarRows: [
                    { masdar: 'الْإِلْقَاءُ', masdarEn: 'throwing / casting', past: 'أَلْقَى', present: 'يُلْقِي', imperative: 'أَلْقِ', prohibitive: 'لَا تُلْقِ' },
                    { masdar: 'الْإِعْطَاءُ', masdarEn: 'giving', past: 'أَعْطَى', present: 'يُعْطِي', imperative: 'أَعْطِ', prohibitive: 'لَا تُعْطِ' },
                    { masdar: 'الْإِخْفَاءُ', masdarEn: 'hiding / concealing', past: 'أَخْفَى', present: 'يُخْفِي', imperative: 'أَخْفِ', prohibitive: 'لَا تُخْفِ' },
                    { masdar: 'الْإِفْنَاءُ', masdarEn: 'destroying / annihilating', past: 'أَفْنَى', present: 'يُفْنِي', imperative: 'أَفْنِ', prohibitive: 'لَا تُفْنِ' },
                    { masdar: 'الْإِبْكَاءُ', masdarEn: 'making someone cry', past: 'أَبْكَى', present: 'يُبْكِي', imperative: 'أَبْكِ', prohibitive: 'لَا تُبْكِ' },
                    { masdar: 'الْإِبْقَاءُ', masdarEn: 'keeping / sparing', past: 'أَبْقَى', present: 'يُبْقِي', imperative: 'أَبْقِ', prohibitive: 'لَا تُبْقِ' },
                    { masdar: 'الْإِنْجَاءُ', masdarEn: 'rescuing / saving', past: 'أَنْجَى', present: 'يُنْجِي', imperative: 'أَنْجِ', prohibitive: 'لَا تُنْجِ' },
                    { masdar: 'الْإِحْيَاءُ', masdarEn: 'giving life', past: 'أَحْيَا', present: 'يُحْيِي', imperative: 'أَحْيِ', prohibitive: 'لَا تُحْيِ' },
                    { masdar: 'الْإِنْسَاءُ', masdarEn: 'making someone forget', past: 'أَنْسَى', present: 'يُنْسِي', imperative: 'أَنْسِ', prohibitive: 'لَا تُنْسِ' },
                ],
            },
        },
        {
            id: '2-2-5-2',
            type: 'vocabulary',
            titleEn: 'Vocabulary',
            titleAr: 'الْمُفْرَدَاتُ',
            payload: {
                words: [
                    { id: 1, ar: 'إِنَّمَا', romanized: 'innamā', en: 'Only / Merely', emoji: '🎯' },
                    { id: 2, ar: 'قَاسِمٌ', romanized: 'qāsimun', en: 'Distributor / Divider', emoji: '⚖️' },
                    { id: 3, ar: 'حَيَّةٌ', romanized: 'ḥayyatun', en: 'Snake', emoji: '🐍' },
                    { id: 4, ar: 'صُورَةٌ', romanized: 'ṣūratun', en: 'Form / Image', emoji: '🖼️' },
                    { id: 5, ar: 'مَعْنًى', romanized: "ma'nan", en: 'Meaning', emoji: '💡' },
                    { id: 6, ar: 'خَارِجَ', romanized: 'khārija', en: 'Outside', emoji: '🚪' },
                    { id: 7, ar: 'هَدِيَّةٌ', romanized: 'hadiyyatun', en: 'Gift', emoji: '🎁' },
                ],
            },
        },
        {
            id: '2-2-5-3',
            type: 'grammar_rule',
            titleEn: 'Grammar - Form IV Defective Verbs (بَابُ الْإِفْعَال)',
            titleAr: 'قَاعِدَة - بَابُ الْإِفْعَال مَعَ الأَفْعَالِ النَّاقِصَة',
            payload: {
                rules: [
                    {
                        label: 'بَابُ الْإِفْعَال - Pattern أَفْعَلَ يُفْعِلُ',
                        arabic: 'أَلْقَى - يُلْقِي - أَلْقِ - لَا تُلْقِ',
                        romanized: 'alqā - yulqī - alqi - lā tulqi',
                        meaning: 'Form IV defective verbs follow the pattern أَفْعَلَ يُفْعِلُ. The masdar follows إِفْعَال. Apply the same conjugation pattern to all verbs in this group.',
                        examples: [
                            { ar: 'أَلْقَى مُوسَى عَصَاهُ', en: 'Musa threw his staff.' },
                            { ar: 'أَعْطَيْتُ رَاشِدًا كِتَابًا', en: 'I gave Rashid a book.' },
                            { ar: 'اللهُ يُحْيِي وَيُمِيتُ', en: 'Allah gives life and causes death.' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-2-5-4',
            type: 'paragraph',
            titleEn: 'Reading Passages',
            titleAr: 'قِرَاءَة',
            payload: {
                paragraphs: [
                    {
                        title: 'مُوسَى وَالْعَصَا',
                        titleEn: 'Musa and the Staff',
                        lines: [
                            'أَمَرَ اللهُ مُوسَى أَنْ يُلْقِيَ عَصَاهُ عَلَى الْأَرْضِ، فَقَالَ : أَلْقِهَا يَا مُوسَى !',
                            'فَأَلْقَى مُوسَى عَصَاهُ عَلَى الْأَرْضِ، فَظَهَرَتْ حَيَّةٌ تَسْعَى وَخَافَ مُوسَى مِنَ الْحَيَّةِ.',
                            'فَقَالَ اللهُ لَهُ : خُذْهَا وَلَا تَخَفْ، فَأَخَذَهَا مُوسَى، فَعَادَتْ عَصَاهُ إِلَى صُورَتِهَا.',
                            'أَمَرَ اللهُ أُمَّ مُوسَى أَنْ تُلْقِيَ وَلَدَهَا فِي النِّيلِ، فَأَلْقَتْ أُمُّ مُوسَى وَلَدَهَا فِي النِّيلِ.',
                        ],
                        translationEn: 'Allah commanded Musa to throw his staff on the ground, and said: "Throw it, O Musa!" So Musa threw his staff on the ground, and a snake appeared moving, and Musa feared the snake. Allah said to him: "Take it and do not fear," so Musa took it, and it returned to its form as a staff. Allah commanded the mother of Musa to throw her child into the Nile, so the mother of Musa threw her child into the Nile.',
                    },
                    {
                        title: 'إِبْرَاهِيمُ وَالْمَلِك',
                        titleEn: 'Ibrahim and the King',
                        lines: [
                            'قَالَ إِبْرَاهِيمُ : رَبِّيَ يُحْيِي وَيُمِيتُ.',
                            'فَقَالَ الْمَلِكُ الْمُتَكَبِّرُ : أَنَا أُحْيِي وَأُمِيتُ.',
                            'وَكَانَ الْمَلِكُ غَبِيًّا لَا يَعْرِفُ مَعْنَى الْحَيَاةِ وَالْمَوْتِ.',
                        ],
                        translationEn: 'Ibrahim said: "My Lord gives life and causes death." The arrogant king said: "I give life and cause death." The king was foolish and did not know the meaning of life and death.',
                    },
                    {
                        title: 'الصِّدْقُ وَالْكَذِب',
                        titleEn: 'Truth and Falsehood',
                        lines: [
                            'قَالَ الْمُعَلِّمُ لِتِلْمِيذِهِ : اُصْدُقْ دَائِمًا وَلَا تَكْذِبْ أَبَدًا.',
                            'فَإِنَّ الصِّدْقَ يُنْجِي الْإِنْسَانَ وَالْكَذِبَ يُهْلِكُهُ.',
                        ],
                        translationEn: 'The teacher said to his student: "Always be truthful and never lie, for indeed truth saves a person and lying destroys him."',
                    },
                ],
            },
        },
        {
            id: '2-2-5-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '🐍',
                        question_ar: 'مَاذَا أَمَرَ اللهُ مُوسَى أَنْ يَفْعَلَ ؟',
                        question_en: 'What did Allah command Musa to do?',
                        correct_ar: 'أَمَرَهُ أَنْ يُلْقِيَ عَصَاهُ عَلَى الْأَرْضِ',
                        correct_en: 'He commanded him to throw his staff on the ground.',
                        options_ar: [
                            'أَمَرَهُ أَنْ يُلْقِيَ عَصَاهُ عَلَى الْأَرْضِ',
                            'أَمَرَهُ أَنْ يَذْهَبَ إِلَى فِرْعَوْنَ',
                            'أَمَرَهُ أَنْ يَرْجِعَ إِلَى بَيْتِهِ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🌊',
                        question_ar: 'مَاذَا أَمَرَ اللهُ أُمَّ مُوسَى ؟',
                        question_en: 'What did Allah command the mother of Musa?',
                        correct_ar: 'أَمَرَهَا أَنْ تُلْقِيَ وَلَدَهَا فِي النِّيلِ',
                        correct_en: 'He commanded her to throw her child into the Nile.',
                        options_ar: [
                            'أَمَرَهَا أَنْ تُلْقِيَ وَلَدَهَا فِي النِّيلِ',
                            'أَمَرَهَا أَنْ تَذْهَبَ إِلَى مِصْرَ',
                            'أَمَرَهَا أَنْ تُخْفِيَ وَلَدَهَا فِي الْبَيْتِ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '✅',
                        question_ar: 'مَاذَا يُنْجِي الْإِنْسَانَ ؟',
                        question_en: 'What saves a person?',
                        correct_ar: 'الصِّدْقُ يُنْجِي الْإِنْسَانَ',
                        correct_en: 'Truth saves a person.',
                        options_ar: [
                            'الصِّدْقُ يُنْجِي الْإِنْسَانَ',
                            'الْمَالُ يُنْجِي الْإِنْسَانَ',
                            'الْكَذِبُ يُنْجِي الْإِنْسَانَ',
                        ],
                        questionType: 'general',
                    },
                ],
            },
        },
        {
            id: '2-2-5-6',
            type: 'assessment',
            titleEn: 'Exercise - Translate Form IV Verb Forms',
            titleAr: 'تَمْرِين - تَرْجِمَةُ أَفْعَالِ بَابِ الْإِفْعَال',
            payload: {
                instruction: 'Choose the correct English meaning for each Arabic verb form.',
                questions: [
                    {
                        emoji: '🎁',
                        question_ar: 'أَعْطِ',
                        question_en: 'What does this mean?',
                        correct_ar: 'Give! (command, m)',
                        correct_en: 'Give! (command, m)',
                        options_ar: ['Give! (command, m)', 'He gave', 'Do not give'],
                    },
                    {
                        emoji: '😢',
                        question_ar: 'أَبْكَيْتَ',
                        question_en: 'What does this mean?',
                        correct_ar: 'You made someone cry.',
                        correct_en: 'You made someone cry.',
                        options_ar: ['You made someone cry.', 'You cried.', 'Do not make cry.'],
                    },
                    {
                        emoji: '🌱',
                        question_ar: 'لَا تُبْقِ',
                        question_en: 'What does this mean?',
                        correct_ar: 'Do not spare / leave behind! (m)',
                        correct_en: 'Do not spare / leave behind! (m)',
                        options_ar: ['Do not spare / leave behind! (m)', 'He did not spare', 'He spared'],
                    },
                ],
            },
        },
    ],
};

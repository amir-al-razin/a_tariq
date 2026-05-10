import type { LessonData } from '../../curriculum';

export const lesson07: LessonData = {
    darsNumber: 7,
    chunks: [
        {
            id: '2-2-7-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary',
            titleAr: 'الْمُفْرَدَاتُ',
            payload: {
                words: [
                    { id: 1, ar: 'التَّفْكِيرُ', romanized: 'at-tafkīr', en: 'Thinking / Pondering', emoji: '🤔' },
                    { id: 2, ar: 'التَّحْدِيثُ', romanized: 'at-taḥdīth', en: 'Speaking / Discussing', emoji: '🗣️' },
                    { id: 3, ar: 'التَّطْهِيرُ', romanized: 'at-taṭhīr', en: 'Purifying', emoji: '✨' },
                    { id: 4, ar: 'التَّعْذِيبُ', romanized: "at-ta'dhīb", en: 'Punishing / Torturing', emoji: '⚠️' },
                    { id: 5, ar: 'الِابْنُ', romanized: 'al-ibnu', en: 'Son', emoji: '👦' },
                    { id: 6, ar: 'الِابْنَةُ', romanized: 'al-ibnatu', en: 'Daughter', emoji: '👧' },
                    { id: 7, ar: 'السِّنُّ', romanized: 'as-sinnu', en: 'Tooth / Age', emoji: '🦷' },
                    { id: 8, ar: 'التَّحَدُّثُ', romanized: 'at-taḥadduth', en: 'Conversing / Talking', emoji: '💬' },
                    { id: 9, ar: 'التَّفَكُّرُ', romanized: 'at-tafakkur', en: 'Thinking / Reflecting', emoji: '🧠' },
                    { id: 10, ar: 'التَّطَهُّرُ', romanized: 'at-taṭahhur', en: 'Becoming pure', emoji: '💧' },
                    { id: 11, ar: 'الصَّلَاةُ', romanized: 'aṣ-ṣalātu', en: 'Prayer (Salat)', emoji: '🕌' },
                    { id: 12, ar: 'التَّسْمِيَةُ', romanized: 'at-tasmiyatu', en: 'Naming', emoji: '📛' },
                    { id: 13, ar: 'التَّقْوِيَةُ', romanized: 'at-taqwiyatu', en: 'Strengthening', emoji: '💪' },
                    { id: 14, ar: 'التَّلْبِيَةُ', romanized: 'at-talbiyatu', en: 'Saying Labbayk', emoji: '🤲' },
                    { id: 15, ar: 'التَّغْذِيَةُ', romanized: 'at-taghdhiyatu', en: 'Nourishing / Feeding', emoji: '🍽️' },
                    { id: 16, ar: 'الرِّيَاضَةُ الْبَدَنِيَّةُ', romanized: 'ar-riyāḍatu l-badaniyyatu', en: 'Physical exercise', emoji: '🏃' },
                    { id: 17, ar: 'حَيٌّ', romanized: 'ḥayyun', en: 'Neighborhood', emoji: '🏘️' },
                    { id: 18, ar: 'الصُّعُودُ', romanized: "aṣ-ṣu'ūdu", en: 'Ascending / Climbing', emoji: '⬆️' },
                    { id: 19, ar: 'الْخُطْبَةُ', romanized: 'al-khuṭbatu', en: 'Sermon / Speech', emoji: '📢' },
                ],
            },
        },
        {
            id: '2-2-7-2',
            type: 'masdar_factory',
            titleEn: "Masdar Factory — Naqis Verbs in Bab At-Taf\'il",
            titleAr: 'مَصَادِرُ الأَفْعَالِ النَّاقِصَة فِي بَابِ التَّفْعِيل',
            payload: {
                baabLabel: 'بَابُ التَّفْعِيل — فَعَّلَ يُفَعِّلُ',
                instruction: "Naqis verbs in Bab At-Taf\'il have masdar pattern تَفْعِلَة instead of تَفْعِيل",
                masdarRows: [
                    { masdar: 'التَّسْمِيَةُ', masdarEn: 'naming', past: 'سَمَّى', present: 'يُسَمِّي', imperative: 'سَمِّ', prohibitive: 'لَا تُسَمِّ' },
                    { masdar: 'التَّقْوِيَةُ', masdarEn: 'strengthening', past: 'قَوَّى', present: 'يُقَوِّي', imperative: 'قَوِّ', prohibitive: 'لَا تُقَوِّ' },
                    { masdar: 'التَّلْبِيَةُ', masdarEn: 'saying Labbayk', past: 'لَبَّى', present: 'يُلَبِّي', imperative: 'لَبِّ', prohibitive: 'لَا تُلَبِّ' },
                    { masdar: 'التَّغْذِيَةُ', masdarEn: 'nourishing', past: 'غَذَّى', present: 'يُغَذِّي', imperative: 'غَذِّ', prohibitive: 'لَا تُغَذِّ' },
                ],
            },
        },
        {
            id: '2-2-7-3',
            type: 'verb_table',
            titleEn: 'Verb Table — صَلَّى (to pray)',
            titleAr: 'جَدْوَلُ الْفِعْل — صَلَّى',
            payload: {
                verbTense: 'past',
                verbTable: [
                    { root: 'صَلَّى', meaning: 'to pray', he: 'صَلَّى', she: 'صَلَّتْ', youM: 'صَلَّيْتَ', youF: 'صَلَّيْتِ', i: 'صَلَّيْتُ' },
                ],
            },
        },
        {
            id: '2-2-7-4',
            type: 'verb_table',
            titleEn: 'Present & Imperative — صَلَّى',
            titleAr: 'الْمُضَارِعُ وَالْأَمْر — صَلَّى',
            payload: {
                verbTense: 'present',
                verbTable: [
                    { root: 'يُصَلِّي', meaning: 'to pray', he: 'يُصَلِّي', she: 'تُصَلِّي', youM: 'تُصَلِّي', youF: 'تُصَلِّينَ', i: 'أُصَلِّي' },
                ],
            },
        },
        {
            id: '2-2-7-5',
            type: 'grammar_rule',
            titleEn: 'Grammar — Transitive vs Reflexive (بَابُ التَّفْعِيل vs بَابُ التَّفَعُّل)',
            titleAr: 'قَاعِدَة — الْفَرْقُ بَيْنَ التَّفْعِيل وَالتَّفَعُّل',
            payload: {
                rules: [
                    {
                        label: 'بَابُ التَّفْعِيل (transitive) vs بَابُ التَّفَعُّل (reflexive)',
                        arabic: 'زَيَّنَ الْمَلِكُ الْمَدِينَةَ — تَزَيَّنَتِ الْمَدِينَةُ',
                        romanized: 'zayyana l-maliku l-madīnata — tazayyanati l-madīnatu',
                        meaning: "Bab At-Taf\'il verbs are transitive/causative (acting on something else). Bab At-Tafa\'ul verbs are reflexive/intransitive (the subject acts on itself).",
                        examples: [
                            { ar: 'زَيَّنَ الْمَلِكُ الْمَدِينَةَ بِالْأَنْوَارِ', en: 'The king decorated the city with lights.' },
                            { ar: 'تَزَيَّنَتِ الْمَدِينَةُ بِالْأَنْوَارِ', en: 'The city decorated itself with lights.' },
                            { ar: 'طَهَّرَ اللهُ قُلُوبَهُمْ', en: 'Allah purified their hearts.' },
                            { ar: 'تَطَهَّرَتْ قُلُوبُهُمْ', en: 'Their hearts became pure.' },
                            { ar: 'عَلَّمَهُ أَبُوهُ الصَّلَاةَ', en: 'His father taught him the prayer.' },
                            { ar: 'تَعَلَّمَ الْوَلَدُ مِنْ أَبِيهِ الصَّلَاةَ', en: 'The boy learned the prayer from his father.' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-2-7-6',
            type: 'paragraph',
            titleEn: 'Reading Passages',
            titleAr: 'قِرَاءَة',
            payload: {
                paragraphs: [
                    {
                        title: 'زِينَةُ الْعِلْم',
                        titleEn: 'The Adornment of Knowledge',
                        lines: [
                            'قَالَ الْمُعَلِّمُ لِتِلْمِيذِهِ : زَيِّنْ نَفْسَكَ بِالْعِلْمِ قَبْلَ أَنْ تُزَيِّنَهَا بِاللِّبَاسِ، فَزِينَةُ الْعِلْمِ خَيْرٌ مِنْ زِينَةِ اللِّبَاسِ.',
                        ],
                        translationEn: 'The teacher said to his student: "Adorn yourself with knowledge before you adorn yourself with clothing, for the adornment of knowledge is better than the adornment of clothing."',
                    },
                    {
                        title: 'الصَّلَاةُ وَالْجَمَاعَة',
                        titleEn: 'Prayer and Congregation',
                        lines: [
                            'صَلَّى رَاشِدٌ الظُّهْرَ فِي مَسْجِدِ الْمَدْرَسَةِ.',
                            'قَالَ مَحْمُودٌ : أُرِيدُ أَنْ أَذْهَبَ الْآنَ إِلَى مَسْجِدِ الْحَيِّ لِأُصَلِّيَ الْعَصْرَ مَعَ الْجَمَاعَةِ.',
                            'أُحِبُّ أَنْ أُصَلِّيَ دَائِمًا فِي الْمَسْجِدِ مَعَ الْجَمَاعَةِ، لِأَنِّي أَعْلَمُ أَنَّ صَلَاةَ الْجَمَاعَةِ خَيْرٌ مِنْ صَلَاةِ الْبَيْتِ.',
                        ],
                        translationEn: 'Rashid prayed Dhuhr in the school mosque. Mahmud said: "I want to go now to the neighborhood mosque to pray Asr with the congregation. I love to always pray in the mosque with the congregation, because I know that congregational prayer is better than praying at home."',
                    },
                    {
                        title: 'الْإِمَامُ وَالْخُطْبَة',
                        titleEn: 'The Imam and the Sermon',
                        lines: [
                            'صَعِدَ الْإِمَامُ عَلَى الْمِنْبَرِ وَخَطَبَ النَّاسَ.',
                            'ثُمَّ نَزَلَ وَقَامَ عَلَى الْمُصَلَّى وَصَلَّى بِالنَّاسِ.',
                            'لَمَّا مَرِضَ رَسُولُ اللهِ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) أَمَرَ أَبَا بَكْرٍ (رَضِيَ اللهُ عَنْهُ) أَنْ يُصَلِّيَ بِالنَّاسِ فِي الْمَسْجِدِ.',
                        ],
                        translationEn: 'The Imam ascended the pulpit and delivered a sermon to the people. Then he descended and stood at the prayer area and led the people in prayer. When the Messenger of Allah (peace be upon him) fell ill, he commanded Abu Bakr (may Allah be pleased with him) to lead the people in prayer in the mosque.',
                    },
                ],
            },
        },
        {
            id: '2-2-7-7',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '📚',
                        question_ar: 'بِمَ أَمَرَ الْمُعَلِّمُ تِلْمِيذَهُ أَنْ يُزَيِّنَ نَفْسَهُ ؟',
                        question_en: 'With what did the teacher command his student to adorn himself?',
                        correct_ar: 'أَمَرَهُ أَنْ يُزَيِّنَ نَفْسَهُ بِالْعِلْمِ',
                        correct_en: 'He commanded him to adorn himself with knowledge.',
                        options_ar: [
                            'أَمَرَهُ أَنْ يُزَيِّنَ نَفْسَهُ بِالْعِلْمِ',
                            'أَمَرَهُ أَنْ يُزَيِّنَ نَفْسَهُ بِاللِّبَاسِ',
                            'أَمَرَهُ أَنْ يُزَيِّنَ نَفْسَهُ بِالْمَالِ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🕌',
                        question_ar: 'لِمَ يُصَلِّي رَاشِدٌ مَعَ الْجَمَاعَةِ دَائِمًا ؟',
                        question_en: 'Why does Rashid always pray with the congregation?',
                        correct_ar: 'لِأَنَّ صَلَاةَ الْجَمَاعَةِ خَيْرٌ مِنْ صَلَاةِ الْبَيْتِ',
                        correct_en: 'Because congregational prayer is better than praying at home.',
                        options_ar: [
                            'لِأَنَّ صَلَاةَ الْجَمَاعَةِ خَيْرٌ مِنْ صَلَاةِ الْبَيْتِ',
                            'لِأَنَّ الْمَسْجِدَ قَرِيبٌ مِنْ بَيْتِهِ',
                            'لِأَنَّ أَبَاهُ يَأْمُرُهُ بِذَلِكَ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🤲',
                        question_ar: 'مَنْ صَلَّى بِالنَّاسِ لَمَّا مَرِضَ رَسُولُ اللهِ ؟',
                        question_en: 'Who led the people in prayer when the Messenger of Allah fell ill?',
                        correct_ar: 'أَبُو بَكْرٍ رَضِيَ اللهُ عَنْهُ',
                        correct_en: 'Abu Bakr, may Allah be pleased with him.',
                        options_ar: [
                            'أَبُو بَكْرٍ رَضِيَ اللهُ عَنْهُ',
                            'عُمَرُ رَضِيَ اللهُ عَنْهُ',
                            'عَلِيٌّ رَضِيَ اللهُ عَنْهُ',
                        ],
                        questionType: 'general',
                    },
                ],
            },
        },
        {
            id: '2-2-7-8',
            type: 'assessment',
            titleEn: 'Exercise — Transitive vs Reflexive',
            titleAr: 'تَمْرِين — الْفَرْقُ بَيْنَ التَّفْعِيل وَالتَّفَعُّل',
            payload: {
                instruction: 'Choose the correct reflexive form.',
                questions: [
                    {
                        emoji: '✨',
                        question_ar: 'طَهَّرَ اللهُ قُلُوبَهُمْ — (الشَّكْلُ الْمُطَاوِع)',
                        question_en: 'What is the reflexive form?',
                        correct_ar: 'تَطَهَّرَتْ قُلُوبُهُمْ',
                        correct_en: 'Their hearts became pure.',
                        options_ar: [
                            'تَطَهَّرَتْ قُلُوبُهُمْ',
                            'طَهَّرَتْ قُلُوبُهُمْ',
                            'يُطَهِّرُ قُلُوبَهُمْ',
                        ],
                    },
                    {
                        emoji: '💬',
                        question_ar: 'حَدَّثْتُهُ — (الشَّكْلُ الْمُطَاوِع)',
                        question_en: 'What is the reflexive form?',
                        correct_ar: 'تَحَدَّثْتُ مَعَهُ',
                        correct_en: 'I conversed with him.',
                        options_ar: [
                            'تَحَدَّثْتُ مَعَهُ',
                            'حَدَّثَنِي',
                            'يُحَدِّثُنِي',
                        ],
                    },
                ],
            },
        },
    ],
};

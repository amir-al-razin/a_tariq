import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
    darsNumber: 3,
    chunks: [
        {
            id: '2-1-3-1',
            type: 'vocabulary',
            titleEn: 'Masdars (Verbal Nouns) - Core 8',
            titleAr: 'المَصَادِر الأَسَاسِيَّة',
            payload: {
                words: [
                    { id: 1, ar: 'الْفِعْلُ', romanized: "al-fi'l", en: 'To do (the act)', emoji: '✅' },
                    { id: 2, ar: 'الْخُرُوجُ', romanized: 'al-khurūj', en: 'To exit / go out', emoji: '🚪' },
                    { id: 3, ar: 'الذَّهَابُ', romanized: 'adh-dhahāb', en: 'To go', emoji: '🚶' },
                    { id: 4, ar: 'الْجُلُوسُ', romanized: 'al-julūs', en: 'To sit', emoji: '🪑' },
                    { id: 5, ar: 'الْقِرَاءَةُ', romanized: "al-qirā'ah", en: 'To read', emoji: '📖' },
                    { id: 6, ar: 'الْكِتَابَةُ', romanized: 'al-kitābah', en: 'To write', emoji: '✍️' },
                    { id: 7, ar: 'الرُّجُوعُ', romanized: "ar-rujū'", en: 'To return', emoji: '↩️' },
                    { id: 8, ar: 'اللَّعِبُ', romanized: "al-la'ib", en: 'To play', emoji: '⚽' },
                ],
            },
        },
        {
            id: '2-1-3-2',
            type: 'vocabulary',
            titleEn: 'More Masdars - Extended Set',
            titleAr: 'مَصَادِر إِضَافِيَّة',
            payload: {
                words: [
                    { id: 1, ar: 'السِّبَاحَةُ', romanized: 'as-sibāḥah', en: 'To swim', emoji: '🏊' },
                    { id: 2, ar: 'النَّجَاحُ', romanized: 'an-najāḥ', en: 'To succeed', emoji: '🏆' },
                    { id: 3, ar: 'النُّزُولُ', romanized: 'an-nuzūl', en: 'To descend / go down', emoji: '⬇️' },
                    { id: 4, ar: 'الْكَذِبُ', romanized: 'al-kadhib', en: 'To lie', emoji: '🤥' },
                    { id: 5, ar: 'الصِّدْقُ', romanized: 'aṣ-ṣidq', en: 'To tell the truth', emoji: '✅' },
                    { id: 6, ar: 'الْأَكْلُ', romanized: 'al-akl', en: 'To eat', emoji: '🍽️' },
                    { id: 7, ar: 'الشُّرْبُ', romanized: 'ash-shurb', en: 'To drink', emoji: '🥤' },
                    { id: 8, ar: 'الضَّحْكُ', romanized: 'aḍ-ḍaḥk', en: 'To laugh', emoji: '😄' },
                ],
            },
        },
        {
            id: '2-1-3-3',
            type: 'vocabulary',
            titleEn: 'Causal Particles (لِأَنَّ)',
            titleAr: 'حَرْفُ التَّعْلِيل: لِأَنَّ',
            payload: {
                words: [
                    { id: 1, ar: 'لِأَنَّ', romanized: "li'anna", en: 'Because', emoji: '💬' },
                    { id: 2, ar: 'لِأَنَّهُ', romanized: "li'annahu", en: 'Because he / it', emoji: '👦' },
                    { id: 3, ar: 'لِأَنَّهَا', romanized: "li'annahā", en: 'Because she / it', emoji: '👧' },
                    { id: 4, ar: 'لِأَنَّكَ', romanized: "li'annaka", en: 'Because you (m)', emoji: '👉' },
                    { id: 5, ar: 'لِأَنَّكِ', romanized: "li'annaki", en: 'Because you (f)', emoji: '👉' },
                    { id: 6, ar: 'لِأَنِّيْ', romanized: "li'annī", en: 'Because I', emoji: '🙋' },
                ],
            },
        },
        {
            id: '2-1-3-4',
            type: 'masdar_factory',
            titleEn: 'Verb Patterns - Bāb Fataha (بَابُ فَتَحَ)',
            titleAr: 'بَابُ فَتَحَ يَفْتَحُ',
            payload: {
                baabLabel: 'بَابُ فَتَحَ يَفْتَحُ',
                instruction: 'Each masdar derives 4 verb forms: Past · Present · Command · Prohibition',
                masdarRows: [
                    { masdar: 'الْفِعْلُ', masdarEn: 'to do', past: 'فَعَلَ', present: 'يَفْعَلُ', imperative: 'اِفْعَلْ', prohibitive: 'لَا تَفْعَلْ' },
                    { masdar: 'الذَّهَابُ', masdarEn: 'to go', past: 'ذَهَبَ', present: 'يَذْهَبُ', imperative: 'اِذْهَبْ', prohibitive: 'لَا تَذْهَبْ' },
                    { masdar: 'الْقِرَاءَةُ', masdarEn: 'to read', past: 'قَرَأَ', present: 'يَقْرَأُ', imperative: 'اِقْرَأْ', prohibitive: 'لَا تَقْرَأْ' },
                    { masdar: 'السِّبَاحَةُ', masdarEn: 'to swim', past: 'سَبَحَ', present: 'يَسْبَحُ', imperative: 'اِسْبَحْ', prohibitive: 'لَا تَسْبَحْ' },
                    { masdar: 'النَّجَاحُ', masdarEn: 'to succeed', past: 'نَجَحَ', present: 'يَنْجَحُ', imperative: 'اِنْجَحْ', prohibitive: 'لَا تَنْجَحْ' },
                ],
            },
        },
        {
            id: '2-1-3-5',
            type: 'masdar_factory',
            titleEn: 'Verb Patterns - Bāb Nasara (بَابُ نَصَرَ)',
            titleAr: 'بَابُ نَصَرَ يَنْصُرُ',
            payload: {
                baabLabel: 'بَابُ نَصَرَ يَنْصُرُ',
                masdarRows: [
                    { masdar: 'الْخُرُوجُ', masdarEn: 'to exit', past: 'خَرَجَ', present: 'يَخْرُجُ', imperative: 'اُخْرُجْ', prohibitive: 'لَا تَخْرُجْ' },
                    { masdar: 'الْكِتَابَةُ', masdarEn: 'to write', past: 'كَتَبَ', present: 'يَكْتُبُ', imperative: 'اُكْتُبْ', prohibitive: 'لَا تَكْتُبْ' },
                    { masdar: 'الصِّدْقُ', masdarEn: 'to tell the truth', past: 'صَدَقَ', present: 'يَصْدُقُ', imperative: 'اُصْدُقْ', prohibitive: 'لَا تَصْدُقْ' },
                    { masdar: 'الدُّخُولُ', masdarEn: 'to enter', past: 'دَخَلَ', present: 'يَدْخُلُ', imperative: 'اُدْخُلْ', prohibitive: 'لَا تَدْخُلْ' },
                ],
            },
        },
        {
            id: '2-1-3-6',
            type: 'masdar_factory',
            titleEn: 'Verb Patterns - Bāb Daraba (بَابُ ضَرَبَ)',
            titleAr: 'بَابُ ضَرَبَ يَضْرِبُ',
            payload: {
                baabLabel: 'بَابُ ضَرَبَ يَضْرِبُ',
                masdarRows: [
                    { masdar: 'الْجُلُوسُ', masdarEn: 'to sit', past: 'جَلَسَ', present: 'يَجْلِسُ', imperative: 'اِجْلِسْ', prohibitive: 'لَا تَجْلِسْ' },
                    { masdar: 'الرُّجُوعُ', masdarEn: 'to return', past: 'رَجَعَ', present: 'يَرْجِعُ', imperative: 'اِرْجِعْ', prohibitive: 'لَا تَرْجِعْ' },
                    { masdar: 'النُّزُولُ', masdarEn: 'to descend', past: 'نَزَلَ', present: 'يَنْزِلُ', imperative: 'اِنْزِلْ', prohibitive: 'لَا تَنْزِلْ' },
                    { masdar: 'الْكَذِبُ', masdarEn: 'to lie', past: 'كَذَبَ', present: 'يَكْذِبُ', imperative: 'اِكْذِبْ', prohibitive: 'لَا تَكْذِبْ' },
                ],
            },
        },
        {
            id: '2-1-3-7',
            type: 'masdar_factory',
            titleEn: "Verb Patterns - Bāb Sami\'a (بَابُ سَمِعَ)",
            titleAr: 'بَابُ سَمِعَ يَسْمَعُ',
            payload: {
                baabLabel: 'بَابُ سَمِعَ يَسْمَعُ',
                masdarRows: [
                    { masdar: 'اللَّعِبُ', masdarEn: 'to play', past: 'لَعِبَ', present: 'يَلْعَبُ', imperative: 'اِلْعَبْ', prohibitive: 'لَا تَلْعَبْ' },
                    { masdar: 'الشُّرْبُ', masdarEn: 'to drink', past: 'شَرِبَ', present: 'يَشْرَبُ', imperative: 'اِشْرَبْ', prohibitive: 'لَا تَشْرَبْ' },
                    { masdar: 'الضَّحْكُ', masdarEn: 'to laugh', past: 'ضَحِكَ', present: 'يَضْحَكُ', imperative: 'اِضْحَكْ', prohibitive: 'لَا تَضْحَكْ' },
                    { masdar: 'الْفَهْمُ', masdarEn: 'to understand', past: 'فَهِمَ', present: 'يَفْهَمُ', imperative: 'اِفْهَمْ', prohibitive: 'لَا تَفْهَمْ' },
                ],
            },
        },
        {
            id: '2-1-3-8',
            type: 'masdar_factory',
            titleEn: 'Special Cases - Irregular Forms',
            titleAr: 'أَفْعَال خَاصَّة',
            payload: {
                instruction: 'These verbs have irregular imperative forms.',
                masdarRows: [
                    { masdar: 'الْأَكْلُ', masdarEn: 'to eat', past: 'أَكَلَ', present: 'يَأْكُلُ', imperative: 'كُلْ', prohibitive: 'لَا تَأْكُلْ' },
                ],
            },
        },
        {
            id: '2-1-3-9',
            type: 'paragraph',
            titleEn: 'Reading - Ramadan Passage',
            titleAr: 'قِرَاءَة - شَهْرُ رَمَضَان',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'الْقُرْآنُ كِتَابُ اللهِ.',
                            'نَزَلَ الْقُرْآنُ عَلَى رَسُولِ اللهِ ﷺ فِي شَهْرِ رَمَضَانَ.',
                            'لَا يَأْكُلُ الصَّائِمُ وَلَا يَشْرَبُ فِي نَهَارِ رَمَضَانَ، بَلْ يَأْكُلُ وَيَشْرَبُ بَعْدَ الْمَغْرِبِ إِلَى الْفَجْرِ.',
                            'أَكَلَتْ فَاطِمَةُ وَشَرِبَتْ فِي نَهَارِ رَمَضَانَ، لِأَنَّهَا طِفْلَةٌ صَغِيرَةٌ.',
                            'مَا أَكَلَ رَاشِدٌ وَمَا شَرِبَ فِي النَّهَارِ، لِأَنَّهُ صَائِمٌ.',
                        ],
                        translationEn: 'The Quran is the Book of Allah. The Quran was revealed to the Messenger of Allah ﷺ in the month of Ramadan. The fasting person does not eat or drink during the daytime of Ramadan, rather he eats and drinks after Maghrib until Fajr. Fatima ate and drank during the daytime of Ramadan because she is a small child. Rashid did not eat or drink during the day because he is fasting.',
                    },
                    {
                        lines: [
                            'أَيُّهَا الْوَلَدُ! اُصْدُقْ دَائِمًا وَلَا تَكْذِبْ أَبَدًا.',
                            'يَصْدُقُ الْمُسْلِمُ دَائِمًا وَلَا يَكْذِبُ أَبَدًا.',
                            'مَا كَذَبَ رَسُولُ اللهِ ﷺ فِي حَيَاتِهِ.',
                            'يَسْبَحُ السَّمَكُ فِي مَاءِ النَّهْرِ.',
                            'يَنْزِلُ الْمَطَرُ مِنَ السَّمَاءِ.',
                            'لَا يَنْجَحُ الْكَسْلَانُ فِي حَيَاتِهِ.',
                        ],
                        translationEn: 'O boy! Always tell the truth and never lie. The Muslim always tells the truth and never lies. The Messenger of Allah ﷺ never lied in his life. The fish swims in the river water. Rain descends from the sky. The lazy person does not succeed in his life.',
                    },
                ],
            },
        },
        {
            id: '2-1-3-10',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                questions: [
                    { emoji: '📖', question_ar: 'عَلَى مَنْ نَزَلَ الْقُرْآنُ ؟', question_en: 'Upon whom was the Quran revealed?', correct_ar: 'نَزَلَ عَلَى رَسُولِ اللهِ ﷺ', correct_en: 'It was revealed upon the Messenger of Allah ﷺ.', options_ar: ['نَزَلَ عَلَى رَسُولِ اللهِ ﷺ', 'نَزَلَ عَلَى مُوسَى', 'نَزَلَ عَلَى إِبْرَاهِيمَ'], questionType: 'general' },
                    { emoji: '🌙', question_ar: 'مَتَى نَزَلَ الْقُرْآنُ ؟', question_en: 'When was the Quran revealed?', correct_ar: 'نَزَلَ فِي شَهْرِ رَمَضَانَ', correct_en: 'It was revealed in the month of Ramadan.', options_ar: ['نَزَلَ فِي شَهْرِ رَمَضَانَ', 'نَزَلَ فِي شَهْرِ رَجَبٍ', 'نَزَلَ فِي شَهْرِ شَعْبَانَ'], questionType: 'general' },
                    { emoji: '🍽️', question_ar: 'هَلْ يَأْكُلُ الصَّائِمُ فِي نَهَارِ رَمَضَانَ ؟', question_en: 'Does the fasting person eat during the daytime of Ramadan?', correct_ar: 'لَا .. لَا يَأْكُلُ وَلَا يَشْرَبُ', correct_en: 'No, he does not eat or drink.', options_ar: ['لَا .. لَا يَأْكُلُ وَلَا يَشْرَبُ', 'نَعَمْ .. يَأْكُلُ', 'نَعَمْ .. يَشْرَبُ فَقَطْ'], questionType: 'hal' },
                    { emoji: '🌧️', question_ar: 'مِنْ أَيْنَ يَنْزِلُ الْمَطَرُ ؟', question_en: 'Where does rain descend from?', correct_ar: 'يَنْزِلُ مِنَ السَّمَاءِ', correct_en: 'It descends from the sky.', options_ar: ['يَنْزِلُ مِنَ السَّمَاءِ', 'يَنْزِلُ مِنَ الْجَبَلِ', 'يَنْزِلُ مِنَ الْبَحْرِ'], questionType: 'general' },
                    { emoji: '😴', question_ar: 'هَلْ يَنْجَحُ الْكَسْلَانُ فِي حَيَاتِهِ ؟', question_en: 'Does the lazy person succeed in his life?', correct_ar: 'لَا .. لَا يَنْجَحُ', correct_en: 'No, he does not succeed.', options_ar: ['لَا .. لَا يَنْجَحُ', 'نَعَمْ .. يَنْجَحُ', 'أَحْيَانًا يَنْجَحُ'], questionType: 'hal' },
                ],
            },
        },
        {
            id: '2-1-3-11',
            type: 'tarkeeb',
            titleEn: 'Sentence Structure - Verb + Qualified Subject',
            titleAr: 'تَرْكِيب - فِعْل + فَاعِل مَوْصُوف',
            payload: {
                tarkeeb: [
                    {
                        sentence: 'خَرَجَ التِّلْمِيذُ الْجَدِيدُ مِنَ الْفَصْلِ',
                        sentenceEn: 'The new student exited the classroom.',
                        type: 'complete',
                        tree: [
                            { label: 'فِعْل', labelEn: 'Verb', text: 'خَرَجَ' },
                            {
                                label: 'فَاعِل', labelEn: 'Subject', text: 'التِّلْمِيذُ الْجَدِيدُ',
                                children: [
                                    { label: 'مَوْصُوف', labelEn: 'Noun', text: 'التِّلْمِيذُ' },
                                    { label: 'صِفَة', labelEn: 'Adjective', text: 'الْجَدِيدُ' },
                                ],
                            },
                            {
                                label: 'مُتَعَلِّق', labelEn: 'Modifier', text: 'مِنَ الْفَصْلِ',
                                children: [
                                    { label: 'حَرْف جَرّ', labelEn: 'Preposition', text: 'مِنَ' },
                                    { label: 'مَجْرُور', labelEn: 'Object of prep.', text: 'الْفَصْلِ' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    ],
};

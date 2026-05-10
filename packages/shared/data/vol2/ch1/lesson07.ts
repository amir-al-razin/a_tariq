import type { LessonData } from '../../curriculum';

export const lesson07: LessonData = {
    darsNumber: 7,
    chunks: [
        {
            id: '2-7-1',
            type: 'vocabulary',
            titleEn: 'Form IV Masdars (بَابُ الإِفْعَال)',
            titleAr: 'مَصَادِر بَابِ الإِفْعَال',
            payload: {
                words: [
                    { id: 1, ar: 'الإِخْرَاجُ', romanized: 'al-ikhrāj', en: 'To bring out / extract', emoji: '📤' },
                    { id: 2, ar: 'الإِنْزَالُ', romanized: 'al-inzāl', en: 'To bring down / reveal', emoji: '⬇️' },
                    { id: 3, ar: 'الإِحْضَارُ', romanized: 'al-iḥḍār', en: 'To present / bring', emoji: '🎁' },
                    { id: 4, ar: 'الإِلْبَاسُ', romanized: 'al-ilbās', en: 'To clothe / dress someone', emoji: '👗' },
                    { id: 5, ar: 'الإِفْهَامُ', romanized: 'al-ifhām', en: 'To explain / make understand', emoji: '💡' },
                    { id: 6, ar: 'الإِدْخَالُ', romanized: 'al-idkhāl', en: 'To insert / make enter', emoji: '🚪' },
                    { id: 7, ar: 'الإِجْلَاسُ', romanized: 'al-ijlās', en: 'To seat / make sit', emoji: '🪑' },
                    { id: 8, ar: 'الإِرْسَالُ', romanized: 'al-irsāl', en: 'To send', emoji: '📨' },
                    { id: 9, ar: 'الإِنْفَاقُ', romanized: 'al-infāq', en: 'To spend (in charity)', emoji: '💰' },
                    { id: 10, ar: 'الإِطْعَامُ', romanized: "al-iṭ\'ām", en: 'To feed', emoji: '🍽️' },
                    { id: 11, ar: 'الإِكْرَامُ', romanized: 'al-ikrām', en: 'To honor / respect', emoji: '🌟' },
                    { id: 12, ar: 'الإِجَابَةُ', romanized: 'al-ijābah', en: 'To answer / reply', emoji: '💬' },
                    { id: 13, ar: 'الإِرَادَةُ', romanized: 'al-irādah', en: 'To will / desire', emoji: '🎯' },
                    { id: 14, ar: 'الإِطَاعَةُ', romanized: "al-iṭā\'ah", en: 'To obey', emoji: '✅' },
                    { id: 15, ar: 'الإِقَامَةُ', romanized: 'al-iqāmah', en: 'To establish / stay', emoji: '🏠' },
                    { id: 16, ar: 'الإِهَانَةُ', romanized: 'al-ihānah', en: 'To insult', emoji: '😤' },
                    { id: 17, ar: 'الإِعَانَةُ', romanized: "al-i\'ānah", en: 'To help', emoji: '🤝' },
                    { id: 18, ar: 'الإِضَاعَةُ', romanized: "al-iḍā\'ah", en: 'To waste / ruin', emoji: '🗑️' },
                ],
            },
        },
        {
            id: '2-7-2',
            type: 'vocabulary',
            titleEn: 'Nouns & Phrases',
            titleAr: 'أَسْمَاء وَعِبَارَات',
            payload: {
                words: [
                    { id: 1, ar: 'ضَيْفٌ', romanized: 'ḍayf', en: 'Guest', emoji: '🧑‍🤝‍🧑' },
                    { id: 2, ar: 'خِطَابٌ', romanized: 'khiṭāb', en: 'Letter', emoji: '✉️' },
                    { id: 3, ar: 'ظَلَامٌ', romanized: 'ẓalām', en: 'Darkness', emoji: '🌑' },
                    { id: 4, ar: 'لِوَجْهِ اللهِ', romanized: 'li-wajhi llāh', en: 'For the sake of Allah', emoji: '🕌' },
                ],
            },
        },
        {
            id: '2-7-3',
            type: 'masdar_factory',
            titleEn: 'Form IV — Sound Verb: أَخْرَجَ',
            titleAr: 'بَابُ الإِفْعَال — الصَّحِيح: أَخْرَجَ',
            payload: {
                baabLabel: 'بَابُ الإِفْعَالِ (Sound)',
                instruction: 'Form IV adds أَ prefix to the root. Present tense uses يُفْعِلُ pattern.',
                masdarRows: [
                    { masdar: 'الإِخْرَاجُ', masdarEn: 'to bring out', past: 'أَخْرَجَ', present: 'يُخْرِجُ', imperative: 'أَخْرِجْ', prohibitive: 'لَا تُخْرِجْ' },
                    { masdar: 'الإِنْزَالُ', masdarEn: 'to send down', past: 'أَنْزَلَ', present: 'يُنْزِلُ', imperative: 'أَنْزِلْ', prohibitive: 'لَا تُنْزِلْ' },
                    { masdar: 'الإِرْسَالُ', masdarEn: 'to send', past: 'أَرْسَلَ', present: 'يُرْسِلُ', imperative: 'أَرْسِلْ', prohibitive: 'لَا تُرْسِلْ' },
                    { masdar: 'الإِنْفَاقُ', masdarEn: 'to spend', past: 'أَنْفَقَ', present: 'يُنْفِقُ', imperative: 'أَنْفِقْ', prohibitive: 'لَا تُنْفِقْ' },
                    { masdar: 'الإِطْعَامُ', masdarEn: 'to feed', past: 'أَطْعَمَ', present: 'يُطْعِمُ', imperative: 'أَطْعِمْ', prohibitive: 'لَا تُطْعِمْ' },
                    { masdar: 'الإِكْرَامُ', masdarEn: 'to honor', past: 'أَكْرَمَ', present: 'يُكْرِمُ', imperative: 'أَكْرِمْ', prohibitive: 'لَا تُكْرِمْ' },
                ],
            },
        },
        {
            id: '2-7-4',
            type: 'masdar_factory',
            titleEn: 'Form IV — Hollow Verb: أَجَابَ',
            titleAr: 'بَابُ الإِفْعَال — الأَجْوَف: أَجَابَ',
            payload: {
                baabLabel: 'بَابُ الإِفْعَالِ (Hollow)',
                instruction: 'Hollow Form IV verbs — the middle letter changes in conjugation',
                masdarRows: [
                    { masdar: 'الإِجَابَةُ', masdarEn: 'to answer', past: 'أَجَابَ', present: 'يُجِيبُ', imperative: 'أَجِبْ', prohibitive: 'لَا تُجِبْ' },
                    { masdar: 'الإِطَاعَةُ', masdarEn: 'to obey', past: 'أَطَاعَ', present: 'يُطِيعُ', imperative: 'أَطِعْ', prohibitive: 'لَا تُطِعْ' },
                    { masdar: 'الإِقَامَةُ', masdarEn: 'to establish / stay', past: 'أَقَامَ', present: 'يُقِيمُ', imperative: 'أَقِمْ', prohibitive: 'لَا تُقِمْ' },
                ],
            },
        },
        {
            id: '2-7-5',
            type: 'paragraph',
            titleEn: 'Reading — Form I vs Form IV Contrast',
            titleAr: 'قِرَاءَة — مُقَارَنَة بَابِ فَعَلَ وَبَابِ الإِفْعَال',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'خَرَجَ رَاشِدٌ مِنَ الْغُرْفَةِ.',
                            'أَخْرَجَ رَاشِدٌ خَالِدًا مِنَ الْغُرْفَةِ.',
                            'نَزَلَ الْمَطَرُ مِنَ السَّمَاءِ.',
                            'أَنْزَلَ اللهُ الْمَطَرَ مِنَ السَّمَاءِ.',
                            'حَضَرَ التِّلْمِيذُ فِي الْفَصْلِ.',
                            'أَحْضَرَ التِّلْمِيذُ كِتَابَهُ.',
                            'لَبِسَ رَاشِدٌ لِبَاسًا قَدِيمًا.',
                            'أَلْبَسَ رَاشِدٌ وَلَدَهُ لِبَاسًا جَدِيدًا.',
                            'دَخَلَ الْمُسْلِمُ الْجَنَّةَ.',
                            'أَدْخَلَ اللهُ الْمُسْلِمَ الْجَنَّةَ.',
                            'فَهِمَ التِّلْمِيذُ الدَّرْسَ.',
                            'أَفْهَمَ الْمُعَلِّمُ تِلْمِيذَهُ الدَّرْسَ.',
                        ],
                        translationEn: 'Rashid exited the room. / Rashid took Khalid out of the room. Rain descended from the sky. / Allah sent down rain from the sky. The student attended the classroom. / The student brought his book. Rashid wore old clothes. / Rashid dressed his son in new clothes. The Muslim entered Paradise. / Allah made the Muslim enter Paradise. The student understood the lesson. / The teacher made his student understand the lesson.',
                    },
                    {
                        lines: [
                            'أَنْزَلَ اللهُ عَلَى رَسُولِهِ الْقُرْآنَ وَأَخْرَجَنَا بِهِ مِنَ الظَّلَامِ إِلَى النُّورِ.',
                            'أَيُّهَا الْمُسْلِمُ! أَنْفِقْ مَالَكَ فِي سَبِيلِ اللهِ.',
                            'يُنْفِقُ الْوَالِدُ مَالَهُ عَلَى وَلَدِهِ.',
                            'أَلْبَسَتْ أُمُّ مَاجِدٍ وَلَدَهَا لِبَاسَ الْمَدْرَسَةِ وَأَرْسَلَتْهُ إِلَى الْمَدْرَسَةِ.',
                            'أَرْسَلَ اللهُ إِلَى فِرْعَوْنَ رَسُولًا.',
                        ],
                        translationEn: 'Allah sent down the Quran upon His Messenger and brought us out through it from darkness into light. O Muslim! Spend your wealth in the path of Allah. The parent spends his wealth on his child. Majid\'s mother dressed her son in school clothes and sent him to the madrasa. Allah sent a messenger to Pharaoh.',
                    },
                    {
                        lines: [
                            'سَأَلَ الْمُعَلِّمُ تِلْمِيذَهُ فِي الْفَصْلِ، فَقَامَ التِّلْمِيذُ وَأَجَابَ.',
                            'أَنَا أُطِيعُ اللهَ وَرَسُولَهُ، لِأَنِّي مُسْلِمٌ.',
                            'الْمُسْلِمُ يُطِيعُ اللهَ وَرَسُولَهُ وَلَا يُطِيعُ الشَّيْطَانَ.',
                            'قُلْتُ لِخَالِدٍ: أَطِعْ أَبَاكَ وَأُمَّكَ يَا خَالِدُ!',
                            'أَكْرَمَ الْعَالِمَ لِعِلْمِهِ وَلَا تُهِنْهُ أَبَدًا.',
                        ],
                        translationEn: 'The teacher asked his student in the classroom, so the student stood up and answered. I obey Allah and His Messenger, because I am a Muslim. The Muslim obeys Allah and His Messenger and does not obey Satan. I said to Khalid: Obey your father and mother, O Khalid! Honor the scholar for his knowledge and never insult him.',
                    },
                ],
            },
        },
        {
            id: '2-7-6',
            type: 'assessment',
            titleEn: 'Exercise — Form I vs Form IV',
            titleAr: 'تَمْرِين — مُقَارَنَة بَابَيْن',
            payload: {
                instruction: 'Choose the correct Form IV verb that corresponds to the given Form I verb.',
                questions: [
                    { emoji: '🚪', question_ar: 'خَرَجَ (he exited) → Form IV:', question_en: 'What is the Form IV of خَرَجَ?', correct_ar: 'أَخْرَجَ (he took out)', correct_en: 'أَخْرَجَ (he took out)', options_ar: ['أَخْرَجَ (he took out)', 'يَخْرُجُ (he exits)', 'اُخْرُجْ (exit!)'] },
                    { emoji: '⬇️', question_ar: 'نَزَلَ (he descended) → Form IV:', question_en: 'What is the Form IV of نَزَلَ?', correct_ar: 'أَنْزَلَ (he sent down)', correct_en: 'أَنْزَلَ (he sent down)', options_ar: ['أَنْزَلَ (he sent down)', 'يَنْزِلُ (he descends)', 'اِنْزِلْ (descend!)'] },
                    { emoji: '🪑', question_ar: 'جَلَسَ (he sat) → Form IV:', question_en: 'What is the Form IV of جَلَسَ?', correct_ar: 'أَجْلَسَ (he seated someone)', correct_en: 'أَجْلَسَ (he seated someone)', options_ar: ['أَجْلَسَ (he seated someone)', 'يَجْلِسُ (he sits)', 'اِجْلِسْ (sit!)'] },
                ],
            },
        },
        {
            id: '2-7-7',
            type: 'q_and_a',
            titleEn: 'Q&A Practice',
            titleAr: 'أَسْئِلَة وَأَجْوِبَة',
            payload: {
                questions: [
                    { emoji: '🧑‍🤝‍🧑', question_ar: 'هَلْ تُكْرِمُ ضَيْفَكَ؟', question_en: 'Do you honor your guest?', correct_ar: 'نَعَمْ .. أُكْرِمُ ضَيْفِي', correct_en: 'Yes, I honor my guest.', options_ar: ['نَعَمْ .. أُكْرِمُ ضَيْفِي', 'لَا .. لَا أُكْرِمُهُ', 'أَحْيَانًا أُكْرِمُهُ'], questionType: 'hal' },
                    { emoji: '✅', question_ar: 'هَلْ تُطِيعُ اللهَ وَرَسُولَهُ؟', question_en: 'Do you obey Allah and His Messenger?', correct_ar: 'نَعَمْ .. أُطِيعُ اللهَ وَرَسُولَهُ', correct_en: 'Yes, I obey Allah and His Messenger.', options_ar: ['نَعَمْ .. أُطِيعُ اللهَ وَرَسُولَهُ', 'لَا .. لَا أُطِيعُهُمَا', 'أُطِيعُ اللهَ فَقَطْ'], questionType: 'hal' },
                    { emoji: '💬', question_ar: 'مَنْ أَجَابَ عَلَى سُؤَالِ الْمُعَلِّمِ؟', question_en: "Who answered the teacher\'s question?", correct_ar: 'أَجَابَ التِّلْمِيذُ', correct_en: 'The student answered.', options_ar: ['أَجَابَ التِّلْمِيذُ', 'أَجَابَ الْمُعَلِّمُ', 'لَمْ يُجِبْ أَحَدٌ'], questionType: 'general' },
                ],
            },
        },
    ],
};

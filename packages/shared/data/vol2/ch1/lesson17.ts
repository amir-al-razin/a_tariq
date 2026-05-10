import type { LessonData } from '../../curriculum';

export const lesson17: LessonData = {
    darsNumber: 17,
    chunks: [
        {
            id: '2-17-1',
            type: 'vocabulary',
            titleEn: 'Form X Masdars (بَابُ الإِسْتِفْعَال)',
            titleAr: 'مَصَادِر بَابِ الإِسْتِفْعَال',
            payload: {
                words: [
                    { id: 1, ar: 'الإِسْتِغْفَارُ', romanized: 'al-istighfār', en: 'Seeking forgiveness', emoji: '🤲' },
                    { id: 2, ar: 'الإِسْتِطْعَامُ', romanized: "al-istiṭ\'ām", en: 'Asking for food', emoji: '🍽️' },
                    { id: 3, ar: 'مِأَةُ مَرَّةٍ', romanized: "mi\'atu marratin", en: 'One hundred times', emoji: '💯' },
                    { id: 4, ar: 'صَعْبٌ', romanized: "ṣa\'b", en: 'Difficult', emoji: '😓' },
                    { id: 5, ar: 'سَهْلٌ', romanized: 'sahl', en: 'Easy', emoji: '😊' },
                    { id: 6, ar: 'صَابُونَةٌ', romanized: 'ṣābūnah', en: 'A piece of soap', emoji: '🧼' },
                    { id: 7, ar: 'صَاحِبُ الْبَيْتِ', romanized: 'ṣāḥibu l-bayt', en: 'Owner (m) of the house', emoji: '🏠' },
                    { id: 8, ar: 'صَاحِبَةُ الْبَيْتِ', romanized: 'ṣāḥibatu l-bayt', en: 'Owner (f) of the house', emoji: '🏠' },
                    { id: 9, ar: 'الزِّيَارَةُ', romanized: 'az-ziyārah', en: 'Visiting / meeting', emoji: '🤝' },
                    { id: 10, ar: 'الإِسْتِرَاحَةُ', romanized: 'al-istirāḥah', en: 'Resting', emoji: '😌' },
                    { id: 11, ar: 'الإِسْتِعَانَةُ', romanized: "al-isti\'ānah", en: 'Asking for help', emoji: '🙏' },
                    { id: 12, ar: 'الإِسْتِطَاعَةُ', romanized: "al-istiṭā\'ah", en: 'Being able to / capability', emoji: '💪' },
                    { id: 13, ar: 'الإِسْتِشَارَةُ', romanized: 'al-istishārah', en: 'Consultation / asking advice', emoji: '💬' },
                    { id: 14, ar: 'مَشْغُولٌ', romanized: 'mashghūl', en: 'Busy', emoji: '⏳' },
                    { id: 15, ar: 'كَسُولٌ', romanized: 'kasūl', en: 'Lazy (extreme)', emoji: '😴' },
                ],
            },
        },
        {
            id: '2-17-2',
            type: 'masdar_factory',
            titleEn: 'Form X — Sound Verb: اِسْتَعْمَلَ (to use)',
            titleAr: 'بَابُ الإِسْتِفْعَال — الصَّحِيح: اِسْتَعْمَلَ',
            payload: {
                baabLabel: 'بَابُ الإِسْتِفْعَالِ — Sound (Form X)',
                instruction: 'Form X adds اِسْتَـ prefix. Present tense uses يَسْتَفْعِلُ pattern.',
                masdarRows: [
                    { masdar: 'الإِسْتِعْمَالُ', masdarEn: 'to use', past: 'اِسْتَعْمَلَ', present: 'يَسْتَعْمِلُ', imperative: 'اِسْتَعْمِلْ', prohibitive: 'لَا تَسْتَعْمِلْ' },
                    { masdar: 'الإِسْتِغْفَارُ', masdarEn: 'to seek forgiveness', past: 'اِسْتَغْفَرَ', present: 'يَسْتَغْفِرُ', imperative: 'اِسْتَغْفِرْ', prohibitive: 'لَا تَسْتَغْفِرْ' },
                    { masdar: 'الإِسْتِطْعَامُ', masdarEn: 'to ask for food', past: 'اِسْتَطْعَمَ', present: 'يَسْتَطْعِمُ', imperative: 'اِسْتَطْعِمْ', prohibitive: 'لَا تَسْتَطْعِمْ' },
                    { masdar: 'الإِسْتِقْبَالُ', masdarEn: 'to receive / face', past: 'اِسْتَقْبَلَ', present: 'يَسْتَقْبِلُ', imperative: 'اِسْتَقْبِلْ', prohibitive: 'لَا تَسْتَقْبِلْ' },
                ],
            },
        },
        {
            id: '2-17-3',
            type: 'masdar_factory',
            titleEn: 'Form X — Hollow Verb: اِسْتَرَاحَ (to rest)',
            titleAr: 'بَابُ الإِسْتِفْعَال — الأَجْوَف: اِسْتَرَاحَ',
            payload: {
                baabLabel: 'بَابُ الإِسْتِفْعَالِ — Hollow (Form X)',
                instruction: 'Hollow Form X verbs — the middle letter changes in conjugation',
                masdarRows: [
                    { masdar: 'الإِسْتِرَاحَةُ', masdarEn: 'to rest', past: 'اِسْتَرَاحَ', present: 'يَسْتَرِيحُ', imperative: 'اِسْتَرِحْ', prohibitive: 'لَا تَسْتَرِحْ' },
                    { masdar: 'الإِسْتِعَانَةُ', masdarEn: 'to seek help', past: 'اِسْتَعَانَ', present: 'يَسْتَعِينُ', imperative: 'اِسْتَعِنْ', prohibitive: 'لَا تَسْتَعِنْ' },
                    { masdar: 'الإِسْتِطَاعَةُ', masdarEn: 'to be able to', past: 'اِسْتَطَاعَ', present: 'يَسْتَطِيعُ', imperative: 'اِسْتَطِعْ', prohibitive: 'لَا تَسْتَطِعْ' },
                    { masdar: 'الإِسْتِشَارَةُ', masdarEn: 'to consult', past: 'اِسْتَشَارَ', present: 'يَسْتَشِيرُ', imperative: 'اِسْتَشِرْ', prohibitive: 'لَا تَسْتَشِرْ' },
                ],
            },
        },
        {
            id: '2-17-4',
            type: 'paragraph',
            titleEn: 'Reading — Sound Form X Verbs',
            titleAr: 'قِرَاءَة — الإِسْتِفْعَال الصَّحِيح',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'فَاطِمَةُ صَاحِبَةُ هَذَا الْبَيْتِ.',
                            'قَالَتْ فَاطِمَةُ: قَامَ فَقِيرٌ جَائِعٌ عَلَى بَابِ الْبَيْتِ وَاسْتَطْعَمَنِي، فَأَحْضَرْتُ لَهُ طَعَامًا وَأَطْعَمْتُهُ.',
                            'اِسْتَغْفِرْ رَبَّكَ.',
                            'أَسْتَغْفِرُ اللهَ رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ.',
                        ],
                        translationEn: 'Fatima is the owner of this house. Fatima said: A hungry poor man stood at the door of the house and asked me for food, so I brought him food and fed him. Seek forgiveness from your Lord. I seek forgiveness from Allah, my Lord, for every sin, and I turn to Him in repentance.',
                    },
                    {
                        lines: [
                            'قَالَ رَاشِدٌ: لَنْ أَسْتَعْمِلَ هَذَا الْمِنْدِيلَ لِأَنَّهُ صَارَ وَسِخًا.',
                            'قَالَ الْمُعَلِّمُ لِتِلْمِيذِهِ: اِسْتَعْمِلْ فِي كَلَامِكَ كَلِمَةً سَهْلَةً، وَلَا تَسْتَعْمِلْ كَلِمَةً صَعْبَةً.',
                            'يَسْتَقْبِلُ الْمُسْلِمُ الْقِبْلَةَ فِي صَلَاتِهِ.',
                            'يَزُورُنَا الْيَوْمَ ضَيْفٌ عَرَبِيٌّ، أَنَا أَسْتَقْبِلُهُ عَلَى بَابِ الْمَدْرَسَةِ، وَأَتَكَلَّمُ مَعَهُ بِالْعَرَبِيَّةِ.',
                            'كَانَ رَسُولُنَا ﷺ يَسْتَغْفِرُ رَبَّهُ فِي الْيَوْمِ مِأَةَ مَرَّةٍ.',
                        ],
                        translationEn: 'Rashid said: I will never use this handkerchief because it has become dirty. The teacher said to his student: Use an easy word in your speech, and do not use a difficult word. The Muslim faces the Qiblah in his prayer. An Arab guest is visiting us today. I will receive him at the door of the madrasa and speak with him in Arabic. Our Messenger ﷺ used to seek forgiveness from his Lord a hundred times a day.',
                    },
                ],
            },
        },
        {
            id: '2-17-5',
            type: 'paragraph',
            titleEn: 'Reading — Hollow Form X Verbs',
            titleAr: 'قِرَاءَة — الإِسْتِفْعَال الأَجْوَف',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'قَالَ الرَّجُلُ الصَّالِحُ فِي دُعَائِهِ: اللَّهُمَّ إِنِّي عَبْدُكَ الضَّعِيفُ، أَسْتَعِينُكَ عَلَى طَاعَتِكَ، فَأَعِنِّي عَلَى طَاعَتِكَ.',
                            'الصَّدِيقُ الصَّالِحُ يُعِينُكَ عَلَى طَاعَةِ اللهِ.',
                        ],
                        translationEn: 'The righteous man said in his supplication: O Allah, I am Your weak servant. I seek Your help in obeying You, so help me in obeying You. A righteous friend helps you in obeying Allah.',
                    },
                    {
                        lines: [
                            'عَمِلَ أَبُو رَاشِدٍ فِي أَرْضِهِ تَحْتَ الشَّمْسِ، فَتَعِبَ، فَذَهَبَ إِلَى شَجَرَةٍ قَرِيبَةٍ وَاسْتَرَاحَ تَحْتَ ظِلِّهَا قَلِيلًا.',
                            'قَالَ الْعَامِلُ الْكَسُولُ: أُرِيدُ أَنْ أَسْتَرِيحَ الْآنَ فِي غُرْفَتِي، لِأَنِّي تَعِبْتُ مِنَ الْعَمَلِ.',
                            'وَقَالَ الْعَامِلُ النَّشِيطُ: لَنْ أَقْعُدَ الْآنَ وَلَنْ أَسْتَرِيحَ، لِأَنَّ الْوَقْتَ قَلِيلٌ وَالْعَمَلَ كَثِيرٌ.',
                        ],
                        translationEn: 'Abu Rashid worked in his land under the sun and became tired, so he went to a nearby tree and rested under its shade for a little while. The lazy worker said: I want to rest now in my room, because I am tired from work. And the energetic worker said: I will not sit down now and I will not rest, because time is short and work is much.',
                    },
                    {
                        lines: [
                            'قَالَ خَالِدٌ لِمَاجِدٍ: لَا أَسْتَطِيعُ أَنْ أَذْهَبَ مَعَكَ إِلَى السُّوقِ، لِأَنِّي مَشْغُولٌ جِدًّا.',
                            'لَا يَسْتَطِيعُ الطَّالِبُ أَنْ يَتَكَلَّمَ بِاللُّغَةِ الْعَرَبِيَّةِ، لِأَنَّهُ مَا تَعَلَّمَهَا جَيِّدًا.',
                            'يَا أَخَا مَاجِدٍ الذَّكِيَّ! اِسْتَشِرْ مَاجِدًا فِي هَذَا الْأَمْرِ.',
                            'يَا مَاجِدُ الذَّكِيُّ! أُرِيدُ أَنْ أَسْتَشِيرَكَ فِي هَذَا الْأَمْرِ.',
                        ],
                        translationEn: 'Khalid said to Majid: I am not able to go with you to the market, because I am very busy. The student is not able to speak in the Arabic language because he did not learn it well. O smart brother of Majid! Consult Majid in this matter. O smart Majid! I want to consult you in this matter.',
                    },
                ],
            },
        },
        {
            id: '2-17-6',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                questions: [
                    { emoji: '🍽️', question_ar: 'لِمَ قَامَ الْفَقِيرُ الْجَائِعُ عَلَى بَابِ الْبَيْتِ؟', question_en: 'Why did the hungry poor man stand at the door of the house?', correct_ar: 'قَامَ لِيَسْتَطْعِمَ صَاحِبَةَ الْبَيْتِ', correct_en: 'He stood to ask the lady of the house for food.', options_ar: ['قَامَ لِيَسْتَطْعِمَ صَاحِبَةَ الْبَيْتِ', 'قَامَ لِيَسْتَرِيحَ', 'قَامَ لِيَسْأَلَ عَنِ الطَّرِيقِ'], questionType: 'general' },
                    { emoji: '🤲', question_ar: 'هَلْ تَسْتَغْفِرُ اللهَ وَتَتُوبُ إِلَيْهِ كُلَّ يَوْمٍ؟', question_en: 'Do you seek forgiveness from Allah and repent to Him every day?', correct_ar: 'نَعَمْ .. أَسْتَغْفِرُ اللهَ وَأَتُوبُ إِلَيْهِ', correct_en: 'Yes, I seek forgiveness from Allah and repent to Him.', options_ar: ['نَعَمْ .. أَسْتَغْفِرُ اللهَ وَأَتُوبُ إِلَيْهِ', 'لَا .. لَا أَسْتَغْفِرُ', 'أَحْيَانًا'], questionType: 'hal' },
                    { emoji: '🕌', question_ar: 'مَاذَا يَسْتَقْبِلُ الْمُسْلِمُ فِي صَلَاتِهِ؟', question_en: 'What does the Muslim face in his prayer?', correct_ar: 'يَسْتَقْبِلُ الْقِبْلَةَ', correct_en: 'He faces the Qiblah.', options_ar: ['يَسْتَقْبِلُ الْقِبْلَةَ', 'يَسْتَقْبِلُ الشَّمْسَ', 'يَسْتَقْبِلُ الشَّمَالَ'], questionType: 'general' },
                    { emoji: '💪', question_ar: 'لِمَ لَا يَسْتَطِيعُ الطَّالِبُ أَنْ يَتَكَلَّمَ بِالْعَرَبِيَّةِ؟', question_en: 'Why is the student not able to speak in Arabic?', correct_ar: 'لِأَنَّهُ مَا تَعَلَّمَهَا جَيِّدًا', correct_en: 'Because he did not learn it well.', options_ar: ['لِأَنَّهُ مَا تَعَلَّمَهَا جَيِّدًا', 'لِأَنَّهُ لَا يُرِيدُ', 'لِأَنَّهُ مَشْغُولٌ'], questionType: 'general' },
                ],
            },
        },
    ],
};

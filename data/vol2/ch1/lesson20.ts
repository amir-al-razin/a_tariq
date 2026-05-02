import type { LessonData } from '../../curriculum';

export const lesson20: LessonData = {
    darsNumber: 20,
    chunks: [
        {
            id: '2-20-1',
            type: 'vocabulary',
            titleEn: 'Masdar Review — All Forms',
            titleAr: 'مُرَاجَعَة الْمَصَادِر — جَمِيع الأَبْوَاب',
            payload: {
                words: [
                    { id: 1, ar: 'الْفَهْمُ', romanized: 'al-fahm', en: 'Understanding', emoji: '💡' },
                    { id: 2, ar: 'السُّؤَالُ', romanized: "as-su\'āl", en: 'Questioning / asking', emoji: '❓' },
                    { id: 3, ar: 'الصَّوْمُ', romanized: 'aṣ-ṣawm', en: 'Fasting', emoji: '🌙' },
                    { id: 4, ar: 'الْحِفْظُ', romanized: 'al-ḥifẓ', en: 'Memorizing', emoji: '🧠' },
                    { id: 5, ar: 'الإِرْسَالُ', romanized: 'al-irsāl', en: 'Sending', emoji: '📨' },
                    { id: 6, ar: 'الإِخْرَاجُ', romanized: 'al-ikhrāj', en: 'Bringing out', emoji: '📤' },
                    { id: 7, ar: 'التَّعَلُّمُ', romanized: "at-ta\'allum", en: 'Learning', emoji: '📖' },
                    { id: 8, ar: 'التَّصْدِيقُ', romanized: 'at-taṣdīq', en: 'Believing', emoji: '✅' },
                    { id: 9, ar: 'السِّبَاحَةُ', romanized: 'as-sibāḥah', en: 'Swimming', emoji: '🏊' },
                    { id: 10, ar: 'الاِغْتِسَالُ', romanized: 'al-ightisāl', en: 'Bathing', emoji: '🚿' },
                    { id: 11, ar: 'الاِقْتِرَابُ', romanized: 'al-iqtirāb', en: 'Approaching', emoji: '👣' },
                    { id: 12, ar: 'الاِبْتِسَامُ', romanized: 'al-ibtisām', en: 'Smiling', emoji: '😊' },
                    { id: 13, ar: 'الاِسْتِعْمَالُ', romanized: "al-isti\'māl", en: 'Using', emoji: '🔧' },
                    { id: 14, ar: 'الاِسْتِغْفَارُ', romanized: 'al-istighfār', en: 'Seeking forgiveness', emoji: '🤲' },
                    { id: 15, ar: 'الاِسْتِرَاحَةُ', romanized: 'al-istirāḥah', en: 'Resting', emoji: '😌' },
                    { id: 16, ar: 'الاِسْتِشَارَةُ', romanized: 'al-istishārah', en: 'Consulting', emoji: '💬' },
                    { id: 17, ar: 'الْمُسَاعَدَةُ', romanized: "al-musā\'adah", en: 'Helping', emoji: '🤝' },
                    { id: 18, ar: 'الْقِتَالُ', romanized: 'al-qitāl', en: 'Fighting', emoji: '⚔️' },
                    { id: 19, ar: 'التَّعْلِيمُ', romanized: "at-ta\'līm", en: 'Teaching', emoji: '📚' },
                    { id: 20, ar: 'التَّنْظِيفُ', romanized: 'at-tanẓīf', en: 'Cleaning', emoji: '🧹' },
                ],
            },
        },
        {
            id: '2-20-2',
            type: 'vocabulary',
            titleEn: 'New Verbs & Nouns',
            titleAr: 'أَفْعَال وَأَسْمَاء جَدِيدَة',
            payload: {
                words: [
                    { id: 1, ar: 'النَّفْعُ', romanized: "an-naf'", en: 'To benefit / be useful', emoji: '💎' },
                    { id: 2, ar: 'الرِّزْقُ', romanized: 'ar-rizq', en: 'Provision / sustenance', emoji: '🌾' },
                    { id: 3, ar: 'الشِّبَعُ', romanized: "ash-shiba'", en: 'Being satiated / full', emoji: '🍽️' },
                    { id: 4, ar: 'الْأَمْرُ', romanized: 'al-amr', en: 'Commanding / ordering', emoji: '📢' },
                    { id: 5, ar: 'الْخِدْمَةُ', romanized: 'al-khidmah', en: 'Serving', emoji: '🙏' },
                    { id: 6, ar: 'الشُّكْرُ', romanized: 'ash-shukr', en: 'Thanking', emoji: '🙏' },
                    { id: 7, ar: 'الإِجْتِهَادُ', romanized: 'al-ijtihād', en: 'Striving / working hard', emoji: '💪' },
                    { id: 8, ar: 'الإِشْرَاكُ', romanized: 'al-ishrāk', en: 'Associating partners (with Allah)', emoji: '⚠️' },
                ],
            },
        },
        {
            id: '2-20-3',
            type: 'assessment',
            titleEn: 'Exercise — Fill in the لِـ + Verb',
            titleAr: 'تَمْرِين — أَكْمِلْ بِـ لِـ + الْفِعْل',
            payload: {
                instruction: 'Choose the correct لِـ + subjunctive verb to complete each sentence.',
                questions: [
                    { emoji: '😴', question_ar: 'يَا رَاشِدُ! اِذْهَبْ إِلَى فِرَاشِكَ ___', question_en: 'O Rashid! Go to your bed ___ (in order to sleep)', correct_ar: 'لِتَنَامَ', correct_en: 'in order to sleep', options_ar: ['لِتَنَامَ', 'لِتَنَامُ', 'لِنَامَ'] },
                    { emoji: '🚿', question_ar: 'نَزَلْتُ فِي الْحَوْضِ ___', question_en: 'I descended into the pool ___ (in order to bathe)', correct_ar: 'لِأَغْتَسِلَ', correct_en: 'in order to bathe', options_ar: ['لِأَغْتَسِلَ', 'لِأَغْتَسِلُ', 'لِاغْتَسَلَ'] },
                    { emoji: '📖', question_ar: 'أَدْرُسُ فِي مَدْرَسَةِ الْمَدِينَةِ ___', question_en: "I study in the city\'s school ___ (in order to learn Arabic)", correct_ar: 'لِأَتَعَلَّمَ اللُّغَةَ الْعَرَبِيَّةَ', correct_en: 'in order to learn the Arabic language', options_ar: ['لِأَتَعَلَّمَ اللُّغَةَ الْعَرَبِيَّةَ', 'لِأَتَعَلَّمُ الْعَرَبِيَّةَ', 'لِتَعَلَّمَ'] },
                    { emoji: '🤝', question_ar: 'دَخَلَتْ بِنْتُ فَاطِمَةَ الْمَطْبَخَ ___', question_en: "Fatima's daughter entered the kitchen ___ (in order to help her mother)", correct_ar: 'لِتُسَاعِدَ أُمَّهَا', correct_en: 'in order to help her mother', options_ar: ['لِتُسَاعِدَ أُمَّهَا', 'لِتُسَاعِدُ أُمَّهَا', 'لِسَاعَدَتْ'] },
                ],
            },
        },
        {
            id: '2-20-4',
            type: 'paragraph',
            titleEn: 'Reading — Purpose and Creation',
            titleAr: 'قِرَاءَة — الْغَرَض وَالْخَلْق',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'مَا خَلَقَ اللهُ الْإِنْسَانَ لِيُشْرِكَ بِهِ شَيْئًا بَلْ خَلَقَهُ اللهُ لِيَعْبُدَهُ وَيَسْجُدَ لَهُ.',
                            'خَلَقَ اللهُ كُلَّ شَيْءٍ لِيَخْدِمَ الْإِنْسَانَ وَخَلَقَ الْإِنْسَانَ لِيَعْبُدَهُ، فَكُلُّ شَيْءٍ لِلْإِنْسَانِ وَهُوَ لِلهِ.',
                            'أَرْسَلَ اللهُ رَسُولَهُ لِيُخْرِجَ النَّاسَ مِنْ ظَلَامِ الشِّرْكِ إِلَى نُورِ التَّوْحِيدِ.',
                        ],
                        translationEn: 'Allah did not create man to associate anything with Him, rather Allah created him to worship Him and prostrate to Him. Allah created everything to serve man, and He created man to worship Him, so everything is for man and he is for Allah. Allah sent His Messenger to bring people out of the darkness of polytheism into the light of monotheism.',
                    },
                    {
                        lines: [
                            'أَيُّهَا التَّاجِرُ الْغَنِيُّ! قَدْ رَزَقَكَ اللهُ الْمَالَ لِتُنْفِقَهُ فِي سَبِيلِ اللهِ وَلِتَنْفَعَ بِهِ النَّاسَ.',
                            'كَانَ أَنَسٌ يَخْدِمُ رَسُولَ اللهِ ﷺ وَيَتَعَلَّمُ مِنْهُ الْعِلْمَ.',
                            'أَمَرَ الْإِسْلَامُ أَنْ يُكْرِمَ الْمُسْلِمُ ضَيْفَهُ.',
                        ],
                        translationEn: 'O wealthy merchant! Allah has granted you wealth so that you may spend it in the path of Allah and benefit people with it. Anas used to serve the Messenger of Allah ﷺ and learn knowledge from him. Islam has commanded that a Muslim should honor his guest.',
                    },
                    {
                        lines: [
                            'يَقُولُ اللهُ: يَا عَبْدِي! قَدْ أَنْزَلْتُ الْمَطَرَ مِنَ السَّمَاءِ لِأُخْرِجَ بِهِ لَكَ رِزْقَكَ مِنَ الْأَرْضِ، فَكَيْفَ تُشْرِكُ بِي غَيْرِي؟',
                            'أَمَرَ اللهُ الْإِنْسَانَ أَنْ يَعْبُدَهُ وَلَا يَعْبُدَ غَيْرَهُ.',
                            'أَيُّهَا الْإِنْسَانُ! لَا تُشْرِكْ بِاللهِ، إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ.',
                        ],
                        translationEn: 'Allah says: O My servant! I have sent down rain from the sky to bring forth your provision from the earth, so how can you associate others with Me? Allah has commanded man to worship Him and not worship anyone else. O man! Do not associate partners with Allah; indeed, associating partners is a great injustice.',
                    },
                    {
                        lines: [
                            'أَيُّهَا الطَّالِبُ الْعَزِيزُ! أُعَلِّمُكَ اللُّغَةَ الْعَرَبِيَّةَ لِتَفْهَمَ الْقُرْآنَ.',
                            'أَبَا مَاجِدٍ! أَرْسِلْ وَلَدَكَ الذَّكِيَّ إِلَى الْمَدْرَسَةِ لِيَتَعَلَّمَ اللُّغَةَ الْعَرَبِيَّةَ.',
                            'يَا عَبْدَ اللهِ! كُلْ وَاشْبَعْ وَاشْكُرْ رَبَّكَ.',
                        ],
                        translationEn: 'O dear student! I teach you the Arabic language so that you may understand the Quran. O Abu Majid! Send your smart boy to the school so that he may learn the Arabic language. O Abdullah! Eat, be satiated, and thank your Lord.',
                    },
                ],
            },
        },
        {
            id: '2-20-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A — لِمَاذَا Questions',
            titleAr: 'أَسْئِلَة الفَهْم',
            payload: {
                questions: [
                    { emoji: '🌿', question_ar: 'لِمَ جَلَسَتْ فَاطِمَةُ تَحْتَ الْمِرْوَحَةِ؟', question_en: 'Why did Fatima sit under the fan?', correct_ar: 'جَلَسَتْ لِتَسْتَرِيحَ مِنْ تَعَبِ الْعَمَلِ', correct_en: 'She sat to rest from the fatigue of work.', options_ar: ['جَلَسَتْ لِتَسْتَرِيحَ مِنْ تَعَبِ الْعَمَلِ', 'جَلَسَتْ لِتَقْرَأَ', 'جَلَسَتْ لِتَأْكُلَ'], questionType: 'general' },
                    { emoji: '📖', question_ar: 'لِمَ تَدْرُسُ فِي مَدْرَسَةِ الْمَدِينَةِ؟', question_en: "Why do you study in the city\'s school?", correct_ar: 'أَدْرُسُ لِأَتَعَلَّمَ اللُّغَةَ الْعَرَبِيَّةَ', correct_en: 'I study to learn the Arabic language.', options_ar: ['أَدْرُسُ لِأَتَعَلَّمَ اللُّغَةَ الْعَرَبِيَّةَ', 'أَدْرُسُ لِأَلْعَبَ', 'أَدْرُسُ لِأَنَامَ'], questionType: 'general' },
                    { emoji: '🕌', question_ar: 'مَنْ أَرْسَلَهُ اللهُ لِيُخْرِجَ النَّاسَ مِنَ الظَّلَامِ إِلَى النُّورِ؟', question_en: 'Who did Allah send to bring people out of darkness into light?', correct_ar: 'أَرْسَلَ اللهُ رَسُولَهُ مُحَمَّدًا ﷺ', correct_en: 'Allah sent His Messenger Muhammad ﷺ.', options_ar: ['أَرْسَلَ اللهُ رَسُولَهُ مُحَمَّدًا ﷺ', 'أَرْسَلَ اللهُ مَلَكًا', 'أَرْسَلَ اللهُ كِتَابًا'], questionType: 'general' },
                    { emoji: '🌧️', question_ar: 'لِمَاذَا يُنْزِلُ اللهُ الْمَطَرَ مِنَ السَّمَاءِ؟', question_en: 'Why does Allah send down rain from the sky?', correct_ar: 'لِيُخْرِجَ بِهِ رِزْقَنَا مِنَ الْأَرْضِ', correct_en: 'To bring forth our provision from the earth with it.', options_ar: ['لِيُخْرِجَ بِهِ رِزْقَنَا مِنَ الْأَرْضِ', 'لِيُبَرِّدَ الْجَوَّ', 'لِيُنَظِّفَ الْأَرْضَ'], questionType: 'general' },
                    { emoji: '🤝', question_ar: 'لِمَ دَخَلَتْ بِنْتُ فَاطِمَةَ الْمَطْبَخَ؟', question_en: "Why did Fatima's daughter enter the kitchen?", correct_ar: 'دَخَلَتْ لِتُسَاعِدَ أُمَّهَا', correct_en: 'She entered to help her mother.', options_ar: ['دَخَلَتْ لِتُسَاعِدَ أُمَّهَا', 'دَخَلَتْ لِتَأْكُلَ', 'دَخَلَتْ لِتَنَامَ'], questionType: 'general' },
                ],
            },
        },
        {
            id: '2-20-6',
            type: 'grammar_rule',
            titleEn: 'أَنْ + Verb vs بِـ + Masdar',
            titleAr: 'أَنْ + الْفِعْل مُقَابِل بِـ + الْمَصْدَر',
            payload: {
                rules: [
                    {
                        label: 'أَمَرَ أَنْ يَفْعَلَ ↔ أَمَرَ بِفِعْلِ',
                        arabic: 'أَمَرَ اللهُ الْإِنْسَانَ أَنْ يَعْبُدَهُ ↔ أَمَرَ اللهُ الْإِنْسَانَ بِعِبَادَةِ اللهِ',
                        romanized: "amara llāhu l-insāna an ya\'budahu ↔ amara llāhu l-insāna bi-\'ibādati llāh",
                        meaning: "أَنْ + verb and بِـ + masdar are equivalent constructions. Both mean 'commanded to do'.",
                        examples: [
                            { ar: 'أَمَرَ اللهُ الْإِنْسَانَ أَنْ يَعْبُدَهُ', en: 'Allah commanded man to worship Him (أَنْ + verb)' },
                            { ar: 'أَمَرَ اللهُ الْإِنْسَانَ بِعِبَادَةِ اللهِ', en: 'Allah commanded man to worship Allah (بِـ + masdar)' },
                            { ar: 'أَمَرَنِي رَاشِدٌ أَنْ أَخْرُجَ مِنَ الْغُرْفَةِ', en: 'Rashid commanded me to exit the room (أَنْ + verb)' },
                            { ar: 'أَمَرَنِي رَاشِدٌ بِالْخُرُوجِ مِنَ الْغُرْفَةِ', en: 'Rashid commanded me to exit the room (بِـ + masdar)' },
                        ],
                    },
                ],
            },
        },
    ],
};

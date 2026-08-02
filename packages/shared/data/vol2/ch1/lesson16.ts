import type { LessonData } from '../../curriculum';

export const lesson16: LessonData = {
    darsNumber: 16,
    chunks: [
        {
            id: '2-16-1',
            type: 'vocabulary',
            titleEn: 'Form VIII Masdars (بَابُ الإِفْتِعَال)',
            titleAr: 'مَصَادِر بَابِ الإِفْتِعَال',
            payload: {
                words: [
                    { id: 1, ar: 'الإِبْتِسَامُ', romanized: 'al-ibtisām', en: 'Smiling', emoji: '😊' },
                    { id: 2, ar: 'الاِغْتِسَالُ', romanized: 'al-ightisāl', en: 'Bathing / washing oneself', emoji: '🚿' },
                    { id: 3, ar: 'الاِقْتِرَابُ', romanized: 'al-iqtirāb', en: 'Approaching / getting closer', emoji: '👣' },
                    { id: 4, ar: 'الاِبْتِعَادُ', romanized: "al-ibtī\'ād", en: 'Distancing / moving away', emoji: '↔️' },
                    { id: 5, ar: 'حِضْنٌ', romanized: 'ḥiḍn', en: 'Lap / embrace', emoji: '🤗' },
                    { id: 6, ar: 'شَاطِئٌ', romanized: "shāṭi'", en: 'Shore / beach', emoji: '🏖️' },
                    { id: 7, ar: 'الْغَرَقُ', romanized: 'al-gharaq', en: 'Drowning', emoji: '🌊' },
                    { id: 8, ar: 'سَاخِنٌ', romanized: 'sākhin', en: 'Hot', emoji: '🔥' },
                    { id: 9, ar: 'سَاعَةٌ', romanized: "sā\'ah", en: 'Hour / a while', emoji: '⏰' },
                    { id: 10, ar: 'السَّاعَةُ', romanized: "as-sā\'ah", en: 'The Hour / Day of Resurrection', emoji: '⚖️' },
                ],
            },
        },
        {
            id: '2-16-2',
            type: 'masdar_factory',
            titleEn: 'Form VIII Verb: اِبْتَسَمَ (to smile)',
            titleAr: 'بَابُ الإِفْتِعَال - اِبْتَسَمَ يَبْتَسِمُ',
            payload: {
                baabLabel: 'بَابُ الإِفْتِعَالِ (Form VIII)',
                instruction: 'Form VIII inserts تَ after the first root letter. Present tense uses يَفْتَعِلُ pattern.',
                masdarRows: [
                    { masdar: 'الإِبْتِسَامُ', masdarEn: 'to smile', past: 'اِبْتَسَمَ', present: 'يَبْتَسِمُ', imperative: 'اِبْتَسِمْ', prohibitive: 'لَا تَبْتَسِمْ' },
                    { masdar: 'الاِغْتِسَالُ', masdarEn: 'to bathe', past: 'اِغْتَسَلَ', present: 'يَغْتَسِلُ', imperative: 'اِغْتَسِلْ', prohibitive: 'لَا تَغْتَسِلْ' },
                    { masdar: 'الاِقْتِرَابُ', masdarEn: 'to approach', past: 'اِقْتَرَبَ', present: 'يَقْتَرِبُ', imperative: 'اِقْتَرِبْ', prohibitive: 'لَا تَقْتَرِبْ' },
                    { masdar: 'الاِبْتِعَادُ', masdarEn: 'to distance oneself', past: 'اِبْتَعَدَ', present: 'يَبْتَعِدُ', imperative: 'اِبْتَعِدْ', prohibitive: 'لَا تَبْتَعِدْ' },
                ],
            },
        },
        {
            id: '2-16-3',
            type: 'paragraph',
            titleEn: 'Reading - Form VIII Verbs in Context',
            titleAr: 'قِرَاءَة - بَابُ الإِفْتِعَال فِي الْجُمَل',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'قَالَ اللهُ تَعَالَى فِي الْقُرْآنِ: اقْتَرَبَتِ السَّاعَةُ.',
                            'يَبْتَسِمُ الطِّفْلُ فِي حِضْنِ أُمِّهِ.',
                            'يَا وَلَدَ زَيْنَبَ! اِغْتَسِلْ كُلَّ يَوْمٍ وَاسْبَحْ فِي النَّهَرِ وَلَا تَبْتَعِدْ عَنِ الشَّاطِئِ.',
                            'اِبْتَعَدَ الزَّوْرَقُ عَنِ الشَّاطِئِ، فَغَرِقَ الزَّوْرَقُ مَعَ صَاحِبِهِ.',
                            'لَا تَقْتَرِبِي يَا فَاطِمَةُ! مِنَ النَّارِ.',
                            'اِقْتَرَبَ هَذَا الطِّفْلُ مِنَ النَّارِ فَاحْتَرَقَتْ يَدُهُ.',
                            'يَحْتَرِقُ قَلْبُ الْحَاسِدِ بِنَارِ الْحَسَدِ.',
                        ],
                        translationEn: 'Allah the Most High said in the Quran: "The Hour has approached." The child smiles in his mother\'s lap. O son of Zainab! Bathe every day, swim in the river, and do not move far from the shore. The boat moved away from the shore, so the boat sank with its owner. Do not get close to the fire, O Fatima! This child got close to the fire, so his hand burned. The heart of the envier burns with the fire of envy.',
                    },
                    {
                        lines: [
                            'أَرَادَ رَاشِدٌ أَنْ يَغْتَسِلَ فَنَزَلَ فِي مَاءِ الْحَوْضِ.',
                            'نَزَلَ رَاشِدٌ فِي مَاءِ الْحَوْضِ لِيَغْتَسِلَ.',
                            'يَا فَاطِمَةُ! أَتُرِيدِينَ أَنْ تَغْتَسِلِي الْآنَ؟',
                            'اُدْخُلِي الْحَمَّامَ لِتَغْتَسِلِي بِالْمَاءِ السَّاخِنِ.',
                            'لَنْ أَقْتَرِبَ مِنَ النَّارِ، لِأَنِّي أَخَافُ النَّارَ.',
                        ],
                        translationEn: 'Rashid wanted to bathe, so he descended into the water of the pool. Rashid descended into the water of the pool in order to bathe. O Fatima! Do you want to bathe now? Enter the bathroom to bathe with hot water. I will never get close to the fire, because I fear the fire.',
                    },
                    {
                        lines: [
                            'يَا فَاطِمَةُ! هَلْ كُنْتِ تَخِيطِينَ ثَوْبَكِ بِيَدِكِ؟',
                            'كُنْتُ أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ فِي مَدْرَسَةِ الْمَدِينَةِ.',
                            'كَانَتْ فَاطِمَةُ الصَّغِيرَةُ تَغْتَسِلُ فِي مَاءِ الْحَوْضِ وَتَسْبَحُ كُلَّ يَوْمٍ.',
                            'كُنْتِ يَا لَيْلَى تَبْتَسِمِينَ دَائِمًا، فَلِمَاذَا لَا تَبْتَسِمِينَ الْآنَ؟',
                        ],
                        translationEn: 'O Fatima! Were you sewing your clothes with your hand? I used to study the Arabic language in the city\'s madrasa. Little Fatima used to bathe in the water of the pool and swim every day. You, O Layla, always used to smile, so why are you not smiling now?',
                    },
                ],
            },
        },
        {
            id: '2-16-4',
            type: 'grammar_rule',
            titleEn: 'Review: كَانَ + adj and إِنَّ + verbal sentence',
            titleAr: 'مُرَاجَعَة: كَانَ وَإِنَّ',
            payload: {
                rules: [
                    {
                        label: 'كَانَ + adj vs إِنَّ + verbal sentence',
                        arabic: 'كَانَ مَاءُ الْحَوْضِ صَافِيًا / إِنَّ فِي كَلَامِ اللهِ نُورًا',
                        romanized: "kāna mā\'u l-ḥawḍi ṣāfiyan / inna fī kalāmi llāhi nūran",
                        meaning: 'Review of كَانَ (predicate takes fathatayn) and إِنَّ (subject takes fatha) in context',
                        examples: [
                            { ar: 'مَاءُ الْحَوْضِ صَافٍ → كَانَ مَاءُ الْحَوْضِ صَافِيًا', en: "The pool's water is clear → The pool's water was clear" },
                            { ar: 'السَّمَاءُ صَافِيَةٌ → كَانَتِ السَّمَاءُ صَافِيَةً', en: 'The sky is clear → The sky was clear' },
                            { ar: 'فِي كَلَامِ اللهِ نُورٌ → إِنَّ فِي كَلَامِ اللهِ نُورًا', en: 'In the words of Allah is light → Indeed, in the words of Allah is light' },
                            { ar: 'يَتَكَلَّمُ أَخُو رَاشِدٍ بِالْعَرَبِيَّةِ → إِنَّ أَخَا رَاشِدٍ يَتَكَلَّمُ بِالْعَرَبِيَّةِ', en: "Rashid's brother speaks Arabic → Indeed, Rashid's brother speaks Arabic" },
                        ],
                    },
                ],
            },
        },
    ],
};

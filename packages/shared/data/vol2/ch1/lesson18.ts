import type { LessonData } from '../../curriculum';

// Note: Pages 75 and 77 are missing from the source. Only page 76 (reading passages) is available.
// Verb tables, Q&A, and exercises for this lesson are not available.

export const lesson18: LessonData = {
    darsNumber: 18,
    chunks: [
        {
            id: '2-18-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary — Lesson 18',
            titleAr: 'الْمُفْرَدَات',
            payload: {
                words: [
                    { id: 1, ar: 'الْعَمَلُ', romanized: "al-\'amal", en: 'Work / to work', emoji: '💼' },
                    { id: 2, ar: 'التَّعَبُ', romanized: "at-ta\'ab", en: 'Tiredness / to be tired', emoji: '😓' },
                    { id: 3, ar: 'الْقُعُودُ', romanized: "al-qu\'ūd", en: 'Sitting / to sit', emoji: '🪑' },
                    { id: 4, ar: 'طَاعَةٌ', romanized: "ṭā\'ah", en: 'Obedience', emoji: '✅' },
                    { id: 5, ar: 'كَسُولٌ', romanized: 'kasūl', en: 'Lazy', emoji: '😴' },
                    { id: 6, ar: 'مَشْغُولٌ', romanized: 'mashghūl', en: 'Busy / Occupied', emoji: '⏳' },
                ],
            },
        },
        {
            id: '2-18-2',
            type: 'paragraph',
            titleEn: 'Reading — Form X Review + لَعَلَّ',
            titleAr: 'قِرَاءَة — مُرَاجَعَة الإِسْتِفْعَال وَلَعَلَّ',
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
                            'قَالَتْ صَاحِبَةُ الْبَيْتِ لِخَادِمَتِهَا: أَتُرِيدِينَ أَنْ تَسْتَرِيحِي الْآنَ، وَأَمَامَكِ عَمَلٌ كَثِيرٌ.',
                            'كَانَ أَمَامَكِ عَمَلٌ كَثِيرٌ.',
                            'لَعَلَّ أَمَامَكِ عَمَلًا كَثِيرًا.',
                            'جَلَسْتُ تَحْتَ الْمِرْوَحَةِ لِأَسْتَرِيحَ مِنْ تَعَبِ الْعَمَلِ.',
                        ],
                        translationEn: 'The lady of the house said to her maid: Do you want to rest now, while you have a lot of work ahead of you? You had a lot of work ahead of you. Perhaps you have a lot of work ahead of you. I sat under the fan to rest from the exhaustion of work.',
                    },
                    {
                        lines: [
                            'قَالَ خَالِدٌ لِمَاجِدٍ: لَا أَسْتَطِيعُ أَنْ أَذْهَبَ مَعَكَ إِلَى السُّوقِ، لِأَنِّي مَشْغُولٌ جِدًّا.',
                            'لَا يَسْتَطِيعُ هَذَا الطَّالِبُ أَنْ يَتَكَلَّمَ بِالْعَرَبِيَّةِ، لِأَنَّهُ مَا تَعَلَّمَهَا جَيِّدًا.',
                            'يَا أَخَا مَاجِدٍ اِسْتَرِحْ! اِسْتَرِيحِي يَا أُخْتَ مَاجِدٍ.',
                            'يَا مَاجِدُ الذَّكِيُّ! أُرِيدُ أَنْ أَسْتَشِيرَكَ فِي هَذَا الْأَمْرِ.',
                        ],
                        translationEn: 'Khalid said to Majid: I am not able to go with you to the market, because I am very busy. This student is not able to speak in Arabic, because he did not learn it well. O brother of Majid, rest! O sister of Majid, rest! O smart Majid! I want to consult you in this matter.',
                    },
                ],
            },
        },
        {
            id: '2-18-3',
            type: 'grammar_rule',
            titleEn: 'لَعَلَّ — Perhaps / Maybe',
            titleAr: 'لَعَلَّ — التَّرَجِّي',
            payload: {
                rules: [
                    {
                        label: 'لَعَلَّ + اسم مَنْصُوب',
                        arabic: 'لَعَلَّ أَمَامَكِ عَمَلًا كَثِيرًا',
                        romanized: "la'alla amāmaki 'amalan kathīran",
                        meaning: "لَعَلَّ = 'perhaps / maybe'. Like إِنَّ, it puts the following noun into the accusative (fatha/fathatayn).",
                        examples: [
                            { ar: 'لَعَلَّ أَمَامَكِ عَمَلًا كَثِيرًا', en: 'Perhaps you have a lot of work ahead of you' },
                            { ar: 'كَانَ أَمَامَكِ عَمَلٌ كَثِيرٌ', en: 'You had a lot of work ahead of you (كَانَ — past)' },
                            { ar: 'لَعَلَّ أَمَامَكِ عَمَلًا كَثِيرًا', en: 'Perhaps you have a lot of work ahead of you (لَعَلَّ — accusative)' },
                        ],
                    },
                ],
            },
        },
    ],
};

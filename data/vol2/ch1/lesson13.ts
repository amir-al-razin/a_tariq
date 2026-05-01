import type { LessonData } from '../../curriculum';

export const lesson13: LessonData = {
    darsNumber: 13,
    chunks: [
        {
            id: '2-13-1',
            type: 'grammar_rule',
            titleEn: 'كَانَ + مُضَارِع — Past Continuous / Habitual Past',
            titleAr: 'كَانَ + الْمُضَارِع — الْمَاضِي الْمُسْتَمِر',
            payload: {
                rules: [
                    {
                        label: "كَانَ + يَفْعَلُ = "used to do / was doing'',
                        arabic: 'كَانَ يَقْرَأُ',
                        romanized: "kāna yaqra\'u",
                        meaning: 'Combining كَانَ (past) with a present tense verb expresses habitual past or past continuous action.',
                        examples: [
                            { ar: 'كَانَ يَقْرَأُ', en: 'He used to read / He was reading' },
                            { ar: 'كَانَتْ تَقْرَأُ', en: 'She used to read / She was reading' },
                            { ar: 'كُنْتَ تَقْرَأُ', en: 'You (m) used to read' },
                            { ar: 'كُنْتِ تَقْرَئِينَ', en: 'You (f) used to read' },
                            { ar: 'كُنْتُ أَقْرَأُ', en: 'I used to read' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-13-2',
            type: 'grammar_rule',
            titleEn: 'كَانَ + مُضَارِع — More Examples',
            titleAr: 'أَمْثِلَة إِضَافِيَّة',
            payload: {
                rules: [
                    {
                        label: 'كَانَ يَفْعَلُ — verb list',
                        arabic: 'كَانَ يَلْعَبُ / كَانَ يَعْرِفُ / كَانَ يَكْتُبُ',
                        romanized: "kāna yal\'abu / ya\'rifu / yaktub',
                        meaning: 'This pattern works with any present tense verb to express past habitual or continuous action',
                        examples: [
                            { ar: 'كَانَ يَلْعَبُ', en: 'He used to play' },
                            { ar: 'كَانَ يَعْرِفُ', en: 'He used to know' },
                            { ar: 'كَانَ يَكْتُبُ', en: 'He used to write' },
                            { ar: 'كَانَ يُطْعِمُ', en: 'He used to feed' },
                            { ar: 'كَانَ يُرْسِلُ', en: 'He used to send' },
                            { ar: 'كَانَ يُكْرِمُ', en: 'He used to honor' },
                            { ar: 'كَانَ يُنْفِقُ', en: 'He used to spend' },
                            { ar: 'كَانَ يَخَافُ', en: 'He used to fear' },
                            { ar: 'كَانَ يَتُوبُ', en: 'He used to repent' },
                            { ar: 'كَانَ يَبِيعُ', en: 'He used to sell' },
                            { ar: 'كَانَ يَصِيدُ', en: 'He used to hunt' },
                            { ar: 'كَانَ يُطِيعُ', en: 'He used to obey' },
                            { ar: 'كَانَ يُجِيبُ', en: 'He used to answer' },
                            { ar: 'كَانَ يُرِيدُ', en: 'He used to want' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-13-3',
            type: 'grammar_rule',
            titleEn: 'Three Word-Order Variants',
            titleAr: 'ثَلَاثَة تَرَاتِيب لِلْجُمْلَة',
            payload: {
                rules: [
                    {
                        label: 'All three orderings are correct',
                        arabic: 'كَانَ يَكْتُبُ رَاشِدٌ / كَانَ رَاشِدٌ يَكْتُبُ / رَاشِدٌ كَانَ يَكْتُبُ',
                        romanized: 'kāna yaktub Rāshid / kāna Rāshidun yaktub / Rāshidun kāna yaktub',
                        meaning: "The subject can appear in three positions — all are grammatically correct and mean "Rashid used to write'',
                        examples: [
                            { ar: 'كَانَ يَكْتُبُ رَاشِدٌ', en: 'Rashid used to write (verb-first)' },
                            { ar: 'كَانَ رَاشِدٌ يَكْتُبُ', en: 'Rashid used to write (subject-middle)' },
                            { ar: 'رَاشِدٌ كَانَ يَكْتُبُ', en: 'Rashid used to write (subject-first)' },
                            { ar: 'كَانَتْ تَكْتُبُ فَاطِمَةُ', en: 'Fatima used to write (verb-first, f)' },
                            { ar: 'كَانَتْ فَاطِمَةُ تَكْتُبُ', en: 'Fatima used to write (subject-middle, f)' },
                            { ar: 'فَاطِمَةُ كَانَتْ تَكْتُبُ', en: 'Fatima used to write (subject-first, f)' },
                        ],
                    },
                ],
            },
        },
    ],
};

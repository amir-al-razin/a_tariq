import type { LessonData } from '../../curriculum';

export const lesson08: LessonData = {
    darsNumber: 8,
    chunks: [
        {
            id: '2-8-1',
            type: 'vocabulary',
            titleEn: 'Verbs for لَنْ Practice',
            titleAr: 'أَفْعَال لِلتَّدْرِيب عَلَى لَنْ',
            payload: {
                words: [
                    { id: 1, ar: 'يَذْهَبُ', romanized: 'yadhhabu', en: 'He goes', emoji: '🚶' },
                    { id: 2, ar: 'يَخْرُجُ', romanized: 'yakhruju', en: 'He exits', emoji: '🚪' },
                    { id: 3, ar: 'يَلْعَبُ', romanized: "yal'abu", en: 'He plays', emoji: '⚽' },
                    { id: 4, ar: 'يَقُولُ', romanized: 'yaqūlu', en: 'He says', emoji: '🗣️' },
                    { id: 5, ar: 'يَبِيعُ', romanized: "yabī\'u", en: 'He sells', emoji: '🛒' },
                    { id: 6, ar: 'يَنَامُ', romanized: 'yanāmu', en: 'He sleeps', emoji: '😴' },
                    { id: 7, ar: 'يَخَافُ', romanized: 'yakhāfu', en: 'He fears', emoji: '😨' },
                    { id: 8, ar: 'يَجْلِسُ', romanized: 'yajlisu', en: 'He sits', emoji: '🪑' },
                    { id: 9, ar: 'يَرْجِعُ', romanized: "yarji\'u", en: 'He returns', emoji: '↩️' },
                    { id: 10, ar: 'يُنْفِقُ', romanized: 'yunfiqu', en: 'He spends', emoji: '💰' },
                    { id: 11, ar: 'يُرْسِلُ', romanized: 'yursilu', en: 'He sends', emoji: '📨' },
                    { id: 12, ar: 'يُطِيعُ', romanized: "yuṭī\'u", en: 'He obeys', emoji: '✅' },
                    { id: 13, ar: 'يُجِيبُ', romanized: 'yujību', en: 'He answers', emoji: '💬' },
                ],
            },
        },
        {
            id: '2-8-2',
            type: 'grammar_rule',
            titleEn: 'لَنْ — Definite Future Negation',
            titleAr: 'لَنْ — نَفْيُ الْمُسْتَقْبَل الْقَطْعِي',
            payload: {
                rules: [
                    {
                        label: 'لَنْ + مُضَارِع مَنْصُوب',
                        arabic: 'لَنْ يَفْعَلَ',
                        romanized: "lan yaf\'ala",
                        meaning: "لَنْ + present tense verb (with fatha ending) = "will definitely not do'. Stronger than لَا.',
                        examples: [
                            { ar: 'لَنْ يَفْعَلَ', en: 'He will definitely not do' },
                            { ar: 'لَنْ تَفْعَلَ', en: 'She will definitely not do' },
                            { ar: 'لَنْ تَفْعَلَ', en: 'You (m) will definitely not do' },
                            { ar: 'لَنْ تَفْعَلِي', en: 'You (f) will definitely not do' },
                            { ar: 'لَنْ أَفْعَلَ', en: 'I will definitely not do' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-8-3',
            type: 'paragraph',
            titleEn: 'Reading — لَنْ in Context',
            titleAr: 'قِرَاءَة — لَنْ فِي الْجُمَل',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'لَنْ يَدْخُلَ الْمُشْرِكُ الْجَنَّةَ.',
                            'لَنْ أُطِيعَ الشَّيْطَانَ، لِأَنِّي مُسْلِمٌ.',
                            'لَنْ يُصَدِّقَ الْمُنَافِقُ وَلَنْ يَكْذِبَ الْمُسْلِمُ.',
                            'لَنْ أَكْذِبَ، لِأَنِّي مُسْلِمٌ.',
                            'لَنْ يَخَافَ الْمُسْلِمُ غَيْرَ اللهِ.',
                        ],
                        translationEn: 'The polytheist will definitely not enter Paradise. I will definitely not obey Satan, because I am a Muslim. The hypocrite will definitely not tell the truth, and the Muslim will definitely not lie. I will definitely not lie, because I am a Muslim. The Muslim will definitely not fear anyone other than Allah.',
                    },
                    {
                        lines: [
                            'يَا فَاطِمَةُ! لَنْ تَفْهَمِي كَلَامَ اللهِ، لِأَنَّكِ لَا تَعْرِفِينَ اللُّغَةَ الْعَرَبِيَّةَ.',
                            'لَنْ تَذْهَبَ الْآنَ إِلَى الْحَدِيقَةِ وَلَنْ تَلْعَبَ، بَلْ تَجْلِسُ فِي غُرْفَتِهَا وَتَحْفَظُ دَرْسَ الْيَوْمِ.',
                            'لَنْ آكُلَ مَالَ الْيَتِيمِ.',
                            'أَيُّهَا التَّاجِرُ الْغَنِيُّ! أَلَنْ تُنْفِقَ مَالَكَ فِي سَبِيلِ اللهِ؟ أَنْفِقْ!',
                        ],
                        translationEn: 'O Fatima! You will definitely not understand the word of Allah, because you do not know the Arabic language. She will definitely not go to the garden now and will definitely not play; rather she will sit in her room and memorize today\'s lesson. I will definitely not consume the wealth of the orphan. O rich merchant! Will you definitely not spend your wealth in the path of Allah? Spend!',
                    },
                ],
            },
        },
        {
            id: '2-8-4',
            type: 'q_and_a',
            titleEn: 'Q&A — لَنْ Dialogues',
            titleAr: 'أَسْئِلَة — حِوَارَات لَنْ',
            payload: {
                questions: [
                    { emoji: '🚪', question_ar: 'يَا فَرْحَانَةُ! أَلَنْ تَدْخُلِي غُرْفَتَكِ الْآنَ؟', question_en: 'O Farhana! Will you definitely not enter your room now?', correct_ar: 'نَعَمْ .. لَنْ أَدْخُلَ الْآنَ غُرْفَتِي', correct_en: 'Yes, I will definitely not enter my room now.', options_ar: ['نَعَمْ .. لَنْ أَدْخُلَ الْآنَ غُرْفَتِي', 'بَلَى .. سَأَدْخُلُ', 'لَا أَعْرِفُ'], questionType: 'hal' },
                    { emoji: '🍽️', question_ar: 'أَلَنْ تُطْعِمَ هَذَا الْجَائِعَ؟', question_en: 'Will you definitely not feed this hungry person?', correct_ar: 'بَلَى .. سَأُطْعِمُهُ', correct_en: 'On the contrary, I will feed him.', options_ar: ['بَلَى .. سَأُطْعِمُهُ', 'نَعَمْ .. لَنْ أُطْعِمَهُ', 'لَا أَسْتَطِيعُ'], questionType: 'hal' },
                    { emoji: '✅', question_ar: 'يَا فَاطِمَةُ! أَلَنْ تُطِيعِي أَبَاكِ وَأُمَّكِ؟', question_en: 'O Fatima! Will you definitely not obey your father and mother?', correct_ar: 'بَلَى أُطِيعُهُمَا', correct_en: 'On the contrary, I will obey them both.', options_ar: ['بَلَى أُطِيعُهُمَا', 'نَعَمْ .. لَنْ أُطِيعَهُمَا', 'أُطِيعُ أَبِي فَقَطْ'], questionType: 'hal' },
                ],
            },
        },
        {
            id: '2-8-5',
            type: 'grammar_rule',
            titleEn: 'Mudaf & Mudaf Ilayhi — Vocative Form',
            titleAr: 'الْمُضَاف وَالْمُضَاف إِلَيْهِ — الْمُنَادَى',
            payload: {
                rules: [
                    {
                        label: 'يَا + مُضَاف مَنْصُوب',
                        arabic: 'يَا مُعَلِّمَ الْمَدْرَسَةِ',
                        romanized: "yā mu\'allima l-madrasah",
                        meaning: 'When calling someone with a possessive title (Mudaf), the first word takes fatha (Mansub) after يَا',
                        examples: [
                            { ar: 'يَا مُعَلِّمَ الْمَدْرَسَةِ', en: 'O teacher of the school' },
                            { ar: 'يَا إِمَامَ الْمَسْجِدِ', en: 'O Imam of the mosque' },
                            { ar: 'يَا صَدِيقَ مَحْمُودٍ', en: "O Mahmud's friend" },
                            { ar: 'يَا أَخَا بِلَالٍ', en: "O Bilal's brother" },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-8-6',
            type: 'assessment',
            titleEn: 'Exercise — Vocative with Mudaf',
            titleAr: 'تَمْرِين — الْمُنَادَى الْمُضَاف',
            payload: {
                instruction: 'Choose the correct vocative form (with يَا).',
                questions: [
                    { emoji: '📚', question_ar: 'مُعَلِّمُ الْمَدْرَسَةِ → يَا ___', question_en: 'Teacher of the school → O ___', correct_ar: 'يَا مُعَلِّمَ الْمَدْرَسَةِ', correct_en: 'O teacher of the school', options_ar: ['يَا مُعَلِّمَ الْمَدْرَسَةِ', 'يَا مُعَلِّمُ الْمَدْرَسَةِ', 'يَا مُعَلِّمٍ الْمَدْرَسَةِ'] },
                    { emoji: '🕌', question_ar: 'إِمَامُ الْمَسْجِدِ → يَا ___', question_en: 'Imam of the mosque → O ___', correct_ar: 'يَا إِمَامَ الْمَسْجِدِ', correct_en: 'O Imam of the mosque', options_ar: ['يَا إِمَامَ الْمَسْجِدِ', 'يَا إِمَامُ الْمَسْجِدِ', 'يَا إِمَامٍ الْمَسْجِدِ'] },
                    { emoji: '👬', question_ar: 'صَدِيقُ مَحْمُودٍ → يَا ___', question_en: "Mahmud's friend → O ___", correct_ar: 'يَا صَدِيقَ مَحْمُودٍ', correct_en: "O Mahmud's friend", options_ar: ['يَا صَدِيقَ مَحْمُودٍ', 'يَا صَدِيقُ مَحْمُودٍ', 'يَا صَدِيقٍ مَحْمُودٍ'] },
                ],
            },
        },
    ],
};

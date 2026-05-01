import type { LessonData } from '../../curriculum';

export const lesson04: LessonData = {
    darsNumber: 4,
    chunks: [
        {
            id: '2-2-4-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary — قَالَ Verb Forms',
            titleAr: 'مُفْرَدَاتُ الدَّرْس',
            payload: {
                words: [
                    { id: 1, ar: 'قَالَ', romanized: 'qāla', en: 'He said', emoji: '🗣️' },
                    { id: 2, ar: 'قَالَتْ', romanized: 'qālat', en: 'She said', emoji: '🗣️' },
                    { id: 3, ar: 'قُلْتَ', romanized: 'qulta', en: 'You (m) said', emoji: '🗣️' },
                    { id: 4, ar: 'قُلْتِ', romanized: 'qulti', en: 'You (f) said', emoji: '🗣️' },
                    { id: 5, ar: 'قُلْتُ', romanized: 'qultu', en: 'I said', emoji: '🗣️' },
                    { id: 6, ar: 'يَقُولُ', romanized: 'yaqūlu', en: 'He says', emoji: '🗣️' },
                    { id: 7, ar: 'تَقُولُ', romanized: 'taqūlu', en: 'She says / You (m) say', emoji: '🗣️' },
                    { id: 8, ar: 'تَقُولِينَ', romanized: 'taqūlīna', en: 'You (f) say', emoji: '🗣️' },
                    { id: 9, ar: 'أَقُولُ', romanized: 'aqūlu', en: 'I say', emoji: '🗣️' },
                    { id: 10, ar: 'قُلْ', romanized: 'qul', en: 'Say! (m)', emoji: '📢' },
                    { id: 11, ar: 'قُولِي', romanized: 'qūlī', en: 'Say! (f)', emoji: '📢' },
                    { id: 12, ar: 'لَا تَقُلْ', romanized: 'lā taqul', en: "Don"t say! (m)", emoji: '🚫' },
                    { id: 13, ar: 'لَا تَقُولِي', romanized: 'lā taqūlī', en: "Don"t say! (f)", emoji: '🚫' },
                    { id: 14, ar: 'بِمَ', romanized: 'bima', en: 'With what? (short for بِمَاذَا)', emoji: '❓' },
                    { id: 15, ar: 'لِمَ', romanized: 'lima', en: 'Why? (short for لِمَاذَا)', emoji: '❓' },
                    { id: 16, ar: 'قَدْ', romanized: 'qad', en: 'Certainly / Indeed', emoji: '✅' },
                    { id: 17, ar: 'كُلَّ يَوْمٍ', romanized: 'kulla yawmin', en: 'Every day', emoji: '📅' },
                    { id: 18, ar: 'خَمْرٌ', romanized: 'khamrun', en: 'Wine / Alcohol', emoji: '🚫' },
                    { id: 19, ar: 'ذُبَابَةٌ', romanized: 'dhubābatun', en: 'A fly', emoji: '🪰' },
                    { id: 20, ar: 'بَعُوضَةٌ', romanized: "ba'ūḍatun", en: 'A mosquito', emoji: '🦟' },
                    { id: 21, ar: 'كَلِمَةٌ', romanized: 'kalimatun', en: 'A word', emoji: '📝' },
                    { id: 22, ar: 'جُمْلَةٌ', romanized: 'jumlatun', en: 'A sentence', emoji: '📖' },
                    { id: 23, ar: 'عَزِيزٌ', romanized: "'azīzun", en: 'Dear / Beloved', emoji: '💛' },
                ],
            },
        },
        {
            id: '2-2-4-2',
            type: 'verb_table',
            titleEn: 'Verb Table — قَالَ (to say)',
            titleAr: 'جَدْوَلُ الْفِعْل — قَالَ',
            payload: {
                verbTense: 'past',
                verbTable: [
                    { root: 'قَالَ', meaning: 'to say', he: 'قَالَ', she: 'قَالَتْ', youM: 'قُلْتَ', youF: 'قُلْتِ', i: 'قُلْتُ' },
                ],
            },
        },
        {
            id: '2-2-4-3',
            type: 'verb_table',
            titleEn: 'Present & Imperative — قَالَ',
            titleAr: 'الْمُضَارِعُ وَالْأَمْر — قَالَ',
            payload: {
                verbTense: 'present',
                verbTable: [
                    { root: 'يَقُولُ', meaning: 'to say', he: 'يَقُولُ', she: 'تَقُولُ', youM: 'تَقُولُ', youF: 'تَقُولِينَ', i: 'أَقُولُ' },
                ],
            },
        },
        {
            id: '2-2-4-4',
            type: 'grammar_rule',
            titleEn: 'Grammar — Object (الْمَفْعُولُ بِهِ) and بَلَى vs نَعَمْ',
            titleAr: 'قَاعِدَة — الْمَفْعُولُ بِهِ وَبَلَى وَنَعَمْ',
            payload: {
                rules: [
                    {
                        label: 'الْمَفْعُولُ بِهِ — The Direct Object',
                        arabic: 'نَصَرَ رَاشِدٌ شَاهِدًا',
                        romanized: 'naṣara rāshidun shāhidan',
                        meaning: 'The noun receiving the action of a transitive verb takes a fathah or fathatain (mansub state).',
                        examples: [
                            { ar: 'نَصَرَ رَاشِدٌ شَاهِدًا', en: 'Rashid helped Shahid.' },
                            { ar: 'أَنَا أَقْرَأُ كِتَابًا جَدِيدًا', en: 'I am reading a new book.' },
                        ],
                    },
                    {
                        label: 'بَلَى vs نَعَمْ — Answering Negative Questions',
                        arabic: 'أَلَا تَفْهَمُ كَلَامَ اللهِ ؟ — بَلَى / نَعَمْ',
                        romanized: "alā tafhamu kalāma llāh? — balā / na'am",
                        meaning: 'When answering a negative question: بَلَى affirms the positive (Yes, I DO), while نَعَمْ agrees with the negative (Yes, I do NOT).',
                        examples: [
                            { ar: 'أَلَا تَفْهَمُ كَلَامَ اللهِ ؟ بَلَى، أَفْهَمُ', en: 'Do you not understand the words of Allah? Yes, I DO understand.' },
                            { ar: 'أَلَا تَفْهَمُ كَلَامَ اللهِ ؟ نَعَمْ، لَا أَفْهَمُ', en: 'Do you not understand the words of Allah? Yes, I do NOT understand.' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-2-4-5',
            type: 'paragraph',
            titleEn: 'Reading Passages',
            titleAr: 'قِرَاءَة',
            payload: {
                paragraphs: [
                    {
                        title: 'رَاشِدٌ فِي الْمَدْرَسَة',
                        titleEn: 'Rashid at School',
                        lines: [
                            'خَلَعَ رَاشِدٌ لِبَاسَ الْمَنْزِلِ وَلَبِسَ لِبَاسَ الْمَدْرَسَةِ، وَذَهَبَ إِلَى الْمَدْرَسَةِ وَحَضَرَ فِي الْفَصْلِ وَجَلَسَ أَمَامَ الْمُعَلِّمِ.',
                            'سَأَلَ الْمُعَلِّمُ رَاشِدًا : هَلْ حَفِظْتَ دَرْسَكَ يَا رَاشِدُ ؟ قَالَ رَاشِدٌ : نَعَمْ .. حَفِظْتُ دَرْسِي.',
                            'قَالَ الْمُعَلِّمُ : اِفْتَحْ كِتَابَكَ وَاقْرَأْ دَرْسَكَ.',
                            'فَتَحَ رَاشِدٌ كِتَابَهُ وَقَرَأَ الدَّرْسَ، سَمِعَ الْمُعَلِّمُ دَرْسَ رَاشِدٍ وَقَالَ : قَدْ حَفِظْتَ دَرْسَكَ جَيِّدًا.',
                        ],
                        translationEn: 'Rashid took off his home clothes and put on his school clothes, and went to the school and attended the classroom and sat in front of the teacher. The teacher asked Rashid: "Have you memorized your lesson, O Rashid?" Rashid said: "Yes, I have memorized my lesson." The teacher said: "Open your book and read your lesson." Rashid opened his book and read the lesson. The teacher heard Rashid\'s lesson and said: "You have memorized your lesson well.'',
                    },
                    {
                        title: 'فَاطِمَةُ وَاللُّغَةُ الْعَرَبِيَّة',
                        titleEn: 'Fatima and the Arabic Language',
                        lines: [
                            'سَأَلَ رَاشِدٌ فَاطِمَةَ : يَا فَاطِمَةُ هَلْ تَعْرِفِينَ اللُّغَةَ الْعَرَبِيَّةَ وَتَفْهَمِينَ كِتَابَ اللهِ ؟',
                            'قَالَتْ فَاطِمَةُ : نَعَمْ .. أَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ وَأَفْهَمُ كِتَابَ اللهِ.',
                            'قَالَ رَاشِدٌ : أَنَا أَفْهَمُ كَلَامَ اللهِ لِأَنِّي أَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ.',
                        ],
                        translationEn: 'Rashid asked Fatima: "O Fatima, do you know the Arabic language and understand the Book of Allah?" Fatima said: "Yes, I know the Arabic language and I understand the Book of Allah." Rashid said: "I understand the words of Allah because I know the Arabic language.'',
                    },
                    {
                        title: 'الْإِيمَانُ وَالشِّرْك',
                        titleEn: 'Faith and Polytheism',
                        lines: [
                            'لَا يَعْرِفُ الْمُشْرِكُ رَبَّهُ. كَيْفَ يَعْرِفُ الْمُشْرِكُ رَبَّهُ وَفِي قَلْبِهِ ظُلْمَةٌ !',
                            'يَشْرَبُ الْمُسْلِمُ الْعَسَلَ وَلَا يَشْرَبُ الْخَمْرَ، لِأَنَّهَا حَرَامٌ.',
                            'يَنْصُرُ اللهُ دِينَهُ بِذُبَابَةٍ وَبِبَعُوضَةٍ.',
                        ],
                        translationEn: 'The polytheist does not know his Lord. How can the polytheist know his Lord when there is darkness in his heart! The Muslim drinks honey and does not drink wine, because it is forbidden. Allah supports His religion with a fly and with a mosquito.',
                    },
                ],
            },
        },
        {
            id: '2-2-4-6',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '📚',
                        question_ar: 'هَلْ حَفِظَ رَاشِدٌ دَرْسَهُ ؟',
                        question_en: 'Did Rashid memorize his lesson?',
                        correct_ar: 'نَعَمْ، حَفِظَ دَرْسَهُ جَيِّدًا',
                        correct_en: 'Yes, he memorized his lesson well.',
                        options_ar: [
                            'نَعَمْ، حَفِظَ دَرْسَهُ جَيِّدًا',
                            'لَا، لَمْ يَحْفَظْ دَرْسَهُ',
                            'حَفِظَ بَعْضَهُ فَقَطْ',
                        ],
                        questionType: 'hal',
                    },
                    {
                        emoji: '🗣️',
                        question_ar: 'لِمَاذَا تَفْهَمُ فَاطِمَةُ كِتَابَ اللهِ ؟',
                        question_en: 'Why does Fatima understand the Book of Allah?',
                        correct_ar: 'لِأَنَّهَا تَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ',
                        correct_en: 'Because she knows the Arabic language.',
                        options_ar: [
                            'لِأَنَّهَا تَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ',
                            'لِأَنَّهَا تَحْفَظُ الْقُرْآنَ',
                            'لِأَنَّ مُعَلِّمَهَا عَلَّمَهَا',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🍯',
                        question_ar: 'مَاذَا يَشْرَبُ الْمُسْلِمُ ؟',
                        question_en: 'What does the Muslim drink?',
                        correct_ar: 'يَشْرَبُ الْعَسَلَ وَلَا يَشْرَبُ الْخَمْرَ',
                        correct_en: 'He drinks honey and does not drink wine.',
                        options_ar: [
                            'يَشْرَبُ الْعَسَلَ وَلَا يَشْرَبُ الْخَمْرَ',
                            'يَشْرَبُ الْخَمْرَ أَحْيَانًا',
                            'يَشْرَبُ الْمَاءَ فَقَطْ',
                        ],
                        questionType: 'general',
                    },
                ],
            },
        },
        {
            id: '2-2-4-7',
            type: 'assessment',
            titleEn: 'Exercise — Object Case (Mansub)',
            titleAr: 'تَمْرِين — الْمَفْعُولُ بِهِ',
            payload: {
                instruction: 'Choose the correct form of the object noun.',
                questions: [
                    {
                        emoji: '📖',
                        question_ar: 'يَقْرَأُ بِلَالٌ ___',
                        question_en: 'Bilal is reading ___',
                        correct_ar: 'قِصَّةً',
                        correct_en: 'a story (accusative)',
                        options_ar: ['قِصَّةً', 'قِصَّةٌ', 'قِصَّةِ'],
                    },
                    {
                        emoji: '📝',
                        question_ar: 'حَفِظَ هَذَا الْوَلَدُ ___',
                        question_en: 'This boy memorized ___',
                        correct_ar: 'سُورَةً جَدِيدَةً',
                        correct_en: 'a new surah (accusative)',
                        options_ar: ['سُورَةً جَدِيدَةً', 'سُورَةٌ جَدِيدَةٌ', 'سُورَةِ جَدِيدَةِ'],
                    },
                ],
            },
        },
    ],
};

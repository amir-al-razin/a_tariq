import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
    darsNumber: 6,
    chunks: [
        {
            id: '2-6-1',
            type: 'vocabulary',
            titleEn: 'Hollow Verb Masdars',
            titleAr: 'مَصَادِر الأَفْعَال الجَوْفَاء',
            payload: {
                words: [
                    { id: 1, ar: 'الْقَوْلُ', romanized: 'al-qawl', en: 'To say / saying', emoji: '🗣️' },
                    { id: 2, ar: 'الصَّوْمُ', romanized: 'aṣ-ṣawm', en: 'To fast / fasting', emoji: '🌙' },
                    { id: 3, ar: 'التَّوْبَةُ', romanized: 'at-tawbah', en: 'To repent / repentance', emoji: '🤲' },
                    { id: 4, ar: 'الْقِيَامُ', romanized: 'al-qiyām', en: 'To stand / standing', emoji: '🧍' },
                    { id: 5, ar: 'الْبَيْعُ', romanized: "al-bay'", en: 'To sell / selling', emoji: '🛒' },
                    { id: 6, ar: 'الصَّيْدُ', romanized: 'aṣ-ṣayd', en: 'To hunt / hunting', emoji: '🏹' },
                    { id: 7, ar: 'الْخِيَاطَةُ', romanized: 'al-khiyāṭah', en: 'To sew / sewing', emoji: '🧵' },
                    { id: 8, ar: 'الطَّيَرَانُ', romanized: 'aṭ-ṭayarān', en: 'To fly / flying', emoji: '🦅' },
                    { id: 9, ar: 'النَّوْمُ', romanized: 'an-nawm', en: 'To sleep / sleeping', emoji: '😴' },
                    { id: 10, ar: 'الْخَوْفُ', romanized: 'al-khawf', en: 'To fear / fear', emoji: '😨' },
                    { id: 11, ar: 'عَنْ', romanized: "'an", en: 'From / about', emoji: '↩️' },
                    { id: 12, ar: 'فَرَاشَةٌ', romanized: 'farāshah', en: 'Butterfly', emoji: '🦋' },
                    { id: 13, ar: 'تَرَكَ', romanized: 'taraka', en: 'To leave / abandon', emoji: '🚪' },
                ],
            },
        },
        {
            id: '2-6-2',
            type: 'masdar_factory',
            titleEn: 'Hollow Verb: قَالَ (to say)',
            titleAr: 'بَابُ قَالَ يَقُولُ',
            payload: {
                baabLabel: 'بَابُ قَالَ يَقُولُ',
                instruction: 'Hollow verb — the middle root letter changes across forms',
                masdarRows: [
                    {
                        masdar: 'الْقَوْلُ',
                        masdarEn: 'to say',
                        past: 'قَالَ',
                        present: 'يَقُولُ',
                        imperative: 'قُلْ',
                        prohibitive: 'لَا تَقُلْ',
                    },
                ],
            },
        },
        {
            id: '2-6-3',
            type: 'masdar_factory',
            titleEn: 'Hollow Verb: بَاعَ (to sell)',
            titleAr: 'بَابُ بَاعَ يَبِيعُ',
            payload: {
                baabLabel: 'بَابُ بَاعَ يَبِيعُ',
                masdarRows: [
                    {
                        masdar: 'الْبَيْعُ',
                        masdarEn: 'to sell',
                        past: 'بَاعَ',
                        present: 'يَبِيعُ',
                        imperative: 'بِعْ',
                        prohibitive: 'لَا تَبِعْ',
                    },
                ],
            },
        },
        {
            id: '2-6-4',
            type: 'masdar_factory',
            titleEn: 'Hollow Verb: نَامَ (to sleep)',
            titleAr: 'بَابُ نَامَ يَنَامُ',
            payload: {
                baabLabel: 'بَابُ نَامَ يَنَامُ',
                masdarRows: [
                    {
                        masdar: 'النَّوْمُ',
                        masdarEn: 'to sleep',
                        past: 'نَامَ',
                        present: 'يَنَامُ',
                        imperative: 'نَمْ',
                        prohibitive: 'لَا تَنَمْ',
                    },
                ],
            },
        },
        {
            id: '2-6-5',
            type: 'grammar_rule',
            titleEn: 'Usage: قَالَ لَهُ / قَالَ لِي',
            titleAr: 'اِسْتِخْدَام: قَالَ + لَـ',
            payload: {
                rules: [
                    {
                        label: 'قَالَ + لَـ + ضَمِير',
                        arabic: 'قَالَ لَهُ / قَالَ لَهَا / قَالَ لِي',
                        romanized: 'qāla lahu / lahā / lī',
                        meaning: "When reporting speech, attach لَـ to the pronoun to indicate 'said to him/her/me'",
                        examples: [
                            { ar: 'قُلْتُ لَهُ', en: 'I said to him' },
                            { ar: 'قُلْتُ لَهَا', en: 'I said to her' },
                            { ar: 'قُلْتُ لَكَ', en: 'I said to you (m)' },
                            { ar: 'قَالَ لِي', en: 'He said to me' },
                            { ar: 'قُلْتُ لَكُمْ', en: 'I said to you all' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-6-6',
            type: 'grammar_rule',
            titleEn: 'Usage: دَخَلَ and رَكِبَ with prepositions',
            titleAr: 'اِسْتِخْدَام: دَخَلَ وَرَكِبَ',
            payload: {
                rules: [
                    {
                        label: 'دَخَلَ — direct or with فِي',
                        arabic: 'دَخَلَ الْمَسْجِدَ / دَخَلَ فِي دِينِ اللهِ',
                        romanized: 'dakhala l-masjida / dakhala fī dīni llāh',
                        meaning: 'دَخَلَ can take a direct object (place) or use فِي for abstract entry',
                        examples: [
                            { ar: 'دَخَلْتُ الْمَسْجِدَ', en: 'I entered the mosque' },
                            { ar: 'دَخَلَ الرَّجُلُ فِي دِينِ اللهِ', en: 'The man entered into the religion of Allah' },
                            { ar: 'رَكِبْتُ السَّيَّارَةَ', en: 'I rode the car' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-6-7',
            type: 'paragraph',
            titleEn: 'Reading — Hollow Verbs in Context',
            titleAr: 'قِرَاءَة — الأَفْعَال الجَوْفَاء',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'الْمُسْلِمُ يَخَافُ اللهَ وَلَا يَخَافُ غَيْرَ اللهِ.',
                            'الْمُسْلِمُ يَعْبُدُ اللهَ وَلَا يَعْبُدُ غَيْرَ اللهِ وَيَسْجُدُ لِلهِ وَلَا يَسْجُدُ لِغَيْرِ اللهِ.',
                            'لَا يَخَافُ الْمُسْلِمُ الْمَوْتَ، لِأَنَّهُ يَدْخُلُ الْجَنَّةَ بَعْدَ الْمَوْتِ.',
                            'وَالْمُشْرِكُ يَخَافُ الْمَوْتَ، لِأَنَّهُ يَدْخُلُ النَّارَ بَعْدَ الْمَوْتِ.',
                        ],
                        translationEn: 'The Muslim fears Allah and does not fear other than Allah. The Muslim worships Allah and does not worship other than Allah, and prostrates to Allah and does not prostrate to other than Allah. The Muslim does not fear death, because he enters Paradise after death. The polytheist fears death, because he enters the Hellfire after death.',
                    },
                    {
                        lines: [
                            'مَاتَ أَبُو مَاجِدٍ قَبْلَ سَنَةٍ وَمَاتَتْ أُمُّهُ قَبْلَ شَهْرٍ.',
                            'يَمُوتُ الْإِنْسَانُ يَوْمًا وَيَقُومُ أَمَامَ اللهِ، وَيَسْأَلُهُ اللهُ عَنْ حَيَاتِهِ.',
                        ],
                        translationEn: "Majid's father died a year ago and his mother died a month ago. Man dies one day and stands before Allah, and Allah will ask him about his life.",
                    },
                    {
                        lines: [
                            'يَصُومُ الْمُسْلِمُ فِي شَهْرِ رَمَضَانَ.',
                            'هَذَا شَهْرُ رَمَضَانَ، أَنَا صُمْتُ الْيَوْمَ وَأَصُومُ غَدًا.',
                            'أُخْتِي لَا تَصُومُ لِأَنَّهَا صَغِيرَةٌ.',
                        ],
                        translationEn: 'The Muslim fasts in the month of Ramadan. This is the month of Ramadan; I fasted today and will fast tomorrow. My sister does not fast because she is small.',
                    },
                    {
                        lines: [
                            'عَمُّ مَاجِدٍ صَيَّادٌ مَاهِرٌ. هُوَ يَصِيدُ فِي غَابَةٍ بَعِيدَةٍ.',
                            'قَبْلَ أُسْبُوعٍ صَادَ ظَبْيًا جَمِيلًا.',
                        ],
                        translationEn: "Majid's uncle is a skilled hunter. He hunts in a distant forest. A week ago he hunted a beautiful deer.",
                    },
                    {
                        lines: [
                            'مَاذَا تَفْعَلُ الْفَرَاشَةُ الْجَمِيلَةُ؟ تَطِيرُ مِنْ زَهْرَةٍ إِلَى زَهْرَةٍ.',
                        ],
                        translationEn: 'What does the beautiful butterfly do? It flies from flower to flower.',
                    },
                ],
            },
        },
        {
            id: '2-6-8',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                questions: [
                    { emoji: '😴', question_ar: 'أَقَبْلَ الْعِشَاءِ تَنَامُ أَمْ بَعْدَ الْعِشَاءِ؟', question_en: 'Do you sleep before Isha or after Isha?', correct_ar: 'بَلْ بَعْدَ الْعِشَاءِ', correct_en: 'Rather, after Isha.', options_ar: ['بَلْ بَعْدَ الْعِشَاءِ', 'قَبْلَ الْعِشَاءِ', 'لَا أَنَامُ'], questionType: 'a_am' },
                    { emoji: '🧵', question_ar: 'مَنْ تَخِيطُ ثَوْبَهَا بِيَدِهَا؟', question_en: 'Who sews her dress with her hand?', correct_ar: 'زَيْنَبُ تَخِيطُ ثَوْبَهَا بِيَدِهَا', correct_en: 'Zainab sews her dress with her hand.', options_ar: ['زَيْنَبُ تَخِيطُ ثَوْبَهَا بِيَدِهَا', 'فَاطِمَةُ تَخِيطُ ثَوْبَهَا', 'الْأُمُّ تَخِيطُ'], questionType: 'general' },
                    { emoji: '🦋', question_ar: 'مَاذَا تَفْعَلُ الْفَرَاشَةُ الْجَمِيلَةُ؟', question_en: 'What does the beautiful butterfly do?', correct_ar: 'تَطِيرُ مِنْ زَهْرَةٍ إِلَى زَهْرَةٍ', correct_en: 'It flies from flower to flower.', options_ar: ['تَطِيرُ مِنْ زَهْرَةٍ إِلَى زَهْرَةٍ', 'تَجْلِسُ عَلَى الشَّجَرَةِ', 'تَنَامُ فِي الْحَدِيقَةِ'], questionType: 'general' },
                    { emoji: '🌙', question_ar: 'هَلْ يَصُومُ الْمُسْلِمُ فِي رَمَضَانَ؟', question_en: 'Does the Muslim fast in Ramadan?', correct_ar: 'نَعَمْ .. يَصُومُ فِي شَهْرِ رَمَضَانَ', correct_en: 'Yes, he fasts in the month of Ramadan.', options_ar: ['نَعَمْ .. يَصُومُ فِي شَهْرِ رَمَضَانَ', 'لَا .. لَا يَصُومُ', 'يَصُومُ أَحْيَانًا'], questionType: 'hal' },
                ],
            },
        },
        {
            id: '2-6-9',
            type: 'assessment',
            titleEn: 'Exercise — Read and Translate Hollow Verb Forms',
            titleAr: 'تَمْرِين — اِقْرَأْ وَتَرْجِمْ',
            payload: {
                instruction: 'Choose the correct English meaning for each Arabic verb form.',
                questions: [
                    { emoji: '🗣️', question_ar: 'قُلْ', question_en: 'What does this mean?', correct_ar: 'Say! (command)', correct_en: 'Say! (command)', options_ar: ['Say! (command)', 'He said', 'Do not say'] },
                    { emoji: '😴', question_ar: 'لَا تَنَمْ', question_en: 'What does this mean?', correct_ar: 'Do not sleep! (command)', correct_en: 'Do not sleep! (command)', options_ar: ['Do not sleep! (command)', 'He did not sleep', 'She sleeps'] },
                    { emoji: '🛒', question_ar: 'بِعْتُ', question_en: 'What does this mean?', correct_ar: 'I sold', correct_en: 'I sold', options_ar: ['I sold', 'Sell! (command)', 'He sold'] },
                    { emoji: '🤲', question_ar: 'مَا تَابَ', question_en: 'What does this mean?', correct_ar: 'He did not repent', correct_en: 'He did not repent', options_ar: ['He did not repent', 'He repented', 'Repent!'] },
                ],
            },
        },
        {
            id: '2-6-10',
            type: 'assessment',
            titleEn: 'Exercise — Translate to Arabic',
            titleAr: 'تَمْرِين — تَرْجِمْ إِلَى الْعَرَبِيَّة',
            payload: {
                instruction: 'Choose the correct Arabic translation.',
                questions: [
                    { emoji: '😨', question_ar: 'Do not fear! (m)', question_en: 'Do not fear! (m)', correct_ar: 'لَا تَخَفْ', correct_en: 'Do not fear!', options_ar: ['لَا تَخَفْ', 'لَا تَخَافُ', 'مَا خَافَ'] },
                    { emoji: '🛒', question_ar: 'Do not sell! (m)', question_en: 'Do not sell! (m)', correct_ar: 'لَا تَبِعْ', correct_en: 'Do not sell!', options_ar: ['لَا تَبِعْ', 'لَا تَبِيعُ', 'مَا بَاعَ'] },
                    { emoji: '🌙', question_ar: 'Fast! (m)', question_en: 'Fast! (m)', correct_ar: 'صُمْ', correct_en: 'Fast!', options_ar: ['صُمْ', 'يَصُومُ', 'صَامَ'] },
                    { emoji: '🗣️', question_ar: 'Say! (m)', question_en: 'Say! (m)', correct_ar: 'قُلْ', correct_en: 'Say!', options_ar: ['قُلْ', 'يَقُولُ', 'قَالَ'] },
                ],
            },
        },
    ],
};

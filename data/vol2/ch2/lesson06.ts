import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
    darsNumber: 6,
    chunks: [
        {
            id: '2-2-6-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary',
            titleAr: 'الْمُفْرَدَاتُ',
            payload: {
                words: [
                    { id: 1, ar: 'الْإِتْيَانُ', romanized: 'al-ityān', en: 'Coming / To come', emoji: '🚶' },
                    { id: 2, ar: 'عِنْدَمَا', romanized: "'indamā", en: 'When (past or present)', emoji: '⏰' },
                    { id: 3, ar: 'لَمَّا', romanized: 'lammā', en: 'When (past tense only)', emoji: '⏰' },
                    { id: 4, ar: 'أَلَّا', romanized: 'allā', en: 'That not (أَنْ + لَا)', emoji: '🚫' },
                    { id: 5, ar: 'وَرَاءَ', romanized: "warā'a", en: 'Behind / After', emoji: '↩️' },
                    { id: 6, ar: 'يُعْجِبُنِي', romanized: "yu'jibunī", en: 'It pleases me / amazes me', emoji: '😊' },
                    { id: 7, ar: 'يُحْزِنُنِي', romanized: 'yuḥzinunī', en: 'It saddens me', emoji: '😢' },
                ],
            },
        },
        {
            id: '2-2-6-2',
            type: 'masdar_factory',
            titleEn: 'Masdar — أَتَى (to come)',
            titleAr: 'مَصْدَرُ أَتَى',
            payload: {
                baabLabel: 'بَابُ أَتَى يَأْتِي',
                masdarRows: [
                    { masdar: 'الْإِتْيَانُ', masdarEn: 'coming / to come', past: 'أَتَى', present: 'يَأْتِي', imperative: 'اِئْتِ', prohibitive: 'لَا تَأْتِ' },
                ],
            },
        },
        {
            id: '2-2-6-3',
            type: 'grammar_rule',
            titleEn: 'Grammar — Interpreted Verbal Noun (الْمَصْدَرُ الْمُؤَوَّل)',
            titleAr: 'قَاعِدَة — الْمَصْدَرُ الْمُؤَوَّل بِأَنْ',
            payload: {
                rules: [
                    {
                        label: 'أَنْ + مُضَارِع = مَصْدَر',
                        arabic: 'أَنْ تَعْمَلُوا خَيْرٌ لَكُمْ = عَمَلُكُمْ خَيْرٌ لَكُمْ',
                        romanized: "an ta'malū khayrun lakum = 'amalukum khayrun lakum',
                        meaning: 'The particle أَنْ followed by a present tense verb creates the meaning of a verbal noun (masdar). This is called the interpreted masdar (الْمَصْدَرُ الْمُؤَوَّل).',
                        examples: [
                            { ar: 'أَنْ تَعْمَلُوا خَيْرٌ لَكُمْ', en: 'That you work is better for you.' },
                            { ar: 'أَنْ تَصُومُوا خَيْرٌ لَكُمْ', en: 'That you fast is better for you.' },
                            { ar: 'أَنْ تَغْفُلُوا عَنِ الْمَوْتِ شَرٌّ لَكُمْ', en: 'That you are heedless of death is bad for you.' },
                        ],
                    },
                    {
                        label: 'أَنْ + لَا = أَلَّا',
                        arabic: 'أَمَرَهُ أَلَّا يَذْهَبَ',
                        romanized: 'amarahu allā yadhaba',
                        meaning: 'When أَنْ is immediately followed by لَا, they merge into أَلَّا (that not).',
                        examples: [
                            { ar: 'أَمَرَهُ أَلَّا يَذْهَبَ', en: 'He commanded him not to go.' },
                        ],
                    },
                    {
                        label: 'لَمَّا vs عِنْدَمَا',
                        arabic: 'لَمَّا سَمِعَ / عِنْدَمَا سَمِعَ / عِنْدَمَا يَسْمَعُ',
                        romanized: "lammā sami'a / "indamā sami'a / 'indamā yasma'u',
                        meaning: 'لَمَّا is used only with the past tense. عِنْدَمَا can be used with both past and present tense.',
                        examples: [
                            { ar: 'لَمَّا سَمِعَ الشُّبَّانُ نِدَاءَ الْجِهَادِ طَارُوا إِلَى سَاحَةِ الْقِتَالِ', en: 'When the young men heard the call to Jihad, they flew to the battlefield.' },
                            { ar: 'عِنْدَمَا يَسْمَعُ الشُّبَّانُ نِدَاءَ الْجِهَادِ يَطِيرُونَ إِلَى سَاحَةِ الْقِتَالِ', en: 'When the young men hear the call to Jihad, they fly to the battlefield.' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-2-6-4',
            type: 'paragraph',
            titleEn: 'Reading — أَنْ + Verb Constructions',
            titleAr: 'قِرَاءَة — تَرَاكِيبُ أَنْ مَعَ الْفِعْل',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'أَنْ تَصِلُوا خَيْرٌ لَكُمْ.',
                            'أَنْ تَتَصَدَّقُوا خَيْرٌ لَكُمْ.',
                            'أَنْ تَتَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ خَيْرٌ لَكُمْ.',
                            'أَنْ تُطِيعُوا اللهَ وَرَسُولَهُ خَيْرٌ لَكُمْ.',
                            'أَنْ تَغْفُلُوا عَنِ الْمَوْتِ شَرٌّ لَكُمْ.',
                            'أَنْ تُضَيِّعُوا حَيَاتَكُمْ شَرٌّ لَكُمْ.',
                        ],
                        translationEn: 'That you maintain ties of kinship is better for you. That you give charity is better for you. That you learn the Arabic language is better for you. That you obey Allah and His Messenger is better for you. That you are heedless of death is bad for you. That you waste your lives is bad for you.',
                    },
                    {
                        lines: [
                            'سَعَادَتُكُمْ فِي أَنْ تَخْدُمُوا أُمَّكُمْ.',
                            'خَسَارَتُكُمْ فِي أَنْ تَنْسَوْا آخِرَتَكُمْ.',
                            'فَلَاحُكُمْ فِي أَنْ تُرْضُوا رَبَّكُمْ.',
                            'نَجَاتُكُمْ فِي أَنْ تَسْعَوْا لِآخِرَتِكُمْ.',
                        ],
                        translationEn: 'Your happiness is in that you serve your mother. Your loss is in that you forget your Hereafter. Your success is in that you please your Lord. Your salvation is in that you strive for your Hereafter.',
                    },
                    {
                        lines: [
                            'يَفْتَحُ لَكُمْ بَابَ السَّعَادَةِ أَنْ تُطِيعُوا أَبَاكُمْ وَأُمَّكُمْ.',
                            'يَسُوقُ النَّاسَ إِلَى الْهَلَاكِ أَنْ يُطِيعُوا الشَّيْطَانَ.',
                            'يُعْجِبُنِي أَنْ تَتَكَلَّمُوا بِالْعَرَبِيَّةِ الْفُصْحَى.',
                            'يُحْزِنُنِي أَنْ تُضَيِّعُوا أَوْقَاتَكُمُ الَّتِي تَمْضِي وَلَا تَعُودُ أَبَدًا.',
                        ],
                        translationEn: 'It opens the door of happiness for you that you obey your father and your mother. It drives people to ruin that they obey Satan. It pleases me that you speak in eloquent Arabic. It saddens me that you waste your times which pass and never return.',
                    },
                ],
            },
        },
        {
            id: '2-2-6-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '😊',
                        question_ar: 'مَا الَّذِي يُعْجِبُ الْمُعَلِّمَ ؟',
                        question_en: 'What pleases the teacher?',
                        correct_ar: 'يُعْجِبُهُ أَنْ يَتَكَلَّمَ الطُّلَّابُ بِالْعَرَبِيَّةِ الْفُصْحَى',
                        correct_en: 'It pleases him that the students speak in eloquent Arabic.',
                        options_ar: [
                            'يُعْجِبُهُ أَنْ يَتَكَلَّمَ الطُّلَّابُ بِالْعَرَبِيَّةِ الْفُصْحَى',
                            'يُعْجِبُهُ أَنْ يَلْعَبَ الطُّلَّابُ',
                            'يُعْجِبُهُ أَنْ يَنَامَ الطُّلَّابُ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🏆',
                        question_ar: 'أَيْنَ فَلَاحُنَا ؟',
                        question_en: 'Where is our success?',
                        correct_ar: 'فَلَاحُنَا فِي أَنْ نُرْضِيَ رَبَّنَا',
                        correct_en: 'Our success is in that we please our Lord.',
                        options_ar: [
                            'فَلَاحُنَا فِي أَنْ نُرْضِيَ رَبَّنَا',
                            'فَلَاحُنَا فِي جَمْعِ الْمَالِ',
                            'فَلَاحُنَا فِي اللَّعِبِ وَالرَّاحَةِ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '⏰',
                        question_ar: 'هَلْ يُمْكِنُ اسْتِخْدَامُ لَمَّا مَعَ الْمُضَارِع ؟',
                        question_en: 'Can لَمَّا be used with the present tense?',
                        correct_ar: 'لَا، لَمَّا تُسْتَخْدَمُ مَعَ الْمَاضِي فَقَطْ',
                        correct_en: 'No, لَمَّا is used only with the past tense.',
                        options_ar: [
                            'لَا، لَمَّا تُسْتَخْدَمُ مَعَ الْمَاضِي فَقَطْ',
                            'نَعَمْ، يُمْكِنُ ذَلِكَ',
                            'نَعَمْ، مَعَ الْمَاضِي وَالْمُضَارِع',
                        ],
                        questionType: 'hal',
                    },
                ],
            },
        },
        {
            id: '2-2-6-6',
            type: 'assessment',
            titleEn: 'Exercise — Pronoun Substitution',
            titleAr: 'تَمْرِين — تَغْيِيرُ الضَّمَائِر',
            payload: {
                instruction: 'Choose the correct form when changing the pronoun.',
                questions: [
                    {
                        emoji: '🚪',
                        question_ar: 'يَفْتَحُ لَهُ بَابَ السَّعَادَةِ أَنْ يُطِيعَ أَبَاهُ — (لَهَا)',
                        question_en: 'Change to feminine singular:',
                        correct_ar: 'يَفْتَحُ لَهَا بَابَ السَّعَادَةِ أَنْ تُطِيعَ أَبَاهَا',
                        correct_en: 'It opens the door of happiness for her that she obeys her father.',
                        options_ar: [
                            'يَفْتَحُ لَهَا بَابَ السَّعَادَةِ أَنْ تُطِيعَ أَبَاهَا',
                            'يَفْتَحُ لَهَا بَابَ السَّعَادَةِ أَنْ يُطِيعَ أَبَاهُ',
                            'يَفْتَحُ لَهَا بَابَ السَّعَادَةِ أَنْ تُطِيعَ أَبَاهُ',
                        ],
                    },
                    {
                        emoji: '🌟',
                        question_ar: 'فَلَاحُكُمْ فِي أَنْ تَسْعَوْا لِآخِرَتِكُمْ — (فَلَاحُنَا)',
                        question_en: 'Change to first person plural:',
                        correct_ar: 'فَلَاحُنَا فِي أَنْ نَسْعَى لِآخِرَتِنَا',
                        correct_en: 'Our success is in that we strive for our Hereafter.',
                        options_ar: [
                            'فَلَاحُنَا فِي أَنْ نَسْعَى لِآخِرَتِنَا',
                            'فَلَاحُنَا فِي أَنْ تَسْعَوْا لِآخِرَتِكُمْ',
                            'فَلَاحُنَا فِي أَنْ يَسْعَوْا لِآخِرَتِهِمْ',
                        ],
                    },
                ],
            },
        },
    ],
};

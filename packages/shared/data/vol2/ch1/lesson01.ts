import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
    darsNumber: 1,
    chunks: [
        {
            id: '2-1-1',
            type: 'vocabulary',
            titleEn: 'Prepositions & Time Adverbs',
            titleAr: 'حُرُوفُ الجَرِّ وَظُرُوفُ الزَّمَان',
            payload: {
                words: [
                    { id: 1, ar: 'مِنْ', romanized: 'min', en: 'From', emoji: '↩️' },
                    { id: 2, ar: 'إِلَى', romanized: 'ilā', en: 'To / Towards', emoji: '↪️' },
                    { id: 3, ar: 'عَلَى', romanized: "'alā", en: 'On / Upon', emoji: '⬆️' },
                    { id: 4, ar: 'بِـ', romanized: 'bi', en: 'With / By means of', emoji: '🔧' },
                    { id: 5, ar: 'مَعَ', romanized: "ma'a", en: 'With / Along with', emoji: '🤝' },
                    { id: 6, ar: 'مَلْعَبٌ', romanized: "mal'abun", en: 'Playground', emoji: '⚽' },
                    { id: 7, ar: 'مَنْزِلٌ', romanized: 'manzilon', en: 'House / Home', emoji: '🏠' },
                    { id: 8, ar: 'ثُمَّ', romanized: 'thumma', en: 'Then / After that', emoji: '➡️' },
                ],
            },
        },
        {
            id: '2-1-2',
            type: 'vocabulary',
            titleEn: 'Time Expressions',
            titleAr: 'ظُرُوفُ الزَّمَان',
            payload: {
                words: [
                    { id: 1, ar: 'بَعْدَ', romanized: "ba'da", en: 'After', emoji: '⏩' },
                    { id: 2, ar: 'قَبْلَ', romanized: 'qabla', en: 'Before', emoji: '⏪' },
                    { id: 3, ar: 'اَلْيَوْمَ', romanized: 'al-yawma', en: 'Today', emoji: '📅' },
                    { id: 4, ar: 'اَلْآنَ', romanized: 'al-āna', en: 'Now', emoji: '⏱️' },
                    { id: 5, ar: 'صَبَاحًا', romanized: 'ṣabāḥan', en: 'In the morning', emoji: '🌅' },
                    { id: 6, ar: 'مَسَاءً', romanized: "masā'an", en: 'In the evening', emoji: '🌆' },
                    { id: 7, ar: 'غَدًا', romanized: 'ghadan', en: 'Tomorrow', emoji: '📆' },
                    { id: 8, ar: 'أَبَدًا', romanized: 'abadan', en: 'Ever / Never', emoji: '♾️' },
                    { id: 9, ar: 'مَتَى', romanized: 'matā', en: 'When?', emoji: '❓' },
                ],
            },
        },
        {
            id: '2-1-3',
            type: 'verb_table',
            titleEn: 'Past Tense - 8 Core Verbs',
            titleAr: 'الفِعْلُ المَاضِي',
            payload: {
                verbTense: 'past',
                verbTable: [
                    { root: 'فَعَلَ', meaning: 'to do', he: 'فَعَلَ', she: 'فَعَلَتْ', youM: 'فَعَلْتَ', youF: 'فَعَلْتِ', i: 'فَعَلْتُ' },
                    { root: 'خَرَجَ', meaning: 'to exit', he: 'خَرَجَ', she: 'خَرَجَتْ', youM: 'خَرَجْتَ', youF: 'خَرَجْتِ', i: 'خَرَجْتُ' },
                    { root: 'ذَهَبَ', meaning: 'to go', he: 'ذَهَبَ', she: 'ذَهَبَتْ', youM: 'ذَهَبْتَ', youF: 'ذَهَبْتِ', i: 'ذَهَبْتُ' },
                    { root: 'جَلَسَ', meaning: 'to sit', he: 'جَلَسَ', she: 'جَلَسَتْ', youM: 'جَلَسْتَ', youF: 'جَلَسْتِ', i: 'جَلَسْتُ' },
                    { root: 'قَرَأَ', meaning: 'to read', he: 'قَرَأَ', she: 'قَرَأَتْ', youM: 'قَرَأْتَ', youF: 'قَرَأْتِ', i: 'قَرَأْتُ' },
                    { root: 'كَتَبَ', meaning: 'to write', he: 'كَتَبَ', she: 'كَتَبَتْ', youM: 'كَتَبْتَ', youF: 'كَتَبْتِ', i: 'كَتَبْتُ' },
                    { root: 'رَجَعَ', meaning: 'to return', he: 'رَجَعَ', she: 'رَجَعَتْ', youM: 'رَجَعْتَ', youF: 'رَجَعْتِ', i: 'رَجَعْتُ' },
                    { root: 'لَعِبَ', meaning: 'to play', he: 'لَعِبَ', she: 'لَعِبَتْ', youM: 'لَعِبْتَ', youF: 'لَعِبْتِ', i: 'لَعِبْتُ' },
                ],
            },
        },
        {
            id: '2-1-4',
            type: 'verb_table',
            titleEn: 'Present / Future Tense',
            titleAr: 'الفِعْلُ المُضَارِع',
            payload: {
                verbTense: 'present',
                verbTable: [
                    { root: 'يَفْعَلُ', meaning: 'to do', he: 'يَفْعَلُ', she: 'تَفْعَلُ', youM: 'تَفْعَلُ', youF: 'تَفْعَلِيْنَ', i: 'أَفْعَلُ' },
                    { root: 'يَخْرُجُ', meaning: 'to exit', he: 'يَخْرُجُ', she: 'تَخْرُجُ', youM: 'تَخْرُجُ', youF: 'تَخْرُجِيْنَ', i: 'أَخْرُجُ' },
                    { root: 'يَذْهَبُ', meaning: 'to go', he: 'يَذْهَبُ', she: 'تَذْهَبُ', youM: 'تَذْهَبُ', youF: 'تَذْهَبِيْنَ', i: 'أَذْهَبُ' },
                    { root: 'يَجْلِسُ', meaning: 'to sit', he: 'يَجْلِسُ', she: 'تَجْلِسُ', youM: 'تَجْلِسُ', youF: 'تَجْلِسِيْنَ', i: 'أَجْلِسُ' },
                    { root: 'يَقْرَأُ', meaning: 'to read', he: 'يَقْرَأُ', she: 'تَقْرَأُ', youM: 'تَقْرَأُ', youF: 'تَقْرَئِيْنَ', i: 'أَقْرَأُ' },
                    { root: 'يَكْتُبُ', meaning: 'to write', he: 'يَكْتُبُ', she: 'تَكْتُبُ', youM: 'تَكْتُبُ', youF: 'تَكْتُبِيْنَ', i: 'أَكْتُبُ' },
                    { root: 'يَرْجِعُ', meaning: 'to return', he: 'يَرْجِعُ', she: 'تَرْجِعُ', youM: 'تَرْجِعُ', youF: 'تَرْجِعِيْنَ', i: 'أَرْجِعُ' },
                    { root: 'يَلْعَبُ', meaning: 'to play', he: 'يَلْعَبُ', she: 'تَلْعَبُ', youM: 'تَلْعَبُ', youF: 'تَلْعَبِيْنَ', i: 'أَلْعَبُ' },
                ],
            },
        },
        {
            id: '2-1-5',
            type: 'verb_table',
            titleEn: 'Command & Prohibition',
            titleAr: 'الأَمْرُ وَالنَّهْي',
            payload: {
                verbTense: 'imperative',
                instruction: 'Command (m/f) and Prohibition (m/f)',
                verbTable: [
                    { root: 'اِفْعَلْ', meaning: 'do', he: 'اِفْعَلْ', she: 'اِفْعَلِيْ', youM: 'لَا تَفْعَلْ', youF: 'لَا تَفْعَلِيْ', i: '-' },
                    { root: 'اُخْرُجْ', meaning: 'exit', he: 'اُخْرُجْ', she: 'اُخْرُجِيْ', youM: 'لَا تَخْرُجْ', youF: 'لَا تَخْرُجِيْ', i: '-' },
                    { root: 'اِذْهَبْ', meaning: 'go', he: 'اِذْهَبْ', she: 'اِذْهَبِيْ', youM: 'لَا تَذْهَبْ', youF: 'لَا تَذْهَبِيْ', i: '-' },
                    { root: 'اِجْلِسْ', meaning: 'sit', he: 'اِجْلِسْ', she: 'اِجْلِسِيْ', youM: 'لَا تَجْلِسْ', youF: 'لَا تَجْلِسِيْ', i: '-' },
                    { root: 'اِقْرَأْ', meaning: 'read', he: 'اِقْرَأْ', she: 'اِقْرَئِيْ', youM: 'لَا تَقْرَأْ', youF: 'لَا تَقْرَئِيْ', i: '-' },
                    { root: 'اُكْتُبْ', meaning: 'write', he: 'اُكْتُبْ', she: 'اُكْتُبِيْ', youM: 'لَا تَكْتُبْ', youF: 'لَا تَكْتُبِيْ', i: '-' },
                    { root: 'اِرْجِعْ', meaning: 'return', he: 'اِرْجِعْ', she: 'اِرْجِعِيْ', youM: 'لَا تَرْجِعْ', youF: 'لَا تَرْجِعِيْ', i: '-' },
                    { root: 'اِلْعَبْ', meaning: 'play', he: 'اِلْعَبْ', she: 'اِلْعَبِيْ', youM: 'لَا تَلْعَبْ', youF: 'لَا تَلْعَبِيْ', i: '-' },
                ],
            },
        },
        {
            id: '2-1-6',
            type: 'paragraph',
            titleEn: 'Reading - Past Tense Narrative',
            titleAr: 'قِرَاءَة - الفِعْلُ المَاضِي',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'خَرَجَ رَاشِدٌ مِنْ بَيْتِهِ وَذَهَبَ إِلَى الْمَدْرَسَةِ وَجَلَسَ أَمَامَ الْمُعَلِّمِ.',
                            'قَرَأَ رَاشِدٌ وَكَتَبَ فِي الْمَدْرَسَةِ، ثُمَّ رَجَعَ إِلَى الْمَنْزِلِ وَلَعِبَ فِي مَلْعَبِ الْقَرْيَةِ.',
                            'لَعِبَ رَاشِدٌ مَعَ خَالِدٍ بِكُرَةٍ جَدِيْدَةٍ.',
                        ],
                        translationEn: 'Rashid exited his house and went to the madrasa and sat in front of the teacher. Rashid read and wrote in the madrasa, then returned home and played in the village playground. Rashid played with Khalid with a new ball.',
                    },
                    {
                        lines: [
                            'خَرَجَتْ أُخْتُ رَاشِدٍ مِنْ غُرْفَتِهَا وَذَهَبَتْ إِلَى الْمَدْرَسَةِ وَجَلَسَتْ أَمَامَ الْمُعَلِّمَةِ.',
                            'قَرَأَتْ أُخْتُ رَاشِدٍ وَكَتَبَتْ فِي الْمَدْرَسَةِ، ثُمَّ رَجَعَتْ إِلَى الْمَنْزِلِ وَلَعِبَتْ فِي حَدِيْقَةِ عَائِشَةَ.',
                        ],
                        translationEn: "Rashid's sister exited her room and went to the madrasa and sat in front of the female teacher. She read and wrote in the madrasa, then returned home and played in Aisha's garden.",
                    },
                ],
            },
        },
        {
            id: '2-1-7',
            type: 'paragraph',
            titleEn: 'Reading - Present Tense Narrative',
            titleAr: 'قِرَاءَة - الفِعْلُ المُضَارِع',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'يَخْرُجُ خَالِدٌ الْآنَ مِنْ بَيْتِهِ وَيَذْهَبُ إِلَى الْمَدْرَسَةِ وَيَجْلِسُ أَمَامَ الْمُعَلِّمِ.',
                            'يَقْرَأُ خَالِدٌ وَيَكْتُبُ فِي الْفَصْلِ ثُمَّ يَرْجِعُ إِلَى بَيْتِهِ.',
                            'هُوَ يَرْجِعُ قَبْلَ الْعَصْرِ وَيَلْعَبُ فِي مَلْعَبِ الْقَرْيَةِ بَعْدَ الْعَصْرِ.',
                        ],
                        translationEn: 'Khalid is now exiting his house and going to the madrasa and sitting in front of the teacher. Khalid reads and writes in the classroom then returns home. He returns before Asr and plays in the village playground after Asr.',
                    },
                    {
                        lines: [
                            'تَخْرُجُ فَاطِمَةُ الْآنَ مِنْ غُرْفَتِهَا وَتَذْهَبُ إِلَى حَدِيْقَةِ الْمَنْزِلِ وَتَلْعَبُ مَعَ زَيْنَبَ.',
                            'بَعْدَ الْمَغْرِبِ تَجْلِسُ فَاطِمَةُ فِي غُرْفَتِهَا وَتَقْرَأُ وَتَكْتُبُ.',
                            'تَرْجِعُ أُمُّ سُعَادَ غَدًا مِنْ بَيْتِ الْقَرْيَةِ.',
                        ],
                        translationEn: "Fatima is now exiting her room and going to the house garden and playing with Zainab. After Maghrib, Fatima sits in her room and reads and writes. Su'ad's mother returns tomorrow from the village house.",
                    },
                ],
            },
        },
        {
            id: '2-1-8',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    { emoji: '🏃', question_ar: 'مِنْ أَيْنَ خَرَجَ رَاشِدٌ ؟', question_en: 'Where did Rashid exit from?', correct_ar: 'خَرَجَ مِنْ بَيْتِهِ', correct_en: 'He exited from his house.', options_ar: ['خَرَجَ مِنْ بَيْتِهِ', 'خَرَجَ مِنَ الْمَدْرَسَةِ', 'خَرَجَ مِنَ الْمَسْجِدِ'], questionType: 'general' },
                    { emoji: '🏫', question_ar: 'إِلَى أَيْنَ ذَهَبَ رَاشِدٌ ؟', question_en: 'Where did Rashid go?', correct_ar: 'ذَهَبَ إِلَى الْمَدْرَسَةِ', correct_en: 'He went to the madrasa.', options_ar: ['ذَهَبَ إِلَى الْمَدْرَسَةِ', 'ذَهَبَ إِلَى السُّوقِ', 'ذَهَبَ إِلَى الْمَلْعَبِ'], questionType: 'general' },
                    { emoji: '📖', question_ar: 'مَاذَا فَعَلَ رَاشِدٌ فِي الْمَدْرَسَةِ ؟', question_en: 'What did Rashid do in the madrasa?', correct_ar: 'قَرَأَ وَكَتَبَ', correct_en: 'He read and wrote.', options_ar: ['قَرَأَ وَكَتَبَ', 'لَعِبَ وَجَلَسَ', 'رَجَعَ وَخَرَجَ'], questionType: 'general' },
                    { emoji: '⚽', question_ar: 'أَيْنَ لَعِبَ رَاشِدٌ ؟', question_en: 'Where did Rashid play?', correct_ar: 'لَعِبَ فِي مَلْعَبِ الْقَرْيَةِ', correct_en: 'He played in the village playground.', options_ar: ['لَعِبَ فِي مَلْعَبِ الْقَرْيَةِ', 'لَعِبَ فِي الْحَدِيقَةِ', 'لَعِبَ فِي الطَّرِيقِ'], questionType: 'general' },
                    { emoji: '🕐', question_ar: 'مَتَى يَرْجِعُ خَالِدٌ إِلَى الْبَيْتِ ؟', question_en: 'When does Khalid return home?', correct_ar: 'يَرْجِعُ قَبْلَ الْعَصْرِ', correct_en: 'He returns before Asr.', options_ar: ['يَرْجِعُ قَبْلَ الْعَصْرِ', 'يَرْجِعُ بَعْدَ الْعَصْرِ', 'يَرْجِعُ صَبَاحًا'], questionType: 'general' },
                    { emoji: '🌙', question_ar: 'مَاذَا تَفْعَلُ فَاطِمَةُ بَعْدَ الْمَغْرِبِ ؟', question_en: 'What does Fatima do after Maghrib?', correct_ar: 'تَجْلِسُ فِي غُرْفَتِهَا وَتَقْرَأُ وَتَكْتُبُ', correct_en: 'She sits in her room and reads and writes.', options_ar: ['تَجْلِسُ فِي غُرْفَتِهَا وَتَقْرَأُ وَتَكْتُبُ', 'تَذْهَبُ إِلَى الْحَدِيقَةِ', 'تَلْعَبُ مَعَ زَيْنَبَ'], questionType: 'general' },
                ],
            },
        },
        {
            id: '2-1-9',
            type: 'assessment',
            titleEn: 'Exercise - Fill in the Preposition',
            titleAr: 'تَمْرِين - اِخْتَرِ الحَرْفَ المُنَاسِب',
            payload: {
                instruction: 'Choose the correct preposition to complete each sentence.',
                questions: [
                    { emoji: '🏫', question_ar: 'ذَهَبَ التِّلْمِيذُ ___ الْمُعَلِّمِ', question_en: 'The student went ___ the teacher.', correct_ar: 'إِلَى', correct_en: 'to', options_ar: ['إِلَى', 'عِنْدَ', 'مِنْ'] },
                    { emoji: '⚽', question_ar: 'أَنَا أَذْهَبُ ___ الْمَلْعَبِ', question_en: 'I go ___ the playground.', correct_ar: 'إِلَى', correct_en: 'to', options_ar: ['إِلَى', 'فِي', 'مَعَ'] },
                    { emoji: '🪑', question_ar: 'اِجْلِسْ ___ الْأَرْضِ', question_en: 'Sit ___ the ground.', correct_ar: 'عَلَى', correct_en: 'on', options_ar: ['عَلَى', 'فِي', 'مِنْ'] },
                    { emoji: '🕌', question_ar: 'أَنْتَ جَلَسْتَ ___ الْمَسْجِدِ', question_en: 'You sat ___ the mosque.', correct_ar: 'فِي', correct_en: 'in', options_ar: ['فِي', 'عَلَى', 'إِلَى'] },
                    { emoji: '🖊️', question_ar: 'يَكْتُبُ الْمُعَلِّمُ ___ السَّبُّوْرَةِ', question_en: 'The teacher writes ___ the board.', correct_ar: 'عَلَى', correct_en: 'on', options_ar: ['عَلَى', 'فِي', 'بِـ'] },
                ],
            },
        },
        {
            id: '2-1-10',
            type: 'tarkeeb',
            titleEn: 'Sentence Structure (Tarkeeb)',
            titleAr: 'تَرْكِيب الجُمْلَة',
            payload: {
                tarkeeb: [
                    {
                        sentence: 'ذَهَبَ رَاشِدٌ',
                        sentenceEn: 'Rashid went.',
                        type: 'complete',
                        tree: [
                            { label: 'فِعْل', labelEn: 'Verb', text: 'ذَهَبَ' },
                            { label: 'فَاعِل', labelEn: 'Subject', text: 'رَاشِدٌ' },
                        ],
                    },
                    {
                        sentence: 'يَذْهَبُ أَبُو رَاشِدٍ',
                        sentenceEn: "Rashid's father goes.",
                        type: 'complete',
                        tree: [
                            { label: 'فِعْل', labelEn: 'Verb', text: 'يَذْهَبُ' },
                            {
                                label: 'فَاعِل', labelEn: 'Subject', text: 'أَبُو رَاشِدٍ',
                                children: [
                                    { label: 'مُضَاف', labelEn: 'Possessed', text: 'أَبُو' },
                                    { label: 'مُضَاف إِلَيْهِ', labelEn: 'Possessor', text: 'رَاشِدٍ' },
                                ],
                            },
                        ],
                    },
                    {
                        sentence: 'رَاشِدٌ كَتَبَ',
                        sentenceEn: 'Rashid wrote.',
                        type: 'complete',
                        tree: [
                            { label: 'مُبْتَدَأ', labelEn: 'Subject', text: 'رَاشِدٌ' },
                            {
                                label: 'خَبَر', labelEn: 'Predicate', text: 'كَتَبَ',
                                children: [
                                    { label: 'فِعْل', labelEn: 'Verb', text: 'كَتَبَ' },
                                    { label: 'فَاعِل', labelEn: 'Doer', text: '(هُوَ)' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    ],
};

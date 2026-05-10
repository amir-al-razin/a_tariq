import type { LessonData } from '../../curriculum';

export const lesson04: LessonData = {
    darsNumber: 4,
    chunks: [
        {
            id: '2-4-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary — Lesson 4',
            titleAr: 'الْمُفْرَدَات',
            payload: {
                words: [
                    { id: 1, ar: 'قَدْ', romanized: 'qad', en: 'Indeed / Already', emoji: '✅' },
                    { id: 2, ar: 'خَمْرٌ', romanized: 'khamr', en: 'Wine', emoji: '🍷' },
                    { id: 3, ar: 'يَوْمٌ', romanized: 'yawm', en: 'Day', emoji: '📅' },
                    { id: 4, ar: 'كُلَّ يَوْمٍ', romanized: 'kulla yawm', en: 'Every day', emoji: '🔄' },
                    { id: 5, ar: 'بَعُوضَةٌ', romanized: "ba'ūḍah", en: 'Mosquito', emoji: '🦟' },
                    { id: 6, ar: 'ذُبَابَةٌ', romanized: 'dhubābah', en: 'Fly (insect)', emoji: '🪰' },
                    { id: 7, ar: 'كَلِمَةٌ', romanized: 'kalimah', en: 'Word', emoji: '💬' },
                    { id: 8, ar: 'جُمْلَةٌ', romanized: 'jumlah', en: 'Sentence', emoji: '📝' },
                    { id: 9, ar: 'عَالِمٌ', romanized: "'ālim", en: 'Scholar / Knowledgeable', emoji: '📚' },
                    { id: 10, ar: 'حُبٌّ', romanized: 'ḥubb', en: 'Love', emoji: '❤️' },
                    { id: 11, ar: 'قَوْلٌ', romanized: 'qawl', en: 'Saying / Speech', emoji: '🗣️' },
                    { id: 12, ar: 'عَزِيزٌ', romanized: "'azīz", en: 'Dear / Respected', emoji: '🌟' },
                    { id: 13, ar: 'لِمَ', romanized: 'lima', en: 'Why? (short form)', emoji: '❓' },
                ],
            },
        },
        {
            id: '2-4-2',
            type: 'verb_table',
            titleEn: 'Verb: قَالَ — Present & Imperative',
            titleAr: 'فِعْل قَالَ — المُضَارِع وَالأَمْر',
            payload: {
                verbTense: 'present',
                instruction: 'The hollow verb قَالَ (to say) — present tense and imperative forms',
                verbTable: [
                    { root: 'يَقُولُ', meaning: 'to say', he: 'يَقُولُ', she: 'تَقُولُ', youM: 'تَقُولُ', youF: 'تَقُولِينَ', i: 'أَقُولُ' },
                ],
            },
        },
        {
            id: '2-4-3',
            type: 'paragraph',
            titleEn: 'Reading — Transitive Verbs in Context',
            titleAr: 'قِرَاءَة — الأَفْعَال المُتَعَدِّيَة',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'قَالَ رَاشِدٌ الصَّغِيرُ: أَنَا أَفْهَمُ كَلَامَ اللهِ لِأَنِّي أَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ.',
                            'قَالَتْ فَاطِمَةُ الذَّكِيَّةُ: فَهِمْتُ دَرْسَ الْيَوْمِ جَيِّدًا.',
                        ],
                        translationEn: 'Little Rashid said: I understand the speech of Allah because I know the Arabic language. Clever Fatima said: I understood today\'s lesson well.',
                    },
                    {
                        lines: [
                            'خَلَعَ رَاشِدٌ اللِّبَاسَ الْمَنْزِلِيَّ وَلَبِسَ لِبَاسَ الْمَدْرَسَةِ، وَذَهَبَ إِلَى الْمَدْرَسَةِ وَحَضَرَ فِي الْفَصْلِ وَجَلَسَ أَمَامَ الْمُعَلِّمِ.',
                            'سَأَلَ الْمُعَلِّمُ رَاشِدًا: هَلْ حَفِظْتَ دَرْسَكَ يَا رَاشِدُ؟',
                            'قَالَ رَاشِدٌ: نَعَمْ .. حَفِظْتُ دَرْسِي.',
                            'قَالَ الْمُعَلِّمُ: اِفْتَحْ كِتَابَكَ وَاقْرَأْ دَرْسَكَ، أَنَا أَسْمَعُ دَرْسَكَ.',
                        ],
                        translationEn: 'Rashid took off his home clothes and put on his school clothes, went to the madrasa, attended the classroom, and sat in front of the teacher. The teacher asked Rashid: Have you memorized your lesson, O Rashid? Rashid said: Yes, I have memorized my lesson. The teacher said: Open your book and read your lesson, I am listening to your lesson.',
                    },
                    {
                        lines: [
                            'فَتَحَ رَاشِدٌ كِتَابَهُ وَقَرَأَ الدَّرْسَ، سَمِعَ الْمُعَلِّمُ دَرْسَ رَاشِدٍ وَقَالَ: قَدْ حَفِظْتَ دَرْسَكَ جَيِّدًا.',
                            'أَنْتَ تَحْفَظُ دَرْسَكَ جَيِّدًا كُلَّ يَوْمٍ. أَنْتَ طَالِبٌ مُجْتَهِدٌ.',
                        ],
                        translationEn: 'Rashid opened his book and read the lesson. The teacher listened to Rashid\'s lesson and said: You have indeed memorized your lesson well. You memorize your lesson well every day. You are a diligent student.',
                    },
                    {
                        lines: [
                            'قَالَ الْمُعَلِّمُ: أَيُّهَا الطَّالِبُ الْجَدِيدُ! اِمْسَحِ السَّبُّورَةَ بِالْمِسَّاحَةِ وَاكْتُبْ عَلَى السَّبُّورَةِ جُمْلَةً!',
                            'ذَهَبَ الطَّالِبُ الْجَدِيدُ إِلَى السَّبُّورَةِ وَمَسَحَ السَّبُّورَةَ بِالْمِسَّاحَةِ وَكَتَبَ عَلَيْهَا جُمْلَةً.',
                            'هُوَ كَتَبَ: اللهُ وَاحِدٌ.',
                            'يَشْرَبُ الْمُسْلِمُ مَاءَ زَمْزَمَ فِي الْحَجِّ وَالْعُمْرَةِ.',
                            'يَنْصُرُ اللهُ دِينَهُ بِذُبَابَةٍ وَبَعُوضَةٍ.',
                        ],
                        translationEn: 'The teacher said: O new student! Wipe the board with the eraser and write a sentence on the board! The new student went to the board, wiped it with the eraser, and wrote a sentence on it. He wrote: Allah is One. The Muslim drinks Zamzam water during Hajj and Umrah. Allah supports His religion with a fly and a mosquito.',
                    },
                    {
                        lines: [
                            'تَخْلَعُ فَاطِمَةُ الْآنَ لِبَاسَ الْمَدْرَسَةِ وَتَلْبَسُ لِبَاسَ الْمَنْزِلِ، ثُمَّ تَذْهَبُ إِلَى حَدِيقَتِهَا وَتَلْعَبُ مَعَ زَيْنَبَ.',
                            'تَجْلِسُ فَاطِمَةُ بَعْدَ الْمَغْرِبِ فِي غُرْفَتِهَا، وَتَفْتَحُ الْكِتَابَ وَتَقْرَأُ الدَّرْسَ، هِيَ تَحْفَظُ دَرْسَهَا جَيِّدًا.',
                        ],
                        translationEn: 'Fatima is now taking off her school clothes and putting on her home clothes, then going to her garden and playing with Zainab. Fatima sits in her room after Maghrib, opens the book and reads the lesson — she memorizes her lesson well.',
                    },
                    {
                        lines: [
                            'سَأَلَ رَاشِدٌ فَاطِمَةَ: يَا فَاطِمَةُ! هَلْ تَعْرِفِينَ اللُّغَةَ الْعَرَبِيَّةَ وَتَفْهَمِينَ كِتَابَ اللهِ؟',
                            'قَالَتْ فَاطِمَةُ: نَعَمْ .. أَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ وَأَفْهَمُ كِتَابَ اللهِ.',
                            'لَا يَعْرِفُ الْمُشْرِكُ رَبَّهُ. يَشْرَبُ الْمُسْلِمُ الْعَسَلَ وَلَا يَشْرَبُ الْخَمْرَ، لِأَنَّهَا حَرَامٌ.',
                        ],
                        translationEn: 'Rashid asked Fatima: O Fatima! Do you know the Arabic language and understand the Book of Allah? Fatima said: Yes, I know the Arabic language and I understand the Book of Allah. The polytheist does not know his Lord. The Muslim drinks honey and does not drink wine, because it is forbidden.',
                    },
                ],
            },
        },
        {
            id: '2-4-4',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                questions: [
                    { emoji: '📖', question_ar: 'هَلْ نَصَرَ رَاشِدٌ شَاهِدًا؟', question_en: 'Did Rashid help Shahid?', correct_ar: 'نَعَمْ .. نَصَرَ رَاشِدٌ شَاهِدًا', correct_en: 'Yes, Rashid helped Shahid.', options_ar: ['نَعَمْ .. نَصَرَ رَاشِدٌ شَاهِدًا', 'لَا .. مَا نَصَرَهُ', 'نَصَرَ خَالِدًا'], questionType: 'hal' },
                    { emoji: '🗣️', question_ar: 'مَنْ نَصَرَ رَاشِدٌ؟', question_en: 'Whom did Rashid help?', correct_ar: 'نَصَرَ شَاهِدًا', correct_en: 'He helped Shahid.', options_ar: ['نَصَرَ شَاهِدًا', 'نَصَرَ خَالِدًا', 'نَصَرَ مَاجِدًا'], questionType: 'general' },
                    { emoji: '📚', question_ar: 'هَلْ يَعْرِفُ خَالِدٌ بِلَالًا؟', question_en: 'Does Khalid know Bilal?', correct_ar: 'لَا .. لَا يَعْرِفُ خَالِدٌ بِلَالًا', correct_en: 'No, Khalid does not know Bilal.', options_ar: ['لَا .. لَا يَعْرِفُ خَالِدٌ بِلَالًا', 'نَعَمْ .. يَعْرِفُهُ', 'نَعَمْ .. يَعْرِفُهُ جَيِّدًا'], questionType: 'hal' },
                    { emoji: '🖊️', question_ar: 'بِمَ مَسَحَ رَاشِدٌ السَّبُّورَةَ؟', question_en: 'With what did Rashid wipe the board?', correct_ar: 'مَسَحَ السَّبُّورَةَ بِالْمِسَّاحَةِ', correct_en: 'He wiped the board with the eraser.', options_ar: ['مَسَحَ السَّبُّورَةَ بِالْمِسَّاحَةِ', 'مَسَحَهَا بِالْمِنْدِيلِ', 'مَسَحَهَا بِيَدِهِ'], questionType: 'general' },
                    { emoji: '🍯', question_ar: 'مَاذَا يَشْرَبُ الْمُسْلِمُ؟', question_en: 'What does the Muslim drink?', correct_ar: 'يَشْرَبُ الْعَسَلَ وَلَا يَشْرَبُ الْخَمْرَ', correct_en: 'He drinks honey and does not drink wine.', options_ar: ['يَشْرَبُ الْعَسَلَ وَلَا يَشْرَبُ الْخَمْرَ', 'يَشْرَبُ الْخَمْرَ', 'يَشْرَبُ الْمَاءَ فَقَطْ'], questionType: 'general' },
                    { emoji: '🌙', question_ar: 'مَاذَا تَفْعَلُ فَاطِمَةُ بَعْدَ الْمَغْرِبِ؟', question_en: 'What does Fatima do after Maghrib?', correct_ar: 'تَجْلِسُ فِي غُرْفَتِهَا وَتَقْرَأُ الدَّرْسَ', correct_en: 'She sits in her room and reads the lesson.', options_ar: ['تَجْلِسُ فِي غُرْفَتِهَا وَتَقْرَأُ الدَّرْسَ', 'تَلْعَبُ مَعَ زَيْنَبَ', 'تَذْهَبُ إِلَى الْمَدْرَسَةِ'], questionType: 'general' },
                ],
            },
        },
        {
            id: '2-4-5',
            type: 'assessment',
            titleEn: 'Exercise — Fill in the Object',
            titleAr: 'تَمْرِين — اِخْتَرِ الْمَفْعُولَ الصَّحِيح',
            payload: {
                instruction: 'Choose the correct object (accusative form) to complete each sentence.',
                questions: [
                    { emoji: '👤', question_ar: 'يَعْرِفُ خَالِدٌ ___', question_en: 'Khalid knows ___.', correct_ar: 'بِلَالًا', correct_en: 'Bilal', options_ar: ['بِلَالًا', 'بِلَالٌ', 'بِلَالٍ'] },
                    { emoji: '👧', question_ar: 'نَصَرَتْ فَاطِمَةُ ___', question_en: 'Fatima helped ___.', correct_ar: 'عَائِشَةَ', correct_en: 'Aisha', options_ar: ['عَائِشَةَ', 'عَائِشَةُ', 'عَائِشَةٍ'] },
                    { emoji: '📖', question_ar: 'يَقْرَأُ بِلَالٌ ___ وَأَنَا أَسْمَعُ ___', question_en: 'Bilal reads a ___ and I listen to the ___.', correct_ar: 'قِصَّةً', correct_en: 'story', options_ar: ['قِصَّةً', 'قِصَّةٌ', 'قِصَّةٍ'] },
                    { emoji: '💪', question_ar: 'أَنْتَ نَصَرْتَ ___', question_en: 'You helped ___.', correct_ar: 'رَجُلًا ضَعِيفًا', correct_en: 'a weak man', options_ar: ['رَجُلًا ضَعِيفًا', 'رَجُلٌ ضَعِيفٌ', 'رَجُلٍ ضَعِيفٍ'] },
                ],
            },
        },
        {
            id: '2-4-6',
            type: 'assessment',
            titleEn: 'Exercise — Nominative to Accusative',
            titleAr: 'تَمْرِين — تَحْوِيل الرَّفْع إِلَى النَّصْب',
            payload: {
                instruction: "The word in brackets is nominative. Choose its correct accusative (maf\'ul bihi) form.",
                questions: [
                    { emoji: '🤲', question_ar: 'تَغْسِلُ فَاطِمَةُ ___ قَبْلَ الْأَكْلِ (يَدُهَا)', question_en: 'Fatima washes ___ before eating.', correct_ar: 'يَدَهَا', correct_en: 'her hand', options_ar: ['يَدَهَا', 'يَدُهَا', 'يَدِهَا'] },
                    { emoji: '🖊️', question_ar: 'مَسَحَ رَاشِدٌ ___ بِالْمِسَّاحَةِ (السَّبُّورَةُ)', question_en: 'Rashid wiped ___ with the eraser.', correct_ar: 'السَّبُّورَةَ', correct_en: 'the board', options_ar: ['السَّبُّورَةَ', 'السَّبُّورَةُ', 'السَّبُّورَةِ'] },
                    { emoji: '👗', question_ar: 'لَبِسَتْ أُخْتُ مَاجِدٍ ___ (لِبَاسٌ جَمِيلٌ)', question_en: "Majid\'s sister wore ___.", correct_ar: 'لِبَاسًا جَمِيلًا', correct_en: 'beautiful clothes', options_ar: ['لِبَاسًا جَمِيلًا', 'لِبَاسٌ جَمِيلٌ', 'لِبَاسٍ جَمِيلٍ'] },
                ],
            },
        },
        {
            id: '2-4-7',
            type: 'assessment',
            titleEn: 'Exercise — Answer Particles (نَعَمْ / بَلَى)',
            titleAr: 'تَمْرِين — حُرُوفُ الجَوَاب',
            payload: {
                instruction: 'Choose the correct answer particle.',
                questions: [
                    { emoji: '📖', question_ar: 'هَلْ تَفْهَمُ كَلَامَ اللهِ؟', question_en: 'Do you understand the speech of Allah?', correct_ar: 'نَعَمْ .. أَفْهَمُ كَلَامَ اللهِ', correct_en: 'Yes, I understand the speech of Allah.', options_ar: ['نَعَمْ .. أَفْهَمُ كَلَامَ اللهِ', 'بَلَى .. أَفْهَمُهُ', 'لَا .. مَا أَفْهَمُهُ'] },
                    { emoji: '❓', question_ar: 'أَلَا تَفْهَمُ كَلَامَ اللهِ؟', question_en: 'Do you not understand the speech of Allah?', correct_ar: 'بَلَى .. أَفْهَمُهُ', correct_en: 'On the contrary, I do understand it.', options_ar: ['بَلَى .. أَفْهَمُهُ', 'نَعَمْ .. لَا أَفْهَمُهُ', 'لَا .. مَا أَفْهَمُهُ'] },
                ],
            },
        },
    ],
};

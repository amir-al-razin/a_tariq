import type { LessonData } from '../../curriculum';

export const lesson02: LessonData = {
    darsNumber: 2,
    chunks: [
        {
            id: '2-1-2-1',
            type: 'vocabulary',
            titleEn: 'New Vocabulary',
            titleAr: 'مُفْرَدَات جَدِيدَة',
            payload: {
                words: [
                    { id: 1, ar: 'يَمِينٌ', romanized: 'yamīnun', en: 'Right hand / right side', emoji: '👉' },
                    { id: 2, ar: 'شِمَالٌ', romanized: 'shimālun', en: 'Left hand / left side', emoji: '👈' },
                    { id: 3, ar: 'نَوْمٌ', romanized: 'nawmun', en: 'Sleep', emoji: '😴' },
                    { id: 4, ar: 'رَدِيءٌ', romanized: "radī'un", en: 'Bad / inferior / poor quality', emoji: '👎' },
                    { id: 5, ar: 'ضَوْءٌ', romanized: "ḍaw'un", en: 'Light', emoji: '💡' },
                    { id: 6, ar: 'وَرَقَةٌ', romanized: 'waraqatun', en: 'Leaf / page / paper', emoji: '📄' },
                ],
            },
        },
        {
            id: '2-1-2-2',
            type: 'grammar_rule',
            titleEn: 'Negation: مَا (Past) and لَا (Present)',
            titleAr: 'النَّفْي: مَا وَلَا',
            payload: {
                rules: [
                    {
                        label: 'Negative Past — مَا + past verb',
                        arabic: 'مَا فَعَلَ',
                        romanized: 'mā fa'ala',
                        meaning: 'He did not do',
                        examples: [
                            { ar: 'مَا ذَهَبَ', en: 'He did not go.' },
                            { ar: 'مَا خَرَجَتْ', en: 'She did not exit.' },
                            { ar: 'مَا قَرَأْتُ', en: 'I did not read.' },
                        ],
                    },
                    {
                        label: 'Negative Present/Future — لَا + present verb',
                        arabic: 'لَا يَفْعَلُ',
                        romanized: 'lā yaf'alu',
                        meaning: 'He does not do / will not do',
                        examples: [
                            { ar: 'لَا يَذْهَبُ', en: 'He does not go.' },
                            { ar: 'لَا تَخْرُجِينَ', en: 'You (f) do not exit.' },
                            { ar: 'لَا أَرْجِعُ', en: 'I will not return.' },
                        ],
                    },
                    {
                        label: 'Answer particles — نَعَمْ / لَا / بَلَى',
                        arabic: 'نَعَمْ — لَا — بَلَى',
                        romanized: "na'am — lā — balā",
                        meaning: 'Yes — No — Yes (contradicting a negative question)',
                        examples: [
                            { ar: 'هَلْ ذَهَبْتَ ؟ — نَعَمْ / لَا', en: 'Did you go? — Yes / No.' },
                            { ar: 'أَمَا ذَهَبْتَ ؟ — نَعَمْ (مَا ذَهَبْتُ) / بَلَى (ذَهَبْتُ)', en: "Didn't you go? — Right, I didn't / Yes I did." },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-1-2-3',
            type: 'verb_table',
            titleEn: 'Negative Past — مَا + Verb',
            titleAr: 'النَّفْي بِمَا — الفِعْلُ المَاضِي',
            payload: {
                verbTense: 'past',
                instruction: 'Add مَا before each past verb to negate it.',
                verbTable: [
                    { root: 'مَا فَعَلَ', meaning: 'did not do', he: 'مَا فَعَلَ', she: 'مَا فَعَلَتْ', youM: 'مَا فَعَلْتَ', youF: 'مَا فَعَلْتِ', i: 'مَا فَعَلْتُ' },
                    { root: 'مَا خَرَجَ', meaning: 'did not exit', he: 'مَا خَرَجَ', she: 'مَا خَرَجَتْ', youM: 'مَا خَرَجْتَ', youF: 'مَا خَرَجْتِ', i: 'مَا خَرَجْتُ' },
                    { root: 'مَا ذَهَبَ', meaning: 'did not go', he: 'مَا ذَهَبَ', she: 'مَا ذَهَبَتْ', youM: 'مَا ذَهَبْتَ', youF: 'مَا ذَهَبْتِ', i: 'مَا ذَهَبْتُ' },
                    { root: 'مَا كَتَبَ', meaning: 'did not write', he: 'مَا كَتَبَ', she: 'مَا كَتَبَتْ', youM: 'مَا كَتَبْتَ', youF: 'مَا كَتَبْتِ', i: 'مَا كَتَبْتُ' },
                ],
            },
        },
        {
            id: '2-1-2-4',
            type: 'verb_table',
            titleEn: 'Negative Present — لَا + Verb',
            titleAr: 'النَّفْي بِلَا — الفِعْلُ المُضَارِع',
            payload: {
                verbTense: 'present',
                instruction: 'Add لَا before each present verb to negate it.',
                verbTable: [
                    { root: 'لَا يَفْعَلُ', meaning: 'does not do', he: 'لَا يَفْعَلُ', she: 'لَا تَفْعَلُ', youM: 'لَا تَفْعَلُ', youF: 'لَا تَفْعَلِينَ', i: 'لَا أَفْعَلُ' },
                    { root: 'لَا يَخْرُجُ', meaning: 'does not exit', he: 'لَا يَخْرُجُ', she: 'لَا تَخْرُجُ', youM: 'لَا تَخْرُجُ', youF: 'لَا تَخْرُجِينَ', i: 'لَا أَخْرُجُ' },
                    { root: 'لَا يَذْهَبُ', meaning: 'does not go', he: 'لَا يَذْهَبُ', she: 'لَا تَذْهَبُ', youM: 'لَا تَذْهَبُ', youF: 'لَا تَذْهَبِينَ', i: 'لَا أَذْهَبُ' },
                    { root: 'لَا يَكْتُبُ', meaning: 'does not write', he: 'لَا يَكْتُبُ', she: 'لَا تَكْتُبُ', youM: 'لَا تَكْتُبُ', youF: 'لَا تَكْتُبِينَ', i: 'لَا أَكْتُبُ' },
                ],
            },
        },
        {
            id: '2-1-2-5',
            type: 'paragraph',
            titleEn: 'Reading — Negation in Context',
            titleAr: 'قِرَاءَة — النَّفْي فِي السِّيَاق',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'ذَهَبَ شَاهِدٌ إِلَى الْمَدْرَسَةِ وَمَا ذَهَبَ أَخُو شَاهِدٍ.',
                            'مَا خَرَجَتْ سُعَادُ مِنْ غُرْفَتِهَا وَمَا لَعِبَتْ فِي الْحَدِيقَةِ، بَلْ قَرَأَتْ وَكَتَبَتْ.',
                            'مَا ذَهَبَتْ سُعَادُ إِلَى فِرَاشِهَا قَبْلَ الْعِشَاءِ بَلْ بَعْدَ الْعِشَاءِ.',
                        ],
                        translationEn: "Shahid went to the madrasa but Shahid's brother did not go. Su'ad did not exit her room and did not play in the garden, rather she read and wrote. Su'ad did not go to her bed before Isha, rather after Isha.",
                    },
                    {
                        lines: [
                            'لَا يَكْتُبُ الْإِنْسَانُ بِشِمَالِهِ، بَلْ يَكْتُبُ بِيَمِينِهِ.',
                            'لَا يَرْجِعُ أَحَدٌ إِلَى الدُّنْيَا بَعْدَ الْمَوْتِ.',
                            'لَا يَخْرُجُ الْمُؤْمِنُ مِنَ الْجَنَّةِ أَبَدًا وَلَا يَخْرُجُ الْمُشْرِكُ مِنَ النَّارِ أَبَدًا.',
                        ],
                        translationEn: 'A person does not write with his left hand, rather he writes with his right. No one returns to this world after death. The believer will never exit Paradise and the polytheist will never exit the Fire.',
                    },
                ],
            },
        },
        {
            id: '2-1-2-6',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                instruction: 'Choose the correct answer based on the reading passage.',
                questions: [
                    { emoji: '🏫', question_ar: 'هَلْ ذَهَبَ أَخُو شَاهِدٍ إِلَى الْمَدْرَسَةِ ؟', question_en: "Did Shahid's brother go to the madrasa?", correct_ar: 'لَا .. مَا ذَهَبَ', correct_en: 'No, he did not go.', options_ar: ['لَا .. مَا ذَهَبَ', 'نَعَمْ .. ذَهَبَ', 'بَلَى .. ذَهَبَ'], questionType: 'hal' },
                    { emoji: '📖', question_ar: 'مَاذَا فَعَلَتْ سُعَادُ ؟', question_en: 'What did Su\'ad do?', correct_ar: 'قَرَأَتْ وَكَتَبَتْ', correct_en: 'She read and wrote.', options_ar: ['قَرَأَتْ وَكَتَبَتْ', 'لَعِبَتْ فِي الْحَدِيقَةِ', 'ذَهَبَتْ إِلَى الْمَدْرَسَةِ'], questionType: 'general' },
                    { emoji: '🌙', question_ar: 'مَتَى ذَهَبَتْ سُعَادُ إِلَى فِرَاشِهَا ؟', question_en: "When did Su'ad go to her bed?", correct_ar: 'ذَهَبَتْ بَعْدَ الْعِشَاءِ', correct_en: 'She went after Isha.', options_ar: ['ذَهَبَتْ بَعْدَ الْعِشَاءِ', 'ذَهَبَتْ قَبْلَ الْعِشَاءِ', 'ذَهَبَتْ صَبَاحًا'], questionType: 'general' },
                    { emoji: '✍️', question_ar: 'أَبِشِمَالِهِ يَكْتُبُ الْإِنْسَانُ أَمْ بِيَمِينِهِ ؟', question_en: 'Does a person write with his left or right hand?', correct_ar: 'يَكْتُبُ بِيَمِينِهِ', correct_en: 'He writes with his right hand.', options_ar: ['يَكْتُبُ بِيَمِينِهِ', 'يَكْتُبُ بِشِمَالِهِ', 'يَكْتُبُ بِكِلَيْهِمَا'], questionType: 'a_am' },
                ],
            },
        },
        {
            id: '2-1-2-7',
            type: 'assessment',
            titleEn: 'Exercise — Negate the Verb',
            titleAr: 'تَمْرِين — اِنْفِ الفِعْل',
            payload: {
                instruction: 'Choose the correct negation for each sentence.',
                questions: [
                    { emoji: '🏃', question_ar: 'خَرَجَ رَاشِدٌ مِنَ الْبَيْتِ (نَفْيٌ)', question_en: 'Rashid exited the house. (Negate it)', correct_ar: 'مَا خَرَجَ رَاشِدٌ مِنَ الْبَيْتِ', correct_en: 'Rashid did not exit the house.', options_ar: ['مَا خَرَجَ رَاشِدٌ مِنَ الْبَيْتِ', 'لَا يَخْرُجُ رَاشِدٌ مِنَ الْبَيْتِ', 'لَمْ يَخْرُجْ رَاشِدٌ'] },
                    { emoji: '📚', question_ar: 'يَقْرَأُ خَالِدٌ كُلَّ يَوْمٍ (نَفْيٌ)', question_en: 'Khalid reads every day. (Negate it)', correct_ar: 'لَا يَقْرَأُ خَالِدٌ كُلَّ يَوْمٍ', correct_en: 'Khalid does not read every day.', options_ar: ['لَا يَقْرَأُ خَالِدٌ كُلَّ يَوْمٍ', 'مَا قَرَأَ خَالِدٌ كُلَّ يَوْمٍ', 'لَا قَرَأَ خَالِدٌ'] },
                    { emoji: '🌿', question_ar: 'أَمَا ذَهَبْتَ إِلَى الْمَدْرَسَةِ ؟ (الجَوَاب: بَلَى)', question_en: "Didn't you go to the madrasa? (Answer: Yes I did)", correct_ar: 'بَلَى .. ذَهَبْتُ', correct_en: 'Yes I did go.', options_ar: ['بَلَى .. ذَهَبْتُ', 'نَعَمْ .. مَا ذَهَبْتُ', 'لَا .. مَا ذَهَبْتُ'] },
                ],
            },
        },
    ],
};

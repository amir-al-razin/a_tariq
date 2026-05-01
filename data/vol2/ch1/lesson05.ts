import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
    darsNumber: 5,
    chunks: [
        {
            id: '2-5-1',
            type: 'vocabulary',
            titleEn: 'Attached Object Pronouns (ضَمَائِر مُتَّصِلَة)',
            titleAr: 'ضَمَائِر مُتَّصِلَة',
            payload: {
                words: [
                    { id: 1, ar: 'ـكَ', romanized: 'ka', en: 'You / to you (m)', emoji: '👦' },
                    { id: 2, ar: 'ـكِ', romanized: 'ki', en: 'You / to you (f)', emoji: '👧' },
                    { id: 3, ar: 'ـنِيْ', romanized: 'nī', en: 'Me / to me', emoji: '🙋' },
                    { id: 4, ar: 'ـكُمْ', romanized: 'kum', en: 'You all (m pl)', emoji: '👨‍👨‍👦' },
                    { id: 5, ar: 'ـكُنَّ', romanized: 'kunna', en: 'You all (f pl)', emoji: '👩‍👩‍👧' },
                    { id: 6, ar: 'ـهُمَا', romanized: 'humā', en: 'Them both (dual)', emoji: '👫' },
                    { id: 7, ar: 'ـكُمَا', romanized: 'kumā', en: 'You two (dual)', emoji: '👬' },
                ],
            },
        },
        {
            id: '2-5-2',
            type: 'vocabulary',
            titleEn: 'General Vocabulary',
            titleAr: 'مُفْرَدَات عَامَّة',
            payload: {
                words: [
                    { id: 1, ar: 'الْخَلْقُ', romanized: 'al-khalq', en: 'Creation / to create', emoji: '🌍' },
                    { id: 2, ar: 'النَّظَرُ', romanized: 'an-naẓar', en: 'Looking / to look', emoji: '👁️' },
                    { id: 3, ar: 'السُّجُودُ', romanized: 'as-sujūd', en: 'Prostration / to prostrate', emoji: '🕌' },
                    { id: 4, ar: 'الشَّمْسُ', romanized: 'ash-shams', en: 'The sun', emoji: '☀️' },
                    { id: 5, ar: 'الْقَمَرُ', romanized: 'al-qamar', en: 'The moon', emoji: '🌙' },
                    { id: 6, ar: 'حَجَرٌ', romanized: 'ḥajar', en: 'Stone', emoji: '🪨' },
                    { id: 7, ar: 'قَدْ', romanized: 'qad', en: 'Certainly / already', emoji: '✅' },
                    { id: 8, ar: 'فَـ', romanized: 'fa', en: 'So / then / thus', emoji: '➡️' },
                ],
            },
        },
        {
            id: '2-5-3',
            type: 'grammar_rule',
            titleEn: 'Future with سَـ (will)',
            titleAr: 'الْمُسْتَقْبَل بِـ سَـ',
            payload: {
                rules: [
                    {
                        label: 'سَـ + مُضَارِع',
                        arabic: 'سَـ + الْفِعْل الْمُضَارِع',
                        romanized: "sa + muḍāri\'",
                        meaning: "Adding سَـ to the present tense verb indicates definite future: "will do'',
                        examples: [
                            { ar: 'سَيَقْرَأُ', en: 'He will read' },
                            { ar: 'سَيَكْتُبُ', en: 'He will write' },
                            { ar: 'سَيَنْزِلُ', en: 'He will descend' },
                            { ar: 'سَيَسْأَلُ', en: 'He will ask' },
                            { ar: 'سَيَفْهَمُ', en: 'He will understand' },
                            { ar: 'سَيَنْجَحُ', en: 'He will succeed' },
                            { ar: 'سَيَشْرَبُ', en: 'He will drink' },
                            { ar: 'سَيَفْعَلُ', en: 'He will do' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-5-4',
            type: 'paragraph',
            titleEn: 'Reading — Attached Pronouns in Context',
            titleAr: 'قِرَاءَة — الضَّمَائِر الْمُتَّصِلَة',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'نَصَرَنَا اللهُ. يَنْصُرُكُمُ اللهُ. اللَّهُمَّ احْفَظْنِي. عَرَفْتُهُمُ الْيَوْمَ.',
                            'سَأَلَ رَاشِدٌ تِلْمِيذًا جَدِيدًا: هَلْ تَعْرِفُنِي يَا وَلَدُ؟',
                            'قَالَ التِّلْمِيذُ الْجَدِيدُ: نَعَمْ .. أَعْرِفُكَ وَأَعْرِفُ أَخَاكَ.',
                            'ذَهَبَ الطَّالِبُ الْجَدِيدُ إِلَى السَّبُّورَةِ وَمَسَحَهَا بِالْمِسَّاحَةِ وَكَتَبَ عَلَيْهَا جُمْلَةً.',
                        ],
                        translationEn: 'Allah helped us. Allah will help you all. O Allah, protect me. I recognized them today. Rashid asked a new student: Do you know me, O boy? The new student said: Yes, I know you and I know your brother. The new student went to the board, wiped it with the eraser, and wrote a sentence on it.',
                    },
                    {
                        lines: [
                            'قَالَتْ فَاطِمَةُ لِزَيْنَبَ: يَا زَيْنَبُ! أَنَا أَفْهَمُ الْقُرْآنَ وَالْحَدِيثَ وَأَنْتِ لَا تَفْهَمِينَهُمَا، لِأَنِّي أَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ وَأَنْتِ لَا تَعْرِفِينَهَا.',
                            'عَلَى الْبَابِ قُفْلٌ. اِفْتَحْهُ بِهَذَا الْمِفْتَاحِ.',
                            'هَذَا لَبَنٌ بَارِدٌ، لَا تَشْرَبِيهِ يَا لَيْلَى.',
                            'هَذِهِ فَاكِهَةٌ لَذِيذَةٌ، كُلْهَا يَا بِلَالُ.',
                        ],
                        translationEn: 'Fatima said to Zainab: O Zainab! I understand the Quran and Hadith but you do not understand them both, because I know the Arabic language and you do not know it. There is a lock on the door. Open it with this key. This is cold milk, do not drink it, O Layla. This is delicious fruit, eat it all, O Bilal.',
                    },
                ],
            },
        },
        {
            id: '2-5-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الفَهْم',
            payload: {
                questions: [
                    { emoji: '🙏', question_ar: 'مَنْ نَصَرَكُمْ فِي مُصِيبَتِكُمْ؟', question_en: 'Who helped you in your hardship?', correct_ar: 'نَصَرَنَا اللهُ', correct_en: 'Allah helped us.', options_ar: ['نَصَرَنَا اللهُ', 'نَصَرَنَا رَاشِدٌ', 'نَصَرَنَا الْمُعَلِّمُ'], questionType: 'general' },
                    { emoji: '🌍', question_ar: 'مَنْ خَلَقَكَ أَيُّهَا الْمُسْلِمُ؟', question_en: 'Who created you, O Muslim?', correct_ar: 'خَلَقَنِيَ اللهُ', correct_en: 'Allah created me.', options_ar: ['خَلَقَنِيَ اللهُ', 'خَلَقَنِي أَبِي', 'لَا أَعْرِفُ'], questionType: 'general' },
                    { emoji: '☀️', question_ar: 'مَنْ خَلَقَ الشَّمْسَ؟', question_en: 'Who created the sun?', correct_ar: 'خَلَقَهَا اللهُ', correct_en: 'Allah created it.', options_ar: ['خَلَقَهَا اللهُ', 'خَلَقَهَا الْإِنْسَانُ', 'لَا أَحَدَ'], questionType: 'general' },
                    { emoji: '🌙', question_ar: 'مَنْ خَلَقَ الْقَمَرَ؟', question_en: 'Who created the moon?', correct_ar: 'خَلَقَهُ اللهُ', correct_en: 'Allah created it.', options_ar: ['خَلَقَهُ اللهُ', 'خَلَقَهُ الْإِنْسَانُ', 'خَلَقَتْهُ الشَّمْسُ'], questionType: 'general' },
                    { emoji: '🕌', question_ar: 'لِمَنْ تَسْجُدُ أَيُّهَا الْمُسْلِمُ؟', question_en: 'To whom do you prostrate, O Muslim?', correct_ar: 'أَسْجُدُ لِلهِ', correct_en: 'I prostrate to Allah.', options_ar: ['أَسْجُدُ لِلهِ', 'أَسْجُدُ لِلشَّجَرِ', 'أَسْجُدُ لِلْحَجَرِ'], questionType: 'general' },
                    { emoji: '📖', question_ar: 'هَلْ تَفْهَمُ فَاطِمَةُ الْقُرْآنَ وَالْحَدِيثَ؟', question_en: 'Does Fatima understand the Quran and Hadith?', correct_ar: 'نَعَمْ .. تَفْهَمُهُمَا', correct_en: 'Yes, she understands them both.', options_ar: ['نَعَمْ .. تَفْهَمُهُمَا', 'لَا .. لَا تَفْهَمُهُمَا', 'تَفْهَمُ الْقُرْآنَ فَقَطْ'], questionType: 'hal' },
                ],
            },
        },
    ],
};

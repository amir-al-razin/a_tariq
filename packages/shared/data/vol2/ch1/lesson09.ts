import type { LessonData } from '../../curriculum';

export const lesson09: LessonData = {
    darsNumber: 9,
    chunks: [
        {
            id: '2-9-1',
            type: 'vocabulary',
            titleEn: 'Vocabulary - Lesson 9',
            titleAr: 'الْمُفْرَدَات',
            payload: {
                words: [
                    { id: 1, ar: 'الدَّرْسُ', romanized: 'ad-dars', en: 'Studying / to study', emoji: '📖' },
                    { id: 2, ar: 'الْأَخْذُ', romanized: 'al-akhdh', en: 'Taking / to take', emoji: '✋' },
                    { id: 3, ar: 'الطَّبْخُ', romanized: 'aṭ-ṭabkh', en: 'Cooking / to cook', emoji: '🍳' },
                    { id: 4, ar: 'الْأُسْرَةُ', romanized: 'al-usrah', en: 'Family', emoji: '👨‍👩‍👧‍👦' },
                    { id: 5, ar: 'غَدَاءٌ', romanized: "ghadā'", en: 'Lunch', emoji: '🍱' },
                    { id: 6, ar: 'عَشَاءٌ', romanized: "'ashā'", en: 'Dinner', emoji: '🍽️' },
                    { id: 7, ar: 'حَمَّامٌ', romanized: 'ḥammām', en: 'Bathroom', emoji: '🚿' },
                    { id: 8, ar: 'مُذْنِبٌ', romanized: 'mudhnib', en: 'Sinner', emoji: '😔' },
                    { id: 9, ar: 'ذَنْبٌ', romanized: 'dhanb', en: 'Sin', emoji: '⚠️' },
                    { id: 10, ar: 'شَيْخٌ كَبِيرٌ', romanized: 'shaykh kabīr', en: 'Very old man', emoji: '👴' },
                ],
            },
        },
        {
            id: '2-9-2',
            type: 'grammar_rule',
            titleEn: 'لِـ - Lam of Purpose (in order to)',
            titleAr: 'لَامُ التَّعْلِيل - لِـ',
            payload: {
                rules: [
                    {
                        label: 'لِـ + مُضَارِع مَنْصُوب',
                        arabic: 'لِيَقْرَأَ / لِتَقْرَأَ / لِأَقْرَأَ',
                        romanized: "li-yaqra'a / li-taqra'a / li-aqra'a",
                        meaning: "لِـ attached to the present tense verb (with fatha ending) = 'in order to / so that'. Expresses purpose.",
                        examples: [
                            { ar: 'جَلَسَ شَاهِدٌ لِيَقْرَأَ', en: 'Shahid sat in order to read' },
                            { ar: 'جَلَسَتْ فَاطِمَةُ لِتَقْرَأَ', en: 'Fatima sat in order to read' },
                            { ar: 'أَنَا جَلَسْتُ لِأَقْرَأَ', en: 'I sat in order to read' },
                            { ar: 'خَرَجَ لِيَذْهَبَ إِلَى الْمَدْرَسَةِ', en: 'He exited in order to go to the madrasa' },
                            { ar: 'أَرْسَلَ اللهُ رَسُولَهُ لِيُخْرِجَ النَّاسَ مِنَ الظَّلَامِ', en: 'Allah sent His Messenger to bring people out of darkness' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-9-3',
            type: 'paragraph',
            titleEn: 'Reading - Purpose Clauses with لِـ',
            titleAr: 'قِرَاءَة - جُمَل الْغَرَض بِـ لِـ',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'جَلَسَ شَاهِدٌ لِيَقْرَأَ الْقُرْآنَ.',
                            'تَجْلِسُ فَاطِمَةُ لِتَقْرَأَ كِتَابًا.',
                            'شَاهِدٌ! اِجْلِسْ عَلَى الْكُرْسِيِّ لِتَقْرَأَ هَذِهِ الْجَرِيدَةَ الْعَرَبِيَّةَ.',
                            'يَا فَاطِمَةُ! اِجْلِسِي أَمَامَ الْمُعَلِّمَةِ لِتَقْرَئِي دَرْسَ الْيَوْمِ.',
                            'أَنَا أَجْلِسُ الْآنَ فِي غُرْفَتِي لِأَقْرَأَ كِتَابًا عَرَبِيًّا.',
                        ],
                        translationEn: 'Shahid sat to read the Quran. Fatima sits to read a book. Shahid! Sit on the chair to read this Arabic newspaper. O Fatima! Sit in front of the female teacher to read today\'s lesson. I am sitting now in my room to read an Arabic book.',
                    },
                    {
                        lines: [
                            'خَرَجَ رَاشِدٌ مِنَ الْبَيْتِ لِيَذْهَبَ إِلَى الْمَدْرَسَةِ.',
                            'ذَهَبَتْ فَاطِمَةُ إِلَى حَدِيقَةِ الْمَنْزِلِ لِتَلْعَبَ هُنَاكَ مَعَ زَيْنَبَ.',
                            'أَنَا أَعْبُدُ اللهَ لِأَدْخُلَ الْجَنَّةَ.',
                            'أَرْسَلَ اللهُ رَسُولَهُ لِيُخْرِجَ النَّاسَ مِنَ الظَّلَامِ إِلَى النُّورِ.',
                            'خَلَقَ اللهُ الْإِنْسَانَ لِيَعْبُدَهُ وَيُطِيعَهُ.',
                        ],
                        translationEn: 'Rashid exited the house to go to the madrasa. Fatima went to the house garden to play there with Zainab. I worship Allah to enter Paradise. Allah sent His Messenger to bring people out of darkness into light. Allah created man to worship Him and obey Him.',
                    },
                    {
                        lines: [
                            'تَدْخُلُ أُمُّ مَاجِدٍ الْمَطْبَخَ لِتَطْبُخَ لِلْأُسْرَةِ طَعَامَ الْغَدَاءِ.',
                            'تَدْرُسُ بِنْتُ مَاجِدٍ اللُّغَةَ الْعَرَبِيَّةَ لِتَفْهَمَ كِتَابَ اللهِ.',
                            'أَيُّهَا الْمُذْنِبُ! اُدْخُلِ الْمَسْجِدَ لِتَتُوبَ إِلَى اللهِ.',
                            'دَخَلَتْ فَاطِمَةُ الْحَمَّامَ لِتَغْسِلَ قَمِيصَهَا.',
                            'يَا عَمَّ رَاشِدٍ! أَبُوكَ شَيْخٌ كَبِيرٌ، فَخُذْ بِيَدِهِ لِتُنْزِلَهُ مِنَ السَّيَّارَةِ.',
                        ],
                        translationEn: "Majid's mother enters the kitchen to cook lunch for the family. Majid's daughter studies the Arabic language to understand the Book of Allah. O sinner! Enter the mosque to repent to Allah. Fatima entered the bathroom to wash her shirt. O Rashid's uncle! Your father is a very old man, so take his hand to help him out of the car.",
                    },
                ],
            },
        },
        {
            id: '2-9-4',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A - لِمَاذَا Questions',
            titleAr: 'أَسْئِلَة الفَهْم - لِمَاذَا',
            payload: {
                questions: [
                    { emoji: '🏫', question_ar: 'لِمَاذَا خَرَجَ رَاشِدٌ مِنَ الْبَيْتِ؟', question_en: 'Why did Rashid exit the house?', correct_ar: 'خَرَجَ لِيَذْهَبَ إِلَى الْمَدْرَسَةِ', correct_en: 'He exited to go to the madrasa.', options_ar: ['خَرَجَ لِيَذْهَبَ إِلَى الْمَدْرَسَةِ', 'خَرَجَ لِيَلْعَبَ', 'خَرَجَ لِيَذْهَبَ إِلَى السُّوقِ'], questionType: 'general' },
                    { emoji: '🌿', question_ar: 'لِمَ ذَهَبَتْ فَاطِمَةُ إِلَى حَدِيقَةِ الْمَنْزِلِ؟', question_en: 'Why did Fatima go to the house garden?', correct_ar: 'ذَهَبَتْ لِتَلْعَبَ هُنَاكَ مَعَ زَيْنَبَ', correct_en: 'She went to play there with Zainab.', options_ar: ['ذَهَبَتْ لِتَلْعَبَ هُنَاكَ مَعَ زَيْنَبَ', 'ذَهَبَتْ لِتَقْرَأَ', 'ذَهَبَتْ لِتَطْبُخَ'], questionType: 'general' },
                    { emoji: '🕌', question_ar: 'لِمَ أَرْسَلَ اللهُ رَسُولَهُ إِلَيْنَا؟', question_en: 'Why did Allah send His Messenger to us?', correct_ar: 'أَرْسَلَهُ لِيُخْرِجَنَا مِنَ الظَّلَامِ إِلَى النُّورِ', correct_en: 'He sent him to bring us out of darkness into light.', options_ar: ['أَرْسَلَهُ لِيُخْرِجَنَا مِنَ الظَّلَامِ إِلَى النُّورِ', 'أَرْسَلَهُ لِيُعَلِّمَنَا الْعَرَبِيَّةَ', 'أَرْسَلَهُ لِيَبِيعَ'], questionType: 'general' },
                    { emoji: '🍳', question_ar: 'لِمَاذَا تَدْخُلُ أُمُّ مَاجِدٍ الْمَطْبَخَ؟', question_en: "Why does Majid's mother enter the kitchen?", correct_ar: 'تَدْخُلُ لِتَطْبُخَ لِلْأُسْرَةِ طَعَامَ الْغَدَاءِ', correct_en: 'She enters to cook lunch for the family.', options_ar: ['تَدْخُلُ لِتَطْبُخَ لِلْأُسْرَةِ طَعَامَ الْغَدَاءِ', 'تَدْخُلُ لِتَغْسِلَ', 'تَدْخُلُ لِتَنَامَ'], questionType: 'general' },
                    { emoji: '📖', question_ar: 'لِمَ تَدْرُسُ بِنْتُ مَاجِدٍ اللُّغَةَ الْعَرَبِيَّةَ؟', question_en: "Why does Majid's daughter study Arabic?", correct_ar: 'تَدْرُسُهَا لِتَفْهَمَ كِتَابَ اللهِ', correct_en: 'She studies it to understand the Book of Allah.', options_ar: ['تَدْرُسُهَا لِتَفْهَمَ كِتَابَ اللهِ', 'تَدْرُسُهَا لِتُعَلِّمَ', 'تَدْرُسُهَا لِتَكْتُبَ'], questionType: 'general' },
                ],
            },
        },
        {
            id: '2-9-5',
            type: 'assessment',
            titleEn: 'Exercise - Add لِـ to Masdars',
            titleAr: 'تَمْرِين - أَضِفْ لِـ إِلَى الْمَصَادِر',
            payload: {
                instruction: 'Choose the correct لِـ + verb form for each masdar.',
                questions: [
                    { emoji: '✍️', question_ar: 'الْكِتَابَةُ → لِـ + هُوَ', question_en: "Writing → in order for him to write", correct_ar: 'لِيَكْتُبَ', correct_en: 'in order for him to write', options_ar: ['لِيَكْتُبَ', 'لِيَكْتُبُ', 'لِكَتَبَ'] },
                    { emoji: '🥤', question_ar: 'الشُّرْبُ → لِـ + أَنَا', question_en: "Drinking → in order for me to drink", correct_ar: 'لِأَشْرَبَ', correct_en: 'in order for me to drink', options_ar: ['لِأَشْرَبَ', 'لِأَشْرَبُ', 'لِشَرِبَ'] },
                    { emoji: '🌙', question_ar: 'الصَّوْمُ → لِـ + هِيَ', question_en: "Fasting → in order for her to fast", correct_ar: 'لِتَصُومَ', correct_en: 'in order for her to fast', options_ar: ['لِتَصُومَ', 'لِتَصُومُ', 'لِصَامَتْ'] },
                    { emoji: '📨', question_ar: 'الإِرْسَالُ → لِـ + أَنْتَ', question_en: "Sending → in order for you (m) to send", correct_ar: 'لِتُرْسِلَ', correct_en: 'in order for you to send', options_ar: ['لِتُرْسِلَ', 'لِتُرْسِلُ', 'لِأَرْسَلَ'] },
                ],
            },
        },
    ],
};

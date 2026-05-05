import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
                darsNumber: 6,
                chunks: [
                    {
                        id: '1-6-1',
                        type: 'grammar_rule',
                        titleEn: 'Idafah Core Rule (Possessive Construction)',
                        titleAr: 'قَاعِدَة الإِضَافَة (المُضَاف وَالمُضَاف إِلَيْهِ)',
                        payload: {
                            rules: [
                                {
                                    label: 'Possessed noun (المُضَاف)',
                                    arabic: 'كِتَابُ رَاشِدٍ',
                                    romanized: 'kitābu rāshidin',
                                    meaning: 'Rashid\'s book',
                                    examples: [
                                        { ar: 'المُضَافُ لَا يَأْخُذُ التَّنْوِينَ', en: 'Mudaf does not take tanween.' },
                                        { ar: 'كِتَابُ عَائِشَةَ', en: 'Aisha\'s book' },
                                        { ar: 'كِتَابُ الْمُعَلِّمِ', en: 'The teacher\'s book' },
                                    ],
                                },
                                {
                                    label: 'Possessor noun (المُضَاف إِلَيْهِ)',
                                    arabic: 'رَاشِدٍ / عَائِشَةَ / الْمُعَلِّمِ',
                                    romanized: 'rāshidin / ʿāʾishata / al-muʿallimi',
                                    meaning: 'The second noun becomes genitive (majrur).',
                                    examples: [
                                        { ar: 'الرَّجُلُ المُذَكَّر: كِسْرَة (ــِ) أَوْ تَنْوِين كَسْر (ــٍ)', en: 'Masculine noun takes kasra / kasratan in genitive.' },
                                        { ar: 'اِسْمُ الأُنْثَى: فَتْحَة (ــَ) فِي هٰذَا الدَّرْس', en: 'Female proper names appear with fat-ha here.' },
                                    ],
                                },
                                {
                                    label: 'Special nouns: أَبٌ / أَخٌ',
                                    arabic: 'أَبُو فَاطِمَةَ ، أَخُو سَعِيدٍ',
                                    romanized: 'abū fāṭimata, akhū saʿīdin',
                                    meaning: 'When used as mudaf, they commonly appear with wāw.',
                                    examples: [
                                        { ar: 'أَبُو مَاجِدٍ', en: 'Majid\'s father' },
                                        { ar: 'أَخُو سَعِيدٍ', en: 'Saeed\'s brother' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-6-2',
                        type: 'application',
                        titleEn: 'Idafah Phrase Drills',
                        titleAr: 'تَدْرِيبَات عِبَارَات الإِضَافَة',
                        payload: {
                            items: [
                                { emoji: '🖊️', ar: 'قَلَمُ خَالِدٍ', en: 'Khalid\'s pen' },
                                { emoji: '⌚', ar: 'سَاعَةُ بَشِيرٍ', en: 'Bashir\'s watch' },
                                { emoji: '🏠', ar: 'بَيْتُ مَحْمُودٍ', en: 'Mahmud\'s house' },
                                { emoji: '👦', ar: 'أَخُو سَعِيدٍ', en: 'Saeed\'s brother' },
                                { emoji: '👧', ar: 'أُخْتُ بِلالٍ', en: 'Bilal\'s sister' },
                                { emoji: '🤝', ar: 'صَدِيقُ مَاجِدٍ', en: 'Majid\'s friend' },
                                { emoji: '📿', ar: 'عِقْدُ آمِنَةَ', en: 'Amina\'s necklace' },
                                { emoji: '🎒', ar: 'حَقِيبَةُ فَاطِمَةَ', en: 'Fatima\'s bag' },
                                { emoji: '🕌', ar: 'بَابُ الْمَسْجِدِ', en: 'The mosque\'s door' },
                                { emoji: '🏷️', ar: 'اِسْمُ الْوَلَدِ', en: 'The boy\'s name' },
                                { emoji: '🔑', ar: 'مِفْتَاحُ الْقُفْلِ', en: 'The lock\'s key' },
                                { emoji: '💡', ar: 'مِصْبَاحُ الْغُرْفَةِ', en: 'The room\'s lamp' },
                            ],
                        },
                    },
                    {
                        id: '1-6-3',
                        type: 'grammar_rule',
                        titleEn: 'Pronoun Substitution in Possessives',
                        titleAr: 'إِبْدَال المُضَاف إِلَيْهِ بِالضَّمِير',
                        payload: {
                            rules: [
                                {
                                    label: 'From noun possessor to pronoun',
                                    arabic: 'قَلَمُ مَحْمُودٍ ➔ قَلَمُهُ',
                                    romanized: 'qalamu maḥmūdin → qalamuhu',
                                    meaning: 'Replace explicit possessor with attached pronoun.',
                                    examples: [
                                        { ar: 'سَاعَةُ بَشِيرٍ جَمِيلَةٌ ➔ سَاعَتُهُ جَمِيلَةٌ', en: 'Bashir\'s watch is beautiful → His watch is beautiful.' },
                                        { ar: 'عِقْدُ آمِنَةَ جَمِيلٌ ➔ عِقْدُهَا جَمِيلٌ', en: 'Amina\'s necklace is beautiful → Her necklace is beautiful.' },
                                        { ar: 'أَبُو فَاطِمَةَ عَالِمٌ كَبِيرٌ ➔ أَبُوهَا عَالِمٌ كَبِيرٌ', en: 'Fatima\'s father is a great scholar → Her father is a great scholar.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-6-4',
                        type: 'q_and_a',
                        titleEn: 'Lesson 6 Q&A Practice',
                        titleAr: 'تَدْرِيب سُؤَال وَجَوَاب (الدَّرْس ٦)',
                        payload: {
                            instruction: 'Read the dialogue and answer like the book pattern.',
                            questions: [
                                { emoji: '👤', question_ar: 'مَنْ أَنْتَ أَيُّهَا الرَّجُلُ ؟', question_en: 'Who are you, O man?', correct_ar: 'أَنَا أَبُو فَاطِمَةَ وَعَمُّ خَالِدٍ', correct_en: 'I am Fatima\'s father and Khalid\'s uncle.', options_ar: ['أَنَا أَبُو فَاطِمَةَ وَعَمُّ خَالِدٍ', 'أَنَا تِلْمِيذٌ', 'أَنَا فِي الْبَيْتِ'] },
                                { emoji: '🕌', question_ar: 'هَلْ أَنْتَ إِمَامُ الْمَسْجِدِ ؟', question_en: 'Are you the mosque imam?', correct_ar: 'نَعَمْ، أَنَا إِمَامُ الْمَسْجِدِ', correct_en: 'Yes, I am the mosque imam.', options_ar: ['نَعَمْ، أَنَا إِمَامُ الْمَسْجِدِ', 'لَا، أَنَا تَاجِرٌ', 'هَلْ أَنْتَ؟'] },
                                { emoji: '🖊️', question_ar: 'هَلْ هٰذَا قَلَمُ خَالِدٍ ؟', question_en: 'Is this Khalid\'s pen?', correct_ar: 'نَعَمْ، هٰذَا قَلَمُ خَالِدٍ', correct_en: 'Yes, this is Khalid\'s pen.', options_ar: ['نَعَمْ، هٰذَا قَلَمُ خَالِدٍ', 'لَا، هٰذِهِ سَاعَةٌ', 'هٰذَا بَيْتٌ'] },
                                { emoji: '🚪', question_ar: 'هَلْ بَابُ الْبَيْتِ مَفْتُوحٌ ؟', question_en: 'Is the house door open?', correct_ar: 'لَا، بَابُ الْبَيْتِ مُغْلَقٌ', correct_en: 'No, the house door is closed.', options_ar: ['نَعَمْ، هُوَ مَفْتُوحٌ', 'لَا، بَابُ الْبَيْتِ مُغْلَقٌ', 'هُوَ جَمِيلٌ'] },
                            ],
                        },
                    },
                    {
                        id: '1-6-5',
                        type: 'vocabulary',
                        titleEn: 'New Vocabulary (Village & City Context)',
                        titleAr: 'مُفْرَدَات جَدِيدَة (القَرْيَة وَالمَدِينَة)',
                        payload: {
                            words: [
                                { id: 1, ar: 'طَرِيقٌ', romanized: 'ṭarīqun', en: 'Road / path', bn: 'পথ', emoji: '🛣️' },
                                { id: 2, ar: 'سُوقٌ', romanized: 'sūqun', en: 'Market', bn: 'বাজার', emoji: '🏪' },
                                { id: 3, ar: 'قَرْيَةٌ', romanized: 'qaryatun', en: 'Village', bn: 'গ্রাম', emoji: '🏡' },
                                { id: 4, ar: 'مَدِينَةٌ', romanized: 'madīnatun', en: 'City', bn: 'শহর', emoji: '🏙️' },
                                { id: 5, ar: 'مَنْظَرٌ', romanized: 'manẓarun', en: 'View / scenery', bn: 'দৃশ্য', emoji: '🌄' },
                                { id: 6, ar: 'جِدًّا', romanized: 'jiddan', en: 'Very', bn: 'খুব', emoji: '✨' },
                                { id: 7, ar: 'زَوْجٌ', romanized: 'zawjun', en: 'Husband', bn: 'স্বামী', emoji: '👨' },
                                { id: 8, ar: 'زَوْجَةٌ', romanized: 'zawjatun', en: 'Wife', bn: 'স্ত্রী', emoji: '👩' },
                                { id: 9, ar: 'وَالِدٌ', romanized: 'wālidun', en: 'Father', bn: 'আব্বা', emoji: '👴' },
                                { id: 10, ar: 'وَالِدَةٌ', romanized: 'wālidatun', en: 'Mother', bn: 'আম্মা', emoji: '👵' },
                            ],
                        },
                    },
                    {
                        id: '1-6-6',
                        type: 'application',
                        titleEn: 'Descriptive Reading (Village vs City)',
                        titleAr: 'قِرَاءَة وَصْفِيَّة (القَرْيَة وَالمَدِينَة)',
                        payload: {
                            items: [
                                { emoji: '🌄', ar: 'هٰذَا مَنْظَرُ الْقَرْيَةِ', en: 'This is the view of the village.' },
                                { emoji: '✨', ar: 'مَنْظَرُ الْقَرْيَةِ جَمِيلٌ جِدًّا', en: 'The village view is very beautiful.' },
                                { emoji: '🏪', ar: 'سُوقُ الْقَرْيَةِ صَغِيرٌ وَسُوقُ الْمَدِينَةِ كَبِيرٌ', en: 'The village market is small and the city market is big.' },
                                { emoji: '🧑‍🌾', ar: 'عَمُّ خَالِدٍ فَلَّاحٌ، اِسْمُهُ بَشِيرٌ', en: 'Khalid\'s uncle is a farmer; his name is Bashir.' },
                                { emoji: '👩‍🌾', ar: 'وَعَمَّةُ خَالِدٍ فَلَّاحَةٌ، اِسْمُهَا زَيْنَبُ', en: 'Khalid\'s aunt is a farmer woman; her name is Zainab.' },
                                { emoji: '🤝', ar: 'عَمُّ خَالِدٍ رَجُلٌ طَيِّبٌ وَعَمَّتُهُ امْرَأَةٌ طَيِّبَةٌ', en: 'Khalid\'s uncle is a good man and his aunt is a good woman.' },
                                { emoji: '💰', ar: 'تَاجِرُ الْمَدِينَةِ غَنِيٌّ جِدًّا وَفَلَّاحُ الْقَرْيَةِ فَقِيرٌ جِدًّا', en: 'The city merchant is very rich and the village farmer is very poor.' },
                                { emoji: '🛣️', ar: 'هٰذَا الطَّرِيقُ وَاسِعٌ وَذٰلِكَ الطَّرِيقُ ضَيِّقٌ', en: 'This road is wide and that road is narrow.' },
                            ],
                        },
                    },
                    {
                        id: '1-6-7',
                        type: 'application',
                        titleEn: 'Islamic Context Reading',
                        titleAr: 'قِرَاءَة سِيَاق إِسْلَامِي',
                        payload: {
                            items: [
                                { emoji: '📖', ar: 'الْقُرْآنُ كِتَابُ اللهِ', en: 'The Quran is the Book of Allah.' },
                                { emoji: '🕋', ar: 'الْكَعْبَةُ بَيْتُ اللهِ', en: 'The Kaaba is the House of Allah.' },
                                { emoji: '🕌', ar: 'مُحَمَّدٌ رَسُولُ اللهِ', en: 'Muhammad is the Messenger of Allah.' },
                                { emoji: '👨', ar: 'عَبْدُ اللهِ وَالِدُ الرَّسُولِ', en: 'Abdullah is the father of the Messenger.' },
                                { emoji: '👩', ar: 'آمِنَةُ وَالِدَتُهُ', en: 'Amina is his mother.' },
                                { emoji: '🤍', ar: 'خَدِيجَةُ زَوْجَةُ الرَّسُولِ', en: 'Khadijah is the wife of the Messenger.' },
                                { emoji: '👧', ar: 'فَاطِمَةُ بِنْتُ مُحَمَّدٍ', en: 'Fatimah is the daughter of Muhammad.' },
                                { emoji: '👳', ar: 'عَلِيٌّ زَوْجُ فَاطِمَةَ', en: 'Ali is Fatimah\'s husband.' },
                            ],
                        },
                    },
                    {
                        id: '1-6-8',
                        type: 'assessment',
                        titleEn: 'Comprehension Review (Lesson 6)',
                        titleAr: 'مُرَاجَعَة الفَهْم (الدَّرْس ٦)',
                        payload: {
                            instruction: 'Answer based on the reading and Q&A of Lesson 6.',
                            questions: [
                                { emoji: '🌄', question_ar: 'كَيْفَ مَنْظَرُ الْقَرْيَةِ ؟', question_en: 'How is the village view?', correct_ar: 'مَنْظَرُ الْقَرْيَةِ جَمِيلٌ جِدًّا', correct_en: 'The village view is very beautiful.', options_ar: ['مَنْظَرُ الْقَرْيَةِ جَمِيلٌ جِدًّا', 'مَنْظَرُ الْقَرْيَةِ قَدِيمٌ', 'مَنْظَرُ الْقَرْيَةِ ضَيِّقٌ'] },
                                { emoji: '🏪', question_ar: 'كَيْفَ سُوقُ الْقَرْيَةِ وَسُوقُ الْمَدِينَةِ ؟', question_en: 'How are the village and city markets?', correct_ar: 'سُوقُ الْقَرْيَةِ صَغِيرٌ وَسُوقُ الْمَدِينَةِ كَبِيرٌ', correct_en: 'Village market is small and city market is big.', options_ar: ['سُوقُ الْقَرْيَةِ صَغِيرٌ وَسُوقُ الْمَدِينَةِ كَبِيرٌ', 'كِلَاهُمَا صَغِيرٌ', 'كِلَاهُمَا كَبِيرٌ'] },
                                { emoji: '🧑‍🌾', question_ar: 'مَنْ بَشِيرٌ وَمَنْ زَيْنَبُ ؟', question_en: 'Who are Bashir and Zainab?', correct_ar: 'بَشِيرٌ فَلَّاحٌ وَزَيْنَبُ فَلَّاحَةٌ', correct_en: 'Bashir is a farmer and Zainab is a farmer woman.', options_ar: ['بَشِيرٌ فَلَّاحٌ وَزَيْنَبُ فَلَّاحَةٌ', 'بَشِيرٌ مُعَلِّمٌ وَزَيْنَبُ طَالِبَةٌ', 'بَشِيرٌ تَاجِرٌ وَزَيْنَبُ مُدِيرَةٌ'] },
                                { emoji: '👦', question_ar: 'مَنْ بِلَالٌ وَكَيْفَ هُوَ ؟', question_en: 'Who is Bilal and how is he?', correct_ar: 'بِلَالٌ تِلْمِيذٌ مُجْتَهِدٌ', correct_en: 'Bilal is a hardworking student.', options_ar: ['بِلَالٌ تِلْمِيذٌ مُجْتَهِدٌ', 'بِلَالٌ رَجُلٌ ضَعِيفٌ', 'بِلَالٌ تَاجِرٌ غَنِيٌّ'] },
                                { emoji: '👧', question_ar: 'مَنْ فَاطِمَةُ وَكَيْفَ هِيَ ؟', question_en: 'Who is Fatima and how is she?', correct_ar: 'فَاطِمَةُ تِلْمِيذَةٌ مُجْتَهِدَةٌ', correct_en: 'Fatima is a hardworking female student.', options_ar: ['فَاطِمَةُ تِلْمِيذَةٌ مُجْتَهِدَةٌ', 'فَاطِمَةُ بِنْتٌ ضَعِيفَةٌ', 'فَاطِمَةُ مُعَلِّمَةٌ'] },
                            ],
                        },
                    },
                ],
            };

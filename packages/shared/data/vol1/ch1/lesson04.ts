import type { LessonData } from '../../curriculum';

export const lesson04: LessonData = {
                darsNumber: 4,
                chunks: [
                    {
                        id: '1-4-1',
                        type: 'grammar_rule',
                        titleEn: 'The Definite Article (ال) - Moon Letters',
                        titleAr: 'أَل التَّعْرِيف - حُرُوف القَمَرِيَّة',
                        payload: {
                            rules: [
                                {
                                    label: 'Moon letters - ل is pronounced',
                                    arabic: 'الْكِتَابُ',
                                    romanized: 'al-kitābu',
                                    meaning: 'The book (ل is clearly pronounced)',
                                    examples: [
                                        { ar: 'كِتَابٌ ➔ الْكِتَابُ', en: 'a book ➔ the book' },
                                        { ar: 'قَلَمٌ ➔ الْقَلَمُ', en: 'a pen ➔ the pen' },
                                        { ar: 'بَابٌ ➔ الْبَابُ', en: 'a door ➔ the door' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-4-2',
                        type: 'grammar_rule',
                        titleEn: 'The Definite Article (ال) - Sun Letters',
                        titleAr: 'أَل التَّعْرِيف - حُرُوف الشَّمْسِيَّة',
                        payload: {
                            rules: [
                                {
                                    label: 'Sun letters - ل is assimilated (shaddah)',
                                    arabic: 'الرَّجُلُ',
                                    romanized: 'ar-rajulu',
                                    meaning: 'The man (ل is silent, next letter doubles)',
                                    examples: [
                                        { ar: 'رَجُلٌ ➔ الرَّجُلُ', en: 'a man ➔ the man' },
                                        { ar: 'تِلْمِيذٌ ➔ التِّلْمِيذُ', en: 'a student ➔ the student' },
                                        { ar: 'سَاعَةٌ ➔ السَّاعَةُ', en: 'a clock ➔ the clock' },
                                        { ar: 'نَافِذَةٌ ➔ النَّافِذَةُ', en: 'a window ➔ the window' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-4-3',
                        type: 'vocabulary',
                        titleEn: 'New Adjectives',
                        titleAr: 'صِفَات جَدِيدَة',
                        payload: {
                            words: [
                                { id: 1, ar: 'شَرِيفٌ', romanized: 'sharīfun', en: 'Noble / Gentle', bn: 'ভদ্র, সম্মানিত', emoji: '🤝' },
                                { id: 2, ar: 'مَاهِرٌ', romanized: 'māhirun', en: 'Skilled', bn: 'দক্ষ', emoji: '🎯' },
                                { id: 3, ar: 'مَفْتُوحٌ', romanized: 'maftūḥun', en: 'Open', bn: 'খোলা', emoji: '🚪' },
                                { id: 4, ar: 'مُغْلَقٌ', romanized: 'mughlaqun', en: 'Closed', bn: 'বন্ধ', emoji: '🔒' },
                                { id: 5, ar: 'وَاسِعٌ', romanized: "wāsi'un", en: 'Spacious / Wide', bn: 'প্রশস্ত', emoji: '🏟️' },
                                { id: 6, ar: 'ضَيِّقٌ', romanized: 'ḍayyiqun', en: 'Narrow', bn: 'সংকীর্ণ', emoji: '🪜' },
                                { id: 7, ar: 'قَوِيٌّ', romanized: 'qawiyyun', en: 'Strong', bn: 'শক্তিশালী', emoji: '💪' },
                                { id: 8, ar: 'ضَعِيفٌ', romanized: "ḍa'īfun", en: 'Weak', bn: 'দুর্বল', emoji: '🪶' },
                                { id: 9, ar: 'مُجْتَهِدٌ', romanized: 'mujtahidun', en: 'Hardworking', bn: 'পরিশ্রমী', emoji: '📚' },
                                { id: 10, ar: 'مَشْهُورٌ', romanized: 'mashhūrun', en: 'Famous', bn: 'প্রসিদ্ধ', emoji: '⭐' },
                            ],
                        },
                    },
                    {
                        id: '1-4-4',
                        type: 'application',
                        titleEn: 'Definite Article in Sentences',
                        titleAr: 'تَطْبِيق أَل التَّعْرِيف فِي الجُمَل',
                        payload: {
                            items: [
                                { emoji: '📖', ar: 'الْكِتَابُ جَدِيدٌ', en: 'The book is new.' },
                                { emoji: '🏫', ar: 'الْمَدْرَسَةُ جَمِيلَةٌ', en: 'The school is beautiful.' },
                                { emoji: '🕌', ar: 'الْمَسْجِدُ كَبِيرٌ', en: 'The mosque is big.' },
                                { emoji: '⌚', ar: 'السَّاعَةُ جَدِيدَةٌ', en: 'The clock is new.' },
                                { emoji: '👨', ar: 'الرَّجُلُ شَرِيفٌ', en: 'The man is noble.' },
                                { emoji: '👦', ar: 'الْوَلَدُ ذَكِيٌّ', en: 'The boy is intelligent.' },
                                { emoji: '🚪', ar: 'الْبَابُ مَفْتُوحٌ', en: 'The door is open.' },
                                { emoji: '👕', ar: 'الْقَمِيصُ نَظِيفٌ', en: 'The shirt is clean.' },
                            ],
                        },
                    },
                    {
                        id: '1-4-5',
                        type: 'q_and_a',
                        titleEn: 'Q&A with كَيْفَ (How is…?)',
                        titleAr: 'أَسْئِلَة المُرَاجَعَة مَعَ كَيْفَ',
                        payload: {
                            instruction: 'Read the Q&A and say the meaning (প্রশ্নোত্তরগুলো পড়ো ও অর্থ বলো)',
                            questions: [
                                { emoji: '⌚', question_ar: 'كَيْفَ السَّاعَةُ ؟', question_en: 'How is the clock?', correct_ar: 'السَّاعَةُ جَمِيلَةٌ', correct_en: 'The clock is beautiful.', options_ar: ['السَّاعَةُ جَمِيلَةٌ', 'السَّاعَةُ قَدِيمَةٌ', 'الْكِتَابُ كَبِيرٌ'] },
                                { emoji: '📚', question_ar: 'كَيْفَ التِّلْمِيذُ ؟', question_en: 'How is the student?', correct_ar: 'التِّلْمِيذُ ذَكِيٌّ', correct_en: 'The student is intelligent.', options_ar: ['التِّلْمِيذُ ذَكِيٌّ', 'التِّلْمِيذُ ضَعِيفٌ', 'الرَّجُلُ مَاهِرٌ'] },
                                { emoji: '🎒', question_ar: 'هَلْ هَذِهِ الْحَقِيبَةُ جَمِيلَةٌ ؟', question_en: 'Is this bag beautiful?', correct_ar: 'نَعَمْ، هَذِهِ الْحَقِيبَةُ جَمِيلَةٌ', correct_en: 'Yes, this bag is beautiful.', options_ar: ['نَعَمْ، هَذِهِ الْحَقِيبَةُ جَمِيلَةٌ', 'لَا، هِيَ صَغِيرَةٌ', 'بَلْ هِيَ قَدِيمَةٌ'] },
                                { emoji: '⌚', question_ar: 'هَلْ تِلْكَ السَّاعَةُ جَدِيدَةٌ ؟', question_en: 'Is that clock new?', correct_ar: 'لَا، تِلْكَ السَّاعَةُ قَدِيمَةٌ', correct_en: 'No, that clock is old.', options_ar: ['نَعَمْ، هِيَ جَدِيدَةٌ', 'لَا، تِلْكَ السَّاعَةُ قَدِيمَةٌ', 'بَلْ هِيَ جَمِيلَةٌ'] },
                            ],
                        },
                    },
                    {
                        id: '1-4-6',
                        type: 'grammar_rule',
                        titleEn: 'Demonstratives with Definite Nouns',
                        titleAr: 'أَسْمَاء الإِشَارَة مَعَ الأَسْمَاء المُعَرَّفَة',
                        payload: {
                            rules: [
                                {
                                    label: 'Meaning shift: هٰذَا / ذٰلِكَ with definite noun',
                                    arabic: 'هٰذَا كِتَابٌ ➔ هٰذَا الْكِتَابُ',
                                    romanized: 'hādhā kitābun → hādhā al-kitābu',
                                    meaning: '“This is a book” becomes “this book”.',
                                    examples: [
                                        { ar: 'ذٰلِكَ قَلَمٌ ➔ ذٰلِكَ الْقَلَمُ', en: 'That is a pen → that pen' },
                                        { ar: 'هٰذِهِ سَاعَةٌ ➔ هٰذِهِ السَّاعَةُ', en: 'This is a clock → this clock' },
                                    ],
                                },
                                {
                                    label: 'Special form with امْرَأَةٌ',
                                    arabic: 'امْرَأَةٌ ➔ الْمَرْأَةُ',
                                    romanized: 'imraʾatun → al-marʾatu',
                                    meaning: 'When definite article is added, the form changes to الْمَرْأَةُ.',
                                    examples: [
                                        { ar: 'الْمَرْأَةُ شَرِيفَةٌ', en: 'The woman is noble.' },
                                        { ar: 'هِيَ امْرَأَةٌ شَرِيفَةٌ', en: 'She is a noble woman.' },
                                    ],
                                },
                            ],
                        },
                    },
                    {
                        id: '1-4-7',
                        type: 'assessment',
                        titleEn: 'Definite-Noun Comprehension',
                        titleAr: 'تَقْيِيم فَهْم المُعَرَّف بِـ «ال»',
                        payload: {
                            instruction: 'Answer using the definite noun pattern and appropriate demonstrative.',
                            questions: [
                                { emoji: '📘', question_ar: 'كَيْفَ هٰذَا الْكِتَابُ ؟', question_en: 'How is this book?', correct_ar: 'هٰذَا الْكِتَابُ مُفِيدٌ', correct_en: 'This book is useful.', options_ar: ['هٰذَا الْكِتَابُ مُفِيدٌ', 'هٰذِهِ الْكِتَابُ مُفِيدَةٌ', 'هٰذَا كِتَابٌ مُفِيدٌ'] },
                                { emoji: '⌚', question_ar: 'كَيْفَ تِلْكَ السَّاعَةُ ؟', question_en: 'How is that clock?', correct_ar: 'تِلْكَ السَّاعَةُ جَدِيدَةٌ', correct_en: 'That clock is new.', options_ar: ['تِلْكَ السَّاعَةُ جَدِيدَةٌ', 'ذٰلِكَ السَّاعَةُ جَدِيدٌ', 'هُوَ جَدِيدٌ'] },
                                { emoji: '👨', question_ar: 'مَنْ هٰذَا الرَّجُلُ ؟', question_en: 'Who is this man?', correct_ar: 'هُوَ مَحْمُودٌ، هُوَ تَاجِرٌ كَبِيرٌ', correct_en: 'He is Mahmud, he is a big merchant.', options_ar: ['هُوَ مَحْمُودٌ، هُوَ تَاجِرٌ كَبِيرٌ', 'هِيَ مَحْمُودٌ', 'ذٰلِكَ سَاعَةٌ'] },
                                { emoji: '👩', question_ar: 'كَيْفَ الْمَرْأَةُ ؟', question_en: 'How is the woman?', correct_ar: 'الْمَرْأَةُ شَرِيفَةٌ', correct_en: 'The woman is noble.', options_ar: ['الْمَرْأَةُ شَرِيفَةٌ', 'الْمَرْأَةُ شَرِيفٌ', 'هُوَ شَرِيفٌ'] },
                            ],
                        },
                    },
                ],
            };

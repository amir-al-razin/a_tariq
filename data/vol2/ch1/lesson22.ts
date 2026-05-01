import type { LessonData } from '../../curriculum';

export const lesson22: LessonData = {
    darsNumber: 22,
    chunks: [
        {
            id: '2-22-1',
            type: 'vocabulary',
            titleEn: 'Irrational Plurals (جَمْع غَيْر الْعَاقِل)',
            titleAr: 'جَمْع غَيْر الْعَاقِل',
            payload: {
                words: [
                    { id: 1, ar: 'كِتَابٌ / كُتُبٌ', romanized: 'kitāb / kutub', en: 'Book / Books', emoji: '📚' },
                    { id: 2, ar: 'مَدِينَةٌ / مُدُنٌ', romanized: 'madīnah / mudun', en: 'City / Cities', emoji: '🏙️' },
                    { id: 3, ar: 'قَلَمٌ / أَقْلَامٌ', romanized: 'qalam / aqlām', en: 'Pen / Pens', emoji: '🖊️' },
                    { id: 4, ar: 'بَيْتٌ / بُيُوتٌ', romanized: 'bayt / buyūt', en: 'House / Houses', emoji: '🏠' },
                    { id: 5, ar: 'غُرْفَةٌ / غُرَفٌ', romanized: 'ghurfah / ghuraf', en: 'Room / Rooms', emoji: '🚪' },
                    { id: 6, ar: 'بَابٌ / أَبْوَابٌ', romanized: 'bāb / abwāb', en: 'Door / Doors', emoji: '🚪' },
                    { id: 7, ar: 'طَرِيقٌ / طُرُقٌ', romanized: 'ṭarīq / ṭuruq', en: 'Road / Roads', emoji: '🛣️' },
                    { id: 8, ar: 'سُوقٌ / أَسْوَاقٌ', romanized: 'sūq / aswāq', en: 'Market / Markets', emoji: '🏪' },
                    { id: 9, ar: 'نَظَّارَاتٌ', romanized: 'naẓẓārāt', en: 'Spectacles / Glasses', emoji: '👓' },
                    { id: 10, ar: 'مِظَلَّةٌ / مِظَلَّاتٌ', romanized: 'miẓallah / miẓallāt', en: 'Umbrella / Umbrellas', emoji: '☂️' },
                    { id: 11, ar: 'شَجَرَةٌ / أَشْجَارٌ', romanized: 'shajarah / ashjār', en: 'Tree / Trees', emoji: '🌳' },
                    { id: 12, ar: 'وَرَقَةٌ / أَوْرَاقٌ', romanized: 'waraqah / awrāq', en: 'Leaf / Leaves', emoji: '🍃' },
                    { id: 13, ar: 'زَهْرَةٌ / أَزْهَارٌ', romanized: 'zahrah / azhār', en: 'Flower / Flowers', emoji: '🌸' },
                    { id: 14, ar: 'طَائِرَةٌ / طَائِرَاتٌ', romanized: "ṭā\'irah / ṭā\'irāt', en: 'Airplane / Airplanes', emoji: '✈️' },
                    { id: 15, ar: 'عَلَمٌ / أَعْلَامٌ', romanized: "'alam / a'lām", en: 'Flag / Flags', emoji: '🚩' },
                    { id: 16, ar: 'سَاعَةٌ / سَاعَاتٌ', romanized: "sā\'ah / sā\'āt', en: 'Watch / Watches', emoji: '⌚' },
                    { id: 17, ar: 'سَيَّارَةٌ / سَيَّارَاتٌ', romanized: 'sayyārah / sayyārāt', en: 'Car / Cars', emoji: '🚗' },
                    { id: 18, ar: 'سَفِينَةٌ / سُفُنٌ', romanized: 'safīnah / sufun', en: 'Ship / Ships', emoji: '🚢' },
                ],
            },
        },
        {
            id: '2-22-2',
            type: 'grammar_rule',
            titleEn: 'Irrational Plurals Take Feminine Singular Demonstratives',
            titleAr: 'جَمْع غَيْر الْعَاقِل يَأْخُذُ اسْمَ الإِشَارَة الْمُفْرَد الْمُؤَنَّث',
            payload: {
                rules: [
                    {
                        label: 'هَذَا (m.sg.) → هَذِهِ (f.sg.) for irrational plurals',
                        arabic: 'هَذَا كِتَابٌ → هَذِهِ كُتُبٌ',
                        romanized: 'hādhā kitābun → hādhihi kutubun',
                        meaning: 'Non-human (irrational) plurals are treated as feminine singular in Arabic grammar. Use هَذِهِ (not هَؤُلَاءِ) and تِلْكَ (not أُولَئِكَ).',
                        examples: [
                            { ar: 'هَذَا كِتَابٌ → هَذِهِ كُتُبٌ', en: 'This is a book → These are books' },
                            { ar: 'ذَلِكَ قَلَمٌ → تِلْكَ أَقْلَامٌ', en: 'That is a pen → Those are pens' },
                            { ar: 'هَذِهِ بُيُوتٌ', en: 'These are houses' },
                            { ar: 'تِلْكَ سُفُنٌ', en: 'Those are ships' },
                            { ar: 'هَذِهِ سَيَّارَاتٌ', en: 'These are cars' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-22-3',
            type: 'grammar_rule',
            titleEn: 'Irrational Plurals Take Feminine Singular Adjectives',
            titleAr: 'جَمْع غَيْر الْعَاقِل يَأْخُذُ الصِّفَة الْمُفْرَدَة الْمُؤَنَّثَة',
            payload: {
                rules: [
                    {
                        label: 'Singular adjective (m) → Singular adjective (f) for irrational plurals',
                        arabic: 'كِتَابٌ جَدِيدٌ → كُتُبٌ جَدِيدَةٌ',
                        romanized: 'kitābun jadīdun → kutubun jadīdatun',
                        meaning: 'Adjectives describing irrational plurals use the feminine singular form (with ة ending), not the plural form.',
                        examples: [
                            { ar: 'كِتَابٌ جَدِيدٌ → كُتُبٌ جَدِيدَةٌ', en: 'A new book → New books' },
                            { ar: 'قَلَمٌ جَيِّدٌ → أَقْلَامٌ جَيِّدَةٌ', en: 'A good pen → Good pens' },
                            { ar: 'بَيْتٌ جَمِيلٌ → بُيُوتٌ جَمِيلَةٌ', en: 'A beautiful house → Beautiful houses' },
                            { ar: 'بَابٌ وَاسِعٌ → أَبْوَابٌ وَاسِعَةٌ', en: 'A wide door → Wide doors' },
                            { ar: 'سَاعَةٌ ثَمِينَةٌ → سَاعَاتٌ ثَمِينَةٌ', en: 'A precious watch → Precious watches' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-22-4',
            type: 'application',
            titleEn: 'Demonstratives with Plural Nouns',
            titleAr: 'أَسْمَاء الإِشَارَة مَعَ الْجَمْع',
            payload: {
                items: [
                    { emoji: '📚', ar: 'هَذِهِ كُتُبٌ', en: 'These are books' },
                    { emoji: '🖊️', ar: 'تِلْكَ أَقْلَامٌ', en: 'Those are pens' },
                    { emoji: '⌚', ar: 'هَذِهِ سَاعَاتٌ', en: 'These are watches' },
                    { emoji: '👓', ar: 'تِلْكَ نَظَّارَاتٌ', en: 'Those are glasses' },
                    { emoji: '🏠', ar: 'هَذِهِ بُيُوتٌ', en: 'These are houses' },
                    { emoji: '🚪', ar: 'هَذِهِ أَبْوَابٌ', en: 'These are doors' },
                    { emoji: '🚢', ar: 'تِلْكَ سُفُنٌ', en: 'Those are ships' },
                    { emoji: '🚩', ar: 'هَذِهِ أَعْلَامٌ', en: 'These are flags' },
                    { emoji: '🌳', ar: 'تِلْكَ أَشْجَارٌ', en: 'Those are trees' },
                    { emoji: '🍃', ar: 'هَذِهِ أَوْرَاقٌ', en: 'These are leaves' },
                    { emoji: '🚗', ar: 'هَذِهِ سَيَّارَاتٌ', en: 'These are cars' },
                    { emoji: '🏙️', ar: 'تِلْكَ مُدُنٌ', en: 'Those are cities' },
                    { emoji: '🚪', ar: 'هَذِهِ غُرَفٌ', en: 'These are rooms' },
                ],
            },
        },
        {
            id: '2-22-5',
            type: 'application',
            titleEn: 'Adjectives with Plural Nouns',
            titleAr: 'الصِّفَات مَعَ الْجَمْع',
            payload: {
                items: [
                    { emoji: '📚', ar: 'كُتُبٌ جَدِيدَةٌ', en: 'New books' },
                    { emoji: '🖊️', ar: 'أَقْلَامٌ جَيِّدَةٌ', en: 'Good pens' },
                    { emoji: '⌚', ar: 'سَاعَاتٌ ثَمِينَةٌ', en: 'Precious watches' },
                    { emoji: '🏠', ar: 'بُيُوتٌ جَمِيلَةٌ', en: 'Beautiful houses' },
                    { emoji: '📖', ar: 'قِصَصٌ عَجِيبَةٌ', en: 'Wonderful stories' },
                    { emoji: '🚪', ar: 'أَبْوَابٌ وَاسِعَةٌ', en: 'Wide doors' },
                ],
            },
        },
        {
            id: '2-22-6',
            type: 'assessment',
            titleEn: 'Exercise 1 — Fill in the Adjective (Singular → Plural)',
            titleAr: 'تَمْرِين ١ — أَكْمِلْ الصِّفَة',
            payload: {
                instruction: 'Choose the correct adjective form for the plural noun.',
                questions: [
                    { emoji: '🖊️', question_ar: 'هَذَا قَلَمٌ جَيِّدٌ — هَذِهِ أَقْلَامٌ ___', question_en: 'This is a good pen — These are ___ pens', correct_ar: 'جَيِّدَةٌ', correct_en: 'good (f)', options_ar: ['جَيِّدَةٌ', 'جَيِّدٌ', 'جَيِّدُونَ'] },
                    { emoji: '⌚', question_ar: 'تِلْكَ سَاعَةٌ ثَمِينَةٌ — تِلْكَ سَاعَاتٌ ___', question_en: 'That is a precious watch — Those are ___ watches', correct_ar: 'ثَمِينَةٌ', correct_en: 'precious (f)', options_ar: ['ثَمِينَةٌ', 'ثَمِينٌ', 'ثَمِينُونَ'] },
                    { emoji: '🏠', question_ar: 'ذَلِكَ بَيْتٌ جَمِيلٌ — تِلْكَ بُيُوتٌ ___', question_en: 'That is a beautiful house — Those are ___ houses', correct_ar: 'جَمِيلَةٌ', correct_en: 'beautiful (f)', options_ar: ['جَمِيلَةٌ', 'جَمِيلٌ', 'جَمِيلُونَ'] },
                ],
            },
        },
        {
            id: '2-22-7',
            type: 'assessment',
            titleEn: 'Exercise 2 — Definite Noun + Adjective',
            titleAr: 'تَمْرِين ٢ — الاِسْم الْمَعْرِفَة + الصِّفَة',
            payload: {
                instruction: 'Choose the correct adjective for the definite plural noun.',
                questions: [
                    { emoji: '📚', question_ar: 'الْكِتَابُ جَدِيدٌ — الْكُتُبُ ___', question_en: 'The book is new — The books are ___', correct_ar: 'جَدِيدَةٌ', correct_en: 'new (f)', options_ar: ['جَدِيدَةٌ', 'جَدِيدٌ', 'جُدُدٌ'] },
                    { emoji: '⌚', question_ar: 'السَّاعَةُ ثَمِينَةٌ — السَّاعَاتُ ___', question_en: 'The watch is precious — The watches are ___', correct_ar: 'ثَمِينَةٌ', correct_en: 'precious (f)', options_ar: ['ثَمِينَةٌ', 'ثَمِينٌ', 'ثَمِينَاتٌ'] },
                    { emoji: '🖊️', question_ar: 'الْقَلَمُ جَيِّدٌ — الْأَقْلَامُ ___', question_en: 'The pen is good — The pens are ___', correct_ar: 'جَيِّدَةٌ', correct_en: 'good (f)', options_ar: ['جَيِّدَةٌ', 'جَيِّدٌ', 'جَيِّدُونَ'] },
                ],
            },
        },
        {
            id: '2-22-8',
            type: 'assessment',
            titleEn: 'Exercise 3 — Idafah + Plural',
            titleAr: 'تَمْرِين ٣ — الإِضَافَة مَعَ الْجَمْع',
            payload: {
                instruction: 'Choose the correct adjective for the plural noun in an Idafah construction.',
                questions: [
                    { emoji: '📚', question_ar: 'كِتَابُ رَاشِدٍ جَدِيدٌ — كُتُبُ رَاشِدٍ ___', question_en: "Rashid's book is new — Rashid's books are ___", correct_ar: 'جَدِيدَةٌ', correct_en: 'new (f)', options_ar: ['جَدِيدَةٌ', 'جَدِيدٌ', 'جُدُدٌ'] },
                    { emoji: '🚪', question_ar: 'بَابُ الْمَسْجِدِ مَفْتُوحٌ — أَبْوَابُ الْمَسْجِدِ ___', question_en: 'The door of the mosque is open — The doors of the mosque are ___', correct_ar: 'مَفْتُوحَةٌ', correct_en: 'open (f)', options_ar: ['مَفْتُوحَةٌ', 'مَفْتُوحٌ', 'مَفْتُوحُونَ'] },
                    { emoji: '🛣️', question_ar: 'طُرُقُ هَذِهِ الْمَدِينَةِ ___', question_en: 'The roads of this city are ___', correct_ar: 'وَاسِعَةٌ', correct_en: 'wide (f)', options_ar: ['وَاسِعَةٌ', 'وَاسِعٌ', 'وَاسِعُونَ'] },
                ],
            },
        },
        {
            id: '2-22-9',
            type: 'assessment',
            titleEn: 'Exercise 4 — Verb Agreement with Irrational Plurals',
            titleAr: 'تَمْرِين ٤ — مُطَابَقَة الْفِعْل مَعَ الْجَمْع',
            payload: {
                instruction: 'Choose the correct verb form for the irrational plural subject.',
                questions: [
                    { emoji: '🚢', question_ar: 'غَرِقَتِ السَّفِينَةُ — ___ السُّفُنُ', question_en: 'The ship sank — The ships ___', correct_ar: 'غَرِقَتِ', correct_en: 'sank (f.sg.)', options_ar: ['غَرِقَتِ', 'غَرِقُوا', 'غَرِقَ'] },
                    { emoji: '🐦', question_ar: 'خَرَجَ الطَّائِرُ مِنْ قَفَصِهِ — ___ الطُّيُورُ مِنْ أَقْفَاصِهَا', question_en: 'The bird went out of its cage — The birds ___ from their cages', correct_ar: 'خَرَجَتِ', correct_en: 'went out (f.sg.)', options_ar: ['خَرَجَتِ', 'خَرَجُوا', 'خَرَجَ'] },
                ],
            },
        },
    ],
};

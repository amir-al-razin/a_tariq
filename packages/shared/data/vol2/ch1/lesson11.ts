import type { LessonData } from '../../curriculum';

export const lesson11: LessonData = {
    darsNumber: 11,
    chunks: [
        {
            id: '2-11-1',
            type: 'vocabulary',
            titleEn: 'Particles of Emphasis and Hope',
            titleAr: 'حُرُوفُ التَّوْكِيد وَالتَّرَجِّي',
            payload: {
                words: [
                    { id: 1, ar: 'إِنَّ', romanized: 'inna', en: 'Certainly / Indeed / Surely', emoji: '✅' },
                    { id: 2, ar: 'لَعَلَّ', romanized: "la'alla", en: 'Perhaps / Maybe', emoji: '🤔' },
                ],
            },
        },
        {
            id: '2-11-2',
            type: 'grammar_rule',
            titleEn: 'إِنَّ - Puts Subject into Accusative',
            titleAr: 'إِنَّ - تَنْصِبُ الاِسْمَ',
            payload: {
                rules: [
                    {
                        label: 'إِنَّ + اسم مَنْصُوب + خَبَر مَرْفُوع',
                        arabic: 'رَاشِدٌ تِلْمِيذٌ → إِنَّ رَاشِدًا تِلْمِيذٌ',
                        romanized: 'Rāshidun tilmīdhun → inna Rāshidan tilmīdhun',
                        meaning: 'إِنَّ puts the subject (اسم إِنَّ) into the accusative case (fatha/fathatayn). The predicate (خبر) stays nominative.',
                        examples: [
                            { ar: 'رَاشِدٌ تِلْمِيذٌ → إِنَّ رَاشِدًا تِلْمِيذٌ', en: 'Rashid is a student → Indeed, Rashid is a student' },
                            { ar: 'الْكِتَابُ جَدِيدٌ → إِنَّ الْكِتَابَ جَدِيدٌ', en: 'The book is new → Indeed, the book is new' },
                            { ar: 'عَمُّ مَاجِدٍ عَالِمٌ → إِنَّ عَمَّ مَاجِدٍ عَالِمٌ', en: "Majid's uncle is a scholar → Indeed, Majid's uncle is a scholar" },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-11-3',
            type: 'grammar_rule',
            titleEn: 'إِنَّ with Verbal Sentences',
            titleAr: 'إِنَّ مَعَ الْجُمْلَة الْفِعْلِيَّة',
            payload: {
                rules: [
                    {
                        label: 'إِنَّ + اسم مَنْصُوب + جُمْلَة فِعْلِيَّة',
                        arabic: 'مَاجِدٌ يَفْهَمُ → إِنَّ مَاجِدًا يَفْهَمُ',
                        romanized: 'Mājidun yafhamu → inna Mājidan yafhamu',
                        meaning: 'إِنَّ can also precede a verbal sentence - the subject still takes fatha',
                        examples: [
                            { ar: 'مَاجِدٌ يَفْهَمُ اللُّغَةَ الْعَرَبِيَّةَ → إِنَّ مَاجِدًا يَفْهَمُ اللُّغَةَ الْعَرَبِيَّةَ', en: 'Majid understands Arabic → Indeed, Majid understands Arabic' },
                            { ar: 'أَخُونَا يَصْدُقُ دَائِمًا → إِنَّ أَخَانَا يَصْدُقُ دَائِمًا', en: 'Our brother always tells the truth → Indeed, our brother always tells the truth' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-11-4',
            type: 'paragraph',
            titleEn: 'Reading - إِنَّ in Context',
            titleAr: 'قِرَاءَة - إِنَّ فِي الْجُمَل',
            payload: {
                paragraphs: [
                    {
                        lines: [
                            'إِنَّ اللهَ رَبُّنَا وَرَبُّكُمْ.',
                            'إِنَّ مُحَمَّدًا رَسُولُ اللهِ ﷺ.',
                            'إِنَّ الْقُرْآنَ كِتَابُ اللهِ.',
                            'إِنَّ الْإِسْلَامَ دِينُ الرَّحْمَةِ.',
                            'إِنَّ الْحَدِيقَةَ نَظِيفَةٌ.',
                            'إِنَّ هَذِهِ التِّلْمِيذَةَ ذَكِيَّةٌ.',
                            'إِنَّ صَدِيقَكَ عَالِمٌ جَيِّدٌ.',
                            'إِنَّ بَابَ الْجَنَّةِ وَاسِعٌ.',
                        ],
                        translationEn: 'Indeed, Allah is our Lord and your Lord. Indeed, Muhammad is the Messenger of Allah ﷺ. Indeed, the Quran is the Book of Allah. Indeed, Islam is the religion of mercy. Indeed, the garden is clean. Indeed, this female student is intelligent. Indeed, your friend is a good scholar. Indeed, the door of Paradise is wide.',
                    },
                    {
                        lines: [
                            'يَفْهَمُ مَاجِدٌ اللُّغَةَ الْعَرَبِيَّةَ.',
                            'مَاجِدٌ يَفْهَمُ اللُّغَةَ الْعَرَبِيَّةَ.',
                            'إِنَّ مَاجِدًا يَفْهَمُ اللُّغَةَ الْعَرَبِيَّةَ.',
                            'يَصْدُقُ أَخُونَا دَائِمًا.',
                            'أَخُونَا يَصْدُقُ دَائِمًا.',
                            'إِنَّ أَخَانَا يَصْدُقُ دَائِمًا وَلَا يَكْذِبُ أَبَدًا.',
                            'إِنَّ عَائِشَةَ تَعْرِفُ الْخِيَاطَةَ.',
                            'إِنَّ اللُّغَةَ الْعَرَبِيَّةَ مِفْتَاحُ الْقُرْآنِ.',
                        ],
                        translationEn: 'Majid understands the Arabic language. / Majid understands the Arabic language. / Indeed, Majid understands the Arabic language. Our brother always tells the truth. / Our brother always tells the truth. / Indeed, our brother always tells the truth and never lies. Indeed, Aisha knows sewing. Indeed, the Arabic language is the key to the Quran.',
                    },
                ],
            },
        },
    ],
};

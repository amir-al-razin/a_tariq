import type { LessonData } from '../../curriculum';

export const lesson02: LessonData = {
    darsNumber: 2,
    chunks: [
        {
            id: '2-3-2-1',
            type: 'masdar_factory',
            titleEn: 'Masdar Factory - Hollow & Defective Verbs Review',
            titleAr: 'مُرَاجَعَةُ الْمَصَادِر - الأَفْعَالُ الْجَوْفَاءُ وَالنَّاقِصَة',
            payload: {
                baabLabel: 'أَبْوَابٌ مُخْتَلِفَة',
                instruction: 'ن = نَصَرَ, ض = ضَرَبَ, س = سَمِعَ',
                masdarRows: [
                    { masdar: 'السَّوْقُ', masdarEn: 'to drive / pull', baab: 'ن', past: 'سَاقَ', present: 'يَسُوقُ', imperative: 'سُقْ', prohibitive: 'لَا تَسُقْ' },
                    { masdar: 'النَّيْلُ', masdarEn: 'to attain / gain', baab: 'س', past: 'نَالَ', present: 'يَنَالُ', imperative: 'نَلْ', prohibitive: 'لَا تَنَلْ' },
                    { masdar: 'الْمَجِيءُ', masdarEn: 'to come', baab: 'ض', past: 'جَاءَ', present: 'يَجِيءُ', imperative: 'جِئْ', prohibitive: 'لَا تَجِئْ' },
                    { masdar: 'السَّيْرُ', masdarEn: 'to walk / travel', baab: 'ض', past: 'سَارَ', present: 'يَسِيرُ', imperative: 'سِرْ', prohibitive: 'لَا تَسِرْ' },
                    { masdar: 'الْجُوعُ', masdarEn: 'to be hungry', baab: 'ن', past: 'جَاعَ', present: 'يَجُوعُ', imperative: 'جُعْ', prohibitive: 'لَا تَجُعْ' },
                    { masdar: 'السَّيَلَانُ', masdarEn: 'to flow', baab: 'ض', past: 'سَالَ', present: 'يَسِيلُ', imperative: 'سِلْ', prohibitive: 'لَا تَسِلْ' },
                    { masdar: 'الذَّوْبُ', masdarEn: 'to melt', baab: 'ن', past: 'ذَابَ', present: 'يَذُوبُ', imperative: 'ذُبْ', prohibitive: 'لَا تَذُبْ' },
                    { masdar: 'الضَّيَاعُ', masdarEn: 'to be lost / wasted', baab: 'ض', past: 'ضَاعَ', present: 'يَضِيعُ', imperative: 'ضِعْ', prohibitive: 'لَا تَضِعْ' },
                    { masdar: 'الْعَطَشُ', masdarEn: 'to be thirsty', baab: 'س', past: 'عَطِشَ', present: 'يَعْطَشُ', imperative: 'اِعْطَشْ', prohibitive: 'لَا تَعْطَشْ' },
                    { masdar: 'الصَّبْرُ', masdarEn: 'to be patient', baab: 'ض', past: 'صَبَرَ', present: 'يَصْبِرُ', imperative: 'اِصْبِرْ', prohibitive: 'لَا تَصْبِرْ' },
                    { masdar: 'الْحُزْنُ', masdarEn: 'to be sad', baab: 'س', past: 'حَزِنَ', present: 'يَحْزَنُ', imperative: 'اِحْزَنْ', prohibitive: 'لَا تَحْزَنْ' },
                    { masdar: 'الْفَرَحُ', masdarEn: 'to be happy', baab: 'س', past: 'فَرِحَ', present: 'يَفْرَحُ', imperative: 'اِفْرَحْ', prohibitive: 'لَا تَفْرَحْ' },
                    { masdar: 'الْعَيْشُ', masdarEn: 'to live', baab: 'ض', past: 'عَاشَ', present: 'يَعِيشُ', imperative: 'عِشْ', prohibitive: 'لَا تَعِشْ' },
                ],
            },
        },
        {
            id: '2-3-2-2',
            type: 'vocabulary',
            titleEn: 'Vocabulary',
            titleAr: 'الْمُفْرَدَاتُ',
            payload: {
                words: [
                    { id: 1, ar: 'خِرْصٌ', romanized: 'khirṣun', en: 'Greed', emoji: '💰' },
                    { id: 2, ar: 'بَرٌّ', romanized: 'barrun', en: 'Land', emoji: '🏝️' },
                    { id: 3, ar: 'دَمْعٌ', romanized: "dam'un", en: 'Tear(s)', emoji: '😢' },
                    { id: 4, ar: 'عَرَقٌ', romanized: "'araqun", en: 'Sweat', emoji: '💧' },
                    { id: 5, ar: 'صَحْرَاءُ', romanized: 'ṣaḥrāʾu', en: 'Desert', emoji: '🏜️' },
                    { id: 6, ar: 'شُجَاعٌ', romanized: "shujā'un", en: 'Brave', emoji: '🦁' },
                    { id: 7, ar: 'جُرْحٌ', romanized: 'jurḥun', en: 'Wound', emoji: '🩹' },
                    { id: 8, ar: 'لُعَابٌ', romanized: "lu'ābun", en: 'Saliva', emoji: '💧' },
                    { id: 9, ar: 'سُكَّرٌ', romanized: 'sukkarun', en: 'Sugar', emoji: '🍬' },
                ],
            },
        },
        {
            id: '2-3-2-3',
            type: 'grammar_rule',
            titleEn: 'Grammar - Various Uses of سَالَ (to flow)',
            titleAr: 'قَاعِدَة - اِسْتِخْدَامَاتُ سَالَ',
            payload: {
                rules: [
                    {
                        label: 'سَالَ مِنْ - Flowing from different sources',
                        arabic: 'سَالَ مِنْ عَيْنِهِ الدَّمْعُ',
                        romanized: "sāla min 'aynihi d-dam'u",
                        meaning: 'The verb سَالَ (to flow) is used with مِنْ to indicate the source of the flow.',
                        examples: [
                            { ar: 'سَالَ مِنْ عَيْنِهِ الدَّمْعُ', en: 'Tears flowed from his eye.' },
                            { ar: 'سَالَ مِنْ جُرْحِهِ الدَّمُ', en: 'Blood flowed from his wound.' },
                            { ar: 'سَالَ مِنْ جِسْمِهِ الْعَرَقُ', en: 'Sweat flowed from his body.' },
                            { ar: 'سَالَ مِنْ فَمِهِ اللُّعَابُ', en: 'Saliva flowed from his mouth.' },
                            { ar: 'سَالَ مِنَ الْقَرْيَةِ الْمَاءُ', en: 'Water flowed from the village.' },
                        ],
                    },
                    {
                        label: 'الْجُمَلُ بَعْدَ النَّكِرَاتِ صِفَاتٌ - Adjectival Sentence',
                        arabic: 'جَاءَنِي رَجُلٌ يَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ',
                        romanized: "jā'anī rajulun ya'rifu l-lughata l-'arabiyyah",
                        meaning: 'When a complete sentence follows an indefinite noun, the sentence functions as an adjective for that noun.',
                        examples: [
                            { ar: 'جَاءَنِي رَجُلٌ يَعْرِفُ اللُّغَةَ الْعَرَبِيَّةَ', en: 'A man who knows the Arabic language came to me.' },
                            { ar: 'أَلْبَسَ ثَوْبًا لَوْنُهُ جَمِيلٌ', en: 'He is wearing a garment whose color is beautiful.' },
                            { ar: 'هَذَا عَمَلٌ لَا يَضِيعُ أَجْرُهُ', en: 'This is a deed whose reward will not be lost.' },
                            { ar: 'اقْرَأْ كِتَابًا يَنْفَعُكَ فِي دِينِكَ', en: 'Read a book that benefits you in your religion.' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-3-2-4',
            type: 'paragraph',
            titleEn: 'Reading Passages',
            titleAr: 'قِرَاءَة',
            payload: {
                paragraphs: [
                    {
                        title: 'الرَّجُلُ الْجَائِع',
                        titleEn: 'The Hungry Man',
                        lines: [
                            'جَاعَ رَجُلٌ فَقِيرٌ، فَذَهَبَ إِلَى بَابِ رَجُلٍ غَنِيٍّ وَاسْتَطْعَمَهُ.',
                            'كَانَ الْغَنِيُّ رَجُلًا صَالِحًا فَأَكْرَمَ الْجَائِعَ وَأَطْعَمَهُ.',
                            'طَعِمَ الْفَقِيرُ الْجَائِعُ وَشَبِعَ، فَشَكَرَ الْغَنِيَّ.',
                            'قَالَ الْغَنِيُّ : أَطْعَمْتُكَ لِوَجْهِ اللهِ، فَلَا أُرِيدُ مِنْكَ جَزَاءً وَلَا شُكُورًا.',
                            'لَا يَجُوعُ الْإِنْسَانُ وَلَا يَعْطَشُ فِي الْجَنَّةِ أَبَدًا.',
                        ],
                        translationEn: 'A poor man became hungry, so he went to the door of a rich man and asked him for food. The rich man was a righteous man, so he honored the hungry one and fed him. The hungry poor man ate and became full, so he thanked the rich man. The rich man said: "I fed you for the sake of Allah, so I do not want any reward or thanks from you." A person will never get hungry or thirsty in Paradise.',
                    },
                    {
                        title: 'الْمَرْأَةُ الصَّابِرَة',
                        titleEn: 'The Patient Woman',
                        lines: [
                            'حَزِنَتِ الْمَرْأَةُ عَلَى مَوْتِ وَلَدِهَا، فَذَابَ الْقَلْبُ وَسَالَ الدَّمْعُ وَلَكِنَّهَا صَبَرَتْ لِتَنَالَ مِنَ اللهِ أَجْرًا.',
                            'إِنَّ الْبُكَاءَ عَلَى الْمَيِّتِ لَا يَنْفَعُ الْمَيِّتَ شَيْئًا.',
                            'أَيَّتُهَا الْمَرْأَةُ الطَّيِّبَةُ ! اصْبِرِي عَلَى مَوْتِ وَلَدِكِ لِتَنَالِي مِنَ اللهِ أَجْرًا.',
                        ],
                        translationEn: 'The woman became sad over the death of her son, so the heart melted and tears flowed, but she remained patient to attain a reward from Allah. Indeed, crying over the dead does not benefit the dead at all. O good woman! Be patient over the death of your son so that you may attain a reward from Allah.',
                    },
                    {
                        title: 'الْفَلَّاحُ وَالظِّل',
                        titleEn: 'The Farmer and the Shade',
                        lines: [
                            'يَسِيلُ الْعَرَقُ مِنْ جِسْمِ هَذَا الْفَلَّاحِ، لِأَنَّهُ عَمِلَ تَحْتَ الشَّمْسِ وَتَعِبَ مِنَ الْعَمَلِ.',
                            'فَجَلَسَ تَحْتَ ظِلِّ شَجَرَةٍ لِيَسْتَرِيحَ قَلِيلًا.',
                            'قَالَ الْمُجَاهِدُ الشُّجَاعُ : لَنْ أَذُوبَ أَمَامَ الْبَاطِلِ.',
                        ],
                        translationEn: 'Sweat flows from the body of this farmer, because he worked under the sun and got tired from the work. So he sat under the shade of a tree to rest a little. The brave warrior said: "I will never melt (surrender) in front of falsehood."',
                    },
                ],
            },
        },
        {
            id: '2-3-2-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '🍽️',
                        question_ar: 'لِمَاذَا أَطْعَمَ الْغَنِيُّ الرَّجُلَ الْفَقِيرَ ؟',
                        question_en: 'Why did the rich man feed the poor man?',
                        correct_ar: 'أَطْعَمَهُ لِوَجْهِ اللهِ',
                        correct_en: 'He fed him for the sake of Allah.',
                        options_ar: [
                            'أَطْعَمَهُ لِوَجْهِ اللهِ',
                            'أَطْعَمَهُ لِيَأْخُذَ مِنْهُ مَالًا',
                            'أَطْعَمَهُ لِأَنَّهُ صَدِيقُهُ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🌊',
                        question_ar: 'مَتَى جَاءَكَ صَدِيقُكَ يَا خَالِدُ ؟',
                        question_en: 'When did your friend come to you, O Khalid?',
                        correct_ar: 'جَاءَنِي أَمْسِ',
                        correct_en: 'He came to me yesterday.',
                        options_ar: [
                            'جَاءَنِي أَمْسِ',
                            'جَاءَنِي الْيَوْمَ',
                            'لَمْ يَجِئْنِي بَعْدُ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🦁',
                        question_ar: 'مَاذَا قَالَ الْمُجَاهِدُ الشُّجَاعُ ؟',
                        question_en: 'What did the brave warrior say?',
                        correct_ar: 'قَالَ : لَنْ أَذُوبَ أَمَامَ الْبَاطِلِ',
                        correct_en: "He said: 'I will never surrender in front of falsehood.'",
                        options_ar: [
                            'قَالَ : لَنْ أَذُوبَ أَمَامَ الْبَاطِلِ',
                            'قَالَ : سَأَذْهَبُ إِلَى الْبَيْتِ',
                            'قَالَ : لَنْ أَقَاتِلَ',
                        ],
                        questionType: 'general',
                    },
                ],
            },
        },
        {
            id: '2-3-2-6',
            type: 'assessment',
            titleEn: 'Exercise - Verb Forms Review',
            titleAr: 'تَمْرِين - مُرَاجَعَةُ أَشْكَالِ الأَفْعَال',
            payload: {
                instruction: 'Choose the correct meaning for each Arabic verb form.',
                questions: [
                    {
                        emoji: '🚶',
                        question_ar: 'لَنْ يَجِيءَ',
                        question_en: 'What does this mean?',
                        correct_ar: 'He will not come.',
                        correct_en: 'He will not come.',
                        options_ar: [
                            'He will not come.',
                            'He came.',
                            'Come! (command)',
                        ],
                    },
                    {
                        emoji: '🏆',
                        question_ar: 'يَعْمَلُ عَمَلَهُ لِيَنَالَ مِنَ اللهِ أَجْرًا',
                        question_en: 'What does this mean?',
                        correct_ar: 'He does his work to attain a reward from Allah.',
                        correct_en: 'He does his work to attain a reward from Allah.',
                        options_ar: [
                            'He does his work to attain a reward from Allah.',
                            'He worked to earn money.',
                            'He will not work for a reward.',
                        ],
                    },
                    {
                        emoji: '🌊',
                        question_ar: 'سَالَ مِنْ جُرْحِهِ الدَّمُ',
                        question_en: 'What does this mean?',
                        correct_ar: 'Blood flowed from his wound.',
                        correct_en: 'Blood flowed from his wound.',
                        options_ar: [
                            'Blood flowed from his wound.',
                            'He washed his wound.',
                            'His wound healed.',
                        ],
                    },
                ],
            },
        },
    ],
};

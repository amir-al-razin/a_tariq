import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
    darsNumber: 3,
    chunks: [
        {
            id: '2-2-3-1',
            type: 'masdar_factory',
            titleEn: 'Masdar Factory - Defective Verbs (نَاقِص)',
            titleAr: 'الْمَصَادِرُ - الأَفْعَالُ النَّاقِصَة',
            payload: {
                baabLabel: 'أَبْوَابٌ مُخْتَلِفَة',
                instruction: 'ن = نَصَرَ, ض = ضَرَبَ, س = سَمِعَ, ف = فَتَحَ',
                masdarRows: [
                    { masdar: 'الدَّعْوَةُ', masdarEn: 'calling / inviting', baab: 'ن', past: 'دَعَا', present: 'يَدْعُو', imperative: 'اُدْعُ', prohibitive: 'لَا تَدْعُ' },
                    { masdar: 'التِّلَاوَةُ', masdarEn: 'recitation', baab: 'ن', past: 'تَلَا', present: 'يَتْلُو', imperative: 'اُتْلُ', prohibitive: 'لَا تَتْلُ' },
                    { masdar: 'النَّجَاةُ', masdarEn: 'rescue / salvation', baab: 'ن', past: 'نَجَا', present: 'يَنْجُو', imperative: 'اُنْجُ', prohibitive: 'لَا تَنْجُ' },
                    { masdar: 'السَّقْيُ', masdarEn: 'giving to drink', baab: 'ض', past: 'سَقَى', present: 'يَسْقِي', imperative: 'اِسْقِ', prohibitive: 'لَا تَسْقِ' },
                    { masdar: 'الْبُكَاءُ', masdarEn: 'crying / weeping', baab: 'ض', past: 'بَكَى', present: 'يَبْكِي', imperative: 'اِبْكِ', prohibitive: 'لَا تَبْكِ' },
                    { masdar: 'الْمَشْيُ', masdarEn: 'walking', baab: 'ض', past: 'مَشَى', present: 'يَمْشِي', imperative: 'اِمْشِ', prohibitive: 'لَا تَمْشِ' },
                    { masdar: 'الرَّمْيُ', masdarEn: 'throwing / casting', baab: 'ض', past: 'رَمَى', present: 'يَرْمِي', imperative: 'اِرْمِ', prohibitive: 'لَا تَرْمِ' },
                    { masdar: 'الرِّضْوَانُ', masdarEn: 'being pleased', baab: 'س', past: 'رَضِيَ', present: 'يَرْضَى', imperative: 'اِرْضَ', prohibitive: 'لَا تَرْضَ' },
                    { masdar: 'النِّسْيَانُ', masdarEn: 'forgetting', baab: 'س', past: 'نَسِيَ', present: 'يَنْسَى', imperative: 'اِنْسَ', prohibitive: 'لَا تَنْسَ' },
                    { masdar: 'الْبَقَاءُ', masdarEn: 'remaining', baab: 'س', past: 'بَقِيَ', present: 'يَبْقَى', imperative: 'اِبْقَ', prohibitive: 'لَا تَبْقَ' },
                    { masdar: 'السَّعْيُ', masdarEn: 'striving / trying', baab: 'ف', past: 'سَعَى', present: 'يَسْعَى', imperative: 'اِسْعَ', prohibitive: 'لَا تَسْعَ' },
                    { masdar: 'النَّهْيُ', masdarEn: 'forbidding', baab: 'ف', past: 'نَهَى', present: 'يَنْهَى', imperative: 'اِنْهَ', prohibitive: 'لَا تَنْهَ' },
                    { masdar: 'الرَّعْيُ', masdarEn: 'grazing', baab: 'ف', past: 'رَعَى', present: 'يَرْعَى', imperative: 'اِرْعَ', prohibitive: 'لَا تَرْعَ' },
                    { masdar: 'الْبِنَاءُ', masdarEn: 'building / constructing', baab: 'ض', past: 'بَنَى', present: 'يَبْنِي', imperative: 'اِبْنِ', prohibitive: 'لَا تَبْنِ' },
                ],
            },
        },
        {
            id: '2-2-3-2',
            type: 'vocabulary',
            titleEn: 'Vocabulary',
            titleAr: 'الْمُفْرَدَاتُ',
            payload: {
                words: [
                    { id: 1, ar: 'أَيُّ شَيْءٍ', romanized: "ayyu shay'in", en: 'Which thing?', emoji: '❓' },
                    { id: 2, ar: 'كُلُّ شَيْءٍ', romanized: "kullu shay'in", en: 'Everything', emoji: '🌐' },
                    { id: 3, ar: 'عَطْشَانُ', romanized: "'aṭshānu", en: 'Thirsty', emoji: '💧' },
                    { id: 4, ar: 'عُشْبٌ', romanized: "'ushbun", en: 'Grass', emoji: '🌿' },
                    { id: 5, ar: 'جُنْدِيٌّ', romanized: 'jundiyyun', en: 'Soldier', emoji: '⚔️' },
                    { id: 6, ar: 'غَنَمٌ', romanized: 'ghanamun', en: 'Sheep', emoji: '🐑' },
                    { id: 7, ar: 'مَرْعًى', romanized: "mar'an", en: 'Pasture', emoji: '🌾' },
                    { id: 8, ar: 'الْمُنْكَرُ', romanized: 'al-munkaru', en: 'Evil deed', emoji: '🚫' },
                    { id: 9, ar: 'مَحْشَرٌ', romanized: 'maḥsharun', en: 'Gathering place / Assembly', emoji: '👥' },
                    { id: 10, ar: 'إِثْمٌ', romanized: 'ithmun', en: 'Sin', emoji: '⚠️' },
                    { id: 11, ar: 'الْفَحْشَاءُ', romanized: 'al-faḥshāʾu', en: 'Indecency', emoji: '🚫' },
                    { id: 12, ar: 'جَائِزَةٌ', romanized: "jā'izatun", en: 'Prize / Award', emoji: '🏆' },
                    { id: 13, ar: 'فَضْلٌ', romanized: 'faḍlun', en: 'Grace / Bounty', emoji: '🎁' },
                ],
            },
        },
        {
            id: '2-2-3-3',
            type: 'grammar_rule',
            titleEn: 'Grammar - أَيُّ / أَيَّةُ (Which) and كُلُّ (Every)',
            titleAr: 'قَاعِدَة - أَيُّ وَأَيَّةُ وَكُلُّ',
            payload: {
                rules: [
                    {
                        label: 'أَيُّ (m) / أَيَّةُ (f)',
                        arabic: 'أَيُّ رَجُلٍ / أَيَّةُ امْرَأَةٍ',
                        romanized: "ayyu rajulin / ayyatu mra'atin",
                        meaning: "أَيُّ is used with masculine nouns and أَيَّةُ with feminine nouns to mean 'which'.",
                        examples: [
                            { ar: 'أَيُّ رَجُلٍ', en: 'Which man?' },
                            { ar: 'أَيَّةُ امْرَأَةٍ', en: 'Which woman?' },
                            { ar: 'أَيُّ بَيْتٍ', en: 'Which house?' },
                            { ar: 'أَيَّةُ غُرْفَةٍ', en: 'Which room?' },
                            { ar: 'كُلُّ رَجُلٍ', en: 'Every man' },
                            { ar: 'كُلُّ امْرَأَةٍ', en: 'Every woman' },
                            { ar: 'كُلُّ تِلْمِيذٍ', en: 'Every male student' },
                            { ar: 'كُلُّ تِلْمِيذَةٍ', en: 'Every female student' },
                        ],
                    },
                ],
            },
        },
        {
            id: '2-2-3-4',
            type: 'paragraph',
            titleEn: 'Reading Passages',
            titleAr: 'قِرَاءَة',
            payload: {
                paragraphs: [
                    {
                        title: 'الدَّعْوَةُ إِلَى اللهِ',
                        titleEn: 'The Call to Allah',
                        lines: [
                            'اللهُ يَدْعُوكُمْ إِلَى الْجَنَّةِ وَالشَّيْطَانُ يَدْعُوكُمْ إِلَى النَّارِ.',
                            'دَعَانَا رَسُولُ اللهِ (صلى الله عليه وسلم) إِلَى الْخَيْرِ.',
                            'أَيُّهَا الْإِنْسَانُ ! لَا تَدْعُ مَعَ اللهِ أَحَدًا.',
                        ],
                        translationEn: 'Allah calls you to Paradise and Satan calls you to the Fire. The Messenger of Allah (peace be upon him) called us to goodness. O human! Do not call upon anyone alongside Allah.',
                    },
                    {
                        title: 'الطِّفْلُ يَتَعَلَّمُ الْمَشْي',
                        titleEn: 'The Child Learns to Walk',
                        lines: [
                            'كَانَ الطِّفْلُ الصَّغِيرُ لَا يَسْتَطِيعُ أَنْ يَمْشِيَ، فَكَانَ يَمْشِي وَيَسْقُطُ، ثُمَّ يَقُومُ وَيَمْشِي وَيَسْقُطُ، هَكَذَا تَعَلَّمَ الْمَشْيَ.',
                            'مَنْ عَلَّمَ الطِّفْلَ الصَّغِيرَ أَنْ يَمْشِيَ ؟ اللهُ عَلَّمَهُ.',
                        ],
                        translationEn: 'The small child was not able to walk, so he would walk and fall, then get up and walk and fall - this is how he learned to walk. Who taught the small child to walk? Allah taught him.',
                    },
                    {
                        title: 'يَوْمُ الْقِيَامَة',
                        titleEn: 'The Day of Resurrection',
                        lines: [
                            'قَالَ الْعَالِمُ فِي وَعْظِهِ : سَتَقُومُ الْقِيَامَةُ وَيَفْنَى الْعَالَمُ.',
                            'يَفْنَى كُلُّ شَيْءٍ - تَفْنَى الْأَرْضُ وَتَفْنَى السَّمَاءُ.',
                            'لَا يَبْقَى شَيْءٌ وَيَبْقَى وَجْهُ رَبِّكَ.',
                            'ثُمَّ يَجْمَعُ اللهُ عِبَادَهُ فِي الْمَحْشَرِ وَيُحَاسِبُهُمْ وَيَجْزِيهِمْ.',
                        ],
                        translationEn: 'The scholar said in his sermon: "The Resurrection will come and the world will perish. Everything will perish - the earth will perish and the sky will perish. Nothing will remain except the Face of your Lord. Then Allah will gather His servants in the assembly and hold them accountable and recompense them."',
                    },
                    {
                        title: 'الصَّلَاةُ وَالنَّهْيُ عَنِ الْفَحْشَاء',
                        titleEn: 'Prayer and Forbidding Indecency',
                        lines: [
                            'نَهَانَا اللهُ عَنِ الْخَمْرِ وَالْمَيْسِرِ وَقَالَ : فِيهِمَا إِثْمٌ كَبِيرٌ.',
                            'إِنَّ الصَّلَاةَ تَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ.',
                            'رَضِيَ اللهُ عَنِ الصَّحَابَةِ لِعَمَلِهِمْ.',
                        ],
                        translationEn: 'Allah forbade us from wine and gambling and said: "In them is great sin." Indeed, prayer forbids indecency and evil. Allah was pleased with the Companions for their deeds.',
                    },
                ],
            },
        },
        {
            id: '2-2-3-5',
            type: 'q_and_a',
            titleEn: 'Comprehension Q&A',
            titleAr: 'أَسْئِلَةُ الْفَهْم',
            payload: {
                instruction: 'Read each question and choose the correct answer.',
                questions: [
                    {
                        emoji: '🕌',
                        question_ar: 'لِمَاذَا دَعَا خَالِدٌ صَدِيقَهُ إِلَى بَيْتِهِ ؟',
                        question_en: 'Why did Khalid invite his friend to his house?',
                        correct_ar: 'دَعَاهُ لِيَلْعَبَ مَعَهُ فِي حَدِيقَةِ الْمَنْزِلِ',
                        correct_en: 'He invited him to play with him in the house garden.',
                        options_ar: [
                            'دَعَاهُ لِيَلْعَبَ مَعَهُ فِي حَدِيقَةِ الْمَنْزِلِ',
                            'دَعَاهُ لِيَأْكُلَ مَعَهُ',
                            'دَعَاهُ لِيَدْرُسَ مَعَهُ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '👶',
                        question_ar: 'مَنْ عَلَّمَ الطِّفْلَ الصَّغِيرَ أَنْ يَمْشِيَ ؟',
                        question_en: 'Who taught the small child to walk?',
                        correct_ar: 'اللهُ عَلَّمَهُ',
                        correct_en: 'Allah taught him.',
                        options_ar: [
                            'اللهُ عَلَّمَهُ',
                            'أُمُّهُ عَلَّمَتْهُ',
                            'أَبُوهُ عَلَّمَهُ',
                        ],
                        questionType: 'general',
                    },
                    {
                        emoji: '🌙',
                        question_ar: 'هَلْ يَبْقَى شَيْءٌ يَوْمَ الْقِيَامَةِ ؟',
                        question_en: 'Does anything remain on the Day of Resurrection?',
                        correct_ar: 'لَا يَبْقَى شَيْءٌ إِلَّا وَجْهُ رَبِّنَا',
                        correct_en: 'Nothing remains except the Face of our Lord.',
                        options_ar: [
                            'لَا يَبْقَى شَيْءٌ إِلَّا وَجْهُ رَبِّنَا',
                            'نَعَمْ، تَبْقَى الْأَرْضُ',
                            'نَعَمْ، تَبْقَى السَّمَاءُ',
                        ],
                        questionType: 'hal',
                    },
                ],
            },
        },
        {
            id: '2-2-3-6',
            type: 'assessment',
            titleEn: "Exercise - Du\'a Phrases",
            titleAr: 'تَمْرِين - عِبَارَاتُ الدُّعَاء',
            payload: {
                instruction: "Choose the correct English meaning for each du\'a phrase.",
                questions: [
                    {
                        emoji: '🤲',
                        question_ar: 'جَزَاكَ اللهُ خَيْرًا',
                        question_en: "What does this du\'a mean?",
                        correct_ar: 'May Allah reward you with good.',
                        correct_en: 'May Allah reward you with good.',
                        options_ar: [
                            'May Allah reward you with good.',
                            'May Allah forgive you.',
                            'May Allah bless your family.',
                        ],
                    },
                    {
                        emoji: '🤲',
                        question_ar: 'شَفَاكَ اللهُ',
                        question_en: "What does this du\'a mean?",
                        correct_ar: 'May Allah heal you.',
                        correct_en: 'May Allah heal you.',
                        options_ar: [
                            'May Allah heal you.',
                            'May Allah guide you.',
                            'May Allah protect you.',
                        ],
                    },
                    {
                        emoji: '🤲',
                        question_ar: 'بَارَكَ اللهُ فِي أَهْلِكَ وَمَالِكَ',
                        question_en: "What does this du\'a mean?",
                        correct_ar: 'May Allah bless your family and wealth.',
                        correct_en: 'May Allah bless your family and wealth.',
                        options_ar: [
                            'May Allah bless your family and wealth.',
                            'May Allah forgive your family.',
                            'May Allah increase your knowledge.',
                        ],
                    },
                ],
            },
        },
    ],
};

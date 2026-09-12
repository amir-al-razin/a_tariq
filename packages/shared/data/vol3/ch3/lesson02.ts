import type { LessonData } from '../../curriculum';

export const lesson02: LessonData = {
  darsNumber: 2,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Comparatives',
      titleAr: 'الْمُفْرَدَاتُ',
      payload: {
        words: [
          { id: 1, ar: 'أَجْمَلُ', romanized: 'ajmal', en: 'more/most beautiful', emoji: '✨' },
          { id: 2, ar: 'أَكْبَرُ', romanized: 'akbar', en: 'bigger/older/biggest', emoji: '📈' },
          { id: 3, ar: 'أَنْظَفُ', romanized: 'anẓaf', en: 'cleaner', emoji: '🧼' },
          { id: 4, ar: 'أَطْوَلُ', romanized: 'aṭwal', en: 'taller/longer', emoji: '📏' },
          { id: 5, ar: 'أَقْصَرُ', romanized: 'aqṣar', en: 'shorter', emoji: '📏' },
          { id: 6, ar: 'أَوْسَعُ', romanized: 'awsaʿ', en: 'wider/more spacious', emoji: '↔️' },
          { id: 7, ar: 'أَضْيَقُ', romanized: 'aḍyaq', en: 'narrower', emoji: '><' },
          { id: 8, ar: 'أَغْلَى', romanized: 'aghlā', en: 'more expensive', emoji: '💎' },
          { id: 9, ar: 'أَلَذُّ', romanized: 'aladhdh', en: 'tastier', emoji: '😋' },
          { id: 10, ar: 'أَغْنَى', romanized: 'aghnā', en: 'richer', emoji: '💰' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Noun of Superiority (Comparative & Superlative)',
      titleAr: 'اسْمُ التَّفْضِيلِ',
      payload: {
        rules: [
          {
            label: 'Pattern أَفْعَلُ',
            arabic: 'خَالِدٌ أَكْبَرُ مِن مَاجِدٍ',
            romanized: 'khālidun akbaru min mājid',
            meaning:
              "The pattern أَفْعَلُ is used for comparatives (more than) and superlatives (most). When comparing two items using مِن (than), it stays masculine singular regardless of the subject's gender.",
            examples: [
              { ar: 'خَالِدٌ أَكْبَرُ مِن مَاجِدٍ', en: 'Khalid is older/bigger than Majid' },
              { ar: 'عَائِشَةُ أَكْبَرُ مِن فَاطِمَةَ', en: 'Aisha is older/bigger than Fatima' },
            ],
          },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading Passage',
      titleAr: 'قِطْعَةُ الْقِرَاءَةِ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Comparisons',
            lines: [
              'اللّٰهُ أَكْبَرُ مِن كُلِّ كَبِيرٍ . اللّٰهُ أَرْحَمُ مِن كُلِّ رَحِيمٍ . رَسُولُنَا أَكْرَمُ مِن كُلِّ كَرِيمٍ .',
              'يَا رَاشِدُ ! أَنْتَ ضَعِيفٌ وَأَنْتَ أَضْعَفُ مِنِّي . تِلْكَ السَّاعَةُ غَالِيَةٌ وَهَذِهِ السَّاعَةُ أَغْلَى مِن تِلْكَ . لِبَاسُ رَاشِدٍ أَنْظَفُ مِن لِبَاسِ مَاجِدٍ . زَيْنَبُ بِنْتٌ نَظِيفَةٌ وَعَائِشَةُ أَنْظَفُ مِنْهَا .',
              'أَنْتَ أَغْنَى الْأَغْنِيَاءِ ، وَأَسْخَى الْأَسْخِيَاءِ . هَذَا التِّلْمِيذُ أَذْكَى الْأَذْكِيَاءِ .',
            ],
            translationEn:
              "Allah is greater than every great one. Allah is more merciful than every merciful one. Our Messenger is more noble than every noble one. O Rashid! You are weak, and you are weaker than me. That watch is expensive, and this watch is more expensive than that one. Rashid's clothing is cleaner than Majid's clothing. Zainab is a clean girl, and Aisha is cleaner than her. You are the richest of the rich, and the most generous of the generous. This student is the smartest of the smart ones.",
          },
          {
            titleEn: 'Superlatives',
            lines: [
              'كَانَ خَالِدٌ أَكْبَرَ مِن شَاهِدٍ . كَانَتْ فَاطِمَةُ أَنْظَفَ مِن عَائِشَةَ . كُنْتُ أَشْجَعَ النَّاسِ قَبْلَ إِسْلَامِكَ ، فَكَيْفَ تَخَافُ الْآنَ هَؤُلَاءِ النَّاسَ الَّذِينَ يُشْرِكُونَ بِاللّٰهِ وَيَعْبُدُونَ الْأَصْنَامَ .. بَعْدَ أَنْ أَسْلَمَ الرَّجُلُ صَارَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَحَبَّ النَّاسِ إِلَيْهِ .',
              'رَاشِدٌ أَفْضَلُ مِن خَالِدٍ . أَظُنُّ رَاشِدًا أَفْضَلَ مِن خَالِدٍ . هَذِهِ الْفَاكِهَةُ أَلَذُّ الْفَوَاكِهِ . وَجَدْتُ هَذِهِ الْفَاكِهَةَ أَلَذَّ الْفَوَاكِهِ . أَنَا ضَعِيفٌ وَلَكِن لَسْتُ أَضْعَفَ مِنكَ . لَسْتُ بِأَضْعَفَ مِنكَ . لَسْتَ بِأَضْعَفِ النَّاسِ . هُوَ أَشْجَعُ النَّاسِ . هُوَ مِن أَشْجَعِ النَّاسِ . سَلِمْتُ عَلَى أَحَبِّ النَّاسِ إِلَيَّ ، وَهُوَ مُعَلِّمِي .',
            ],
            translationEn:
              'Khalid was older than Shahid. Fatima was cleaner than Aisha. You were the bravest of people before your Islam, so how do you fear now these people who associate partners with Allah and worship idols... After the man accepted Islam, the Messenger of Allah (peace be upon him) became the most beloved of people to him. Rashid is better than Khalid. I think Rashid is better than Khalid. This fruit is the most delicious of fruits. I found this fruit to be the most delicious of fruits. I am weak but I am not weaker than you. I am not weaker than you. You are not the weakest of people. He is the bravest of people. He is among the bravest of people. I greeted the most beloved of people to me, and he is my teacher.',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'assessment',
      titleEn: 'Exercise 1: Fill in the blanks',
      titleAr: 'التَّمْرِينُ الْأَوَّلُ : امْلَأِ الْفَرَاغَ',
      payload: {
        instruction: 'Fill in the blanks with appropriate comparatives or superlatives.',
        questions: [
          {
            emoji: '🟢',
            question_ar: 'اللَّوْنُ الْأَخْضَرُ ... الْأَلْوَانِ .',
            question_en: 'The green color is [...] of colors.',
            correct_ar: 'أَجْمَلُ',
            correct_en: 'the most beautiful',
            options_ar: ['أَجْمَلُ', 'أَكْبَرُ', 'أَطْوَلُ'],
            questionType: 'general',
          },
          {
            emoji: '👕',
            question_ar: 'اللِّبَاسُ الْأَبْيَضُ ... إِلَيَّ مِنَ اللِّبَاسِ الْأَحْمَرِ .',
            question_en: 'White clothing is [...] to me than red clothing.',
            correct_ar: 'أَحَبُّ',
            correct_en: 'more beloved',
            options_ar: ['أَحَبُّ', 'أَطْوَلُ', 'أَضْيَقُ'],
            questionType: 'general',
          },
          {
            emoji: '🌸',
            question_ar: 'فَصْلُ الرَّبِيعِ ... الْفُصُولِ ، لِأَنَّهُ فَصْلُ الْأَزْهَارِ .',
            question_en:
              'The spring season is [...] of seasons, because it is the season of flowers.',
            correct_ar: 'أَجْمَلُ',
            correct_en: 'the most beautiful',
            options_ar: ['أَجْمَلُ', 'أَكْبَرُ', 'أَصْغَرُ'],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'assessment',
      titleEn: 'Exercise 2: Ponder the Genitive State',
      titleAr: 'التَّمْرِينُ الثَّانِي : فَكِّرْ فِي حَالَةِ الْجَرِّ',
      payload: {
        instruction: 'Ponder how the grammatical state changes with the preposition.',
        questions: [
          {
            emoji: '🏙️',
            question_ar: 'لَيْسَتْ هَذِهِ الْمَدِينَةُ بِـ ... مِن تِلْكَ الْمَدِينَةِ .',
            question_en: 'This city is not [...] than that city.',
            explanation: 'Comparatives take a Fathah instead of Kasrah here.',
            correct_ar: 'أَكْبَرَ',
            correct_en: 'bigger',
            options_ar: ['أَكْبَرَ', 'أَكْبَرِ', 'أَكْبَرُ'],
            questionType: 'general',
          },
          {
            emoji: '🏙️',
            question_ar: 'لَيْسَتْ هَذِهِ الْمَدِينَةُ بِـ ... الْمُدُنِ .',
            question_en: 'This city is not [...] of cities.',
            explanation: 'It takes a Kasrah here because it is Mudaf/Possessed.',
            correct_ar: 'أَكْبَرِ',
            correct_en: 'the biggest',
            options_ar: ['أَكْبَرِ', 'أَكْبَرَ', 'أَكْبَرُ'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

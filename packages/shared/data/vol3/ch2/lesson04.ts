import type { LessonData } from '../../curriculum';

export const lesson04: LessonData = {
  darsNumber: 4,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Subjunctive State of Defective Verbs',
      titleAr: 'حَالَةُ النَّصْبِ فِي الأَفْعَالِ النَّاقِصَةِ',
      payload: {
        rules: [
          {
            label: 'With لَنْ and لِـ',
            arabic: 'لَنْ يَدْعُوَ / لِيَدْعُوَ',
            romanized: 'lan yadʿuwa / liyadʿuwa',
            meaning: 'The final weak letter shows a fatḥah in the subjunctive.',
            examples: [{ ar: 'لَنْ يَبْكِيَ', en: 'He will never cry' }],
          },
          {
            label: 'Form IV / II / VIII examples',
            arabic: 'لَنْ يُلْقِيَ / لِيُصَلِّيَ / لِيَشْتَرِيَ',
            romanized: 'lan yulqiya / liyuṣalliya / liyashtarī',
            meaning: 'Different weak verb patterns follow the same subjunctive idea.',
            examples: [{ ar: 'لِيُصَلِّيَ', en: 'In order to pray' }],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Hope, Warning, and Freshness',
      titleAr: 'المُفْرَدَاتُ: الرَّجَاءُ وَالتَّحْذِيرُ وَالنَّضَارَةُ',
      payload: {
        words: [
          { id: 1, ar: 'هَدْيٌ', romanized: 'hady', en: 'Guidance', emoji: '🧭' },
          { id: 2, ar: 'حَذَّرَ', romanized: 'ḥadhdhara', en: 'Warned', emoji: '⚠️' },
          {
            id: 3,
            ar: 'بَاسِطًا يَدَهُ',
            romanized: 'bāsiṭan yadahū',
            en: 'Stretching his hand',
            emoji: '🤲',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading: Guidance, Iftar, and Humiliation',
      titleAr: 'القِرَاءَةُ: الهِدَايَةُ وَالفِطْرُ وَالإِذْلَالُ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Allah perfects His favor',
            lines: [
              'قَالَ اللّٰهُ تَعَالَى: الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي.',
              'أَعَزَّنَا اللّٰهُ بِالْإِسْلَامِ، وَأَرْسَلَ رَسُولَهُ لِيَدْعُوَ النَّاسَ إِلَى اللّٰهِ.',
            ],
            translationEn:
              'Allah the Exalted said: Today I have perfected for you your religion and completed My favor upon you. Allah honored us with Islam and sent His Messenger to call people to Allah.',
          },
          {
            titleEn: 'Iftar and preparation',
            lines: [
              'قَالَتِ الْأُمُّ لِأَوْلَادِهَا: أَدْخُلُ الْآنَ الْمَطْبَخَ لِأُعِدَّ لَكُمْ طَعَامَ الْغَدَاءِ.',
              'دَعَوْتُ الصَّائِمَ إِلَى الْفِطْرِ وَقُلْتُ لَهُ: خُذْ فِطْرَكَ يَا صَائِمُ.',
            ],
            translationEn:
              'The mother said to her children: I will enter the kitchen now to prepare lunch for you. I invited the fasting person to iftar and said: take your iftar, O fasting person.',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'q_and_a',
      titleEn: 'Exercise Questions',
      titleAr: 'أَسْئِلَةُ التَّمْرِينِ',
      payload: {
        instruction: 'Answer from the reading and the rule on لَنْ / لِـ.',
        questions: [
          {
            emoji: '📖',
            question_ar: 'مَاذَا قَالَ اللّٰهُ تَعَالَى؟',
            question_en: 'What did Allah the Exalted say?',
            correct_ar: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ',
            correct_en: 'Today I have perfected for you your religion',
            options_ar: [
              'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ',
              'لَا تَقْرَأْ',
              'إِنْ شَاءَ اللّٰهُ',
            ],
            questionType: 'hal',
          },
          {
            emoji: '🍽️',
            question_ar: 'لِمَاذَا دَعَوْتُ الصَّائِمَ؟',
            question_en: 'Why did I invite the fasting person?',
            correct_ar: 'إِلَى الْفِطْرِ',
            correct_en: 'To iftar',
            options_ar: ['إِلَى الْفِطْرِ', 'إِلَى السَّوْقِ', 'إِلَى النَّوْمِ'],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'application',
      titleEn: 'Application: Subjunctive Examples',
      titleAr: 'التَّطْبِيقُ: أَمْثِلَةُ النَّصْبِ',
      payload: {
        instruction: 'Read the subjunctive examples and compare them with the indicative forms.',
        items: [
          { emoji: '🤲', ar: 'لَنْ يَدْعُوَ', en: 'He will never call' },
          { emoji: '😢', ar: 'لَنْ يَبْكِيَ', en: 'He will never cry' },
          { emoji: '🤷', ar: 'لَنْ يَنْسَى', en: 'He will never forget' },
          { emoji: '🕌', ar: 'لِيُصَلِّيَ', en: 'In order to pray' },
          { emoji: '🛒', ar: 'لِيَشْتَرِيَ', en: 'In order to buy' },
        ],
      },
    },
  ],
};

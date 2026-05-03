import type { LessonData } from '../../curriculum';

export const lesson04: LessonData = {
  darsNumber: 4,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Subjunctive State of Defective Verbs',
      titleAr: 'حَالَةُ النَّصْبِ فِي الأَفْعَالِ النَّاقِصَةِ',
      titleBn: 'নকিস ক্রিয়ার নসব অবস্থা',
      payload: {
        rules: [
          {
            label: 'With لَنْ and لِـ',
            labelBn: 'لَنْ ও لِـ এর সাথে',
            arabic: 'لَنْ يَدْعُوَ / لِيَدْعُوَ',
            romanized: 'lan yadʿuwa / liyadʿuwa',
            meaning: 'The final weak letter shows a fatḥah in the subjunctive.',
            meaningBn: 'নসব অবস্থায় শেষের দুর্বল অক্ষরে ফাতহা দেখা যায়।',
            examples: [{ ar: 'لَنْ يَبْكِيَ', en: 'He will never cry', bn: 'সে কখনো কাঁদবে না' }],
          },
          {
            label: 'Form IV / II / VIII examples',
            labelBn: 'রূপ IV / II / VIII উদাহরণ',
            arabic: 'لَنْ يُلْقِيَ / لِيُصَلِّيَ / لِيَشْتَرِيَ',
            romanized: 'lan yulqiya / liyuṣalliya / liyashtarī',
            meaning: 'Different weak verb patterns follow the same subjunctive idea.',
            meaningBn: 'বিভিন্ন দুর্বল ক্রিয়া-ধারা একই নসব নীতি অনুসরণ করে।',
            examples: [{ ar: 'لِيُصَلِّيَ', en: 'In order to pray', bn: 'সালাত পড়ার জন্য' }],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Hope, Warning, and Freshness',
      titleAr: 'المُفْرَدَاتُ: الرَّجَاءُ وَالتَّحْذِيرُ وَالنَّضَارَةُ',
      titleBn: 'শব্দভান্ডার: আশা, সতর্কতা, সতেজতা',
      payload: {
        words: [
          { id: 1, ar: 'هَدْيٌ', romanized: 'hady', en: 'Guidance', bn: 'পথনির্দেশ', emoji: '🧭' },
          { id: 2, ar: 'حَذَّرَ', romanized: 'ḥadhdhara', en: 'Warned', bn: 'সতর্ক করল', emoji: '⚠️' },
          { id: 3, ar: 'بَاسِطًا يَدَهُ', romanized: 'bāsiṭan yadahū', en: 'Stretching his hand', bn: 'হাত বাড়িয়ে', emoji: '🤲' },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading: Guidance, Iftar, and Humiliation',
      titleAr: 'القِرَاءَةُ: الهِدَايَةُ وَالفِطْرُ وَالإِذْلَالُ',
      titleBn: 'পাঠ: হেদায়াত, ইফতার ও অপমান',
      payload: {
        paragraphs: [
          {
            titleEn: 'Allah perfects His favor',
            titleBn: 'আল্লাহ তাঁর নেয়ামত পূর্ণ করেন',
            lines: [
              'قَالَ اللّٰهُ تَعَالَى: الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي.',
              'أَعَزَّنَا اللّٰهُ بِالْإِسْلَامِ، وَأَرْسَلَ رَسُولَهُ لِيَدْعُوَ النَّاسَ إِلَى اللّٰهِ.',
            ],
            translationEn: 'Allah the Exalted said: Today I have perfected for you your religion and completed My favor upon you. Allah honored us with Islam and sent His Messenger to call people to Allah.',
            translationBn: 'আল্লাহ তাআলা বলেছেন: আজ আমি তোমাদের জন্য তোমাদের দ্বীনকে পূর্ণ করলাম এবং তোমাদের ওপর আমার নেয়ামত সম্পূর্ণ করলাম। আল্লাহ ইসলাম দিয়ে আমাদের সম্মানিত করেছেন এবং তাঁর রাসূলকে মানুষকে আল্লাহর দিকে ডাকতে পাঠিয়েছেন।',
          },
          {
            titleEn: 'Iftar and preparation',
            titleBn: 'ইফতার ও প্রস্তুতি',
            lines: [
              'قَالَتِ الْأُمُّ لِأَوْلَادِهَا: أَدْخُلُ الْآنَ الْمَطْبَخَ لِأُعِدَّ لَكُمْ طَعَامَ الْغَدَاءِ.',
              'دَعَوْتُ الصَّائِمَ إِلَى الْفِطْرِ وَقُلْتُ لَهُ: خُذْ فِطْرَكَ يَا صَائِمُ.',
            ],
            translationEn: 'The mother said to her children: I will enter the kitchen now to prepare lunch for you. I invited the fasting person to iftar and said: take your iftar, O fasting person.',
            translationBn: 'মা সন্তানদের বললেন: আমি এখন রান্নাঘরে যাচ্ছি তোমাদের জন্য দুপুরের খাবার প্রস্তুত করতে। আমি রোযাদারকে ইফতারের জন্য ডাকলাম এবং বললাম: তোমার ইফতার নাও।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'q_and_a',
      titleEn: 'Exercise Questions',
      titleAr: 'أَسْئِلَةُ التَّمْرِينِ',
      titleBn: 'অনুশীলন প্রশ্ন',
      payload: {
        instruction: 'Answer from the reading and the rule on لَنْ / لِـ.',
        instructionBn: 'পাঠ্য ও لَنْ / لِـ নিয়ম থেকে উত্তর দাও।',
        questions: [
          {
            emoji: '📖',
            question_ar: 'مَاذَا قَالَ اللّٰهُ تَعَالَى؟',
            question_en: 'What did Allah the Exalted say?',
            question_bn: 'আল্লাহ তাআলা কী বলেছেন?',
            correct_ar: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ',
            correct_en: 'Today I have perfected for you your religion',
            correct_bn: 'আজ আমি তোমাদের জন্য তোমাদের দ্বীনকে পূর্ণ করলাম',
            options_ar: ['الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ', 'لَا تَقْرَأْ', 'إِنْ شَاءَ اللّٰهُ'],
            questionType: 'hal',
          },
          {
            emoji: '🍽️',
            question_ar: 'لِمَاذَا دَعَوْتُ الصَّائِمَ؟',
            question_en: 'Why did I invite the fasting person?',
            question_bn: 'আমি রোযাদারকে কেন ডাকলাম?',
            correct_ar: 'إِلَى الْفِطْرِ',
            correct_en: 'To iftar',
            correct_bn: 'ইফতারের জন্য',
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
      titleBn: 'প্রয়োগ: নসবের উদাহরণ',
      payload: {
        instruction: 'Read the subjunctive examples and compare them with the indicative forms.',
        instructionBn: 'নসবের উদাহরণগুলো পড়ো এবং সেগুলোকে সাধারণ রূপের সাথে তুলনা করো।',
        text: 'لَنْ يَدْعُوَ، لَنْ يَبْكِيَ، لَنْ يَنْسَى، لِيُصَلِّيَ، لِيَشْتَرِيَ.',
      },
    },
  ],
};

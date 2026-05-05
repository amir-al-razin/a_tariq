import type { LessonData } from '../../curriculum';

export const lesson02: LessonData = {
  darsNumber: 2,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Comparatives',
      titleAr: 'الْمُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার: তুলনামূলক',
      payload: {
        words: [
          {
            id: 1,
            ar: 'أَجْمَلُ',
            romanized: 'ajmal',
            en: 'more/most beautiful',
            bn: 'অধিক/সবচেয়ে সুন্দর',
            emoji: '✨',
          },
          {
            id: 2,
            ar: 'أَكْبَرُ',
            romanized: 'akbar',
            en: 'bigger/older/biggest',
            bn: 'অধিক/সবচেয়ে বড়/বয়স্ক',
            emoji: '📈',
          },
          {
            id: 3,
            ar: 'أَنْظَفُ',
            romanized: 'anẓaf',
            en: 'cleaner',
            bn: 'অধিক পরিষ্কার',
            emoji: '🧼',
          },
          {
            id: 4,
            ar: 'أَطْوَلُ',
            romanized: 'aṭwal',
            en: 'taller/longer',
            bn: 'অধিক লম্বা',
            emoji: '📏',
          },
          {
            id: 5,
            ar: 'أَقْصَرُ',
            romanized: 'aqṣar',
            en: 'shorter',
            bn: 'অধিক খাটো',
            emoji: '📏',
          },
          {
            id: 6,
            ar: 'أَوْسَعُ',
            romanized: 'awsaʿ',
            en: 'wider/more spacious',
            bn: 'অধিক প্রশস্ত',
            emoji: '↔️',
          },
          {
            id: 7,
            ar: 'أَضْيَقُ',
            romanized: 'aḍyaq',
            en: 'narrower',
            bn: 'অধিক সংকীর্ণ',
            emoji: '><',
          },
          {
            id: 8,
            ar: 'أَغْلَى',
            romanized: 'aghlā',
            en: 'more expensive',
            bn: 'অধিক দামী',
            emoji: '💎',
          },
          {
            id: 9,
            ar: 'أَلَذُّ',
            romanized: 'aladhdh',
            en: 'tastier',
            bn: 'অধিক সুস্বাদু',
            emoji: '😋',
          },
          { id: 10, ar: 'أَغْنَى', romanized: 'aghnā', en: 'richer', bn: 'অধিক ধনী', emoji: '💰' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Noun of Superiority (Comparative & Superlative)',
      titleAr: 'اسْمُ التَّفْضِيلِ',
      titleBn: 'তুলনামূলক ও সর্বোচ্চবাচক বিশেষ্য',
      payload: {
        rules: [
          {
            label: 'Pattern أَفْعَلُ',
            labelBn: 'أَفْعَلُ প্যাটার্ন',
            arabic: 'خَالِدٌ أَكْبَرُ مِن مَاجِدٍ',
            romanized: 'khālidun akbaru min mājid',
            meaning:
              "The pattern أَفْعَلُ is used for comparatives (more than) and superlatives (most). When comparing two items using مِن (than), it stays masculine singular regardless of the subject's gender.",
            meaningBn:
              'أَفْعَلُ প্যাটার্নটি তুলনামূলক (চেয়ে বেশি) এবং সর্বোচ্চবাচক (সবচেয়ে বেশি) বোঝাতে ব্যবহৃত হয়। مِن (চেয়ে) ব্যবহার করে দুটি জিনিসের তুলনা করার সময়, এটি কর্তার লিঙ্গ নির্বিশেষে পুংলিঙ্গ একবচনে থাকে।',
            examples: [
              {
                ar: 'خَالِدٌ أَكْبَرُ مِن مَاجِدٍ',
                en: 'Khalid is older/bigger than Majid',
                bn: 'খালিদ মাজিদের চেয়ে বড়',
              },
              {
                ar: 'عَائِشَةُ أَكْبَرُ مِن فَاطِمَةَ',
                en: 'Aisha is older/bigger than Fatima',
                bn: 'আয়েশা ফাতিমার চেয়ে বড়',
              },
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
      titleBn: 'পঠন অংশ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Comparisons',
            titleBn: 'তুলনা',
            lines: [
              'اللّٰهُ أَكْبَرُ مِن كُلِّ كَبِيرٍ . اللّٰهُ أَرْحَمُ مِن كُلِّ رَحِيمٍ . رَسُولُنَا أَكْرَمُ مِن كُلِّ كَرِيمٍ .',
              'يَا رَاشِدُ ! أَنْتَ ضَعِيفٌ وَأَنْتَ أَضْعَفُ مِنِّي . تِلْكَ السَّاعَةُ غَالِيَةٌ وَهَذِهِ السَّاعَةُ أَغْلَى مِن تِلْكَ . لِبَاسُ رَاشِدٍ أَنْظَفُ مِن لِبَاسِ مَاجِدٍ . زَيْنَبُ بِنْتٌ نَظِيفَةٌ وَعَائِشَةُ أَنْظَفُ مِنْهَا .',
              'أَنْتَ أَغْنَى الْأَغْنِيَاءِ ، وَأَسْخَى الْأَسْخِيَاءِ . هَذَا التِّلْمِيذُ أَذْكَى الْأَذْكِيَاءِ .',
            ],
            translationEn:
              "Allah is greater than every great one. Allah is more merciful than every merciful one. Our Messenger is more noble than every noble one. O Rashid! You are weak, and you are weaker than me. That watch is expensive, and this watch is more expensive than that one. Rashid's clothing is cleaner than Majid's clothing. Zainab is a clean girl, and Aisha is cleaner than her. You are the richest of the rich, and the most generous of the generous. This student is the smartest of the smart ones.",
            translationBn:
              'আল্লাহ প্রত্যেক বড়র চেয়ে বড়। আল্লাহ প্রত্যেক দয়ালুর চেয়ে অধিক দয়ালু। আমাদের রাসূল প্রত্যেক সম্মানিত ব্যক্তির চেয়ে অধিক সম্মানিত। হে রাশিদ! তুমি দুর্বল, আর তুমি আমার চেয়ে বেশি দুর্বল। ওই ঘড়িটি দামী, আর এই ঘড়িটি ওইটির চেয়ে বেশি দামী। রাশিদের পোশাক মাজিদের পোশাকের চেয়ে বেশি পরিষ্কার। জয়নব একজন পরিষ্কার মেয়ে, আর আয়েশা তার চেয়ে বেশি পরিষ্কার। তুমি ধনীদের মধ্যে সবচেয়ে ধনী, আর দানশীলদের মধ্যে সবচেয়ে দানশীল। এই ছাত্রটি মেধাবীদের মধ্যে সবচেয়ে মেধাবী।',
          },
          {
            titleEn: 'Superlatives',
            titleBn: 'সর্বোচ্চবাচক',
            lines: [
              'كَانَ خَالِدٌ أَكْبَرَ مِن شَاهِدٍ . كَانَتْ فَاطِمَةُ أَنْظَفَ مِن عَائِشَةَ . كُنْتُ أَشْجَعَ النَّاسِ قَبْلَ إِسْلَامِكَ ، فَكَيْفَ تَخَافُ الْآنَ هَؤُلَاءِ النَّاسَ الَّذِينَ يُشْرِكُونَ بِاللّٰهِ وَيَعْبُدُونَ الْأَصْنَامَ .. بَعْدَ أَنْ أَسْلَمَ الرَّجُلُ صَارَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَحَبَّ النَّاسِ إِلَيْهِ .',
              'رَاشِدٌ أَفْضَلُ مِن خَالِدٍ . أَظُنُّ رَاشِدًا أَفْضَلَ مِن خَالِدٍ . هَذِهِ الْفَاكِهَةُ أَلَذُّ الْفَوَاكِهِ . وَجَدْتُ هَذِهِ الْفَاكِهَةَ أَلَذَّ الْفَوَاكِهِ . أَنَا ضَعِيفٌ وَلَكِن لَسْتُ أَضْعَفَ مِنكَ . لَسْتُ بِأَضْعَفَ مِنكَ . لَسْتَ بِأَضْعَفِ النَّاسِ . هُوَ أَشْجَعُ النَّاسِ . هُوَ مِن أَشْجَعِ النَّاسِ . سَلِمْتُ عَلَى أَحَبِّ النَّاسِ إِلَيَّ ، وَهُوَ مُعَلِّمِي .',
            ],
            translationEn:
              'Khalid was older than Shahid. Fatima was cleaner than Aisha. You were the bravest of people before your Islam, so how do you fear now these people who associate partners with Allah and worship idols... After the man accepted Islam, the Messenger of Allah (peace be upon him) became the most beloved of people to him. Rashid is better than Khalid. I think Rashid is better than Khalid. This fruit is the most delicious of fruits. I found this fruit to be the most delicious of fruits. I am weak but I am not weaker than you. I am not weaker than you. You are not the weakest of people. He is the bravest of people. He is among the bravest of people. I greeted the most beloved of people to me, and he is my teacher.',
            translationBn:
              'খালিদ শাহিদের চেয়ে বড় ছিল। ফাতিমা আয়েশার চেয়ে বেশি পরিষ্কার ছিল। তুমি তোমার ইসলাম গ্রহণের আগে মানুষের মধ্যে সবচেয়ে সাহসী ছিলে, তাহলে এখন তুমি কীভাবে ওই লোকদের ভয় পাচ্ছ যারা আল্লাহর সাথে শরিক করে এবং মূর্তিপূজা করে... লোকটি ইসলাম গ্রহণের পর, রাসূলুল্লাহ (সা.) তার কাছে মানুষের মধ্যে সবচেয়ে প্রিয় হয়ে উঠলেন। রাশিদ খালিদের চেয়ে উত্তম। আমি মনে করি রাশিদ খালিদের চেয়ে উত্তম। এই ফলটি ফলের মধ্যে সবচেয়ে সুস্বাদু। আমি এই ফলটিকে ফলের মধ্যে সবচেয়ে সুস্বাদু পেয়েছি। আমি দুর্বল কিন্তু আমি তোমার চেয়ে বেশি দুর্বল নই। আমি তোমার চেয়ে বেশি দুর্বল নই। তুমি মানুষের মধ্যে সবচেয়ে দুর্বল নও। সে মানুষের মধ্যে সবচেয়ে সাহসী। সে সবচেয়ে সাহসী লোকদের অন্তর্ভুক্ত। আমি আমার কাছে সবচেয়ে প্রিয় ব্যক্তিকে সালাম দিলাম, আর তিনি হলেন আমার শিক্ষক।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'assessment',
      titleEn: 'Exercise 1: Fill in the blanks',
      titleAr: 'التَّمْرِينُ الْأَوَّلُ : امْلَأِ الْفَرَاغَ',
      titleBn: 'অনুশীলনী ১: শূন্যস্থান পূরণ করো',
      payload: {
        instruction: 'Fill in the blanks with appropriate comparatives or superlatives.',
        instructionBn: 'উপযুক্ত তুলনামূলক বা সর্বোচ্চবাচক শব্দ দিয়ে শূন্যস্থান পূরণ করুন।',
        questions: [
          {
            emoji: '🟢',
            question_ar: 'اللَّوْنُ الْأَخْضَرُ ... الْأَلْوَانِ .',
            question_en: 'The green color is [...] of colors.',
            question_bn: 'সবুজ রংটি রঙের মধ্যে [...]।',
            correct_ar: 'أَجْمَلُ',
            correct_en: 'the most beautiful',
            correct_bn: 'সবচেয়ে সুন্দর',
            options_ar: ['أَجْمَلُ', 'أَكْبَرُ', 'أَطْوَلُ'],
            questionType: 'general',
          },
          {
            emoji: '👕',
            question_ar: 'اللِّبَاسُ الْأَبْيَضُ ... إِلَيَّ مِنَ اللِّبَاسِ الْأَحْمَرِ .',
            question_en: 'White clothing is [...] to me than red clothing.',
            question_bn: 'সাদা পোশাক আমার কাছে লাল পোশাকের চেয়ে [...]।',
            correct_ar: 'أَحَبُّ',
            correct_en: 'more beloved',
            correct_bn: 'অধিক প্রিয়',
            options_ar: ['أَحَبُّ', 'أَطْوَلُ', 'أَضْيَقُ'],
            questionType: 'general',
          },
          {
            emoji: '🌸',
            question_ar: 'فَصْلُ الرَّبِيعِ ... الْفُصُولِ ، لِأَنَّهُ فَصْلُ الْأَزْهَارِ .',
            question_en:
              'The spring season is [...] of seasons, because it is the season of flowers.',
            question_bn: 'বসন্তকাল ঋতুগুলোর মধ্যে [...] , কারণ এটি ফুলের ঋতু।',
            correct_ar: 'أَجْمَلُ',
            correct_en: 'the most beautiful',
            correct_bn: 'সবচেয়ে সুন্দর',
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
      titleBn: 'অনুশীলনী ২: মাজরুর অবস্থা নিয়ে চিন্তা করুন',
      payload: {
        instruction: 'Ponder how the grammatical state changes with the preposition.',
        instructionBn: 'অব্যয়ের সাথে ব্যাকরণগত অবস্থা কীভাবে পরিবর্তিত হয় তা নিয়ে চিন্তা করুন।',
        questions: [
          {
            emoji: '🏙️',
            question_ar: 'لَيْسَتْ هَذِهِ الْمَدِينَةُ بِـ ... مِن تِلْكَ الْمَدِينَةِ .',
            question_en:
              'This city is not [...] than that city. (Hint: majrur with fatha due to diptote)',
            question_bn: 'এই শহরটি ওই শহরের চেয়ে [...] নয়।',
            correct_ar: 'أَكْبَرَ',
            correct_en: 'bigger',
            correct_bn: 'অধিক বড়',
            options_ar: ['أَكْبَرَ', 'أَكْبَرِ', 'أَكْبَرُ'],
            questionType: 'general',
          },
          {
            emoji: '🏙️',
            question_ar: 'لَيْسَتْ هَذِهِ الْمَدِينَةُ بِـ ... الْمُدُنِ .',
            question_en: 'This city is not [...] of cities. (Hint: majrur with kasra due to mudaf)',
            question_bn: 'এই শহরটি শহরগুলোর মধ্যে [...] নয়।',
            correct_ar: 'أَكْبَرِ',
            correct_en: 'the biggest',
            correct_bn: 'সবচেয়ে বড়',
            options_ar: ['أَكْبَرِ', 'أَكْبَرَ', 'أَكْبَرُ'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

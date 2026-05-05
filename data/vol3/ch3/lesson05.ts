import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
  darsNumber: 5,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Conditionals',
      titleAr: 'الْمُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার: শর্তবাচক',
      payload: {
        words: [
          { id: 1, ar: 'التَّثْبِيتُ', romanized: 'at-tathbīt', en: 'Strengthening / Making firm', bn: 'দৃঢ় করা / স্থির রাখা', emoji: '⚓' },
          { id: 2, ar: 'قَدَمٌ', romanized: 'qadam', en: 'Foot (pl. aaqdām)', bn: 'পা (বহুবচন: কদম)', emoji: '🦶' },
          { id: 3, ar: 'حَبَّةٌ', romanized: 'ḥabbah', en: 'A grain / Seed', bn: 'শস্যকণা / বীজ', emoji: '🌾' },
          { id: 4, ar: 'سُنْبُلَةٌ', romanized: 'sunbulah', en: 'An ear of corn / Spike', bn: 'শস্যের শীষ', emoji: '🌽' },
          { id: 5, ar: 'مَثَلٌ', romanized: 'mathal', en: 'Example / Parable', bn: 'উদাহরণ / উপমা', emoji: '📖' },
          { id: 6, ar: 'مُشْرِقٌ', romanized: 'mushriq', en: 'Bright / Shining', bn: 'উজ্জ্বল / ঝলমলে', emoji: '☀️' },
          { id: 7, ar: 'عِيَادَةٌ', romanized: 'ʿiyādah', en: 'Visiting the sick', bn: 'অসুস্থকে দেখতে যাওয়া', emoji: '🏥' }
        ]
      }
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Conditional Sentences (If)',
      titleAr: 'أُسْلُوبُ الشَّرْطِ',
      titleBn: 'শর্তবাচক বাক্য',
      payload: {
        rules: [
          {
            label: 'The Particle إِنْ (If)',
            labelBn: 'إِنْ অব্যয় (যদি)',
            arabic: 'إِنْ تَنْصُرْنِي الْيَوْمَ أَنْصُرْكَ غَدًا',
            romanized: 'in tanṣurnī al-yawma anṣurka ghadan',
            meaning: 'إِنْ enters two present tense verbs (condition and result) making them jussive (Majzum). If it enters past tense verbs, it changes their meaning to the future.',
            meaningBn: 'إِنْ দুটি বর্তমান কালের ক্রিয়ার (শর্ত ও ফলাফল) পূর্বে বসে তাদের মাজজুম (জযমযুক্ত) করে। এটি অতীত কালের ক্রিয়ার পূর্বে বসলে তাদের অর্থ ভবিষ্যতের দিকে পরিবর্তন করে।',
            examples: [
              { ar: 'إِنْ تُطِعْ وَالِدَكَ يُطِعْكَ وَلَدُكَ', en: 'If you obey your father, your child will obey you', bn: 'যদি তুমি তোমার পিতার আনুগত্য করো, তবে তোমার সন্তান তোমার আনুগত্য করবে' },
              { ar: 'إِنْ يَجْتَهِدُوا يَنْجَحُوا', en: 'If they strive, they will succeed', bn: 'যদি তারা প্রচেষ্টা করে, তবে তারা সফল হবে' }
            ]
          },
          {
            label: 'Faa in the Result',
            labelBn: 'ফলাফলে ফা (فَ)',
            arabic: 'إِنْ جَاءَكَ ضَيْفٌ فَأَكْرِمْهُ',
            romanized: 'in jā\'aka ḍayfun fa-akrimhu',
            meaning: 'The letter فَ is added to the result of a condition (jawāb al-sharṭ) when the result is a command, request, or cannot be a regular verb response.',
            meaningBn: 'শর্তের ফলাফলে (জওয়াবুল শর্ত) فَ যুক্ত করা হয় যখন ফলাফলটি একটি আদেশ, অনুরোধ বা সাধারণ ক্রিয়ার উত্তর হতে পারে না।',
            examples: [
              { ar: 'إِنْ يَقُمْ عَلَى بَابِكَ فَقِيرٌ فَتَصَدَّقْ عَلَيْهِ', en: 'If a poor person stands at your door, then give charity to him', bn: 'যদি কোনো দরিদ্র ব্যক্তি তোমার দরজায় দাঁড়ায়, তবে তাকে দান করো' }
            ]
          },
          {
            label: 'The Particle إِذَا',
            labelBn: 'إِذَا অব্যয়',
            arabic: 'إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ',
            romanized: 'idhā sa\'alta fa-as\'ali-llāha',
            meaning: 'إِذَا is a noun of time/circumstance and can also come with the meaning of a condition (when/if).',
            meaningBn: 'إِذَا সময় বা পরিস্থিতির বিশেষ্য এবং এটি শর্তের (যখন/যদি) অর্থ নিয়েও আসতে পারে।',
            examples: [
              { ar: 'إِذَا دَعَوْتَنِي أَجَبْتُكَ', en: 'When/if you call me, I answer you', bn: 'যখন/যদি তুমি আমাকে ডাকো, আমি তোমার ডাকে সাড়া দেব' }
            ]
          },
          {
            label: 'The Particle لَوْ (If for the past)',
            labelBn: 'লও (لَوْ) অব্যয় (অতীতের জন্য যদি)',
            arabic: 'لَوْ تَعَلَّمْتَ اللُّغَةَ الْعَرَبِيَّةَ لَفَهِمْتَ الْقُرْآنَ',
            romanized: 'law taʿallamta al-lughata al-ʿarabiyyata la-fahimta al-qur\'āna',
            meaning: 'لَوْ is a conditional particle used for hypothetical situations in the past.',
            meaningBn: 'لَوْ একটি শর্তবাচক অব্যয় যা অতীতের কাল্পনিক পরিস্থিতির জন্য ব্যবহৃত হয়।',
            examples: [
              { ar: 'لَوْ كَانَ لِي مَالٌ لَأَعْطَيْتُكَ', en: 'If I had wealth, I would have given it to you', bn: 'যদি আমার কাছে সম্পদ থাকত, আমি তোমাকে দিতাম' }
            ]
          }
        ]
      }
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
            titleEn: 'Conditions in the Present',
            titleBn: 'বর্তমান কালের শর্ত',
            lines: [
              'إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ وَ يُثْبِتْ أَقْدَامَكُمْ . إِنْ تُطِيعُوا اللَّهَ وَ رَسُولَهُ يُدْخِلْكُمُ الْجَنَّةَ وَ يُعْطِكُمْ أَجْرًا عَظِيمًا . إِنْ تُنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ تَجِدُوا أَجْرَهَا عِنْدَ اللَّهِ .',
              'أَيُّهَا الْوَلَدُ ! إِنْ تَتَعَلَّمِ اللُّغَةَ الْعَرَبِيَّةَ تَفْهَمِ الْقُرْآنَ وَ تَجِدْ حَلَاوَةَ الْقُرْآنِ . إِنْ تَضَعْ أَوْقَاتَكَ الْغَالِيَةَ فِي لَهْوٍ وَ لَعِبٍ يَضِعْ مُسْتَقْبَلُكَ .',
              'قَالَ اللَّهُ تَعَالَى فِي الْقُرْآنِ : مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ، فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ .'
            ],
            translationEn: 'If you help Allah, He will help you and make your feet firm. If you obey Allah and His Messenger, He will admit you to Paradise and give you a great reward. If you spend your wealth in the path of Allah, you will find its reward with Allah. O boy! If you learn the Arabic language, you will understand the Quran and find the sweetness of the Quran. If you waste your precious time in amusement and play, your future will be wasted. Allah the Exalted said in the Quran: The example of those who spend their wealth in the path of Allah is like a grain that grew seven spikes, in every spike is a hundred grains.',
            translationBn: 'যদি তোমরা আল্লাহকে সাহায্য করো, তিনি তোমাদের সাহায্য করবেন এবং তোমাদের পা দৃঢ় রাখবেন। যদি তোমরা আল্লাহ ও তাঁর রাসূলের আনুগত্য করো, তিনি তোমাদের জান্নাতে প্রবেশ করাবেন এবং তোমাদের মহাপুরস্কার দান করবেন। যদি তোমরা আল্লাহর পথে তোমাদের সম্পদ ব্যয় করো, তবে তোমরা আল্লাহর কাছে এর প্রতিদান পাবে। হে বালক! যদি তুমি আরবি ভাষা শেখো, তবে তুমি কুরআন বুঝতে পারবে এবং কুরআনের মাধুর্য পাবে। যদি তুমি তোমার মূল্যবান সময় খেলাধুলা ও বিনোদনে নষ্ট করো, তবে তোমার ভবিষ্যৎ নষ্ট হয়ে যাবে। আল্লাহ তাআলা কুরআনে বলেছেন: যারা আল্লাহর পথে নিজেদের সম্পদ ব্যয় করে তাদের উদাহরণ একটি শস্যকণার মতো যা সাতটি শীষ উৎপন্ন করে, প্রতিটি শীষে একশটি দানা থাকে।'
          },
          {
            titleEn: 'Conditions in the Past',
            titleBn: 'অতীত কালের শর্ত',
            lines: [
              'أَيُّهَا النَّاسُ ! إِنْ تَرَكْتُمُ الْقُرْآنَ وَ السُّنَّةَ خَسِرْتُمْ دِينَكُمْ وَ دُنْيَاكُمْ . يُحِبُّ اللَّهُ الَّذِينَ إِنْ طَعِمُوا شَكَرُوا وَ إِنْ جَاعُوا صَبَرُوا .',
              'لَوْ تَعَلَّمْتَ اللُّغَةَ الْعَرَبِيَّةَ لَفَهِمْتَ الْقُرْآنَ . لَوْ كَانَ لِي مَالٌ لَأَعْطَيْتُكَ . لَوْ عَلِمْتُ أَنَّكَ مَرِيضٌ لَأَتَيْتُكَ لِعِيَادَتِكَ .',
              'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَ سَلَّمَ : لَوْ عَلِمْتُمْ مَا أَعْلَمُ لَضَحِكْتُمْ قَلِيلًا وَ لَبَكَيْتُمْ كَثِيرًا .'
            ],
            translationEn: 'O people! If you abandon the Quran and the Sunnah, you will lose your religion and your world. Allah loves those who, if they eat, they are grateful, and if they go hungry, they are patient. If you had learned the Arabic language, you would have understood the Quran. If I had wealth, I would have given it to you. If I had known that you were sick, I would have come to you to visit you. The Messenger of Allah (peace be upon him) said: If you knew what I know, you would laugh little and cry much.',
            translationBn: 'হে মানুষ! যদি তোমরা কুরআন ও সুন্নাহ ত্যাগ করো, তবে তোমরা তোমাদের দ্বীন ও দুনিয়া উভয়ই হারাবে। আল্লাহ তাদের ভালোবাসেন যারা খেলে কৃতজ্ঞতা প্রকাশ করে এবং ক্ষুধার্ত হলে ধৈর্য ধারণ করে। যদি তুমি আরবি ভাষা শিখতে, তবে তুমি কুরআন বুঝতে পারতে। যদি আমার কাছে সম্পদ থাকত, তবে আমি তোমাকে দিতাম। যদি আমি জানতাম যে তুমি অসুস্থ, তবে আমি তোমাকে দেখতে আসতাম। রাসূলুল্লাহ (সা.) বলেছেন: যদি তোমরা তা জানতে যা আমি জানি, তবে তোমরা অল্প হাসতে এবং বেশি কাঁদতে।'
          }
        ]
      }
    },
    {
      id: '4',
      type: 'assessment',
      titleEn: 'Exercise 1: Read and Translate Conditionals',
      titleAr: 'التَّمْرِينُ : اِقْرَأْ وَتَرْجِمْ',
      titleBn: 'অনুশীলনী: পড়ুন ও অনুবাদ করুন',
      payload: {
        instruction: 'Read and translate these sentences.',
        instructionBn: 'এই বাক্যগুলো পড়ুন এবং অনুবাদ করুন।',
        questions: [
          {
            emoji: '📖',
            question_ar: 'لَوْ عَلِمْتُ أَنَّكَ مَرِيضٌ لَأَتَيْتُكَ لِعِيَادَتِكَ.',
            question_en: 'Translate this sentence.',
            question_bn: 'এই বাক্যটি অনুবাদ করুন।',
            correct_ar: 'If I had known that you were sick, I would have come to you to visit you.',
            correct_en: 'If I had known that you were sick, I would have come to you to visit you.',
            options_ar: ['If I had known that you were sick, I would have come to you to visit you.', 'If you are sick, I will visit you.', 'When you are sick, I visit you.'],
            questionType: 'general'
          },
          {
            emoji: '📖',
            question_ar: 'إِنْ يَقُمْ عَلَى بَابِكَ فَقِيرٌ فَتَصَدَّقْ عَلَيْهِ.',
            question_en: 'Translate this sentence.',
            question_bn: 'এই বাক্যটি অনুবাদ করুন।',
            correct_ar: 'If a poor person stands at your door, then give charity to him.',
            correct_en: 'If a poor person stands at your door, then give charity to him.',
            options_ar: ['If a poor person stands at your door, then give charity to him.', 'When a poor person comes to your door, do not let him in.', 'If a rich person stands at your door, welcome him.'],
            questionType: 'general'
          }
        ]
      }
    }
  ]
};

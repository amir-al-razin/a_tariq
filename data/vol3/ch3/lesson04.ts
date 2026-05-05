import type { LessonData } from '../../curriculum';

export const lesson04: LessonData = {
  darsNumber: 4,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Warning and Thirst',
      titleAr: 'الْمُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার: সতর্কতা ও তৃষ্ণা',
      payload: {
        words: [
          { id: 1, ar: 'سَخِطَ', romanized: 'sakhiṭa', en: 'To be angry / to anger', bn: 'রাগ করা / রাগান্বিত করা', emoji: '😠' },
          { id: 2, ar: 'حَذَّرَ', romanized: 'ḥadhdhara', en: 'To warn', bn: 'সতর্ক করা', emoji: '⚠️' },
          { id: 3, ar: 'فَاسِقَات', romanized: 'fāsiqāt', en: 'Wicked/sinful women', bn: 'পাপিষ্ঠ নারীরা', emoji: '🦹‍♀️' },
          { id: 4, ar: 'ارْتَوَى', romanized: 'irtawā', en: 'To quench thirst', bn: 'তৃষ্ণা নিবারণ করা', emoji: '💧' },
          { id: 5, ar: 'عَطِشَ', romanized: 'ʿaṭisha', en: 'To become thirsty', bn: 'তৃষ্ণার্ত হওয়া', emoji: '🥵' },
          { id: 6, ar: 'قُمْصَان', romanized: 'qumṣān', en: 'Shirts', bn: 'জামাগুলো (বহুবচন)', emoji: '👕' },
          { id: 7, ar: 'جَحِيم', romanized: 'jaḥīm', en: 'Hellfire', bn: 'জাহান্নাম', emoji: '🔥' },
          { id: 8, ar: 'وَاعِظ', romanized: 'wāʿiẓ', en: 'Preacher / Advisor', bn: 'উপদেশ দাতা', emoji: '🗣️' },
          { id: 9, ar: 'هَدْي', romanized: 'hady', en: 'Guidance / Path', bn: 'পথনির্দেশ / পথ', emoji: '🧭' },
          { id: 10, ar: 'سَعَى', romanized: 'saʿā', en: 'To strive / make an effort', bn: 'প্রচেষ্টা করা', emoji: '🏃' }
        ]
      }
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Subjunctive Case for Weak Verbs',
      titleAr: 'حَالَةُ النَّصْبِ لِلْأَفْعَالِ الْمُعْتَلَّةِ',
      titleBn: 'দুর্বল ক্রিয়ার নসব অবস্থা',
      payload: {
        rules: [
          {
            label: 'Verbs ending in Waw or Yaa',
            labelBn: 'و বা ي দিয়ে শেষ হওয়া ক্রিয়া',
            arabic: 'لَنْ نَدْعُوَ / لَنْ نَبْكِيَ',
            romanized: 'lan nadʿuwa / lan nabkiya',
            meaning: 'The Fatha appears explicitly on the final weak letter.',
            meaningBn: 'শেষের দুর্বল অক্ষরে ফাতহা প্রকাশ্যভাবে দেখা যায়।',
            examples: [
              { ar: 'لَنْ نَدْعُوَ', en: 'We will not call', bn: 'আমরা ডাকব না' },
              { ar: 'لَنْ نَبْكِيَ', en: 'We will not cry', bn: 'আমরা কাঁদব না' }
            ]
          },
          {
            label: 'Verbs ending in Alif',
            labelBn: 'ى দিয়ে শেষ হওয়া ক্রিয়া',
            arabic: 'لَنْ نَنْسَى',
            romanized: 'lan nansā',
            meaning: 'The Fatha is hidden (muqaddarah) and does not appear on the Alif.',
            meaningBn: 'ফাতহা অপ্রকাশ্য (মুকাদ্দারা) থাকে এবং আলিফের ওপর দেখা যায় না।',
            examples: [
              { ar: 'لَنْ نَنْسَى', en: 'We will not forget', bn: 'আমরা ভুলব না' }
            ]
          },
          {
            label: 'Dropping the Noon',
            labelBn: 'নুন (ن) বাদ দেওয়া',
            arabic: 'لَنْ يَسْقُوا / لَنْ تَشْتَرِي',
            romanized: 'lan yasqū / lan tashtarī',
            meaning: 'For plural masculine and 2nd person singular feminine, the final Noon is dropped to indicate the subjunctive state.',
            meaningBn: 'পুংলিঙ্গ বহুবচন এবং মধ্যম পুরুষ স্ত্রীলিঙ্গ একবচনের ক্ষেত্রে, নসব অবস্থা বোঝাতে শেষের নুন (ن) বাদ দেওয়া হয়।',
            examples: [
              { ar: 'لَنْ يَسْقُوا', en: 'They (m.) will not give drink', bn: 'তারা (পুরুষ) পান করাবে না' }
            ]
          },
          {
            label: 'Feminine Plural Exception',
            labelBn: 'স্ত্রীলিঙ্গ বহুবচনের ব্যতিক্রম',
            arabic: 'لَنْ يَدْعُونَ / لَنْ تَبْكِينَ',
            romanized: 'lan yadʿūna / lan tabkīna',
            meaning: 'For feminine plural, the Noon remains because it is the fixed feminine pronoun.',
            meaningBn: 'স্ত্রীলিঙ্গ বহুবচনের ক্ষেত্রে নুন (ن) থেকে যায়, কারণ এটি স্থায়ী স্ত্রীলিঙ্গ সর্বনাম।',
            examples: [
              { ar: 'لَنْ يَدْعُونَ', en: 'They (f.) will not call', bn: 'তারা (নারী) ডাকবে না' }
            ]
          }
        ]
      }
    },
    {
      id: '3',
      type: 'verb_table',
      titleEn: 'Subjunctive Weak Verbs Chains',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'নসব অবস্থায় দুর্বল ক্রিয়ার রূপ',
      payload: {
        verbTense: 'present',
        sourceText: `
لَنْ يَدْعُوا - لَنْ يَدْعُونَ - لَنْ تَدْعُوا - لَنْ تَدْعُونَ - لَنْ نَدْعُوَ
لَنْ يَبْكُوا - لَنْ يَبْكِينَ - لَنْ تَبْكُوا - لَنْ تَبْكِينَ - لَنْ نَبْكِيَ
لَنْ يَنْسَوْا - لَنْ يَنْسَيْنَ - لَنْ تَنْسَوْا - لَنْ تَنْسَيْنَ - لَنْ نَنْسَى
لَنْ يُلْقُوا - لَنْ يُلْقِينَ - لَنْ تُلْقُوا - لَنْ تُلْقِينَ - لَنْ نُلْقِيَ
لَنْ يُصَلُّوا - لَنْ يُصَلِّينَ - لَنْ تُصَلُّوا - لَنْ تُصَلِّينَ - لَنْ نُصَلِّيَ
لَنْ يَشْتَرُوا - لَنْ يَشْتَرِينَ - لَنْ تَشْتَرُوا - لَنْ تَشْتَرِينَ - لَنْ نَشْتَرِيَ
`.trim()
      }
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Reading Passages',
      titleAr: 'قِطْعَةُ الْقِرَاءَةِ',
      titleBn: 'পঠন অংশ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Applying Subjunctive with لَنْ and لِـ',
            titleBn: 'لَنْ ও لِـ এর সাথে নসবের প্রয়োগ',
            lines: [
              'قَالَ العَالِمُ : أَيُّهَا المُسْلِمُونَ ! اعْلَمُوا أَنَّ المُشْرِكِينَ لَنْ يَرْضَوْا عَنْكُمْ فِي حَالٍ، فَلا تَسْخَطُوا اللهَ لِتُرْضُوهُمْ .',
              'قَالَ مَاجِدٌ لأَوْلادِهِ : خَالِدٌ وَ أُسَامَةُ وَ طَارِقٌ : خُذُوا المَاءَ وَ تَوَضَّؤُوا ثُمَّ اذْهَبُوا إِلَى مَسْجِدِ الحَيِّ لِتُصَلُّوا العَصْرَ مَعَ الجَمَاعَةِ، وَ بَعْدَ الصَّلاةِ ادْعُوا أَصْدِقَاءَكُمْ إِلَى البَيْتِ لِتَسْقُوهُمْ عَصِيرَ الفَوَاكِهِ البَارِدَ .',
              'عَطِشَتِ الفَلَّاحَاتُ فَأَرَدْنَ أَنْ يَشْرَبْنَ مَاءً بَارِدًا لِيَرْتَوِينَ .',
              'يُحِبُّ رَاشِدٌ أَصْدِقَاءَهُ حُبًّا عَظِيمًا، فَقَالَ : أَصْدِقَائِي لَنْ يَنْسَوْنِي وَ لَنْ أَنْسَاهُمْ .'
            ],
            translationEn: 'The scholar said: "O Muslims! Know that the polytheists will never be pleased with you in any case, so do not anger Allah to please them." Majid said to his children: Khalid, Usama, and Tariq: "Take water and perform ablution, then go to the neighborhood mosque to pray Asr with the congregation. And after the prayer, invite your friends to the house to give them cold fruit juice to drink." The female farmers became thirsty, so they wanted to drink cold water to quench their thirst. Rashid loves his friends with a great love, so he said: "My friends will never forget me, and I will never forget them."',
            translationBn: 'আলেম বললেন: "হে মুসলিমরা! জেনে রাখো যে, মুশরিকরা কোনো অবস্থাতেই তোমাদের প্রতি সন্তুষ্ট হবে না, তাই তাদের সন্তুষ্ট করার জন্য আল্লাহকে রাগান্বিত কোরো না।" মাজেদ তার সন্তানদের (খালিদ, উসামা ও তারেক) বললেন: "পানি নাও এবং ওজু করো, তারপর মহল্লার মসজিদে যাও জামাতের সাথে আসরের সালাত আদায় করতে। এবং সালাতের পর, তোমাদের বন্ধুদের বাড়িতে ডাকো তাদের ঠান্ডা ফলের রস পান করানোর জন্য।" নারী কৃষকরা তৃষ্ণার্ত হলো, তাই তারা তৃষ্ণা নিবারণের জন্য ঠান্ডা পানি পান করতে চাইল। রাশিদ তার বন্ধুদের খুব ভালোবাসে, তাই সে বলল: "আমার বন্ধুরা আমাকে কখনোই ভুলবে চিহ্নিত করবে না, এবং আমিও তাদের কখনোই ভুলব না।"'
          },
          {
            titleEn: 'Warnings and Advice',
            titleBn: 'সতর্কতা ও উপদেশ',
            lines: [
              'حَذَّرَتْ فَاطِمَةُ بَنَاتِهَا فَقَالَتْ : لا تُجَالِسْنَ هَؤُلاءِ الفَاسِقَاتِ، فَإِنَّهُنَّ يَدْعُونَكُنَّ إِلَى الشَّرِّ وَ لَنْ يَدْعُونَكُنَّ إِلَى الخَيْرِ .',
              'قَالَ بِلالٌ لِرِجَالٍ يُجَالِسُونَ الفُسَّاقَ : أَ تُطِيعُونَ الفُسَّاقَ لِتَلْقَوْا أَنْفُسَكُمْ إِلَى الهَلاكِ ؟ أَ تُطِيعُونَ الَّذِينَ يَهْدُونَكُمْ إِلَى صِرَاطِ الجَحِيمِ ؟',
              'طَلَبَ الوَاعِظُ مِنَ النَّاسِ أَنْ يَقْرَؤُوا أَخْبَارَ الصَّالِحِينَ لِيَهْتَدُوا بِهَدْيِهِمْ : أَرْجُو أَنَّكُمْ سَتَسْعَوْنَ فِي طَلَبِ العِلْمِ وَ لَنْ تَسْعَوْا فِي طَلَبِ المَالِ .'
            ],
            translationEn: 'Fatima warned her daughters, saying: "Do not sit with these wicked women, for they invite you to evil, and they will never invite you to good." Bilal said to men who sit with the wicked: "Do you obey the wicked to throw yourselves into ruin? Do you obey those who guide you to the path of Hellfire?" The preacher asked the people to read the stories of the righteous to be guided by their guidance: "I hope that you will strive in seeking knowledge, and you will not strive in seeking wealth."',
            translationBn: 'ফাতিমা তার কন্যাদের সতর্ক করে বলল: "এই পাপিষ্ঠ নারীদের সাথে বোসো না, কারণ তারা তোমাদের মন্দের দিকে ডাকে, এবং তারা কখনোই তোমাদের কল্যাণের দিকে ডাকবে না।" বেলাল ওইসব লোকদের বলল যারা পাপিষ্ঠদের সাথে বসে: "তোমরা কি পাপিষ্ঠদের আনুগত্য করছ নিজেদের ধ্বংসের দিকে ঠেলে দেওয়ার জন্য? তোমরা কি তাদের আনুগত্য করছ যারা তোমাদের জাহান্নামের পথের দিকে পরিচালিত করে?" উপদেশদাতা লোকদের কাছে সৎলোকদের কাহিনী পড়ার অনুরোধ করলেন যাতে তারা তাদের নির্দেশনায় পরিচালিত হতে পারে: "আমি আশা করি যে তোমরা জ্ঞান অন্বেষণে প্রচেষ্টা করবে, এবং সম্পদ অন্বেষণে প্রচেষ্টা করবে না।"'
          }
        ]
      }
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Exercise 1: Answer these questions',
      titleAr: 'التَّمْرِينُ الْأَوَّلُ : أَجِبْ عَنْ هَذِهِ الْأَسْئِلَةِ',
      titleBn: 'অনুশীলনী ১: এই প্রশ্নগুলোর উত্তর দিন',
      payload: {
        instruction: 'Answer the questions based on the passages.',
        instructionBn: 'প্যাসেজের উপর ভিত্তি করে প্রশ্নগুলোর উত্তর দিন।',
        questions: [
          {
            emoji: '🗣️',
            question_ar: 'مَاذَا قَالَ العَالِمُ لِلْمُسْلِمِينَ ؟',
            question_en: 'What did the scholar say to the Muslims?',
            question_bn: 'আলেম মুসলিমদের কী বললেন?',
            correct_ar: 'أَنَّ المُشْرِكِينَ لَنْ يَرْضَوْا عَنْكُمْ فِي حَالٍ',
            correct_en: 'That the polytheists will never be pleased with you in any case.',
            correct_bn: 'মুশরিকরা কোনো অবস্থাতেই তোমাদের প্রতি সন্তুষ্ট হবে না।',
            options_ar: ['أَنَّ المُشْرِكِينَ لَنْ يَرْضَوْا عَنْكُمْ فِي حَالٍ', 'أَنْ يَشْرَبُوا المَاءَ', 'أَنْ يَذْهَبُوا إِلَى السُّوقِ'],
            questionType: 'general'
          },
          {
            emoji: '⚠️',
            question_ar: 'مَاذَا قَالَ بِلالٌ لِلَّذِينَ يُجَالِسُونَ الفُسَّاقَ ؟',
            question_en: 'What did Bilal say to those who sit with the wicked?',
            question_bn: 'বেলাল পাপিষ্ঠদের সাথে বসা লোকদের কী বললেন?',
            correct_ar: 'أَ تُطِيعُونَ الفُسَّاقَ لِتَلْقَوْا أَنْفُسَكُمْ إِلَى الهَلاكِ',
            correct_en: 'Do you obey the wicked to throw yourselves into ruin?',
            correct_bn: 'তোমরা কি পাপিষ্ঠদের আনুগত্য করছ নিজেদের ধ্বংসের দিকে ঠেলে দেওয়ার জন্য?',
            options_ar: ['أَ تُطِيعُونَ الفُسَّاقَ لِتَلْقَوْا أَنْفُسَكُمْ إِلَى الهَلاكِ', 'اِشْتَرُوا هَذِهِ القُمْصَانَ', 'لَنْ نَنْسَى'],
            questionType: 'general'
          },
          {
            emoji: '📖',
            question_ar: 'مَاذَا طَلَبَ الوَاعِظُ مِنَ النَّاسِ ؟',
            question_en: 'What did the preacher ask of the people?',
            question_bn: 'উপদেশদাতা লোকদের কাছে কী অনুরোধ করলেন?',
            correct_ar: 'أَنْ يَقْرَؤُوا أَخْبَارَ الصَّالِحِينَ لِيَهْتَدُوا بِهَدْيِهِمْ',
            correct_en: 'To read the stories of the righteous to be guided by their guidance.',
            correct_bn: 'সৎলোকদের কাহিনী পড়ার জন্য যাতে তারা তাদের নির্দেশনায় পরিচালিত হতে পারে।',
            options_ar: ['أَنْ يَقْرَؤُوا أَخْبَارَ الصَّالِحِينَ', 'أَنْ يَلْعَبُوا فِى المَلْعَبِ', 'أَنْ يَنَامُوا'],
            questionType: 'general'
          }
        ]
      }
    }
  ]
};

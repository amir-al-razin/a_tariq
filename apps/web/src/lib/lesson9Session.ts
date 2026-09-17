// Lesson 9 Interactive Session Data (Directly mapped from Esho Arbi Shikhi Vol 1 Ch 1 Lesson 9, pages 46-50)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_09_STEPS: SessionStep[] = [
  // 1. Page 46: Travel & Movement Vocabulary Priming
  {
    id: 'step-1-vocab-travel',
    type: 'vocab_prime',
    pageNumber: 46,
    titleEn: 'Travel & Motion Vocabulary',
    titleAr: 'مُفْرَدَاتُ السَّفَرِ وَالحَرَكَةِ',
    instructionEn: 'Listen and memorize new words for travel, speed, and airports',
    instructionBn: 'ভ্রমণ, গতি ও বিমানবন্দর বিষয়ক নতুন শব্দগুলোর অর্থ ও উচ্চারণ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c9_asimah', ar: 'عَاصِمَةٌ', en: 'Capital city', bn: 'একটি রাজধানী', romanized: 'ʿāṣimatun', emoji: '🏛️' },
        { id: 'v1_c9_tairah', ar: 'طَائِرَةٌ', en: 'Airplane', bn: 'একটি উড়োজাহাজ / বিমান', romanized: 'ṭāʾiratun', emoji: '✈️' },
        { id: 'v1_c9_matar', ar: 'مَطَارٌ', en: 'Airport', bn: 'একটি বিমানবন্দর', romanized: 'maṭārun', emoji: '🛫' },
        { id: 'v1_c9_sari', ar: 'سَرِيعٌ', en: 'Fast / speedy', bn: 'দ্রুতগামী / তেজ', romanized: 'sarīʿun', emoji: '⚡' },
        { id: 'v1_c9_bati', ar: 'بَطِيءٌ', en: 'Slow', bn: 'ধীরগতি / আস্তে', romanized: 'baṭīʾun', emoji: '🐢' },
      ],
    },
  },

  // 2. Page 46: Active Recall Matching - Travel Words
  {
    id: 'step-2-pair-travel',
    type: 'speed_pair',
    pageNumber: 46,
    titleEn: 'Travel Vocabulary Recall',
    titleAr: 'مُطَابَقَةُ كَلِمَاتِ السَّفَرِ',
    instructionEn: 'Match each travel word with its English meaning',
    instructionBn: 'শব্দগুলোর সাথে সঠিক অর্থ মিলিয়ে নিন',
    pairPayload: {
      pairs: [
        { id: 'pt-asimah', ar: 'عَاصِمَةٌ', meaning: 'Capital city' },
        { id: 'pt-tairah', ar: 'طَائِرَةٌ', meaning: 'Airplane' },
        { id: 'pt-matar', ar: 'مَطَارٌ', meaning: 'Airport' },
        { id: 'pt-sari', ar: 'سَرِيعٌ', meaning: 'Fast / speedy' },
        { id: 'pt-bati', ar: 'بَطِيءٌ', meaning: 'Slow' },
      ],
    },
  },

  // 3. Page 46: Daily Life, Play & Nature Vocabulary Priming
  {
    id: 'step-3-vocab-daily-life',
    type: 'vocab_prime',
    pageNumber: 46,
    titleEn: 'Daily Life & Objects Vocabulary',
    titleAr: 'مُفْرَدَاتُ الحَيَاةِ اليَوْمِيَّةِ',
    instructionEn: 'Learn new nouns for fruit, flowers, games, and the body',
    instructionBn: 'ফল, ফুল, খেলাধুলা ও অঙ্গ-প্রত্যঙ্গ বিষয়ক নতুন শব্দগুলোর অর্থ ও উচ্চারণ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c9_fakihah', ar: 'فَاكِهَةٌ', en: 'Fruit', bn: 'একটি ফল', romanized: 'fākihatun', emoji: '🍎' },
        { id: 'v1_c9_ladhidh', ar: 'لَذِيذٌ', en: 'Delicious', bn: 'সুস্বাদু / মজাদার', romanized: 'ladhīdhun', emoji: '😋' },
        { id: 'v1_c9_wardah', ar: 'وَرْدَةٌ', en: 'Rose', bn: 'একটি গোলাপ', romanized: 'wardatun', emoji: '🌹' },
        { id: 'v1_c9_mindadah', ar: 'مِنْضَدَةٌ', en: 'Small table / desk', bn: 'একটি ছোট টেবিল / তেপায়া', romanized: 'minḍadatun', emoji: '🪵' },
        { id: 'v1_c9_yad', ar: 'يَدٌ', en: 'Hand', bn: 'একটি হাত', romanized: 'yadun', emoji: '✋' },
        { id: 'v1_c9_kurah', ar: 'كُرَةٌ', en: 'Ball', bn: 'একটি বল', romanized: 'kuratun', emoji: '⚽' },
        { id: 'v1_c9_laib', ar: 'لَاعِبٌ', en: 'Player', bn: 'একজন খেলোয়াড়', romanized: 'lāʿibun', emoji: '🏃' },
      ],
    },
  },

  // 4. Page 46: Active Recall Matching - Daily Life
  {
    id: 'step-4-pair-daily-life',
    type: 'speed_pair',
    pageNumber: 46,
    titleEn: 'Objects & Food Recall',
    titleAr: 'تَطْبِيقُ كَلِمَاتِ الحَيَاةِ',
    instructionEn: 'Match each Arabic noun with its meaning',
    instructionBn: 'শব্দগুলোর সাথে সঠিক অর্থ মিলিয়ে নিন',
    pairPayload: {
      pairs: [
        { id: 'pd-fakihah', ar: 'فَاكِهَةٌ', meaning: 'Fruit' },
        { id: 'pd-ladhidh', ar: 'لَذِيذٌ', meaning: 'Delicious' },
        { id: 'pd-wardah', ar: 'وَرْدَةٌ', meaning: 'Rose' },
        { id: 'pd-mindadah', ar: 'مِنْضَدَةٌ', meaning: 'Small table / desk' },
        { id: 'pd-kurah', ar: 'كُرَةٌ', meaning: 'Ball' },
      ],
    },
  },

  // 5. Page 47: Sentence Assembly - Capital Airport
  {
    id: 'step-5-assembly-capital-airport',
    type: 'sentence_assembly',
    pageNumber: 47,
    titleEn: 'Sentence Building: Capital Airport',
    titleAr: 'تَرْكِيبُ: فِي مَطَارِ العَاصِمَةِ طَائِرَةٌ كَبِيرَةٌ',
    instructionEn: 'Assemble: "In the capital airport there is a big airplane"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "রাজধানীর বিমানবন্দরে একটি বড় উড়োজাহাজ আছে"',
    assemblyPayload: {
      promptEn: 'In the capital airport there is a big airplane',
      promptBn: 'রাজধানীর বিমানবন্দরে একটি বড় উড়োজাহাজ আছে',
      expectedAnswer: ['فِي', 'مَطَارِ', 'الْعَاصِمَةِ', 'طَائِرَةٌ', 'كَبِيرَةٌ'],
      chips: ['فِي', 'مَطَارِ', 'الْعَاصِمَةِ', 'طَائِرَةٌ', 'كَبِيرَةٌ', 'سَرِيعَةٌ'],
      emoji: '✈️',
    },
  },

  // 6. Page 47: Dialogue Q&A - Speed of the Airplane
  {
    id: 'step-6-cloze-airplane-speed',
    type: 'cloze_choice',
    pageNumber: 47,
    titleEn: 'Dialogue Practice: The Airplane',
    titleAr: 'كَيْفَ هَذِهِ الطَّائِرَةُ ؟',
    instructionEn: 'Complete the response: "This airplane is very fast"',
    instructionBn: 'সঠিক উত্তর নির্বাচন করুন: "এই উড়োজাহাজটি খুব দ্রুতগামী"',
    clozePayload: {
      questionAr: 'كَيْفَ هَذِهِ الطَّائِرَةُ ؟',
      questionEn: 'How is this airplane?',
      questionBn: 'এই উড়োজাহাজটি কেমন?',
      partialAnswerAr: 'هَذِهِ الطَّائِرَةُ ...',
      correctAnswer: 'سَرِيعَةٌ جِدًّا',
      options: ['سَرِيعَةٌ جِدًّا', 'بَطِيئَةٌ جِدًّا', 'صَغِيرَةٌ'],
      emoji: '⚡',
    },
  },

  // 7. Page 47: Sentence Assembly - Mosque Community
  {
    id: 'step-7-assembly-rashid-brother',
    type: 'sentence_assembly',
    pageNumber: 47,
    titleEn: 'Sentence Building: Mosque & Community',
    titleAr: 'تَرْكِيبُ: رَاشِدٌ أَمَامَ المَسْجِدِ',
    instructionEn: 'Assemble: "Rashid is in front of the mosque and his brother is in the mosque"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "রাশেদ মসজিদের সামনে এবং তার ভাই মসজিদে"',
    assemblyPayload: {
      promptEn: 'Rashid is in front of the mosque and his brother is in the mosque',
      promptBn: 'রাশেদ মসজিদের সামনে এবং তার ভাই মসজিদে',
      expectedAnswer: ['رَاشِدٌ', 'أَمَامَ', 'الْمَسْجِدِ', 'وَأَخُوهُ', 'فِي', 'الْمَسْجِدِ'],
      chips: ['رَاشِدٌ', 'أَمَامَ', 'الْمَسْجِدِ', 'وَأَخُوهُ', 'فِي', 'الْمَسْجِدِ', 'خَلْفَ'],
      emoji: '🕌',
    },
  },

  // 8. Page 48: Dialogue Q&A - Name of the Book
  {
    id: 'step-8-cloze-book-name',
    type: 'cloze_choice',
    pageNumber: 48,
    titleEn: 'Dialogue Practice: Name of the Book',
    titleAr: 'مَا اسْمُ الْكِتَابِ ؟',
    instructionEn: 'Complete the answer: "The name of the book is Nur al-Islam"',
    instructionBn: 'সঠিক উত্তর নির্বাচন করুন: "কিতাবের নাম নূরুল ইসলাম"',
    clozePayload: {
      questionAr: 'مَا اسْمُ الْكِتَابِ ؟',
      questionEn: 'What is the name of the book?',
      questionBn: 'বইটির নাম কী?',
      partialAnswerAr: 'اِسْمُ الْكِتَابِ ...',
      correctAnswer: 'نُورُ الإِسْلَامِ',
      options: ['نُورُ الإِسْلَامِ', 'كِتَابُ اللهِ', 'الْقُرْآنُ'],
      emoji: '📘',
    },
  },

  // 9. Page 48: Dialogue Q&A - Aisha's Necklace
  {
    id: 'step-9-cloze-aisha-necklace',
    type: 'cloze_choice',
    pageNumber: 48,
    titleEn: "Dialogue Practice: Aisha's Necklace",
    titleAr: 'أَيْنَ عِقْدُ عَائِشَةَ ؟',
    instructionEn: 'Complete the answer: "Her necklace is in her box"',
    instructionBn: 'সঠিক উত্তর নির্বাচন করুন: "তার হারটি তার বাক্সে আছে"',
    clozePayload: {
      questionAr: 'أَيْنَ عِقْدُ عَائِشَةَ ؟',
      questionEn: "Where is Aisha's necklace?",
      questionBn: 'আয়েশার হারটি কোথায়?',
      partialAnswerAr: 'عِقْدُهَا ...',
      correctAnswer: 'فِي صُنْدُوقِهَا',
      options: ['فِي صُنْدُوقِهَا', 'فَوْقَ الْمِنْضَدَةِ', 'فِي الْحَدِيقَةِ'],
      emoji: '📿',
    },
  },

  // 10. Page 49: Dialogue Q&A - What is in Bashir's Garden?
  {
    id: 'step-10-cloze-bashir-garden',
    type: 'cloze_choice',
    pageNumber: 49,
    titleEn: "Dialogue Practice: Bashir's Garden",
    titleAr: 'مَاذَا فِي حَدِيقَةِ بَشِيرٍ ؟',
    instructionEn: 'Complete the answer: "In his garden is a big rose"',
    instructionBn: 'সঠিক উত্তর নির্বাচন করুন: "তার বাগানে একটি বড় গোলাপ আছে"',
    clozePayload: {
      questionAr: 'مَاذَا فِي حَدِيقَةِ بَشِيرٍ ؟',
      questionEn: "What is in Bashir's garden?",
      questionBn: 'বশীরের বাগানে কী আছে?',
      partialAnswerAr: 'فِي حَدِيقَتِهِ ...',
      correctAnswer: 'وَرْدَةٌ كَبِيرَةٌ',
      options: ['وَرْدَةٌ كَبِيرَةٌ', 'طَائِرَةٌ سَرِيعَةٌ', 'كُرَةٌ صَغِيرَةٌ'],
      emoji: '🌹',
    },
  },

  // 11. Page 49: Sentence Assembly - Handkerchief in Hand
  {
    id: 'step-11-assembly-handkerchief',
    type: 'sentence_assembly',
    pageNumber: 49,
    titleEn: 'Sentence Building: Handkerchief in Hand',
    titleAr: 'تَرْكِيبُ: مِنْدِيلُهَا فِي يَدِهَا',
    instructionEn: 'Assemble: "Her handkerchief is in her hand"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "তার রুমাল তার হাতে"',
    assemblyPayload: {
      promptEn: 'Her handkerchief is in her hand',
      promptBn: 'তার রুমাল তার হাতে',
      expectedAnswer: ['مِنْدِيلُهَا', 'فِي', 'يَدِهَا'],
      chips: ['مِنْدِيلُهَا', 'فِي', 'يَدِهَا', 'يَدِهِ', 'حَقِيبَتِهَا'],
      emoji: '🤲',
    },
  },

  // 12. Page 50: Sentence Assembly - The Player and the Ball
  {
    id: 'step-12-assembly-player-ball',
    type: 'sentence_assembly',
    pageNumber: 50,
    titleEn: 'Sentence Building: Player and Ball',
    titleAr: 'تَرْكِيبُ: أَمَامَ اللَّاعِبِ كُرَةٌ جَمِيلَةٌ',
    instructionEn: 'Assemble: "In front of the player is a beautiful ball"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "খেলোয়াড়ের সামনে একটি সুন্দর বল আছে"',
    assemblyPayload: {
      promptEn: 'In front of the player is a beautiful ball',
      promptBn: 'খেলোয়াড়ের সামনে একটি সুন্দর বল আছে',
      expectedAnswer: ['أَمَامَ', 'اللَّاعِبِ', 'كُرَةٌ', 'جَمِيلَةٌ'],
      chips: ['أَمَامَ', 'اللَّاعِبِ', 'كُرَةٌ', 'جَمِيلَةٌ', 'صَغِيرَةٌ', 'مِنْضَدَةٌ'],
      emoji: '⚽',
    },
  },

  // 13. Chapter 1 Grand Quranic Milestone: Surah Al-Ikhlas (112:1-4)
  {
    id: 'step-13-quranic-echo-ch1-finale',
    type: 'quranic_echo',
    pageNumber: 50,
    titleEn: 'Chapter 1 Grand Milestone: Pure Monotheism',
    titleAr: 'خِتَامُ الفَصْلِ الأَوَّلِ: سُورَةُ الإِخْلَاصِ',
    instructionEn: 'Celebrate completing Chapter 1 by listening to the pinnacle of Arabic clarity in Surah Al-Ikhlas',
    instructionBn: 'প্রথম অধ্যায় সমাপ্তির গৌরবময় মুহূর্তে সূরা আল-ইখলাসের বিশুদ্ধ তেলাওয়াত শুনুন ও অনুধাবন করুন।',
    echoPayload: {
      surahNumber: 112,
      ayahNumber: 1,
      surahNameAr: 'الإِخْلَاص',
      surahNameEn: 'Al-Ikhlas',
      arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
      translationEn: 'Say: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.',
      translationBn: 'বলুন, তিনিই আল্লাহ, একক। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি। এবং তাঁর সমতুল্য কেউই নেই।',
      highlightedWords: ['قُلْ', 'هُوَ', 'اللَّهُ', 'أَحَدٌ'],
      reflection: 'Mubarak! You have completed Chapter 1 of Esho Arbi Shikhi. You can now recognize nominal predicates, demonstrative pointers, adjectives, genitive Idafah constructs, and spatial prepositions in classical Arabic and the Quran.',
      audioKey: 'quran_112001',
    },
  },
];

export const LESSON_09_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 9,
  titleEn: 'Comprehensive Synthesis (Chapter 1 Finale)',
  titleAr: 'التَّطْبِيقَاتُ الشَّامِلَةُ (خِتَامُ الفَصْلِ الأَوَّلِ)',
  wordsLearned: [
    'عَاصِمَةٌ',
    'طَائِرَةٌ',
    'مَطَارٌ',
    'سَرِيعٌ',
    'بَطِيءٌ',
    'فَاكِهَةٌ',
    'لَذِيذٌ',
    'وَرْدَةٌ',
    'مِنْضَدَةٌ',
    'يَدٌ',
    'كُرَةٌ',
    'لَاعِبٌ',
  ],
  steps: LESSON_09_STEPS,
};

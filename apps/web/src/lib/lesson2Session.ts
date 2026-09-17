// Lesson 2 Interactive Session Data (Directly mapped from Esho Arbi Shikhi Vol 1 Ch 1 Lesson 2, pages 22-24)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_02_STEPS: SessionStep[] = [
  // 1. Page 22: Adjectives Priming (Part 1: 4 core descriptive adjectives)
  {
    id: 'step-1-vocab-adj-1',
    type: 'vocab_prime',
    pageNumber: 22,
    titleEn: 'Descriptive Adjectives',
    titleAr: 'الصِّفَاتُ (الجُزْءُ الأَوَّلُ)',
    instructionEn: 'Listen and memorize the adjectives',
    instructionBn: 'উচ্চারণ শুনুন এবং গুণবাচক শব্দগুলো লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2_jadid', ar: 'جَدِيدٌ', en: 'New', bn: 'নতুন', romanized: 'jadīdun', emoji: '🆕' },
        { id: 'v1_c2_qadim', ar: 'قَدِيمٌ', en: 'Old', bn: 'পুরানো', romanized: 'qadīmun', emoji: '📜' },
        { id: 'v1_c2_jamil', ar: 'جَمِيلٌ', en: 'Beautiful', bn: 'সুন্দর', romanized: 'jamīlun', emoji: '🌸' },
        { id: 'v1_c2_kabir', ar: 'كَبِيرٌ', en: 'Big', bn: 'বড়', romanized: 'kabīrun', emoji: '🐘' },
      ],
    },
  },

  // 2. Active Recall Matching: Adjectives Part 1
  {
    id: 'step-2-pair-adj-1',
    type: 'speed_pair',
    pageNumber: 22,
    titleEn: 'Pair Matching',
    titleAr: 'تَطْبِيقُ الصِّفَاتِ',
    instructionEn: 'Match each adjective to its meaning',
    instructionBn: 'শব্দার্থগুলো মিলিয়ে দিন',
    pairPayload: {
      pairs: [
        { id: 'v1_c2_jadid', ar: 'جَدِيدٌ', meaning: 'New' },
        { id: 'v1_c2_qadim', ar: 'قَدِيمٌ', meaning: 'Old' },
        { id: 'v1_c2_jamil', ar: 'جَمِيلٌ', meaning: 'Beautiful' },
        { id: 'v1_c2_kabir', ar: 'كَبِيرٌ', meaning: 'Big' },
      ],
    },
  },

  // 3. Page 22: Adjectives Priming (Part 2: 4 remaining adjectives)
  {
    id: 'step-3-vocab-adj-2',
    type: 'vocab_prime',
    pageNumber: 22,
    titleEn: 'Descriptive Adjectives',
    titleAr: 'الصِّفَاتُ (الجُزْءُ الثَّانِي)',
    instructionEn: 'Listen and memorize the adjectives',
    instructionBn: 'পরবর্তী গুণবাচক শব্দগুলো লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2_saghir', ar: 'صَغِيرٌ', en: 'Small', bn: 'ছোট', romanized: 'ṣaghīrun', emoji: '🐜' },
        { id: 'v1_c2_jayyid', ar: 'جَيِّدٌ', en: 'Good', bn: 'ভালো', romanized: 'jayyidun', emoji: '⭐' },
        { id: 'v1_c2_nazif', ar: 'نَظِيفٌ', en: 'Clean', bn: 'পরিচ্ছন্ন', romanized: 'naẓīfun', emoji: '✨' },
        { id: 'v1_c2_wasikh', ar: 'وَسِخٌ', en: 'Dirty', bn: 'ময়লা', romanized: 'wasikhun', emoji: '🧹' },
      ],
    },
  },

  // 4. Active Recall Matching: Adjectives Part 2
  {
    id: 'step-4-pair-adj-2',
    type: 'speed_pair',
    pageNumber: 22,
    titleEn: 'Pair Matching',
    titleAr: 'تَطْبِيقُ الصِّفَاتِ',
    instructionEn: 'Match each adjective to its meaning',
    instructionBn: 'শব্দার্থগুলো মিলিয়ে দিন',
    pairPayload: {
      pairs: [
        { id: 'v1_c2_saghir', ar: 'صَغِيرٌ', meaning: 'Small' },
        { id: 'v1_c2_jayyid', ar: 'جَيِّدٌ', meaning: 'Good' },
        { id: 'v1_c2_nazif', ar: 'نَظِيفٌ', meaning: 'Clean' },
        { id: 'v1_c2_wasikh', ar: 'وَسِخٌ', meaning: 'Dirty' },
      ],
    },
  },

  // 5. Page 22: New Nouns Priming
  {
    id: 'step-5-vocab-nouns',
    type: 'vocab_prime',
    pageNumber: 22,
    titleEn: 'Lesson 2 Objects',
    titleAr: 'أَسْمَاءُ الدَّرْسِ الثَّانِي',
    instructionEn: 'Listen and memorize the new nouns',
    instructionBn: 'নতুন শব্দগুলো লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2_alam', ar: 'عَلَمٌ', en: 'A flag', bn: 'একটি পতাকা', romanized: '‘alamun', emoji: '🚩' },
        { id: 'v1_c2_mirwahah', ar: 'مِرْوَحَةٌ', en: 'A fan', bn: 'একটি পাখা', romanized: 'mirwaḥatun', emoji: '🪭' },
        { id: 'v1_c2_hadiqah', ar: 'حَدِيقَةٌ', en: 'A garden', bn: 'একটি বাগান', romanized: 'ḥadīqatun', emoji: '🌳' },
        { id: 'v1_c2_qamis', ar: 'قَمِيصٌ', en: 'A shirt', bn: 'একটি জামা', romanized: 'qamīṣun', emoji: '👔' },
      ],
    },
  },

  // 6. Page 22: Concept Discovery (Mawsoof & Sifah: Adjective Placement & Gender)
  {
    id: 'step-6-concept-sifah',
    type: 'concept_intro',
    pageNumber: 22,
    titleEn: 'Descriptive Phrases',
    titleAr: 'قَاعِدَةُ الصِّفَةِ وَالمَوْصُوفِ',
    instructionEn: 'The adjective follows the noun and matches its gender',
    instructionBn: 'গুণবাচক শব্দটি বিশেষ্যের পরে আসে এবং লিঙ্গ অনুসরণ করে',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-masc-adj',
          ar: 'كِتَابٌ جَدِيدٌ',
          romanized: 'kitābun jadīdun',
          meaningEn: 'A new book',
          meaningBn: 'একটি নতুন বই',
          exampleAr: 'عَلَمٌ جَمِيلٌ',
          exampleEn: 'A beautiful flag',
          exampleBn: 'একটি সুন্দর পতাকা',
          audioKey: 'كِتَابٌ جَدِيدٌ',
          exampleAudioKey: 'عَلَمٌ جَمِيلٌ',
          emoji: '📖',
        },
        {
          id: 'concept-fem-adj',
          ar: 'سَاعَةٌ جَدِيدَةٌ',
          romanized: 'sā‘atun jadīdatun',
          meaningEn: 'A new watch',
          meaningBn: 'একটি নতুন ঘড়ি',
          exampleAr: 'حَدِيقَةٌ جَمِيلَةٌ',
          exampleEn: 'A beautiful garden',
          exampleBn: 'একটি সুন্দর বাগান',
          audioKey: 'سَاعَةٌ جَدِيدَةٌ',
          exampleAudioKey: 'حَدِيقَةٌ جَمِيلَةٌ',
          emoji: '⌚',
        },
      ],
    },
  },

  // 7. Page 22: Gender Discrimination Drill 1 (Masculine Noun)
  {
    id: 'step-7-polar-alam',
    type: 'polar_sort',
    pageNumber: 22,
    titleEn: 'Gender Agreement',
    titleAr: 'مُطَابَقَةُ الصِّفَةِ',
    instructionEn: 'Which phrase matches the noun?',
    instructionBn: 'কোন গুণবাচক শব্দটি সঠিক?',
    itemId: 'pattern:sifah_masc',
    polarPayload: {
      arabicSubject: 'عَلَمٌ',
      meaningEn: 'A flag (Masculine)',
      meaningBn: 'একটি পতাকা',
      gender: 'masculine',
      correctAnswer: 'عَلَمٌ جَمِيلٌ',
      options: ['عَلَمٌ جَمِيلٌ', 'عَلَمٌ جَمِيلَةٌ'],
      emoji: '🚩',
    },
  },

  // 8. Page 22: Gender Discrimination Drill 2 (Feminine Noun)
  {
    id: 'step-8-polar-hadiqah',
    type: 'polar_sort',
    pageNumber: 22,
    titleEn: 'Gender Agreement',
    titleAr: 'مُطَابَقَةُ الصِّفَةِ',
    instructionEn: 'Which phrase matches the noun?',
    instructionBn: 'কোন গুণবাচক শব্দটি সঠিক?',
    itemId: 'pattern:sifah_fem',
    polarPayload: {
      arabicSubject: 'حَدِيقَةٌ',
      meaningEn: 'A garden (Feminine ة)',
      meaningBn: 'একটি বাগান',
      gender: 'feminine',
      correctAnswer: 'حَدِيقَةٌ جَمِيلَةٌ',
      options: ['حَدِيقَةٌ جَمِيلَةٌ', 'حَدِيقَةٌ جَمِيلٌ'],
      emoji: '🌳',
    },
  },

  // 9. Page 23: Sentence Assembly 1 (Masculine Near + Adjective)
  {
    id: 'step-9-assembly-kitab-jadid',
    type: 'sentence_assembly',
    pageNumber: 23,
    titleEn: 'Sentence Practice',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ الوَصْفِيَّةِ',
    instructionEn: 'Assemble the sentence in Arabic',
    instructionBn: 'আরবীতে বাক্যটি সাজান',
    itemId: 'v1_c2_kitab_jadid',
    assemblyPayload: {
      promptEn: 'This is a new book',
      promptBn: 'ইহা একটি নতুন বই',
      expectedAnswer: ['هَذَا', 'كِتَابٌ', 'جَدِيدٌ'],
      chips: ['هَذَا', 'كِتَابٌ', 'جَدِيدٌ', 'قَدِيمٌ', 'ذَلِكَ'],
      emoji: '📖',
    },
  },

  // 10. Page 23: Sentence Assembly 2 (Masculine Far + Adjective)
  {
    id: 'step-10-assembly-alam-jamil',
    type: 'sentence_assembly',
    pageNumber: 23,
    titleEn: 'Sentence Practice',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ الوَصْفِيَّةِ',
    instructionEn: 'Assemble the sentence in Arabic',
    instructionBn: 'আরবীতে বাক্যটি সাজান',
    itemId: 'v1_c2_alam_jamil',
    assemblyPayload: {
      promptEn: 'That is a beautiful flag',
      promptBn: 'উহা একটি সুন্দর পতাকা',
      expectedAnswer: ['ذَلِكَ', 'عَلَمٌ', 'جَمِيلٌ'],
      chips: ['ذَلِكَ', 'عَلَمٌ', 'جَمِيلٌ', 'هَذَا', 'صَغِيرٌ'],
      emoji: '🚩',
    },
  },

  // 11. Page 23: Sentence Assembly 3 (Feminine Near + Adjective)
  {
    id: 'step-11-assembly-mirwahah-jayyidah',
    type: 'sentence_assembly',
    pageNumber: 23,
    titleEn: 'Sentence Practice',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ الوَصْفِيَّةِ',
    instructionEn: 'Assemble the sentence in Arabic',
    instructionBn: 'আরবীতে বাক্যটি সাজান',
    itemId: 'v1_c2_mirwahah_jayyidah',
    assemblyPayload: {
      promptEn: 'This is a good fan',
      promptBn: 'ইহা একটি ভালো পাখা',
      expectedAnswer: ['هَذِهِ', 'مِرْوَحَةٌ', 'جَيِّدَةٌ'],
      chips: ['هَذِهِ', 'مِرْوَحَةٌ', 'جَيِّدَةٌ', 'تِلْكَ', 'وَسِخَةٌ'],
      emoji: '🪭',
    },
  },

  // 12. Page 23: Sentence Assembly 4 (Feminine Far + Adjective)
  {
    id: 'step-12-assembly-haqibah-saghirah',
    type: 'sentence_assembly',
    pageNumber: 23,
    titleEn: 'Sentence Practice',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ الوَصْفِيَّةِ',
    instructionEn: 'Assemble the sentence in Arabic',
    instructionBn: 'আরবীতে বাক্যটি সাজান',
    itemId: 'v1_c2_haqibah_saghirah',
    assemblyPayload: {
      promptEn: 'That is a small bag',
      promptBn: 'উহা একটি ছোট ব্যাগ',
      expectedAnswer: ['تِلْكَ', 'حَقِيبَةٌ', 'صَغِيرَةٌ'],
      chips: ['تِلْكَ', 'حَقِيبَةٌ', 'صَغِيرَةٌ', 'كَبِيرَةٌ', 'هَذِهِ'],
      emoji: '💼',
    },
  },

  // 13. Page 24: Single Choice Cloze Drill 1
  {
    id: 'step-13-cloze-masjid',
    type: 'cloze_choice',
    pageNumber: 24,
    titleEn: 'Complete the Phrase',
    titleAr: 'إِكْمَالُ الجُمْلَةِ',
    instructionEn: 'Select the matching adjective',
    instructionBn: 'উপযুক্ত গুণবাচক শব্দটি নির্বাচন করুন',
    itemId: 'pattern:masjid_kabir',
    clozePayload: {
      questionAr: 'ذَلِكَ مَسْجِدٌ ...',
      questionEn: 'That is a big mosque.',
      questionBn: 'উহা একটি বড় মসজিদ।',
      partialAnswerAr: 'ذَلِكَ مَسْجِدٌ',
      correctAnswer: 'كَبِيرٌ',
      options: ['كَبِيرٌ', 'كَبِيرَةٌ', 'صَغِيرَةٌ', 'جَمِيلَةٌ'],
      emoji: '🕌',
      distance: 'far',
    },
  },

  // 14. Page 24: Single Choice Cloze Drill 2
  {
    id: 'step-14-cloze-madrasah',
    type: 'cloze_choice',
    pageNumber: 24,
    titleEn: 'Complete the Phrase',
    titleAr: 'إِكْمَالُ الجُمْلَةِ',
    instructionEn: 'Select the matching adjective',
    instructionBn: 'উপযুক্ত গুণবাচক শব্দটি নির্বাচন করুন',
    itemId: 'pattern:madrasah_kabirah',
    clozePayload: {
      questionAr: 'تِلْكَ مَدْرَسَةٌ ...',
      questionEn: 'That is a big school.',
      questionBn: 'উহা একটি বড় মাদ্রাসা।',
      partialAnswerAr: 'تِلْكَ مَدْرَسَةٌ',
      correctAnswer: 'كَبِيرَةٌ',
      options: ['كَبِيرَةٌ', 'كَبِيرٌ', 'صَغِيرٌ', 'جَمِيلٌ'],
      emoji: '🏫',
      distance: 'far',
    },
  },

  // 15. Active Recall Matching: Descriptive Phrases
  {
    id: 'step-15-pair-phrases',
    type: 'speed_pair',
    pageNumber: 24,
    titleEn: 'Pair Matching',
    titleAr: 'تَطْبِيقُ التَّرَاكِيبِ',
    instructionEn: 'Match each descriptive phrase to its meaning',
    instructionBn: 'বাক্যাংশগুলো মিলিয়ে দিন',
    pairPayload: {
      pairs: [
        { id: 'v1_c2_kitab_jadid', ar: 'كِتَابٌ جَدِيدٌ', meaning: 'A new book' },
        { id: 'v1_c2_alam_jamil', ar: 'عَلَمٌ جَمِيلٌ', meaning: 'A beautiful flag' },
        { id: 'v1_c2_bayt_saghir', ar: 'بَيْتٌ صَغِيرٌ', meaning: 'A small house' },
        { id: 'v1_c2_madrasah_kabirah', ar: 'مَدْرَسَةٌ كَبِيرَةٌ', meaning: 'A big school' },
      ],
    },
  },

  // 16. Quranic Echo Milestone Unlock for Lesson 2
  {
    id: 'step-16-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 24,
    titleEn: 'Quranic Milestone',
    titleAr: 'الصَّدَى القُرْآنِيُّ الْمُبَارَكُ',
    instructionEn: 'You can now recognize descriptive phrases in the Quran',
    instructionBn: 'আপনি এখন কুরআনে গুণবাচক বাক্যাংশ চিনতে সক্ষম!',
    echoPayload: {
      surahNumber: 12,
      ayahNumber: 18,
      surahNameAr: 'سُورَةُ يُوسُفَ',
      surahNameEn: 'Surah Yusuf',
      arabicText: 'فَصَبْرٌ جَمِيلٌ ۖ وَاللَّهُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ',
      translationEn: 'So patience is most fitting and beautiful. And Allah is the one sought for help against that which you describe.',
      translationBn: 'সুতরাং ধৈর্য ধারণ করাই শ্রেয়। তোমরা যা বলছ সে বিষয়ে আল্লাহই একমাত্র সাহায্যস্থল।',
      highlightedWords: ['فَصَبْرٌ', 'صَبْرٌ', 'جَمِيلٌ'],
      reflection: 'In this famous ayah, Prophet Ya‘qub (AS) uses the exact descriptive rule you just learned: "صَبْرٌ" (patience) qualified by the masculine adjective "جَمِيلٌ" (beautiful).',
      audioKey: 'quran_012018',
    },
  },
];

export const LESSON_02_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 2,
  titleEn: 'Descriptive Adjectives',
  titleAr: 'الصِّفَاتُ وَالمَوْصُوفُ',
  wordsLearned: [
    'جَدِيدٌ', 'قَدِيمٌ', 'جَمِيلٌ', 'كَبِيرٌ',
    'صَغِيرٌ', 'جَيِّدٌ', 'نَظِيفٌ', 'وَسِخٌ',
    'عَلَمٌ', 'مِرْوَحَةٌ', 'حَدِيقَةٌ', 'قَمِيصٌ'
  ],
  steps: LESSON_02_STEPS,
};

// Lesson 5 Interactive Session Data (Directly mapped from textbook Volume 1 Chapter 1 Lesson 5, pages 32-35)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_05_STEPS: SessionStep[] = [
  // 1. Page 32: Singular Possessive Pronoun Matrix (ضَمَائِرُ المِلْكِيَّةِ المُفْرَدَة)
  {
    id: 'step-1-possessive-matrix',
    type: 'possessive_matrix',
    pageNumber: 32,
    titleEn: 'Possessive Suffix Matrix',
    titleAr: 'ضَمَائِرُ المِلْكِيَّةِ المُفْرَدَةُ',
    instructionEn: 'Tap suffixes to see how ownership attaches to base nouns in Arabic.',
    instructionBn: 'আরবিতে কীভাবে শব্দের শেষে মালিকানা বা সম্বন্ধসূচক সর্বনাম যুক্ত হয় তা লক্ষ্য করুন।',
    matrixPayload: {
      matrices: [
        {
          baseWordAr: 'كِتَابٌ',
          baseMeaningEn: 'A book',
          emoji: '📖',
          forms: [
            { suffix: 'ـِي', pronounLabel: 'My', ar: 'كِتَابِي', en: 'My book', romanized: 'kitābī', audioKey: 'kitabi' },
            { suffix: 'ـُكَ', pronounLabel: 'Your (m)', ar: 'كِتَابُكَ', en: 'Your book (m)', romanized: 'kitābuka', audioKey: 'kitabuka' },
            { suffix: 'ـُكِ', pronounLabel: 'Your (f)', ar: 'كِتَابُكِ', en: 'Your book (f)', romanized: 'kitābuki', audioKey: 'kitabuki' },
            { suffix: 'ـُهُ', pronounLabel: 'His', ar: 'كِتَابُهُ', en: 'His book', romanized: 'kitābuhu', audioKey: 'kitabuhu' },
            { suffix: 'ـُهَا', pronounLabel: 'Her', ar: 'كِتَابُهَا', en: 'Her book', romanized: 'kitābuhā', audioKey: 'kitabuha' },
          ],
        },
        {
          baseWordAr: 'قَلَمٌ',
          baseMeaningEn: 'A pen',
          emoji: '🖊️',
          forms: [
            { suffix: 'ـِي', pronounLabel: 'My', ar: 'قَلَمِي', en: 'My pen', romanized: 'qalamī', audioKey: 'qalami' },
            { suffix: 'ـُكَ', pronounLabel: 'Your (m)', ar: 'قَلَمُكَ', en: 'Your pen (m)', romanized: 'qalamuka', audioKey: 'qalamuka' },
            { suffix: 'ـُكِ', pronounLabel: 'Your (f)', ar: 'قَلَمُكِ', en: 'Your pen (f)', romanized: 'qalamuki', audioKey: 'qalamuki' },
            { suffix: 'ـُهُ', pronounLabel: 'His', ar: 'قَلَمُهُ', en: 'His pen', romanized: 'qalamuhu', audioKey: 'qalamuhu' },
            { suffix: 'ـُهَا', pronounLabel: 'Her', ar: 'قَلَمُهَا', en: 'Her pen', romanized: 'qalamuhā', audioKey: 'qalamuha' },
          ],
        },
      ],
    },
  },

  // 2. Page 32: Family Members Vocabulary Priming
  {
    id: 'step-2-vocab-family',
    type: 'vocab_prime',
    pageNumber: 32,
    titleEn: 'Family Members',
    titleAr: 'أَفْرَادُ الأُسْرَةِ',
    instructionEn: 'Listen and memorize the vocabulary for family relations.',
    instructionBn: 'উচ্চারণ শুনুন এবং পারিবারিক সম্পর্কের শব্দগুলো লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c5_ab', ar: 'أَبٌ', en: 'Father', bn: 'আব্বা / পিতা', romanized: 'abun', emoji: '👨' },
        { id: 'v1_c5_umm', ar: 'أُمٌّ', en: 'Mother', bn: 'আম্মা / মাতা', romanized: 'ummun', emoji: '👩' },
        { id: 'v1_c5_akh', ar: 'أَخٌ', en: 'Brother', bn: 'ভাই', romanized: 'akhun', emoji: '👦' },
        { id: 'v1_c5_ukht', ar: 'أُخْتٌ', en: 'Sister', bn: 'বোন', romanized: 'ukhtun', emoji: '👧' },
        { id: 'v1_c5_amm', ar: 'عَمٌّ', en: 'Paternal Uncle', bn: 'চাচা', romanized: '‘ammun', emoji: '👴' },
        { id: 'v1_c5_ammah', ar: 'عَمَّةٌ', en: 'Paternal Aunt', bn: 'ফুফু', romanized: '‘ammatun', emoji: '👵' },
        { id: 'v1_c5_khal', ar: 'خَالٌ', en: 'Maternal Uncle', bn: 'মামা', romanized: 'khālun', emoji: '🧔' },
        { id: 'v1_c5_khalah', ar: 'خَالَةٌ', en: 'Maternal Aunt', bn: 'খালা', romanized: 'khālatun', emoji: '👱‍♀️' },
        { id: 'v1_c5_jadd', ar: 'جَدٌّ', en: 'Grandfather', bn: 'দাদা / নানা', romanized: 'jaddun', emoji: '🧓' },
        { id: 'v1_c5_jaddah', ar: 'جَدَّةٌ', en: 'Grandmother', bn: 'দাদী / নানী', romanized: 'jaddatun', emoji: '👵' },
        { id: 'v1_c5_sadiq', ar: 'صَدِيقٌ', en: 'Friend', bn: 'বন্ধু', romanized: 'ṣadīqun', emoji: '🤝' },
        { id: 'v1_c5_aduww', ar: 'عَدُوٌّ', en: 'Enemy', bn: 'শত্রু', romanized: '‘aduwwun', emoji: '⚔️' },
      ],
    },
  },

  // 3. Page 32: Active Recall Matching - Family Relations
  {
    id: 'step-3-pair-family',
    type: 'speed_pair',
    pageNumber: 32,
    titleEn: 'Pair Matching',
    titleAr: 'تَطْبِيقُ كَلِمَاتِ الأُسْرَةِ',
    instructionEn: 'Match each family member word to its correct English meaning.',
    instructionBn: 'পারিবারিক সম্পর্কের শব্দার্থগুলো মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'pf-ab', ar: 'أَبٌ', meaning: 'Father' },
        { id: 'pf-umm', ar: 'أُمٌّ', meaning: 'Mother' },
        { id: 'pf-akh', ar: 'أَخٌ', meaning: 'Brother' },
        { id: 'pf-ukht', ar: 'أُخْتٌ', meaning: 'Sister' },
      ],
    },
  },

  // 4. Page 33: The Five Nouns Irregular Insertion (أَبٌ وَأَخٌ مَعَ حَرْفِ الوَاوِ)
  {
    id: 'step-4-matrix-irregulars',
    type: 'possessive_matrix',
    pageNumber: 33,
    titleEn: 'Special Rule: Father & Brother with (و)',
    titleAr: 'الأَسْمَاءُ الخَمْسَةُ: أَبٌ وَأَخٌ',
    instructionEn: 'Notice the extra "و" inserted before suffixes for Father and Brother (except "my").',
    instructionBn: '"আব্বা" ও "ভাই" শব্দের শেষে "আমার" ব্যতীত অন্য সর্বনাম যুক্ত হলে অতিরিক্ত "ওয়াও" যুক্ত হয়।',
    matrixPayload: {
      matrices: [
        {
          baseWordAr: 'أَبٌ',
          baseMeaningEn: 'Father',
          emoji: '👨',
          isIrregularFiveNoun: true,
          forms: [
            { suffix: 'ـِي', pronounLabel: 'My', ar: 'أَبِي', en: 'My father', romanized: 'abī', audioKey: 'abi' },
            { suffix: 'ـُوكَ', pronounLabel: 'Your (m)', ar: 'أَبُوكَ', en: 'Your father (m)', romanized: 'abūka', audioKey: 'abuka' },
            { suffix: 'ـُوكِ', pronounLabel: 'Your (f)', ar: 'أَبُوكِ', en: 'Your father (f)', romanized: 'abūki', audioKey: 'abuki' },
            { suffix: 'ـُوهُ', pronounLabel: 'His', ar: 'أَبُوهُ', en: 'His father', romanized: 'abūhu', audioKey: 'abuhu' },
            { suffix: 'ـُوهَا', pronounLabel: 'Her', ar: 'أَبُوهَا', en: 'Her father', romanized: 'abūhā', audioKey: 'abuha' },
          ],
        },
        {
          baseWordAr: 'أَخٌ',
          baseMeaningEn: 'Brother',
          emoji: '👦',
          isIrregularFiveNoun: true,
          forms: [
            { suffix: 'ـِي', pronounLabel: 'My', ar: 'أَخِي', en: 'My brother', romanized: 'akhī', audioKey: 'akhi' },
            { suffix: 'ـُوكَ', pronounLabel: 'Your (m)', ar: 'أَخُوكَ', en: 'Your brother (m)', romanized: 'akhūka', audioKey: 'akhuka' },
            { suffix: 'ـُوكِ', pronounLabel: 'Your (f)', ar: 'أَخُوكِ', en: 'Your brother (f)', romanized: 'akhūki', audioKey: 'akhuki' },
            { suffix: 'ـُوهُ', pronounLabel: 'His', ar: 'أَخُوهُ', en: 'His brother', romanized: 'akhūhu', audioKey: 'akhuhu' },
            { suffix: 'ـُوهَا', pronounLabel: 'Her', ar: 'أَخُوهَا', en: 'Her brother', romanized: 'akhūhā', audioKey: 'akhuha' },
          ],
        },
      ],
    },
  },

  // 5. Pages 33-35: Household & Sacred Terminology Priming
  {
    id: 'step-5-vocab-terms',
    type: 'vocab_prime',
    pageNumber: 33,
    titleEn: 'Household & Sacred Nouns',
    titleAr: 'مُفْرَدَاتُ البَيْتِ وَالعَقِيدَةِ',
    instructionEn: 'Listen and memorize essential household and faith-affirming terms.',
    instructionBn: 'ঘরের উপকরণ ও ধর্মীয় বিশ্বাসের প্রয়োজনীয় শব্দগুলো লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c5_ghurfah', ar: 'غُرْفَةٌ', en: 'A room', bn: 'একটি কামরা / ঘর', romanized: 'ghurfatun', emoji: '🚪' },
        { id: 'v1_c5_firash', ar: 'فِرَاشٌ', en: 'Bed / Bedding', bn: 'বিছানা', romanized: 'firāshun', emoji: '🛏️' },
        { id: 'v1_c5_iqd', ar: 'عِقْدٌ', en: 'A necklace', bn: 'একটি হার', romanized: '‘iqdun', emoji: '📿' },
        { id: 'v1_c5_kurrasah', ar: 'كُرَّاسَةٌ', en: 'A notebook', bn: 'একটি খাতা', romanized: 'kurrāsatun', emoji: '📒' },
        { id: 'v1_c5_tayyib', ar: 'طَيِّبٌ', en: 'Good / Pleasant', bn: 'উত্তম / ভালো', romanized: 'ṭayyibun', emoji: '✨' },
        { id: 'v1_c5_rabb', ar: 'رَبٌّ', en: 'Lord / Sustainer', bn: 'প্রতিপালক / রব', romanized: 'rabbun', emoji: '☝️' },
        { id: 'v1_c5_din', ar: 'دِينٌ', en: 'Religion / Faith', bn: 'ধর্ম / দ্বীন', romanized: 'dīnun', emoji: '🕌' },
        { id: 'v1_c5_qiblah', ar: 'قِبْلَةٌ', en: 'Direction of Prayer', bn: 'কিবলা', romanized: 'qiblatun', emoji: '🕋' },
      ],
    },
  },

  // 6. Page 33: Sentence Assembly - Fatima is my sister and I am her brother
  {
    id: 'step-6-assembly-fatima',
    type: 'sentence_assembly',
    pageNumber: 33,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "Fatima is my sister and I am her brother"',
    instructionBn: 'বাক্যটি সাজান: "ফাতেমা আমার বোন এবং আমি তার ভাই"',
    assemblyPayload: {
      promptEn: 'Fatima is my sister and I am her brother',
      promptBn: 'ফাতেমা আমার বোন এবং আমি তার ভাই',
      expectedAnswer: ['فَاطِمَةُ', 'أُخْتِي', 'وَ', 'أَنَا', 'أَخُوهَا'],
      chips: ['أُخْتِي', 'فَاطِمَةُ', 'أَخُوهَا', 'وَ', 'أَنَا', 'أَخِي'],
      emoji: '👧👦',
    },
  },

  // 7. Page 33: Sentence Assembly - My room and its open door
  {
    id: 'step-7-assembly-room',
    type: 'sentence_assembly',
    pageNumber: 33,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "This is my room, its door is open"',
    instructionBn: 'বাক্যটি সাজান: "এটি আমার কামরা, এর দরজাটি খোলা"',
    assemblyPayload: {
      promptEn: 'This is my room, its door is open',
      promptBn: 'এটি আমার কামরা, এর দরজাটি খোলা',
      expectedAnswer: ['هَذِهِ', 'غُرْفَتِي', 'بَابُهَا', 'مَفْتُوحٌ'],
      chips: ['غُرْفَتِي', 'مَفْتُوحٌ', 'هَذِهِ', 'بَابُهَا', 'مُغْلَقٌ'],
      emoji: '🚪',
    },
  },

  // 8. Page 33: Sentence Assembly - Bashir is my teacher
  {
    id: 'step-8-assembly-teacher',
    type: 'sentence_assembly',
    pageNumber: 33,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "Bashir is my teacher and I am his student"',
    instructionBn: 'বাক্যটি সাজান: "বশীর আমার শিক্ষক এবং আমি তার ছাত্র"',
    assemblyPayload: {
      promptEn: 'Bashir is my teacher and I am his student',
      promptBn: 'বশীর আমার শিক্ষক এবং আমি তার ছাত্র',
      expectedAnswer: ['بَشِيرٌ', 'مُعَلِّمِي', 'وَ', 'أَنَا', 'تِلْمِيذُهُ'],
      chips: ['مُعَلِّمِي', 'تِلْمِيذُهُ', 'بَشِيرٌ', 'وَ', 'أَنَا', 'صَدِيقِي'],
      emoji: '👨‍🏫',
    },
  },

  // 9. Page 34: Dialogic Battery Part 1 - Personal Ownership & Family
  {
    id: 'step-9-battery-dialogue1',
    type: 'alternative_qa',
    pageNumber: 34,
    titleEn: 'Personal Ownership Battery',
    titleAr: 'حِوَارُ المِلْكِيَّةِ وَالأُسْرَةِ (١)',
    instructionEn: 'Select the precise response for each personal possession inquiry.',
    instructionBn: 'মালিকানা ও পারিবারিক প্রতিটি প্রশ্নের সঠিক জবাব নির্বাচন করুন।',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c5-1',
          questionAr: 'مَا اسْمُكَ يَا وَلَدُ ؟',
          optionsAr: ['اِسْمِي شَاهِدٌ', 'اِسْمُكَ شَاهِدٌ'],
          correctAnswerAr: 'اِسْمِي شَاهِدٌ',
        },
        {
          id: 'qa-c5-2',
          questionAr: 'هَلْ هَذَا قَلَمُكَ ؟',
          optionsAr: ['نَعَمْ .. هَذَا قَلَمِي', 'لَا .. هُوَ قَلَمُكَ'],
          correctAnswerAr: 'نَعَمْ .. هَذَا قَلَمِي',
        },
        {
          id: 'qa-c5-3',
          questionAr: 'يَا زَيْنَبُ ! هَلْ هَذَا عِقْدُكِ ؟',
          optionsAr: ['نَعَمْ .. هَذَا عِقْدِي', 'نَعَمْ .. هَذَا عِقْدُهُ'],
          correctAnswerAr: 'نَعَمْ .. هَذَا عِقْدِي',
        },
        {
          id: 'qa-c5-4',
          questionAr: 'هَلْ أَخُوكَ تَاجِرٌ ؟',
          optionsAr: ['لَا .. أَخِي فَلَّاحٌ', 'نَعَمْ .. أَنَا فَلَّاحٌ'],
          correctAnswerAr: 'لَا .. أَخِي فَلَّاحٌ',
        },
      ],
    },
  },

  // 10. Page 34: Cloze Q&A - Quality of Object
  {
    id: 'step-10-cloze-condition',
    type: 'cloze_choice',
    pageNumber: 34,
    titleEn: 'Condition Q&A',
    titleAr: 'السُّؤَالُ عَنِ الحَالِ',
    instructionEn: 'Complete the answer to: "How is your pen?"',
    instructionBn: 'প্রশ্নটির জবাব পূর্ণ করুন: "তোমার কলমটি কেমন?"',
    clozePayload: {
      questionAr: 'كَيْفَ قَلَمُكَ ؟',
      questionEn: 'How is your pen?',
      questionBn: 'তোমার কলমটি কেমন?',
      partialAnswerAr: 'قَلَمِي ...',
      correctAnswer: 'جَيِّدٌ',
      options: ['جَيِّدٌ', 'جَيِّدَةٌ', 'مُغْلَقٌ'],
      emoji: '⭐',
    },
  },

  // 11. Page 34: Speed Pair Matching - Possessive Suffix Combinations
  {
    id: 'step-11-pair-possessives',
    type: 'speed_pair',
    pageNumber: 34,
    titleEn: 'Possessive Recall',
    titleAr: 'مُطَابَقَةُ المِلْكِيَّةِ',
    instructionEn: 'Match each possessive phrase to its correct meaning.',
    instructionBn: 'সম্বন্ধসূচক বাক্যাংশের অর্থ মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'p-my-book', ar: 'كِتَابِي', meaning: 'My book' },
        { id: 'p-your-pen', ar: 'قَلَمُكَ', meaning: 'Your pen (m)' },
        { id: 'p-his-watch', ar: 'سَاعَتُهُ', meaning: 'His watch' },
        { id: 'p-her-room', ar: 'غُرْفَتُهَا', meaning: 'Her room' },
      ],
    },
  },

  // 12. Page 35: Plural Possessive Suffixes (ضَمَائِرُ المِلْكِيَّةِ الجَمْعُ)
  {
    id: 'step-12-concept-plural',
    type: 'concept_intro',
    pageNumber: 35,
    titleEn: 'Plural Possessive Pronouns (Our & Your)',
    titleAr: 'ضَمَائِرُ المِلْكِيَّةِ الجَمْعُ',
    instructionEn: 'Learn how "نَا" (Our) and "كُمْ" (Your [pl]) attach to nouns.',
    instructionBn: '"আমাদের" (-না) এবং "তোমাদের" (-কুম) কীভাবে শব্দের শেষে যুক্ত হয় তা লক্ষ্য করুন।',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-na',
          ar: 'كِتَابُنَا',
          romanized: 'kitābunā',
          meaningEn: 'Our book',
          meaningBn: 'আমাদের বই',
          descriptionEn: 'The suffix "ـنَا" denotes 1st person plural (our).',
          exampleAr: 'اَلْقُرْآنُ كِتَابُنَا',
          exampleEn: 'The Quran is our book',
          exampleBn: 'কুরআন আমাদের কিতাব',
          audioKey: 'kitabuna',
          exampleAudioKey: 'al_quranu_kitabuna',
          emoji: '📖',
        },
        {
          id: 'concept-kum',
          ar: 'كِتَابُكُمْ',
          romanized: 'kitābukum',
          meaningEn: 'Your book (plural)',
          meaningBn: 'তোমাদের বই',
          descriptionEn: 'The suffix "ـكُمْ" denotes 2nd person masculine plural (your).',
          exampleAr: 'كِتَابُنَا وَ كِتَابُكُمْ',
          exampleEn: 'Our book and your book',
          exampleBn: 'আমাদের বই এবং তোমাদের বই',
          audioKey: 'kitabukum',
          exampleAudioKey: 'al_quranu_kitabuna',
          emoji: '👥',
        },
      ],
    },
  },

  // 13. Page 35: Sacred Creed Synthesis 1 - Allah is our Lord and your Lord
  {
    id: 'step-13-assembly-creed-1',
    type: 'sentence_assembly',
    pageNumber: 35,
    titleEn: 'Creedal Declaration',
    titleAr: 'عَقِيدَةٌ وَتَوْحِيدٌ',
    instructionEn: 'Assemble: "Allah is our Lord and your Lord"',
    instructionBn: 'পবিত্র বাক্যটি সাজান: "আল্লাহ আমাদের রব এবং তোমাদের রব"',
    assemblyPayload: {
      promptEn: 'Allah is our Lord and your Lord',
      promptBn: 'আল্লাহ আমাদের রব এবং তোমাদের রব',
      expectedAnswer: ['اَللهُ', 'رَبُّنَا', 'وَ', 'رَبُّكُمْ'],
      chips: ['رَبُّنَا', 'اَللهُ', 'رَبُّكُمْ', 'وَ', 'دِينُنَا'],
      emoji: '☝️',
    },
  },

  // 14. Page 35: Sacred Creed Synthesis 2 - Muhammad is our Prophet and your Prophet
  {
    id: 'step-14-assembly-creed-2',
    type: 'sentence_assembly',
    pageNumber: 35,
    titleEn: 'Creedal Declaration',
    titleAr: 'عَقِيدَةٌ وَتَوْحِيدٌ',
    instructionEn: 'Assemble: "Muhammad is our Prophet and your Prophet"',
    instructionBn: 'পবিত্র বাক্যটি সাজান: "মুহাম্মদ আমাদের নবী এবং তোমাদের নবী"',
    assemblyPayload: {
      promptEn: 'Muhammad is our Prophet and your Prophet',
      promptBn: 'মুহাম্মদ আমাদের নবী এবং তোমাদের নবী',
      expectedAnswer: ['مُحَمَّدٌ', 'نَبِيُّنَا', 'وَ', 'نَبِيُّكُمْ'],
      chips: ['نَبِيُّنَا', 'مُحَمَّدٌ', 'نَبِيُّكُمْ', 'وَ', 'كِتَابُنَا'],
      emoji: '📜',
    },
  },

  // 15. Page 35: Sacred Creed Synthesis 3 - The Quran is our book and your book
  {
    id: 'step-15-assembly-creed-3',
    type: 'sentence_assembly',
    pageNumber: 35,
    titleEn: 'Creedal Declaration',
    titleAr: 'عَقِيدَةٌ وَتَوْحِيدٌ',
    instructionEn: 'Assemble: "The Quran is our book and your book"',
    instructionBn: 'পবিত্র বাক্যটি সাজান: "কুরআন আমাদের কিতাব এবং তোমাদের কিতাব"',
    assemblyPayload: {
      promptEn: 'The Quran is our book and your book',
      promptBn: 'কুরআন আমাদের কিতাব এবং তোমাদের কিতাব',
      expectedAnswer: ['اَلْقُرْآنُ', 'كِتَابُنَا', 'وَ', 'كِتَابُكُمْ'],
      chips: ['كِتَابُنَا', 'اَلْقُرْآنُ', 'كِتَابُكُمْ', 'وَ', 'قِبْلَتُنَا'],
      emoji: '📖',
    },
  },

  // 16. Page 35: Dialogic Battery Part 2 - The Sacred Creed Dialogue
  {
    id: 'step-16-battery-creed',
    type: 'alternative_qa',
    pageNumber: 35,
    titleEn: 'Creed Inquiry Battery',
    titleAr: 'حِوَارُ العَقِيدَةِ وَالإِيمَانِ (٢)',
    instructionEn: 'Respond to each fundamental creedal question with the shared communal declaration.',
    instructionBn: 'মৌলিক ধর্মীয় বিশ্বাসের প্রতিটি প্রশ্নের সঠিক জবাব নির্বাচন করুন।',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c5-5',
          questionAr: 'مَنْ رَبُّنَا وَ رَبُّكُمْ ؟',
          optionsAr: ['اَللهُ رَبُّنَا وَ رَبُّكُمْ', 'مُحَمَّدٌ رَبُّنَا'],
          correctAnswerAr: 'اَللهُ رَبُّنَا وَ رَبُّكُمْ',
        },
        {
          id: 'qa-c5-6',
          questionAr: 'مَا دِينُنَا وَ دِينُكُمْ ؟',
          optionsAr: ['اَلإِسْلَامُ دِينُنَا وَ دِينُكُمْ', 'اَلْقُرْآنُ دِينُنَا'],
          correctAnswerAr: 'اَلإِسْلَامُ دِينُنَا وَ دِينُكُمْ',
        },
        {
          id: 'qa-c5-7',
          questionAr: 'مَا قِبْلَتُنَا وَ قِبْلَتُكُمْ ؟',
          optionsAr: ['اَلْكَعْبَةُ قِبْلَتُنَا وَ قِبْلَتُكُمْ', 'اَلْمَسْجِدُ قِبْلَتُنَا'],
          correctAnswerAr: 'اَلْكَعْبَةُ قِبْلَتُنَا وَ قِبْلَتُكُمْ',
        },
        {
          id: 'qa-c5-8',
          questionAr: 'مَنْ نَبِيُّنَا وَ نَبِيُّكُمْ ؟',
          optionsAr: ['مُحَمَّدٌ نَبِيُّنَا وَ نَبِيُّكُمْ', 'رَاشِدٌ نَبِيُّنَا'],
          correctAnswerAr: 'مُحَمَّدٌ نَبِيُّنَا وَ نَبِيُّكُمْ',
        },
      ],
    },
  },

  // 17. Page 35: Syntactic Tarkib Dissector: Possessive Predicate Sentence
  {
    id: 'step-17-tarkib-dissector',
    type: 'tarkib_dissector',
    pageNumber: 35,
    titleEn: 'Syntactic Dissector',
    titleAr: 'التَّرْكِيبُ النَّحْوِيُّ',
    instructionEn: 'Dissect the nominal sentence containing a possessive construction: Subject (Mubtada) followed by Possessed Noun (Mudaf) and Possessor Suffix (Mudaf Ilayh).',
    instructionBn: 'বাক্যের ব্যাকরণগত বিন্যাসটি লক্ষ্য করুন: মুক্তাদা এবং সম্বন্ধযুক্ত খবর (মুদাফ ও মুদাফ ইলাইহি)।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-c5-1',
          sentenceAr: 'اَللهُ رَبُّنَا',
          sentenceTypeAr: 'جُمْلَةٌ اسْمِيَّةٌ (مُبْتَدَأٌ + خَبَرٌ مُضَافٌ)',
          sentenceTypeEn: 'Nominal Sentence (Subject + Possessive Predicate)',
          sentenceTypeBn: 'নামবাচক বাক্য (মুক্তাদা ও সম্বন্ধযুক্ত খবর)',
          slots: [
            {
              roleAr: 'مُبْتَدَأٌ',
              roleEn: 'Subject',
              roleBn: 'মুক্তাদা (উদ্দেশ্য)',
              expectedWordAr: 'اَللهُ',
            },
            {
              roleAr: 'خَبَرٌ (مُضَافٌ)',
              roleEn: 'Predicate (Mudaf)',
              roleBn: 'খবর (মুদাফ)',
              expectedWordAr: 'رَبُّ',
            },
            {
              roleAr: 'مُضَافٌ إِلَيْهِ',
              roleEn: 'Possessive Suffix (Mudaf Ilayh)',
              roleBn: 'মুদাফ ইলাইহি (যুক্ত সর্বনাম)',
              expectedWordAr: 'نَا',
            },
          ],
          availableWordsAr: ['رَبُّ', 'اَللهُ', 'نَا'],
        },
      ],
    },
  },

  // 18. Sacred Milestone: Quranic Echo (Surah Maryam 19:36)
  {
    id: 'step-18-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 35,
    titleEn: 'Quranic Milestone',
    titleAr: 'صَدَى القُرْآنِ الكَرِيمِ',
    instructionEn: 'Listen to the exact creedal words of Prophet Isa in Surah Maryam: "Allah is my Lord and your Lord".',
    instructionBn: 'সূরা মারিয়ামে হযরত ঈসা (আ.)-এর পবিত্র উচ্চারণ শ্রবণ করুন: "আল্লাহ আমার রব এবং তোমাদের রব"।',
    echoPayload: {
      surahNumber: 19,
      ayahNumber: 36,
      surahNameAr: 'سُورَةُ مَرْيَمَ',
      surahNameEn: 'Maryam',
      arabicText: 'وَإِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۚ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ',
      translationEn: 'And indeed, Allah is my Lord and your Lord, so worship Him. That is a straight path.',
      translationBn: 'আর নিশ্চয় আল্লাহ আমার রব এবং তোমাদেরও রব, অতএব তোমরা তাঁরই ইবাদত করো। এটাই সরল সঠিক পথ।',
      highlightedWords: ['رَبِّي', 'وَرَبُّكُمْ'],
      patternNameEn: 'First & Second Person Possessive Pronouns (ـي / ـكُمْ)',
      patternNameBn: '১ম ও ২য় পুরুষের যুক্ত সর্বনাম (আমার / তোমাদের)',
      lessonPatternAr: 'رَبِّي وَ رَبُّكَ',
      lessonPatternEn: 'My Lord and your Lord',
      lessonPatternBn: 'আমার রব ও তোমার রব',
      quranPatternAr: 'إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ',
      quranPatternEn: 'Indeed, Allah is my Lord and your Lord',
      quranPatternBn: 'নিশ্চয় আল্লাহ আমার রব এবং তোমাদেরও রব',
      reflection: 'In this lesson, you learned the possessive forms "رَبِّي" (my Lord) and "رَبُّكُمْ" (your Lord). In Surah Maryam, Prophet Isa proclaims this exact grammatical balance, affirming pure monotheism to his people.',
      audioKey: 'quran_019036',
    },
  },
];

export const LESSON_05_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 5,
  titleEn: 'Lesson 5: Possessive Pronouns & Family Relations',
  titleAr: 'الدَّرْسُ الخَامِسُ: ضَمَائِرُ المِلْكِيَّةِ وَأَفْرَادُ الأُسْرَةِ',
  wordsLearned: [
    'أَبٌ', 'أُمٌّ', 'أَخٌ', 'أُخْتٌ',
    'عَمٌّ', 'عَمَّةٌ', 'خَالٌ', 'خَالَةٌ',
    'جَدٌّ', 'جَدَّةٌ', 'صَدِيقٌ', 'عَدُوٌّ',
    'كِتَابِي', 'كِتَابُكَ', 'كِتَابُكِ', 'كِتَابُهُ', 'كِتَابُهَا',
    'أَبِي', 'أَبُوكَ', 'أَخِي', 'أَخُوكَ',
    'رَبٌّ', 'دِينٌ', 'طَيِّبٌ', 'عِقْدٌ', 'كُرَّاسَةٌ', 'غُرْفَةٌ', 'فِرَاشٌ', 'لِبَاسٌ',
    'قِبْلَةٌ', 'دَارٌ', 'جَنَّةٌ', 'قَبْرٌ',
  ],
  steps: LESSON_05_STEPS,
};

// Lesson 6 Interactive Session Data (Directly mapped from textbook Volume 1 Chapter 1 Lesson 6, pages 36-38)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_06_STEPS: SessionStep[] = [
  // 1. Page 36: Idafah Equation (قَاعِدَة الإِضَافَة: المُضَاف وَالمُضَاف إِلَيْهِ)
  {
    id: 'step-1-idafah-equation',
    type: 'idafah_equation',
    pageNumber: 36,
    titleEn: 'Idafah Core Rule',
    titleAr: 'قَاعِدَةُ الإِضَافَةِ',
    instructionEn: 'Observe how the possessed noun drops Tanween, and the possessor takes the genitive case.',
    instructionBn: 'লক্ষ্য করুন মুদাফ (মালিকানাধীন বস্তু) তানভীন বর্জন করে এবং মুদাফ ইলাইহ মাজরুর হয়।',
    idafahPayload: {
      ruleSummaryEn: 'The first noun drops Tanween (كِتَابُ, not كِتَابٌ)',
      ruleSummaryBn: 'মুদাফ (মালিকানাধীন বস্তুর) শেষে তানভীন হয় না (كِتَابُ)',
      examples: [
        {
          id: 'ex-1',
          breakdownAr: 'كِتَابُ + رَاشِدٍ',
          compoundAr: 'كِتَابُ رَاشِدٍ',
          compoundEn: "Rashid's book",
          compoundBn: 'রাশেদের বই',
          typeLabelEn: 'Male Name (ـٍ)',
          typeLabelBn: 'পুংলিঙ্গ নাম (ـٍ)',
          audioKey: 'kitabu_rashidin',
        },
        {
          id: 'ex-2',
          breakdownAr: 'كِتَابُ + عَائِشَةَ',
          compoundAr: 'كِتَابُ عَائِشَةَ',
          compoundEn: "Aisha's book",
          compoundBn: 'আয়েশার বই',
          typeLabelEn: 'Female Name (ـَ)',
          typeLabelBn: 'স্ত্রীলিঙ্গ নাম (ـَ)',
          audioKey: 'kitabu_aishata',
        },
        {
          id: 'ex-3',
          breakdownAr: 'كِتَابُ + الْمُعَلِّمِ',
          compoundAr: 'كِتَابُ الْمُعَلِّمِ',
          compoundEn: "The teacher's book",
          compoundBn: 'শিক্ষকের বই',
          typeLabelEn: 'Definite with Al- (ـِ)',
          typeLabelBn: 'আলিফ-লাম যুক্ত (ـِ)',
          audioKey: 'kitabu_al_muallimi',
        },
      ],
    },
  },

  // 2. Page 36: Active Recall Matching - Idafah Compounds
  {
    id: 'step-2-pair-idafah',
    type: 'speed_pair',
    pageNumber: 36,
    titleEn: 'Idafah Drill Matching',
    titleAr: 'تَطْبِيقُ عِبَارَاتِ الإِضَافَةِ',
    instructionEn: 'Match each Arabic Idafah phrase to its correct meaning.',
    instructionBn: 'আরবি সম্বন্ধযুক্ত শব্দগুলোর সাথে অর্থ মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'pi-1', ar: 'قَلَمُ خَالِدٍ', meaning: "Khalid's pen" },
        { id: 'pi-2', ar: 'سَاعَةُ بَشِيرٍ', meaning: "Bashir's watch" },
        { id: 'pi-3', ar: 'عِقْدُ آمِنَةَ', meaning: "Amina's necklace" },
        { id: 'pi-4', ar: 'بَابُ الْمَسْجِدِ', meaning: "The mosque's door" },
      ],
    },
  },

  // 3. Page 36: Pronoun Substitution in Possessives
  {
    id: 'step-3-concept-pronoun-sub',
    type: 'concept_intro',
    pageNumber: 36,
    titleEn: 'Pronoun Substitution',
    titleAr: 'إِبْدَالُ المُضَافِ إِلَيْهِ بِالضَّمِيرِ',
    instructionEn: 'See how the explicit possessor noun is replaced by an attached pronoun suffix.',
    instructionBn: 'লক্ষ্য করুন কীভাবে ব্যক্তিবাচক নামের পরিবর্তে সর্বনামীয় প্রত্যয় (হু/হা) বসে।',
    conceptPayload: {
      concepts: [
        {
          id: 'cp-sub-hu',
          ar: 'قَلَمُ مَحْمُودٍ ➔ قَلَمُهُ',
          romanized: 'qalamu maḥmūdin ➔ qalamuhu',
          meaningEn: "Mahmud's pen ➔ His pen",
          meaningBn: 'মাহমুদের কলম ➔ তার কলম',
          exampleAr: 'قَلَمُ مَحْمُودٍ جَدِيدٌ ➔ قَلَمُهُ جَدِيدٌ',
          exampleEn: "Mahmud's pen is new ➔ His pen is new.",
          exampleBn: 'মাহমুদের কলম নতুন ➔ তার কলম নতুন।',
          audioKey: 'qalamuhu',
          emoji: '🖊️',
        },
        {
          id: 'cp-sub-ha',
          ar: 'عِقْدُ آمِنَةَ ➔ عِقْدُهَا',
          romanized: 'ʿiqdu āminata ➔ ʿiqduhā',
          meaningEn: "Amina's necklace ➔ Her necklace",
          meaningBn: 'আমিনার হার ➔ তার হার',
          exampleAr: 'عِقْدُ آمِنَةَ جَمِيلٌ ➔ عِقْدُهَا جَمِيلٌ',
          exampleEn: "Amina's necklace is beautiful ➔ Her necklace is beautiful.",
          exampleBn: 'আমিনার হার সুন্দর ➔ তার হার সুন্দর।',
          audioKey: 'iqduha',
          emoji: '📿',
        },
      ],
    },
  },

  // 4. Page 36: Sentence Assembly 1
  {
    id: 'step-4-assembly-rashid-book',
    type: 'sentence_assembly',
    pageNumber: 36,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "Rashid\'s book is new"',
    instructionBn: 'বাক্যটি সাজান: "রাশেদের বই নতুন"',
    assemblyPayload: {
      promptEn: "Rashid's book is new",
      promptBn: 'রাশেদের বই নতুন',
      expectedAnswer: ['كِتَابُ', 'رَاشِدٍ', 'جَدِيدٌ'],
      chips: ['كِتَابُ', 'رَاشِدٍ', 'جَدِيدٌ', 'عَائِشَةَ'],
      emoji: '📖',
    },
  },

  // 5. Page 36: Sentence Assembly 2
  {
    id: 'step-5-assembly-aisha-book',
    type: 'sentence_assembly',
    pageNumber: 36,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "Aishah\'s book is beautiful"',
    instructionBn: 'বাক্যটি সাজান: "আয়েশার বই সুন্দর"',
    assemblyPayload: {
      promptEn: "Aishah's book is beautiful",
      promptBn: 'আয়েশার বই সুন্দর',
      expectedAnswer: ['كِتَابُ', 'عَائِشَةَ', 'جَمِيلٌ'],
      chips: ['كِتَابُ', 'عَائِشَةَ', 'جَمِيلٌ', 'قَدِيمٌ'],
      emoji: '📕',
    },
  },

  // 6. Page 37: Environmental & Town Vocabulary Priming
  {
    id: 'step-6-vocab-places',
    type: 'vocab_prime',
    pageNumber: 37,
    titleEn: 'Places & Sights Vocabulary',
    titleAr: 'مُفْرَدَاتُ الأَمَاكِنِ وَالمَنَاظِرِ',
    instructionEn: 'Listen and memorize new words describing roads, markets, and towns.',
    instructionBn: 'স্থান ও পরিবেশ বর্ণনাকারী নতুন শব্দগুলোর উচ্চারণ শুনুন ও অর্থ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c6_tariq', ar: 'طَرِيقٌ', en: 'Road / path', bn: 'একটি পথ / রাস্তা', romanized: 'ṭarīqun', emoji: '🛣️' },
        { id: 'v1_c6_suq', ar: 'سُوقٌ', en: 'Market / bazaar', bn: 'একটি বাজার', romanized: 'sūqun', emoji: '🏪' },
        { id: 'v1_c6_qaryah', ar: 'قَرْيَةٌ', en: 'Village', bn: 'একটি গ্রাম', romanized: 'qaryatun', emoji: '🏡' },
        { id: 'v1_c6_madinah', ar: 'مَدِينَةٌ', en: 'City / town', bn: 'একটি শহর', romanized: 'madīnatun', emoji: '🏙️' },
        { id: 'v1_c6_manzar', ar: 'مَنْظَرٌ', en: 'View / scenery', bn: 'একটি দৃশ্য', romanized: 'manẓarun', emoji: '🌄' },
        { id: 'v1_c6_jiddan', ar: 'جِدًّا', en: 'Very / exceedingly', bn: 'খুব / অত্যন্ত', romanized: 'jiddan', emoji: '✨' },
      ],
    },
  },

  // 7. Page 37: Active Recall Matching - Places & Sights
  {
    id: 'step-7-pair-places',
    type: 'speed_pair',
    pageNumber: 37,
    titleEn: 'Places Recall Drill',
    titleAr: 'مُطَابَقَةُ كَلِمَاتِ الأَمَاكِنِ',
    instructionEn: 'Match each place word with its correct meaning.',
    instructionBn: 'স্থানের শব্দগুলোর সাথে সঠিক অর্থ মিলিয়ে নিন।',
    pairPayload: {
      pairs: [
        { id: 'pp-tariq', ar: 'طَرِيقٌ', meaning: 'Road / path' },
        { id: 'pp-suq', ar: 'سُوقٌ', meaning: 'Market' },
        { id: 'pp-qaryah', ar: 'قَرْيَةٌ', meaning: 'Village' },
        { id: 'pp-madinah', ar: 'مَدِينَةٌ', meaning: 'City' },
      ],
    },
  },

  // 8. Page 37: Dialogic Battery Part 1 - Idafah & Pronoun Harmony
  {
    id: 'step-8-battery-idafah1',
    type: 'alternative_qa',
    pageNumber: 37,
    titleEn: 'Idafah Dialogue Battery 1',
    titleAr: 'حِوَارُ الإِضَافَةِ وَالتَّعْرِيفِ (١)',
    instructionEn: 'Select the grammatically correct response for each Idafah query.',
    instructionBn: 'ইযাফাত ও সর্বনামের সঠিক ব্যবহার অনুযায়ী প্রতিটি প্রশ্নের নির্ভুল উত্তর নির্বাচন করুন।',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c6-1',
          questionAr: 'هَلْ هَذَا كِتَابُ عَائِشَةَ ؟',
          optionsAr: ['نَعَمْ .. هَذَا كِتَابُهَا', 'نَعَمْ .. هَذَا كِتَابُهُ'],
          correctAnswerAr: 'نَعَمْ .. هَذَا كِتَابُهَا',
        },
        {
          id: 'qa-c6-2',
          questionAr: 'هَلْ هَذَا قَلَمُ خَالِدٍ ؟',
          optionsAr: ['نَعَمْ .. هَذَا قَلَمُهُ', 'نَعَمْ .. هَذَا قَلَمُهَا'],
          correctAnswerAr: 'نَعَمْ .. هَذَا قَلَمُهُ',
        },
        {
          id: 'qa-c6-3',
          questionAr: 'هَلْ بَابُ الْبَيْتِ مَفْتُوحٌ ؟',
          optionsAr: ['لَا .. هُوَ مُغْلَقٌ', 'لَا .. هِيَ مُغْلَقَةٌ'],
          correctAnswerAr: 'لَا .. هُوَ مُغْلَقٌ',
        },
        {
          id: 'qa-c6-4',
          questionAr: 'هَلْ أَنْتَ إِمَامُ الْمَسْجِدِ ؟',
          optionsAr: ['نَعَمْ .. أَنَا إِمَامُ الْمَسْجِدِ', 'نَعَمْ .. أَنَا إِمَامٌ الْمَسْجِدِ'],
          correctAnswerAr: 'نَعَمْ .. أَنَا إِمَامُ الْمَسْجِدِ',
        },
      ],
    },
  },

  // 9. Page 37: Sentence Assembly - Village Scenery
  {
    id: 'step-9-assembly-manzar',
    type: 'sentence_assembly',
    pageNumber: 37,
    titleEn: 'Sentence Building: Village Scenery',
    titleAr: 'تَرْكِيبُ: مَنْظَرُ القَرْيَةِ',
    instructionEn: 'Assemble: "The village view is very beautiful"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "গ্রামের দৃশ্যটি খুব সুন্দর"',
    assemblyPayload: {
      promptEn: 'The village view is very beautiful',
      promptBn: 'গ্রামের দৃশ্যটি খুব সুন্দর',
      expectedAnswer: ['مَنْظَرُ', 'الْقَرْيَةِ', 'جَمِيلٌ', 'جِدًّا'],
      chips: ['مَنْظَرُ', 'الْقَرْيَةِ', 'جَمِيلٌ', 'جِدًّا', 'سُوقُ', 'كَبِيرٌ'],
      emoji: '🌄',
    },
  },

  // 10. Page 38: Authentic Reading & Translation Drill (اقْرَأْ وَتَرْجِمْ)
  {
    id: 'step-10-assembly-roads',
    type: 'sentence_assembly',
    pageNumber: 38,
    titleEn: 'Textbook Translation: Contrasting Roads',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: الطَّرِيقُ الوَاسِعُ وَالضَّيِّقُ',
    instructionEn: 'Read the Arabic sentence and assemble the accurate translation using word chips.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং শব্দ চিপস সাজিয়ে সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'هَذَا الطَّرِيقُ وَاسِعٌ وَذَلِكَ الطَّرِيقُ ضَيِّقٌ',
      promptEn: 'This road is wide and that road is narrow',
      promptBn: 'এই রাস্তাটি প্রশস্ত এবং ওই রাস্তাটি সংকীর্ণ',
      expectedAnswer: ['This', 'road', 'is', 'wide', 'and', 'that', 'road', 'is', 'narrow'],
      chips: ['This', 'road', 'is', 'wide', 'and', 'that', 'road', 'is', 'narrow', 'clean', 'short'],
      expectedAnswerBn: ['এই', 'রাস্তাটি', 'প্রশস্ত', 'এবং', 'ওই', 'রাস্তাটি', 'সংকীর্ণ'],
      chipsBn: ['এই', 'রাস্তাটি', 'প্রশস্ত', 'এবং', 'ওই', 'রাস্তাটি', 'সংকীর্ণ', 'পরিষ্কার', 'ছোট'],
      emoji: '🛣️',
    },
  },

  // 11. Page 38: Vocabulary Priming - Family & Marital Relations
  {
    id: 'step-11-vocab-relatives',
    type: 'vocab_prime',
    pageNumber: 38,
    titleEn: 'Family & Marriage Vocabulary',
    titleAr: 'مُفْرَدَاتُ الأُسْرَةِ وَالزَّوَاجِ',
    instructionEn: 'Learn essential terms for parents and marital relations.',
    instructionBn: 'পিতা-মাতা ও দাম্পত্য সম্পর্কিত শব্দগুলোর অর্থ ও উচ্চারণ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c6_zawj', ar: 'زَوْجٌ', en: 'Husband', bn: 'স্বামী', romanized: 'zawjun', emoji: '👨' },
        { id: 'v1_c6_zawjah', ar: 'زَوْجَةٌ', en: 'Wife', bn: 'স্ত্রী', romanized: 'zawjatun', emoji: '👩' },
        { id: 'v1_c6_walid', ar: 'وَالِدٌ', en: 'Father', bn: 'আব্বা / পিতা', romanized: 'wālidun', emoji: '👴' },
        { id: 'v1_c6_walidah', ar: 'وَالِدَةٌ', en: 'Mother', bn: 'আম্মা / মাতা', romanized: 'wālidatun', emoji: '👵' },
        { id: 'v1_c6_alim', ar: 'عَالِمٌ', en: 'Scholar', bn: 'বিজ্ঞ আলেম', romanized: '‘ālimun', emoji: '👳' },
        { id: 'v1_c6_rasul', ar: 'رَسُولٌ', en: 'Messenger', bn: 'বার্তাবাহক / রাসুল', romanized: 'rasūlun', emoji: '📜' },
      ],
    },
  },

  // 12. Page 38: Active Recall Matching - Family & Marital Terms
  {
    id: 'step-12-pair-relatives',
    type: 'speed_pair',
    pageNumber: 38,
    titleEn: 'Kinship Drill Matching',
    titleAr: 'تَطْبِيقُ عِبَارَاتِ الأُسْرَةِ',
    instructionEn: 'Match each family word with its meaning.',
    instructionBn: 'পারিবারিক শব্দগুলোর অর্থ মিলিয়ে নিন।',
    pairPayload: {
      pairs: [
        { id: 'pr-zawj', ar: 'زَوْجٌ', meaning: 'Husband' },
        { id: 'pr-zawjah', ar: 'زَوْجَةٌ', meaning: 'Wife' },
        { id: 'pr-walid', ar: 'وَالِدٌ', meaning: 'Father' },
        { id: 'pr-walidah', ar: 'وَالِدَةٌ', meaning: 'Mother' },
      ],
    },
  },

  // 13. Page 38: Authentic Reading & Translation Drill 1: The Quran
  {
    id: 'step-13-assembly-kitabullah',
    type: 'sentence_assembly',
    pageNumber: 38,
    titleEn: 'Textbook Translation: The Quran',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: الْقُرْآنُ كِتَابُ اللهِ',
    instructionEn: 'Read the Arabic sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'الْقُرْآنُ كِتَابُ اللهِ',
      promptEn: 'The Quran is the Book of Allah',
      promptBn: 'কুরআন আল্লাহর কিতাব',
      expectedAnswer: ['The', 'Quran', 'is', 'the', 'Book', 'of', 'Allah'],
      chips: ['The', 'Quran', 'is', 'the', 'Book', 'of', 'Allah', 'House', 'prophet'],
      expectedAnswerBn: ['কুরআন', 'হলো', 'আল্লাহর', 'কিতাব'],
      chipsBn: ['কুরআন', 'হলো', 'আল্লাহর', 'কিতাব', 'ঘর', 'নবী'],
      emoji: '📖',
    },
  },

  // 14. Page 38: Authentic Reading & Translation Drill 2: The Kaaba
  {
    id: 'step-14-assembly-baytullah',
    type: 'sentence_assembly',
    pageNumber: 38,
    titleEn: 'Textbook Translation: The Kaaba',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: الكَعْبَةُ بَيْتُ اللهِ',
    instructionEn: 'Read the sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'الْكَعْبَةُ بَيْتُ اللهِ',
      promptEn: 'The Kaaba is the House of Allah',
      promptBn: 'কাবা আল্লাহর ঘর',
      expectedAnswer: ['The', 'Kaaba', 'is', 'the', 'House', 'of', 'Allah'],
      chips: ['The', 'Kaaba', 'is', 'the', 'House', 'of', 'Allah', 'Book', 'mosque'],
      expectedAnswerBn: ['কাবা', 'হলো', 'আল্লাহর', 'ঘর'],
      chipsBn: ['কাবা', 'হলো', 'আল্লাহর', 'ঘর', 'কিতাব', 'মসজিদ'],
      emoji: '🕋',
    },
  },

  // 15. Page 38: Authentic Reading & Translation Drill 3: The Messenger
  {
    id: 'step-15-assembly-rasulullah',
    type: 'sentence_assembly',
    pageNumber: 38,
    titleEn: 'Textbook Translation: The Messenger',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: مُحَمَّدٌ رَسُولُ اللهِ',
    instructionEn: 'Read the sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'مُحَمَّدٌ رَسُولُ اللهِ',
      promptEn: 'Muhammad is the Messenger of Allah',
      promptBn: 'মুহাম্মদ আল্লাহর রাসুল',
      expectedAnswer: ['Muhammad', 'is', 'the', 'Messenger', 'of', 'Allah'],
      chips: ['Muhammad', 'is', 'the', 'Messenger', 'of', 'Allah', 'Book', 'king'],
      expectedAnswerBn: ['মুহাম্মদ', 'হলেন', 'আল্লাহর', 'রাসুল'],
      chipsBn: ['মুহাম্মদ', 'হলেন', 'আল্লাহর', 'রাসুল', 'কিতাব', 'বাদশাহ'],
      emoji: '🕌',
    },
  },

  // 16. Page 38: Dialogic Battery Part 2 - Prophetic Lineage & Relationships
  {
    id: 'step-16-battery-prophetic',
    type: 'alternative_qa',
    pageNumber: 38,
    titleEn: 'Prophetic Lineage Battery',
    titleAr: 'حِوَارُ السِّيرَةِ النَّبَوِيَّةِ الشَّرِيفَةِ (٢)',
    instructionEn: 'Answer the sacred lineage questions accurately using Idafah compounds.',
    instructionBn: 'সম্বন্ধ পদ ব্যবহার করে মহানবীর বংশধারা সম্পর্কিত প্রশ্নগুলোর সঠিক জবাব নির্বাচন করুন।',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c6-5',
          questionAr: 'مَنْ وَالِدُ الرَّسُولِ ؟',
          optionsAr: ['عَبْدُ اللهِ وَالِدُ الرَّسُولِ', 'أَبُو طَالِبٍ وَالِدُ الرَّسُولِ'],
          correctAnswerAr: 'عَبْدُ اللهِ وَالِدُ الرَّسُولِ',
        },
        {
          id: 'qa-c6-6',
          questionAr: 'مَنْ وَالِدَتُهُ ؟',
          optionsAr: ['آمِنَةُ وَالِدَتُهُ', 'خَدِيجَةُ وَالِدَتُهُ'],
          correctAnswerAr: 'آمِنَةُ وَالِدَتُهُ',
        },
        {
          id: 'qa-c6-7',
          questionAr: 'مَنْ زَوْجَةُ الرَّسُولِ ؟',
          optionsAr: ['خَدِيجَةُ زَوْجَةُ الرَّسُولِ', 'فَاطِمَةُ زَوْجَةُ الرَّسُولِ'],
          correctAnswerAr: 'خَدِيجَةُ زَوْجَةُ الرَّسُولِ',
        },
        {
          id: 'qa-c6-8',
          questionAr: 'مَنْ زَوْجُ فَاطِمَةَ ؟',
          optionsAr: ['عَلِيٌّ زَوْجُ فَاطِمَةَ', 'عَبْدُ الْمُطَّلِبِ زَوْجُ فَاطِمَةَ'],
          correctAnswerAr: 'عَلِيٌّ زَوْجُ فَاطِمَةَ',
        },
      ],
    },
  },

  // 17. Page 38: Syntactic Tarkib Dissector: Subject + Idafah Predicate
  {
    id: 'step-17-tarkib-dissector',
    type: 'tarkib_dissector',
    pageNumber: 38,
    titleEn: 'Syntactic Dissector',
    titleAr: 'التَّرْكِيبُ النَّحْوِيُّ',
    instructionEn: 'Dissect the nominal sentence with an Idafah predicate: Subject (Mubtada) followed by Possessed Noun (Mudaf) and Genitive Possessor (Mudaf Ilayh).',
    instructionBn: 'বাক্যের ব্যাকরণগত বিন্যাসটি লক্ষ্য করুন: মুক্তাদা এবং সম্বন্ধযুক্ত খবর (মুদাফ ও মুদাফ ইলাইহি)।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-c6-1',
          sentenceAr: 'مُحَمَّدٌ رَسُولُ اللهِ',
          sentenceTypeAr: 'جُمْلَةٌ اسْمِيَّةٌ (مُبْتَدَأٌ + خَبَرٌ مُضَافٌ)',
          sentenceTypeEn: 'Nominal Sentence (Subject + Idafah Predicate)',
          sentenceTypeBn: 'নামবাচক বাক্য (মুক্তাদা ও সম্বন্ধযুক্ত খবর)',
          slots: [
            {
              roleAr: 'مُبْتَدَأٌ',
              roleEn: 'Subject',
              roleBn: 'মুক্তাদা (উদ্দেশ্য)',
              expectedWordAr: 'مُحَمَّدٌ',
            },
            {
              roleAr: 'خَبَرٌ (مُضَافٌ)',
              roleEn: 'Predicate Mudaf',
              roleBn: 'খবর (মুদাফ)',
              expectedWordAr: 'رَسُولُ',
            },
            {
              roleAr: 'مُضَافٌ إِلَيْهِ',
              roleEn: 'Genitive Possessor (Mudaf Ilayh)',
              roleBn: 'মুদাফ ইলাইহি',
              expectedWordAr: 'اللهِ',
            },
          ],
          availableWordsAr: ['اللهِ', 'رَسُولُ', 'مُحَمَّدٌ'],
        },
      ],
    },
  },

  // 18. Sacred Milestone: Quranic Echo (Surah Al-Fatihah 1:2)
  {
    id: 'step-18-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 38,
    titleEn: 'Quranic Milestone',
    titleAr: 'الأَثَرُ القُرْآنِيُّ',
    instructionEn: 'Listen and observe the authentic Idafah compound in Surah Al-Fatihah.',
    instructionBn: 'সূরা আল-ফাতিহায় ব্যবহৃত বিশুদ্ধ ইযাফাত (সম্বন্ধ পদ) শুনুন ও অনুধাবন করুন।',
    echoPayload: {
      surahNumber: 1,
      ayahNumber: 2,
      surahNameAr: 'الفَاتِحَة',
      surahNameEn: 'Al-Fatihah',
      arabicText: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      translationEn: 'All praise is due to Allah, Lord of the worlds.',
      translationBn: 'সকল প্রশংসা আল্লাহর জন্য, যিনি সকল সৃষ্টির পালনকর্তা।',
      highlightedWords: ['رَبِّ', 'الْعَالَمِينَ'],
      patternNameEn: 'Possessive Genitive Idafah (مُضَافٌ وَمُضَافٌ إِلَيْهِ)',
      patternNameBn: 'সম্বন্ধ পদ ও সম্বন্ধী (মুদাফ ও মুদাফ ইলাইহি)',
      lessonPatternAr: 'كِتَابُ اللهِ / رَسُولُ اللهِ',
      lessonPatternEn: 'Book of Allah / Messenger of Allah',
      lessonPatternBn: 'আল্লাহর কিতাব / আল্লাহর রাসুল',
      quranPatternAr: 'رَبِّ الْعَالَمِينَ',
      quranPatternEn: 'Lord of the worlds',
      quranPatternBn: 'সকল সৃষ্টির পালনকর্তা',
      reflection: "Notice the quintessential Idafah construction in 'رَبِّ الْعَالَمِينَ' (Lord of the worlds), where 'رَبِّ' is the Mudaf (Lord) and 'الْعَالَمِينَ' is the Mudaf Ilayh (the worlds).",
      audioKey: 'quran_001002',
    },
  },
];

export const LESSON_06_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 6,
  titleEn: 'Lesson 6: The Idafah (Genitive Possessive Construction)',
  titleAr: 'الدَّرْسُ السَّادِسُ: الإِضَافَةُ (المُضَافُ وَالمُضَافُ إِلَيْهِ)',
  wordsLearned: [
    'كِتَابُ رَاشِدٍ',
    'كِتَابُ عَائِشَةَ',
    'كِتَابُ الْمُعَلِّمِ',
    'طَرِيقٌ',
    'سُوقٌ',
    'قَرْيَةٌ',
    'مَدِينَةٌ',
    'مَنْظَرٌ',
    'جِدًّا',
    'زَوْجٌ',
    'زَوْجَةٌ',
    'وَالِدٌ',
    'وَالِدَةٌ',
    'عَالِمٌ',
    'رَسُولٌ',
  ],
  steps: LESSON_06_STEPS,
};

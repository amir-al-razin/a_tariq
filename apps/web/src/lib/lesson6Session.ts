// Lesson 6 Interactive Session Data (Directly mapped from Esho Arbi Shikhi Vol 1 Ch 1 Lesson 6, pages 36-38)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_06_STEPS: SessionStep[] = [
  // 1. Page 36: Idafah Equation (قَاعِدَة الإِضَافَة: المُضَاف وَالمُضَاف إِلَيْهِ)
  {
    id: 'step-1-idafah-equation',
    type: 'idafah_equation',
    pageNumber: 36,
    titleEn: 'Idafah Core Rule',
    titleAr: 'قَاعِدَةُ الإِضَافَةِ',
    instructionEn: 'Observe how the possessed noun drops Tanween, and the possessor takes the genitive case',
    instructionBn: 'লক্ষ্য করুন মুদাফ (মালিকানাধীন বস্তু) তানভীন গ্রহণ করে না এবং মুদাফ ইলাইহ মাজরুর হয়।',
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
    instructionEn: 'Match each Arabic Idafah phrase to its meaning',
    instructionBn: 'আরবি সম্বন্ধযুক্ত শব্দগুলোর সাথে অর্থ মিলিয়ে দিন',
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
    instructionEn: 'See how the explicit possessor noun is replaced by an attached pronoun suffix',
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

  // 4. Page 37: Dialogue Q&A - Who are you?
  {
    id: 'step-4-cloze-man-anta',
    type: 'cloze_choice',
    pageNumber: 37,
    titleEn: 'Dialogue Practice: Identity',
    titleAr: 'حِوَارُ التَّعَارُفِ',
    instructionEn: 'Fill in the correct response to complete the dialogue',
    instructionBn: 'সঠিক উত্তরটি নির্বাচন করে সংলাপটি সম্পূর্ণ করুন।',
    clozePayload: {
      questionAr: 'مَنْ أَنْتَ أَيُّهَا الرَّجُلُ ؟',
      questionEn: 'Who are you, O man?',
      questionBn: 'হে লোক, আপনি কে?',
      partialAnswerAr: 'أَنَا ... وَعَمُّ خَالِدٍ',
      correctAnswer: 'أَبُو فَاطِمَةَ',
      options: ['أَبُو فَاطِمَةَ', 'تِلْمِيذٌ', 'فِي الْبَيْتِ'],
      emoji: '👤',
    },
  },

  // 5. Page 37: Dialogue Q&A - Khalid's pen
  {
    id: 'step-5-cloze-qalamu-khalid',
    type: 'cloze_choice',
    pageNumber: 37,
    titleEn: 'Dialogue Practice: Possessive Verification',
    titleAr: 'تَأْكِيدُ المِلْكِيَّةِ',
    instructionEn: 'Confirm ownership using the attached pronoun',
    instructionBn: 'সর্বনাম ব্যবহার করে মালিকানা নিশ্চিত করুন।',
    clozePayload: {
      questionAr: 'هَلْ هَذَا قَلَمُ خَالِدٍ ؟',
      questionEn: "Is this Khalid's pen?",
      questionBn: 'এটি কি খালেদের কলম?',
      partialAnswerAr: 'نَعَمْ ، هَذَا ...',
      correctAnswer: 'قَلَمُهُ',
      options: ['قَلَمُهُ', 'سَاعَتُهُ', 'بَيْتُهُ'],
      emoji: '🖊️',
    },
  },

  // 6. Page 37: Dialogue Q&A - House door
  {
    id: 'step-6-cloze-babu-bayt',
    type: 'cloze_choice',
    pageNumber: 37,
    titleEn: 'Dialogue Practice: State of Door',
    titleAr: 'حَالُ بَابِ البَيْتِ',
    instructionEn: 'Answer whether the door of the house is open or closed',
    instructionBn: 'ঘরের দরজাটি খোলা নাকি বন্ধ তা নির্দেশ করুন।',
    clozePayload: {
      questionAr: 'هَلْ بَابُ الْبَيْتِ مَفْتُوحٌ ؟',
      questionEn: 'Is the house door open?',
      questionBn: 'ঘরের দরজাটি কি খোলা?',
      partialAnswerAr: 'لَا ، بَابُ الْبَيْتِ ...',
      correctAnswer: 'مُغْلَقٌ',
      options: ['مُغْلَقٌ', 'مَفْتُوحٌ', 'جَمِيلٌ'],
      emoji: '🚪',
    },
  },

  // 7. Page 37: Dialogue Q&A - Imam of Mosque
  {
    id: 'step-7-cloze-imamu-masjid',
    type: 'cloze_choice',
    pageNumber: 37,
    titleEn: 'Dialogue Practice: Imam of Mosque',
    titleAr: 'إِمَامُ المَسْجِدِ',
    instructionEn: 'Select the role of the speaker in the mosque',
    instructionBn: 'মসজিদের ইমাম সংক্রান্ত সঠিক উত্তরটি নির্বাচন করুন।',
    clozePayload: {
      questionAr: 'هَلْ أَنْتَ إِمَامُ الْمَسْجِدِ ؟',
      questionEn: 'Are you the mosque imam?',
      questionBn: 'আপনি কি মসজিদের ইমাম?',
      partialAnswerAr: 'نَعَمْ ، أَنَا ...',
      correctAnswer: 'إِمَامُ الْمَسْجِدِ',
      options: ['إِمَامُ الْمَسْجِدِ', 'تَاجِرُ الْمَدِينَةِ', 'فَلَّاحُ الْقَرْيَةِ'],
      emoji: '🕌',
    },
  },

  // 8. Page 37: Vocabulary Priming - Places & Sights
  {
    id: 'step-8-vocab-places',
    type: 'vocab_prime',
    pageNumber: 37,
    titleEn: 'Places & Sights Vocabulary',
    titleAr: 'مُفْرَدَاتُ الأَمَاكِنِ وَالمَنَاظِرِ',
    instructionEn: 'Listen and memorize new words describing places and scenery',
    instructionBn: 'স্থান ও দৃশ্য বর্ণনাকারী নতুন শব্দগুলোর উচ্চারণ শুনুন ও অর্থ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c6_tariq', ar: 'طَرِيقٌ', en: 'Road / path', bn: 'একটি পথ / রাস্তা', romanized: 'ṭarīqun', emoji: '🛣️' },
        { id: 'v1_c6_suq', ar: 'سُوقٌ', en: 'Market', bn: 'একটি বাজার', romanized: 'sūqun', emoji: '🏪' },
        { id: 'v1_c6_qaryah', ar: 'قَرْيَةٌ', en: 'Village', bn: 'একটি গ্রাম', romanized: 'qaryatun', emoji: '🏡' },
        { id: 'v1_c6_madinah', ar: 'مَدِينَةٌ', en: 'City', bn: 'একটি শহর', romanized: 'madīnatun', emoji: '🏙️' },
        { id: 'v1_c6_manzar', ar: 'مَنْظَرٌ', en: 'View / scenery', bn: 'একটি দৃশ্য', romanized: 'manẓarun', emoji: '🌄' },
        { id: 'v1_c6_jiddan', ar: 'جِدًّا', en: 'Very', bn: 'খুব', romanized: 'jiddan', emoji: '✨' },
      ],
    },
  },

  // 9. Page 37: Active Recall Matching - Places & Sights
  {
    id: 'step-9-pair-places',
    type: 'speed_pair',
    pageNumber: 37,
    titleEn: 'Places Recall Drill',
    titleAr: 'مُطَابَقَةُ كَلِمَاتِ الأَمَاكِنِ',
    instructionEn: 'Match each place word with its meaning',
    instructionBn: 'স্থানের শব্দগুলোর সাথে অর্থ মিলিয়ে নিন',
    pairPayload: {
      pairs: [
        { id: 'pp-tariq', ar: 'طَرِيقٌ', meaning: 'Road / path' },
        { id: 'pp-suq', ar: 'سُوقٌ', meaning: 'Market' },
        { id: 'pp-qaryah', ar: 'قَرْيَةٌ', meaning: 'Village' },
        { id: 'pp-madinah', ar: 'مَدِينَةٌ', meaning: 'City' },
      ],
    },
  },

  // 10. Page 37: Sentence Assembly - Village Scenery
  {
    id: 'step-10-assembly-manzar',
    type: 'sentence_assembly',
    pageNumber: 37,
    titleEn: 'Sentence Building: Village Scenery',
    titleAr: 'تَرْكِيبُ: مَنْظَرُ القَرْيَةِ',
    instructionEn: 'Arrange the word chips to say: "The village view is very beautiful"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "গ্রামের দৃশ্যটি খুব সুন্দর"',
    assemblyPayload: {
      promptEn: 'The village view is very beautiful',
      promptBn: 'গ্রামের দৃশ্যটি খুব সুন্দর',
      expectedAnswer: ['مَنْظَرُ', 'الْقَرْيَةِ', 'جَمِيلٌ', 'جِدًّا'],
      chips: ['مَنْظَرُ', 'الْقَرْيَةِ', 'جَمِيلٌ', 'جِدًّا', 'سُوقُ', 'كَبِيرٌ'],
      emoji: '🌄',
    },
  },

  // 11. Page 38: Sentence Assembly - Contrast of Roads
  {
    id: 'step-11-assembly-roads',
    type: 'sentence_assembly',
    pageNumber: 38,
    titleEn: 'Sentence Building: Wide and Narrow Roads',
    titleAr: 'تَرْكِيبُ: هَذَا الطَّرِيقُ وَاسِعٌ',
    instructionEn: 'Assemble: "This road is wide and that road is narrow"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "এই রাস্তাটি প্রশস্ত এবং ওই রাস্তাটি সংকীর্ণ"',
    assemblyPayload: {
      promptEn: 'This road is wide and that road is narrow',
      promptBn: 'এই রাস্তাটি প্রশস্ত এবং ওই রাস্তাটি সংকীর্ণ',
      expectedAnswer: ['هَذَا', 'الطَّرِيقُ', 'وَاسِعٌ', 'وَذَلِكَ', 'الطَّرِيقُ', 'ضَيِّقٌ'],
      chips: ['هَذَا', 'الطَّرِيقُ', 'وَاسِعٌ', 'وَذَلِكَ', 'الطَّرِيقُ', 'ضَيِّقٌ', 'قَدِيمٌ', 'جَمِيلٌ'],
      emoji: '🛣️',
    },
  },

  // 12. Page 38: Vocabulary Priming - Family & Relations
  {
    id: 'step-12-vocab-relatives',
    type: 'vocab_prime',
    pageNumber: 38,
    titleEn: 'Family & Marriage Vocabulary',
    titleAr: 'مُفْرَدَاتُ الأُسْرَةِ وَالزَّوَاجِ',
    instructionEn: 'Learn essential words for parents and marital relations',
    instructionBn: 'পিতা-মাতা ও দাম্পত্য সম্পর্কিত শব্দগুলোর অর্থ ও উচ্চারণ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c6_zawj', ar: 'زَوْجٌ', en: 'Husband', bn: 'স্বামী', romanized: 'zawjun', emoji: '👨' },
        { id: 'v1_c6_zawjah', ar: 'زَوْجَةٌ', en: 'Wife', bn: 'স্ত্রী', romanized: 'zawjatun', emoji: '👩' },
        { id: 'v1_c6_walid', ar: 'وَالِدٌ', en: 'Father', bn: 'আব্বা / পিতা', romanized: 'wālidun', emoji: '👴' },
        { id: 'v1_c6_walidah', ar: 'وَالِدَةٌ', en: 'Mother', bn: 'আম্মা / মাতা', romanized: 'wālidatun', emoji: '👵' },
      ],
    },
  },

  // 13. Page 38: Sentence Assembly - Book of Allah
  {
    id: 'step-13-assembly-kitabullah',
    type: 'sentence_assembly',
    pageNumber: 38,
    titleEn: 'Islamic Reading: The Quran',
    titleAr: 'تَرْكِيبُ: الْقُرْآنُ كِتَابُ اللهِ',
    instructionEn: 'Assemble: "The Quran is the Book of Allah"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "কুরআন আল্লাহর কিতাব"',
    assemblyPayload: {
      promptEn: 'The Quran is the Book of Allah',
      promptBn: 'কুরআন আল্লাহর কিতাব',
      expectedAnswer: ['الْقُرْآنُ', 'كِتَابُ', 'اللهِ'],
      chips: ['الْقُرْآنُ', 'كِتَابُ', 'اللهِ', 'بَيْتُ', 'رَسُولُ'],
      emoji: '📖',
    },
  },

  // 14. Page 38: Sentence Assembly - Messenger of Allah
  {
    id: 'step-14-assembly-rasulullah',
    type: 'sentence_assembly',
    pageNumber: 38,
    titleEn: 'Islamic Reading: The Messenger',
    titleAr: 'تَرْكِيبُ: مُحَمَّدٌ رَسُولُ اللهِ',
    instructionEn: 'Assemble: "Muhammad is the Messenger of Allah"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "মুহাম্মদ আল্লাহর রাসুল"',
    assemblyPayload: {
      promptEn: 'Muhammad is the Messenger of Allah',
      promptBn: 'মুহাম্মদ আল্লাহর রাসুল',
      expectedAnswer: ['مُحَمَّدٌ', 'رَسُولُ', 'اللهِ'],
      chips: ['مُحَمَّدٌ', 'رَسُولُ', 'اللهِ', 'كِتَابُ', 'عَبْدُ'],
      emoji: '🕌',
    },
  },

  // 15. Sacred Milestone: Quranic Echo (Surah Al-Fatihah 1:2)
  {
    id: 'step-15-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 38,
    titleEn: 'Quranic Milestone',
    titleAr: 'الأَثَرُ القُرْآنِيُّ',
    instructionEn: 'Listen and observe the authentic Idafah compound in Surah Al-Fatihah',
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
      reflection: "Notice the quintessential Idafah construction in 'رَبِّ الْعَالَمِينَ' (Lord of the worlds), where 'رَبِّ' is the Mudaf (Lord) and 'الْعَالَمِينَ' is the Mudaf Ilayh (the worlds).",
      audioKey: 'quran_001002',
    },
  },
];

export const LESSON_06_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 6,
  titleEn: 'Idafah (Possessive Construction)',
  titleAr: 'الإِضَافَةُ (المُضَافُ وَالمُضَافُ إِلَيْهِ)',
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
  ],
  steps: LESSON_06_STEPS,
};

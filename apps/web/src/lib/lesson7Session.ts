// Lesson 7 Interactive Session Data (Directly mapped from Esho Arbi Shikhi Vol 1 Ch 1 Lesson 7, pages 39-42)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_07_STEPS: SessionStep[] = [
  // 1. Page 39: Prepositions of Place Vocabulary Priming (حُرُوفُ وَظُرُوفُ المَكَانِ)
  {
    id: 'step-1-vocab-spatial',
    type: 'vocab_prime',
    pageNumber: 39,
    titleEn: 'Prepositions of Place',
    titleAr: 'ظُرُوفُ المَكَانِ',
    instructionEn: 'Listen and memorize the spatial prepositions indicating locations and relations',
    instructionBn: 'স্থান ও অবস্থান নির্দেশকারী অব্যয়গুলোর উচ্চারণ শুনুন ও অর্থ মুখস্থ করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c7_inda', ar: 'عِنْدَ', en: 'Near / with / at', bn: 'কাছে / নিকট', romanized: 'ʿinda', emoji: '📍' },
        { id: 'v1_c7_amama', ar: 'أَمَامَ', en: 'In front of', bn: 'সামনে', romanized: 'amāma', emoji: '↗️' },
        { id: 'v1_c7_waraa', ar: 'وَرَاءَ', en: 'Behind', bn: 'পিছনে', romanized: 'warāʾa', emoji: '↩️' },
        { id: 'v1_c7_khalfa', ar: 'خَلْفَ', en: 'Behind', bn: 'পিছনে', romanized: 'khalfa', emoji: '↩️' },
        { id: 'v1_c7_tahta', ar: 'تَحْتَ', en: 'Under / below', bn: 'নিচে', romanized: 'taḥta', emoji: '⬇️' },
        { id: 'v1_c7_fawqa', ar: 'فَوْقَ', en: 'Above / over', bn: 'উপরে', romanized: 'fawqa', emoji: '⬆️' },
        { id: 'v1_c7_bijanibi', ar: 'بِجَانِبِ', en: 'Beside / next to', bn: 'পাশে', romanized: 'bijānibi', emoji: '↔️' },
        { id: 'v1_c7_ayna', ar: 'أَيْنَ ؟', en: 'Where?', bn: 'কোথায়?', romanized: 'ayna?', emoji: '❓' },
      ],
    },
  },

  // 2. Page 39: Active Recall Matching - Spatial Prepositions
  {
    id: 'step-2-pair-spatial',
    type: 'speed_pair',
    pageNumber: 39,
    titleEn: 'Prepositions Recall Drill',
    titleAr: 'تَطْبِيقُ ظُرُوفِ المَكَانِ',
    instructionEn: 'Match each spatial preposition to its English meaning',
    instructionBn: 'স্থানবাচক শব্দার্থগুলো মিলিয়ে দিন',
    pairPayload: {
      pairs: [
        { id: 'ps-inda', ar: 'عِنْدَ', meaning: 'Near / with / at' },
        { id: 'ps-amama', ar: 'أَمَامَ', meaning: 'In front of' },
        { id: 'ps-tahta', ar: 'تَحْتَ', meaning: 'Under / below' },
        { id: 'ps-fawqa', ar: 'فَوْقَ', meaning: 'Above / over' },
        { id: 'ps-bijanibi', ar: 'بِجَانِبِ', meaning: 'Beside / next to' },
      ],
    },
  },

  // 3. Pages 39-40: Syntax Fronting & Spatial Word Order Contrast
  {
    id: 'step-3-syntax-fronting',
    type: 'syntax_fronting',
    pageNumber: 39,
    titleEn: 'Sentence Order: Indefinite vs Definite',
    titleAr: 'تَرْتِيبُ الجُمْلَةِ',
    instructionEn: 'Notice how an indefinite item puts the preposition first, while a definite item starts with the noun',
    instructionBn: 'লক্ষ্য করুন: অনির্দিষ্ট বস্তু থাকলে অব্যয় আগে বসে, আর নির্দিষ্ট বস্তু থাকলে বিশেষ্য দিয়ে বাক্য শুরু হয়।',
    syntaxFrontingPayload: {
      ruleSummaryEn: 'Indefinite item ➔ Preposition first | Definite item ➔ Noun first',
      ruleSummaryBn: 'অনির্দিষ্ট বস্তু ➔ কাছে আগে | নির্দিষ্ট বস্তু ➔ বইটি আগে',
      sentences: [
        {
          id: 'sf-1',
          arabic: 'عِنْدِي كِتَابٌ',
          meaningEn: 'I have a book',
          meaningBn: 'আমার কাছে একটি বই আছে',
          labelEn: 'Indefinite item',
          labelBn: 'অনির্দিষ্ট বস্তু',
          audioKey: 'indi_kitab',
        },
        {
          id: 'sf-2',
          arabic: 'الْكِتَابُ عِنْدِي',
          meaningEn: 'The book is with me',
          meaningBn: 'বইটি আমার কাছে',
          labelEn: 'Definite item',
          labelBn: 'নির্দিষ্ট বস্তু',
          audioKey: 'al_kitabu_indi',
        },
      ],
    },
  },

  // 4. Page 39: Dialogue Practice - Where is the watch?
  {
    id: 'step-4-cloze-ayna-saah',
    type: 'cloze_choice',
    pageNumber: 39,
    titleEn: 'Dialogue Practice: Location of the Watch',
    titleAr: 'أَيْنَ السَّاعَةُ ؟',
    instructionEn: 'Complete the response: "The watch is with you"',
    instructionBn: 'সঠিক শব্দটি নির্বাচন করে উত্তর দিন: "ঘড়িটি তোমার কাছে"',
    clozePayload: {
      questionAr: 'أَيْنَ السَّاعَةُ ؟',
      questionEn: 'Where is the watch?',
      questionBn: 'ঘড়িটি কোথায়?',
      partialAnswerAr: '... عِنْدَكَ',
      correctAnswer: 'السَّاعَةُ',
      options: ['السَّاعَةُ', 'الْقَلَمُ', 'الْكِتَابُ'],
      emoji: '⌚',
    },
  },

  // 5. Page 40: Classroom & Nature Objects Vocabulary Priming
  {
    id: 'step-5-vocab-classroom-nature',
    type: 'vocab_prime',
    pageNumber: 40,
    titleEn: 'Classroom, Nature & Abstract Nouns',
    titleAr: 'مُفْرَدَاتُ الفَصْلِ وَالطَّبِيعَةِ',
    instructionEn: 'Enrich your vocabulary with classroom objects, nature, and moral attributes',
    instructionBn: 'শ্রেণিকক্ষ, প্রকৃতি ও আধ্যাত্মিক বিষয়ক শব্দগুলোর অর্থ ও উচ্চারণ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c7_massahah', ar: 'مَسَّاحَةٌ', en: 'Duster / eraser', bn: 'একটি ডাস্টার', romanized: 'massāḥatun', emoji: '🧽' },
        { id: 'v1_c7_kharitah', ar: 'خَارِطَةٌ', en: 'Map', bn: 'একটি মানচিত্র / ম্যাপ', romanized: 'khāriṭatun', emoji: '🗺️' },
        { id: 'v1_c7_mihrath', ar: 'مِحْرَاثٌ', en: 'Plough', bn: 'একটি লাঙ্গল', romanized: 'miḥrāthun', emoji: '🧑‍🌾' },
        { id: 'v1_c7_maksur', ar: 'مَكْسُورٌ', en: 'Broken', bn: 'ভাঙা', romanized: 'maksūrun', emoji: '🪓' },
        { id: 'v1_c7_sama', ar: 'السَّمَاءُ', en: 'The sky', bn: 'আসমান / আকাশ', romanized: 'as-samāʾu', emoji: '☁️' },
        { id: 'v1_c7_ard', ar: 'الأَرْضُ', en: 'The earth', bn: 'যমীন / পৃথিবী', romanized: 'al-arḍu', emoji: '🌍' },
        { id: 'v1_c7_qalb', ar: 'قَلْبٌ', en: 'Heart', bn: 'একটি হৃদয় / অন্তর', romanized: 'qalbun', emoji: '❤️' },
        { id: 'v1_c7_nur', ar: 'نُورٌ', en: 'Light', bn: 'আলো / নূর', romanized: 'nūrun', emoji: '💫' },
        { id: 'v1_c7_zulmah', ar: 'ظُلْمَةٌ', en: 'Darkness', bn: 'অন্ধকার', romanized: 'ẓulmatun', emoji: '🌑' },
      ],
    },
  },

  // 6. Page 40: Active Recall Matching - Objects & Nature
  {
    id: 'step-6-pair-objects',
    type: 'speed_pair',
    pageNumber: 40,
    titleEn: 'Vocabulary Recall Drill',
    titleAr: 'تَطْبِيقُ كَلِمَاتِ الفَصْلِ',
    instructionEn: 'Match each Arabic noun to its correct meaning',
    instructionBn: 'শব্দগুলোর সাথে সঠিক অর্থ মিলিয়ে দিন',
    pairPayload: {
      pairs: [
        { id: 'po-massahah', ar: 'مَسَّاحَةٌ', meaning: 'Duster / eraser' },
        { id: 'po-kharitah', ar: 'خَارِطَةٌ', meaning: 'Map' },
        { id: 'po-sama', ar: 'السَّمَاءُ', meaning: 'The sky' },
        { id: 'po-ard', ar: 'الأَرْضُ', meaning: 'The earth' },
      ],
    },
  },

  // 7. Page 40: Dialogue Q&A - What do you have, O Majid?
  {
    id: 'step-7-cloze-maza-indaka',
    type: 'cloze_choice',
    pageNumber: 40,
    titleEn: 'Dialogue Practice: In Possession',
    titleAr: 'حِوَارُ المِلْكِيَّةِ',
    instructionEn: 'Complete the response to "What do you have, O Majid?"',
    instructionBn: '"তোমার কাছে কী আছে, হে মাজেদ?" এর সঠিক উত্তর নির্বাচন করুন।',
    clozePayload: {
      questionAr: 'مَاذَا عِنْدَكَ يَا مَاجِدُ ؟',
      questionEn: 'What do you have, O Majid?',
      questionBn: 'তোমার কাছে কী আছে, হে মাজেদ?',
      partialAnswerAr: '... سَاعَةٌ',
      correctAnswer: 'عِنْدِي',
      options: ['عِنْدِي', 'عِنْدَكَ', 'عِنْدَهُ'],
      emoji: '⌚',
    },
  },

  // 8. Page 40: Dialogue Q&A - What does Aisha have?
  {
    id: 'step-8-cloze-maza-inda-aisha',
    type: 'cloze_choice',
    pageNumber: 40,
    titleEn: 'Dialogue Practice: Feminine Third-Person',
    titleAr: 'حِوَارُ الغَائِبِ المُؤَنَّثِ',
    instructionEn: 'Complete the response for Aisha: "She has a pen"',
    instructionBn: 'আয়েশার ক্ষেত্রে সঠিক সর্বনাম নির্বাচন করুন: "তার কাছে একটি কলম আছে"',
    clozePayload: {
      questionAr: 'مَاذَا عِنْدَ عَائِشَةَ ؟',
      questionEn: 'What does Aisha have?',
      questionBn: 'আয়েশার কাছে কী আছে?',
      partialAnswerAr: '... قَلَمٌ',
      correctAnswer: 'عِنْدَهَا',
      options: ['عِنْدَهَا', 'عِنْدَهُ', 'عِنْدِي'],
      emoji: '🖊️',
    },
  },

  // 9. Page 41: Dialogue Q&A - Who has the pen?
  {
    id: 'step-9-cloze-inda-mani-qalam',
    type: 'cloze_choice',
    pageNumber: 41,
    titleEn: 'Dialogue Practice: With Whom is the Pen?',
    titleAr: 'حِوَارُ مَوْقِعِ القَلَمِ',
    instructionEn: 'Answer who is holding the pen',
    instructionBn: 'কলমটি কার কাছে রয়েছে তা উল্লেখ করে উত্তর পূর্ণ করুন।',
    clozePayload: {
      questionAr: 'عِنْدَ مَنِ الْقَلَمُ ؟',
      questionEn: 'With whom is the pen?',
      questionBn: 'কলমটি কার কাছে?',
      partialAnswerAr: 'الْقَلَمُ ...',
      correctAnswer: 'عِنْدَ عَائِشَةَ',
      options: ['عِنْدَ عَائِشَةَ', 'فَوْقَ الْمَائِدَةِ', 'تَحْتَ الْكُرْسِيِّ'],
      emoji: '🖊️',
    },
  },

  // 10. Page 41: Dialogue Q&A - Where is the Map?
  {
    id: 'step-10-cloze-ayna-kharitah',
    type: 'cloze_choice',
    pageNumber: 41,
    titleEn: 'Dialogue Practice: Location of Map',
    titleAr: 'مَوْقِعُ الخَارِطَةِ',
    instructionEn: 'State the location of the map with the female teacher',
    instructionBn: 'শিক্ষিকার কাছে মানচিত্রটি রয়েছে তা উল্লেখ করে উত্তর দিন।',
    clozePayload: {
      questionAr: 'أَيْنَ الْخَارِطَةُ ؟',
      questionEn: 'Where is the map?',
      questionBn: 'মানচিত্রটি কোথায়?',
      partialAnswerAr: 'الْخَارِطَةُ ...',
      correctAnswer: 'عِنْدَ الْمُعَلِّمَةِ',
      options: ['عِنْدَ الْمُعَلِّمَةِ', 'تَحْتَ السَّيَّارَةِ', 'خَلْفَ الْبَابِ'],
      emoji: '🗺️',
    },
  },

  // 11. Page 41: Sentence Assembly - Sky & Earth
  {
    id: 'step-11-assembly-sky-earth',
    type: 'sentence_assembly',
    pageNumber: 41,
    titleEn: 'Sentence Building: Sky & Earth',
    titleAr: 'تَرْكِيبُ: السَّمَاءُ فَوْقَنَا',
    instructionEn: 'Assemble: "The sky is above us and the earth is below us"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "আকাশ আমাদের উপরে এবং পৃথিবী আমাদের নিচে"',
    assemblyPayload: {
      promptEn: 'The sky is above us and the earth is below us',
      promptBn: 'আকাশ আমাদের উপরে এবং পৃথিবী আমাদের নিচে',
      expectedAnswer: ['السَّمَاءُ', 'فَوْقَنَا', 'وَالأَرْضُ', 'تَحْتَنَا'],
      chips: ['السَّمَاءُ', 'فَوْقَنَا', 'وَالأَرْضُ', 'تَحْتَنَا', 'فَوْقَكُمْ', 'عِنْدَنَا'],
      emoji: '🌌',
    },
  },

  // 12. Page 41: Sentence Assembly - Classroom Objects
  {
    id: 'step-12-assembly-teacher-desk',
    type: 'sentence_assembly',
    pageNumber: 41,
    titleEn: 'Sentence Building: In Front of the Teacher',
    titleAr: 'تَرْكِيبُ: أَمَامَ المُعَلِّمِ',
    instructionEn: 'Assemble: "In front of the teacher are a board and a duster"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "শিক্ষকের সামনে একটি ব্ল্যাকবোর্ড ও একটি ডাস্টার আছে"',
    assemblyPayload: {
      promptEn: 'In front of the teacher are a board and a duster',
      promptBn: 'শিক্ষকের সামনে একটি ব্ল্যাকবোর্ড ও একটি ডাস্টার আছে',
      expectedAnswer: ['أَمَامَ', 'الْمُعَلِّمِ', 'سَبُّورَةٌ', 'وَمَسَّاحَةٌ'],
      chips: ['أَمَامَ', 'الْمُعَلِّمِ', 'سَبُّورَةٌ', 'وَمَسَّاحَةٌ', 'خَلْفَ', 'مِرْوَحَةٌ'],
      emoji: '🖤',
    },
  },

  // 13. Page 42: Sentence Assembly - In Front of Mosque
  {
    id: 'step-13-assembly-friend-mosque',
    type: 'sentence_assembly',
    pageNumber: 42,
    titleEn: 'Sentence Building: In Front of Mosque',
    titleAr: 'تَرْكِيبُ: صَدِيقُ بَشِيرٍ أَمَامَ المَسْجِدِ',
    instructionEn: 'Assemble: "Bashir\'s friend is in front of the mosque"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "বশীরের বন্ধু মসজিদের সামনে"',
    assemblyPayload: {
      promptEn: "Bashir's friend is in front of the mosque",
      promptBn: 'বশীরের বন্ধু মসজিদের সামনে',
      expectedAnswer: ['صَدِيقُ', 'بَشِيرٍ', 'أَمَامَ', 'الْمَسْجِدِ'],
      chips: ['صَدِيقُ', 'بَشِيرٍ', 'أَمَامَ', 'الْمَسْجِدِ', 'وَرَاءَ', 'بَيْتِ'],
      emoji: '🕌',
    },
  },

  // 14. Sacred Milestone: Quranic Echo (Surah Al-Baqarah 2:255)
  {
    id: 'step-14-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 42,
    titleEn: 'Quranic Milestone',
    titleAr: 'الأَثَرُ القُرْآنِيُّ',
    instructionEn: 'Listen and observe the spatial preposition in Ayat al-Kursi (2:255)',
    instructionBn: 'আয়াতুল কুরসীতে ব্যবহৃত স্থানবাচক অব্যয়টি লক্ষ্য করুন ও শুদ্ধভাবে শুনুন।',
    echoPayload: {
      surahNumber: 2,
      ayahNumber: 255,
      surahNameAr: 'البَقَرَة',
      surahNameEn: 'Al-Baqarah',
      arabicText: 'يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ',
      translationEn: 'He knows what is before them and what is behind them.',
      translationBn: 'তাদের সামনে ও তাদের পেছনে যা আছে তা তিনি জানেন।',
      highlightedWords: ['وَمَا', 'خَلْفَهُمْ'],
      reflection: "Notice the spatial preposition 'خَلْفَ' (behind) attached to the pronoun 'ـهُمْ' in 'خَلْفَهُمْ' (behind them) - demonstrating how spatial prepositions govern divine descriptions.",
      audioKey: 'quran_002255',
    },
  },
];

export const LESSON_07_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 7,
  titleEn: 'Prepositions of Place & Spatial Syntax',
  titleAr: 'حُرُوفُ وَظُرُوفُ المَكَانِ',
  wordsLearned: [
    'عِنْدَ',
    'أَمَامَ',
    'وَرَاءَ',
    'خَلْفَ',
    'تَحْتَ',
    'فَوْقَ',
    'بِجَانِبِ',
    'أَيْنَ',
    'مَسَّاحَةٌ',
    'خَارِطَةٌ',
    'مِحْرَاثٌ',
    'مَكْسُورٌ',
    'السَّمَاءُ',
    'الأَرْضُ',
    'قَلْبٌ',
    'نُورٌ',
    'ظُلْمَةٌ',
    'قِصَّةٌ',
  ],
  steps: LESSON_07_STEPS,
};

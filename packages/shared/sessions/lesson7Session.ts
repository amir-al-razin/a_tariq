// Lesson 7 Interactive Session Data (Directly mapped from textbook Volume 1 Chapter 1 Lesson 7, pages 39-42)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_07_STEPS: SessionStep[] = [
  // 1. Page 39: Prepositions of Place Vocabulary Priming (حُرُوفُ وَظُرُوفُ المَكَانِ)
  {
    id: 'step-1-vocab-spatial',
    type: 'vocab_prime',
    pageNumber: 39,
    titleEn: 'Prepositions of Place',
    titleAr: 'ظُرُوفُ المَكَانِ',
    instructionEn: 'Listen and memorize the spatial prepositions indicating locations and relations.',
    instructionBn: 'স্থান ও অবস্থান নির্দেশকারী অব্যয়গুলোর উচ্চারণ শুনুন ও অর্থ মুখস্থ করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c7_inda', ar: 'عِنْدَ', en: 'Near / with / in possession of', bn: 'কাছে / নিকট', romanized: 'ʿinda', emoji: '📍' },
        { id: 'v1_c7_amama', ar: 'أَمَامَ', en: 'In front of / ahead of', bn: 'সামনে', romanized: 'amāma', emoji: '↗️' },
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
    instructionEn: 'Match each spatial preposition to its correct English meaning.',
    instructionBn: 'স্থানবাচক শব্দার্থগুলো সঠিকভাবে মিলিয়ে দিন।',
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
    instructionEn: 'Notice how an indefinite item puts the preposition first, while a definite item starts with the noun.',
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

  // 4. Page 39: Sentence Assembly - 2nd Person Spatial Sentence
  {
    id: 'step-4-assembly-amama',
    type: 'sentence_assembly',
    pageNumber: 39,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "In front of you is a book"',
    instructionBn: 'বাক্যটি সাজান: "তোমার সামনে একটি বই আছে"',
    assemblyPayload: {
      promptEn: 'In front of you is a book',
      promptBn: 'তোমার সামনে একটি বই আছে',
      expectedAnswer: ['أَمَامَكَ', 'كِتَابٌ'],
      chips: ['أَمَامَكَ', 'كِتَابٌ', 'خَلْفَكَ', 'سَاعَةٌ'],
      emoji: '📖',
    },
  },

  // 5. Page 39: Sentence Assembly - 2nd Person Feminine Spatial Sentence
  {
    id: 'step-5-assembly-khalfa',
    type: 'sentence_assembly',
    pageNumber: 39,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "Behind you is a table"',
    instructionBn: 'বাক্যটি সাজান: "তোমার পিছনে একটি টেবিল আছে"',
    assemblyPayload: {
      promptEn: 'Behind you is a table',
      promptBn: 'তোমার পিছনে একটি টেবিল আছে',
      expectedAnswer: ['خَلْفَكِ', 'طَاوِلَةٌ'],
      chips: ['خَلْفَكِ', 'طَاوِلَةٌ', 'أَمَامَكِ', 'كُرْسِيٌّ'],
      emoji: '🪑',
    },
  },

  // 6. Page 40: Classroom & Agriculture Vocabulary Priming
  {
    id: 'step-6-vocab-classroom',
    type: 'vocab_prime',
    pageNumber: 40,
    titleEn: 'Classroom & Tools Vocabulary',
    titleAr: 'مُفْرَدَاتُ الفَصْلِ وَالأَدَوَاتِ',
    instructionEn: 'Enrich your vocabulary with classroom objects, tools, and descriptive conditions.',
    instructionBn: 'শ্রেণিকক্ষ ও দৈনন্দিন উপকরণের শব্দগুলোর অর্থ ও উচ্চারণ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c7_massahah', ar: 'مَسَّاحَةٌ', en: 'Duster / eraser', bn: 'একটি ডাস্টার', romanized: 'massāḥatun', emoji: '🧽' },
        { id: 'v1_c7_kharitah', ar: 'خَارِطَةٌ', en: 'Map', bn: 'একটি মানচিত্র / ম্যাপ', romanized: 'khāriṭatun', emoji: '🗺️' },
        { id: 'v1_c7_mihrath', ar: 'مِحْرَاثٌ', en: 'Plow', bn: 'একটি লাঙ্গল', romanized: 'miḥrāthun', emoji: '🧑‍🌾' },
        { id: 'v1_c7_maksur', ar: 'مَكْسُورٌ', en: 'Broken', bn: 'ভাঙা', romanized: 'maksūrun', emoji: '🪓' },
        { id: 'v1_c7_hawd', ar: 'حَوْضٌ', en: 'Basin / reservoir', bn: 'একটি হাউজ / জলাধার', romanized: 'ḥawḍun', emoji: '🌊' },
        { id: 'v1_c7_sabburah', ar: 'سَبُّورَةٌ', en: 'Blackboard', bn: 'একটি ব্ল্যাকবোর্ড', romanized: 'sabbūratun', emoji: '🖤' },
      ],
    },
  },

  // 7. Page 40: Active Recall Matching - Classroom & Tools
  {
    id: 'step-7-pair-tools',
    type: 'speed_pair',
    pageNumber: 40,
    titleEn: 'Tools Recall Drill',
    titleAr: 'تَطْبِيقُ كَلِمَاتِ الأَدَوَاتِ',
    instructionEn: 'Match each tool to its correct meaning.',
    instructionBn: 'উপকরণের শব্দগুলোর সঠিক অর্থ মিলিয়ে নিন।',
    pairPayload: {
      pairs: [
        { id: 'pt-massahah', ar: 'مَسَّاحَةٌ', meaning: 'Duster / eraser' },
        { id: 'pt-kharitah', ar: 'خَارِطَةٌ', meaning: 'Map' },
        { id: 'pt-mihrath', ar: 'مِحْرَاثٌ', meaning: 'Plow' },
        { id: 'pt-maksur', ar: 'مَكْسُورٌ', meaning: 'Broken' },
      ],
    },
  },

  // 8. Pages 40-41: Dialogic Battery Part 1 - Location & Pronoun Harmony
  {
    id: 'step-8-battery-spatial1',
    type: 'alternative_qa',
    pageNumber: 41,
    titleEn: 'Spatial Location Battery 1',
    titleAr: 'حِوَارُ المَوَاقِعِ وَالأَمَاكِنِ (١)',
    instructionEn: 'Select the grammatically accurate response for each location query.',
    instructionBn: 'স্থান ও সর্বনামের সঠিক ব্যবহার অনুযায়ী প্রতিটি প্রশ্নের নির্ভুল উত্তর নির্বাচন করুন।',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c7-1',
          questionAr: 'أَيْنَ الْخَارِطَةُ ؟',
          optionsAr: ['هِيَ عِنْدَ الْمُعَلِّمَةِ', 'هُوَ عِنْدَ الْمُعَلِّمَةِ'],
          correctAnswerAr: 'هِيَ عِنْدَ الْمُعَلِّمَةِ',
        },
        {
          id: 'qa-c7-2',
          questionAr: 'مَاذَا أَمَامَ الْمُعَلِّمِ ؟',
          optionsAr: ['أَمَامَهُ سَبُّورَةٌ وَمَسَّاحَةٌ', 'أَمَامَهَا سَبُّورَةٌ وَمَسَّاحَةٌ'],
          correctAnswerAr: 'أَمَامَهُ سَبُّورَةٌ وَمَسَّاحَةٌ',
        },
        {
          id: 'qa-c7-3',
          questionAr: 'أَيْنَ صَدِيقُ بَشِيرٍ ؟',
          optionsAr: ['هُوَ أَمَامَ الْمَسْجِدِ', 'هِيَ أَمَامَ الْمَسْجِدِ'],
          correctAnswerAr: 'هُوَ أَمَامَ الْمَسْجِدِ',
        },
        {
          id: 'qa-c7-4',
          questionAr: 'يَا مَاجِدُ ! مَاذَا فَوْقَكَ ؟',
          optionsAr: ['فَوْقِي مِصْبَاحٌ', 'فَوْقَكَ مِصْبَاحٌ'],
          correctAnswerAr: 'فَوْقِي مِصْبَاحٌ',
        },
      ],
    },
  },

  // 9. Page 41: Sentence Assembly - Classroom Fronting
  {
    id: 'step-9-assembly-teacher-desk',
    type: 'sentence_assembly',
    pageNumber: 41,
    titleEn: 'Sentence Building: Teacher Classroom',
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

  // 10. Page 40: Sentence Assembly - Agriculture Spatial
  {
    id: 'step-10-assembly-plow',
    type: 'sentence_assembly',
    pageNumber: 40,
    titleEn: 'Sentence Building: Agriculture Tool',
    titleAr: 'تَرْكِيبُ: أَمَامَ الفَلَّاحِ',
    instructionEn: 'Assemble: "In front of the farmer is an old plow"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "কৃষকের সামনে একটি পুরাতন লাঙ্গল আছে"',
    assemblyPayload: {
      promptEn: 'In front of the farmer is an old plow',
      promptBn: 'কৃষকের সামনে একটি পুরাতন লাঙ্গল আছে',
      expectedAnswer: ['أَمَامَ', 'الْفَلَّاحِ', 'مِحْرَاثٌ', 'قَدِيمٌ'],
      chips: ['أَمَامَ', 'الْفَلَّاحِ', 'مِحْرَاثٌ', 'قَدِيمٌ', 'جَدِيدٌ', 'مَكْسُورٌ'],
      emoji: '🧑‍🌾',
    },
  },

  // 11. Page 42: Cosmic & Spiritual Vocabulary Priming
  {
    id: 'step-11-vocab-cosmic',
    type: 'vocab_prime',
    pageNumber: 42,
    titleEn: 'Cosmic & Spiritual Vocabulary',
    titleAr: 'مُفْرَدَاتُ الكَوْنِ وَالرُّوحِ',
    instructionEn: 'Listen and memorize profound vocabulary for creation and the human soul.',
    instructionBn: 'সৃষ্টিজগত ও আত্মিক ভাব প্রকাশক শব্দগুলোর অর্থ ও উচ্চারণ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c7_sama', ar: 'السَّمَاءُ', en: 'The sky / heaven', bn: 'আসমান / আকাশ', romanized: 'as-samāʾu', emoji: '☁️' },
        { id: 'v1_c7_ard', ar: 'الأَرْضُ', en: 'The earth / ground', bn: 'যমীন / পৃথিবী', romanized: 'al-arḍu', emoji: '🌍' },
        { id: 'v1_c7_nur', ar: 'نُورٌ', en: 'Light', bn: 'আলো / নূর', romanized: 'nūrun', emoji: '💫' },
        { id: 'v1_c7_zulmah', ar: 'ظُلْمَةٌ', en: 'Darkness', bn: 'অন্ধকার', romanized: 'ẓulmatun', emoji: '🌑' },
        { id: 'v1_c7_qalb', ar: 'قَلْبٌ', en: 'Heart', bn: 'একটি হৃদয় / অন্তর', romanized: 'qalbun', emoji: '❤️' },
        { id: 'v1_c7_qissah', ar: 'قِصَّةٌ', en: 'Story / narrative', bn: 'একটি গল্প / কাহিনী', romanized: 'qiṣṣatun', emoji: '📜' },
      ],
    },
  },

  // 12. Page 42: Active Recall Matching - Cosmic & Moral Words
  {
    id: 'step-12-pair-cosmic',
    type: 'speed_pair',
    pageNumber: 42,
    titleEn: 'Cosmic Pairs Matching',
    titleAr: 'تَطْبِيقُ كَلِمَاتِ الكَوْنِ',
    instructionEn: 'Match each cosmic word with its meaning.',
    instructionBn: 'মহাজাগতিক শব্দগুলোর সাথে অর্থ মিলিয়ে নিন।',
    pairPayload: {
      pairs: [
        { id: 'pc-sama', ar: 'السَّمَاءُ', meaning: 'The sky' },
        { id: 'pc-ard', ar: 'الأَرْضُ', meaning: 'The earth' },
        { id: 'pc-nur', ar: 'نُورٌ', meaning: 'Light' },
        { id: 'pc-zulmah', ar: 'ظُلْمَةٌ', meaning: 'Darkness' },
      ],
    },
  },

  // 13. Page 42: Authentic Reading & Translation Drill 1: Sky & Earth
  {
    id: 'step-13-assembly-sky-earth',
    type: 'sentence_assembly',
    pageNumber: 42,
    titleEn: 'Textbook Translation: Sky & Earth',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: السَّمَاءُ وَالأَرْضُ',
    instructionEn: 'Read the Arabic sentence and assemble the accurate translation using word chips.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং শব্দ চিপস সাজিয়ে সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'السَّمَاءُ فَوْقَنَا وَالأَرْضُ تَحْتَنَا',
      promptEn: 'The sky is above us and the earth is below us',
      promptBn: 'আকাশ আমাদের উপরে এবং পৃথিবী আমাদের নিচে',
      expectedAnswer: ['The sky is above us', 'and', 'the earth is below us'],
      chips: ['The sky is above us', 'and', 'the earth is below us', 'the sun is bright', 'below you'],
      expectedAnswerBn: ['আকাশ আমাদের উপরে', 'এবং', 'পৃথিবী আমাদের নিচে'],
      chipsBn: ['আকাশ আমাদের উপরে', 'এবং', 'পৃথিবী আমাদের নিচে', 'সূর্য উজ্জ্বল', 'তোমাদের নিচে'],
      emoji: '🌌',
    },
  },

  // 14. Page 42: Authentic Reading & Translation Drill 2: Custody of Belongings
  {
    id: 'step-14-assembly-custody',
    type: 'sentence_assembly',
    pageNumber: 42,
    titleEn: 'Textbook Translation: Aisha’s Necklace',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: عِقْدُ عَائِشَةَ',
    instructionEn: 'Read the sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'عِقْدُ عَائِشَةَ عِنْدَ فَاطِمَةَ',
      promptEn: "Aisha's necklace is with Fatima",
      promptBn: 'আয়েশার হার ফাতেমার কাছে',
      expectedAnswer: ["Aisha's necklace", 'is with', 'Fatima'],
      chips: ["Aisha's necklace", 'is with', 'Fatima', 'with Mahmud', 'the bag'],
      expectedAnswerBn: ['আয়েশার হার', 'ফাতেমার কাছে', 'রয়েছে'],
      chipsBn: ['আয়েশার হার', 'ফাতেমার কাছে', 'রয়েছে', 'মাহমুদের কাছে', 'ব্যাগটি'],
      emoji: '📿',
    },
  },

  // 15. Page 42: Dialogic Battery Part 2 - Cosmic & Custody Inquiries
  {
    id: 'step-15-battery-spatial2',
    type: 'alternative_qa',
    pageNumber: 42,
    titleEn: 'Cosmic & Custody Battery 2',
    titleAr: 'حِوَارُ الكَوْنِ وَالأَمَاكِنِ (٢)',
    instructionEn: 'Respond to cosmic and possession location queries with grammatical precision.',
    instructionBn: 'মহাজাগতিক ও অবস্থান সম্পর্কিত প্রশ্নগুলোর যথার্থ ব্যাকরণসিদ্ধ উত্তর নির্বাচন করুন।',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c7-5',
          questionAr: 'عِنْدَ مَنْ عِقْدُ عَائِشَةَ ؟',
          optionsAr: ['عِقْدُهَا عِنْدَ فَاطِمَةَ', 'عِقْدُهُ عِنْدَ فَاطِمَةَ'],
          correctAnswerAr: 'عِقْدُهَا عِنْدَ فَاطِمَةَ',
        },
        {
          id: 'qa-c7-6',
          questionAr: 'عِنْدَ مَنْ كِتَابُ مَحْمُودٍ ؟',
          optionsAr: ['كِتَابُهُ عِنْدَ خَالِدٍ', 'كِتَابُهَا عِنْدَ خَالِدٍ'],
          correctAnswerAr: 'كِتَابُهُ عِنْدَ خَالِدٍ',
        },
        {
          id: 'qa-c7-7',
          questionAr: 'أَيْنَ السَّمَاءُ وَ أَيْنَ الأَرْضُ ؟',
          optionsAr: ['اَلسَّمَاءُ فَوْقَنَا وَ الأَرْضُ تَحْتَنَا', 'اَلسَّمَاءُ تَحْتَنَا وَ الأَرْضُ فَوْقَنَا'],
          correctAnswerAr: 'اَلسَّمَاءُ فَوْقَنَا وَ الأَرْضُ تَحْتَنَا',
        },
        {
          id: 'qa-c7-8',
          questionAr: 'مَاذَا أَمَامَ الْمُعَلِّمِ ؟',
          optionsAr: ['أَمَامَ الْمُعَلِّمِ سَبُّورَةٌ', 'أَمَامَ الْمُعَلِّمُ سَبُّورَةٌ'],
          correctAnswerAr: 'أَمَامَ الْمُعَلِّمِ سَبُّورَةٌ',
        },
      ],
    },
  },

  // 16. Page 42: Authentic Reading & Translation Drill 3: Friend in Front of Mosque
  {
    id: 'step-16-assembly-friend-mosque',
    type: 'sentence_assembly',
    pageNumber: 42,
    titleEn: 'Textbook Translation: Bashir’s Friend',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: صَدِيقُ بَشِيرٍ',
    instructionEn: 'Read the sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'صَدِيقُ بَشِيرٍ أَمَامَ الْمَسْجِدِ',
      promptEn: "Bashir's friend is in front of the mosque",
      promptBn: 'বশীরের বন্ধু মসজিদের সামনে',
      expectedAnswer: ["Bashir's friend", 'is in front of', 'the mosque'],
      chips: ["Bashir's friend", 'is in front of', 'the mosque', 'behind the house', 'inside'],
      expectedAnswerBn: ['বশীরের বন্ধু', 'মসজিদের সামনে', 'আছেন'],
      chipsBn: ['বশীরের বন্ধু', 'মসজিদের সামনে', 'আছেন', 'ঘরের পেছনে', 'ভেতরে'],
      emoji: '🕌',
    },
  },

  // 17. Page 42: Syntactic Tarkib Dissector: Subject + Spatial Predicate
  {
    id: 'step-17-tarkib-dissector',
    type: 'tarkib_dissector',
    pageNumber: 42,
    titleEn: 'Syntactic Dissector',
    titleAr: 'التَّرْكِيبُ النَّحْوِيُّ',
    instructionEn: 'Dissect the nominal sentence with a spatial adverbial predicate: Subject (Mubtada) followed by Adverb (Zarf / Mudaf) and Attached Pronoun (Mudaf Ilayh).',
    instructionBn: 'বাক্যের ব্যাকরণগত বিন্যাসটি লক্ষ্য করুন: মুক্তাদা এবং স্থানবাচক যারফ ও সম্বন্ধযুক্ত খবর।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-c7-1',
          sentenceAr: 'اَلسَّمَاءُ فَوْقَنَا',
          sentenceTypeAr: 'جُمْلَةٌ اسْمِيَّةٌ (مُبْتَدَأٌ + شِبْهُ جُمْلَةٍ ظَرْفِيَّةٍ)',
          sentenceTypeEn: 'Nominal Sentence (Subject + Spatial Adverbial Predicate)',
          sentenceTypeBn: 'নামবাচক বাক্য (মুক্তাদা ও স্থানবাচক খবর)',
          slots: [
            {
              roleAr: 'مُبْتَدَأٌ',
              roleEn: 'Subject',
              roleBn: 'মুক্তাদা (উদ্দেশ্য)',
              expectedWordAr: 'اَلسَّمَاءُ',
            },
            {
              roleAr: 'ظَرْفُ مَكَانٍ (مُضَافٌ)',
              roleEn: 'Spatial Adverb',
              roleBn: 'স্থানবাচক অব্যয় (মুদাফ)',
              expectedWordAr: 'فَوْقَ',
            },
            {
              roleAr: 'مُضَافٌ إِلَيْهِ',
              roleEn: 'Attached Pronoun (Mudaf Ilayh)',
              roleBn: 'মুদাফ ইলাইহি (যুক্ত সর্বনাম)',
              expectedWordAr: 'نَا',
            },
          ],
          availableWordsAr: ['نَا', 'اَلسَّمَاءُ', 'فَوْقَ'],
        },
      ],
    },
  },

  // 18. Sacred Milestone: Quranic Echo (Surah Al-Baqarah 2:255)
  {
    id: 'step-18-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 42,
    titleEn: 'Quranic Milestone',
    titleAr: 'الأَثَرُ القُرْآنِيُّ',
    instructionEn: 'Listen and observe the spatial preposition in Ayat al-Kursi (2:255).',
    instructionBn: 'আয়াতুল কুরসীতে ব্যবহৃত স্থানবাচক অব্যয়টি লক্ষ্য করুন ও শুদ্ধভাবে শুনুন।',
    echoPayload: {
      surahNumber: 2,
      ayahNumber: 255,
      surahNameAr: 'سُورَةُ البَقَرَةِ',
      surahNameEn: 'Al-Baqarah',
      arabicText: 'يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ',
      translationEn: 'He knows what is before them and what is behind them.',
      translationBn: 'তাদের সামনে ও তাদের পেছনে যা আছে তা তিনি জানেন।',
      highlightedWords: ['بَيْنَ', 'أَيْدِيهِمْ', 'خَلْفَهُمْ'],
      patternNameEn: 'Spatial Adverbial Constructs (ظَرْفُ مَكَانٍ)',
      patternNameBn: 'স্থানবাচক অব্যয় (সামনে ও পেছনে)',
      lessonPatternAr: 'أَمَامَ الْمَسْجِدِ / خَلْفَ الْبَيْتِ',
      lessonPatternEn: 'In front of the mosque / Behind the house',
      lessonPatternBn: 'মসজিদের সামনে / ঘরের পেছনে',
      quranPatternAr: 'مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ',
      quranPatternEn: 'What is before them and what is behind them',
      quranPatternBn: 'তাদের সামনে ও তাদের পেছনে যা আছে',
      reflection: "Notice the spatial locatives 'خَلْفَ' (behind) and 'بَيْنَ' (between / before) in Ayat al-Kursi - demonstrating how spatial locatives govern subsequent nouns and pronouns in the genitive state.",
      audioKey: 'quran_002255',
    },
  },
];

export const LESSON_07_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 7,
  titleEn: 'Lesson 7: Prepositions of Place & Spatial Syntax',
  titleAr: 'الدَّرْسُ السَّابِعُ: حُرُوفُ وَظُرُوفُ المَكَانِ',
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
    'حَوْضٌ',
    'سَبُّورَةٌ',
    'السَّمَاءُ',
    'الأَرْضُ',
    'قَلْبٌ',
    'نُورٌ',
    'ظُلْمَةٌ',
    'قِصَّةٌ',
  ],
  steps: LESSON_07_STEPS,
};

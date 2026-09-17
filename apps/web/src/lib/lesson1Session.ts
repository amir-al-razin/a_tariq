// Lesson 1 Interactive Session Steps (Directly mapped from resources/pages/vol1/chapter_01/lesson_01/ pages 15-19)
import type { LessonSessionData } from './lessonSessionTypes';

export type StepType = 
  | 'vocab_prime'       // Bottom-of-page vocabulary introduction
  | 'concept_intro'     // Pointer and Grammar concept discovery cards (Page 15 formula box)
  | 'polar_sort'        // Binary spatial distance selection
  | 'sentence_assembly' // Word chip construction with Fisher-Yates shuffle
  | 'cloze_choice'      // Single-blank sentence selection with options
  | 'speed_pair'        // Synaptic pair matching of vocabulary
  | 'quranic_echo';     // Divine milestone unlock

export interface ConceptItem {
  id: string;
  ar: string;             // e.g. "هَذَا"
  romanized: string;      // e.g. "hādhā"
  meaningEn: string;      // e.g. "This (Near)"
  meaningBn: string;      // e.g. "ইহা (নিকট)"
  descriptionEn: string;  // e.g. "Points to an object close to you."
  descriptionBn: string;  // e.g. "কাছের কোনো বস্তুর দিকে ইশারা করতে ব্যবহৃত হয়।"
  distance: 'near' | 'far';
  exampleAr: string;      // e.g. "هَذَا كِتَابٌ"
  exampleEn: string;      // e.g. "This is a book"
  exampleBn: string;      // e.g. "ইহা একটি বই"
  audioKey: string;       // e.g. "هَذَا"
  exampleAudioKey?: string; // e.g. "هَذَا كِتَابٌ"
  emoji: string;          // e.g. "📖"
}

export interface SessionStep {
  id: string;
  type: StepType;
  pageNumber: number;
  titleEn: string;
  titleAr: string;
  instructionEn: string;
  instructionBn: string;
  itemId?: string; // Links to ItemRetention

  // Type-specific payloads
  vocabPayload?: {
    words: {
      id: string;
      ar: string;
      en: string;
      bn: string;
      romanized: string;
      emoji: string;
    }[];
  };

  conceptPayload?: {
    concepts: ConceptItem[];
  };

  polarPayload?: {
    arabicSubject: string;       // e.g. "كِتَابٌ"
    meaningEn: string;           // "A book"
    meaningBn: string;           // "একটি বই"
    distance: 'near' | 'far';    // Spatial perspective distance
    gender: 'masculine' | 'feminine';
    correctAnswer: string;       // "هَذَا كِتَابٌ" or "ذَلِكَ كِتَابٌ"
    options: string[];           // ["هَذَا كِتَابٌ", "ذَلِكَ كِتَابٌ"]
    emoji: string;
  };

  assemblyPayload?: {
    promptEn: string;            // "This is a wall"
    promptBn: string;            // "ইহা একটি দেয়াল"
    expectedAnswer: string[];    // ["هَذَا", "جِدَارٌ"]
    chips: string[];             // ["هَذَا", "جِدَارٌ", "ذَلِكَ", "بَابٌ"]
    emoji: string;
  };

  clozePayload?: {
    questionAr: string;          // "مَا هَذَا ؟"
    questionEn: string;          // "What is this?"
    questionBn: string;          // "ইহা কী?"
    partialAnswerAr: string;     // "هَذَا"
    correctAnswer: string;       // "كُرْسِيٌّ"
    options: string[];           // ["كُرْسِيٌّ", "بَيْتٌ", "مَسْجِدٌ", "سَبُّورَةٌ"]
    emoji: string;
    distance: 'near' | 'far';
  };

  pairPayload?: {
    pairs: {
      ar: string;
      meaning: string;
      id: string;
    }[];
  };

  echoPayload?: {
    surahNumber: number;
    ayahNumber: number;
    surahNameAr: string;
    surahNameEn: string;
    arabicText: string;
    translationEn: string;
    translationBn: string;
    highlightedWords: string[];
    reflection: string;
  };
}

export const LESSON_01_STEPS: SessionStep[] = [
  // 1. Page 15: Masculine Vocab Priming (Part 1: 4 core words)
  {
    id: 'step-1-vocab-masc-1',
    type: 'vocab_prime',
    pageNumber: 15,
    titleEn: 'Masculine Vocabulary',
    titleAr: 'مُفْرَدَاتٌ مُذَكَّرَةٌ',
    instructionEn: 'Tap each card to hear pronunciation and memorize the meaning.',
    instructionBn: 'উচ্চারণ শুনুন এবং অর্থ লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c1_kitab', ar: 'كِتَابٌ', en: 'A book', bn: 'একটি বই', romanized: 'kitābun', emoji: '📖' },
        { id: 'v1_c1_qalam', ar: 'قَلَمٌ', en: 'A pen', bn: 'একটি কলম', romanized: 'qalamun', emoji: '🖊️' },
        { id: 'v1_c1_kursi', ar: 'كُرْسِيٌّ', en: 'A chair', bn: 'একটি চেয়ার', romanized: 'kursiyyun', emoji: '🪑' },
        { id: 'v1_c1_bayt', ar: 'بَيْتٌ', en: 'A house', bn: 'একটি ঘর', romanized: 'baytun', emoji: '🏠' },
      ],
    },
  },

  // 2. Immediate Active Recall Pair Match
  {
    id: 'step-2-pair-match-1',
    type: 'speed_pair',
    pageNumber: 15,
    titleEn: 'Synaptic Recall',
    titleAr: 'تَطْبِيقُ المُفْرَدَاتِ',
    instructionEn: 'Match each Arabic word to its English meaning.',
    instructionBn: 'আরবী শব্দের সাথে সঠিক বাংলা অর্থ মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'v1_c1_kitab', ar: 'كِتَابٌ', meaning: 'A book' },
        { id: 'v1_c1_qalam', ar: 'قَلَمٌ', meaning: 'A pen' },
        { id: 'v1_c1_kursi', ar: 'كُرْسِيٌّ', meaning: 'A chair' },
        { id: 'v1_c1_bayt', ar: 'بَيْتٌ', meaning: 'A house' },
      ],
    },
  },

  // 3. Page 15: Masculine Vocab Priming (Part 2: 4 remaining words)
  {
    id: 'step-3-vocab-masc-2',
    type: 'vocab_prime',
    pageNumber: 15,
    titleEn: 'Household Vocabulary',
    titleAr: 'مُفْرَدَاتُ المَنْزِلِ',
    instructionEn: 'Prime the next 4 words from Page 15.',
    instructionBn: 'পরবর্তী ৪টি শব্দ মুখস্থ করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c1_bab', ar: 'بَابٌ', en: 'A door', bn: 'একটি দরজা', romanized: 'bābun', emoji: '🚪' },
        { id: 'v1_c1_misbah', ar: 'مِصْبَاحٌ', en: 'A lamp', bn: 'একটি বাতি', romanized: 'miṣbāḥun', emoji: '💡' },
        { id: 'v1_c1_jidar', ar: 'جِدَارٌ', en: 'A wall', bn: 'একটি দেয়াল', romanized: 'jidārun', emoji: '🧱' },
        { id: 'v1_c1_sarir', ar: 'سَرِيرٌ', en: 'A bed', bn: 'একটি খাট', romanized: 'sarīrun', emoji: '🛏️' },
      ],
    },
  },

  // 4. Page 15: Concept Discovery: The Demonstrative Pointers (هَذَا vs ذَلِكَ)
  {
    id: 'step-4-concept-pointers-masc',
    type: 'concept_intro',
    pageNumber: 15,
    titleEn: 'Pointers: This vs That',
    titleAr: 'الإِشَارَةُ لِلْقَرِيبِ وَالْبَعِيدِ',
    instructionEn: 'Demonstrative Pointers',
    instructionBn: 'ইশারার শব্দ (নিকট ও দূর)',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-haza',
          ar: 'هَذَا',
          romanized: 'hādhā',
          meaningEn: 'This',
          meaningBn: 'ইহা / এটি',
          descriptionEn: '',
          descriptionBn: '',
          distance: 'near',
          exampleAr: 'هَذَا كِتَابٌ',
          exampleEn: 'This is a book.',
          exampleBn: 'ইহা একটি বই।',
          audioKey: 'هَذَا',
          exampleAudioKey: 'هَذَا كِتَابٌ',
          emoji: '📖',
        },
        {
          id: 'concept-dhalika',
          ar: 'ذَلِكَ',
          romanized: 'dhālika',
          meaningEn: 'That',
          meaningBn: 'উহা / ওটি',
          descriptionEn: '',
          descriptionBn: '',
          distance: 'far',
          exampleAr: 'ذَلِكَ قَلَمٌ',
          exampleEn: 'That is a pen.',
          exampleBn: 'উহা একটি কলম।',
          audioKey: 'ذَلِكَ',
          exampleAudioKey: 'ذَلِكَ قَلَمٌ',
          emoji: '🖊️',
        },
      ],
    },
  },

  // 5. Page 15: Near Pointer Drill (Visual Proximity)
  {
    id: 'step-5-polar-kitab',
    type: 'polar_sort',
    pageNumber: 15,
    titleEn: 'Spatial Pointer',
    titleAr: 'إِشَارَةُ القَرِيبِ',
    instructionEn: 'Which sentence matches the scene?',
    instructionBn: 'কোন বাক্যটি সঠিক?',
    itemId: 'pattern:haza_masc',
    polarPayload: {
      arabicSubject: 'كِتَابٌ',
      meaningEn: 'A book',
      meaningBn: 'একটি বই',
      distance: 'near',
      gender: 'masculine',
      correctAnswer: 'هَذَا كِتَابٌ',
      options: ['هَذَا كِتَابٌ', 'ذَلِكَ كِتَابٌ'],
      emoji: '📖',
    },
  },

  // 6. Page 15: Far Pointer Drill (Visual Distance)
  {
    id: 'step-6-polar-qalam',
    type: 'polar_sort',
    pageNumber: 15,
    titleEn: 'Spatial Pointer',
    titleAr: 'إِشَارَةُ البَعِيدِ',
    instructionEn: 'Which sentence matches the scene?',
    instructionBn: 'কোন বাক্যটি সঠিক?',
    itemId: 'pattern:dhalika_masc',
    polarPayload: {
      arabicSubject: 'قَلَمٌ',
      meaningEn: 'A pen',
      meaningBn: 'একটি কলম',
      distance: 'far',
      gender: 'masculine',
      correctAnswer: 'ذَلِكَ قَلَمٌ',
      options: ['هَذَا قَلَمٌ', 'ذَلِكَ قَلَمٌ'],
      emoji: '🖊️',
    },
  },

  // 7. Page 16: Sentence Assembly (Masculine Near)
  {
    id: 'step-7-assembly-jidar',
    type: 'sentence_assembly',
    pageNumber: 16,
    titleEn: 'Sentence Practice',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble the sentence in Arabic',
    instructionBn: 'আরবীতে বাক্যটি সাজান',
    itemId: 'v1_c1_jidar',
    assemblyPayload: {
      promptEn: 'This is a wall',
      promptBn: 'ইহা একটি দেয়াল',
      expectedAnswer: ['هَذَا', 'جِدَارٌ'],
      chips: ['هَذَا', 'جِدَارٌ', 'ذَلِكَ', 'بَابٌ'],
      emoji: '🧱',
    },
  },

  // 8. Page 16: Sentence Assembly (Masculine Far)
  {
    id: 'step-8-assembly-misbah',
    type: 'sentence_assembly',
    pageNumber: 16,
    titleEn: 'Sentence Practice',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble the sentence in Arabic',
    instructionBn: 'আরবীতে বাক্যটি সাজান',
    itemId: 'v1_c1_misbah',
    assemblyPayload: {
      promptEn: 'That is a lamp',
      promptBn: 'উহা একটি বাতি',
      expectedAnswer: ['ذَلِكَ', 'مِصْبَاحٌ'],
      chips: ['ذَلِكَ', 'مِصْبَاحٌ', 'هَذَا', 'سَرِيرٌ'],
      emoji: '💡',
    },
  },

  // 9. Page 17: Feminine Vocabulary Priming (Ta-Marbuta introduction)
  {
    id: 'step-9-vocab-fem',
    type: 'vocab_prime',
    pageNumber: 17,
    titleEn: 'Feminine Vocabulary (ة)',
    titleAr: 'مُفْرَدَاتٌ مُؤَنَّثَةٌ (التَّاءُ الْمَرْبُوطَةُ)',
    instructionEn: 'Words ending in ة are feminine.',
    instructionBn: 'গোল তা (ة) যুক্ত শব্দগুলো মুয়ান্নাস (স্ত্রীবাচক)।',
    vocabPayload: {
      words: [
        { id: 'v1_c1_madrasah', ar: 'مَدْرَسَةٌ', en: 'A school', bn: 'একটি মাদ্রাসা / বিদ্যালয়', romanized: 'madrasatun', emoji: '🏫' },
        { id: 'v1_c1_sabburah', ar: 'سَبُّورَةٌ', en: 'A blackboard', bn: 'একটি ব্ল্যাকবোর্ড', romanized: 'sabbūratun', emoji: '📋' },
        { id: 'v1_c1_mistarah', ar: 'مِسْطَرَةٌ', en: 'A ruler', bn: 'একটি রুলার', romanized: 'misṭaratun', emoji: '📏' },
        { id: 'v1_c1_haqibah', ar: 'حَقِيبَةٌ', en: 'A bag', bn: 'একটি ব্যাগ', romanized: 'ḥaqībatun', emoji: '💼' },
      ],
    },
  },

  // 10. Page 17: Feminine Pointers Concept Discovery (هَذِهِ vs تِلْكَ)
  {
    id: 'step-10-concept-pointers-fem',
    type: 'concept_intro',
    pageNumber: 17,
    titleEn: 'Feminine Pointers',
    titleAr: 'إِشَارَةُ المُؤَنَّثِ',
    instructionEn: 'Feminine Pointers',
    instructionBn: 'স্ত্রীবাচক ইশারার শব্দ',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-hazihi',
          ar: 'هَذِهِ',
          romanized: 'hādhihi',
          meaningEn: 'This',
          meaningBn: 'ইহা / এটি',
          descriptionEn: '',
          descriptionBn: '',
          distance: 'near',
          exampleAr: 'هَذِهِ مَدْرَسَةٌ',
          exampleEn: 'This is a school.',
          exampleBn: 'ইহা একটি মাদ্রাসা।',
          audioKey: 'هَذِهِ',
          exampleAudioKey: 'هَذِهِ مَدْرَسَةٌ',
          emoji: '🏫',
        },
        {
          id: 'concept-tilka',
          ar: 'تِلْكَ',
          romanized: 'tilka',
          meaningEn: 'That',
          meaningBn: 'উহা / ওটি',
          descriptionEn: '',
          descriptionBn: '',
          distance: 'far',
          exampleAr: 'تِلْكَ حَقِيبَةٌ',
          exampleEn: 'That is a bag.',
          exampleBn: 'উহা একটি ব্যাগ।',
          audioKey: 'تِلْكَ',
          exampleAudioKey: 'تِلْكَ حَقِيبَةٌ',
          emoji: '💼',
        },
      ],
    },
  },

  // 11. Page 17: Feminine Spatial Pointer Drill
  {
    id: 'step-11-polar-madrasah',
    type: 'polar_sort',
    pageNumber: 17,
    titleEn: 'Spatial Pointer',
    titleAr: 'إِشَارَةُ المُؤَنَّثِ',
    instructionEn: 'Which sentence matches the scene?',
    instructionBn: 'কোন বাক্যটি সঠিক?',
    itemId: 'pattern:hazihi_fem',
    polarPayload: {
      arabicSubject: 'مَدْرَسَةٌ',
      meaningEn: 'A school',
      meaningBn: 'একটি মাদ্রাসা',
      distance: 'near',
      gender: 'feminine',
      correctAnswer: 'هَذِهِ مَدْرَسَةٌ',
      options: ['هَذِهِ مَدْرَسَةٌ', 'تِلْكَ مَدْرَسَةٌ'],
      emoji: '🏫',
    },
  },

  // 12. Page 17: Feminine Sentence Assembly
  {
    id: 'step-12-assembly-haqibah',
    type: 'sentence_assembly',
    pageNumber: 17,
    titleEn: 'Sentence Practice',
    titleAr: 'تَرْكِيبُ جُمْلَةِ المُؤَنَّثِ',
    instructionEn: 'Assemble the sentence in Arabic',
    instructionBn: 'আরবীতে বাক্যটি সাজান',
    itemId: 'v1_c1_haqibah',
    assemblyPayload: {
      promptEn: 'That is a bag',
      promptBn: 'উহা একটি ব্যাগ',
      expectedAnswer: ['تِلْكَ', 'حَقِيبَةٌ'],
      chips: ['تِلْكَ', 'حَقِيبَةٌ', 'هَذِهِ', 'طَاوِلَةٌ'],
      emoji: '💼',
    },
  },

  // 13. Page 18: Question Concept Discovery (مَا = "What")
  {
    id: 'step-13-concept-questions',
    type: 'concept_intro',
    pageNumber: 18,
    titleEn: 'Asking Questions (مَا)',
    titleAr: 'السُّؤَالُ بِـ مَا',
    instructionEn: 'مَا means "What". Combine it with pointers to ask questions.',
    instructionBn: 'مَا অর্থ "কী"। ইশারার সাথে যুক্ত করে প্রশ্ন তৈরি করা হয়।',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-ma-haza',
          ar: 'مَا هَذَا ؟',
          romanized: 'mā hādhā?',
          meaningEn: 'What is this? (Near)',
          meaningBn: 'ইহা কী? (কাছের প্রশ্ন)',
          descriptionEn: 'Asking about an object near you.',
          descriptionBn: 'কাছের কোনো বস্তু সম্পর্কে জিজ্ঞাসা করতে।',
          distance: 'near',
          exampleAr: 'هَذَا كِتَابٌ',
          exampleEn: 'This is a book.',
          exampleBn: 'ইহা একটি বই।',
          audioKey: 'مَا هَذَا',
          exampleAudioKey: 'هَذَا كِتَابٌ',
          emoji: '📖',
        },
        {
          id: 'concept-ma-dhalika',
          ar: 'مَا ذَلِكَ ؟',
          romanized: 'mā dhālika?',
          meaningEn: 'What is that? (Far)',
          meaningBn: 'উহা কী? (দূরের প্রশ্ন)',
          descriptionEn: 'Asking about an object far away.',
          descriptionBn: 'দূরে থাকা কোনো বস্তু সম্পর্কে জিজ্ঞাসা করতে।',
          distance: 'far',
          exampleAr: 'ذَلِكَ بَيْتٌ',
          exampleEn: 'That is a house.',
          exampleBn: 'উহা একটি ঘর।',
          audioKey: 'مَا ذَلِكَ',
          exampleAudioKey: 'ذَلِكَ كِتَابٌ',
          emoji: '🏠',
        },
        {
          id: 'concept-ma-hazihi',
          ar: 'مَا هَذِهِ ؟',
          romanized: 'mā hādhihi?',
          meaningEn: 'What is this? (Feminine)',
          meaningBn: 'ইহা কী? (স্ত্রীবাচক প্রশ্ন)',
          descriptionEn: 'Asking about a feminine object near you.',
          descriptionBn: 'কাছের কোনো স্ত্রীবাচক বস্তু সম্পর্কে জিজ্ঞাসা করতে।',
          distance: 'near',
          exampleAr: 'هَذِهِ مَدْرَسَةٌ',
          exampleEn: 'This is a school.',
          exampleBn: 'ইহা একটি মাদ্রাসা।',
          audioKey: 'مَا هَذِهِ',
          exampleAudioKey: 'هَذِهِ مَدْرَسَةٌ',
          emoji: '🏫',
        },
      ],
    },
  },

  // 14. Page 18: Interrogative "What" (ما) Drill
  {
    id: 'step-14-cloze-ma-haza',
    type: 'cloze_choice',
    pageNumber: 18,
    titleEn: 'Question & Answer',
    titleAr: 'السُّؤَالُ وَالجَوَابُ',
    instructionEn: 'Look at the picture and complete the answer.',
    instructionBn: 'ছবিটি দেখে উত্তরটি সম্পূর্ণ করুন।',
    itemId: 'pattern:ma_haza',
    clozePayload: {
      questionAr: 'مَا هَذَا ؟',
      questionEn: 'What is this?',
      questionBn: 'ইহা কী?',
      partialAnswerAr: 'هَذَا',
      correctAnswer: 'كِتَابٌ',
      options: ['كِتَابٌ', 'قَلَمٌ', 'مَسْجِدٌ', 'سَبُّورَةٌ'],
      emoji: '📖',
      distance: 'near',
    },
  },

  // 15. Page 19: Assessment Picture Q&A (Far question)
  {
    id: 'step-15-cloze-ma-thalika',
    type: 'cloze_choice',
    pageNumber: 19,
    titleEn: 'Question & Answer',
    titleAr: 'السُّؤَالُ وَالجَوَابُ',
    instructionEn: 'Look at the picture and complete the answer.',
    instructionBn: 'ছবিটি দেখে উত্তরটি সম্পূর্ণ করুন।',
    itemId: 'pattern:ma_dhalika',
    clozePayload: {
      questionAr: 'مَا ذَلِكَ ؟',
      questionEn: 'What is that?',
      questionBn: 'উহা কী?',
      partialAnswerAr: 'ذَلِكَ',
      correctAnswer: 'بَيْتٌ',
      options: ['بَيْتٌ', 'كُرْسِيٌّ', 'مِفْتَاحٌ', 'نَظَّارَةٌ'],
      emoji: '🏠',
      distance: 'far',
    },
  },

  // 16. Page 19: Feminine Question Drill
  {
    id: 'step-16-cloze-ma-hazihi',
    type: 'cloze_choice',
    pageNumber: 19,
    titleEn: 'Question & Answer',
    titleAr: 'السُّؤَالُ وَالجَوَابُ',
    instructionEn: 'Look at the picture and complete the answer.',
    instructionBn: 'ছবিটি দেখে উত্তরটি সম্পূর্ণ করুন।',
    itemId: 'pattern:ma_hazihi',
    clozePayload: {
      questionAr: 'مَا هَذِهِ ؟',
      questionEn: 'What is this?',
      questionBn: 'এটি কী?',
      partialAnswerAr: 'هَذِهِ',
      correctAnswer: 'نَظَّارَةٌ',
      options: ['نَظَّارَةٌ', 'سَاعَةٌ', 'مِظَلَّةٌ', 'سَيَّارَةٌ'],
      emoji: '👓',
      distance: 'near',
    },
  },

  // 17. Final Culmination: The Quranic Echo Milestone Unlock
  {
    id: 'step-17-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 15,
    titleEn: 'Quranic Milestone Unlocked',
    titleAr: 'الصَّدَى القُرْآنِيُّ الْمُبَارَكُ',
    instructionEn: 'By mastering ذَلِكَ and الْكِتَابُ, you can now understand the opening of Surah Al-Baqarah!',
    instructionBn: 'ذَلِكَ এবং الْكِتَابُ আয়ত্ত করার মাধ্যমে আপনি এখন সূরা আল-বাকারার শুরু অনুধাবন করতে প্রস্তুত!',
    echoPayload: {
      surahNumber: 2,
      ayahNumber: 2,
      surahNameAr: 'سُورَةُ البَقَرَةِ',
      surahNameEn: 'Surah Al-Baqarah',
      arabicText: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
      translationEn: 'That is the Book about which there is no doubt, a guidance for those conscious of Allah.',
      translationBn: 'উহা সেই মহান কিতাব, যাতে কোনো সন্দেহ নেই; খোদাভীরুদের জন্য পথপ্রদর্শক।',
      highlightedWords: ['ذَٰلِكَ', 'الْكِتَابُ'],
      reflection: 'Notice how the author Abu Taher Misbah introduced ذَلِكَ and كِتَابٌ on the very first page. In Allah’s speech, "ذَٰلِكَ الْكِتَابُ" uses the far pointer to signify the immense, lofty honor and divine transcendence of the Holy Quran.',
    },
  },
];

export const LESSON_01_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 1,
  titleEn: 'Demonstratives & Nouns',
  titleAr: 'أَسْمَاءُ الإِشَارَةِ وَالمُفْرَدَاتُ',
  wordsLearned: [
    'كِتَابٌ', 'قَلَمٌ', 'كُرْسِيٌّ', 'بَيْتٌ',
    'بَابٌ', 'مِصْبَاحٌ', 'جِدَارٌ', 'سَرِيرٌ',
    'مَدْرَسَةٌ', 'سَبُّورَةٌ', 'مِسْطَرَةٌ', 'حَقِيبَةٌ',
    'هَذَا', 'ذَلِكَ', 'هَذِهِ', 'تِلْكَ'
  ],
  steps: LESSON_01_STEPS,
};

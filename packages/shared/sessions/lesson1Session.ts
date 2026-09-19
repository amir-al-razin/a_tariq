// Lesson 1 Interactive Session Steps (100% Curricular Parity with Physical Book Scans)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_01_STEPS: SessionStep[] = [
  // 1. Masculine Objects Priming (Part 1: 4 foundation nouns)
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
        { id: 'v1_c1_kursi', ar: 'كُرْسِيٌّ', en: 'A chair', bn: 'একটি চেয়ার', romanized: 'kursiyyun', emoji: '🪑' },
        { id: 'v1_c1_bayt', ar: 'بَيْتٌ', en: 'A house', bn: 'একটি ঘর', romanized: 'baytun', emoji: '🏠' },
      ],
    },
  },

  // 2. Immediate Synaptic Active Recall
  {
    id: 'step-2-pair-match-1',
    type: 'speed_pair',
    pageNumber: 15,
    titleEn: 'Synaptic Recall',
    titleAr: 'تَطْبِيقُ المُفْرَدَاتِ',
    instructionEn: 'Match each Arabic word to its English meaning.',
    instructionBn: 'আরবী শব্দের সাথে সঠিক অর্থ মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'v1_c1_kitab', ar: 'كِتَابٌ', meaning: 'A book' },
        { id: 'v1_c1_qalam', ar: 'قَلَمٌ', meaning: 'A pen' },
        { id: 'v1_c1_kursi', ar: 'كُرْسِيٌّ', meaning: 'A chair' },
        { id: 'v1_c1_bayt', ar: 'بَيْتٌ', meaning: 'A house' },
      ],
    },
  },

  // 3. Masculine Objects Priming (Part 2: 5 architectural & furniture nouns)
  {
    id: 'step-3-vocab-masc-2',
    type: 'vocab_prime',
    pageNumber: 15,
    titleEn: 'Living & Architecture',
    titleAr: 'مُفْرَدَاتُ المَنْزِلِ وَالعِمَارَةِ',
    instructionEn: 'Listen to the remaining masculine objects.',
    instructionBn: 'বাকি পুংলিঙ্গ শব্দগুলো মনোযোগ দিয়ে শুনুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c1_bab', ar: 'بَابٌ', en: 'A door', bn: 'একটি দরজা', romanized: 'bābun', emoji: '🚪' },
        { id: 'v1_c1_misbah', ar: 'مِصْبَاحٌ', en: 'A lamp', bn: 'একটি বাতি', romanized: 'miṣbāḥun', emoji: '💡' },
        { id: 'v1_c1_jidar', ar: 'جِدَارٌ', en: 'A wall', bn: 'একটি দেয়াল', romanized: 'jidārun', emoji: '🧱' },
        { id: 'v1_c1_sarir', ar: 'سَرِيرٌ', en: 'A bed', bn: 'একটি খাট', romanized: 'sarīrun', emoji: '🛏️' },
        { id: 'v1_c1_masjid', ar: 'مَسْجِدٌ', en: 'A mosque', bn: 'একটি মসজিদ', romanized: 'masjidun', emoji: '🕌' },
      ],
    },
  },

  // 4. Demonstrative Pointers Discovery (هَذَا vs ذَلِكَ)
  {
    id: 'step-4-concept-pointers-masc',
    type: 'concept_intro',
    pageNumber: 15,
    titleEn: 'Demonstrative Pointers',
    titleAr: 'الإِشَارَةُ لِلْقَرِيبِ وَالْبَعِيدِ',
    instructionEn: 'Observe how distance changes the pointer.',
    instructionBn: 'দূরত্বের পার্থক্যে ইশারার শব্দ কীভাবে পরিবর্তিত হয় লক্ষ্য করুন।',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-haza',
          ar: 'هَذَا',
          romanized: 'hādhā',
          meaningEn: 'This (Near)',
          meaningBn: 'ইহা / এটি (নিকট)',
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
          meaningEn: 'That (Far)',
          meaningBn: 'উহা / সেটি (দূর)',
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

  // 5. Direct Spatial Pointing Drill (Near Object)
  {
    id: 'step-5-spatial-door',
    type: 'spatial_pointing',
    pageNumber: 16,
    titleEn: 'Spatial Pointer',
    titleAr: 'إِشَارَةُ القَرِيبِ',
    instructionEn: 'Choose the correct pointer matching the visual distance.',
    instructionBn: 'দূরত্ব অনুসারে সঠিক ইশারার বাক্যটি নির্বাচন করুন।',
    itemId: 'pattern:haza_bab',
    spatialPointingPayload: {
      objectAr: 'بَابٌ',
      distance: 'near',
      gender: 'masculine',
      correctAnswer: 'هَذَا بَابٌ',
      options: ['هَذَا بَابٌ', 'ذَلِكَ بَابٌ'],
      emoji: '🚪',
    },
  },

  // 6. Direct Spatial Pointing Drill (Far Object)
  {
    id: 'step-6-spatial-lamp',
    type: 'spatial_pointing',
    pageNumber: 16,
    titleEn: 'Spatial Pointer',
    titleAr: 'إِشَارَةُ البَعِيدِ',
    instructionEn: 'Choose the correct pointer matching the visual distance.',
    instructionBn: 'দূরত্ব অনুসারে সঠিক ইশারার বাক্যটি নির্বাচন করুন।',
    itemId: 'pattern:dhalika_misbah',
    spatialPointingPayload: {
      objectAr: 'مِصْبَاحٌ',
      distance: 'far',
      gender: 'masculine',
      correctAnswer: 'ذَلِكَ مِصْبَاحٌ',
      options: ['هَذَا مِصْبَاحٌ', 'ذَلِكَ مِصْبَاحٌ'],
      emoji: '💡',
    },
  },

  // 7. Tactile Sentence Assembly
  {
    id: 'step-7-assembly-jidar',
    type: 'sentence_assembly',
    pageNumber: 16,
    titleEn: 'Sentence Practice',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble the sentence in Arabic.',
    instructionBn: 'আরবীতে বাক্যটি সাজান।',
    itemId: 'v1_c1_jidar',
    assemblyPayload: {
      promptEn: 'This is a wall',
      promptBn: 'ইহা একটি দেয়াল',
      expectedAnswer: ['هَذَا', 'جِدَارٌ'],
      chips: ['هَذَا', 'جِدَارٌ', 'ذَلِكَ', 'بَابٌ'],
      emoji: '🧱',
    },
  },

  // 8. Feminine Classroom Objects Priming (Ta-Marbuta introduction)
  {
    id: 'step-8-vocab-fem-1',
    type: 'vocab_prime',
    pageNumber: 17,
    titleEn: 'Feminine Classroom Vocabulary',
    titleAr: 'مُفْرَدَاتٌ مُؤَنَّثَةٌ (التَّاءُ الْمَرْبُوطَةُ)',
    instructionEn: 'Nouns ending with Ta-Marbutah (ة) are feminine.',
    instructionBn: 'গোল তা (ة) যুক্ত শব্দগুলো স্ত্রীবাচক।',
    vocabPayload: {
      words: [
        { id: 'v1_c1_madrasah', ar: 'مَدْرَسَةٌ', en: 'A madrasa / school', bn: 'একটি মাদ্রাসা / বিদ্যালয়', romanized: 'madrasatun', emoji: '🏫' },
        { id: 'v1_c1_sabburah', ar: 'سَبُّورَةٌ', en: 'A blackboard', bn: 'একটি ব্ল্যাকবোর্ড', romanized: 'sabbūratun', emoji: '📋' },
        { id: 'v1_c1_mistarah', ar: 'مِسْطَرَةٌ', en: 'A ruler', bn: 'একটি রুলার', romanized: 'misṭaratun', emoji: '📏' },
        { id: 'v1_c1_haqibah', ar: 'حَقِيبَةٌ', en: 'A bag / satchel', bn: 'একটি ব্যাগ', romanized: 'ḥaqībatun', emoji: '💼' },
      ],
    },
  },

  // 9. Feminine Room & Furniture Priming
  {
    id: 'step-9-vocab-fem-2',
    type: 'vocab_prime',
    pageNumber: 17,
    titleEn: 'Room & Study Vocabulary',
    titleAr: 'مُفْرَدَاتُ الغُرْفَةِ وَالدِّرَاسَةِ',
    instructionEn: 'Prime the remaining feminine nouns.',
    instructionBn: 'বাকী স্ত্রীবাচক শব্দগুলো লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c1_kurrasah', ar: 'كُرَّاسَةٌ', en: 'A notebook', bn: 'একটি খাতা', romanized: 'kurrāsatun', emoji: '📓' },
        { id: 'v1_c1_tawilah', ar: 'طَاوِلَةٌ', en: 'A table', bn: 'একটি টেবিল', romanized: 'ṭāwilatun', emoji: '🪵' },
        { id: 'v1_c1_hujrah', ar: 'حُجْرَةٌ', en: 'A room', bn: 'একটি কামরা', romanized: 'ḥujratun', emoji: '🚪' },
        { id: 'v1_c1_nafidha', ar: 'نَافِذَةٌ', en: 'A window', bn: 'একটি জানালা', romanized: 'nāfidhatun', emoji: '🪟' },
      ],
    },
  },

  // 10. Feminine Demonstratives Concept
  {
    id: 'step-10-concept-pointers-fem',
    type: 'concept_intro',
    pageNumber: 17,
    titleEn: 'Feminine Pointers',
    titleAr: 'إِشَارَةُ المُؤَنَّثِ',
    instructionEn: 'Feminine objects use هَذِهِ (near) and تِلْكَ (far).',
    instructionBn: 'স্ত্রীবাচক শব্দে কাছের জন্য هَذِهِ এবং দূরের জন্য تِلْكَ ব্যবহৃত হয়।',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-hazihi',
          ar: 'هَذِهِ',
          romanized: 'hādhihi',
          meaningEn: 'This (Feminine Near)',
          meaningBn: 'ইহা / এটি (স্ত্রীবাচক নিকট)',
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
          meaningEn: 'That (Feminine Far)',
          meaningBn: 'উহা / সেটি (স্ত্রীবাচক দূর)',
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

  // 11. Feminine Spatial Pointing (Near Room)
  {
    id: 'step-11-spatial-hujrah',
    type: 'spatial_pointing',
    pageNumber: 17,
    titleEn: 'Feminine Spatial Pointer',
    titleAr: 'إِشَارَةُ المُؤَنَّثِ لِلْقَرِيبِ',
    instructionEn: 'Choose the correct pointer matching the visual distance.',
    instructionBn: 'দূরত্ব অনুসারে সঠিক স্ত্রীবাচক ইশারা নির্বাচন করুন।',
    itemId: 'pattern:hazihi_hujrah',
    spatialPointingPayload: {
      objectAr: 'حُجْرَةٌ',
      distance: 'near',
      gender: 'feminine',
      correctAnswer: 'هَذِهِ حُجْرَةٌ',
      options: ['هَذِهِ حُجْرَةٌ', 'تِلْكَ حُجْرَةٌ'],
      emoji: '🚪',
    },
  },

  // 12. Feminine Spatial Pointing (Far Blackboard)
  {
    id: 'step-12-spatial-sabburah',
    type: 'spatial_pointing',
    pageNumber: 17,
    titleEn: 'Feminine Spatial Pointer',
    titleAr: 'إِشَارَةُ المُؤَنَّثِ لِلْبَعِيدِ',
    instructionEn: 'Choose the correct pointer matching the visual distance.',
    instructionBn: 'দূরত্ব অনুসারে সঠিক স্ত্রীবাচক ইশারা নির্বাচন করুন।',
    itemId: 'pattern:tilka_sabburah',
    spatialPointingPayload: {
      objectAr: 'سَبُّورَةٌ',
      distance: 'far',
      gender: 'feminine',
      correctAnswer: 'تِلْكَ سَبُّورَةٌ',
      options: ['هَذِهِ سَبُّورَةٌ', 'تِلْكَ سَبُّورَةٌ'],
      emoji: '📋',
    },
  },

  // 13. Mixed Everyday Objects Priming (8 objects: Lock, Key, Chest, Watch, Umbrella, Glasses, Car, Bicycle)
  {
    id: 'step-13-vocab-mixed',
    type: 'vocab_prime',
    pageNumber: 18,
    titleEn: 'Everyday Objects',
    titleAr: 'مُفْرَدَاتٌ يَوْمِيَّةٌ',
    instructionEn: 'Listen and learn 8 everyday household and travel items.',
    instructionBn: 'দৈনন্দিন জীবনের ৮টি নতুন শব্দ মনোযোগ দিয়ে শিখুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c1_qufl', ar: 'قُفْلٌ', en: 'A lock', bn: 'একটি তালা', romanized: 'quflun', emoji: '🔒' },
        { id: 'v1_c1_miftah', ar: 'مِفْتَاحٌ', en: 'A key', bn: 'একটি চাবি', romanized: 'miftāḥun', emoji: '🔑' },
        { id: 'v1_c1_sunduq', ar: 'صُنْدُوقٌ', en: 'A box / chest', bn: 'একটি বাক্স', romanized: 'ṣundūqun', emoji: '📦' },
        { id: 'v1_c1_saah', ar: 'سَاعَةٌ', en: 'A watch / clock', bn: 'একটি ঘড়ি', romanized: "sā'atun", emoji: '⌚' },
        { id: 'v1_c1_mizallah', ar: 'مِظَلَّةٌ', en: 'An umbrella', bn: 'একটি ছাতা', romanized: 'miẓallatun', emoji: '☂️' },
        { id: 'v1_c1_nazzarah', ar: 'نَظَّارَةٌ', en: 'Glasses', bn: 'একটি চশমা', romanized: 'naẓẓāratun', emoji: '👓' },
        { id: 'v1_c1_sayyarah', ar: 'سَيَّارَةٌ', en: 'A car', bn: 'একটি কার', romanized: 'sayyāratun', emoji: '🚗' },
        { id: 'v1_c1_darrajah', ar: 'دَرَّاجَةٌ', en: 'A bicycle', bn: 'একটি সাইকেল', romanized: 'darrājatun', emoji: '🚲' },
      ],
    },
  },

  // 14. Synaptic Recall of Everyday Objects
  {
    id: 'step-14-pair-mixed',
    type: 'speed_pair',
    pageNumber: 18,
    titleEn: 'Synaptic Recall',
    titleAr: 'مُطَابَقَةُ الأَدَوَاتِ',
    instructionEn: 'Match the Arabic objects to their meanings.',
    instructionBn: 'আরবী শব্দ ও অর্থের দ্রুত মিল তৈরি করুন।',
    pairPayload: {
      pairs: [
        { id: 'v1_c1_qufl', ar: 'قُفْلٌ', meaning: 'A lock' },
        { id: 'v1_c1_miftah', ar: 'مِفْتَاحٌ', meaning: 'A key' },
        { id: 'v1_c1_saah', ar: 'سَاعَةٌ', meaning: 'A watch' },
        { id: 'v1_c1_sayyarah', ar: 'سَيَّارَةٌ', meaning: 'A car' },
      ],
    },
  },

  // 15. Interrogative Concept: Asking Questions (مَا)
  {
    id: 'step-15-concept-questions',
    type: 'concept_intro',
    pageNumber: 18,
    titleEn: 'Asking Questions (مَا)',
    titleAr: 'أَسَالِيبُ السُّؤَالِ (مَا)',
    instructionEn: 'مَا means "What". Combine it with demonstratives to ask questions.',
    instructionBn: 'مَا অর্থ "কী"। ইশারার শব্দের সাথে যুক্ত করে প্রশ্ন করুন।',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-ma-haza',
          ar: 'مَا هَذَا ؟',
          romanized: 'mā hādhā?',
          meaningEn: 'What is this? (Masculine Near)',
          meaningBn: 'ইহা কী? (কাছের পুংলিঙ্গ প্রশ্ন)',
          exampleAr: 'هَذَا كِتَابٌ',
          exampleEn: 'This is a book.',
          exampleBn: 'ইহা একটি বই।',
          audioKey: 'مَا هَذَا',
          exampleAudioKey: 'هَذَا كِتَابٌ',
          emoji: '📖',
        },
        {
          id: 'concept-ma-tilka',
          ar: 'مَا تِلْكَ ؟',
          romanized: 'mā tilka?',
          meaningEn: 'What is that? (Feminine Far)',
          meaningBn: 'উহা কী? (দূরের স্ত্রীবাচক প্রশ্ন)',
          exampleAr: 'تِلْكَ سَاعَةٌ',
          exampleEn: 'That is a watch.',
          exampleBn: 'উহা একটি ঘড়ি।',
          audioKey: 'مَا تِلْكَ',
          exampleAudioKey: 'تِلْكَ سَاعَةٌ',
          emoji: '⌚',
        },
      ],
    },
  },

  // 16. Fast Dialogic Mini-Game Battery (Simulating Madrasa Partner Q&A Drill)
  {
    id: 'step-16-dialogue-battery',
    type: 'alternative_qa',
    pageNumber: 19,
    titleEn: 'Conversational Drill',
    titleAr: 'التَّمْرِينُ الشَّفَهِيُّ',
    instructionEn: 'Listen to the question and tap the correct answer.',
    instructionBn: 'প্রশ্নটি শুনে সঠিক উত্তরটিতে চাপ দিন।',
    alternativeQAPayload: {
      questions: [
        {
          id: 'q1',
          questionAr: 'مَا هَذَا ؟',
          visualCue: '🪑',
          optionsAr: ['هَذَا كُرْسِيٌّ', 'ذَلِكَ بَيْتٌ'],
          correctAnswerAr: 'هَذَا كُرْسِيٌّ',
        },
        {
          id: 'q2',
          questionAr: 'مَا ذَلِكَ ؟',
          visualCue: '🏠',
          optionsAr: ['ذَلِكَ بَيْتٌ', 'هَذَا مَسْجِدٌ'],
          correctAnswerAr: 'ذَلِكَ بَيْتٌ',
        },
        {
          id: 'q3',
          questionAr: 'مَا تِلْكَ ؟',
          visualCue: '⌚',
          optionsAr: ['تِلْكَ سَاعَةٌ', 'هَذِهِ نَظَّارَةٌ'],
          correctAnswerAr: 'تِلْكَ سَاعَةٌ',
        },
        {
          id: 'q4',
          questionAr: 'مَا هَذَا ؟',
          visualCue: '🔒',
          optionsAr: ['هَذَا قُفْلٌ', 'ذَلِكَ مِفْتَاحٌ'],
          correctAnswerAr: 'هَذَا قُفْلٌ',
        },
        {
          id: 'q5',
          questionAr: 'مَا هَذِهِ ؟',
          visualCue: '👓',
          optionsAr: ['هَذِهِ نَظَّارَةٌ', 'تِلْكَ مِظَلَّةٌ'],
          correctAnswerAr: 'هَذِهِ نَظَّارَةٌ',
        },
      ],
    },
  },

  // 17. Targeted Cloze Assessment
  {
    id: 'step-17-cloze-assessment',
    type: 'cloze_choice',
    pageNumber: 19,
    titleEn: 'Visual Assessment',
    titleAr: 'تَقْيِيمٌ بَصَرِيٌّ',
    instructionEn: 'Look at the image and complete the Arabic statement.',
    instructionBn: 'ছবিটি দেখে উত্তরটি সম্পূর্ণ করুন।',
    itemId: 'pattern:ma_sayyarah',
    clozePayload: {
      questionAr: 'مَا تِلْكَ ؟',
      questionEn: 'What is that?',
      questionBn: 'উহা কী?',
      partialAnswerAr: 'تِلْكَ',
      correctAnswer: 'سَيَّارَةٌ',
      options: ['سَيَّارَةٌ', 'دَرَّاجَةٌ', 'حَقِيبَةٌ', 'طَاوِلَةٌ'],
      emoji: '🚗',
      distance: 'far',
    },
  },

  // 18. Sacred Milestone: Quranic Pattern Echo (Surah Al-Baqarah 2:2)
  {
    id: 'step-18-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 15,
    titleEn: 'Quranic Milestone',
    titleAr: 'الأَثَرُ القُرْآنِيُّ الْمُبَارَكُ',
    instructionEn: 'Observe the far demonstrative pointer in the divine opening of Surah Al-Baqarah.',
    instructionBn: 'সূরা আল-বাকারার শুরুতে দূরবর্তী ইশারার প্রয়োগ প্রত্যক্ষ করুন।',
    echoPayload: {
      surahNumber: 2,
      ayahNumber: 2,
      surahNameAr: 'سُورَةُ البَقَرَةِ',
      surahNameEn: 'Surah Al-Baqarah',
      arabicText: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
      translationEn: 'That is the Book about which there is no doubt, a guidance for those conscious of Allah.',
      translationBn: 'উহা সেই মহান কিতাব, যাতে কোনো সন্দেহ নেই; খোদাভীরুদের জন্য পথপ্রদর্শক।',
      highlightedWords: ['ذَٰلِكَ', 'الْكِتَابُ'],
      patternNameEn: 'Far Demonstrative Pointer (ذَلِكَ)',
      patternNameBn: 'দূরবর্তী ইশারা বা নির্দেশক সর্বনাম (ذَلِكَ)',
      lessonPatternAr: 'ذَلِكَ كِتَابٌ',
      lessonPatternEn: 'That is a book',
      lessonPatternBn: 'উহা একটি কিতাব',
      quranPatternAr: 'ذَٰلِكَ الْكِتَابُ',
      quranPatternEn: 'That is the Book',
      quranPatternBn: 'উহা সেই মহান কিতাব',
      reflection: 'In Arabic linguistic rhetoric, using the far demonstrative pointer «ذَٰلِكَ» (That) rather than the near pointer «هٰذَا» (This) signifies immense elevation, majesty, and transcendent stature, exalting the Holy Quran as a divine revelation far beyond ordinary speech.',
      audioKey: 'quran_002002',
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
    'بَابٌ', 'مِصْبَاحٌ', 'جِدَارٌ', 'سَرِيرٌ', 'مَسْجِدٌ',
    'مَدْرَسَةٌ', 'سَبُّورَةٌ', 'مِسْطَرَةٌ', 'حَقِيبَةٌ',
    'كُرَّاسَةٌ', 'طَاوِلَةٌ', 'حُجْرَةٌ', 'نَافِذَةٌ',
    'قُفْلٌ', 'مِفْتَاحٌ', 'صُنْدُوقٌ', 'سَاعَةٌ',
    'مِظَلَّةٌ', 'نَظَّارَةٌ', 'سَيَّارَةٌ', 'دَرَّاجَةٌ',
    'هَذَا', 'ذَلِكَ', 'هَذِهِ', 'تِلْكَ'
  ],
  steps: LESSON_01_STEPS,
};

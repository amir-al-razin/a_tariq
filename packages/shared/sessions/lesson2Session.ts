// Lesson 2 Interactive Session Steps (100% Curricular Parity with Physical Book Scans)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_02_STEPS: SessionStep[] = [
  // 1. Core Adjectives Priming (Part 1: 4 foundational qualities)
  {
    id: 'l2-step-1-vocab-adj-1',
    type: 'vocab_prime',
    pageNumber: 20,
    titleEn: 'Descriptive Adjectives',
    titleAr: 'الصِّفَاتُ (الجُزْءُ الأَوَّلُ)',
    instructionEn: 'Listen and memorize foundational descriptive qualities.',
    instructionBn: 'উচ্চারণ শুনুন এবং গুণবাচক শব্দগুলো লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2_jadid', ar: 'جَدِيدٌ', en: 'New', bn: 'নতুন', romanized: 'jadīdun', emoji: '🆕' },
        { id: 'v1_c2_qadim', ar: 'قَدِيمٌ', en: 'Old', bn: 'পুরানো', romanized: 'qadīmun', emoji: '📜' },
        { id: 'v1_c2_jamil', ar: 'جَمِيلٌ', en: 'Beautiful', bn: 'সুন্দর', romanized: 'jamīlun', emoji: '🌸' },
        { id: 'v1_c2_kabir', ar: 'كَبِيرٌ', en: 'Big / Large', bn: 'বড়', romanized: 'kabīrun', emoji: '🐘' },
      ],
    },
  },

  // 2. Immediate Active Recall: Adjectives Part 1
  {
    id: 'l2-step-2-pair-adj-1',
    type: 'speed_pair',
    pageNumber: 20,
    titleEn: 'Synaptic Recall',
    titleAr: 'تَطْبِيقُ الصِّفَاتِ',
    instructionEn: 'Match each adjective to its meaning.',
    instructionBn: 'শব্দার্থগুলো দ্রুত মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'v1_c2_jadid', ar: 'جَدِيدٌ', meaning: 'New' },
        { id: 'v1_c2_qadim', ar: 'قَدِيمٌ', meaning: 'Old' },
        { id: 'v1_c2_jamil', ar: 'جَمِيلٌ', meaning: 'Beautiful' },
        { id: 'v1_c2_kabir', ar: 'كَبِيرٌ', meaning: 'Big / Large' },
      ],
    },
  },

  // 3. Adjectives Priming (Part 2: Size, Quality & Cleanliness)
  {
    id: 'l2-step-3-vocab-adj-2',
    type: 'vocab_prime',
    pageNumber: 20,
    titleEn: 'Descriptive Adjectives',
    titleAr: 'الصِّفَاتُ (الجُزْءُ الثَّانِي)',
    instructionEn: 'Listen to the remaining descriptive adjectives.',
    instructionBn: 'পরবর্তী গুণবাচক শব্দগুলো মনোযোগ দিয়ে শুনুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2_saghir', ar: 'صَغِيرٌ', en: 'Small', bn: 'ছোট', romanized: 'ṣaghīrun', emoji: '🐜' },
        { id: 'v1_c2_jayyid', ar: 'جَيِّدٌ', en: 'Good / Well-made', bn: 'ভালো / উৎকৃষ্ট', romanized: 'jayyidun', emoji: '⭐' },
        { id: 'v1_c2_nazif', ar: 'نَظِيفٌ', en: 'Clean', bn: 'পরিচ্ছন্ন', romanized: 'naẓīfun', emoji: '✨' },
        { id: 'v1_c2_wasikh', ar: 'وَسِخٌ', en: 'Dirty', bn: 'ময়লা / অপরিচ্ছন্ন', romanized: 'wasikhun', emoji: '🧹' },
      ],
    },
  },

  // 4. Immediate Active Recall: Adjectives Part 2
  {
    id: 'l2-step-4-pair-adj-2',
    type: 'speed_pair',
    pageNumber: 20,
    titleEn: 'Synaptic Recall',
    titleAr: 'تَطْبِيقُ الصِّفَاتِ',
    instructionEn: 'Match each adjective to its meaning.',
    instructionBn: 'শব্দার্থগুলো দ্রুত মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'v1_c2_saghir', ar: 'صَغِيرٌ', meaning: 'Small' },
        { id: 'v1_c2_jayyid', ar: 'جَيِّدٌ', meaning: 'Good' },
        { id: 'v1_c2_nazif', ar: 'نَظِيفٌ', meaning: 'Clean' },
        { id: 'v1_c2_wasikh', ar: 'وَسِخٌ', meaning: 'Dirty' },
      ],
    },
  },

  // 5. Environmental Nouns Priming
  {
    id: 'l2-step-5-vocab-environment',
    type: 'vocab_prime',
    pageNumber: 20,
    titleEn: 'Environmental Objects',
    titleAr: 'مُفْرَدَاتُ البِيئَةِ',
    instructionEn: 'Listen to the new concrete nouns introduced in Lesson 2.',
    instructionBn: 'নতুন শব্দগুলো মনোযোগ দিয়ে শুনুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2_alam', ar: 'عَلَمٌ', en: 'A flag', bn: 'একটি পতাকা', romanized: '‘alamun', emoji: '🚩' },
        { id: 'v1_c2_mirwahah', ar: 'مِرْوَحَةٌ', en: 'A fan', bn: 'একটি পাখা', romanized: 'mirwaḥatun', emoji: '🪭' },
        { id: 'v1_c2_hadiqah', ar: 'حَدِيقَةٌ', en: 'A garden', bn: 'একটি বাগান', romanized: 'ḥadīqatun', emoji: '🌳' },
      ],
    },
  },

  // 6. Concept Discovery: Mawsoof & Sifah (Adjective Agreement)
  {
    id: 'l2-step-6-concept-sifah',
    type: 'concept_intro',
    pageNumber: 20,
    titleEn: 'Descriptive Phrases',
    titleAr: 'قَاعِدَةُ الصِّفَةِ وَالمَوْصُوفِ',
    instructionEn: 'In Arabic, the adjective follows the noun and matches its gender.',
    instructionBn: 'আরবীতে গুণবাচক শব্দটি বিশেষ্যের পরে আসে এবং তার লিঙ্গ অনুসরণ করে।',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-masc-adj',
          ar: 'كِتَابٌ جَدِيدٌ',
          romanized: 'kitābun jadīdun',
          meaningEn: 'A new book (Masculine)',
          meaningBn: 'একটি নতুন বই (পুংলিঙ্গ)',
          exampleAr: 'عَلَمٌ جَمِيلٌ',
          exampleEn: 'A beautiful flag',
          exampleBn: 'একটি সুন্দর পতাকা',
          audioKey: 'كِتَابٌ جَدِيدٌ',
          exampleAudioKey: 'عَلَمٌ جَمِيلٌ',
          emoji: '📖',
        },
        {
          id: 'concept-fem-adj',
          ar: 'كُرَّاسَةٌ جَدِيدَةٌ',
          romanized: 'kurrāsatun jadīdatun',
          meaningEn: 'A new notebook (Feminine)',
          meaningBn: 'একটি নতুন খাতা (স্ত্রীবাচক)',
          exampleAr: 'حَدِيقَةٌ جَمِيلَةٌ',
          exampleEn: 'A beautiful garden',
          exampleBn: 'একটি সুন্দর বাগান',
          audioKey: 'كُرَّاسَةٌ جَدِيدَةٌ',
          exampleAudioKey: 'حَدِيقَةٌ جَمِيلَةٌ',
          emoji: '🌳',
        },
      ],
    },
  },

  // 7. Gender Agreement Discrimination Drill
  {
    id: 'l2-step-7-polar-gender',
    type: 'polar_sort',
    pageNumber: 20,
    titleEn: 'Gender Agreement',
    titleAr: 'تَطَابُقُ التَّأْنِيثِ',
    instructionEn: 'Select the grammatically correct descriptive phrase.',
    instructionBn: 'সঠিক ব্যাকরণসম্মত বর্ণনাটি নির্বাচন করুন।',
    itemId: 'pattern:hadiqah_jamilah',
    polarPayload: {
      arabicSubject: 'حَدِيقَةٌ',
      meaningEn: 'A garden',
      meaningBn: 'একটি বাগান',
      gender: 'feminine',
      correctAnswer: 'حَدِيقَةٌ جَمِيلَةٌ',
      options: ['حَدِيقَةٌ جَمِيلَةٌ', 'حَدِيقَةٌ جَمِيلٌ'],
      emoji: '🌳',
    },
  },

  // 8. Tactile Phrase Assembly
  {
    id: 'l2-step-8-assembly-alam',
    type: 'sentence_assembly',
    pageNumber: 20,
    titleEn: 'Phrase Building',
    titleAr: 'تَرْكِيبُ المَوْصُوفِ وَالصِّفَةِ',
    instructionEn: 'Assemble the descriptive phrase in Arabic.',
    instructionBn: 'আরবীতে বর্ণনাটি সাজান।',
    itemId: 'v1_c2_alam_jamil',
    assemblyPayload: {
      promptEn: 'A beautiful flag',
      promptBn: 'একটি সুন্দর পতাকা',
      expectedAnswer: ['عَلَمٌ', 'جَمِيلٌ'],
      chips: ['عَلَمٌ', 'جَمِيلٌ', 'جَمِيلَةٌ', 'مِرْوَحَةٌ'],
      emoji: '🚩',
    },
  },

  // 9. Clothing & Bedding Nouns Priming (Part 1)
  {
    id: 'l2-step-9-vocab-clothing-1',
    type: 'vocab_prime',
    pageNumber: 22,
    titleEn: 'Living & Clothing',
    titleAr: 'مُفْرَدَاتُ اللِّبَاسِ وَالفِرَاشِ (١)',
    instructionEn: 'Listen to classical Arabic terms for clothing and bedding.',
    instructionBn: 'পোশাক ও আসবাব সংক্রান্ত শব্দগুলো মনোযোগ দিয়ে শুনুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2_firash', ar: 'فِرَاشٌ', en: 'A bed-mattress / bedding', bn: 'একটি বিছানা', romanized: 'firāshun', emoji: '🛏️' },
        { id: 'v1_c2_wisadah', ar: 'وِسَادَةٌ', en: 'A pillow / cushion', bn: 'একটি বালিশ', romanized: 'wisādatun', emoji: '🛋️' },
        { id: 'v1_c2_qamis', ar: 'قَمِيصٌ', en: 'A shirt', bn: 'একটি জামা', romanized: 'qamīṣun', emoji: '👔' },
        { id: 'v1_c2_qalansuwah', ar: 'قَلَنْسُوَةٌ', en: 'A cap', bn: 'একটি টুপি', romanized: 'qalansuwatun', emoji: '🧢' },
      ],
    },
  },

  // 10. Clothing & Attire Nouns Priming (Part 2)
  {
    id: 'l2-step-10-vocab-clothing-2',
    type: 'vocab_prime',
    pageNumber: 22,
    titleEn: 'Traditional Attire',
    titleAr: 'مُفْرَدَاتُ اللِّبَاسِ وَالزِّينَةِ (٢)',
    instructionEn: 'Listen to classical terms for garments and footwear.',
    instructionBn: 'পোশাক ও পরিধেয় সামগ্রী সম্পর্কিত শব্দগুলো শিখুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2_libas', ar: 'لِبَاسٌ', en: 'A garment / dress', bn: 'একটি পোশাক', romanized: 'libāsun', emoji: '👘' },
        { id: 'v1_c2_imamah', ar: 'عِمَامَةٌ', en: 'A turban', bn: 'একটি পাগড়ী', romanized: '‘imāmatun', emoji: '👳' },
        { id: 'v1_c2_mindil', ar: 'مِنْدِيلٌ', en: 'A handkerchief', bn: 'একটি রুমাল', romanized: 'mindīlun', emoji: '🧣' },
        { id: 'v1_c2_hidha', ar: 'حِذَاءٌ', en: 'A shoe', bn: 'একটি জুতা', romanized: 'ḥidhā’un', emoji: '👞' },
      ],
    },
  },

  // 11. Clothing Vocabulary Synaptic Recall
  {
    id: 'l2-step-11-pair-clothing',
    type: 'speed_pair',
    pageNumber: 22,
    titleEn: 'Synaptic Recall',
    titleAr: 'تَطْبِيقُ المَلابِسِ',
    instructionEn: 'Match each attire item to its meaning.',
    instructionBn: 'পোশাকের শব্দগুলো তাদের অর্থের সাথে মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'v1_c2_firash', ar: 'فِرَاشٌ', meaning: 'Bedding' },
        { id: 'v1_c2_qamis', ar: 'قَمِيصٌ', meaning: 'A shirt' },
        { id: 'v1_c2_imamah', ar: 'عِمَامَةٌ', meaning: 'A turban' },
        { id: 'v1_c2_hidha', ar: 'حِذَاءٌ', meaning: 'A shoe' },
      ],
    },
  },

  // 12. Spatial Pointing with Adjective (Near House)
  {
    id: 'l2-step-12-spatial-bayt-saghir',
    type: 'spatial_pointing',
    pageNumber: 22,
    titleEn: 'Descriptive Pointer',
    titleAr: 'الإِشَارَةُ المَوْصُوفَةُ (قَرِيبٌ)',
    instructionEn: 'Choose the correct pointer matching the visual distance.',
    instructionBn: 'দূরত্ব অনুসারে সঠিক ইশারার বাক্যটি নির্বাচন করুন।',
    itemId: 'pattern:haza_bayt_saghir',
    spatialPointingPayload: {
      objectAr: 'بَيْتٌ صَغِيرٌ',
      distance: 'near',
      gender: 'masculine',
      correctAnswer: 'هَذَا بَيْتٌ صَغِيرٌ',
      options: ['هَذَا بَيْتٌ صَغِيرٌ', 'ذَلِكَ بَيْتٌ صَغِيرٌ'],
      emoji: '🏠',
    },
  },

  // 13. Spatial Pointing with Adjective (Far Mosque)
  {
    id: 'l2-step-13-spatial-masjid-kabir',
    type: 'spatial_pointing',
    pageNumber: 22,
    titleEn: 'Descriptive Pointer',
    titleAr: 'الإِشَارَةُ المَوْصُوفَةُ (بَعِيدٌ)',
    instructionEn: 'Choose the correct pointer matching the visual distance.',
    instructionBn: 'দূরত্ব অনুসারে সঠিক ইশারার বাক্যটি নির্বাচন করুন।',
    itemId: 'pattern:dhalika_masjid_kabir',
    spatialPointingPayload: {
      objectAr: 'مَسْجِدٌ كَبِيرٌ',
      distance: 'far',
      gender: 'masculine',
      correctAnswer: 'ذَلِكَ مَسْجِدٌ كَبِيرٌ',
      options: ['هَذَا مَسْجِدٌ كَبِيرٌ', 'ذَلِكَ مَسْجِدٌ كَبِيرٌ'],
      emoji: '🕌',
    },
  },

  // 14. Full Sentence Assembly (Demonstrative + Noun + Adjective)
  {
    id: 'l2-step-14-assembly-qamis',
    type: 'sentence_assembly',
    pageNumber: 22,
    titleEn: 'Sentence Construction',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ التَّامَّةِ',
    instructionEn: 'Assemble the full descriptive sentence in Arabic.',
    instructionBn: 'আরবীতে সম্পূর্ণ বাক্যটি সাজান।',
    itemId: 'v1_c2_haza_qamis_jadid',
    assemblyPayload: {
      promptEn: 'This is a new shirt',
      promptBn: 'ইহা একটি নতুন জামা',
      expectedAnswer: ['هَذَا', 'قَمِيصٌ', 'جَدِيدٌ'],
      chips: ['هَذَا', 'قَمِيصٌ', 'جَدِيدٌ', 'ذَلِكَ', 'نَظِيفٌ'],
      emoji: '👔',
    },
  },

  // 15. Cleanliness Attribute Cloze Assessment
  {
    id: 'l2-step-15-cloze-cleanliness',
    type: 'cloze_choice',
    pageNumber: 22,
    titleEn: 'Attribute Selection',
    titleAr: 'اخْتِيَارُ الصِّفَةِ الْمُنَاسِبَةِ',
    instructionEn: 'Choose the matching adjective for the clean mattress.',
    instructionBn: 'পরিচ্ছন্ন বিছানার জন্য উপযুক্ত গুণবাচক শব্দটি নির্বাচন করুন।',
    itemId: 'pattern:firash_nazif',
    clozePayload: {
      questionAr: 'هَذَا فِرَاشٌ ...',
      questionEn: 'This is a clean bed',
      questionBn: 'ইহা একটি পরিচ্ছন্ন বিছানা',
      partialAnswerAr: 'هَذَا فِرَاشٌ ...',
      correctAnswer: 'نَظِيفٌ',
      options: ['نَظِيفٌ', 'نَظِيفَةٌ', 'وَسِخٌ', 'وَسِخَةٌ'],
      emoji: '🛏️',
      distance: 'near',
    },
  },

  // 16. Fast Dialogic Mini-Game Battery (Exercise খ & ग oral synthesis)
  {
    id: 'l2-step-16-dialogue-battery',
    type: 'alternative_qa',
    pageNumber: 21,
    titleEn: 'Quality & Attribute Drill',
    titleAr: 'تَمْرِينُ الصِّفَاتِ الشَّفَهِيُّ',
    instructionEn: 'Listen to the alternative question and pick the correct attribute.',
    instructionBn: 'প্রশ্নটি শুনে সঠিক গুণবাচক শব্দটি নির্বাচন করুন।',
    alternativeQAPayload: {
      questions: [
        {
          id: 'q1',
          questionAr: 'أَ هَذَا مَسْجِدٌ كَبِيرٌ أَمْ صَغِيرٌ ؟',
          visualCue: '🕌',
          optionsAr: ['مَسْجِدٌ كَبِيرٌ', 'بَيْتٌ صَغِيرٌ'],
          correctAnswerAr: 'مَسْجِدٌ كَبِيرٌ',
        },
        {
          id: 'q2',
          questionAr: 'أَ هٰذَا فِرَاشٌ نَظِيفٌ أَمْ وَسِخٌ ؟',
          visualCue: '🛏️✨',
          optionsAr: ['فِرَاشٌ نَظِيفٌ', 'فِرَاشٌ وَسِخٌ'],
          correctAnswerAr: 'فِرَاشٌ نَظِيفٌ',
        },
        {
          id: 'q3',
          questionAr: 'أَ تِلْكَ حُجْرَةٌ صَغِيرَةٌ أَمْ كَبِيرَةٌ ؟',
          visualCue: '🚪',
          optionsAr: ['حُجْرَةٌ صَغِيرَةٌ', 'حُجْرَةٌ كَبِيرَةٌ'],
          correctAnswerAr: 'حُجْرَةٌ صَغِيرَةٌ',
        },
        {
          id: 'q4',
          questionAr: 'أَ ذٰلِكَ قُفْلٌ جَيِّدٌ أَمْ رَدِيءٌ ؟',
          visualCue: '🔒⭐',
          optionsAr: ['قُفْلٌ جَيِّدٌ', 'قُفْلٌ قَدِيمٌ'],
          correctAnswerAr: 'قُفْلٌ جَيِّدٌ',
        },
      ],
    },
  },

  // 17. Feminine Descriptive Sentence Assembly
  {
    id: 'l2-step-17-assembly-wisadah',
    type: 'sentence_assembly',
    pageNumber: 22,
    titleEn: 'Feminine Sentence Assembly',
    titleAr: 'تَرْكِيبُ جُمْلَةِ المُؤَنَّثِ المَوْصُوفَةِ',
    instructionEn: 'Assemble the sentence in Arabic.',
    instructionBn: 'আরবীতে বাক্যটি সাজান।',
    itemId: 'v1_c2_hazihi_wisadah_jamilah',
    assemblyPayload: {
      promptEn: 'This is a beautiful pillow',
      promptBn: 'ইহা একটি সুন্দর বালিশ',
      expectedAnswer: ['هَذِهِ', 'وِسَادَةٌ', 'جَمِيلَةٌ'],
      chips: ['هَذِهِ', 'وِسَادَةٌ', 'جَمِيلَةٌ', 'تِلْكَ', 'جَمِيلٌ'],
      emoji: '🛋️',
    },
  },

  // 18. Sacred Milestone: Quranic Pattern Echo (Surah Al-Ghashiyah 88:13-14)
  {
    id: 'l2-step-18-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 20,
    titleEn: 'Quranic Milestone',
    titleAr: 'الأَثَرُ القُرْآنِيُّ الْمُبَارَكُ',
    instructionEn: 'Witness the divine beauty of paired Mawsoof and Sifah in Surah Al-Ghashiyah.',
    instructionBn: 'সূরা আল-গাশিয়ায় মওসুফ ও সিফাতের সুষমামণ্ডিত রূপ প্রত্যক্ষ করুন।',
    echoPayload: {
      surahNumber: 88,
      ayahNumber: 13,
      surahNameAr: 'سُورَةُ الغَاشِيَةِ',
      surahNameEn: 'Al-Ghashiyah',
      arabicText: 'فِيهَا سُرُرٌ مَّرْفُوعَةٌ ۝ وَأَكْوَابٌ مَّوْضُوعَةٌ',
      translationEn: 'Within it are couches raised high, and cups put in place.',
      translationBn: 'তাতে রয়েছে সমুচ্চ আসনসমূহ, এবং সুবিন্যস্ত পানপাত্রসমূহ।',
      highlightedWords: ['سُرُرٌ', 'مَّرْفُوعَةٌ', 'أَكْوَابٌ', 'مَّوْضُوعَةٌ'],
      patternNameEn: 'Descriptive Phrase Pairing (مَوْصُوفٌ وَصِفَةٌ)',
      patternNameBn: 'মওসুফ ও সিফাতের যুগলবন্দী',
      lessonPatternAr: 'كِتَابٌ جَدِيدٌ / حُجْرَةٌ صَغِيرَةٌ',
      lessonPatternEn: 'A new book / A small room',
      lessonPatternBn: 'একটি নতুন বই / একটি ছোট কামরা',
      quranPatternAr: 'سُرُرٌ مَّرْفُوعَةٌ ۝ وَأَكْوَابٌ مَّوْضُوعَةٌ',
      quranPatternEn: 'Raised couches and placed cups',
      quranPatternBn: 'সমুচ্চ আসন এবং স্থাপিত পানপাত্র',
      reflection: 'In this lesson, you mastered how an Arabic adjective matches the noun it qualifies. In Surah Al-Ghashiyah, Allah paints the tranquil honor of Paradise through rhythmic descriptive pairs: «سُرُرٌ مَّرْفُوعَةٌ» (elevated couches) and «أَكْوَابٌ مَّوْضُوعَةٌ» (delicately set goblets), where each adjective elevates the majesty of the described noun.',
      audioKey: 'quran_088013',
    },
  },
];

export const LESSON_02_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 2,
  titleEn: 'Descriptive Qualities',
  titleAr: 'الصِّفَاتُ وَالمَوْصُوفُ',
  wordsLearned: [
    'جَدِيدٌ', 'قَدِيمٌ', 'جَمِيلٌ', 'كَبِيرٌ', 'صَغِيرٌ', 'جَيِّدٌ', 'نَظِيفٌ', 'وَسِخٌ',
    'عَلَمٌ', 'مِرْوَحَةٌ', 'حَدِيقَةٌ',
    'فِرَاشٌ', 'وِسَادَةٌ', 'قَمِيصٌ', 'قَلَنْسُوَةٌ',
    'لِبَاسٌ', 'عِمَامَةٌ', 'مِنْدِيلٌ', 'حِذَاءٌ',
  ],
  steps: LESSON_02_STEPS,
};

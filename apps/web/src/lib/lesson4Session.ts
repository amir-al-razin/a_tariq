// Lesson 4 Interactive Session Data (Directly mapped from Esho Arbi Shikhi Vol 1 Ch 1 Lesson 4, pages 27-31)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_04_STEPS: SessionStep[] = [
  // 1. Page 27: Sun vs Moon Letters Phonetics Drill (حُرُوفُ القَمَرِيَّةِ وَالشَّمْسِيَّةِ)
  {
    id: 'step-1-sun-moon',
    type: 'sun_moon_sort',
    pageNumber: 27,
    titleEn: 'Sun & Moon Letters',
    titleAr: 'الحُرُوفُ القَمَرِيَّةُ وَالشَّمْسِيَّةُ',
    instructionEn: 'Listen to the pronunciation: Is the "ل" pronounced clearly (Moon) or assimilated with Shaddah (Sun)?',
    instructionBn: 'উচ্চারণ শুনুন: লাম কি স্পষ্ট উচ্চারিত হচ্ছে (ক্বামারিয়্যাহ) নাকি পরবর্তী হরফে তাশদীদ দিয়ে মিশে গেছে (শামসিয়্যাহ)?',
    sunMoonPayload: {
      items: [
        {
          id: 'sm-kitab',
          wordAr: 'اَلْكِتَابُ',
          wordEn: 'The book',
          letter: 'ك',
          letterType: 'moon',
          pronunciationAr: 'اَلْكِتَابُ',
          romanized: 'al-kitābu',
          audioKey: 'al_kitab',
        },
        {
          id: 'sm-tilmidh',
          wordAr: 'اَلتِّلْمِيذُ',
          wordEn: 'The student',
          letter: 'ت',
          letterType: 'sun',
          pronunciationAr: 'اَتِّلْمِيذُ',
          romanized: 'at-tilmīdhu',
          audioKey: 'at_tilmidh',
        },
        {
          id: 'sm-qalam',
          wordAr: 'اَلْقَلَمُ',
          wordEn: 'The pen',
          letter: 'ق',
          letterType: 'moon',
          pronunciationAr: 'اَلْقَلَمُ',
          romanized: 'al-qalamu',
          audioKey: 'al_qalam',
        },
        {
          id: 'sm-rajul',
          wordAr: 'اَلرَّجُلُ',
          wordEn: 'The man',
          letter: 'ر',
          letterType: 'sun',
          pronunciationAr: 'اَرَّجُلُ',
          romanized: 'ar-rajulu',
          audioKey: 'ar_rajul',
        },
      ],
    },
  },

  // 2. Page 27: Active Recall Matching - Definite Nouns
  {
    id: 'step-2-pair-definite',
    type: 'speed_pair',
    pageNumber: 27,
    titleEn: 'Definite Noun Meaning',
    titleAr: 'مَعَانِي الأَسْمَاءِ المُعَرَّفَةِ',
    instructionEn: 'Match each definite Arabic noun to its English meaning',
    instructionBn: 'নির্দিষ্ট শব্দগুলোর অর্থ মিলিয়ে দিন',
    pairPayload: {
      pairs: [
        { id: 'p-kitab', ar: 'اَلْكِتَابُ', meaning: 'The book' },
        { id: 'p-qalam', ar: 'اَلْقَلَمُ', meaning: 'The pen' },
        { id: 'p-darrajah', ar: 'اَلدَّرَّاجَةُ', meaning: 'The bicycle' },
        { id: 'p-nafidhah', ar: 'اَلنَّافِذَةُ', meaning: 'The window' },
      ],
    },
  },

  // 3. Page 28: Concept Discovery - Definite Subject with Adjective Predicate
  {
    id: 'step-3-concept-predicate',
    type: 'concept_intro',
    pageNumber: 28,
    titleEn: 'From "A Book" to "The Book is New"',
    titleAr: 'تَحَوُّلُ المَعْنَى: الْمُبْتَدَأُ وَالخَبَرُ',
    instructionEn: 'Notice how adding "ال" turns an object into the subject of a complete statement',
    instructionBn: 'শব্দে "আল" যুক্ত হয়ে কীভাবে পূর্ণ বাক্যের সূচনা করে তা লক্ষ্য করুন।',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-kitab-jadid',
          ar: 'اَلْكِتَابُ جَدِيدٌ',
          romanized: 'al-kitābu jadīdun',
          meaningEn: 'The book is new',
          meaningBn: 'বইটি নতুন',
          descriptionEn: 'The subject has "ال" and ends in a single dammah; the descriptive predicate takes tanween.',
          exampleAr: 'اَلْكِتَابُ كَبِيرٌ',
          exampleEn: 'The book is big',
          exampleBn: 'বইটি বড়',
          audioKey: 'al_kitab_jadid',
          exampleAudioKey: 'اَلْكِتَابُ كَبِيرٌ',
        },
        {
          id: 'concept-madrasah-saghirah',
          ar: 'اَلْمَدْرَسَةُ صَغِيرَةٌ',
          romanized: 'al-madrasatu ṣaghīratun',
          meaningEn: 'The school is small',
          meaningBn: 'মাদ্রাসাটি ছোট',
          descriptionEn: 'Feminine subjects with ta marbutah take feminine predicates.',
          exampleAr: 'اَلْمَدْرَسَةُ جَمِيلَةٌ',
          exampleEn: 'The school is beautiful',
          exampleBn: 'মাদ্রাসাটি সুন্দর',
          audioKey: 'al_madrasah_saghirah',
          exampleAudioKey: 'اَلْمَدْرَسَةُ جَمِيلَةٌ',
        },
      ],
    },
  },

  // 4. Page 28: New Adjectives Priming
  {
    id: 'step-4-vocab-adjectives',
    type: 'vocab_prime',
    pageNumber: 28,
    titleEn: 'Descriptive Attributes',
    titleAr: 'صِفَاتٌ جَدِيدَةٌ',
    instructionEn: 'Listen and memorize the new paired adjectives',
    instructionBn: 'উচ্চারণ শুনুন এবং নতুন গুণবাচক শব্দগুলো লক্ষ্য করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c4_sharif', ar: 'شَرِيفٌ', en: 'Noble / Honorable', bn: 'ভদ্র / সম্মানিত', romanized: 'sharīfun', emoji: '🤝' },
        { id: 'v1_c4_mahir', ar: 'مَاهِرٌ', en: 'Skilled / Expert', bn: 'দক্ষ', romanized: 'māhirun', emoji: '🎯' },
        { id: 'v1_c4_maftuh', ar: 'مَفْتُوحٌ', en: 'Open', bn: 'খোলা', romanized: 'maftūḥun', emoji: '🚪' },
        { id: 'v1_c4_mughlaq', ar: 'مُغْلَقٌ', en: 'Closed', bn: 'বন্ধ', romanized: 'mughlaqun', emoji: '🔒' },
        { id: 'v1_c4_wasi', ar: 'وَاسِعٌ', en: 'Wide / Spacious', bn: 'প্রশস্ত', romanized: 'wāsi‘un', emoji: '🏟️' },
        { id: 'v1_c4_dayyiq', ar: 'ضَيِّقٌ', en: 'Narrow', bn: 'সংকীর্ণ', romanized: 'ḍayyiqun', emoji: '🪜' },
        { id: 'v1_c4_qawiyy', ar: 'قَوِيٌّ', en: 'Strong', bn: 'শক্তিশালী', romanized: 'qawiyyun', emoji: '💪' },
        { id: 'v1_c4_daif', ar: 'ضَعِيفٌ', en: 'Weak', bn: 'দুর্বল', romanized: 'ḍa‘īfun', emoji: '🪶' },
        { id: 'v1_c4_mujtahid', ar: 'مُجْتَهِدٌ', en: 'Hardworking / Diligent', bn: 'পরিশ্রমী', romanized: 'mujtahidun', emoji: '📚' },
        { id: 'v1_c4_mashhur', ar: 'مَشْهُورٌ', en: 'Famous', bn: 'প্রসিদ্ধ', romanized: 'mashhūrun', emoji: '⭐' },
      ],
    },
  },

  // 5. Page 28: Active Recall Matching - Antonym Pairs
  {
    id: 'step-5-pair-antonyms',
    type: 'speed_pair',
    pageNumber: 28,
    titleEn: 'Pair Matching',
    titleAr: 'الأَضْدَادُ وَالمَعَانِي',
    instructionEn: 'Match each Arabic attribute to its English meaning',
    instructionBn: 'শব্দার্থগুলো মিলিয়ে দিন',
    pairPayload: {
      pairs: [
        { id: 'p-maftuh', ar: 'مَفْتُوحٌ', meaning: 'Open' },
        { id: 'p-mughlaq', ar: 'مُغْلَقٌ', meaning: 'Closed' },
        { id: 'p-qawiyy', ar: 'قَوِيٌّ', meaning: 'Strong' },
        { id: 'p-daif', ar: 'ضَعِيفٌ', meaning: 'Weak' },
      ],
    },
  },

  // 6. Page 29: Special Morphology - The Woman (اِمْرَأَةٌ ➔ اَلْمَرْأَةُ)
  {
    id: 'step-6-concept-marah',
    type: 'concept_intro',
    pageNumber: 29,
    titleEn: 'Special Morphology: "The Woman"',
    titleAr: 'تَغْيِيرُ صِيغَةِ امْرَأَةٍ مَعَ أَلْ',
    instructionEn: 'Notice that when "ال" is added to "امْرَأَةٌ", it transforms into "اَلْمَرْأَةُ"',
    instructionBn: '"ইমরাআতুন" শব্দের শুরুতে "আল" যুক্ত হলে শব্দটি পরিবর্তিত হয়ে "আল-মারআতু" হয়।',
    conceptPayload: {
      concepts: [
        {
          id: 'concept-marah-rule',
          ar: 'اَلْمَرْأَةُ',
          romanized: 'al-mar’atu',
          meaningEn: 'The woman',
          meaningBn: 'স্ত্রীলোকটি',
          descriptionEn: 'The word "امْرَأَةٌ" changes irregularly to "اَلْمَرْأَةُ" when "ال" is prefixed.',
          exampleAr: 'اَلْمَرْأَةُ شَرِيفَةٌ',
          exampleEn: 'The woman is noble',
          exampleBn: 'স্ত্রীলোকটি ভদ্র',
          audioKey: 'al_marah',
          exampleAudioKey: 'al_marah_sharifah',
        },
      ],
    },
  },

  // 7. Page 29: Interrogative Dialogue with كَيْفَ ("How is...?")
  {
    id: 'step-7-cloze-kayfa',
    type: 'cloze_choice',
    pageNumber: 29,
    titleEn: 'Asking with "Kayfa" (كَيْفَ)',
    titleAr: 'السُّؤَالُ بِـ (كَيْفَ)',
    instructionEn: 'Complete the response to the condition question',
    instructionBn: 'অবস্থা বিষয়ক প্রশ্নটির উত্তর পূর্ণ করুন।',
    clozePayload: {
      questionAr: 'كَيْفَ السَّاعَةُ ؟',
      questionEn: 'How is the watch?',
      questionBn: 'ঘড়িটি কেমন?',
      partialAnswerAr: 'اَلسَّاعَةُ ...',
      correctAnswer: 'جَمِيلَةٌ',
      options: ['جَمِيلَةٌ', 'جَمِيلٌ', 'قَدِيمٌ'],
      emoji: '⌚',
    },
  },

  // 8. Page 29: Sentence Assembly - The Noble Woman
  {
    id: 'step-8-assembly-marah',
    type: 'sentence_assembly',
    pageNumber: 29,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "The woman is noble"',
    instructionBn: 'বাক্যটি সাজান: "স্ত্রীলোকটি ভদ্র"',
    assemblyPayload: {
      promptEn: 'The woman is noble',
      promptBn: 'স্ত্রীলোকটি ভদ্র',
      expectedAnswer: ['اَلْمَرْأَةُ', 'شَرِيفَةٌ'],
      chips: ['شَرِيفَةٌ', 'اَلرَّجُلُ', 'اَلْمَرْأَةُ', 'صَغِيرَةٌ'],
      emoji: '👩',
    },
  },

  // 9. Page 30: THE BRANCHING SYNTAX EQUATION (Textbook Diagram Recreation)
  {
    id: 'step-9-branching-diagram',
    type: 'branching_syntax',
    pageNumber: 30,
    titleEn: 'Syntax Discovery: "This is a book" vs "This book"',
    titleAr: 'مُعَادَلَةُ الإِشَارَةِ وَالتَّعْرِيفِ',
    instructionEn: 'Inspect the textbook diagram: See how adding "ال" changes a complete sentence into a demonstrative phrase',
    instructionBn: 'পাঠ্যবইয়ের নকশাটি লক্ষ্য করুন: "আল" যুক্ত হলে পূর্ণ বাক্য কীভাবে অপ্রসারিত বাক্যাংশে পরিণত হয়।',
    branchingPayload: {
      pointerAr: 'هَذَا',
      pointerEn: 'This',
      indefiniteNounAr: 'كِتَابٌ',
      indefiniteSentenceAr: 'هَذَا كِتَابٌ',
      indefiniteMeaningEn: 'This is a book',
      indefiniteMeaningBn: 'ইহা একটি বই',
      definiteNounAr: 'اَلْكِتَابُ',
      definiteNounBn: 'বইটি',
      definitePhraseAr: 'هَذَا الْكِتَابُ',
      definitePhraseMeaningEn: 'This book',
      definitePhraseMeaningBn: 'এই বইটি',
      predicateAdjectiveAr: 'جَمِيلٌ',
      completeSentenceAr: 'هَذَا الْكِتَابُ جَمِيلٌ',
      completeSentenceMeaningEn: 'This book is beautiful',
      completeSentenceMeaningBn: 'এই বইটি সুন্দর',
      audioKeySentence: 'haza_kitab',
      audioKeyPhrase: 'haza_al_kitab',
      audioKeyComplete: 'haza_al_kitab_jamil',
    },
  },

  // 10. Page 30: Sentence Assembly - Strong Wall
  {
    id: 'step-10-assembly-jidar-1',
    type: 'sentence_assembly',
    pageNumber: 30,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "This wall is strong"',
    instructionBn: 'বাক্যটি সাজান: "এই দেয়ালটি শক্তিশালী"',
    assemblyPayload: {
      promptEn: 'This wall is strong',
      promptBn: 'এই দেয়ালটি শক্তিশালী',
      expectedAnswer: ['هَذَا', 'الْجِدَارُ', 'قَوِيٌّ'],
      chips: ['الْجِدَارُ', 'قَوِيٌّ', 'هَذَا', 'ضَعِيفٌ'],
      emoji: '🧱',
    },
  },

  // 11. Page 30: Sentence Assembly - Weak Wall
  {
    id: 'step-11-assembly-jidar-2',
    type: 'sentence_assembly',
    pageNumber: 30,
    titleEn: 'Sentence Synthesis',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ',
    instructionEn: 'Assemble: "That wall is weak"',
    instructionBn: 'বাক্যটি সাজান: "ঐ দেয়ালটি দুর্বল"',
    assemblyPayload: {
      promptEn: 'That wall is weak',
      promptBn: 'ঐ দেয়ালটি দুর্বল',
      expectedAnswer: ['ذَلِكَ', 'الْجِدَارُ', 'ضَعِيفٌ'],
      chips: ['الْجِدَارُ', 'ذَلِكَ', 'قَوِيٌّ', 'ضَعِيفٌ'],
      emoji: '🧱',
    },
  },

  // 12. Page 30: Speed Pair Matching - Sentence vs Phrase Contrast
  {
    id: 'step-12-pair-syntax',
    type: 'speed_pair',
    pageNumber: 30,
    titleEn: 'Sentence vs Phrase Match',
    titleAr: 'تَمْيِيزُ الجُمْلَةِ عَنِ المُرَكَّبِ',
    instructionEn: 'Notice the difference in meaning between full sentences and phrases',
    instructionBn: 'পূর্ণ বাক্য ও বাক্যাংশের অর্থভেদ লক্ষ্য করে মিলিয়ে দিন',
    pairPayload: {
      pairs: [
        { id: 'p-s1', ar: 'هَذَا كِتَابٌ', meaning: 'This is a book' },
        { id: 'p-p1', ar: 'هَذَا الْكِتَابُ', meaning: 'This book' },
        { id: 'p-s2', ar: 'ذَلِكَ قَلَمٌ', meaning: 'That is a pen' },
        { id: 'p-p2', ar: 'ذَلِكَ الْقَلَمُ', meaning: 'That pen' },
      ],
    },
  },

  // 13. Page 31: Cloze Q&A with "كَيْفَ هَذَا الْكِتَابُ ؟"
  {
    id: 'step-13-cloze-mufid',
    type: 'cloze_choice',
    pageNumber: 31,
    titleEn: 'Dialogue Practice',
    titleAr: 'حِوَارٌ وَفَهْمٌ',
    instructionEn: 'Complete the response: "How is this book?"',
    instructionBn: 'প্রশ্নটির জবাব পূর্ণ করুন: "এই বইটি কেমন?"',
    clozePayload: {
      questionAr: 'كَيْفَ هَذَا الْكِتَابُ ؟',
      questionEn: 'How is this book?',
      questionBn: 'এই বইটি কেমন?',
      partialAnswerAr: 'هَذَا الْكِتَابُ ...',
      correctAnswer: 'مُفِيدٌ',
      options: ['مُفِيدٌ', 'مُفِيدَةٌ', 'قَدِيمَةٌ'],
      emoji: '📘',
    },
  },

  // 14. Page 31: Cloze Q&A - Character Identification
  {
    id: 'step-14-cloze-mahmud',
    type: 'cloze_choice',
    pageNumber: 31,
    titleEn: 'Dialogue Practice',
    titleAr: 'حِوَارٌ وَفَهْمٌ',
    instructionEn: 'Complete the response: "Who is this man?"',
    instructionBn: 'প্রশ্নটির জবাব পূর্ণ করুন: "এই লোকটি কে?"',
    clozePayload: {
      questionAr: 'مَنْ هَذَا الرَّجُلُ ؟',
      questionEn: 'Who is this man?',
      questionBn: 'এই লোকটি কে?',
      partialAnswerAr: 'هُوَ مَحْمُودٌ ، هُوَ تَاجِرٌ ...',
      correctAnswer: 'كَبِيرٌ',
      options: ['كَبِيرٌ', 'كَبِيرَةٌ', 'مُفِيدٌ'],
      emoji: '👨',
    },
  },

  // 15. Sacred Milestone: Quranic Echo (Surah Al-Baqarah 2:2)
  {
    id: 'step-15-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 31,
    titleEn: 'Quranic Milestone',
    titleAr: 'صَدَى القُرْآنِ الكَرِيمِ',
    instructionEn: 'Witness the foundational demonstrative formula with the definite noun in Surah Al-Baqarah',
    instructionBn: 'সূরা আল-বাকারায় নির্দিষ্ট শব্দের সাথে ইশারাসূচক শব্দের চিরন্তন ব্যবহার শ্রবণ করুন।',
    echoPayload: {
      surahNumber: 2,
      ayahNumber: 2,
      surahNameAr: 'سُورَةُ البَقَرَةِ',
      surahNameEn: 'Surah Al-Baqarah',
      arabicText: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
      translationEn: 'That Book, wherein is no doubt, a guidance to those conscious of Allah.',
      translationBn: 'ঐ কিতাব, এতে কোনো সন্দেহ নেই, মুত্তাকীদের জন্য পথনির্দেশক।',
      highlightedWords: ['ذَٰلِكَ', 'الْكِتَابُ'],
      reflection: 'In this lesson, you mastered the difference between "ذَلِكَ كِتَابٌ" (That is a book) and "ذَلِكَ الْكِتَابُ" (That Book). In the opening of Surah Al-Baqarah, Allah majestically uses "ذَٰلِكَ الْكِتَابُ" pointing to the eternal, exalted Quran with singular reverence.',
      audioKey: 'quran_002002',
    },
  },
];

export const LESSON_04_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 4,
  titleEn: 'Lesson 4: The Definite Article & Demonstrative Syntax',
  titleAr: 'الدَّرْسُ الرَّابِعُ: أَل التَّعْرِيفِ وَالتَّرْكِيبُ الإِشَارِيُّ',
  wordsLearned: [
    'اَلْكِتَابُ', 'اَلْقَلَمُ', 'اَلدَّرَّاجَةُ', 'اَلنَّافِذَةُ',
    'اَلْمِنْدِيلُ', 'اَلْوِسَادَةُ', 'اَلْمَرْأَةُ', 'اَلْجَمَلُ', 'اَلنَّاقَةُ',
    'شَرِيفٌ', 'مَاهِرٌ', 'مَفْتُوحٌ', 'مُغْلَقٌ',
    'وَاسِعٌ', 'ضَيِّقٌ', 'قَوِيٌّ', 'ضَعِيفٌ',
    'مُجْتَهِدٌ', 'مَشْهُورٌ', 'مُفِيدٌ',
  ],
  steps: LESSON_04_STEPS,
};

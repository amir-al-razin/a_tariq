// Chapter 2 Lesson 2 Interactive Session Data (Directly mapped from textbook Volume 1 Chapter 2 Lesson 2, pages 55-59)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const CH2_LESSON_02_STEPS: SessionStep[] = [
  // 1. Vocabulary Discovery: Food, Drinks & Nourishment
  {
    id: 'ch2-l2-step-1-vocab-food',
    type: 'vocab_prime',
    pageNumber: 55,
    titleEn: 'Food & Nourishment Vocabulary',
    titleAr: 'مُفْرَدَاتُ الأَطْعِمَةِ وَالأَشْرِبَةِ',
    instructionEn: 'Listen to and learn new classical Arabic nouns for food, dairy, and nourishment',
    instructionBn: 'খাদ্য ও পানীয় সংক্রান্ত আরবি শব্দগুলোর বিশুদ্ধ উচ্চারণ শুনুন ও অর্থ আয়ত্ত করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2l2_asal', ar: 'عَسَلٌ', en: 'Honey', bn: 'মধু', romanized: '‘asalun', emoji: '🍯' },
        { id: 'v1_c2l2_laban', ar: 'لَبَنٌ', en: 'Milk', bn: 'দুধ', romanized: 'labanun', emoji: '🥛' },
        { id: 'v1_c2l2_khubz', ar: 'خُبْزٌ', en: 'Bread', bn: 'রুটি', romanized: 'khubzun', emoji: '🍞' },
        { id: 'v1_c2l2_lahm', ar: 'لَحْمٌ', en: 'Meat', bn: 'গোশত / মাংস', romanized: 'laḥmun', emoji: '🥩' },
        { id: 'v1_c2l2_samakah', ar: 'سَمَكَةٌ', en: 'Fish', bn: 'একটি মাছ', romanized: 'samakatun', emoji: '🐟' },
        { id: 'v1_c2l2_baydah', ar: 'بَيْضَةٌ', en: 'Egg', bn: 'একটি ডিম', romanized: 'bayḍatun', emoji: '🥚' },
        { id: 'v1_c2l2_taam', ar: 'طَعَامٌ', en: 'Food / meal', bn: 'খাবার', romanized: 'ṭa‘āmun', emoji: '🍲' },
        { id: 'v1_c2l2_ma', ar: 'مَاءٌ', en: 'Water', bn: 'পানি', romanized: 'mā’un', emoji: '💧' },
      ],
    },
  },

  // 2. Speed Pairing: Food & Nourishment
  {
    id: 'ch2-l2-step-2-pair-food',
    type: 'speed_pair',
    pageNumber: 55,
    titleEn: 'Food Vocabulary Recall Drill',
    titleAr: 'مُطَابَقَةُ مُفْرَدَاتِ الطَّعَامِ',
    instructionEn: 'Match each food item with its meaning',
    instructionBn: 'খাদ্যদ্রব্যগুলোর সাথে সঠিক অর্থ মিলিয়ে নিন',
    pairPayload: {
      pairs: [
        { id: 'pf-asal', ar: 'عَسَلٌ', meaning: 'Honey' },
        { id: 'pf-laban', ar: 'لَبَنٌ', meaning: 'Milk' },
        { id: 'pf-khubz', ar: 'خُبْزٌ', meaning: 'Bread' },
        { id: 'pf-lahm', ar: 'لَحْمٌ', meaning: 'Meat' },
        { id: 'pf-samakah', ar: 'سَمَكَةٌ', meaning: 'Fish' },
      ],
    },
  },

  // 3. Vocabulary Discovery: Condition & Quality Adjectives
  {
    id: 'ch2-l2-step-3-vocab-condition-adjectives',
    type: 'vocab_prime',
    pageNumber: 55,
    titleEn: 'Condition & Quality Adjectives',
    titleAr: 'صِفَاتُ الحَالَةِ وَالجَوْدَةِ',
    instructionEn: 'Learn essential qualitative adjectives describing freshness, purity, and temperature',
    instructionBn: 'খাবারের তাজা বা বাসি হওয়া, খাঁটিত্ব ও তাপমাত্রা নির্দেশক বিশেষণগুলোর অর্থ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2l2_tazaj', ar: 'طَازَجٌ', en: 'Fresh', bn: 'তাজা / টাটকা', romanized: 'ṭāzajun', emoji: '🌿' },
        { id: 'v1_c2l2_bayit', ar: 'بَائِتٌ', en: 'Stale', bn: 'বাসি', romanized: 'bā’itun', emoji: '🥖' },
        { id: 'v1_c2l2_khalis', ar: 'خَالِصٌ', en: 'Pure', bn: 'খাঁটি / বিশুদ্ধ', romanized: 'khāliṣun', emoji: '✨' },
        { id: 'v1_c2l2_fasid', ar: 'فَاسِدٌ', en: 'Spoiled / rotten', bn: 'নষ্ট / পচা', romanized: 'fāsidun', emoji: '🥀' },
        { id: 'v1_c2l2_barid', ar: 'بَارِدٌ', en: 'Cold', bn: 'ঠান্ডা', romanized: 'bāridun', emoji: '❄️' },
        { id: 'v1_c2l2_harr', ar: 'حَارٌّ', en: 'Hot', bn: 'গরম', romanized: 'ḥārrun', emoji: '🔥' },
      ],
    },
  },

  // 4. Speed Pairing: Quality & Condition Opposites
  {
    id: 'ch2-l2-step-4-pair-condition',
    type: 'speed_pair',
    pageNumber: 55,
    titleEn: 'Qualitative Adjectives Recall Drill',
    titleAr: 'مُطَابَقَةُ صِفَاتِ الحَالَةِ',
    instructionEn: 'Match each condition adjective with its meaning',
    instructionBn: 'গুণবাচক শব্দগুলোর সাথে সঠিক অর্থ দ্রুত মিলিয়ে নিন',
    pairPayload: {
      pairs: [
        { id: 'pc-tazaj', ar: 'طَازَجٌ', meaning: 'Fresh' },
        { id: 'pc-bayit', ar: 'بَائِتٌ', meaning: 'Stale' },
        { id: 'pc-khalis', ar: 'خَالِصٌ', meaning: 'Pure' },
        { id: 'pc-fasid', ar: 'فَاسِدٌ', meaning: 'Spoiled / rotten' },
        { id: 'pc-barid', ar: 'بَارِدٌ', meaning: 'Cold' },
      ],
    },
  },

  // 5. Concept Discovery: Mawsoof & Sifah Gender Concord
  {
    id: 'ch2-l2-step-5-concept-mawsoof-sifah',
    type: 'concept_intro',
    pageNumber: 55,
    titleEn: 'Mawsoof & Sifah: Gender Concord',
    titleAr: 'تَطَابُقُ الصِّفَةِ وَالمَوْصُوفِ فِي التَّأْنِيثِ',
    instructionEn: 'Notice how the adjective (Sifah) strictly matches the gender of the noun it describes (Mawsoof)',
    instructionBn: 'লক্ষ্য করো: বিশেষ্য (মাওসূফ) স্ত্রীবাচক হলে বিশেষণটিও (সিফাত) তা-মরবূতাহ (ـة) যোগে স্ত্রীবাচক হয়।',
    conceptPayload: {
      concepts: [
        {
          id: 'cp-ms-honey',
          ar: 'عَسَلٌ خَالِصٌ',
          romanized: '‘asalun khāliṣun',
          meaningEn: 'Pure honey (Masculine noun ➔ Masculine adjective)',
          meaningBn: 'খাঁটি মধু (পুংলিঙ্গ মাওসূফ ও সিফাত)',
          exampleAr: 'هَذَا عَسَلٌ خَالِصٌ',
          exampleEn: 'This is pure honey.',
          exampleBn: 'এটি খাঁটি মধু।',
          audioKey: 'asalun_khalis',
          exampleAudioKey: 'hadha_asalun_khalis',
          emoji: '🍯',
          compound: {
            baseAr: 'عَسَلٌ',
            baseRom: '‘asalun',
            baseMeaningEn: 'Mawsoof (Noun): Honey',
            baseMeaningBn: 'মাওসূফ: মধু',
            baseAudioKey: 'asalun',
            operator: '+',
            particleAr: 'خَالِصٌ',
            particleEn: 'Sifah (Adjective): pure',
            resultAr: 'عَسَلٌ خَالِصٌ',
            resultRom: '‘asalun khāliṣun',
            resultMeaningEn: 'Descriptive Compound: Pure honey',
            resultMeaningBn: 'মুরাক্কাবে তাওসিফী: খাঁটি মধু',
            resultAudioKey: 'asalun_khalis',
            badge: 'Masculine Concord',
          },
        },
        {
          id: 'cp-ms-fish',
          ar: 'سَمَكَةٌ طَازَجَةٌ',
          romanized: 'samakatun ṭāzajatun',
          meaningEn: 'A fresh fish (Feminine noun ➔ Feminine adjective with ـة)',
          meaningBn: 'একটি তাজা মাছ (স্ত্রীলিঙ্গ মাওসূফ ও সিফাত)',
          exampleAr: 'هَذِهِ السَّمَكَةُ طَازَجَةٌ',
          exampleEn: 'This fish is fresh.',
          exampleBn: 'এই মাছটি তাজা।',
          audioKey: 'samakatun_tazajah',
          exampleAudioKey: 'hadhihi_as_samakatu_tazajah',
          emoji: '🐟',
          compound: {
            baseAr: 'سَمَكَةٌ',
            baseRom: 'samakatun',
            baseMeaningEn: 'Mawsoof (Feminine): A fish',
            baseMeaningBn: 'মাওসূফ: একটি মাছ',
            baseAudioKey: 'samakatun',
            operator: '+',
            particleAr: 'طَازَجَةٌ',
            particleEn: 'Sifah (Feminine): fresh',
            resultAr: 'سَمَكَةٌ طَازَجَةٌ',
            resultRom: 'samakatun ṭāzajatun',
            resultMeaningEn: 'Descriptive Compound: A fresh fish',
            resultMeaningBn: 'মুরাক্কাবে তাওসিফী: একটি তাজা মাছ',
            resultAudioKey: 'samakatun_tazajah',
            badge: 'Feminine Concord (ـة)',
          },
        },
      ],
    },
  },

  // 6. Vocabulary Discovery: Nature, Value & Spatial Nouns
  {
    id: 'ch2-l2-step-6-vocab-nature-objects',
    type: 'vocab_prime',
    pageNumber: 56,
    titleEn: 'Nature, Architecture & Value Nouns',
    titleAr: 'مُفْرَدَاتُ الطَّبِيعَةِ وَالعِمَارَةِ وَالقِيمَةِ',
    instructionEn: 'Listen to and learn new words for nature, architecture, and value attributes',
    instructionBn: 'প্রকৃতি, স্থাপত্য ও মূল্য নির্দেশক শব্দগুলোর উচ্চারণ শুনুন ও অর্থ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c2l2_ghusn', ar: 'غُصْنٌ', en: 'Branch', bn: 'একটি ডাল', romanized: 'ghuṣnun', emoji: '🌿' },
        { id: 'v1_c2l2_ghabah', ar: 'غَابَةٌ', en: 'Forest', bn: 'একটি বন', romanized: 'ghābatun', emoji: '🌲' },
        { id: 'v1_c2l2_jabal', ar: 'جَبَلٌ', en: 'Mountain', bn: 'একটি পাহাড়', romanized: 'jabalun', emoji: '⛰️' },
        { id: 'v1_c2l2_manarah', ar: 'مَنَارَةٌ', en: 'Minaret', bn: 'একটি মিনার', romanized: 'manāratun', emoji: '🕌' },
        { id: 'v1_c2l2_mimsahah', ar: 'مِمْسَحَةٌ', en: 'Doormat', bn: 'একটি পাপোশ', romanized: 'mimsaḥatun', emoji: '🚪' },
        { id: 'v1_c2l2_ulbah', ar: 'عُلْبَةٌ', en: 'Small box / can', bn: 'একটি কৌটা', romanized: '‘ulbatun', emoji: '🥫' },
        { id: 'v1_c2l2_ghalin', ar: 'غَالٍ', en: 'Precious / expensive', bn: 'দামী / মূল্যবান', romanized: 'ghālin', emoji: '💎' },
        { id: 'v1_c2l2_alin', ar: 'عَالٍ', en: 'High / lofty', bn: 'উঁচু', romanized: '‘ālin', emoji: '🏔️' },
      ],
    },
  },

  // 7. Speed Pairing: Nature & Adjectives
  {
    id: 'ch2-l2-step-7-pair-nature-objects',
    type: 'speed_pair',
    pageNumber: 56,
    titleEn: 'Nature & Value Recall Drill',
    titleAr: 'مُطَابَقَةُ أَلْفَاظِ الطَّبِيعَةِ وَالقِيمَةِ',
    instructionEn: 'Match each Arabic word with its meaning',
    instructionBn: 'শব্দগুলোর সাথে সঠিক অর্থ মিলিয়ে নিন',
    pairPayload: {
      pairs: [
        { id: 'pn-ghusn', ar: 'غُصْنٌ', meaning: 'Branch' },
        { id: 'pn-ghabah', ar: 'غَابَةٌ', meaning: 'Forest' },
        { id: 'pn-jabal', ar: 'جَبَلٌ', meaning: 'Mountain' },
        { id: 'pn-manarah', ar: 'مَنَارَةٌ', meaning: 'Minaret' },
        { id: 'pn-ghalin', ar: 'غَالٍ', meaning: 'Precious / expensive' },
      ],
    },
  },

  // 8. Dialogic Alternative Q&A Battery 1: Object Observation & Descriptive Verification (Page 58)
  {
    id: 'ch2-l2-step-8-alt-qa-attributes',
    type: 'alternative_qa',
    pageNumber: 58,
    titleEn: 'Dialogue Battery: Object Observation & Quality Verification',
    titleAr: 'حِوَارُ التَّحَقُّقِ مِنَ الأَوْصَافِ',
    instructionEn: 'Select the grammatically accurate answer verifying each object’s quality and condition',
    instructionBn: 'বস্তুর অবস্থা ও গুণ যাচাই বিষয়ক প্রতিটি প্রশ্নের ব্যাকরণগতভাবে সঠিক উত্তর নির্বাচন করুন',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c2l2-1',
          questionAr: 'هَلْ هَذَا قَلَمٌ جَيِّدٌ ؟ (🖊️✨)',
          optionsAr: ['نَعَمْ .. هَذَا قَلَمٌ جَيِّدٌ', 'نَعَمْ .. هَذِهِ قَلَمٌ جَيِّدَةٌ'],
          correctAnswerAr: 'نَعَمْ .. هَذَا قَلَمٌ جَيِّدٌ',
        },
        {
          id: 'qa-c2l2-2',
          questionAr: 'هَلْ ذَلِكَ مِفْتَاحٌ كَبِيرٌ ؟ (🗝️ - صَغِيرٌ)',
          optionsAr: ['لَا .. ذَلِكَ مِفْتَاحٌ صَغِيرٌ', 'لَا .. تِلْكَ مِفْتَاحٌ صَغِيرَةٌ'],
          correctAnswerAr: 'لَا .. ذَلِكَ مِفْتَاحٌ صَغِيرٌ',
        },
        {
          id: 'qa-c2l2-3',
          questionAr: 'هَلْ هَذِهِ شَجَرَةٌ ؟ (🌸)',
          optionsAr: ['لَا .. بَلْ هَذِهِ زَهْرَةٌ جَمِيلَةٌ', 'لَا .. بَلْ هَذَا زَهْرَةٌ جَمِيلٌ'],
          correctAnswerAr: 'لَا .. بَلْ هَذِهِ زَهْرَةٌ جَمِيلَةٌ',
        },
        {
          id: 'qa-c2l2-4',
          questionAr: 'هَلْ تِلْكَ سَمَكَةٌ طَازَجَةٌ ؟ (🐟✨)',
          optionsAr: ['نَعَمْ .. تِلْكَ سَمَكَةٌ طَازَجَةٌ', 'نَعَمْ .. ذَلِكَ سَمَكَةٌ طَازَجٌ'],
          correctAnswerAr: 'نَعَمْ .. تِلْكَ سَمَكَةٌ طَازَجَةٌ',
        },
        {
          id: 'qa-c2l2-5',
          questionAr: 'هَلْ هَذَا قُفْلٌ جَيِّدٌ ؟ (🔒✨)',
          optionsAr: ['نَعَمْ .. هَذَا قُفْلٌ جَيِّدٌ', 'نَعَمْ .. هَذِهِ قُفْلٌ جَيِّدَةٌ'],
          correctAnswerAr: 'نَعَمْ .. هَذَا قُفْلٌ جَيِّدٌ',
        },
      ],
    },
  },

  // 9. Sentence Assembly Drill 1: Pure Honey & Fresh Milk
  {
    id: 'ch2-l2-step-9-assembly-pure-honey',
    type: 'sentence_assembly',
    pageNumber: 55,
    titleEn: 'Sentence Building: Honey & Milk',
    titleAr: 'تَرْكِيبُ: هَذَا عَسَلٌ خَالِصٌ وَ لَبَنٌ طَازَجٌ',
    instructionEn: 'Assemble: "This is pure honey and fresh milk"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "এটি খাঁটি মধু এবং তাজা দুধ"',
    assemblyPayload: {
      promptEn: 'This is pure honey and fresh milk',
      promptBn: 'এটি খাঁটি মধু এবং তাজা দুধ',
      expectedAnswer: ['هَذَا', 'عَسَلٌ', 'خَالِصٌ', 'وَ', 'لَبَنٌ', 'طَازَجٌ'],
      chips: ['هَذَا', 'عَسَلٌ', 'خَالِصٌ', 'وَ', 'لَبَنٌ', 'طَازَجٌ', 'بَائِتٌ', 'فَاسِدٌ'],
      emoji: '🍯',
    },
  },

  // 10. Authentic Reading & Translation Drill: Cup with Cold Water
  {
    id: 'ch2-l2-step-10-assembly-cold-water',
    type: 'sentence_assembly',
    pageNumber: 56,
    titleEn: 'Textbook Translation: Cup with Cold Water',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: كُوبٌ فِيهِ مَاءٌ بَارِدٌ',
    instructionEn: 'Read the Arabic sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ সাজিয়ে তুলুন।',
    assemblyPayload: {
      promptAr: 'ذَلِكَ كُوبٌ كَبِيرٌ فِيهِ مَاءٌ بَارِدٌ',
      promptEn: 'That is a big cup in it is cold water',
      promptBn: 'ওটি একটি বড় গ্লাস তাতে রয়েছে ঠান্ডা পানি',
      expectedAnswer: ['That is a big cup', 'in it is', 'cold water'],
      chips: ['That is a big cup', 'in it is', 'cold water', 'hot tea', 'a small plate'],
      expectedAnswerBn: ['ওটি একটি বড় গ্লাস', 'তাতে রয়েছে', 'ঠান্ডা পানি'],
      chipsBn: ['ওটি একটি বড় গ্লাস', 'তাতে রয়েছে', 'ঠান্ডা পানি', 'গরম চা', 'একটি ছোট থালা'],
      emoji: '🥛',
    },
  },

  // 11. Sentence Assembly Drill 3: Lofty Minaret
  {
    id: 'ch2-l2-step-11-assembly-tall-minaret',
    type: 'sentence_assembly',
    pageNumber: 57,
    titleEn: 'Sentence Building: Lofty Minaret',
    titleAr: 'تَرْكِيبُ: تِلْكَ مَنَارَةٌ جَمِيلَةٌ وَ عَالِيَةٌ',
    instructionEn: 'Assemble: "That is a beautiful and lofty minaret"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "ওটি একটি সুন্দর এবং উঁচু মিনার"',
    assemblyPayload: {
      promptEn: 'That is a beautiful and lofty minaret',
      promptBn: 'ওটি একটি সুন্দর এবং উঁচু মিনার',
      expectedAnswer: ['تِلْكَ', 'مَنَارَةٌ', 'جَمِيلَةٌ', 'وَ', 'عَالِيَةٌ'],
      chips: ['تِلْكَ', 'مَنَارَةٌ', 'جَمِيلَةٌ', 'وَ', 'عَالِيَةٌ', 'عَالٍ', 'قَصِيرٌ'],
      emoji: '🕌',
    },
  },

  // 12. Dialogic Alternative Q&A Battery 2: Descriptive Alternative Choices (Page 59)
  {
    id: 'ch2-l2-step-12-alt-qa-advanced-choice',
    type: 'alternative_qa',
    pageNumber: 59,
    titleEn: 'Dialogue Battery: Descriptive Alternative Choices',
    titleAr: 'حِوَارُ الاِخْتِيَارِ التَّعْيِينِيِّ بَيْنَ الصِّفَاتِ',
    instructionEn: 'Select the precise descriptive answer specifying the real item without using yes or no',
    instructionBn: 'হ্যাঁ বা না ছাড়া সরাসরি সঠিক গুণবাচক উত্তরটি নির্বাচন করুন',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c2l2-6',
          questionAr: 'أَ مِفْتَاحٌ كَبِيرٌ هَذَا أَمْ مِفْتَاحٌ صَغِيرٌ ؟ (🗝️ - كَبِيرٌ)',
          optionsAr: ['مِفْتَاحٌ كَبِيرٌ', 'نَعَمْ'],
          correctAnswerAr: 'مِفْتَاحٌ كَبِيرٌ',
        },
        {
          id: 'qa-c2l2-7',
          questionAr: 'أَ مِفْتَاحٌ صَغِيرٌ هَذَا أَمْ مِفْتَاحٌ كَبِيرٌ ؟ (🗝️ - كَبِيرٌ)',
          optionsAr: ['مِفْتَاحٌ كَبِيرٌ', 'لَا'],
          correctAnswerAr: 'مِفْتَاحٌ كَبِيرٌ',
        },
        {
          id: 'qa-c2l2-8',
          questionAr: 'أَ مَاءٌ بَارِدٌ هَذَا أَمْ حَارٌّ ؟ (💧❄️)',
          optionsAr: ['مَاءٌ بَارِدٌ', 'نَعَمْ .. بَارِدٌ'],
          correctAnswerAr: 'مَاءٌ بَارِدٌ',
        },
        {
          id: 'qa-c2l2-9',
          questionAr: 'أَ عَسَلٌ خَالِصٌ هَذَا أَمْ فَاسِدٌ ؟ (🍯)',
          optionsAr: ['عَسَلٌ خَالِصٌ', 'لَا'],
          correctAnswerAr: 'عَسَلٌ خَالِصٌ',
        },
        {
          id: 'qa-c2l2-10',
          questionAr: 'أَ سَمَكَةٌ طَازَجَةٌ تِلْكَ أَمْ فَاسِدَةٌ ؟ (🐟✨)',
          optionsAr: ['سَمَكَةٌ طَازَجَةٌ', 'نَعَمْ'],
          correctAnswerAr: 'سَمَكَةٌ طَازَجَةٌ',
        },
      ],
    },
  },

  // 13. Authentic Reading & Translation Drill: Precious Necklace in Small Box
  {
    id: 'ch2-l2-step-13-assembly-precious-necklace',
    type: 'sentence_assembly',
    pageNumber: 57,
    titleEn: 'Textbook Translation: Precious Necklace',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: العِقْدُ فِي العُلْبَةِ الصَّغِيرَةِ',
    instructionEn: 'Read the Arabic sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ সাজিয়ে তুলুন।',
    assemblyPayload: {
      promptAr: 'هَذَا عِقْدٌ غَالٍ فِي عُلْبَةٍ صَغِيرَةٍ',
      promptEn: 'This is a precious necklace in a small box',
      promptBn: 'এটি একটি মূল্যবান হার একটি ছোট কৌটায়',
      expectedAnswer: ['This is a precious necklace', 'in', 'a small box'],
      chips: ['This is a precious necklace', 'in', 'a small box', 'a big room', 'a cheap ring'],
      expectedAnswerBn: ['এটি একটি মূল্যবান হার', 'একটি ছোট', 'কৌটায়'],
      chipsBn: ['এটি একটি মূল্যবান হার', 'একটি ছোট', 'কৌটায়', 'একটি বড় ঘরে', 'একটি সস্তা আংটি'],
      emoji: '📿',
    },
  },

  // 14. Authentic Reading & Translation Drill: Hot Food in Big Dish
  {
    id: 'ch2-l2-step-14-assembly-hot-food',
    type: 'sentence_assembly',
    pageNumber: 57,
    titleEn: 'Textbook Translation: Hot Food in Dish',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: الطَّعَامُ الحَارُّ فِي الصَّحْنِ',
    instructionEn: 'Read the Arabic sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ সাজিয়ে তুলুন।',
    assemblyPayload: {
      promptAr: 'ذَلِكَ طَعَامٌ حَارٌّ فِي صَحْنٍ كَبِيرٍ',
      promptEn: 'That is hot food in a big dish',
      promptBn: 'ওটি গরম খাবার একটি বড় থালায়',
      expectedAnswer: ['That is hot food', 'in', 'a big dish'],
      chips: ['That is hot food', 'in', 'a big dish', 'cold water', 'a small cup'],
      expectedAnswerBn: ['ওটি গরম খাবার', 'একটি বড়', 'থালায়'],
      chipsBn: ['ওটি গরম খাবার', 'একটি বড়', 'থালায়', 'ঠান্ডা পানি', 'একটি ছোট পাত্রে'],
      emoji: '🍲',
    },
  },

  // 15. Binary Polar Sort: Adjective Gender Agreement
  {
    id: 'ch2-l2-step-15-polar-adjective-gender',
    type: 'polar_sort',
    pageNumber: 55,
    titleEn: 'Adjective Concord: Spoiled Egg',
    titleAr: 'مُطَابَقَةُ تَأْنِيثِ الصِّفَةِ: بَيْضَةٌ',
    instructionEn: 'The word «بَيْضَةٌ» (egg) is feminine with Ta Marbutah. Choose the matching adjective form:',
    instructionBn: '«بَيْضَةٌ» শব্দটি তা-মরবূতাহ বিশিষ্ট স্ত্রীবাচক। এর সাথে সামঞ্জস্যপূর্ণ বিশেষণটি বেছে নিন:',
    polarPayload: {
      arabicSubject: 'بَيْضَةٌ',
      meaningEn: 'An egg (feminine)',
      meaningBn: 'একটি ডিম (স্ত্রীবাচক)',
      gender: 'feminine',
      correctAnswer: 'فَاسِدَةٌ',
      options: ['فَاسِدَةٌ', 'فَاسِدٌ'],
      emoji: '🥚',
    },
  },

  // 16. Sentence Assembly Drill 6: Doormat in Front of the Door
  {
    id: 'ch2-l2-step-16-assembly-doormat-door',
    type: 'sentence_assembly',
    pageNumber: 57,
    titleEn: 'Sentence Building: Doormat in Front of Door',
    titleAr: 'تَرْكِيبُ: الْمِمْسَحَةُ الجَدِيدَةُ أَمَامَ البَابِ',
    instructionEn: 'Assemble: "The new doormat is in front of the door"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "নতুন পাপোশটি দরজার সামনে"',
    assemblyPayload: {
      promptEn: 'The new doormat is in front of the door',
      promptBn: 'নতুন পাপোশটি দরজার সামনে',
      expectedAnswer: ['الْمِمْسَحَةُ', 'الْجَدِيدَةُ', 'أَمَامَ', 'الْبَابِ'],
      chips: ['الْمِمْسَحَةُ', 'الْجَدِيدَةُ', 'أَمَامَ', 'الْبَابِ', 'خَلْفَ', 'فَوْقَ'],
      emoji: '🚪',
    },
  },

  // 17. Syntactic Tarkib Dissector: Mawsoof & Sifah in Predication and Choice Questions
  {
    id: 'ch2-l2-step-17-tarkib-dissector',
    type: 'tarkib_dissector',
    pageNumber: 57,
    titleEn: 'Syntactic Tarkib Dissector: Mawsoof & Sifah',
    titleAr: 'التَّرْكِيبُ النَّحْوِيُّ: المَوْصُوفُ وَالصِّفَةُ فِي الجُمْلَةِ الاِسْمِيَّةِ',
    instructionEn: 'Dissect the syntactic constituents of the descriptive compound within nominal sentences and interrogative choice structures',
    instructionBn: 'বাক্যের মধ্যে মাওসূফ ও সিফাতের ব্যাকরণগত সংযোগ বিশ্লেষণ করুন',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-c2l2-s1',
          sentenceAr: 'هَذَا عَسَلٌ خَالِصٌ',
          sentenceTypeAr: 'جُمْلَةٌ اسْمِيَّةٌ (مُبْتَدَأٌ مَعَ مَوْصُوفٍ وَصِفَةٍ)',
          sentenceTypeEn: 'Nominal Sentence (Subject + Qualified Predicate)',
          sentenceTypeBn: 'নামবাচক বাক্য (মুবতাদা + মাওসূফ ও সিফাত খবর)',
          slots: [
            {
              roleAr: 'مُبْتَدَأٌ',
              roleEn: 'Subject Demonstrative (Mubtada)',
              roleBn: 'উদ্দেশ্য (মুবতাদা)',
              expectedWordAr: 'هَذَا',
            },
            {
              roleAr: 'خَبَرٌ وَمَوْصُوفٌ',
              roleEn: 'Predicate & Qualified Noun (Mawsoof)',
              roleBn: 'খবর ও বিশেষ্য (মাওসূফ)',
              expectedWordAr: 'عَسَلٌ',
            },
            {
              roleAr: 'صِفَةٌ',
              roleEn: 'Attribute / Adjective (Sifah)',
              roleBn: 'বিশেষণ (সিফাত)',
              expectedWordAr: 'خَالِصٌ',
            },
          ],
          availableWordsAr: ['خَالِصٌ', 'هَذَا', 'عَسَلٌ'],
        },
        {
          id: 'tarkib-c2l2-s2',
          sentenceAr: 'أَ مِفْتَاحٌ كَبِيرٌ هَذَا أَمْ مِفْتَاحٌ صَغِيرٌ ؟',
          sentenceTypeAr: 'جُمْلَةٌ اسْتِفْهَامِيَّةٌ خَاصَّةٌ بِالمُرَكَّبِ الوَصْفِيِّ',
          sentenceTypeEn: 'Alternative Interrogative (First Compound Focus + Subject + Conjunction + Second Compound)',
          sentenceTypeBn: 'বিকল্প প্রশ্নবোধক বাক্য (প্রথম গুণবাচক বিকল্প + মুবতাদা + আম + দ্বিতীয় গুণবাচক বিকল্প)',
          slots: [
            {
              roleAr: 'هَمْزَةُ الاِسْتِفْهَامِ',
              roleEn: 'Interrogative Hamzah',
              roleBn: 'প্রশ্নবোধক হামযাহ',
              expectedWordAr: 'أَ',
            },
            {
              roleAr: 'مَوْصُوفٌ مُقَدَّمٌ',
              roleEn: 'Fronted Qualified Noun (Mawsoof)',
              roleBn: 'অগ্রবর্তী মাওসূফ',
              expectedWordAr: 'مِفْتَاحٌ',
            },
            {
              roleAr: 'صِفَةٌ أُولَى',
              roleEn: 'First Adjective (Sifah)',
              roleBn: 'প্রথম সিফাত',
              expectedWordAr: 'كَبِيرٌ',
            },
            {
              roleAr: 'مُبْتَدَأٌ مُؤَخَّرٌ',
              roleEn: 'Delayed Subject (Mubtada)',
              roleBn: 'বিলম্বিত উদ্দেশ্য',
              expectedWordAr: 'هَذَا',
            },
            {
              roleAr: 'حَرْفُ عَطْفٍ مُعَادِلَةٌ',
              roleEn: 'Equaling Conjunction (Am)',
              roleBn: 'বিকল্প যোজক (আম)',
              expectedWordAr: 'أَمْ',
            },
          ],
          availableWordsAr: ['كَبِيرٌ', 'أَمْ', 'أَ', 'مِفْتَاحٌ', 'هَذَا'],
        },
      ],
    },
  },

  // 18. Sacred Milestone: Quranic Echo (Surah Muhammad 47:15)
  {
    id: 'ch2-l2-step-18-quranic-echo',
    type: 'quranic_echo',
    pageNumber: 57,
    titleEn: 'Sacred Reflection: Purified Honey in Paradise',
    titleAr: 'الأَثَرُ القُرْآنِيُّ: أَنْهَارٌ مِنْ عَسَلٍ مُصَفًّى',
    instructionEn: 'Witness the exact Mawsoof-Sifah concord qualifying the rivers of Paradise in Surah Muhammad (47:15)',
    instructionBn: 'সূরা মুহাম্মাদে জান্নাতের বর্ণনায় মাওসূফ ও সিফাতের নিখুঁত সমন্বয় উপলব্ধি করুন ও বিশুদ্ধ তেলাওয়াত শুনুন।',
    echoPayload: {
      surahNumber: 47,
      ayahNumber: 15,
      surahNameAr: 'مُحَمَّد',
      surahNameEn: 'Muhammad',
      arabicText: 'وَأَنْهَارٌ مِنْ عَسَلٍ مُصَفًّى',
      translationEn: '...and rivers of purified honey.',
      translationBn: '...এবং পরিশোধিত স্বচ্ছ মধুর ঝর্ণাধারা।',
      highlightedWords: ['عَسَلٍ', 'مُصَفًّى'],
      patternNameEn: 'Adjective-Noun Concordance (Mawsoof & Sifah)',
      patternNameBn: 'গুণ ও বিশেষ্যের পারস্পরিক মিল (মাওসূফ ও সিফাত)',
      lessonPatternAr: 'عَسَلٌ خَالِصٌ / طَعَامٌ طَازَجٌ',
      lessonPatternEn: 'Pure honey / Fresh food',
      lessonPatternBn: 'খাঁটি মধু / তাজা খাবার',
      quranPatternAr: 'عَسَلٍ مُصَفًّى',
      quranPatternEn: 'Purified honey (in genitive case)',
      quranPatternBn: 'পরিশোধিত মধু (মাজরুর অবস্থায়)',
      reflection: "An Arabic adjective (صِفَة) strictly follows its qualified noun (مَوْصُوف) in definiteness, gender, and grammatical case. In your lesson, «عَسَلٌ خَالِصٌ» matched in the nominative case. In Surah Muhammad, «عَسَلٍ مُصَفًّى» displays the exact same grammatical agreement in the genitive case after the preposition «مِنْ».",
      audioKey: 'quran_047015',
    },
  },
];

export const CH2_LESSON_02_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 2,
  lessonNum: 2,
  titleEn: 'Attributes & Noun Pairs',
  titleAr: 'الصِّفَةُ وَالمَوْصُوفُ',
  wordsLearned: [
    'عَسَلٌ',
    'لَبَنٌ',
    'خُبْزٌ',
    'لَحْمٌ',
    'سَمَكَةٌ',
    'بَيْضَةٌ',
    'طَعَامٌ',
    'مَاءٌ',
    'طَازَجٌ',
    'بَائِتٌ',
    'خَالِصٌ',
    'فَاسِدٌ',
    'بَارِدٌ',
    'حَارٌّ',
    'غُصْنٌ',
    'غَابَةٌ',
    'جَبَلٌ',
    'مَنَارَةٌ',
    'مِمْسَحَةٌ',
    'عُلْبَةٌ',
    'غَالٍ',
    'عَالٍ',
  ],
  steps: CH2_LESSON_02_STEPS,
};

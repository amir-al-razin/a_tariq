// Lesson 9 Interactive Session Data (Directly mapped from textbook Volume 1 Chapter 1 Lesson 9, pages 45-47)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const LESSON_09_STEPS: SessionStep[] = [
  // 1. Vocabulary Discovery: Travel, Motion & Airport
  {
    id: 'step-1-vocab-travel',
    type: 'vocab_prime',
    pageNumber: 45,
    titleEn: 'Travel & Motion Vocabulary',
    titleAr: 'مُفْرَدَاتُ السَّفَرِ وَالحَرَكَةِ',
    instructionEn: 'Listen to and learn new words for travel, speed, and aviation',
    instructionBn: 'ভ্রমণ, গতি ও বিমান সংক্রান্ত নতুন শব্দগুলোর উচ্চারণ শুনুন ও অর্থ আয়ত্ত করুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c9_asimah', ar: 'عَاصِمَةٌ', en: 'Capital city', bn: 'একটি রাজধানী', romanized: '‘āṣimatun', emoji: '🏛️' },
        { id: 'v1_c9_tairah', ar: 'طَائِرَةٌ', en: 'Airplane', bn: 'একটি উড়োজাহাজ / বিমান', romanized: 'ṭā’iratun', emoji: '✈️' },
        { id: 'v1_c9_matar', ar: 'مَطَارٌ', en: 'Airport', bn: 'একটি বিমানবন্দর', romanized: 'maṭārun', emoji: '🛫' },
        { id: 'v1_c9_sari', ar: 'سَرِيعٌ', en: 'Fast / speedy', bn: 'দ্রুতগামী', romanized: 'sarī‘un', emoji: '⚡' },
        { id: 'v1_c9_bati', ar: 'بَطِيءٌ', en: 'Slow', bn: 'ধীরগামী', romanized: 'baṭī’un', emoji: '🐢' },
      ],
    },
  },

  // 2. Speed Pairing: Travel & Motion
  {
    id: 'step-2-pair-travel',
    type: 'speed_pair',
    pageNumber: 45,
    titleEn: 'Travel Vocabulary Recall',
    titleAr: 'مُطَابَقَةُ كَلِمَاتِ السَّفَرِ',
    instructionEn: 'Match each travel word with its English meaning',
    instructionBn: 'শব্দগুলোর সাথে সঠিক অর্থ মিলিয়ে নিন',
    pairPayload: {
      pairs: [
        { id: 'pt-asimah', ar: 'عَاصِمَةٌ', meaning: 'Capital city' },
        { id: 'pt-tairah', ar: 'طَائِرَةٌ', meaning: 'Airplane' },
        { id: 'pt-matar', ar: 'مَطَارٌ', meaning: 'Airport' },
        { id: 'pt-sari', ar: 'سَرِيعٌ', meaning: 'Fast / speedy' },
        { id: 'pt-bati', ar: 'بَطِيءٌ', meaning: 'Slow' },
      ],
    },
  },

  // 3. Vocabulary Discovery: Nature, Objects & Play
  {
    id: 'step-3-vocab-daily-objects',
    type: 'vocab_prime',
    pageNumber: 45,
    titleEn: 'Nature, Objects & Sports Vocabulary',
    titleAr: 'مُفْرَدَاتُ الطَّبِيعَةِ وَالأَشْيَاءِ وَالرِّيَاضَةِ',
    instructionEn: 'Learn new nouns for fruit, flowers, games, and daily objects',
    instructionBn: 'ফল, ফুল, খেলাধুলা ও নিত্যপ্রয়োজনীয় জিনিসপত্রের শব্দগুলোর অর্থ ও উচ্চারণ জানুন।',
    vocabPayload: {
      words: [
        { id: 'v1_c9_fakihah', ar: 'فَاكِهَةٌ', en: 'Fruit', bn: 'একটি ফল', romanized: 'fākihatun', emoji: '🍎' },
        { id: 'v1_c9_ladhidh', ar: 'لَذِيذٌ', en: 'Delicious', bn: 'সুস্বাদু / মজাদার', romanized: 'ladhīdhun', emoji: '😋' },
        { id: 'v1_c9_wardah', ar: 'وَرْدَةٌ', en: 'Rose', bn: 'একটি গোলাপ', romanized: 'wardatun', emoji: '🌹' },
        { id: 'v1_c9_mindadah', ar: 'مِنْضَدَةٌ', en: 'Small table / teapoy', bn: 'একটি ছোট টেবিল / তেপায়া', romanized: 'minḍadatun', emoji: '🪵' },
        { id: 'v1_c9_yad', ar: 'يَدٌ', en: 'Hand', bn: 'একটি হাত', romanized: 'yadun', emoji: '✋' },
        { id: 'v1_c9_kurah', ar: 'كُرَةٌ', en: 'Ball', bn: 'একটি বল', romanized: 'kuratun', emoji: '⚽' },
        { id: 'v1_c9_laib', ar: 'لَاعِبٌ', en: 'Player (male)', bn: 'একজন পুরুষ খেলোয়াড়', romanized: 'lā‘ibun', emoji: '🏃' },
        { id: 'v1_c9_laibah', ar: 'لَاعِبَةٌ', en: 'Player (female)', bn: 'একজন মহিলা খেলোয়াড়', romanized: 'lā‘ibatun', emoji: '🏃‍♀️' },
      ],
    },
  },

  // 4. Speed Pairing: Nature & Daily Objects
  {
    id: 'step-4-pair-daily-objects',
    type: 'speed_pair',
    pageNumber: 46,
    titleEn: 'Objects & Food Recall Drill',
    titleAr: 'تَطْبِيقُ كَلِمَاتِ الحَيَاةِ',
    instructionEn: 'Match each Arabic noun with its meaning',
    instructionBn: 'শব্দগুলোর সাথে সঠিক অর্থ মিলিয়ে নিন',
    pairPayload: {
      pairs: [
        { id: 'pd-fakihah', ar: 'فَاكِهَةٌ', meaning: 'Fruit' },
        { id: 'pd-ladhidh', ar: 'لَذِيذٌ', meaning: 'Delicious' },
        { id: 'pd-wardah', ar: 'وَرْدَةٌ', meaning: 'Rose' },
        { id: 'pd-mindadah', ar: 'مِنْضَدَةٌ', meaning: 'Small table / teapoy' },
        { id: 'pd-kurah', ar: 'كُرَةٌ', meaning: 'Ball' },
      ],
    },
  },

  // 5. Concept Discovery: Synthesis of Compound Sentence Structures
  {
    id: 'step-5-concept-complex-sentences',
    type: 'concept_intro',
    pageNumber: 45,
    titleEn: 'Syntactic Synthesis: Combining Structures',
    titleAr: 'تَرْكِيبُ الجُمَلِ المُرَكَّبَةِ',
    instructionEn: 'Observe how Idafah, adjectives, and prepositions combine seamlessly in Arabic sentences',
    instructionBn: 'লক্ষ্য করো: কীভাবে ইজাফাত, সিফাত ও হরফে জর একসাথে যুক্ত হয়ে সমৃদ্ধ বাক্য গঠন করে',
    conceptPayload: {
      concepts: [
        {
          id: 'cp-comb-door',
          ar: 'بَابُ الْمَسْجِدِ مَفْتُوحٌ',
          romanized: 'bābu al-masjidi maftūḥun',
          meaningEn: 'The door of the mosque is open',
          meaningBn: 'মসজিদের দরজাটি খোলা।',
          exampleAr: 'هَذَا الْمَسْجِدُ جَدِيدٌ وَ بَابُ الْمَسْجِدِ مَفْتُوحٌ',
          exampleEn: 'This mosque is new and the door of the mosque is open.',
          exampleBn: 'এই মসজিদটি নতুন এবং মসজিদের দরজাটি খোলা।',
          audioKey: 'babu_al_masjid_maftuh',
          exampleAudioKey: 'hadha_al_masjidu_jadid_wa_babu_al_masjid_maftuh',
          emoji: '🚪',
          compound: {
            baseAr: 'بَابُ الْمَسْجِدِ',
            baseRom: 'bābu al-masjidi',
            baseMeaningEn: 'Possessive (Idafah): The door of the mosque',
            baseMeaningBn: 'ইজাফাত: মসজিদের দরজাটি',
            baseAudioKey: 'babu_al_masjidi',
            operator: '+',
            particleAr: 'مَفْتُوحٌ',
            particleEn: 'Predicate: is open',
            resultAr: 'بَابُ الْمَسْجِدِ مَفْتُوحٌ',
            resultRom: 'bābu al-masjidi maftūḥun',
            resultMeaningEn: 'Complete Sentence: The door of the mosque is open',
            resultMeaningBn: 'পূর্ণ বাক্য: মসজিদের দরজাটি খোলা',
            resultAudioKey: 'babu_al_masjid_maftuh',
            badge: 'Idafah Subject + Predicate',
          },
        },
        {
          id: 'cp-comb-airport',
          ar: 'فِي مَطَارِ الْعَاصِمَةِ طَائِرَةٌ كَبِيرَةٌ',
          romanized: 'fī maṭāri al-ʿāṣimati ṭāʾiratun kabīratun',
          meaningEn: 'In the capital airport is a big airplane',
          meaningBn: 'রাজধানীর বিমানবন্দরে একটি বড় উড়োজাহাজ আছে।',
          exampleAr: 'هَذِهِ الطَّائِرَةُ سَرِيعَةٌ جِدًّا',
          exampleEn: 'This airplane is very fast.',
          exampleBn: 'এই উড়োজাহাজটি খুব দ্রুতগামী।',
          audioKey: 'fi_matari_al_asimati_tairah_kabirah',
          exampleAudioKey: 'hadhihi_at_tairatu_sariatun_jiddan',
          emoji: '✈️',
          compound: {
            baseAr: 'فِي مَطَارِ الْعَاصِمَةِ',
            baseRom: 'fī maṭāri al-ʿāṣimati',
            baseMeaningEn: 'Preposition + Idafah: In the capital airport',
            baseMeaningBn: 'জার-মাজরুর ও ইজাফাত: রাজধানীর বিমানবন্দরে',
            baseAudioKey: 'fi_matari_al_asimati',
            operator: '+',
            particleAr: 'طَائِرَةٌ كَبِيرَةٌ',
            particleEn: 'Subject + Adjective: a big airplane',
            resultAr: 'فِي مَطَارِ الْعَاصِمَةِ طَائِرَةٌ كَبِيرَةٌ',
            resultRom: 'fī maṭāri al-ʿāṣimati ṭāʾiratun kabīratun',
            resultMeaningEn: 'In the capital airport is a big airplane',
            resultMeaningBn: 'রাজধানীর বিমানবন্দরে একটি বড় উড়োজাহাজ আছে',
            resultAudioKey: 'fi_matari_al_asimati_tairah_kabirah',
            badge: 'Fronted Idafah Clause',
          },
        },
      ],
    },
  },

  // 6. Sentence Assembly Drill 1: Rashid & Brother at Mosque
  {
    id: 'step-6-assembly-mosque-community',
    type: 'sentence_assembly',
    pageNumber: 45,
    titleEn: 'Sentence Building: Mosque & Community',
    titleAr: 'تَرْكِيبُ: رَاشِدٌ أَمَامَ المَسْجِدِ وَ أَخُوهُ فِي المَسْجِدِ',
    instructionEn: 'Assemble: "Rashid is in front of the mosque and his brother is in the mosque"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "রাশেদ মসজিদের সামনে এবং তার ভাই মসজিদে"',
    assemblyPayload: {
      promptEn: 'Rashid is in front of the mosque and his brother is in the mosque',
      promptBn: 'রাশেদ মসজিদের সামনে এবং তার ভাই মসজিদে',
      expectedAnswer: ['رَاشِدٌ', 'أَمَامَ', 'الْمَسْجِدِ', 'وَ', 'أَخُوهُ', 'فِي', 'الْمَسْجِدِ'],
      chips: ['رَاشِدٌ', 'أَمَامَ', 'الْمَسْجِدِ', 'وَ', 'أَخُوهُ', 'فِي', 'الْمَسْجِدِ', 'خَلْفَ', 'الْبَابِ'],
      emoji: '🕌',
    },
  },

  // 7. Sentence Assembly Drill 2: Teacher and Imam
  {
    id: 'step-7-assembly-father-rashid',
    type: 'sentence_assembly',
    pageNumber: 45,
    titleEn: 'Sentence Building: Teacher & Imam',
    titleAr: 'تَرْكِيبُ: أَنَا مُعَلِّمُ المَدْرَسَةِ وَ وَلَدِي إِمَامُ المَسْجِدِ',
    instructionEn: 'Assemble: "I am the teacher of the school and my son is the imam of the mosque"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "আমি মাদরাসার শিক্ষক এবং আমার ছেলে মসজিদের ইমাম"',
    assemblyPayload: {
      promptEn: 'I am the teacher of the school and my son is the imam of the mosque',
      promptBn: 'আমি মাদরাসার শিক্ষক এবং আমার ছেলে মসজিদের ইমাম',
      expectedAnswer: ['أَنَا', 'مُعَلِّمُ', 'الْمَدْرَسَةِ', 'وَ', 'وَلَدِي', 'إِمَامُ', 'الْمَسْجِدِ'],
      chips: ['أَنَا', 'مُعَلِّمُ', 'الْمَدْرَسَةِ', 'وَ', 'وَلَدِي', 'إِمَامُ', 'الْمَسْجِدِ', 'عَالِمٌ'],
      emoji: '👨‍🏫',
    },
  },

  // 8. Dialogic Alternative Q&A Battery 1 (Mosque, Imam & Rashid)
  {
    id: 'step-8-alt-qa-mosque-battery',
    type: 'alternative_qa',
    pageNumber: 47,
    titleEn: 'Dialogue Battery: Mosque & Rashid’s Family',
    titleAr: 'حِوَارُ المَسْجِدِ وَأُسْرَةِ رَاشِدٍ',
    instructionEn: 'Select the authentic response for each inquiry about Rashid and the mosque',
    instructionBn: 'মসজিদ ও রাশেদের পরিবার সংক্রান্ত প্রতিটি প্রশ্নের সঠিক উত্তর নির্বাচন করুন',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c9-1',
          questionAr: 'مَنْ أَمَامَ الْمَسْجِدِ وَ مَنْ فِي الْمَسْجِدِ ؟',
          optionsAr: [
            'رَاشِدٌ أَمَامَ الْمَسْجِدِ وَ أَخُوهُ فِي الْمَسْجِدِ',
            'الْمُعَلِّمُ أَمَامَ الْمَسْجِدِ وَ الْوَلَدُ فِي الْبَيْتِ',
          ],
          correctAnswerAr: 'رَاشِدٌ أَمَامَ الْمَسْجِدِ وَ أَخُوهُ فِي الْمَسْجِدِ',
        },
        {
          id: 'qa-c9-2',
          questionAr: 'كَيْفَ هَذَا الْمَسْجِدُ ؟',
          optionsAr: ['هَذَا الْمَسْجِدُ جَدِيدٌ وَ جَمِيلٌ', 'هَذَا الْمَسْجِدُ جَدِيدَةٌ وَ جَمِيلَةٌ'],
          correctAnswerAr: 'هَذَا الْمَسْجِدُ جَدِيدٌ وَ جَمِيلٌ',
        },
        {
          id: 'qa-c9-3',
          questionAr: 'هَلْ بَابُ الْمَسْجِدِ مَفْتُوحٌ ؟',
          optionsAr: ['نَعَمْ .. بَابُ الْمَسْجِدِ مَفْتُوحٌ', 'نَعَمْ .. بَابُ الْمَسْجِدِ مَفْتُوحَةٌ'],
          correctAnswerAr: 'نَعَمْ .. بَابُ الْمَسْجِدِ مَفْتُوحٌ',
        },
        {
          id: 'qa-c9-4',
          questionAr: 'هَلْ أَبُو رَاشِدٍ مُعَلِّمُ الْمَدْرَسَةِ ؟',
          optionsAr: ['نَعَمْ .. أَبُوهُ مُعَلِّمُ الْمَدْرَسَةِ', 'نَعَمْ .. أَبَاهُ مُعَلِّمُ الْمَدْرَسَةِ'],
          correctAnswerAr: 'نَعَمْ .. أَبُوهُ مُعَلِّمُ الْمَدْرَسَةِ',
        },
        {
          id: 'qa-c9-5',
          questionAr: 'مَا اسْمُ الْكِتَابِ، وَ أَيْنَ الْكِتَابُ ؟',
          optionsAr: [
            'اسْمُ الْكِتَابِ نُورُ الإِسْلَامِ وَ هُوَ فِي غُرْفَتِهِ',
            'اسْمُ الْكِتَابِ الْقُرْآنُ وَ هُوَ فِي الْمَسْجِدِ',
          ],
          correctAnswerAr: 'اسْمُ الْكِتَابِ نُورُ الإِسْلَامِ وَ هُوَ فِي غُرْفَتِهِ',
        },
      ],
    },
  },

  // 9. Page 46: Authentic Reading & Translation Drill 1: Capital Airport
  {
    id: 'step-9-assembly-capital-airport',
    type: 'sentence_assembly',
    pageNumber: 46,
    titleEn: 'Textbook Translation: Capital Airport',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: مَطَارُ العَاصِمَةِ',
    instructionEn: 'Read the Arabic sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'فِي مَطَارِ الْعَاصِمَةِ طَائِرَةٌ كَبِيرَةٌ',
      promptEn: 'In the capital airport there is a big airplane',
      promptBn: 'রাজধানীর বিমানবন্দরে একটি বড় উড়োজাহাজ আছে',
      expectedAnswer: ['In the capital airport', 'is', 'a big airplane'],
      chips: ['In the capital airport', 'is', 'a big airplane', 'a fast car', 'in the city'],
      expectedAnswerBn: ['রাজধানীর বিমানবন্দরে', 'একটি', 'বড় উড়োজাহাজ আছে'],
      chipsBn: ['রাজধানীর বিমানবন্দরে', 'একটি', 'বড় উড়োজাহাজ আছে', 'দ্রুতগামী গাড়ি', 'শহরে'],
      emoji: '✈️',
    },
  },

  // 10. Page 46: Authentic Reading & Translation Drill 2: Airplane Speed
  {
    id: 'step-10-assembly-plane-speed',
    type: 'sentence_assembly',
    pageNumber: 46,
    titleEn: 'Textbook Translation: Fast Airplane',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: الطَّائِرَةُ السَّرِيعَةُ',
    instructionEn: 'Read the Arabic sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'هَذِهِ الطَّائِرَةُ سَرِيعَةٌ جِدًّا',
      promptEn: 'This airplane is very fast',
      promptBn: 'এই উড়োজাহাজটি খুব দ্রুতগামী',
      expectedAnswer: ['This airplane', 'is', 'very fast'],
      chips: ['This airplane', 'is', 'very fast', 'slow', 'very old'],
      expectedAnswerBn: ['এই উড়োজাহাজটি', 'খুব', 'দ্রুতগামী'],
      chipsBn: ['এই উড়োজাহাজটি', 'খুব', 'দ্রুতগামী', 'ধীরগতির', 'অনেক পুরনো'],
      emoji: '⚡',
    },
  },

  // 11. Dialogic Alternative Q&A Battery 2 (Airport & Aisha’s Items)
  {
    id: 'step-11-alt-qa-airport-battery',
    type: 'alternative_qa',
    pageNumber: 47,
    titleEn: 'Dialogue Battery: Airport & Aisha’s Possessions',
    titleAr: 'حِوَارُ المَطَارِ وَمُقْتَنَيَاتِ عَائِشَةَ',
    instructionEn: 'Select the authentic response for inquiries regarding the airport and Aisha’s items',
    instructionBn: 'বিমানবন্দর ও আয়েশার জিনিসপত্র সংক্রান্ত প্রশ্নগুলোর সঠিক উত্তর দিন',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c9-6',
          questionAr: 'مَاذَا فِي مَطَارِ الْعَاصِمَةِ ؟',
          optionsAr: ['فِي مَطَارِ الْعَاصِمَةِ طَائِرَةٌ كَبِيرَةٌ', 'فِي الْمَطَارِ سَيَّارَةٌ صَغِيرَةٌ'],
          correctAnswerAr: 'فِي مَطَارِ الْعَاصِمَةِ طَائِرَةٌ كَبِيرَةٌ',
        },
        {
          id: 'qa-c9-7',
          questionAr: 'هَلِ الطَّائِرَةُ كَبِيرَةٌ وَ سَرِيعَةٌ ؟',
          optionsAr: ['نَعَمْ .. الطَّائِرَةُ كَبِيرَةٌ وَ سَرِيعَةٌ جِدًّا', 'لَا .. بَلْ هِيَ بَطِيئَةٌ'],
          correctAnswerAr: 'نَعَمْ .. الطَّائِرَةُ كَبِيرَةٌ وَ سَرِيعَةٌ جِدًّا',
        },
        {
          id: 'qa-c9-8',
          questionAr: 'كَيْفَ سَاعَةُ عَائِشَةَ وَ كَيْفَ عِقْدُهَا ؟',
          optionsAr: ['سَاعَتُهَا جَمِيلَةٌ وَ عِقْدُهَا جَمِيلٌ', 'سَاعَتُهَا قَدِيمَةٌ وَ عِقْدُهَا صَغِيرٌ'],
          correctAnswerAr: 'سَاعَتُهَا جَمِيلَةٌ وَ عِقْدُهَا جَمِيلٌ',
        },
        {
          id: 'qa-c9-9',
          questionAr: 'أَيْنَ سَاعَتُهَا وَ أَيْنَ عِقْدُهَا ؟',
          optionsAr: [
            'عِقْدُهَا فِي صُنْدُوقِهَا وَ سَاعَتُهَا فَوْقَ الْمِنْضَدَةِ',
            'عِقْدُهَا فِي حَقِيبَتِهَا وَ سَاعَتُهَا فِي يَدِهَا',
          ],
          correctAnswerAr: 'عِقْدُهَا فِي صُنْدُوقِهَا وَ سَاعَتُهَا فَوْقَ الْمِنْضَدَةِ',
        },
      ],
    },
  },

  // 12. Page 46: Authentic Reading & Translation Drill 3: Book in Zainab’s Hand
  {
    id: 'step-12-assembly-zainab-book',
    type: 'sentence_assembly',
    pageNumber: 46,
    titleEn: 'Textbook Translation: Zainab’s Book',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: كِتَابٌ فِي يَدِ زَيْنَبَ',
    instructionEn: 'Read the sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'فِي يَدِ زَيْنَبَ كِتَابٌ جَمِيلٌ',
      promptEn: 'In Zainab’s hand is a beautiful book',
      promptBn: 'যয়নবের হাতে একটি সুন্দর বই আছে',
      expectedAnswer: ['In Zainab’s hand', 'is', 'a beautiful book'],
      chips: ['In Zainab’s hand', 'is', 'a beautiful book', 'a clean handkerchief', 'in her bag'],
      expectedAnswerBn: ['যয়নবের হাতে', 'একটি', 'সুন্দর বই আছে'],
      chipsBn: ['যয়নবের হাতে', 'একটি', 'সুন্দর বই আছে', 'পরিষ্কার রুমাল', 'তার ব্যাগে'],
      emoji: '📖',
    },
  },

  // 13. Page 46: Authentic Reading & Translation Drill 4: Bashir’s Garden
  {
    id: 'step-13-assembly-bashir-garden',
    type: 'sentence_assembly',
    pageNumber: 46,
    titleEn: 'Textbook Translation: Bashir’s Garden',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: حَدِيقَةُ بَشِيرٍ',
    instructionEn: 'Read the sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'فِي حَدِيقَةِ بَشِيرٍ وَرْدَةٌ كَبِيرَةٌ',
      promptEn: 'In Bashir’s garden is a big rose',
      promptBn: 'বশীরের বাগানে একটি বড় গোলাপ আছে',
      expectedAnswer: ['In Bashir’s garden', 'is', 'a big rose'],
      chips: ['In Bashir’s garden', 'is', 'a big rose', 'a tall tree', 'beside the road'],
      expectedAnswerBn: ['বশীরের বাগানে', 'একটি', 'বড় গোলাপ আছে'],
      chipsBn: ['বশীরের বাগানে', 'একটি', 'বড় গোলাপ আছে', 'উঁচু গাছ', 'রাস্তার পাশে'],
      emoji: '🌹',
    },
  },

  // 14. Sentence Assembly Drill 7: Player & Ball
  {
    id: 'step-14-assembly-player-ball',
    type: 'sentence_assembly',
    pageNumber: 46,
    titleEn: 'Sentence Building: Player and Ball',
    titleAr: 'تَرْكِيبُ: الكُرَةُ أَمَامَ اللَّاعِبِ',
    instructionEn: 'Assemble: "The ball is in front of the player"',
    instructionBn: 'শব্দগুলো সাজিয়ে লিখুন: "বলটি খেলোয়াড়ের সামনে"',
    assemblyPayload: {
      promptEn: 'The ball is in front of the player',
      promptBn: 'বলটি খেলোয়াড়ের সামনে',
      expectedAnswer: ['الْكُرَةُ', 'أَمَامَ', 'اللَّاعِبِ'],
      chips: ['الْكُرَةُ', 'أَمَامَ', 'اللَّاعِبِ', 'خَلْفَ', 'كَبِيرَةٌ'],
      emoji: '⚽',
    },
  },

  // 15. Dialogic Alternative Q&A Battery 3 (Zainab, Bashir, Khadijah & Player)
  {
    id: 'step-15-alt-qa-synthesis-battery',
    type: 'alternative_qa',
    pageNumber: 47,
    titleEn: 'Dialogue Battery: Friends, Characters & Sports',
    titleAr: 'حِوَارُ الشَّخْصِيَّاتِ وَالأَصْدِقَاءِ وَالرِّيَاضَةِ',
    instructionEn: 'Select the authentic textbook answer for each comprehensive character inquiry',
    instructionBn: 'বিভিন্ন চরিত্র ও পরিস্থিতি সম্পর্কিত প্রশ্নগুলোর সঠিক উত্তর দিন',
    alternativeQAPayload: {
      questions: [
        {
          id: 'qa-c9-10',
          questionAr: 'مَاذَا فِي يَدِ زَيْنَبَ ؟',
          optionsAr: ['فِي يَدِهَا كِتَابٌ جَمِيلٌ', 'فِي يَدِهَا مِنْدِيلٌ نَظِيفٌ'],
          correctAnswerAr: 'فِي يَدِهَا كِتَابٌ جَمِيلٌ',
        },
        {
          id: 'qa-c9-11',
          questionAr: 'أَيْنَ حَدِيقَةُ بَشِيرٍ وَ مَاذَا فِي حَدِيقَتِهِ ؟',
          optionsAr: [
            'حَدِيقَتُهُ بِجَانِبِ الطَّرِيقِ وَ فِيهَا وَرْدَةٌ كَبِيرَةٌ',
            'حَدِيقَتُهُ فِي الْعَاصِمَةِ وَ فِيهَا طَائِرَةٌ',
          ],
          correctAnswerAr: 'حَدِيقَتُهُ بِجَانِبِ الطَّرِيقِ وَ فِيهَا وَرْدَةٌ كَبِيرَةٌ',
        },
        {
          id: 'qa-c9-12',
          questionAr: 'كَيْفَ بَشِيرٌ وَ كَيْفَ وَلَدُهُ ؟',
          optionsAr: [
            'بَشِيرٌ رَجُلٌ طَيِّبٌ وَ تَاجِرٌ غَنِيٌّ، وَ وَلَدُهُ تِلْمِيذٌ ذَكِيٌّ',
            'بَشِيرٌ لَاعِبٌ سَرِيعٌ وَ وَلَدُهُ طَيِّبٌ',
          ],
          correctAnswerAr: 'بَشِيرٌ رَجُلٌ طَيِّبٌ وَ تَاجِرٌ غَنِيٌّ، وَ وَلَدُهُ تِلْمِيذٌ ذَكِيٌّ',
        },
        {
          id: 'qa-c9-13',
          questionAr: 'كَيْفَ مِنْدِيلُ خَدِيجَةَ وَ أَيْنَ هُوَ ؟',
          optionsAr: ['مِنْدِيلُهَا فِي يَدِهَا وَ هُوَ نَظِيفٌ', 'مِنْدِيلُهَا فَوْقَ الْمِنْضَدَةِ وَ هُوَ جَدِيدٌ'],
          correctAnswerAr: 'مِنْدِيلُهَا فِي يَدِهَا وَ هُوَ نَظِيفٌ',
        },
        {
          id: 'qa-c9-14',
          questionAr: 'مَاذَا أَمَامَ اللَّاعِبِ ؟',
          optionsAr: ['أَمَامَ اللَّاعِبِ كُرَةٌ جَمِيلَةٌ', 'أَمَامَهُ مِنْضَدَةٌ صَغِيرَةٌ'],
          correctAnswerAr: 'أَمَامَ اللَّاعِبِ كُرَةٌ جَمِيلَةٌ',
        },
      ],
    },
  },

  // 16. Page 46: Authentic Reading & Translation Drill 5: Khadijah’s Handkerchief
  {
    id: 'step-16-assembly-khadijah-handkerchief',
    type: 'sentence_assembly',
    pageNumber: 46,
    titleEn: 'Textbook Translation: Khadijah’s Handkerchief',
    titleAr: 'اقْرَأْ وَتَرْجِمْ: مِنْدِيلُ خَدِيجَةَ',
    instructionEn: 'Read the sentence and assemble the translation.',
    instructionBn: 'আরবি বাক্যটি পড়ুন এবং সঠিক অনুবাদ তৈরি করুন।',
    assemblyPayload: {
      promptAr: 'مِنْدِيلُهَا فِي يَدِهَا وَهُوَ نَظِيفٌ',
      promptEn: 'Her handkerchief is in her hand and it is clean',
      promptBn: 'তার রুমাল তার হাতে এবং তা পরিষ্কার',
      expectedAnswer: ['Her handkerchief is in her hand', 'and', 'it is clean'],
      chips: ['Her handkerchief is in her hand', 'and', 'it is clean', 'it is new', 'on the desk'],
      expectedAnswerBn: ['তার রুমাল তার হাতে', 'এবং', 'তা পরিষ্কার'],
      chipsBn: ['তার রুমাল তার হাতে', 'এবং', 'তা পরিষ্কার', 'তা নতুন', 'টেবিলের ওপর'],
      emoji: '🤲',
    },
  },

  // 17. Syntactic Tarkib Dissector (Chapter 1 Synthesis)
  {
    id: 'step-17-tarkib-dissector',
    type: 'tarkib_dissector',
    pageNumber: 45,
    titleEn: 'Syntactic Tarkib Dissector: Chapter 1 Capstone',
    titleAr: 'التَّرْكِيبُ النَّحْوِيُّ: خِتَامُ الجُمَلِ المُرَكَّبَةِ',
    instructionEn: 'Dissect compound syntactic patterns combining Idafah, Adjectives, and Prepositions',
    instructionBn: 'ইজাফাত, সিফাত ও হরফে জর সমন্বিত যৌগিক বাক্যগুলোর ব্যাকরণগত বিশ্লেষণ সম্পন্ন করুন',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-c1-s1',
          sentenceAr: 'بَابُ الْمَسْجِدِ مَفْتُوحٌ',
          sentenceTypeAr: 'جُمْلَةٌ اسْمِيَّةٌ (مُضَافٌ وَمُضَافٌ إِلَيْهِ مَعَ خَبَرٍ)',
          sentenceTypeEn: 'Nominal Sentence (Idafah Construct Subject + Predicate)',
          sentenceTypeBn: 'নামবাচক বাক্য (ইজাফাত উদ্দেশ্য + খবর)',
          slots: [
            {
              roleAr: 'مُبْتَدَأٌ وَمُضَافٌ',
              roleEn: 'Subject & Mudaf',
              roleBn: 'উদ্দেশ্য ও মুদাফ',
              expectedWordAr: 'بَابُ',
            },
            {
              roleAr: 'مُضَافٌ إِلَيْهِ',
              roleEn: 'Mudaf Ilayh (Genitive)',
              roleBn: 'মুদাফ ইলাইহি (মাজরুর)',
              expectedWordAr: 'الْمَسْجِدِ',
            },
            {
              roleAr: 'خَبَرٌ',
              roleEn: 'Predicate (Khabar)',
              roleBn: 'বিধেয় (খবর)',
              expectedWordAr: 'مَفْتُوحٌ',
            },
          ],
          availableWordsAr: ['مَفْتُوحٌ', 'بَابُ', 'الْمَسْجِدِ'],
        },
        {
          id: 'tarkib-c1-s2',
          sentenceAr: 'فِي مَطَارِ الْعَاصِمَةِ طَائِرَةٌ',
          sentenceTypeAr: 'جُمْلَةٌ اسْمِيَّةٌ (خَبَرٌ مُقَدَّمٌ مُرَكَّبٌ وَمُبْتَدَأٌ مُؤَخَّرٌ)',
          sentenceTypeEn: 'Nominal Sentence (Fronted Prepositional Idafah Predicate + Delayed Subject)',
          sentenceTypeBn: 'নামবাচক বাক্য (অগ্রবর্তী ইজাফাতযুক্ত খবর ও বিলম্বিত মুবতাদা)',
          slots: [
            {
              roleAr: 'حَرْفُ جَرٍّ',
              roleEn: 'Preposition (Harf Jarr)',
              roleBn: 'হরফে জর',
              expectedWordAr: 'فِي',
            },
            {
              roleAr: 'مَجْرُورٌ وَمُضَافٌ',
              roleEn: 'Genitive Noun & Mudaf',
              roleBn: 'মাজরুর ও মুদাফ',
              expectedWordAr: 'مَطَارِ',
            },
            {
              roleAr: 'مُضَافٌ إِلَيْهِ',
              roleEn: 'Mudaf Ilayh (Genitive)',
              roleBn: 'মুদাফ ইলাইহি',
              expectedWordAr: 'الْعَاصِمَةِ',
            },
            {
              roleAr: 'مُبْتَدَأٌ مُؤَخَّرٌ',
              roleEn: 'Delayed Subject (Mubtada)',
              roleBn: 'বিলম্বিত উদ্দেশ্য (মুবতাদা)',
              expectedWordAr: 'طَائِرَةٌ',
            },
          ],
          availableWordsAr: ['طَائِرَةٌ', 'الْعَاصِمَةِ', 'فِي', 'مَطَارِ'],
        },
      ],
    },
  },

  // 18. Chapter 1 Grand Quranic Milestone: Surah Al-Ikhlas (112:1-4)
  {
    id: 'step-18-quranic-echo-ch1-finale',
    type: 'quranic_echo',
    pageNumber: 47,
    titleEn: 'Chapter 1 Grand Milestone: Pure Monotheism',
    titleAr: 'خِتَامُ الفَصْلِ الأَوَّلِ: سُورَةُ الإِخْلَاصِ',
    instructionEn: 'Celebrate completing Chapter 1 by listening to the pinnacle of Arabic clarity in Surah Al-Ikhlas',
    instructionBn: 'প্রথম অধ্যায় সমাপ্তির গৌরবময় মুহূর্তে সূরা আল-ইখলাসের বিশুদ্ধ তেলাওয়াত শুনুন ও অনুধাবন করুন।',
    echoPayload: {
      surahNumber: 112,
      ayahNumber: 1,
      surahNameAr: 'الإِخْلَاص',
      surahNameEn: 'Al-Ikhlas',
      arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
      translationEn: 'Say: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.',
      translationBn: 'বলুন, তিনিই আল্লাহ, একক। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি। এবং তাঁর সমতুল্য কেউই নেই।',
      highlightedWords: ['هُوَ', 'اللَّهُ', 'أَحَدٌ'],
      patternNameEn: 'Nominal Pronoun Predication (Pure Monotheism)',
      patternNameBn: 'সর্বনাম ও তাওহীদের পূর্ণাঙ্গ বাক্য',
      lessonPatternAr: 'هُوَ اللهُ / هُوَ صَدِيقٌ',
      lessonPatternEn: 'He is Allah / He is a friend',
      lessonPatternBn: 'তিনিই আল্লাহ / সে একজন বন্ধু',
      quranPatternAr: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
      quranPatternEn: 'Say: He is Allah, [who is] One',
      quranPatternBn: 'বলুন: তিনিই আল্লাহ, একক',
      reflection: 'Mubarak! You have completed Chapter 1. You can now recognize nominal predicates, demonstrative pointers, adjectives, genitive Idafah constructs, and spatial prepositions in classical Arabic and the Quran.',
      audioKey: 'quran_112001',
    },
  },
];

export const LESSON_09_SESSION: LessonSessionData = {
  volumeId: 1,
  chapterId: 1,
  lessonNum: 9,
  titleEn: 'Comprehensive Synthesis (Chapter 1 Finale)',
  titleAr: 'التَّطْبِيقَاتُ الشَّامِلَةُ (خِتَامُ الفَصْلِ الأَوَّلِ)',
  wordsLearned: [
    'عَاصِمَةٌ',
    'طَائِرَةٌ',
    'مَطَارٌ',
    'سَرِيعٌ',
    'بَطِيءٌ',
    'فَاكِهَةٌ',
    'لَذِيذٌ',
    'وَرْدَةٌ',
    'مِنْضَدَةٌ',
    'يَدٌ',
    'كُرَةٌ',
    'لَاعِبٌ',
    'لَاعِبَةٌ',
  ],
  steps: LESSON_09_STEPS,
};

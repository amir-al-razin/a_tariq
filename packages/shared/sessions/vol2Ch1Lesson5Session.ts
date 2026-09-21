import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const VOL2_CH1_LESSON_05_STEPS: SessionStep[] = [
  // 1. Page 35: Concept Discovery - Attached Pronoun Direct Objects (المَفْعُولُ بِهِ ضَمِيرًا مُتَّصِلًا)
  {
    id: 'v2-c1-l5-step-1-concept-attached-pronouns',
    type: 'concept_intro',
    pageNumber: 35,
    titleEn: 'Attached Pronoun Objects: Direct Object as Pronoun',
    titleAr: 'المَفْعُولُ بِهِ ضَمِيرًا مُتَّصِلًا',
    instructionEn: 'Observe how the direct object attaches directly to the end of the verb as a connected pronoun.',
    instructionBn: 'লক্ষ্য করুন কীভাবে কর্ম বা অবজেক্ট সরাসরি ক্রিয়ার শেষে যুক্ত সর্বনাম হিসেবে বসে।',
    conceptPayload: {
      concepts: [
        {
          id: 'c-nasarana',
          ar: 'نَصَرَنَا اللهُ',
          romanized: 'naṣaranā Allāhu',
          meaningEn: 'Allah helped us (-nā = attached direct object)',
          meaningBn: 'আল্লাহ আমাদেরকে সাহায্য করেছেন (-না = যুক্ত কর্ম)',
          exampleAr: 'نَصَرَنَا اللهُ فِي مُصِيبَتِنَا',
          exampleEn: 'Allah helped us in our affliction.',
          exampleBn: 'আল্লাহ আমাদের বিপদে আমাদেরকে সাহায্য করেছেন।',
          audioKey: 'نَصَرَنَا اللهُ',
          exampleAudioKey: 'نَصَرَنَا اللهُ فِي مُصِيبَتِنَا',
          emoji: '🤲',
        },
        {
          id: 'c-yansurukum',
          ar: 'يَنْصُرُكُمُ اللهُ',
          romanized: 'yanṣurukumu Allāhu',
          meaningEn: 'Allah will help you all (-kumu = attached direct object)',
          meaningBn: 'আল্লাহ তোমাদেরকে সাহায্য করবেন (-কুমু = যুক্ত কর্ম)',
          exampleAr: 'يَنْصُرُكُمُ اللهُ فِي دِينِكُمْ وَدُنْيَاكُمْ',
          exampleEn: 'Allah will help you in your religion and worldly life.',
          exampleBn: 'আল্লাহ তোমাদের দ্বীন ও দুনিয়াতে তোমাদের সাহায্য করবেন।',
          audioKey: 'يَنْصُرُكُمُ اللهُ',
          exampleAudioKey: 'يَنْصُرُكُمُ اللهُ فِي دِينِكُمْ وَدُنْيَاكُمْ',
          emoji: '✨',
        },
        {
          id: 'c-ihfazni',
          ar: 'اللَّهُمَّ احْفَظْنِي',
          romanized: 'Allāhumma iḥfaẓnī',
          meaningEn: 'O Allah, protect me (-nī = attached direct object)',
          meaningBn: 'হে আল্লাহ! আমাকে হেফাজত করুন (-নী = যুক্ত কর্ম)',
          exampleAr: 'اللَّهُمَّ احْفَظْنِي مِنْ كُلِّ شَرٍّ',
          exampleEn: 'O Allah, protect me from all evil.',
          exampleBn: 'হে আল্লাহ! আমাকে সমস্ত অনিষ্ট থেকে হেফাজত করুন।',
          audioKey: 'اللَّهُمَّ احْفَظْنِي',
          exampleAudioKey: 'اللَّهُمَّ احْفَظْنِي مِنْ كُلِّ شَرٍّ',
          emoji: '🛡️',
        },
        {
          id: 'c-araftuhum',
          ar: 'عَرَفْتُهُمُ اليَوْمَ',
          romanized: '‘araftuhumu al-yawma',
          meaningEn: 'I recognized them today (-humu = attached direct object)',
          meaningBn: 'আমি আজ তাদেরকে চিনেছি (-হুমু = যুক্ত কর্ম)',
          exampleAr: 'عَرَفْتُهُمُ اليَوْمَ فِي المَدْرَسَةِ',
          exampleEn: 'I recognized them today in the school.',
          exampleBn: 'আমি আজ তাদেরকে বিদ্যালয়ে চিনেছি।',
          audioKey: 'عَرَفْتُهُمُ اليَوْمَ',
          exampleAudioKey: 'عَرَفْتُهُمُ اليَوْمَ فِي المَدْرَسَةِ',
          emoji: '🏫',
        },
      ],
    },
  },

  // 2. Page 36: Verb Conjugator - Creation Verb (خَلَقَ يَخْلُقُ)
  {
    id: 'v2-c1-l5-step-2-conjugator-khalaqa',
    type: 'verb_conjugator',
    pageNumber: 36,
    titleEn: 'Verb Conjugation: خَلَقَ (To Create)',
    titleAr: 'تَصْرِيفُ فِعْلِ: خَلَقَ يَخْلُقُ (بَاب نَصَرَ)',
    instructionEn: 'Switch between pronouns to observe how the root "خ ل ق" conjugates across tenses.',
    instructionBn: 'সর্বনাম পরিবর্তন করে "خ ل ق" মূলধাতুর বিভিন্ন রূপ লক্ষ্য করুন।',
    conjugatorPayload: {
      mode: 'explore',
      targetTense: 'past',
      verbs: [
        {
          id: 'verb_khalaqa',
          rootAr: 'خ ل ق',
          masdarAr: 'خَلْقٌ',
          meaningEn: 'To create',
          meaningBn: 'সৃষ্টি করা',
          baabAr: 'بَاب نَصَرَ يَنْصُرُ',
          baabEn: 'Bab Nasara (u pattern)',
          emoji: '🌌',
          forms: [
            {
              subjectAr: 'هُوَ',
              subjectEn: 'He',
              subjectBn: 'সে (পুং)',
              pastAr: 'خَلَقَ',
              presentAr: 'يَخْلُقُ',
              imperativeAr: 'اُخْلُقْ',
              pastMeaningEn: 'He created',
              pastMeaningBn: 'সে সৃষ্টি করল',
              presentMeaningEn: 'He creates',
              presentMeaningBn: 'সে সৃষ্টি করে',
              audioKey: 'خَلَقَ',
            },
            {
              subjectAr: 'هِيَ',
              subjectEn: 'She',
              subjectBn: 'সে (স্ত্রী)',
              pastAr: 'خَلَقَتْ',
              presentAr: 'تَخْلُقُ',
              imperativeAr: 'اُخْلُقِي',
              pastMeaningEn: 'She created',
              pastMeaningBn: 'সে সৃষ্টি করল',
              presentMeaningEn: 'She creates',
              presentMeaningBn: 'সে সৃষ্টি করে',
              audioKey: 'خَلَقَتْ',
            },
            {
              subjectAr: 'أَنْتَ',
              subjectEn: 'You (m)',
              subjectBn: 'তুমি (পুং)',
              pastAr: 'خَلَقْتَ',
              presentAr: 'تَخْلُقُ',
              imperativeAr: 'اُخْلُقْ',
              pastMeaningEn: 'You created',
              pastMeaningBn: 'তুমি সৃষ্টি করলে',
              presentMeaningEn: 'You create',
              presentMeaningBn: 'তুমি সৃষ্টি করো',
              audioKey: 'خَلَقْتَ',
            },
            {
              subjectAr: 'أَنْتِ',
              subjectEn: 'You (f)',
              subjectBn: 'তুমি (স্ত্রী)',
              pastAr: 'خَلَقْتِ',
              presentAr: 'تَخْلُقِينَ',
              imperativeAr: 'اُخْلُقِي',
              pastMeaningEn: 'You created (f)',
              pastMeaningBn: 'তুমি সৃষ্টি করলে',
              presentMeaningEn: 'You create (f)',
              presentMeaningBn: 'তুমি সৃষ্টি করো',
              audioKey: 'خَلَقْتِ',
            },
            {
              subjectAr: 'أَنَا',
              subjectEn: 'I',
              subjectBn: 'আমি',
              pastAr: 'خَلَقْتُ',
              presentAr: 'أَخْلُقُ',
              imperativeAr: 'اُخْلُقْ',
              pastMeaningEn: 'I created',
              pastMeaningBn: 'আমি সৃষ্টি করলাম',
              presentMeaningEn: 'I create',
              presentMeaningBn: 'আমি সৃষ্টি করি',
              audioKey: 'خَلَقْتُ',
            },
          ],
        },
      ],
    },
  },

  // 3. Page 36: Vocab Prime - Essential Nouns & Cosmic Tokens
  {
    id: 'v2-c1-l5-step-3-vocab-nouns',
    type: 'vocab_prime',
    pageNumber: 36,
    titleEn: 'Vocabulary: Creation & Cosmic Nouns',
    titleAr: 'مُفْرَدَاتُ الخَلْقِ وَالكَوْنِ',
    instructionEn: 'Listen to the newly introduced nouns and particles.',
    instructionBn: 'সৃষ্টি ও মহাবিশ্ব সম্পর্কিত নতুন শব্দগুলোর অর্থ শুনুন।',
    vocabPayload: {
      words: [
        { id: 'v2_shams', ar: 'الشَّمْسُ', en: 'The Sun (feminine)', bn: 'সূর্য (স্ত্রীবাচক)', romanized: 'ash-shamsu', emoji: '☀️' },
        { id: 'v2_qamar', ar: 'القَمَرُ', en: 'The Moon (masculine)', bn: 'চাঁদ (পুংবাচক)', romanized: 'al-qamaru', emoji: '🌙' },
        { id: 'v2_hajar', ar: 'الحَجَرُ', en: 'The Stone', bn: 'পাথর', romanized: 'al-ḥajaru', emoji: '🪨' },
        { id: 'v2_musibah', ar: 'مُصِيبَةٌ', en: 'Calamity / Affliction', bn: 'বিপদ / মসিবত', romanized: 'muṣībatun', emoji: '⚡' },
        { id: 'v2_qufl', ar: 'قُفْلٌ', en: 'Lock', bn: 'তালা', romanized: 'quflun', emoji: '🔒' },
        { id: 'v2_qalansuwah', ar: 'قَلَنْسُوَةٌ', en: 'Cap / Kufi', bn: 'টুপি', romanized: 'qalansuwatun', emoji: '🧢' },
        { id: 'v2_wasikh', ar: 'وَسِخٌ', en: 'Dirty / Soiled', bn: 'ময়লা / নোংরা', romanized: 'wasikhun', emoji: '🫧' },
        { id: 'v2_sa_particle', ar: 'سَـ', en: 'Will / Shall (Future prefix)', bn: 'অচিরেই / অবশ্যই (ভবিষ্যৎসূচক)', romanized: 'sa-', emoji: '⏳' },
      ],
    },
  },

  // 4. Page 35-37: Speed Pair - Verb + Attached Object Pronoun
  {
    id: 'v2-c1-l5-step-4-speed-pair',
    type: 'speed_pair',
    pageNumber: 35,
    titleEn: 'Speed Pair: Attached Pronoun Combinations',
    titleAr: 'مُطَابَقَةُ الفِعْلِ مَعَ الضَّمِيرِ المُتَّصِلِ',
    instructionEn: 'Match each verb with attached object pronoun to its accurate meaning.',
    instructionBn: 'যুক্ত সর্বনামসহ ক্রিয়াটির সঠিক অর্থ মেলাও।',
    pairPayload: {
      pairs: [
        { id: 'sp-1', ar: 'نَصَرَنَا', meaning: 'He helped us', meaningBn: 'সে আমাদেরকে সাহায্য করল' },
        { id: 'sp-2', ar: 'يَنْصُرُكُمْ', meaning: 'He will help you all', meaningBn: 'সে তোমাদেরকে সাহায্য করবে' },
        { id: 'sp-3', ar: 'خَلَقَنِي', meaning: 'He created me', meaningBn: 'তিনি আমাকে সৃষ্টি করেছেন' },
        { id: 'sp-4', ar: 'خَلَقَهُمَا', meaning: 'He created them both', meaningBn: 'তিনি তাদের দুজনকে সৃষ্টি করেছেন' },
        { id: 'sp-5', ar: 'عَرَفْتُهُ', meaning: 'I recognized him', meaningBn: 'আমি তাকে চিনেছি' },
      ],
    },
  },

  // 5. Page 35: Sentence Assembly - Allah Helping in Affliction
  {
    id: 'v2-c1-l5-step-5-assembly-nasarana',
    type: 'sentence_assembly',
    pageNumber: 35,
    titleEn: 'Sentence Assembly: Divine Help',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: نَصْرُ اللهِ فِي المُصِيبَةِ',
    instructionEn: 'Assemble: "Allah helped us in our affliction."',
    instructionBn: 'বাক্যটি সাজান: "আল্লাহ আমাদের বিপদে আমাদেরকে সাহায্য করেছেন।"',
    assemblyPayload: {
      promptEn: 'Allah helped us in our affliction.',
      promptBn: 'আল্লাহ আমাদের বিপদে আমাদেরকে সাহায্য করেছেন।',
      expectedAnswer: ['نَصَرَنَا', 'اللهُ', 'فِي', 'مُصِيبَتِنَا'],
      chips: ['نَصَرَنَا', 'اللهُ', 'فِي', 'مُصِيبَتِنَا', 'نَصَرَكُمْ', 'مُصِيبَتِكُمْ'],
      expectedAnswerBn: ['আল্লাহ', 'আমাদের', 'বিপদে', 'আমাদেরকে', 'সাহায্য', 'করেছেন'],
      chipsBn: ['আল্লাহ', 'আমাদের', 'বিপদে', 'আমাদেরকে', 'সাহায্য', 'করেছেন', 'তোমাদের', 'করবেন'],
      emoji: '🤲',
    },
  },

  // 6. Page 36: Sentence Assembly - Prostration to Allah Alone
  {
    id: 'v2-c1-l5-step-6-assembly-sujud',
    type: 'sentence_assembly',
    pageNumber: 36,
    titleEn: 'Sentence Assembly: Prostration to Allah Alone',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: السُّجُودُ لِلَّهِ وَحْدَهُ',
    instructionEn: 'Assemble: "The Muslim prostrates to Allah and does not prostrate to other than Allah."',
    instructionBn: 'বাক্যটি সাজান: "মুসলিম আল্লাহর জন্য সিজদা করে এবং আল্লাহ ছাড়া অন্যের জন্য সিজদা করে না।"',
    assemblyPayload: {
      promptEn: 'The Muslim prostrates to Allah and does not prostrate to other than Allah.',
      promptBn: 'মুসলিম আল্লাহর জন্য সিজদা করে এবং আল্লাহ ছাড়া অন্যের জন্য সিজদা করে না।',
      expectedAnswer: ['المُسْلِمُ', 'يَسْجُدُ', 'لِلَّهِ', 'وَلَا', 'يَسْجُدُ', 'لِغَيْرِ', 'اللهِ'],
      chips: ['المُسْلِمُ', 'يَسْجُدُ', 'لِلَّهِ', 'وَلَا', 'يَسْجُدُ', 'لِغَيْرِ', 'اللهِ', 'المُشْرِكُ', 'سَجَدَ'],
      expectedAnswerBn: ['মুসলিম', 'আল্লাহর', 'জন্য', 'সিজদা', 'করে', 'এবং', 'আল্লাহ', 'ছাড়া', 'অন্যের', 'জন্য', 'করে', 'না'],
      chipsBn: ['মুসলিম', 'আল্লাহর', 'জন্য', 'সিজদা', 'করে', 'এবং', 'আল্লাহ', 'ছাড়া', 'অন্যের', 'জন্য', 'করে', 'না', 'মুশরিক', 'পাথরে'],
      emoji: '🕌',
    },
  },

  // 7. Page 36: Sentence Assembly - Recognizing Allah through Creation
  {
    id: 'v2-c1-l5-step-7-assembly-nazar-khalq',
    type: 'sentence_assembly',
    pageNumber: 36,
    titleEn: 'Sentence Assembly: Recognition via Creation',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: مَعْرِفَةُ اللهِ بِخَلْقِهِ',
    instructionEn: 'Assemble: "I looked at Allah\'s creation and recognized Him."',
    instructionBn: 'বাক্যটি সাজান: "আমি আল্লাহর সৃষ্টির দিকে তাকালাম এবং তাঁকে চিনলাম।"',
    assemblyPayload: {
      promptEn: 'I looked at Allah\'s creation and recognized Him.',
      promptBn: 'আমি আল্লাহর সৃষ্টির দিকে তাকালাম এবং তাঁকে চিনলাম।',
      expectedAnswer: ['نَظَرْتُ', 'إِلَى', 'خَلْقِ', 'اللهِ', 'فَعَرَفْتُهُ'],
      chips: ['نَظَرْتُ', 'إِلَى', 'خَلْقِ', 'اللهِ', 'فَعَرَفْتُهُ', 'فَعَرَفْتُهَا', 'نَظَرَ'],
      expectedAnswerBn: ['আমি', 'আল্লাহর', 'সৃষ্টির', 'দিকে', 'তাকালাম', 'এবং', 'তাঁকে', 'চিনলাম'],
      chipsBn: ['আমি', 'আল্লাহর', 'সৃষ্টির', 'দিকে', 'তাকালাম', 'এবং', 'তাঁকে', 'চিনলাম', 'তাকে', 'সূর্য'],
      emoji: '🌌',
    },
  },

  // 8. Page 37: Sentence Assembly - Creation of Sun and Moon
  {
    id: 'v2-c1-l5-step-8-assembly-shams-qamar',
    type: 'sentence_assembly',
    pageNumber: 37,
    titleEn: 'Sentence Assembly: Creation of Sun & Moon',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: خَلْقُ الشَّمْسِ وَالقَمَرِ',
    instructionEn: 'Assemble: "Allah created the sun and the moon."',
    instructionBn: 'বাক্যটি সাজান: "আল্লাহ সূর্য ও চাঁদ সৃষ্টি করেছেন।"',
    assemblyPayload: {
      promptEn: 'Allah created the sun and the moon.',
      promptBn: 'আল্লাহ সূর্য ও চাঁদ সৃষ্টি করেছেন।',
      expectedAnswer: ['خَلَقَ', 'اللهُ', 'الشَّمْسَ', 'وَالقَمَرَ'],
      chips: ['خَلَقَ', 'اللهُ', 'الشَّمْسَ', 'وَالقَمَرَ', 'الشَّمْسُ', 'القَمَرُ'],
      expectedAnswerBn: ['আল্লাহ', 'সূর্য', 'ও', 'চাঁদ', 'সৃষ্টি', 'করেছেন'],
      chipsBn: ['আল্লাহ', 'সূর্য', 'ও', 'চাঁদ', 'সৃষ্টি', 'করেছেন', 'পাথর', 'আকাশ'],
      emoji: '☀️',
    },
  },

  // 9. Page 36: Cloze Choice - Attached Pronoun Selection
  {
    id: 'v2-c1-l5-step-9-cloze-pronoun',
    type: 'cloze_choice',
    pageNumber: 36,
    titleEn: 'Attached Pronoun Selection: Dual Object',
    titleAr: 'اخْتِيَارُ الضَّمِيرِ المُتَّصِلِ: المُثَنَّى',
    instructionEn: 'Select the correct attached pronoun for two objects (Quran and Hadith): "-humā".',
    instructionBn: 'দুটি বিষয়ের (কুরআন ও হাদিস) জন্য সঠিক দ্বিবচন সর্বনাম "-হুমা" নির্বাচন করুন।',
    clozePayload: {
      questionAr: 'أَنَا أَفْهَمُ القُرْآنَ وَالحَدِيثَ وَأَنْتِ لَا تَفْهَمِينَ ... .',
      questionEn: 'I understand the Quran and Hadith, but you do not understand ....',
      questionBn: 'আমি কুরআন ও হাদিস বুঝি, কিন্তু তুমি ... বোঝ না।',
      partialAnswerAr: 'أَنَا أَفْهَمُ القُرْآنَ وَالحَدِيثَ وَأَنْتِ لَا تَفْهَمِينَ ... .',
      correctAnswer: 'ـهُمَا',
      options: ['ـهُمَا', 'ـهَا', 'ـهُ'],
      emoji: '📖',
    },
  },

  // 10. Page 36: Alternative QA - Theological Questions
  {
    id: 'v2-c1-l5-step-10-qa-theological',
    type: 'alternative_qa',
    pageNumber: 36,
    titleEn: 'Theological Comprehension: Divine Help & Creation',
    titleAr: 'أَسْئِلَةُ العَقِيدَةِ: نَصْرُ اللهِ وَخَلْقُهُ',
    instructionEn: 'Answer questions based on the theological dialogue in the lesson.',
    instructionBn: 'পাঠের ঈমানি কথোপকথনের ভিত্তিতে প্রশ্নের উত্তর দিন।',
    alternativeQAPayload: {
      contextAr: 'نَصَرَنَا اللهُ فِي مُصِيبَتِنَا، وَيَنْصُرُنَا فِي دِينِنَا وَدُنْيَانَا. وَنَظَرْنَا إِلَى خَلْقِ اللهِ فَعَرَفْنَاهُ.',
      questions: [
        {
          id: 'q-who-helped',
          questionAr: 'مَنْ نَصَرَكُمْ فِي مُصِيبَتِكُمْ ؟',
          optionsAr: ['نَصَرَنَا اللهُ', 'نَصَرَنَا الصَّدِيقُ'],
          correctAnswerAr: 'نَصَرَنَا اللهُ',
        },
        {
          id: 'q-how-know-allah',
          questionAr: 'كَيْفَ عَرَفْتَ اللهَ ؟',
          optionsAr: ['نَظَرْتُ إِلَى خَلْقِ اللهِ فَعَرَفْتُهُ', 'قَرَأْتُ الجَرِيدَةَ'],
          correctAnswerAr: 'نَظَرْتُ إِلَى خَلْقِ اللهِ فَعَرَفْتُهُ',
        },
      ],
    },
  },

  // 11. Page 37: Sentence Assembly - Future Particle With Reading
  {
    id: 'v2-c1-l5-step-11-assembly-future-qiraah',
    type: 'sentence_assembly',
    pageNumber: 37,
    titleEn: 'Sentence Assembly: Future Prefix (سَـ...) with Story',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: السِّينُ لِلاِسْتِقْبَالِ مَعَ القِرَاءَةِ',
    instructionEn: 'Assemble: "I have not read the lion\'s story; I will read it tomorrow."',
    instructionBn: 'বাক্যটি সাজান: "আমি সিংহের গল্প পড়িনি, আমি তা আগামীকাল পড়ব।"',
    assemblyPayload: {
      promptEn: 'I have not read the lion\'s story; I will read it tomorrow.',
      promptBn: 'আমি সিংহের গল্প পড়িনি, আমি তা আগামীকাল পড়ব।',
      expectedAnswer: ['مَا', 'قَرَأْتُ', 'قِصَّةَ', 'الأَسَدِ،', 'سَأَقْرَأُهَا', 'غَدًا'],
      chips: ['مَا', 'قَرَأْتُ', 'قِصَّةَ', 'الأَسَدِ،', 'سَأَقْرَأُهَا', 'غَدًا', 'سَأَقْرَأُهُ', 'اليَوْمَ'],
      expectedAnswerBn: ['আমি', 'সিংহের', 'গল্প', 'পড়িনি,', 'আমি', 'তা', 'আগামীকাল', 'পড়ব'],
      chipsBn: ['আমি', 'সিংহের', 'গল্প', 'পড়িনি,', 'আমি', 'তা', 'আগামীকাল', 'পড়ব', 'আজ', 'বই'],
      emoji: '🦁',
    },
  },

  // 12. Page 37: Alternative QA - Prostration & Worship
  {
    id: 'v2-c1-l5-step-12-qa-worship',
    type: 'alternative_qa',
    pageNumber: 37,
    titleEn: 'Discerning Worship: The Muslim vs The Idolater',
    titleAr: 'التَّمْيِيزُ فِي السُّجُودِ: المُسْلِمُ وَالمُشْرِكُ',
    instructionEn: 'Answer questions on who the Muslim and idolater prostrate to.',
    instructionBn: 'মুসলিম ও মুশরিক কার উদ্দেশ্যে সিজদা করে সে সম্পর্কিত প্রশ্নের উত্তর দিন।',
    alternativeQAPayload: {
      contextAr: 'المُسْلِمُ يَسْجُدُ لِلَّهِ وَلَا يَسْجُدُ لِغَيْرِهِ. وَالمُشْرِكُ يَسْجُدُ لِلشَّجَرِ وَالحَجَرِ.',
      questions: [
        {
          id: 'q-muslim-sujud',
          questionAr: 'لِمَنْ يَسْجُدُ المُسْلِمُ ؟',
          optionsAr: ['يَسْجُدُ لِلَّهِ', 'يَسْجُدُ لِلشَّجَرِ'],
          correctAnswerAr: 'يَسْجُدُ لِلَّهِ',
        },
        {
          id: 'q-mushrik-sujud',
          questionAr: 'أَ لِلَّهِ يَسْجُدُ المُشْرِكُ أَمْ لِغَيْرِ اللهِ ؟',
          optionsAr: ['لِغَيْرِ اللهِ', 'لِلَّهِ'],
          correctAnswerAr: 'لِغَيْرِ اللهِ',
        },
      ],
    },
  },

  // 13. Page 37: Sentence Assembly - Cleaning the Cap & Shirt
  {
    id: 'v2-c1-l5-step-13-assembly-hygiene',
    type: 'sentence_assembly',
    pageNumber: 36,
    titleEn: 'Sentence Assembly: Washing Soiled Garments',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: غَسْلُ الثِّيَابِ الوَسِخَةِ',
    instructionEn: 'Assemble: "O Khalid! Your cap is very dirty, wash it thoroughly."',
    instructionBn: 'বাক্যটি সাজান: "হে খালেদ! তোমার টুপি খুব নোংরা, তা ভালোভাবে ধৌত করো।"',
    assemblyPayload: {
      promptEn: 'O Khalid! Your cap is very dirty, wash it thoroughly.',
      promptBn: 'হে খালেদ! তোমার টুপি খুব নোংরা, তা ভালোভাবে ধৌত করো।',
      expectedAnswer: ['يَا', 'خَالِدُ!', 'قَلَنْسُوَتُكَ', 'وَسِخَةٌ', 'جِدًّا،', 'اِغْسِلْهَا', 'جَيِّدًا'],
      chips: ['يَا', 'خَالِدُ!', 'قَلَنْسُوَتُكَ', 'وَسِخَةٌ', 'جِدًّا،', 'اِغْسِلْهَا', 'جَيِّدًا', 'اِغْسِلْهُ', 'نَظِيفَةٌ'],
      expectedAnswerBn: ['হে', 'খালেদ!', 'তোমার', 'টুপি', 'খুব', 'নোংরা,', 'তা', 'ভালোভাবে', 'ধৌত', 'করো'],
      chipsBn: ['হে', 'খালেদ!', 'তোমার', 'টুপি', 'খুব', 'নোংরা,', 'তা', 'ভালোভাবে', 'ধৌত', 'করো', 'জামা', 'পরিষ্কার'],
      emoji: '🧢',
    },
  },

  // 14. Page 37: Sentence Assembly - Creator of Heavens and Earth
  {
    id: 'v2-c1-l5-step-14-assembly-samawat-ard',
    type: 'sentence_assembly',
    pageNumber: 37,
    titleEn: 'Theological Maxim: Creator of Heavens & Earth',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: خَالِقُ السَّمَاوَاتِ وَالأَرْضِ',
    instructionEn: 'Assemble: "Who created the heavens and the earth? Allah created them both."',
    instructionBn: 'বাক্যটি সাজান: "কে আসমান ও জমিন সৃষ্টি করেছেন? আল্লাহ এ দুটো সৃষ্টি করেছেন।"',
    assemblyPayload: {
      promptEn: 'Who created the heavens and the earth? Allah created them both.',
      promptBn: 'কে আসমান ও জমিন সৃষ্টি করেছেন? আল্লাহ এ দুটো সৃষ্টি করেছেন।',
      expectedAnswer: ['مَنْ', 'خَلَقَ', 'السَّمَاءَ', 'وَالأَرْضَ؟', 'خَلَقَهُمَا', 'اللهُ'],
      chips: ['مَنْ', 'خَلَقَ', 'السَّمَاءَ', 'وَالأَرْضَ؟', 'خَلَقَهُمَا', 'اللهُ', 'خَلَقَهُ', 'خَلَقَهَا'],
      expectedAnswerBn: ['কে', 'আসমান', 'ও', 'জমিন', 'সৃষ্টি', 'করেছেন?', 'আল্লাহ', 'এ', 'দুটো', 'সৃষ্টি', 'করেছেন'],
      chipsBn: ['কে', 'আসমান', 'ও', 'জমিন', 'সৃষ্টি', 'করেছেন?', 'আল্লাহ', 'এ', 'দুটো', 'সৃষ্টি', 'করেছেন', 'চাঁদ', 'সূর্য'],
      emoji: '🌍',
    },
  },

  // 15. Page 35: Syntactic Dissector (Tarkib) - Verb with Attached Object Pronoun
  {
    id: 'v2-c1-l5-step-15-tarkib-attached-object',
    type: 'tarkib_dissector',
    pageNumber: 35,
    titleEn: 'Syntactic Dissector: Verb with Attached Object Pronoun',
    titleAr: 'تَرْكِيبُ الفِعْلِ مَعَ الضَّمِيرِ المُتَّصِلِ مَفْعُولًا بِهِ',
    instructionEn: 'Slot each component into its syntactic role: Past Action, Attached Object Pronoun, and Divine Subject.',
    instructionBn: 'প্রতিটি অংশকে তার সঠিক ব্যাকরণিক স্থানে বসান: অতীত কাজ, যুক্ত কর্ম সর্বনাম এবং ফায়েল।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-nasarana-allahu',
          sentenceAr: 'نَصَرَنَا اللهُ',
          sentenceTypeAr: 'جُمْلَةٌ فِعْلِيَّةٌ ذَاتُ ضَمِيرٍ مُتَّصِلٍ',
          sentenceTypeEn: 'Verbal Sentence with Attached Object Pronoun',
          sentenceTypeBn: 'যুক্ত কর্ম সর্বনামবিশিষ্ট ক্রিয়াবাচক বাক্য',
          slots: [
            { roleAr: 'فِعْلٌ مَاضٍ', roleEn: 'Past Action', roleBn: 'অতীত কাজ', expectedWordAr: 'نَصَرَ' },
            { roleAr: 'مَفْعُولٌ بِهِ (ضَمِيرٌ مُتَّصِلٌ)', roleEn: 'Attached Direct Object', roleBn: 'যুক্ত কর্ম (মাফ\'উল বিহী)', expectedWordAr: 'ـنَا' },
            { roleAr: 'فَاعِلٌ (مَرْفُوعٌ بِالضَّمَّةِ)', roleEn: 'Doer / Subject (Nominative)', roleBn: 'কর্তা (ফায়েল)', expectedWordAr: 'اللهُ' },
          ],
          availableWordsAr: ['نَصَرَ', 'ـنَا', 'اللهُ'],
        },
      ],
    },
  },

  // 16. Page 36: Syntactic Dissector (Tarkib) - Prostration Verbal Sentence with Preposition
  {
    id: 'v2-c1-l5-step-16-tarkib-sujud-lillah',
    type: 'tarkib_dissector',
    pageNumber: 36,
    titleEn: 'Syntactic Dissector: Prostration to Allah',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: السُّجُودُ لِلَّهِ',
    instructionEn: 'Slot each component: Present Action, Subject, and Prepositional Attachment to Allah.',
    instructionBn: 'প্রতিটি অংশ বসান: বর্তমান কাজ, কর্তা এবং আল্লাহর জন্য متعلق।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-yasjudu-lillah',
          sentenceAr: 'يَسْجُدُ المُسْلِمُ لِلَّهِ',
          sentenceTypeAr: 'جُمْلَةٌ فِعْلِيَّةٌ لَازِمَةٌ مَعَ مُتَعَلِّقٍ',
          sentenceTypeEn: 'Intransitive Verbal Sentence with Attachment',
          sentenceTypeBn: 'متعلق বিশিষ্ট অকর্মক ক্রিয়াবাচক বাক্য',
          slots: [
            { roleAr: 'فِعْلٌ مُضَارِعٌ', roleEn: 'Present Action', roleBn: 'বর্তমান কাজ', expectedWordAr: 'يَسْجُدُ' },
            { roleAr: 'فَاعِلٌ', roleEn: 'Doer / Subject', roleBn: 'কর্তা (ফায়েল)', expectedWordAr: 'المُسْلِمُ' },
            { roleAr: 'مُتَعَلِّقٌ بِالفِعْلِ (جَارٌّ وَمَجْرُورٌ)', roleEn: 'Prepositional Attachment', roleBn: 'ক্রিয়ার متعلق', expectedWordAr: 'لِلَّهِ' },
          ],
          availableWordsAr: ['يَسْجُدُ', 'المُسْلِمُ', 'لِلَّهِ'],
        },
      ],
    },
  },

  // 17. Page 36: Quranic Echo - Surah Al-Baqarah (2:21) - خَلَقَكُمْ
  {
    id: 'v2-c1-l5-step-17-quranic-echo-khalaqakum',
    type: 'quranic_echo',
    pageNumber: 36,
    titleEn: 'Attached Pronoun in Divine Command: خَلَقَكُمْ',
    titleAr: 'صَدَى القُرْآنِ: (الَّذِي خَلَقَكُمْ وَالَّذِينَ مِن قَبْلِكُمْ)',
    instructionEn: 'Reflect on how the exact attached object pronoun "-kum" appears with the verb "khalaqa" in Surah Al-Baqarah.',
    instructionBn: 'সূরা আল-বাকারায় "خَلَقَ" ক্রিয়ার সাথে কীভাবে যুক্ত সর্বনাম "-কুম" (তোমাদেরকে) এসেছে তা অনুধাবন করুন।',
    echoPayload: {
      surahNumber: 2,
      ayahNumber: 21,
      surahNameAr: 'البَقَرَة',
      surahNameEn: 'Al-Baqarah',
      arabicText: 'يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
      translationEn: 'O mankind, worship your Lord, who created you and those before you, that you may become righteous.',
      translationBn: 'হে মানবসমাজ! তোমরা তোমাদের প্রতিপালকের ইবাদত করো, যিনি তোমাদেরকে এবং তোমাদের পূর্ববর্তীদেরকে সৃষ্টি করেছেন, যাতে তোমরা তাকওয়া অর্জন করতে পারো।',
      highlightedWords: ['اعْبُدُوا', 'رَبَّكُمُ', 'خَلَقَكُمْ'],
      reflection: 'In this foundational call of the Quran, the verb "خَلَقَ" (He created) joins directly with the object pronoun "ـكُمْ" (you all) as "خَلَقَكُمْ" (He created you), demonstrating that the attached object pronoun structure you mastered today is the exact medium Allah uses to remind humanity of His creative sovereignty.',
    },
  },
];

export const VOL2_CH1_LESSON_05_SESSION: LessonSessionData = {
  volumeId: 2,
  chapterId: 1,
  lessonNum: 5,
  titleEn: 'Attached Object Pronouns & Creation Verbs',
  titleAr: 'المَفْعُولُ بِهِ ضَمِيرًا مُتَّصِلًا وَأَفْعَالُ الخَلْقِ',
  wordsLearned: [
    'خَلَقَ', 'نَظَرَ', 'سَجَدَ', 'شَكَرَ', 'الشَّمْسُ', 'القَمَرُ', 'الحَجَرُ',
    'مُصِيبَةٌ', 'قُفْلٌ', 'قَلَنْسُوَةٌ', 'وَسِخٌ', 'سَـ', 'فَـ'
  ],
  steps: VOL2_CH1_LESSON_05_STEPS,
};

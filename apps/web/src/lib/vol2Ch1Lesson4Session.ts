// Volume 2 Chapter 1 Lesson 4 Interactive Session Steps (100% Curricular Parity with Physical Book Scans pages 30-34)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const VOL2_CH1_LESSON_04_STEPS: SessionStep[] = [
  // 1. Page 30: Concept Discovery - The Direct Object (المَفْعُولُ بِهِ) & Fatha Case Ending
  {
    id: 'v2-c1-l4-step-1-concept-mafool',
    type: 'concept_intro',
    pageNumber: 30,
    titleEn: 'The Direct Object: Accusative Case (مَفْعُولٌ بِهِ)',
    titleAr: 'مَدْخَلُ المَفْعُولِ بِهِ وَحَالَةُ النَّصْبِ',
    instructionEn: 'Observe how the receiver of the action (Direct Object) takes a Fatha or Tanween Fatha in Arabic.',
    instructionBn: 'লক্ষ্য করুন: ক্রিয়ার কর্ম (মাফ\'উল বিহী) সর্বদা নসব বা যবর/দুই যবর গ্রহণ করে।',
    conceptPayload: {
      concepts: [
        {
          id: 'c-mafool-hand',
          ar: 'تَغْسِلُ فَاطِمَةُ يَدَهَا',
          romanized: 'taghsilu fāṭimatu yadahā',
          meaningEn: 'Fatima washes her hand (yad-a-hā = direct object)',
          meaningBn: 'ফাতেমা তার হাত ধোয় (হাত = মাফ\'উল বিহী / যবরযুক্ত)',
          exampleAr: 'تَغْسِلُ فَاطِمَةُ يَدَهَا قَبْلَ الأَكْلِ',
          exampleEn: 'Fatima washes her hand before eating.',
          exampleBn: 'ফাতেমা খাওয়ার পূর্বে তার হাত ধোয়।',
          audioKey: 'تَغْسِلُ فَاطِمَةُ يَدَهَا',
          exampleAudioKey: 'تَغْسِلُ فَاطِمَةُ يَدَهَا قَبْلَ الأَكْلِ',
          emoji: '🧼',
        },
        {
          id: 'c-mafool-board',
          ar: 'مَسَحَ رَاشِدٌ السَّبُّورَةَ',
          romanized: 'm रूप masaha rāshidun as-sabbūrata',
          meaningEn: 'Rashid wiped the blackboard (as-sabbūrat-a = direct object)',
          meaningBn: 'রাশেদ ব্ল্যাকবোর্ডটি মুছল (ব্ল্যাকবোর্ড = মাফ\'উল বিহী)',
          exampleAr: 'مَسَحَ رَاشِدٌ السَّبُّورَةَ بِالمِسَّاحَةِ',
          exampleEn: 'Rashid wiped the blackboard with the eraser.',
          exampleBn: 'রাশেদ ডাস্টার দিয়ে ব্ল্যাকবোর্ডটি মুছল।',
          audioKey: 'مَسَحَ رَاشِدٌ السَّبُّورَةَ',
          exampleAudioKey: 'مَسَحَ رَاشِدٌ السَّبُّورَةَ بِالمِسَّاحَةِ',
          emoji: '📋',
        },
        {
          id: 'c-mafool-clothing',
          ar: 'لَبِسَتْ لِبَاسًا جَمِيلًا',
          romanized: 'labisat libāsan jamīlan',
          meaningEn: 'She wore beautiful clothing (libās-an = Tanween Fatha)',
          meaningBn: 'সে সুন্দর পোশাক পরিধান করল (পোশাক = দুই যবরযুক্ত মাফ\'উল)',
          exampleAr: 'لَبِسَتْ أُخْتُ مَاجِدٍ لِبَاسًا نَظِيفًا',
          exampleEn: 'Majid\'s sister wore clean clothing.',
          exampleBn: 'মাজেদের বোন পরিষ্কার পোশাক পরিধান করল।',
          audioKey: 'لَبِسَتْ لِبَاسًا جَمِيلًا',
          exampleAudioKey: 'لَبِسَتْ أُخْتُ مَاجِدٍ لِبَاسًا نَظِيفًا',
          emoji: '👗',
        },
        {
          id: 'c-mafool-kalam',
          ar: 'أَنَا أَفْهَمُ كَلَامَ اللهِ',
          romanized: 'anā afhamu kalāma Allāhi',
          meaningEn: 'I understand the speech of Allah (kalām-a = direct object)',
          meaningBn: 'আমি আল্লাহর বাণী বুঝি (কালাম = মাফ\'উল বিহী)',
          exampleAr: 'أَفْهَمُ كَلَامَ اللهِ لِأَنِّي أَعْرِفُ العَرَبِيَّةَ',
          exampleEn: 'I understand Allah\'s speech because I know Arabic.',
          exampleBn: 'আমি আল্লাহর বাণী বুঝি কেননা আমি আরবি ভাষা জানি।',
          audioKey: 'أَنَا أَفْهَمُ كَلَامَ اللهِ',
          exampleAudioKey: 'أَفْهَمُ كَلَامَ اللهِ لِأَنِّي أَعْرِفُ العَرَبِيَّةَ',
          emoji: '📖',
        },
      ],
    },
  },

  // 2. Page 30: Verb Conjugator - Transitive Verb غَسَلَ يَغْسِلُ (Bab Daraba)
  {
    id: 'v2-c1-l4-step-2-conjugator-ghasala',
    type: 'verb_conjugator',
    pageNumber: 30,
    titleEn: 'Verb Paradigm: غَسَلَ يَغْسِلُ (To Wash)',
    titleAr: 'تَصْرِيفُ فِعْلِ: غَسَلَ يَغْسِلُ (بَاب ضَرَبَ)',
    instructionEn: 'Switch between pronouns to observe how the transitive verb conjugates in past, present, and command.',
    instructionBn: 'সর্বনাম পরিবর্তন করে অতীত, বর্তমান ও আদেশসূচক রূপের পরিবর্তন লক্ষ্য করুন।',
    conjugatorPayload: {
      mode: 'explore',
      targetTense: 'past',
      verbs: [
        {
          id: 'verb_gasala',
          rootAr: 'غ س ل',
          masdarAr: 'غَسْلٌ',
          meaningEn: 'To wash',
          meaningBn: 'ধৌত করা',
          baabAr: 'بَاب ضَرَبَ يَضْرِبُ',
          baabEn: 'Bab Daraba (a - i pattern)',
          emoji: '🧼',
          forms: [
            {
              subjectAr: 'هُوَ',
              subjectEn: 'He',
              subjectBn: 'সে (পুং)',
              pastAr: 'غَسَلَ',
              presentAr: 'يَغْسِلُ',
              imperativeAr: 'اِغْسِلْ',
              pastMeaningEn: 'He washed',
              pastMeaningBn: 'সে ধৌত করল',
              presentMeaningEn: 'He washes',
              presentMeaningBn: 'সে ধোয়',
              audioKey: 'غَسَلَ',
            },
            {
              subjectAr: 'هِيَ',
              subjectEn: 'She',
              subjectBn: 'সে (স্ত্রী)',
              pastAr: 'غَسَلَتْ',
              presentAr: 'تَغْسِلُ',
              imperativeAr: 'اِغْسِلِي',
              pastMeaningEn: 'She washed',
              pastMeaningBn: 'সে ধৌত করল',
              presentMeaningEn: 'She washes',
              presentMeaningBn: 'সে ধোয়',
              audioKey: 'غَسَلَتْ',
            },
            {
              subjectAr: 'أَنْتَ',
              subjectEn: 'You (m)',
              subjectBn: 'তুমি (পুং)',
              pastAr: 'غَسَلْتَ',
              presentAr: 'تَغْسِلُ',
              imperativeAr: 'اِغْسِلْ',
              pastMeaningEn: 'You washed',
              pastMeaningBn: 'তুমি ধৌত করলে',
              presentMeaningEn: 'You wash',
              presentMeaningBn: 'তুমি ধোও',
              audioKey: 'غَسَلْتَ',
            },
            {
              subjectAr: 'أَنْتِ',
              subjectEn: 'You (f)',
              subjectBn: 'তুমি (স্ত্রী)',
              pastAr: 'غَسَلْتِ',
              presentAr: 'تَغْسِلِينَ',
              imperativeAr: 'اِغْسِلِي',
              pastMeaningEn: 'You washed (f)',
              pastMeaningBn: 'তুমি ধৌত করলে',
              presentMeaningEn: 'You wash (f)',
              presentMeaningBn: 'তুমি ধোও',
              audioKey: 'غَسَلْتِ',
            },
            {
              subjectAr: 'أَنَا',
              subjectEn: 'I',
              subjectBn: 'আমি',
              pastAr: 'غَسَلْتُ',
              presentAr: 'أَغْسِلُ',
              imperativeAr: 'اِغْسِلْ',
              pastMeaningEn: 'I washed',
              pastMeaningBn: 'আমি ধৌত করলাম',
              presentMeaningEn: 'I wash',
              presentMeaningBn: 'আমি ধুই',
              audioKey: 'غَسَلْتُ',
            },
          ],
        },
      ],
    },
  },

  // 3. Page 30-32: Vocab Prime - Essential Nouns & Particles
  {
    id: 'v2-c1-l4-step-3-vocab-nouns',
    type: 'vocab_prime',
    pageNumber: 30,
    titleEn: 'Vocabulary: School & Moral Objects',
    titleAr: 'مُفْرَدَاتُ الدَّرْسِ الرَّابِعِ',
    instructionEn: 'Listen to the 8 newly introduced nouns and particles.',
    instructionBn: '৮টি নতুন বিশেষ্য ও অব্যয়ের অর্থ মনোযোগ দিয়ে শুনুন।',
    vocabPayload: {
      words: [
        { id: 'v2_sabburah', ar: 'سَبُّورَةٌ', en: 'Blackboard', bn: 'ব্ল্যাকবোর্ড', romanized: 'sabbūratun', emoji: '📋' },
        { id: 'v2_missahah', ar: 'مِسَّاحَةٌ', en: 'Eraser / Duster', bn: 'ডাস্টার', romanized: 'missāḥatun', emoji: '🧽' },
        { id: 'v2_tariq', ar: 'طَرِيقٌ', en: 'Path / Road', bn: 'পথ / রাস্তা', romanized: 'ṭarīqun', emoji: '🛣️' },
        { id: 'v2_khamr', ar: 'خَمْرٌ', en: 'Wine / Intoxicant', bn: 'মদ / নেশাজাতীয় দ্রব্য', romanized: 'khamrun', emoji: '🍷' },
        { id: 'v2_dhubabah', ar: 'ذُبَابَةٌ', en: 'A Fly', bn: 'একটি মাছি', romanized: 'dhubābatun', emoji: '🪰' },
        { id: 'v2_baudah', ar: 'بَعُوضَةٌ', en: 'A Mosquito', bn: 'একটি মশা', romanized: 'ba‘ūḍatun', emoji: '🦟' },
        { id: 'v2_hubb', ar: 'حُبٌّ', en: 'Love', bn: 'ভালোবাসা', romanized: 'ḥubbun', emoji: '❤️' },
        { id: 'v2_jayyidan', ar: 'جَيِّدًا', en: 'Well / Thoroughly', bn: 'ভালোভাবে', romanized: 'jayyidan', emoji: '✨' },
      ],
    },
  },

  // 4. Page 30-32: Speed Pair - Verbs & Direct Objects
  {
    id: 'v2-c1-l4-step-4-speed-pair',
    type: 'speed_pair',
    pageNumber: 30,
    titleEn: 'Speed Pair: Verb-Object Combinations',
    titleAr: 'مُطَابَقَةُ الفِعْلِ وَالمَفْعُولِ بِهِ',
    instructionEn: 'Match each Arabic verb-object phrase to its accurate meaning.',
    instructionBn: 'প্রতিটি আরবি ক্রিয়া ও কর্মের সঠিক অর্থ মেলাও।',
    pairPayload: {
      pairs: [
        { id: 'sp-1', ar: 'مَسَحَ السَّبُّورَةَ', meaning: 'He wiped the blackboard', meaningBn: 'সে ব্ল্যাকবোর্ড মুছল' },
        { id: 'sp-2', ar: 'تَغْسِلُ يَدَهَا', meaning: 'She washes her hand', meaningBn: 'সে তার হাত ধোয়' },
        { id: 'sp-3', ar: 'أَفْهَمُ كَلَامَ اللهِ', meaning: 'I understand Allah\'s speech', meaningBn: 'আমি আল্লাহর বাণী বুঝি' },
        { id: 'sp-4', ar: 'حَفِظَ الدَّرْسَ', meaning: 'He memorized the lesson', meaningBn: 'সে পাঠ মুখস্থ করল' },
        { id: 'sp-5', ar: 'يَشْرَبُ مَاءَ زَمْزَمَ', meaning: 'He drinks Zamzam water', meaningBn: 'সে যমযমের পানি পান করে' },
      ],
    },
  },

  // 5. Page 30: Sentence Assembly - Fatima Washing Hands
  {
    id: 'v2-c1-l4-step-5-assembly-fatima-hand',
    type: 'sentence_assembly',
    pageNumber: 30,
    titleEn: 'Sentence Assembly: Hand Washing Hygiene',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: غَسْلُ اليَدِ',
    instructionEn: 'Assemble: "Fatima washes her hand before eating."',
    instructionBn: 'বাক্যটি সাজান: "ফাতেমা খাওয়ার পূর্বে তার হাত ধোয়।"',
    assemblyPayload: {
      promptEn: 'Fatima washes her hand before eating.',
      promptBn: 'ফাতেমা খাওয়ার পূর্বে তার হাত ধোয়।',
      expectedAnswer: ['تَغْسِلُ', 'فَاطِمَةُ', 'يَدَهَا', 'قَبْلَ', 'الأَكْلِ'],
      chips: ['تَغْسِلُ', 'فَاطِمَةُ', 'يَدَهَا', 'قَبْلَ', 'الأَكْلِ', 'بَعْدَ', 'يَدُهَا'],
      expectedAnswerBn: ['ফাতেমা', 'খাওয়ার', 'পূর্বে', 'তার', 'হাত', 'ধোয়'],
      chipsBn: ['ফাতেমা', 'খাওয়ার', 'পূর্বে', 'তার', 'হাত', 'ধোয়', 'পরে', 'মুখ'],
      emoji: '🧼',
    },
  },

  // 6. Page 30: Sentence Assembly - Rashid Erasing the Board
  {
    id: 'v2-c1-l4-step-6-assembly-rashid-board',
    type: 'sentence_assembly',
    pageNumber: 30,
    titleEn: 'Sentence Assembly: Blackboard Cleaning',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: مَسْحُ السَّبُّورَةِ',
    instructionEn: 'Assemble: "Rashid wiped the blackboard with the eraser."',
    instructionBn: 'বাক্যটি সাজান: "রাশেদ ডাস্টার দিয়ে ব্ল্যাকবোর্ডটি মুছল।"',
    assemblyPayload: {
      promptEn: 'Rashid wiped the blackboard with the eraser.',
      promptBn: 'রাশেদ ডাস্টার দিয়ে ব্ল্যাকবোর্ডটি মুছল।',
      expectedAnswer: ['مَسَحَ', 'رَاشِدٌ', 'السَّبُّورَةَ', 'بِالمِسَّاحَةِ'],
      chips: ['مَسَحَ', 'رَاشِدٌ', 'السَّبُّورَةَ', 'بِالمِسَّاحَةِ', 'السَّبُّورَةُ', 'بِالمِنْدِيلِ'],
      expectedAnswerBn: ['রাশেদ', 'ডাস্টার', 'দিয়ে', 'ব্ল্যাকবোর্ডটি', 'মুছল'],
      chipsBn: ['রাশেদ', 'ডাস্টার', 'দিয়ে', 'ব্ল্যাকবোর্ডটি', 'মুছল', 'রুমাল', 'লিখল'],
      emoji: '📋',
    },
  },

  // 7. Page 30: Sentence Assembly - Majid's Sister Wearing Clothes
  {
    id: 'v2-c1-l4-step-7-assembly-sister-dress',
    type: 'sentence_assembly',
    pageNumber: 30,
    titleEn: 'Sentence Assembly: Beautiful Clothing',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: لِبَاسٌ جَمِيلٌ',
    instructionEn: 'Assemble: "Majid\'s sister wore beautiful clothing."',
    instructionBn: 'বাক্যটি সাজান: "মাজেদের বোন সুন্দর পোশাক পরল।"',
    assemblyPayload: {
      promptEn: 'Majid\'s sister wore beautiful clothing.',
      promptBn: 'মাজেদের বোন সুন্দর পোশাক পরল।',
      expectedAnswer: ['لَبِسَتْ', 'أُخْتُ', 'مَاجِدٍ', 'لِبَاسًا', 'جَمِيلًا'],
      chips: ['لَبِسَتْ', 'أُخْتُ', 'مَاجِدٍ', 'لِبَاسًا', 'جَمِيلًا', 'لَبِسَ', 'لِبَاسٌ'],
      expectedAnswerBn: ['মাজেদের', 'বোন', 'সুন্দর', 'পোশাক', 'পরল'],
      chipsBn: ['মাজেদের', 'বোন', 'সুন্দর', 'পোশাক', 'পরল', 'ভাই', 'নতুন'],
      emoji: '👗',
    },
  },

  // 8. Page 30: Cloze Choice - Accusative Case Identification
  {
    id: 'v2-c1-l4-step-8-cloze-case-ending',
    type: 'cloze_choice',
    pageNumber: 30,
    titleEn: 'Direct Object Vowel Selection',
    titleAr: 'اخْتِيَارُ حَرَكَةِ المَفْعُولِ بِهِ',
    instructionEn: 'Select the correct vowel ending for the blackboard (Direct Object): Fatha for accusative.',
    instructionBn: 'মাফ\'উল বিহীর সঠিক হরকত নির্বাচন করুন: কর্মকারকে যবর (ফাতহা) হবে।',
    clozePayload: {
      questionAr: 'مَسَحَ رَاشِدٌ ... بِالمِسَّاحَةِ .',
      questionEn: 'Rashid wiped the ... with the eraser.',
      questionBn: 'রাশেদ ডাস্টার দিয়ে ... মুছল।',
      partialAnswerAr: 'مَسَحَ رَاشِدٌ ... بِالمِسَّاحَةِ .',
      correctAnswer: 'السَّبُّورَةَ',
      options: ['السَّبُّورَةَ', 'السَّبُّورَةُ', 'السَّبُّورَةِ'],
      emoji: '🎯',
    },
  },

  // 9. Page 31: Alternative QA - Classroom Story Comprehension
  {
    id: 'v2-c1-l4-step-9-qa-classroom',
    type: 'alternative_qa',
    pageNumber: 31,
    titleEn: 'Classroom Dialogue Comprehension',
    titleAr: 'فَهْمُ حِوَارِ الفَصْلِ المَدْرَسِيِّ',
    instructionEn: 'Answer each question about Rashid and the teacher in class.',
    instructionBn: 'শ্রেণিকক্ষে শিক্ষক ও রাশেদের কথোপকথন অনুযায়ী প্রশ্নের উত্তর দিন।',
    alternativeQAPayload: {
      contextAr: 'مَسَحَ رَاشِدٌ السَّبُّورَةَ بِالمِسَّاحَةِ، وَذَهَبَ الطَّالِبُ الجَدِيدُ إِلَى السَّبُّورَةِ وَكَتَبَ عَلَيْهَا جُمْلَةً: "اللهُ وَاحِدٌ".',
      questions: [
        {
          id: 'q-board-what',
          questionAr: 'مَاذَا مَسَحَ رَاشِدٌ بِالمِسَّاحَةِ ؟',
          optionsAr: ['مَسَحَ السَّبُّورَةَ', 'مَسَحَ الجِدَارَ'],
          correctAnswerAr: 'مَسَحَ السَّبُّورَةَ',
        },
        {
          id: 'q-student-write',
          questionAr: 'مَاذَا كَتَبَ الطَّالِبُ الجَدِيدُ عَلَى السَّبُّورَةِ ؟',
          optionsAr: ['اللهُ وَاحِدٌ', 'الدَّرْسُ كَبِيرٌ'],
          correctAnswerAr: 'اللهُ وَاحِدٌ',
        },
      ],
    },
  },

  // 10. Page 32: Sentence Assembly - Student Writing Sentence
  {
    id: 'v2-c1-l4-step-10-assembly-student-sentence',
    type: 'sentence_assembly',
    pageNumber: 32,
    titleEn: 'Sentence Assembly: The New Student',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: كِتَابَةُ الجُمْلَةِ',
    instructionEn: 'Assemble: "The new student went to the blackboard and wrote a sentence."',
    instructionBn: 'বাক্যটি সাজান: "নতুন ছাত্রটি ব্ল্যাকবোর্ডের কাছে গেল এবং একটি বাক্য লিখল।"',
    assemblyPayload: {
      promptEn: 'The new student went to the blackboard and wrote a sentence.',
      promptBn: 'নতুন ছাত্রটি ব্ল্যাকবোর্ডের কাছে গেল এবং একটি বাক্য লিখল।',
      expectedAnswer: ['ذَهَبَ', 'الطَّالِبُ', 'الجَدِيدُ', 'إِلَى', 'السَّبُّورَةِ', 'وَكَتَبَ', 'جُمْلَةً'],
      chips: ['ذَهَبَ', 'الطَّالِبُ', 'الجَدِيدُ', 'إِلَى', 'السَّبُّورَةِ', 'وَكَتَبَ', 'جُمْلَةً', 'جُمْلَةٌ', 'رَجَعَ'],
      expectedAnswerBn: ['নতুন', 'ছাত্রটি', 'ব্ল্যাকবোর্ডের', 'কাছে', 'গেল', 'এবং', 'একটি', 'বাক্য', 'লিখল'],
      chipsBn: ['নতুন', 'ছাত্রটি', 'ব্ল্যাকবোর্ডের', 'কাছে', 'গেল', 'এবং', 'একটি', 'বাক্য', 'লিখল', 'শব্দ', 'মুছল'],
      emoji: '✍️',
    },
  },

  // 11. Page 32: Sentence Assembly - Zamzam Water in Hajj
  {
    id: 'v2-c1-l4-step-11-assembly-zamzam',
    type: 'sentence_assembly',
    pageNumber: 32,
    titleEn: 'Sentence Assembly: Zamzam in Hajj',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ: شُرْبُ مَاءِ زَمْزَمَ',
    instructionEn: 'Assemble: "The Muslim drinks Zamzam water during Hajj and Umrah."',
    instructionBn: 'বাক্যটি সাজান: "মুসলিম হজ ও উমরায় যমযমের পানি পান করে।"',
    assemblyPayload: {
      promptEn: 'The Muslim drinks Zamzam water during Hajj and Umrah.',
      promptBn: 'মুসলিম হজ ও উমরায় যমযমের পানি পান করে।',
      expectedAnswer: ['يَشْرَبُ', 'المُسْلِمُ', 'مَاءَ', 'زَمْزَمَ', 'فِي', 'الحَجِّ', 'وَالعُمْرَةِ'],
      chips: ['يَشْرَبُ', 'المُسْلِمُ', 'مَاءَ', 'زَمْزَمَ', 'فِي', 'الحَجِّ', 'وَالعُمْرَةِ', 'مَاءُ', 'شَرِبَ'],
      expectedAnswerBn: ['মুসলিম', 'হজ', 'ও', 'উমরায়', 'যমযমের', 'পানি', 'পান', 'করে'],
      chipsBn: ['মুসলিম', 'হজ', 'ও', 'উমরায়', 'যমযমের', 'পানি', 'পান', 'করে', 'দুধ', 'খায়'],
      emoji: '🕋',
    },
  },

  // 12. Page 32: Sentence Assembly - Divine Victory via Small Creatures
  {
    id: 'v2-c1-l4-step-12-assembly-victory-creatures',
    type: 'sentence_assembly',
    pageNumber: 32,
    titleEn: 'Theological Maxim: Victory of Religion',
    titleAr: 'نَصْرُ الدِّينِ بِأَصْغَرِ الخَلْقِ',
    instructionEn: 'Assemble: "Allah supports His religion through a fly and a mosquito."',
    instructionBn: 'বাক্যটি সাজান: "আল্লাহ তাঁর দ্বীনকে মাছি ও মশা দ্বারাও সাহায্য করেন।"',
    assemblyPayload: {
      promptEn: 'Allah supports His religion through a fly and a mosquito.',
      promptBn: 'আল্লাহ তাঁর দ্বীনকে মাছি ও মশা দ্বারাও সাহায্য করেন।',
      expectedAnswer: ['يَنْصُرُ', 'اللهُ', 'دِينَهُ', 'بِذُبَابَةٍ', 'وَبَعُوضَةٍ'],
      chips: ['يَنْصُرُ', 'اللهُ', 'دِينَهُ', 'بِذُبَابَةٍ', 'وَبَعُوضَةٍ', 'دِينُهُ', 'نَصَرَ'],
      expectedAnswerBn: ['আল্লাহ', 'তাঁর', 'দ্বীনকে', 'মাছি', 'ও', 'মশা', 'দ্বারা', 'সাহায্য', 'করেন'],
      chipsBn: ['আল্লাহ', 'তাঁর', 'দ্বীনকে', 'মাছি', 'ও', 'মশা', 'দ্বারা', 'সাহায্য', 'করেন', 'পাখি', 'করেছেন'],
      emoji: '🪰',
    },
  },

  // 13. Page 32: Alternative QA - Ethical & Dietary Discernment
  {
    id: 'v2-c1-l4-step-13-qa-dietary',
    type: 'alternative_qa',
    pageNumber: 32,
    titleEn: 'Dietary Discernment: Honey vs Wine',
    titleAr: 'التَّمْيِيزُ بَيْنَ العَسَلِ وَالخَمْرِ',
    instructionEn: 'Answer questions based on the moral principles in the lesson.',
    instructionBn: 'পাঠের নৈতিক মূলনীতি অনুযায়ী প্রশ্নের উত্তর দিন।',
    alternativeQAPayload: {
      contextAr: 'يَشْرَبُ المُسْلِمُ العَسَلَ وَلَا يَشْرَبُ الخَمْرَ لِأَنَّهَا حَرَامٌ.',
      questions: [
        {
          id: 'q-drink-choice',
          questionAr: 'أَ يَشْرَبُ المُسْلِمُ العَسَلَ أَمِ الخَمْرَ ؟',
          optionsAr: ['يَشْرَبُ العَسَلَ', 'يَشْرَبُ الخَمْرَ'],
          correctAnswerAr: 'يَشْرَبُ العَسَلَ',
        },
        {
          id: 'q-wine-why',
          questionAr: 'لِمَاذَا لَا يَشْرَبُ المُسْلِمُ الخَمْرَ ؟',
          optionsAr: ['لِأَنَّهَا حَرَامٌ', 'لِأَنَّهَا بَارِدَةٌ'],
          correctAnswerAr: 'لِأَنَّهَا حَرَامٌ',
        },
      ],
    },
  },

  // 14. Page 33: Sentence Assembly - Love for Arabic in the Heart
  {
    id: 'v2-c1-l4-step-14-assembly-love-arabic',
    type: 'sentence_assembly',
    pageNumber: 33,
    titleEn: 'Spiritual Maxim: Love for Arabic',
    titleAr: 'غَرْسُ حُبِّ اللُّغَةِ العَرَبِيَّةِ',
    instructionEn: 'Assemble: "I planted love for the Arabic language in my heart."',
    instructionBn: 'বাক্যটি সাজান: "আমি আমার অন্তরে আরবি ভাষার ভালোবাসা রোপণ করলাম।"',
    assemblyPayload: {
      promptEn: 'I planted love for the Arabic language in my heart.',
      promptBn: 'আমি আমার অন্তরে আরবি ভাষার ভালোবাসা রোপণ করলাম।',
      expectedAnswer: ['غَرَسْتُ', 'فِي', 'قَلْبِي', 'حُبَّ', 'اللُّغَةِ', 'العَرَبِيَّةِ'],
      chips: ['غَرَسْتُ', 'فِي', 'قَلْبِي', 'حُبَّ', 'اللُّغَةِ', 'العَرَبِيَّةِ', 'حُبُّ', 'غَرَسَ'],
      expectedAnswerBn: ['আমি', 'আমার', 'অন্তরে', 'আরবি', 'ভাষার', 'ভালোবাসা', 'রোপণ', 'করলাম'],
      chipsBn: ['আমি', 'আমার', 'অন্তরে', 'আরবি', 'ভাষার', 'ভালোবাসা', 'রোপণ', 'করলাম', 'মনে', 'পড়লাম'],
      emoji: '❤️',
    },
  },

  // 15. Page 30: Syntactic Dissector (Tarkib) - Transitive Sentence
  {
    id: 'v2-c1-l4-step-15-tarkib-transitive',
    type: 'tarkib_dissector',
    pageNumber: 30,
    titleEn: 'Syntactic Dissector: Verbal Sentence with Direct Object',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ الفِعْلِيَّةِ المُتَعَدِّيَةِ',
    instructionEn: 'Slot each word into its syntactic role: Action, Doer, Direct Object, and Prepositional Attachment.',
    instructionBn: 'প্রতিটি শব্দকে তার সঠিক ব্যাকরণিক স্থানে বসান: কাজ, কর্তা, কর্ম ও متعلق।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-masaha-board',
          sentenceAr: 'مَسَحَ رَاشِدٌ السَّبُّورَةَ بِالمِسَّاحَةِ',
          sentenceTypeAr: 'جُمْلَةٌ فِعْلِيَّةٌ مُتَعَدِّيَةٌ',
          sentenceTypeEn: 'Transitive Verbal Sentence',
          sentenceTypeBn: 'সকর্মক ক্রিয়াবাচক বাক্য',
          slots: [
            { roleAr: 'فِعْلٌ مَاضٍ', roleEn: 'Past Action', roleBn: 'অতীত কাজ', expectedWordAr: 'مَسَحَ' },
            { roleAr: 'فَاعِلٌ', roleEn: 'Doer / Subject', roleBn: 'কর্তা (ফায়েল)', expectedWordAr: 'رَاشِدٌ' },
            { roleAr: 'مَفْعُولٌ بِهِ', roleEn: 'Direct Object', roleBn: 'কর্ম (মাফ\'উল বিহী)', expectedWordAr: 'السَّبُّورَةَ' },
            { roleAr: 'مُتَعَلِّقٌ بِالفِعْلِ', roleEn: 'Prepositional Attachment', roleBn: 'ক্রিয়ার متعلق', expectedWordAr: 'بِالمِسَّاحَةِ' },
          ],
          availableWordsAr: ['مَسَحَ', 'رَاشِدٌ', 'السَّبُّورَةَ', 'بِالمِسَّاحَةِ'],
        },
      ],
    },
  },

  // 16. Page 32: Syntactic Dissector (Tarkib) - Compound Direct Object (Mudaf-Mudaf Ilayh)
  {
    id: 'v2-c1-l4-step-16-tarkib-compound-object',
    type: 'tarkib_dissector',
    pageNumber: 32,
    titleEn: 'Syntactic Dissector: Compound Direct Object',
    titleAr: 'تَرْكِيبُ المَفْعُولِ بِهِ المُرَكَّبِ الإِضَافِيِّ',
    instructionEn: 'Slot each component: Verb, Subject, Direct Object (Mudaf), and Possessor (Mudaf Ilayh).',
    instructionBn: 'প্রতিটি অংশ বসান: ক্রিয়া, কর্তা, কর্ম (মুদাফ) ও মুদাফ ইলাইহ।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-shariba-zamzam',
          sentenceAr: 'يَشْرَبُ المُسْلِمُ مَاءَ زَمْزَمَ',
          sentenceTypeAr: 'جُمْلَةٌ فِعْلِيَّةٌ مُتَعَدِّيَةٌ',
          sentenceTypeEn: 'Transitive Verbal Sentence',
          sentenceTypeBn: 'সকর্মক ক্রিয়াবাচক বাক্য',
          slots: [
            { roleAr: 'فِعْلٌ مُضَارِعٌ', roleEn: 'Present Action', roleBn: 'বর্তমান কাজ', expectedWordAr: 'يَشْرَبُ' },
            { roleAr: 'فَاعِلٌ', roleEn: 'Doer / Subject', roleBn: 'কর্তা (ফায়েল)', expectedWordAr: 'المُسْلِمُ' },
            { roleAr: 'مَفْعُولٌ بِهِ (مُضَافٌ)', roleEn: 'Direct Object (Mudaf)', roleBn: 'কর্ম (মুদাফ)', expectedWordAr: 'مَاءَ' },
            { roleAr: 'مُضَافٌ إِلَيْهِ', roleEn: 'Possessor (Mudaf Ilayh)', roleBn: 'মুদাফ ইলাইহ', expectedWordAr: 'زَمْزَمَ' },
          ],
          availableWordsAr: ['يَشْرَبُ', 'المُسْلِمُ', 'مَاءَ', 'زَمْزَمَ'],
        },
      ],
    },
  },

  // 17. Page 32: Quranic Echo - Surah Al-Hajj (22:73)
  {
    id: 'v2-c1-l4-step-17-quranic-echo-dhubab',
    type: 'quranic_echo',
    pageNumber: 32,
    titleEn: 'The Fly in Divine Parable: ذُبَابًا',
    titleAr: 'صَدَى القُرْآنِ: (لَن يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ)',
    instructionEn: 'Reflect on how the exact direct object "ذُبَابًا" (a fly in the accusative case) appears in Surah Al-Hajj.',
    instructionBn: 'সূরা আল-হজ্জে মাফ\'উল বিহী হিসেবে "ذُبَابًا" (একটি মাছি) কীভাবে এসেছে তা অনুধাবন করুন।',
    echoPayload: {
      surahNumber: 22,
      ayahNumber: 73,
      surahNameAr: 'الحَجّ',
      surahNameEn: 'Al-Hajj',
      arabicText: 'إِنَّ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ لَن يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ',
      translationEn: 'Indeed, those you invoke besides Allah can never create a fly, even if they gathered together for that purpose.',
      translationBn: 'তোমরা আল্লাহকে ছাড়া যাদের ডাকো, তারা কখনো একটি মাছিও সৃষ্টি করতে পারবে না, যদিও তারা সকলে এর জন্য একত্রিত হয়।',
      highlightedWords: ['لَن', 'يَخْلُقُوا', 'ذُبَابًا'],
      reflection: 'The word "ذُبَابًا" (a fly) you mastered today appears in this profound Quranic challenge as the direct object (مَفْعُول بِهِ) with Tanween Fatha, emphasizing the sheer inability of false deities to create even the humblest insect.',
    },
  },
];

export const VOL2_CH1_LESSON_04_SESSION: LessonSessionData = {
  volumeId: 2,
  chapterId: 1,
  lessonNum: 4,
  titleEn: 'The Direct Object (المَفْعُولُ بِهِ) & Transitive Verbs',
  titleAr: 'المَفْعُولُ بِهِ وَالأَفْعَالُ المُتَعَدِّيَةُ',
  wordsLearned: [
    'غَسَلَ', 'مَسَحَ', 'عَرَفَ', 'لَبِسَ', 'فَهِمَ', 'نَصَرَ', 'حَفِظَ', 'خَلَعَ', 'سَأَلَ',
    'سَبُّورَةٌ', 'مِسَّاحَةٌ', 'طَرِيقٌ', 'خَمْرٌ', 'ذُبَابَةٌ', 'بَعُوضَةٌ', 'حُبٌّ', 'جَيِّدًا'
  ],
  steps: VOL2_CH1_LESSON_04_STEPS,
};

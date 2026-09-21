// Volume 2 Chapter 1 Lesson 2 Interactive Session Steps (100% Curricular Parity with Physical Book Scans pages 20-23)
import type { LessonSessionData, SessionStep } from './lessonSessionTypes';

export const VOL2_CH1_LESSON_02_STEPS: SessionStep[] = [
  // 1. Page 20: Concept Discovery - Past Tense Negation with مَا
  {
    id: 'v2-c1-l2-step-1-concept-past-negation',
    type: 'concept_intro',
    pageNumber: 20,
    titleEn: 'Past Tense Negation: Adding مَا',
    titleAr: 'نَفْيُ الفِعْلِ المَاضِي بِـ (مَا)',
    instructionEn: 'Observe how adding مَا before a past verb makes it negative without altering its vowel endings.',
    instructionBn: 'লক্ষ্য করুন: অতীতকালীন ক্রিয়ার পূর্বে مَا বসালে তা না-বোধক হয়ে যায়, হরকতে কোনো পরিবর্তন হয় না।',
    conceptPayload: {
      concepts: [
        {
          id: 'c-neg-faala',
          ar: 'مَا فَعَلَ',
          romanized: 'mā fa‘ala',
          meaningEn: 'He did not do',
          meaningBn: 'সে করেনি',
          exampleAr: 'مَا فَعَلَ رَاشِدٌ شَيْئًا',
          exampleEn: 'Rashid did not do anything.',
          exampleBn: 'রাশেদ কিছুই করেনি।',
          audioKey: 'مَا فَعَلَ',
          exampleAudioKey: 'مَا فَعَلَ رَاشِدٌ شَيْئًا',
          emoji: '⚡',
        },
        {
          id: 'c-neg-kharaja',
          ar: 'مَا خَرَجَ',
          romanized: 'mā kharaja',
          meaningEn: 'He did not exit',
          meaningBn: 'সে বের হয়নি',
          exampleAr: 'مَا خَرَجَ التَّاجِرُ مِنْ بَيْتِهِ',
          exampleEn: 'The merchant did not exit from his house.',
          exampleBn: 'ব্যবসায়ীটি তার ঘর থেকে বের হয়নি।',
          audioKey: 'مَا خَرَجَ',
          exampleAudioKey: 'مَا خَرَجَ التَّاجِرُ مِنْ بَيْتِهِ',
          emoji: '🚪',
        },
        {
          id: 'c-neg-dhahaba',
          ar: 'مَا ذَهَبَ',
          romanized: 'mā dhahaba',
          meaningEn: 'He did not go',
          meaningBn: 'সে যায়নি',
          exampleAr: 'مَا ذَهَبَ أَخُو شَاهِدٍ إِلَى الْمَدْرَسَةِ',
          exampleEn: 'Shahid\'s brother did not go to the madrasah.',
          exampleBn: 'শাহিদের ভাই মাদরাসায় যায়নি।',
          audioKey: 'مَا ذَهَبَ',
          exampleAudioKey: 'مَا ذَهَبَ أَخُو شَاهِدٍ إِلَى الْمَدْرَسَةِ',
          emoji: '🚶‍♂️',
        },
      ],
    },
  },

  // 2. Page 20: Verb Conjugator - Past Negation Matrix
  {
    id: 'v2-c1-l2-step-2-conjugator-past-neg',
    type: 'verb_conjugator',
    pageNumber: 20,
    titleEn: 'Past Negation Conjugation Across Persons',
    titleAr: 'تَصْرِيفُ المَاضِي المَنْفِيِّ',
    instructionEn: 'Explore how past tense negation applies to all 5 pronoun persons.',
    instructionBn: '৫টি সর্বনামে অতীতকালের না-বোধক রূপগুলো শুনুন ও লক্ষ্য করুন।',
    conjugatorPayload: {
      mode: 'explore',
      targetTense: 'past',
      verbs: [
        {
          id: 'v-neg-dhahaba',
          rootAr: 'مَا ذَهَبَ',
          masdarAr: 'الذَّهَابُ',
          meaningEn: 'Did not go',
          meaningBn: 'যায়নি',
          baabAr: 'بَاب فَتَحَ يَفْتَحُ',
          emoji: '🚶‍♂️',
          forms: [
            { subjectAr: 'هُوَ', subjectEn: 'He', subjectBn: 'সে (পুং)', pastAr: 'مَا ذَهَبَ', presentAr: 'لَا يَذْهَبُ' },
            { subjectAr: 'هِيَ', subjectEn: 'She', subjectBn: 'সে (স্ত্রী)', pastAr: 'مَا ذَهَبَتْ', presentAr: 'لَا تَذْهَبُ' },
            { subjectAr: 'أَنْتَ', subjectEn: 'You (m)', subjectBn: 'তুমি (পুং)', pastAr: 'مَا ذَهَبْتَ', presentAr: 'لَا تَذْهَبُ' },
            { subjectAr: 'أَنْتِ', subjectEn: 'You (f)', subjectBn: 'তুমি (স্ত্রী)', pastAr: 'مَا ذَهَبْتِ', presentAr: 'لَا تَذْهَبِينَ' },
            { subjectAr: 'أَنَا', subjectEn: 'I', subjectBn: 'আমি', pastAr: 'مَا ذَهَبْتُ', presentAr: 'لَا أَذْهَبُ' },
          ],
        },
        {
          id: 'v-neg-kharaja',
          rootAr: 'مَا خَرَجَ',
          masdarAr: 'الخُرُوجُ',
          meaningEn: 'Did not exit',
          meaningBn: 'বের হয়নি',
          baabAr: 'بَاب نَصَرَ يَنْصُرُ',
          emoji: '🚪',
          forms: [
            { subjectAr: 'هُوَ', subjectEn: 'He', subjectBn: 'সে (পুং)', pastAr: 'مَا خَرَجَ', presentAr: 'لَا يَخْرُجُ' },
            { subjectAr: 'هِيَ', subjectEn: 'She', subjectBn: 'সে (স্ত্রী)', pastAr: 'مَا خَرَجَتْ', presentAr: 'لَا تَخْرُجُ' },
            { subjectAr: 'أَنْتَ', subjectEn: 'You (m)', subjectBn: 'তুমি (পুং)', pastAr: 'مَا خَرَجْتَ', presentAr: 'لَا تَخْرُجُ' },
            { subjectAr: 'أَنْتِ', subjectEn: 'You (f)', subjectBn: 'তুমি (স্ত্রী)', pastAr: 'مَا خَرَجْتِ', presentAr: 'لَا تَخْرُجِينَ' },
            { subjectAr: 'أَنَا', subjectEn: 'I', subjectBn: 'আমি', pastAr: 'مَا خَرَجْتُ', presentAr: 'لَا أَخْرُجُ' },
          ],
        },
      ],
    },
  },

  // 3. Page 21: Concept Discovery - Present Tense Negation with لَا
  {
    id: 'v2-c1-l2-step-3-concept-present-negation',
    type: 'concept_intro',
    pageNumber: 21,
    titleEn: 'Present Tense Negation: Adding لَا',
    titleAr: 'نَفْيُ الفِعْلِ المُضَارِعِ بِـ (لَا)',
    instructionEn: 'Notice that present verbs are negated using لَا (does not / will not).',
    instructionBn: 'লক্ষ্য করুন: বর্তমান ও ভবিষ্যৎকালীন ক্রিয়াকে না-বোধক করতে لَا ব্যবহৃত হয়।',
    conceptPayload: {
      concepts: [
        {
          id: 'c-neg-yafalu',
          ar: 'لَا يَفْعَلُ',
          romanized: 'lā yaf‘alu',
          meaningEn: 'He does not / will not do',
          meaningBn: 'সে করে না / করবে না',
          exampleAr: 'لَا يَفْعَلُ الوَلَدُ الطَّيِّبُ شَرًّا',
          exampleEn: 'The good boy does not do evil.',
          exampleBn: 'ভালো ছেলে মন্দ কাজ করে না।',
          audioKey: 'لَا يَفْعَلُ',
          exampleAudioKey: 'لَا يَفْعَلُ الوَلَدُ الطَّيِّبُ شَرًّا',
          emoji: '🛑',
        },
        {
          id: 'c-neg-yakhruju',
          ar: 'لَا يَخْرُجُ',
          romanized: 'lā yakhruju',
          meaningEn: 'He does not / will not exit',
          meaningBn: 'সে বের হয় না / হবে না',
          exampleAr: 'لَا يَخْرُجُ الآنَ مِنَ المَسْجِدِ',
          exampleEn: 'He is not exiting from the mosque now.',
          exampleBn: 'সে এখন মসজিদ থেকে বের হচ্ছে না।',
          audioKey: 'لَا يَخْرُجُ',
          exampleAudioKey: 'لَا يَخْرُجُ الآنَ مِنَ المَسْجِدِ',
          emoji: '🕌',
        },
      ],
    },
  },

  // 4. Page 22: Vocab Prime - Core Nouns
  {
    id: 'v2-c1-l2-step-4-vocab-new-nouns',
    type: 'vocab_prime',
    pageNumber: 22,
    titleEn: 'Lesson 2 Core Vocabulary',
    titleAr: 'مُفْرَدَاتُ الدَّرْسِ الثَّانِي',
    instructionEn: 'Listen to the essential new nouns introduced in the dialogues.',
    instructionBn: 'কথোপকথনে ব্যবহৃত নতুন বিশেষ্য পদগুলো শুনুন।',
    vocabPayload: {
      words: [
        { id: 'v2_nawm', ar: 'نَوْمٌ', en: 'Sleep', bn: 'ঘুম / নিদ্রা', romanized: 'nawmun', emoji: '😴' },
        { id: 'v2_yamin', ar: 'يَمِينٌ', en: 'Right hand / Right side', bn: 'ডান দিক / ডান হাত', romanized: 'yamīnun', emoji: '👉' },
        { id: 'v2_shimal', ar: 'شِمَالٌ', en: 'Left hand / Left side', bn: 'বাম দিক / বাম হাত', romanized: 'shimālun', emoji: '👈' },
        { id: 'v2_waraqah', ar: 'وَرَقَةٌ', en: 'A sheet of paper / A leaf', bn: 'একটি পাতা (কাগজ বা গাছের)', romanized: 'waraqatun', emoji: '📄' },
        { id: 'v2_radi', ar: 'رَدِيءٌ', en: 'Bad / Poor quality', bn: 'খারাপ / নিকৃষ্ট', romanized: 'radī’un', emoji: '🗑️' },
        { id: 'v2_daw', ar: 'ضَوْءٌ', en: 'Light', bn: 'আলো', romanized: 'ḍaw’un', emoji: '💡' },
        { id: 'v2_mawt', ar: 'مَوْتٌ', en: 'Death', bn: 'মৃত্যু', romanized: 'mawtun', emoji: '⌛' },
        { id: 'v2_mumin', ar: 'مُؤْمِنٌ', en: 'Believer', bn: 'ঈমানদার / মুমিন', romanized: 'mu’minun', emoji: '✨' },
      ],
    },
  },

  // 5. Page 21: Speed Pair - Negated Verbs Recall
  {
    id: 'v2-c1-l2-step-5-speed-pair-negation',
    type: 'speed_pair',
    pageNumber: 21,
    titleEn: 'Synaptic Recall: Negated Verbs',
    titleAr: 'تَطْبِيقُ الأَفْعَالِ المَنْفِيَّةِ',
    instructionEn: 'Match each negated Arabic verb to its precise meaning.',
    instructionBn: 'না-বোধক আরবি ক্রিয়ার সাথে সঠিক অর্থ মিলিয়ে দিন।',
    pairPayload: {
      pairs: [
        { id: 'p-ma-dhahaba', ar: 'مَا ذَهَبَ', meaning: 'He did not go' },
        { id: 'p-ma-kharajat', ar: 'مَا خَرَجَتْ', meaning: 'She did not exit' },
        { id: 'p-la-yaktubu', ar: 'لَا يَكْتُبُ', meaning: 'He does not write' },
        { id: 'p-la-talab', ar: 'لَا تَلْعَبْ', meaning: 'Do not play! (m)' },
        { id: 'p-la-tajlisi', ar: 'لَا تَجْلِسِي', meaning: 'Do not sit! (f)' },
      ],
    },
  },

  // 6. Page 20: Sentence Assembly - Shahid's Brother
  {
    id: 'v2-c1-l2-step-6-assembly-shahid-brother',
    type: 'sentence_assembly',
    pageNumber: 20,
    titleEn: 'Shahid\'s Brother Excursion',
    titleAr: 'ذَهَابُ أَخِي شَاهِدٍ',
    instructionEn: 'Assemble: "Shahid\'s brother did not go to the madrasah."',
    instructionBn: 'বাক্যটি সাজান: "শাহিদের ভাই মাদরাসায় যায়নি।"',
    assemblyPayload: {
      promptEn: 'Shahid\'s brother did not go to the madrasah.',
      promptBn: 'শাহিদের ভাই মাদরাসায় যায়নি।',
      expectedAnswer: ['مَا', 'ذَهَبَ', 'أَخُو', 'شَاهِدٍ', 'إِلَى', 'الْمَدْرَسَةِ'],
      chips: ['مَا', 'ذَهَبَ', 'أَخُو', 'شَاهِدٍ', 'إِلَى', 'الْمَدْرَسَةِ', 'لَا', 'يَذْهَبُ'],
      expectedAnswerBn: ['শাহিদের', 'ভাই', 'মাদরাসায়', 'যায়নি'],
      chipsBn: ['শাহিদের', 'ভাই', 'মাদরাসায়', 'যায়নি', 'গেল', 'ঘরে'],
      emoji: '🏫',
    },
  },

  // 7. Page 20: Sentence Assembly - Su'ad did not exit
  {
    id: 'v2-c1-l2-step-7-assembly-suad-room',
    type: 'sentence_assembly',
    pageNumber: 20,
    titleEn: 'Su\'ad in Her Room',
    titleAr: 'سُعَادُ فِي غُرْفَتِهَا',
    instructionEn: 'Assemble: "Su\'ad did not exit from her room and did not play in the garden."',
    instructionBn: 'বাক্যটি সাজান: "সু\'আদ তার কামরা থেকে বের হয়নি এবং বাগানে খেলেনি।"',
    assemblyPayload: {
      promptEn: 'Su\'ad did not exit from her room and did not play in the garden.',
      promptBn: 'সু\'আদ তার কামরা থেকে বের হয়নি এবং বাগানে খেলেনি।',
      expectedAnswer: ['مَا', 'خَرَجَتْ', 'سُعَادُ', 'مِنْ', 'غُرْفَتِهَا', 'وَمَا', 'لَعِبَتْ', 'فِي', 'الْحَدِيقَةِ'],
      chips: ['مَا', 'خَرَجَتْ', 'سُعَادُ', 'مِنْ', 'غُرْفَتِهَا', 'وَمَا', 'لَعِبَتْ', 'فِي', 'الْحَدِيقَةِ', 'خَرَجَ', 'لَا'],
      expectedAnswerBn: ['সু\'আদ', 'তার', 'কামরা', 'থেকে', 'বের', 'হয়নি', 'এবং', 'বাগানে', 'খেলেনি'],
      chipsBn: ['সু\'আদ', 'তার', 'কামরা', 'থেকে', 'বের', 'হয়নি', 'এবং', 'বাগানে', 'খেলেনি', 'খেলেছে', 'গেল'],
      emoji: '🏡',
    },
  },

  // 8. Page 20: Alternative QA - Su'ad Dialogue
  {
    id: 'v2-c1-l2-step-8-qa-suad',
    type: 'alternative_qa',
    pageNumber: 20,
    titleEn: 'Su\'ad Daily Life Comprehension',
    titleAr: 'فَهْمُ حَيَاةِ سُعَادَ',
    instructionEn: 'Answer each question about Su\'ad from the textbook dialogue.',
    instructionBn: 'পাঠ্যবইয়ের কথোপকথন অনুযায়ী সু\'আদ সম্পর্কিত প্রশ্নগুলোর উত্তর দিন।',
    alternativeQAPayload: {
      contextAr: 'قَرَأَتْ سُعَادُ وَكَتَبَتْ فِي غُرْفَتِهَا وَذَهَبَتْ إِلَى فِرَاشِهَا بَعْدَ الْعِشَاءِ',
      questions: [
        {
          id: 'q-suad-act',
          questionAr: 'أَ لَعِبَتْ سُعَادُ فِي الْحَدِيقَةِ أَمْ قَرَأَتْ وَكَتَبَتْ ؟',
          optionsAr: ['قَرَأَتْ وَكَتَبَتْ', 'لَعِبَتْ فِي الْحَدِيقَةِ'],
          correctAnswerAr: 'قَرَأَتْ وَكَتَبَتْ',
        },
        {
          id: 'q-suad-time',
          questionAr: 'أَ ذَهَبَتْ إِلَى فِرَاشِهَا قَبْلَ الْعِشَاءِ أَمْ بَعْدَ الْعِشَاءِ ؟',
          optionsAr: ['بَعْدَ الْعِشَاءِ', 'قَبْلَ الْعِشَاءِ'],
          correctAnswerAr: 'بَعْدَ الْعِشَاءِ',
        },
      ],
    },
  },

  // 9. Page 23: Concept Discovery - Negative Question Response Particles (نَعَمْ vs بَلَى)
  {
    id: 'v2-c1-l2-step-9-concept-bala-response',
    type: 'concept_intro',
    pageNumber: 23,
    titleEn: 'Answering Negative Questions: نَعَمْ vs بَلَى',
    titleAr: 'قَاعِدَةُ حَرْفِ الجَوَابِ (نَعَمْ وَ بَلَى)',
    instructionEn: 'Study how to respond to a negative question: نَعَمْ confirms the negative; بَلَى reverses it to positive.',
    instructionBn: 'না-বোধক প্রশ্নের নিয়ম লক্ষ্য করুন: نَعَم বললে না-বোধক কথাকেই স্বীকার করা হয়, আর بَلَى বললে না-বোধক কথাটিকে নাকচ করে হ্যাঁ প্রমাণিত করা হয়।',
    conceptPayload: {
      concepts: [
        {
          id: 'c-resp-pos',
          ar: 'نَعَمْ',
          romanized: 'na‘am',
          meaningEn: 'Yes (Confirms the question as asked)',
          meaningBn: 'হ্যাঁ (জিজ্ঞাসিত বক্তব্যকে সমর্থন করে)',
          exampleAr: 'أَ مَا ذَهَبْتَ؟ ➔ نَعَمْ .. مَا ذَهَبْتُ',
          exampleEn: 'Did you not go? ➔ Yes, I did not go (confirming negative)',
          exampleBn: 'তুমি কি যাওনি? ➔ হ্যাঁ, আমি যাইনি (না-বোধক কথা স্বীকার)',
          audioKey: 'نَعَمْ',
          exampleAudioKey: 'نَعَمْ .. مَا ذَهَبْتُ',
          emoji: '✔️',
        },
        {
          id: 'c-resp-bala',
          ar: 'بَلَى',
          romanized: 'balā',
          meaningEn: 'Nay, on the contrary, I DID! (Reverses negation to positive)',
          meaningBn: 'কেন নয়, অবশ্যই হ্যাঁ! (না-বোধক কথা নাকচ করে হ্যাঁ সাব্যস্ত করা)',
          exampleAr: 'أَ مَا ذَهَبْتَ؟ ➔ بَلَى .. ذَهَبْتُ',
          exampleEn: 'Did you not go? ➔ Nay, on the contrary, I DID go!',
          exampleBn: 'তুমি কি যাওনি? ➔ কেন যাব না, অবশ্যই গিয়েছি!',
          audioKey: 'بَلَى',
          exampleAudioKey: 'بَلَى .. ذَهَبْتُ',
          emoji: '🌟',
        },
      ],
    },
  },

  // 10. Page 23: Cloze Choice - Mastering بَلَى Drill
  {
    id: 'v2-c1-l2-step-10-cloze-bala',
    type: 'cloze_choice',
    pageNumber: 23,
    titleEn: 'Response Particle Selection',
    titleAr: 'اخْتِيَارُ حَرْفِ الجَوَابِ',
    instructionEn: 'Select the correct particle to reverse the negative question and affirm that you did go.',
    instructionBn: 'না-বোধক প্রশ্নকে নাকচ করে হ্যাঁ প্রমাণ করার জন্য সঠিক শব্দটি নির্বাচন করুন।',
    clozePayload: {
      questionAr: 'أَ مَا ذَهَبْتَ إِلَى الْمَدْرَسَةِ؟',
      questionEn: 'Did you not go to the madrasah? ... I did go.',
      questionBn: 'তুমি কি মাদরাসায় যাওনি? ... অবশ্যই গিয়েছি।',
      partialAnswerAr: '... ذَهَبْتُ .',
      correctAnswer: 'بَلَى',
      options: ['بَلَى', 'نَعَمْ', 'لَا'],
      emoji: '🎯',
    },
  },

  // 11. Page 21: Sentence Assembly - The Human Hand
  {
    id: 'v2-c1-l2-step-11-assembly-hand-right',
    type: 'sentence_assembly',
    pageNumber: 21,
    titleEn: 'Writing with the Right Hand',
    titleAr: 'الكِتَابَةُ بِاليَمِينِ',
    instructionEn: 'Assemble: "Man does not write with his left hand, rather he writes with his right hand."',
    instructionBn: 'বাক্যটি সাজান: "মানুষ তার বাম হাত দিয়ে লেখে না, বরং সে তার ডান হাত দিয়ে লেখে।"',
    assemblyPayload: {
      promptEn: 'Man does not write with his left hand, rather he writes with his right hand.',
      promptBn: 'মানুষ তার বাম হাত দিয়ে লেখে না, বরং সে তার ডান হাত দিয়ে লেখে।',
      expectedAnswer: ['لَا', 'يَكْتُبُ', 'الإِنْسَانُ', 'بِشِمَالِهِ', 'بَلْ', 'يَكْتُبُ', 'بِيَمِينِهِ'],
      chips: ['لَا', 'يَكْتُبُ', 'الإِنْسَانُ', 'بِشِمَالِهِ', 'بَلْ', 'يَكْتُبُ', 'بِيَمِينِهِ', 'مَا', 'كَتَبَ'],
      expectedAnswerBn: ['মানুষ', 'বাম', 'হাতে', 'লেখে', 'না', 'বরং', 'ডান', 'হাতে', 'লেখে'],
      chipsBn: ['মানুষ', 'বাম', 'হাতে', 'লেখে', 'না', 'বরং', 'ডান', 'হাতে', 'লেখে', 'পড়ে', 'গেল'],
      emoji: '✍️',
    },
  },

  // 12. Page 21: Sentence Assembly - Faith in the Heart
  {
    id: 'v2-c1-l2-step-12-assembly-faith-heart',
    type: 'sentence_assembly',
    pageNumber: 21,
    titleEn: 'Permanence of Faith',
    titleAr: 'ثَبَاتُ الإِيمَانِ فِي القَلْبِ',
    instructionEn: 'Assemble: "Faith does not depart from the heart of the believer."',
    instructionBn: 'বাক্যটি সাজান: "মুমিনের অন্তর থেকে ঈমান বের হয় না।"',
    assemblyPayload: {
      promptEn: 'Faith does not depart from the heart of the believer.',
      promptBn: 'মুমিনের অন্তর থেকে ঈমান বের হয় না।',
      expectedAnswer: ['لَا', 'يَخْرُجُ', 'الإِيمَانُ', 'مِنْ', 'قَلْبِ', 'المُؤْمِنِ'],
      chips: ['لَا', 'يَخْرُجُ', 'الإِيمَانُ', 'مِنْ', 'قَلْبِ', 'المُؤْمِنِ', 'مَا', 'خَرَجَ'],
      expectedAnswerBn: ['মুমিনের', 'অন্তর', 'থেকে', 'ঈমান', 'বের', 'হয়', 'না'],
      chipsBn: ['মুমিনের', 'অন্তর', 'থেকে', 'ঈমান', 'বের', 'হয়', 'না', 'যায়', 'হলো'],
      emoji: '💖',
    },
  },

  // 13. Page 22: Sentence Assembly - The Bed Before Isha
  {
    id: 'v2-c1-l2-step-13-assembly-bed-isha',
    type: 'sentence_assembly',
    pageNumber: 22,
    titleEn: 'Sleep Schedule',
    titleAr: 'نَوْمُ التِّلْمِيذِ',
    instructionEn: 'Assemble: "The student does not go to the bed for sleep before Isha."',
    instructionBn: 'ছাত্রটি এশার পূর্বে ঘুমানোর জন্য বিছানায় যায় না।',
    assemblyPayload: {
      promptEn: 'The student does not go to the bed for sleep before Isha.',
      promptBn: 'ছাত্রটি এশার পূর্বে ঘুমানোর জন্য বিছানায় যায় না।',
      expectedAnswer: ['لَا', 'يَذْهَبُ', 'التِّلْمِيذُ', 'إِلَى', 'الْفِرَاشِ', 'لِلنَّوْمِ', 'قَبْلَ', 'الْعِشَاءِ'],
      chips: ['لَا', 'يَذْهَبُ', 'التِّلْمِيذُ', 'إِلَى', 'الْفِرَاشِ', 'لِلنَّوْمِ', 'قَبْلَ', 'الْعِشَاءِ', 'بَعْدَ', 'ذَهَبَ'],
      expectedAnswerBn: ['ছাত্রটি', 'এশার', 'পূর্বে', 'ঘুমানোর', 'জন্য', 'বিছানায়', 'যায়', 'না'],
      chipsBn: ['ছাত্রটি', 'এশার', 'পূর্বে', 'ঘুমানোর', 'জন্য', 'বিছানায়', 'যায়', 'না', 'পরে', 'গেল'],
      emoji: '🛌',
    },
  },

  // 14. Page 22: Alternative QA - Right Hand & Afterlife
  {
    id: 'v2-c1-l2-step-14-qa-afterlife',
    type: 'alternative_qa',
    pageNumber: 22,
    titleEn: 'Profound Maxims Comprehension',
    titleAr: 'فَهْمُ الحَقَائِقِ الإِسْلَامِيَّةِ',
    instructionEn: 'Answer each question without guessing based on the textbook maxims.',
    instructionBn: 'পাঠ্যবইয়ের বক্তব্য অনুসারে প্রশ্নগুলোর সঠিক উত্তর দিন।',
    alternativeQAPayload: {
      contextAr: 'لَا يَكْتُبُ الإِنْسَانُ بِشِمَالِهِ ، بَلْ يَكْتُبُ بِيَمِينِهِ . لَا يَرْجِعُ أَحَدٌ إِلَى الدُّنْيَا بَعْدَ المَوْتِ ، لَا يَخْرُجُ الإِيمَانُ مِنْ قَلْبِ المُؤْمِنِ ، لَا يَخْرُجُ المُؤْمِنُ مِنَ الجَنَّةِ أَبَدًا وَلَا يَخْرُجُ المُشْرِكُ مِنَ النَّارِ أَبَدًا.',
      questions: [
        {
          id: 'q-hand-choice',
          questionAr: 'أَ بِيَمِينِهِ يَكْتُبُ الإِنْسَانُ أَمْ بِشِمَالِهِ ؟',
          optionsAr: ['بِيَمِينِهِ', 'بِشِمَالِهِ'],
          correctAnswerAr: 'بِيَمِينِهِ',
        },
        {
          id: 'q-death-choice',
          questionAr: 'أَ يَرْجِعُ أَحَدٌ إِلَى الدُّنْيَا بَعْدَ الْمَوْتِ ؟',
          optionsAr: ['لَا يَرْجِعُ أَحَدٌ', 'نَعَمْ يَرْجِعُ'],
          correctAnswerAr: 'لَا يَرْجِعُ أَحَدٌ',
        },
        {
          id: 'q-jannah-choice',
          questionAr: 'أَ يَخْرُجُ الْمُؤْمِنُ مِنَ الْجَنَّةِ أَبَدًا ؟',
          optionsAr: ['لَا يَخْرُجُ أَبَدًا', 'نَعَمْ يَخْرُجُ'],
          correctAnswerAr: 'لَا يَخْرُجُ أَبَدًا',
        },
      ],
    },
  },

  // 15. Page 20: Tarkib Dissector - Negated Past Sentence with Prepositional Phrase
  {
    id: 'v2-c1-l2-step-15-tarkib-neg-past',
    type: 'tarkib_dissector',
    pageNumber: 20,
    titleEn: 'Syntactic Dissector: Negated Past Sentence',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ الفِعْلِيَّةِ المَنْفِيَّةِ (مَاضٍ)',
    instructionEn: 'Slot each component into its syntactic role: Negative Particle, Past Verb, Subject, and Muta\'allaq.',
    instructionBn: 'প্রতিটি অংশকে তার ব্যাকরণিক স্থানে বসান: না-বোধক অব্যয়, অতীত ক্রিয়া, কর্তা ও متعلق।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-ma-dhahaba',
          sentenceAr: 'مَا ذَهَبَ رَاشِدٌ إِلَى السُّوقِ',
          sentenceTypeAr: 'جُمْلَةٌ فِعْلِيَّةٌ مَنْفِيَّةٌ',
          sentenceTypeEn: 'Negated Verbal Sentence',
          sentenceTypeBn: 'না-বোধক ক্রিয়াবাচক বাক্য',
          slots: [
            { roleAr: 'حَرْفُ نَفْيٍ', roleEn: 'Negative Particle', roleBn: 'না-বোধক অব্যয়', expectedWordAr: 'مَا' },
            { roleAr: 'فِعْلٌ مَاضٍ', roleEn: 'Past Verb', roleBn: 'অতীত ক্রিয়া', expectedWordAr: 'ذَهَبَ' },
            { roleAr: 'فَاعِلٌ', roleEn: 'Doer / Subject', roleBn: 'কর্তা (ফায়েল)', expectedWordAr: 'رَاشِدٌ' },
            { roleAr: 'مُتَعَلِّقٌ بِالفِعْلِ', roleEn: 'Prepositional Attachment', roleBn: 'ক্রিয়ার متعلق', expectedWordAr: 'إِلَى السُّوقِ' },
          ],
          availableWordsAr: ['مَا', 'ذَهَبَ', 'رَاشِدٌ', 'إِلَى السُّوقِ'],
        },
      ],
    },
  },

  // 16. Page 21: Tarkib Dissector - Negated Present Sentence with Time Adverb
  {
    id: 'v2-c1-l2-step-16-tarkib-neg-present',
    type: 'tarkib_dissector',
    pageNumber: 21,
    titleEn: 'Syntactic Dissector: Negated Present Sentence',
    titleAr: 'تَرْكِيبُ الجُمْلَةِ الفِعْلِيَّةِ المَنْفِيَّةِ (مُضَارِعٌ)',
    instructionEn: 'Slot each component: Negative Particle, Present Verb, Subject, and Time Adverb.',
    instructionBn: 'প্রতিটি অংশকে তার ব্যাকরণিক স্থানে বসান: না-বোধক অব্যয়, বর্তমান ক্রিয়া, কর্তা ও সময়ের পাত্র (ظرف زمان)।',
    tarkibPayload: {
      sentences: [
        {
          id: 'tarkib-la-yarjiu',
          sentenceAr: 'لَا يَرْجِعُ بِلَالٌ الآنَ',
          sentenceTypeAr: 'جُمْلَةٌ فِعْلِيَّةٌ مَنْفِيَّةٌ',
          sentenceTypeEn: 'Negated Present Verbal Sentence',
          sentenceTypeBn: 'না-বোধক বর্তমান ক্রিয়াবাচক বাক্য',
          slots: [
            { roleAr: 'حَرْفُ نَفْيٍ', roleEn: 'Negative Particle', roleBn: 'না-বোধক অব্যয়', expectedWordAr: 'لَا' },
            { roleAr: 'فِعْلٌ مُضَارِعٌ', roleEn: 'Present Verb', roleBn: 'বর্তমান ক্রিয়া', expectedWordAr: 'يَرْجِعُ' },
            { roleAr: 'فَاعِلٌ', roleEn: 'Doer / Subject', roleBn: 'কর্তা (ফায়েল)', expectedWordAr: 'بِلَالٌ' },
            { roleAr: 'ظَرْفُ زَمَانٍ', roleEn: 'Time Adverb', roleBn: 'সময়ের পাত্র (জরফে জামান)', expectedWordAr: 'الآنَ' },
          ],
          availableWordsAr: ['لَا', 'يَرْجِعُ', 'بِلَالٌ', 'الآنَ'],
        },
      ],
    },
  },

  // 17. Page 23: Quranic Echo - Surah Al-A'raf (7:172) - The Primordial Covenant
  {
    id: 'v2-c1-l2-step-17-quranic-echo-araf',
    type: 'quranic_echo',
    pageNumber: 23,
    titleEn: 'The Primordial Covenant: بَلَىٰ',
    titleAr: 'مِيثَاقُ الذَّرِّ: (قَالُوا بَلَىٰ)',
    instructionEn: 'Reflect on how the exact response particle "بَلَى" you learned today forms the foundation of human testimony to Allah.',
    instructionBn: 'আজকের পাঠে শেখা "بَلَى" শব্দটি কীভাবে আল্লাহর সাথে মানবজাতির আদি অঙ্গীকারের মূল ভিত্তি হয়ে আছে তা হৃদয়ঙ্গম করুন।',
    echoPayload: {
      surahNumber: 7,
      ayahNumber: 172,
      surahNameAr: 'الأَعْرَاف',
      surahNameEn: 'Al-A\'raf',
      arabicText: 'أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا بَلَىٰ ۛ شَهِدْنَا',
      translationEn: '[Allah asked:] "Am I not your Lord?" They said: "Yes, indeed (بَلَى)! We testify."',
      translationBn: '[আল্লাহ জিজ্ঞাসা করলেন:] "আমি কি তোমাদের রব নই?" তারা বলল: "অবশ্যই হ্যাঁ (بَلَى)! আমরা সাক্ষ্য দিচ্ছি।"',
      highlightedWords: ['بَلَىٰ'],
      reflection: 'If humanity had answered "نَعَمْ" to Allah\'s question "Am I not your Lord?", it would have meant "Yes, You are not our Lord". By answering "بَلَىٰ", the negation is obliterated and Allah\'s absolute Lordship is universally affirmed.',
      audioKey: 'quran_007_172',
      patternNameEn: 'Response Particle for Affirming Negative Questions · بَلَى',
      patternNameBn: 'না-বোধক প্রশ্নকে নাকচ করে হ্যাঁ প্রমাণকারী শব্দ (হর্ফুল জাওয়াব)',
      lessonPatternAr: 'أَ مَا ذَهَبْتَ؟ ➔ بَلَى',
      lessonPatternEn: 'Did you not go? ➔ Nay, on the contrary, I went!',
      lessonPatternBn: 'তুমি কি যাওনি? ➔ কেন যাব না, অবশ্যই গিয়েছি!',
      quranPatternAr: 'أَلَسْتُ بِرَبِّكُمْ ➔ قَالُوا بَلَىٰ',
      quranPatternEn: 'Am I not your Lord? ➔ They said: Yes indeed You are!',
      quranPatternBn: 'আমি কি তোমাদের প্রতিপালক নই? ➔ তারা বলল: অবশ্যই হ্যাঁ!',
    },
  },
];

export const VOL2_CH1_LESSON_02_SESSION: LessonSessionData = {
  volumeId: 2,
  chapterId: 1,
  lessonNum: 2,
  titleEn: 'Verb Negation (Past & Present) & Response Particles',
  titleAr: 'نَفْيُ الفِعْلِ المَاضِي وَالمُضَارِعِ وَأَحْرُفُ الجَوَابِ',
  wordsLearned: [
    'مَا',
    'لَا',
    'بَلَى',
    'نَوْمٌ',
    'يَمِينٌ',
    'شِمَالٌ',
    'وَرَقَةٌ',
    'رَدِيءٌ',
    'ضَوْءٌ',
    'مَوْتٌ',
    'مُؤْمِنٌ',
  ],
  steps: VOL2_CH1_LESSON_02_STEPS,
};

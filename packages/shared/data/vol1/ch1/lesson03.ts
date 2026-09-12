import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
  darsNumber: 3,
  chunks: [
    {
      id: '1-3-1',
      type: 'vocabulary',
      titleEn: 'People & Adjectives (Part 1)',
      titleAr: 'مُفْرَدَات (الأشْخَاص والصِّفَات)',
      payload: {
        words: [
          { id: 1, ar: 'تِلْمِيذٌ', romanized: 'tilmīdhun', en: 'A male student', emoji: '👦' },
          {
            id: 2,
            ar: 'تِلْمِيذَةٌ',
            romanized: 'tilmīdhatun',
            en: 'A female student',
            emoji: '👧',
          },
          { id: 3, ar: 'مُعَلِّمٌ', romanized: "mu'allimun", en: 'A male teacher', emoji: '👨‍🏫' },
          {
            id: 4,
            ar: 'مُعَلِّمَةٌ',
            romanized: "mu'allimatun",
            en: 'A female teacher',
            emoji: '👩‍🏫',
          },
          { id: 5, ar: 'وَلَدٌ', romanized: 'waladun', en: 'A boy', emoji: '👶' },
          { id: 6, ar: 'بِنْتٌ', romanized: 'bintun', en: 'A girl', emoji: '👧' },
          {
            id: 7,
            ar: 'مُؤَدَّبٌ',
            romanized: "mu'addabun",
            en: 'Polite / well-behaved',
            emoji: '😊',
          },
          {
            id: 8,
            ar: 'طِفْلٌ / طِفْلَةٌ',
            romanized: 'ṭiflun / ṭiflatun',
            en: 'A child (m/f)',
            emoji: '🍼',
          },
        ],
      },
    },
    {
      id: '1-3-2',
      type: 'grammar_rule',
      titleEn: 'Personal Pronouns',
      titleAr: 'الضَّمَائِر الشَّخْصِيَّة',
      payload: {
        rules: [
          {
            label: '1st person',
            arabic: 'أَنَا',
            romanized: 'anā',
            meaning: 'I (m/f)',
            examples: [{ ar: 'أَنَا تِلْمِيذٌ', en: 'I am a student.' }],
          },
          {
            label: '2nd person masculine',
            arabic: 'أَنْتَ',
            romanized: 'anta',
            meaning: 'You (male)',
            examples: [{ ar: 'أَنْتَ تِلْمِيذٌ جَدِيدٌ', en: 'You are a new student.' }],
          },
          {
            label: '2nd person feminine',
            arabic: 'أَنْتِ',
            romanized: 'anti',
            meaning: 'You (female)',
            examples: [
              { ar: 'أَنْتِ تِلْمِيذَةٌ جَدِيدَةٌ', en: 'You are a new (female) student.' },
            ],
          },
          {
            label: '3rd person masculine',
            arabic: 'هُوَ',
            romanized: 'huwa',
            meaning: 'He',
            examples: [{ ar: 'هُوَ مُعَلِّمٌ', en: 'He is a teacher.' }],
          },
          {
            label: '3rd person feminine',
            arabic: 'هِيَ',
            romanized: 'hiya',
            meaning: 'She',
            examples: [{ ar: 'هِيَ تِلْمِيذَةٌ ذَكِيَّةٌ', en: 'She is an intelligent student.' }],
          },
        ],
      },
    },
    {
      id: '1-3-3',
      type: 'grammar_rule',
      titleEn: 'Interrogative Particles: هَلْ & مَنْ',
      titleAr: 'أَدَوَات الاسْتِفْهَام: هَلْ وَمَنْ',
      payload: {
        rules: [
          {
            label: 'هَلْ - Yes/No question',
            arabic: 'هَلْ ؟',
            romanized: 'hal?',
            meaning: 'Are you / Is he…?',
            examples: [
              { ar: 'هَلْ أَنْتَ تِلْمِيذٌ ؟ - نَعَمْ', en: 'Are you a student? - Yes.' },
              {
                ar: 'هَلْ هُوَ مُعَلِّمٌ ؟ - لَا، بَلْ هُوَ تِلْمِيذٌ',
                en: 'Is he a teacher? - No, rather he is a student.',
              },
            ],
          },
          {
            label: 'مَنْ - Who question',
            arabic: 'مَنْ ؟',
            romanized: 'man?',
            meaning: 'Who?',
            examples: [
              {
                ar: 'مَنْ أَنْتَ يَا وَلَدُ ؟ - أَنَا بِلَالٌ',
                en: 'Who are you, O boy? - I am Bilal.',
              },
            ],
          },
        ],
      },
    },
    {
      id: '1-3-4',
      type: 'vocabulary',
      titleEn: 'People & Adjectives (Part 2)',
      titleAr: 'مُفْرَدَات (المِهَن وَالصِّفَات)',
      payload: {
        words: [
          { id: 1, ar: 'تَاجِرٌ', romanized: 'tājirun', en: 'A merchant', emoji: '🛒' },
          { id: 2, ar: 'فَلَّاحٌ', romanized: 'fallāḥun', en: 'A farmer', emoji: '👨‍🌾' },
          { id: 3, ar: 'رَجُلٌ', romanized: 'rajulun', en: 'A man', emoji: '👨' },
          { id: 4, ar: 'اِمْرَأَةٌ', romanized: "imra'atun", en: 'A woman', emoji: '👩' },
          { id: 5, ar: 'غَنِيٌّ', romanized: 'ghaniyyun', en: 'Rich', emoji: '💰' },
          { id: 6, ar: 'فَقِيرٌ', romanized: 'faqīrun', en: 'Poor', emoji: '🙏' },
          { id: 7, ar: 'ذَكِيٌّ', romanized: 'dhakiyyun', en: 'Intelligent', emoji: '🧠' },
          { id: 8, ar: 'غَبِيٌّ', romanized: 'ghabiyyun', en: 'Dull / Stupid', emoji: '😵' },
        ],
      },
    },
    {
      id: '1-3-5',
      type: 'q_and_a',
      titleEn: 'Conversational Q&A Practice',
      titleAr: 'تَدْرِيب المُحَادَثَة',
      payload: {
        instruction: 'Practice the conversation patterns',
        questions: [
          {
            emoji: '👦',
            question_ar: 'مَنْ أَنْتَ يَا وَلَدُ ؟',
            question_en: 'Who are you, O boy?',
            correct_ar: 'أَنَا بِلَالٌ',
            correct_en: 'I am Bilal.',
            options_ar: ['أَنَا بِلَالٌ', 'هُوَ بِلَالٌ', 'أَنْتَ بِلَالٌ'],
          },
          {
            emoji: '📚',
            question_ar: 'هَلْ أَنْتَ تِلْمِيذٌ جَدِيدٌ ؟',
            question_en: 'Are you a new student?',
            correct_ar: 'نَعَمْ، أَنَا تِلْمِيذٌ جَدِيدٌ',
            correct_en: 'Yes, I am a new student.',
            options_ar: [
              'نَعَمْ، أَنَا تِلْمِيذٌ جَدِيدٌ',
              'لَا، أَنَا مُعَلِّمٌ',
              'بَلْ أَنَا وَلَدٌ',
            ],
          },
          {
            emoji: '👨‍🏫',
            question_ar: 'هَلْ هُوَ مُعَلِّمٌ ؟',
            question_en: 'Is he a teacher?',
            correct_ar: 'لَا، بَلْ هُوَ تِلْمِيذٌ',
            correct_en: 'No, rather he is a student.',
            options_ar: ['نَعَمْ، هُوَ مُعَلِّمٌ', 'لَا، بَلْ هُوَ تِلْمِيذٌ', 'هِيَ مُعَلِّمَةٌ'],
          },
        ],
      },
    },
    {
      id: '1-3-6',
      type: 'application',
      titleEn: 'Self-Introduction and Description Reading',
      titleAr: 'قِرَاءَة التَّعْرِيف بِالنَّفْس وَالوَصْف',
      payload: {
        items: [
          {
            emoji: '👦',
            ar: 'أَنَا بِلَالٌ - أَنَا تِلْمِيذٌ جَدِيدٌ - أَنَا وَلَدٌ مُؤَدَّبٌ',
            en: 'I am Bilal - I am a new student - I am a polite boy.',
          },
          {
            emoji: '👧',
            ar: 'أَنَا عَائِشَةُ - أَنَا تِلْمِيذَةٌ جَدِيدَةٌ - أَنَا بِنْتٌ مُؤَدَّبَةٌ',
            en: 'I am Aisha - I am a new female student - I am a polite girl.',
          },
          {
            emoji: '🧍',
            ar: 'هُوَ بِلَالٌ - هُوَ تِلْمِيذٌ جَدِيدٌ',
            en: 'He is Bilal - he is a new student.',
          },
          {
            emoji: '🧍‍♀️',
            ar: 'هِيَ عَائِشَةُ - هِيَ تِلْمِيذَةٌ جَدِيدَةٌ',
            en: 'She is Aisha - she is a new female student.',
          },
          {
            emoji: '🛒',
            ar: 'مَحْمُودٌ تَاجِرٌ غَنِيٌّ وَأَنَا فَلَّاحٌ فَقِيرٌ',
            en: 'Mahmud is a rich merchant and I am a poor farmer.',
          },
          {
            emoji: '🧠',
            ar: 'بِلَالٌ تِلْمِيذٌ ذَكِيٌّ وَزَيْنَبُ تِلْمِيذَةٌ ذَكِيَّةٌ',
            en: 'Bilal is an intelligent student and Zainab is an intelligent female student.',
          },
          {
            emoji: '👩',
            ar: 'عَائِشَةُ امْرَأَةٌ ذَكِيَّةٌ جِدًّا',
            en: 'Aisha is a very intelligent woman.',
          },
        ],
      },
    },
    {
      id: '1-3-7',
      type: 'assessment',
      titleEn: 'Pronoun and Dialogue Assessment',
      titleAr: 'تَقْيِيم الضَّمَائِر وَالحِوَار',
      payload: {
        instruction: 'Choose the answer that follows the dialogue pattern from Lesson 3.',
        questions: [
          {
            emoji: '👦',
            question_ar: 'مَنْ أَنْتَ يَا وَلَدُ ؟',
            question_en: 'Who are you, O boy?',
            correct_ar: 'أَنَا بِلَالٌ',
            correct_en: 'I am Bilal.',
            options_ar: ['أَنَا بِلَالٌ', 'هُوَ بِلَالٌ', 'أَنْتَ بِلَالٌ'],
          },
          {
            emoji: '👧',
            question_ar: 'مَنْ أَنْتِ يَا بِنْتُ ؟',
            question_en: 'Who are you, O girl?',
            correct_ar: 'أَنَا زَيْنَبُ',
            correct_en: 'I am Zainab.',
            options_ar: ['أَنَا زَيْنَبُ', 'هُوَ زَيْنَبُ', 'أَنْتَ زَيْنَبُ'],
          },
          {
            emoji: '📚',
            question_ar: 'هَلْ زَيْنَبُ تِلْمِيذَةٌ غَبِيَّةٌ ؟',
            question_en: 'Is Zainab a dull student?',
            correct_ar: 'لَا، بَلْ هِيَ تِلْمِيذَةٌ ذَكِيَّةٌ',
            correct_en: 'No, rather she is an intelligent student.',
            options_ar: [
              'لَا، بَلْ هِيَ تِلْمِيذَةٌ ذَكِيَّةٌ',
              'نَعَمْ، هِيَ غَبِيَّةٌ',
              'هُوَ تِلْمِيذٌ ذَكِيٌّ',
            ],
          },
          {
            emoji: '👨‍🏫',
            question_ar: 'هَلْ هُوَ مُعَلِّمٌ ؟',
            question_en: 'Is he a teacher?',
            correct_ar: 'لَا، بَلْ هُوَ تِلْمِيذٌ',
            correct_en: 'No, rather he is a student.',
            options_ar: [
              'لَا، بَلْ هُوَ تِلْمِيذٌ',
              'نَعَمْ، هِيَ مُعَلِّمَةٌ',
              'أَنْتَ مُعَلِّمٌ',
            ],
          },
        ],
      },
    },
  ],
};

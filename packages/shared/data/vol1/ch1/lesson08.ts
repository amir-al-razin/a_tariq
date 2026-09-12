import type { LessonData } from '../../curriculum';

export const lesson08: LessonData = {
  darsNumber: 8,
  chunks: [
    {
      id: '1-8-1',
      type: 'grammar_rule',
      titleEn: 'Preposition فِي and Genitive Case',
      titleAr: 'حَرْف الجَرّ «فِي» وَحَالَة الجَرّ',
      payload: {
        rules: [
          {
            label: 'Core rule',
            arabic: 'فِي + اِسْم = مَجْرُور',
            romanized: 'fī + ism = majrūr',
            meaning: 'After فِي, the noun becomes genitive (kasra ending).',
            examples: [
              { ar: 'الْمَسْجِدُ ➔ فِي الْمَسْجِدِ', en: 'The mosque ➔ in the mosque' },
              { ar: 'الْقَرْيَةُ ➔ فِي الْقَرْيَةِ', en: 'The village ➔ in the village' },
              {
                ar: 'سُوقُ الْقَرْيَةِ ➔ فِي سُوقِ الْقَرْيَةِ',
                en: 'Village market ➔ in the village market',
              },
            ],
          },
          {
            label: 'With attached pronouns',
            arabic: 'غُرْفَتُهُ ➔ فِي غُرْفَتِهِ',
            romanized: 'ghurfatuhu → fī ghurfatihi',
            meaning: 'Pronoun-linked nouns also shift vowel in genitive context.',
            examples: [
              { ar: 'غُرْفَتُكَ ➔ فِي غُرْفَتِكَ', en: 'Your room (m) ➔ in your room' },
              { ar: 'غُرْفَتُكِ ➔ فِي غُرْفَتِكِ', en: 'Your room (f) ➔ in your room' },
              { ar: 'غُرْفَتُهَا ➔ فِي غُرْفَتِهَا', en: 'Her room ➔ in her room' },
            ],
          },
        ],
      },
    },
    {
      id: '1-8-2',
      type: 'application',
      titleEn: 'Sentence Pairs with فِي',
      titleAr: 'تَطْبِيق جُمَل «فِي»',
      payload: {
        items: [
          { emoji: '🕌', ar: 'فِي الْمَسْجِدِ رَجُلٌ', en: 'There is a man in the mosque.' },
          { emoji: '🕌', ar: 'الرَّجُلُ فِي الْمَسْجِدِ', en: 'The man is in the mosque.' },
          { emoji: '💡', ar: 'فِي الْغُرْفَةِ مِصْبَاحٌ', en: 'There is a lamp in the room.' },
          { emoji: '📿', ar: 'فِي الصُّنْدُوقِ عِقْدٌ', en: 'There is a necklace in the box.' },
          { emoji: '🌳', ar: 'فِي الْحَدِيقَةِ شَجَرَةٌ', en: 'There is a tree in the garden.' },
          {
            emoji: '🎒',
            ar: 'فِي حَقِيبَةِ عَائِشَةَ كِتَابٌ وَقَلَمٌ',
            en: "In Aisha's bag there is a book and a pen.",
          },
          { emoji: '🌀', ar: 'عَائِشَةُ فِي غُرْفَتِهَا', en: 'Aisha is in her room.' },
          { emoji: '🚗', ar: 'هُوَ فِي سَيَّارَتِهِ', en: 'He is in his car.' },
        ],
      },
    },
    {
      id: '1-8-3',
      type: 'q_and_a',
      titleEn: 'Lesson 8 Q&A',
      titleAr: 'أَسْئِلَة وَأَجْوِبَة الدَّرْس ٨',
      payload: {
        instruction: 'Answer by locating people/things using فِي.',
        questions: [
          {
            emoji: '🕌',
            question_ar: 'مَنْ فِي الْمَسْجِدِ ؟',
            question_en: 'Who is in the mosque?',
            correct_ar: 'فِي الْمَسْجِدِ رَجُلٌ',
            correct_en: 'A man is in the mosque.',
            options_ar: ['فِي الْمَسْجِدِ رَجُلٌ', 'الرَّجُلُ أَمَامَكَ', 'فِي الْمَسْجِدِ بَابٌ'],
          },
          {
            emoji: '🧍',
            question_ar: 'أَيْنَ الرَّجُلُ ؟',
            question_en: 'Where is the man?',
            correct_ar: 'هُوَ فِي الْمَسْجِدِ',
            correct_en: 'He is in the mosque.',
            options_ar: [
              'هُوَ فِي الْمَسْجِدِ',
              'هُوَ فَوْقَ الْمَسْجِدِ',
              'هُوَ وَرَاءَ الْبَابِ',
            ],
          },
          {
            emoji: '🎒',
            question_ar: 'مَاذَا فِي حَقِيبَةِ عَائِشَةَ ؟',
            question_en: "What is in Aisha's bag?",
            correct_ar: 'فِي حَقِيبَةِ عَائِشَةَ كِتَابٌ وَقَلَمٌ',
            correct_en: "A book and a pen are in Aisha's bag.",
            options_ar: [
              'فِي حَقِيبَةِ عَائِشَةَ كِتَابٌ وَقَلَمٌ',
              'فِيهَا سَاعَةٌ فَقَطْ',
              'فِيهَا مِفْتَاحٌ',
            ],
          },
          {
            emoji: '🚗',
            question_ar: 'أَيْنَ مَحْمُودٌ ؟',
            question_en: 'Where is Mahmud?',
            correct_ar: 'هُوَ فِي سَيَّارَتِهِ',
            correct_en: 'He is in his car.',
            options_ar: ['هُوَ فِي سَيَّارَتِهِ', 'هُوَ فِي بَيْتِهِ', 'هُوَ تَحْتَ السَّيَّارَةِ'],
          },
          {
            emoji: '🌙',
            question_ar: 'فِي قَلْبِ مَنِ الظُّلْمَةُ ؟',
            question_en: 'In whose heart is darkness?',
            correct_ar: 'فِي قَلْبِ الْكَافِرِ',
            correct_en: 'In the heart of the disbeliever.',
            options_ar: ['فِي قَلْبِ الْكَافِرِ', 'فِي قَلْبِ الْمُسْلِمِ', 'فِي الْمَسْجِدِ'],
          },
        ],
      },
    },
    {
      id: '1-8-4',
      type: 'application',
      titleEn: 'Extended Meaning Sentences',
      titleAr: 'جُمَل مُوَسَّعَة لِتَثْبِيت المَعْنَى',
      payload: {
        items: [
          {
            emoji: '💚',
            ar: 'فِي قَلْبِ الْمُسْلِمِ نُورٌ',
            en: "In the Muslim's heart there is light.",
          },
          {
            emoji: '🌑',
            ar: 'فِي قَلْبِ الْكَافِرِ ظُلْمَةٌ',
            en: "In the disbeliever's heart there is darkness.",
          },
          {
            emoji: '📖',
            ar: 'فِي كِتَابِ اللهِ قِصَّةٌ جَمِيلَةٌ',
            en: 'In the Book of Allah there is a beautiful story.',
          },
          {
            emoji: '🕌',
            ar: 'قَبْرُ الرَّسُولِ فِي الْمَدِينَةِ الْمُنَوَّرَةِ',
            en: "The Messenger's grave is in Madinah Al-Munawwarah.",
          },
        ],
      },
    },
    {
      id: '1-8-5',
      type: 'vocabulary',
      titleEn: 'Core Words in Context',
      titleAr: 'مُفْرَدَات سِيَاقِيَّة',
      payload: {
        words: [
          { id: 1, ar: 'فِي', romanized: 'fī', en: 'In / at', emoji: '📍' },
          { id: 2, ar: 'دُكَّانٌ', romanized: 'dukkānun', en: 'Shop', emoji: '🏪' },
          { id: 3, ar: 'شَجَرَةٌ', romanized: 'shajaratun', en: 'Tree', emoji: '🌳' },
          { id: 4, ar: 'قَبْرٌ', romanized: 'qabrun', en: 'Grave', emoji: '🪦' },
          {
            id: 5,
            ar: 'الْمَدِينَةُ الْمُنَوَّرَةُ',
            romanized: 'al-madīnatu al-munawwaratu',
            en: 'Madinah Al-Munawwarah',
            emoji: '🕌',
          },
        ],
      },
    },
    {
      id: '1-8-6',
      type: 'assessment',
      titleEn: 'Preposition فِي Assessment',
      titleAr: 'تَقْيِيم حَرْف الجَرّ «فِي»',
      payload: {
        instruction: 'Choose answers that correctly apply the فِي pattern from Lesson 8.',
        questions: [
          {
            emoji: '🕌',
            question_ar: 'أَيْنَ الرَّجُلُ؟',
            question_en: 'Where is the man?',
            correct_ar: 'هُوَ فِي الْمَسْجِدِ',
            correct_en: 'He is in the mosque.',
            options_ar: [
              'هُوَ فِي الْمَسْجِدِ',
              'هُوَ فَوْقَ الْمَسْجِدِ',
              'هُوَ أَمَامَ الْمَسْجِدِ',
            ],
          },
          {
            emoji: '🎒',
            question_ar: 'مَاذَا فِي حَقِيبَةِ عَائِشَةَ؟',
            question_en: 'What is in Aisha’s bag?',
            correct_ar: 'فِيهَا كِتَابٌ وَقَلَمٌ',
            correct_en: 'A book and a pen are in it.',
            options_ar: [
              'فِيهَا كِتَابٌ وَقَلَمٌ',
              'فِيهَا مِفْتَاحٌ وَقُفْلٌ',
              'فِيهَا سَاعَةٌ فَقَطْ',
            ],
          },
          {
            emoji: '🌀',
            question_ar: 'يَا عَائِشَةُ! مَاذَا فِي غُرْفَتِكِ؟',
            question_en: 'O Aisha! What is in your room?',
            correct_ar: 'فِي غُرْفَتِي مِرْوَحَةٌ',
            correct_en: 'There is a fan in my room.',
            options_ar: [
              'فِي غُرْفَتِي مِرْوَحَةٌ',
              'فِي غُرْفَتِي سَيَّارَةٌ',
              'فِي غُرْفَتِي مَسْجِدٌ',
            ],
          },
          {
            emoji: '🌙',
            question_ar: 'فِي قَلْبِ مَنِ النُّورُ؟',
            question_en: 'In whose heart is the light?',
            correct_ar: 'فِي قَلْبِ الْمُسْلِمِ',
            correct_en: 'In the heart of the Muslim.',
            options_ar: ['فِي قَلْبِ الْمُسْلِمِ', 'فِي قَلْبِ الْكَافِرِ', 'فِي الْحَدِيقَةِ'],
          },
          {
            emoji: '🪦',
            question_ar: 'أَيْنَ قَبْرُ الرَّسُولِ؟',
            question_en: 'Where is the grave of the Messenger?',
            correct_ar: 'قَبْرُهُ فِي الْمَدِينَةِ الْمُنَوَّرَةِ',
            correct_en: 'His grave is in Madinah Al-Munawwarah.',
            options_ar: [
              'قَبْرُهُ فِي الْمَدِينَةِ الْمُنَوَّرَةِ',
              'قَبْرُهُ فِي الْقَرْيَةِ',
              'قَبْرُهُ خَلْفَ الْمَسْجِدِ',
            ],
          },
        ],
      },
    },
  ],
};

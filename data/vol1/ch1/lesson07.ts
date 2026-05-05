import type { LessonData } from '../../curriculum';

export const lesson07: LessonData = {
  darsNumber: 7,
  chunks: [
    {
      id: '1-7-1',
      type: 'vocabulary',
      titleEn: 'Prepositions of Place',
      titleAr: 'حُرُوف وَظُرُوف المَكَان',
      payload: {
        words: [
          { id: 1, ar: 'عِنْدَ', romanized: 'ʿinda', en: 'Near / with', bn: 'কাছে', emoji: '📍' },
          { id: 2, ar: 'أَمَامَ', romanized: 'amāma', en: 'In front of', bn: 'সামনে', emoji: '↗️' },
          { id: 3, ar: 'وَرَاءَ', romanized: 'warāʾa', en: 'Behind', bn: 'পেছনে', emoji: '↩️' },
          { id: 4, ar: 'خَلْفَ', romanized: 'khalfa', en: 'Behind', bn: 'পিছনে', emoji: '↩️' },
          { id: 5, ar: 'تَحْتَ', romanized: 'taḥta', en: 'Under', bn: 'নীচে', emoji: '⬇️' },
          { id: 6, ar: 'فَوْقَ', romanized: 'fawqa', en: 'Above', bn: 'উপরে', emoji: '⬆️' },
          { id: 7, ar: 'بِجَانِبِ', romanized: 'bijānibi', en: 'Beside', bn: 'পাশে', emoji: '↔️' },
          { id: 8, ar: 'أَيْنَ ؟', romanized: 'ayna?', en: 'Where?', bn: 'কোথায়?', emoji: '❓' },
        ],
      },
    },
    {
      id: '1-7-2',
      type: 'grammar_rule',
      titleEn: 'Prepositions with Pronouns & Nouns',
      titleAr: 'اِسْتِعْمَال الظُّرُوف مَعَ الضَّمَائِر وَالأَسْمَاء',
      payload: {
        rules: [
          {
            label: 'Two equivalent sentence patterns',
            arabic: 'عِنْدِي كِتَابٌ / الْكِتَابُ عِنْدِي',
            romanized: 'ʿindī kitābun / al-kitābu ʿindī',
            meaning: 'Both mean: The book is with me.',
            examples: [
              {
                ar: 'أَمَامَكَ كِتَابٌ / الْكِتَابُ أَمَامَكَ',
                en: 'A book is in front of you / The book is in front of you.',
              },
              {
                ar: 'فَوْقَهَا مِرْوَحَةٌ / الْمِرْوَحَةُ فَوْقَهَا',
                en: 'A fan is above her / The fan is above her.',
              },
            ],
          },
          {
            label: 'Question pattern with مَنْ',
            arabic: 'مَنْ عِنْدَهُ القَلَمُ ؟ / عِنْدَ مَنْ القَلَمُ ؟',
            romanized: 'man ʿindahu al-qalamu? / ʿinda man al-qalamu?',
            meaning: 'Who has the pen?',
            examples: [
              { ar: 'عِنْدَ مَنِ السَّاعَةُ ؟', en: 'Who has the watch?' },
              { ar: 'فَوْقَ مَنِ المِصْبَاحُ ؟', en: 'Above whom is the lamp?' },
            ],
          },
        ],
      },
    },
    {
      id: '1-7-3',
      type: 'application',
      titleEn: 'Place-Relation Sentence Drill',
      titleAr: 'تَدْرِيب جُمَلِ المَوْقِع',
      payload: {
        items: [
          { emoji: '⌚', ar: 'يَا مَاجِدُ! عِنْدَكَ سَاعَةٌ', en: 'O Majid! You have a watch.' },
          { emoji: '🌀', ar: 'فَوْقَكَ مِرْوَحَةٌ', en: 'A fan is above you.' },
          { emoji: '🚗', ar: 'وَرَاءَكَ سَيَّارَةٌ', en: 'A car is behind you.' },
          { emoji: '🚲', ar: 'بِجَانِبِكَ دَرَّاجَةٌ', en: 'A bicycle is beside you.' },
          { emoji: '🖊️', ar: 'يَا عَائِشَةُ! عِنْدَكِ قَلَمٌ', en: 'O Aisha! You have a pen.' },
          {
            emoji: '🖤',
            ar: 'أَمَامَ المُعَلِّمِ سَبُّورَةٌ وَمَسَّاحَةٌ',
            en: 'In front of the teacher are a board and duster.',
          },
          {
            emoji: '🕌',
            ar: 'صَدِيقُ بَشِيرٍ أَمَامَ المَسْجِدِ',
            en: "Bashir's friend is in front of the mosque.",
          },
          {
            emoji: '🌌',
            ar: 'السَّمَاءُ فَوْقَنَا وَالأَرْضُ تَحْتَنَا',
            en: 'The sky is above us and the earth is below us.',
          },
        ],
      },
    },
    {
      id: '1-7-4',
      type: 'q_and_a',
      titleEn: 'Lesson 7 Q&A',
      titleAr: 'أَسْئِلَة وَأَجْوِبَة الدَّرْس ٧',
      payload: {
        instruction: 'Answer using location prepositions from the lesson.',
        questions: [
          {
            emoji: '⌚',
            question_ar: 'مَاذَا عِنْدَكَ يَا مَاجِدُ ؟',
            question_en: 'What do you have, O Majid?',
            correct_ar: 'عِنْدِي سَاعَةٌ',
            correct_en: 'I have a watch.',
            options_ar: ['عِنْدِي سَاعَةٌ', 'عِنْدِي مِصْبَاحٌ', 'عِنْدِي مَسْجِدٌ'],
          },
          {
            emoji: '🖊️',
            question_ar: 'مَاذَا عِنْدَ عَائِشَةَ ؟',
            question_en: 'What does Aisha have?',
            correct_ar: 'عِنْدَهَا قَلَمٌ',
            correct_en: 'She has a pen.',
            options_ar: ['عِنْدَهَا قَلَمٌ', 'عِنْدَهَا سَيَّارَةٌ', 'عِنْدَهَا مِفْتَاحٌ'],
          },
          {
            emoji: '🖤',
            question_ar: 'مَاذَا أَمَامَ المُعَلِّمِ ؟',
            question_en: 'What is in front of the teacher?',
            correct_ar: 'أَمَامَ المُعَلِّمِ سَبُّورَةٌ وَمَسَّاحَةٌ',
            correct_en: 'A board and a duster are in front of the teacher.',
            options_ar: [
              'أَمَامَ المُعَلِّمِ سَبُّورَةٌ وَمَسَّاحَةٌ',
              'أَمَامَهُ مِصْبَاحٌ',
              'أَمَامَهُ قُفْلٌ',
            ],
          },
          {
            emoji: '🌌',
            question_ar: 'أَيْنَ السَّمَاءُ وَأَيْنَ الأَرْضُ ؟',
            question_en: 'Where are the sky and earth?',
            correct_ar: 'السَّمَاءُ فَوْقَنَا وَالأَرْضُ تَحْتَنَا',
            correct_en: 'The sky is above us and the earth is below us.',
            options_ar: [
              'السَّمَاءُ فَوْقَنَا وَالأَرْضُ تَحْتَنَا',
              'السَّمَاءُ تَحْتَنَا',
              'الأَرْضُ فَوْقَنَا',
            ],
          },
        ],
      },
    },
    {
      id: '1-7-5',
      type: 'vocabulary',
      titleEn: 'Supplementary Vocabulary',
      titleAr: 'مُفْرَدَات إِضَافِيَّة',
      payload: {
        words: [
          {
            id: 1,
            ar: 'مَسَّاحَةٌ',
            romanized: 'massāḥatun',
            en: 'Duster',
            bn: 'ডাস্টার',
            emoji: '🧽',
          },
          { id: 2, ar: 'خَارِطَةٌ', romanized: 'khāriṭatun', en: 'Map', bn: 'ম্যাপ', emoji: '🗺️' },
          {
            id: 3,
            ar: 'مِحْرَاثٌ',
            romanized: 'miḥrāthun',
            en: 'Plough',
            bn: 'লাঙ্গল',
            emoji: '🧑‍🌾',
          },
          { id: 4, ar: 'مَكْسُورٌ', romanized: 'maksūrun', en: 'Broken', bn: 'ভাঙা', emoji: '🪓' },
          { id: 5, ar: 'السَّمَاءُ', romanized: 'as-samāʾu', en: 'Sky', bn: 'আসমান', emoji: '☁️' },
          { id: 6, ar: 'الأَرْضُ', romanized: 'al-arḍu', en: 'Earth', bn: 'পৃথিবী', emoji: '🌍' },
          { id: 7, ar: 'قَلْبٌ', romanized: 'qalbun', en: 'Heart', bn: 'হৃদয়', emoji: '❤️' },
          { id: 8, ar: 'نُورٌ', romanized: 'nūrun', en: 'Light', bn: 'আলো', emoji: '💫' },
          {
            id: 9,
            ar: 'ظُلْمَةٌ',
            romanized: 'ẓulmatun',
            en: 'Darkness',
            bn: 'অন্ধকার',
            emoji: '🌑',
          },
        ],
      },
    },
    {
      id: '1-7-6',
      type: 'application',
      titleEn: 'Dialogue Drill (Where? / With whom?)',
      titleAr: 'تَدْرِيب الحِوَار (أَيْنَ؟ / عِنْدَ مَنْ؟)',
      payload: {
        items: [
          {
            emoji: '⌚',
            ar: 'مَاذَا عِنْدَكَ يَا مَاجِدُ؟ — عِنْدِي سَاعَةٌ',
            en: 'What do you have, O Majid? — I have a watch.',
          },
          {
            emoji: '🖊️',
            ar: 'وَمَاذَا عِنْدَ عَائِشَةَ؟ — عِنْدَهَا قَلَمٌ',
            en: 'And what does Aisha have? — She has a pen.',
          },
          {
            emoji: '📍',
            ar: 'أَيْنَ السَّاعَةُ وَأَيْنَ الْقَلَمُ؟',
            en: 'Where are the watch and the pen?',
          },
          {
            emoji: '📍',
            ar: 'السَّاعَةُ عِنْدِي وَالْقَلَمُ عِنْدَ عَائِشَةَ',
            en: 'The watch is with me and the pen is with Aisha.',
          },
          {
            emoji: '🌀',
            ar: 'مَاذَا فَوْقَكِ يَا عَائِشَةُ؟ — فَوْقِي مِصْبَاحٌ',
            en: 'What is above you, O Aisha? — A lamp is above me.',
          },
          {
            emoji: '🌀',
            ar: 'وَمَاذَا فَوْقَ مَاجِدٍ؟ — فَوْقَهُ مِرْوَحَةٌ',
            en: 'And what is above Majid? — A fan is above him.',
          },
          {
            emoji: '🗺️',
            ar: 'عِنْدَ مَنِ الْخَارِطَةُ؟ — الْخَارِطَةُ عِنْدَ الْمُعَلِّمَةِ',
            en: 'Who has the map? — The map is with the female teacher.',
          },
          {
            emoji: '🌌',
            ar: 'أَيْنَ السَّمَاءُ وَالْأَرْضُ؟ — السَّمَاءُ فَوْقَنَا وَالْأَرْضُ تَحْتَنَا',
            en: 'Where are the sky and the earth? — The sky is above us and the earth is below us.',
          },
        ],
      },
    },
    {
      id: '1-7-7',
      type: 'assessment',
      titleEn: 'Comprehension Assessment (Lesson 7)',
      titleAr: 'تَقْيِيم الفَهْم (الدَّرْس ٧)',
      payload: {
        instruction: 'Answer using prepositions of place from the lesson context.',
        questions: [
          {
            emoji: '📘',
            question_ar: 'عِنْدَ مَنِ الْقَلَمُ؟',
            question_en: 'With whom is the pen?',
            correct_ar: 'الْقَلَمُ عِنْدَ عَائِشَةَ',
            correct_en: 'The pen is with Aisha.',
            options_ar: [
              'الْقَلَمُ عِنْدَ عَائِشَةَ',
              'الْقَلَمُ فَوْقَ مَاجِدٍ',
              'الْقَلَمُ تَحْتَ الطَّاوِلَةِ',
            ],
          },
          {
            emoji: '🧽',
            question_ar: 'مَاذَا أَمَامَ الْمُعَلِّمِ؟',
            question_en: 'What is in front of the teacher?',
            correct_ar: 'أَمَامَهُ سَبُّورَةٌ وَمَسَّاحَةٌ',
            correct_en: 'A board and a duster are in front of him.',
            options_ar: [
              'أَمَامَهُ سَبُّورَةٌ وَمَسَّاحَةٌ',
              'أَمَامَهُ مِفْتَاحٌ',
              'أَمَامَهُ حَقِيبَةٌ',
            ],
          },
          {
            emoji: '🕌',
            question_ar: 'مَنْ أَمَامَ الْمَسْجِدِ؟',
            question_en: 'Who is in front of the mosque?',
            correct_ar: 'صَدِيقُ بَشِيرٍ أَمَامَ الْمَسْجِدِ',
            correct_en: 'Bashir’s friend is in front of the mosque.',
            options_ar: [
              'صَدِيقُ بَشِيرٍ أَمَامَ الْمَسْجِدِ',
              'بَشِيرٌ فِي الْمَسْجِدِ',
              'خَالِدٌ خَلْفَ الْمَسْجِدِ',
            ],
          },
          {
            emoji: '🎒',
            question_ar: 'عِنْدَ مَنْ عِقْدُ عَائِشَةَ؟',
            question_en: 'With whom is Aisha’s necklace?',
            correct_ar: 'عِقْدُهَا عِنْدَ فَاطِمَةَ',
            correct_en: 'Her necklace is with Fatima.',
            options_ar: [
              'عِقْدُهَا عِنْدَ فَاطِمَةَ',
              'عِقْدُهَا عِنْدَ مَاجِدٍ',
              'عِقْدُهَا فَوْقَ الْمِنْضَدَةِ',
            ],
          },
        ],
      },
    },
  ],
};

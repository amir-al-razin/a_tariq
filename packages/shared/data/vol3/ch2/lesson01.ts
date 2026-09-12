import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
  darsNumber: 1,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Beginning, Search, Preservation',
      titleAr: 'الْمُفْرَدَاتُ: الْبَدْءُ وَالْبَحْثُ وَالْمُحَافَظَةُ',
      payload: {
        words: [
          { id: 1, ar: 'الْبَدْأُ', romanized: 'al-badʾu', en: 'To start / to begin', emoji: '▶️' },
          {
            id: 2,
            ar: 'الْهُرُوبُ',
            romanized: 'al-hurūbu',
            en: 'To flee / to escape',
            emoji: '🏃',
          },
          { id: 3, ar: 'الشُّعُورُ', romanized: 'ash-shuʿūru', en: 'To feel', emoji: '🫀' },
          { id: 4, ar: 'الْبَحْثُ', romanized: 'al-baḥthu', en: 'To search (for)', emoji: '🔎' },
          { id: 5, ar: 'الْإِدْرَاكُ', romanized: 'al-idrāku', en: 'To realize', emoji: '💡' },
          {
            id: 6,
            ar: 'الْمُحَافَظَةُ',
            romanized: 'al-muḥāfaẓah',
            en: 'To preserve',
            emoji: '🛡️',
          },
          { id: 7, ar: 'الِاعْتِرَافُ', romanized: 'al-iʿtirāf', en: 'To confess', emoji: '🙋' },
          { id: 8, ar: 'التَّعَجُّبُ', romanized: 'at-taʿajjub', en: 'To be amazed', emoji: '😮' },
        ],
      },
    },
    {
      id: '2',
      type: 'application',
      titleEn: 'Verb Chains and Negative Forms',
      titleAr: 'سِلْسِلَةُ الأَفْعَالِ وَالصُّوَرُ السَّلْبِيَّةُ',
      payload: {
        instruction: 'Past/Present/Imperative chains and Negative forms:',
        items: [
          {
            emoji: '🔗',
            ar: 'بَدَأُوا ... بَحَثُوا ... هَرَبُوا ... شَعَرُوا',
            en: 'They started ... searched ... fled ... felt',
          },
          {
            emoji: '🔗',
            ar: 'فَقَدُوا ... سَخِرُوا ... أَغْلَقُوا ... حَرَّكُوا ... اِعْتَرَفُوا',
            en: 'They lost ... mocked ... closed ... moved ... confessed',
          },
          {
            emoji: '🚫',
            ar: 'لَنْ يَبْدَءُوا ... لَنْ يَبْحَثُوا ... لَنْ يَهْرُبُوا',
            en: 'They will never start ... search ... flee (Negative Future)',
          },
          {
            emoji: '🚫',
            ar: 'لَمْ يَبْدَءُوا ... لَمْ يَبْحَثُوا ... لَمْ يَهْرُبُوا',
            en: 'They did not start ... search ... flee (Negative Past)',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading: Reliance, Adhan, and Study',
      titleAr: 'القِرَاءَةُ: التَّوَكُّلُ وَالأَذَانُ وَالْعِلْمُ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Reliance on Allah',
            lines: [
              'الْمُسْلِمُونَ يَتَوَكَّلُونَ عَلَى اللهِ، وَيَبْدَءُونَ أَعْمَالَهُمْ بِاسْمِ اللهِ.',
              'أَمَرَ اللهُ الْمُسْلِمِينَ أَنْ يَتَوَكَّلُوا عَلَى اللهِ.',
            ],
            translationEn:
              'Muslims rely on Allah and begin their actions with the name of Allah. Allah commanded the Muslims to rely on Allah.',
          },
          {
            titleEn: 'The adhan',
            lines: [
              'بَعْدَ الأَذَانِ تَرَكَ النَّاسُ الْبَيْعَ وَأَغْلَقُوا حَوَانِيتَهُمْ وَأَسْرَعُوا إِلَى الْمَسْجِدِ.',
              'وَتَأَخَّرَ بَعْضُ النَّاسِ فَمَا أَدْرَكُوا إِلَّا رَكْعَةً أَوْ رَكْعَتَيْنِ.',
            ],
            translationEn:
              'After the adhan, people left selling, closed their shops, and hurried to the mosque. Some were late and caught only one or two rakʿahs.',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أَسْئِلَةُ الفَهْم',
      payload: {
        instruction: 'Answer from the reading.',
        questions: [
          {
            emoji: '🤲',
            question_ar: 'عَلَى مَنْ يَتَوَكَّلُ الْمُسْلِمُونَ؟',
            question_en: 'Upon whom do Muslims rely?',
            correct_ar: 'عَلَى اللهِ',
            correct_en: 'Upon Allah',
            options_ar: ['عَلَى اللهِ', 'عَلَى النَّاسِ', 'عَلَى الْأَمْوَالِ'],
            questionType: 'hal',
          },
          {
            emoji: '🚪',
            question_ar: 'مَاذَا فَعَلَ النَّاسُ بَعْدَ الأَذَانِ؟',
            question_en: 'What did people do after the adhan?',
            correct_ar:
              'تَرَكُوا الْبَيْعَ وَأَغْلَقُوا حَوَانِيتَهُمْ وَأَسْرَعُوا إِلَى الْمَسْجِدِ',
            correct_en: 'They left selling, closed their shops, and hurried to the mosque',
            options_ar: [
              'تَرَكُوا الْبَيْعَ وَأَغْلَقُوا حَوَانِيتَهُمْ وَأَسْرَعُوا إِلَى الْمَسْجِدِ',
              'نَامُوا',
              'لَعِبُوا',
            ],
            questionType: 'general',
          },
          {
            emoji: '🧍',
            question_ar: 'هَلْ يَسْتَطِيعُ النَّاسُ أَنْ يَهْرُبُوا مِنَ الْمَوْتِ؟',
            question_en: 'Can people escape from death?',
            correct_ar: 'لَا، لَنْ يَهْرُبُوا مِنَ الْمَوْتِ',
            correct_en: 'No, they will not escape death',
            options_ar: ['نَعَمْ', 'لَا، لَنْ يَهْرُبُوا مِنَ الْمَوْتِ', 'أَحْيَانًا'],
            questionType: 'hal',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'application',
      titleEn: 'Application: Lesson Phrases',
      titleAr: 'التَّطْبِيقُ: عِبَارَاتُ الدَّرْسِ',
      payload: {
        instruction: 'Read these core phrases again.',
        items: [
          {
            emoji: '👨',
            ar: 'قَالَ الْوَالِدُ: تَعَلَّمُوا الْعِلْمَ لَا لِتَكْسِبُوا ثَنَاءَ النَّاسِ.',
            en: "The father said: Learn knowledge not to earn people's praise.",
          },
          {
            emoji: '👳',
            ar: 'قَالَ الْعَالِمُ: عَلِّمُوا أَوْلَادَكُمْ أُمُورَ دِينِهِمْ.',
            en: 'The scholar said: Teach your children the matters of their religion.',
          },
        ],
      },
    },
  ],
};

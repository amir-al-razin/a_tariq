import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
  darsNumber: 5,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Defective Verbs with أَنْ',
      titleAr: 'حَالَةُ النَّصْبِ فِي الأَفْعَالِ النَّاقِصَةِ مَعَ أَنْ',
      payload: {
        rules: [
          {
            label: 'Masculine Plural',
            arabic: 'أَرَادُوا أَن يَدْعُوا / أَرَدْتُمْ أَن تَدْعُوا',
            romanized: 'arādū an yadʿū / aradtum an tadʿū',
            meaning: 'The final Nun (ن) drops.',
            examples: [
              { ar: 'أَرَادُوا أَن يَدْعُوا', en: 'They [masculine] wanted to call' },
              { ar: 'أَرَدْتُمْ أَن تَدْعُوا', en: 'You [masculine plural] wanted to call' },
            ],
          },
          {
            label: 'Feminine Plural',
            arabic: 'أَرَدْنَ أَن يَدْعُونَ / أَرَدْتُنَّ أَن تَدْعُونَ',
            romanized: 'aradna an yadʿūna / aradtunna an tadʿūna',
            meaning: 'The final Nun (ن) remains unchanged.',
            examples: [
              { ar: 'أَرَدْنَ أَن يَدْعُونَ', en: 'They [feminine] wanted to call' },
              { ar: 'أَرَدْتُنَّ أَن تَدْعُونَ', en: 'You [feminine plural] wanted to call' },
            ],
          },
          {
            label: 'First Person Plural',
            arabic: 'أَرَدْنَا أَن نَدْعُوَ',
            romanized: 'aradnā an nadʿuwa',
            meaning: 'The weak letter takes a fatḥah.',
            examples: [{ ar: 'أَرَدْنَا أَن نَدْعُوَ', en: 'We wanted to call' }],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'application',
      titleEn: 'Application: Plural Defective Verbs',
      titleAr: 'تَطْبِيقُ الأَفْعَالِ النَّاقِصَةِ',
      payload: {
        instruction: 'Memorize the following verbs adapting to the pattern:',
        items: [
          { ar: 'أَرَادُوا أَنْ يَتْلُوا', en: 'They wanted to recite', emoji: '📖' },
          { ar: 'يُرِيدُونَ أَنْ يَمْحُوا', en: 'They want to erase', emoji: '🧽' },
          {
            ar: 'لَنْ يَسْتَطِيعُوا أَنْ يَنْجُوا',
            en: 'They will never be able to escape',
            emoji: '🏃',
          },
          { ar: 'مَا اسْتَطَاعُوا أَنْ يَرْمُوا', en: 'They were not able to throw', emoji: '⚾' },
          { ar: 'يُرِيدُونَ أَنْ يَبْنُوا', en: 'They want to build', emoji: '🏗️' },
          { ar: 'يَسْتَطِيعُونَ أَنْ يَمْشُوا', en: 'They are able to walk', emoji: '🚶' },
          {
            ar: 'لَا يَسْتَطِيعُونَ أَنْ يَنْسَوْا',
            en: 'They are not able to forget',
            emoji: '🧠',
          },
          { ar: 'أَرْجُو أَنْ تَخْشَوْا', en: 'I hope that you all fear', emoji: '😨' },
          {
            ar: 'أَمَرَهُمُ اللهُ أَنْ يَثْبُتُوا',
            en: 'Allah commanded them to be firm',
            emoji: '🛡️',
          },
          {
            ar: 'يَجِبُ عَلَيْهِمْ أَنْ يُزَكُّوا أَنْفُسَهُمْ',
            en: 'It is obligatory upon them to purify themselves',
            emoji: '✨',
          },
          { ar: 'يَسْعَوْنَ أَنْ يَرْضَوْا', en: 'They strive to be pleased', emoji: '😊' },
          { ar: 'نَوَوْا أَنْ يُصَلُّوا', en: 'They intended to pray', emoji: '🕌' },
          { ar: 'أَرَادُوا أَنْ يَشْتَرُوا', en: 'They wanted to buy', emoji: '🛒' },
          { ar: 'حَاوَلُوا أَنْ يَخْتَفُوا', en: 'They tried to disappear', emoji: '👻' },
        ],
      },
    },
    {
      id: '3',
      type: 'vocabulary',
      titleEn: 'Vocabulary',
      titleAr: 'المُفْرَدَاتُ',
      payload: {
        words: [
          { id: 1, ar: 'جَمَاعَةٌ', romanized: 'jamāʿah', en: 'Congregation / Group', emoji: '👥' },
          { id: 2, ar: 'صَلَاحٌ', romanized: 'ṣalāḥ', en: 'Righteousness / Goodness', emoji: '✅' },
          { id: 3, ar: 'رَبَّى', romanized: 'rabbā', en: 'To raise / to nurture', emoji: '🌱' },
          {
            id: 4,
            ar: 'افْتَرَى',
            romanized: 'iftarā',
            en: 'To fabricate lies / to slander',
            emoji: '🤥',
          },
          { id: 5, ar: 'وَاعِظٌ', romanized: 'wāʿiẓ', en: 'Preacher / Advisor', emoji: '🗣️' },
          { id: 6, ar: 'ارْتَوَى', romanized: 'irtawā', en: 'To quench thirst', emoji: '💧' },
          { id: 7, ar: 'ظَمَأٌ', romanized: 'ẓamaʾ', en: 'Thirst', emoji: '🥵' },
          {
            id: 8,
            ar: 'شَجَرَةُ الْإِسْلَامِ',
            romanized: 'shajaratu al-islām',
            en: 'The tree of Islam',
            emoji: '🌳',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Reading: Advice and Striving',
      titleAr: 'القِرَاءَةُ: المَوْعِظَةُ وَالسَّعْيُ',
      payload: {
        paragraphs: [
          {
            titleEn: "The Father's Advice",
            lines: [
              'قَالَ الْوَالِدُ : يَا أَبْنَائِي ! اخْرُجُوا مِنَ الْمَسْجِدِ بَعْدَ أَنْ تُصَلُّوا مَعَ الْجَمَاعَةِ وَ لَا تَخْرُجُوا قَبْلَ أَنْ تُصَلُّوا . خَرَجُوا بَعْدَ أَنْ صَلَّوْا .',
            ],
            translationEn:
              'The father said: "O my sons! Exit the mosque after you pray with the congregation, and do not exit before you pray." They exited after they prayed.',
          },
          {
            titleEn: 'Mothers and Righteousness',
            lines: [
              'يَجِبُ عَلَى الْأُمَّهَاتِ أَنْ يُرَبِّينَ أَوْلَادَهُنَّ عَلَى الصَّلَاحِ . أَيُّهَا الصَّالِحُونَ ! ابْنُوا مَسْجِدًا عَلَى الْأَرْضِ الَّتِي اشْتَرَيْتُمُوهَا . الْمُسْلِمُونَ يَبْنُونَ بَيْتَ اللهِ قَبْلَ أَنْ يَبْنُوا بُيُوتَهُمْ .',
            ],
            translationEn:
              'It is obligatory upon mothers to raise their children upon righteousness. O righteous ones! Build a mosque on the land which you bought. Muslims build the house of Allah before they build their own houses.',
          },
          {
            titleEn: "The Preacher's Words",
            lines: [
              'أَيُّهَا النَّاسُ ! أَ تُرِيدُونَ أَنْ تَفْتَرُوا عَلَى اللهِ ، فَمَنْ يَنْصُرُكُمْ مِنْ عَذَابِ اللهِ ؟ قَالَ الْوَاعِظُ لِلَّذِينِ حَضَرُوا فِي مَجْلِسِ وَعْظِهِ : يَا إِخْوَانِي ! أَرْجُو أَنْ تَسْعَوْا إِلَى الْخَيْرِ وَ لَا تَسْعَوْا إِلَى الشَّرِّ . أَرَادَ الْمُسَافِرُونَ أَنْ يَرْتَوُوا مِنْ ظَمَئِهِمْ ، فَشَرِبُوا مَاءً بَارِدًا .',
            ],
            translationEn:
              'O people! Do you want to fabricate lies against Allah? Then who will help you against the punishment of Allah? The preacher said to those who attended his preaching gathering: "O my brothers! I hope that you strive towards good and do not strive towards evil." The travelers wanted to quench their thirst, so they drank cold water.',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أَسْئِلَةُ الْفَهْمِ',
      payload: {
        instruction: 'Answer based on the reading passages.',
        questions: [
          {
            emoji: '🗣️',
            question_ar: 'مَاذَا قَالَ الْوَالِدُ لِأَبْنَائِه ؟',
            question_en: 'What did the father say to his sons?',
            correct_ar: 'اخْرُجُوا مِنَ الْمَسْجِدِ بَعْدَ أَنْ تُصَلُّوا',
            correct_en: 'Exit the mosque after you pray',
            options_ar: [
              'اخْرُجُوا مِنَ الْمَسْجِدِ بَعْدَ أَنْ تُصَلُّوا',
              'ادْخُلُوا الْمَسْجِدَ',
              'لَا تَخْرُجُوا',
            ],
            questionType: 'hal',
          },
          {
            emoji: '👩‍👧‍👦',
            question_ar: 'مَاذَا يَجِبُ عَلَى الْأُمَّهَاتِ ؟',
            question_en: 'What is obligatory upon mothers?',
            correct_ar: 'أَنْ يُرَبِّينَ أَوْلَادَهُنَّ عَلَى الصَّلَاحِ',
            correct_en: 'To raise their children upon righteousness',
            options_ar: [
              'أَنْ يُرَبِّينَ أَوْلَادَهُنَّ عَلَى الصَّلَاحِ',
              'أَنْ يَبْنُوا مَسْجِدًا',
              'أَنْ يَشْرَبُوا مَاءً',
            ],
            questionType: 'hal',
          },
          {
            emoji: '🕌',
            question_ar: 'مَاذَا يَبْنِي الْمُسْلِمُونَ قَبْلَ بُيُوتِهِمْ ؟',
            question_en: 'What do Muslims build before their houses?',
            correct_ar: 'يَبْنُونَ بَيْتَ اللهِ',
            correct_en: 'They build the house of Allah',
            options_ar: ['يَبْنُونَ بَيْتَ اللهِ', 'يَبْنُونَ سُوقًا', 'يَبْنُونَ مَدْرَسَةً'],
            questionType: 'hal',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'assessment',
      titleEn: 'Assessment: Fill in the Blanks',
      titleAr: 'اِخْتِبَارٌ: اِمْلَأِ الْفَرَاغَ',
      payload: {
        instruction: 'Fill in the blanks with the correct verb form:',
        questions: [
          {
            emoji: '📝',
            question_ar: 'الْمُجَاهِدُونَ _______ أَن _______ مِنَ اللهِ الْجَنَّةِ',
            question_en: 'The strivers ____ to ____ paradise from Allah',
            correct_ar: 'يُرِيدُونَ / يَشْتَرُوا',
            correct_en: 'want / buy',
            options_ar: [
              'يُرِيدُونَ / يَشْتَرُوا',
              'يُرِيدُ / يَشْتَرِي',
              'يُرِدْنَ / يَشْتَرِينَ',
            ],
            questionType: 'general',
          },
          {
            emoji: '📝',
            question_ar: 'يَجِبُ عَلَى الْأُمَّهَاتِ أَنْ _______ أَوْلَادَهُنَّ عَلَى الصَّلَاحِ',
            question_en: 'Mothers must ____ their children upon righteousness',
            correct_ar: 'يُرَبِّينَ',
            correct_en: 'raise',
            options_ar: ['يُرَبِّينَ', 'يُرَبُّوا', 'يُرَبِّيَ'],
            questionType: 'general',
          },
          {
            emoji: '📝',
            question_ar: 'أَيُّهَا الْمُسْلِمُونَ ! _______ بَيْتَ اللهِ',
            question_en: 'O Muslims! ____ the house of Allah',
            correct_ar: 'ابْنُوا',
            correct_en: 'Build',
            options_ar: ['ابْنُوا', 'ابْنِ', 'ابْنِينَ'],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '7',
      type: 'tarkeeb',
      titleEn: 'Grammar Analysis: لَوْلَا / لَمَا',
      titleAr: 'التَّرْكِيبُ: لَوْلَا / لَمَا',
      payload: {
        tarkeeb: [
          {
            sentence: 'لَوْلَا دِمَاءُ الشُّهَدَاءِ > لَمَا بَقِيَ الْإِسْلَامُ',
            sentenceEn: 'Were it not for the blood of the martyrs, Islam would not have remained',
            type: 'complete',
            tree: [
              { label: 'حَرْفُ شَرْطٍ', labelEn: 'Harf Sharṭ', text: 'لَوْلَا' },
              { label: 'مُبْتَدَأٌ', labelEn: 'Subject', text: 'دِمَاءُ' },
              { label: 'جَوَابُ الشَّرْطِ', labelEn: 'Jawab Ash-Sharṭ', text: 'لَمَا بَقِيَ' },
            ],
          },
        ],
      },
    },
  ],
};

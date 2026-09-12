import type { LessonData } from '../../curriculum';

export const lesson04: LessonData = {
  darsNumber: 4,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Warning and Thirst',
      titleAr: 'الْمُفْرَدَاتُ',
      payload: {
        words: [
          { id: 1, ar: 'سَخِطَ', romanized: 'sakhiṭa', en: 'To be angry / to anger', emoji: '😠' },
          { id: 2, ar: 'حَذَّرَ', romanized: 'ḥadhdhara', en: 'To warn', emoji: '⚠️' },
          { id: 3, ar: 'فَاسِقَات', romanized: 'fāsiqāt', en: 'Wicked/sinful women', emoji: '🦹‍♀️' },
          { id: 4, ar: 'ارْتَوَى', romanized: 'irtawā', en: 'To quench thirst', emoji: '💧' },
          { id: 5, ar: 'عَطِشَ', romanized: 'ʿaṭisha', en: 'To become thirsty', emoji: '🥵' },
          { id: 6, ar: 'قُمْصَان', romanized: 'qumṣān', en: 'Shirts', emoji: '👕' },
          { id: 7, ar: 'جَحِيم', romanized: 'jaḥīm', en: 'Hellfire', emoji: '🔥' },
          { id: 8, ar: 'وَاعِظ', romanized: 'wāʿiẓ', en: 'Preacher / Advisor', emoji: '🗣️' },
          { id: 9, ar: 'هَدْي', romanized: 'hady', en: 'Guidance / Path', emoji: '🧭' },
          { id: 10, ar: 'سَعَى', romanized: 'saʿā', en: 'To strive / make an effort', emoji: '🏃' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Subjunctive Case for Weak Verbs',
      titleAr: 'حَالَةُ النَّصْبِ لِلْأَفْعَالِ الْمُعْتَلَّةِ',
      payload: {
        rules: [
          {
            label: 'Verbs ending in Waw or Yaa',
            arabic: 'لَنْ نَدْعُوَ / لَنْ نَبْكِيَ',
            romanized: 'lan nadʿuwa / lan nabkiya',
            meaning: 'The Fatha appears explicitly on the final weak letter.',
            examples: [
              { ar: 'لَنْ نَدْعُوَ', en: 'We will not call' },
              { ar: 'لَنْ نَبْكِيَ', en: 'We will not cry' },
            ],
          },
          {
            label: 'Verbs ending in Alif',
            arabic: 'لَنْ نَنْسَى',
            romanized: 'lan nansā',
            meaning: 'The Fatha is hidden (muqaddarah) and does not appear on the Alif.',
            examples: [{ ar: 'لَنْ نَنْسَى', en: 'We will not forget' }],
          },
          {
            label: 'Dropping the Noon',
            arabic: 'لَنْ يَسْقُوا / لَنْ تَشْتَرِي',
            romanized: 'lan yasqū / lan tashtarī',
            meaning:
              'For plural masculine and 2nd person singular feminine, the final Noon is dropped to indicate the subjunctive state.',
            examples: [{ ar: 'لَنْ يَسْقُوا', en: 'They (m.) will not give drink' }],
          },
          {
            label: 'Feminine Plural Exception',
            arabic: 'لَنْ يَدْعُونَ / لَنْ تَبْكِينَ',
            romanized: 'lan yadʿūna / lan tabkīna',
            meaning:
              'For feminine plural, the Noon remains because it is the fixed feminine pronoun.',
            examples: [{ ar: 'لَنْ يَدْعُونَ', en: 'They (f.) will not call' }],
          },
        ],
      },
    },
    {
      id: '3',
      type: 'verb_table',
      titleEn: 'Subjunctive Weak Verbs Chains',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      payload: {
        verbTense: 'present',
        isPlural: true,
        verbTable: [
          {
            root: 'يَدْعُو',
            meaning: 'To call',
            theyM: 'لَنْ يَدْعُوا',
            theyF: 'لَنْ يَدْعُونَ',
            youPluralM: 'لَنْ تَدْعُوا',
            youPluralF: 'لَنْ تَدْعُونَ',
            we: 'لَنْ نَدْعُوَ',
          },
          {
            root: 'يَبْكِي',
            meaning: 'To cry',
            theyM: 'لَنْ يَبْكُوا',
            theyF: 'لَنْ يَبْكِينَ',
            youPluralM: 'لَنْ تَبْكُوا',
            youPluralF: 'لَنْ تَبْكِينَ',
            we: 'لَنْ نَبْكِيَ',
          },
          {
            root: 'يَنْسَى',
            meaning: 'To forget',
            theyM: 'لَنْ يَنْسَوْا',
            theyF: 'لَنْ يَنْسَيْنَ',
            youPluralM: 'لَنْ تَنْسَوْا',
            youPluralF: 'لَنْ تَنْسَيْنَ',
            we: 'لَنْ نَنْسَى',
          },
          {
            root: 'يُلْقِي',
            meaning: 'To throw',
            theyM: 'لَنْ يُلْقُوا',
            theyF: 'لَنْ يُلْقِينَ',
            youPluralM: 'لَنْ تُلْقُوا',
            youPluralF: 'لَنْ تُلْقِينَ',
            we: 'لَنْ نُلْقِيَ',
          },
          {
            root: 'يُصَلِّي',
            meaning: 'To pray',
            theyM: 'لَنْ يُصَلُّوا',
            theyF: 'لَنْ يُصَلِّينَ',
            youPluralM: 'لَنْ تُصَلُّوا',
            youPluralF: 'لَنْ تُصَلِّينَ',
            we: 'لَنْ نُصَلِّيَ',
          },
          {
            root: 'يَشْتَرِي',
            meaning: 'To buy',
            theyM: 'لَنْ يَشْتَرُوا',
            theyF: 'لَنْ يَشْتَرِينَ',
            youPluralM: 'لَنْ تَشْتَرُوا',
            youPluralF: 'لَنْ تَشْتَرِينَ',
            we: 'لَنْ نَشْتَرِيَ',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Reading Passages',
      titleAr: 'قِطْعَةُ الْقِرَاءَةِ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Applying Subjunctive with لَنْ and لِـ',
            lines: [
              'قَالَ العَالِمُ : أَيُّهَا المُسْلِمُونَ ! اعْلَمُوا أَنَّ المُشْرِكِينَ لَنْ يَرْضَوْا عَنْكُمْ فِي حَالٍ، فَلا تَسْخَطُوا اللهَ لِتُرْضُوهُمْ .',
              'قَالَ مَاجِدٌ لأَوْلادِهِ : خَالِدٌ وَ أُسَامَةُ وَ طَارِقٌ : خُذُوا المَاءَ وَ تَوَضَّؤُوا ثُمَّ اذْهَبُوا إِلَى مَسْجِدِ الحَيِّ لِتُصَلُّوا العَصْرَ مَعَ الجَمَاعَةِ، وَ بَعْدَ الصَّلاةِ ادْعُوا أَصْدِقَاءَكُمْ إِلَى البَيْتِ لِتَسْقُوهُمْ عَصِيرَ الفَوَاكِهِ البَارِدَ .',
              'عَطِشَتِ الفَلَّاحَاتُ فَأَرَدْنَ أَنْ يَشْرَبْنَ مَاءً بَارِدًا لِيَرْتَوِينَ .',
              'يُحِبُّ رَاشِدٌ أَصْدِقَاءَهُ حُبًّا عَظِيمًا، فَقَالَ : أَصْدِقَائِي لَنْ يَنْسَوْنِي وَ لَنْ أَنْسَاهُمْ .',
            ],
            translationEn:
              'The scholar said: "O Muslims! Know that the polytheists will never be pleased with you in any case, so do not anger Allah to please them." Majid said to his children: Khalid, Usama, and Tariq: "Take water and perform ablution, then go to the neighborhood mosque to pray Asr with the congregation. And after the prayer, invite your friends to the house to give them cold fruit juice to drink." The female farmers became thirsty, so they wanted to drink cold water to quench their thirst. Rashid loves his friends with a great love, so he said: "My friends will never forget me, and I will never forget them."',
          },
          {
            titleEn: 'Warnings and Advice',
            lines: [
              'حَذَّرَتْ فَاطِمَةُ بَنَاتِهَا فَقَالَتْ : لا تُجَالِسْنَ هَؤُلاءِ الفَاسِقَاتِ، فَإِنَّهُنَّ يَدْعُونَكُنَّ إِلَى الشَّرِّ وَ لَنْ يَدْعُونَكُنَّ إِلَى الخَيْرِ .',
              'قَالَ بِلالٌ لِرِجَالٍ يُجَالِسُونَ الفُسَّاقَ : أَ تُطِيعُونَ الفُسَّاقَ لِتَلْقَوْا أَنْفُسَكُمْ إِلَى الهَلاكِ ؟ أَ تُطِيعُونَ الَّذِينَ يَهْدُونَكُمْ إِلَى صِرَاطِ الجَحِيمِ ؟',
              'طَلَبَ الوَاعِظُ مِنَ النَّاسِ أَنْ يَقْرَؤُوا أَخْبَارَ الصَّالِحِينَ لِيَهْتَدُوا بِهَدْيِهِمْ : أَرْجُو أَنَّكُمْ سَتَسْعَوْنَ فِي طَلَبِ العِلْمِ وَ لَنْ تَسْعَوْا فِي طَلَبِ المَالِ .',
            ],
            translationEn:
              'Fatima warned her daughters, saying: "Do not sit with these wicked women, for they invite you to evil, and they will never invite you to good." Bilal said to men who sit with the wicked: "Do you obey the wicked to throw yourselves into ruin? Do you obey those who guide you to the path of Hellfire?" The preacher asked the people to read the stories of the righteous to be guided by their guidance: "I hope that you will strive in seeking knowledge, and you will not strive in seeking wealth."',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Exercise 1: Answer these questions',
      titleAr: 'التَّمْرِينُ الْأَوَّلُ : أَجِبْ عَنْ هَذِهِ الْأَسْئِلَةِ',
      payload: {
        instruction: 'Answer the questions based on the passages.',
        questions: [
          {
            emoji: '🗣️',
            question_ar: 'مَاذَا قَالَ العَالِمُ لِلْمُسْلِمِينَ ؟',
            question_en: 'What did the scholar say to the Muslims?',
            correct_ar: 'أَنَّ المُشْرِكِينَ لَنْ يَرْضَوْا عَنْكُمْ فِي حَالٍ',
            correct_en: 'That the polytheists will never be pleased with you in any case.',
            options_ar: [
              'أَنَّ المُشْرِكِينَ لَنْ يَرْضَوْا عَنْكُمْ فِي حَالٍ',
              'أَنْ يَشْرَبُوا المَاءَ',
              'أَنْ يَذْهَبُوا إِلَى السُّوقِ',
            ],
            questionType: 'general',
          },
          {
            emoji: '⚠️',
            question_ar: 'مَاذَا قَالَ بِلالٌ لِلَّذِينَ يُجَالِسُونَ الفُسَّاقَ ؟',
            question_en: 'What did Bilal say to those who sit with the wicked?',
            correct_ar: 'أَ تُطِيعُونَ الفُسَّاقَ لِتَلْقَوْا أَنْفُسَكُمْ إِلَى الهَلاكِ',
            correct_en: 'Do you obey the wicked to throw yourselves into ruin?',
            options_ar: [
              'أَ تُطِيعُونَ الفُسَّاقَ لِتَلْقَوْا أَنْفُسَكُمْ إِلَى الهَلاكِ',
              'اِشْتَرُوا هَذِهِ القُمْصَانَ',
              'لَنْ نَنْسَى',
            ],
            questionType: 'general',
          },
          {
            emoji: '📖',
            question_ar: 'مَاذَا طَلَبَ الوَاعِظُ مِنَ النَّاسِ ؟',
            question_en: 'What did the preacher ask of the people?',
            correct_ar: 'أَنْ يَقْرَؤُوا أَخْبَارَ الصَّالِحِينَ لِيَهْتَدُوا بِهَدْيِهِمْ',
            correct_en: 'To read the stories of the righteous to be guided by their guidance.',
            options_ar: [
              'أَنْ يَقْرَؤُوا أَخْبَارَ الصَّالِحِينَ لِيَهْتَدُوا بِهَدْيِهِمْ',
              'أَنْ يَلْعَبُوا فِى المَلْعَبِ',
              'أَنْ يَنَامُوا',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

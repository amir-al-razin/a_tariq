import type { LessonData } from '../../curriculum';

export const lesson08: LessonData = {
  darsNumber: 8,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Verb of Intention: أَرَادَ / يُرِيدُ with أَنْ',
      titleAr: 'غرض الفعل: أَرَادَ مع أَنْ',
      payload: {
        rules: [
          {
            label: 'Intention structure (want to do)',
            arabic:
              'يُرِيدُونَ أَنْ يَفْعَلُوا - تُرِيدُونَ أَنْ تَفْعَلُوا - نُرِيدُ أَنْ نَفْعَلَ',
            romanized: "yurīdūn an yaf'alū - turīdūn an taf'alū - nurīd an naf'al",
            meaning:
              'The verb يُرِيدُ (to want) must be followed by أَنْ + subjunctive verb. The second verb is subordinate and expresses the intended action. Example: يُرِيدُونَ أَنْ يَشْرَبُوا (They want to drink).',
            examples: [
              { ar: 'أَرَادُوا أَنْ يَشْرَبُوا', en: 'They wanted to drink' },
              { ar: 'يُرِيدُونَ أَنْ يَتَعَلَّمُوا', en: 'They want to learn' },
            ],
          },
          {
            label: 'Capability: يَسْتَطِيعُ with أَنْ',
            arabic: 'لا يَسْتَطِيعُونَ أَنْ يَفْعَلُوا',
            romanized: "lā yastatiʿūn an yaf'alū",
            meaning:
              'Similarly, يَسْتَطِيعُ (can/be able to) takes أَنْ + subjunctive verb. Negation: لَا يَسْتَطِيعُونَ أَنْ يَفْعَلُوا (They cannot do).',
            examples: [{ ar: 'لا يَسْتَطِيعُونَ أَنْ يَمْنَعُوا', en: 'They cannot prevent' }],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Key Vocabulary: Intentions & Abilities',
      titleAr: 'مفردات: النوايا والقدرات',
      payload: {
        words: [
          { id: 1, ar: 'صَائِمُونَ', romanized: 'sāʾimūn', en: 'Fasting people', emoji: '🌙' },
          { id: 2, ar: 'يُفْطِرُوا', romanized: 'yufṭirū', en: 'They break the fast', emoji: '🍽️' },
          { id: 3, ar: 'أَكْوَاب', romanized: 'akwāb', en: 'Cups / glasses', emoji: '🥤' },
          {
            id: 4,
            ar: 'يَسْتَطِعْنَ',
            romanized: 'yastatiʿn',
            en: 'They (fem) can / are able',
            emoji: '💪',
          },
          {
            id: 5,
            ar: 'يُجَاهِدُوا',
            romanized: 'yujāhidū',
            en: 'They strive / do jihad',
            emoji: '⚔️',
          },
          { id: 6, ar: 'يُنْفِقُوا', romanized: 'yunfiqū', en: 'They spend (wealth)', emoji: '💰' },
          { id: 7, ar: 'يَنَالُوا', romanized: 'yanālū', en: 'They attain / acquire', emoji: '🎯' },
          { id: 8, ar: 'الخِيَاطَة', romanized: 'al-khiyāṭah', en: 'Sewing', emoji: '🧵' },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading: Intentions & Goals',
      titleAr: 'القراءة: النوايا والأهداف',
      payload: {
        paragraphs: [
          {
            titleEn: 'Breaking the Fast',
            lines: [
              'أَرَادَ الصَّائِمُونَ أَنْ يُفْطِرُوا فَأَخَذُوا الْأَكْوَابَ لِيَشْرَبُوا شَرَابًا بَارِدًا ، وَشَكَرُوا اللهَ .',
            ],
            translationEn:
              'The fasting people wanted to break their fast, so they took the cups to drink a cold drink, and they thanked Allah.',
          },
          {
            titleEn: "Majid's Children and Learning",
            lines: [
              'يُرِيدُ أَوْلادُ مَاجِدٍ أَنْ يَتَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ لِيَفْهَمُوا كَلامَ اللهِ .',
              'إِنَّ بَنَاتِ مَاجِدٍ لا يَسْتَطِعْنَ أَنْ يَتَكَلَّمْنَ بِاللُّغَةِ الْعَرَبِيَّةِ ، لِأَنَّهُنَّ مَا تَعَلَّمْنَهَا جَيِّدًا .',
            ],
            translationEn:
              "Majid's children want to learn the Arabic language to understand the speech of Allah. Indeed, Majid's daughters cannot speak the Arabic language, because they did not learn it well.",
          },
          {
            titleEn: 'Divine Commands & Righteous Intentions',
            lines: [
              'أَمَرَ اللهُ الْمُسْلِمِينَ أَنْ يُجَاهِدُوا فِي سَبِيلِ اللهِ .',
              'هَؤُلاءِ الْأَغْنِيَاءُ الصَّالِحُونَ يُرِيدُونَ أَنْ يُنْفِقُوا أَمْوَالَهُمْ فِي سَبِيلِ اللهِ لِيَنَالُوا رِضَى اللهِ .',
            ],
            translationEn:
              'Allah commanded the Muslims to strive in the path of Allah. These righteous wealthy people want to spend their wealth in the path of Allah to attain the pleasure of Allah.',
          },
          {
            titleEn: 'Learning and Adornment',
            lines: [
              'أَرَادَتْ بَنَاتُ فَاطِمَةَ أَنْ يَتَعَلَّمْنَ الْخِيَاطَةَ مِنْ أُمِّهِنَّ .',
              'وَلا نُرِيدُ أَنْ نُزَيِّنَهَا بِاللِّبَاسِ ، لِأَنَّ زِينَةَ الْعِلْمِ خَيْرٌ مِنْ زِينَةِ اللِّبَاسِ .',
            ],
            translationEn:
              "Fatima's daughters wanted to learn sewing from their mother. And we do not want to adorn it with clothing, because the adornment of knowledge is better than the adornment of clothing.",
          },
        ],
      },
    },
    {
      id: '4',
      type: 'application',
      titleEn: 'Practice: Intentional Action Phrases',
      titleAr: 'تطبيق: عبارات الفعل المقصود',
      payload: {
        instruction:
          'Form sentences using يُرِيدُ/أَرَادَ + أَنْ + verb to express intentions and desires. Practice with different subjects.',
        items: [
          {
            emoji: '📝',
            ar: 'يُرِيدُ أَنْ يَكْتُبَ الرِّسَالَةَ',
            en: 'He wants to write the letter (يُرِيدُ + أَنْ + يَفْعَلَ)',
          },
          {
            emoji: '📖',
            ar: 'يُرِيدُونَ أَنْ يَقْرَأُوا الْقُرْآنَ',
            en: 'They want to read the Quran (يُرِيدُونَ + أَنْ + يَفْعَلُوا)',
          },
          {
            emoji: '🏊',
            ar: 'أَرَادَتْ أَنْ تَتَعَلَّمَ السِّبَاحَةَ',
            en: 'She wanted to learn swimming (أَرَادَتْ + أَنْ + تَفْعَلَ)',
          },
          {
            emoji: '👨‍🏫',
            ar: 'يُرِيدُ أَنْ يُعَلِّمَ',
            en: 'He wants to teach (Complete: want to teach)',
          },
          {
            emoji: '⚔️',
            ar: 'يَسْتَطِيعُونَ أَنْ يُجَاهِدُوا',
            en: 'They can strive (Complete: can strive)',
          },
          {
            emoji: '👧',
            ar: 'أَرَادَتِ الْبِنْتُ أَنْ تَلْعَبَ',
            en: 'The girl wanted to play (Complete: girl wanted to)',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'assessment',
      titleEn: 'Assessment: Comprehension & Intention Verbs',
      titleAr: 'التقييم: الفهم وأفعال النوايا',
      payload: {
        instruction: 'Answer these comprehension questions from the reading passages.',
        questions: [
          {
            emoji: '❓',
            question_ar: 'مَاذَا أَرَادَ الصَّائِمُونَ ؟',
            question_en: 'What did the fasting people want?',
            correct_ar: 'أَرَادُوا أَنْ يُفْطِرُوا',
            correct_en: 'They wanted to break the fast',
            options_ar: [
              'أَرَادُوا أَنْ يَصُومُوا',
              'أَرَادُوا أَنْ يُفْطِرُوا',
              'أَرَادُوا أَنْ يَنَامُوا',
            ],
            questionType: 'general',
          },
          {
            emoji: '❓',
            question_ar: 'لِمَ أَخَذُوا الْأَكْوَابَ ؟',
            question_en: 'Why did they take the cups?',
            correct_ar: 'لِيَشْرَبُوا شَرَابًا بَارِدًا',
            correct_en: 'To drink a cold drink',
            options_ar: [
              'لِيَأْكُلُوا طَعَامًا',
              'لِيَشْرَبُوا شَرَابًا بَارِدًا',
              'لِيَغْسِلُوا أَيْدِيَهُمْ',
            ],
            questionType: 'general',
          },
          {
            emoji: '❓',
            question_ar: 'مَاذَا يُرِيدُ أَوْلادُ مَاجِدٍ ؟',
            question_en: "What do Majid's sons want?",
            correct_ar: 'يُرِيدُونَ أَنْ يَتَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ',
            correct_en: 'They want to learn Arabic',
            options_ar: [
              'يُرِيدُونَ أَنْ يَلْعَبُوا',
              'يُرِيدُونَ أَنْ يَتَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ',
              'يُرِيدُونَ أَنْ يَشْرَبُوا المَاءَ',
            ],
            questionType: 'general',
          },
          {
            emoji: '❓',
            question_ar: 'لِمَ يُرِيدُونَ أَنْ يَتَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ ؟',
            question_en: 'Why do they want to learn Arabic?',
            correct_ar: 'لِيَفْهَمُوا كَلامَ اللهِ',
            correct_en: 'To understand the speech of Allah',
            options_ar: [
              'لِيَفْهَمُوا كَلامَ اللهِ',
              'لِيَتَكَلَّمُوا مَعَ النَّاسِ',
              'لِيَعْمَلُوا فِي الدُّوَلِ الْعَرَبِيَّةِ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'q_and_a',
      titleEn: 'Q & A: Intention & Capability Questions',
      titleAr: 'الأسئلة والإجابات',
      payload: {
        instruction: 'Answer the questions in Arabic based on the reading material.',
        questions: [
          {
            emoji: '🎯',
            question_ar:
              'هَلْ تَسْتَطِيعُ بَنَاتُ مَاجِدٍ أَنْ يَتَكَلَّمْنَ بِاللُّغَةِ الْعَرَبِيَّةِ ؟',
            question_en: "Can Majid's daughters speak Arabic?",
            correct_ar: 'لَا ، لَا يَسْتَطِعْنَ لِأَنَّهُنَّ مَا تَعَلَّمْنَهَا جَيِّدًا',
            correct_en: 'No, they cannot because they did not learn it well.',
            options_ar: [
              'نَعَمْ ، يَسْتَطِعْنَ',
              'لَا ، لَا يَسْتَطِعْنَ لِأَنَّهُنَّ مَا تَعَلَّمْنَهَا جَيِّدًا',
            ],
            questionType: 'hal',
          },
          {
            emoji: '💰',
            question_ar: 'مَاذَا يُرِيدُ الْأَغْنِيَاءُ الصَّالِحُونَ ؟',
            question_en: 'What do the righteous wealthy people want?',
            correct_ar: 'يُرِيدُونَ أَنْ يُنْفِقُوا أَمْوَالَهُمْ فِي سَبِيلِ اللهِ',
            correct_en: 'They want to spend their wealth in the path of Allah.',
            options_ar: [
              'يُرِيدُونَ أَنْ يَكْنِزُوا أَمْوَالَهُمْ',
              'يُرِيدُونَ أَنْ يُنْفِقُوا أَمْوَالَهُمْ فِي سَبِيلِ اللهِ',
              'يُرِيدُونَ أَنْ يَبِيعُوا أَمْوَالَهُمْ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🧵',
            question_ar: 'مِمَّنْ أَرَادَتْ بَنَاتُ فَاطِمَةَ أَنْ يَتَعَلَّمْنَ الْخِيَاطَةَ ؟',
            question_en: "From whom did Fatima's daughters want to learn sewing?",
            correct_ar: 'مِنْ أُمِّهِنَّ',
            correct_en: 'From their mother.',
            options_ar: ['مِنْ الْمُعَلِّمَةِ', 'مِنْ أُمِّهِنَّ', 'مِنَ الصَّدِيقَاتِ'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

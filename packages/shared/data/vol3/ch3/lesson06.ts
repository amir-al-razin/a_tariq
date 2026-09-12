import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
  darsNumber: 6,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: "Vocabulary: Forms Infi'aal and Tafaa'ul",
      titleAr: 'الْمُفْرَدَاتُ',
      payload: {
        words: [
          {
            id: 1,
            ar: 'الاِنْفِتَاح',
            romanized: 'al-infitāḥ',
            en: 'Opening / getting opened',
            emoji: '🚪',
          },
          {
            id: 2,
            ar: 'الاِنْكِسَار',
            romanized: 'al-inkisār',
            en: 'Breaking / getting broken',
            emoji: '💥',
          },
          {
            id: 3,
            ar: 'الاِنْهِدَام',
            romanized: 'al-inhidām',
            en: 'Collapsing / getting destroyed',
            emoji: '🏚️',
          },
          {
            id: 4,
            ar: 'الاِنْكِشَاف',
            romanized: 'al-inkishāf',
            en: 'Revealing / getting uncovered',
            emoji: '🔍',
          },
          {
            id: 5,
            ar: 'التَّمَارُض',
            romanized: 'at-tamāruḍ',
            en: 'Feigning sickness',
            emoji: '🤒',
          },
          { id: 6, ar: 'التَّنَاوُم', romanized: 'at-tanāwum', en: 'Feigning sleep', emoji: '😴' },
          {
            id: 7,
            ar: 'التَّشَاوُر',
            romanized: 'at-tashāwur',
            en: 'Mutual consultation',
            emoji: '💬',
          },
          { id: 8, ar: 'التَّقَاتُل', romanized: 'at-taqātul', en: 'Mutual fighting', emoji: '⚔️' },
          {
            id: 9,
            ar: 'التَّحَادُث',
            romanized: 'at-taḥāduth',
            en: 'Mutual conversation',
            emoji: '🗣️',
          },
          {
            id: 10,
            ar: 'التَّعَارُف',
            romanized: 'at-taʿāruf',
            en: 'Mutual acquaintance',
            emoji: '🤝',
          },
          { id: 11, ar: 'مُخْطِئٌ', romanized: 'mukhṭiʾun', en: 'Mistaken / Wrong', emoji: '❌' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: "Baab Al-Infi'aal and Baab At-Tafaa'ul",
      titleAr: 'بَابُ الاِنْفِعَالِ وَبَابُ التَّفَاعُلِ',
      payload: {
        rules: [
          {
            label: "Bab Al-Infi'aal (Consequence)",
            arabic: 'بَابُ الاِنْفِعَالِ',
            romanized: 'bābu al-infiʿāli',
            meaning:
              'This pattern conveys the passive or intransitive consequence of an action (state change).',
            examples: [
              {
                ar: 'فَتَحْتُ الْبَابَ -> اِنْفَتَحَ الْبَابُ',
                en: 'I opened the door -> The door opened',
              },
              {
                ar: 'كَسَرَ الْوَلَدُ الزُّجَاجَ -> اِنْكَسَرَ الزُّجَاجُ',
                en: 'The boy broke the glass -> The glass broke',
              },
            ],
          },
          {
            label: "Bab At-Tafaa'ul (Feigning & Mutuality)",
            arabic: 'بَابُ التَّفَاعُلِ',
            romanized: 'bābu at-tafāʿuli',
            meaning:
              'Expresses pretending to do an action (feigning), or an action done reciprocally (mutually) which requires two or more subjects.',
            examples: [
              {
                ar: 'مَا مَرِضَ الرَّجُلُ بَلْ تَمَارَضَ',
                en: 'The man did not get sick, but he feigned sickness',
              },
              { ar: 'تَشَاوَرَ الرَّجُلَانِ', en: 'The two men consulted each other' },
            ],
          },
        ],
      },
    },
    {
      id: '3',
      type: 'masdar_factory',
      titleEn: "Verb Forms Infi'aal and Tafaa'ul",
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      payload: {
        masdarRows: [
          {
            masdar: 'اِنْفِتَاح',
            masdarEn: 'Opening',
            past: 'اِنْفَتَحَ',
            present: 'يَنْفَتِحُ',
            imperative: 'اِنْفَتِحْ',
            prohibitive: 'لَا تَنْفَتِحْ',
            baab: "Infi'aal",
          },
          {
            masdar: 'اِنْكِسَار',
            masdarEn: 'Breaking',
            past: 'اِنْكَسَرَ',
            present: 'يَنْكَسِرُ',
            imperative: 'اِنْكَسِرْ',
            prohibitive: 'لَا تَنْكَسِرْ',
            baab: "Infi'aal",
          },
          {
            masdar: 'اِنْكِشَاف',
            masdarEn: 'Revealing',
            past: 'اِنْكَشَفَ',
            present: 'يَنْكَشِفُ',
            imperative: 'اِنْكَشِفْ',
            prohibitive: 'لَا تَنْكَشِفْ',
            baab: "Infi'aal",
          },
          {
            masdar: 'تَنَاوُم',
            masdarEn: 'Feigning sleep',
            past: 'تَنَاوَمَ',
            present: 'يَتَنَاوَمُ',
            imperative: 'تَنَاوَمْ',
            prohibitive: 'لَا تَتَنَاوَمْ',
            baab: "Tafaa'ul",
          },
          {
            masdar: 'تَمَارُض',
            masdarEn: 'Feigning sickness',
            past: 'تَمَارَضَ',
            present: 'يَتَمَارَضُ',
            imperative: 'تَمَارَضْ',
            prohibitive: 'لَا تَتَمَارَضْ',
            baab: "Tafaa'ul",
          },
          {
            masdar: 'تَشَاوُر',
            masdarEn: 'Consulting',
            past: 'تَشَاوَرَ',
            present: 'يَتَشَاوَرُ',
            imperative: 'تَشَاوَرْ',
            prohibitive: 'لَا تَتَشَاوَرْ',
            baab: "Tafaa'ul",
          },
          {
            masdar: 'تَقَاتُل',
            masdarEn: 'Fighting',
            past: 'تَقَاتَلَ',
            present: 'يَتَقَاتَلُ',
            imperative: 'تَقَاتَلْ',
            prohibitive: 'لَا تَتَقَاتَلْ',
            baab: "Tafaa'ul",
          },
        ],
      },
    },
    {
      id: '4',
      type: 'grammar_rule',
      titleEn: 'Grammar Explanation',
      titleAr: 'شَرْحُ النَّحْوِ',
      payload: {
        rules: [
          {
            label: "Mutuality in Bab At-Tafaa'ul",
            arabic: 'تَحَادَثَ الرَّجُلَانِ',
            romanized: 'taḥādatha ar-rajulāni',
            meaning:
              'Verbs in this form require two or more subjects. If you say: "The man conversed (تَحَادَثَ الرَّجُلُ)", you are wrong. You must say: "The two men conversed (تَحَادَثَ الرَّجُلَانِ)".',
            examples: [{ ar: 'تَحَادَثَ الرَّجُلَانِ', en: 'The two men conversed' }],
          },
        ],
      },
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Questions and Answers',
      titleAr: 'أَسْئِلَةٌ وَأَجْوِبَةٌ',
      payload: {
        instruction: 'Understand the rule of Mutuality.',
        questions: [
          {
            emoji: '❓',
            question_ar: 'لِمَاذَا تَكُونُ جُمْلَةُ "تَحَادَثَ الرَّجُلُ" خَاطِئَةً؟',
            question_en: 'Why is the sentence "The man conversed (mutually)" wrong?',
            correct_ar: 'لِأَنَّ هَذَا الْفِعْلَ يَطْلُبُ فَاعِلَيْنِ أَوْ أَكْثَرَ.',
            correct_en: 'Because this verb requires two subjects or more.',
            options_ar: [
              'لِأَنَّ هَذَا الْفِعْلَ يَطْلُبُ فَاعِلَيْنِ أَوْ أَكْثَرَ.',
              'لِأَنَّ الرَّجُلَ نَائِمٌ',
              'لِأَنَّهُ فِعْلٌ مَاضٍ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'assessment',
      titleEn: 'Exercise: Correct the sentence',
      titleAr: 'التَّمْرِينُ : صَحِّحِ الْجُمْلَةَ',
      payload: {
        instruction: "Correct the sentence based on the rules of Bab At-Tafaa'ul.",
        questions: [
          {
            emoji: '✍️',
            question_ar: 'فَمَاذَا تَقُولُ عَنْ : تَعَارَفَ الْوَلَدُ ؟',
            question_en: 'How do you correct the sentence: "The boy got acquainted (mutually)"?',
            correct_ar: 'تَعَارَفَ الْوَلَدَانِ',
            correct_en: 'The two boys got acquainted.',
            options_ar: [
              'تَعَارَفَ الْوَلَدَانِ',
              'يَتَعَارَفُ الْوَلَدُ',
              'تَعَارَفَتِ الْبِنْتُ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '7',
      type: 'masdar_factory',
      titleEn: "Masdar Factory: Infi'aal and Tafaa'ul",
      titleAr: 'مَصْنَعُ الْمَصْدَرِ',
      payload: {
        instruction: 'Learn the masdars for the new verb forms.',
        masdarRows: [
          {
            masdar: 'اِنْفِتَاح',
            masdarEn: "Opening (Bab Infi'aal)",
            past: 'اِنْفَتَحَ',
            present: 'يَنْفَتِحُ',
            imperative: 'اِنْفَتِحْ',
            prohibitive: 'لَا تَنْفَتِحْ',
            baab: "Infi'aal",
          },
          {
            masdar: 'تَمَارُض',
            masdarEn: "Feigning sickness (Bab Tafaa'ul)",
            past: 'تَمَارَضَ',
            present: 'يَتَمَارَضُ',
            imperative: 'تَمَارَضْ',
            prohibitive: 'لَا تَتَمَارَضْ',
            baab: "Tafaa'ul",
          },
        ],
      },
    },
  ],
};

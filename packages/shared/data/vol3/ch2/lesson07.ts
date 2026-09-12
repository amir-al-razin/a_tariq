import type { LessonData } from '../../curriculum';

export const lesson07: LessonData = {
  darsNumber: 7,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary',
      titleAr: 'المُفْرَدَاتُ',
      payload: {
        words: [
          {
            id: 1,
            ar: 'إِرْهَابٌ',
            romanized: 'irhāb',
            en: 'Terrorizing / Frightening',
            emoji: '😨',
          },
          {
            id: 2,
            ar: 'فَصْلُ الرَّبِيعِ',
            romanized: 'faṣlu ar-rabīʿ',
            en: 'The spring season',
            emoji: '🌸',
          },
          {
            id: 3,
            ar: 'فَصْلُ الصَّيْفِ',
            romanized: 'faṣlu aṣ-ṣayf',
            en: 'The summer season',
            emoji: '☀️',
          },
          {
            id: 4,
            ar: 'فَصْلُ الْخَرِيفِ',
            romanized: 'faṣlu al-kharīf',
            en: 'The autumn season',
            emoji: '🍂',
          },
          {
            id: 5,
            ar: 'فَصْلُ الشِّتَاءِ',
            romanized: 'faṣlu ash-shitāʾ',
            en: 'The winter season',
            emoji: '❄️',
          },
          { id: 6, ar: 'حَرٌّ', romanized: 'ḥarr', en: 'Heat', emoji: '🔥' },
          { id: 7, ar: 'بَرْدٌ', romanized: 'bard', en: 'Cold', emoji: '🥶' },
          { id: 8, ar: 'قِيمَةٌ', romanized: 'qīmah', en: 'Value / Valuable', emoji: '💎' },
          { id: 9, ar: 'مُبْتَسِمٌ', romanized: 'mubtasim', en: 'Smiling', emoji: '😊' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Doubled Verbs in Form IV',
      titleAr: 'قَاعِدَةٌ: الْفِعْلُ الْمُضَاعَفُ فِي بَابِ الْإِفْعَالِ',
      payload: {
        rules: [
          {
            label: 'Feminine Plural Pronouns (فك الإدغام)',
            arabic: 'أَحَبُّوا -> أَحْبَبْنَ',
            romanized: 'aḥabbū -> aḥbabna',
            meaning:
              'When conjugating doubled verbs for feminine plural or attaching consonant pronouns, the merged double letter must be separated.',
            examples: [
              { ar: 'أَحَبُّوا', en: 'They (m.pl.) loved' },
              { ar: 'أَحْبَبْنَ', en: 'They (f.pl.) loved' },
            ],
          },
        ],
      },
    },
    {
      id: '3',
      type: 'verb_table',
      titleEn: 'Verb Table: To Love (Plurals)',
      titleAr: 'جَدْوَلُ الْأَفْعَالِ: اَلْإِحْبَابُ (جَمْع)',
      payload: {
        verbTense: 'past',
        verbTable: [
          {
            root: 'ح-ب-ب',
            meaning: 'To love',
            he: 'أَحَبُّوا',
            she: 'أَحْبَبْنَ',
            youM: 'أَحْبَبْتُمْ',
            youF: 'أَحْبَبْتُنَّ',
            i: 'أَحْبَبْنَا',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'verb_table',
      titleEn: 'Present Tense (Plurals)',
      titleAr: 'الْمُضَارِعُ (جَمْع)',
      payload: {
        verbTense: 'present',
        verbTable: [
          {
            root: 'ح-ب-ب',
            meaning: 'To love',
            he: 'يُحِبُّونَ',
            she: 'يُحْبِبْنَ',
            youM: 'تُحِبُّونَ',
            youF: 'تُحْبِبْنَ',
            i: 'نُحِبُّ',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'masdar_factory',
      titleEn: 'Command Forms (Masdar Factory)',
      titleAr: 'صِيَغُ الْأَمْرِ',
      payload: {
        masdarRows: [
          {
            masdar: 'اَلْإِعْدَادُ',
            masdarEn: 'To prepare',
            past: 'أَعَدَّ',
            present: 'يُعِدُّ',
            imperative: 'أَعِدُّوا',
            prohibitive: 'لَا تُعِدُّوا',
          },
          {
            masdar: 'اَلْإِتْمَامُ',
            masdarEn: 'To complete',
            past: 'أَتَمَّ',
            present: 'يُتِمُّ',
            imperative: 'أَتِمُّوا',
            prohibitive: 'لَا تُتِمُّوا',
          },
          {
            masdar: 'اَلْإِعْزَازُ',
            masdarEn: 'To honor',
            past: 'أَعَزَّ',
            present: 'يُعِزُّ',
            imperative: 'أَعِزُّوا',
            prohibitive: 'لَا تُعِزُّوا',
          },
          {
            masdar: 'اَلْإِذْلَالُ',
            masdarEn: 'To humiliate',
            past: 'أَذَلَّ',
            present: 'يُذِلُّ',
            imperative: 'أَذِلُّوا',
            prohibitive: 'لَا تُذِلُّوا',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'paragraph',
      titleEn: 'Reading Comprehension',
      titleAr: 'قِرَاءَةٌ وَفَهْمٌ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Prepare a force',
            lines: [
              'قَالَ العَالِمُ : أَيُّهَا الْمُسْلِمُونَ ! أَعِدُّوا لِلْمُشْرِكِينَ قُوَّةً تُرْهِبُونَ بِهَا عَدُوَّ اللهِ وَعَدُوَّكُمْ .',
              'قَالَ اللهُ تَعَالَى فِي القُرْآنِ : أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللهُ لَكُمْ .',
            ],
            translationEn:
              'The scholar said: O Muslims! Prepare a force against the polytheists by which you terrify the enemy of Allah and your enemy. Allah the Almighty said in the Quran: "Do you not love that Allah should forgive you?"',
          },
          {
            titleEn: 'Completing the work',
            lines: [
              'قَالَ الْوَالِدُ لِأَوْلَادِهِ : أَطْلُبُ مِنْكُمْ أَنْ تُتِمُّوا هَذَا الْعَمَلَ فِي ثَلَاثِ سَاعَاتٍ .',
              'قَالَ مَاجِدٌ : يَا أَصْدِقَائِي ! سَمِعْتُ أَنَّكُمْ قَدْ أَعْدَدْتُمْ كِتَابَةً قَيِّمَةً تَنْشُرُونَهَا فِي جَرِيدَةِ صَوْتِ الْإِسْلَامِ ؟',
            ],
            translationEn:
              'The father said to his children: I ask you to complete this work in three hours. Majid said: O my friends! I heard that you have prepared a valuable article that you will publish in the Voice of Islam newspaper?',
          },
          {
            titleEn: 'Seasons',
            lines: [
              'نَحْنُ نُحِبُّ فَصْلَ الرَّبِيعِ ، لِأَنَّهُ فَصْلُ الْجَمَالِ وَالْأَزْهَارِ .',
              'يَكُونُ الْحَرُّ شَدِيدًا فِي فَصْلِ الصَّيْفِ وَيَكُونُ الْبَرْدُ شَدِيدًا فِي فَصْلِ الشِّتَاءِ . أَمَّا فَصْلُ الْخَرِيفِ فَهُوَ فَصْلُ الْأَمْطَارِ .',
            ],
            translationEn:
              'We love the spring season, because it is the season of beauty and flowers. The heat is severe in the summer season and the cold is severe in the winter season. As for the autumn season, it is the season of rains.',
          },
        ],
      },
    },
    {
      id: '7',
      type: 'assessment',
      titleEn: 'Assessment: Conjugation Drills',
      titleAr: 'اِخْتِبَارٌ: تَمَارِينُ التَّصْرِيفِ',
      payload: {
        instruction: 'Choose the correct form to complete the sentence:',
        questions: [
          {
            emoji: '📝',
            question_ar: 'كُنْ صَادِقًا -> (أَنْتُمْ) كُونُوا _______',
            question_en: 'Be truthful -> (You all m.) Be _______',
            correct_ar: 'صَادِقِينَ',
            correct_en: 'truthful',
            options_ar: ['صَادِقِينَ', 'صَادِقُونَ', 'صَادِقَاتٍ'],
            questionType: 'general',
          },
          {
            emoji: '📝',
            question_ar: 'كَانَ صَالِحًا -> (أَنْتُنَّ) كُنَّ _______',
            question_en: 'He was righteous -> (You all f.) Be _______',
            correct_ar: 'صَالِحَاتٍ',
            correct_en: 'righteous',
            options_ar: ['صَالِحَاتٍ', 'صَالِحَةً', 'صَالِحُونَ'],
            questionType: 'general',
          },
          {
            emoji: '📝',
            question_ar: 'طَلَبَتِ الْأُمُّ مِنْ بَنَاتِهَا أَنْ _______ هَذَا الْعَمَلَ',
            question_en: 'The mother asked her daughters to _______ this work',
            correct_ar: 'يُتْمِمْنَ',
            correct_en: 'complete',
            options_ar: ['يُتْمِمْنَ', 'يُتِمُّوا', 'يُتِمَّ'],
            questionType: 'general',
          },
          {
            emoji: '📝',
            question_ar:
              'هُوَ يُكَلِّمُ النَّاسَ مُبْتَسِمًا -> (هُمْ) يُكَلِّمُونَ النَّاسَ _______',
            question_en: 'He speaks to people smiling -> (They) speak to people _______',
            correct_ar: 'مُبْتَسِمِينَ',
            correct_en: 'smiling',
            options_ar: ['مُبْتَسِمِينَ', 'مُبْتَسِمُونَ', 'مُبْتَسِمًا'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

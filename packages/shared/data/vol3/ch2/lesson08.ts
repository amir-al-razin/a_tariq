import type { LessonData } from '../../curriculum';

export const lesson08: LessonData = {
  darsNumber: 8,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: "Vocabulary (Ism Fa'il Derivations)",
      titleAr: 'المُفْرَدَاتُ (اسْمُ الْفَاعِلِ)',
      payload: {
        words: [
          { id: 1, ar: 'سَامِعٌ', romanized: 'sāmiʿ', en: 'Listener / Hearer', emoji: '👂' },
          { id: 2, ar: 'نَاصِحٌ', romanized: 'nāṣiḥ', en: 'Advisor', emoji: '🗣️' },
          { id: 3, ar: 'خَائِفٌ', romanized: 'khāʾif', en: 'Fearful person', emoji: '😨' },
          { id: 4, ar: 'دَاعٍ', romanized: 'dāʿin', en: 'Caller / Inviter', emoji: '📢' },
          { id: 5, ar: 'رَاضٍ', romanized: 'rāḍin', en: 'Pleased / Satisfied person', emoji: '😊' },
          { id: 6, ar: 'مُرْسِلٌ', romanized: 'mursil', en: 'Sender', emoji: '📤' },
          { id: 7, ar: 'مُعْطٍ', romanized: 'muʿṭin', en: 'Giver', emoji: '🤲' },
          { id: 8, ar: 'مُعَلِّمٌ', romanized: 'muʿallim', en: 'Teacher', emoji: '👨‍🏫' },
          { id: 9, ar: 'مُصَلٍّ', romanized: 'muṣallin', en: 'Praying person', emoji: '🕌' },
          { id: 10, ar: 'مُشْتَرٍ', romanized: 'mushtarin', en: 'Buyer', emoji: '🛒' },
        ],
      },
    },
    {
      id: '2',
      type: 'masdar_factory',
      titleEn: 'Masdar Factory: Active Participles',
      titleAr: 'مَصْنَع المَصْدَر: أَسْمَاءُ الْفَاعِلِينَ',
      payload: {
        masdarColumnOverrides: {
          imperativeAr: 'اسْم فَاعِل',
          imperativeEn: 'Active Participle',
          prohibitiveAr: 'جَمْع',
          prohibitiveEn: 'Plural',
        },
        masdarRows: [
          {
            masdar: 'السَّمْع',
            masdarEn: 'Hearing (Form I)',
            past: 'سَمِعَ',
            present: 'يَسْمَعُ',
            imperative: 'سَامِعٌ',
            prohibitive: 'سَامِعُونَ',
          },
          {
            masdar: 'الدَّعْوَة',
            masdarEn: 'Calling (Form I Naqis)',
            past: 'دَعَا',
            present: 'يَدْعُو',
            imperative: 'دَاعٍ',
            prohibitive: 'دَاعُونَ',
          },
          {
            masdar: 'الإِرْسَال',
            masdarEn: 'Sending (Form IV)',
            past: 'أَرْسَلَ',
            present: 'يُرْسِلُ',
            imperative: 'مُرْسِلٌ',
            prohibitive: 'مُرْسِلُونَ',
          },
          {
            masdar: 'التَّعْلِيم',
            masdarEn: 'Teaching (Form II)',
            past: 'عَلَّمَ',
            present: 'يُعَلِّمُ',
            imperative: 'مُعَلِّمٌ',
            prohibitive: 'مُعَلِّمُونَ',
          },
          {
            masdar: 'الِاشْتِرَاء',
            masdarEn: 'Buying (Form VIII Naqis)',
            past: 'اشْتَرَى',
            present: 'يَشْتَرِي',
            imperative: 'مُشْتَرٍ',
            prohibitive: 'مُشْتَرُونَ',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'grammar_rule',
      titleEn: 'The Circumstantial Qualifier (Al-Haal)',
      titleAr: 'قَاعِدَةٌ: الْحَال',
      payload: {
        rules: [
          {
            label: 'Haal as a Single Word (Mufrad)',
            arabic: 'قَرَأَ رَاشِدٌ جَالِسًا',
            romanized: 'qaraʾa rāshidun jālisān',
            meaning:
              'It describes the condition of the subject or object. It is usually derived from the Active Participle and is always in the accusative state (Mansub).',
            examples: [
              { ar: 'قَرَأَ رَاشِدٌ جَالِسًا', en: 'Rashid read sitting' },
              {
                ar: 'قَرَأَتِ الْبَنَاتُ جَالِسَاتٍ',
                en: 'The girls read sitting (Kasrah in Mansub)',
              },
            ],
          },
          {
            label: 'Haal as a Nominal Sentence (Waw Al-Haal)',
            arabic: 'قَرَأَ رَاشِدٌ وَهُوَ جَالِسٌ',
            romanized: 'qaraʾa rāshidun wa-huwa jālisun',
            meaning:
              'The Haal can be an entire sentence attached using the "Waw of Haal" meaning "while".',
            examples: [
              { ar: 'قَرَأَ رَاشِدٌ وَهُوَ جَالِسٌ', en: 'Rashid read while he was sitting' },
              {
                ar: 'رَأَيْتُكَ فِي الْمَسْجِدِ وَأَنْتَ تُصَلِّي',
                en: 'I saw you in the mosque while you were praying',
              },
            ],
          },
        ],
      },
    },
    {
      id: '4',
      type: 'application',
      titleEn: 'Application: Haal Forms',
      titleAr: 'تَطْبِيقُ الْحَالِ',
      payload: {
        instruction: 'Observe the use of the single-word Haal:',
        items: [
          {
            ar: 'قَضَى حَيَاتَهُ مُجَاهِدًا فِي سَبِيلِ اللهِ',
            en: 'He spent his life struggling in the path of Allah',
            emoji: '⚔️',
          },
          {
            ar: 'خَرَجَ الْوَلَدُ مِنَ الْبَيْتِ مُسَلِّمًا عَلَى أَبِيهِ',
            en: 'The boy left the house greeting his father',
            emoji: '👋',
          },
          {
            ar: 'رَأَيْتُكَ فِي الْمَسْجِدِ مُصَلِّيًا',
            en: 'I saw you in the mosque praying',
            emoji: '🕌',
          },
          { ar: 'قَرَأَ الْأَوْلَادُ جَالِسِينَ', en: 'The boys read sitting', emoji: '📖' },
        ],
      },
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Questions on Haal',
      titleAr: 'أَسْئِلَةٌ حَوْلَ الْحَالِ',
      payload: {
        instruction: 'Understand the grammatical state of the Haal.',
        questions: [
          {
            emoji: '❓',
            question_ar:
              'لِمَاذَا كَلِمَةُ (جَالِسَاتٍ) مَكْسُورَةٌ فِي (قَرَأَتِ الْبَنَاتُ جَالِسَاتٍ) ؟',
            question_en: 'Why does the word جَالِسَات change to جَالِسَاتٍ (with Kasrah)?',
            correct_ar: 'لِأَنَّهَا جَمْعُ مُؤَنَّثٍ سَالِمٌ وَهِيَ فِي حَالَةِ النَّصْبِ',
            correct_en: 'Because it is a sound feminine plural in the accusative state (Haal)',
            options_ar: [
              'لِأَنَّهَا جَمْعُ مُؤَنَّثٍ سَالِمٌ وَهِيَ فِي حَالَةِ النَّصْبِ',
              'لِأَنَّهَا مَجْرُورَةٌ بِحَرْفِ جَرٍّ',
              'لِأَنَّهَا فَاعِلٌ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'assessment',
      titleEn: 'Assessment: Rewrite the Sentences',
      titleAr: 'اِخْتِبَارٌ: إِعَادَةُ كِتَابَةِ الْجُمَلِ',
      payload: {
        instruction: 'Rewrite the Haal using a nominal sentence (Waw Al-Haal):',
        questions: [
          {
            emoji: '📝',
            question_ar:
              'خَرَجَ الرِّجَالُ مِنَ الْمَسْجِدِ مُبْتَسِمِينَ -> خَرَجَ الرِّجَالُ مِنَ الْمَسْجِدِ _______',
            question_en: 'The men left the mosque smiling -> The men left the mosque _______',
            correct_ar: 'وَهُمْ مُبْتَسِمُونَ',
            correct_en: 'while they were smiling',
            options_ar: ['وَهُمْ مُبْتَسِمُونَ', 'وَهُمْ مُبْتَسِمِينَ', 'وَهُوَ مُبْتَسِمٌ'],
            questionType: 'general',
          },
          {
            emoji: '📝',
            question_ar:
              'رَأَيْتُ الطَّالِبَاتِ مُشْتَرِيَاتٍ كُتُبًا -> رَأَيْتُ الطَّالِبَاتِ _______',
            question_en:
              'I saw the female students buying books -> I saw the female students _______',
            correct_ar: 'وَهُنَّ مُشْتَرِيَاتٌ',
            correct_en: 'while they were buying',
            options_ar: ['وَهُنَّ مُشْتَرِيَاتٌ', 'وَهُنَّ مُشْتَرِيَاتٍ', 'وَهُمْ مُشْتَرُونَ'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

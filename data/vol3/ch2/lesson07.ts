import type { LessonData } from '../../curriculum';

export const lesson07: LessonData = {
  darsNumber: 7,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary',
      titleAr: 'المُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার',
      payload: {
        words: [
          { id: 1, ar: 'إِرْهَابٌ', romanized: 'irhāb', en: 'Terrorizing / Frightening', bn: 'ভয় দেখানো', emoji: '😨' },
          { id: 2, ar: 'فَصْلُ الرَّبِيعِ', romanized: 'faṣlu ar-rabīʿ', en: 'The spring season', bn: 'বসন্তকাল', emoji: '🌸' },
          { id: 3, ar: 'فَصْلُ الصَّيْفِ', romanized: 'faṣlu aṣ-ṣayf', en: 'The summer season', bn: 'গ্রীষ্মকাল', emoji: '☀️' },
          { id: 4, ar: 'فَصْلُ الْخَرِيفِ', romanized: 'faṣlu al-kharīf', en: 'The autumn season', bn: 'শরৎকাল', emoji: '🍂' },
          { id: 5, ar: 'فَصْلُ الشِّتَاءِ', romanized: 'faṣlu ash-shitāʾ', en: 'The winter season', bn: 'শীতকাল', emoji: '❄️' },
          { id: 6, ar: 'حَرٌّ', romanized: 'ḥarr', en: 'Heat', bn: 'গরম', emoji: '🔥' },
          { id: 7, ar: 'بَرْدٌ', romanized: 'bard', en: 'Cold', bn: 'ঠান্ডা', emoji: '🥶' },
          { id: 8, ar: 'قِيمَةٌ', romanized: 'qīmah', en: 'Value / Valuable', bn: 'মূল্যবান', emoji: '💎' },
          { id: 9, ar: 'مُبْتَسِمٌ', romanized: 'mubtasim', en: 'Smiling', bn: 'হাস্যোজ্জ্বল', emoji: '😊' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Doubled Verbs in Form IV',
      titleAr: 'قَاعِدَةٌ: الْفِعْلُ الْمُضَاعَفُ فِي بَابِ الْإِفْعَالِ',
      titleBn: 'নিয়ম: রূপ IV এর মুদাআফ ক্রিয়া',
      payload: {
        rules: [
          {
            label: 'Feminine Plural Pronouns (فك الإدغام)',
            labelBn: 'স্ত্রীলিঙ্গ বহুবচন সর্বনাম (ইদগাম ভাঙ্গা)',
            arabic: 'أَحَبُّوا -> أَحْبَبْنَ',
            romanized: 'aḥabbū -> aḥbabna',
            meaning: 'When conjugating doubled verbs for feminine plural or attaching consonant pronouns, the merged double letter must be separated.',
            meaningBn: 'স্ত্রীলিঙ্গ বহুবচন বা ব্যঞ্জনবর্ণ সর্বনাম যুক্ত করার সময়, একত্রিত দ্বৈত অক্ষরটি আলাদা করতে হবে।',
            examples: [
              { ar: 'أَحَبُّوا', en: 'They (m.pl.) loved', bn: 'তারা (পুং) ভালোবেসেছিল' },
              { ar: 'أَحْبَبْنَ', en: 'They (f.pl.) loved', bn: 'তারা (স্ত্রী) ভালোবেসেছিল' },
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
      titleBn: 'ক্রিয়া সারণী: ভালোবাসা (বহুবচন)',
      payload: {
        verbTense: 'past',
        verbTable: [
          {
            root: 'ح-ب-ب',
            meaning: 'To love',
            meaningBn: 'ভালোবাসা',
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
      titleBn: 'বর্তমান কাল (বহুবচন)',
      payload: {
        verbTense: 'present',
        verbTable: [
          {
            root: 'ح-ب-ب',
            meaning: 'To love',
            meaningBn: 'ভালোবাসা',
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
      titleBn: 'আদেশ রূপ',
      payload: {
        masdarRows: [
          {
            masdar: 'اَلْإِعْدَادُ',
            masdarEn: 'To prepare',
            masdarBn: 'প্রস্তুত করা',
            past: 'أَعَدَّ',
            present: 'يُعِدُّ',
            imperative: 'أَعِدُّوا',
            prohibitive: 'لَا تُعِدُّوا',
          },
          {
            masdar: 'اَلْإِتْمَامُ',
            masdarEn: 'To complete',
            masdarBn: 'সম্পূর্ণ করা',
            past: 'أَتَمَّ',
            present: 'يُتِمُّ',
            imperative: 'أَتِمُّوا',
            prohibitive: 'لَا تُتِمُّوا',
          },
          {
            masdar: 'اَلْإِعْزَازُ',
            masdarEn: 'To honor',
            masdarBn: 'সম্মান করা',
            past: 'أَعَزَّ',
            present: 'يُعِزُّ',
            imperative: 'أَعِزُّوا',
            prohibitive: 'لَا تُعِزُّوا',
          },
          {
            masdar: 'اَلْإِذْلَالُ',
            masdarEn: 'To humiliate',
            masdarBn: 'অপমান করা',
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
      titleBn: 'পড়া এবং বোঝা',
      payload: {
        paragraphs: [
          {
            titleEn: 'Prepare a force',
            titleBn: 'শক্তি প্রস্তুত করো',
            lines: [
              'قَالَ العَالِمُ : أَيُّهَا الْمُسْلِمُونَ ! أَعِدُّوا لِلْمُشْرِكِينَ قُوَّةً تُرْهِبُونَ بِهَا عَدُوَّ اللهِ وَعَدُوَّكُمْ .',
              'قَالَ اللهُ تَعَالَى فِي القُرْآنِ : أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللهُ لَكُمْ .',
            ],
            translationEn: 'The scholar said: O Muslims! Prepare a force against the polytheists by which you terrify the enemy of Allah and your enemy. Allah the Almighty said in the Quran: "Do you not love that Allah should forgive you?"',
            translationBn: 'আলেম বললেন: হে মুসলিমরা! মুশরিকদের বিরুদ্ধে এমন শক্তি প্রস্তুত করো যা দ্বারা তোমরা আল্লাহর শত্রু এবং তোমাদের শত্রুকে ভীত করতে পারো। আল্লাহ তাআলা কুরআনে বলেছেন: "তোমরা কি ভালোবাসো না যে আল্লাহ তোমাদের ক্ষমা করুন?"',
          },
          {
            titleEn: 'Completing the work',
            titleBn: 'কাজটি সম্পূর্ণ করা',
            lines: [
              'قَالَ الْوَالِدُ لِأَوْلَادِهِ : أَطْلُبُ مِنْكُمْ أَنْ تُتِمُّوا هَذَا الْعَمَلَ فِي ثَلَاثِ سَاعَاتٍ .',
              'قَالَ مَاجِدٌ : يَا أَصْدِقَائِي ! سَمِعْتُ أَنَّكُمْ قَدْ أَعْدَدْتُمْ كِتَابَةً قَيِّمَةً تَنْشُرُونَهَا فِي جَرِيدَةِ صَوْتِ الْإِسْلَامِ ؟',
            ],
            translationEn: 'The father said to his children: I ask you to complete this work in three hours. Majid said: O my friends! I heard that you have prepared a valuable article that you will publish in the Voice of Islam newspaper?',
            translationBn: 'বাবা তার সন্তানদের বললেন: আমি তোমাদের এই কাজটি তিন ঘণ্টার মধ্যে সম্পূর্ণ করতে বলছি। মাজেদ বলল: হে আমার বন্ধুরা! আমি শুনেছি তোমরা একটি মূল্যবান লেখা প্রস্তুত করেছ যা তোমরা ভয়েস অফ ইসলাম পত্রিকায় প্রকাশ করবে?',
          },
          {
            titleEn: 'Seasons',
            titleBn: 'ঋতুসমূহ',
            lines: [
              'نَحْنُ نُحِبُّ فَصْلَ الرَّبِيعِ ، لِأَنَّهُ فَصْلُ الْجَمَالِ وَالْأَزْهَارِ .',
              'يَكُونُ الْحَرُّ شَدِيدًا فِي فَصْلِ الصَّيْفِ وَيَكُونُ الْبَرْدُ شَدِيدًا فِي فَصْلِ الشِّتَاءِ . أَمَّا فَصْلُ الْخَرِيفِ فَهُوَ فَصْلُ الْأَمْطَارِ .',
            ],
            translationEn: 'We love the spring season, because it is the season of beauty and flowers. The heat is severe in the summer season and the cold is severe in the winter season. As for the autumn season, it is the season of rains.',
            translationBn: 'আমরা বসন্তকাল পছন্দ করি, কারণ এটি সৌন্দর্য ও ফুলের ঋতু। গ্রীষ্মকালে গরম প্রচণ্ড থাকে এবং শীতকালে ঠান্ডা প্রচণ্ড থাকে। আর শরৎকাল হলো বৃষ্টির ঋতু।',
          },
        ],
      },
    },
    {
      id: '7',
      type: 'assessment',
      titleEn: 'Assessment: Conjugation Drills',
      titleAr: 'اِخْتِبَارٌ: تَمَارِينُ التَّصْرِيفِ',
      titleBn: 'মূল্যায়ন: রূপান্তর অনুশীলন',
      payload: {
        exercises: {
          blanks: [
            {
              id: 'q1',
              question: 'كُنْ صَادِقًا -> (أَنْتُمْ) كُونُوا _______',
              options: ['صَادِقِينَ', 'صَادِقُونَ', 'صَادِقَاتٍ'],
              correctAnswer: 'صَادِقِينَ',
            },
            {
              id: 'q2',
              question: 'كَانَ صَالِحًا -> (أَنْتُنَّ) كُنَّ _______',
              options: ['صَالِحَاتٍ', 'صَالِحَةً', 'صَالِحُونَ'],
              correctAnswer: 'صَالِحَاتٍ',
            },
            {
              id: 'q3',
              question: 'طَلَبَتِ الْأُمُّ مِنْ بَنَاتِهَا أَنْ _______ هَذَا الْعَمَلَ',
              options: ['يُتْمِمْنَ', 'يُتِمُّوا', 'يُتِمَّ'],
              correctAnswer: 'يُتْمِمْنَ',
            },
            {
              id: 'q4',
              question: 'هُوَ يُكَلِّمُ النَّاسَ مُبْتَسِمًا -> (هُمْ) يُكَلِّمُونَ النَّاسَ _______',
              options: ['مُبْتَسِمِينَ', 'مُبْتَسِمُونَ', 'مُبْتَسِمًا'],
              correctAnswer: 'مُبْتَسِمِينَ',
            },
          ],
        },
      },
    },
  ],
};
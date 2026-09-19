import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
  darsNumber: 3,
  chunks: [
    {
      id: '1',
      type: 'application',
      titleEn: 'Verb Chains: L- and Plural Forms',
      titleAr: 'سِلْسِلَةُ الأَفْعَالِ',
      payload: {
        instruction: 'Review the following verb conjugations:',
        items: [
          {
            emoji: '🗑️',
            ar: 'أَلْقَوْا - أَلْقَيْنَ - أَلْقَيْتُمْ - أَلْقَيْتُنَّ - أَلْقَيْنَا',
            en: 'They threw - You threw - We threw',
          },
          {
            emoji: '🗑️',
            ar: 'يُلْقُونَ - يُلْقِينَ - تُلْقُونَ - تُلْقِينَ - نُلْقِي',
            en: 'They throw - You throw - We throw',
          },
          {
            emoji: '🗑️',
            ar: 'أَلْقُوا - أَلْقِينَ - لَا تُلْقُوا - لَا تُلْقِينَ',
            en: 'Throw! - Do not throw!',
          },
          {
            emoji: '🕌',
            ar: 'صَلَّوْا - صَلَّيْنَ - صَلَّيْتُمْ - صَلَّيْتُنَّ - صَلَّيْنَا',
            en: 'They prayed - You prayed - We prayed',
          },
          {
            emoji: '🕌',
            ar: 'يُصَلُّونَ - يُصَلِّينَ - تُصَلُّونَ - تُصَلِّينَ - نُصَلِّي',
            en: 'They pray - You pray - We pray',
          },
          {
            emoji: '🕌',
            ar: 'صَلُّوا - صَلِّينَ - لَا تُصَلُّوا - لَا تُصَلِّينَ',
            en: 'Pray! - Do not pray!',
          },
          {
            emoji: '🛒',
            ar: 'اِشْتَرَوْا - اِشْتَرَيْنَ - اِشْتَرَيْتُمْ - اِشْتَرَيْتُنَّ - اِشْتَرَيْنَا',
            en: 'They bought - You bought - We bought',
          },
          {
            emoji: '🛒',
            ar: 'يَشْتَرُونَ - يَشْتَرِينَ - تَشْتَرُونَ - تَشْتَرِينَ - نَشْتَرِي',
            en: 'They buy - You buy - We buy',
          },
          {
            emoji: '🛒',
            ar: 'اِشْتَرُوا - اِشْتَرِينَ - لَا تَشْتَرُوا - لَا تَشْتَرِينَ',
            en: 'Buy! - Do not buy!',
          },
        ],
      },
    },
    {
      id: '2',
      type: 'paragraph',
      titleEn: 'Reading: Give, Hide, and Pray',
      titleAr: 'القِرَاءَةُ: أَعْطُوا وَأَخْفُوا وَصَلُّوا',
      payload: {
        paragraphs: [
          {
            titleEn: 'Giving and hiding',
            lines: [
              'أَصْدِقَاءُ رَاشِدٍ أَعْطَوْا رَاشِدًا كِتَابًا قَيِّمًا وَقَالُوا: قَدْ أَعْطَيْنَاكَ هَذَا الكِتَابَ.',
              'العُقَلَاءُ يُخْفُونَ عَنِ النَّاسِ سِرَّهُمْ، وَالسُّفَهَاءُ يُفْشُونَ سِرَّهُمْ لِكُلِّ أَحَدٍ.',
            ],
            translationEn:
              'Rashid’s friends gave him a valuable book. The wise hide their secrets from people, while the foolish disclose their secrets to everyone.',
          },
          {
            titleEn: 'Prayer and the congregation',
            lines: [
              'المُعَلِّمُونَ وَتَلَامِيذُهُمْ صَلَّوْا صَلَاةَ الظُّهْرِ فِي مَسْجِدِ المَدْرَسَةِ.',
              'قَالَ مَحْمُودٌ لِأَوْلَادِهِ: اذْهَبُوا إِلَى مَسْجِدِ الحَيِّ وَصَلُّوا العَصْرَ مَعَ الجَمَاعَةِ.',
            ],
            translationEn:
              'The teachers and their students prayed Dhuhr in the school mosque. Mahmud told his children: go to the neighborhood mosque and pray Asr with the congregation.',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'grammar_rule',
      titleEn: 'Question Word MANN',
      titleAr: 'كَلِمَةُ مَنْ',
      payload: {
        rules: [
          {
            label: 'Singular question form',
            arabic: 'مَنْ صَلَّى فِي الْمَسْجِدِ؟',
            romanized: 'man ṣallā fī al-masjidi?',
            meaning: '“Who prayed in the mosque?” can take singular masculine verb form.',
            examples: [{ ar: 'مَنْ صَلَّى فِي الْمَسْجِدِ؟', en: 'Who prayed in the mosque?' }],
          },
          {
            label: 'Plural or feminine context',
            arabic: 'مَنْ صَلَّوْا فِي الْمَسْجِدِ؟ / مَنْ صَلَّيْنَ فِي الْبَيْتِ؟',
            romanized: 'man ṣallaw ... / man ṣallayna ...',
            meaning:
              'When the questioner knows the group is plural or feminine, matching forms may also be used.',
            examples: [
              { ar: 'مَنْ صَلَّوْا فِي الْمَسْجِدِ؟', en: 'Who (plural) prayed in the mosque?' },
            ],
          },
        ],
      },
    },
    {
      id: '4',
      type: 'q_and_a',
      titleEn: 'Exercise Questions',
      titleAr: 'تَمَارِينُ أَسْئِلَةٍ',
      payload: {
        instruction: 'Answer from the lesson text and conjugation patterns.',
        questions: [
          {
            emoji: '📚',
            question_ar: 'مَاذَا أَعْطَى أَصْدِقَاءُ رَاشِدٍ رَاشِدًا؟',
            question_en: 'What did Rashid’s friends give Rashid?',
            correct_ar: 'كِتَابًا قَيِّمًا',
            correct_en: 'A valuable book',
            options_ar: ['كِتَابًا قَيِّمًا', 'ثَوْبًا', 'قَلَمًا'],
            questionType: 'general',
          },
          {
            emoji: '🚫',
            question_ar: 'مَنْ يُفْشِي سِرَّهُ؟',
            question_en: 'Who discloses his secret?',
            correct_ar: 'السُّفَهَاءُ',
            correct_en: 'The foolish',
            options_ar: ['العُقَلَاءُ', 'السُّفَهَاءُ', 'الأَطْفَالُ'],
            questionType: 'hal',
          },
          {
            emoji: '🕌',
            question_ar: 'أَيْنَ صَلَّى المُعَلِّمُونَ وَتَلَامِيذُهُمْ صَلَاةَ الظُّهْرِ؟',
            question_en: 'Where did the teachers and their students pray Dhuhr?',
            correct_ar: 'فِي مَسْجِدِ المَدْرَسَةِ',
            correct_en: 'In the school mosque',
            options_ar: ['فِي الْبَيْتِ', 'فِي مَسْجِدِ المَدْرَسَةِ', 'فِي السُّوقِ'],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'grammar_rule',
      titleEn: 'Lam and Negative Past',
      titleAr: 'لَمْ وَالمَاضِي المَنْفِيّ',
      payload: {
        rules: [
          {
            label: 'Lam + present verb',
            arabic: 'لَمْ يَذْهَبْ / لَمْ يَذْهَبُوا',
            romanized: 'lam yadhhab / lam yadhhabū',
            meaning:
              'Lam makes the present tense jussive and gives the meaning of a negative past.',
            examples: [{ ar: 'لَمْ يَذْهَبُوا', en: 'They did not go' }],
          },
          {
            label: 'Complete contrast',
            arabic: 'مَا ذَهَبَ / لَمْ يَذْهَبْ',
            romanized: 'mā dhahaba / lam yadhhab',
            meaning: 'Both forms are used to express negation in the past.',
            examples: [{ ar: 'مَا رَجَعُوا / لَمْ يَرْجِعُوا', en: 'They did not return' }],
          },
        ],
      },
    },
  ],
};

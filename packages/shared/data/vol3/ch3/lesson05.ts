import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
  darsNumber: 5,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Conditionals',
      titleAr: 'الْمُفْرَدَاتُ',
      payload: {
        words: [
          {
            id: 1,
            ar: 'التَّثْبِيتُ',
            romanized: 'at-tathbīt',
            en: 'Strengthening / Making firm',
            emoji: '⚓',
          },
          { id: 2, ar: 'قَدَمٌ', romanized: 'qadam', en: 'Foot (pl. aaqdām)', emoji: '🦶' },
          { id: 3, ar: 'حَبَّةٌ', romanized: 'ḥabbah', en: 'A grain / Seed', emoji: '🌾' },
          {
            id: 4,
            ar: 'سُنْبُلَةٌ',
            romanized: 'sunbulah',
            en: 'An ear of corn / Spike',
            emoji: '🌽',
          },
          { id: 5, ar: 'مَثَلٌ', romanized: 'mathal', en: 'Example / Parable', emoji: '📖' },
          { id: 6, ar: 'مُشْرِقٌ', romanized: 'mushriq', en: 'Bright / Shining', emoji: '☀️' },
          { id: 7, ar: 'عِيَادَةٌ', romanized: 'ʿiyādah', en: 'Visiting the sick', emoji: '🏥' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Conditional Sentences (If)',
      titleAr: 'أُسْلُوبُ الشَّرْطِ',
      payload: {
        rules: [
          {
            label: 'The Particle إِنْ (If)',
            arabic: 'إِنْ تَنْصُرْنِي الْيَوْمَ أَنْصُرْكَ غَدًا',
            romanized: 'in tanṣurnī al-yawma anṣurka ghadan',
            meaning:
              'إِنْ enters two present tense verbs (condition and result) making them jussive (Majzum). If it enters past tense verbs, it changes their meaning to the future.',
            examples: [
              {
                ar: 'إِنْ تُطِعْ وَالِدَكَ يُطِعْكَ وَلَدُكَ',
                en: 'If you obey your father, your child will obey you',
              },
              { ar: 'إِنْ يَجْتَهِدُوا يَنْجَحُوا', en: 'If they strive, they will succeed' },
            ],
          },
          {
            label: 'Faa in the Result',
            arabic: 'إِنْ جَاءَكَ ضَيْفٌ فَأَكْرِمْهُ',
            romanized: "in jā'aka ḍayfun fa-akrimhu",
            meaning:
              'The letter فَ is added to the result of a condition (jawāb al-sharṭ) when the result is a command, request, or cannot be a regular verb response.',
            examples: [
              {
                ar: 'إِنْ يَقُمْ عَلَى بَابِكَ فَقِيرٌ فَتَصَدَّقْ عَلَيْهِ',
                en: 'If a poor person stands at your door, then give charity to him',
              },
            ],
          },
          {
            label: 'The Particle إِذَا',
            arabic: 'إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ',
            romanized: "idhā sa'alta fa-as'ali-llāha",
            meaning:
              'إِذَا is a noun of time/circumstance and can also come with the meaning of a condition (when/if).',
            examples: [
              { ar: 'إِذَا دَعَوْتَنِي أَجَبْتُكَ', en: 'When/if you call me, I answer you' },
            ],
          },
          {
            label: 'The Particle لَوْ (If for the past)',
            arabic: 'لَوْ تَعَلَّمْتَ اللُّغَةَ الْعَرَبِيَّةَ لَفَهِمْتَ الْقُرْآنَ',
            romanized: "law taʿallamta al-lughata al-ʿarabiyyata la-fahimta al-qur'āna",
            meaning: 'لَوْ is a conditional particle used for hypothetical situations in the past.',
            examples: [
              {
                ar: 'لَوْ كَانَ لِي مَالٌ لَأَعْطَيْتُكَ',
                en: 'If I had wealth, I would have given it to you',
              },
            ],
          },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading Passage',
      titleAr: 'قِطْعَةُ الْقِرَاءَةِ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Conditions in the Present',
            lines: [
              'إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ وَ يُثْبِتْ أَقْدَامَكُمْ . إِنْ تُطِيعُوا اللَّهَ وَ رَسُولَهُ يُدْخِلْكُمُ الْجَنَّةَ وَ يُعْطِكُمْ أَجْرًا عَظِيمًا . إِنْ تُنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ تَجِدُوا أَجْرَهَا عِنْدَ اللَّهِ .',
              'أَيُّهَا الْوَلَدُ ! إِنْ تَتَعَلَّمِ اللُّغَةَ الْعَرَبِيَّةَ تَفْهَمِ الْقُرْآنَ وَ تَجِدْ حَلَاوَةَ الْقُرْآنِ . إِنْ تَضَعْ أَوْقَاتَكَ الْغَالِيَةَ فِي لَهْوٍ وَ لَعِبٍ يَضِعْ مُسْتَقْبَلُكَ .',
              'قَالَ اللَّهُ تَعَالَى فِي الْقُرْآنِ : مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ، فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ .',
            ],
            translationEn:
              'If you help Allah, He will help you and make your feet firm. If you obey Allah and His Messenger, He will admit you to Paradise and give you a great reward. If you spend your wealth in the path of Allah, you will find its reward with Allah. O boy! If you learn the Arabic language, you will understand the Quran and find the sweetness of the Quran. If you waste your precious time in amusement and play, your future will be wasted. Allah the Exalted said in the Quran: The example of those who spend their wealth in the path of Allah is like a grain that grew seven spikes, in every spike is a hundred grains.',
          },
          {
            titleEn: 'Conditions in the Past',
            lines: [
              'أَيُّهَا النَّاسُ ! إِنْ تَرَكْتُمُ الْقُرْآنَ وَ السُّنَّةَ خَسِرْتُمْ دِينَكُمْ وَ دُنْيَاكُمْ . يُحِبُّ اللَّهُ الَّذِينَ إِنْ طَعِمُوا شَكَرُوا وَ إِنْ جَاعُوا صَبَرُوا .',
              'لَوْ تَعَلَّمْتَ اللُّغَةَ الْعَرَبِيَّةَ لَفَهِمْتَ الْقُرْآنَ . لَوْ كَانَ لِي مَالٌ لَأَعْطَيْتُكَ . لَوْ عَلِمْتُ أَنَّكَ مَرِيضٌ لَأَتَيْتُكَ لِعِيَادَتِكَ .',
              'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَ سَلَّمَ : لَوْ عَلِمْتُمْ مَا أَعْلَمُ لَضَحِكْتُمْ قَلِيلًا وَ لَبَكَيْتُمْ كَثِيرًا .',
            ],
            translationEn:
              'O people! If you abandon the Quran and the Sunnah, you will lose your religion and your world. Allah loves those who, if they eat, they are grateful, and if they go hungry, they are patient. If you had learned the Arabic language, you would have understood the Quran. If I had wealth, I would have given it to you. If I had known that you were sick, I would have come to you to visit you. The Messenger of Allah (peace be upon him) said: If you knew what I know, you would laugh little and cry much.',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'assessment',
      titleEn: 'Exercise 1: Read and Translate Conditionals',
      titleAr: 'التَّمْرِينُ : اِقْرَأْ وَتَرْجِمْ',
      payload: {
        instruction: 'Read and translate these sentences.',
        questions: [
          {
            emoji: '📖',
            question_ar: 'لَوْ عَلِمْتُ أَنَّكَ مَرِيضٌ لَأَتَيْتُكَ لِعِيَادَتِكَ.',
            question_en: 'Translate this sentence.',
            correct_ar: 'If I had known that you were sick, I would have come to you to visit you.',
            correct_en: 'If I had known that you were sick, I would have come to you to visit you.',
            options_ar: [
              'If I had known that you were sick, I would have come to you to visit you.',
              'If you are sick, I will visit you.',
              'When you are sick, I visit you.',
            ],
            questionType: 'general',
          },
          {
            emoji: '📖',
            question_ar: 'إِنْ يَقُمْ عَلَى بَابِكَ فَقِيرٌ فَتَصَدَّقْ عَلَيْهِ.',
            question_en: 'Translate this sentence.',
            correct_ar: 'If a poor person stands at your door, then give charity to him.',
            correct_en: 'If a poor person stands at your door, then give charity to him.',
            options_ar: [
              'If a poor person stands at your door, then give charity to him.',
              'When a poor person comes to your door, do not let him in.',
              'If a rich person stands at your door, welcome him.',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
  darsNumber: 3,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Reliance and Attainment',
      titleAr: 'الْمُفْرَدَاتُ',
      payload: {
        words: [
          {
            id: 1,
            ar: 'اَلِاعْتِمَادُ عَلَى',
            romanized: 'al-iʿtimādu ʿalā',
            en: 'To rely on',
            emoji: '🤝',
          },
          {
            id: 2,
            ar: 'اَلْفَوْزُ (بِـ)',
            romanized: 'al-fawzu (bi-)',
            en: 'To win / succeed',
            emoji: '🏆',
          },
          { id: 3, ar: 'غَرَضٌ', romanized: 'gharaḍ', en: 'Purpose / goal', emoji: '🎯' },
          { id: 4, ar: 'نَالَ', romanized: 'nāla', en: 'To attain', emoji: '🏅' },
          { id: 5, ar: 'جَائِزَةٌ', romanized: "jā'izah", en: 'Prize / award', emoji: '🎁' },
          { id: 6, ar: 'قَيِّمَةٌ', romanized: 'qayyimah', en: 'Valuable', emoji: '💎' },
          { id: 7, ar: 'ضَيَّعَ', romanized: 'ḍayyaʿa', en: 'To waste', emoji: '🗑️' },
          { id: 8, ar: 'لَهْوٌ', romanized: 'lahw', en: 'Amusement / distraction', emoji: '🎮' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Relative Pronouns',
      titleAr: 'الْأَسْمَاءُ الْمَوْصُولَةُ',
      payload: {
        rules: [
          {
            label: 'Specific Relative Pronouns',
            arabic: 'الَّذِي / الَّتِي / الَّذِينَ / اللَّاتِي',
            romanized: 'alladhī / allatī / alladhīna / allātī',
            meaning:
              'الَّذِي (masc. sing.), الَّتِي (fem. sing. & non-human pl.), الَّذِينَ (masc. pl. rational), اللَّاتِي (fem. pl. rational).',
            examples: [
              { ar: 'اَلْكِتَابُ الَّذِي عِنْدَ رَاشِدٍ', en: 'The book which is with Rashid' },
              {
                ar: 'اَلتَّلَامِيذُ الَّذِينَ يَدْرُسُونَ الْفِقْهَ',
                en: 'The students who study Fiqh',
              },
            ],
          },
          {
            label: 'Universal Relative Pronouns',
            arabic: 'مَنْ / مَا',
            romanized: 'man / mā',
            meaning:
              'مَنْ (Whoever / Who) is used for humans regardless of gender/number. مَا (Whatever / That which) is used for non-humans.',
            examples: [
              { ar: 'مَنْ يَعْمَلُ بِعِلْمِهِ', en: 'Whoever acts upon his knowledge' },
              { ar: 'مَا يَنْفَعُكَ', en: 'What benefits you' },
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
            titleEn: 'Descriptions Using Relative Pronouns',
            lines: [
              'اَلْكِتَابُ الَّذِي عِنْدَ رَاشِدٍ جَدِيدٌ وَالْكِتَابُ الَّذِي عِنْدَ خَالِدٍ قَدِيمٌ.',
              'تَغْسِلُ فَاطِمَةُ الثَّوْبَ الَّذِي تَوَسَّخَ / الثِّيَابَ الَّتِي تَوَسَّخَتْ.',
              'اَلْقَلَمُ الَّذِي اشْتَرَيْتُهُ جَيِّدٌ، وَالْأَقْلَامُ الَّتِي اشْتَرَاهَا أَصْدِقَائِي غَالِيَةٌ.',
              'اَلتِّلْمِيذُ الَّذِي يَدْرُسُ الْفِقْهَ ذَكِيٌّ، اَلتَّلَامِيذُ الَّذِينَ يَدْرُسُونَ الْفِقْهَ أَذْكِيَاءُ.',
              'اَلْبِنْتُ الَّتِي غَسَلَتْ ثِيَابَهَا تُحِبُّ النَّظَافَةَ.',
              'اَلْبَنَاتُ اللَّاتِي يَدْرُسْنَ اللُّغَةَ الْعَرَبِيَّةَ يُحْبِبْنَ أَنْ يَفْهَمْنَ الْقُرْآنَ وَالسُّنَّةَ.',
            ],
            translationEn:
              'The book which is with Rashid is new, and the book which is with Khalid is old. Fatima washes the garment which got dirty / the garments which got dirty. The pen which I bought is good, and the pens which my friends bought are expensive. The male student who studies Fiqh is smart; the male students who study Fiqh are smart. The girl who washed her clothes loves cleanliness. The girls who study the Arabic language love to understand the Quran and the Sunnah.',
          },
          {
            titleEn: 'Whoever and Whatever (من و ما)',
            lines: [
              'مَنْ يَعْمَلُ بِعِلْمِهِ خَيْرٌ مِمَّنْ لَا يَعْمَلُ بِعِلْمِهِ.',
              'لَا خَيْرَ فِيمَنْ يَعِظُ النَّاسَ وَيَنْسَى نَفْسَهُ.',
              'لَا تَعْتَمِدْ عَلَى مَنْ يَكْذِبُ.',
              'خُذْ مِنْ هٰذِهِ الْأَشْيَاءِ مَا يَنْفَعُكَ وَاتْرُكْ مَا لَا يَنْفَعُكَ.',
              'سَيَفْنَى مَا أَبْقَيْتَهُ لِنَفْسِكَ، وَيَبْقَى مَا أَنْفَقْتَهُ فِي سَبِيلِ اللَّهِ.',
            ],
            translationEn:
              'Whoever acts upon his knowledge is better than whoever does not act upon his knowledge. There is no good in whoever preaches to people and forgets himself. Do not rely on whoever lies. Take from these things what benefits you and leave what does not benefit you. What you kept for yourself will perish, and what you spent in the path of Allah will remain.',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'assessment',
      titleEn: 'Exercise: Use مَنْ Instead',
      titleAr: 'التَّمْرِينُ : اِسْتَعْمِلْ "مَنْ"',
      payload: {
        instruction:
          'Use مَنْ in place of the specific relative pronouns (الذي, الذين, التي, اللاتي).',
        questions: [
          {
            emoji: '🔄',
            question_ar: 'اَلَّذِي يَجْمَعُ الْعِلْمَ خَيْرٌ مِنَ الَّذِي يَجْمَعُ الْمَالَ.',
            question_en: 'Change using مَنْ',
            correct_ar: 'مَنْ يَجْمَعُ الْعِلْمَ خَيْرٌ مِمَّنْ يَجْمَعُ الْمَالَ.',
            correct_en: 'Whoever gathers knowledge is better than whoever gathers wealth.',
            options_ar: [
              'مَنْ يَجْمَعُ الْعِلْمَ خَيْرٌ مِمَّنْ يَجْمَعُ الْمَالَ.',
              'مَا يَجْمَعُ الْعِلْمَ خَيْرٌ',
              'الَّتِي يَجْمَعُ الْعِلْمَ خَيْرٌ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🔄',
            question_ar: 'أُحِبُّ الَّذِينَ يُجَاهِدُونَ فِي سَبِيلِ اللَّهِ.',
            question_en: 'Change using مَنْ',
            correct_ar: 'أُحِبُّ مَنْ يُجَاهِدُونَ فِي سَبِيلِ اللَّهِ.',
            correct_en: 'I love whoever strives in the path of Allah.',
            options_ar: [
              'أُحِبُّ مَنْ يُجَاهِدُونَ فِي سَبِيلِ اللَّهِ.',
              'أُحِبُّ مَا يُجَاهِدُونَ',
              'يُحِبُّ اللَّهُ مَنْ يُجَاهِدُونَ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'assessment',
      titleEn: 'Exercise: Read and Translate Conditional Maxims',
      titleAr: 'التَّمْرِينُ : اِقْرَأْ وَتَرْجِمْ',
      payload: {
        instruction: 'Read and translate the conditional statements.',
        questions: [
          {
            emoji: '📖',
            question_ar:
              'يُحِبُّ اللَّهُ الَّذِينَ يَأْكُلُونَ مِنْ كَسْبِهِمْ ، أَمَّا الَّذِينَ يَسْأَلُونَ النَّاسَ فَلَا يُحِبُّهُمُ اللَّهُ.',
            question_en: 'Translate this sentence.',
            correct_ar:
              'Allah loves those who eat from their earnings; as for those who beg from people, Allah does not love them.',
            correct_en:
              'Allah loves those who eat from their earnings; as for those who beg from people, Allah does not love them.',
            options_ar: [
              'Allah loves those who eat from their earnings; as for those who beg from people, Allah does not love them.',
              'Allah loves whoever prays...',
              'Allah loves those who fast...',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

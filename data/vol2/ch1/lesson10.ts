import type { LessonData } from '../../curriculum';

export const lesson10: LessonData = {
  darsNumber: 10,
  chunks: [
    {
      id: '2-10-1',
      type: 'vocabulary',
      titleEn: 'Vocabulary — Lesson 10',
      titleAr: 'الْمُفْرَدَات',
      payload: {
        words: [
          { id: 1, ar: 'عَصِيرٌ', romanized: "'aṣīr", en: 'Juice', emoji: '🥤' },
          { id: 2, ar: 'شَاةٌ', romanized: 'shāh', en: 'Sheep / Goat', emoji: '🐑' },
          { id: 3, ar: 'بَقَرَةٌ', romanized: 'baqarah', en: 'Cow', emoji: '🐄' },
          { id: 4, ar: 'كَبْشٌ', romanized: 'kabsh', en: 'Ram', emoji: '🐏' },
          { id: 5, ar: 'قِرْطَاسٌ', romanized: 'qirṭās', en: 'Paper', emoji: '📄' },
          { id: 6, ar: 'مِمَّ', romanized: 'mimma', en: 'From what?', emoji: '❓' },
          { id: 7, ar: 'إِلَامَ', romanized: 'ilāma', en: 'To what? / Until what?', emoji: '❓' },
        ],
      },
    },
    {
      id: '2-10-2',
      type: 'grammar_rule',
      titleEn: 'يُرِيدُ أَنْ — Wants to do (Present)',
      titleAr: 'يُرِيدُ أَنْ — الْمُضَارِع',
      payload: {
        rules: [
          {
            label: 'يُرِيدُ / تُرِيدُ / أُرِيدُ + أَنْ + مُضَارِع مَنْصُوب',
            arabic: 'يُرِيدُ أَنْ يَفْعَلَ',
            romanized: "yurīdu an yaf\'ala",
            meaning:
              "'Wants to do' — أَنْ puts the following verb in the subjunctive (fatha ending)",
            examples: [
              { ar: 'يُرِيدُ أَنْ يَفْعَلَ', en: 'He wants to do' },
              { ar: 'تُرِيدُ أَنْ تَفْعَلَ', en: 'She wants to do' },
              { ar: 'تُرِيدُ أَنْ تَفْعَلَ', en: 'You (m) want to do' },
              { ar: 'تُرِيدِينَ أَنْ تَفْعَلِي', en: 'You (f) want to do' },
              { ar: 'أُرِيدُ أَنْ أَفْعَلَ', en: 'I want to do' },
            ],
          },
        ],
      },
    },
    {
      id: '2-10-3',
      type: 'grammar_rule',
      titleEn: 'أَرَادَ أَنْ — Wanted to do (Past)',
      titleAr: 'أَرَادَ أَنْ — الْمَاضِي',
      payload: {
        rules: [
          {
            label: 'أَرَادَ / أَرَادَتْ / أَرَدْتَ + أَنْ + مُضَارِع مَنْصُوب',
            arabic: 'أَرَادَ أَنْ يَفْعَلَ',
            romanized: "arāda an yaf\'ala",
            meaning: "'Wanted to do' — past tense of يُرِيدُ, still followed by أَنْ + subjunctive",
            examples: [
              { ar: 'أَرَادَ أَنْ يَفْعَلَ', en: 'He wanted to do' },
              { ar: 'أَرَادَتْ أَنْ تَفْعَلَ', en: 'She wanted to do' },
              { ar: 'أَرَدْتَ أَنْ تَفْعَلَ', en: 'You (m) wanted to do' },
              { ar: 'أَرَدْتِ أَنْ تَفْعَلِي', en: 'You (f) wanted to do' },
              { ar: 'أَرَدْتُ أَنْ أَفْعَلَ', en: 'I wanted to do' },
            ],
          },
        ],
      },
    },
    {
      id: '2-10-4',
      type: 'paragraph',
      titleEn: 'Reading — يُرِيدُ أَنْ in Context',
      titleAr: 'قِرَاءَة — يُرِيدُ أَنْ',
      payload: {
        paragraphs: [
          {
            lines: [
              'أُرِيدُ أَنْ أَشْرَبَ مَاءَ زَمْزَمَ.',
              'يُرِيدُ أَخُو مَاجِدٍ أَنْ يَشْرَبَ مَاءً بَارِدًا.',
              'أَرَادَتْ صَدِيقَةُ عَائِشَةَ أَنْ تَشْرَبَ عَصِيرَ الْعِنَبِ.',
              'يَا أَخَا مَاجِدٍ! أَنْتَ تُرِيدُ أَنْ تَشْرَبَ عَسَلًا.',
              'يَا صَدِيقَةَ زَيْنَبَ! أَنْتِ تُرِيدِينَ أَنْ تَشْرَبِي لَبَنَ الْبَقَرِ.',
              'أَنَا لَا أُرِيدُ أَنْ أَشْرَبَ هَذَا الْعَصِيرَ، لِأَنَّهُ حَامِضٌ.',
            ],
            translationEn:
              "I want to drink Zamzam water. Majid's brother wants to drink cold water. Aisha's friend wanted to drink grape juice. O brother of Majid! You want to drink honey. O friend of Zainab! You want to drink cow's milk. I do not want to drink this juice, because it is sour.",
          },
          {
            lines: [
              'أَرَادَ وَلَدُ بِلَالٍ أَنْ يَذْهَبَ إِلَى الْمَدْرَسَةِ، فَخَلَعَ لِبَاسَ الْمَنْزِلِ وَلَبِسَ لِبَاسَ الْمَدْرَسَةِ ثُمَّ خَرَجَ مِنَ الْبَيْتِ.',
              'أَنَا تَاجِرٌ أَمِينٌ، أَنَا أُرِيدُ أَنْ أُنْفِقَ مَالِي فِي سَبِيلِ اللهِ.',
              'أَرَادَ اللهُ أَنْ يُخْرِجَ النَّاسَ مِنَ الظَّلَامِ إِلَى النُّورِ، فَأَرْسَلَ رَسُولَهُ وَأَنْزَلَ عَلَيْهِ الْكِتَابَ.',
            ],
            translationEn:
              "Bilal's son wanted to go to the madrasa, so he took off his home clothes, put on his school clothes, then exited the house. I am an honest merchant; I want to spend my wealth in the path of Allah. Allah wanted to bring people out of darkness into light, so He sent His Messenger and revealed the Book to him.",
          },
        ],
      },
    },
    {
      id: '2-10-5',
      type: 'q_and_a',
      titleEn: 'Comprehension Q&A',
      titleAr: 'أَسْئِلَةُ الفَهْم',
      payload: {
        questions: [
          {
            emoji: '💧',
            question_ar: 'مَاذَا يُرِيدُ أَخُو مَاجِدٍ؟',
            question_en: "What does Majid's brother want?",
            correct_ar: 'يُرِيدُ أَنْ يَشْرَبَ مَاءً بَارِدًا',
            correct_en: 'He wants to drink cold water.',
            options_ar: [
              'يُرِيدُ أَنْ يَشْرَبَ مَاءً بَارِدًا',
              'يُرِيدُ أَنْ يَأْكُلَ',
              'يُرِيدُ أَنْ يَنَامَ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🍇',
            question_ar: 'مَاذَا أَرَادَتْ صَدِيقَةُ عَائِشَةَ؟',
            question_en: "What did Aisha's friend want?",
            correct_ar: 'أَرَادَتْ أَنْ تَشْرَبَ عَصِيرَ الْعِنَبِ',
            correct_en: 'She wanted to drink grape juice.',
            options_ar: [
              'أَرَادَتْ أَنْ تَشْرَبَ عَصِيرَ الْعِنَبِ',
              'أَرَادَتْ أَنْ تَشْرَبَ لَبَنًا',
              'أَرَادَتْ أَنْ تَشْرَبَ مَاءً',
            ],
            questionType: 'general',
          },
          {
            emoji: '🍯',
            question_ar: 'يَا أَخَا مَاجِدٍ! هَلْ تُرِيدُ أَنْ تَشْرَبَ عَسَلًا؟',
            question_en: 'O brother of Majid! Do you want to drink honey?',
            correct_ar: 'نَعَمْ .. أُرِيدُ أَنْ أَشْرَبَ عَسَلًا',
            correct_en: 'Yes, I want to drink honey.',
            options_ar: [
              'نَعَمْ .. أُرِيدُ أَنْ أَشْرَبَ عَسَلًا',
              'لَا .. لَا أُرِيدُ',
              'أُرِيدُ عَصِيرًا',
            ],
            questionType: 'hal',
          },
          {
            emoji: '🥛',
            question_ar: 'يَا صَدِيقَةَ زَيْنَبَ! مَاذَا تُرِيدِينَ أَنْ تَشْرَبِي؟',
            question_en: 'O friend of Zainab! What do you want to drink?',
            correct_ar: 'أُرِيدُ أَنْ أَشْرَبَ لَبَنَ الْبَقَرِ',
            correct_en: "I want to drink cow's milk.",
            options_ar: [
              'أُرِيدُ أَنْ أَشْرَبَ لَبَنَ الْبَقَرِ',
              'أُرِيدُ أَنْ أَشْرَبَ عَصِيرًا',
              'أُرِيدُ مَاءً',
            ],
            questionType: 'general',
          },
          {
            emoji: '🏫',
            question_ar: 'مَاذَا أَرَادَ وَلَدُ بِلَالٍ؟',
            question_en: "What did Bilal's son want?",
            correct_ar: 'أَرَادَ أَنْ يَذْهَبَ إِلَى الْمَدْرَسَةِ',
            correct_en: 'He wanted to go to the madrasa.',
            options_ar: [
              'أَرَادَ أَنْ يَذْهَبَ إِلَى الْمَدْرَسَةِ',
              'أَرَادَ أَنْ يَلْعَبَ',
              'أَرَادَ أَنْ يَنَامَ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

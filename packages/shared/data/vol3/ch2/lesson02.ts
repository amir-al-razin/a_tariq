import type { LessonData } from '../../curriculum';

export const lesson02: LessonData = {
  darsNumber: 2,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Plural Defective Verbs',
      titleAr: 'الأَفْعَالُ النَّاقِصَةُ فِي الْجَمْعِ',
      payload: {
        rules: [
          {
            label: 'Waw-root verbs',
            arabic: 'دَعَا - يَدْعُو',
            romanized: 'daʿā - yadʿū',
            meaning: 'Masculine plurals drop the weak letter; feminine forms keep the pattern.',
            examples: [
              { ar: 'دَعَوْا / دَعَوْنَ', en: 'They called (m./f.)' },
              { ar: 'لَنْ يَدْعُوا / لَنْ يَدْعُونَ', en: 'They will never call' },
            ],
          },
          {
            label: 'Ya-root verbs',
            arabic: 'بَكَى - يَبْكِي',
            romanized: 'bakā - yabkī',
            meaning:
              'Masculine plurals drop the weak letter; feminine plural keeps the ya-pattern.',
            examples: [
              { ar: 'بَكَوْا / بَكَيْنَ', en: 'They cried (m./f.)' },
              { ar: 'لَا تَبْكُوا / لَا تَبْكِينَ', en: 'Do not cry' },
            ],
          },
          {
            label: 'Alif-maqsur verbs',
            arabic: 'نَسِيَ - يَنْسَى',
            romanized: 'nasiya - yansā',
            meaning:
              'The masculine plural drops the final alif maqsurah; feminine plural returns to the ya-based pattern.',
            examples: [
              { ar: 'نَسُوا / نَسِينَ', en: 'They forgot (m./f.)' },
              { ar: 'لَنْ يَنْسَوْا / لَنْ يَنْسَيْنَ', en: 'They will never forget' },
            ],
          },
          {
            label: 'Fathah-middle verbs',
            arabic: 'سَعَى - يَسْعَى',
            romanized: 'saʿā - yasʿā',
            meaning:
              'The masculine plural drops the alif maqsurah; feminine plural returns to the ya-based spelling.',
            examples: [
              { ar: 'سَعَوْا / سَعَيْنَ', en: 'They strove (m./f.)' },
              { ar: 'اِسْعَوْا / اِسْعَيْنَ', en: 'Strive!' },
            ],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Guidance and Fellowship',
      titleAr: 'المُفْرَدَاتُ: الهِدَايَةُ وَالمُصَافَحَةُ',
      payload: {
        words: [
          { id: 1, ar: 'الْهِدَايَةُ', romanized: 'al-hidāyah', en: 'Guidance', emoji: '🧭' },
          { id: 2, ar: 'الْخَشْيَةُ', romanized: 'al-khashyah', en: 'Fear', emoji: '😨' },
          { id: 3, ar: 'الِافْتِرَاءُ', romanized: 'al-iftirāʾ', en: 'Slander', emoji: '🗣️' },
          { id: 4, ar: 'الْإِفْشَاءُ', romanized: 'al-ifsāʾ', en: 'Disclosure', emoji: '📢' },
          { id: 5, ar: 'الْمُصَافَحَةُ', romanized: 'al-muṣāfaḥah', en: 'Handshake', emoji: '🤝' },
          { id: 6, ar: 'طَازَجٌ', romanized: 'ṭāzaj', en: 'Fresh', emoji: '🥛' },
        ],
      },
    },
    {
      id: '3',
      type: 'application',
      titleEn: 'Verb Chains: Defective Verbs',
      titleAr: 'سِلْسِلَةُ الأَفْعَالِ النَّاقِصَةُ',
      payload: {
        items: [
          {
            emoji: '🗣️',
            ar: 'دَعَا / يَدْعُو - دَعَوْا، يَدْعُونَ، اُدْعُوا',
            en: 'He called / He calls - They called, They call, Call!',
          },
          {
            emoji: '😢',
            ar: 'بَكَى / يَبْكِي - بَكَوْا، يَبْكُونَ، اِبْكُوا',
            en: 'He cried / He cries - They cried, They cry, Cry!',
          },
          {
            emoji: '🤷',
            ar: 'نَسِيَ / يَنْسَى - نَسُوا، يَنْسَوْنَ، اِنْسَوْا',
            en: 'He forgot / He forgets - They forgot, They forget, Forget!',
          },
          {
            emoji: '🏃',
            ar: 'سَعَى / يَسْعَى - سَعَوْا، يَسْعَوْنَ، اِسْعَوْا',
            en: 'He strove / He strives - They strove, They strive, Strive!',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Reading: Inviting to Paradise',
      titleAr: 'القِرَاءَةُ: الدَّعْوَةُ إِلَى الْجَنَّةِ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Invitation and warning',
            lines: [
              'الْمُسْلِمُونَ يَدْعُونَ النَّاسَ إِلَى الْجَنَّةِ وَالْمُشْرِكُونَ يَدْعُونَهُمْ إِلَى النَّارِ.',
              'لَا تُشْرِكُوا بِاللَّهِ شَيْئًا وَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا.',
            ],
            translationEn:
              'Muslims invite people to Paradise, while the polytheists invite them to the Fire. Do not associate anything with Allah and do not call upon anyone along with Allah.',
          },
          {
            titleEn: 'Patience and knowledge',
            lines: [
              'قَالَ الْعَالِمُ: لَا تَبْكُوا، بَلِ اصْبِرُوا صَبْرًا جَمِيلًا وَادْعُوا اللَّهَ لِأَبِيكُمْ.',
              'قَالَ الْوَالِدُ: تَعَلَّمُوا الْعِلْمَ لَا لِتَكْسِبُوا ثَنَاءَ النَّاسِ.',
            ],
            translationEn:
              'The scholar said: do not cry, rather be patient and pray for your father. The father said: learn knowledge not to earn people’s praise.',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Questions and Answers',
      titleAr: 'السُّؤَالُ وَالجَوَابُ',
      payload: {
        instruction: 'Answer from the lesson text.',
        questions: [
          {
            emoji: '🤲',
            question_ar: 'عَلَى مَنْ يَتَوَكَّلُ الْمُسْلِمُونَ؟',
            question_en: 'Upon whom do Muslims rely?',
            correct_ar: 'عَلَى اللهِ',
            correct_en: 'Upon Allah',
            options_ar: ['عَلَى اللهِ', 'عَلَى النَّاسِ', 'عَلَى الدُّنْيَا'],
            questionType: 'hal',
          },
          {
            emoji: '🚫',
            question_ar: 'مَاذَا يَنْهَى الْحَدِيثُ عَنْهُ؟',
            question_en: 'What does the lesson prohibit?',
            correct_ar: 'الشِّرْكَ وَالدَّعْوَةَ مَعَ اللهِ',
            correct_en: 'Shirk and calling along with Allah',
            options_ar: ['الشِّرْكَ وَالدَّعْوَةَ مَعَ اللهِ', 'الْعِلْمَ', 'الصَّلَاةَ'],
            questionType: 'general',
          },
          {
            emoji: '😢',
            question_ar: 'مَاذَا طَلَبَ الْعَالِمُ مِنَ الْأَوْلَادِ؟',
            question_en: 'What did the scholar request from the boys?',
            correct_ar: 'أَنْ يَصْبِرُوا وَأَنْ يَدْعُوا لِأَبِيهِمْ',
            correct_en: 'To be patient and pray for their father',
            options_ar: [
              'أَنْ يَصْبِرُوا وَأَنْ يَدْعُوا لِأَبِيهِمْ',
              'أَنْ يَلْعَبُوا',
              'أَنْ يَصْرُخُوا',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

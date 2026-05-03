import type { LessonData } from '../../curriculum';

export const lesson02: LessonData = {
  darsNumber: 2,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Plural Defective Verbs',
      titleAr: 'الأَفْعَالُ النَّاقِصَةُ فِي الْجَمْعِ',
      titleBn: 'বহুবচনে নকিস ক্রিয়া',
      payload: {
        rules: [
          {
            label: 'Waw-root verbs',
            labelBn: 'ওয়াও-ধাতুর ক্রিয়া',
            arabic: 'دَعَا - يَدْعُو',
            romanized: 'daʿā - yadʿū',
            meaning: 'Masculine plurals drop the weak letter; feminine forms keep the pattern.',
            meaningBn: 'পুংবচনে দুর্বল অক্ষর বাদ যায়; স্ত্রীবচনে ধারা থাকে।',
            examples: [
              { ar: 'دَعَوْا / دَعَوْنَ', en: 'They called (m./f.)', bn: 'তারা ডাকল (পুং/স্ত্রী)' },
              { ar: 'لَنْ يَدْعُوا / لَنْ يَدْعُونَ', en: 'They will never call', bn: 'তারা কখনো ডাকবে না' },
            ],
          },
          {
            label: 'Ya-root verbs',
            labelBn: 'ইয়া-ধাতুর ক্রিয়া',
            arabic: 'بَكَى - يَبْكِي',
            romanized: 'bakā - yabkī',
            meaning: 'Masculine plurals drop the weak letter; feminine plural keeps the ya-pattern.',
            meaningBn: 'পুংবচনে দুর্বল অক্ষর বাদ যায়; স্ত্রীবচনে ইয়া-ধারা থাকে।',
            examples: [
              { ar: 'بَكَوْا / بَكَيْنَ', en: 'They cried (m./f.)', bn: 'তারা কাঁদল (পুং/স্ত্রী)' },
              { ar: 'لَا تَبْكُوا / لَا تَبْكِينَ', en: 'Do not cry', bn: 'কাঁদো না' },
            ],
          },
          {
            label: 'Alif-maqsur verbs',
            labelBn: 'আলিফ-মাকসুরা ক্রিয়া',
            arabic: 'نَسِيَ - يَنْسَى',
            romanized: 'nasiya - yansā',
            meaning: 'The masculine plural drops the final alif maqsurah; feminine plural returns to the ya-based pattern.',
            meaningBn: 'পুংবচনে শেষের আলিফ-মাকসুরা পড়ে যায়; স্ত্রীবচনে ইয়া-ধারা ফিরে আসে।',
            examples: [
              { ar: 'نَسُوا / نَسِينَ', en: 'They forgot (m./f.)', bn: 'তারা ভুলে গেল (পুং/স্ত্রী)' },
              { ar: 'لَنْ يَنْسَوْا / لَنْ يَنْسَيْنَ', en: 'They will never forget', bn: 'তারা কখনো ভুলবে না' },
            ],
          },
          {
            label: 'Fathah-middle verbs',
            labelBn: 'ফাতহা-মধ্যবর্তী ক্রিয়া',
            arabic: 'سَعَى - يَسْعَى',
            romanized: 'saʿā - yasʿā',
            meaning: 'The masculine plural drops the alif maqsurah; feminine plural returns to the ya-based spelling.',
            meaningBn: 'পুংবচনে আলিফ-মাকসুরা পড়ে যায়; স্ত্রীবচনে ইয়া-রূপ ফিরে আসে।',
            examples: [
              { ar: 'سَعَوْا / سَعَيْنَ', en: 'They strove (m./f.)', bn: 'তারা চেষ্টা করল (পুং/স্ত্রী)' },
              { ar: 'اِسْعَوْا / اِسْعَيْنَ', en: 'Strive!', bn: 'চেষ্টা করো!' },
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
      titleBn: 'শব্দভান্ডার: হেদায়াত ও মুসাফাহা',
      payload: {
        words: [
          { id: 1, ar: 'الْهِدَايَةُ', romanized: 'al-hidāyah', en: 'Guidance', bn: 'পথনির্দেশ', emoji: '🧭' },
          { id: 2, ar: 'الْخَشْيَةُ', romanized: 'al-khashyah', en: 'Fear', bn: 'ভয়', emoji: '😨' },
          { id: 3, ar: 'الِافْتِرَاءُ', romanized: 'al-iftirāʾ', en: 'Slander', bn: 'মিথ্যা অপবাদ', emoji: '🗣️' },
          { id: 4, ar: 'الْإِفْشَاءُ', romanized: 'al-ifsāʾ', en: 'Disclosure', bn: 'ফাঁস করা', emoji: '📢' },
          { id: 5, ar: 'الْمُصَافَحَةُ', romanized: 'al-muṣāfaḥah', en: 'Handshake', bn: 'মুসাফাহা', emoji: '🤝' },
          { id: 6, ar: 'طَازَجٌ', romanized: 'ṭāzaj', en: 'Fresh', bn: 'টাটকা', emoji: '🥛' },
        ],
      },
    },
    {
      id: '3',
      type: 'verb_table',
      titleEn: 'Verb Chains: Defective Verbs',
      titleAr: 'سِلْسِلَةُ الأَفْعَالِ النَّاقِصَةُ',
      titleBn: 'নকিস ক্রিয়ার ধারা',
      payload: {
        sourceText: `
دَعَا / يَدْعُو — دَعَوْا، يَدْعُونَ، اُدْعُوا
بَكَى / يَبْكِي — بَكَوْا، يَبْكُونَ، اِبْكُوا
نَسِيَ / يَنْسَى — نَسُوا، يَنْسَوْنَ، اِنْسَوْا
سَعَى / يَسْعَى — سَعَوْا، يَسْعَوْنَ، اِسْعَوْا
`.trim(),
      },
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Reading: Inviting to Paradise',
      titleAr: 'القِرَاءَةُ: الدَّعْوَةُ إِلَى الْجَنَّةِ',
      titleBn: 'পাঠ: জান্নাতের দিকে আহ্বান',
      payload: {
        paragraphs: [
          {
            titleEn: 'Invitation and warning',
            titleBn: 'আহ্বান ও সতর্কতা',
            lines: [
              'الْمُسْلِمُونَ يَدْعُونَ النَّاسَ إِلَى الْجَنَّةِ وَالْمُشْرِكُونَ يَدْعُونَهُمْ إِلَى النَّارِ.',
              'لَا تُشْرِكُوا بِاللَّهِ شَيْئًا وَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا.',
            ],
            translationEn: 'Muslims invite people to Paradise, while the polytheists invite them to the Fire. Do not associate anything with Allah and do not call upon anyone along with Allah.',
            translationBn: 'মুসলমানরা মানুষকে জান্নাতের দিকে ডাকে, আর মুশরিকরা তাদের আগুনের দিকে ডাকে। আল্লাহর সাথে কোনো কিছু শিরক করো না এবং আল্লাহর সাথে কাউকে ডাকো না।',
          },
          {
            titleEn: 'Patience and knowledge',
            titleBn: 'ধৈর্য ও জ্ঞান',
            lines: [
              'قَالَ الْعَالِمُ: لَا تَبْكُوا، بَلِ اصْبِرُوا صَبْرًا جَمِيلًا وَادْعُوا اللَّهَ لِأَبِيكُمْ.',
              'قَالَ الْوَالِدُ: تَعَلَّمُوا الْعِلْمَ لَا لِتَكْسِبُوا ثَنَاءَ النَّاسِ.',
            ],
            translationEn: 'The scholar said: do not cry, rather be patient and pray for your father. The father said: learn knowledge not to earn people’s praise.',
            translationBn: 'আলেম বললেন: কেঁদো না, বরং ধৈর্য ধরো এবং তোমাদের বাবার জন্য দোয়া করো। পিতা বললেন: মানুষের প্রশংসার জন্য নয়, জ্ঞান শেখো।',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Questions and Answers',
      titleAr: 'السُّؤَالُ وَالجَوَابُ',
      titleBn: 'প্রশ্ন ও উত্তর',
      payload: {
        instruction: 'Answer from the lesson text.',
        instructionBn: 'পাঠ্য থেকে উত্তর দাও।',
        questions: [
          {
            emoji: '🤲',
            question_ar: 'عَلَى مَنْ يَتَوَكَّلُ الْمُسْلِمُونَ؟',
            question_en: 'Upon whom do Muslims rely?',
            question_bn: 'মুসলমানরা কার ওপর ভরসা করে?',
            correct_ar: 'عَلَى اللهِ',
            correct_en: 'Upon Allah',
            correct_bn: 'আল্লাহর ওপর',
            options_ar: ['عَلَى اللهِ', 'عَلَى النَّاسِ', 'عَلَى الدُّنْيَا'],
            questionType: 'hal',
          },
          {
            emoji: '🚫',
            question_ar: 'مَاذَا يَنْهَى الْحَدِيثُ عَنْهُ؟',
            question_en: 'What does the lesson prohibit?',
            question_bn: 'পাঠটি কী থেকে নিষেধ করে?',
            correct_ar: 'الشِّرْكَ وَالدَّعْوَةَ مَعَ اللهِ',
            correct_en: 'Shirk and calling along with Allah',
            correct_bn: 'শিরক ও আল্লাহর সাথে কাউকে ডাকাকে',
            options_ar: ['الشِّرْكَ', 'الْعِلْمَ', 'الصَّلَاةَ'],
            questionType: 'general',
          },
          {
            emoji: '😢',
            question_ar: 'مَاذَا طَلَبَ الْعَالِمُ مِنَ الْأَوْلَادِ؟',
            question_en: 'What did the scholar request from the boys?',
            question_bn: 'আলেম ছেলেদের কী করতে বললেন?',
            correct_ar: 'أَنْ يَصْبِرُوا وَأَنْ يَدْعُوا لِأَبِيهِمْ',
            correct_en: 'To be patient and pray for their father',
            correct_bn: 'ধৈর্য ধরতে এবং তাদের বাবার জন্য দোয়া করতে',
            options_ar: ['أَنْ يَصْبِرُوا', 'أَنْ يَلْعَبُوا', 'أَنْ يَصْرُخُوا'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
  darsNumber: 1,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Beginning, Search, Preservation',
      titleAr: 'الْمُفْرَدَاتُ: الْبَدْءُ وَالْبَحْثُ وَالْمُحَافَظَةُ',
      titleBn: 'শব্দভান্ডার: শুরু, অনুসন্ধান, সংরক্ষণ',
      payload: {
        words: [
          { id: 1, ar: 'الْبَدْأُ', romanized: 'al-badʾu', en: 'To start / to begin', bn: 'শুরু করা', emoji: '▶️' },
          { id: 2, ar: 'الْهُرُوبُ', romanized: 'al-hurūbu', en: 'To flee / to escape', bn: 'পালানো', emoji: '🏃' },
          { id: 3, ar: 'الشُّعُورُ', romanized: 'ash-shuʿūru', en: 'To feel', bn: 'অনুভব করা', emoji: '🫀' },
          { id: 4, ar: 'الْبَحْثُ', romanized: 'al-baḥthu', en: 'To search (for)', bn: 'খোঁজা', emoji: '🔎' },
          { id: 5, ar: 'الْإِدْرَاكُ', romanized: 'al-idrāku', en: 'To realize', bn: 'বুঝে ওঠা', emoji: '💡' },
          { id: 6, ar: 'الْمُحَافَظَةُ', romanized: 'al-muḥāfaẓah', en: 'To preserve', bn: 'সংরক্ষণ', emoji: '🛡️' },
          { id: 7, ar: 'الِاعْتِرَافُ', romanized: 'al-iʿtirāf', en: 'To confess', bn: 'স্বীকার করা', emoji: '🙋' },
          { id: 8, ar: 'التَّعَجُّبُ', romanized: 'at-taʿajjub', en: 'To be amazed', bn: 'আশ্চর্য হওয়া', emoji: '😮' },
        ],
      },
    },
    {
      id: '2',
      type: 'verb_table',
      titleEn: 'Verb Chains and Negative Forms',
      titleAr: 'سِلْسِلَةُ الأَفْعَالِ وَالصُّوَرُ السَّلْبِيَّةُ',
      titleBn: 'ক্রিয়ার ধারা ও নেতিবাচক রূপ',
      payload: {
        sourceText: `
Past/Present/Imperative chains from the lesson:
بَدَأُوا ... بَحَثُوا ... هَرَبُوا ... شَعَرُوا ... فَقَدُوا ... سَخِرُوا ... أَغْلَقُوا ... حَرَّكُوا ... اِعْتَرَفُوا ... اِسْتَقَامُوا

Negative future:
لَنْ يَبْدَءُوا ... لَنْ يَبْحَثُوا ... لَنْ يَهْرُبُوا ... لَنْ يَشْعُرُوا ... لَنْ يَفْقِدُوا ... لَنْ يَسْخَرُوا ... لَنْ يُغْلِقُوا

Negative past:
لَمْ يَبْدَءُوا ... لَمْ يَبْحَثُوا ... لَمْ يَهْرُبُوا ... لَمْ يَشْعُرُوا ... لَمْ يَفْقِدُوا ... لَمْ يَسْخَرُوا ... لَمْ يُغْلِقُوا
`.trim(),
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading: Reliance, Adhan, and Study',
      titleAr: 'القِرَاءَةُ: التَّوَكُّلُ وَالأَذَانُ وَالْعِلْمُ',
      titleBn: 'পাঠ: ভরসা, আযান ও জ্ঞান',
      payload: {
        paragraphs: [
          {
            titleEn: 'Reliance on Allah',
            titleBn: 'আল্লাহর ওপর ভরসা',
            lines: [
              'الْمُسْلِمُونَ يَتَوَكَّلُونَ عَلَى اللهِ، وَيَبْدَءُونَ أَعْمَالَهُمْ بِاسْمِ اللهِ.',
              'أَمَرَ اللهُ الْمُسْلِمِينَ أَنْ يَتَوَكَّلُوا عَلَى اللهِ.',
            ],
            translationEn: 'Muslims rely on Allah and begin their actions with the name of Allah. Allah commanded the Muslims to rely on Allah.',
            translationBn: 'মুসলমানরা আল্লাহর ওপর ভরসা করে এবং আল্লাহর নামে কাজ শুরু করে। আল্লাহ মুসলমানদের আল্লাহর ওপর ভরসা করতে আদেশ করেছেন।',
          },
          {
            titleEn: 'The adhan',
            titleBn: 'আযান',
            lines: [
              'بَعْدَ الأَذَانِ تَرَكَ النَّاسُ الْبَيْعَ وَأَغْلَقُوا حَوَانِيتَهُمْ وَأَسْرَعُوا إِلَى الْمَسْجِدِ.',
              'وَتَأَخَّرَ بَعْضُ النَّاسِ فَمَا أَدْرَكُوا إِلَّا رَكْعَةً أَوْ رَكْعَتَيْنِ.',
            ],
            translationEn: 'After the adhan, people left selling, closed their shops, and hurried to the mosque. Some were late and caught only one or two rakʿahs.',
            translationBn: 'আযানের পর মানুষ কেনাবেচা ছেড়ে দিল, দোকান বন্ধ করল এবং মসজিদে ছুটে গেল। কিছু লোক দেরি করেছিল, তাই তারা এক বা দুই রাকআতই পেল।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أَسْئِلَةُ الفَهْم',
      titleBn: 'বোধগম্যতা প্রশ্ন',
      payload: {
        instruction: 'Answer from the reading.',
        instructionBn: 'পাঠ থেকে উত্তর দাও।',
        questions: [
          {
            emoji: '🤲',
            question_ar: 'عَلَى مَنْ يَتَوَكَّلُ الْمُسْلِمُونَ؟',
            question_en: 'Upon whom do Muslims rely?',
            question_bn: 'মুসলমানরা কার ওপর ভরসা করে?',
            correct_ar: 'عَلَى اللهِ',
            correct_en: 'Upon Allah',
            correct_bn: 'আল্লাহর ওপর',
            options_ar: ['عَلَى اللهِ', 'عَلَى النَّاسِ', 'عَلَى الْأَمْوَالِ'],
            questionType: 'hal',
          },
          {
            emoji: '🚪',
            question_ar: 'مَاذَا فَعَلَ النَّاسُ بَعْدَ الأَذَانِ؟',
            question_en: 'What did people do after the adhan?',
            question_bn: 'আযানের পর মানুষ কী করল?',
            correct_ar: 'تَرَكُوا الْبَيْعَ وَأَغْلَقُوا حَوَانِيتَهُمْ وَأَسْرَعُوا إِلَى الْمَسْجِدِ',
            correct_en: 'They left selling, closed their shops, and hurried to the mosque',
            correct_bn: 'তারা কেনাবেচা ছেড়ে দিয়ে, দোকান বন্ধ করে মসজিদে ছুটে গেল',
            options_ar: ['تَرَكُوا الْبَيْعَ', 'نَامُوا', 'لَعِبُوا'],
            questionType: 'general',
          },
          {
            emoji: '🧍',
            question_ar: 'هَلْ يَسْتَطِيعُ النَّاسُ أَنْ يَهْرُبُوا مِنَ الْمَوْتِ؟',
            question_en: 'Can people escape from death?',
            question_bn: 'মানুষ কি মৃত্যু থেকে পালাতে পারে?',
            correct_ar: 'لَا، لَنْ يَهْرُبُوا مِنَ الْمَوْتِ',
            correct_en: 'No, they will not escape death',
            correct_bn: 'না, তারা মৃত্যু থেকে পালাতে পারবে না',
            options_ar: ['نَعَمْ', 'لَا', 'أَحْيَانًا'],
            questionType: 'hal',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'application',
      titleEn: 'Application: Lesson Phrases',
      titleAr: 'التَّطْبِيقُ: عِبَارَاتُ الدَّرْسِ',
      titleBn: 'প্রয়োগ: পাঠের বাক্য',
      payload: {
        instruction: 'Read these core phrases again.',
        instructionBn: 'এই মূল বাক্যগুলো আবার পড়ো।',
        text: 'قَالَ الْوَالِدُ: تَعَلَّمُوا الْعِلْمَ لَا لِتَكْسِبُوا ثَنَاءَ النَّاسِ.\nقَالَ الْعَالِمُ: عَلِّمُوا أَوْلَادَكُمْ أُمُورَ دِينِهِمْ.',
      },
    },
  ],
};

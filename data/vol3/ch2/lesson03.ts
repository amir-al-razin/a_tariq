import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
  darsNumber: 3,
  chunks: [
    {
      id: '1',
      type: 'verb_table',
      titleEn: 'Verb Chains: L- and Plural Forms',
      titleAr: 'سِلْسِلَةُ الأَفْعَالِ',
      titleBn: 'ক্রিয়া-ধারা',
      payload: {
        sourceText: `
أَلْقَوْا - أَلْقَيْنَ - أَلْقَيْتُمْ - أَلْقَيْتُنَّ - أَلْقَيْنَا
يُلْقُونَ - يُلْقِينَ - تُلْقُونَ - تُلْقِينَ - نُلْقِي
أَلْقُوا - أَلْقِينَ - لَا تُلْقُوا - لَا تُلْقِينَ

صَلَّوْا - صَلَّيْنَ - صَلَّيْتُمْ - صَلَّيْتُنَّ - صَلَّيْنَا
يُصَلُّونَ - يُصَلِّينَ - تُصَلُّونَ - تُصَلِّينَ - نُصَلِّي
صَلُّوا - صَلِّينَ - لَا تُصَلُّوا - لَا تُصَلِّينَ

اِشْتَرَوْا - اِشْتَرَيْنَ - اِشْتَرَيْتُمْ - اِشْتَرَيْتُنَّ - اِشْتَرَيْنَا
يَشْتَرُونَ - يَشْتَرِينَ - تَشْتَرُونَ - تَشْتَرِينَ - نَشْتَرِي
اِشْتَرُوا - اِشْتَرِينَ - لَا تَشْتَرُوا - لَا تَشْتَرِينَ
`.trim(),
      },
    },
    {
      id: '2',
      type: 'paragraph',
      titleEn: 'Reading: Give, Hide, and Pray',
      titleAr: 'القِرَاءَةُ: أَعْطُوا وَأَخْفُوا وَصَلُّوا',
      titleBn: 'পাঠ: দান, গোপন ও সালাত',
      payload: {
        paragraphs: [
          {
            titleEn: 'Giving and hiding',
            titleBn: 'দান ও গোপন',
            lines: [
              'أَصْدِقَاءُ رَاشِدٍ أَعْطَوْا رَاشِدًا كِتَابًا قَيِّمًا وَقَالُوا: قَدْ أَعْطَيْنَاكَ هَذَا الكِتَابَ.',
              'العُقَلَاءُ يُخْفُونَ عَنِ النَّاسِ سِرَّهُمْ، وَالسُّفَهَاءُ يُفْشُونَ سِرَّهُمْ لِكُلِّ أَحَدٍ.',
            ],
            translationEn:
              'Rashid’s friends gave him a valuable book. The wise hide their secrets from people, while the foolish disclose their secrets to everyone.',
            translationBn:
              'রাশিদের বন্ধুরা তাকে একটি মূল্যবান বই দিল। বুদ্ধিমানরা তাদের রহস্য মানুষ থেকে গোপন রাখে, কিন্তু নির্বোধরা সবার কাছে তা ফাঁস করে।',
          },
          {
            titleEn: 'Prayer and the congregation',
            titleBn: 'সালাত ও জামাআত',
            lines: [
              'المُعَلِّمُونَ وَتَلَامِيذُهُمْ صَلَّوْا صَلَاةَ الظُّهْرِ فِي مَسْجِدِ المَدْرَسَةِ.',
              'قَالَ مَحْمُودٌ لِأَوْلَادِهِ: اذْهَبُوا إِلَى مَسْجِدِ الحَيِّ وَصَلُّوا العَصْرَ مَعَ الجَمَاعَةِ.',
            ],
            translationEn:
              'The teachers and their students prayed Dhuhr in the school mosque. Mahmud told his children: go to the neighborhood mosque and pray Asr with the congregation.',
            translationBn:
              'শিক্ষকরা ও তাদের ছাত্ররা স্কুলের মসজিদে জোহর সালাত পড়ল। মাহমুদ তার সন্তানদের বললেন: মহল্লার মসজিদে যাও এবং জামাআতের সাথে আসরের সালাত পড়ো।',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'grammar_rule',
      titleEn: 'Question Word MANN',
      titleAr: 'كَلِمَةُ مَنْ',
      titleBn: 'মَنْ প্রশ্নবাচক শব্দ',
      payload: {
        rules: [
          {
            label: 'Singular question form',
            labelBn: 'একবচন প্রশ্নরূপ',
            arabic: 'مَنْ صَلَّى فِي الْمَسْجِدِ؟',
            romanized: 'man ṣallā fī al-masjidi?',
            meaning: '“Who prayed in the mosque?” can take singular masculine verb form.',
            meaningBn: '“কে মসজিদে সালাত পড়েছে?”—এখানে একবচন পুংলিঙ্গ ক্রিয়া ব্যবহার করা যায়।',
            examples: [
              {
                ar: 'مَنْ صَلَّى فِي الْمَسْجِدِ؟',
                en: 'Who prayed in the mosque?',
                bn: 'কে মসজিদে সালাত পড়েছে?',
              },
            ],
          },
          {
            label: 'Plural or feminine context',
            labelBn: 'বহুবচন বা স্ত্রীলিঙ্গ প্রসঙ্গ',
            arabic: 'مَنْ صَلَّوْا فِي الْمَسْجِدِ؟ / مَنْ صَلَّيْنَ فِي الْبَيْتِ؟',
            romanized: 'man ṣallaw ... / man ṣallayna ...',
            meaning:
              'When the questioner knows the group is plural or feminine, matching forms may also be used.',
            meaningBn: 'প্রশ্নকারী দলটি বহুবচন বা স্ত্রীলিঙ্গ জানলে, মিলিয়ে রূপও ব্যবহার করা যায়।',
            examples: [
              {
                ar: 'مَنْ صَلَّوْا فِي الْمَسْجِدِ؟',
                en: 'Who (plural) prayed in the mosque?',
                bn: 'কারা মসজিদে সালাত পড়েছে?',
              },
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
      titleBn: 'অনুশীলন প্রশ্ন',
      payload: {
        instruction: 'Answer from the lesson text and conjugation patterns.',
        instructionBn: 'পাঠের পাঠ্য ও ক্রিয়ার ধারা থেকে উত্তর দাও।',
        questions: [
          {
            emoji: '📚',
            question_ar: 'مَاذَا أَعْطَى أَصْدِقَاءُ رَاشِدٍ رَاشِدًا؟',
            question_en: 'What did Rashid’s friends give Rashid?',
            question_bn: 'রাশিদের বন্ধুরা রাশিদকে কী দিল?',
            correct_ar: 'كِتَابًا قَيِّمًا',
            correct_en: 'A valuable book',
            correct_bn: 'একটি মূল্যবান বই',
            options_ar: ['كِتَابًا قَيِّمًا', 'ثَوْبًا', 'قَلَمًا'],
            questionType: 'general',
          },
          {
            emoji: '🚫',
            question_ar: 'مَنْ يُفْشِي سِرَّهُ؟',
            question_en: 'Who discloses his secret?',
            question_bn: 'কে তার রহস্য প্রকাশ করে?',
            correct_ar: 'السُّفَهَاءُ',
            correct_en: 'The foolish',
            correct_bn: 'নির্বোধরা',
            options_ar: ['العُقَلَاءُ', 'السُّفَهَاءُ', 'الأَطْفَالُ'],
            questionType: 'hal',
          },
          {
            emoji: '🕌',
            question_ar: 'أَيْنَ صَلَّى المُعَلِّمُونَ وَتَلَامِيذُهُمْ صَلَاةَ الظُّهْرِ؟',
            question_en: 'Where did the teachers and their students pray Dhuhr?',
            question_bn: 'শিক্ষকরা ও তাদের ছাত্ররা জোহর কোথায় পড়ল?',
            correct_ar: 'فِي مَسْجِدِ المَدْرَسَةِ',
            correct_en: 'In the school mosque',
            correct_bn: 'স্কুলের মসজিদে',
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
      titleBn: 'লَمْ ও নেতিবাচক অতীত',
      payload: {
        rules: [
          {
            label: 'Lam + present verb',
            labelBn: 'লম + বর্তমান ক্রিয়া',
            arabic: 'لَمْ يَذْهَبْ / لَمْ يَذْهَبُوا',
            romanized: 'lam yadhhab / lam yadhhabū',
            meaning:
              'Lam makes the present tense jussive and gives the meaning of a negative past.',
            meaningBn: 'লম বর্তমান ক্রিয়াকে জযম করে এবং নেতিবাচক অতীত অর্থ দেয়।',
            examples: [{ ar: 'لَمْ يَذْهَبُوا', en: 'They did not go', bn: 'তারা যায়নি' }],
          },
          {
            label: 'Complete contrast',
            labelBn: 'সম্পূর্ণ বিপরীত',
            arabic: 'مَا ذَهَبَ / لَمْ يَذْهَبْ',
            romanized: 'mā dhahaba / lam yadhhab',
            meaning: 'Both forms are used to express negation in the past.',
            meaningBn: 'উভয় রূপই অতীতে নেতিবাচকতা প্রকাশ করে।',
            examples: [
              {
                ar: 'مَا رَجَعُوا / لَمْ يَرْجِعُوا',
                en: 'They did not return',
                bn: 'তারা ফিরে আসেনি',
              },
            ],
          },
        ],
      },
    },
  ],
};

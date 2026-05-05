import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
  darsNumber: 3,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Reliance and Attainment',
      titleAr: 'الْمُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার: নির্ভরতা ও অর্জন',
      payload: {
        words: [
          {
            id: 1,
            ar: 'اَلِاعْتِمَادُ عَلَى',
            romanized: 'al-iʿtimādu ʿalā',
            en: 'To rely on',
            bn: 'নির্ভর করা',
            emoji: '🤝',
          },
          {
            id: 2,
            ar: 'اَلْفَوْزُ (بِـ)',
            romanized: 'al-fawzu (bi-)',
            en: 'To win / succeed',
            bn: 'বিজয়ী হওয়া / সফল হওয়া',
            emoji: '🏆',
          },
          {
            id: 3,
            ar: 'غَرَضٌ',
            romanized: 'gharaḍ',
            en: 'Purpose / goal',
            bn: 'উদ্দেশ্য / লক্ষ্য',
            emoji: '🎯',
          },
          { id: 4, ar: 'نَالَ', romanized: 'nāla', en: 'To attain', bn: 'অর্জন করা', emoji: '🏅' },
          {
            id: 5,
            ar: 'جَائِزَةٌ',
            romanized: "jā'izah",
            en: 'Prize / award',
            bn: 'পুরস্কার',
            emoji: '🎁',
          },
          {
            id: 6,
            ar: 'قَيِّمَةٌ',
            romanized: 'qayyimah',
            en: 'Valuable',
            bn: 'মূল্যবান',
            emoji: '💎',
          },
          {
            id: 7,
            ar: 'ضَيَّعَ',
            romanized: 'ḍayyaʿa',
            en: 'To waste',
            bn: 'নষ্ট করা',
            emoji: '🗑️',
          },
          {
            id: 8,
            ar: 'لَهْوٌ',
            romanized: 'lahw',
            en: 'Amusement / distraction',
            bn: 'খেলাধুলা / বিনোদন',
            emoji: '🎮',
          },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Relative Pronouns',
      titleAr: 'الْأَسْمَاءُ الْمَوْصُولَةُ',
      titleBn: 'সম্বন্ধবাচক সর্বনাম',
      payload: {
        rules: [
          {
            label: 'Specific Relative Pronouns',
            labelBn: 'নির্দিষ্ট সম্বন্ধবাচক সর্বনাম',
            arabic: 'الَّذِي / الَّتِي / الَّذِينَ / اللَّاتِي',
            romanized: 'alladhī / allatī / alladhīna / allātī',
            meaning:
              'الَّذِي (masc. sing.), الَّتِي (fem. sing. & non-human pl.), الَّذِينَ (masc. pl. rational), اللَّاتِي (fem. pl. rational).',
            meaningBn:
              'الَّذِي (পুংলিঙ্গ একবচন), الَّتِي (স্ত্রীলিঙ্গ একবচন ও মানব-ভিন্ন বহুবচন), الَّذِينَ (পুংলিঙ্গ বহুবচন), اللَّاتِي (স্ত্রীলিঙ্গ বহুবচন)।',
            examples: [
              {
                ar: 'اَلْكِتَابُ الَّذِي عِنْدَ رَاشِدٍ',
                en: 'The book which is with Rashid',
                bn: 'যে বইটি রাশিদের কাছে আছে',
              },
              {
                ar: 'اَلتَّلَامِيذُ الَّذِينَ يَدْرُسُونَ الْفِقْهَ',
                en: 'The students who study Fiqh',
                bn: 'যে ছাত্ররা ফিকহ পড়ে',
              },
            ],
          },
          {
            label: 'Universal Relative Pronouns',
            labelBn: 'সার্বজনীন সম্বন্ধবাচক সর্বনাম',
            arabic: 'مَنْ / مَا',
            romanized: 'man / mā',
            meaning:
              'مَنْ (Whoever / Who) is used for humans regardless of gender/number. مَا (Whatever / That which) is used for non-humans.',
            meaningBn:
              'مَنْ (যে কেউ / যে) মানুষের ক্ষেত্রে লিঙ্গ/বচন নির্বিশেষে ব্যবহৃত হয়। مَا (যাই হোক / যা) মানুষের বাইরের ক্ষেত্রে ব্যবহৃত হয়।',
            examples: [
              {
                ar: 'مَنْ يَعْمَلُ بِعِلْمِهِ',
                en: 'Whoever acts upon his knowledge',
                bn: 'যে তার জ্ঞান অনুযায়ী আমল করে',
              },
              { ar: 'مَا يَنْفَعُكَ', en: 'What benefits you', bn: 'যা তোমার উপকারে আসে' },
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
      titleBn: 'পঠন অংশ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Descriptions Using Relative Pronouns',
            titleBn: 'সম্বন্ধবাচক সর্বনাম ব্যবহার করে বর্ণনা',
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
            translationBn:
              'রাশিদের কাছে যে বইটি আছে তা নতুন, আর খালিদের কাছে যে বইটি আছে তা পুরানো। ফাতিমা সেই কাপড়টি ধোয় যা ময়লা হয়েছে / সেই কাপড়গুলো ধোয় যা ময়লা হয়েছে। আমি যে কলমটি কিনেছি তা ভালো, আর আমার বন্ধুরা যে কলমগুলো কিনেছে তা দামি। যে ছাত্র ফিকহ পড়ে সে মেধাবী; যে ছাত্ররা ফিকহ পড়ে তারা মেধাবী। যে মেয়েটি তার কাপড় ধুয়েছে সে পরিচ্ছন্নতা ভালোবাসে। যে মেয়েরা আরবি ভাষা পড়ে তারা কুরআন ও সুন্নাহ বুঝতে ভালোবাসে।',
          },
          {
            titleEn: 'Whoever and Whatever (من و ما)',
            titleBn: 'যে কেউ এবং যাই হোক (من ও ما)',
            lines: [
              'مَنْ يَعْمَلُ بِعِلْمِهِ خَيْرٌ مِمَّنْ لَا يَعْمَلُ بِعِلْمِهِ.',
              'لَا خَيْرَ فِيمَنْ يَعِظُ النَّاسَ وَيَنْسَى نَفْسَهُ.',
              'لَا تَعْتَمِدْ عَلَى مَنْ يَكْذِبُ.',
              'خُذْ مِنْ هٰذِهِ الْأَشْيَاءِ مَا يَنْفَعُكَ وَاتْرُكْ مَا لَا يَنْفَعُكَ.',
              'سَيَفْنَى مَا أَبْقَيْتَهُ لِنَفْسِكَ، وَيَبْقَى مَا أَنْفَقْتَهُ فِي سَبِيلِ اللَّهِ.',
            ],
            translationEn:
              'Whoever acts upon his knowledge is better than whoever does not act upon his knowledge. There is no good in whoever preaches to people and forgets himself. Do not rely on whoever lies. Take from these things what benefits you and leave what does not benefit you. What you kept for yourself will perish, and what you spent in the path of Allah will remain.',
            translationBn:
              'যে ব্যক্তি তার জ্ঞান অনুযায়ী আমল করে সে তার চেয়ে উত্তম যে তার জ্ঞান অনুযায়ী আমল করে না। যে ব্যক্তি মানুষকে উপদেশ দেয় আর নিজেকে ভুলে যায় তার মধ্যে কোনো কল্যাণ নেই। যে মিথ্যা বলে তার ওপর নির্ভর করো না। এই জিনিসগুলোর মধ্য থেকে যা তোমার উপকারে আসে তা নাও আর যা উপকারে আসে না তা ছেড়ে দাও। যা তুমি নিজের জন্য রেখেছ তা ধ্বংস হয়ে যাবে, আর যা তুমি আল্লাহর পথে ব্যয় করেছ তা থেকে যাবে।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'assessment',
      titleEn: 'Exercise: Use مَنْ Instead',
      titleAr: 'التَّمْرِينُ : اِسْتَعْمِلْ "مَنْ"',
      titleBn: 'অনুশীলনী: مَنْ ব্যবহার করুন',
      payload: {
        instruction:
          'Use مَنْ in place of the specific relative pronouns (الذي, الذين, التي, اللاتي).',
        instructionBn:
          'নির্দিষ্ট সম্বন্ধবাচক সর্বনামগুলোর (الذي, الذين, التي, اللاتي) পরিবর্তে مَنْ ব্যবহার করুন।',
        questions: [
          {
            emoji: '🔄',
            question_ar: 'اَلَّذِي يَجْمَعُ الْعِلْمَ خَيْرٌ مِنَ الَّذِي يَجْمَعُ الْمَالَ.',
            question_en: 'Change using مَنْ',
            question_bn: 'مَنْ ব্যবহার করে পরিবর্তন করুন',
            correct_ar: 'مَنْ يَجْمَعُ الْعِلْمَ خَيْرٌ مِمَّنْ يَجْمَعُ الْمَالَ.',
            correct_en: 'Whoever gathers knowledge is better than whoever gathers wealth.',
            correct_bn: 'যে জ্ঞান অর্জন করে সে তার চেয়ে উত্তম যে সম্পদ অর্জন করে।',
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
            question_bn: 'مَنْ ব্যবহার করে পরিবর্তন করুন',
            correct_ar: 'أُحِبُّ مَنْ يُجَاهِدُونَ فِي سَبِيلِ اللَّهِ.',
            correct_en: 'I love whoever strives in the path of Allah.',
            correct_bn: 'আমি তাকে ভালোবাসি যে আল্লাহর পথে সংগ্রাম করে।',
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
      titleBn: 'অনুশীলনী: পড়ুন ও অনুবাদ করুন',
      payload: {
        instruction: 'Read and translate the conditional statements.',
        instructionBn: 'শর্তযুক্ত বাক্যগুলো পড়ুন এবং অনুবাদ করুন।',
        questions: [
          {
            emoji: '📖',
            question_ar:
              'يُحِبُّ اللَّهُ الَّذِينَ يَأْكُلُونَ مِنْ كَسْبِهِمْ ، أَمَّا الَّذِينَ يَسْأَلُونَ النَّاسَ فَلَا يُحِبُّهُمُ اللَّهُ.',
            question_en: 'Translate this sentence.',
            question_bn: 'এই বাক্যটি অনুবাদ করুন।',
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

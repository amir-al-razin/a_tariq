import type { LessonData } from '../../curriculum';

export const lesson02: LessonData = {
  darsNumber: 2,
  chunks: [
    {
      id: '3-1-2-1',
      type: 'vocabulary',
      titleEn: 'Lesson 2 Vocabulary - Sides and Sensory Terms',
      titleAr: 'مُفْرَدَاتُ الدَّرْسِ الثَّانِي - الْجِهَاتُ وَ الْحَوَاسّ',
      payload: {
        words: [
          {
            id: 1,
            ar: 'شِمَالٌ',
            romanized: 'Shimāl',
            en: 'Left side, left hand',
            bn: 'বাম পক্ষ, বাম হাত',
            emoji: '👈'
          },
          {
            id: 2,
            ar: 'يَمِينٌ',
            romanized: 'Yamīn',
            en: 'Right side, right hand',
            bn: 'ডান পক্ষ, ডান হাত',
            emoji: '👉'
          },
          {
            id: 3,
            ar: 'نَوْمٌ',
            romanized: 'Nawm',
            en: 'Sleep',
            bn: 'ঘুম',
            emoji: '😴'
          },
          {
            id: 4,
            ar: 'ضَوْءٌ',
            romanized: 'Ḍawʾ',
            en: 'Light',
            bn: 'আলো',
            emoji: '💡'
          },
          {
            id: 5,
            ar: 'رَدِيءٌ',
            romanized: 'Radīʾ',
            en: 'Bad, inferior',
            bn: 'খারাপ, নিম্নমানের',
            emoji: '❌'
          },
          {
            id: 6,
            ar: 'وَرَقَةٌ',
            romanized: 'Waraqa',
            en: 'A leaf of paper (or leaf of a tree)',
            bn: 'কাগজের পাতা (বা গাছের পাতা)',
            emoji: '📄'
          }
        ]
      }
    },
    {
      id: '3-1-2-2',
      type: 'grammar_rule',
      titleEn: 'Grammar Rule 1 - Negating Past Tense',
      titleAr: 'القَاعِدَةُ النَّحْوِيَّةُ الأُولَى - نَفْيُ الْفِعْلِ الْمَاضِي',
      payload: {
        rules: [
          {
            label: 'Negating the Past Tense (فِعْل مَاضٍ)',
            labelBn: 'অতীত কালের ক্রিয়া নেতিবাচক করা',
            arabic: 'To negate a past tense verb, place the particle مَا before it.',
            romanized: 'Linafy al-fiʿl al-māḍī, ḍaʿ al-ḥarf mā qabla-hu',
            meaning: 'Place the particle مَا before the verb to negate it in the past tense',
            meaningBn: 'ক্রিয়ার আগে مَا কণ রাখুন এটি অতীত কালে নেতিবাচক করতে',
            examples: []
          }
        ]
      }
    },
    {
      id: '3-1-2-3',
      type: 'grammar_rule',
      titleEn: 'Grammar Rule 2 - Negating Present/Future Tense',
      titleAr: 'القَاعِدَةُ النَّحْوِيَّة الثَّانِيَة - نَفْيُ الْفِعْلِ الْمُضَارِع',
      payload: {
        rules: [
          {
            label: 'Negating the Present/Future Tense (فِعْل مُضَارِع)',
            labelBn: 'বর্তমান/ভবিষ্যত কালের ক্রিয়া নেতিবাচক করা',
            arabic: 'To negate a present/future tense verb, place the particle لا before it.',
            romanized: 'Linafy al-fiʿl al-muḍāriʿ, ḍaʿ al-ḥarf lā qabla-hu',
            meaning: 'Place the particle لا before the verb to negate it in the present or future tense',
            meaningBn: 'ক্রিয়ার আগে لا কণ রাখুন এটি বর্তমান বা ভবিষ্যতে নেতিবাচক করতে',
            examples: []
          }
        ]
      }
    },
    {
      id: '3-1-2-4',
      type: 'grammar_rule',
      titleEn: 'Grammar Rule 3 - Response Particles (حُرُوفُ الْجَوَاب)',
      titleAr: 'القَاعِدَةُ النَّحْوِيَة الثَّالِثَة - حُرُوفُ الْجَوَابِ',
      payload: {
        rules: [
          {
            label: 'Answering Affirmative vs Negative Questions',
            labelBn: 'ইতিবাচক বনাম নেতিবাচক প্রশ্নের উত্তর দেওয়া',
            arabic: 'Response particles differ based on whether the question is affirmative or negative.',
            romanized: 'Arwāb al-asilah al-ijābiyyah wal-salbiyyah mukhtalifun',
            meaning: 'For affirmative questions: نَعَمْ (Yes) or لا (No). For negative questions: بَلَى (Yes/Indeed, I did) or نَعَمْ (Yes, I did not).',
            meaningBn: 'ইতিবাচক প্রশ্নের জন্য: নিশ্চিত করতে نَعَمْ বা নেতিবাচক করতে لا। নেতিবাচক প্রশ্নের জন্য: নিশ্চিত করতে بَلَى বা নেতিবাচক প্রিমাইসে সম্মতি জানাতে نَعَمْ।',
            examples: []
          }
        ]
      }
    },
    {
      id: '3-1-2-5',
      type: 'verb_table',
      titleEn: 'Verb Table - Past Tense Negation',
      titleAr: 'جَدْوَلُ الأَفْعَالِ - النَّفْيُ فِي الْمَاضِي',
      payload: {
        verbTense: 'past',
        verbTable: [
          {
            root: 'خَرَجَ',
            meaning: 'He did not exit',
            he: 'مَا خَرَجَ',
            she: 'مَا خَرَجَتْ',
            youM: 'مَا خَرَجْتَ',
            youF: 'مَا خَرَجْتِ',
            i: 'مَا خَرَجْتُ'
          },
          {
            root: 'ذَهَبَ',
            meaning: 'He did not go',
            he: 'مَا ذَهَبَ',
            she: 'مَا ذَهَبَتْ',
            youM: 'مَا ذَهَبْتَ',
            youF: 'مَا ذَهَبْتِ',
            i: 'مَا ذَهَبْتُ'
          },
          {
            root: 'جَلَسَ',
            meaning: 'He did not sit',
            he: 'مَا جَلَسَ',
            she: 'مَا جَلَسَتْ',
            youM: 'مَا جَلَسْتَ',
            youF: 'مَا جَلَسْتِ',
            i: 'مَا جَلَسْتُ'
          },
          {
            root: 'قَرَأَ',
            meaning: 'He did not read',
            he: 'مَا قَرَأَ',
            she: 'مَا قَرَأَتْ',
            youM: 'مَا قَرَأْتَ',
            youF: 'مَا قَرَأْتِ',
            i: 'مَا قَرَأْتُ'
          },
          {
            root: 'كَتَبَ',
            meaning: 'He did not write',
            he: 'مَا كَتَبَ',
            she: 'مَا كَتَبَتْ',
            youM: 'مَا كَتَبْتَ',
            youF: 'مَا كَتَبْتِ',
            i: 'مَا كَتَبْتُ'
          },
          {
            root: 'رَجَعَ',
            meaning: 'He did not return',
            he: 'مَا رَجَعَ',
            she: 'مَا رَجَعَتْ',
            youM: 'مَا رَجَعْتَ',
            youF: 'مَا رَجَعْتِ',
            i: 'مَا رَجَعْتُ'
          }
        ],
        sourceText: 'Verb negation using مَا for past tense'
      }
    },
    {
      id: '3-1-2-6',
      type: 'verb_table',
      titleEn: 'Verb Table - Present Tense Negation',
      titleAr: 'جَدْوَلُ الأَفْعَالِ - النَّفْيُ فِي الْمُضَارِع',
      payload: {
        verbTense: 'present',
        verbTable: [
          {
            root: 'يَخْرُجُ',
            meaning: 'He does not exit',
            he: 'لا يَخْرُجُ',
            she: 'لا تَخْرُجُ',
            youM: 'لا تَخْرُجُ',
            youF: 'لا تَخْرُجِينَ',
            i: 'لا أَخْرُجُ'
          },
          {
            root: 'يَذْهَبُ',
            meaning: 'He does not go',
            he: 'لا يَذْهَبُ',
            she: 'لا تَذْهَبُ',
            youM: 'لا تَذْهَبُ',
            youF: 'لا تَذْهَبِينَ',
            i: 'لا أَذْهَبُ'
          },
          {
            root: 'يَجْلِسُ',
            meaning: 'He does not sit',
            he: 'لا يَجْلِسُ',
            she: 'لا تَجْلِسُ',
            youM: 'لا تَجْلِسُ',
            youF: 'لا تَجْلِسِينَ',
            i: 'لا أَجْلِسُ'
          },
          {
            root: 'يَقْرَأُ',
            meaning: 'He does not read',
            he: 'لا يَقْرَأُ',
            she: 'لا تَقْرَأُ',
            youM: 'لا تَقْرَأُ',
            youF: 'لا تَقْرَئِينَ',
            i: 'لا أَقْرَأُ'
          },
          {
            root: 'يَكْتُبُ',
            meaning: 'He does not write',
            he: 'لا يَكْتُبُ',
            she: 'لا تَكْتُبُ',
            youM: 'لا تَكْتُبُ',
            youF: 'لا تَكْتُبِينَ',
            i: 'لا أَكْتُبُ'
          },
          {
            root: 'يَرْجِعُ',
            meaning: 'He does not return',
            he: 'لا يَرْجِعُ',
            she: 'لا تَرْجِعُ',
            youM: 'لا تَرْجِعُ',
            youF: 'لا تَرْجِعِينَ',
            i: 'لا أَرْجِعُ'
          }
        ],
        sourceText: 'Verb negation using لا for present/future tense'
      }
    },
    {
      id: '3-1-2-7',
      type: 'paragraph',
      titleEn: 'Reading - Past Tense Negation Stories',
      titleAr: 'القِرَاءَةُ - قِصَصٌ بِالْمَاضِي الْمَنْفِيّ',
      payload: {
        paragraphs: [
          {
            title: 'قِصَصُ الْمَاضِي الْمَنْفِيّ (١)',
            titleEn: 'Past Tense Negation Stories (Part 1)',
            titleBn: 'অতীত কালের নেতিবাচক গল্প (পর্ব ১)',
            lines: [
              'ذَهَبَ شَاهِدٌ إِلَى الْمَدْرَسَةِ وَ مَا ذَهَبَ أَخُو شَاهِدٍ .',
              'مَا خَرَجَتْ سُعَادُ مِنْ غُرْفَتِهَا وَ مَا لَعِبَتْ فِي الْحَدِيقَةِ ، بَلْ قَرَأَتْ وَ كَتَبَتْ .',
              'مَا ذَهَبَتْ سُعَادُ إِلَى فِرَاشِهَا قَبْلَ الْعِشَاءِ بَلْ بَعْدَ الْعِشَاءِ .'
            ],
            translationEn: 'Shahid went to school and his brother did not go. Suad did not go out of her room and did not play in the garden, but read and wrote. Suad did not go to bed before dinner but after dinner.',
            translationBn: 'শাহিদ স্কুলে গেল এবং তার ভাই যায়নি। সুয়াদ তার ঘর থেকে বাইরে বের হয়নি এবং বাগানে খেলেনি, বরং পড়েছে এবং লিখেছে। সুয়াদ রাতের খাবারের আগে বিছানায় যায়নি কিন্তু পরে গেছে।'
          },
          {
            title: 'قِصَصُ الْمَاضِي الْمَنْفِيّ (٢)',
            titleEn: 'Past Tense Negation Stories (Part 2)',
            titleBn: 'অতীত কালের নেতিবাচক গল্প (পর্ব ২)',
            lines: [
              'أَيُّهَا التَّاجِرُ! أَنْتَ مَا خَرَجْتَ الْيَوْمَ مِنْ بَيْتِكَ وَ مَا ذَهَبْتَ إِلَى دُكَّانِكَ .',
              'رَجَعَ بِلالٌ مِنْ سُوقِ الْقَرْيَةِ وَ مَا رَجَعَ أَخُوهُ .',
              'مَا جَلَسَتْ أُخْتُ زَيْنَبَ تَحْتَ الْمِرْوَحَةِ بَلْ جَلَسَتْ أُمُّهَا .'
            ],
            translationEn: 'Oh merchant! You did not go out of your house today and did not go to your shop. Bilal returned from the village market and his brother did not return. Zaynab\'s sister did not sit under the fan but her mother sat.',
            translationBn: 'হে ব্যবসায়ী! তুমি আজ তোমার ঘর থেকে বের হওনি এবং তোমার দোকানে যাওনি। বিলাল গ্রাম বাজার থেকে ফিরে এসেছে এবং তার ভাই ফেরেনি। জয়নবের বোন পাখার নিচে বসেনি কিন্তু তার মা বসেছে।'
          },
          {
            title: 'قِصَصُ الْمَاضِي الْمَنْفِيّ (٣)',
            titleEn: 'Past Tense Negation Stories (Part 3)',
            titleBn: 'অতীত কালের নেতিবাচক গল্প (পর্ব ৩)',
            lines: [
              'مَا قَرَأْتُ الْيَوْمَ وَ مَا كَتَبْتُ بَلْ ذَهَبْتُ إِلَى بَيْتِ مَحْمُودٍ وَ لَعِبْتُ مَعَهُ .',
              'ذَهَبْتُ إِلَى الْمَسْجِدِ بَعْدَ الأَذَانِ - مَا خَرَجْتُ مِنَ الْمَسْجِدِ قَبْلَ الصَّلاةِ ، بَلْ خَرَجْتُ بَعْدَ الصَّلاةِ .'
            ],
            translationEn: 'Today I did not read and did not write but went to Mahmoud\'s house and played with him. I went to the mosque after the call to prayer - I did not leave the mosque before prayer, but left after prayer.',
            translationBn: 'আজ আমি পড়িনি এবং লিখিনি কিন্তু মাহমুদের বাড়িতে গেছি এবং তার সাথে খেলেছি। আমি আজানের পরে মসজিদে গেছি - নামাজের আগে মসজিদ থেকে বের হয়নি, কিন্তু পরে বের হয়েছি।'
          }
        ]
      }
    },
    {
      id: '3-1-2-8',
      type: 'paragraph',
      titleEn: 'Reading - Present Tense Negation',
      titleAr: 'القِرَاءَةُ - الْمُضَارِعُ الْمَنْفِيّ',
      payload: {
        paragraphs: [
          {
            title: 'أَمْثِلَةُ الْمُضَارِعِ الْمَنْفِيّ (١)',
            titleEn: 'Present Tense Negation Examples (Part 1)',
            titleBn: 'বর্তমান কালের নেতিবাচক উদাহরণ (পর্ব ১)',
            lines: [
              'لا يَكْتُبُ الإِنْسَانُ بِشِمَالِهِ ، بَلْ يَكْتُبُ بِيَمِينِهِ .',
              'لا يَرْجِعُ أَحَدٌ إِلَى الدُّنْيَا بَعْدَ الْمَوْتِ .',
              'لا يَخْرُجُ الإِيمَانُ مِنْ قَلْبِ الْمُؤْمِنِ - لا يَخْرُجُ الْمُؤْمِنُ مِنَ الْجَنَّةِ أَبَدًا وَ لا يَخْرُجُ الْمُشْرِكُ مِنَ النَّارِ أَبَدًا .'
            ],
            translationEn: 'A person does not write with his left hand, but writes with his right hand. No one returns to the world after death. Faith does not leave the heart of a believer - the believer does not come out of paradise ever, and the disbeliever does not come out of hell ever.',
            translationBn: 'একজন ব্যক্তি তার বাম হাতে লেখে না, বরং ডান হাতে লেখে। মৃত্যুর পরে কেউ পৃথিবীতে ফিরে আসে না। একজন বিশ্বাসীর হৃদয় থেকে বিশ্বাস বের হয় না - বিশ্বাসী স্বর্গ থেকে কখনও বেরিয়ে আসে না, এবং অবিশ্বাসী নরক থেকে কখনও বেরিয়ে আসে না।'
          },
          {
            title: 'أَمْثِلَةُ الْمُضَارِعِ الْمَنْفِيّ (٢)',
            titleEn: 'Present Tense Negation Examples (Part 2)',
            titleBn: 'বর্তমান কালের নেতিবাচক উদাহরণ (পর্ব ২)',
            lines: [
              'أَنَا لا أَقْرَأُ وَ لا أَكْتُبُ بَعْدَ الْعَصْرِ ، بَلْ أَذْهَبُ إِلَى الْحَدِيقَةِ وَ أَلْعَبُ هُنَاكَ .',
              'يَا زَيْنَبُ ! مَاذَا تَفْعَلِينَ فِي غُرْفَتِكِ بَعْدَ الْعَصْرِ ؟ لِمَاذَا لا تَخْرُجِينَ إِلَى الْحَدِيقَةِ وَ لا تَلْعَبِينَ ؟',
              'لا تَذْهَبُ زَيْنَبُ إِلَى الْفِرَاشِ لِلنَّوْمِ قَبْلَ الْعِشَاءِ ، بَلْ تَذْهَبُ بَعْدَ الْعِشَاءِ .'
            ],
            translationEn: 'I do not read and do not write after afternoon prayer, but go to the garden and play there. Oh Zaynab! What do you do in your room after afternoon prayer? Why do you not go out to the garden and not play? Zaynab does not go to bed for sleep before dinner, but goes after dinner.',
            translationBn: 'আমি বিকেলের নামাজের পরে পড়ি না এবং লিখি না, বরং বাগানে যাই এবং সেখানে খেলি। হে জয়নব! তুমি বিকেলের নামাজের পরে তোমার ঘরে কি করো? তুমি কেন বাগানে বেরিয়ে আসো না এবং খেলো না? জয়নব রাতের খাবারের আগে ঘুমের জন্য বিছানায় যায় না, কিন্তু রাতের খাবারের পরে যায়।'
          },
          {
            title: 'أَمْثِلَةُ الْمُضَارِعِ الْمَنْفِيّ (٣)',
            titleEn: 'Present Tense Negation Examples (Part 3)',
            titleBn: 'বর্তমান কালের নেতিবাচক উদাহরণ (পর্ব ৩)',
            lines: [
              'يَا خَالِدُ ! لِمَاذَا لا تَذْهَبُ الْيَوْمَ إِلَى الْمَدْرَسَةِ ؟ هَلْ أَنْتَ مَرِيضٌ؟',
              'لا تَرْجِعُ فَاطِمَةُ غَدًا مِنْ بَيْتِ الْقَرْيَةِ ، بَلْ تَرْجِعُ بَعْدَ غَدٍ .',
              'لا أَخْرُجُ الآنَ مِنَ الْمَسْجِدِ بَلْ أَخْرُجُ بَعْدَ الصَّلاةِ .',
              'أَخُو فَهِيمٍ وَلَدٌ طَيِّبٌ ، لا يَلْعَبُ فِي الطَّرِيقِ أَبَدًا .',
              'لا أَجْلِسُ عَلَى هَذَا الْكُرْسِيِّ ، بَلْ أَجْلِسُ عَلَى الْحَصِيرِ .'
            ],
            translationEn: 'Oh Khalid! Why do you not go to school today? Are you sick? Fatima does not return tomorrow from the village house, but returns the day after tomorrow. I do not come out of the mosque now but come out after prayer. Fahim\'s brother is a good boy, he never plays in the road. I do not sit on this chair, but sit on the mat.',
            translationBn: 'হে খালিদ! আজ তুমি কেন স্কুলে যাও না? তুমি অসুস্থ? ফাতিমা আগামীকাল গ্রাম বাড়ি থেকে ফিরে আসে না, কিন্তু পরের দিন ফিরে আসে। আমি এখন মসজিদ থেকে বেরিয়ে আসি না কিন্তু নামাজের পরে বেরিয়ে আসি। ফাহিম-এর ভাই একটি ভাল ছেলে, সে কখনও পথে খেলে না। আমি এই চেয়ারে বসি না, বরং ম্যাটে বসি।'
          },
          {
            title: 'أَمْثِلَةُ الْمُضَارِعِ الْمَنْفِيّ (٤)',
            titleEn: 'Present Tense Negation Examples (Part 4)',
            titleBn: 'বর্তমান কালের নেতিবাচক উদাহরণ (পর্ব ৪)',
            lines: [
              'لا تَقْرَأْ أَبَدًا فِي ضَوْءٍ ضَعِيفٍ - يَا فَاطِمَةُ الصَّغِيرَةُ ! لا تَخْرُجِي مِنَ الْبَيْتِ بَعْدَ الْمَغْرِبِ .',
              'يَا وَلَدُ ! لا تَكْتُبْ عَلَى هَذِهِ الْوَرَقَةِ الرَّدِيئَةِ ، بَلِ اكْتُبْ عَلَى تِلْكَ الْوَرَقَةِ الْجَيِّدَةِ .',
              'مَا لَعِبْتُ بِهَذِهِ الْكُرَةِ الْقَدِيمَةِ ، بَلْ لَعِبْتُ بِتِلْكَ الْكُرَةِ الْجَدِيدَةِ .'
            ],
            translationEn: 'Never read in weak light - Oh little Fatima! Do not go out of the house after sunset. Oh boy! Do not write on this bad paper, but write on that good paper. I did not play with that old ball, but played with that new ball.',
            translationBn: 'দুর্বল আলোতে কখনও পড়ো না - হে ছোট ফাতিমা! সূর্যাস্তের পরে ঘর থেকে বেরিয়ে আসো না। হে ছেলে! এই খারাপ কাগজে লিখো না, বরং সেই ভাল কাগজে লিখো। আমি সেই পুরানো বলটি দিয়ে খেলিনি, বরং সেই নতুন বলটি দিয়ে খেলেছি।'
          }
        ]
      }
    },
    {
      id: '3-1-2-9',
      type: 'application',
      titleEn: 'Application - Using Negation Particles',
      titleAr: 'التَّطْبِيقُ - اسْتِخْدَامُ حُرُوفِ النَّفْي',
      payload: {
        instruction: 'Transform affirmative sentences into negative sentences using مَا for past tense and لا for present/future tense while maintaining correct gender and pronoun verb conjugations.',
        items: [
          {
            emoji: '👦',
            ar: 'رَجَعَ الْوَلَدُ مِنَ الْمَدْرَسَةِ ⬅️ مَا رَجَعَ الْوَلَدُ مِنَ الْمَدْرَسَةِ',
            en: 'Affirmative → Negative (The boy did not return from school)'
          },
          {
            emoji: '👨‍💼',
            ar: 'يَذْهَبُ الرَّجُلُ إِلَى الْعَمَلِ ⬅️ لا يَذْهَبُ الرَّجُلُ إِلَى الْعَمَلِ',
            en: 'Affirmative → Negative (The man does not go to work)'
          },
          {
            emoji: '📖',
            ar: 'قَرَأْتُ الدَّرْسَ ⬅️ مَا قَرَأْتُ الدَّرْسَ',
            en: 'Affirmative → Negative (I did not read the lesson)'
          },
          {
            emoji: '👧',
            ar: 'تَلْعَبُ الْبِنْتُ فِي الْحَدِيقَةِ ⬅️ لا تَلْعَبُ الْبِنْتُ فِي الْحَدِيقَةِ',
            en: 'Affirmative → Negative (The girl does not play in the garden)'
          }
        ]
      }
    },
    {
      id: '3-1-2-10',
      type: 'assessment',
      titleEn: 'Assessment - Negation Practice',
      titleAr: 'التَّمْرِينُ - مُمَارَسَةُ النَّفْي',
      payload: {
        instruction: 'Complete the following assessment exercises on negation:',
        questions: [
          {
            emoji: '✍️',
            question_ar: 'كَتَبْتُ (State the meaning)',
            question_en: 'كَتَبْتُ (State the meaning)',
            correct_ar: 'I wrote',
            correct_en: 'I wrote',
            options_ar: ['I wrote', 'I write', 'I am writing'],
            questionType: 'general'
          },
          {
            emoji: '📖',
            question_ar: 'لا تَقْرَأُ (State the meaning)',
            question_en: 'لا تَقْرَأُ (State the meaning)',
            correct_ar: 'You do not read (f)',
            correct_en: 'You (feminine) do not read',
            options_ar: ['You do not read (f)', 'She does not read', 'I do not read'],
            questionType: 'general'
          },
          {
            emoji: '🔄',
            question_ar: 'مَا رَجَعَتْ (State the meaning)',
            question_en: 'مَا رَجَعَتْ (State the meaning)',
            correct_ar: 'She did not return',
            correct_en: 'She did not return (past)',
            options_ar: ['She did not return', 'She does not return', 'Returned'],
            questionType: 'general'
          },
          {
            emoji: '🪑',
            question_ar: 'أَجْلِسُ (Translate to English)',
            question_en: 'What does أَجْلِسُ mean?',
            correct_ar: 'I sit',
            correct_en: 'I sit',
            options_ar: ['I sit', 'I sat', 'Sit!'],
            questionType: 'general'
          },
          {
            emoji: '🎮',
            question_ar: 'لا تَلْعَبْ (Translate to English)',
            question_en: 'What does لا تَلْعَبْ mean?',
            correct_ar: 'Do not play (m)',
            correct_en: 'Do not play! (masculine)',
            options_ar: ['Do not play (m)', 'He does not play', 'I do not play'],
            questionType: 'general'
          },
          {
            emoji: '👩',
            question_ar: 'مَا ذَهَبْتُ (Translate to English)',
            question_en: 'What does مَا ذَهَبْتُ mean?',
            correct_ar: 'I did not go',
            correct_en: 'I did not go (past)',
            options_ar: ['I did not go', 'I do not go', 'I am not going'],
            questionType: 'general'
          }
        ]
      }
    },
    {
      id: '3-1-2-11',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أَسْئِلَة الْفَهْم وَ الْأَجْوِبَة',
      payload: {
        instruction: 'Answer the following comprehension questions based on the lesson texts:',
        questions: [
          {
            emoji: '🚶',
            question_ar: 'هَلْ ذَهَبَ أَخُو شَاهِدٍ إِلَى الْمَدْرَسَةِ ؟',
            question_en: 'Did Shahid\'s brother go to school?',
            correct_ar: 'لا، مَا ذَهَبَ',
            correct_en: 'No, he did not go',
            options_ar: ['نَعَمْ، ذَهَبَ', 'لا، مَا ذَهَبَ'],
            questionType: 'hal'
          },
          {
            emoji: '🎮',
            question_ar: 'هَلْ خَرَجَتْ سُعَادُ وَ لَعِبَتْ فِي الْحَدِيقَةِ ؟',
            question_en: 'Did Suad go out and play in the garden?',
            correct_ar: 'لا، مَا خَرَجَتْ وَ مَا لَعِبَتْ',
            correct_en: 'No, she did not go out and did not play',
            options_ar: ['نَعَمْ', 'لا، مَا خَرَجَتْ وَ مَا لَعِبَتْ'],
            questionType: 'hal'
          },
          {
            emoji: '📖',
            question_ar: 'مَاذَا فَعَلَتْ سُعَادُ ؟',
            question_en: 'What did Suad do?',
            correct_ar: 'قَرَأَتْ وَ كَتَبَتْ',
            correct_en: 'She read and wrote',
            options_ar: ['لَعِبَتْ', 'قَرَأَتْ وَ كَتَبَتْ', 'نَامَتْ'],
            questionType: 'general'
          },
          {
            emoji: '🌙',
            question_ar: 'مَتَى ذَهَبَتْ سُعَادُ إِلَى فِرَاشِهَا ؟',
            question_en: 'When did Suad go to bed?',
            correct_ar: 'بَعْدَ الْعِشَاءِ',
            correct_en: 'After dinner',
            options_ar: ['قَبْلَ الْعِشَاءِ', 'بَعْدَ الْعِشَاءِ'],
            questionType: 'general'
          },
          {
            emoji: '✍️',
            question_ar: 'هَلْ يَكْتُبُ الإِنْسَانُ بِشِمَالِهِ ؟',
            question_en: 'Does a person write with his left hand?',
            correct_ar: 'لا، بَلْ يَكْتُبُ بِيَمِينِهِ',
            correct_en: 'No, but he writes with his right hand',
            options_ar: ['نَعَمْ', 'لا، بَلْ يَكْتُبُ بِيَمِينِهِ'],
            questionType: 'hal'
          },
          {
            emoji: '🔄',
            question_ar: 'هَلْ يَرْجِعُ أَحَدٌ إِلَى الدُّنْيَا بَعْدَ الْمَوْتِ ؟',
            question_en: 'Does anyone return to the world after death?',
            correct_ar: 'لا',
            correct_en: 'No',
            options_ar: ['نَعَمْ', 'لا'],
            questionType: 'hal'
          },
          {
            emoji: '😊',
            question_ar: 'هَلْ يَخْرُجُ الْمُؤْمِنُ مِنَ الْجَنَّةِ أَبَدًا ؟',
            question_en: 'Will the believer ever come out of paradise?',
            correct_ar: 'لا، لا يَخْرُجُ أَبَدًا',
            correct_en: 'No, never',
            options_ar: ['نَعَمْ', 'لا، لا يَخْرُجُ أَبَدًا'],
            questionType: 'hal'
          },
          {
            emoji: '🎮',
            question_ar: 'مَاذَا تَفْعَلِينَ بَعْدَ الْعَصْرِ يَا زَيْنَبُ ؟',
            question_en: 'What do you do after afternoon prayer, Zaynab?',
            correct_ar: 'تَذْهَبُ إِلَى الْحَدِيقَةِ وَ تَلْعَبُ',
            correct_en: 'She goes to the garden and plays',
            options_ar: ['تَقْرَأُ', 'تَذْهَبُ إِلَى الْحَدِيقَةِ وَ تَلْعَبُ', 'تَنَامُ'],
            questionType: 'general'
          }
        ]
      }
    }
  ]
};

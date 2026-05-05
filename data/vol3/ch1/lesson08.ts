import type { LessonData } from '../../curriculum';

export const lesson08: LessonData = {
  darsNumber: 8,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Verb of Intention: أَرَادَ / يُرِيدُ with أَنْ',
      titleAr: 'غرض الفعل: أَرَادَ مع أَنْ',
      titleBn: 'ইচ্ছার ক্রিয়া: أَرَادَ / يُرِيدُ সহ أَنْ',
      payload: {
        rules: [
          {
            label: 'Intention structure (want to do)',
            labelBn: 'ইচ্ছার গঠন',
            arabic:
              'يُرِيدُونَ أَنْ يَفْعَلُوا - تُرِيدُونَ أَنْ تَفْعَلُوا - نُرِيدُ أَنْ نَفْعَلَ',
            romanized: "yurīdūn an yaf'alū - turīdūn an taf'alū - nurīd an naf'al",
            meaning:
              'The verb يُرِيدُ (to want) must be followed by أَنْ + subjunctive verb. The second verb is subordinate and expresses the intended action. Example: يُرِيدُونَ أَنْ يَشْرَبُوا (They want to drink).',
            meaningBn:
              'ক্রিয়া يُرِيدُ (চাওয়া) অবশ্যই أَنْ + নিমজ্জিত ক্রিয়া দ্বারা অনুসরণ করা হয়। দ্বিতীয় ক্রিয়া অধীনস্থ এবং অভিপ্রেত অ্যাকশন প্রকাশ করে।',
            examples: [
              {
                ar: 'أَرَادُوا أَنْ يَشْرَبُوا',
                en: 'They wanted to drink',
                bn: 'তারা পানীয় করতে চেয়েছিল',
              },
              {
                ar: 'يُرِيدُونَ أَنْ يَتَعَلَّمُوا',
                en: 'They want to learn',
                bn: 'তারা শিখতে চায়',
              },
            ],
          },
          {
            label: 'Capability: يَسْتَطِيعُ with أَنْ',
            labelBn: 'সামর্থ্য: يَسْتَطِيعُ সহ أَنْ',
            arabic: 'لا يَسْتَطِيعُونَ أَنْ يَفْعَلُوا',
            romanized: "lā yastatiʿūn an yaf'alū",
            meaning:
              'Similarly, يَسْتَطِيعُ (can/be able to) takes أَنْ + subjunctive verb. Negation: لَا يَسْتَطِيعُونَ أَنْ يَفْعَلُوا (They cannot do).',
            meaningBn:
              'একইভাবে, يَسْتَطِيعُ (পারা) أَنْ + নিমজ্জিত ক্রিয়া নেয়। নেতিবাচন: তারা করতে পারে না।',
            examples: [
              {
                ar: 'لا يَسْتَطِيعُونَ أَنْ يَمْنَعُوا',
                en: 'They cannot prevent',
                bn: 'তারা প্রতিরোধ করতে পারে না',
              },
            ],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Key Vocabulary: Intentions & Abilities',
      titleAr: 'مفردات: النوايا والقدرات',
      titleBn: 'মূল শব্দভান্ডার: ইচ্ছা ও সামর্থ্য',
      payload: {
        words: [
          {
            id: 1,
            ar: 'صَائِمُونَ',
            romanized: 'sāʾimūn',
            en: 'Fasting people',
            bn: 'রোজাদার',
            emoji: '🌙',
          },
          {
            id: 2,
            ar: 'يُفْطِرُوا',
            romanized: 'yufṭirū',
            en: 'They break the fast',
            bn: 'রোজা ভাঙা',
            emoji: '🍽️',
          },
          {
            id: 3,
            ar: 'أَكْوَاب',
            romanized: 'akwāb',
            en: 'Cups / glasses',
            bn: 'কাপ',
            emoji: '🥤',
          },
          {
            id: 4,
            ar: 'يَسْتَطِعْنَ',
            romanized: 'yastatiʿn',
            en: 'They (fem) can / are able',
            bn: 'তারা পারে',
            emoji: '💪',
          },
          {
            id: 5,
            ar: 'يُجَاهِدُوا',
            romanized: 'yujāhidū',
            en: 'They strive / do jihad',
            bn: 'সংগ্রাম করা',
            emoji: '⚔️',
          },
          {
            id: 6,
            ar: 'يُنْفِقُوا',
            romanized: 'yunfiqū',
            en: 'They spend (wealth)',
            bn: 'খরচ করা',
            emoji: '💰',
          },
          {
            id: 7,
            ar: 'يَنَالُوا',
            romanized: 'yanālū',
            en: 'They attain / acquire',
            bn: 'অর্জন করা',
            emoji: '🎯',
          },
          {
            id: 8,
            ar: 'الخِيَاطَة',
            romanized: 'al-khiyāṭah',
            en: 'Sewing',
            bn: 'সেলাই',
            emoji: '🧵',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading: Intentions & Goals',
      titleAr: 'القراءة: النوايا والأهداف',
      titleBn: 'পাঠ: ইচ্ছা ও লক্ষ্য',
      payload: {
        paragraphs: [
          {
            titleEn: 'Breaking the Fast',
            titleBn: 'রোজা ভাঙা',
            lines: [
              'أَرَادَ الصَّائِمُونَ أَنْ يُفْطِرُوا فَأَخَذُوا الْأَكْوَابَ لِيَشْرَبُوا شَرَابًا بَارِدًا ، وَشَكَرُوا اللهَ .',
            ],
            translationEn:
              'The fasting people wanted to break their fast, so they took the cups to drink a cold drink, and they thanked Allah.',
            translationBn:
              'রোজাদাররা রোজা ভাঙতে চেয়েছিল, তাই তারা ঠান্ডা পানীয় পান করার জন্য কাপ নিয়েছিল, এবং তারা আল্লাহর কৃতজ্ঞতা প্রকাশ করেছিল।',
          },
          {
            titleEn: "Majid's Children and Learning",
            titleBn: 'মাজিদের সন্তানরা ও শিক্ষা',
            lines: [
              'يُرِيدُ أَوْلادُ مَاجِدٍ أَنْ يَتَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ لِيَفْهَمُوا كَلامَ اللهِ .',
              'إِنَّ بَنَاتِ مَاجِدٍ لا يَسْتَطِعْنَ أَنْ يَتَكَلَّمْنَ بِاللُّغَةِ الْعَرَبِيَّةِ ، لِأَنَّهُنَّ مَا تَعَلَّمْنَهَا جَيِّدًا .',
            ],
            translationEn:
              "Majid's children want to learn the Arabic language to understand the speech of Allah. Indeed, Majid's daughters cannot speak the Arabic language, because they did not learn it well.",
            translationBn:
              'মাজিদের সন্তানরা আল্লাহর বাণী বুঝতে আরবি ভাষা শিখতে চায়। প্রকৃতপক্ষে, মাজিদের কন্যারা আরবিতে কথা বলতে পারে না, কারণ তারা এটি ভালোভাবে শিখেনি।',
          },
          {
            titleEn: 'Divine Commands & Righteous Intentions',
            titleBn: 'দৈবিক আদেশ ও সৎ উদ্দেশ্য',
            lines: [
              'أَمَرَ اللهُ الْمُسْلِمِينَ أَنْ يُجَاهِدُوا فِي سَبِيلِ اللهِ .',
              'هَؤُلاءِ الْأَغْنِيَاءُ الصَّالِحُونَ يُرِيدُونَ أَنْ يُنْفِقُوا أَمْوَالَهُمْ فِي سَبِيلِ اللهِ لِيَنَالُوا رِضَى اللهِ .',
            ],
            translationEn:
              'Allah commanded the Muslims to strive in the path of Allah. These righteous wealthy people want to spend their wealth in the path of Allah to attain the pleasure of Allah.',
            translationBn:
              'আল্লাহ মুসলিমদের আল্লাহর পথে সংগ্রাম করার আদেশ দিয়েছেন। এই সৎ ধনী মানুষরা আল্লাহর আনন্দ অর্জনের জন্য আল্লাহর পথে তাদের সম্পদ ব্যয় করতে চায়।',
          },
          {
            titleEn: 'Learning and Adornment',
            titleBn: 'শিক্ষা ও সজ্জা',
            lines: [
              'أَرَادَتْ بَنَاتُ فَاطِمَةَ أَنْ يَتَعَلَّمْنَ الْخِيَاطَةَ مِنْ أُمِّهِنَّ .',
              'وَلا نُرِيدُ أَنْ نُزَيِّنَهَا بِاللِّبَاسِ ، لِأَنَّ زِينَةَ الْعِلْمِ خَيْرٌ مِنْ زِينَةِ اللِّبَاسِ .',
            ],
            translationEn:
              "Fatima's daughters wanted to learn sewing from their mother. And we do not want to adorn it with clothing, because the adornment of knowledge is better than the adornment of clothing.",
            translationBn:
              'ফাতিমার কন্যারা তাদের মায়ের কাছ থেকে সেলাই শিখতে চেয়েছিল। এবং আমরা এটি পোশাকের সাথে সাজাতে চাই না, কারণ জ্ঞানের সজ্জা পোশাকের সজ্জার চেয়ে ভাল।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'application',
      titleEn: 'Practice: Intentional Action Phrases',
      titleAr: 'تطبيق: عبارات الفعل المقصود',
      titleBn: 'প্রয়োগ: উদ্দেশ্যমূলক কর্ম বাক্যাংশ',
      payload: {
        instruction:
          'Form sentences using يُرِيدُ/أَرَادَ + أَنْ + verb to express intentions and desires. Practice with different subjects (singular, plural, masculine, feminine).',
        instructionBn:
          'ইচ্ছা ও আকাঙ্ক্ষা প্রকাশ করতে يُرِيدُ/أَرَادَ + أَنْ + ক্রিয়া ব্যবহার করে বাক্য গঠন করুন।',
        text: `
Examples:
1. يُرِيدُ + أَنْ + يَفْعَل (He wants to do)
   يُرِيدُ أَنْ يَكْتُبَ الرِّسَالَةَ (He wants to write the letter)
   
2. يُرِيدُونَ + أَنْ + يَفْعَلُوا (They want to do)
   يُرِيدُونَ أَنْ يَقْرَأُوا الْقُرْآنَ (They want to read the Quran)

3. أَرَادَتْ + أَنْ + تَفْعَل (She wanted to do)
   أَرَادَتْ أَنْ تَتَعَلَّمَ السِّبَاحَةَ (She wanted to learn swimming)

Practice: Complete the pattern
- يُرِيدُ أَنْ _____ (want to teach)
- يَسْتَطِيعُونَ أَنْ _____ (can strive)
- أَرَادَتِ البِنْتُ أَنْ _____ (girl wanted to...)
        `,
      },
    },
    {
      id: '5',
      type: 'assessment',
      titleEn: 'Assessment: Comprehension & Intention Verbs',
      titleAr: 'التقييم: الفهم وأفعال النوايا',
      titleBn: 'মূল্যায়ন: বোঝা ও ইচ্ছা ক্রিয়া',
      payload: {
        instruction: 'Answer these comprehension questions from the reading passages.',
        instructionBn: 'পাঠের অংশগুলি থেকে এই বোধগম্য প্রশ্নের উত্তর দিন।',
        items: [
          {
            emoji: '❓',
            ar: 'مَاذَا أَرَادَ الصَّائِمُونَ ؟',
            en: 'What did the fasting people want?',
            bn: 'রোজাদাররা কি করতে চেয়েছিল?',
          },
          {
            emoji: '❓',
            ar: 'لِمَ أَخَذُوا الْأَكْوَابَ ؟',
            en: 'Why did they take the cups?',
            bn: 'তারা কেন কাপ নিয়েছিল?',
          },
          {
            emoji: '❓',
            ar: 'مَاذَا يُرِيدُ أَوْلادُ مَاجِدٍ ؟',
            en: "What do Majid's sons want?",
            bn: 'মাজিদের সন্তানরা কি চায়?',
          },
          {
            emoji: '❓',
            ar: 'لِمَ يُرِيدُونَ أَنْ يَتَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ ؟',
            en: 'Why do they want to learn Arabic?',
            bn: 'তারা কেন আরবি শিখতে চায়?',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'q_and_a',
      titleEn: 'Q & A: Intention & Capability Questions',
      titleAr: 'الأسئلة والإجابات',
      titleBn: 'প্রশ্ন ও উত্তর',
      payload: {
        instruction: 'Answer the questions in Arabic based on the reading material.',
        instructionBn: 'পাঠের উপকরণের উপর ভিত্তি করে আরবিতে প্রশ্নের উত্তর দিন।',
        questions: [
          {
            emoji: '🎯',
            question_ar:
              'هَلْ تَسْتَطِيعُ بَنَاتُ مَاجِدٍ أَنْ يَتَكَلَّمْنَ بِاللُّغَةِ الْعَرَبِيَّةِ ؟',
            question_en: "Can Majid's daughters speak Arabic?",
            question_bn: 'মাজিদের কন্যারা কি আরবিতে কথা বলতে পারে?',
            correct_ar: 'لَا ، لَا يَسْتَطِعْنَ لِأَنَّهُنَّ مَا تَعَلَّمْنَهَا جَيِّدًا',
            correct_en: 'No, they cannot because they did not learn it well.',
            correct_bn: 'না, তারা পারে না কারণ তারা এটি ভালভাবে শিখেনি।',
            options_ar: ['نَعَمْ', 'لَا', 'أَحْيَانًا'],
            questionType: 'hal',
          },
          {
            emoji: '💰',
            question_ar: 'مَاذَا يُرِيدُ الْأَغْنِيَاءُ الصَّالِحُونَ ؟',
            question_en: 'What do the righteous wealthy people want?',
            question_bn: 'সৎ ধনী মানুষরা কি চায়?',
            correct_ar: 'يُرِيدُونَ أَنْ يُنْفِقُوا أَمْوَالَهُمْ فِي سَبِيلِ اللهِ',
            correct_en: 'They want to spend their wealth in the path of Allah.',
            correct_bn: 'তারা আল্লাহর পথে তাদের সম্পদ ব্যয় করতে চায়।',
            options_ar: [
              'يُرِيدُونَ أَنْ يَكْنِزُوا',
              'يُرِيدُونَ أَنْ يُنْفِقُوا',
              'يُرِيدُونَ أَنْ يَبِيعُوا',
            ],
            questionType: 'general',
          },
          {
            emoji: '🧵',
            question_ar: 'مِمَّنْ أَرَادَتْ بَنَاتُ فَاطِمَةَ أَنْ يَتَعَلَّمْنَ الْخِيَاطَةَ ؟',
            question_en: "From whom did Fatima's daughters want to learn sewing?",
            question_bn: 'ফাতিমার কন্যারা কার কাছ থেকে সেলাই শিখতে চেয়েছিল?',
            correct_ar: 'مِنْ أُمِّهِنَّ',
            correct_en: 'From their mother.',
            correct_bn: 'তাদের মায়ের কাছ থেকে।',
            options_ar: ['مِنْ الْمُعَلِّمَةِ', 'مِنْ أُمِّهِنَّ', 'مِنَ الصَّدِيقَاتِ'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

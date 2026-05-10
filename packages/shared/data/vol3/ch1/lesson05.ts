import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
  darsNumber: 5,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Key Vocabulary: Condition & Fruits',
      titleAr: 'مفردات: الشرط وثمار',
      titleBn: 'মূল শব্দভান্ডার: শর্ত ও ফল',
      payload: {
        words: [
          { id: 1, ar: 'تَثْبِيتٌ', romanized: 'tathbīt', en: 'Firmness', bn: 'দৃঢ়তা', emoji: '💪' },
          { id: 2, ar: 'قَدَمٌ', romanized: 'qadam', en: 'Foot', bn: 'পা', emoji: '🦶' },
          { id: 3, ar: 'أَنْبَتَ', romanized: 'anbata', en: 'To grow / to sprout', bn: 'অঙ্কুরিত করা', emoji: '🌱' },
          { id: 4, ar: 'سُنْبُلَةٌ', romanized: 'sunbula', en: 'Ear of corn / spike', bn: 'ধান/কর্ণেল', emoji: '🌾' },
          { id: 5, ar: 'حَبَّةٌ', romanized: 'ḥabba', en: 'Grain / seed', bn: 'দানা', emoji: '🌰' },
          { id: 6, ar: 'عِبَادَةٌ', romanized: 'ʿibāda', en: 'Worship', bn: 'উপাসনা', emoji: '🛐' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Conditional Particle إِنْ — Forms & Effects',
      titleAr: 'حرف الشرط إِنْ — الصيغ والأثر',
      titleBn: 'শর্ত কণিকা إِنْ — রূপ ও প্রভাব',
      payload: {
        rules: [
          {
            label: 'إِنْ with Two Presents (Jussive)',
            labelBn: 'إِنْ দুইটি مضارعকে জাসিম করে',
            arabic: 'إِنْ حَـرْفُ شَرْطٍ يَدْخُلُ عَلَى مُضَارِعَيْنِ وَ يَجْزِمُهُمَا',
            romanized: "in ḥarf sharṭ yadkhul ʿalā muḍāriʿayn wa yajzimuhumā",
            meaning:
              'The particle إِنْ enters two present-tense verbs and makes both jussive (majzum), establishing a conditional structure.',
            meaningBn:
              'কণিকা إِنْ দুটি বর্তমান কাল ক্রিয়ার উপর প্রবেশ করে এবং উভয়কে জাসিম (majzum) করে, শর্তসাপেক্ষ গঠন তৈরি করে।',
            examples: [
              { ar: 'إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ', en: 'If you help Allah, He will help you', bn: 'যদি তোমরা আল্লাহকে সাহায্য কর, তিনি তোমাদের সাহায্য করবেন' },
              { ar: 'إِنْ تُطِيعُوا اللَّهَ يُدْخِلْكُمْ الْجَنَّةَ', en: 'If you obey Allah, He will admit you to Paradise', bn: 'যদি তোমরা আল্লাহকে মানো, তিনি তোমাদের জান্নাতে প্রবেশ করাবেন' },
            ],
          },
          {
            label: 'إِنْ with Past (Future Meaning)',
            labelBn: 'অতীতের সাথে إِنْ — ভবিষ্যত অর্থ',
            arabic: 'إِنْ تَدْخُلُ عَلَى الْمَاضِي فَتَجْعَلُهُ مُسْتَقْبَلًا',
            romanized: "in tadkhul ʿalā al-māḍī fa tajʿaluhu mustaqbalan",
            meaning:
              'When إِنْ attaches to a past-formed verb, it can yield a future/hypothetical sense (commonly in classical examples).',
            meaningBn: 'যখন إِنْ অতীত কালের verb-এ প্রবেশ করে, এটি ভবিষ্যত/কল্পিত অর্থ দিতে পারে।',
            examples: [
              { ar: 'إِنْ نَصَرْتَنِي الْيَوْمَ نَصَرْتُكَ غَدًا', en: 'If you help me today, I will help you tomorrow', bn: 'যদি তুমি আজ আমাকে সাহায্য কর, আমি তোমাকে কাল সাহায্য করব' },
            ],
          },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Quranic & Teaching Passages (Conditionals)',
      titleAr: 'مقتطفات قرآنية وتعليمية (شروط)',
      titleBn: 'কুরআনিক ও শিক্ষামূলক অনুচ্ছেদ (শর্ত)',
      payload: {
        paragraphs: [
          {
            titleEn: "Divine Promise & Reward",
            titleBn: 'দৈবিক প্রতিশ্রুতি ও পুরস্কার',
            lines: [
              'إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ وَ يُثْبِتْ أَقْدَامَكُمْ .',
              'إِنْ تُطِيعُوا اللَّهَ وَ رَسُولَهُ يُدْخِلْكُمْ الْجَنَّةَ وَ يُعْطِكُمْ أَجْرًا عَظِيمًا .',
              'إِنْ تُنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ تَجِدُوا أَجْرَهَا عِنْدَ اللَّهِ .',
            ],
            translationEn:
              'If you help Allah, He will help you and make your feet firm. If you obey Allah and His Messenger, He will admit you into Paradise and give you a great reward. If you spend your wealth in the path of Allah, you will find its reward with Allah.',
            translationBn:
              'যদি তোমরা আল্লাহকে সাহায্য কর, তিনি তোমাদের সাহায্য করবেন এবং তোমাদের পা দৃঢ় করবেন। যদি তোমরা আল্লাহ ও তাঁর রাসূলের আনুগত্য কর, তিনি তোমাদের জান্নাতে প্রবেশ করাবেন এবং মহান পুরস্কার দেবেন। যদি তোমরা আল্লাহর পথে deinen, তার পুরস্কার আল্লাহর কাছে পাবে।',
          },
          {
            titleEn: 'Warnings & Moral Lessons',
            titleBn: 'সতর্কতা ও নৈতিক পাঠ',
            lines: [
              'أَيُّهَا النَّاسُ ! إِنْ تَرَكْتُمُ الْقُرْآنَ وَ السُّنَّةَ خَسِرْتُمْ فِي دِينِكُمْ وَ دُنْيَاكُمْ .',
              'إِنْ يَقُمْ فَقِيرٌ بِبَابِكَ فَتَصَدَّقْ عَلَيْهِ .',
            ],
            translationEn:
              'O people! If you abandon the Quran and the Sunnah, you will lose in your religion and worldly life. If a poor person stands at your door, then give him charity.',
            translationBn:
              'হে মানুষ! যদি তুমি কুরআন ও সুন্নত পরিত্যাগ কর, তোমরা তোমাদের ধর্ম ও দুনিয়ায় ক্ষতিগ্রস্ত হবে। যদি দরিদ্র তোমার দরজায় আসে, তাকে দান করো।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'grammar_rule',
      titleEn: 'Faa (ف) on the Answer of Condition',
      titleAr: 'الفاء على جواب الشرط',
      titleBn: 'উত্তরে ফা (ف) ব্যবহার',
      payload: {
        rules: [
          {
            label: 'When to attach ف',
            labelBn: 'কখন ফা লাগবে',
            arabic: 'تدخل الفاء على جواب الشرط في الحالات التالية: الأمر، النهي، الدعاء، والجملة الاسمية',
            romanized: 'tadkhul al-fāʾ ʿalā jawāb al-sharṭ fī al-ḥālāt al-tāliyah: al-amr, al-nahy, al-duʿāʾ, wa al-jumla al-ismiyyah',
            meaning:
              'The particle ف attaches to the answer of the conditional when the answer is an imperative (command), prohibition, supplication, or a nominal sentence.',
            meaningBn: 'উত্তরে ফা যোগ করা হয় যখন উত্তরটি আদেশ, নিষেধ, দোয়া বা নামবাচক বাক্য হয়।',
            examples: [
              { ar: 'إِنْ جَاءَكَ ضَيْفٌ فَأَكْرِمْهُ', en: 'If a guest comes, then honor him', bn: 'যদি অতিথি আসে, তবে তাকে সন্মান করো' },
              { ar: 'إِنْ تُرِدِ الْآخِرَةَ فَلَا تَسْعَ وَرَاءَ الدُّنْيَا', en: 'If you want the Hereafter, then do not pursue the worldly life', bn: 'যদি তুমি আখিরাত চাও, তবে দুনিয়াবাদে লিপ্ত হও না' },
            ],
          },
        ],
      },
    },
    {
      id: '5',
      type: 'application',
      titleEn: 'Practice: Build Conditional Sentences',
      titleAr: 'تطبيق: بناء الجمل الشرطية',
      titleBn: 'প্রয়োগ: শর্তাধীন বাক্য গঠন',
      payload: {
        instruction: 'Form conditional sentences using إِنْ and apply Faa where appropriate.',
        instructionBn: 'إِنْ ব্যবহার করে শর্তবাচক বাক্য তৈরি করুন এবং যেখানে প্রযোজ্য সেখানে ফা যুক্ত করুন।',
        text: 'Examples: إِنْ تَجْتَهِدْ → تَنْجَحْ; إِنْ يَأْتِ الضَّيْفُ فَأَكْرِمْهُ',
      },
    },
    {
      id: '6',
      type: 'assessment',
      titleEn: 'Assessment: Conditionals',
      titleAr: 'التقييم: الجمل الشرطية',
      titleBn: 'মূল্যায়ন: শর্তবাচক বাক্য',
      payload: {
        instruction: 'Answer the short assessment tasks below.',
        instructionBn: 'নিম্নলিখিত ছোট মূল্যায়ন কাজগুলোর উত্তর দিন।',
        items: [
          { emoji: '❓', ar: 'ترجم: إِنْ تُنْفِقْ تَجِدْ أَجْرَكَ', en: 'Translate: If you spend, you will find your reward', bn: 'অনুবাদ করুন: যদি তুমি ব্যয় কর, তুমি তোমার পুরস্কার পাবে' },
          { emoji: '🔎', ar: 'اشرح: الفرق بين إِنْ مع الماضي و مع المضارع', en: 'Explain: Difference between إِنْ with past vs present', bn: 'ব্যাখ্যা করুন: অতীত বনাম বর্তমানের সাথে إِنْ এর পার্থক্য' },
          { emoji: '✍️', ar: 'كون جملة شرطية: إِنْ + أمر', en: 'Form a conditional sentence with إِنْ + imperative', bn: 'إِنْ + আদেশ দিয়ে একটি শর্তবাচক বাক্য গঠন করুন' },
        ],
      },
    },
    {
      id: '7',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أسئلة الفهم',
      titleBn: 'বোঝার প্রশ্ন',
      payload: {
        instruction: 'Answer these questions in Arabic based on the lesson texts.',
        instructionBn: 'পাঠ্যের উপর ভিত্তি করে আরবিতে উত্তর দিন।',
        questions: [
          {
            emoji: '✅',
            question_ar: 'هَلْ يَغَيِّرُ إِنْ مَعَ الْمَاضِي مَعْنَاهُ؟',
            question_en: 'Does إِنْ change meaning when attached to a past form?',
            question_bn: 'إِنْ কি অতীত রূপে লাগলে তার অর্থ বদলায়?',
            correct_ar: 'نَعَمْ ، أَحْيَانًا يُحَوِّلُهُ إِلَى مَعْنًى مُسْتَقْبَلِيًّا',
            correct_en: 'Yes — sometimes it gives a future/hypothetical meaning.',
            correct_bn: 'হ্যাঁ — কখনও কখনও এটি ভবিষ্যত/কল্পিত অর্থ দেয়।',
            options_ar: ['نَعَمْ', 'لَا', 'أَحْيَانًا'],
            questionType: 'general',
          },
          {
            emoji: '📘',
            question_ar: 'مَا ثَمَرَةُ مَثَلِ الْمُنْفِقِ؟',
            question_en: 'What is the fruit of the example of spending for Allah?',
            question_bn: 'আল্লাহর পথে দান করার উদাহরণের ফল কী?',
            correct_ar: 'يَنْبُتُ سَبْعَ سُنَبُلٍ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ',
            correct_en: 'It sprouts seven ears, each with a hundred grains.',
            correct_bn: 'এটি সাতটি কুঁড়ে জন্মায়, প্রতিটি কুঁড়েতে একশো দানা থাকে।',
            options_ar: ['سُنْبُلَةٌ', 'حَبَّةٌ', 'قَدَمٌ'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

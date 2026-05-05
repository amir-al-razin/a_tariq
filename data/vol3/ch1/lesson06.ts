import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
  darsNumber: 6,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Key Vocabulary: Repentance & Consequences',
      titleAr: 'مفردات: التوبة والعواقب',
      titleBn: 'মূল শব্দভান্ডার: তাওবা ও পরিণাম',
      payload: {
        words: [
          {
            id: 1,
            ar: 'جَمِيْعًا',
            romanized: 'jamīʿan',
            en: 'All / Altogether',
            bn: 'সমস্ত',
            emoji: '🧑‍🤝‍🧑',
          },
          {
            id: 2,
            ar: 'تَابَ عَلَيْهِ',
            romanized: 'tāba ʿalayhi',
            en: 'He accepted repentance / He repented',
            bn: 'তাওবা মেনে নিল',
            emoji: '🙏',
          },
          {
            id: 3,
            ar: 'مُجْرِمٌ',
            romanized: 'mujrim',
            en: 'Criminal / Sinner',
            bn: 'পাপী',
            emoji: '⚖️',
          },
          {
            id: 4,
            ar: 'الإِفْلَاحُ',
            romanized: 'al-iflāḥ',
            en: 'Success / Prosperity',
            bn: 'সাফল্য',
            emoji: '🏆',
          },
          { id: 5, ar: 'أُفُقٌ', romanized: 'ufuq', en: 'Horizon', bn: 'क्षितি', emoji: '🌅' },
          {
            id: 6,
            ar: 'عَاقِبَةٌ',
            romanized: 'ʿāqibah',
            en: 'Consequence / End',
            bn: 'পরিণাম',
            emoji: '🔚',
          },
        ],
      },
    },
    {
      id: '2',
      type: 'verb_table',
      titleEn: 'Plural Verb Series — Common Patterns',
      titleAr: 'سلاسل الأفعال الجماعية — أنماط شائعة',
      titleBn: 'বহুবচন ক্রিয়া সিরিজ — প্রচলিত প্যাটার্ন',
      payload: {
        verbTense: 'past',
        baabLabel: 'Various derived and simple plural verbs',
        verbTable: [
          {
            root: 'صَامَ',
            meaning: 'to fast',
            meaningBn: 'রোযা পালন করা',
            he: 'صَامَ',
            she: 'صَامَتْ',
            youM: 'صُمْتَ',
            youF: 'صُمْتِ',
            i: 'صُمْتُ',
          },
          {
            root: 'بَاعَ',
            meaning: 'to sell',
            meaningBn: 'বিক্রি করা',
            he: 'بَاعَ',
            she: 'بَاعَتْ',
            youM: 'بَعْتَ',
            youF: 'بَعْتِ',
            i: 'بَعْتُ',
          },
          {
            root: 'نَامَ',
            meaning: 'to sleep',
            meaningBn: 'ঘুমানো',
            he: 'نَامَ',
            she: 'نَامَتْ',
            youM: 'نِمْتَ',
            youF: 'نِمْتِ',
            i: 'نِمْتُ',
          },
          {
            root: 'أَجَابَ',
            meaning: 'to answer',
            meaningBn: 'উত্তর দেওয়া',
            he: 'أَجَابَ',
            she: 'أَجَابَتْ',
            youM: 'أَجَبْتَ',
            youF: 'أَجَبْتِ',
            i: 'أَجَبْتُ',
          },
          {
            root: 'اِسْتَرَاحَ',
            meaning: 'to rest',
            meaningBn: 'আরাম করা',
            he: 'اِسْتَرَاحَ',
            she: 'اِسْتَرَاحَتْ',
            youM: 'اِسْتَرَحْتَ',
            youF: 'اِسْتَرَحْتِ',
            i: 'اِسْتَرَحْتُ',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Selected Reading: Repentance & Duty',
      titleAr: 'نصوص مختارة: التوبة والواجب',
      titleBn: 'নির্বাচিত পাঠ: তাওবা ও দায়িত্ব',
      payload: {
        paragraphs: [
          {
            titleEn: 'Repent Together',
            titleBn: 'একসাথে তাওবা করুন',
            lines: [
              'تُوبُوْا إِلَى اللّٰهِ جَمِيْعًا أَيُّهَا الْمُؤْمِنُوْنَ لَعَلَّكُمْ تُفْلِحُوْنَ .',
              'عَادَ الْمُذْنِبُوْنَ إِلَى رَبِّهِمْ وَ تَابُوْا إِلَيْهِ ، فَتَابَ اللّٰهُ عَلَيْهِمْ .',
              'قَالَ الْمُعَلِّمُ لِتَلاَمِيْذِهِ : أَنَا أَسْأَلُكُمْ وَ أَنْتُمْ تُجِيْبُوْنَ .',
            ],
            translationEn:
              'Repent to Allah all together, O believers! Perhaps you will succeed. The sinners returned to their Lord and repented, so Allah accepted their repentance. The teacher said to his students: I will ask you and you will answer.',
            translationBn:
              'সমস্তভাবে আল্লাহর কাছে তাওবা কর, হে বিশ্বাসী! হয়ত তোমরা সফল হবে। পাপীরা তাদের পালনকর্তার কাছে ফিরে এসে তাওবা করল, তাই আল্লাহ তাদের তাওবা কবুল করলেন। শিক্ষক তাঁর ছাত্রদের বললেন: আমি তোমাদের প্রশ্ন করব এবং তোমরা উত্তর দেবে।',
          },
          {
            titleEn: 'Sermon Exhortation',
            titleBn: 'উপদেশমূলক বক্তৃতা',
            lines: [
              'أَيُّهَا النَّاسُ! قَدْ خَلَقَكُمُ اللّٰهُ لِيَتَعَبَّدُوهُ ، فَلِمَ لاَ تَعْبُدُوْنَ اللّٰهَ ؟',
              'سِيْرُوْا فِى الْأَرْضِ فَانْظُرُوْا كَيْفَ كَانَ عَاقِبَةُ الْمُجْرِمِيْنَ .',
            ],
            translationEn:
              'O people! Allah created you to worship Him, so why do you not worship Allah? Travel through the land and see how was the end of the criminals.',
            translationBn:
              'হে মানুষ! আল্লাহ তোমাদের সৃষ্টি করেছেন তাঁর ইবাদত করার জন্য, তাহলে কেন তোমরা আল্লাহর ইবাদত করো না? পৃথিবীর উপর ভ্রমণ কর এবং দেখ কিভাবে অপরাধীদের পরিণতি হয়েছে।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أسئلة الفهم',
      titleBn: 'বোঝার প্রশ্ন',
      payload: {
        instruction: 'Answer the following questions in Arabic from the passage.',
        instructionBn: 'অনুচ্ছেদ থেকে আরবিতে প্রশ্নগুলোর উত্তর দিন।',
        questions: [
          {
            emoji: '❓',
            question_ar: 'مَنْ يُطِيْعُهُ الْمُسْلِمُوْنَ ؟',
            question_en: 'Who do the Muslims obey?',
            question_bn: 'মুসলিমরা কাকে মানে?',
            correct_ar: 'اللّٰهَ وَ رَسُولَهُ',
            correct_en: 'Allah and His Messenger',
            correct_bn: 'আল্লাহ ও তাঁর রাসূল',
            options_ar: ['اللّٰهَ', 'النَّاسَ', 'الشيطانَ'],
            questionType: 'general',
          },
          {
            emoji: '🕰️',
            question_ar: 'مَتَى يَصُوْمُ الْمُسْلِمُوْنَ ؟',
            question_en: 'When do the Muslims fast?',
            question_bn: 'মুসলিমরা কখন রোযা রাখে?',
            correct_ar: 'نَهَارَ رَمَضَانَ',
            correct_en: 'During the days of Ramadan',
            correct_bn: 'রমজানের দিনে',
            options_ar: ['فِي رَمَضَانَ', 'فِي شَعْبَانَ', 'فِي ذو القعدة'],
            questionType: 'general',
          },
          {
            emoji: '👥',
            question_ar: 'مَنْ يُطِيْعُ الْمُسْلِمُوْنَ وَ مَنْ يَخَافُوْنَ ؟',
            question_en: 'Who do the Muslims obey and who do they fear?',
            question_bn: 'মুসলিমরা কাকে মানে এবং কাকে ভয় পায়?',
            correct_ar: 'يُطِيْعُونَ اللّٰهَ وَ يَخَافُونَ مِنْ عَذَابِه',
            correct_en: 'They obey Allah and fear His punishment',
            correct_bn: 'তারা আল্লাহকে মানে এবং তাঁর শাস্তি ভয় করে',
            options_ar: ['اللّٰهَ', 'الملك', 'الناس'],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'assessment',
      titleEn: 'Exercises: Fill & Translate',
      titleAr: 'تمارين: املأ وترجم',
      titleBn: 'অনুশীলন: পূরণ ও অনুবাদ',
      payload: {
        instruction: 'Complete the fill-in-the-blanks and translate into Bengali.',
        instructionBn: 'ফাঁক পূরণ করুন এবং বাংলা অনুবাদ করুন।',
        items: [
          {
            emoji: '✍️',
            ar: 'مَتَى يَصُوْمُ الْمُسْلِمُوْنَ ؟',
            en: 'When do the Muslims fast?',
            bn: 'মুসলিমরা কখন রোযা রাখে?',
          },
          {
            emoji: '🔁',
            ar: 'جَمِيْعًا تَابَ ...',
            en: 'All repented ...',
            bn: 'সকলেই তাওবা করল ...',
          },
          {
            emoji: '🔢',
            ar: 'ثَلَاثَةُ رِجَالٍ - أَرْبَعُ سَاعَاتٍ',
            en: 'Three men - Four hours',
            bn: 'তিনজন পুরুষ - চারটি ঘন্টা',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'grammar_rule',
      titleEn: 'Numbers: Usage Patterns (3-6)',
      titleAr: 'الأعداد: كيفية الاستعمال (٣-٦)',
      titleBn: 'সংখ্যা: ব্যবহারের প্যাটার্ন (৩-৬)',
      payload: {
        rules: [
          {
            label: 'Three to Six — Dual & Plural Usage',
            labelBn: 'তিন থেকে ছয় — দ্বৈত ও বহুবচন ব্যবহার',
            arabic:
              'ثَلَاثَةٌ - ثَلَاثُ ، أَرْبَعَةٌ - أَرْبَعُ ، خَمْسَةٌ - خَمْسُ ، سِتَّةٌ - سِتُّ',
            romanized: "thalāthah - thalāthu, arba'ah - arba'u, khamsah - khamsu, sittah - sittu",
            meaning:
              'Different syntactic forms exist for numbers depending on the grammatical role (nominative, accusative/genitive, etc.). Practice example phrases to see the pattern.',
            meaningBn:
              'সংখ্যাগুলোর বিভিন্ন সিনট্যাক্স রয়েছে বাক্যের ভূমিকার উপর ভিত্তি করে। উদাহরণ অনুশীলন করে প্যাটার্ন দেখুন।',
            examples: [
              { ar: 'ثَلَاثَةُ رِجَالٍ', en: 'Three men (nominative)', bn: 'তিনজন পুরুষ' },
              { ar: 'أَرْبَعُ سَاعَاتٍ', en: 'Four hours', bn: 'চারটি ঘন্টা' },
            ],
          },
        ],
      },
    },
  ],
};

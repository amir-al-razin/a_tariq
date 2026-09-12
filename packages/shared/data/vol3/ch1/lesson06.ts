import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
  darsNumber: 6,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Key Vocabulary: Repentance & Consequences',
      titleAr: 'مفردات: التوبة والعواقب',
      payload: {
        words: [
          { id: 1, ar: 'جَمِيْعًا', romanized: 'jamīʿan', en: 'All / Altogether', emoji: '🧑‍🤝‍🧑' },
          {
            id: 2,
            ar: 'تَابَ عَلَيْهِ',
            romanized: 'tāba ʿalayhi',
            en: 'He accepted repentance / He repented',
            emoji: '🙏',
          },
          { id: 3, ar: 'مُجْرِمٌ', romanized: 'mujrim', en: 'Criminal / Sinner', emoji: '⚖️' },
          {
            id: 4,
            ar: 'الإِفْلَاحُ',
            romanized: 'al-iflāḥ',
            en: 'Success / Prosperity',
            emoji: '🏆',
          },
          { id: 5, ar: 'أُفُقٌ', romanized: 'ufuq', en: 'Horizon', emoji: '🌅' },
          { id: 6, ar: 'عَاقِبَةٌ', romanized: 'ʿāqibah', en: 'Consequence / End', emoji: '🔚' },
        ],
      },
    },
    {
      id: '2',
      type: 'verb_table',
      titleEn: 'Plural Verb Series - Common Patterns',
      titleAr: 'سلاسل الأفعال الجماعية - أنماط شائعة',
      payload: {
        verbTense: 'past',
        baabLabel: 'Various derived and simple plural verbs',
        verbTable: [
          {
            root: 'صَامَ',
            meaning: 'to fast',
            he: 'صَامَ',
            she: 'صَامَتْ',
            youM: 'صُمْتَ',
            youF: 'صُمْتِ',
            i: 'صُمْتُ',
          },
          {
            root: 'بَاعَ',
            meaning: 'to sell',
            he: 'بَاعَ',
            she: 'بَاعَتْ',
            youM: 'بَعْتَ',
            youF: 'بَعْتِ',
            i: 'بَعْتُ',
          },
          {
            root: 'نَامَ',
            meaning: 'to sleep',
            he: 'نَامَ',
            she: 'نَامَتْ',
            youM: 'نِمْتَ',
            youF: 'نِمْتِ',
            i: 'نِمْتُ',
          },
          {
            root: 'أَجَابَ',
            meaning: 'to answer',
            he: 'أَجَابَ',
            she: 'أَجَابَتْ',
            youM: 'أَجَبْتَ',
            youF: 'أَجَبْتِ',
            i: 'أَجَبْتُ',
          },
          {
            root: 'اِسْتَرَاحَ',
            meaning: 'to rest',
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
      payload: {
        paragraphs: [
          {
            titleEn: 'Repent Together',
            lines: [
              'تُوبُوْا إِلَى اللّٰهِ جَمِيْعًا أَيُّهَا الْمُؤْمِنُوْنَ لَعَلَّكُمْ تُفْلِحُوْنَ .',
              'عَادَ الْمُذْنِبُوْنَ إِلَى رَبِّهِمْ وَ تَابُوْا إِلَيْهِ ، فَتَابَ اللّٰهُ عَلَيْهِمْ .',
              'قَالَ الْمُعَلِّمُ لِتَلاَمِيْذِهِ : أَنَا أَسْأَلُكُمْ وَ أَنْتُمْ تُجِيْبُوْنَ .',
            ],
            translationEn:
              'Repent to Allah all together, O believers! Perhaps you will succeed. The sinners returned to their Lord and repented, so Allah accepted their repentance. The teacher said to his students: I will ask you and you will answer.',
          },
          {
            titleEn: 'Sermon Exhortation',
            lines: [
              'أَيُّهَا النَّاسُ! قَدْ خَلَقَكُمُ اللّٰهُ لِيَتَعَبَّدُوهُ ، فَلِمَ لاَ تَعْبُدُوْنَ اللّٰهَ ؟',
              'سِيْرُوْا فِى الْأَرْضِ فَانْظُرُوْا كَيْفَ كَانَ عَاقِبَةُ الْمُجْرِمِيْنَ .',
            ],
            translationEn:
              'O people! Allah created you to worship Him, so why do you not worship Allah? Travel through the land and see how was the end of the criminals.',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أسئلة الفهم',
      payload: {
        instruction: 'Answer the following questions in Arabic from the passage.',
        questions: [
          {
            emoji: '❓',
            question_ar: 'مَنْ يُطِيْعُهُ الْمُسْلِمُوْنَ ؟',
            question_en: 'Who do the Muslims obey?',
            correct_ar: 'اللّٰهَ وَ رَسُولَهُ',
            correct_en: 'Allah and His Messenger',
            options_ar: ['اللّٰهَ وَ رَسُولَهُ', 'النَّاسَ', 'الشيطانَ'],
            questionType: 'general',
          },
          {
            emoji: '🕰️',
            question_ar: 'مَتَى يَصُوْمُ الْمُسْلِمُوْنَ ؟',
            question_en: 'When do the Muslims fast?',
            correct_ar: 'نَهَارَ رَمَضَانَ',
            correct_en: 'During the days of Ramadan',
            options_ar: ['نَهَارَ رَمَضَانَ', 'فِي شَعْبَانَ', 'فِي ذِي الْقَعْدَةِ'],
            questionType: 'general',
          },
          {
            emoji: '👥',
            question_ar: 'مَنْ يُطِيْعُ الْمُسْلِمُوْنَ وَ مَنْ يَخَافُوْنَ ؟',
            question_en: 'Who do the Muslims obey and who do they fear?',
            correct_ar: 'يُطِيْعُونَ اللّٰهَ وَ يَخَافُونَ مِنْ عَذَابِه',
            correct_en: 'They obey Allah and fear His punishment',
            options_ar: [
              'يُطِيْعُونَ اللّٰهَ وَ يَخَافُونَ مِنْ عَذَابِه',
              'يُطِيعُونَ النَّاسَ',
              'لَا يُطِيعُونَ أَحَدًا',
            ],
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
      payload: {
        instruction: 'Complete the fill-in-the-blanks and translation exercises.',
        questions: [
          {
            emoji: '✍️',
            question_ar: 'مَتَى يَصُوْمُ الْمُسْلِمُوْنَ؟',
            question_en: 'When do the Muslims fast?',
            correct_ar: 'فِي رَمَضَانَ',
            correct_en: 'In Ramadan',
            options_ar: ['فِي رَمَضَانَ', 'فِي شَوَّالٍ', 'فِي شَعْبَانَ'],
            questionType: 'general',
          },
          {
            emoji: '🔁',
            question_ar: 'أَكْمِلْ: تَابُوا إِلَى اللَّهِ ....',
            question_en: 'Complete: They repented to Allah...',
            correct_ar: 'جَمِيعًا',
            correct_en: 'Altogether',
            options_ar: ['جَمِيعًا', 'كَثِيرًا', 'قَلِيلًا'],
            questionType: 'general',
          },
          {
            emoji: '🔢',
            question_ar: 'تَرْجِمْ: Three men',
            question_en: 'Translate: Three men',
            correct_ar: 'ثَلَاثَةُ رِجَالٍ',
            correct_en: 'Three men',
            options_ar: ['ثَلَاثَةُ رِجَالٍ', 'ثَلَاثُ رِجَالٍ', 'ثَلَاثَةُ رَجُلٍ'],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'grammar_rule',
      titleEn: 'Numbers: Usage Patterns (3-6)',
      titleAr: 'الأعداد: كيفية الاستعمال (٣-٦)',
      payload: {
        rules: [
          {
            label: 'Three to Six - Dual & Plural Usage',
            arabic:
              'ثَلَاثَةٌ - ثَلَاثُ ، أَرْبَعَةٌ - أَرْبَعُ ، خَمْسَةٌ - خَمْسُ ، سِتَّةٌ - سِتُّ',
            romanized: "thalāthah - thalāthu, arba'ah - arba'u, khamsah - khamsu, sittah - sittu",
            meaning:
              'Different syntactic forms exist for numbers depending on the grammatical role (nominative, accusative/genitive, etc.). Practice example phrases to see the pattern.',
            examples: [
              { ar: 'ثَلَاثَةُ رِجَالٍ', en: 'Three men (nominative)' },
              { ar: 'أَرْبَعُ سَاعَاتٍ', en: 'Four hours' },
            ],
          },
        ],
      },
    },
  ],
};

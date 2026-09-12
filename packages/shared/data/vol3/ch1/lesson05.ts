import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
  darsNumber: 5,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Key Vocabulary: Condition & Fruits',
      titleAr: 'مفردات: الشرط وثمار',
      payload: {
        words: [
          { id: 1, ar: 'تَثْبِيتٌ', romanized: 'tathbīt', en: 'Firmness', emoji: '💪' },
          { id: 2, ar: 'قَدَمٌ', romanized: 'qadam', en: 'Foot', emoji: '🦶' },
          { id: 3, ar: 'أَنْبَتَ', romanized: 'anbata', en: 'To grow / to sprout', emoji: '🌱' },
          { id: 4, ar: 'سُنْبُلَةٌ', romanized: 'sunbula', en: 'Ear of corn / spike', emoji: '🌾' },
          { id: 5, ar: 'حَبَّةٌ', romanized: 'ḥabba', en: 'Grain / seed', emoji: '🌰' },
          { id: 6, ar: 'عِبَادَةٌ', romanized: 'ʿibāda', en: 'Worship', emoji: '🛐' },
        ],
      },
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Conditional Particle إِنْ - Forms & Effects',
      titleAr: 'حرف الشرط إِنْ - الصيغ والأثر',
      payload: {
        rules: [
          {
            label: 'إِنْ with Two Presents (Jussive)',
            arabic: 'إِنْ حَـرْفُ شَرْطٍ يَدْخُلُ عَلَى مُضَارِعَيْنِ وَ يَجْزِمُهُمَا',
            romanized: 'in ḥarf sharṭ yadkhul ʿalā muḍāriʿayn wa yajzimuhumā',
            meaning:
              'The particle إِنْ enters two present-tense verbs and makes both jussive (majzum), establishing a conditional structure.',
            examples: [
              {
                ar: 'إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ',
                en: 'If you help Allah, He will help you',
              },
              {
                ar: 'إِنْ تُطِيعُوا اللَّهَ يُدْخِلْكُمْ الْجَنَّةَ',
                en: 'If you obey Allah, He will admit you to Paradise',
              },
            ],
          },
          {
            label: 'إِنْ with Past (Future Meaning)',
            arabic: 'إِنْ تَدْخُلُ عَلَى الْمَاضِي فَتَجْعَلُهُ مُسْتَقْبَلًا',
            romanized: 'in tadkhul ʿalā al-māḍī fa tajʿaluhu mustaqbalan',
            meaning:
              'When إِنْ attaches to a past-formed verb, it can yield a future/hypothetical sense (commonly in classical examples).',
            examples: [
              {
                ar: 'إِنْ نَصَرْتَنِي الْيَوْمَ نَصَرْتُكَ غَدًا',
                en: 'If you help me today, I will help you tomorrow',
              },
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
      payload: {
        paragraphs: [
          {
            titleEn: 'Divine Promise & Reward',
            lines: [
              'إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ وَ يُثْبِتْ أَقْدَامَكُمْ .',
              'إِنْ تُطِيعُوا اللَّهَ وَ رَسُولَهُ يُدْخِلْكُمْ الْجَنَّةَ وَ يُعْطِكُمْ أَجْرًا عَظِيمًا .',
              'إِنْ تُنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ تَجِدُوا أَجْرَهَا عِنْدَ اللَّهِ .',
            ],
            translationEn:
              'If you help Allah, He will help you and make your feet firm. If you obey Allah and His Messenger, He will admit you into Paradise and give you a great reward. If you spend your wealth in the path of Allah, you will find its reward with Allah.',
          },
          {
            titleEn: 'Warnings & Moral Lessons',
            lines: [
              'أَيُّهَا النَّاسُ ! إِنْ تَرَكْتُمُ الْقُرْآنَ وَ السُّنَّةَ خَسِرْتُمْ فِي دِينِكُمْ وَ دُنْيَاكُمْ .',
              'إِنْ يَقُمْ فَقِيرٌ بِبَابِكَ فَتَصَدَّقْ عَلَيْهِ .',
            ],
            translationEn:
              'O people! If you abandon the Quran and the Sunnah, you will lose in your religion and worldly life. If a poor person stands at your door, then give him charity.',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'grammar_rule',
      titleEn: 'Faa (ف) on the Answer of Condition',
      titleAr: 'الفاء على جواب الشرط',
      payload: {
        rules: [
          {
            label: 'When to attach ف',
            arabic:
              'تدخل الفاء على جواب الشرط في الحالات التالية: الأمر، النهي، الدعاء، والجملة الاسمية',
            romanized:
              'tadkhul al-fāʾ ʿalā jawāb al-sharṭ fī al-ḥālāt al-tāliyah: al-amr, al-nahy, al-duʿāʾ, wa al-jumla al-ismiyyah',
            meaning:
              'The particle ف attaches to the answer of the conditional when the answer is an imperative (command), prohibition, supplication, or a nominal sentence.',
            examples: [
              { ar: 'إِنْ جَاءَكَ ضَيْفٌ فَأَكْرِمْهُ', en: 'If a guest comes, then honor him' },
              {
                ar: 'إِنْ تُرِدِ الْآخِرَةَ فَلَا تَسْعَ وَرَاءَ الدُّنْيَا',
                en: 'If you want the Hereafter, then do not pursue the worldly life',
              },
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
      payload: {
        instruction: 'Form conditional sentences using إِنْ and apply Faa where appropriate.',
        items: [
          {
            emoji: '💡',
            ar: 'إِنْ تَجْتَهِدْ ← تَنْجَحْ',
            en: 'Example 1: No Faa (ف) needed because the answer is a present tense verb.',
          },
          {
            emoji: '💡',
            ar: 'إِنْ يَأْتِ الضَّيْفُ ← فَأَكْرِمْهُ',
            en: 'Example 2: Faa (ف) is required because the answer is a command (imperative).',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'assessment',
      titleEn: 'Assessment: Conditionals',
      titleAr: 'التقييم: الجمل الشرطية',
      payload: {
        instruction: 'Answer the short assessment tasks below.',
        questions: [
          {
            emoji: '❓',
            question_ar: 'أَيُّ جُمْلَةٍ تَعْنِي: If you spend, you will find your reward؟',
            question_en: 'Which sentence means: If you spend, you will find your reward?',
            correct_ar: 'إِنْ تُنْفِقْ تَجِدْ أَجْرَكَ',
            correct_en: 'If you spend, you will find your reward',
            options_ar: [
              'إِنْ تُنْفِقْ تَجِدْ أَجْرَكَ',
              'إِنْ تَنْصُرْ تَجِدْ أَجْرَكَ',
              'إِنْ تَصْبِرْ تَجِدْ أَجْرَكَ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🔎',
            question_ar: 'مَاذَا تَفْعَلُ (إِنْ) عِنْدَمَا تَدْخُلُ عَلَى فِعْلٍ مَاضٍ؟',
            question_en: 'What does إِنْ do when it enters a past tense verb?',
            correct_ar: 'تَجْعَلُهُ مُسْتَقْبَلًا',
            correct_en: 'It makes it give a future meaning',
            options_ar: ['تَجْعَلُهُ مُسْتَقْبَلًا', 'تَجْعَلُهُ مَرْفُوعًا', 'لَا تُغَيِّرُهُ'],
            questionType: 'general',
          },
          {
            emoji: '✍️',
            question_ar: 'أَيُّ جُمْلَةٍ شَرْطِيَّةٍ جَوَابُهَا (أَمْر)؟',
            question_en: 'Which conditional sentence has a command (imperative) as its answer?',
            correct_ar: 'إِنْ جَاءَكَ ضَيْفٌ فَأَكْرِمْهُ',
            correct_en: 'If a guest comes, honor him',
            options_ar: [
              'إِنْ جَاءَكَ ضَيْفٌ فَأَكْرِمْهُ',
              'إِنْ تَجْتَهِدْ تَنْجَحْ',
              'إِنْ تُنْفِقْ تَجِدْ أَجْرَكَ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '7',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أسئلة الفهم',
      payload: {
        instruction: 'Answer these questions in Arabic based on the lesson texts.',
        questions: [
          {
            emoji: '✅',
            question_ar: 'هَلْ يَغَيِّرُ إِنْ مَعَ الْمَاضِي مَعْنَاهُ؟',
            question_en: 'Does إِنْ change meaning when attached to a past form?',
            correct_ar: 'نَعَمْ ، أَحْيَانًا يُحَوِّلُهُ إِلَى مَعْنًى مُسْتَقْبَلِيًّا',
            correct_en: 'Yes - sometimes it gives a future/hypothetical meaning.',
            options_ar: [
              'نَعَمْ ، أَحْيَانًا يُحَوِّلُهُ إِلَى مَعْنًى مُسْتَقْبَلِيًّا',
              'لَا ، لَا يُغَيِّرُ الْمَعْنَى',
              'دَائِمًا يُحَوِّلُهُ إِلَى أَمْرٍ',
            ],
            questionType: 'general',
          },
          {
            emoji: '📘',
            question_ar: 'مَا ثَمَرَةُ مَثَلِ الْمُنْفِقِ؟',
            question_en: 'What is the fruit of the example of spending for Allah?',
            correct_ar: 'يَنْبُتُ سَبْعَ سُنَبُلٍ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ',
            correct_en: 'It sprouts seven ears, each with a hundred grains.',
            options_ar: [
              'يَنْبُتُ سَبْعَ سُنَبُلٍ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ',
              'يَنْبُتُ سُنْبُلَةً وَاحِدَةً فَقَطْ',
              'لَا يَنْبُتُ شَيْئًا',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

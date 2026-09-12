import type { LessonData } from '../../curriculum';

export const lesson09: LessonData = {
  darsNumber: 9,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Active Participle (Ism Al-Fael) - Doer of Action',
      titleAr: 'اِسْمُ الفَاعِلِ - صِيغَة دالَّة عَلَى الفَاعِل',
      payload: {
        rules: [
          {
            label: 'Definition & Gender/Number Agreement',
            arabic: 'اِسْمُ الفَاعِلِ اسْمٌ يَدُلُّ عَلَى مَن قَامَ بِالفِعْل',
            romanized: 'Ism al-Fael ism yadull ala man qama bil-fil',
            meaning:
              'The Active Participle (Ism Al-Fael) is a derived noun indicating "the one who does the action." It must agree with the noun it modifies in gender and number.',
            examples: [
              {
                ar: 'نَاصِرٌ - نَاصِرَانِ - نَاصِرُونَ (masculine)',
                en: 'Helper (singular) - Two helpers (dual) - Helpers (plural)',
              },
            ],
          },
          {
            label: 'Active Participle as Haal (State/Condition)',
            arabic: 'إِذَا نُصِبَ اِسْمُ الفَاعِلِ كَانَ حَالًا',
            romanized: 'Idha nusiba ism al-Fael kana halan',
            meaning:
              'When an Active Participle is placed in the accusative case (with Fathatain ending), it becomes a state adjective (Haal), describing the condition of the subject while performing the action.',
            examples: [
              {
                ar: 'اِشْرَبْ جَالِسًا',
                en: 'Drink sitting',
              },
            ],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Active Participles',
      titleAr: 'مُفْرَدَات اِسْمُ الفَاعِلِ',
      payload: {
        words: [
          { id: 1, ar: 'نَاصِرٌ', romanized: 'nasir', en: 'Helper', emoji: '💪' },
          { id: 2, ar: 'ضَارِبٌ', romanized: 'darib', en: 'Striker', emoji: '✊' },
          { id: 3, ar: 'قَاتِلٌ', romanized: 'qatil', en: 'Killer', emoji: '⚔️' },
          { id: 4, ar: 'شَارِبٌ', romanized: 'sharib', en: 'Drinker', emoji: '🥤' },
          { id: 5, ar: 'سَامِعٌ', romanized: 'sami', en: 'Listener', emoji: '👂' },
          { id: 6, ar: 'حَافِظٌ', romanized: 'hafiz', en: 'Memorizer', emoji: '📖' },
          { id: 7, ar: 'عَابِدٌ', romanized: 'abid', en: 'Worshipper', emoji: '🙏' },
          { id: 8, ar: 'مُعَلِّمٌ', romanized: 'muallim', en: 'Teacher', emoji: '📚' },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Active Participles in Context',
      titleAr: 'اِسْمُ الفَاعِلِ فِي السِّيَاق',
      payload: {
        paragraphs: [
          {
            titleEn: 'Gender and Number Agreement Patterns',
            lines: [
              'أَنَا نَصَرْتُ خَالِدًا - أَنَا نَاصِرٌ',
              'نَصَرَ خَالِدٌ وَ أَخُوهُ بِلَالًا - هُمَا نَاصِرَانِ',
              'نَصَرَنِي أَصْدِقَائِي - أَصْدِقَائِي نَاصِرُونَ',
              'نَصَرَتْ فَاطِمَةُ عَائِشَةَ - فَاطِمَةُ نَاصِرَةٌ',
            ],
            translationEn:
              'I helped Khalid - I am a helper. Khalid and his brother helped Bilal - They are two helpers. My friends helped me - My friends are helpers. Fatima helped Aisha - Fatima is a helper.',
          },
          {
            titleEn: 'Usage with Adverbial State (Haal)',
            lines: [
              'اِشْرَبْ جَالِسًا وَ لَا تَشْرَبْ قَائِمًا',
              'تَكَلَّمَ صَدِيقُ مَاجِدٍ رَافِعًا صَوْتَهُ',
              'خَرَجَ الرَّجُلُ فِي المَطَرِ نَاشِرًا مِظَلَّتَهُ',
              'مَات تَائِبًا إِلَى اللهِ',
            ],
            translationEn:
              "Drink sitting and do not drink standing. Majid's friend spoke raising his voice. The man went out in the rain spreading his umbrella. He died repenting to Allah.",
          },
        ],
      },
    },
    {
      id: '4',
      type: 'application',
      titleEn: 'Forming Active Participles',
      titleAr: 'تَكْوِينُ أَسْمَاءِ الفَاعِلِ',
      payload: {
        instruction:
          'Form the active participle for each verb in masculine singular, dual, and plural:',
        items: [
          {
            emoji: '✌️',
            ar: 'النَّصْرُ: نَاصِرٌ - نَاصِرَانِ - نَاصِرُونَ',
            en: 'Helping: Helper - Two helpers - Helpers',
          },
          {
            emoji: '✊',
            ar: 'الضَّرْبُ: ضَارِبٌ - ضَارِبَانِ - ضَارِبُونَ',
            en: 'Striking: Striker - Two strikers - Strikers',
          },
          {
            emoji: '⚔️',
            ar: 'القَتْلُ: قَاتِلٌ - قَاتِلَانِ - قَاتِلُونَ',
            en: 'Killing: Killer - Two killers - Killers',
          },
          {
            emoji: '🥤',
            ar: 'الشُّرْبُ: شَارِبٌ - شَارِبَانِ - شَارِبُونَ',
            en: 'Drinking: Drinker - Two drinkers - Drinkers',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'assessment',
      titleEn: 'Assessment: Active Participles & Agreement',
      titleAr: 'تَقْيِيمٌ: اِسْمُ الفَاعِلِ وَ المُطَابَقَة',
      payload: {
        instruction: 'Read and identify active participles in the following sentences:',
        questions: [
          {
            emoji: '👥',
            question_ar: 'مَنْ هُمْ نَاصِرُونَ؟',
            question_en: 'Who are they that help?',
            correct_ar: 'الأَصْدِقَاءُ الصَّالِحُونَ نَاصِرُونَ',
            correct_en: 'The righteous friends are helpers',
            options_ar: [
              'الأَصْدِقَاءُ الصَّالِحُونَ نَاصِرُونَ',
              'الأَصْدِقَاءُ يَنْصُرُونَ',
              'الأَصْدِقَاءُ انْتَصَرُوا',
            ],
            questionType: 'hal',
          },
          {
            emoji: '🧎',
            question_ar: 'كَيْفَ تَشْرَبُ الْمَاءَ؟',
            question_en: 'How do you drink water?',
            correct_ar: 'أَشْرَبُ جَالِسًا',
            correct_en: 'I drink sitting',
            options_ar: ['أَشْرَبُ جَالِسًا', 'أَشْرَبُ قَائِمًا', 'أَشْرَبُ نَائِمًا'],
            questionType: 'hal',
          },
          {
            emoji: '🗣️',
            question_ar: 'عَنْ أَيِّ اسْمِ فَاعِلٍ تَتَكَلَّمُ؟',
            question_en: 'Which active participle are you speaking about?',
            correct_ar: 'الْمُعَلِّمُ يُعَلِّمُ الطُّلَّابَ',
            correct_en: 'The teacher teaches students',
            options_ar: [
              'الْمُعَلِّمُ يُعَلِّمُ الطُّلَّابَ',
              'الْيُعَلِّمُ يُعَلِّمُ الطُّلَّابَ',
              'يُعَلِّمُ الطُّلَّابَ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'q_and_a',
      titleEn: 'Q & A: Active Participles',
      titleAr: 'الأسئلة والإجابات',
      payload: {
        instruction: 'Answer the questions based on active participle patterns.',
        questions: [
          {
            emoji: '💪',
            question_ar: 'مَا هُوَ تَعْرِيفُ اسْمِ الْفَاعِلِ؟',
            question_en: 'What is the definition of an active participle?',
            correct_ar: 'اِسْمٌ يَدُلُّ عَلَى مَنْ قَامَ بِالفِعْلِ',
            correct_en: 'A noun that indicates who performs the action',
            options_ar: [
              'اِسْمٌ يَدُلُّ عَلَى الفِعْلِ',
              'اِسْمٌ يَدُلُّ عَلَى مَنْ قَامَ بِالفِعْلِ',
              'فِعْلٌ مَاضٍ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🔤',
            question_ar:
              'مَا هِيَ صِيغَةُ اسْمِ الْفَاعِلِ مِنَ الْفِعْلِ الثُّلَاثِيِّ الْمُجَرَّدِ؟',
            question_en: 'What is the pattern of active participles from Form I verbs?',
            correct_ar: 'فَاعِلٌ لِلْمُذَكَّرِ وَفَاعِلَةٌ لِلْمُؤَنَّثِ',
            correct_en: 'فَاعِلٌ for masculine, فَاعِلَةٌ for feminine',
            options_ar: [
              'مُفْعِلٌ لِلْمُذَكَّرِ',
              'فَاعِلٌ لِلْمُذَكَّرِ وَفَاعِلَةٌ لِلْمُؤَنَّثِ',
              'مُفَاعِلٌ لِلْمُذَكَّرِ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🎯',
            question_ar:
              'كَيْفَ نَصُوغُ اسْمَ الْفَاعِلِ مِنْ مَصْدَرِ الشُّرْبِ لِجَمْعِ الْمُؤَنَّثِ؟',
            question_en: 'How do we form the feminine plural active participle for drinking?',
            correct_ar: 'شَارِبَاتٌ',
            correct_en: 'شَارِبَاتٌ',
            options_ar: ['شَرِبَاتٌ', 'شَارِبَاتٌ', 'شُرْبَاتٌ'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

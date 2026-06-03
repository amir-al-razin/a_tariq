import type { LessonData } from '../../curriculum';

export const lesson09: LessonData = {
  darsNumber: 9,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Active Participle (Ism Al-Fael) — Doer of Action',
      titleAr: 'اِسْمُ الفَاعِلِ — صِيغَة دالَّة عَلَى الفَاعِل',
      titleBn: 'সক্রিয় কর্তৃপদ — কর্ম সম্পাদনকারী',
      payload: {
        rules: [
          {
            label: 'Definition & Gender/Number Agreement',
            labelBn: 'সংজ্ঞা ও লিঙ্গ/সংখ্যা সম্মতি',
            arabic: 'اِسْمُ الفَاعِلِ اسْمٌ يَدُلُّ عَلَى مَن قَامَ بِالفِعْل',
            romanized: 'Ism al-Fael ism yadull ala man qama bil-fil',
            meaning:
              'The Active Participle (Ism Al-Fael) is a derived noun indicating "the one who does the action." It must agree with the noun it modifies in gender and number.',
            meaningBn:
              'সক্রিয় কর্তৃপদ একটি উদ্ভূত বিশেষ্য যা "যে ব্যক্তি কর্ম করে" নির্দেশ করে। এটি যে বিশেষ্যকে পরিবর্তন করে তার সাথে লিঙ্গ এবং সংখ্যায় মিলতে হয়।',
            examples: [
              {
                ar: 'نَاصِرٌ - نَاصِرَانِ - نَاصِرُونَ (masculine)',
                en: 'Helper (singular) - Two helpers (dual) - Helpers (plural)',
                bn: 'সাহায্যকারী - দুই সাহায্যকারী - সাহায্যকারীরা',
              },
            ],
          },
          {
            label: 'Active Participle as Haal (State/Condition)',
            labelBn: 'সক্রিয় কর্তৃপদ হাল হিসাবে',
            arabic: 'إِذَا نُصِبَ اِسْمُ الفَاعِلِ كَانَ حَالًا',
            romanized: 'Idha nusiba ism al-Fael kana halan',
            meaning:
              'When an Active Participle is placed in the accusative case (with Fathatain ending), it becomes a state adjective (Haal), describing the condition of the subject while performing the action.',
            meaningBn:
              'যখন সক্রিয় কর্তৃপদ অভিযোগী ক্ষেত্রে স্থাপন করা হয়, এটি একটি অবস্থা বিশেষণ হয়ে ওঠে যা ক্রিয়া সম্পাদনের সময় বিষয়ের অবস্থা বর্ণনা করে।',
            examples: [
              {
                ar: 'اِشْرَبْ جَالِسًا',
                en: 'Drink sitting',
                bn: 'বসে পান করো',
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
      titleBn: 'সক্রিয় কর্তৃপদ শব্দভান্ডার',
      payload: {
        words: [
          { id: 1, ar: 'نَاصِرٌ', romanized: 'nasir', en: 'Helper', bn: 'সাহায্যকারী', emoji: '💪' },
          { id: 2, ar: 'ضَارِبٌ', romanized: 'darib', en: 'Striker', bn: 'আঘাতকারী', emoji: '✊' },
          { id: 3, ar: 'قَاتِلٌ', romanized: 'qatil', en: 'Killer', bn: 'হত্যাকারী', emoji: '⚔️' },
          { id: 4, ar: 'شَارِبٌ', romanized: 'sharib', en: 'Drinker', bn: 'পানকারী', emoji: '🥤' },
          { id: 5, ar: 'سَامِعٌ', romanized: 'sami', en: 'Listener', bn: 'শ্রোতা', emoji: '👂' },
          { id: 6, ar: 'حَافِظٌ', romanized: 'hafiz', en: 'Memorizer', bn: 'মুখস্তকারী', emoji: '📖' },
          { id: 7, ar: 'عَابِدٌ', romanized: 'abid', en: 'Worshipper', bn: 'উপাসক', emoji: '🙏' },
          { id: 8, ar: 'مُعَلِّمٌ', romanized: 'muallim', en: 'Teacher', bn: 'শিক্ষক', emoji: '📚' },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Active Participles in Context',
      titleAr: 'اِسْمُ الفَاعِلِ فِي السِّيَاق',
      titleBn: 'প্রসঙ্গে সক্রিয় কর্তৃপদ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Gender and Number Agreement Patterns',
            titleBn: 'লিঙ্গ এবং সংখ্যা সম্মতি প্যাটার্ন',
            lines: [
              'أَنَا نَصَرْتُ خَالِدًا - أَنَا نَاصِرٌ',
              'نَصَرَ خَالِدٌ وَ أَخُوهُ بِلَالًا - هُمَا نَاصِرَانِ',
              'نَصَرَنِي أَصْدِقَائِي - أَصْدِقَائِي نَاصِرُونَ',
              'نَصَرَتْ فَاطِمَةُ عَائِشَةَ - فَاطِمَةُ نَاصِرَةٌ',
            ],
            translationEn:
              'I helped Khalid - I am a helper. Khalid and his brother helped Bilal - They are two helpers. My friends helped me - My friends are helpers. Fatima helped Aisha - Fatima is a helper.',
            translationBn:
              'আমি খালিদকে সাহায্য করেছি - আমি একজন সাহায্যকারী। খালিদ এবং তার ভাই বিলালকে সাহায্য করেছেন - তারা দুই সাহায্যকারী। আমার বন্ধুরা আমাকে সাহায্য করেছেন - আমার বন্ধুরা সাহায্যকারী। ফাতিমা আয়েশাকে সাহায্য করেছেন - ফাতিমা একজন সাহায্যকারী।',
          },
          {
            titleEn: 'Usage with Adverbial State (Haal)',
            titleBn: 'ক্রিয়া বিশেষণ অবস্থার সাথে ব্যবহার',
            lines: [
              'اِشْرَبْ جَالِسًا وَ لَا تَشْرَبْ قَائِمًا',
              'تَكَلَّمَ صَدِيقُ مَاجِدٍ رَافِعًا صَوْتَهُ',
              'خَرَجَ الرَّجُلُ فِي المَطَرِ نَاشِرًا مِظَلَّتَهُ',
              'مَات تَائِبًا إِلَى اللهِ',
            ],
            translationEn:
              'Drink sitting and do not drink standing. Majid\'s friend spoke raising his voice. The man went out in the rain spreading his umbrella. He died repenting to Allah.',
            translationBn:
              'বসে পান করো এবং দাঁড়িয়ে পান করবে না। মাজিদের বন্ধু তার কণ্ঠ উঁচু করে কথা বলেছেন। পুরুষ বৃষ্টিতে তার ছাতা ছড়িয়ে বেরিয়ে গেছেন। তিনি আল্লাহর কাছে অনুতাপ করে মারা গেছেন।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'application',
      titleEn: 'Forming Active Participles',
      titleAr: 'تَكْوِينُ أَسْمَاءِ الفَاعِلِ',
      titleBn: 'সক্রিয় কর্তৃপদ গঠন',
      payload: {
        instruction: 'Form the active participle for each verb in masculine singular, dual, and plural:',
        items: [
          { emoji: '✌️', ar: 'النَّصْرُ: نَاصِرٌ - نَاصِرَانِ - نَاصِرُونَ', en: 'Helping: Helper - Two helpers - Helpers', bn: 'সাহায্য করা: সাহায্যকারী - দুই সাহায্যকারী - সাহায্যকারীরা' },
          { emoji: '✊', ar: 'الضَّرْبُ: ضَارِبٌ - ضَارِبَانِ - ضَارِبُونَ', en: 'Striking: Striker - Two strikers - Strikers', bn: 'আঘাত করা: আঘাতকারী - দুই আঘাতকারী - আঘাতকারীরা' },
          { emoji: '⚔️', ar: 'القَتْلُ: قَاتِلٌ - قَاتِلَانِ - قَاتِلُونَ', en: 'Killing: Killer - Two killers - Killers', bn: 'হত্যা করা: হত্যাকারী - দুই হত্যাকারী - হত্যাকারীরা' },
          { emoji: '🥤', ar: 'الشُّرْبُ: شَارِبٌ - شَارِبَانِ - شَارِبُونَ', en: 'Drinking: Drinker - Two drinkers - Drinkers', bn: 'পান করা: পানকারী - দুই পানকারী - পানকারীরা' }
        ]
      },
    },
    {
      id: '5',
      type: 'assessment',
      titleEn: 'Assessment: Active Participles & Agreement',
      titleAr: 'تَقْيِيمٌ: اِسْمُ الفَاعِلِ وَ المُطَابَقَة',
      titleBn: 'মূল্যায়ন: সক্রিয় কর্তৃপদ এবং সম্মতি',
      payload: {
        instruction: 'Read and identify active participles in the following sentences:',
        questions: [
          {
            emoji: '👥',
            question_ar: 'مَنْ هُمْ نَاصِرُونَ؟',
            question_en: 'Who are they that help?',
            question_bn: 'যারা সাহায্য করে তারা কারা?',
            correct_ar: 'الأَصْدِقَاءُ الصَّالِحُونَ نَاصِرُونَ',
            correct_en: 'The righteous friends are helpers',
            correct_bn: 'সৎ বন্ধুরা সাহায্যকারী',
            options_ar: ['الأَصْدِقَاءُ الصَّالِحُونَ نَاصِرُونَ', 'الأَصْدِقَاءُ يَنْصُرُونَ', 'الأَصْدِقَاءُ انْتَصَرُوا'],
            questionType: 'hal',
          },
          {
            emoji: '🧎',
            question_ar: 'كَيْفَ تَشْرَبُ الْمَاءَ؟',
            question_en: 'How do you drink water?',
            question_bn: 'আপনি কীভাবে পানি পান করেন?',
            correct_ar: 'أَشْرَبُ جَالِسًا',
            correct_en: 'I drink sitting',
            correct_bn: 'আমি বসে পান করি',
            options_ar: ['أَشْرَبُ جَالِسًا', 'أَشْرَبُ قَائِمًا', 'أَشْرَبُ نَائِمًا'],
            questionType: 'hal',
          },
          {
            emoji: '🗣️',
            question_ar: 'عَنْ أَيِّ اسْمِ فَاعِلٍ تَتَكَلَّمُ؟',
            question_en: 'Which active participle are you speaking about?',
            question_bn: 'আপনি কোন সক্রিয় কর্তৃপদ সম্পর্কে কথা বলছেন?',
            correct_ar: 'الْمُعَلِّمُ يُعَلِّمُ الطُّلَّابَ',
            correct_en: 'The teacher teaches students',
            correct_bn: 'শিক্ষক ছাত্রদের শেখান',
            options_ar: ['الْمُعَلِّمُ يُعَلِّمُ الطُّلَّابَ', 'الْيُعَلِّمُ يُعَلِّمُ الطُّلَّابَ', 'يُعَلِّمُ الطُّلَّابَ'],
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
      titleBn: 'প্রশ্ন এবং উত্তর',
      payload: {
        instruction: 'Answer the questions based on active participle patterns.',
        instructionBn: 'সক্রিয় কর্তৃপদ প্যাটার্নের উপর ভিত্তি করে প্রশ্নের উত্তর দিন।',
        questions: [
          {
            emoji: '💪',
            question_ar: 'مَا هُوَ تَعْرِيفُ اسْمِ الْفَاعِلِ؟',
            question_en: 'What is the definition of an active participle?',
            question_bn: 'সক্রিয় কর্তৃপদের সংজ্ঞা কী?',
            correct_ar: 'اِسْمٌ يَدُلُّ عَلَى مَنْ قَامَ بِالفِعْلِ',
            correct_en: 'A noun that indicates who performs the action',
            correct_bn: 'একটি বিশেষ্য যা কর্মকর্তা নির্দেশ করে',
            options_ar: ['اِسْمٌ يَدُلُّ عَلَى الفِعْلِ', 'اِسْمٌ يَدُلُّ عَلَى مَنْ قَامَ بِالفِعْلِ', 'فِعْلٌ مَاضٍ'],
            questionType: 'general',
          },
          {
            emoji: '🔤',
            question_ar: 'مَا هِيَ صِيغَةُ اسْمِ الْفَاعِلِ مِنَ الْفِعْلِ الثُّلَاثِيِّ الْمُجَرَّدِ؟',
            question_en: 'What is the pattern of active participles from Form I verbs?',
            question_bn: 'ফর্ম I ক্রিয়া থেকে সক্রিয় কর্তৃপদের প্যাটার্ন কী?',
            correct_ar: 'فَاعِلٌ لِلْمُذَكَّرِ وَفَاعِلَةٌ لِلْمُؤَنَّثِ',
            correct_en: 'فَاعِلٌ for masculine, فَاعِلَةٌ for feminine',
            correct_bn: 'পুংলিঙ্গে فَاعِلٌ, স্ত্রীলিঙ্গে فَاعِلَةٌ',
            options_ar: ['مُفْعِلٌ لِلْمُذَكَّرِ', 'فَاعِلٌ لِلْمُذَكَّرِ وَفَاعِلَةٌ لِلْمُؤَنَّثِ', 'مُفَاعِلٌ لِلْمُذَكَّرِ'],
            questionType: 'general',
          },
          {
            emoji: '🎯',
            question_ar: 'كَيْفَ نَصُوغُ اسْمَ الْفَاعِلِ مِنْ مَصْدَرِ الشُّرْبِ لِجَمْعِ الْمُؤَنَّثِ؟',
            question_en: 'How do we form the feminine plural active participle for drinking?',
            question_bn: 'আমরা পান করা থেকে স্ত্রীলিঙ্গ বহুবচন সক্রিয় কর্তৃপদ কীভাবে গঠন করি?',
            correct_ar: 'شَارِبَاتٌ',
            correct_en: 'شَارِبَاتٌ',
            correct_bn: 'শারিবাত',
            options_ar: ['شَرِبَاتٌ', 'شَارِبَاتٌ', 'شُرْبَاتٌ'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};

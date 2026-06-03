import type { LessonData } from '../../curriculum';

export const lesson08: LessonData = {
  darsNumber: 8,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary (Ism Fa\'il Derivations)',
      titleAr: 'المُفْرَدَاتُ (اسْمُ الْفَاعِلِ)',
      titleBn: 'শব্দভান্ডার (ইসম ফায়িল)',
      payload: {
        words: [
          { id: 1, ar: 'سَامِعٌ', romanized: 'sāmiʿ', en: 'Listener / Hearer', bn: 'শ্রোতা', emoji: '👂' },
          { id: 2, ar: 'نَاصِحٌ', romanized: 'nāṣiḥ', en: 'Advisor', bn: 'উপদেষ্টা', emoji: '🗣️' },
          { id: 3, ar: 'خَائِفٌ', romanized: 'khāʾif', en: 'Fearful person', bn: 'ভীত ব্যক্তি', emoji: '😨' },
          { id: 4, ar: 'دَاعٍ', romanized: 'dāʿin', en: 'Caller / Inviter', bn: 'আহ্বানকারী', emoji: '📢' },
          { id: 5, ar: 'رَاضٍ', romanized: 'rāḍin', en: 'Pleased / Satisfied person', bn: 'সন্তুষ্ট ব্যক্তি', emoji: '😊' },
          { id: 6, ar: 'مُرْسِلٌ', romanized: 'mursil', en: 'Sender', bn: 'প্রেরক', emoji: '📤' },
          { id: 7, ar: 'مُعْطٍ', romanized: 'muʿṭin', en: 'Giver', bn: 'দাতা', emoji: '🤲' },
          { id: 8, ar: 'مُعَلِّمٌ', romanized: 'muʿallim', en: 'Teacher', bn: 'শিক্ষক', emoji: '👨‍🏫' },
          { id: 9, ar: 'مُصَلٍّ', romanized: 'muṣallin', en: 'Praying person', bn: 'সালাত আদায়কারী', emoji: '🕌' },
          { id: 10, ar: 'مُشْتَرٍ', romanized: 'mushtarin', en: 'Buyer', bn: 'ক্রেতা', emoji: '🛒' },
        ],
      },
    },
    {
      id: '2',
      type: 'masdar_factory',
      titleEn: 'Masdar Factory: Active Participles',
      titleAr: 'مَصْنَع المَصْدَر: أَسْمَاءُ الْفَاعِلِينَ',
      titleBn: 'মাসদার ফ্যাক্টরি: ইসম ফায়িল',
      payload: {
        masdarRows: [
          {
            masdar: 'السَّمْع',
            masdarEn: 'Hearing (Form I)',
            masdarBn: 'শোনা',
            past: 'سَمِعَ',
            present: 'يَسْمَعُ',
            imperative: 'سَامِعٌ',
            prohibitive: 'سَامِعُونَ',
          },
          {
            masdar: 'الدَّعْوَة',
            masdarEn: 'Calling (Form I Naqis)',
            masdarBn: 'ডাকা',
            past: 'دَعَا',
            present: 'يَدْعُو',
            imperative: 'دَاعٍ',
            prohibitive: 'دَاعُونَ',
          },
          {
            masdar: 'الإِرْسَال',
            masdarEn: 'Sending (Form IV)',
            masdarBn: 'পাঠানো',
            past: 'أَرْسَلَ',
            present: 'يُرْسِلُ',
            imperative: 'مُرْسِلٌ',
            prohibitive: 'مُرْسِلُونَ',
          },
          {
            masdar: 'التَّعْلِيم',
            masdarEn: 'Teaching (Form II)',
            masdarBn: 'শেখানো',
            past: 'عَلَّمَ',
            present: 'يُعَلِّمُ',
            imperative: 'مُعَلِّمٌ',
            prohibitive: 'مُعَلِّمُونَ',
          },
          {
            masdar: 'الِاشْتِرَاء',
            masdarEn: 'Buying (Form VIII Naqis)',
            masdarBn: 'কেনা',
            past: 'اشْتَرَى',
            present: 'يَشْتَرِي',
            imperative: 'مُشْتَرٍ',
            prohibitive: 'مُشْتَرُونَ',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'grammar_rule',
      titleEn: 'The Circumstantial Qualifier (Al-Haal)',
      titleAr: 'قَاعِدَةٌ: الْحَال',
      titleBn: 'নিয়ম: অবস্থা নির্দেশক (হাল)',
      payload: {
        rules: [
          {
            label: 'Haal as a Single Word (Mufrad)',
            labelBn: 'একক শব্দ হিসেবে হাল',
            arabic: 'قَرَأَ رَاشِدٌ جَالِسًا',
            romanized: 'qaraʾa rāshidun jālisān',
            meaning: 'It describes the condition of the subject or object. It is usually derived from the Active Participle and is always in the accusative state (Mansub).',
            meaningBn: 'এটি কর্তা বা কর্মের অবস্থা বর্ণনা করে। এটি সাধারণত ইসম ফায়িল থেকে আসে এবং সর্বদা নসব অবস্থায় থাকে।',
            examples: [
              { ar: 'قَرَأَ رَاشِدٌ جَالِسًا', en: 'Rashid read sitting', bn: 'রাশেদ বসে বসে পড়ল' },
              { ar: 'قَرَأَتِ الْبَنَاتُ جَالِسَاتٍ', en: 'The girls read sitting (Kasrah in Mansub)', bn: 'মেয়েরা বসে বসে পড়ল' },
            ],
          },
          {
            label: 'Haal as a Nominal Sentence (Waw Al-Haal)',
            labelBn: 'নামবাচক বাক্য হিসেবে হাল (ওয়াও আল-হাল)',
            arabic: 'قَرَأَ رَاشِدٌ وَهُوَ جَالِسٌ',
            romanized: 'qaraʾa rāshidun wa-huwa jālisun',
            meaning: 'The Haal can be an entire sentence attached using the "Waw of Haal" meaning "while".',
            meaningBn: 'হাল একটি পূর্ণ বাক্য হতে পারে যা "ওয়াও আল-হাল" দ্বারা যুক্ত থাকে, যার অর্থ "যখন"।',
            examples: [
              { ar: 'قَرَأَ رَاشِدٌ وَهُوَ جَالِسٌ', en: 'Rashid read while he was sitting', bn: 'রাশেদ পড়ল যখন সে বসে ছিল' },
              { ar: 'رَأَيْتُكَ فِي الْمَسْجِدِ وَأَنْتَ تُصَلِّي', en: 'I saw you in the mosque while you were praying', bn: 'আমি তোমাকে মসজিদে দেখলাম যখন তুমি সালাত পড়ছিলে' },
            ],
          },
        ],
      },
    },
    {
      id: '4',
      type: 'application',
      titleEn: 'Application: Haal Forms',
      titleAr: 'تَطْبِيقُ الْحَالِ',
      titleBn: 'প্রয়োগ: হাল এর রূপ',
      payload: {
        instruction: 'Observe the use of the single-word Haal:',
        instructionBn: 'একক শব্দ হিসেবে হাল এর ব্যবহার লক্ষ্য করো:',
        items: [
          { ar: 'قَضَى حَيَاتَهُ مُجَاهِدًا فِي سَبِيلِ اللهِ', en: 'He spent his life struggling in the path of Allah', bn: 'সে আল্লাহর পথে সংগ্রাম করে তার জীবন কাটিয়েছে', emoji: '⚔️' },
          { ar: 'خَرَجَ الْوَلَدُ مِنَ الْبَيْتِ مُسَلِّمًا عَلَى أَبِيهِ', en: 'The boy left the house greeting his father', bn: 'ছেলেটি তার বাবাকে সালাম দিয়ে ঘর থেকে বের হলো', emoji: '👋' },
          { ar: 'رَأَيْتُكَ فِي الْمَسْجِدِ مُصَلِّيًا', en: 'I saw you in the mosque praying', bn: 'আমি তোমাকে মসজিদে সালাত পড়া অবস্থায় দেখেছি', emoji: '🕌' },
          { ar: 'قَرَأَ الْأَوْلَادُ جَالِسِينَ', en: 'The boys read sitting', bn: 'ছেলেরা বসে বসে পড়ল', emoji: '📖' },
        ],
      },
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Questions on Haal',
      titleAr: 'أَسْئِلَةٌ حَوْلَ الْحَالِ',
      titleBn: 'হাল সম্পর্কিত প্রশ্ন',
      payload: {
        instruction: 'Understand the grammatical state of the Haal.',
        instructionBn: 'হাল এর ব্যাকরণগত অবস্থা বোঝো।',
        questions: [
          {
            emoji: '❓',
            question_ar: 'لِمَاذَا كَلِمَةُ (جَالِسَاتٍ) مَكْسُورَةٌ فِي (قَرَأَتِ الْبَنَاتُ جَالِسَاتٍ) ؟',
            question_en: 'Why does the word جَالِسَات change to جَالِسَاتٍ (with Kasrah)?',
            question_bn: 'جَالِسَات শব্দটি কেন جَالِسَاتٍ (কাসরাহ সহ) হলো?',
            correct_ar: 'لِأَنَّهَا جَمْعُ مُؤَنَّثٍ سَالِمٌ وَهِيَ فِي حَالَةِ النَّصْبِ',
            correct_en: 'Because it is a sound feminine plural in the accusative state (Haal)',
            correct_bn: 'কারণ এটি নসব অবস্থায় থাকা একটি সুস্থ স্ত্রীলিঙ্গ বহুবচন (হাল)',
            options_ar: ['لِأَنَّهَا جَمْعُ مُؤَنَّثٍ سَالِمٌ وَهِيَ فِي حَالَةِ النَّصْبِ', 'لِأَنَّهَا مَجْرُورَةٌ بِحَرْفِ جَرٍّ', 'لِأَنَّهَا فَاعِلٌ'],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'assessment',
      titleEn: 'Assessment: Rewrite the Sentences',
      titleAr: 'اِخْتِبَارٌ: إِعَادَةُ كِتَابَةِ الْجُمَلِ',
      titleBn: 'মূল্যায়ন: বাক্যগুলো পুনরায় লেখো',
      payload: {
        instruction: 'Rewrite the Haal using a nominal sentence (Waw Al-Haal):',
        instructionBn: 'নামবাচক বাক্য (ওয়াও আল-হাল) ব্যবহার করে হাল পুনরায় লিখুন:',
        questions: [
          {
            emoji: '📝',
            question_ar: 'خَرَجَ الرِّجَالُ مِنَ الْمَسْجِدِ مُبْتَسِمِينَ -> خَرَجَ الرِّجَالُ مِنَ الْمَسْجِدِ _______',
            question_en: 'The men left the mosque smiling -> The men left the mosque _______',
            question_bn: 'লোকেরা হাসিমুখে মসজিদ থেকে বের হলো -> লোকেরা মসজিদ থেকে বের হলো _______',
            correct_ar: 'وَهُمْ مُبْتَسِمُونَ',
            correct_en: 'while they were smiling',
            correct_bn: 'যখন তারা হাসছিল',
            options_ar: ['وَهُمْ مُبْتَسِمُونَ', 'وَهُمْ مُبْتَسِمِينَ', 'وَهُوَ مُبْتَسِمٌ'],
            questionType: 'general'
          },
          {
            emoji: '📝',
            question_ar: 'رَأَيْتُ الطَّالِبَاتِ مُشْتَرِيَاتٍ كُتُبًا -> رَأَيْتُ الطَّالِبَاتِ _______',
            question_en: 'I saw the female students buying books -> I saw the female students _______',
            question_bn: 'আমি ছাত্রীদের বই কিনতে দেখলাম -> আমি ছাত্রীদের দেখলাম _______',
            correct_ar: 'وَهُنَّ مُشْتَرِيَاتٌ',
            correct_en: 'while they were buying',
            correct_bn: 'যখন তারা কিনছিল',
            options_ar: ['وَهُنَّ مُشْتَرِيَاتٌ', 'وَهُنَّ مُشْتَرِيَاتٍ', 'وَهُمْ مُشْتَرُونَ'],
            questionType: 'general'
          }
        ]
      },
    },
  ],
};
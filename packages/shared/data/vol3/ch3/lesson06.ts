import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
  darsNumber: 6,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Forms Infi\'aal and Tafaa\'ul',
      titleAr: 'الْمُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার: ইনফিআ\'ল ও তাফাউল ফর্ম',
      payload: {
        words: [
          { id: 1, ar: 'الاِنْفِتَاح', romanized: 'al-infitāḥ', en: 'Opening / getting opened', bn: 'খোলা / খুলে যাওয়া', emoji: '🚪' },
          { id: 2, ar: 'الاِنْكِسَار', romanized: 'al-inkisār', en: 'Breaking / getting broken', bn: 'ভাঙা / ভেঙে যাওয়া', emoji: '💥' },
          { id: 3, ar: 'الاِنْهِدَام', romanized: 'al-inhidām', en: 'Collapsing / getting destroyed', bn: 'ধসে পড়া / ধ্বংস হওয়া', emoji: '🏚️' },
          { id: 4, ar: 'الاِنْكِشَاف', romanized: 'al-inkishāf', en: 'Revealing / getting uncovered', bn: 'প্রকাশিত হওয়া / উন্মোচিত হওয়া', emoji: '🔍' },
          { id: 5, ar: 'التَّمَارُض', romanized: 'at-tamāruḍ', en: 'Feigning sickness', bn: 'অসুস্থতার ভান করা', emoji: '🤒' },
          { id: 6, ar: 'التَّنَاوُم', romanized: 'at-tanāwum', en: 'Feigning sleep', bn: 'ঘুমের ভান করা', emoji: '😴' },
          { id: 7, ar: 'التَّشَاوُر', romanized: 'at-tashāwur', en: 'Mutual consultation', bn: 'পারস্পরিক পরামর্শ', emoji: '💬' },
          { id: 8, ar: 'التَّقَاتُل', romanized: 'at-taqātul', en: 'Mutual fighting', bn: 'পারস্পরিক লড়াই', emoji: '⚔️' },
          { id: 9, ar: 'التَّحَادُث', romanized: 'at-taḥāduth', en: 'Mutual conversation', bn: 'পারস্পরিক কথোপকথন', emoji: '🗣️' },
          { id: 10, ar: 'التَّعَارُف', romanized: 'at-taʿāruf', en: 'Mutual acquaintance', bn: 'পারস্পরিক পরিচিতি', emoji: '🤝' },
          { id: 11, ar: 'مُخْطِئٌ', romanized: 'mukhṭiʾun', en: 'Mistaken / Wrong', bn: 'ভুল / ভ্রান্ত', emoji: '❌' }
        ]
      }
    },
    {
      id: '2',
      type: 'grammar_rule',
      titleEn: 'Baab Al-Infi\'aal and Baab At-Tafaa\'ul',
      titleAr: 'بَابُ الاِنْفِعَالِ وَبَابُ التَّفَاعُلِ',
      titleBn: 'বাবে ইনফিআ\'ল এবং বাবে তাফাউল',
      payload: {
        rules: [
          {
            label: 'Bab Al-Infi\'aal (Consequence)',
            labelBn: 'বাবে ইনফিআ\'ল (ফলাফল)',
            arabic: 'بَابُ الاِنْفِعَالِ',
            romanized: 'bābu al-infiʿāli',
            meaning: 'This pattern conveys the passive or intransitive consequence of an action (state change).',
            meaningBn: 'এই প্যাটার্নটি কোনো কাজের পরোক্ষ বা অকর্মক ফলাফল (অবস্থার পরিবর্তন) বোঝায়।',
            examples: [
              { ar: 'فَتَحْتُ الْبَابَ -> اِنْفَتَحَ الْبَابُ', en: 'I opened the door -> The door opened', bn: 'আমি দরজাটি খুললাম -> দরজাটি খুলে গেল' },
              { ar: 'كَسَرَ الْوَلَدُ الزُّجَاجَ -> اِنْكَسَرَ الزُّجَاجُ', en: 'The boy broke the glass -> The glass broke', bn: 'ছেলেটি গ্লাসটি ভাঙল -> গ্লাসটি ভেঙে গেল' }
            ]
          },
          {
            label: 'Bab At-Tafaa\'ul (Feigning & Mutuality)',
            labelBn: 'বাবে তাফাউল (ভান করা ও পারস্পরিকতা)',
            arabic: 'بَابُ التَّفَاعُلِ',
            romanized: 'bābu at-tafāʿuli',
            meaning: 'Expresses pretending to do an action (feigning), or an action done reciprocally (mutually) which requires two or more subjects.',
            meaningBn: 'কোনো কাজ করার ভান করা, অথবা পারস্পরিকভাবে করা কোনো কাজ বোঝায় যার জন্য দুই বা ততোধিক কর্তা প্রয়োজন।',
            examples: [
              { ar: 'مَا مَرِضَ الرَّجُلُ بَلْ تَمَارَضَ', en: 'The man did not get sick, but he feigned sickness', bn: 'লোকটি অসুস্থ হয়নি, বরং সে অসুস্থতার ভান করেছে' },
              { ar: 'تَشَاوَرَ الرَّجُلَانِ', en: 'The two men consulted each other', bn: 'দুজন লোক একে অপরের সাথে পরামর্শ করল' }
            ]
          }
        ]
      }
    },
    {
      id: '3',
      type: 'verb_table',
      titleEn: 'Verb Forms Infi\'aal and Tafaa\'ul',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'ইনফিআ\'ল ও তাফাউল ক্রিয়ার রূপ',
      payload: {
        verbTense: 'past',
        sourceText: `
اِنْفَتَحَ - يَنْفَتِحُ - اِنْفَتِحْ - لَا تَنْفَتِحْ
اِنْكَسَرَ - يَنْكَسِرُ - اِنْكَسِرْ - لَا تَنْكَسِرْ
اِنْكَشَفَ - يَنْكَشِفُ - اِنْكَشِفْ - لَا تَنْكَشِفْ
تَنَاوَمَ - يَتَنَاوَمُ - تَنَاوَمْ - لَا تَتَنَاوَمْ
تَمَارَضَ - يَتَمَارَضُ - تَمَارَضْ - لَا تَتَمَارَضْ
تَشَاوَرَ - يَتَشَاوَرُ - تَشَاوَرْ - لَا تَتَشَاوَرْ
تَقَاتَلَ - يَتَقَاتَلُ - تَقَاتَلْ - لَا تَتَقَاتَلْ
`.trim()
      }
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Grammar Explanation',
      titleAr: 'شَرْحُ النَّحْوِ',
      titleBn: 'ব্যাকরণ ব্যাখ্যা',
      payload: {
        paragraphs: [
          {
            titleEn: 'Mutuality in Bab At-Tafaa\'ul',
            titleBn: 'বাবে তাফাউল এ পারস্পরিকতা',
            lines: [
              'إِنْ قُلْتَ : تَحَادَثَ الرَّجُلُ فَأَنْتَ مُخْطِئٌ، لِأَنَّ هَذَا الْفِعْلَ يَطْلُبُ فَاعِلَيْنِ أَوْ أَكْثَرَ .',
              'فَيَجِبُ أَنْ تَقُولَ : تَحَادَثَ الرَّجُلَانِ . أَرْجُو أَنَّكَ قَدْ فَهِمْتَ الْأَمْرَ فَهْمًا جَيِّدًا .'
            ],
            translationEn: 'If you say: "The man conversed (mutually)", you are wrong, because this verb requires two subjects or more. So you must say: "The two men conversed". I hope that you have understood the matter very well.',
            translationBn: 'যদি তুমি বলো: "লোকটি (পারস্পরিক) কথা বলল", তবে তুমি ভুল করছ, কারণ এই ক্রিয়াপদে দুই বা ততোধিক কর্তার প্রয়োজন হয়। তাই তোমাকে অবশ্যই বলতে হবে: "দুজন লোক কথা বলল"। আমি আশা করি তুমি বিষয়টি ভালোভাবে বুঝতে পেরেছ।'
          }
        ]
      }
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Questions and Answers',
      titleAr: 'أَسْئِلَةٌ وَأَجْوِبَةٌ',
      titleBn: 'প্রশ্ন ও উত্তর',
      payload: {
        instruction: 'Understand the rule of Mutuality.',
        instructionBn: 'পারস্পরিকতার নিয়মটি বুঝুন।',
        questions: [
          {
            emoji: '❓',
            question_ar: 'لِمَاذَا تَكُونُ جُمْلَةُ "تَحَادَثَ الرَّجُلُ" خَاطِئَةً؟',
            question_en: 'Why is the sentence "The man conversed (mutually)" wrong?',
            question_bn: 'বাক্যটি "লোকটি (পারস্পরিক) কথা বলল" কেন ভুল?',
            correct_ar: 'لِأَنَّ هَذَا الْفِعْلَ يَطْلُبُ فَاعِلَيْنِ أَوْ أَكْثَرَ.',
            correct_en: 'Because this verb requires two subjects or more.',
            correct_bn: 'কারণ এই ক্রিয়াপদে দুই বা ততোধিক কর্তার প্রয়োজন হয়।',
            options_ar: ['لِأَنَّ هَذَا الْفِعْلَ يَطْلُبُ فَاعِلَيْنِ أَوْ أَكْثَرَ.', 'لِأَنَّ الرَّجُلَ نَائِمٌ', 'لِأَنَّهُ فِعْلٌ مَاضٍ'],
            questionType: 'general'
          }
        ]
      }
    },
    {
      id: '6',
      type: 'assessment',
      titleEn: 'Exercise: Correct the sentence',
      titleAr: 'التَّمْرِينُ : صَحِّحِ الْجُمْلَةَ',
      titleBn: 'অনুশীলনী: বাক্যটি সঠিক করুন',
      payload: {
        instruction: 'Correct the sentence based on the rules of Bab At-Tafaa\'ul.',
        instructionBn: 'বাবে তাফাউল এর নিয়ম অনুযায়ী বাক্যটি সঠিক করুন।',
        questions: [
          {
            emoji: '✍️',
            question_ar: 'فَمَاذَا تَقُولُ عَنْ : تَعَارَفَ الْوَلَدُ ؟',
            question_en: 'How do you correct the sentence: "The boy got acquainted (mutually)"?',
            question_bn: '"ছেলেটি (পারস্পরিক) পরিচিত হলো" বাক্যটি কীভাবে সঠিক করবেন?',
            correct_ar: 'تَعَارَفَ الْوَلَدَانِ',
            correct_en: 'The two boys got acquainted.',
            correct_bn: 'দুটি ছেলে পরিচিত হলো।',
            options_ar: ['تَعَارَفَ الْوَلَدَانِ', 'يَتَعَارَفُ الْوَلَدُ', 'تَعَارَفَتِ الْبِنْتُ'],
            questionType: 'general'
          }
        ]
      }
    },
    {
      id: '7',
      type: 'masdar_factory',
      titleEn: 'Masdar Factory: Infi\'aal and Tafaa\'ul',
      titleAr: 'مَصْنَعُ الْمَصْدَرِ',
      titleBn: 'মাসদার ফ্যাক্টরি',
      payload: {
        instruction: 'Learn the masdars for the new verb forms.',
        instructionBn: 'নতুন ক্রিয়াপদের মাসদারগুলো শিখুন।',
        masdarRows: [
          {
            masdar: 'اِنْفِتَاح',
            masdarEn: 'Opening (Bab Infi\'aal)',
            masdarBn: 'খোলা (বাবে ইনফিআ\'ল)',
            past: 'اِنْفَتَحَ',
            present: 'يَنْفَتِحُ',
            imperative: 'اِنْفَتِحْ',
            prohibitive: 'لَا تَنْفَتِحْ',
            baab: 'Infi\'aal'
          },
          {
            masdar: 'تَمَارُض',
            masdarEn: 'Feigning sickness (Bab Tafaa\'ul)',
            masdarBn: 'অসুস্থতার ভান করা (বাবে তাফাউল)',
            past: 'تَمَارَضَ',
            present: 'يَتَمَارَضُ',
            imperative: 'تَمَارَضْ',
            prohibitive: 'لَا تَتَمَارَضْ',
            baab: 'Tafaa\'ul'
          }
        ]
      }
    }
  ]
};

import type { LessonData } from '../../curriculum';

export const lesson07: LessonData = {
  darsNumber: 7,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Introduction to Dual Verbs (أفعال التثنية)',
      titleAr: 'مقدمة في أفعال التثنية',
      titleBn: 'দ্বৈত ক্রিয়া পরিচিতি',
      payload: {
        rules: [
          {
            label: 'Dual verbs overview',
            labelBn: 'দ্বৈত ক্রিয়া সংক্ষিপ্ত পরিচিতি',
            arabic:
              'فِي الدُّرُوسِ الْمَاضِيَةِ قَدَّمْنَا الْفَرْدَ وَ الْجَمْعَ، وَالْآنَ نُقَدِّمُ أَفْعَالَ التَّثْنِيَةِ',
            romanized: "fī al-durūs al-māḍiyah qaddamnā al-fard wa al-jamʿ, wa al-ān nuqaddimu afʿāl al-tathnīyah",
            meaning:
              'Dual verbs form a separate conjugation pattern. They have distinctive past dual and present dual forms (e.g., ذَهَبَا, يَذْهَبَانِ) and parallel imperative/negative pairs.',
            meaningBn:
              'দ্বৈত ক্রিয়াগুলি একটি পৃথক সংকরণ প্যাটার্ন নিয়ে আসে। এদের আলাদা অতীত ও বর্তমান দ্বৈত ফর্ম আছে (যেমন: ذَهَبَا, يَذْهَبَانِ) এবং সামঞ্জস্যপূর্ণ أمر/نهی জোড়া থাকে।',
            examples: [
              { ar: 'ذَهَبَا (they two went) ↔ يَذْهَبَانِ (they two go)', en: 'Dual past ↔ Dual present', bn: 'দ্বৈত অতীত ↔ দ্বৈত বর্তমান' },
              { ar: 'اِذْهَبَا (go! dual) ↔ لَا تَذْهَبَا (do not go! dual)', en: 'Dual imperative / negative', bn: 'দ্বৈত আদেশ / নিবারণ' },
            ],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'masdar_factory',
      titleEn: 'Masdar Series (Verbal Nouns)',
      titleAr: 'سلاسل المصادر',
      titleBn: 'মাসদার সিরিজ',
      payload: {
        masdarRows: [
          { masdar: 'الْفَتْح', masdarEn: 'opening', masdarBn: 'উন্মোচন', past: 'فَتَحَ', present: 'يَفْتَحُ', imperative: 'افْتَحْ', prohibitive: 'لَا تَفْتَحْ', baab: 'I' },
          { masdar: 'النَّصْر', masdarEn: 'help/victory', masdarBn: 'জয়/সহায়তা', past: 'نَصَرَ', present: 'يَنصُرُ', imperative: 'انْصُرْ', prohibitive: 'لَا تَنْصُرْ', baab: 'I' },
          { masdar: 'الْجُلُوس', masdarEn: 'sitting', masdarBn: 'বসা', past: 'جَلَسَ', present: 'يَجْلِسُ', imperative: 'اِجْلِسْ', prohibitive: 'لَا تَجْلِسْ', baab: 'I' },
          { masdar: 'السَّمْع', masdarEn: 'hearing', masdarBn: 'শোনা', past: 'سَمِعَ', present: 'يَسْمَعُ', imperative: 'اسْمَعْ', prohibitive: 'لَا تَسْمَعْ', baab: 'I' },
          { masdar: 'الشُّرْب', masdarEn: 'drinking', masdarBn: 'পান করা', past: 'شَرِبَ', present: 'يَشْرَبُ', imperative: 'اشْرَبْ', prohibitive: 'لَا تَشْرَبْ', baab: 'I' },
          { masdar: 'الصِّدْق', masdarEn: 'truthfulness', masdarBn: 'সত্যতা', past: 'صَدَقَ', present: 'يَصْدُقُ', imperative: 'صَدِّقْ', prohibitive: 'لَا تَصْدُقْ', baab: 'I' },
        ],
      },
    },
    {
      id: '3',
      type: 'verb_table',
      titleEn: 'Regular Verbs — Measure I (فعل)',
      titleAr: 'الأفعال القياسية - الباب الأول',
      titleBn: 'নিয়মিত ক্রিয়া - ফর্ম I',
      payload: {
        verbTense: 'past',
        baabLabel: 'Measure I — Regular dual forms',
        verbTable: [
          { root: 'ذَهَبَ', meaning: 'to go', meaningBn: 'যাওয়া', he: 'ذَهَبَا', she: 'ذَهَبَتَا', youM: 'ذَهَبْتُمَا', youF: 'ذَهَبْتُمَا', i: 'ذَهَبْنَا' },
          { root: 'قَالَ', meaning: 'to say', meaningBn: 'কওয়া', he: 'قَالَا', she: 'قَالَتَا', youM: 'قُلْتُمَا', youF: 'قُلْتُمَا', i: 'قُلْنَا' },
          { root: 'صَامَ', meaning: 'to fast', meaningBn: 'রোজা রাখা', he: 'صَامَا', she: 'صَامَتَا', youM: 'صُمْتُمَا', youF: 'صُمْتُمَا', i: 'صُمْنَا' },
        ],
      },
    },
    {
      id: '4',
      type: 'verb_table',
      titleEn: 'Derived Verbs — Measures II, IV, V, VIII, X',
      titleAr: 'الأفعال المشتقة - الأبواب المختلفة',
      titleBn: 'উৎপন্ন ক্রিয়া - ফর্মগুলো',
      payload: {
        verbTense: 'past',
        baabLabel: 'Derived dual paradigms',
        verbTable: [
          { root: 'أَرْسَلَ', meaning: 'to send/honor', meaningBn: 'পাঠানো/সম্মান করা', he: 'أَرْسَلَا', she: 'أَرْسَلَتَا', youM: 'أَرْسَلْتُمَا', youF: 'أَرْسَلْتُمَا', i: 'أَرْسَلْنَا' },
          { root: 'عَلَّمَ', meaning: 'to teach', meaningBn: 'শিক্ষা দেওয়া', he: 'عَلَّمَا', she: 'عَلَّمَتَا', youM: 'عَلَّمْتُمَا', youF: 'عَلَّمْتُمَا', i: 'عَلَّمْنَا' },
          { root: 'تَعَلَّمَ', meaning: 'to learn (reflexive)', meaningBn: 'শিখা', he: 'تَعَلَّمَا', she: 'تَعَلَّمَتَا', youM: 'تَعَلَّمْتُمَا', youF: 'تَعَلَّمْتُمَا', i: 'تَعَلَّمْنَا' },
          { root: 'اِغْتَسَلَ', meaning: 'to wash', meaningBn: 'ধুয়া', he: 'اِغْتَسَلَا', she: 'اِغْتَسَلَتَا', youM: 'اِغْتَسَلْتُمَا', youF: 'اِغْتَسَلْتُمَا', i: 'اِغْتَسَلْنَا' },
        ],
      },
    },
    {
      id: '5',
      type: 'verb_table',
      titleEn: 'Hollow Verbs — Middle Vowel Changes',
      titleAr: 'الأجوف - تغيرات الحرف الأوسط',
      titleBn: 'অজওফ (হলো) — মধ্যবর্তী স্বর পরিবর্তন',
      payload: {
        verbTense: 'past',
        baabLabel: 'Hollow verbs dual patterns',
        verbTable: [
          { root: 'قَالَ', meaning: 'to say', meaningBn: 'কওয়া', he: 'قَالَا', she: 'قَالَتَا', youM: 'قُلْتُمَا', youF: 'قُلْتُمَا', i: 'قُلْنَا' },
          { root: 'صَامَ', meaning: 'to fast', meaningBn: 'রোজা রাখা', he: 'صَامَا', she: 'صَامَتَا', youM: 'صُمْتُمَا', youF: 'صُمْتُمَا', i: 'صُمْنَا' },
          { root: 'نَامَ', meaning: 'to sleep', meaningBn: 'ঘুমানো', he: 'نَامَا', she: 'نَامَتَا', youM: 'نِمْتُمَا', youF: 'نِمْتُمَا', i: 'نِمْنَا' },
        ],
      },
    },
    {
      id: '6',
      type: 'verb_table',
      titleEn: 'Defective Verbs — Ending Vowel Patterns',
      titleAr: 'النقص - تغيرات نهاية الحرف',
      titleBn: 'খুঁতিপূর্ণ ক্রিয়া — শেষ স্বরবর্ণ প্যাটার্ন',
      payload: {
        verbTense: 'past',
        baabLabel: 'Defective dual paradigms',
        verbTable: [
          { root: 'دَعَا', meaning: 'to call/invoke', meaningBn: 'ডাকা/প্রার্থনা করা', he: 'دَعَوَا', she: 'دَعَتَا', youM: 'دَعَوْتُمَا', youF: 'دَعَوْتُمَا', i: 'دَعَوْنَا' },
          { root: 'نَسِيَ', meaning: 'to forget', meaningBn: 'ভুলে যাওয়া', he: 'نَسِيَا', she: 'نَسِيَتَا', youM: 'نَسِيتُمَا', youF: 'نَسِيتُمَا', i: 'نَسِينَا' },
        ],
      },
    },
    {
      id: '7',
      type: 'verb_table',
      titleEn: 'Subjunctive & Jussive Dual Forms (لَنْ / لَمْ)',
      titleAr: 'أشكال المثبت والنفي مع لن ولم',
      titleBn: 'জ়নিত ও জাসিম ফর্ম (لَنْ / لَمْ)',
      payload: {
        verbTense: 'present',
        baabLabel: 'Dual with particles',
        verbTable: [
          { root: 'يَفْعَلُ', meaning: 'to do', meaningBn: 'করা', he: 'لَنْ يَفْعَلَا', she: 'لَنْ تَفْعَلَا', youM: 'لَنْ تَفْعَلَا', youF: 'لَنْ تَفْعَلَا', i: 'لَنْ نَفْعَلَ' },
          { root: 'يَقُولُ', meaning: 'to say', meaningBn: 'কওয়া', he: 'لَمْ يَقُولَا', she: 'لَمْ تَقُولَا', youM: 'لَمْ تَقُولَا', youF: 'لَمْ تَقُولَا', i: 'لَمْ نَقُولْ' },
          { root: 'يَشْتَرِي', meaning: 'to buy', meaningBn: 'কেনা', he: 'لَنْ يَشْتَرِيَا', she: 'لَنْ تَشْتَرِيَا', youM: 'لَنْ تَشْتَرِيَا', youF: 'لَنْ تَشْتَرِيَا', i: 'لَنْ نَشْتَرِي' },
        ],
      },
    },
  ],
};

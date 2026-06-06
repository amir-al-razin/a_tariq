import type { LessonData } from '../../curriculum';

export const lesson07: LessonData = {
  darsNumber: 7,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Dual Verbs Introduction',
      titleAr: 'مُقَدِّمَةُ أَفْعَالِ التَّثْنِيَةِ',
      titleBn: 'দ্বিবচন ক্রিয়ার পরিচিতি',
      payload: {
        rules: [
          {
            label: 'Verbs of the Dual',
            labelBn: 'দ্বিবচনের ক্রিয়া',
            arabic: 'نَسِيَا / نَسِيَتَا',
            romanized: 'nasiyā / nasiyatā',
            meaning: 'In the past lessons, we presented to you the verbs of singular and plural, and now we present the verbs of the dual. The masculine dual past ends in Alif, and the feminine adds Ta before the Alif.',
            meaningBn: 'আগের পাঠগুলোতে আমরা একবচন ও বহুবচনের ক্রিয়া নিয়ে আলোচনা করেছি, এখন আমরা দ্বিবচনের ক্রিয়া নিয়ে আলোচনা করব। পুংলিঙ্গ দ্বিবচন অতীতের শেষে আলিফ হয়, এবং স্ত্রীলিঙ্গের ক্ষেত্রে আলিফের আগে তা (ت) যুক্ত হয়।',
            examples: [
              { ar: 'نَسِيَا', en: 'They two men forgot', bn: 'তারা দুজন লোক ভুলে গেল' },
              { ar: 'نَسِيَتَا', en: 'They two women forgot', bn: 'তারা দুজন নারী ভুলে গেল' }
            ]
          }
        ]
      }
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Verb Roots',
      titleAr: 'الْمُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার: ক্রিয়ামূল',
      payload: {
        words: [
          { id: 1, ar: 'أَرْسَلَ', romanized: 'arsala', en: 'To send', bn: 'পাঠানো', emoji: '📤' },
          { id: 2, ar: 'أَكْرَمَ', romanized: 'akrama', en: 'To honor', bn: 'সম্মান করা', emoji: '🥇' },
          { id: 3, ar: 'أَنْفَقَ', romanized: 'anfaqa', en: 'To spend', bn: 'ব্যয় করা', emoji: '💸' },
          { id: 4, ar: 'تَوَكَّلَ', romanized: 'tawakkala', en: 'To rely / trust', bn: 'ভরসা করা', emoji: '🤲' },
          { id: 5, ar: 'تَصَدَّقَ', romanized: 'taṣaddaqa', en: 'To give charity', bn: 'দান করা', emoji: '🪙' },
          { id: 6, ar: 'اِغْتَسَلَ', romanized: 'ightasala', en: 'To bathe / wash', bn: 'গোসল করা / ধোয়া', emoji: '🚿' },
          { id: 7, ar: 'اِبْتَسَمَ', romanized: 'ibtasama', en: 'To smile', bn: 'হাসা / মুচকি হাসা', emoji: '🙂' },
          { id: 8, ar: 'اِسْتَيْقَظَ', romanized: 'istayqaẓa', en: 'To wake up', bn: 'জেগে ওঠা', emoji: '⏰' },
          { id: 9, ar: 'اِسْتَعَانَ', romanized: 'istaʿāna', en: 'To seek help', bn: 'সাহায্য চাওয়া', emoji: '🆘' },
          { id: 10, ar: 'زَكَّى', romanized: 'zakkā', en: 'To purify', bn: 'পবিত্র করা', emoji: '✨' }
        ]
      }
    },
    {
      id: '3',
      type: 'verb_table',
      titleEn: 'Form I - Past Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'ফর্ম ১ - অতীত দ্বিবচন',
      payload: {
        verbTense: 'past',
        isDual: true,
        verbTable: [
          { root: 'ذَهَبَ', meaning: 'To go', theyM: 'ذَهَبَا', theyF: 'ذَهَبَتَا', youPluralM: 'ذَهَبْتُمَا', youPluralF: 'ذَهَبْتُمَا', we: 'ذَهَبْنَا' }
        ]
      }
    },
    {
      id: '4',
      type: 'verb_table',
      titleEn: 'Form I - Present Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'ফর্ম ১ - বর্তমান দ্বিবচন',
      payload: {
        verbTense: 'present',
        isDual: true,
        verbTable: [
          { root: 'يَذْهَبُ', meaning: 'To go', theyM: 'يَذْهَبَانِ', theyF: 'تَذْهَبَانِ', youPluralM: 'تَذْهَبَانِ', youPluralF: 'تَذْهَبَانِ', we: 'نَذْهَبُ' }
        ]
      }
    },
    {
      id: '5',
      type: 'verb_table',
      titleEn: 'Form IV - Past Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'ফর্ম ৪ - অতীত দ্বিবচন',
      payload: {
        verbTense: 'past',
        isDual: true,
        verbTable: [
          { root: 'أَرْسَلَ', meaning: 'To send', theyM: 'أَرْسَلَا', theyF: 'أَرْسَلَتَا', youPluralM: 'أَرْسَلْتُمَا', youPluralF: 'أَرْسَلْتُمَا', we: 'أَرْسَلْنَا' }
        ]
      }
    },
    {
      id: '6',
      type: 'verb_table',
      titleEn: 'Form IV - Present Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'ফর্ম ৪ - বর্তমান দ্বিবচন',
      payload: {
        verbTense: 'present',
        isDual: true,
        verbTable: [
          { root: 'يُرْسِلُ', meaning: 'To send', theyM: 'يُرْسِلَانِ', theyF: 'تُرْسِلَانِ', youPluralM: 'تُرْسِلَانِ', youPluralF: 'تُرْسِلَانِ', we: 'نُرْسِلُ' }
        ]
      }
    },
    {
      id: '7',
      type: 'masdar_factory',
      titleEn: 'Derived Forms - Dual Verbs',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'উদ্ভূত ফর্ম - দ্বিবচন ক্রিয়া',
      payload: {
        masdarRows: [
          { masdar: 'أَكْرَمَا', masdarEn: 'To honor (Dual)', past: 'أَكْرَمَا', present: 'يُكْرِمَانِ', imperative: 'أَكْرِمَا', prohibitive: 'لَا تُكْرِمَا' },
          { masdar: 'أَنْفَقَا', masdarEn: 'To spend (Dual)', past: 'أَنْفَقَا', present: 'يُنْفِقَانِ', imperative: 'أَنْفِقَا', prohibitive: 'لَا تُنْفِقَا' },
          { masdar: 'عَلَّمَا', masdarEn: 'To teach (Dual)', past: 'عَلَّمَا', present: 'يُعَلِّمَانِ', imperative: 'عَلِّمَا', prohibitive: 'لَا تُعَلِّمَا' },
          { masdar: 'نَظَّفَا', masdarEn: 'To clean (Dual)', past: 'نَظَّفَا', present: 'يُنَظِّفَانِ', imperative: 'نَظِّفَا', prohibitive: 'لَا تُنَظِّفَا' },
          { masdar: 'تَعَلَّمَا', masdarEn: 'To learn (Dual)', past: 'تَعَلَّمَا', present: 'يَتَعَلَّمَانِ', imperative: 'تَعَلَّمَا', prohibitive: 'لَا تَتَعَلَّمَا' },
          { masdar: 'تَوَكَّلَا', masdarEn: 'To rely (Dual)', past: 'تَوَكَّلَا', present: 'يَتَوَكَّلَانِ', imperative: 'تَوَكَّلَا', prohibitive: 'لَا تَتَوَكَّلَا' },
          { masdar: 'تَصَدَّقَا', masdarEn: 'To give charity (Dual)', past: 'تَصَدَّقَا', present: 'يَتَصَدَّقَانِ', imperative: 'تَصَدَّقَا', prohibitive: 'لَا تَتَصَدَّقَا' },
          { masdar: 'اِغْتَسَلَا', masdarEn: 'To bathe (Dual)', past: 'اِغْتَسَلَا', present: 'يَغْتَسِلَانِ', imperative: 'اِغْتَسِلَا', prohibitive: 'لَا تَغْتَسِلَا' },
          { masdar: 'اِبْتَسَمَا', masdarEn: 'To smile (Dual)', past: 'اِبْتَسَمَا', present: 'يَبْتَسِمَانِ', imperative: 'اِبْتَسِمَا', prohibitive: 'لَا تَبْتَسِمَا' },
          { masdar: 'اِسْتَعْمَلَا', masdarEn: 'To use (Dual)', past: 'اِسْتَعْمَلَا', present: 'يَسْتَعْمِلَانِ', imperative: 'اِسْتَعْمِلَا', prohibitive: 'لَا تَسْتَعْمِلَا' },
          { masdar: 'اِسْتَيْقَظَا', masdarEn: 'To wake up (Dual)', past: 'اِسْتَيْقَظَا', present: 'يَسْتَيْقِظَانِ', imperative: 'اِسْتَيْقِظَا', prohibitive: 'لَا تَسْتَيْقِظَا' },
          { masdar: 'سَافَرَا', masdarEn: 'To travel (Dual)', past: 'سَافَرَا', present: 'يُسَافِرَانِ', imperative: 'سَافِرَا', prohibitive: 'لَا تُسَافِرَا' },
          { masdar: 'سَاعَدَا', masdarEn: 'To help (Dual)', past: 'سَاعَدَا', present: 'يُسَاعِدَانِ', imperative: 'سَاعِدَا', prohibitive: 'لَا تُسَاعِدَا' },
          { masdar: 'قَاتَلَا', masdarEn: 'To fight (Dual)', past: 'قَاتَلَا', present: 'يُقَاتِلَانِ', imperative: 'قَاتِلَا', prohibitive: 'لَا تُقَاتِلَا' }
        ]
      }
    },
    {
      id: '8',
      type: 'verb_table',
      titleEn: 'Ajwaf (Hollow) - Past Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'ফাঁপা - অতীত দ্বিবচন',
      payload: {
        verbTense: 'past',
        isDual: true,
        verbTable: [
          { root: 'قَالَ', meaning: 'To say', theyM: 'قَالَا', theyF: 'قَالَتَا', youPluralM: 'قُلْتُمَا', youPluralF: 'قُلْتُمَا', we: 'قُلْنَا' }
        ]
      }
    },
    {
      id: '9',
      type: 'verb_table',
      titleEn: 'Ajwaf (Hollow) - Present Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'ফাঁপা - বর্তমান দ্বিবচন',
      payload: {
        verbTense: 'present',
        isDual: true,
        verbTable: [
          { root: 'يَقُولُ', meaning: 'To say', theyM: 'يَقُولَانِ', theyF: 'تَقُولَانِ', youPluralM: 'تَقُولَانِ', youPluralF: 'تَقُولَانِ', we: 'نَقُولُ' }
        ]
      }
    },
    {
      id: '10',
      type: 'masdar_factory',
      titleEn: 'Ajwaf - Other Verbs Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'ফাঁপা - অন্যান্য দ্বিবচন',
      payload: {
        masdarRows: [
          { masdar: 'صَامَا', masdarEn: 'To fast (Dual)', past: 'صَامَا', present: 'يَصُومَانِ', imperative: 'صُومَا', prohibitive: 'لَا تَصُومَا' },
          { masdar: 'بَاعَا', masdarEn: 'To sell (Dual)', past: 'بَاعَا', present: 'يَبِيعَانِ', imperative: 'بِيعَا', prohibitive: 'لَا تَبِيعَا' },
          { masdar: 'صَادَا', masdarEn: 'To hunt (Dual)', past: 'صَادَا', present: 'يَصِيدَانِ', imperative: 'صِيدَا', prohibitive: 'لَا تَصِيدَا' },
          { masdar: 'نَامَا', masdarEn: 'To sleep (Dual)', past: 'نَامَا', present: 'يَنَامَانِ', imperative: 'نَامَا', prohibitive: 'لَا تَنَامَا' },
          { masdar: 'أَجَابَا', masdarEn: 'To answer (Dual)', past: 'أَجَابَا', present: 'يُجِيبَانِ', imperative: 'أَجِيبَا', prohibitive: 'لَا تُجِيبَا' },
          { masdar: 'أَطَاعَا', masdarEn: 'To obey (Dual)', past: 'أَطَاعَا', present: 'يُطِيعَانِ', imperative: 'أَطِيعَا', prohibitive: 'لَا تُطِيعَا' },
          { masdar: 'اِسْتَرَاحَا', masdarEn: 'To rest (Dual)', past: 'اِسْتَرَاحَا', present: 'يَسْتَرِيحَانِ', imperative: 'اِسْتَرِيحَا', prohibitive: 'لَا تَسْتَرِيحَا' },
          { masdar: 'اِسْتَقَامَا', masdarEn: 'To be upright (Dual)', past: 'اِسْتَقَامَا', present: 'يَسْتَقِيمَانِ', imperative: 'اِسْتَقِيمَا', prohibitive: 'لَا تَسْتَقِيمَا' },
          { masdar: 'اِسْتَعَانَا', masdarEn: 'To seek help (Dual)', past: 'اِسْتَعَانَا', present: 'يَسْتَعِينَانِ', imperative: 'اِسْتَعِينَا', prohibitive: 'لَا تَسْتَعِينَا' }
        ]
      }
    },
    {
      id: '11',
      type: 'verb_table',
      titleEn: 'Naqis (Defective) - Past Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'দুর্বল - অতীত দ্বিবচন',
      payload: {
        verbTense: 'past',
        isDual: true,
        verbTable: [
          { root: 'دَعَا', meaning: 'To call', theyM: 'دَعَوَا', theyF: 'دَعَتَا', youPluralM: 'دَعَوْتُمَا', youPluralF: 'دَعَوْتُمَا', we: 'دَعَوْنَا' },
          { root: 'أَلْقَى', meaning: 'To throw', theyM: 'أَلْقَيَا', theyF: 'أَلْقَتَا', youPluralM: 'أَلْقَيْتُمَا', youPluralF: 'أَلْقَيْتُمَا', we: 'أَلْقَيْنَا' },
          { root: 'صَلَّى', meaning: 'To pray', theyM: 'صَلَّيَا', theyF: 'صَلَّتَا', youPluralM: 'صَلَّيْتُمَا', youPluralF: 'صَلَّيْتُمَا', we: 'صَلَّيْنَا' },
          { root: 'اِشْتَرَى', meaning: 'To buy', theyM: 'اِشْتَرَيَا', theyF: 'اِشْتَرَتَا', youPluralM: 'اِشْتَرَيْتُمَا', youPluralF: 'اِشْتَرَيْتُمَا', we: 'اِشْتَرَيْنَا' }
        ]
      }
    },
    {
      id: '12',
      type: 'verb_table',
      titleEn: 'Naqis (Defective) - Present Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'দুর্বল - বর্তমান দ্বিবচন',
      payload: {
        verbTense: 'present',
        isDual: true,
        verbTable: [
          { root: 'يَدْعُو', meaning: 'To call', theyM: 'يَدْعُوَانِ', theyF: 'تَدْعُوَانِ', youPluralM: 'تَدْعُوَانِ', youPluralF: 'تَدْعُوَانِ', we: 'نَدْعُو' },
          { root: 'يُلْقِي', meaning: 'To throw', theyM: 'يُلْقِيَانِ', theyF: 'تُلْقِيَانِ', youPluralM: 'تُلْقِيَانِ', youPluralF: 'تُلْقِيَانِ', we: 'نُلْقِي' },
          { root: 'يُصَلِّي', meaning: 'To pray', theyM: 'يُصَلِّيَانِ', theyF: 'تُصَلِّيَانِ', youPluralM: 'تُصَلِّيَانِ', youPluralF: 'تُصَلِّيَانِ', we: 'نُصَلِّي' },
          { root: 'يَشْتَرِي', meaning: 'To buy', theyM: 'يَشْتَرِيَانِ', theyF: 'تَشْتَرِيَانِ', youPluralM: 'تَشْتَرِيَانِ', youPluralF: 'تَشْتَرِيَانِ', we: 'نَشْتَرِي' }
        ]
      }
    },
    {
      id: '13',
      type: 'masdar_factory',
      titleEn: 'Naqis - Other Verbs Dual',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'দুর্বল - অন্যান্য দ্বিবচন',
      payload: {
        masdarRows: [
          { masdar: 'تَلَوَا', masdarEn: 'To recite (Dual)', past: 'تَلَوَا', present: 'يَتْلُوَانِ', imperative: 'اُتْلُوَا', prohibitive: 'لَا تَتْلُوَا' },
          { masdar: 'بَكَيَا', masdarEn: 'To cry (Dual)', past: 'بَكَيَا', present: 'يَبْكِيَانِ', imperative: 'اِبْكِيَا', prohibitive: 'لَا تَبْكِيَا' },
          { masdar: 'سَقَيَا', masdarEn: 'To give drink (Dual)', past: 'سَقَيَا', present: 'يَسْقِيَانِ', imperative: 'اِسْقِيَا', prohibitive: 'لَا تَسْقِيَا' },
          { masdar: 'رَمَيَا', masdarEn: 'To throw (Dual)', past: 'رَمَيَا', present: 'يَرْمِيَانِ', imperative: 'اِرْمِيَا', prohibitive: 'لَا تَرْمِيَا' },
          { masdar: 'نَسِيَا', masdarEn: 'To forget (Dual)', past: 'نَسِيَا', present: 'يَنْسَيَانِ', imperative: 'اِنْسَيَا', prohibitive: 'لَا تَنْسَيَا' },
          { masdar: 'رَضِيَا', masdarEn: 'To be pleased (Dual)', past: 'رَضِيَا', present: 'يَرْضَيَانِ', imperative: 'اِرْضَيَا', prohibitive: 'لَا تَرْضَيَا' },
          { masdar: 'نَهَيَا', masdarEn: 'To forbid (Dual)', past: 'نَهَيَا', present: 'يَنْهَيَانِ', imperative: 'اِنْهَيَا', prohibitive: 'لَا تَنْهَيَا' },
          { masdar: 'سَعَيَا', masdarEn: 'To strive (Dual)', past: 'سَعَيَا', present: 'يَسْعَيَانِ', imperative: 'اِسْعَيَا', prohibitive: 'لَا تَسْعَيَا' },
          { masdar: 'أَخْفَيَا', masdarEn: 'To hide (Dual)', past: 'أَخْفَيَا', present: 'يُخْفِيَانِ', imperative: 'أَخْفِيَا', prohibitive: 'لَا تُخْفِيَا' },
          { masdar: 'أَبْكَيَا', masdarEn: 'To make cry (Dual)', past: 'أَبْكَيَا', present: 'يُبْكِيَانِ', imperative: 'أَبْكِيَا', prohibitive: 'لَا تُبْكِيَا' },
          { masdar: 'زَكَّيَا', masdarEn: 'To purify (Dual)', past: 'زَكَّيَا', present: 'يُزَكِّيَانِ', imperative: 'زَكِّيَا', prohibitive: 'لَا تُزَكِّيَا' },
          { masdar: 'رَبَّيَا', masdarEn: 'To raise (Dual)', past: 'رَبَّيَا', present: 'يُرَبِّيَانِ', imperative: 'رَبِّيَا', prohibitive: 'لَا تُرَبِّيَا' }
        ]
      }
    },
    {
      id: '14',
      type: 'verb_table',
      titleEn: 'Subjunctive Dual Verbs (with لَنْ)',
      titleAr: 'سِلْسِلَةُ الْأَفْعَالِ',
      titleBn: 'লান (لَنْ) সহ নসব অবস্থায় দ্বিবচন ক্রিয়া',
      payload: {
        verbTense: 'present',
        isDual: true,
        verbTable: [
          { root: 'لَنْ يَفْعَلَ', meaning: 'Will not do', theyM: 'لَنْ يَفْعَلَا', theyF: 'لَنْ تَفْعَلَا', youPluralM: 'لَنْ تَفْعَلَا', youPluralF: 'لَنْ تَفْعَلَا', we: 'لَنْ نَفْعَلَ' },
          { root: 'لَنْ يَقُولَ', meaning: 'Will not say', theyM: 'لَنْ يَقُولَا', theyF: 'لَنْ تَقُولَا', youPluralM: 'لَنْ تَقُولَا', youPluralF: 'لَنْ تَقُولَا', we: 'لَنْ نَقُولَ' },
          { root: 'لَنْ يَبِيعَ', meaning: 'Will not sell', theyM: 'لَنْ يَبِيعَا', theyF: 'لَنْ تَبِيعَا', youPluralM: 'لَنْ تَبِيعَا', youPluralF: 'لَنْ تَبِيعَا', we: 'لَنْ نَبِيعَ' },
          { root: 'لَنْ يَدْعُوَ', meaning: 'Will not call', theyM: 'لَنْ يَدْعُوَا', theyF: 'لَنْ تَدْعُوَا', youPluralM: 'لَنْ تَدْعُوَا', youPluralF: 'لَنْ تَدْعُوَا', we: 'لَنْ نَدْعُوَ' },
          { root: 'لَنْ يَنْسَى', meaning: 'Will not forget', theyM: 'لَنْ يَنْسَيَا', theyF: 'لَنْ تَنْسَيَا', youPluralM: 'لَنْ تَنْسَيَا', youPluralF: 'لَنْ تَنْسَيَا', we: 'لَنْ نَنْسَى' },
          { root: 'لَنْ يُلْقِيَ', meaning: 'Will not throw', theyM: 'لَنْ يُلْقِيَا', theyF: 'لَنْ تُلْقِيَا', youPluralM: 'لَنْ تُلْقِيَا', youPluralF: 'لَنْ تُلْقِيَا', we: 'لَنْ نُلْقِيَ' },
          { root: 'لَنْ يُصَلِّيَ', meaning: 'Will not pray', theyM: 'لَنْ يُصَلِّيَا', theyF: 'لَنْ تُصَلِّيَا', youPluralM: 'لَنْ تُصَلِّيَا', youPluralF: 'لَنْ تُصَلِّيَا', we: 'لَنْ نُصَلِّيَ' },
          { root: 'لَنْ يَشْتَرِيَ', meaning: 'Will not buy', theyM: 'لَنْ يَشْتَرِيَا', theyF: 'لَنْ تَشْتَرِيَا', youPluralM: 'لَنْ تَشْتَرِيَا', youPluralF: 'لَنْ تَشْتَرِيَا', we: 'لَنْ نَشْتَرِيَ' }
        ]
      }
    },
    {
      id: '15',
      type: 'masdar_factory',
      titleEn: 'Masdar Practice',
      titleAr: 'مَصْنَعُ الْمَصْدَرِ',
      titleBn: 'মাসদার অনুশীলন',
      payload: {
        instruction: 'Memorize the verb chains from the following Masdars.',
        instructionBn: 'নিচের মাসদারগুলো থেকে ক্রিয়ার রূপগুলো মুখস্থ করুন।',
        masdarRows: [
          { masdar: 'الفَتْح', masdarEn: 'To open', masdarBn: 'খোলা', past: 'فَتَحَ', present: 'يَفْتَحُ', imperative: 'اِفْتَحْ', prohibitive: 'لَا تَفْتَحْ' },
          { masdar: 'النَّصْر', masdarEn: 'To help', masdarBn: 'সাহায্য করা', past: 'نَصَرَ', present: 'يَنْصُرُ', imperative: 'اُنْصُرْ', prohibitive: 'لَا تَنْصُرْ' },
          { masdar: 'الجُلُوس', masdarEn: 'To sit', masdarBn: 'বসা', past: 'جَلَسَ', present: 'يَجْلِسُ', imperative: 'اِجْلِسْ', prohibitive: 'لَا تَجْلِسْ' },
          { masdar: 'السَّمْع', masdarEn: 'To hear', masdarBn: 'শোনা', past: 'سَمِعَ', present: 'يَسْمَعُ', imperative: 'اِسْمَعْ', prohibitive: 'لَا تَسْمَعْ' },
          { masdar: 'الشُّرْب', masdarEn: 'To drink', masdarBn: 'পান করা', past: 'شَرِبَ', present: 'يَشْرَبُ', imperative: 'اِشْرَبْ', prohibitive: 'لَا تَشْرَبْ' },
          { masdar: 'الصِّدْق', masdarEn: 'To speak truth', masdarBn: 'সত্য বলা', past: 'صَدَقَ', present: 'يَصْدُقُ', imperative: 'اُصْدُقْ', prohibitive: 'لَا تَصْدُقْ' }
        ]
      }
    }
  ]
};

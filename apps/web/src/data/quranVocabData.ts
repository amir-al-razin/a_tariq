export interface QuranVocabItem {
  id: string
  ar: string
  arClean: string
  romanized: string
  en: string
  bn?: string
  root?: string
  category: 'noun' | 'verb' | 'pronoun' | 'particle' | 'adjective' | 'number'
  volume: number
  lesson: number
  quranFrequency: number
  sampleAyah?: {
    surahNumber: number
    surahName: string
    ayahNumber: number
    textAr: string
    translationEn: string
  }
}

/**
 * Normalizes Arabic text for flexible matching across orthographic variations:
 * - Removes tashkeel (harakat), tanween, shaddah, sukun, tatweel
 * - Normalizes hamzas and alifs (أ, إ, آ -> ا)
 * - Normalizes ta-marbuta (ة -> ه)
 * - Normalizes alif maqsura (ى -> ي)
 * - Strips Quranic recitation marks and diacritical annotations
 */
export function cleanArabic(text: string): string {
  if (!text) return ''
  return text
    // Remove Arabic diacritics and vocalization marks (harakat, tanween, shaddah, sukun)
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
    // Remove Tatweel (kashida)
    .replace(/\u0640/g, '')
    // Normalize forms of Alif
    .replace(/[إأآٱ]/g, 'ا')
    // Normalize Alif Maqsura to Yaa
    .replace(/ى/g, 'ي')
    // Normalize Taa Marbuta to Haa for root matching
    .replace(/ة/g, 'ه')
    // Clean spaces
    .trim()
}

/**
 * Robust matcher checking if a Quranic token matches a vocabulary entry.
 * Checks for clean exact match, prefix attached particles (e.g. و, ف, ب, ل, ال),
 * and pronominal suffixes (e.g. ـه, ـها, ـهم, ـكم, ـنا, ـي).
 */
export function matchesLearnedWord(token: string, learnedCleanList: string[]): boolean {
  if (!token) return false
  const cleanToken = cleanArabic(token)
  if (!cleanToken || cleanToken.length < 2) return false

  // If multiple words are in the string, match if any individual word matches
  if (cleanToken.includes(' ')) {
    const subWords = cleanToken.split(/\s+/).filter(Boolean)
    return subWords.some((sw) => matchesLearnedWord(sw, learnedCleanList))
  }

  // Direct exact match
  if (learnedCleanList.includes(cleanToken)) return true

  for (const learned of learnedCleanList) {
    if (learned.length < 2) continue

    // Direct match
    if (cleanToken === learned) return true

    // Check with definite article 'ال' (Al-)
    if (cleanToken === `ال${learned}` || `ال${cleanToken}` === learned) return true

    // Check with conjunction 'و' (wa-), 'ف' (fa-), 'ب' (bi-), 'ل' (li-)
    if (
      cleanToken === `و${learned}` ||
      cleanToken === `ف${learned}` ||
      cleanToken === `ب${learned}` ||
      cleanToken === `ل${learned}` ||
      cleanToken === `وال${learned}` ||
      cleanToken === `فال${learned}` ||
      cleanToken === `بال${learned}`
    ) {
      return true
    }

    // Check with attached possessive pronoun suffixes (ـه, ـها, ـهم, ـكم, ـنا, ـي)
    const suffixes = ['ه', 'ها', 'هم', 'هن', 'ك', 'كم', 'نا', 'ي']
    for (const sfx of suffixes) {
      if (cleanToken === `${learned}${sfx}`) return true
    }
  }

  return false
}

export const QURAN_VOCAB_CATALOG: QuranVocabItem[] = [
  // Lesson 1 - Masculine Objects & Pointers
  {
    id: 'v1-l1-1',
    ar: 'كِتَابٌ',
    arClean: cleanArabic('كتاب'),
    romanized: 'kitābun',
    en: 'Book',
    bn: 'বই',
    root: 'ك-ت-ب',
    category: 'noun',
    volume: 1,
    lesson: 1,
    quranFrequency: 261,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 2,
      textAr: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
      translationEn: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.',
    },
  },
  {
    id: 'v1-l1-2',
    ar: 'بَيْتٌ',
    arClean: cleanArabic('بيت'),
    romanized: 'baytun',
    en: 'House / Sanctuary',
    bn: 'ঘর / বাড়ি',
    root: 'ب-ي-ت',
    category: 'noun',
    volume: 1,
    lesson: 1,
    quranFrequency: 64,
    sampleAyah: {
      surahNumber: 106,
      surahName: 'Quraysh',
      ayahNumber: 3,
      textAr: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ',
      translationEn: 'Let them worship the Lord of this House.',
    },
  },
  {
    id: 'v1-l1-3',
    ar: 'بَابٌ',
    arClean: cleanArabic('باب'),
    romanized: 'bābun',
    en: 'Door / Gate',
    bn: 'দরজা',
    root: 'ب-و-ب',
    category: 'noun',
    volume: 1,
    lesson: 1,
    quranFrequency: 27,
    sampleAyah: {
      surahNumber: 38,
      surahName: 'Sad',
      ayahNumber: 50,
      textAr: 'جَنَّاتِ عَدْنٍ مُّفَتَّحَةً لَّهُمُ الْأَبْوَابُ',
      translationEn: 'Gardens of perpetual residence, whose doors will be opened to them.',
    },
  },
  {
    id: 'v1-l1-4',
    ar: 'قَلَمٌ',
    arClean: cleanArabic('قلم'),
    romanized: 'qalamun',
    en: 'Pen',
    bn: 'কলম',
    root: 'ق-ل-م',
    category: 'noun',
    volume: 1,
    lesson: 1,
    quranFrequency: 4,
    sampleAyah: {
      surahNumber: 68,
      surahName: 'Al-Qalam',
      ayahNumber: 1,
      textAr: 'ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ',
      translationEn: 'Nun. By the pen and what they write.',
    },
  },
  {
    id: 'v1-l1-5',
    ar: 'كُرْسِيٌّ',
    arClean: cleanArabic('كرسي'),
    romanized: 'kursiyyun',
    en: 'Throne / Chair',
    bn: 'চেয়ার / আসন',
    root: 'ك-ر-س',
    category: 'noun',
    volume: 1,
    lesson: 1,
    quranFrequency: 2,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 255,
      textAr: 'وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ',
      translationEn: 'His Throne extends over the heavens and the earth.',
    },
  },
  {
    id: 'v1-l1-6',
    ar: 'مِصْبَاحٌ',
    arClean: cleanArabic('مصباح'),
    romanized: 'miṣbāḥun',
    en: 'Lamp / Lantern',
    bn: 'বাতি',
    root: 'ص-ب-ح',
    category: 'noun',
    volume: 1,
    lesson: 1,
    quranFrequency: 2,
    sampleAyah: {
      surahNumber: 24,
      surahName: 'An-Nur',
      ayahNumber: 35,
      textAr: 'مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ ۖ الْمِصْبَاحُ فِي زُجَاجَةٍ',
      translationEn: 'The example of His light is like a niche within which is a lamp; the lamp is within glass.',
    },
  },
  {
    id: 'v1-l1-7',
    ar: 'جِدَارٌ',
    arClean: cleanArabic('جدار'),
    romanized: 'jidārun',
    en: 'Wall',
    bn: 'দেয়াল',
    root: 'ج-د-ر',
    category: 'noun',
    volume: 1,
    lesson: 1,
    quranFrequency: 3,
    sampleAyah: {
      surahNumber: 18,
      surahName: 'Al-Kahf',
      ayahNumber: 82,
      textAr: 'وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ فِي الْمَدِينَةِ',
      translationEn: 'And as for the wall, it belonged to two orphan boys in the city.',
    },
  },
  {
    id: 'v1-l1-8',
    ar: 'سَرِيْرٌ',
    arClean: cleanArabic('سرير'),
    romanized: 'sarīrun',
    en: 'Couch / Throne / Bed',
    bn: 'খাট / আসন',
    root: 'س-ر-ر',
    category: 'noun',
    volume: 1,
    lesson: 1,
    quranFrequency: 4,
    sampleAyah: {
      surahNumber: 15,
      surahName: 'Al-Hijr',
      ayahNumber: 47,
      textAr: 'إِخْوَانًا عَلَىٰ سُرُرٍ مُّتَقَابِلِينَ',
      translationEn: 'As brothers, facing each other on thrones.',
    },
  },
  {
    id: 'v1-l1-9',
    ar: 'هَٰذَا',
    arClean: cleanArabic('هذا'),
    romanized: 'hādhā',
    en: 'This (near masculine)',
    bn: 'ইহা (নিকট)',
    category: 'pronoun',
    volume: 1,
    lesson: 1,
    quranFrequency: 472,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 25,
      textAr: 'قَالُوا هَٰذَا الَّذِي رُزِقْنَا مِن قَبْلُ',
      translationEn: 'They will say: "This is what we were provided before."',
    },
  },
  {
    id: 'v1-l1-10',
    ar: 'ذَٰلِكَ',
    arClean: cleanArabic('ذلك'),
    romanized: 'dhālika',
    en: 'That (far masculine)',
    bn: 'উহা (দূর)',
    category: 'pronoun',
    volume: 1,
    lesson: 1,
    quranFrequency: 520,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 2,
      textAr: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ',
      translationEn: 'That is the Book about which there is no doubt.',
    },
  },

  // Lesson 2 - Adjectives & Buildings
  {
    id: 'v1-l2-1',
    ar: 'مَسْجِدٌ',
    arClean: cleanArabic('مسجد'),
    romanized: 'masjidun',
    en: 'Mosque / Place of Prostration',
    bn: 'মসজিদ',
    root: 'س-ج-د',
    category: 'noun',
    volume: 1,
    lesson: 2,
    quranFrequency: 28,
    sampleAyah: {
      surahNumber: 17,
      surahName: 'Al-Isra',
      ayahNumber: 1,
      textAr: 'مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى',
      translationEn: 'From al-Masjid al-Haram to al-Masjid al-Aqsa.',
    },
  },
  {
    id: 'v1-l2-2',
    ar: 'كَبِيرٌ',
    arClean: cleanArabic('كبير'),
    romanized: 'kabīrun',
    en: 'Big / Great',
    bn: 'বড় / মহান',
    root: 'ك-ب-ر',
    category: 'adjective',
    volume: 1,
    lesson: 2,
    quranFrequency: 161,
    sampleAyah: {
      surahNumber: 22,
      surahName: 'Al-Hajj',
      ayahNumber: 62,
      textAr: 'وَأَنَّ اللَّهَ هُوَ الْعَلِيُّ الْكَبِيرُ',
      translationEn: 'And that Allah is the Most High, the Grand.',
    },
  },
  {
    id: 'v1-l2-3',
    ar: 'صَغِيرٌ',
    arClean: cleanArabic('صغير'),
    romanized: 'ṣaghīrun',
    en: 'Small',
    bn: 'ছোট',
    root: 'ص-غ-ر',
    category: 'adjective',
    volume: 1,
    lesson: 2,
    quranFrequency: 12,
    sampleAyah: {
      surahNumber: 18,
      surahName: 'Al-Kahf',
      ayahNumber: 49,
      textAr: 'لَا يُغَادِرُ صَغِيرَةً وَلَا كَبِيرَةً إِلَّا أَحْصَاهَا',
      translationEn: 'It leaves not a small thing or a great one but that it has counted it.',
    },
  },
  {
    id: 'v1-l2-4',
    ar: 'جَدِيدٌ',
    arClean: cleanArabic('جديد'),
    romanized: 'jadīdun',
    en: 'New',
    bn: 'নতুন',
    root: 'ج-د-د',
    category: 'adjective',
    volume: 1,
    lesson: 2,
    quranFrequency: 8,
    sampleAyah: {
      surahNumber: 14,
      surahName: 'Ibrahim',
      ayahNumber: 19,
      textAr: 'إِن يَشَأْ يُذْهِبْكُمْ وَيَأْتِ بِخَلْقٍ جَدِيدٍ',
      translationEn: 'If He wills, He can do away with you and bring forth a new creation.',
    },
  },
  {
    id: 'v1-l2-5',
    ar: 'قَدِيمٌ',
    arClean: cleanArabic('قديم'),
    romanized: 'qadīmun',
    en: 'Old / Ancient',
    bn: 'পুরনো / প্রাচীন',
    root: 'ق-د-م',
    category: 'adjective',
    volume: 1,
    lesson: 2,
    quranFrequency: 4,
    sampleAyah: {
      surahNumber: 26,
      surahName: 'Ash-Shuara',
      ayahNumber: 76,
      textAr: 'أَنتُمْ وَآبَاؤُكُمُ الْأَقْدَمُونَ',
      translationEn: 'You and your ancient forefathers.',
    },
  },
  {
    id: 'v1-l2-6',
    ar: 'جَمِيلٌ',
    arClean: cleanArabic('جميل'),
    romanized: 'jamīlun',
    en: 'Beautiful / Patient',
    bn: 'সুন্দর / মনোরম',
    root: 'ج-م-ل',
    category: 'adjective',
    volume: 1,
    lesson: 2,
    quranFrequency: 7,
    sampleAyah: {
      surahNumber: 12,
      surahName: 'Yusuf',
      ayahNumber: 18,
      textAr: 'فَصَبْرٌ جَمِيلٌ ۖ وَاللَّهُ الْمُسْتَعَانُ',
      translationEn: 'So patience is most fitting. And Allah is the one sought for help.',
    },
  },

  // Lesson 3 - Feminine Pointers & Environment
  {
    id: 'v1-l3-1',
    ar: 'مَدْرَسَةٌ',
    arClean: cleanArabic('مدرسة'),
    romanized: 'madrasatun',
    en: 'School / Place of Study',
    bn: 'মাদ্রাসা / বিদ্যালয়',
    root: 'د-ر-س',
    category: 'noun',
    volume: 1,
    lesson: 3,
    quranFrequency: 6,
  },
  {
    id: 'v1-l3-2',
    ar: 'سَيَّارَةٌ',
    arClean: cleanArabic('sayyāratun'),
    romanized: 'sayyāratun',
    en: 'Car / Caravan',
    bn: 'গাড়ি / কাফেলা',
    root: 'س-ي-ر',
    category: 'noun',
    volume: 1,
    lesson: 3,
    quranFrequency: 3,
    sampleAyah: {
      surahNumber: 12,
      surahName: 'Yusuf',
      ayahNumber: 19,
      textAr: 'وَجَاءَتْ سَيَّارَةٌ فَأَرْسَلُوا وَارِدَهُمْ',
      translationEn: 'And there came a company of travelers; then they sent their water-drawer.',
    },
  },
  {
    id: 'v1-l3-3',
    ar: 'هَٰذِهِ',
    arClean: cleanArabic('هذه'),
    romanized: 'hādhihī',
    en: 'This (near feminine)',
    bn: 'ইহা (স্ত্রীলিঙ্গ)',
    category: 'pronoun',
    volume: 1,
    lesson: 3,
    quranFrequency: 48,
    sampleAyah: {
      surahNumber: 7,
      surahName: 'Al-Araf',
      ayahNumber: 73,
      textAr: 'هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً',
      translationEn: 'This is the she-camel of Allah, a sign for you.',
    },
  },
  {
    id: 'v1-l3-4',
    ar: 'تِلْكَ',
    arClean: cleanArabic('تلك'),
    romanized: 'tilka',
    en: 'That (far feminine)',
    bn: 'উহা (স্ত্রীলিঙ্গ)',
    category: 'pronoun',
    volume: 1,
    lesson: 3,
    quranFrequency: 42,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 253,
      textAr: 'تِلْكَ الرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلَىٰ بَعْضٍ',
      translationEn: 'Those messengers - some of them We caused to exceed others.',
    },
  },
  {
    id: 'v1-l3-5',
    ar: 'قَرِيبٌ',
    arClean: cleanArabic('قريب'),
    romanized: 'qarībun',
    en: 'Near / Close',
    bn: 'নিকটবর্তী',
    root: 'ق-ر-ب',
    category: 'adjective',
    volume: 1,
    lesson: 3,
    quranFrequency: 26,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 186,
      textAr: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
      translationEn: 'And when My servants ask you concerning Me, indeed I am near.',
    },
  },
  {
    id: 'v1-l3-6',
    ar: 'بَعِيدٌ',
    arClean: cleanArabic('بعيد'),
    romanized: 'ba‘īdun',
    en: 'Far',
    bn: 'দূরবর্তী',
    root: 'ب-ع-د',
    category: 'adjective',
    volume: 1,
    lesson: 3,
    quranFrequency: 25,
    sampleAyah: {
      surahNumber: 50,
      surahName: 'Qaf',
      ayahNumber: 31,
      textAr: 'وَأُزْلِفَتِ الْجَنَّةُ لِلْمُتَّقِينَ غَيْرَ بَعِيدٍ',
      translationEn: 'And Paradise will be brought near to the righteous, not far.',
    },
  },

  // Lesson 4 - People & Nature
  {
    id: 'v1-l4-1',
    ar: 'وَلَدٌ',
    arClean: cleanArabic('ولد'),
    romanized: 'waladun',
    en: 'Boy / Child',
    bn: 'ছেলে / সন্তান',
    root: 'و-ل-د',
    category: 'noun',
    volume: 1,
    lesson: 4,
    quranFrequency: 102,
    sampleAyah: {
      surahNumber: 112,
      surahName: 'Al-Ikhlas',
      ayahNumber: 3,
      textAr: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
      translationEn: 'He neither begets nor is born.',
    },
  },
  {
    id: 'v1-l4-2',
    ar: 'بِنْتٌ',
    arClean: cleanArabic('بنت'),
    romanized: 'bintun',
    en: 'Girl / Daughter',
    bn: 'মেয়ে / কন্যা',
    root: 'ب-ن-ي',
    category: 'noun',
    volume: 1,
    lesson: 4,
    quranFrequency: 4,
    sampleAyah: {
      surahNumber: 66,
      surahName: 'At-Tahrim',
      ayahNumber: 12,
      textAr: 'وَمَرْيَمَ ابْنَتَ عِمْرَانَ',
      translationEn: 'And Mary, the daughter of Imran.',
    },
  },
  {
    id: 'v1-l4-3',
    ar: 'رَجُلٌ',
    arClean: cleanArabic('رجل'),
    romanized: 'rajulun',
    en: 'Man',
    bn: 'পুরুষ / লোক',
    root: 'ر-ج-ل',
    category: 'noun',
    volume: 1,
    lesson: 4,
    quranFrequency: 73,
    sampleAyah: {
      surahNumber: 36,
      surahName: 'Ya-Sin',
      ayahNumber: 20,
      textAr: 'وَجَاءَ مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ يَسْعَىٰ',
      translationEn: 'And there came from the farthest end of the city a man running.',
    },
  },
  {
    id: 'v1-l4-4',
    ar: 'امْرَأَةٌ',
    arClean: cleanArabic('امراة'),
    romanized: 'imra’atun',
    en: 'Woman / Wife',
    bn: 'মহিলা / স্ত্রী',
    root: 'م-ر-ء',
    category: 'noun',
    volume: 1,
    lesson: 4,
    quranFrequency: 26,
    sampleAyah: {
      surahNumber: 66,
      surahName: 'At-Tahrim',
      ayahNumber: 11,
      textAr: 'وَضَرَبَ اللَّهُ مَثَلًا لِّلَّذِينَ آمَنُوا امْرَأَتَ فِرْعَوْنَ',
      translationEn: 'And Allah presents an example of those who believed: the wife of Pharaoh.',
    },
  },
  {
    id: 'v1-l4-5',
    ar: 'مَاءٌ',
    arClean: cleanArabic('ماء'),
    romanized: 'mā’un',
    en: 'Water',
    bn: 'পানি',
    root: 'م-و-ه',
    category: 'noun',
    volume: 1,
    lesson: 4,
    quranFrequency: 63,
    sampleAyah: {
      surahNumber: 21,
      surahName: 'Al-Anbiya',
      ayahNumber: 30,
      textAr: 'وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ',
      translationEn: 'And We made from water every living thing.',
    },
  },
  {
    id: 'v1-l4-6',
    ar: 'بَارِدٌ',
    arClean: cleanArabic('بارد'),
    romanized: 'bāridun',
    en: 'Cold / Cool',
    bn: 'ঠান্ডা / শীতল',
    root: 'ب-ر-د',
    category: 'adjective',
    volume: 1,
    lesson: 4,
    quranFrequency: 4,
    sampleAyah: {
      surahNumber: 21,
      surahName: 'Al-Anbiya',
      ayahNumber: 69,
      textAr: 'قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ',
      translationEn: 'We said: "O fire, be coolness and safety upon Abraham."',
    },
  },

  // Lesson 5 - Prepositions & Motion Verbs
  {
    id: 'v1-l5-1',
    ar: 'فِي',
    arClean: cleanArabic('في'),
    romanized: 'fī',
    en: 'In / Inside',
    bn: 'মধ্যে / ভিতরে',
    category: 'particle',
    volume: 1,
    lesson: 5,
    quranFrequency: 1701,
  },
  {
    id: 'v1-l5-2',
    ar: 'عَلَىٰ',
    arClean: cleanArabic('علي'),
    romanized: '‘alā',
    en: 'On / Upon',
    bn: 'উপরে',
    category: 'particle',
    volume: 1,
    lesson: 5,
    quranFrequency: 1445,
  },
  {
    id: 'v1-l5-3',
    ar: 'مِنْ',
    arClean: cleanArabic('من'),
    romanized: 'min',
    en: 'From',
    bn: 'হতে / থেকে',
    category: 'particle',
    volume: 1,
    lesson: 5,
    quranFrequency: 3226,
  },
  {
    id: 'v1-l5-4',
    ar: 'إِلَىٰ',
    arClean: cleanArabic('الي'),
    romanized: 'ilā',
    en: 'To / Towards',
    bn: 'দিকে / প্রতি',
    category: 'particle',
    volume: 1,
    lesson: 5,
    quranFrequency: 742,
  },
  {
    id: 'v1-l5-5',
    ar: 'ذَهَبَ',
    arClean: cleanArabic('ذهب'),
    romanized: 'dhahaba',
    en: 'He went / Gold',
    bn: 'সে গিয়েছিল / স্বর্ণ',
    root: 'ذ-ه-ب',
    category: 'verb',
    volume: 1,
    lesson: 5,
    quranFrequency: 56,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 20,
      textAr: 'ذَهَبَ اللَّهُ بِنُورِهِمْ وَتَرَكَهُمْ فِي ظُلُمَاتٍ',
      translationEn: 'Allah took away their light and left them in darkness.',
    },
  },
  {
    id: 'v1-l5-6',
    ar: 'رَجَعَ',
    arClean: cleanArabic('رجع'),
    romanized: 'raja‘a',
    en: 'He returned',
    bn: 'সে ফিরে এসেছিল',
    root: 'ر-ج-ع',
    category: 'verb',
    volume: 1,
    lesson: 5,
    quranFrequency: 43,
    sampleAyah: {
      surahNumber: 20,
      surahName: 'Taha',
      ayahNumber: 86,
      textAr: 'فَرَجَعَ مُوسَىٰ إِلَىٰ قَوْمِهِ غَضْبَانَ أَسِفًا',
      translationEn: 'So Moses returned to his people, angry and grieved.',
    },
  },

  // Lesson 6 - Pronouns & Identity
  {
    id: 'v1-l6-1',
    ar: 'هُوَ',
    arClean: cleanArabic('هو'),
    romanized: 'huwa',
    en: 'He',
    bn: 'সে (পুং)',
    category: 'pronoun',
    volume: 1,
    lesson: 6,
    quranFrequency: 481,
    sampleAyah: {
      surahNumber: 112,
      surahName: 'Al-Ikhlas',
      ayahNumber: 1,
      textAr: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
      translationEn: 'Say: "He is Allah, [who is] One."',
    },
  },
  {
    id: 'v1-l6-2',
    ar: 'هِيَ',
    arClean: cleanArabic('هي'),
    romanized: 'hiya',
    en: 'She',
    bn: 'সে (স্ত্রী)',
    category: 'pronoun',
    volume: 1,
    lesson: 6,
    quranFrequency: 64,
  },
  {
    id: 'v1-l6-3',
    ar: 'أَنَا',
    arClean: cleanArabic('انا'),
    romanized: 'anā',
    en: 'I',
    bn: 'আমি',
    category: 'pronoun',
    volume: 1,
    lesson: 6,
    quranFrequency: 68,
    sampleAyah: {
      surahNumber: 20,
      surahName: 'Taha',
      ayahNumber: 14,
      textAr: 'إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي',
      translationEn: 'Indeed, I am Allah. There is no deity except Me, so worship Me.',
    },
  },
  {
    id: 'v1-l6-4',
    ar: 'نَحْنُ',
    arClean: cleanArabic('نحن'),
    romanized: 'naḥnu',
    en: 'We',
    bn: 'আমরা',
    category: 'pronoun',
    volume: 1,
    lesson: 6,
    quranFrequency: 86,
    sampleAyah: {
      surahNumber: 15,
      surahName: 'Al-Hijr',
      ayahNumber: 9,
      textAr: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
      translationEn: 'Indeed, it is We who sent down the Qur\'an and indeed, We will be its guardian.',
    },
  },
  {
    id: 'v1-l6-5',
    ar: 'هُمْ',
    arClean: cleanArabic('هم'),
    romanized: 'hum',
    en: 'They',
    bn: 'তারা',
    category: 'pronoun',
    volume: 1,
    lesson: 6,
    quranFrequency: 442,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 5,
      textAr: 'أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ',
      translationEn: 'Those are upon [right] guidance from their Lord, and it is those who are the successful.',
    },
  },
  {
    id: 'v1-l6-6',
    ar: 'أَنتَ',
    arClean: cleanArabic('انت'),
    romanized: 'anta',
    en: 'You (masculine singular)',
    bn: 'তুমি',
    category: 'pronoun',
    volume: 1,
    lesson: 6,
    quranFrequency: 81,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 32,
      textAr: 'إِنَّكَ أَنتَ الْعَلِيمُ الْحَكِيمُ',
      translationEn: 'Indeed, You are the Knowing, the Wise.',
    },
  },

  // Lesson 7, 8, 9 - Plurals & Numbers
  {
    id: 'v1-l8-1',
    ar: 'هَٰؤُلَاءِ',
    arClean: cleanArabic('هؤلاء'),
    romanized: 'hā’ulā’i',
    en: 'These (plural)',
    bn: 'এরা / ইহারা',
    category: 'pronoun',
    volume: 1,
    lesson: 8,
    quranFrequency: 45,
  },
  {
    id: 'v1-l9-1',
    ar: 'ثَلَاثَةٌ',
    arClean: cleanArabic('ثلاثه'),
    romanized: 'thalāthatun',
    en: 'Three',
    bn: 'তিন',
    category: 'number',
    volume: 1,
    lesson: 9,
    quranFrequency: 18,
  },
  {
    id: 'v1-l9-2',
    ar: 'خَمْسَةٌ',
    arClean: cleanArabic('خمسه'),
    romanized: 'khamsatun',
    en: 'Five',
    bn: 'পাঁচ',
    category: 'number',
    volume: 1,
    lesson: 9,
    quranFrequency: 4,
  },
  {
    id: 'v1-l9-3',
    ar: 'سَبْعَةٌ',
    arClean: cleanArabic('سبعه'),
    romanized: 'sab‘atun',
    en: 'Seven',
    bn: 'সাত',
    category: 'number',
    volume: 1,
    lesson: 9,
    quranFrequency: 24,
    sampleAyah: {
      surahNumber: 2,
      surahName: 'Al-Baqarah',
      ayahNumber: 29,
      textAr: 'فَسَوَّاهُنَّ سَبْعَ سَمَاوَاتٍ',
      translationEn: 'And completed them as seven heavens.',
    },
  },
  {
    id: 'v1-l9-4',
    ar: 'عَشَرَةٌ',
    arClean: cleanArabic('عشره'),
    romanized: '‘asharatun',
    en: 'Ten',
    bn: 'দশ',
    category: 'number',
    volume: 1,
    lesson: 9,
    quranFrequency: 9,
    sampleAyah: {
      surahNumber: 89,
      surahName: 'Al-Fajr',
      ayahNumber: 2,
      textAr: 'وَلَيَالٍ عَشْرٍ',
      translationEn: 'And [by] the ten nights.',
    },
  },
]

/** Total word tokens in the complete Quran text */
export const TOTAL_QURAN_WORDS = 77430

/** Calculate total Quran words unlocked given a list of learned clean Arabic words */
export function calculateQuranWordsUnlocked(learnedCleanWords: string[]): {
  unlockedCount: number
  totalWords: number
  percentage: number
} {
  let totalUnlockedOccurrences = 0

  QURAN_VOCAB_CATALOG.forEach((item) => {
    if (learnedCleanWords.includes(item.arClean)) {
      totalUnlockedOccurrences += item.quranFrequency
    }
  })

  // Add base foundation for high-frequency essential grammatical particles
  const basePrepositionsUnlocked = learnedCleanWords.filter((w) =>
    ['في', 'علي', 'من', 'الي', 'هو', 'هذا', 'ذلك'].includes(w)
  ).length

  if (basePrepositionsUnlocked >= 3) {
    totalUnlockedOccurrences += 1200
  }

  const percentage = Math.min(100, Number(((totalUnlockedOccurrences / TOTAL_QURAN_WORDS) * 100).toFixed(1)))

  return {
    unlockedCount: totalUnlockedOccurrences,
    totalWords: TOTAL_QURAN_WORDS,
    percentage,
  }
}

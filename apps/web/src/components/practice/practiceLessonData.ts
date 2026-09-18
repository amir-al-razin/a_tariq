export interface ScrambleChallenge {
  id: number
  enPrompt: string
  arSentence: string
  scrambledWords: string[]
  explanation: string
}

export interface BlitzPair {
  id: string
  ar: string
  en: string
  emoji?: string
}

export interface HarakatChallenge {
  id: number
  sentenceWithBlank: string
  targetWordBase: string
  translationEn: string
  options: {
    text: string
    caseName: string // e.g. 'Marfoo (Dammah)', 'Majroor (Kasrah)', 'Mansub (Fathah)'
    isCorrect: boolean
  }[]
  pedagogicalGrammarRule: string
}

export interface LessonPracticeSuite {
  scrambleChallenges: ScrambleChallenge[]
  blitzPairs: BlitzPair[]
  harakatChallenges: HarakatChallenge[]
  recitationPhrases: {
    phraseAr: string
    translationEn: string
    transliteration: string
    tajweedTip?: string
  }[]
}

export const LESSON_PRACTICE_DATA: Record<number, LessonPracticeSuite> = {
  1: {
    scrambleChallenges: [
      {
        id: 1,
        enPrompt: 'This is a big house.',
        arSentence: 'هَٰذَا بَيْتٌ كَبِيرٌ',
        scrambledWords: ['كَبِيرٌ', 'هَٰذَا', 'بَيْتٌ'],
        explanation: 'Demonstrative pointer هَٰذَا comes first, followed by noun بَيْتٌ, then adjective كَبِيرٌ.',
      },
      {
        id: 2,
        enPrompt: 'That is an open door.',
        arSentence: 'ذَٰلِكَ بَابٌ مَفْتُوحٌ',
        scrambledWords: ['مَفْتُوحٌ', 'ذَٰلِكَ', 'بَابٌ'],
        explanation: 'Pointer ذَٰلِكَ points across distance to the open door.',
      },
      {
        id: 3,
        enPrompt: 'This is a pen and that is a book.',
        arSentence: 'هَٰذَا قَلَمٌ وَذَٰلِكَ كِتَابٌ',
        scrambledWords: ['وَذَٰلِكَ', 'قَلَمٌ', 'هَٰذَا', 'كِتَابٌ'],
        explanation: 'The conjunction وَ links the two parallel nominal sentences.',
      },
    ],
    blitzPairs: [
      { id: 'p1-1', ar: 'كِتَابٌ', en: 'Book', emoji: '📖' },
      { id: 'p1-2', ar: 'قَلَمٌ', en: 'Pen', emoji: '🖊️' },
      { id: 'p1-3', ar: 'بَيْتٌ', en: 'House', emoji: '🏠' },
      { id: 'p1-4', ar: 'بَابٌ', en: 'Door', emoji: '🚪' },
      { id: 'p1-5', ar: 'كُرْسِيٌّ', en: 'Chair', emoji: '🪑' },
      { id: 'p1-6', ar: 'مِصْبَاحٌ', en: 'Lamp', emoji: '💡' },
      { id: 'p1-7', ar: 'جِدَارٌ', en: 'Wall', emoji: '🧱' },
      { id: 'p1-8', ar: 'سَرِيرٌ', en: 'Bed', emoji: '🛏️' },
    ],
    harakatChallenges: [
      {
        id: 1,
        sentenceWithBlank: 'هَٰذَا ___ كَبِيرٌ',
        targetWordBase: 'بيت',
        translationEn: 'This is a big house.',
        options: [
          { text: 'بَيْتٌ', caseName: 'Marfoo (Dammatan - ٌ)', isCorrect: true },
          { text: 'بَيْتًا', caseName: 'Mansub (Fathatan - ً)', isCorrect: false },
          { text: 'بَيْتٍ', caseName: 'Majroor (Kasratan - ٍ)', isCorrect: false },
        ],
        pedagogicalGrammarRule: 'The predicate (Khabar) in an equational nominal sentence is default Marfoo (takes Dammah/Tanween Damm).',
      },
      {
        id: 2,
        sentenceWithBlank: 'ذَٰلِكَ قَلَمٌ ___',
        targetWordBase: 'جميل',
        translationEn: 'That is a beautiful pen.',
        options: [
          { text: 'جَمِيلٌ', caseName: 'Marfoo (ٌ)', isCorrect: true },
          { text: 'جَمِيلًا', caseName: 'Mansub (ً)', isCorrect: false },
          { text: 'جَمِيلٍ', caseName: 'Majroor (ٍ)', isCorrect: false },
        ],
        pedagogicalGrammarRule: 'An adjective (Sifah / Na‘at) matches its noun in case ending. Since قَلَمٌ is Marfoo, the adjective must be جَمِيلٌ.',
      },
    ],
    recitationPhrases: [
      {
        phraseAr: 'هَٰذَا بَيْتٌ كَبِيرٌ',
        translationEn: 'This is a big house.',
        transliteration: 'hādhā baytun kabīrun',
        tajweedTip: 'Pronounce the soft "dh" in هَٰذَا and prolong the "ī" in كَبِيرٌ.',
      },
      {
        phraseAr: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ',
        translationEn: 'That is the Book about which there is no doubt.',
        transliteration: 'dhālikal-kitābu lā rayba fīh',
        tajweedTip: 'Connect the "l" directly from dhālika to al-kitāb (wasla).',
      },
    ],
  },

  2: {
    scrambleChallenges: [
      {
        id: 1,
        enPrompt: 'The mosque is big and the school is small.',
        arSentence: 'الْمَسْجِدُ كَبِيرٌ وَالْمَدْرَسَةُ صَغِيرَةٌ',
        scrambledWords: ['صَغِيرَةٌ', 'الْمَسْجِدُ', 'وَالْمَدْرَسَةُ', 'كَبِيرٌ'],
        explanation: 'Notice the gender agreement: الْمَسْجِدُ (m) takes كَبِيرٌ while الْمَدْرَسَةُ (f) takes صَغِيرَةٌ.',
      },
      {
        id: 2,
        enPrompt: 'The house is clean.',
        arSentence: 'الْبَيْتُ نَظِيفٌ',
        scrambledWords: ['نَظِيفٌ', 'الْبَيْتُ'],
        explanation: 'Subject with Al- (Definite Mubtada) + Indefinite Khabar.',
      },
    ],
    blitzPairs: [
      { id: 'p2-1', ar: 'مَسْجِدٌ', en: 'Mosque', emoji: '🕌' },
      { id: 'p2-2', ar: 'كَبِيرٌ', en: 'Big', emoji: '🐘' },
      { id: 'p2-3', ar: 'صَغِيرٌ', en: 'Small', emoji: '🐜' },
      { id: 'p2-4', ar: 'نَظِيفٌ', en: 'Clean', emoji: '✨' },
      { id: 'p2-5', ar: 'جَدِيدٌ', en: 'New', emoji: '🆕' },
      { id: 'p2-6', ar: 'قَدِيمٌ', en: 'Old', emoji: '⏳' },
      { id: 'p2-7', ar: 'جَمِيلٌ', en: 'Beautiful', emoji: '🌸' },
    ],
    harakatChallenges: [
      {
        id: 1,
        sentenceWithBlank: 'الْمَسْجِدُ ___',
        targetWordBase: 'كبير',
        translationEn: 'The mosque is big.',
        options: [
          { text: 'كَبِيرٌ', caseName: 'Marfoo (Tanween Damm)', isCorrect: true },
          { text: 'كَبِيرٍ', caseName: 'Majroor', isCorrect: false },
        ],
        pedagogicalGrammarRule: 'The Khabar (predicate) takes Dammah / Tanween Damm.',
      },
    ],
    recitationPhrases: [
      {
        phraseAr: 'الْمَسْجِدُ كَبِيرٌ وَالْبَيْتُ نَظِيفٌ',
        translationEn: 'The mosque is big and the house is clean.',
        transliteration: 'al-masjidu kabīrun wal-baytu naẓīf',
        tajweedTip: 'Pronounce the emphatic letter "ẓā" (ظ) deeply in نَظِيفٌ.',
      },
    ],
  },

  3: {
    scrambleChallenges: [
      {
        id: 1,
        enPrompt: 'This is a big school.',
        arSentence: 'هَٰذِهِ مَدْرَسَةٌ كَبِيرَةٌ',
        scrambledWords: ['كَبِيرَةٌ', 'مَدْرَسَةٌ', 'هَٰذِهِ'],
        explanation: 'Feminine demonstrative pronoun هَٰذِهِ matches the feminine noun with taa marbuta.',
      },
      {
        id: 2,
        enPrompt: 'The car is near.',
        arSentence: 'السَّيَّارَةُ قَرِيبَةٌ',
        scrambledWords: ['قَرِيبَةٌ', 'السَّيَّارَةُ'],
        explanation: 'Definite noun + feminine adjective agreement.',
      },
    ],
    blitzPairs: [
      { id: 'p3-1', ar: 'مَدْرَسَةٌ', en: 'School', emoji: '🏫' },
      { id: 'p3-2', ar: 'سَيَّارَةٌ', en: 'Car', emoji: '🚗' },
      { id: 'p3-3', ar: 'سَبُّورَةٌ', en: 'Blackboard', emoji: '📋' },
      { id: 'p3-4', ar: 'قَرِيبٌ', en: 'Near', emoji: '📍' },
      { id: 'p3-5', ar: 'بَعِيدٌ', en: 'Far', emoji: '🚀' },
      { id: 'p3-6', ar: 'تِلْكَ', en: 'That (f.)', emoji: '👉' },
      { id: 'p3-7', ar: 'هَٰذِهِ', en: 'This (f.)', emoji: '👇' },
    ],
    harakatChallenges: [
      {
        id: 1,
        sentenceWithBlank: 'تِلْكَ ___ نَظِيفَةٌ',
        targetWordBase: 'سبورة',
        translationEn: 'That is a clean blackboard.',
        options: [
          { text: 'سَبُّورَةٌ', caseName: 'Marfoo (Tanween Damm)', isCorrect: true },
          { text: 'سَبُّورَةٍ', caseName: 'Majroor', isCorrect: false },
        ],
        pedagogicalGrammarRule: 'The noun acting as predicate takes nominative Tanween Damm.',
      },
    ],
    recitationPhrases: [
      {
        phraseAr: 'هَٰذِهِ مَدْرَسَةٌ كَبِيرَةٌ وَتِلْكَ سَبُّورَةٌ نَظِيفَةٌ',
        translationEn: 'This is a big school and that is a clean blackboard.',
        transliteration: 'hādhihī madrasatun kabīratun wa tilka sabbūratun naẓīfah',
      },
    ],
  },

  4: {
    scrambleChallenges: [
      {
        id: 1,
        enPrompt: 'The boy is small and the girl is small.',
        arSentence: 'الْوَلَدُ صَغِيرٌ وَالْبِنْتُ صَغِيرَةٌ',
        scrambledWords: ['صَغِيرَةٌ', 'الْوَلَدُ', 'وَالْبِنْتُ', 'صَغِيرٌ'],
        explanation: 'Dual comparison showing masculine vs feminine agreement.',
      },
      {
        id: 2,
        enPrompt: 'The water is cold.',
        arSentence: 'الْمَاءُ بَارِدٌ',
        scrambledWords: ['بَارِدٌ', 'الْمَاءُ'],
        explanation: 'الْمَاءُ (water) is a masculine noun.',
      },
    ],
    blitzPairs: [
      { id: 'p4-1', ar: 'وَلَدٌ', en: 'Boy', emoji: '👦' },
      { id: 'p4-2', ar: 'بِنْتٌ', en: 'Girl', emoji: '👧' },
      { id: 'p4-3', ar: 'رَجُلٌ', en: 'Man', emoji: '👨' },
      { id: 'p4-4', ar: 'امْرَأَةٌ', en: 'Woman', emoji: '👩' },
      { id: 'p4-5', ar: 'مَاءٌ', en: 'Water', emoji: '💧' },
      { id: 'p4-6', ar: 'بَارِدٌ', en: 'Cold', emoji: '❄️' },
    ],
    harakatChallenges: [
      {
        id: 1,
        sentenceWithBlank: 'الرَّجُلُ ___ وَالْمَرْأَةُ كَبِيرَةٌ',
        targetWordBase: 'كبير',
        translationEn: 'The man is big and the woman is big.',
        options: [
          { text: 'كَبِيرٌ', caseName: 'Masculine Marfoo', isCorrect: true },
          { text: 'كَبِيرَةٌ', caseName: 'Feminine Marfoo', isCorrect: false },
        ],
        pedagogicalGrammarRule: 'The man (الرَّجُلُ) is masculine, so it requires masculine predicate كَبِيرٌ.',
      },
    ],
    recitationPhrases: [
      {
        phraseAr: 'الْوَلَدُ صَغِيرٌ وَالْمَاءُ بَارِدٌ',
        translationEn: 'The boy is small and the water is cold.',
        transliteration: 'al-waladu ṣaghīrun wal-mā’u bārid',
      },
    ],
  },

  5: {
    scrambleChallenges: [
      {
        id: 1,
        enPrompt: 'The book is on the desk.',
        arSentence: 'الْكِتَابُ عَلَى الْمَكْتَبِ',
        scrambledWords: ['الْمَكْتَبِ', 'عَلَى', 'الْكِتَابُ'],
        explanation: 'Preposition عَلَى pulls the following noun into Majroor (Kasrah).',
      },
      {
        id: 2,
        enPrompt: 'The student went to the school.',
        arSentence: 'ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ',
        scrambledWords: ['الْمَدْرَسَةِ', 'ذَهَبَ', 'إِلَى', 'الطَّالِبُ'],
        explanation: 'Verbal sentence: Verb ذَهَبَ + Subject الطَّالِبُ + Prepositional phrase إِلَى الْمَدْرَسَةِ.',
      },
    ],
    blitzPairs: [
      { id: 'p5-1', ar: 'فِي', en: 'In / Inside', emoji: '📥' },
      { id: 'p5-2', ar: 'عَلَىٰ', en: 'On / Upon', emoji: '🔝' },
      { id: 'p5-3', ar: 'مِنْ', en: 'From', emoji: '⬅️' },
      { id: 'p5-4', ar: 'إِلَىٰ', en: 'To', emoji: '➡️' },
      { id: 'p5-5', ar: 'ذَهَبَ', en: 'He went', emoji: '🚶' },
      { id: 'p5-6', ar: 'رَجَعَ', en: 'He returned', emoji: '🔄' },
      { id: 'p5-7', ar: 'حَقِيبَةٌ', en: 'Bag', emoji: '🎒' },
    ],
    harakatChallenges: [
      {
        id: 1,
        sentenceWithBlank: 'الْقَلَمُ فِي الْحَقِيبَةِ ___',
        targetWordBase: 'الحقيبة',
        translationEn: 'The pen is in the bag.',
        options: [
          { text: 'الْحَقِيبَةِ', caseName: 'Majroor (Kasrah - ِ)', isCorrect: true },
          { text: 'الْحَقِيبَةُ', caseName: 'Marfoo (Dammah - ُ)', isCorrect: false },
          { text: 'الْحَقِيبَةَ', caseName: 'Mansub (Fathah - َ)', isCorrect: false },
        ],
        pedagogicalGrammarRule: 'Any noun governed by a preposition (حرف جر) like فِي must take Kasrah (Majroor).',
      },
    ],
    recitationPhrases: [
      {
        phraseAr: 'ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ',
        translationEn: 'The student went to the school.',
        transliteration: 'dhahabaṭ-ṭālibu ilal-madrasah',
      },
    ],
  },
}

// Fallback generator for lessons 6..9
export function getLessonPracticeSuite(lessonNum: number): LessonPracticeSuite {
  if (LESSON_PRACTICE_DATA[lessonNum]) {
    return LESSON_PRACTICE_DATA[lessonNum]
  }

  // Smart fallback for other lessons
  return {
    scrambleChallenges: [
      {
        id: 1,
        enPrompt: `Lesson ${lessonNum}: He is a student and she is a student.`,
        arSentence: 'هُوَ طَالِبٌ وَهِيَ طَالِبَةٌ',
        scrambledWords: ['طَالِبَةٌ', 'هُوَ', 'وَهِيَ', 'طَالِبٌ'],
        explanation: 'Pronouns هُوَ and هِيَ with masculine and feminine agreement.',
      },
      {
        id: 2,
        enPrompt: 'We are in the school.',
        arSentence: 'نَحْنُ فِي الْمَدْرَسَةِ',
        scrambledWords: ['الْمَدْرَسَةِ', 'نَحْنُ', 'فِي'],
        explanation: 'Plural pronoun نَحْنُ followed by prepositional phrase.',
      },
    ],
    blitzPairs: [
      { id: `p${lessonNum}-1`, ar: 'هُوَ', en: 'He', emoji: '👨' },
      { id: `p${lessonNum}-2`, ar: 'هِيَ', en: 'She', emoji: '👩' },
      { id: `p${lessonNum}-3`, ar: 'أَنَا', en: 'I', emoji: '🙋' },
      { id: `p${lessonNum}-4`, ar: 'نَحْنُ', en: 'We', emoji: '👥' },
      { id: `p${lessonNum}-5`, ar: 'هُمْ', en: 'They', emoji: '👨‍👩‍👦' },
      { id: `p${lessonNum}-6`, ar: 'مُعَلِّمٌ', en: 'Teacher', emoji: '🧑‍🏫' },
    ],
    harakatChallenges: [
      {
        id: 1,
        sentenceWithBlank: 'نَحْنُ فِي ___',
        targetWordBase: 'المسجد',
        translationEn: 'We are in the mosque.',
        options: [
          { text: 'الْمَسْجِدِ', caseName: 'Majroor (Kasrah)', isCorrect: true },
          { text: 'الْمَسْجِدُ', caseName: 'Marfoo (Dammah)', isCorrect: false },
        ],
        pedagogicalGrammarRule: 'Nouns after preposition فِي take Kasrah.',
      },
    ],
    recitationPhrases: [
      {
        phraseAr: 'نَحْنُ فِي الْمَسْجِدِ الْكَبِيرِ',
        translationEn: 'We are in the big mosque.',
        transliteration: 'naḥnu fil-masjidil-kabīr',
      },
    ],
  }
}

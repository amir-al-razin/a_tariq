// Universal Lesson Session Types for Tariq Monorepo

export type StepType = 
  | 'vocab_prime'       // Vocabulary priming with audio
  | 'concept_intro'     // Grammar & rule concept discovery
  | 'polar_sort'        // Binary spatial / gender discrimination drill
  | 'spatial_pointing'  // Direct visual near vs far discrimination without translation
  | 'alternative_qa'    // Fast-paced dialogic mini-game (أ... أم... battery)
  | 'tarkib_dissector'  // Interactive syntactic tree slotting
  | 'sentence_assembly' // Interactive sentence building with word chips
  | 'cloze_choice'      // Single-blank Q&A drill with options
  | 'speed_pair'        // Active recall pair matching
  | 'quranic_echo'      // Sacred milestone scripture synchronization
  | 'sun_moon_sort'     // Sun vs Moon letters phonetic drill
  | 'branching_syntax'  // Demonstrative syntax tree equation
  | 'possessive_matrix' // Possessive pronoun suffix conjugation grid
  | 'idafah_equation'   // Idafah formula (Mudaf & Mudaf Ilayh)
  | 'syntax_fronting'   // Spatial syntax contrast & interrogative fronting
  | 'verb_preview_grid'; // Foundational verb conjugation paradigm preview for pure memorization

export interface ConceptItem {
  id: string;
  ar: string;
  romanized: string;
  meaningEn: string;
  meaningBn: string;
  descriptionEn?: string;
  descriptionBn?: string;
  distance?: 'near' | 'far';
  exampleAr: string;
  exampleEn: string;
  exampleBn: string;
  audioKey: string;
  exampleAudioKey?: string;
  emoji?: string;
  compound?: {
    baseAr: string;
    baseRom?: string;
    baseMeaningEn: string;
    baseMeaningBn?: string;
    baseAudioKey?: string;
    operator?: string;
    particleAr?: string;
    particleEn?: string;
    resultAr: string;
    resultRom?: string;
    resultMeaningEn: string;
    resultMeaningBn?: string;
    resultAudioKey?: string;
    badge?: string;
  };
}

export interface SunMoonItem {
  id: string;
  wordAr: string;
  wordEn: string;
  letter: string;
  letterType: 'sun' | 'moon';
  pronunciationAr: string;
  romanized?: string;
  audioKey: string;
  emoji?: string;
}

export interface SunMoonPayload {
  items: SunMoonItem[];
}

export interface BranchingSyntaxPayload {
  pointerAr: string;
  pointerEn: string;
  indefiniteNounAr: string;
  indefiniteSentenceAr: string;
  indefiniteMeaningEn: string;
  indefiniteMeaningBn?: string;
  definiteNounAr: string;
  definiteNounBn?: string;
  definitePhraseAr: string;
  definitePhraseMeaningEn: string;
  definitePhraseMeaningBn?: string;
  predicateAdjectiveAr: string;
  completeSentenceAr: string;
  completeSentenceMeaningEn: string;
  completeSentenceMeaningBn?: string;
  audioKeySentence: string;
  audioKeyPhrase: string;
  audioKeyComplete: string;
  emoji?: string;
}

export interface PossessiveMatrixItem {
  baseWordAr: string;
  baseMeaningEn: string;
  emoji: string;
  isIrregularFiveNoun?: boolean;
  forms: {
    suffix: string;
    pronounLabel: string;
    ar: string;
    en: string;
    romanized: string;
    audioKey: string;
  }[];
}

export interface PossessiveMatrixPayload {
  matrices: PossessiveMatrixItem[];
}

export interface IdafahExample {
  id: string;
  breakdownAr: string;
  compoundAr: string;
  compoundEn: string;
  compoundBn: string;
  typeLabelEn: string;
  typeLabelBn: string;
  audioKey: string;
}

export interface IdafahEquationPayload {
  ruleSummaryEn: string;
  ruleSummaryBn: string;
  examples: IdafahExample[];
}

export interface SyntaxFrontingSentence {
  id: string;
  arabic: string;
  meaningEn: string;
  meaningBn: string;
  labelEn: string;
  labelBn: string;
  audioKey: string;
}

export interface SyntaxFrontingPayload {
  ruleSummaryEn: string;
  ruleSummaryBn: string;
  sentences: SyntaxFrontingSentence[];
}

export interface SpatialPointingPayload {
  objectAr: string;           // e.g. "كِتَابٌ"
  gender: 'masculine' | 'feminine';
  distance: 'near' | 'far';   // Spatial perspective: near vs far
  correctAnswer: string;      // e.g. "هَذَا كِتَابٌ" or "ذَلِكَ كِتَابٌ"
  options: string[];          // e.g. ["هَذَا كِتَابٌ", "ذَلِكَ كِتَابٌ"]
  emoji: string;
  audioKey?: string;
  visualCue?: string;
}

export interface AlternativeQAItem {
  id: string;
  questionAr: string;         // e.g. "أَ خَالِدٌ إِمَامُ هٰذَا الْمَسْجِدِ أَمْ رَاشِدٌ ؟"
  optionsAr: string[];        // e.g. ["خَالِدٌ", "رَاشِدٌ"]
  correctAnswerAr: string;    // e.g. "رَاشِدٌ"
  audioKey?: string;
  contextAr?: string;
  contextEn?: string;
  contextBn?: string;
  visualCue?: string;
}

export interface AlternativeQAPayload {
  contextAr?: string;         // e.g. "رَاشِدٌ إِمَامُ هٰذَا الْمَسْجِدِ"
  contextEn?: string;
  contextBn?: string;
  questions: AlternativeQAItem[];
}

export interface TarkibSlot {
  roleAr: string;             // e.g. "مُبْتَدَأ" | "خَبَر" | "مَوْصُوف" | "صِفَة"
  roleEn: string;             // e.g. "Subject" | "Predicate"
  roleBn: string;             // e.g. "উদ্দেশ্য (মুবতাদা)" | "বিধেয় (খবর)"
  expectedWordAr: string;     // e.g. "هٰذَا"
}

export interface TarkibSentence {
  id: string;
  sentenceAr: string;         // e.g. "هٰذَا مَسْجِدٌ جَمِيلٌ"
  sentenceTypeAr: string;     // e.g. "جُمْلَةٌ اسْمِيَّةٌ (مُرَكَّبٌ تَامٌّ)"
  sentenceTypeEn: string;     // e.g. "Nominal Sentence (Complete)"
  sentenceTypeBn: string;     // e.g. "নামবাচক বাক্য (পূর্ণ কথা)"
  slots: TarkibSlot[];
  availableWordsAr: string[];
}

export interface TarkibDissectorPayload {
  sentences: TarkibSentence[];
}

export interface VerbConjugationForm {
  id: string;
  roleAr: string;            // e.g. "هُوَ - هِيَ" or "أَنْتَ - أَنْتِ" or "أَنَا" or "الأَمْرُ - النَّهْيُ"
  roleEn: string;            // e.g. "3rd Person (He / She)"
  roleBn: string;            // e.g. "সে (পুং - স্ত্রী)"
  masculineAr: string;       // e.g. "فَعَلَ" / "يَفْعَلُ" / "اِفْعَلْ"
  masculineBn?: string;      // e.g. "সে করেছে, করল" / "সে করবে, করছে, করে" / "তুমি কর"
  masculineEn?: string;      // e.g. "He did" / "He does/will do" / "Do (m)"
  feminineAr?: string;       // e.g. "فَعَلَتْ" / "تَفْعَلُ" / "اِفْعَلِيْ"
  feminineBn?: string;       // e.g. "সে করেছে, করল" / "সে করবে, করছে, করে" / "তুমি কর"
  feminineEn?: string;       // e.g. "She did" / "She does/will do" / "Do (f)"
  prohibitiveMascAr?: string;// e.g. "لَا تَفْعَلْ"
  prohibitiveMascBn?: string;// e.g. "তুমি করো না"
  prohibitiveMascEn?: string;// e.g. "Do not do (m)"
  prohibitiveFemAr?: string; // e.g. "لَا تَفْعَلِيْ"
  prohibitiveFemBn?: string; // e.g. "তুমি করো না"
  prohibitiveFemEn?: string; // e.g. "Do not do (f)"
  audioKey?: string;
}

export interface VerbPreviewItem {
  id: string;
  rootAr: string;            // e.g. "فَعَلَ"
  rootBn: string;            // e.g. "করা"
  rootEn: string;            // e.g. "To do"
  emoji: string;             // e.g. "⚡"
  forms: VerbConjugationForm[];
}

export interface VerbPreviewPayload {
  tense: 'past' | 'present' | 'imperative';
  tenseLabelAr: string;      // "الفِعْلُ المَاضِي" | "الفِعْلُ المُضَارِعُ" | "فِعْلُ الأَمْرِ وَالنَّهْيِ"
  tenseLabelEn: string;      // "Past Tense (Al-Madi)" | "Present/Future Tense (Al-Mudari')" | "Imperative & Prohibitive"
  tenseLabelBn: string;      // "অতীতকালীন ক্রিয়া (আল-মাযী)" | "বর্তমান ও ভবিষ্যৎকালীন ক্রিয়া (আল-মুদারী')" | "আদেশ ও নিষেধবাচক ক্রিয়া (আমর ও নাহী)"
  disclaimerAr: string;      // "فَقَطْ لِلْحِفْظِ ، لَا لِلِاسْتِعْمَالِ"
  disclaimerEn: string;      // "For memorization only, not for active practice yet"
  disclaimerBn: string;      // "শুধু মুখস্থ করার জন্য, ব্যবহার করার জন্য নয়"
  verbs: VerbPreviewItem[];
}

export interface SessionStep {
  id: string;
  type: StepType;
  pageNumber: number;
  titleEn: string;
  titleAr: string;
  instructionEn: string;
  instructionBn: string;
  itemId?: string; // Links to ItemRetention SRS store

  vocabPayload?: {
    words: {
      id: string;
      ar: string;
      en: string;
      bn: string;
      romanized: string;
      emoji: string;
    }[];
  };

  conceptPayload?: {
    concepts: ConceptItem[];
  };

  polarPayload?: {
    arabicSubject: string;
    meaningEn: string;
    meaningBn: string;
    distance?: 'near' | 'far';
    gender?: 'masculine' | 'feminine';
    correctAnswer: string;
    options: string[];
    emoji: string;
  };

  spatialPointingPayload?: SpatialPointingPayload;
  alternativeQAPayload?: AlternativeQAPayload;
  tarkibPayload?: TarkibDissectorPayload;

  assemblyPayload?: {
    promptEn: string;
    promptBn: string;
    promptAr?: string;
    expectedAnswer: string[];
    chips: string[];
    emoji: string;
    expectedAnswerBn?: string[];
    chipsBn?: string[];
  };

  clozePayload?: {
    questionAr: string;
    questionEn: string;
    questionBn: string;
    partialAnswerAr: string;
    correctAnswer: string;
    options: string[];
    emoji: string;
    distance?: 'near' | 'far';
  };

  pairPayload?: {
    pairs: {
      ar: string;
      meaning: string;
      id: string;
    }[];
  };

  echoPayload?: {
    surahNumber: number;
    ayahNumber: number;
    surahNameAr: string;
    surahNameEn: string;
    arabicText: string;
    translationEn: string;
    translationBn: string;
    highlightedWords: string[];
    reflection: string;
    audioKey?: string;
    patternNameEn?: string;
    patternNameBn?: string;
    lessonPatternAr?: string;
    lessonPatternEn?: string;
    lessonPatternBn?: string;
    quranPatternAr?: string;
    quranPatternEn?: string;
    quranPatternBn?: string;
  };

  sunMoonPayload?: SunMoonPayload;
  branchingPayload?: BranchingSyntaxPayload;
  matrixPayload?: PossessiveMatrixPayload;
  idafahPayload?: IdafahEquationPayload;
  syntaxFrontingPayload?: SyntaxFrontingPayload;
  verbPreviewPayload?: VerbPreviewPayload;
}

export interface LessonSessionData {
  volumeId: number;
  chapterId: number;
  lessonNum: number;
  titleEn: string;
  titleAr: string;
  wordsLearned: string[];
  steps: SessionStep[];
}

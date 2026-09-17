// Universal Lesson Session Types for Tariq Monorepo

export type StepType = 
  | 'vocab_prime'       // Vocabulary priming with audio
  | 'concept_intro'     // Grammar & rule concept discovery
  | 'polar_sort'        // Binary spatial / gender discrimination drill
  | 'sentence_assembly' // Interactive sentence building with word chips
  | 'cloze_choice'      // Single-blank Q&A drill with options
  | 'speed_pair'        // Active recall pair matching
  | 'quranic_echo'      // Sacred milestone scripture synchronization
  | 'sun_moon_sort'     // Lesson 4 Page 27: Sun vs Moon letters phonetic drill
  | 'branching_syntax'  // Lesson 4 Page 30: Demonstrative syntax tree equation
  | 'possessive_matrix' // Lesson 5 Page 32-33: Possessive pronoun suffix conjugation grid
  | 'idafah_equation'   // Lesson 6 Page 36: Idafah formula (Mudaf & Mudaf Ilayh)
  | 'syntax_fronting';  // Lesson 7 Page 39-40: Spatial syntax contrast & interrogative fronting

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

  assemblyPayload?: {
    promptEn: string;
    promptBn: string;
    expectedAnswer: string[];
    chips: string[];
    emoji: string;
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
  };

  sunMoonPayload?: SunMoonPayload;
  branchingPayload?: BranchingSyntaxPayload;
  matrixPayload?: PossessiveMatrixPayload;
  idafahPayload?: IdafahEquationPayload;
  syntaxFrontingPayload?: SyntaxFrontingPayload;
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

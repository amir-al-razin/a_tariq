import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Volume2, VolumeX, Sparkles, AlertCircle, Award } from 'lucide-react';
import type { SessionStep, LessonSessionData } from '@/lib/lessonSessionTypes';
import { getLessonSession } from '@/lib/lessonRegistry';
import { LESSON_01_SESSION } from '@/lib/lesson1Session';
import { useRetentionStore } from '@/state/retentionStore';
import { useLearningSettingsStore } from '@/state/learningSettingsStore';
import { playSuccessChime, playErrorCue, playTapSound } from '@/lib/sound';
import { playArabicAudio, stopArabicAudio } from '@/lib/arabicAudio';
import { useLanguage } from '@/hooks/useLanguage';
import TransliterationToggle from '../TransliterationToggle';

interface LessonSessionRunnerProps {
  volumeId: number;
  chapterId: number;
  lessonNum: number;
  onExit: () => void;
}

// Convert English numbers to Arabic-Indic digits
function toArabicNumerals(n: number): string {
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return n.toString().split('').map(d => digits[parseInt(d, 10)] || d).join('');
}

export const LessonSessionRunner: React.FC<LessonSessionRunnerProps> = ({
  volumeId,
  chapterId,
  lessonNum,
  onExit,
}) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const sessionData: LessonSessionData = useMemo(() => {
    return getLessonSession(volumeId, chapterId, lessonNum) || LESSON_01_SESSION;
  }, [volumeId, chapterId, lessonNum]);

  // Session Queue State
  const [steps, setSteps] = useState<SessionStep[]>(() => sessionData.steps);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [errorQueue, setErrorQueue] = useState<SessionStep[]>([]);
  const [isReviewingErrors, setIsReviewingErrors] = useState<boolean>(false);
  const [isSessionComplete, setIsSessionComplete] = useState<boolean>(false);

  // Sync session steps when lesson changes
  useEffect(() => {
    setSteps(sessionData.steps);
    setCurrentStepIndex(0);
    setErrorQueue([]);
    setIsReviewingErrors(false);
    setIsSessionComplete(false);
    setTotalAttempts(0);
    setFirstTryCorrectCount(0);
    setRecycledErrorsResolved(0);
  }, [sessionData]);

  // Telemetry
  const [totalAttempts, setTotalAttempts] = useState<number>(0);
  const [firstTryCorrectCount, setFirstTryCorrectCount] = useState<number>(0);
  const [recycledErrorsResolved, setRecycledErrorsResolved] = useState<number>(0);
  const [startTime] = useState<number>(Date.now());

  // Interactive step local state
  const [selectedPolarAnswer, setSelectedPolarAnswer] = useState<string | null>(null);
  const [selectedClozeAnswer, setSelectedClozeAnswer] = useState<string | null>(null);
  const [assembledChips, setAssembledChips] = useState<string[]>([]);
  const [availableChips, setAvailableChips] = useState<string[]>([]);
  const [activeVocabCardIndex, setActiveVocabCardIndex] = useState<number>(0);
  const [stepStatus, setStepStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  // Pair match local state
  const [selectedPairArabic, setSelectedPairArabic] = useState<string | null>(null);
  const [selectedPairMeaning, setSelectedPairMeaning] = useState<string | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);
  const [mismatchedPair, setMismatchedPair] = useState<{ arId: string; meaningId: string } | null>(null);
  const [hadPairMistake, setHadPairMistake] = useState<boolean>(false);
  const [shuffledMeaningPairs, setShuffledMeaningPairs] = useState<{ id: string; ar: string; meaning: string }[]>([]);

  // Sun / Moon sort local state (Lesson 4 Page 27)
  const [activeSunMoonIndex, setActiveSunMoonIndex] = useState<number>(0);
  const [selectedSunMoonChoice, setSelectedSunMoonChoice] = useState<'sun' | 'moon' | null>(null);


  // Possessive Matrix local state (Lesson 5 Page 32-33)
  const [activeMatrixNounIndex, setActiveMatrixNounIndex] = useState<number>(0);
  const [selectedSuffixIndex, setSelectedSuffixIndex] = useState<number>(0);

  // Stores
  const recordItemResult = useRetentionStore((state) => state.recordItemResult);
  const recordSessionComplete = useRetentionStore((state) => state.recordSessionComplete);

  // Learning Preferences
  const {
    showTransliteration,
    autoPlayAudio,
    toggleAutoPlayAudio,
  } = useLearningSettingsStore();

  const currentStep = steps[currentStepIndex];

  // Initialize chips for assembly step and shuffled meanings for pair matching
  useEffect(() => {
    if (currentStep?.type === 'sentence_assembly' && currentStep.assemblyPayload) {
      // Shuffle available chips (Fisher-Yates)
      const chips = [...currentStep.assemblyPayload.chips];
      for (let i = chips.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chips[i], chips[j]] = [chips[j], chips[i]];
      }
      setAvailableChips(chips);
      setAssembledChips([]);
    }
    if (currentStep?.type === 'speed_pair' && currentStep.pairPayload) {
      const original = currentStep.pairPayload.pairs;
      let deranged = [...original];
      if (original.length > 1) {
        let isDeranged = false;
        let attempts = 0;
        while (!isDeranged && attempts < 50) {
          attempts++;
          for (let i = deranged.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deranged[i], deranged[j]] = [deranged[j], deranged[i]];
          }
          isDeranged = deranged.every((p, idx) => p.id !== original[idx].id);
        }
        // Deterministic cyclic shift fallback if random shuffle didn't derange
        if (!isDeranged) {
          deranged = original.map((_, idx) => original[(idx + 1) % original.length]);
        }
      }
      setShuffledMeaningPairs(deranged);
    }
    setSelectedPolarAnswer(null);
    setSelectedClozeAnswer(null);
    setActiveVocabCardIndex(0);
    setMatchedPairIds([]);
    setSelectedPairArabic(null);
    setSelectedPairMeaning(null);
    setMismatchedPair(null);
    setHadPairMistake(false);
    setActiveSunMoonIndex(0);
    setSelectedSunMoonChoice(null);
    setActiveMatrixNounIndex(0);
    setSelectedSuffixIndex(0);
    setStepStatus('idle');
  }, [currentStep]);

  // Overall progress percentage
  const progressPercent = useMemo(() => {
    if (steps.length === 0) return 0;
    return Math.min(100, Math.round((currentStepIndex / steps.length) * 100));
  }, [currentStepIndex, steps.length]);

  // Accuracy calculation
  const accuracyRate = useMemo(() => {
    if (totalAttempts === 0) return 100;
    return Math.round((firstTryCorrectCount / totalAttempts) * 100);
  }, [totalAttempts, firstTryCorrectCount]);

  // Handle advancing to the next step
  const advanceToNext = useCallback(() => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else if (!isReviewingErrors && errorQueue.length > 0) {
      // Switch into error queue review mode once
      setIsReviewingErrors(true);
      setSteps(errorQueue);
      setErrorQueue([]);
      setCurrentStepIndex(0);
    } else {
      // Finish session
      setIsSessionComplete(true);
      const durationSeconds = Math.round((Date.now() - startTime) / 1000);
      recordSessionComplete({
        volumeId,
        chapterId,
        lessonNum,
        totalQuestions: totalAttempts,
        firstTryCorrect: firstTryCorrectCount,
        recycledErrorsResolved,
        accuracyRate,
        timeSpentSeconds: durationSeconds,
        wordsLearned: sessionData.wordsLearned,
      });
      playSuccessChime();
    }
  }, [
    currentStepIndex,
    steps.length,
    isReviewingErrors,
    errorQueue,
    startTime,
    recordSessionComplete,
    volumeId,
    chapterId,
    lessonNum,
    sessionData,
    totalAttempts,
    firstTryCorrectCount,
    recycledErrorsResolved,
    accuracyRate,
  ]);

  // Mark step success
  const handlePass = useCallback(() => {
    setStepStatus('correct');
    playSuccessChime();
    setTotalAttempts((prev) => prev + 1);

    if (isReviewingErrors) {
      setRecycledErrorsResolved((prev) => prev + 1);
    } else {
      setFirstTryCorrectCount((prev) => prev + 1);
    }

    if (currentStep.itemId) {
      recordItemResult(
        {
          itemId: currentStep.itemId,
          itemType: currentStep.type === 'sentence_assembly' ? 'phrase' : 'pattern',
          arabic: currentStep.polarPayload?.correctAnswer || currentStep.clozePayload?.correctAnswer || 'تَرْكِيبٌ',
          lemma: currentStep.itemId,
          meaningEn: currentStep.polarPayload?.meaningEn || currentStep.assemblyPayload?.promptEn || '',
          meaningBn: currentStep.polarPayload?.meaningBn || currentStep.assemblyPayload?.promptBn || '',
          volume: volumeId,
          chapter: chapterId,
          lesson: lessonNum,
        },
        true
      );
    }
  }, [currentStep, isReviewingErrors, recordItemResult, volumeId, chapterId, lessonNum]);

  // Mark step error & add to error queue
  const handleFail = useCallback(() => {
    setStepStatus('incorrect');
    playErrorCue();
    setTotalAttempts((prev) => prev + 1);

    // Only add to error queue during normal lesson run to prevent review infinite loops
    if (!isReviewingErrors) {
      setErrorQueue((prev) => {
        if (prev.some((item) => item.id === currentStep.id)) return prev;
        return [...prev, currentStep];
      });
    }

    if (currentStep.itemId) {
      recordItemResult(
        {
          itemId: currentStep.itemId,
          itemType: currentStep.type === 'sentence_assembly' ? 'phrase' : 'pattern',
          arabic: currentStep.polarPayload?.correctAnswer || currentStep.clozePayload?.correctAnswer || 'تَرْكِيبٌ',
          lemma: currentStep.itemId,
          meaningEn: currentStep.polarPayload?.meaningEn || currentStep.assemblyPayload?.promptEn || '',
          meaningBn: currentStep.polarPayload?.meaningBn || currentStep.assemblyPayload?.promptBn || '',
          volume: volumeId,
          chapter: chapterId,
          lesson: lessonNum,
        },
        false
      );
    }
  }, [currentStep, recordItemResult, volumeId, chapterId, lessonNum]);

  // High-fidelity Arabic audio playback
  const speakArabic = useCallback((text: string) => {
    playTapSound();
    playArabicAudio(text);
  }, []);

  // Automatic Audio Playback on New Word / Step Appearance
  useEffect(() => {
    if (!autoPlayAudio) return;

    if (currentStep?.type === 'vocab_prime' && currentStep.vocabPayload) {
      const words = currentStep.vocabPayload.words;
      const word = words[activeVocabCardIndex];
      if (word?.ar) {
        playArabicAudio(word.ar);
      }
    } else if (currentStep?.type === 'concept_intro' && currentStep.conceptPayload) {
      const concepts = currentStep.conceptPayload.concepts;
      const concept = concepts[activeVocabCardIndex];
      if (concept?.audioKey) {
        playArabicAudio(concept.audioKey);
      }
    } else if (currentStep?.type === 'polar_sort' && currentStep.polarPayload) {
      playArabicAudio(currentStep.polarPayload.arabicSubject);
    } else if (currentStep?.type === 'cloze_choice' && currentStep.clozePayload) {
      playArabicAudio(currentStep.clozePayload.questionAr);
    } else if (currentStep?.type === 'quranic_echo' && currentStep.echoPayload) {
      const echo = currentStep.echoPayload;
      const ayahKey = echo.audioKey || `quran_${String(echo.surahNumber).padStart(3, '0')}${String(echo.ayahNumber).padStart(3, '0')}`;
      playArabicAudio(ayahKey);
    }
  }, [currentStepIndex, activeVocabCardIndex, autoPlayAudio, currentStep]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopArabicAudio();
    };
  }, []);

  // Keyboard navigation (Space to continue when completed)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && stepStatus === 'correct') {
        e.preventDefault();
        advanceToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stepStatus, advanceToNext]);

  // --------------------------------------------------------------------------
  // RENDER: VOCABULARY PRIMING STEP
  // --------------------------------------------------------------------------
  const renderVocabPrime = () => {
    const words = currentStep.vocabPayload?.words || [];
    const word = words[activeVocabCardIndex] || words[0];
    const isLastCard = activeVocabCardIndex === words.length - 1;

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-6">
        <motion.div
          key={word.id}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="w-full p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center text-center space-y-5"
        >
          <div className="w-20 h-20 rounded-3xl bg-white dark:bg-neutral-950 flex items-center justify-center text-5xl select-none">
            {word.emoji}
          </div>

          <div className="space-y-2">
            <h2
              className="font-arabic-bold text-5xl md:text-6xl text-neutral-950 dark:text-white leading-relaxed select-none"
              dir="rtl"
            >
              {word.ar}
            </h2>
            {showTransliteration && (
              <p className="font-mono text-sm tracking-wider text-neutral-400 select-none">
                {word.romanized}
              </p>
            )}
          </div>

          <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60 w-full">
            <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {isBn ? (word.bn || word.en) : word.en}
            </div>
          </div>

          <button
            onClick={() => speakArabic(word.ar)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Volume2 size={16} />
            <span>Listen Pronunciation</span>
          </button>
        </motion.div>

        {/* Carousel indicator dots */}
        <div className="flex items-center gap-2">
          {words.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-200 ${
                idx === activeVocabCardIndex
                  ? 'w-6 bg-accent-primary'
                  : idx < activeVocabCardIndex
                  ? 'w-2 bg-accent-secondary'
                  : 'w-2 bg-neutral-200 dark:bg-neutral-800'
              }`}
            />
          ))}
        </div>

        {/* Primary Action Button (56px) */}
        <button
          onClick={() => {
            playTapSound();
            // Record vocab word into SRS store
            recordItemResult(
              {
                itemId: word.id,
                itemType: 'word',
                arabic: word.ar,
                lemma: word.ar,
                meaningEn: word.en,
                meaningBn: word.bn,
                volume: volumeId,
                chapter: chapterId,
                lesson: lessonNum,
              },
              true
            );

            if (isLastCard) {
              advanceToNext();
            } else {
              setActiveVocabCardIndex((prev) => prev + 1);
            }
          }}
          className="w-full h-14 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
        >
          <span>{isLastCard ? 'Complete Vocabulary' : 'Next Word'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: CONCEPT DISCOVERY STEP (Pointer / Grammar Discovery - Page 15 box)
  // --------------------------------------------------------------------------
  const renderConceptIntro = () => {
    const payload = currentStep.conceptPayload;
    if (!payload || payload.concepts.length === 0) return null;

    const currentConcept = payload.concepts[activeVocabCardIndex] || payload.concepts[0];
    const isLastCard = activeVocabCardIndex === payload.concepts.length - 1;

    // Check if this concept demonstrates a compound / syntactic transformation (e.g. 'الْقَرْيَةُ ➔ فِي الْقَرْيَةِ')
    const isCompound = Boolean(
      currentConcept.compound ||
      currentConcept.ar.includes('➔') ||
      currentConcept.ar.includes('->')
    );

    const compoundData = isCompound
      ? currentConcept.compound || (() => {
          const arrowChar = currentConcept.ar.includes('➔') ? '➔' : '->';
          const [baseAr, resultAr] = currentConcept.ar.split(arrowChar).map((s) => s.trim());
          const [baseRom, resultRom] = (currentConcept.romanized || '').split(arrowChar).map((s) => s.trim());
          const [baseMeaningEn, resultMeaningEn] = (currentConcept.meaningEn || '').split(arrowChar).map((s) => s.trim());
          const [baseMeaningBn, resultMeaningBn] = (currentConcept.meaningBn || '').split(arrowChar).map((s) => s.trim());
          return {
            baseAr,
            baseRom,
            baseMeaningEn,
            baseMeaningBn,
            operator: '➔',
            resultAr,
            resultRom,
            resultMeaningEn,
            resultMeaningBn,
            resultAudioKey: currentConcept.audioKey,
            baseAudioKey: undefined as string | undefined,
            particleAr: undefined as string | undefined,
            particleEn: undefined as string | undefined,
            badge: undefined as string | undefined,
          };
        })()
      : null;

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-5">
        {/* Concept Presentation Card (Level 1 Surface Well) */}
        <div className="w-full p-5 sm:p-6 rounded-4xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center text-center space-y-5">
          {/* Card index indicator */}
          <div className="flex items-center gap-1.5">
            {payload.concepts.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeVocabCardIndex
                    ? 'w-6 bg-accent-primary'
                    : 'w-1.5 bg-neutral-300 dark:bg-neutral-700'
                }`}
              />
            ))}
          </div>

          {/* Level 2 Raised Card: Pure, Uncluttered Transformation Stage */}
          {isCompound && compoundData ? (
            <div className="w-full rounded-3xl bg-white dark:bg-neutral-950 p-6 sm:p-7 flex flex-col items-center text-center space-y-5">
              {/* Transformation Flow: Base ➔ Result */}
              <div className="w-full flex items-center justify-around sm:justify-center sm:gap-8">
                {/* Base Form */}
                <button
                  type="button"
                  onClick={() => playArabicAudio(compoundData.baseAudioKey || compoundData.baseAr)}
                  className="group flex flex-col items-center space-y-1 cursor-pointer bg-transparent border-0 p-0 text-center transition-transform active:scale-95"
                  title="Listen"
                >
                  <span className="font-arabic-bold text-3xl sm:text-4xl text-neutral-800 group-hover:text-neutral-950 dark:text-neutral-200 dark:group-hover:text-white leading-relaxed whitespace-nowrap transition-colors" dir="rtl">
                    {compoundData.baseAr}
                  </span>
                  {showTransliteration && compoundData.baseRom && (
                    <span className="text-xs font-mono text-neutral-400">
                      {compoundData.baseRom}
                    </span>
                  )}
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400" dir="ltr">
                    {isBn ? (compoundData.baseMeaningBn || compoundData.baseMeaningEn) : compoundData.baseMeaningEn}
                  </span>
                </button>

                {/* Subtle Flow Arrow */}
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0 text-sm select-none">
                  ➔
                </div>

                {/* Transformed Result (Semantic Heritage Accent) */}
                <button
                  type="button"
                  onClick={() => playArabicAudio(compoundData.resultAudioKey || currentConcept.audioKey || compoundData.resultAr)}
                  className="group flex flex-col items-center space-y-1 cursor-pointer bg-transparent border-0 p-0 text-center transition-transform active:scale-95"
                  title="Listen"
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="font-arabic-bold text-3xl sm:text-4xl text-accent-primary group-hover:opacity-90 leading-relaxed whitespace-nowrap transition-opacity" dir="rtl">
                      {compoundData.resultAr}
                    </span>
                    <Volume2 size={16} className="text-accent-primary/60 group-hover:text-accent-primary shrink-0 transition-colors" />
                  </div>
                  {showTransliteration && compoundData.resultRom && (
                    <span className="text-xs font-mono text-accent-primary/80">
                      {compoundData.resultRom}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white" dir="ltr">
                    {isBn ? (compoundData.resultMeaningBn || compoundData.resultMeaningEn) : compoundData.resultMeaningEn}
                  </span>
                </button>
              </div>

              {/* Quiet Divider */}
              {currentConcept.exampleAr && currentConcept.exampleAr !== currentConcept.ar && (
                <div className="h-px w-24 bg-neutral-100 dark:bg-neutral-850" />
              )}

              {/* Contextual Example (Centered, Calm, Uncluttered) */}
              {currentConcept.exampleAr && currentConcept.exampleAr !== currentConcept.ar && (
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-arabic-bold text-2xl sm:text-3xl text-neutral-900 dark:text-white text-center" dir="rtl">
                      {currentConcept.exampleAr}
                    </span>
                    <button
                      type="button"
                      onClick={() => playArabicAudio(currentConcept.exampleAudioKey || currentConcept.exampleAr)}
                      className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer shadow-none border-0 shrink-0"
                      aria-label="Listen to example"
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 text-center" dir="ltr">
                    {isBn ? (currentConcept.exampleBn || currentConcept.exampleEn) : currentConcept.exampleEn}
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Single Pointer Word Display */
            <div className="w-full rounded-3xl bg-white dark:bg-neutral-950 p-6 sm:p-8 flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3">
                  <h2 className="font-arabic-bold text-6xl text-neutral-900 dark:text-white" dir="rtl">
                    {currentConcept.ar}
                  </h2>
                  <button
                    onClick={() => playArabicAudio(currentConcept.audioKey)}
                    className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer shadow-none border-0"
                    aria-label="Listen to word"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
                {showTransliteration && (
                  <p className="text-base font-mono text-accent-primary font-medium">
                    {currentConcept.romanized}
                  </p>
                )}
                <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {isBn ? (currentConcept.meaningBn || currentConcept.meaningEn) : currentConcept.meaningEn}
                </div>
              </div>

              {/* Authentic Visual Cue - Spatial Distance Only */}
              {currentConcept.distance && (
                <div className="w-full py-4 flex items-center justify-center">
                  {currentConcept.distance === 'near' ? (
                    <div className="flex items-center justify-center gap-5">
                      <span className="text-3xl select-none animate-pulse">👉</span>
                      <span className="text-4xl select-none">{currentConcept.emoji}</span>
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-between px-6">
                      <span className="text-3xl select-none">👉</span>
                      <div className="flex-1 mx-4 flex items-center">
                        <div className="flex-1 border-t-2 border-dashed border-accent-secondary/60" />
                        <span className="text-accent-secondary text-sm -mr-1">▶</span>
                      </div>
                      <span className="text-4xl select-none">{currentConcept.emoji}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Example Sentence / Phrase in Context */}
              {currentConcept.exampleAr && currentConcept.exampleAr !== currentConcept.ar && (
                <>
                  <div className="h-px w-24 bg-neutral-100 dark:bg-neutral-850" />
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-arabic-bold text-2xl text-neutral-900 dark:text-white text-center" dir="rtl">
                        {currentConcept.exampleAr}
                      </span>
                      <button
                        type="button"
                        onClick={() => playArabicAudio(currentConcept.exampleAudioKey || currentConcept.exampleAr)}
                        className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 transition-colors cursor-pointer shadow-none border-0 shrink-0"
                        aria-label="Listen to example"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 text-center" dir="ltr">
                      {isBn ? (currentConcept.exampleBn || currentConcept.exampleEn) : currentConcept.exampleEn}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* 56px Primary Action Button */}
        <button
          onClick={() => {
            playTapSound();
            if (isLastCard) {
              advanceToNext();
            } else {
              setActiveVocabCardIndex((prev) => prev + 1);
            }
          }}
          className="w-full h-14 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
        >
          <span>{isLastCard ? 'I Understand! Continue' : 'Next'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: BINARY POLAR DISTANCE SORT STEP (Page 15-16 Spatial Perspective)
  // --------------------------------------------------------------------------
  const renderPolarSort = () => {
    const payload = currentStep.polarPayload;
    if (!payload) return null;

    const handleChoice = (option: string) => {
      if (stepStatus !== 'idle') return;
      playArabicAudio(option);
      setSelectedPolarAnswer(option);
      if (option === payload.correctAnswer) {
        handlePass();
      } else {
        handleFail();
      }
    };

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-6">
        {/* Textbook Illustration Card with Graphic Spatial Distance Perspective */}
        <div className="w-full p-6 sm:p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center space-y-6">
          {/* Spatial Perspective Stage */}
          <div className="w-full min-h-[140px] rounded-3xl bg-white dark:bg-neutral-950 relative overflow-hidden flex items-center p-4 sm:p-6 border-0">
            {payload.distance === 'near' ? (
              /* NEAR SCENE: Hand pointing right beside the object */
              <div className="w-full flex items-center justify-center gap-5 sm:gap-8">
                <div className="text-4xl sm:text-5xl select-none animate-pulse">
                  👉
                </div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-5xl select-none shadow-none">
                  {payload.emoji}
                </div>
                <div className="text-left space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-arabic-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white" dir="rtl">
                      {payload.arabicSubject}
                    </h3>
                    <button
                      onClick={() => playArabicAudio(payload.arabicSubject)}
                      className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer shadow-none border-0"
                      aria-label="Listen to word"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {isBn ? (payload.meaningBn || payload.meaningEn) : payload.meaningEn}
                  </p>
                </div>
              </div>
            ) : payload.distance === 'far' ? (
              /* FAR SCENE: Hand on the left, long distance arrow extending across, object on right */
              <div className="w-full flex items-center justify-between px-3 sm:px-6">
                <div className="text-4xl sm:text-5xl select-none">
                  👉
                </div>

                {/* Spatial Distance Arrow - symbols & arrow only */}
                <div className="flex-1 mx-4 sm:mx-8 flex items-center">
                  <div className="flex-1 border-t-2 border-dashed border-accent-secondary/60" />
                  <span className="text-accent-secondary text-sm -mr-1">▶</span>
                </div>

                {/* Far Target Object */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-4xl sm:text-5xl select-none shadow-none">
                    {payload.emoji}
                  </div>
                  <div className="text-left space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-arabic-bold text-2xl sm:text-3xl text-neutral-900 dark:text-white" dir="rtl">
                        {payload.arabicSubject}
                      </h3>
                      <button
                        onClick={() => playArabicAudio(payload.arabicSubject)}
                        className="w-7 h-7 rounded-full bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer shadow-none border-0"
                        aria-label="Listen to word"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      {isBn ? (payload.meaningBn || payload.meaningEn) : payload.meaningEn}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* GENDER / MORPHOLOGICAL DISCRIMINATION: Centered focus with zero pointers or object emojis */
              <div className="w-full flex flex-col items-center justify-center text-center space-y-2 py-3">
                <div className="flex items-center justify-center gap-3">
                  <h3 className="font-arabic-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white" dir="rtl">
                    {payload.arabicSubject}
                  </h3>
                  <button
                    onClick={() => playArabicAudio(payload.arabicSubject)}
                    className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer shadow-none border-0"
                    aria-label="Listen to word"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>
                <p className="text-sm sm:text-base font-medium text-neutral-500 dark:text-neutral-400">
                  {isBn ? (payload.meaningBn || payload.meaningEn) : payload.meaningEn}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Binary Choice Targets (56px) */}
        <div className="w-full grid grid-cols-2 gap-4">
          {payload.options.map((opt) => {
            const isSelected = selectedPolarAnswer === opt;
            const isCorrect = opt === payload.correctAnswer;

            let btnClass = 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100';

            if (stepStatus !== 'idle') {
              if (isCorrect) {
                btnClass = 'bg-emerald-600 text-white font-bold';
              } else if (isSelected) {
                btnClass = 'bg-rose-600 text-white font-bold';
              }
            }

            return (
              <button
                key={opt}
                disabled={stepStatus !== 'idle'}
                onClick={() => handleChoice(opt)}
                className={`h-16 rounded-3xl font-arabic-bold text-2xl flex items-center justify-center transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 ${btnClass}`}
                dir="rtl"
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Feedback & Advance Bar */}
        {stepStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full space-y-3"
          >
            {stepStatus === 'correct' ? (
              <div className="w-full p-4 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center gap-3">
                <Check size={20} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div className="text-sm font-semibold">
                  Correct! Well done.
                </div>
              </div>
            ) : (
              <div className="w-full p-4 rounded-2xl bg-rose-500/10 text-rose-700 dark:text-rose-400 flex flex-col gap-1 text-left">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <AlertCircle size={18} className="shrink-0 text-rose-600 dark:text-rose-400" />
                  <span>Not quite right</span>
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-300">
                  Correct answer:{' '}
                  <span className="font-arabic-bold text-base text-neutral-900 dark:text-white" dir="rtl">
                    {payload.correctAnswer}
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={advanceToNext}
              className={`w-full h-14 rounded-full font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 text-white ${
                stepStatus === 'correct'
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : 'bg-rose-600 hover:bg-rose-700'
              }`}
            >
              <span>{stepStatus === 'correct' ? 'Continue' : 'Got it! Continue'}</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: SENTENCE ASSEMBLY STEP (Word Chips with Shuffling)
  // --------------------------------------------------------------------------
  const renderSentenceAssembly = () => {
    const payload = currentStep.assemblyPayload;
    if (!payload) return null;

    const handleAddChip = (chip: string, index: number) => {
      if (stepStatus !== 'idle') return;
      playArabicAudio(chip);
      setAssembledChips((prev) => [...prev, chip]);
      setAvailableChips((prev) => prev.filter((_, idx) => idx !== index));
    };

    const handleRemoveChip = (chip: string, index: number) => {
      if (stepStatus !== 'idle') return;
      playTapSound();
      setAssembledChips((prev) => prev.filter((_, idx) => idx !== index));
      setAvailableChips((prev) => [...prev, chip]);
    };

    const handleVerify = () => {
      const isMatch =
        assembledChips.length === payload.expectedAnswer.length &&
        assembledChips.every((word, idx) => word === payload.expectedAnswer[idx]);

      if (isMatch) {
        playArabicAudio(payload.expectedAnswer.join(' '));
        handlePass();
      } else {
        handleFail();
      }
    };

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-6">
        {/* Target Sentence Prompt */}
        <div className="w-full p-6 sm:p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-english-bold text-neutral-900 dark:text-neutral-100">
            {isBn ? (payload.promptBn || payload.promptEn) : payload.promptEn}
          </h3>
        </div>

        {/* Assembly Dropzone Slot */}
        <div
          className={`w-full min-h-[80px] p-4 rounded-3xl flex flex-wrap items-center justify-center gap-3 transition-colors ${
            assembledChips.length === 0
              ? 'border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100/50 dark:bg-neutral-900/50'
              : 'bg-neutral-100 dark:bg-neutral-900 border-0'
          }`}
          dir="rtl"
        >
          {assembledChips.length === 0 ? (
            <span className="text-xs font-mono uppercase text-neutral-400 select-none">
              Tap chips below to assemble sentence
            </span>
          ) : (
            assembledChips.map((chip, idx) => (
              <motion.button
                key={`${chip}-${idx}`}
                layout
                onClick={() => handleRemoveChip(chip, idx)}
                disabled={stepStatus !== 'idle'}
                className="h-12 px-5 rounded-2xl bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white font-arabic-bold text-xl cursor-pointer select-none shadow-none border-0 active:scale-95 transition-transform"
              >
                {chip}
              </motion.button>
            ))
          )}
        </div>

        {/* Available Shuffled Word Chips */}
        <div className="w-full flex flex-wrap items-center justify-center gap-3 pt-2" dir="rtl">
          {availableChips.map((chip, idx) => (
            <button
              key={`${chip}-${idx}`}
              onClick={() => handleAddChip(chip, idx)}
              disabled={stepStatus !== 'idle'}
              className="h-12 px-5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-arabic-bold text-xl transition-transform active:scale-95 cursor-pointer select-none shadow-none border-0"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Action Button & Feedback */}
        {stepStatus === 'idle' ? (
          <button
            onClick={handleVerify}
            disabled={assembledChips.length === 0}
            className={`w-full h-14 rounded-full font-english-semibold text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-none border-0 ${
              assembledChips.length > 0
                ? 'bg-neutral-950 hover:bg-neutral-900 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 active:scale-[0.98]'
                : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed'
            }`}
          >
            <span>Check Sentence</span>
            <Check size={18} />
          </button>
        ) : (
          <div className="w-full space-y-3">
            {stepStatus === 'correct' ? (
              <div className="w-full p-4 rounded-2xl bg-accent-primary-subtle text-accent-primary flex items-center gap-3">
                <Check size={20} className="shrink-0 text-accent-primary" />
                <div className="text-sm font-semibold">
                  Excellent! Sentence assembled correctly.
                </div>
              </div>
            ) : (
              <div className="w-full p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white flex flex-col gap-1 text-left">
                <div className="flex items-center gap-2 font-bold text-sm text-accent-rose">
                  <AlertCircle size={18} className="shrink-0 text-accent-rose" />
                  <span>Not quite right</span>
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-300">
                  Correct answer:{' '}
                  <span className="font-arabic-bold text-base text-neutral-900 dark:text-white" dir="rtl">
                    {payload.expectedAnswer.join(' ')}
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={advanceToNext}
              className="w-full h-14 rounded-full font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 text-white bg-accent-primary hover:bg-accent-primary-hover"
            >
              <span>{stepStatus === 'correct' ? 'Continue' : 'Got it! Continue'}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: CLOZE / SINGLE CHOICE QUESTION DRILL (Page 18-19 Q&A)
  // --------------------------------------------------------------------------
  const renderClozeChoice = () => {
    const payload = currentStep.clozePayload;
    if (!payload) return null;

    const handleSelectOption = (option: string) => {
      if (stepStatus !== 'idle') return;
      playArabicAudio(option);
      setSelectedClozeAnswer(option);
      if (option === payload.correctAnswer) {
        handlePass();
      } else {
        handleFail();
      }
    };

    const rawAnswer = payload.partialAnswerAr || '';
    const hasBlankMarker = /(?:\.{2,}|…)/.test(rawAnswer);
    const fullAnswerText = hasBlankMarker ? rawAnswer : (rawAnswer ? `${rawAnswer} ...` : '...');
    const parts = fullAnswerText.split(/\s*(?:\.{2,}|…)\s*/);
    const prefix = parts[0]?.trim() || '';
    const suffix = parts.length > 1 ? parts.slice(1).join(' ').trim() : '';

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-6">
        {/* Textbook Q&A Question Card */}
        <div className="w-full p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center text-center space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center gap-3">
              <h3 className="font-arabic-bold text-4xl text-neutral-950 dark:text-white" dir="rtl">
                {payload.questionAr}
              </h3>
              <button
                onClick={() => playArabicAudio(payload.questionAr)}
                className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer shadow-none border-0"
                aria-label="Listen to question"
              >
                <Volume2 size={18} />
              </button>
            </div>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {isBn ? (payload.questionBn || payload.questionEn) : payload.questionEn}
            </p>
          </div>

          {/* Answer Sentence with Inline Blank Slot */}
          <div
            className="pt-3 flex flex-wrap items-center justify-center gap-2.5 text-2xl md:text-3xl font-arabic-bold text-neutral-900 dark:text-neutral-100"
            dir="rtl"
          >
            {prefix && <span>{prefix}</span>}
            <span
              className={`inline-flex items-center justify-center min-w-[100px] px-4 h-12 rounded-2xl transition-all select-none ${
                selectedClozeAnswer
                  ? stepStatus === 'correct'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-arabic-bold'
                    : stepStatus === 'incorrect'
                      ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 font-arabic-bold'
                      : 'bg-accent-primary-subtle text-accent-primary font-arabic-bold'
                  : 'bg-neutral-200/80 dark:bg-neutral-800/80 border-2 border-dashed border-neutral-300 dark:border-neutral-700 text-neutral-400 font-mono text-base tracking-widest'
              }`}
            >
              {selectedClozeAnswer || '···'}
            </span>
            {suffix && <span>{suffix}</span>}
          </div>
        </div>

        {/* 4 Options Grid (2x2) */}
        <div className="w-full grid grid-cols-2 gap-3" dir="rtl">
          {payload.options.map((opt) => {
            const isSelected = selectedClozeAnswer === opt;
            const isCorrect = opt === payload.correctAnswer;

            let btnClass = 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100';

            if (stepStatus !== 'idle') {
              if (isCorrect) {
                btnClass = 'bg-emerald-600 text-white font-bold';
              } else if (isSelected) {
                btnClass = 'bg-rose-600 text-white font-bold';
              }
            }

            return (
              <button
                key={opt}
                disabled={stepStatus !== 'idle'}
                onClick={() => handleSelectOption(opt)}
                className={`h-16 rounded-3xl font-arabic-bold text-2xl flex items-center justify-center transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 ${btnClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Action Button & Feedback Card */}
        {stepStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full space-y-3"
          >
            {stepStatus === 'correct' ? (
              <div className="w-full p-4 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center gap-3">
                <Check size={20} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div className="text-sm font-semibold">
                  Correct! Well done.
                </div>
              </div>
            ) : (
              <div className="w-full p-4 rounded-2xl bg-rose-500/10 text-rose-700 dark:text-rose-400 flex flex-col gap-1 text-left">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <AlertCircle size={18} className="shrink-0 text-rose-600 dark:text-rose-400" />
                  <span>Not quite right</span>
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-300">
                  Correct answer:{' '}
                  <span className="font-arabic-bold text-base text-neutral-900 dark:text-white" dir="rtl">
                    {payload.correctAnswer}
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={advanceToNext}
              className={`w-full h-14 rounded-full font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 text-white ${
                stepStatus === 'correct'
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : 'bg-rose-600 hover:bg-rose-700'
              }`}
            >
              <span>{stepStatus === 'correct' ? 'Continue' : 'Got it! Continue'}</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: SYNAPTIC SPEED PAIR MATCH STEP
  // --------------------------------------------------------------------------
  const renderSpeedPair = () => {
    const payload = currentStep.pairPayload;
    if (!payload) return null;

    const allPairs = payload.pairs;
    const isComplete = matchedPairIds.length === allPairs.length;

    const triggerMismatch = (arId: string, meaningId: string) => {
      playErrorCue();
      setMismatchedPair({ arId, meaningId });
      setHadPairMistake(true);
      setTotalAttempts((prev) => prev + 1);

      // Enqueue for Review Mode at lesson end
      if (!isReviewingErrors) {
        setErrorQueue((prev) => {
          if (prev.some((item) => item.id === currentStep.id)) return prev;
          return [...prev, currentStep];
        });
      }

      // Record failure in SRS retention store
      if (currentStep.itemId) {
        recordItemResult(
          {
            itemId: currentStep.itemId,
            itemType: 'pattern',
            arabic: 'مطابقة',
            lemma: currentStep.itemId,
            meaningEn: 'Speed Pair Matching',
            meaningBn: 'শব্দ জোড়া মিলকরণ',
            volume: volumeId,
            chapter: chapterId,
            lesson: lessonNum,
          },
          false
        );
      }

      // Clear the red mismatch highlight after 700ms
      setTimeout(() => {
        setMismatchedPair(null);
        setSelectedPairArabic(null);
        setSelectedPairMeaning(null);
      }, 700);
    };

    const handleSelectAr = (id: string, arText: string) => {
      if (mismatchedPair) return; // Prevent interaction during error display
      playArabicAudio(arText);

      if (selectedPairMeaning) {
        // Evaluate pair
        if (selectedPairMeaning === id) {
          playSuccessChime();
          setMatchedPairIds((prev) => [...prev, id]);
          setSelectedPairArabic(null);
          setSelectedPairMeaning(null);
        } else {
          triggerMismatch(id, selectedPairMeaning);
        }
      } else {
        // Toggle selection
        setSelectedPairArabic((prev) => (prev === id ? null : id));
      }
    };

    const handleSelectMeaning = (id: string) => {
      if (mismatchedPair) return; // Prevent interaction during error display
      playTapSound();

      if (selectedPairArabic) {
        // Evaluate pair
        if (selectedPairArabic === id) {
          playSuccessChime();
          setMatchedPairIds((prev) => [...prev, id]);
          setSelectedPairArabic(null);
          setSelectedPairMeaning(null);
        } else {
          triggerMismatch(selectedPairArabic, id);
        }
      } else {
        // Toggle selection
        setSelectedPairMeaning((prev) => (prev === id ? null : id));
      }
    };

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-5">
        <div className="w-full grid grid-cols-2 gap-3">
          {/* Arabic Column */}
          <div className="space-y-3">
            {allPairs.map((p) => {
              const isMatched = matchedPairIds.includes(p.id);
              const isSelected = selectedPairArabic === p.id;
              const isMismatched = mismatchedPair?.arId === p.id;

              return (
                <motion.button
                  key={p.id}
                  disabled={isMatched || !!mismatchedPair}
                  animate={isMismatched ? { x: [-6, 6, -4, 4, 0] } : {}}
                  transition={{ duration: 0.35 }}
                  onClick={() => !isMatched && handleSelectAr(p.id, p.ar)}
                  className={`w-full h-14 rounded-3xl font-arabic-bold text-2xl flex items-center justify-center gap-2 transition-all shadow-none border-0 ${
                    isMatched
                      ? 'bg-accent-primary-subtle text-accent-primary cursor-default opacity-85'
                      : isMismatched
                        ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 ring-2 ring-rose-500 cursor-default'
                        : isSelected
                          ? 'bg-accent-primary text-white scale-[1.02] cursor-pointer'
                          : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-950 dark:text-white cursor-pointer'
                  }`}
                  dir="rtl"
                >
                  <span>{p.ar}</span>
                  {isMatched && <Check size={18} className="stroke-[2.5]" />}
                </motion.button>
              );
            })}
          </div>

          {/* Meaning Column (Shuffled so answer never aligns across from Arabic word) */}
          <div className="space-y-3">
            {(shuffledMeaningPairs.length === allPairs.length ? shuffledMeaningPairs : allPairs).map((p) => {
              const isMatched = matchedPairIds.includes(p.id);
              const isSelected = selectedPairMeaning === p.id;
              const isMismatched = mismatchedPair?.meaningId === p.id;

              return (
                <motion.button
                  key={p.id}
                  disabled={isMatched || !!mismatchedPair}
                  animate={isMismatched ? { x: [-6, 6, -4, 4, 0] } : {}}
                  transition={{ duration: 0.35 }}
                  onClick={() => !isMatched && handleSelectMeaning(p.id)}
                  className={`w-full h-14 rounded-3xl font-english-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-none border-0 ${
                    isMatched
                      ? 'bg-accent-primary-subtle text-accent-primary cursor-default opacity-85'
                      : isMismatched
                        ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 ring-2 ring-rose-500 cursor-default'
                        : isSelected
                          ? 'bg-accent-primary text-white scale-[1.02] cursor-pointer'
                          : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 cursor-pointer'
                  }`}
                >
                  <span>{p.meaning}</span>
                  {isMatched && <Check size={18} className="stroke-[2.5]" />}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Error Feedback Banner */}
        {mismatchedPair && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full py-2.5 px-4 rounded-2xl bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-semibold flex items-center justify-center gap-2 text-center"
          >
            <AlertCircle size={15} className="shrink-0 text-rose-600 dark:text-rose-400" />
            <span>Not a match - Queued for review</span>
          </motion.div>
        )}

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full pt-2"
          >
            <button
              onClick={() => {
                if (!hadPairMistake) {
                  handlePass();
                }
                advanceToNext();
              }}
              className={`w-full h-14 rounded-full font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 text-white ${
                hadPairMistake
                  ? 'bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white'
                  : 'bg-accent-primary hover:bg-accent-primary-hover'
              }`}
            >
              <span>{hadPairMistake ? 'All Paired! Queued for Review' : 'All Paired! Continue'}</span>
              <Check size={18} />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: THE QURANIC ECHO MILESTONE UNLOCK
  // --------------------------------------------------------------------------
  const renderQuranicEcho = () => {
    const echo = currentStep.echoPayload;
    if (!echo) return null;

    const ayahAudioKey = echo.audioKey || `quran_${String(echo.surahNumber).padStart(3, '0')}${String(echo.ayahNumber).padStart(3, '0')}`;
    const words = echo.arabicText.split(' ');

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full p-6 sm:p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-white space-y-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-secondary-subtle text-accent-secondary text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-accent-secondary" />
            <span>Quranic Milestone</span>
          </div>

          <div className="space-y-1">
            <h4 className="font-arabic-bold text-2xl text-accent-primary" dir="rtl">
              {echo.surahNameAr}
            </h4>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              Surah {echo.surahNameEn} ({echo.surahNumber}:{echo.ayahNumber})
            </p>
          </div>

          {/* Ayah Calligraphy with Dynamic Highlighted Words inside Tone-on-Tone Well */}
          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-4">
            <div className="font-arabic-bold text-2xl sm:text-3xl leading-loose tracking-normal flex flex-wrap items-center justify-center gap-x-2 gap-y-1" dir="rtl">
              {words.map((w, idx) => {
                const isHighlighted = echo.highlightedWords.some(hw => w.includes(hw) || hw.includes(w));
                return (
                  <span
                    key={idx}
                    className={
                      isHighlighted
                        ? 'bg-accent-secondary-subtle text-accent-secondary px-2.5 py-0.5 rounded-2xl inline-block'
                        : 'text-neutral-900 dark:text-neutral-100 inline-block'
                    }
                  >
                    {w}
                  </span>
                );
              })}
            </div>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed italic">
              "{isBn ? (echo.translationBn || echo.translationEn) : echo.translationEn}"
            </p>
            <div className="pt-2">
              <button
                onClick={() => playArabicAudio(ayahAudioKey)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-english-semibold transition-colors cursor-pointer shadow-none border-0"
              >
                <Volume2 size={16} className="text-accent-primary" />
                <span>Listen Recitation</span>
              </button>
            </div>
          </div>

          {/* Concise Spiritual Reflection */}
          {echo.reflection && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed text-center max-w-md mx-auto">
              {echo.reflection}
            </p>
          )}
        </motion.div>

        <button
          onClick={advanceToNext}
          className="w-full h-14 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
        >
          <span>Complete Lesson & View Mastery</span>
          <Award size={18} />
        </button>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: SUN & MOON LETTERS PHONETIC DRILL (Lesson 4 Page 27)
  // --------------------------------------------------------------------------
  const renderSunMoonSort = () => {
    const payload = currentStep.sunMoonPayload;
    if (!payload || payload.items.length === 0) return null;

    const currentItem = payload.items[activeSunMoonIndex] || payload.items[0];
    const isLastItem = activeSunMoonIndex === payload.items.length - 1;

    const handleChoice = (type: 'sun' | 'moon') => {
      if (stepStatus !== 'idle') return;
      playArabicAudio(currentItem.audioKey);
      setSelectedSunMoonChoice(type);
      if (type === currentItem.letterType) {
        handlePass();
      } else {
        handleFail();
      }
    };

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-6">
        {/* Progress dots for current letter drill */}
        <div className="flex items-center gap-2">
          {payload.items.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeSunMoonIndex
                  ? 'w-8 bg-accent-primary'
                  : idx < activeSunMoonIndex
                    ? 'w-2 bg-emerald-500'
                    : 'w-2 bg-neutral-300 dark:bg-neutral-700'
              }`}
            />
          ))}
        </div>

        {/* Word Card with Phonetic & Audio Focus */}
        <div className="w-full p-6 sm:p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3">
              <h3 className="font-arabic-bold text-5xl sm:text-6xl text-neutral-950 dark:text-white" dir="rtl">
                {currentItem.wordAr}
              </h3>
              <button
                onClick={() => playArabicAudio(currentItem.audioKey)}
                className="w-10 h-10 rounded-full bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer shadow-none border-0"
                aria-label="Listen to pronunciation"
              >
                <Volume2 size={20} />
              </button>
            </div>
            {showTransliteration && currentItem.romanized && (
              <p className="text-sm font-mono text-accent-primary font-medium">
                {currentItem.romanized}
              </p>
            )}
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {currentItem.wordEn}
            </p>
          </div>

          {/* Letter Badge (Target Letter) */}
          <div className="w-full py-3 px-4 rounded-2xl bg-white dark:bg-neutral-950 flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400 uppercase">Examined Letter</span>
            <span className="font-arabic-bold text-2xl text-accent-primary" dir="rtl">{currentItem.letter}</span>
            <span className="text-neutral-400">
              {currentItem.letterType === 'moon' ? 'Moon or Sun?' : 'Moon or Sun?'}
            </span>
          </div>
        </div>

        {/* Binary Sun vs Moon Buttons (56px) */}
        <div className="w-full grid grid-cols-2 gap-4">
          <button
            disabled={stepStatus !== 'idle'}
            onClick={() => handleChoice('moon')}
            className={`h-16 rounded-3xl font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 ${
              stepStatus !== 'idle'
                ? currentItem.letterType === 'moon'
                  ? 'bg-emerald-600 text-white font-bold'
                  : selectedSunMoonChoice === 'moon'
                    ? 'bg-rose-600 text-white font-bold'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400'
                : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
            }`}
          >
            <span className="text-xl">🌙</span>
            <div className="text-left">
              <div className="leading-tight">Moon Letter</div>
              <div className="text-[10px] opacity-75 font-mono">Lam is pronounced</div>
            </div>
          </button>

          <button
            disabled={stepStatus !== 'idle'}
            onClick={() => handleChoice('sun')}
            className={`h-16 rounded-3xl font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 ${
              stepStatus !== 'idle'
                ? currentItem.letterType === 'sun'
                  ? 'bg-emerald-600 text-white font-bold'
                  : selectedSunMoonChoice === 'sun'
                    ? 'bg-rose-600 text-white font-bold'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-400'
                : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
            }`}
          >
            <span className="text-xl">☀️</span>
            <div className="text-left">
              <div className="leading-tight">Sun Letter</div>
              <div className="text-[10px] opacity-75 font-mono">Lam is silent (shaddah)</div>
            </div>
          </button>
        </div>

        {/* Feedback & Continue */}
        {stepStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full space-y-3"
          >
            {stepStatus === 'correct' ? (
              <div className="w-full p-4 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Check size={20} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div className="text-sm font-semibold">
                    Correct! {currentItem.letterType === 'moon' ? 'Moon letter: "ل" is pronounced clearly with sukoon.' : 'Sun letter: "ل" is silent and absorbed into the next letter with shaddah.'}
                  </div>
                </div>
                {/* Textbook Page 27 Phonetic Breakdown */}
                <div className="flex items-center justify-between pt-2 border-t border-emerald-500/20 text-xs font-mono">
                  <span>Written: <strong className="font-arabic-bold text-sm" dir="rtl">{currentItem.wordAr}</strong></span>
                  <span>Spoken: <strong className="font-arabic-bold text-sm" dir="rtl">{currentItem.pronunciationAr}</strong></span>
                </div>
              </div>
            ) : (
              <div className="w-full p-4 rounded-2xl bg-rose-500/10 text-rose-700 dark:text-rose-400 flex flex-col gap-2 text-left">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <AlertCircle size={18} className="shrink-0 text-rose-600 dark:text-rose-400" />
                  <span>Not quite</span>
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-300">
                  {currentItem.wordAr} has a {currentItem.letterType === 'moon' ? 'Moon' : 'Sun'} letter ({currentItem.letter}).
                </div>
                {/* Textbook Page 27 Phonetic Breakdown */}
                <div className="flex items-center justify-between pt-2 border-t border-rose-500/20 text-xs font-mono">
                  <span>Written: <strong className="font-arabic-bold text-sm" dir="rtl">{currentItem.wordAr}</strong></span>
                  <span>Spoken: <strong className="font-arabic-bold text-sm" dir="rtl">{currentItem.pronunciationAr}</strong></span>
                </div>
              </div>
            )}

            <button
              onClick={() => {
                if (isLastItem) {
                  advanceToNext();
                } else {
                  setActiveSunMoonIndex((prev) => prev + 1);
                  setSelectedSunMoonChoice(null);
                  setStepStatus('idle');
                }
              }}
              className="w-full h-14 rounded-full font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0 text-white bg-accent-primary hover:bg-accent-primary-hover"
            >
              <span>{isLastItem ? 'Continue to Next Step' : 'Next Word'}</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: BRANCHING SYNTAX EQUATION (Lesson 4 Page 30)
  // --------------------------------------------------------------------------
  const renderBranchingSyntax = () => {
    const payload = currentStep.branchingPayload;
    if (!payload) return null;

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-5">
        {/* Tiny Rule Banner */}
        <div className="w-full px-4 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-center text-xs text-neutral-500 dark:text-neutral-400 font-medium">
          {isBn
            ? 'আলিফ-লাম (ال) এর প্রভাব লক্ষ্য করুন'
            : 'Notice the effect of "ال": complete sentence vs descriptive sentence'}
        </div>

        {/* 2 Clean Contrast Cards */}
        <div className="w-full space-y-3">
          {/* Card A: Without Al -> Sentence */}
          <div
            onClick={() => playArabicAudio(payload.audioKeySentence)}
            className="w-full p-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between cursor-pointer hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
          >
            <div className="text-left space-y-0.5">
              <span className="text-[11px] font-semibold text-accent-primary bg-accent-primary-subtle px-2 py-0.5 rounded-md">
                {isBn ? 'পূর্ণ বাক্য' : 'Sentence'}
              </span>
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 pt-1">
                "{isBn ? (payload.indefiniteMeaningBn || payload.indefiniteMeaningEn) : payload.indefiniteMeaningEn}"
              </div>
            </div>
            <div className="flex items-center gap-3" dir="rtl">
              <span className="font-arabic-bold text-2xl text-neutral-950 dark:text-white">
                {payload.indefiniteSentenceAr}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playArabicAudio(payload.audioKeySentence);
                }}
                className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200 shrink-0 cursor-pointer"
                aria-label="Play audio"
              >
                <Volume2 size={16} />
              </button>
            </div>
          </div>

          {/* Card B: With Al + Description */}
          <div
            onClick={() => playArabicAudio(payload.audioKeyComplete)}
            className="w-full p-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between cursor-pointer hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
          >
            <div className="text-left space-y-0.5">
              <span className="text-[11px] font-semibold text-accent-secondary bg-accent-secondary-subtle px-2 py-0.5 rounded-md">
                {isBn ? 'বর্ণনাযুক্ত বাক্য' : 'Descriptive Sentence'}
              </span>
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 pt-1">
                "{isBn ? (payload.completeSentenceMeaningBn || payload.completeSentenceMeaningEn) : payload.completeSentenceMeaningEn}"
              </div>
            </div>
            <div className="flex items-center gap-3" dir="rtl">
              <span className="font-arabic-bold text-2xl text-neutral-950 dark:text-white">
                {payload.completeSentenceAr}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playArabicAudio(payload.audioKeyComplete);
                }}
                className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200 shrink-0 cursor-pointer"
                aria-label="Play audio"
              >
                <Volume2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 56px Primary Action Button */}
        <button
          onClick={() => {
            playTapSound();
            advanceToNext();
          }}
          className="w-full h-14 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
        >
          <span>{isBn ? 'পরবর্তী ধাপে যান' : 'Continue'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: POSSESSIVE CONJUGATION MATRIX (Lesson 5 Pages 32-33)
  // --------------------------------------------------------------------------
  const renderPossessiveMatrix = () => {
    const payload = currentStep.matrixPayload;
    if (!payload || payload.matrices.length === 0) return null;

    const currentMatrix = payload.matrices[activeMatrixNounIndex] || payload.matrices[0];
    const isLastNoun = activeMatrixNounIndex === payload.matrices.length - 1;
    const activeForm = currentMatrix.forms[selectedSuffixIndex] || currentMatrix.forms[0];

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-6">
        {/* Noun Selector Tabs if multiple */}
        {payload.matrices.length > 1 && (
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900">
            {payload.matrices.map((m, idx) => (
              <button
                key={m.baseWordAr}
                onClick={() => {
                  playTapSound();
                  setActiveMatrixNounIndex(idx);
                }}
                className={`px-4 h-9 rounded-full text-xs font-english-semibold transition-all cursor-pointer border-0 ${
                  idx === activeMatrixNounIndex
                    ? 'bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white font-bold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <span>{m.baseWordAr}</span>
              </button>
            ))}
          </div>
        )}

        {/* Presentation Card */}
        <div className="w-full p-6 sm:p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center text-center space-y-5">
          {/* Special Irregular Five Nouns Callout (Circled Waw like page 33) */}
          {currentMatrix.isIrregularFiveNoun && (
            <div className="w-full py-2 px-4 rounded-2xl bg-accent-amber-subtle text-accent-amber text-xs font-semibold flex items-center justify-center gap-2">
              <span className="w-6 h-6 rounded-full border-2 border-accent-amber font-arabic-bold text-sm flex items-center justify-center">و</span>
              <span>Notice the extra "و" letter inserted before suffixes!</span>
            </div>
          )}

          {/* Active Conjugated Form Hero */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3">
              <h3 className="font-arabic-bold text-5xl sm:text-6xl text-neutral-950 dark:text-white" dir="rtl">
                {activeForm.ar}
              </h3>
              <button
                onClick={() => playArabicAudio(activeForm.audioKey)}
                className="w-10 h-10 rounded-full bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer shadow-none border-0"
                aria-label="Listen to conjugated word"
              >
                <Volume2 size={20} />
              </button>
            </div>
            {showTransliteration && (
              <p className="text-sm font-mono text-accent-primary font-medium">
                {activeForm.romanized}
              </p>
            )}
            <div className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              {activeForm.en}
            </div>
          </div>

          {/* 5-Form Interactive Grid (Page 32 Layout) */}
          <div className="w-full grid grid-cols-5 gap-1.5 pt-2" dir="rtl">
            {currentMatrix.forms.map((f, idx) => {
              const isSelected = idx === selectedSuffixIndex;
              return (
                <button
                  key={f.suffix}
                  onClick={() => {
                    setSelectedSuffixIndex(idx);
                    playArabicAudio(f.audioKey);
                  }}
                  className={`p-2 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer shadow-none border-0 ${
                    isSelected
                      ? 'bg-accent-primary text-white scale-[1.03]'
                      : 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/80 dark:hover:bg-neutral-800'
                  }`}
                >
                  <span className="font-arabic-bold text-lg sm:text-xl">{f.suffix}</span>
                  <span className="text-[10px] font-mono mt-0.5 opacity-80">{f.pronounLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 56px Action Button */}
        <button
          onClick={() => {
            playTapSound();
            if (isLastNoun) {
              advanceToNext();
            } else {
              setActiveMatrixNounIndex((prev) => prev + 1);
              setSelectedSuffixIndex(0);
            }
          }}
          className="w-full h-14 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
        >
          <span>{isLastNoun ? 'Mastered Possessive Suffixes! Continue' : 'Next Word Pattern'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: IDAFAH EQUATION (Lesson 6 Page 36) - Compact & Tab-Free
  // --------------------------------------------------------------------------
  const renderIdafahEquation = () => {
    const payload = currentStep.idafahPayload;
    if (!payload || payload.examples.length === 0) return null;

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-5">
        {/* Tiny Rule Banner */}
        <div className="w-full px-4 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between text-xs">
          <span className="font-arabic-bold text-sm text-neutral-900 dark:text-neutral-100" dir="rtl">
            المُضَافُ لَا يُنَوَّنُ
          </span>
          <span className="text-neutral-500 dark:text-neutral-400 font-medium">
            {isBn ? payload.ruleSummaryBn : payload.ruleSummaryEn}
          </span>
        </div>

        {/* 3 Compact Rows (All Visible at Once, Zero Tabs) */}
        <div className="w-full space-y-2.5">
          {payload.examples.map((item) => (
            <div
              key={item.id}
              onClick={() => playArabicAudio(item.audioKey)}
              className="w-full p-3.5 sm:p-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between cursor-pointer hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
            >
              <div className="text-left space-y-0.5">
                <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {isBn ? item.compoundBn : item.compoundEn}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                  {isBn ? item.typeLabelBn : item.typeLabelEn}
                </div>
              </div>

              <div className="flex items-center gap-3" dir="rtl">
                <div className="text-right">
                  <div className="font-arabic-bold text-xl sm:text-2xl text-neutral-950 dark:text-white">
                    {item.compoundAr}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400">
                    {item.breakdownAr}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playArabicAudio(item.audioKey);
                  }}
                  className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200 shrink-0 cursor-pointer"
                  aria-label="Play audio"
                >
                  <Volume2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 56px Action Button */}
        <button
          onClick={() => {
            playTapSound();
            advanceToNext();
          }}
          className="w-full h-14 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
        >
          <span>{isBn ? 'পরবর্তী ধাপে যান' : 'Continue'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: SYNTAX FRONTING (Lesson 7 Page 39) - Compact & Tab-Free
  // --------------------------------------------------------------------------
  const renderSyntaxFronting = () => {
    const payload = currentStep.syntaxFrontingPayload;
    if (!payload || payload.sentences.length === 0) return null;

    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center space-y-5">
        {/* Tiny Rule Banner */}
        <div className="w-full px-4 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-center text-xs text-neutral-500 dark:text-neutral-400 font-medium">
          {isBn ? payload.ruleSummaryBn : payload.ruleSummaryEn}
        </div>

        {/* Two Sentences Compared Side-by-Side, Zero Tabs */}
        <div className="w-full space-y-3">
          {payload.sentences.map((item) => (
            <div
              key={item.id}
              onClick={() => playArabicAudio(item.audioKey)}
              className="w-full p-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between cursor-pointer hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
            >
              <div className="text-left space-y-0.5">
                <span className="text-[11px] font-semibold text-accent-primary bg-accent-primary-subtle px-2 py-0.5 rounded-md">
                  {isBn ? item.labelBn : item.labelEn}
                </span>
                <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 pt-1">
                  "{isBn ? item.meaningBn : item.meaningEn}"
                </div>
              </div>

              <div className="flex items-center gap-3" dir="rtl">
                <span className="font-arabic-bold text-2xl text-neutral-950 dark:text-white">
                  {item.arabic}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playArabicAudio(item.audioKey);
                  }}
                  className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200 shrink-0 cursor-pointer"
                  aria-label="Play audio"
                >
                  <Volume2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 56px Action Button */}
        <button
          onClick={() => {
            playTapSound();
            advanceToNext();
          }}
          className="w-full h-14 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
        >
          <span>{isBn ? 'পরবর্তী ধাপে যান' : 'Continue'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER: SESSION SUMMARY CARD (When all steps + errors are 100% resolved)
  // --------------------------------------------------------------------------
  if (isSessionComplete) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col items-center justify-center p-6 font-english">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center text-center space-y-6"
        >
          <div className="w-20 h-20 rounded-3xl bg-accent-secondary/15 text-accent-secondary flex items-center justify-center text-4xl">
            🏆
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-neutral-950 dark:text-white">
              Lesson {sessionData.lessonNum} Mastered!
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              {sessionData.titleEn} · Vol {sessionData.volumeId} Ch {sessionData.chapterId}
            </p>
          </div>

          {/* Metrics Row */}
          <div className="w-full grid grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-white dark:bg-neutral-950 text-center space-y-1">
              <div className="text-2xl font-bold text-accent-primary">{accuracyRate}%</div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Accuracy</div>
            </div>
            <div className="p-3 rounded-2xl bg-white dark:bg-neutral-950 text-center space-y-1">
              <div className="text-2xl font-bold text-accent-secondary">{sessionData.wordsLearned.length}</div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Words Active</div>
            </div>
            <div className="p-3 rounded-2xl bg-white dark:bg-neutral-950 text-center space-y-1">
              <div className="text-2xl font-bold text-accent-amber">{recycledErrorsResolved}</div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Recycled</div>
            </div>
          </div>

          {/* Spaced Repetition Notification */}
          <div className="w-full p-4 rounded-3xl bg-white dark:bg-neutral-950 text-xs text-neutral-600 dark:text-neutral-400 text-left space-y-1">
            <div className="font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              <Sparkles size={14} className="text-accent-amber" />
              <span>Retention Schedule Initialized</span>
            </div>
            <p>
              Your newly acquired words ({sessionData.wordsLearned.slice(0, 3).join('، ')}...) are saved to Box 1. Next review session is scheduled for tomorrow.
            </p>
          </div>

          <button
            onClick={onExit}
            className="w-full h-14 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-950 font-english-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-none border-0"
          >
            <span>Return to Lessons</span>
            <Check size={18} />
          </button>
        </motion.div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // MAIN RUNNER CONTAINER
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col font-english">
      {/* Top Header HUD */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md px-6 py-4 flex items-center gap-4 border-b border-neutral-200/50 dark:border-neutral-800/50">
        <button
          onClick={onExit}
          className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          aria-label="Exit Lesson"
        >
          <X size={20} />
        </button>

        {/* Progress bar */}
        <div className="flex-1 h-2.5 bg-neutral-100 dark:bg-neutral-900 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full transition-all duration-300 ${
              isReviewingErrors ? 'bg-accent-amber' : 'bg-accent-primary'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Preference Toggles & Step count badge */}
        <div className="flex items-center gap-2 shrink-0">
          <TransliterationToggle compact />

          {/* Audio Auto-Play Toggle */}
          <button
            onClick={toggleAutoPlayAudio}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shadow-none border-0 ${
              autoPlayAudio
                ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                : 'bg-neutral-100 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-500'
            }`}
            title={`Audio auto-play is ${autoPlayAudio ? 'ON' : 'OFF'}. Click to toggle.`}
            aria-label="Toggle Audio Auto-play"
          >
            {autoPlayAudio ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {errorQueue.length > 0 && !isReviewingErrors && (
            <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-accent-rose bg-accent-rose-subtle px-2 py-1 rounded-full">
              <AlertCircle size={12} />
              <span>{errorQueue.length}</span>
            </span>
          )}
          <span className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center font-arabic-bold text-base text-neutral-800 dark:text-neutral-200">
            {toArabicNumerals(currentStepIndex + 1)}
          </span>
        </div>
      </header>

      {/* Review mode warning banner */}
      {isReviewingErrors && (
        <div className="w-full bg-accent-amber-subtle text-accent-amber text-xs font-semibold py-2 px-6 text-center">
          Review Mode: Solving questions you previously missed to achieve 100% mastery.
        </div>
      )}

      {/* Main Single-Focus Content Viewport */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 max-w-2xl mx-auto w-full">
        {/* Clean Single Instruction Header */}
        <div className="text-center mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            {isBn ? (currentStep.instructionBn || currentStep.instructionEn) : currentStep.instructionEn}
          </h2>
        </div>

        {/* Dynamic Step Archetype Renderer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.15 }}
            className="w-full flex flex-col items-center"
          >
            {currentStep.type === 'vocab_prime' && renderVocabPrime()}
            {currentStep.type === 'concept_intro' && renderConceptIntro()}
            {currentStep.type === 'polar_sort' && renderPolarSort()}
            {currentStep.type === 'sentence_assembly' && renderSentenceAssembly()}
            {currentStep.type === 'cloze_choice' && renderClozeChoice()}
            {currentStep.type === 'speed_pair' && renderSpeedPair()}
            {currentStep.type === 'quranic_echo' && renderQuranicEcho()}
            {currentStep.type === 'sun_moon_sort' && renderSunMoonSort()}
            {currentStep.type === 'branching_syntax' && renderBranchingSyntax()}
            {currentStep.type === 'possessive_matrix' && renderPossessiveMatrix()}
            {currentStep.type === 'idafah_equation' && renderIdafahEquation()}
            {currentStep.type === 'syntax_fronting' && renderSyntaxFronting()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

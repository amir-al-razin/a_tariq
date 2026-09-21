import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, ScrollView, Pressable, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  type SessionStep,
  type LessonSessionData,
  type ConceptItem,
  type VerbConjugatorForm,
  getConjugationMeaning,
  getRootVerbMeaning,
  getRootVerbArabic,
  getLessonSession,
} from '@tariq/shared';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useRetentionStore } from '../../state/retentionStore';
import { useProgressStore, LESSON_KEY } from '../../state/progressStore';
import { useLearningSettingsStore } from '../../state/learningSettingsStore';
import { useThemeTokens } from '../../theme/colors';
import { playSuccessChime, playErrorCue, playTapSound } from '../../lib/sound';
import { playArabicAudio } from '../../lib/arabicAudio';

interface LessonSessionRunnerProps {
  volumeId: number;
  chapterId: number;
  lessonNum: number;
  initialStepIndex?: number;
  onExit: () => void;
}

// Convert English numbers to Arabic-Indic digits
function toArabicNumerals(n: number): string {
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return n
    .toString()
    .split('')
    .map((d) => digits[parseInt(d, 10)] || d)
    .join('');
}

export const LessonSessionRunner: React.FC<LessonSessionRunnerProps> = ({
  volumeId,
  chapterId,
  lessonNum,
  initialStepIndex = 0,
  onExit,
}) => {
  const theme = useThemeTokens();
  const insets = useSafeAreaInsets();
  const { i18n } = useTranslation();
  const isBn = i18n.language === 'bn';
  const sessionData: LessonSessionData | null = useMemo(() => {
    return getLessonSession(volumeId, chapterId, lessonNum);
  }, [volumeId, chapterId, lessonNum]);

  // Fallback if no specific interactive session registered
  const defaultSteps: SessionStep[] = useMemo(() => {
    if (sessionData?.steps?.length) {
      return sessionData.steps;
    }
    return [
      {
        id: 'fallback-1',
        type: 'concept_intro',
        pageNumber: 1,
        titleEn: `Lesson ${lessonNum}`,
        titleAr: `الدرس ${toArabicNumerals(lessonNum)}`,
        instructionEn: 'Read and master the core pedagogical concepts.',
        instructionBn: '',
        conceptPayload: {
          concepts: [
            {
              id: 'c1',
              ar: 'بِسْمِ اللَّهِ',
              romanized: 'Bismi Allāh',
              meaningEn: 'In the name of Allah',
              meaningBn: '',
              exampleAr: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
              exampleEn: 'In the name of Allah, the Entirely Merciful',
              exampleBn: '',
              audioKey: 'basmalah',
            },
          ],
        },
      },
    ];
  }, [sessionData, lessonNum]);

  // Queue & Flow State
  const [steps, setSteps] = useState<SessionStep[]>(defaultSteps);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(() => {
    if (initialStepIndex >= 0 && initialStepIndex < defaultSteps.length) {
      return initialStepIndex;
    }
    return 0;
  });
  const [errorQueue, setErrorQueue] = useState<SessionStep[]>([]);
  const [isReviewingErrors, setIsReviewingErrors] = useState<boolean>(false);
  const [isSessionComplete, setIsSessionComplete] = useState<boolean>(false);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  // Telemetry
  const [totalAttempts, setTotalAttempts] = useState<number>(0);
  const [firstTryCorrectCount, setFirstTryCorrectCount] = useState<number>(0);
  const [recycledErrorsResolved, setRecycledErrorsResolved] = useState<number>(0);
  const [startTime] = useState<number>(Date.now());

  // Interactive step local state
  const [activeVocabIndex, setActiveVocabIndex] = useState<number>(0);
  const [activeConceptIndex, setActiveConceptIndex] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [stepStatus, setStepStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  // Assembly local state
  const [assembledChips, setAssembledChips] = useState<string[]>([]);
  const [availableChips, setAvailableChips] = useState<string[]>([]);

  // Speed Pair local state
  const [selectedPairAr, setSelectedPairAr] = useState<string | null>(null);
  const [selectedPairMeaning, setSelectedPairMeaning] = useState<string | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);

  // Alternative QA local state
  const [activeQAIndex, setActiveQAIndex] = useState<number>(0);
  const [selectedQAAnswer, setSelectedQAAnswer] = useState<string | null>(null);

  // Tarkib Dissector local state
  const [activeTarkibIndex, setActiveTarkibIndex] = useState<number>(0);
  const [assignedTarkibSlots, setAssignedTarkibSlots] = useState<Record<number, string>>({});

  // Sun / Moon sort local state
  const [activeSunMoonIndex, setActiveSunMoonIndex] = useState<number>(0);
  const [selectedSunMoonChoice, setSelectedSunMoonChoice] = useState<'sun' | 'moon' | null>(null);

  // Possessive Matrix local state
  const [activeMatrixNounIndex, setActiveMatrixNounIndex] = useState<number>(0);
  const [selectedSuffixIndex, setSelectedSuffixIndex] = useState<number>(0);

  // Verb Preview Grid local state (Vol 2)
  const [activeVerbPreviewIndex, setActiveVerbPreviewIndex] = useState<number>(0);
  const [revealConjugations, setRevealConjugations] = useState<boolean>(true);

  // Masdar Factory local state (Vol 2)
  const [activeMasdarIndex, setActiveMasdarIndex] = useState<number>(0);
  const [completedMasdarItems, setCompletedMasdarItems] = useState<Record<string, string>>({});
  const [wrongMasdarOption, setWrongMasdarOption] = useState<string | null>(null);

  // Verb Conjugator local state (Vol 2)
  const [activeConjugatorVerbIndex, setActiveConjugatorVerbIndex] = useState<number>(0);
  const [selectedConjugatorTense, setSelectedConjugatorTense] = useState<
    'past' | 'present' | 'imperative' | 'prohibition'
  >('past');
  const [selectedConjugatorDrillChoice, setSelectedConjugatorDrillChoice] = useState<string | null>(
    null
  );
  const [completedConjugatorSlots, setCompletedConjugatorSlots] = useState<
    Record<string, Record<string, boolean>>
  >({});
  const [availableConjugatorChips, setAvailableConjugatorChips] = useState<
    { id: string; subjectAr: string; textAr: string }[]
  >([]);
  const [selectedTargetConjugatorSubject, setSelectedTargetConjugatorSubject] = useState<
    string | null
  >(null);
  const [wrongConjugatorChipId, setWrongConjugatorChipId] = useState<string | null>(null);

  // Word Construction local state (Vol 2)
  const [activeWordConstructionIndex, setActiveWordConstructionIndex] = useState<number>(0);
  const [constructedLetterChips, setConstructedLetterChips] = useState<
    { id: string; letter: string }[]
  >([]);
  const [availableLetterChips, setAvailableLetterChips] = useState<
    { id: string; letter: string }[]
  >([]);
  const [wordConstructionStatus, setWordConstructionStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // Stores
  const recordItemResult = useRetentionStore((state) => state.recordItemResult);
  const recordSessionComplete = useRetentionStore((state) => state.recordSessionComplete);
  const setChunkProgressState = useProgressStore((state) => state.setChunkProgressState);

  // Learning Preferences
  const { showTransliteration, toggleTransliteration, autoPlayAudio } = useLearningSettingsStore();

  const currentStep = steps[currentStepIndex];

  // Reset & initialize step-specific state on step transition
  useEffect(() => {
    setSelectedChoice(null);
    setStepStatus('idle');
    setActiveVocabIndex(0);
    setActiveConceptIndex(0);
    setSelectedPairAr(null);
    setSelectedPairMeaning(null);
    setMatchedPairIds([]);
    setActiveQAIndex(0);
    setSelectedQAAnswer(null);
    setActiveTarkibIndex(0);
    setAssignedTarkibSlots({});
    setActiveSunMoonIndex(0);
    setSelectedSunMoonChoice(null);
    setActiveMatrixNounIndex(0);
    setSelectedSuffixIndex(0);
    setActiveVerbPreviewIndex(0);
    setRevealConjugations(true);
    setActiveMasdarIndex(0);
    setCompletedMasdarItems({});
    setWrongMasdarOption(null);
    setActiveConjugatorVerbIndex(0);
    setSelectedConjugatorTense(currentStep?.conjugatorPayload?.targetTense || 'past');
    setSelectedConjugatorDrillChoice(null);
    setCompletedConjugatorSlots({});
    setAvailableConjugatorChips([]);
    setSelectedTargetConjugatorSubject(null);
    setWrongConjugatorChipId(null);

    // Initialize Word Construction chips
    if (currentStep?.type === 'word_construction' && currentStep.wordConstructionPayload) {
      const payload = currentStep.wordConstructionPayload;
      setActiveWordConstructionIndex(0);
      setConstructedLetterChips([]);
      setWordConstructionStatus('idle');
      if (payload.items.length > 0) {
        const item = payload.items[0];
        const chipsWithId = item.chips.map((ch, idx) => ({
          id: `${ch}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
          letter: ch,
        }));
        for (let i = chipsWithId.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [chipsWithId[i], chipsWithId[j]] = [chipsWithId[j], chipsWithId[i]];
        }
        setAvailableLetterChips(chipsWithId);
      } else {
        setAvailableLetterChips([]);
      }
    } else {
      setActiveWordConstructionIndex(0);
      setConstructedLetterChips([]);
      setAvailableLetterChips([]);
      setWordConstructionStatus('idle');
    }

    if (currentStep?.assemblyPayload?.chips) {
      const chips = [...currentStep.assemblyPayload.chips];
      // Fisher-Yates shuffle
      for (let i = chips.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chips[i], chips[j]] = [chips[j], chips[i]];
      }
      setAvailableChips(chips);
      setAssembledChips([]);
    }
  }, [currentStepIndex, currentStep]);

  // Initialize Verb Conjugator practice chips and selection for Verbs 1..N
  useEffect(() => {
    if (currentStep?.type !== 'verb_conjugator' || !currentStep.conjugatorPayload) return;
    const payload = currentStep.conjugatorPayload;
    if (payload.mode === 'drill' || payload.verbs.length <= 1) {
      setAvailableConjugatorChips([]);
      setSelectedTargetConjugatorSubject(null);
      return;
    }

    // Verb 0 is the Reference Model (النموذج) - all forms visible
    if (activeConjugatorVerbIndex === 0) {
      setAvailableConjugatorChips([]);
      setSelectedTargetConjugatorSubject(null);
      return;
    }

    const currentVerb = payload.verbs[activeConjugatorVerbIndex];
    if (!currentVerb) return;

    const verbKey = `${currentVerb.id || activeConjugatorVerbIndex}-${selectedConjugatorTense}`;
    const verbCompleted = completedConjugatorSlots[verbKey] || {};

    const availableForms =
      selectedConjugatorTense === 'imperative'
        ? currentVerb.forms.filter((f) => Boolean(f.imperativeAr))
        : selectedConjugatorTense === 'prohibition'
          ? currentVerb.forms.filter((f) => Boolean(f.prohibitionAr))
          : currentVerb.forms;

    const practiceForms = availableForms.slice(1);
    const uncompletedForms = practiceForms.filter((f) => !verbCompleted[f.subjectAr]);

    const chips = uncompletedForms.map((f, idx) => {
      const formAr =
        selectedConjugatorTense === 'past'
          ? f.pastAr
          : selectedConjugatorTense === 'present'
            ? f.presentAr || f.pastAr
            : selectedConjugatorTense === 'prohibition'
              ? f.prohibitionAr || f.presentAr || f.pastAr
              : f.imperativeAr || f.presentAr || f.pastAr;
      return {
        id: `${f.subjectAr}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
        subjectAr: f.subjectAr,
        textAr: formAr,
      };
    });

    for (let i = chips.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chips[i], chips[j]] = [chips[j], chips[i]];
    }

    setAvailableConjugatorChips(chips);

    if (uncompletedForms.length > 0) {
      setSelectedTargetConjugatorSubject(uncompletedForms[0].subjectAr);
    } else {
      setSelectedTargetConjugatorSubject(null);
    }
  }, [currentStep, activeConjugatorVerbIndex, selectedConjugatorTense, completedConjugatorSlots]);

  // Audio auto-trigger
  useEffect(() => {
    if (!autoPlayAudio || !currentStep) return;
    if (currentStep.vocabPayload?.words?.[activeVocabIndex]) {
      playArabicAudio(currentStep.vocabPayload.words[activeVocabIndex].ar);
    } else if (currentStep.polarPayload?.arabicSubject) {
      playArabicAudio(currentStep.polarPayload.arabicSubject);
    } else if (currentStep.spatialPointingPayload?.objectAr) {
      playArabicAudio(currentStep.spatialPointingPayload.objectAr);
    }
  }, [currentStep, activeVocabIndex, autoPlayAudio]);

  const handleNextStep = useCallback(() => {
    playTapSound();
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else if (errorQueue.length > 0) {
      // Transition to error queue review
      setIsReviewingErrors(true);
      setSteps([...errorQueue]);
      setErrorQueue([]);
      setCurrentStepIndex(0);
    } else {
      // Session finished!
      setIsSessionComplete(true);
      const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));
      const accuracy =
        totalAttempts > 0 ? Math.round((firstTryCorrectCount / totalAttempts) * 100) : 100;

      recordSessionComplete({
        volumeId,
        chapterId,
        lessonNum,
        totalQuestions: totalAttempts || steps.length,
        firstTryCorrect: firstTryCorrectCount,
        recycledErrorsResolved,
        accuracyRate: accuracy,
        timeSpentSeconds: timeSpent,
        wordsLearned: sessionData?.wordsLearned || [],
      });

      // Mark lesson completed in progress store
      setChunkProgressState(LESSON_KEY(volumeId, chapterId, lessonNum), 'completed');
      playSuccessChime();
    }
  }, [
    currentStepIndex,
    steps.length,
    errorQueue,
    startTime,
    totalAttempts,
    firstTryCorrectCount,
    recycledErrorsResolved,
    recordSessionComplete,
    volumeId,
    chapterId,
    lessonNum,
    sessionData?.wordsLearned,
    setChunkProgressState,
  ]);

  const handleRegisterMistake = useCallback(() => {
    playErrorCue();
    setStepStatus('incorrect');
    setTotalAttempts((prev) => prev + 1);
    if (!isReviewingErrors) {
      setErrorQueue((prev) =>
        prev.some((s) => s.id === currentStep.id) ? prev : [...prev, currentStep]
      );
    }
    if (currentStep?.itemId) {
      recordItemResult(
        {
          itemId: currentStep.itemId,
          itemType: 'word',
          arabic: currentStep.titleAr,
          lemma: currentStep.titleAr,
          meaningEn: currentStep.titleEn,
          meaningBn: '',
          volume: volumeId,
          chapter: chapterId,
          lesson: lessonNum,
        },
        false
      );
    }
  }, [currentStep, isReviewingErrors, recordItemResult, volumeId, chapterId, lessonNum]);

  const handleRegisterSuccess = useCallback(() => {
    playSuccessChime();
    setStepStatus('correct');
    setTotalAttempts((prev) => prev + 1);
    if (!isReviewingErrors) {
      setFirstTryCorrectCount((prev) => prev + 1);
    } else {
      setRecycledErrorsResolved((prev) => prev + 1);
    }
    if (currentStep?.itemId) {
      recordItemResult(
        {
          itemId: currentStep.itemId,
          itemType: 'word',
          arabic: currentStep.titleAr,
          lemma: currentStep.titleAr,
          meaningEn: currentStep.titleEn,
          meaningBn: '',
          volume: volumeId,
          chapter: chapterId,
          lesson: lessonNum,
        },
        true
      );
    }
  }, [currentStep, isReviewingErrors, recordItemResult, volumeId, chapterId, lessonNum]);

  // Total progression percentage
  const totalCount = defaultSteps.length;
  const progressPercent = Math.min(100, Math.round(((currentStepIndex + 1) / totalCount) * 100));

  // -------------------------------------------------------------
  // VICTORY SCREEN
  // -------------------------------------------------------------
  if (isSessionComplete) {
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    const accuracy =
      totalAttempts > 0 ? Math.round((firstTryCorrectCount / totalAttempts) * 100) : 100;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.canvas,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}>
        <View
          style={{
            width: '100%',
            maxWidth: 440,
            borderRadius: 36,
            backgroundColor: theme.surfaceWell,
            padding: 32,
            alignItems: 'center',
          }}>
          {/* Trophy Badge */}
          <View
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              backgroundColor: theme.accentPrimarySubtle,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Ionicons name="trophy" size={48} color={theme.accentPrimary} />
          </View>

          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 32,
              color: theme.textPrimary,
              textAlign: 'center',
              marginBottom: 6,
            }}>
            أَحْسَنْتَ!
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 22,
              color: theme.textPrimary,
              textAlign: 'center',
              marginBottom: 8,
            }}>
            Mastery Milestone Reached
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: theme.textSecondary,
              textAlign: 'center',
              lineHeight: 20,
              marginBottom: 28,
            }}>
            You have completed all interactive drills for Lesson {lessonNum} with authentic mastery.
          </Text>

          {/* Telemetry Stats */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 32,
              backgroundColor: theme.surfaceRaised,
              borderRadius: 20,
              paddingVertical: 16,
              paddingHorizontal: 20,
            }}>
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 22,
                  color: theme.accentPrimary,
                }}>
                {accuracy}%
              </Text>
              <Text
                style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: theme.textMuted }}>
                Accuracy
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 22,
                  color: theme.textPrimary,
                }}>
                {timeSpent}s
              </Text>
              <Text
                style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: theme.textMuted }}>
                Time Spent
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 22,
                  color: theme.textPrimary,
                }}>
                {steps.length}
              </Text>
              <Text
                style={{ fontFamily: 'Lexend_400Regular', fontSize: 12, color: theme.textMuted }}>
                Drills
              </Text>
            </View>
          </View>

          {/* 56px Action Pill */}
          <Pressable
            onPress={() => {
              playTapSound();
              onExit();
            }}
            style={({ pressed }) => ({
              width: '100%',
              height: 56,
              borderRadius: 9999,
              backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
              alignItems: 'center',
              justifyContent: 'center',
            })}>
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
              Return to Journey
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // -------------------------------------------------------------
  // MAIN RUNNER STAGE
  // -------------------------------------------------------------
  return (
    <View style={{ flex: 1, backgroundColor: theme.canvas }}>
      {/* Top Header Bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 12,
        }}>
        {/* Exit Button */}
        <Pressable
          onPress={() => setShowExitModal(true)}
          accessibilityRole="button"
          accessibilityLabel="Exit lesson"
          style={({ pressed }) => ({
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: pressed ? theme.surfaceRaised : theme.surfaceWell,
            alignItems: 'center',
            justifyContent: 'center',
          })}>
          <Ionicons name="close" size={20} color={theme.textPrimary} />
        </Pressable>

        {/* Unified Progress Bar */}
        <View style={{ flex: 1, marginHorizontal: 16, alignItems: 'center' }}>
          <View
            style={{
              width: '100%',
              height: 8,
              borderRadius: 4,
              backgroundColor: theme.surfaceWell,
              overflow: 'hidden',
            }}>
            <View
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                borderRadius: 4,
                backgroundColor: isReviewingErrors ? theme.status.warning : theme.accentPrimary,
              }}
            />
          </View>
          {isReviewingErrors && (
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 10,
                color: theme.status.warning,
                marginTop: 4,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}>
              Recycling Missed Concept
            </Text>
          )}
        </View>

        {/* Transliteration Toggle */}
        <Pressable
          onPress={toggleTransliteration}
          accessibilityRole="button"
          accessibilityLabel="Toggle transliteration"
          style={({ pressed }) => ({
            height: 36,
            paddingHorizontal: 12,
            borderRadius: 18,
            backgroundColor: showTransliteration ? theme.accentPrimarySubtle : theme.surfaceWell,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.9 : 1,
          })}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 12,
              color: showTransliteration ? theme.accentPrimaryText : theme.textMuted,
            }}>
            {showTransliteration ? 'Aa ON' : 'Aa OFF'}
          </Text>
        </Pressable>
      </View>

      {/* Main Interactive Stage Container */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: Math.max(insets.bottom, 20) + 16,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', maxWidth: 480, alignItems: 'center' }}>
          {/* Step Instruction Badge */}
          <View style={{ marginBottom: 16, alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 12,
                color: theme.textMuted,
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                textAlign: 'center',
              }}>
              {currentStep?.instructionEn || currentStep?.titleEn}
            </Text>
          </View>

          {/* =============================================================
              1. VOCABULARY PRIMING (vocab_prime)
             ============================================================= */}
          {currentStep?.type === 'vocab_prime' &&
            currentStep.vocabPayload?.words &&
            (() => {
              const words = currentStep.vocabPayload.words;
              const word = words[activeVocabIndex] || words[0];
              const isLast = activeVocabIndex === words.length - 1;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Word Count Indicator */}
                  <View style={{ flexDirection: 'row', gap: 6, marginBottom: 16 }}>
                    {words.map((_, idx) => (
                      <View
                        key={idx}
                        style={{
                          height: 6,
                          width: idx === activeVocabIndex ? 24 : 6,
                          borderRadius: 3,
                          backgroundColor:
                            idx === activeVocabIndex ? theme.accentPrimary : theme.neutral[300],
                        }}
                      />
                    ))}
                  </View>

                  {/* Level 1 Container Well */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 24,
                    }}>
                    {/* Level 2 Hero Card */}
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.surfaceRaised,
                        borderRadius: 24,
                        paddingVertical: 32,
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        marginBottom: 16,
                      }}>
                      {/* Arabic Word Display */}
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 48,
                          lineHeight: 68,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 8,
                        }}>
                        {word.ar}
                      </Text>

                      {/* Transliteration */}
                      {showTransliteration && word.romanized ? (
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 15,
                            color: theme.accentPrimaryText,
                            marginBottom: 8,
                          }}>
                          {word.romanized}
                        </Text>
                      ) : null}

                      {/* Pure English Translation */}
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 22,
                          color: theme.textPrimary,
                          textAlign: 'center',
                        }}>
                        {word.en}
                      </Text>
                    </View>

                    {/* Pronunciation Speaker Button */}
                    <Pressable
                      onPress={() => {
                        playTapSound();
                        playArabicAudio(word.ar);
                      }}
                      style={({ pressed }) => ({
                        height: 48,
                        paddingHorizontal: 20,
                        borderRadius: 24,
                        backgroundColor: pressed ? theme.surfaceWell : theme.surfaceRaised,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                      })}>
                      <Ionicons name="volume-high" size={20} color={theme.accentPrimary} />
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 14,
                          color: theme.textPrimary,
                        }}>
                        Listen Pronunciation
                      </Text>
                    </Pressable>
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    onPress={() => {
                      playTapSound();
                      if (!isLast) {
                        setActiveVocabIndex((prev) => prev + 1);
                      } else {
                        handleRegisterSuccess();
                        handleNextStep();
                      }
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      {isLast ? 'Complete Vocabulary' : 'Next Word'}
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              2. CONCEPT INTRO (concept_intro)
             ============================================================= */}
          {currentStep?.type === 'concept_intro' &&
            currentStep.conceptPayload?.concepts &&
            (() => {
              const concepts = currentStep.conceptPayload.concepts;
              const concept: ConceptItem = concepts[activeConceptIndex] || concepts[0];
              const isLast = activeConceptIndex === concepts.length - 1;
              const isCompound = Boolean(
                concept.compound || concept.ar.includes('➔') || concept.ar.includes('->')
              );

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Progression Dots */}
                  {concepts.length > 1 && (
                    <View style={{ flexDirection: 'row', gap: 6, marginBottom: 16 }}>
                      {concepts.map((_, idx) => (
                        <View
                          key={idx}
                          style={{
                            height: 6,
                            width: idx === activeConceptIndex ? 24 : 6,
                            borderRadius: 3,
                            backgroundColor:
                              idx === activeConceptIndex ? theme.accentPrimary : theme.neutral[300],
                          }}
                        />
                      ))}
                    </View>
                  )}

                  {/* Main Concept Presentation Container */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 24,
                    }}>
                    {isCompound && concept.compound ? (
                      /* Compound Transformation View */
                      <View
                        style={{
                          width: '100%',
                          backgroundColor: theme.surfaceRaised,
                          borderRadius: 24,
                          padding: 20,
                          alignItems: 'center',
                          marginBottom: 16,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 16,
                            marginVertical: 12,
                          }}>
                          {/* Base Form */}
                          <Pressable
                            onPress={() =>
                              playArabicAudio(
                                concept.compound?.baseAudioKey || concept.compound?.baseAr || '',
                                concept.compound?.baseAr
                              )
                            }
                            style={{ alignItems: 'center' }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 26,
                                color: theme.textPrimary,
                              }}>
                              {concept.compound.baseAr}
                            </Text>
                            <Text
                              style={{
                                fontFamily: 'Lexend_400Regular',
                                fontSize: 13,
                                color: theme.textSecondary,
                                marginTop: 4,
                              }}>
                              {concept.compound.baseMeaningEn}
                            </Text>
                          </Pressable>

                          {/* Arrow */}
                          <View
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 16,
                              backgroundColor: theme.surfaceWell,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text style={{ fontSize: 16, color: theme.textMuted }}>➔</Text>
                          </View>

                          {/* Result Form */}
                          <Pressable
                            onPress={() =>
                              playArabicAudio(
                                concept.compound?.resultAudioKey ||
                                  concept.compound?.resultAr ||
                                  concept.ar,
                                concept.compound?.resultAr || concept.ar
                              )
                            }
                            style={{ alignItems: 'center' }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 26,
                                color: theme.accentPrimary,
                              }}>
                              {concept.compound.resultAr}
                            </Text>
                            <Text
                              style={{
                                fontFamily: 'Lexend_400Regular',
                                fontSize: 13,
                                color: theme.textSecondary,
                                marginTop: 4,
                              }}>
                              {concept.compound.resultMeaningEn}
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    ) : (
                      /* Standard Concept Hero View */
                      <View
                        style={{
                          width: '100%',
                          backgroundColor: theme.surfaceRaised,
                          borderRadius: 24,
                          paddingVertical: 28,
                          paddingHorizontal: 20,
                          alignItems: 'center',
                          marginBottom: 16,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 40,
                            lineHeight: 58,
                            color: theme.textPrimary,
                            textAlign: 'center',
                            marginBottom: 6,
                          }}>
                          {concept.ar}
                        </Text>

                        {showTransliteration && concept.romanized ? (
                          <Text
                            style={{
                              fontFamily: 'Lexend_500Medium',
                              fontSize: 14,
                              color: theme.accentPrimaryText,
                              marginBottom: 8,
                            }}>
                            {concept.romanized}
                          </Text>
                        ) : null}

                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 18,
                            color: theme.textPrimary,
                            textAlign: 'center',
                          }}>
                          {concept.meaningEn}
                        </Text>
                      </View>
                    )}

                    {/* Example Box */}
                    {concept.exampleAr ? (
                      <View
                        style={{
                          width: '100%',
                          backgroundColor: theme.surfaceRaised,
                          borderRadius: 18,
                          padding: 16,
                          alignItems: 'center',
                          gap: 6,
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 22,
                              color: theme.textPrimary,
                              textAlign: 'center',
                            }}>
                            {concept.exampleAr}
                          </Text>
                          <Pressable
                            onPress={() =>
                              playArabicAudio(concept.exampleAudioKey || concept.exampleAr)
                            }
                            style={{ padding: 4 }}>
                            <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                          </Pressable>
                        </View>
                        <Text
                          style={{
                            fontFamily: 'Lexend_400Regular',
                            fontSize: 13,
                            color: theme.textSecondary,
                            textAlign: 'center',
                          }}>
                          {concept.exampleEn}
                        </Text>
                      </View>
                    ) : null}
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    onPress={() => {
                      playTapSound();
                      if (!isLast) {
                        setActiveConceptIndex((prev) => prev + 1);
                      } else {
                        handleRegisterSuccess();
                        handleNextStep();
                      }
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      {isLast ? 'I Understand! Continue' : 'Next Concept'}
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              3. POLAR SORT (polar_sort)
             ============================================================= */}
          {currentStep?.type === 'polar_sort' &&
            currentStep.polarPayload &&
            (() => {
              const payload = currentStep.polarPayload;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Sentence Card Well */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 24,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.surfaceRaised,
                        borderRadius: 24,
                        paddingVertical: 28,
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        marginBottom: 16,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 34,
                          lineHeight: 52,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 8,
                        }}>
                        {payload.arabicSubject}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lexend_500Medium',
                          fontSize: 16,
                          color: theme.textSecondary,
                          textAlign: 'center',
                        }}>
                        {payload.meaningEn}
                      </Text>
                    </View>

                    {/* Speaker Play Button */}
                    <Pressable
                      onPress={() => playArabicAudio(payload.arabicSubject)}
                      style={({ pressed }) => ({
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: pressed ? theme.surfaceWell : theme.surfaceRaised,
                        alignItems: 'center',
                        justifyContent: 'center',
                      })}>
                      <Ionicons name="volume-high" size={20} color={theme.accentPrimary} />
                    </Pressable>
                  </View>

                  {/* Choice Buttons */}
                  <View style={{ width: '100%', gap: 12 }}>
                    {payload.options.map((option, idx) => {
                      const isSelected = selectedChoice === option;
                      const isCorrectChoice = option === payload.correctAnswer;
                      let bg = theme.surfaceWell;
                      let textColor = theme.textPrimary;

                      if (isSelected) {
                        if (stepStatus === 'correct' && isCorrectChoice) {
                          bg = theme.status.success;
                          textColor = '#FFFFFF';
                        } else if (stepStatus === 'incorrect') {
                          bg = theme.status.danger;
                          textColor = '#FFFFFF';
                        } else {
                          bg = theme.accentPrimary;
                          textColor = '#FFFFFF';
                        }
                      }

                      return (
                        <Pressable
                          key={idx}
                          onPress={() => {
                            if (stepStatus !== 'idle') return;
                            setSelectedChoice(option);
                            playTapSound();
                            playArabicAudio(option);

                            if (option === payload.correctAnswer) {
                              handleRegisterSuccess();
                              setTimeout(() => handleNextStep(), 600);
                            } else {
                              handleRegisterMistake();
                            }
                          }}
                          style={({ pressed }) => ({
                            width: '100%',
                            height: 56,
                            borderRadius: 9999,
                            backgroundColor:
                              pressed && stepStatus === 'idle' ? theme.surfaceRaised : bg,
                            alignItems: 'center',
                            justifyContent: 'center',
                          })}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 18,
                              color: textColor,
                            }}>
                            {option}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              );
            })()}

          {/* =============================================================
              4. SPATIAL POINTING (spatial_pointing)
             ============================================================= */}
          {currentStep?.type === 'spatial_pointing' &&
            currentStep.spatialPointingPayload &&
            (() => {
              const payload = currentStep.spatialPointingPayload;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Visual Distance Stage Container */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 24,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.surfaceRaised,
                        borderRadius: 24,
                        padding: 24,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 16,
                      }}>
                      {payload.distance === 'near' ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                          <Text style={{ fontSize: 36 }}>👉</Text>
                          <Text style={{ fontSize: 48 }}>{payload.emoji}</Text>
                          <View
                            style={{
                              paddingHorizontal: 12,
                              paddingVertical: 4,
                              borderRadius: 12,
                              backgroundColor: theme.accentSecondarySubtle,
                            }}>
                            <Text
                              style={{
                                fontFamily: 'Lexend_600SemiBold',
                                fontSize: 12,
                                color: theme.accentSecondary,
                              }}>
                              NEAR
                            </Text>
                          </View>
                        </View>
                      ) : (
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 8,
                          }}>
                          <Text style={{ fontSize: 32 }}>👉</Text>
                          <View
                            style={{
                              flex: 1,
                              marginHorizontal: 12,
                              height: 2,
                              borderStyle: 'dashed',
                              borderWidth: 1,
                              borderColor: theme.accentSecondary,
                            }}
                          />
                          <View style={{ alignItems: 'center', gap: 4 }}>
                            <Text style={{ fontSize: 44 }}>{payload.emoji}</Text>
                            <View
                              style={{
                                paddingHorizontal: 10,
                                paddingVertical: 2,
                                borderRadius: 10,
                                backgroundColor: theme.surfaceWell,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_600SemiBold',
                                  fontSize: 10,
                                  color: theme.textMuted,
                                }}>
                                FAR
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}
                    </View>

                    {/* Target Arabic Subject */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 32,
                          color: theme.textPrimary,
                        }}>
                        {payload.objectAr}
                      </Text>
                      <Pressable
                        onPress={() => playArabicAudio(payload.objectAr)}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          backgroundColor: theme.surfaceRaised,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                      </Pressable>
                    </View>
                  </View>

                  {/* Option Choice Buttons */}
                  <View style={{ width: '100%', gap: 12 }}>
                    {payload.options.map((opt, idx) => {
                      const isSelected = selectedChoice === opt;
                      const isCorrect = opt === payload.correctAnswer;
                      let bg = theme.surfaceWell;
                      let color = theme.textPrimary;

                      if (isSelected) {
                        if (stepStatus === 'correct' && isCorrect) {
                          bg = theme.status.success;
                          color = '#FFFFFF';
                        } else if (stepStatus === 'incorrect') {
                          bg = theme.status.danger;
                          color = '#FFFFFF';
                        } else {
                          bg = theme.accentPrimary;
                          color = '#FFFFFF';
                        }
                      }

                      return (
                        <Pressable
                          key={idx}
                          onPress={() => {
                            if (stepStatus !== 'idle') return;
                            setSelectedChoice(opt);
                            playTapSound();
                            playArabicAudio(opt);

                            if (opt === payload.correctAnswer) {
                              handleRegisterSuccess();
                              setTimeout(() => handleNextStep(), 600);
                            } else {
                              handleRegisterMistake();
                            }
                          }}
                          style={({ pressed }) => ({
                            width: '100%',
                            height: 56,
                            borderRadius: 9999,
                            backgroundColor:
                              pressed && stepStatus === 'idle' ? theme.surfaceRaised : bg,
                            alignItems: 'center',
                            justifyContent: 'center',
                          })}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 20,
                              color,
                            }}>
                            {opt}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              );
            })()}

          {/* =============================================================
              5. ALTERNATIVE QA (alternative_qa)
             ============================================================= */}
          {currentStep?.type === 'alternative_qa' &&
            currentStep.alternativeQAPayload?.questions &&
            (() => {
              const payload = currentStep.alternativeQAPayload;
              const currentQ = payload.questions[activeQAIndex] || payload.questions[0];

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Battery Progress Counter */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 6,
                      marginBottom: 16,
                    }}>
                    {payload.questions.map((_, idx) => (
                      <View
                        key={idx}
                        style={{
                          height: 6,
                          width: idx === activeQAIndex ? 20 : 6,
                          borderRadius: 3,
                          backgroundColor:
                            idx < activeQAIndex
                              ? theme.status.success
                              : idx === activeQAIndex
                                ? theme.accentPrimary
                                : theme.neutral[300],
                        }}
                      />
                    ))}
                  </View>

                  {/* Question Well Card */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 24,
                    }}>
                    {payload.contextAr && (
                      <View
                        style={{
                          paddingHorizontal: 16,
                          paddingVertical: 8,
                          borderRadius: 16,
                          backgroundColor: theme.surfaceRaised,
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          marginBottom: 16,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 16,
                            color: theme.accentSecondary,
                          }}>
                          {payload.contextAr}
                        </Text>
                        <Pressable onPress={() => playArabicAudio(payload.contextAr!)}>
                          <Ionicons name="volume-high" size={16} color={theme.accentSecondary} />
                        </Pressable>
                      </View>
                    )}

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 24,
                          lineHeight: 40,
                          color: theme.textPrimary,
                          textAlign: 'center',
                        }}>
                        {currentQ.questionAr}
                      </Text>
                      <Pressable
                        onPress={() => playArabicAudio(currentQ.questionAr)}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          backgroundColor: theme.surfaceRaised,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                      </Pressable>
                    </View>
                  </View>

                  {/* Option Choice Buttons */}
                  <View style={{ width: '100%', gap: 12 }}>
                    {currentQ.optionsAr.map((opt, idx) => {
                      const isSelected = selectedQAAnswer === opt;
                      const isCorrect = opt === currentQ.correctAnswerAr;
                      let bg = theme.surfaceWell;
                      let color = theme.textPrimary;

                      if (isSelected) {
                        if (isCorrect) {
                          bg = theme.status.success;
                          color = '#FFFFFF';
                        } else {
                          bg = theme.status.danger;
                          color = '#FFFFFF';
                        }
                      }

                      return (
                        <Pressable
                          key={idx}
                          onPress={() => {
                            if (selectedQAAnswer !== null) return;
                            setSelectedQAAnswer(opt);
                            playTapSound();
                            playArabicAudio(opt);

                            if (opt === currentQ.correctAnswerAr) {
                              playSuccessChime();
                              setTimeout(() => {
                                if (activeQAIndex < payload.questions.length - 1) {
                                  setActiveQAIndex((prev) => prev + 1);
                                  setSelectedQAAnswer(null);
                                } else {
                                  handleRegisterSuccess();
                                  handleNextStep();
                                }
                              }, 500);
                            } else {
                              handleRegisterMistake();
                            }
                          }}
                          style={({ pressed }) => ({
                            width: '100%',
                            height: 56,
                            borderRadius: 9999,
                            backgroundColor:
                              pressed && !selectedQAAnswer ? theme.surfaceRaised : bg,
                            alignItems: 'center',
                            justifyContent: 'center',
                          })}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 20,
                              color,
                            }}>
                            {opt}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              );
            })()}

          {/* =============================================================
              6. TARKIB DISSECTOR (tarkib_dissector)
             ============================================================= */}
          {currentStep?.type === 'tarkib_dissector' &&
            currentStep.tarkibPayload?.sentences &&
            (() => {
              const payload = currentStep.tarkibPayload;
              const sentence = payload.sentences[activeTarkibIndex] || payload.sentences[0];
              const allSlotsFilled = sentence.slots.every((_, idx) =>
                Boolean(assignedTarkibSlots[idx])
              );
              const availableWords = sentence.availableWordsAr.filter(
                (w) => !Object.values(assignedTarkibSlots).includes(w)
              );

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Sentence Type Badge */}
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 14,
                      backgroundColor: theme.accentSecondarySubtle,
                      marginBottom: 16,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 12,
                        color: theme.accentSecondary,
                      }}>
                      {sentence.sentenceTypeAr}
                    </Text>
                  </View>

                  {/* Full Sentence Well Card */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 28,
                          color: theme.textPrimary,
                          textAlign: 'center',
                        }}>
                        {sentence.sentenceAr}
                      </Text>
                      <Pressable
                        onPress={() => playArabicAudio(sentence.sentenceAr)}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          backgroundColor: theme.surfaceRaised,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                      </Pressable>
                    </View>
                  </View>

                  {/* Syntactic Dissection Slots */}
                  <View style={{ width: '100%', gap: 12, marginBottom: 20 }}>
                    {sentence.slots.map((slot, idx) => {
                      const assignedWord = assignedTarkibSlots[idx];

                      return (
                        <View
                          key={idx}
                          style={{
                            width: '100%',
                            backgroundColor: theme.surfaceWell,
                            borderRadius: 20,
                            padding: 14,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          {/* Role Label */}
                          <View>
                            <Text
                              style={{
                                fontFamily: 'Lexend_600SemiBold',
                                fontSize: 13,
                                color: theme.accentPrimary,
                              }}>
                              {slot.roleEn}
                            </Text>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_500Medium',
                                fontSize: 14,
                                color: theme.textMuted,
                              }}>
                              {slot.roleAr}
                            </Text>
                          </View>

                          {/* Target Slot Content */}
                          {assignedWord ? (
                            <Pressable
                              onPress={() => {
                                playTapSound();
                                setAssignedTarkibSlots((prev) => {
                                  const next = { ...prev };
                                  delete next[idx];
                                  return next;
                                });
                              }}
                              style={{
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                borderRadius: 14,
                                backgroundColor: theme.surfaceRaised,
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 8,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'NotoSansArabic_600SemiBold',
                                  fontSize: 18,
                                  color: theme.textPrimary,
                                }}>
                                {assignedWord}
                              </Text>
                              <Ionicons name="close-circle" size={16} color={theme.textMuted} />
                            </Pressable>
                          ) : (
                            <View
                              style={{
                                paddingHorizontal: 14,
                                paddingVertical: 8,
                                borderRadius: 14,
                                borderWidth: 2,
                                borderStyle: 'dashed',
                                borderColor: theme.borderSubtle,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_400Regular',
                                  fontSize: 12,
                                  color: theme.textMuted,
                                }}>
                                Empty Slot
                              </Text>
                            </View>
                          )}
                        </View>
                      );
                    })}
                  </View>

                  {/* Available Words Bank */}
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gap: 10,
                      marginBottom: 24,
                    }}>
                    {availableWords.map((word, idx) => (
                      <Pressable
                        key={idx}
                        onPress={() => {
                          playTapSound();
                          playArabicAudio(word);
                          const firstEmpty = sentence.slots.findIndex(
                            (_, sIdx) => !assignedTarkibSlots[sIdx]
                          );
                          if (firstEmpty !== -1) {
                            setAssignedTarkibSlots((prev) => ({ ...prev, [firstEmpty]: word }));
                          }
                        }}
                        style={({ pressed }) => ({
                          paddingHorizontal: 18,
                          paddingVertical: 10,
                          borderRadius: 16,
                          backgroundColor: pressed ? theme.accentPrimarySubtle : theme.surfaceWell,
                        })}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 18,
                            color: theme.textPrimary,
                          }}>
                          {word}
                        </Text>
                      </Pressable>
                    ))}
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    disabled={!allSlotsFilled}
                    onPress={() => {
                      if (!allSlotsFilled) return;
                      playTapSound();
                      const isCorrect = sentence.slots.every(
                        (s, idx) => assignedTarkibSlots[idx] === s.expectedWordAr
                      );

                      if (isCorrect) {
                        if (activeTarkibIndex < payload.sentences.length - 1) {
                          playSuccessChime();
                          setActiveTarkibIndex((prev) => prev + 1);
                          setAssignedTarkibSlots({});
                        } else {
                          handleRegisterSuccess();
                          handleNextStep();
                        }
                      } else {
                        handleRegisterMistake();
                      }
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: !allSlotsFilled
                        ? theme.neutral[300]
                        : pressed
                          ? theme.accentPrimaryHover
                          : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      Verify Structure
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              7. SENTENCE ASSEMBLY (sentence_assembly)
             ============================================================= */}
          {currentStep?.type === 'sentence_assembly' &&
            currentStep.assemblyPayload &&
            (() => {
              const payload = currentStep.assemblyPayload;
              const expected = payload.expectedAnswer;
              const hasChips = assembledChips.length > 0;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* English Prompt */}
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 18,
                      color: theme.textPrimary,
                      textAlign: 'center',
                      marginBottom: 20,
                    }}>
                    {payload.promptEn}
                  </Text>

                  {/* Assembly Drop Target Area */}
                  <View
                    style={{
                      width: '100%',
                      minHeight: 88,
                      borderRadius: 24,
                      backgroundColor: theme.surfaceWell,
                      borderWidth: hasChips ? 0 : 2,
                      borderStyle: hasChips ? 'solid' : 'dashed',
                      borderColor: theme.borderSubtle,
                      padding: 16,
                      flexDirection: 'row-reverse',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 24,
                    }}>
                    {!hasChips ? (
                      <Text
                        style={{
                          fontFamily: 'Lexend_400Regular',
                          fontSize: 14,
                          color: theme.textMuted,
                        }}>
                        Tap word chips below in sequence
                      </Text>
                    ) : (
                      assembledChips.map((chip, idx) => (
                        <Pressable
                          key={idx}
                          onPress={() => {
                            playTapSound();
                            setAssembledChips((prev) => prev.filter((_, i) => i !== idx));
                            setAvailableChips((prev) => [...prev, chip]);
                          }}
                          style={({ pressed }) => ({
                            paddingHorizontal: 16,
                            paddingVertical: 10,
                            borderRadius: 16,
                            backgroundColor: pressed ? theme.surfaceWell : theme.surfaceRaised,
                          })}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 20,
                              color: theme.textPrimary,
                            }}>
                            {chip}
                          </Text>
                        </Pressable>
                      ))
                    )}
                  </View>

                  {/* Available Scrambled Word Bank */}
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gap: 10,
                      marginBottom: 28,
                    }}>
                    {availableChips.map((chip, idx) => (
                      <Pressable
                        key={idx}
                        onPress={() => {
                          playTapSound();
                          playArabicAudio(chip);
                          setAvailableChips((prev) => prev.filter((_, i) => i !== idx));
                          setAssembledChips((prev) => [...prev, chip]);
                        }}
                        style={({ pressed }) => ({
                          paddingHorizontal: 18,
                          paddingVertical: 10,
                          borderRadius: 16,
                          backgroundColor: pressed ? theme.accentPrimarySubtle : theme.surfaceWell,
                        })}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 20,
                            color: theme.textPrimary,
                          }}>
                          {chip}
                        </Text>
                      </Pressable>
                    ))}
                  </View>

                  {/* 56px Verify Action Pill */}
                  <Pressable
                    disabled={!hasChips}
                    onPress={() => {
                      if (!hasChips) return;
                      playTapSound();
                      const isCorrect = assembledChips.join(' ') === expected.join(' ');

                      if (isCorrect) {
                        handleRegisterSuccess();
                        handleNextStep();
                      } else {
                        handleRegisterMistake();
                      }
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: !hasChips
                        ? theme.neutral[300]
                        : pressed
                          ? theme.accentPrimaryHover
                          : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      Verify Sentence
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              8. CLOZE CHOICE (cloze_choice)
             ============================================================= */}
          {currentStep?.type === 'cloze_choice' &&
            currentStep.clozePayload &&
            (() => {
              const payload = currentStep.clozePayload;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Sentence Card with Blank */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 24,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.surfaceRaised,
                        borderRadius: 24,
                        paddingVertical: 24,
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        marginBottom: 12,
                      }}>
                      {/* Visual Cue Emoji & Distance Badge */}
                      {payload.emoji ? (
                        <View style={{ alignItems: 'center', marginBottom: 12 }}>
                          {payload.distance === 'far' ? (
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 6, gap: 8 }}>
                              <Text style={{ fontSize: 22 }}>👉</Text>
                              <Text style={{ color: theme.textSecondary, fontSize: 14 }}>─────▶</Text>
                              <View
                                style={{
                                  width: 60,
                                  height: 60,
                                  borderRadius: 20,
                                  backgroundColor: theme.canvas,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Text style={{ fontSize: 30 }}>{payload.emoji}</Text>
                              </View>
                            </View>
                          ) : (
                            <View
                              style={{
                                width: 60,
                                height: 60,
                                borderRadius: 20,
                                backgroundColor: theme.canvas,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 6,
                              }}>
                              <Text style={{ fontSize: 30 }}>{payload.emoji}</Text>
                            </View>
                          )}
                          {payload.distance ? (
                            <View
                              style={{
                                paddingHorizontal: 12,
                                paddingVertical: 4,
                                borderRadius: 12,
                                backgroundColor: theme.canvas,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_600SemiBold',
                                  fontSize: 11,
                                  color: theme.textSecondary,
                                  textTransform: 'uppercase',
                                }}>
                                {payload.distance === 'far' ? (isBn ? 'দূরে · تِلْكَ' : 'Far · That') : (isBn ? 'কাছে · هَذِهِ' : 'Near · This')}
                              </Text>
                            </View>
                          ) : null}
                        </View>
                      ) : null}
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 32,
                          lineHeight: 52,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 8,
                        }}>
                        {payload.questionAr}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lexend_500Medium',
                          fontSize: 16,
                          color: theme.textSecondary,
                          textAlign: 'center',
                        }}>
                        {payload.questionEn}
                      </Text>
                    </View>
                  </View>

                  {/* Option Choice Buttons */}
                  <View style={{ width: '100%', gap: 12 }}>
                    {payload.options.map((option, idx) => {
                      const isSelected = selectedChoice === option;
                      const isCorrectChoice = option === payload.correctAnswer;
                      let bg = theme.surfaceWell;
                      let textColor = theme.textPrimary;

                      if (isSelected) {
                        if (stepStatus === 'correct' && isCorrectChoice) {
                          bg = theme.status.success;
                          textColor = '#FFFFFF';
                        } else if (stepStatus === 'incorrect') {
                          bg = theme.status.danger;
                          textColor = '#FFFFFF';
                        } else {
                          bg = theme.accentPrimary;
                          textColor = '#FFFFFF';
                        }
                      }

                      return (
                        <Pressable
                          key={idx}
                          onPress={() => {
                            if (stepStatus !== 'idle') return;
                            setSelectedChoice(option);
                            playTapSound();
                            playArabicAudio(option);

                            if (option === payload.correctAnswer) {
                              handleRegisterSuccess();
                              setTimeout(() => handleNextStep(), 600);
                            } else {
                              handleRegisterMistake();
                            }
                          }}
                          style={({ pressed }) => ({
                            width: '100%',
                            height: 56,
                            borderRadius: 9999,
                            backgroundColor:
                              pressed && stepStatus === 'idle' ? theme.surfaceRaised : bg,
                            alignItems: 'center',
                            justifyContent: 'center',
                          })}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 18,
                              color: textColor,
                            }}>
                            {option}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              );
            })()}

          {/* =============================================================
              9. SPEED PAIR MATCH (speed_pair)
             ============================================================= */}
          {currentStep?.type === 'speed_pair' &&
            currentStep.pairPayload?.pairs &&
            (() => {
              const pairs = currentStep.pairPayload.pairs;
              const isAllMatched = matchedPairIds.length === pairs.length;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Columns Container */}
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      gap: 12,
                      marginBottom: 24,
                    }}>
                    {/* Arabic Column */}
                    <View style={{ flex: 1, gap: 10 }}>
                      {pairs.map((p) => {
                        const isMatched = matchedPairIds.includes(p.id);
                        const isSelected = selectedPairAr === p.ar;

                        return (
                          <Pressable
                            key={`ar-${p.id}`}
                            disabled={isMatched}
                            onPress={() => {
                              playTapSound();
                              playArabicAudio(p.ar);
                              if (selectedPairMeaning) {
                                const targetPair = pairs.find(
                                  (item) => item.meaning === selectedPairMeaning
                                );
                                if (targetPair && targetPair.ar === p.ar) {
                                  playSuccessChime();
                                  setMatchedPairIds((prev) => [...prev, targetPair.id]);
                                  setSelectedPairAr(null);
                                  setSelectedPairMeaning(null);
                                } else {
                                  playErrorCue();
                                  setSelectedPairAr(null);
                                  setSelectedPairMeaning(null);
                                }
                              } else {
                                setSelectedPairAr(p.ar);
                              }
                            }}
                            style={({ pressed }) => ({
                              height: 54,
                              borderRadius: 18,
                              backgroundColor: isMatched
                                ? theme.status.successSubtle
                                : isSelected
                                  ? theme.accentPrimary
                                  : pressed
                                    ? theme.surfaceRaised
                                    : theme.surfaceWell,
                              alignItems: 'center',
                              justifyContent: 'center',
                            })}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 18,
                                color: isMatched
                                  ? theme.status.successText
                                  : isSelected
                                    ? '#FFFFFF'
                                    : theme.textPrimary,
                              }}>
                              {p.ar}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>

                    {/* English Meaning Column */}
                    <View style={{ flex: 1, gap: 10 }}>
                      {pairs.map((p) => {
                        const isMatched = matchedPairIds.includes(p.id);
                        const isSelected = selectedPairMeaning === p.meaning;

                        return (
                          <Pressable
                            key={`en-${p.id}`}
                            disabled={isMatched}
                            onPress={() => {
                              playTapSound();
                              if (selectedPairAr) {
                                const targetPair = pairs.find((item) => item.ar === selectedPairAr);
                                if (targetPair && targetPair.meaning === p.meaning) {
                                  playSuccessChime();
                                  setMatchedPairIds((prev) => [...prev, targetPair.id]);
                                  setSelectedPairAr(null);
                                  setSelectedPairMeaning(null);
                                } else {
                                  playErrorCue();
                                  setSelectedPairAr(null);
                                  setSelectedPairMeaning(null);
                                }
                              } else {
                                setSelectedPairMeaning(p.meaning);
                              }
                            }}
                            style={({ pressed }) => ({
                              height: 54,
                              borderRadius: 18,
                              paddingHorizontal: 8,
                              backgroundColor: isMatched
                                ? theme.status.successSubtle
                                : isSelected
                                  ? theme.accentSecondary
                                  : pressed
                                    ? theme.surfaceRaised
                                    : theme.surfaceWell,
                              alignItems: 'center',
                              justifyContent: 'center',
                            })}>
                            <Text
                              numberOfLines={2}
                              style={{
                                fontFamily: 'Lexend_600SemiBold',
                                fontSize: 13,
                                textAlign: 'center',
                                color: isMatched
                                  ? theme.status.successText
                                  : isSelected
                                    ? '#FFFFFF'
                                    : theme.textPrimary,
                              }}>
                              {p.meaning}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    disabled={!isAllMatched}
                    onPress={() => {
                      handleRegisterSuccess();
                      handleNextStep();
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: isAllMatched
                        ? pressed
                          ? theme.accentPrimaryHover
                          : theme.accentPrimary
                        : theme.neutral[300],
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      All Paired! Continue
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              10. QURANIC ECHO (quranic_echo)
             ============================================================= */}
          {currentStep?.type === 'quranic_echo' &&
            currentStep.echoPayload &&
            (() => {
              const echo = currentStep.echoPayload;
              const words = echo.arabicText.split(' ');

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Pattern Unlocked Milestone Badge */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 6,
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderRadius: 20,
                      backgroundColor: theme.accentPrimarySubtle,
                      marginBottom: 16,
                    }}>
                    <Ionicons name="sparkles" size={16} color={theme.accentPrimary} />
                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 12,
                        color: theme.accentPrimary,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}>
                      {echo.patternNameEn || 'Quranic Milestone'}
                    </Text>
                  </View>

                  {/* Ayah Well Card */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    {/* Surah Citation */}
                    <Text
                      style={{
                        fontFamily: 'NotoSansArabic_600SemiBold',
                        fontSize: 24,
                        color: theme.textPrimary,
                        marginBottom: 4,
                      }}>
                      {echo.surahNameAr}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lexend_400Regular',
                        fontSize: 12,
                        color: theme.textMuted,
                        marginBottom: 16,
                      }}>
                      Surah {echo.surahNameEn} ({echo.surahNumber}:{echo.ayahNumber})
                    </Text>

                    {/* Raised Ayah Calligraphy Card */}
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.surfaceRaised,
                        borderRadius: 24,
                        padding: 20,
                        alignItems: 'center',
                        marginBottom: 16,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          gap: 6,
                          marginBottom: 14,
                        }}>
                        {words.map((w, idx) => {
                          const isHighlighted = echo.highlightedWords.some(
                            (hw) => w.includes(hw) || hw.includes(w)
                          );
                          return (
                            <View
                              key={idx}
                              style={{
                                paddingHorizontal: isHighlighted ? 8 : 0,
                                paddingVertical: isHighlighted ? 2 : 0,
                                borderRadius: isHighlighted ? 8 : 0,
                                backgroundColor: isHighlighted
                                  ? theme.accentPrimarySubtle
                                  : 'transparent',
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'NotoSansArabic_600SemiBold',
                                  fontSize: 22,
                                  lineHeight: 38,
                                  color: isHighlighted ? theme.accentPrimary : theme.textPrimary,
                                }}>
                                {w}
                              </Text>
                            </View>
                          );
                        })}
                      </View>

                      {/* Pure English Translation */}
                      <Text
                        style={{
                          fontFamily: 'Lexend_400Regular',
                          fontSize: 14,
                          color: theme.textSecondary,
                          textAlign: 'center',
                          fontStyle: 'italic',
                          lineHeight: 20,
                        }}>
                        &ldquo;{echo.translationEn}&rdquo;
                      </Text>
                    </View>

                    {/* Recitation Audio Button */}
                    <Pressable
                      onPress={() =>
                        playArabicAudio(
                          echo.audioKey ||
                            `quran_${String(echo.surahNumber).padStart(3, '0')}${String(
                              echo.ayahNumber
                            ).padStart(3, '0')}`
                        )
                      }
                      style={({ pressed }) => ({
                        height: 44,
                        paddingHorizontal: 20,
                        borderRadius: 22,
                        backgroundColor: pressed ? theme.surfaceWell : theme.surfaceRaised,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                      })}>
                      <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 13,
                          color: theme.textPrimary,
                        }}>
                        Listen Recitation
                      </Text>
                    </Pressable>
                  </View>

                  {/* Syntactic Architecture Bridge */}
                  {echo.lessonPatternAr && echo.quranPatternAr && (
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.surfaceWell,
                        borderRadius: 24,
                        padding: 18,
                        marginBottom: 24,
                        gap: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 11,
                          color: theme.accentPrimary,
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                        }}>
                        Syntactic Architecture Bridge
                      </Text>

                      <View style={{ flexDirection: 'row', gap: 10 }}>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: theme.surfaceRaised,
                            borderRadius: 16,
                            padding: 12,
                            gap: 4,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_500Medium',
                              fontSize: 11,
                              color: theme.textMuted,
                            }}>
                            In Your Lesson
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 16,
                              color: theme.textPrimary,
                            }}>
                            {echo.lessonPatternAr}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lexend_400Regular',
                              fontSize: 11,
                              color: theme.textSecondary,
                            }}>
                            {echo.lessonPatternEn}
                          </Text>
                        </View>

                        <View
                          style={{
                            flex: 1,
                            backgroundColor: theme.surfaceRaised,
                            borderRadius: 16,
                            padding: 12,
                            gap: 4,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_500Medium',
                              fontSize: 11,
                              color: theme.textMuted,
                            }}>
                            In The Quran
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 16,
                              color: theme.textPrimary,
                            }}>
                            {echo.quranPatternAr}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lexend_400Regular',
                              fontSize: 11,
                              color: theme.textSecondary,
                            }}>
                            {echo.quranPatternEn}
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}

                  {/* 56px Milestone Completion Button */}
                  <Pressable
                    onPress={() => {
                      playSuccessChime();
                      handleRegisterSuccess();
                      handleNextStep();
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      Complete Lesson
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              11. SUN / MOON LETTERS SORT (sun_moon_sort)
             ============================================================= */}
          {currentStep?.type === 'sun_moon_sort' &&
            currentStep.sunMoonPayload?.items &&
            (() => {
              const payload = currentStep.sunMoonPayload;
              const currentItem = payload.items[activeSunMoonIndex] || payload.items[0];
              const isLast = activeSunMoonIndex === payload.items.length - 1;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Progress Indicators */}
                  <View style={{ flexDirection: 'row', gap: 6, marginBottom: 16 }}>
                    {payload.items.map((_, idx) => (
                      <View
                        key={idx}
                        style={{
                          height: 6,
                          width: idx === activeSunMoonIndex ? 24 : 6,
                          borderRadius: 3,
                          backgroundColor:
                            idx < activeSunMoonIndex
                              ? theme.status.success
                              : idx === activeSunMoonIndex
                                ? theme.accentPrimary
                                : theme.neutral[300],
                        }}
                      />
                    ))}
                  </View>

                  {/* Word Card Well */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 24,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.surfaceRaised,
                        borderRadius: 24,
                        paddingVertical: 28,
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        marginBottom: 16,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 48,
                          lineHeight: 76,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 8,
                        }}>
                        {currentItem.wordAr}
                      </Text>
                      {showTransliteration && currentItem.romanized ? (
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 14,
                            color: theme.accentPrimaryText,
                            marginBottom: 6,
                          }}>
                          {currentItem.romanized}
                        </Text>
                      ) : null}
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 18,
                          color: theme.textPrimary,
                          textAlign: 'center',
                        }}>
                        {currentItem.wordEn}
                      </Text>
                    </View>

                    {/* Speaker Play Button */}
                    <Pressable
                      onPress={() => playArabicAudio(currentItem.audioKey || currentItem.wordAr)}
                      style={({ pressed }) => ({
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: pressed ? theme.surfaceWell : theme.surfaceRaised,
                        alignItems: 'center',
                        justifyContent: 'center',
                      })}>
                      <Ionicons name="volume-high" size={20} color={theme.accentPrimary} />
                    </Pressable>
                  </View>

                  {/* Sun vs Moon Choice Buttons */}
                  <View style={{ width: '100%', gap: 12 }}>
                    <Pressable
                      onPress={() => {
                        if (stepStatus !== 'idle') return;
                        setSelectedSunMoonChoice('sun');
                        playTapSound();
                        if (currentItem.letterType === 'sun') {
                          playSuccessChime();
                          if (!isLast) {
                            setTimeout(() => {
                              setActiveSunMoonIndex((prev) => prev + 1);
                              setSelectedSunMoonChoice(null);
                            }, 500);
                          } else {
                            handleRegisterSuccess();
                            handleNextStep();
                          }
                        } else {
                          handleRegisterMistake();
                        }
                      }}
                      style={({ pressed }) => ({
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor:
                          selectedSunMoonChoice === 'sun'
                            ? currentItem.letterType === 'sun'
                              ? theme.status.success
                              : theme.status.danger
                            : pressed
                              ? theme.accentPrimarySubtle
                              : theme.surfaceWell,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                      })}>
                      <Text style={{ fontSize: 20 }}>☀️</Text>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 16,
                          color: selectedSunMoonChoice === 'sun' ? '#FFFFFF' : theme.textPrimary,
                        }}>
                        حَرْفٌ شَمْسِيٌّ (Sun Letter)
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        if (stepStatus !== 'idle') return;
                        setSelectedSunMoonChoice('moon');
                        playTapSound();
                        if (currentItem.letterType === 'moon') {
                          playSuccessChime();
                          if (!isLast) {
                            setTimeout(() => {
                              setActiveSunMoonIndex((prev) => prev + 1);
                              setSelectedSunMoonChoice(null);
                            }, 500);
                          } else {
                            handleRegisterSuccess();
                            handleNextStep();
                          }
                        } else {
                          handleRegisterMistake();
                        }
                      }}
                      style={({ pressed }) => ({
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor:
                          selectedSunMoonChoice === 'moon'
                            ? currentItem.letterType === 'moon'
                              ? theme.status.success
                              : theme.status.danger
                            : pressed
                              ? theme.accentPrimarySubtle
                              : theme.surfaceWell,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                      })}>
                      <Text style={{ fontSize: 20 }}>🌙</Text>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 16,
                          color: selectedSunMoonChoice === 'moon' ? '#FFFFFF' : theme.textPrimary,
                        }}>
                        حَرْفٌ قَمَرِيٌّ (Moon Letter)
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            })()}

          {/* =============================================================
              12. BRANCHING SYNTAX (branching_syntax)
             ============================================================= */}
          {currentStep?.type === 'branching_syntax' &&
            currentStep.branchingPayload &&
            (() => {
              const payload = currentStep.branchingPayload;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Rule Header */}
                  <View
                    style={{
                      width: '100%',
                      padding: 14,
                      borderRadius: 18,
                      backgroundColor: theme.surfaceWell,
                      alignItems: 'center',
                      marginBottom: 16,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lexend_500Medium',
                        fontSize: 13,
                        color: theme.textMuted,
                        textAlign: 'center',
                      }}>
                      {'Notice the effect of "ال": complete sentence vs descriptive sentence'}
                    </Text>
                  </View>

                  {/* Two Contrast Cards */}
                  <View style={{ width: '100%', gap: 12, marginBottom: 24 }}>
                    {/* Card A: Sentence without Al */}
                    <Pressable
                      onPress={() =>
                        playArabicAudio(
                          payload.audioKeySentence || payload.indefiniteSentenceAr,
                          payload.indefiniteSentenceAr
                        )
                      }
                      style={({ pressed }) => ({
                        width: '100%',
                        padding: 18,
                        borderRadius: 24,
                        backgroundColor: pressed ? theme.surfaceRaised : theme.surfaceWell,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      })}>
                      <View style={{ flex: 1, gap: 4 }}>
                        <View
                          style={{
                            alignSelf: 'flex-start',
                            paddingHorizontal: 8,
                            paddingVertical: 2,
                            borderRadius: 6,
                            backgroundColor: theme.accentPrimarySubtle,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 11,
                              color: theme.accentPrimary,
                            }}>
                            Sentence
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 14,
                            color: theme.textPrimary,
                          }}>
                          &ldquo;{payload.indefiniteMeaningEn}&rdquo;
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 22,
                            color: theme.textPrimary,
                          }}>
                          {payload.indefiniteSentenceAr}
                        </Text>
                        <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                      </View>
                    </Pressable>

                    {/* Card B: Descriptive Sentence with Al */}
                    <Pressable
                      onPress={() =>
                        playArabicAudio(
                          payload.audioKeyComplete || payload.completeSentenceAr,
                          payload.completeSentenceAr
                        )
                      }
                      style={({ pressed }) => ({
                        width: '100%',
                        padding: 18,
                        borderRadius: 24,
                        backgroundColor: pressed ? theme.surfaceRaised : theme.surfaceWell,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      })}>
                      <View style={{ flex: 1, gap: 4 }}>
                        <View
                          style={{
                            alignSelf: 'flex-start',
                            paddingHorizontal: 8,
                            paddingVertical: 2,
                            borderRadius: 6,
                            backgroundColor: theme.accentSecondarySubtle,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 11,
                              color: theme.accentSecondary,
                            }}>
                            Descriptive
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 14,
                            color: theme.textPrimary,
                          }}>
                          &ldquo;{payload.completeSentenceMeaningEn}&rdquo;
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 22,
                            color: theme.textPrimary,
                          }}>
                          {payload.completeSentenceAr}
                        </Text>
                        <Ionicons name="volume-high" size={18} color={theme.accentSecondary} />
                      </View>
                    </Pressable>
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    onPress={() => {
                      playTapSound();
                      handleRegisterSuccess();
                      handleNextStep();
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      Continue
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              13. POSSESSIVE MATRIX (possessive_matrix)
             ============================================================= */}
          {currentStep?.type === 'possessive_matrix' &&
            currentStep.matrixPayload?.matrices &&
            (() => {
              const payload = currentStep.matrixPayload;
              const currentMatrix = payload.matrices[activeMatrixNounIndex] || payload.matrices[0];
              const isLastNoun = activeMatrixNounIndex === payload.matrices.length - 1;
              const activeForm = currentMatrix.forms[selectedSuffixIndex] || currentMatrix.forms[0];

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Noun Selector Tabs */}
                  {payload.matrices.length > 1 && (
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 8,
                        padding: 4,
                        borderRadius: 20,
                        backgroundColor: theme.surfaceWell,
                        marginBottom: 16,
                      }}>
                      {payload.matrices.map((m, idx) => (
                        <Pressable
                          key={idx}
                          onPress={() => {
                            playTapSound();
                            setActiveMatrixNounIndex(idx);
                          }}
                          style={{
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            borderRadius: 16,
                            backgroundColor:
                              idx === activeMatrixNounIndex ? theme.surfaceRaised : 'transparent',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 14,
                              color:
                                idx === activeMatrixNounIndex ? theme.textPrimary : theme.textMuted,
                            }}>
                            {m.baseWordAr}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}

                  {/* Active Conjugated Form Hero Well */}
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: theme.surfaceWell,
                      borderRadius: 32,
                      padding: 24,
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.surfaceRaised,
                        borderRadius: 24,
                        paddingVertical: 28,
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        marginBottom: 16,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 44,
                          lineHeight: 74,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 6,
                        }}>
                        {activeForm.ar}
                      </Text>
                      {showTransliteration && activeForm.romanized ? (
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 14,
                            color: theme.accentPrimaryText,
                            marginBottom: 8,
                          }}>
                          {activeForm.romanized}
                        </Text>
                      ) : null}
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 20,
                          color: theme.textPrimary,
                          textAlign: 'center',
                        }}>
                        {activeForm.en}
                      </Text>
                    </View>

                    {/* Suffix Buttons Row */}
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 6,
                      }}>
                      {currentMatrix.forms.map((f, idx) => {
                        const isSelected = idx === selectedSuffixIndex;

                        return (
                          <Pressable
                            key={idx}
                            onPress={() => {
                              setSelectedSuffixIndex(idx);
                              playArabicAudio(f.audioKey || f.suffix, f.suffix);
                            }}
                            style={{
                              flex: 1,
                              paddingVertical: 10,
                              borderRadius: 16,
                              backgroundColor: isSelected
                                ? theme.accentPrimary
                                : theme.surfaceRaised,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 18,
                                color: isSelected ? '#FFFFFF' : theme.textPrimary,
                              }}>
                              {f.suffix}
                            </Text>
                            <Text
                              style={{
                                fontFamily: 'Lexend_400Regular',
                                fontSize: 10,
                                color: isSelected ? '#FFFFFF' : theme.textMuted,
                                marginTop: 2,
                              }}>
                              {f.pronounLabel}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    onPress={() => {
                      playTapSound();
                      if (isLastNoun) {
                        handleRegisterSuccess();
                        handleNextStep();
                      } else {
                        setActiveMatrixNounIndex((prev) => prev + 1);
                        setSelectedSuffixIndex(0);
                      }
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      {isLastNoun ? 'Mastered Possessive Suffixes! Continue' : 'Next Word Pattern'}
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              14. IDAFAH EQUATION (idafah_equation)
             ============================================================= */}
          {currentStep?.type === 'idafah_equation' &&
            currentStep.idafahPayload?.examples &&
            (() => {
              const payload = currentStep.idafahPayload;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Rule Header */}
                  <View
                    style={{
                      width: '100%',
                      padding: 14,
                      borderRadius: 18,
                      backgroundColor: theme.surfaceWell,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'NotoSansArabic_600SemiBold',
                        fontSize: 14,
                        color: theme.textPrimary,
                      }}>
                      المُضَافُ لَا يُنَوَّنُ
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lexend_500Medium',
                        fontSize: 12,
                        color: theme.textMuted,
                      }}>
                      {payload.ruleSummaryEn}
                    </Text>
                  </View>

                  {/* Compact Rows of Examples */}
                  <View style={{ width: '100%', gap: 10, marginBottom: 24 }}>
                    {payload.examples.map((item) => (
                      <Pressable
                        key={item.id}
                        onPress={() =>
                          playArabicAudio(item.audioKey || item.compoundAr, item.compoundAr)
                        }
                        style={({ pressed }) => ({
                          width: '100%',
                          padding: 16,
                          borderRadius: 20,
                          backgroundColor: pressed ? theme.surfaceRaised : theme.surfaceWell,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        })}>
                        <View style={{ flex: 1, gap: 2 }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 14,
                              color: theme.textPrimary,
                            }}>
                            {item.compoundEn}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lexend_400Regular',
                              fontSize: 11,
                              color: theme.textMuted,
                            }}>
                            {item.typeLabelEn}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                          <View style={{ alignItems: 'flex-end' }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 20,
                                color: theme.textPrimary,
                              }}>
                              {item.compoundAr}
                            </Text>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_500Medium',
                                fontSize: 11,
                                color: theme.textMuted,
                              }}>
                              {item.breakdownAr}
                            </Text>
                          </View>
                          <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                        </View>
                      </Pressable>
                    ))}
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    onPress={() => {
                      playTapSound();
                      handleRegisterSuccess();
                      handleNextStep();
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      Continue
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* =============================================================
              15. SYNTAX FRONTING (syntax_fronting)
             ============================================================= */}
          {currentStep?.type === 'syntax_fronting' &&
            currentStep.syntaxFrontingPayload?.sentences &&
            (() => {
              const payload = currentStep.syntaxFrontingPayload;

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Rule Header */}
                  <View
                    style={{
                      width: '100%',
                      padding: 14,
                      borderRadius: 18,
                      backgroundColor: theme.surfaceWell,
                      alignItems: 'center',
                      marginBottom: 16,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lexend_500Medium',
                        fontSize: 13,
                        color: theme.textMuted,
                        textAlign: 'center',
                      }}>
                      {payload.ruleSummaryEn}
                    </Text>
                  </View>

                  {/* Sentences Compared Side by Side */}
                  <View style={{ width: '100%', gap: 12, marginBottom: 24 }}>
                    {payload.sentences.map((item) => (
                      <Pressable
                        key={item.id}
                        onPress={() => playArabicAudio(item.audioKey || item.arabic, item.arabic)}
                        style={({ pressed }) => ({
                          width: '100%',
                          padding: 16,
                          borderRadius: 20,
                          backgroundColor: pressed ? theme.surfaceRaised : theme.surfaceWell,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        })}>
                        <View style={{ flex: 1, gap: 4 }}>
                          <View
                            style={{
                              alignSelf: 'flex-start',
                              paddingHorizontal: 8,
                              paddingVertical: 2,
                              borderRadius: 6,
                              backgroundColor: theme.accentPrimarySubtle,
                            }}>
                            <Text
                              style={{
                                fontFamily: 'Lexend_600SemiBold',
                                fontSize: 11,
                                color: theme.accentPrimary,
                              }}>
                              {item.labelEn}
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 14,
                              color: theme.textPrimary,
                            }}>
                            &ldquo;{item.meaningEn}&rdquo;
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 22,
                              color: theme.textPrimary,
                            }}>
                            {item.arabic}
                          </Text>
                          <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                        </View>
                      </Pressable>
                    ))}
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    onPress={() => {
                      playTapSound();
                      handleRegisterSuccess();
                      handleNextStep();
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      Continue
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* STEP 16: VERB PREVIEW GRID (Vol 2) */}
          {currentStep?.type === 'verb_preview_grid' &&
            currentStep.verbPreviewPayload &&
            (() => {
              const payload = currentStep.verbPreviewPayload;
              if (!payload || payload.verbs.length === 0) return null;
              const currentVerb = payload.verbs[activeVerbPreviewIndex] || payload.verbs[0];

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Author Pedagogical Disclaimer Banner */}
                  <View
                    style={{
                      width: '100%',
                      padding: 16,
                      borderRadius: 24,
                      backgroundColor: '#FEF3C7',
                      alignItems: 'center',
                      marginBottom: 16,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 6,
                        marginBottom: 4,
                      }}>
                      <Ionicons name="warning" size={16} color="#D97706" />
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 12,
                          color: '#B45309',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                        }}>
                        {payload.disclaimerEn}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontFamily: 'NotoSansArabic_600SemiBold',
                        fontSize: 16,
                        color: '#78350F',
                        textAlign: 'center',
                        marginBottom: 4,
                      }}>
                      {payload.disclaimerAr}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lexend_500Medium',
                        fontSize: 12,
                        color: '#92400E',
                      }}>
                      {payload.tenseLabelEn}
                    </Text>
                  </View>

                  {/* Verb Selector Pills */}
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 8, paddingHorizontal: 4, marginBottom: 16 }}>
                    {payload.verbs.map((verb, idx) => {
                      const isSelected = idx === activeVerbPreviewIndex;
                      return (
                        <Pressable
                          key={verb.id}
                          onPress={() => {
                            playTapSound();
                            setActiveVerbPreviewIndex(idx);
                            playArabicAudio(verb.rootAr);
                          }}
                          style={{
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            borderRadius: 20,
                            backgroundColor: isSelected ? theme.accentPrimary : theme.surfaceWell,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 6,
                          }}>
                          <Text style={{ fontSize: 14 }}>{verb.emoji}</Text>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 15,
                              color: isSelected ? '#FFFFFF' : theme.textPrimary,
                            }}>
                            {verb.rootAr}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lexend_400Regular',
                              fontSize: 11,
                              color: isSelected ? '#FFFFFF' : theme.textMuted,
                            }}>
                            ({verb.rootEn})
                          </Text>
                        </Pressable>
                      );
                    })}
                  </ScrollView>

                  {/* Active Verb Card & Forms */}
                  <View
                    style={{
                      width: '100%',
                      padding: 20,
                      borderRadius: 28,
                      backgroundColor: theme.surfaceWell,
                      marginBottom: 20,
                    }}>
                    {/* Header with Active Recall Memory Test Toggle */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 16,
                      }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Text style={{ fontSize: 24 }}>{currentVerb.emoji}</Text>
                        <View>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 16,
                              color: theme.textPrimary,
                            }}>
                            {currentVerb.rootEn}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lexend_400Regular',
                              fontSize: 11,
                              color: theme.textMuted,
                            }}>
                            {activeVerbPreviewIndex + 1} / {payload.verbs.length}
                          </Text>
                        </View>
                      </View>

                      <Pressable
                        onPress={() => {
                          playTapSound();
                          setRevealConjugations((prev) => !prev);
                        }}
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 6,
                          borderRadius: 12,
                          backgroundColor: theme.surfaceRaised,
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 6,
                        }}>
                        <Ionicons
                          name={revealConjugations ? 'eye-off' : 'eye'}
                          size={14}
                          color={theme.textPrimary}
                        />
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 11,
                            color: theme.textPrimary,
                          }}>
                          {revealConjugations ? 'Hide (Test Memory)' : 'Reveal'}
                        </Text>
                      </Pressable>
                    </View>

                    {/* Forms List */}
                    <View style={{ gap: 10 }}>
                      {currentVerb.forms.map((form) => (
                        <View
                          key={form.id}
                          style={{
                            padding: 14,
                            borderRadius: 18,
                            backgroundColor: theme.surfaceRaised,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <View style={{ flex: 1, paddingRight: 10 }}>
                            <View
                              style={{
                                alignSelf: 'flex-start',
                                paddingHorizontal: 8,
                                paddingVertical: 2,
                                borderRadius: 8,
                                backgroundColor: theme.surfaceWell,
                                marginBottom: 4,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_600SemiBold',
                                  fontSize: 11,
                                  color: theme.accentPrimary,
                                }}>
                                {form.roleEn}
                              </Text>
                            </View>
                            <Text
                              style={{
                                fontFamily: 'Lexend_400Regular',
                                fontSize: 13,
                                color: theme.textSecondary,
                              }}>
                              {`"${form.masculineEn || form.roleEn}"`}
                            </Text>
                          </View>

                          {revealConjugations ? (
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                              <Text
                                style={{
                                  fontFamily: 'NotoSansArabic_600SemiBold',
                                  fontSize: 22,
                                  color: theme.textPrimary,
                                }}>
                                {form.masculineAr}
                              </Text>
                              <Pressable
                                onPress={() => playArabicAudio(form.masculineAr)}
                                style={{
                                  width: 34,
                                  height: 34,
                                  borderRadius: 17,
                                  backgroundColor: theme.surfaceWell,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Ionicons
                                  name="volume-high"
                                  size={16}
                                  color={theme.accentPrimary}
                                />
                              </Pressable>
                            </View>
                          ) : (
                            <Pressable
                              onPress={() => playArabicAudio(form.masculineAr)}
                              style={{
                                paddingHorizontal: 12,
                                paddingVertical: 6,
                                borderRadius: 10,
                                backgroundColor: theme.surfaceWell,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_500Medium',
                                  fontSize: 12,
                                  color: theme.textMuted,
                                }}>
                                Tap for sound
                              </Text>
                            </Pressable>
                          )}
                        </View>
                      ))}
                    </View>
                  </View>

                  {/* 56px Action Button */}
                  <Pressable
                    onPress={() => {
                      playTapSound();
                      if (activeVerbPreviewIndex < payload.verbs.length - 1) {
                        const nextIdx = activeVerbPreviewIndex + 1;
                        setActiveVerbPreviewIndex(nextIdx);
                        playArabicAudio(payload.verbs[nextIdx].rootAr);
                      } else {
                        handleRegisterSuccess();
                        handleNextStep();
                      }
                    }}
                    style={({ pressed }) => ({
                      width: '100%',
                      height: 56,
                      borderRadius: 9999,
                      backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                      alignItems: 'center',
                      justifyContent: 'center',
                    })}>
                    <Text
                      style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: '#FFFFFF' }}>
                      {activeVerbPreviewIndex < payload.verbs.length - 1
                        ? `Next Verb (${payload.verbs[activeVerbPreviewIndex + 1].rootAr})`
                        : 'Continue'}
                    </Text>
                  </Pressable>
                </View>
              );
            })()}

          {/* STEP 17: MASDAR FACTORY (Vol 2) */}
          {currentStep?.type === 'masdar_factory' &&
            currentStep.masdarPayload &&
            (() => {
              const payload = currentStep.masdarPayload;
              if (!payload || payload.items.length === 0) return null;
              const currentItem = payload.items[activeMasdarIndex] || payload.items[0];
              const isSolved = Boolean(completedMasdarItems[currentItem.id]);
              const options =
                currentItem.presentOptionsAr && currentItem.presentOptionsAr.length > 0
                  ? currentItem.presentOptionsAr
                  : [currentItem.presentAr];

              const handlePresentChoice = (choice: string) => {
                if (isSolved) return;
                playArabicAudio(choice);

                if (choice === currentItem.presentAr) {
                  playSuccessChime();
                  setCompletedMasdarItems((prev) => ({
                    ...prev,
                    [currentItem.id]: choice,
                  }));
                } else {
                  playErrorCue();
                  setWrongMasdarOption(choice);
                  setTimeout(() => {
                    setWrongMasdarOption(null);
                  }, 500);
                }
              };

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Navigation Counter Bar */}
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 12,
                      paddingHorizontal: 4,
                    }}>
                    {activeMasdarIndex > 0 ? (
                      <Pressable
                        onPress={() => {
                          playTapSound();
                          const prevIdx = activeMasdarIndex - 1;
                          setActiveMasdarIndex(prevIdx);
                          playArabicAudio(payload.items[prevIdx].masdarAr);
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <Ionicons name="chevron-back" size={16} color={theme.textMuted} />
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 12,
                            color: theme.textMuted,
                          }}>
                          Previous
                        </Text>
                      </Pressable>
                    ) : (
                      <View />
                    )}
                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 12,
                        color: theme.textMuted,
                      }}>
                      {activeMasdarIndex + 1} / {payload.items.length}
                    </Text>
                  </View>

                  {/* 1. Masdar Hero Card */}
                  <View
                    style={{
                      width: '100%',
                      padding: 24,
                      borderRadius: 28,
                      backgroundColor: theme.surfaceWell,
                      alignItems: 'center',
                      marginBottom: 16,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 8,
                      }}>
                      <Text style={{ fontSize: 28 }}>{currentItem.emoji}</Text>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 38,
                          lineHeight: 64,
                          color: theme.textPrimary,
                        }}>
                        {currentItem.masdarAr}
                      </Text>
                      <Pressable
                        onPress={() =>
                          playArabicAudio(currentItem.audioKey || currentItem.masdarAr)
                        }
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          backgroundColor: theme.surfaceRaised,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                      </Pressable>
                    </View>

                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 18,
                        color: theme.textPrimary,
                        textAlign: 'center',
                        marginBottom: 4,
                      }}>
                      {currentItem.masdarMeaningEn}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lexend_500Medium',
                        fontSize: 12,
                        color: theme.textMuted,
                      }}>
                      Verbal Noun (Masdar)
                    </Text>
                  </View>

                  {/* 2. Verb Pattern Anchor: Past Form & Bab Rule */}
                  <View
                    style={{
                      width: '100%',
                      padding: 18,
                      borderRadius: 24,
                      backgroundColor: theme.surfaceWell,
                      marginBottom: 16,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 12,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 4,
                          borderRadius: 10,
                          backgroundColor: theme.accentPrimarySubtle,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 11,
                            color: theme.accentPrimaryText,
                          }}>
                          {currentItem.baabPatternEn}
                        </Text>
                      </View>
                      {Boolean(currentItem.vowelShiftEn) && (
                        <View
                          style={{
                            paddingHorizontal: 10,
                            paddingVertical: 4,
                            borderRadius: 10,
                            backgroundColor: theme.surfaceRaised,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 11,
                              color: theme.textSecondary,
                            }}>
                            {currentItem.vowelShiftEn}
                          </Text>
                        </View>
                      )}
                    </View>

                    {/* Past Tense Row */}
                    <View
                      style={{
                        padding: 14,
                        borderRadius: 18,
                        backgroundColor: theme.surfaceRaised,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 10,
                            color: theme.textMuted,
                            textTransform: 'uppercase',
                          }}>
                          Past Tense · المَاضِي
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 13,
                            color: theme.textSecondary,
                            marginTop: 2,
                          }}>
                          {currentItem.pastMeaningEn}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 24,
                            color: theme.textPrimary,
                          }}>
                          {currentItem.pastAr}
                        </Text>
                        <Pressable
                          onPress={() => playArabicAudio(currentItem.pastAr)}
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            backgroundColor: theme.surfaceWell,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Ionicons name="volume-high" size={15} color={theme.accentPrimary} />
                        </Pressable>
                      </View>
                    </View>
                  </View>

                  {/* 3. Interactive Pattern Discovery: Choice or Solved Matrix */}
                  {!isSolved ? (
                    <View
                      style={{
                        width: '100%',
                        padding: 20,
                        borderRadius: 24,
                        backgroundColor: theme.surfaceWell,
                        alignItems: 'center',
                        marginBottom: 20,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 11,
                          color: theme.accentPrimary,
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          marginBottom: 4,
                        }}>
                        Apply Pattern Rule
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 14,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 16,
                        }}>
                        Which form follows this pattern in the present tense?
                      </Text>

                      {/* Options Chips */}
                      <View style={{ width: '100%', gap: 10 }}>
                        {options.map((opt) => {
                          const isWrong = wrongMasdarOption === opt;
                          return (
                            <Pressable
                              key={opt}
                              onPress={() => handlePresentChoice(opt)}
                              style={{
                                width: '100%',
                                minHeight: 56,
                                borderRadius: 18,
                                backgroundColor: isWrong ? '#FEE2E2' : theme.surfaceRaised,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 16,
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'NotoSansArabic_600SemiBold',
                                  fontSize: 24,
                                  color: isWrong ? '#DC2626' : theme.textPrimary,
                                }}>
                                {opt}
                              </Text>
                            </Pressable>
                          );
                        })}
                      </View>
                    </View>
                  ) : (
                    /* Solved State: Full Derivation Revealed */
                    <View style={{ width: '100%', gap: 12, marginBottom: 20 }}>
                      {/* Success confirmation */}
                      <View
                        style={{
                          width: '100%',
                          padding: 14,
                          borderRadius: 18,
                          backgroundColor: '#D1FAE5',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 6,
                            marginBottom: 2,
                          }}>
                          <Ionicons name="sparkles" size={14} color="#059669" />
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 12,
                              color: '#065F46',
                            }}>
                            Pattern Applied!
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 12,
                            color: '#047857',
                            textAlign: 'center',
                          }}>
                          {currentItem.patternRuleEn || currentItem.baabPatternEn}
                        </Text>
                      </View>

                      {/* Present Tense Card */}
                      <View
                        style={{
                          padding: 14,
                          borderRadius: 18,
                          backgroundColor: theme.surfaceWell,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 10,
                              color: '#059669',
                              textTransform: 'uppercase',
                            }}>
                            Present Tense · المُضَارِع
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lexend_500Medium',
                              fontSize: 13,
                              color: theme.textSecondary,
                              marginTop: 2,
                            }}>
                            {currentItem.presentMeaningEn}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 24,
                              color: theme.textPrimary,
                            }}>
                            {currentItem.presentAr}
                          </Text>
                          <Pressable
                            onPress={() => playArabicAudio(currentItem.presentAr)}
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 16,
                              backgroundColor: theme.surfaceRaised,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Ionicons name="volume-high" size={15} color={theme.accentPrimary} />
                          </Pressable>
                        </View>
                      </View>

                      {/* Command & Prohibition */}
                      <View style={{ flexDirection: 'row', gap: 10 }}>
                        {/* Command */}
                        <View
                          style={{
                            flex: 1,
                            padding: 12,
                            borderRadius: 16,
                            backgroundColor: theme.surfaceWell,
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 10,
                              color: theme.textMuted,
                              textTransform: 'uppercase',
                            }}>
                            Command · الأَمْر
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginTop: 6,
                            }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 18,
                                color: theme.textPrimary,
                              }}>
                              {currentItem.imperativeAr}
                            </Text>
                            <Pressable
                              onPress={() => playArabicAudio(currentItem.imperativeAr)}
                              style={{
                                width: 28,
                                height: 28,
                                borderRadius: 14,
                                backgroundColor: theme.surfaceRaised,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Ionicons name="volume-high" size={13} color={theme.accentPrimary} />
                            </Pressable>
                          </View>
                          <Text
                            style={{
                              fontFamily: 'Lexend_400Regular',
                              fontSize: 11,
                              color: theme.textMuted,
                              marginTop: 4,
                            }}>
                            {currentItem.imperativeMeaningEn}
                          </Text>
                        </View>

                        {/* Prohibition */}
                        <View
                          style={{
                            flex: 1,
                            padding: 12,
                            borderRadius: 16,
                            backgroundColor: theme.surfaceWell,
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 10,
                              color: theme.textMuted,
                              textTransform: 'uppercase',
                            }}>
                            Forbidding · النَّهْي
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginTop: 6,
                            }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 18,
                                color: theme.textPrimary,
                              }}>
                              {currentItem.prohibitionAr}
                            </Text>
                            <Pressable
                              onPress={() => playArabicAudio(currentItem.prohibitionAr)}
                              style={{
                                width: 28,
                                height: 28,
                                borderRadius: 14,
                                backgroundColor: theme.surfaceRaised,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Ionicons name="volume-high" size={13} color={theme.accentPrimary} />
                            </Pressable>
                          </View>
                          <Text
                            style={{
                              fontFamily: 'Lexend_400Regular',
                              fontSize: 11,
                              color: theme.textMuted,
                              marginTop: 4,
                            }}>
                            {currentItem.prohibitionMeaningEn}
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}

                  {/* 56px Action Button */}
                  {!isSolved ? (
                    <View
                      style={{
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor: theme.surfaceWell,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 14,
                          color: theme.textMuted,
                        }}>
                        Select the correct present form above
                      </Text>
                    </View>
                  ) : (
                    <Pressable
                      onPress={() => {
                        playTapSound();
                        if (activeMasdarIndex < payload.items.length - 1) {
                          const nextIdx = activeMasdarIndex + 1;
                          setActiveMasdarIndex(nextIdx);
                          playArabicAudio(payload.items[nextIdx].masdarAr);
                        } else {
                          handleRegisterSuccess();
                          handleNextStep();
                        }
                      }}
                      style={({ pressed }) => ({
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                        alignItems: 'center',
                        justifyContent: 'center',
                      })}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        {activeMasdarIndex < payload.items.length - 1 ? 'Next Verb' : 'Continue'}
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })()}

          {/* STEP 18: VERB CONJUGATOR (Vol 2) */}
          {currentStep?.type === 'verb_conjugator' &&
            currentStep.conjugatorPayload &&
            (() => {
              const payload = currentStep.conjugatorPayload;
              if (!payload || payload.verbs.length === 0) return null;
              const currentVerb = payload.verbs[activeConjugatorVerbIndex] || payload.verbs[0];

              // In 'drill' mode:
              if (payload.mode === 'drill' && payload.optionsAr && payload.correctAnswerAr) {
                const handleDrillChoice = (choice: string) => {
                  if (selectedConjugatorDrillChoice !== null) return;
                  playArabicAudio(choice);
                  setSelectedConjugatorDrillChoice(choice);
                  if (choice === payload.correctAnswerAr) {
                    playSuccessChime();
                    setStepStatus('correct');
                    handleRegisterSuccess();
                  } else {
                    playErrorCue();
                    setStepStatus('incorrect');
                    handleRegisterMistake();
                  }
                };

                return (
                  <View style={{ width: '100%', alignItems: 'center' }}>
                    {/* Prompt Card */}
                    <View
                      style={{
                        width: '100%',
                        padding: 24,
                        borderRadius: 28,
                        backgroundColor: theme.surfaceWell,
                        alignItems: 'center',
                        marginBottom: 20,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          marginBottom: 8,
                        }}>
                        <Text style={{ fontSize: 24 }}>{currentVerb.emoji}</Text>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 28,
                            color: theme.textPrimary,
                          }}>
                          {currentVerb.rootAr}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Lexend_400Regular',
                            fontSize: 12,
                            color: theme.textMuted,
                          }}>
                          ({currentVerb.meaningEn})
                        </Text>
                      </View>

                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 16,
                          color: theme.textPrimary,
                          textAlign: 'center',
                          marginBottom: 4,
                        }}>
                        {payload.drillQuestionEn}
                      </Text>

                      {Boolean(payload.drillQuestionAr) && (
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 22,
                            color: theme.accentPrimary,
                            textAlign: 'center',
                          }}>
                          {payload.drillQuestionAr}
                        </Text>
                      )}
                    </View>

                    {/* Drill Options */}
                    <View style={{ width: '100%', gap: 10, marginBottom: 20 }}>
                      {payload.optionsAr.map((opt) => {
                        const isSelected = selectedConjugatorDrillChoice === opt;
                        const isCorrect = opt === payload.correctAnswerAr;
                        let bgColor = theme.surfaceWell;
                        let textColor = theme.textPrimary;

                        if (selectedConjugatorDrillChoice !== null) {
                          if (isSelected && isCorrect) {
                            bgColor = '#D1FAE5';
                            textColor = '#065F46';
                          } else if (isSelected && !isCorrect) {
                            bgColor = '#FEE2E2';
                            textColor = '#DC2626';
                          } else if (isCorrect) {
                            bgColor = '#D1FAE5';
                            textColor = '#065F46';
                          }
                        }

                        return (
                          <Pressable
                            key={opt}
                            disabled={selectedConjugatorDrillChoice !== null}
                            onPress={() => handleDrillChoice(opt)}
                            style={{
                              width: '100%',
                              minHeight: 56,
                              borderRadius: 20,
                              backgroundColor: bgColor,
                              alignItems: 'center',
                              justifyContent: 'center',
                              paddingHorizontal: 20,
                            }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 24,
                                color: textColor,
                              }}>
                              {opt}
                            </Text>
                          </Pressable>
                        );
                      })}
                    </View>

                    {/* Continue Button when answered */}
                    {stepStatus !== 'idle' && (
                      <Pressable
                        onPress={() => handleNextStep()}
                        style={({ pressed }) => ({
                          width: '100%',
                          height: 56,
                          borderRadius: 9999,
                          backgroundColor:
                            stepStatus === 'correct'
                              ? pressed
                                ? '#047857'
                                : '#059669'
                              : pressed
                                ? '#B91C1C'
                                : '#DC2626',
                          alignItems: 'center',
                          justifyContent: 'center',
                        })}>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 16,
                            color: '#FFFFFF',
                          }}>
                          {stepStatus === 'correct' ? 'Continue' : 'Got it! Continue'}
                        </Text>
                      </Pressable>
                    )}
                  </View>
                );
              }

              // In 'explore' mode:
              const allTenses: {
                key: 'past' | 'present' | 'imperative' | 'prohibition';
                labelEn: string;
                labelAr: string;
              }[] = [
                { key: 'past', labelEn: 'Past', labelAr: 'المَاضِي' },
                { key: 'present', labelEn: 'Present', labelAr: 'المُضَارِع' },
                { key: 'imperative', labelEn: 'Command', labelAr: 'الأَمْر' },
                { key: 'prohibition', labelEn: 'Forbidding', labelAr: 'النَّهْي' },
              ];

              const tenses = payload.targetTense
                ? allTenses.filter((t) => t.key === payload.targetTense)
                : allTenses.filter((t) => {
                    if (t.key === 'imperative')
                      return currentVerb.forms.some((f) => Boolean(f.imperativeAr));
                    if (t.key === 'prohibition')
                      return currentVerb.forms.some((f) => Boolean(f.prohibitionAr));
                    if (t.key === 'present')
                      return currentVerb.forms.some((f) => Boolean(f.presentAr));
                    return true;
                  });

              const availableForms =
                selectedConjugatorTense === 'imperative'
                  ? currentVerb.forms.filter((f) => Boolean(f.imperativeAr))
                  : selectedConjugatorTense === 'prohibition'
                    ? currentVerb.forms.filter((f) => Boolean(f.prohibitionAr))
                    : currentVerb.forms;

              const getFormArabic = (
                form: VerbConjugatorForm,
                tense: 'past' | 'present' | 'imperative' | 'prohibition'
              ) => {
                if (tense === 'past') return form.pastAr;
                if (tense === 'present') return form.presentAr || form.pastAr;
                if (tense === 'prohibition')
                  return form.prohibitionAr || form.presentAr || form.pastAr;
                return form.imperativeAr || form.presentAr || form.pastAr;
              };

              const isModelVerb = activeConjugatorVerbIndex === 0;
              const rootMeaning = getRootVerbMeaning(currentVerb, selectedConjugatorTense);
              const rootArabic = getRootVerbArabic(currentVerb, selectedConjugatorTense);
              const verbKey = `${currentVerb.id || activeConjugatorVerbIndex}-${selectedConjugatorTense}`;
              const verbCompleted = completedConjugatorSlots[verbKey] || {};

              const practiceForms = availableForms.slice(1);
              const isAllSlotsCompleted =
                isModelVerb || practiceForms.every((f) => verbCompleted[f.subjectAr]);

              const handleConjugatorChipTap = (chip: {
                id: string;
                subjectAr: string;
                textAr: string;
              }) => {
                if (wrongConjugatorChipId !== null) return;
                playTapSound();

                const targetSubject =
                  selectedTargetConjugatorSubject ||
                  practiceForms.find((f) => !verbCompleted[f.subjectAr])?.subjectAr;

                if (!targetSubject) return;

                const targetForm = practiceForms.find((f) => f.subjectAr === targetSubject);
                if (!targetForm) return;

                const expectedAr = getFormArabic(targetForm, selectedConjugatorTense);

                if (chip.textAr === expectedAr) {
                  playArabicAudio(chip.textAr);
                  const updatedSlots = { ...verbCompleted, [targetSubject]: true };

                  setCompletedConjugatorSlots((prev) => ({
                    ...prev,
                    [verbKey]: updatedSlots,
                  }));

                  setAvailableConjugatorChips((prev) => prev.filter((c) => c.id !== chip.id));

                  const nextUnfilled = practiceForms.find((f) => !updatedSlots[f.subjectAr]);
                  if (nextUnfilled) {
                    setSelectedTargetConjugatorSubject(nextUnfilled.subjectAr);
                  } else {
                    setSelectedTargetConjugatorSubject(null);
                    playSuccessChime();
                  }
                } else {
                  playErrorCue();
                  setWrongConjugatorChipId(chip.id);
                  setTimeout(() => {
                    setWrongConjugatorChipId(null);
                  }, 500);
                }
              };

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Prev / Next Verb Nav Bar */}
                  {activeConjugatorVerbIndex > 0 && (
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 12,
                        paddingHorizontal: 4,
                      }}>
                      <Pressable
                        onPress={() => {
                          playTapSound();
                          const prevIdx = activeConjugatorVerbIndex - 1;
                          setActiveConjugatorVerbIndex(prevIdx);
                          const prevVerb = payload.verbs[prevIdx];
                          if (prevVerb) {
                            playArabicAudio(getRootVerbArabic(prevVerb, selectedConjugatorTense));
                          }
                        }}
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <Ionicons name="chevron-back" size={16} color={theme.textMuted} />
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 12,
                            color: theme.textMuted,
                          }}>
                          Previous Verb
                        </Text>
                      </Pressable>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 12,
                          color: theme.textMuted,
                        }}>
                        {activeConjugatorVerbIndex + 1} / {payload.verbs.length}
                      </Text>
                    </View>
                  )}

                  {/* Hero Section: Centered Tense Anchor Pill, Concrete Meaning & Root Word */}
                  <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                    <View
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 5,
                        borderRadius: 14,
                        backgroundColor: theme.accentPrimarySubtle,
                        marginBottom: 8,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 11,
                          color: theme.accentPrimaryText,
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                        }}>
                        {selectedConjugatorTense === 'past'
                          ? 'Past Tense · المَاضِي'
                          : selectedConjugatorTense === 'present'
                            ? 'Present Tense · المُضَارِع'
                            : selectedConjugatorTense === 'prohibition'
                              ? 'Forbidding · النَّهْي'
                              : 'Command · الأَمْر'}
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 24,
                        color: theme.textPrimary,
                        textAlign: 'center',
                        marginBottom: 4,
                      }}>
                      {rootMeaning.en}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 38,
                          lineHeight: 64,
                          color: theme.textPrimary,
                        }}>
                        {rootArabic}
                      </Text>
                      <Pressable
                        onPress={() => playArabicAudio(rootArabic)}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          backgroundColor: theme.surfaceWell,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                      </Pressable>
                    </View>

                    {/* Multi-tense selector */}
                    {tenses.length > 1 && (
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: theme.surfaceWell,
                          borderRadius: 16,
                          padding: 3,
                          marginTop: 12,
                        }}>
                        {tenses.map((t) => {
                          const isSel = selectedConjugatorTense === t.key;
                          return (
                            <Pressable
                              key={t.key}
                              onPress={() => {
                                playTapSound();
                                setSelectedConjugatorTense(t.key);
                              }}
                              style={{
                                paddingHorizontal: 12,
                                paddingVertical: 6,
                                borderRadius: 13,
                                backgroundColor: isSel ? theme.surfaceRaised : 'transparent',
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_600SemiBold',
                                  fontSize: 12,
                                  color: isSel ? theme.textPrimary : theme.textMuted,
                                }}>
                                {t.labelEn}
                              </Text>
                            </Pressable>
                          );
                        })}
                      </View>
                    )}
                  </View>

                  {/* Paradigm List: Vertical Stack of All Forms */}
                  <View style={{ width: '100%', gap: 10, marginBottom: 16 }}>
                    {availableForms.map((form, index) => {
                      const formAr = getFormArabic(form, selectedConjugatorTense);
                      const meaning = getConjugationMeaning(
                        form,
                        selectedConjugatorTense,
                        currentVerb
                      );
                      const isSlotFilled =
                        isModelVerb || index === 0 || verbCompleted[form.subjectAr] === true;
                      const isTargeted =
                        !isSlotFilled && selectedTargetConjugatorSubject === form.subjectAr;

                      return (
                        <Pressable
                          key={form.subjectAr}
                          onPress={() => {
                            if (!isSlotFilled) {
                              playTapSound();
                              setSelectedTargetConjugatorSubject(form.subjectAr);
                            }
                          }}
                          style={{
                            width: '100%',
                            paddingHorizontal: 16,
                            paddingVertical: 12,
                            borderRadius: 20,
                            backgroundColor:
                              !isSlotFilled && isTargeted
                                ? theme.accentPrimarySubtle
                                : theme.surfaceWell,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          {/* Left: Pronoun Badge & Concrete Meaning */}
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 12,
                              flex: 1,
                            }}>
                            <View
                              style={{
                                width: 44,
                                height: 34,
                                borderRadius: 12,
                                backgroundColor: theme.surfaceRaised,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'NotoSansArabic_600SemiBold',
                                  fontSize: 15,
                                  color: theme.textPrimary,
                                }}>
                                {form.subjectAr}
                              </Text>
                            </View>
                            <Text
                              style={{
                                fontFamily: 'Lexend_600SemiBold',
                                fontSize: 14,
                                color: theme.textPrimary,
                                flex: 1,
                              }}>
                              {meaning.en}
                            </Text>
                          </View>

                          {/* Right: Inflected Form or Target Slot */}
                          {isSlotFilled ? (
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                              <Text
                                style={{
                                  fontFamily: 'NotoSansArabic_600SemiBold',
                                  fontSize: 22,
                                  color: theme.textPrimary,
                                }}>
                                {formAr}
                              </Text>
                              <Pressable
                                onPress={() => playArabicAudio(formAr)}
                                style={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: 16,
                                  backgroundColor: theme.surfaceRaised,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Ionicons
                                  name="volume-high"
                                  size={15}
                                  color={theme.accentPrimary}
                                />
                              </Pressable>
                            </View>
                          ) : (
                            <View
                              style={{
                                paddingHorizontal: 12,
                                paddingVertical: 8,
                                borderRadius: 12,
                                borderWidth: 1.5,
                                borderStyle: 'dashed',
                                borderColor: isTargeted ? theme.accentPrimary : theme.borderSubtle,
                                backgroundColor: isTargeted ? theme.surfaceRaised : 'transparent',
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Lexend_500Medium',
                                  fontSize: 11,
                                  color: isTargeted ? theme.accentPrimaryText : theme.textMuted,
                                }}>
                                {isTargeted ? 'Select chip' : 'Tap to fill'}
                              </Text>
                            </View>
                          )}
                        </Pressable>
                      );
                    })}
                  </View>

                  {/* Word Chip Bank (Verbs 1..N Practice) */}
                  {!isModelVerb && availableConjugatorChips.length > 0 && (
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          paddingHorizontal: 4,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 11,
                            color: theme.textMuted,
                            textTransform: 'uppercase',
                          }}>
                          Select matching form:
                        </Text>
                        {Boolean(selectedTargetConjugatorSubject) && (
                          <View
                            style={{
                              paddingHorizontal: 8,
                              paddingVertical: 2,
                              borderRadius: 8,
                              backgroundColor: theme.accentPrimarySubtle,
                            }}>
                            <Text
                              style={{
                                fontFamily: 'Lexend_600SemiBold',
                                fontSize: 11,
                                color: theme.accentPrimaryText,
                              }}>
                              Target: {selectedTargetConjugatorSubject}
                            </Text>
                          </View>
                        )}
                      </View>

                      <View
                        style={{
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          gap: 8,
                        }}>
                        {availableConjugatorChips.map((chip) => {
                          const isWrong = wrongConjugatorChipId === chip.id;
                          return (
                            <Pressable
                              key={chip.id}
                              onPress={() => handleConjugatorChipTap(chip)}
                              style={{
                                minHeight: 48,
                                paddingHorizontal: 16,
                                borderRadius: 16,
                                backgroundColor: isWrong ? '#FEE2E2' : theme.surfaceWell,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'NotoSansArabic_600SemiBold',
                                  fontSize: 22,
                                  color: isWrong ? '#DC2626' : theme.textPrimary,
                                }}>
                                {chip.textAr}
                              </Text>
                            </Pressable>
                          );
                        })}
                      </View>
                    </View>
                  )}

                  {/* Single 56px Action Button */}
                  {isModelVerb ? (
                    payload.verbs.length > 1 ? (
                      <Pressable
                        onPress={() => {
                          playTapSound();
                          const nextIdx = activeConjugatorVerbIndex + 1;
                          setActiveConjugatorVerbIndex(nextIdx);
                          const nextVerb = payload.verbs[nextIdx];
                          if (nextVerb) {
                            playArabicAudio(getRootVerbArabic(nextVerb, selectedConjugatorTense));
                          }
                        }}
                        style={({ pressed }) => ({
                          width: '100%',
                          height: 56,
                          borderRadius: 9999,
                          backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                          alignItems: 'center',
                          justifyContent: 'center',
                        })}>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 16,
                            color: '#FFFFFF',
                          }}>
                          Start Practice (
                          {getRootVerbArabic(payload.verbs[1], selectedConjugatorTense)})
                        </Text>
                      </Pressable>
                    ) : (
                      <Pressable
                        onPress={() => {
                          playTapSound();
                          handleRegisterSuccess();
                          handleNextStep();
                        }}
                        style={({ pressed }) => ({
                          width: '100%',
                          height: 56,
                          borderRadius: 9999,
                          backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                          alignItems: 'center',
                          justifyContent: 'center',
                        })}>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 16,
                            color: '#FFFFFF',
                          }}>
                          Continue
                        </Text>
                      </Pressable>
                    )
                  ) : !isAllSlotsCompleted ? (
                    <View
                      style={{
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor: theme.surfaceWell,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 14,
                          color: theme.textMuted,
                        }}>
                        Complete the conjugations above
                      </Text>
                    </View>
                  ) : activeConjugatorVerbIndex < payload.verbs.length - 1 ? (
                    <Pressable
                      onPress={() => {
                        playTapSound();
                        const nextIdx = activeConjugatorVerbIndex + 1;
                        setActiveConjugatorVerbIndex(nextIdx);
                        const nextVerb = payload.verbs[nextIdx];
                        if (nextVerb) {
                          playArabicAudio(getRootVerbArabic(nextVerb, selectedConjugatorTense));
                        }
                      }}
                      style={({ pressed }) => ({
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                        alignItems: 'center',
                        justifyContent: 'center',
                      })}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        Next Verb
                      </Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => {
                        playTapSound();
                        handleRegisterSuccess();
                        handleNextStep();
                      }}
                      style={({ pressed }) => ({
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                        alignItems: 'center',
                        justifyContent: 'center',
                      })}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        Continue
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })()}

          {/* STEP 19: WORD CONSTRUCTION (Vol 2) */}
          {currentStep?.type === 'word_construction' &&
            currentStep.wordConstructionPayload &&
            (() => {
              const payload = currentStep.wordConstructionPayload;
              if (!payload || !payload.items || payload.items.length === 0) return null;
              const currentItem = payload.items[activeWordConstructionIndex] || payload.items[0];
              const assembledWord = constructedLetterChips.map((c) => c.letter).join('');
              const hasPlacedChips = constructedLetterChips.length > 0;

              const handleAddLetterChip = (chip: { id: string; letter: string }) => {
                if (wordConstructionStatus === 'success') return;
                playTapSound();
                setAvailableLetterChips((prev) => prev.filter((c) => c.id !== chip.id));
                setConstructedLetterChips((prev) => [...prev, chip]);
                if (wordConstructionStatus === 'error') {
                  setWordConstructionStatus('idle');
                }
              };

              const handleRemoveLetterChip = (chipId: string) => {
                if (wordConstructionStatus === 'success') return;
                playTapSound();
                const chipToRemove = constructedLetterChips.find((c) => c.id === chipId);
                if (!chipToRemove) return;
                setConstructedLetterChips((prev) => prev.filter((c) => c.id !== chipId));
                setAvailableLetterChips((prev) => [...prev, chipToRemove]);
                if (wordConstructionStatus === 'error') {
                  setWordConstructionStatus('idle');
                }
              };

              const handleCheckConstruction = () => {
                if (constructedLetterChips.length === 0 || wordConstructionStatus === 'success')
                  return;
                const cleanAssembled = assembledWord.trim();
                const cleanTarget = currentItem.targetWordAr.trim();
                const isCorrect = cleanAssembled === cleanTarget;

                if (isCorrect) {
                  setWordConstructionStatus('success');
                  playSuccessChime();
                  playArabicAudio(currentItem.targetWordAr);
                  if (activeWordConstructionIndex === payload.items.length - 1) {
                    handleRegisterSuccess();
                  }
                } else {
                  setWordConstructionStatus('error');
                  playErrorCue();
                  handleRegisterMistake();
                }
              };

              const handleNextWordOrStep = () => {
                if (activeWordConstructionIndex < payload.items.length - 1) {
                  const nextIdx = activeWordConstructionIndex + 1;
                  setActiveWordConstructionIndex(nextIdx);
                  setConstructedLetterChips([]);
                  setWordConstructionStatus('idle');
                  const nextItem = payload.items[nextIdx];
                  const chipsWithId = nextItem.chips.map((ch, idx) => ({
                    id: `${ch}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
                    letter: ch,
                  }));
                  for (let i = chipsWithId.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [chipsWithId[i], chipsWithId[j]] = [chipsWithId[j], chipsWithId[i]];
                  }
                  setAvailableLetterChips(chipsWithId);
                  playTapSound();
                } else {
                  handleNextStep();
                }
              };

              return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                  {/* Multi-item counter */}
                  {payload.items.length > 1 && (
                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 12,
                        color: theme.textMuted,
                        marginBottom: 12,
                      }}>
                      {activeWordConstructionIndex + 1} / {payload.items.length}
                    </Text>
                  )}

                  {/* Target Prompt Card */}
                  <View
                    style={{
                      width: '100%',
                      padding: 24,
                      borderRadius: 28,
                      backgroundColor: theme.surfaceWell,
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 18,
                        color: theme.textPrimary,
                        textAlign: 'center',
                        marginBottom: 4,
                      }}>
                      {currentItem.promptEn || currentItem.targetMeaningEn}
                    </Text>
                    {Boolean(currentItem.promptEn) && Boolean(currentItem.targetMeaningEn) && (
                      <Text
                        style={{
                          fontFamily: 'Lexend_500Medium',
                          fontSize: 13,
                          color: theme.textMuted,
                          textAlign: 'center',
                          marginTop: 2,
                        }}>
                        {`"${currentItem.targetMeaningEn}"`}
                      </Text>
                    )}
                  </View>

                  {/* Construction Stage: Drop Targets / Assembled Letters */}
                  <View
                    style={{
                      width: '100%',
                      minHeight: 88,
                      padding: 16,
                      borderRadius: 24,
                      borderWidth: 2,
                      borderStyle: hasPlacedChips ? 'solid' : 'dashed',
                      borderColor:
                        wordConstructionStatus === 'success'
                          ? '#10B981'
                          : wordConstructionStatus === 'error'
                            ? '#EF4444'
                            : theme.borderSubtle,
                      backgroundColor:
                        wordConstructionStatus === 'success'
                          ? '#D1FAE5'
                          : wordConstructionStatus === 'error'
                            ? '#FEE2E2'
                            : theme.surfaceWell,
                      flexDirection: 'row-reverse',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      marginBottom: 20,
                    }}>
                    {constructedLetterChips.length === 0 ? (
                      <Text
                        style={{
                          fontFamily: 'Lexend_500Medium',
                          fontSize: 13,
                          color: theme.textMuted,
                        }}>
                        Tap letters below to construct the word
                      </Text>
                    ) : (
                      constructedLetterChips.map((chip) => (
                        <Pressable
                          key={chip.id}
                          onPress={() => handleRemoveLetterChip(chip.id)}
                          style={{
                            minWidth: 44,
                            height: 48,
                            paddingHorizontal: 12,
                            borderRadius: 14,
                            backgroundColor: theme.surfaceRaised,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 24,
                              color: theme.textPrimary,
                            }}>
                            {chip.letter}
                          </Text>
                        </Pressable>
                      ))
                    )}
                  </View>

                  {/* Available Letter Chips Bank */}
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row-reverse',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gap: 10,
                      marginBottom: 24,
                    }}>
                    {availableLetterChips.map((chip) => (
                      <Pressable
                        key={chip.id}
                        onPress={() => handleAddLetterChip(chip)}
                        style={{
                          minWidth: 48,
                          height: 52,
                          paddingHorizontal: 14,
                          borderRadius: 16,
                          backgroundColor: theme.surfaceWell,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 24,
                            color: theme.textPrimary,
                          }}>
                          {chip.letter}
                        </Text>
                      </Pressable>
                    ))}
                  </View>

                  {/* 56px Action Button */}
                  {wordConstructionStatus === 'idle' || wordConstructionStatus === 'error' ? (
                    <Pressable
                      disabled={constructedLetterChips.length === 0}
                      onPress={handleCheckConstruction}
                      style={({ pressed }) => ({
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor:
                          constructedLetterChips.length === 0
                            ? theme.surfaceWell
                            : pressed
                              ? theme.accentPrimaryHover
                              : theme.accentPrimary,
                        alignItems: 'center',
                        justifyContent: 'center',
                      })}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 16,
                          color: constructedLetterChips.length === 0 ? theme.textMuted : '#FFFFFF',
                        }}>
                        Check Word
                      </Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={handleNextWordOrStep}
                      style={({ pressed }) => ({
                        width: '100%',
                        height: 56,
                        borderRadius: 9999,
                        backgroundColor: pressed ? '#047857' : '#059669',
                        alignItems: 'center',
                        justifyContent: 'center',
                      })}>
                      <Text
                        style={{
                          fontFamily: 'Lexend_600SemiBold',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        {activeWordConstructionIndex < payload.items.length - 1
                          ? 'Next Word'
                          : 'Continue'}
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })()}
        </View>
      </ScrollView>

      {/* Exit Confirmation Modal */}
      <Modal
        visible={showExitModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowExitModal(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.6)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}>
          <View
            style={{
              width: '100%',
              maxWidth: 360,
              backgroundColor: theme.surfaceOverlay,
              borderRadius: 28,
              padding: 28,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 20,
                color: theme.textPrimary,
                marginBottom: 8,
              }}>
              Leave lesson?
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 14,
                color: theme.textSecondary,
                textAlign: 'center',
                marginBottom: 24,
              }}>
              Your current progress is saved and you can return anytime.
            </Text>

            <View style={{ width: '100%', gap: 10 }}>
              <Pressable
                onPress={() => setShowExitModal(false)}
                style={({ pressed }) => ({
                  width: '100%',
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: pressed ? theme.accentPrimaryHover : theme.accentPrimary,
                  alignItems: 'center',
                  justifyContent: 'center',
                })}>
                <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 15, color: '#FFFFFF' }}>
                  Keep Learning
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setShowExitModal(false);
                  onExit();
                }}
                style={({ pressed }) => ({
                  width: '100%',
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: pressed ? theme.surfaceRaised : theme.surfaceWell,
                  alignItems: 'center',
                  justifyContent: 'center',
                })}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 15,
                    color: theme.textMuted,
                  }}>
                  Save & Exit
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

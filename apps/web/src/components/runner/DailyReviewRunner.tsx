import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  XCircle,
  BookOpen,
  Trophy,
  Brain,
  Compass,
  HelpCircle,
  Layers,
} from 'lucide-react';
import { useRetentionStore, type ItemRetention } from '@/state/retentionStore';
import { useLanguage } from '@/hooks/useLanguage';
import { playSuccessChime, playErrorCue, playTapSound } from '@/lib/sound';
import { playArabicAudio } from '@/lib/arabicAudio';

interface DailyReviewRunnerProps {
  volumeId?: number;
  onExit?: () => void;
  onNavigateToMushaf?: () => void;
}

export type ReviewCardMode = 'flashcard' | 'mcq';

export function DailyReviewRunner({
  volumeId,
  onExit,
  onNavigateToMushaf,
}: DailyReviewRunnerProps) {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const getDueItems = useRetentionStore((state) => state.getDueItems);
  const getPracticeItems = useRetentionStore((state) => state.getPracticeItems);
  const getLearnedWords = useRetentionStore((state) => state.getLearnedWords);
  const recordReviewResult = useRetentionStore((state) => state.recordReviewResult);

  // Session items & queue state
  const [sessionQueue, setSessionQueue] = useState<ItemRetention[]>([]);
  const [errorQueue, setErrorQueue] = useState<ItemRetention[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReviewingErrors, setIsReviewingErrors] = useState(false);
  const [isSessionComplete, setIsSessionComplete] = useState(false);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [cardMode, setCardMode] = useState<ReviewCardMode>('flashcard');

  // Card interaction state
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [mcqStatus, setMcqStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  // Session statistics
  const [stats, setStats] = useState({
    totalInitial: 0,
    reviewedCount: 0,
    firstTryCorrect: 0,
    recycledResolved: 0,
    promotedCount: 0,
  });

  // Initialize review session items
  const initializeSession = useCallback(
    (forcePractice = false) => {
      const due = getDueItems(volumeId, 15);
      const allLearned = getLearnedWords(volumeId);

      if (due.length > 0 && !forcePractice) {
        setSessionQueue(due);
        setIsPracticeMode(false);
        setStats({
          totalInitial: due.length,
          reviewedCount: 0,
          firstTryCorrect: 0,
          recycledResolved: 0,
          promotedCount: 0,
        });
      } else if (allLearned.length > 0) {
        const practice = getPracticeItems(volumeId, 15);
        setSessionQueue(practice);
        setIsPracticeMode(true);
        setStats({
          totalInitial: practice.length,
          reviewedCount: 0,
          firstTryCorrect: 0,
          recycledResolved: 0,
          promotedCount: 0,
        });
      } else {
        setSessionQueue([]);
      }

      setErrorQueue([]);
      setCurrentIndex(0);
      setIsReviewingErrors(false);
      setIsSessionComplete(false);
      setIsFlipped(false);
      setSelectedOption(null);
      setMcqStatus('idle');
    },
    [getDueItems, getLearnedWords, getPracticeItems, volumeId]
  );

  useEffect(() => {
    initializeSession();
  }, [initializeSession]);

  const activeList = isReviewingErrors ? errorQueue : sessionQueue;
  const currentItem = activeList[currentIndex] as ItemRetention | undefined;

  // Generate Multiple Choice Options for recognition drill
  const mcqOptions = useMemo(() => {
    if (!currentItem) return [];
    const correctAnswer = isBn ? currentItem.meaningBn : currentItem.meaningEn;
    const allLearned = getLearnedWords(volumeId);

    // Pick 3 distractors from other learned words
    const distractors = allLearned
      .filter((w) => w.itemId !== currentItem.itemId)
      .map((w) => (isBn ? w.meaningBn : w.meaningEn))
      .filter((text) => Boolean(text) && text !== correctAnswer);

    // Fallback curated distractors if pool is small
    const fallbackPool = isBn
      ? ['একটি সুন্দর বই', 'নতুন কলম', 'বড় ঘর', 'ছোট মসজিদ', 'ঠান্ডা পানি', 'গরম দুধ', 'উপকারী জ্ঞান']
      : ['A beautiful book', 'A new pen', 'A big room', 'A small masjid', 'Cold water', 'Hot milk', 'Beneficial knowledge'];

    const pool = [...new Set([...distractors, ...fallbackPool])].filter((t) => t !== correctAnswer);

    // Fisher-Yates shuffle distractors and pick 3
    const shuffledDistractors = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
    const combined = [correctAnswer, ...shuffledDistractors].sort(() => 0.5 - Math.random());
    return combined;
  }, [currentItem, getLearnedWords, isBn, volumeId]);

  // Audio synthesis trigger
  const handlePlayAudio = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (!currentItem) return;
      playTapSound();
      playArabicAudio(currentItem.arabic);
    },
    [currentItem]
  );

  // Play audio automatically when card mounts
  useEffect(() => {
    if (currentItem?.arabic) {
      playArabicAudio(currentItem.arabic);
    }
    setIsFlipped(false);
    setSelectedOption(null);
    setMcqStatus('idle');
  }, [currentItem?.itemId]);

  // Handler for successful recall
  const handleSuccess = () => {
    if (!currentItem) return;
    playSuccessChime();

    recordReviewResult(currentItem.itemId, true);

    setStats((prev) => ({
      ...prev,
      reviewedCount: prev.reviewedCount + 1,
      firstTryCorrect: isReviewingErrors ? prev.firstTryCorrect : prev.firstTryCorrect + 1,
      recycledResolved: isReviewingErrors ? prev.recycledResolved + 1 : prev.recycledResolved,
      promotedCount: currentItem.box < 4 ? prev.promotedCount + 1 : prev.promotedCount,
    }));

    advanceQueue();
  };

  // Handler for failed recall
  const handleFailure = () => {
    if (!currentItem) return;
    playErrorCue();

    recordReviewResult(currentItem.itemId, false);

    setStats((prev) => ({
      ...prev,
      reviewedCount: prev.reviewedCount + 1,
    }));

    // Add to error queue if not already queued
    if (!isReviewingErrors) {
      setErrorQueue((prev) => {
        if (prev.some((item) => item.itemId === currentItem.itemId)) return prev;
        return [...prev, currentItem];
      });
    }

    advanceQueue();
  };

  // Handle MCQ Selection
  const handleOptionSelect = (option: string) => {
    if (!currentItem || mcqStatus !== 'idle') return;
    setSelectedOption(option);
    playTapSound();

    const correctAnswer = isBn ? currentItem.meaningBn : currentItem.meaningEn;
    if (option === correctAnswer) {
      setMcqStatus('correct');
      setTimeout(() => {
        handleSuccess();
      }, 700);
    } else {
      setMcqStatus('incorrect');
      setTimeout(() => {
        handleFailure();
      }, 900);
    }
  };

  // Step advancement logic
  const advanceQueue = () => {
    if (currentIndex + 1 < activeList.length) {
      setCurrentIndex((prev) => prev + 1);
    } else if (!isReviewingErrors && errorQueue.length > 0) {
      // Switch into error recovery review
      setIsReviewingErrors(true);
      setCurrentIndex(0);
    } else {
      // Completed all items and mistakes
      setIsSessionComplete(true);
    }
  };

  // Keyboard navigation for desktop power users
  const stateRef = useRef({
    currentItem,
    cardMode,
    isFlipped,
    mcqStatus,
    mcqOptions,
    handleSuccess,
    handleFailure,
    handleOptionSelect,
    handlePlayAudio,
    onExit,
  });
  stateRef.current = {
    currentItem,
    cardMode,
    isFlipped,
    mcqStatus,
    mcqOptions,
    handleSuccess,
    handleFailure,
    handleOptionSelect,
    handlePlayAudio,
    onExit,
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        return;
      }
      const {
        currentItem: cur,
        cardMode: mode,
        isFlipped: flipped,
        mcqStatus: status,
        mcqOptions: opts,
        handleSuccess: onSuccess,
        handleFailure: onFailure,
        handleOptionSelect: onSelect,
        handlePlayAudio: onAudio,
        onExit: exit,
      } = stateRef.current;

      if (!cur) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        exit?.();
        return;
      }

      if (e.key === 'a' || e.key === 'A' || e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        onAudio();
        return;
      }

      if (mode === 'mcq') {
        if (status === 'idle') {
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= opts.length) {
            e.preventDefault();
            onSelect(opts[num - 1]);
          }
        }
        return;
      }

      // Flashcard mode
      if (!flipped) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          playTapSound();
          setIsFlipped(true);
        }
      } else {
        if (e.key === '1' || e.key === 'ArrowLeft') {
          e.preventDefault();
          onFailure();
        } else if (e.key === '2' || e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
          e.preventDefault();
          onSuccess();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Empty state if user has never started a lesson
  const allLearnedWords = getLearnedWords(volumeId);
  if (allLearnedWords.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-6">
          <BookOpen className="w-8 h-8 text-neutral-500 dark:text-neutral-400" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {isBn ? 'এখনো কোনো শব্দ শেখা হয়নি' : 'No Words Learned Yet'}
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
          {isBn
            ? 'স্পেসড রিপিটিশন মেমোরি কিউ চালু করতে প্রথম খণ্ডের যেকোনো একটি পাঠ শুরু করুন এবং শব্দ আয়ত্ত করুন।'
            : 'Complete any lesson from Volume 1 to begin collecting vocabulary and activating your Leitner spaced repetition schedule.'}
        </p>
        <button
          onClick={onExit}
          className="h-14 px-8 rounded-2xl bg-accent-primary hover:bg-accent-primary/90 text-white font-bold transition-transform active:scale-[0.98] cursor-pointer"
        >
          {isBn ? 'পাঠে ফিরে যান' : 'Start Curriculum'}
        </button>
      </div>
    );
  }

  // Celebratory Summary Screen
  if (isSessionComplete) {
    const totalAttempted = stats.firstTryCorrect + errorQueue.length;
    const accuracy = totalAttempted > 0 ? Math.round((stats.firstTryCorrect / totalAttempted) * 100) : 100;

    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-8 flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-accent-primary-subtle flex items-center justify-center mb-6 text-accent-primary">
            <Trophy className="w-10 h-10" />
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
            {isBn ? 'দৈনিক রিভিউ সম্পন্ন!' : 'Daily Review Complete!'}
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-mono uppercase tracking-wider">
            {isPracticeMode
              ? isBn
                ? 'ঐচ্ছিক অনুশীলন সেশন'
                : 'Active Practice Session'
              : isBn
                ? 'স্পেসড রিপিটিশন মাইলস্টোন'
                : 'Spaced Repetition Milestone'}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 w-full mb-8">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 block">
                {stats.firstTryCorrect}/{stats.totalInitial}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {isBn ? 'সঠিক উত্তর' : 'First-Try Correct'}
              </span>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold text-accent-primary block">
                {accuracy}%
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {isBn ? 'নির্ভুলতার হার' : 'Accuracy Rate'}
              </span>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 block">
                {stats.promotedCount}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {isBn ? 'বক্স পদোন্নতি' : 'Box Promoted'}
              </span>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 block">
                {stats.recycledResolved}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {isBn ? 'ভুল সংশোধন' : 'Mistakes Cleared'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col w-full gap-3">
            <button
              onClick={onExit}
              className="h-14 w-full rounded-2xl bg-accent-primary hover:bg-accent-primary/90 text-white font-bold transition-transform active:scale-[0.98] cursor-pointer"
            >
              {isBn ? 'পাঠে ফিরে যান' : 'Continue Learning'}
            </button>

            {onNavigateToMushaf && (
              <button
                onClick={onNavigateToMushaf}
                className="h-14 w-full rounded-2xl bg-neutral-200/80 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5 text-accent-primary" />
                <span>{isBn ? 'কোরআন মুসহাফ দেখুন' : 'Explore in Quran Mushaf'}</span>
              </button>
            )}

            <button
              onClick={() => initializeSession(true)}
              className="h-12 w-full text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isBn ? 'আরও শব্দ অনুশীলন করুন' : 'Practice More Words'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Active Review Flashcard / Drill Interface
  const progressPercent = activeList.length > 0 ? Math.round(((currentIndex) / activeList.length) * 100) : 0;
  const boxLabels = ['New', 'Learning', 'Familiar', 'Proficient', 'Mastered'];
  const boxLabelsBn = ['নতুন', 'শিক্ষানবিস', 'পরিচিত', 'দক্ষ', 'আয়ত্তাধীন'];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col text-neutral-900 dark:text-neutral-100">
      {/* Top Review Navigation Bar */}
      <header className="h-16 border-b border-neutral-100 dark:border-neutral-900 px-4 sm:px-8 flex items-center justify-between">
        <button
          onClick={onExit}
          className="h-10 px-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isBn ? 'প্রস্থান' : 'Exit'}</span>
        </button>

        {/* Center Progress Stepper */}
        <div className="flex flex-col items-center flex-1 max-w-xs mx-4">
          <div className="w-full bg-neutral-100 dark:bg-neutral-900 h-2 rounded-full overflow-hidden mb-1">
            <div
              className="bg-accent-primary h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            {isReviewingErrors
              ? isBn
                ? `ভুল সংশোধন: ${currentIndex + 1} / ${activeList.length}`
                : `Recycling Mistakes: ${currentIndex + 1} / ${activeList.length}`
              : isBn
                ? `রিভিউ: ${currentIndex + 1} / ${activeList.length}`
                : `Review: ${currentIndex + 1} / ${activeList.length}`}
          </span>
        </div>

        {/* Mode & Box Status Badge */}
        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <button
            onClick={() => {
              playTapSound();
              setCardMode((m) => (m === 'flashcard' ? 'mcq' : 'flashcard'));
            }}
            className="h-10 px-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title={cardMode === 'flashcard' ? 'Switch to Quiz Mode' : 'Switch to Flashcard Mode'}
          >
            {cardMode === 'flashcard' ? (
              <HelpCircle className="w-4 h-4 text-accent-primary" />
            ) : (
              <Layers className="w-4 h-4 text-accent-primary" />
            )}
            <span className="hidden sm:inline">
              {cardMode === 'flashcard'
                ? isBn
                  ? 'কুইজ মোড'
                  : 'Quiz Mode'
                : isBn
                  ? 'ফ্ল্যাশ কার্ড'
                  : 'Flashcard'}
            </span>
          </button>

          {currentItem && (
            <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-[11px] font-mono font-bold text-neutral-700 dark:text-neutral-300">
              Box {currentItem.box} · {isBn ? boxLabelsBn[currentItem.box] || 'বক্স' : boxLabels[currentItem.box] || 'Box'}
            </span>
          )}
        </div>
      </header>

      {/* Main Review Card Work area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 max-w-lg mx-auto w-full">
        {currentItem && (
          <div className="w-full flex flex-col items-center">
            {/* Context Origin Badge */}
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <Brain className="w-4 h-4 text-accent-primary" />
              <span>
                Vol {currentItem.volume} · Ch {currentItem.chapter} · Lesson {currentItem.lesson}
              </span>
            </div>

            {/* Tactile Learning Card */}
            <motion.div
              key={currentItem.itemId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-8 flex flex-col items-center text-center relative"
            >
              {/* Arabic Audio Playback Button */}
              <button
                onClick={handlePlayAudio}
                className="absolute top-5 right-5 p-3 rounded-2xl bg-white dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                title="Listen to pronunciation"
              >
                <Volume2 className="w-5 h-5 text-accent-primary" />
              </button>

              {/* Arabic Prompt with complete Harakat */}
              <div
                dir="rtl"
                className="my-8 font-arabic text-4xl sm:text-5xl tracking-normal leading-relaxed text-neutral-900 dark:text-neutral-100 select-none cursor-pointer"
                onClick={handlePlayAudio}
              >
                {currentItem.arabic}
              </div>

              {/* Prompt Instruction */}
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                {cardMode === 'mcq'
                  ? isBn
                    ? 'সঠিক অর্থটি নির্বাচন করুন'
                    : 'Select the correct meaning'
                  : isBn
                    ? 'অর্থ মনে করার চেষ্টা করুন'
                    : 'Recall the meaning'}
              </p>

              {cardMode === 'mcq' ? (
                /* MCQ Option Grid */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-2">
                  {mcqOptions.map((opt, idx) => {
                    const isSelected = selectedOption === opt;
                    let btnStyle =
                      'bg-white dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100';
                    if (isSelected && mcqStatus === 'correct') {
                      btnStyle = 'bg-accent-primary text-white font-bold';
                    } else if (isSelected && mcqStatus === 'incorrect') {
                      btnStyle = 'bg-rose-500 text-white font-bold';
                    }

                    return (
                      <button
                        key={idx}
                        disabled={mcqStatus !== 'idle'}
                        onClick={() => handleOptionSelect(opt)}
                        className={`h-14 px-4 rounded-2xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-center text-center ${btnStyle}`}
                      >
                        <span className="hidden sm:inline-flex items-center justify-center w-5 h-5 rounded-md text-[10px] font-mono font-bold mr-2 bg-neutral-200/80 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 shrink-0">
                          {idx + 1}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* Flashcard Mode: Reveal & Rate */
                <AnimatePresence>
                  {isFlipped ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="w-full border-t border-neutral-200/80 dark:border-neutral-800 pt-6 mt-2"
                    >
                      <div className="mb-6 text-center">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                          {isBn ? currentItem.meaningBn || currentItem.meaningEn : currentItem.meaningEn}
                        </h3>
                      </div>

                      {/* Self-Rating Action Buttons (56px) */}
                      <div className="grid grid-cols-2 gap-3 w-full">
                        <button
                          onClick={handleFailure}
                          className="h-14 rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                        >
                          <XCircle className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                          <span>{isBn ? 'মনে পড়েনি' : 'Need Practice'}</span>
                          <span className="hidden sm:inline-block text-[11px] font-mono px-1.5 py-0.5 rounded bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-normal ml-1">
                            1
                          </span>
                        </button>

                        <button
                          onClick={handleSuccess}
                          className="h-14 rounded-2xl bg-accent-primary hover:bg-accent-primary/90 text-white font-bold transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{isBn ? 'মনে পড়েছে' : 'I Got It'}</span>
                          <span className="hidden sm:inline-block text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/20 text-white font-normal ml-1">
                            2
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <button
                      onClick={() => {
                        playTapSound();
                        setIsFlipped(true);
                      }}
                      className="h-14 w-full rounded-2xl bg-accent-primary hover:bg-accent-primary/90 text-white font-bold transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>{isBn ? 'অর্থ দেখুন' : 'Reveal Meaning'}</span>
                      <span className="hidden sm:inline-block text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/20 text-white font-normal ml-1">
                        Space
                      </span>
                    </button>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
export default DailyReviewRunner;

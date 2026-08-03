import { useState, useMemo } from 'react';

import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { DemonstrativeBadge } from './DemonstrativeBadge';
import { audioService } from '@/lib/audioService';

export interface QAExerciseItem {
  id: number;
  questionAr: string;
  emoji: string;
  expectedAnswer: string[];
  chips: string[];
}

const shuffleArray = (array: string[], expected?: string[]): string[] => {
  const arr = [...array];
  if (arr.length <= 1) return arr;

  let attempts = 0;
  do {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    attempts++;
  } while (
    attempts < 10 &&
    expected &&
    arr.length === expected.length &&
    arr.every((val, idx) => val === expected[idx])
  );

  return arr;
};

export interface WordChipExerciseProps {
  exercises: QAExerciseItem[];
  activeQAIndex?: number;
  selectedChips?: string[];
  verificationResult?: { checked: boolean; success: boolean };
  audioEnabled?: boolean;
  onChipClick?: (chip: string) => void;
  onRemoveChip?: (index: number) => void;
  onResetChips?: () => void;
  onVerifySentence?: () => void;
  onNextQA?: () => void;
  onFinish?: () => void;
  instructionText?: string;
  className?: string;
}

export function WordChipExercise({
  exercises,
  activeQAIndex: controlledActiveIndex,
  selectedChips: controlledSelectedChips,
  verificationResult: controlledVerificationResult,
  audioEnabled = true,
  onChipClick,
  onRemoveChip,
  onResetChips,
  onVerifySentence,
  onNextQA,
  onFinish,
  instructionText = 'Tap word chips below in sequence to assemble your answer',
  className = '',
}: WordChipExerciseProps) {
  // Internal state fallback for standalone usage
  const [internalActiveIndex, setInternalActiveIndex] = useState<number>(0);
  const [internalSelectedChips, setInternalSelectedChips] = useState<string[]>([]);
  const [internalVerificationResult, setInternalVerificationResult] = useState<{
    checked: boolean;
    success: boolean;
  }>({ checked: false, success: false });

  const activeIndex = controlledActiveIndex ?? internalActiveIndex;
  const currentChips = controlledSelectedChips ?? internalSelectedChips;
  const currentResult = controlledVerificationResult ?? internalVerificationResult;

  const activeQ = exercises[activeIndex];

  const shuffledChips = useMemo(() => {
    if (!activeQ) return [];
    return shuffleArray(activeQ.chips, activeQ.expectedAnswer);
  }, [activeQ]);

  if (!activeQ) return null;

  const handleChipClick = (chip: string) => {
    audioService.playClick();
    if (onChipClick) {
      onChipClick(chip);
    } else {
      if (internalVerificationResult.checked) {
        setInternalVerificationResult({ checked: false, success: false });
      }
      setInternalSelectedChips((prev) => [...prev, chip]);
    }
  };

  const handleRemoveChip = (index: number) => {
    audioService.playClick();
    if (onRemoveChip) {
      onRemoveChip(index);
    } else {
      if (internalVerificationResult.checked) {
        setInternalVerificationResult({ checked: false, success: false });
      }
      setInternalSelectedChips((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleResetChips = () => {
    audioService.playClick();
    if (onResetChips) {
      onResetChips();
    } else {
      setInternalSelectedChips([]);
      setInternalVerificationResult({ checked: false, success: false });
    }
  };

  const handleVerifySentence = () => {
    if (onVerifySentence) {
      onVerifySentence();
    } else {
      const isCorrect =
        currentChips.length === activeQ.expectedAnswer.length &&
        currentChips.every((chip, i) => chip === activeQ.expectedAnswer[i]);

      if (isCorrect) {
        audioService.playSuccess();
        setInternalVerificationResult({ checked: true, success: true });
        audioService.speakArabic(currentChips.join(' '), audioEnabled);
      } else {
        audioService.playError();
        setInternalVerificationResult({ checked: true, success: false });
      }
    }
  };

  const handleNext = () => {
    audioService.playClick();
    if (onNextQA) {
      onNextQA();
    } else {
      if (activeIndex < exercises.length - 1) {
        setInternalActiveIndex((prev) => prev + 1);
        setInternalSelectedChips([]);
        setInternalVerificationResult({ checked: false, success: false });
      } else if (onFinish) {
        onFinish();
      }
    }
  };

  const isNearDistance =
    activeQ.questionAr.includes('هٰذَا') || activeQ.questionAr.includes('هٰذِهِ');

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-6 space-y-5">
        {/* Step Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 pb-1">
          {exercises.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === activeIndex
                  ? 'bg-neutral-900 dark:bg-neutral-100 scale-125'
                  : i < activeIndex
                  ? 'bg-emerald-500'
                  : 'bg-neutral-300 dark:bg-neutral-700'
              }`}
            />
          ))}
        </div>

        <div className="space-y-4">
          {/* Question Banner */}
          <div
            className="bg-white dark:bg-neutral-800 p-3 sm:p-5 rounded-2xl flex items-center justify-between gap-4"
            dir="rtl"
          >
            <div className="flex items-center w-full sm:flex-1">
              <DemonstrativeBadge
                text={activeQ.questionAr}
                direction="rtl"
                variant="light"
                className="sm:rounded-l-none max-w-[65%] sm:max-w-none"
                textClassName="text-xl sm:text-2xl"
              />

              <div
                className={`flex-1 flex items-center ${
                  isNearDistance ? 'justify-start pr-3 sm:pr-6' : 'justify-end pl-3 sm:pl-6'
                }`}
              >
                {isNearDistance ? (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 sm:w-12 h-0.5 bg-neutral-300 dark:bg-neutral-600" />
                    <span className="text-3xl sm:text-4xl">{activeQ.emoji}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 sm:gap-3 w-full justify-end">
                    <div className="flex-1 h-0.5 bg-neutral-300 dark:bg-neutral-600 mx-2 sm:mx-4" />
                    <span className="text-2xl sm:text-3xl opacity-60">{activeQ.emoji}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Answer Drop Zone (Assembled Chips) */}
          <div
            className="bg-white dark:bg-neutral-800 min-h-[76px] rounded-2xl p-4 flex items-center justify-center flex-wrap gap-3"
            dir="rtl"
          >
            {currentChips.length === 0 ? (
              <span className="text-xs text-neutral-400 dark:text-neutral-500" dir="ltr">
                {instructionText}
              </span>
            ) : (
              currentChips.map((chip, index) => (
                <button
                  key={`${chip}-${index}`}
                  onClick={() => handleRemoveChip(index)}
                  className="bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-arabic font-semibold text-xl px-5 py-2.5 rounded-2xl flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
                >
                  <span>{chip}</span>
                  <span className="text-xs text-neutral-400 font-mono">✕</span>
                </button>
              ))
            )}
          </div>

          {/* Choice Chips Pool */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-2" dir="rtl">
            {shuffledChips.map((chip, i) => (
              <button
                key={`chip-${chip}-${i}`}
                onClick={() => handleChipClick(chip)}
                className="bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-arabic font-semibold text-base sm:text-lg px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all active:scale-95"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Verification Result Notification */}
          {currentResult.checked && (
            <div
              className={`p-4 rounded-2xl text-center text-sm font-semibold transition-all ${
                currentResult.success
                  ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300'
                  : 'bg-rose-100 dark:bg-rose-950/80 text-rose-900 dark:text-rose-300'
              }`}
            >
              {currentResult.success ? (
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Correct: {activeQ.expectedAnswer.join(' ')}</span>
                </div>
              ) : (
                <span>Try again! Select the words in order.</span>
              )}
            </div>
          )}

          {/* Actions Bar */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={handleResetChips}
              disabled={currentResult.success}
              className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            {currentResult.success ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>{activeIndex < exercises.length - 1 ? 'Next' : 'Finish'}</span>
                {activeIndex < exercises.length - 1 && <ArrowRight className="w-4 h-4" />}
              </button>
            ) : (
              <button
                disabled={currentChips.length === 0}
                onClick={handleVerifySentence}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Verify Answer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

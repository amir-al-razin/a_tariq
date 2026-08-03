import { useState, useEffect, useMemo } from 'react';
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { audioService } from '@/lib/audioService';

export interface InteractiveExercise {
  id: number;
  q: string; // The Arabic text or question (e.g., 'عَلَمٌ جَمِيلٌ' or '... مِظَلَّةٌ')
  expected: string[]; // Expected chips to form the answer
  chips: string[]; // All available choices
}

interface InteractiveDrillProps {
  exercises: InteractiveExercise[];
  onComplete: () => void;
  audioEnabled: boolean;
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

export function InteractiveDrill({ exercises, onComplete, audioEnabled }: InteractiveDrillProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [verificationResult, setVerificationResult] = useState({ checked: false, success: false });

  // Reset local state when exercises change
  useEffect(() => {
    setActiveIndex(0);
    setSelectedChips([]);
    setVerificationResult({ checked: false, success: false });
  }, [exercises]);

  const activeQ = exercises[activeIndex];

  const shuffledChips = useMemo(() => {
    if (!activeQ) return [];
    return shuffleArray(activeQ.chips, activeQ.expected);
  }, [activeQ]);

  if (!activeQ) return null;

  const handleChipClick = (chip: string) => {
    audioService.playClick();
    if (verificationResult.checked) {
      setVerificationResult({ checked: false, success: false });
    }
    setSelectedChips((prev) => [...prev, chip]);
  };

  const handleRemoveChip = (index: number) => {
    audioService.playClick();
    if (verificationResult.checked) {
      setVerificationResult({ checked: false, success: false });
    }
    setSelectedChips((prev) => prev.filter((_, i) => i !== index));
  };

  const handleResetChips = () => {
    audioService.playClick();
    setSelectedChips([]);
    setVerificationResult({ checked: false, success: false });
  };

  const handleVerifySentence = () => {
    const isCorrect = selectedChips.length === activeQ.expected.length &&
                      selectedChips.every((chip, i) => chip === activeQ.expected[i]);

    setVerificationResult({ checked: true, success: isCorrect });
    
    if (isCorrect) {
      audioService.playSuccess();
      // Only speak the Arabic string if the chips themselves are Arabic
      const isArabicChips = /[\u0600-\u06FF]/.test(selectedChips[0] || '');
      if (isArabicChips) {
         audioService.speakArabic(selectedChips.join(' '), audioEnabled);
      } else {
         audioService.speakArabic(activeQ.q, audioEnabled);
      }
    } else {
      audioService.playError();
    }
  };

  const handleNext = () => {
    audioService.playClick();
    if (activeIndex < exercises.length - 1) {
      setActiveIndex(prev => prev + 1);
      setSelectedChips([]);
      setVerificationResult({ checked: false, success: false });
    } else {
      onComplete();
    }
  };

  // Check if we are assembling Arabic text (RTL) or English text (LTR)
  const isArabicOutput = activeQ.chips.length > 0 && /[\u0600-\u06FF]/.test(activeQ.chips[0]);

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-6 space-y-5">
      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 pb-1 flex-wrap">
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
        {/* Question Header (Always Arabic) */}
        <div className="bg-white dark:bg-neutral-800 p-3 sm:p-5 rounded-2xl flex items-center justify-center gap-4" dir="rtl">
          <span className="font-arabic text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 break-words leading-tight text-center py-2">
            {activeQ.q}
          </span>
        </div>

        {/* Dropzone */}
        <div className="bg-white dark:bg-neutral-800 min-h-[76px] rounded-2xl p-4 flex items-center justify-center flex-wrap gap-3" dir={isArabicOutput ? "rtl" : "ltr"}>
          {selectedChips.length === 0 ? (
            <span className="text-xs text-neutral-400 dark:text-neutral-500" dir="ltr">
              Tap word chips below in sequence to assemble your answer
            </span>
          ) : (
            selectedChips.map((chip, index) => (
              <button
                key={`${chip}-${index}`}
                onClick={() => handleRemoveChip(index)}
                className="bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-semibold text-lg sm:text-xl px-5 py-2.5 rounded-2xl flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <span className={isArabicOutput ? 'font-arabic' : ''}>{chip}</span>
                <span className="text-xs text-neutral-400 font-mono">✕</span>
              </button>
            ))
          )}
        </div>

        {/* Choice Chips */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-2" dir={isArabicOutput ? "rtl" : "ltr"}>
          {shuffledChips.map((chip, i) => (
            <button
              key={`chip-${chip}-${i}`}
              onClick={() => handleChipClick(chip)}
              className="bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-semibold text-base sm:text-lg px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all active:scale-95"
            >
              <span className={isArabicOutput ? 'font-arabic' : ''}>{chip}</span>
            </button>
          ))}
        </div>

        {/* Validation Message */}
        {verificationResult.checked && (
          <div
            className={`p-4 rounded-2xl text-center text-sm font-semibold transition-all ${
              verificationResult.success
                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300'
                : 'bg-rose-100 dark:bg-rose-950/80 text-rose-900 dark:text-rose-300'
            }`}
          >
            {verificationResult.success ? (
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className={isArabicOutput ? 'font-arabic text-lg' : ''}>Correct: {activeQ.expected.join(' ')}</span>
              </div>
            ) : (
              <span>Try again! Select the words in order.</span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={handleResetChips}
            disabled={verificationResult.success}
            className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          
          {verificationResult.success ? (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>{activeIndex < exercises.length - 1 ? 'Next' : 'Finish'}</span>
              {activeIndex < exercises.length - 1 && <ArrowRight className="w-4 h-4" />}
            </button>
          ) : (
            <button
              disabled={selectedChips.length === 0}
              onClick={handleVerifySentence}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Verify Answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

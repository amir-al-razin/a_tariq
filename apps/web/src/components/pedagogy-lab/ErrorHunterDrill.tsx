import { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { WordChip } from '../design-system/primitives/PedagogyComponents';
import { Button } from '../design-system/primitives/Button';

interface ErrorHunterProps {
  bookRef: string;
  instruction: string;
  words: Array<{
    word: string;
    isError?: boolean;
    correctedWord?: string;
  }>;
}

export function ErrorHunterDrill({
  bookRef,
  instruction,
  words,
}: ErrorHunterProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'found' | 'wrong_target'>('idle');

  const handleTapWord = (idx: number) => {
    if (status === 'found') return;
    setSelectedIdx(idx);
    if (words[idx].isError) {
      setStatus('found');
    } else {
      setStatus('wrong_target');
    }
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setStatus('idle');
  };

  return (
    <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6 transition-colors">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400">
          <span>{bookRef}</span>
          <span>•</span>
          <span className="font-english font-medium">{instruction}</span>
        </div>
        {status !== 'idle' && (
          <Button
            variant="ghost"
            size="sm"
            pill
            onClick={handleReset}
            leftIcon={<RotateCcw size={13} />}
          >
            Reset
          </Button>
        )}
      </div>

      {/* Sentence Word Strip */}
      <div className="p-8 rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-center min-h-[140px] transition-colors">
        <div className="flex items-center justify-center gap-4 flex-wrap" dir="rtl">
          {words.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            const isCorrectError = isSelected && status === 'found';
            const isWrongTarget = isSelected && status === 'wrong_target';

            const chipState = isCorrectError
              ? 'correct'
              : isWrongTarget
              ? 'error'
              : isSelected
              ? 'selected'
              : 'idle';

            return (
              <WordChip
                key={idx}
                arabic={isCorrectError && item.correctedWord ? item.correctedWord : item.word}
                state={chipState}
                onClick={() => handleTapWord(idx)}
                disabled={status === 'found'}
                className="min-w-[120px]"
              />
            );
          })}
        </div>
      </div>

      {/* Immediate Minimal Feedback */}
      {status !== 'idle' && (
        <div className="flex items-center justify-center gap-2 text-sm font-english-semibold transition-all pt-1">
          {status === 'found' ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Flaw identified and corrected</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
              <XCircle size={16} />
              <span>This word is grammatically correct</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

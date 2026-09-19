import { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { WordChip, WordAssemblySlot } from '../design-system/primitives/PedagogyComponents';
import { Button } from '../design-system/primitives/Button';

interface SentenceMutationProps {
  bookRef: string;
  instruction: string;
  baseSentence: string;
  mutationTargetPrefix: string;
  options: string[];
  correctAnswer: string;
}

export function SentenceMutationDrill({
  bookRef,
  instruction,
  baseSentence,
  mutationTargetPrefix,
  options,
  correctAnswer,
}: SentenceMutationProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const handleSelect = (option: string) => {
    if (status === 'correct') return;
    setSelected(option);
    if (option === correctAnswer) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };

  const handleReset = () => {
    setSelected(null);
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

      {/* Base Sentence vs Transformed Target Container */}
      <div className="space-y-3" dir="rtl">
        {/* Step 1: Base Sentence */}
        <div className="p-5 rounded-2xl bg-white/60 dark:bg-neutral-800/60 flex items-center justify-between gap-4 transition-colors">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
            Original
          </span>
          <span className="font-arabic text-2xl text-neutral-600 dark:text-neutral-300">
            {baseSentence}
          </span>
        </div>

        {/* Step 2: Target Transformed Sentence with Mutation Slot */}
        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-between gap-4 transition-colors">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
            Mutated
          </span>
          <div className="font-arabic text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-50 flex items-center gap-3 flex-wrap">
            <span>{mutationTargetPrefix}</span>
            <WordAssemblySlot
              word={selected ? { arabic: selected } : undefined}
              placeholder="..."
              onRemove={status !== 'correct' ? () => setSelected(null) : undefined}
              className="inline-flex min-w-[140px] min-h-[58px]"
            />
          </div>
        </div>
      </div>

      {/* Candidate Mutation Options */}
      <div className="flex items-center justify-center gap-3 flex-wrap pt-2" dir="rtl">
        {options.map((option) => {
          const isSelected = selected === option;
          const chipState = isSelected
            ? status === 'correct'
              ? 'correct'
              : status === 'incorrect'
              ? 'error'
              : 'selected'
            : 'idle';

          return (
            <WordChip
              key={option}
              arabic={option}
              state={chipState}
              onClick={() => handleSelect(option)}
              disabled={status === 'correct'}
              className="min-w-[150px]"
            />
          );
        })}
      </div>

      {/* Immediate Minimal Feedback */}
      {status !== 'idle' && (
        <div className="flex items-center justify-center gap-2 text-sm font-english-semibold transition-all pt-1">
          {status === 'correct' ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Correct grammatical transformation</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
              <XCircle size={16} />
              <span>Incorrect transformation</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { WordChip, WordAssemblySlot } from '../design-system/primitives/PedagogyComponents';
import { Button } from '../design-system/primitives/Button';

interface SlotFillProps {
  bookRef: string;
  instruction: string;
  sentencePrefix: string;
  sentenceSuffix?: string;
  options: string[];
  correctAnswer: string;
}

export function SlotFillDrill({
  bookRef,
  instruction,
  sentencePrefix,
  sentenceSuffix = '',
  options,
  correctAnswer,
}: SlotFillProps) {
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
      {/* Top Header: Book Reference and Instruction Badge */}
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

      {/* Target Sentence Display with Active Slot */}
      <div className="p-8 rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-center min-h-[140px] transition-colors">
        <div className="font-arabic text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 leading-relaxed text-center flex items-center justify-center gap-4 flex-wrap" dir="rtl">
          <span>{sentencePrefix}</span>
          <WordAssemblySlot
            word={selected ? { arabic: selected } : undefined}
            placeholder="..."
            onRemove={status !== 'correct' ? () => setSelected(null) : undefined}
            className="inline-flex min-w-[130px] min-h-[64px]"
          />
          {sentenceSuffix && <span>{sentenceSuffix}</span>}
        </div>
      </div>

      {/* Option Word Chips */}
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
            />
          );
        })}
      </div>

      {/* Immediate Minimal Feedback Indicator */}
      {status !== 'idle' && (
        <div className="flex items-center justify-center gap-2 text-sm font-english-semibold transition-all pt-1">
          {status === 'correct' ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Correct</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
              <XCircle size={16} />
              <span>Try another option</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

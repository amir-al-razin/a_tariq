import { useState } from 'react';
import { CheckCircle2, MessageSquare, RotateCcw, XCircle } from 'lucide-react';
import { Button } from '../design-system/primitives/Button';

interface DialogueQAProps {
  bookRef: string;
  instruction: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export function DialogueQADrill({
  bookRef,
  instruction,
  question,
  options,
  correctAnswer,
}: DialogueQAProps) {
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

      {/* Question Speech Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-between gap-4 transition-colors" dir="rtl">
        <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-300 shrink-0">
          <MessageSquare size={18} />
        </div>
        <div className="font-arabic text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-50 leading-[2.2] text-right flex-1">
          {question}
        </div>
      </div>

      {/* Response Options */}
      <div className="space-y-3 pt-2" dir="rtl">
        {options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = isSelected && status === 'correct';
          const isWrong = isSelected && status === 'incorrect';

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={status === 'correct'}
              className={`w-full min-h-[56px] px-6 py-4 rounded-3xl font-arabic text-xl sm:text-2xl text-right transition-all cursor-pointer outline-none border-0 shadow-none flex items-center justify-between gap-4 active:scale-[0.99] select-none ${
                isCorrect
                  ? 'bg-emerald-600/90 text-white font-bold'
                  : isWrong
                  ? 'bg-rose-500/20 text-rose-800 dark:text-rose-200 animate-shake'
                  : 'bg-white dark:bg-neutral-800 hover:bg-neutral-200/70 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
              }`}
            >
              <span className="leading-[2.2]">{option}</span>
              {isCorrect && <CheckCircle2 size={20} className="shrink-0 text-white" />}
              {isWrong && <XCircle size={20} className="shrink-0 text-rose-600 dark:text-rose-400" />}
            </button>
          );
        })}
      </div>

      {/* Immediate Minimal Feedback */}
      {status !== 'idle' && (
        <div className="flex items-center justify-center gap-2 text-sm font-english-semibold transition-all pt-1">
          {status === 'correct' ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Appropriate response</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
              <XCircle size={16} />
              <span>Choose a more natural response</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

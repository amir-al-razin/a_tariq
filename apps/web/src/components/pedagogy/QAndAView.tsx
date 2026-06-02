import React, { useState } from 'react';
import type { QAItem } from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props {
  payload?: any;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
  accent400?: string;
}

export const QAndAView: React.FC<Props> = ({ payload, onProgress, onComplete, accent400 = '#34D3AA' }) => {
  const questions: QAItem[] = payload?.questions || [];
  const instruction: string = payload?.instruction || '';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  if (questions.length === 0) {
    const fallbackText = payload?.text || payload?.instruction;
    if (fallbackText) {
      return (
        <div className="w-full py-2">
          <span
            className="font-arabic-semibold text-xl text-neutral-800 dark:text-neutral-100 text-right leading-8"
            dir="rtl"
          >
            {fallbackText}
          </span>
        </div>
      );
    }
    return (
      <span className="text-neutral-800 dark:text-neutral-100">
        {m['qanda.noQuestions']?.() ?? 'No questions available'}
      </span>
    );
  }

  const q = questions[currentIndex];
  const isCorrect = selected === q.correct_ar;
  const isLastQ = currentIndex === questions.length - 1;

  const handleSelect = (opt: string) => {
    if (revealed) return;
    setSelected(opt);
    setRevealed(true);
    const newProgress = (currentIndex + 1) / questions.length;
    onProgress?.(newProgress);
    if (isLastQ) {
      onComplete?.();
    }
  };

  const handleNext = () => {
    setSelected(null);
    setRevealed(false);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {instruction ? (
        <span className="font-english text-sm text-neutral-600 dark:text-neutral-400 mb-5 text-center italic">
          {instruction}
        </span>
      ) : null}

      {/* Progress dots */}
      <div className="flex flex-row gap-2 mb-5 flex-wrap justify-center">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i <= currentIndex ? 'w-5' : 'w-1.5'
            } ${
              i <= currentIndex
                ? ''
                : 'bg-neutral-200 dark:bg-neutral-700'
            }`}
            style={{ backgroundColor: i <= currentIndex ? accent400 : undefined }}
          />
        ))}
      </div>

      {/* Emoji */}
      <div className="w-24 h-24 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-5 overflow-hidden">
        {q.imageUrl ? (
          <img src={q.imageUrl} alt={q.question_en} className="w-16 h-16 object-contain" />
        ) : q.emoji ? (
          <span className="text-5xl">{q.emoji}</span>
        ) : null}
      </div>

      <span
        className="font-arabic-semibold text-3xl text-neutral-800 dark:text-neutral-100 mb-1 text-center"
        dir="rtl"
      >
        {q.question_ar}
      </span>
      <span className="font-english text-sm text-neutral-600 dark:text-neutral-400 mb-6 text-center">
        {q.question_en}
      </span>

      {/* Options */}
      <div className="w-full flex flex-col gap-2.5">
        {q.options_ar.map((opt) => {
          const isChosen = selected === opt;
          const isThisCorrect = opt === q.correct_ar;
          let borderColor = 'border-neutral-200 dark:border-neutral-700';
          let bg = 'bg-transparent';
          let textColor = 'text-neutral-800 dark:text-neutral-200';

          if (revealed && isChosen && isCorrect) {
            borderColor = 'border-green-500';
            bg = 'bg-green-50 dark:bg-green-900/40';
            textColor = 'text-green-600 dark:text-green-500';
          } else if (revealed && isChosen && !isCorrect) {
            borderColor = 'border-red-500';
            bg = 'bg-red-50 dark:bg-red-900/40';
            textColor = 'text-red-500';
          } else if (revealed && isThisCorrect) {
            borderColor = 'border-green-500';
            bg = 'bg-green-50 dark:bg-green-900/40';
            textColor = 'text-green-600 dark:text-green-500';
          }

          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              disabled={revealed}
              className={`p-4 rounded-xl border-2 flex items-center justify-center transition-colors cursor-pointer ${
                !revealed ? 'hover:bg-neutral-50 dark:hover:bg-neutral-800' : ''
              } ${borderColor} ${bg}`}
            >
              <span className={`font-arabic-semibold text-xl ${textColor}`} dir="rtl">
                {opt}
              </span>
            </button>
          );
        })}
      </div>

      {/* Show explanation after answering */}
      {revealed && (
        <div
          className={`mt-4 p-3.5 rounded-xl w-full border ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-900/40 border-green-500'
              : 'bg-red-50 dark:bg-red-900/40 border-red-500'
          }`}
        >
          <div
            className={`font-english text-sm font-semibold mb-1 ${
              isCorrect ? 'text-green-600 dark:text-green-500' : 'text-red-500'
            }`}
          >
            {isCorrect
              ? m['qanda.correct']?.() ?? 'Correct!'
              : m['qanda.notQuite']?.() ?? 'Not quite'}
          </div>
          <div
            className="font-arabic-semibold text-lg text-neutral-800 dark:text-neutral-100"
            dir="rtl"
          >
            {q.correct_ar}
          </div>
          <div className="font-english text-sm text-neutral-600 dark:text-neutral-400">
            {q.correct_en}
          </div>
        </div>
      )}

      {/* Next button if not last question */}
      {revealed && !isLastQ && (
        <button
          onClick={handleNext}
          className="mt-5 px-8 py-3.5 rounded-xl transition-colors flex items-center justify-center w-full cursor-pointer"
          style={{ backgroundColor: accent400 }}
        >
          <span className="font-english text-base font-semibold text-white">
            {m['qanda.nextQuestion']?.() ?? 'Next Question'}
          </span>
        </button>
      )}
    </div>
  );
};

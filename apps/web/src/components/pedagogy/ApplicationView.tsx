import React from 'react';
import type { ApplicationItem } from '@tariq/shared';
import * as m from '#/paraglide/messages.js';
import { useLanguageContent } from '../../hooks/useLanguageContent';

interface Props {
  payload?: any;
}

export const ApplicationView: React.FC<Props> = ({ payload }) => {
  const { t_content } = useLanguageContent();
  const items: ApplicationItem[] = payload?.items || [];
  const instruction = payload?.instruction
    ? t_content(payload.instruction, payload.instructionBn)
    : (m['chunk.reviewThenContinue']?.() ?? 'Review these examples, then continue');

  if (items.length === 0 && (payload?.text || payload?.instruction)) {
    return (
      <div className="w-full flex justify-center">
        <span
          className="font-arabic-semibold text-xl text-primary-700 dark:text-primary-400 text-right leading-8"
          dir="rtl"
        >
          {payload?.text || payload?.instruction}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="font-english text-sm text-neutral-600 dark:text-neutral-300 mb-5 text-center">
        {instruction}
      </div>

      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-row w-full items-center gap-4 bg-neutral-50 dark:bg-neutral-900 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 mb-3"
        >
          <div className="w-14 h-14 shrink-0 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-2xl">
            {item.emoji}
          </div>
          <div className="flex-1 flex flex-col items-end sm:items-start text-right sm:text-left">
            <span
              className="font-arabic-semibold text-xl text-primary-700 dark:text-primary-400"
              dir="rtl"
            >
              {item.ar}
            </span>
            <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {t_content(item.en, item.bn)}
            </span>
          </div>
        </div>
      ))}

      <div className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center mt-2 italic">
        {m['chunk.reviewThenContinue']?.() ?? 'Review these examples, then continue'}
      </div>
    </div>
  );
};

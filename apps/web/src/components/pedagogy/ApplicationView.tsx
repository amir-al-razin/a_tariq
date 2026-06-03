import React from 'react';
import type { ApplicationItem } from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props {
  payload?: any;
  accent700?: string;
}

export const ApplicationView: React.FC<Props> = ({ payload, accent700 = '#0D775F' }) => {
  const items: ApplicationItem[] = payload?.items || [];
  const instruction = payload?.instruction || (m['chunk.reviewThenContinue']?.() ?? 'Review these examples, then continue');

  if (items.length === 0 && (payload?.text || payload?.instruction)) {
    return (
      <div className="w-full flex flex-col items-center">
        {payload?.instruction && (
          <div className="font-english text-sm text-neutral-600 dark:text-neutral-300 mb-5 text-center">
            {payload.instruction}
          </div>
        )}
        {payload?.text && (
          <div className="w-full flex justify-center">
            <span
              className="font-arabic-semibold text-xl text-right leading-9 whitespace-pre-wrap"
              style={{ color: accent700 }}
              dir="rtl"
            >
              {payload.text}
            </span>
          </div>
        )}
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
          <div className="w-14 h-14 shrink-0 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-2xl overflow-hidden">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.en} className="w-10 h-10 object-contain" />
            ) : item.emoji ? (
              <span>{item.emoji}</span>
            ) : null}
          </div>
          <div className="flex-1 flex flex-col items-end sm:items-start text-right sm:text-left">
            <span
              className="font-arabic-semibold text-xl"
              style={{ color: accent700 }}
              dir="rtl"
            >
              {item.ar}
            </span>
            <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {item.en}
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

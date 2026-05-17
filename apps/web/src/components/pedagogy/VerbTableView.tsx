import React, { useEffect } from 'react';
import type { VerbTableRow } from '@tariq/shared';
import * as m from '#/paraglide/messages.js';
import { useLanguageContent } from '../../hooks/useLanguageContent';

interface Props {
  payload?: {
    verbTable?: VerbTableRow[];
    verbTense?: 'past' | 'present' | 'imperative';
    instruction?: string;
    sourceText?: string;
    text?: string;
  };
  onProgress?: (v: number) => void;
  onComplete?: () => void;
}

const getTenseLabel = (tense: string) => {
  switch (tense) {
    case 'past':
      return {
        labelKey: m['verbTable.tense.past']?.() ?? 'Past Tense',
        ar: 'الْمَاضِي',
      };
    case 'present':
      return {
        labelKey: m['verbTable.tense.present']?.() ?? 'Present Tense',
        ar: 'الْمُضَارِع',
      };
    case 'imperative':
      return {
        labelKey: m['verbTable.tense.imperative']?.() ?? 'Command & Prohibition',
        ar: 'الْأَمْرُ وَالنَّهْيُ',
      };
    default:
      return {
        labelKey: m['verbTable.tense.past']?.() ?? 'Past Tense',
        ar: 'الْمَاضِي',
      };
  }
};

const getColHeaders = () => [
  { ar: 'هُوَ', labelKey: m['verbTable.pronoun.he']?.() ?? 'He' },
  { ar: 'هِيَ', labelKey: m['verbTable.pronoun.she']?.() ?? 'She' },
  { ar: 'أَنْتَ', labelKey: m['verbTable.pronoun.youM']?.() ?? 'You (M)' },
  { ar: 'أَنْتِ', labelKey: m['verbTable.pronoun.youF']?.() ?? 'You (F)' },
  { ar: 'أَنَا', labelKey: m['verbTable.pronoun.i']?.() ?? 'I' },
];

export const VerbTableView: React.FC<Props> = ({ payload, onProgress }) => {
  const { t_content } = useLanguageContent();
  const rows = payload?.verbTable ?? [];
  const tense = payload?.verbTense ?? 'past';
  const tenseLabel = getTenseLabel(tense);
  const COL_HEADERS = getColHeaders();

  useEffect(() => {
    // Scroll-based completion handled by parent
    onProgress?.(0);
  }, [onProgress]);

  if (rows.length === 0) {
    const fallbackText = payload?.sourceText || payload?.text || payload?.instruction;
    if (fallbackText) {
      return (
        <div className="w-full py-2">
          <span
            className="font-arabic-semibold text-lg text-neutral-800 dark:text-neutral-100 text-right leading-8"
            dir="rtl"
          >
            {fallbackText}
          </span>
        </div>
      );
    }
    return (
      <span className="text-neutral-500 dark:text-neutral-400">
        {m['verbTable.noData']?.() ?? 'No data available'}
      </span>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Instruction note */}
      {payload?.instruction && (
        <div className="bg-[#D1FAF0] dark:bg-[#0D775F22] rounded-lg p-2.5">
          <div className="font-english text-xs text-primary-700 dark:text-primary-400 text-center">
            {payload.instruction}
          </div>
        </div>
      )}

      {/* Tense header */}
      <div className="flex flex-col items-center mb-1">
        <span
          className="font-arabic-semibold text-xl text-primary-700 dark:text-primary-400"
          dir="rtl"
        >
          {tenseLabel.ar}
        </span>
        <span className="font-english text-sm font-semibold text-neutral-600 dark:text-neutral-300">
          {tenseLabel.labelKey}
        </span>
      </div>

      {/* Verb Table Scrollable Container */}
      <div className="w-full overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        <div className="flex flex-col gap-4 min-w-max">
          {/* Column headers */}
          <div className="flex flex-row rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-700">
            {/* Root column header */}
            <div className="w-20 p-1.5 flex flex-col items-center justify-center border-r border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-700 shrink-0">
              <span className="font-english text-[10px] font-semibold text-neutral-500 dark:text-neutral-400">
                {m['verbTable.root']?.() ?? 'Root'}
              </span>
              <span className="font-english text-[9px] text-neutral-500 dark:text-neutral-400">
                {m['verbTable.meaning']?.() ?? 'Meaning'}
              </span>
            </div>
            {COL_HEADERS.map((h, i) => (
              <div
                key={i}
                className={`w-[85px] p-1 flex flex-col items-center shrink-0 bg-neutral-200 dark:bg-neutral-700 ${
                  i < COL_HEADERS.length - 1
                    ? 'border-r border-neutral-200 dark:border-neutral-700'
                    : ''
                }`}
              >
                <span
                  className="font-arabic-semibold text-sm text-neutral-900 dark:text-neutral-100"
                  dir="rtl"
                >
                  {h.ar}
                </span>
                <span className="font-english text-[8px] text-neutral-500 dark:text-neutral-400">
                  {h.labelKey}
                </span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="flex flex-row rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700"
            >
              {/* Root + meaning */}
              <div className="w-20 p-1.5 flex flex-col items-center justify-center border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shrink-0">
                <span
                  className="font-arabic-semibold text-[15px] text-primary-700 dark:text-primary-400"
                  dir="rtl"
                >
                  {row.root}
                </span>
                <span className="font-english text-[9px] text-neutral-500 dark:text-neutral-400 text-center">
                  {t_content(row.meaning, row.meaningBn)}
                </span>
              </div>
              {[row.he, row.she, row.youM, row.youF, row.i].map((form, i) => (
                <div
                  key={i}
                  className={`w-[85px] p-1.5 flex items-center justify-center bg-white dark:bg-neutral-800 shrink-0 ${
                    i < 4 ? 'border-r border-neutral-200 dark:border-neutral-700' : ''
                  }`}
                >
                  <span
                    className="font-arabic-semibold text-sm text-neutral-900 dark:text-neutral-100 text-center"
                    dir="rtl"
                  >
                    {form}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

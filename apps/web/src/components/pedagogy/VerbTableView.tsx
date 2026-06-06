import React, { useEffect } from 'react';
import type { VerbTableRow } from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props {
  payload?: {
    verbTable?: VerbTableRow[];
    verbTense?: 'past' | 'present' | 'imperative';
    instruction?: string;
    sourceText?: string;
    text?: string;
    isPlural?: boolean;
    isDual?: boolean;
  };
  onProgress?: (v: number) => void;
  onComplete?: () => void;
  accent400?: string;
  accent700?: string;
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

const getColHeaders = (isPlural?: boolean, isDual?: boolean) => {
  if (isDual) {
    return [
      { ar: 'هُمَا', labelKey: m['verbTable.pronoun.theyM']?.() ? m['verbTable.pronoun.theyM']() + ' (Dual)' : 'They (Dual, M)' },
      { ar: 'هُمَا', labelKey: m['verbTable.pronoun.theyF']?.() ? m['verbTable.pronoun.theyF']() + ' (Dual)' : 'They (Dual, F)' },
      { ar: 'أَنْتُمَا', labelKey: m['verbTable.pronoun.youM']?.() ? m['verbTable.pronoun.youM']() + ' (Dual)' : 'You (Dual, M)' },
      { ar: 'أَنْتُمَا', labelKey: m['verbTable.pronoun.youF']?.() ? m['verbTable.pronoun.youF']() + ' (Dual)' : 'You (Dual, F)' },
      { ar: 'نَحْنُ', labelKey: m['verbTable.pronoun.we']?.() ?? 'We' },
    ];
  }
  if (isPlural) {
    return [
      { ar: 'هُمْ', labelKey: m['verbTable.pronoun.theyM']?.() ?? 'They (M)' },
      { ar: 'هُنَّ', labelKey: m['verbTable.pronoun.theyF']?.() ?? 'They (F)' },
      { ar: 'أَنْتُمْ', labelKey: m['verbTable.pronoun.youPluralM']?.() ?? 'You All (M)' },
      { ar: 'أَنْتُنَّ', labelKey: m['verbTable.pronoun.youPluralF']?.() ?? 'You All (F)' },
      { ar: 'نَحْنُ', labelKey: m['verbTable.pronoun.we']?.() ?? 'We' },
    ];
  }
  return [
    { ar: 'هُوَ', labelKey: m['verbTable.pronoun.he']?.() ?? 'He' },
    { ar: 'هِيَ', labelKey: m['verbTable.pronoun.she']?.() ?? 'She' },
    { ar: 'أَنْتَ', labelKey: m['verbTable.pronoun.youM']?.() ?? 'You (M)' },
    { ar: 'أَنْتِ', labelKey: m['verbTable.pronoun.youF']?.() ?? 'You (F)' },
    { ar: 'أَنَا', labelKey: m['verbTable.pronoun.i']?.() ?? 'I' },
  ];
};

export const VerbTableView: React.FC<Props> = ({ payload, onProgress, accent400 = '#34D3AA', accent700 = '#0D775F' }) => {
  const rows = payload?.verbTable ?? [];
  const tense = payload?.verbTense ?? 'past';
  const tenseLabel = getTenseLabel(tense);
  const isPlural = payload?.isPlural ?? false;
  const isDual = payload?.isDual ?? false;
  const COL_HEADERS = getColHeaders(isPlural, isDual);

  useEffect(() => {
    // Scroll-based completion handled by parent
    onProgress?.(0);
  }, [onProgress]);

  if (rows.length === 0) {
    const fallbackText = payload?.sourceText || payload?.text || payload?.instruction;
    if (fallbackText) {
      const lines = fallbackText.split('\n');
      return (
        <div className="w-full flex flex-col gap-4">
          {payload?.instruction && (
            <div className="rounded-lg p-2.5" style={{ backgroundColor: `${accent400}22` }}>
              <div className="font-english text-xs text-center" style={{ color: accent700 }}>
                {payload.instruction}
              </div>
            </div>
          )}

          {/* Tense header if it's explicitly set but verbTable is empty */}
          {payload?.verbTense && (
            <div className="flex flex-col items-center mb-1">
              <span className="font-arabic-semibold text-xl" style={{ color: accent700 }} dir="rtl">
                {tenseLabel.ar}
              </span>
              <span className="font-english text-sm font-semibold text-neutral-600 dark:text-neutral-300">
                {tenseLabel.labelKey}
              </span>
            </div>
          )}
          
          <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex flex-col gap-3 min-w-max">
              {lines.map((line, idx) => {
                if (!line.trim()) return null;
                const parts = line.split('-').map(p => p.trim()).filter(Boolean);
                return (
                  <div key={idx} className="flex flex-row justify-center gap-2" dir="rtl">
                    {parts.map((part, pIdx) => (
                      <div 
                        key={pIdx} 
                        className="flex-1 flex items-center justify-center min-w-[80px] bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 py-2.5 px-3 shadow-sm"
                      >
                        <span className="font-arabic-semibold text-[16px] text-neutral-900 dark:text-neutral-100 text-center">
                          {part}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
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
        <div className="rounded-lg p-2.5" style={{ backgroundColor: `${accent400}22` }}>
          <div className="font-english text-xs text-center" style={{ color: accent700 }}>
            {payload.instruction}
          </div>
        </div>
      )}

      {/* Tense header */}
      <div className="flex flex-col items-center mb-1">
        <span
          className="font-arabic-semibold text-xl"
          style={{ color: accent700 }}
          dir="rtl"
        >
          {tenseLabel.ar}
        </span>
        <span className="font-english text-sm font-semibold text-neutral-600 dark:text-neutral-300">
          {tenseLabel.labelKey}
        </span>
      </div>

      {/* Verb Table Scrollable Container */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
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
                className={`flex-1 min-w-[85px] p-1 flex flex-col items-center shrink-0 bg-neutral-200 dark:bg-neutral-700 ${
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
                  className="font-arabic-semibold text-[15px]"
                  style={{ color: accent700 }}
                  dir="rtl"
                >
                  {row.root}
                </span>
                <span className="font-english text-[9px] text-neutral-500 dark:text-neutral-400 text-center">
                  {row.meaning}
                </span>
              </div>
              {(isDual || isPlural 
                ? [row.theyM, row.theyF, row.youPluralM, row.youPluralF, row.we] 
                : [row.he, row.she, row.youM, row.youF, row.i]
              ).map((form, i) => (
                <div
                  key={i}
                  className={`flex-1 min-w-[85px] p-1.5 flex items-center justify-center bg-white dark:bg-neutral-800 shrink-0 ${
                    i < 4 ? 'border-r border-neutral-200 dark:border-neutral-700' : ''
                  }`}
                >
                  <span
                    className="font-arabic-semibold text-sm text-neutral-900 dark:text-neutral-100 text-center"
                    dir="rtl"
                  >
                    {form || '-'}
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

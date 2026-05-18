import React, { useEffect } from 'react';
import type { MasdarRow } from '@tariq/shared';
import * as m from '#/paraglide/messages.js';

interface Props {
  payload?: {
    masdarRows?: MasdarRow[];
    baabLabel?: string;
    instruction?: string;
    instructionBn?: string;
  };
  onProgress?: (v: number) => void;
  onComplete?: () => void;
  accent400?: string;
  accent700?: string;
}

const getCols = () => [
  { key: 'past' as const, arLabel: 'مَاضٍ', labelKey: m['masdar.past']?.() ?? 'Past' },
  { key: 'present' as const, arLabel: 'مُضَارِع', labelKey: m['masdar.present']?.() ?? 'Present' },
  { key: 'imperative' as const, arLabel: 'أَمْر', labelKey: m['masdar.command']?.() ?? 'Command' },
  { key: 'prohibitive' as const, arLabel: 'نَهْي', labelKey: m['masdar.prohibit']?.() ?? 'Prohibition' },
];

export const MasdarFactoryView: React.FC<Props> = ({ payload, onProgress, accent400 = '#34D3AA', accent700 = '#0D775F' }) => {
  const rows: MasdarRow[] = payload?.masdarRows ?? [];
  const COLS = getCols();

  useEffect(() => {
    // Scroll-based completion handled by parent
    onProgress?.(0);
  }, [onProgress]);

  if (rows.length === 0) {
    const fallbackText = payload?.instruction;
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
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Optional Baab label */}
      {payload?.baabLabel && (
        <div className="self-center rounded-xl px-3.5 py-1.5 border" style={{
          backgroundColor: `${accent400}22`,
          borderColor: accent700
        }}>
          <span className="font-arabic-semibold text-base text-center block" style={{ color: accent700 }}>
            {payload.baabLabel}
          </span>
        </div>
      )}

      {/* Optional instruction */}
      {payload?.instruction && (
        <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center italic block">
          {payload.instruction}
        </span>
      )}

      {/* Horizontally scrollable table */}
      <div className="w-full overflow-x-auto pb-1 scrollbar-hide">
        <div className="flex flex-col gap-0 min-w-max">
          {/* ── Column headers ── */}
          <div className="flex flex-row rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 mb-0.5">
            {/* Masdar header cell */}
            <div className="w-[110px] bg-neutral-200 dark:bg-neutral-700 p-2 flex flex-col items-center justify-center border-r border-neutral-200 dark:border-neutral-700 shrink-0">
              <span className="font-arabic-semibold text-[13px]" style={{ color: accent700 }}>
                مَصْدَر
              </span>
              <span className="font-english text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                {m['masdar.verbalNoun']?.() ?? 'Verbal Noun'}
              </span>
            </div>

            {/* Tense header cells */}
            {COLS.map((col, ci) => (
              <div
                key={col.key}
                className={`w-[90px] bg-neutral-200 dark:bg-neutral-700 p-2 flex flex-col items-center justify-center shrink-0 ${
                  ci < COLS.length - 1 ? 'border-r border-neutral-200 dark:border-neutral-700' : ''
                }`}
              >
                <span className="font-arabic-semibold text-[13px] text-neutral-900 dark:text-neutral-100">
                  {col.arLabel}
                </span>
                <span className="font-english text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {col.labelKey}
                </span>
              </div>
            ))}
          </div>

          {/* ── Data rows ── */}
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`flex flex-row border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden ${
                ri < rows.length - 1 ? 'mb-1.5' : 'mb-0'
              }`}
            >
              {/* Masdar cell */}
              <div className="w-[110px] p-2.5 flex flex-col items-center justify-center border-r border-neutral-200 dark:border-neutral-700 shrink-0 gap-1" style={{ backgroundColor: `${accent400}22` }}>
                <span className="font-arabic-semibold text-base text-center leading-tight" style={{ color: accent700 }}>
                  {row.masdar}
                </span>
                <span className="font-english text-[10px] text-neutral-500 dark:text-neutral-400 text-center leading-tight">
                  {row.masdarEn}
                </span>
              </div>

              {/* Derived form cells */}
              {COLS.map((col, ci) => (
                <div
                  key={col.key}
                  className={`w-[90px] bg-white dark:bg-neutral-800 p-2.5 flex items-center justify-center shrink-0 ${
                    ci < COLS.length - 1 ? 'border-r border-neutral-200 dark:border-neutral-700' : ''
                  }`}
                >
                  <span className="font-arabic-semibold text-base text-neutral-900 dark:text-neutral-100 text-center">
                    {row[col.key]}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-row flex-wrap gap-2 justify-center mt-1">
        {COLS.map((col) => (
          <div key={col.key} className="flex flex-row items-center gap-1">
            <span className="font-arabic-semibold text-[11px]" style={{ color: accent700 }}>
              {col.arLabel}
            </span>
            <span className="font-english text-[11px] text-neutral-500 dark:text-neutral-400">
              = {col.labelKey}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

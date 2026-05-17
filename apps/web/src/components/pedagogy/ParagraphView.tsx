import React, { useEffect, useState } from 'react';
import type { ParagraphBlock } from '@tariq/shared';
import * as m from '#/paraglide/messages.js';
import { useLanguageContent } from '../../hooks/useLanguageContent';

interface Props {
  payload?: {
    paragraphs?: ParagraphBlock[];
    instruction?: string;
    instructionBn?: string;
    text?: string;
  };
  onProgress?: (v: number) => void;
  onComplete?: () => void;
}

export const ParagraphView: React.FC<Props> = ({ payload, onProgress }) => {
  const { t_content } = useLanguageContent();
  const blocks = payload?.paragraphs ?? [];
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Scroll-based completion handled by parent
    onProgress?.(0);
  }, [onProgress]);

  if (blocks.length === 0) {
    const fallbackText = payload?.text || payload?.instruction;
    if (!fallbackText) return null;
    return (
      <div className="w-full flex flex-col gap-4">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 p-4">
          <p
            className="font-arabic-semibold text-xl text-neutral-800 dark:text-neutral-100 text-right leading-8"
            dir="rtl"
          >
            {fallbackText}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {payload?.instruction && (
        <div className="rounded-xl bg-primary-50 dark:bg-primary-900/30 p-3">
          <p className="font-english text-sm text-primary-700 dark:text-primary-200 text-center">
            {t_content(payload.instruction, payload.instructionBn)}
          </p>
        </div>
      )}

      {blocks.map((block, bi) => (
        <div key={bi} className="flex flex-col gap-3">
          {/* Block title */}
          {block.title && (
            <div className="flex flex-col items-center gap-1">
              <span className="font-arabic-semibold text-2xl text-primary-700 dark:text-primary-200 text-center">
                {block.title}
              </span>
              {(() => {
                const titleLocalized = block.titleEn
                  ? t_content(block.titleEn, block.titleBn)
                  : block.titleBn;
                return titleLocalized ? (
                  <span className="font-english text-sm text-neutral-600 dark:text-neutral-300 text-center">
                    {titleLocalized}
                  </span>
                ) : null;
              })()}
            </div>
          )}

          {/* Paragraph lines */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 p-4 flex flex-col gap-3">
            {block.lines.map((line, li) => (
              <p
                key={li}
                className="font-arabic-semibold text-xl text-neutral-800 dark:text-neutral-100 text-right leading-8 m-0"
                dir="rtl"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Reveal translation button + English translation (hidden by default) */}
          {(() => {
            const translationText = block.translationEn
              ? t_content(block.translationEn, block.translationBn)
              : block.translationBn;
            return translationText ? (
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setRevealed((prev) => ({ ...prev, [bi]: !prev[bi] }))}
                  className="w-full rounded-2xl border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/30 p-4 flex items-center justify-center cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-800/40 transition-colors"
                >
                  <span className="font-english text-base font-semibold text-primary-800 dark:text-primary-100">
                    {revealed[bi]
                      ? m['paragraph.hideTranslation']?.() ?? 'Hide Translation'
                      : m['paragraph.revealTranslation']?.() ?? 'Reveal Translation'}
                  </span>
                </button>

                {revealed[bi] && (
                  <div className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 p-4">
                    <p className="font-english text-base text-neutral-700 dark:text-neutral-200 leading-7 m-0">
                      {translationText}
                    </p>
                  </div>
                )}
              </div>
            ) : null;
          })()}

          {/* Divider between blocks */}
          {bi < blocks.length - 1 && (
            <div className="h-px bg-neutral-200 dark:bg-neutral-700 mt-1 w-full" />
          )}
        </div>
      ))}
    </div>
  );
};

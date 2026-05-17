import React from 'react';
import type { GrammarRule } from '@tariq/shared';
import * as m from '#/paraglide/messages.js';
import { useLanguageContent } from '../../hooks/useLanguageContent';

interface Props {
  payload?: any;
}

export const GrammarRuleView: React.FC<Props> = ({ payload }) => {
  const { t_content } = useLanguageContent();
  const rules: GrammarRule[] = payload?.rules || [];

  return (
    <div className="w-full">
      <div className="flex flex-row items-center mb-4 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary-500"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        <span className="font-english text-base font-semibold text-neutral-800 dark:text-neutral-100">
          {m['chunk.grammarFocus']?.() ?? 'Grammar Focus'}
        </span>
      </div>

      {rules.map((rule, i) => {
        const isFirst = i === 0;
        const labelText = rule.labelBn ? rule.labelBn : rule.label.toUpperCase();

        return (
          <div
            key={i}
            className={`mb-4 p-4 rounded-xl border ${
              isFirst
                ? 'bg-[#ECFDF8] dark:bg-primary-900/40 border-[#A7F3DE] dark:border-primary-800'
                : 'bg-neutral-100 dark:bg-neutral-800/40 border-neutral-200 dark:border-neutral-700'
            }`}
          >
            <div
              className={`font-english text-xs font-medium mb-2 tracking-wide ${
                isFirst
                  ? 'text-primary-700 dark:text-primary-400'
                  : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {labelText}
            </div>

            <div className="flex flex-col items-center mb-3">
              <span
                className={`font-arabic-semibold text-3xl mb-1.5 ${
                  isFirst
                    ? 'text-primary-700 dark:text-primary-400'
                    : 'text-neutral-700 dark:text-neutral-300'
                }`}
                dir="rtl"
              >
                {rule.arabic}
              </span>
              <span className="font-english text-base font-semibold text-neutral-800 dark:text-neutral-100">
                {rule.romanized}
              </span>
              <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 text-center">
                {t_content(rule.meaning, rule.meaningBn)}
              </span>
            </div>

            {rule.examples?.map((ex, j) => (
              <div
                key={j}
                className={`border-t border-neutral-200 dark:border-neutral-700 pt-2.5 ${
                  j === 0 ? 'mt-0' : 'mt-2'
                }`}
              >
                <div
                  className={`font-arabic-semibold text-lg text-right ${
                    isFirst
                      ? 'text-primary-700 dark:text-primary-400'
                      : 'text-neutral-700 dark:text-neutral-300'
                  }`}
                  dir="rtl"
                >
                  {ex.ar}
                </div>
                <div className="font-english text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 text-right sm:text-left">
                  {t_content(ex.en, ex.bn)}
                </div>
              </div>
            ))}
          </div>
        );
      })}

      <div className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center mt-2 italic">
        {m['chunk.studyThenContinue']?.() ?? 'Review these rules, then continue'}
      </div>
    </div>
  );
};

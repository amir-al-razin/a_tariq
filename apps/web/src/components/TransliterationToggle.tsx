import React from 'react';
import { useLearningSettingsStore } from '@/state/learningSettingsStore';

interface TransliterationToggleProps {
  className?: string;
  compact?: boolean;
}

export const TransliterationToggle: React.FC<TransliterationToggleProps> = ({
  className = '',
  compact = false,
}) => {
  const { showTransliteration, toggleTransliteration } = useLearningSettingsStore();

  return (
    <button
      onClick={toggleTransliteration}
      className={`h-9 rounded-full px-3 flex items-center gap-1.5 transition-colors cursor-pointer select-none text-xs font-english-semibold shadow-none border-0 ${
        showTransliteration
          ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
          : 'bg-neutral-100 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-500'
      } ${className}`}
      title={`Transliteration is ${showTransliteration ? 'ON' : 'OFF'}. Click to toggle.`}
      aria-label="Toggle Transliteration"
    >
      <span className="font-mono font-bold tracking-tight text-[11px]">Aa</span>
      {!compact && (
        <span className="hidden sm:inline text-[11px]">
          {showTransliteration ? 'TR ON' : 'TR OFF'}
        </span>
      )}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          showTransliteration ? 'bg-accent-primary' : 'bg-neutral-300 dark:bg-neutral-700'
        }`}
      />
    </button>
  );
};

export default TransliterationToggle;

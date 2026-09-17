import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, RotateCcw } from 'lucide-react';

export type WordChipState = 'idle' | 'selected' | 'placed' | 'correct' | 'error';

export interface WordChipProps {
  arabic: string;
  transliteration?: string;
  translation?: string;
  state?: WordChipState;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const WORD_CHIP_STATES: Record<WordChipState, string> = {
  idle: 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 active:scale-95',
  selected: 'bg-accent-primary text-white scale-[1.02]',
  placed: 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 opacity-40 cursor-default',
  correct: 'bg-emerald-600/90 text-white',
  error: 'bg-rose-500/20 text-rose-800 dark:text-rose-200 animate-shake',
};

export const WordChip: React.FC<WordChipProps> = ({
  arabic,
  transliteration,
  translation,
  state = 'idle',
  onClick,
  disabled = false,
  className = '',
}) => {
  const isInteractive = !disabled && state !== 'placed';

  return (
    <motion.button
      type="button"
      disabled={!isInteractive}
      onClick={isInteractive ? onClick : undefined}
      whileTap={isInteractive ? { scale: 0.95 } : undefined}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      className={`inline-flex flex-col items-center justify-center px-6 py-3.5 rounded-3xl transition-colors cursor-pointer select-none outline-none border-0 shadow-none ${
        WORD_CHIP_STATES[state]
      } ${disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''} ${className}`}
    >
      <span className="font-arabic font-extrabold text-3xl sm:text-4xl leading-[2.2]" dir="rtl">
        {arabic}
      </span>
      {transliteration && (
        <span className="text-xs font-english-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {transliteration}
        </span>
      )}
      {translation && (
        <span className="text-xs font-english-bold mt-1 text-neutral-800 dark:text-neutral-200">
          {translation}
        </span>
      )}
    </motion.button>
  );
};

export interface WordAssemblySlotProps {
  word?: {
    arabic: string;
    translation?: string;
  };
  placeholder?: string;
  onRemove?: () => void;
  className?: string;
}

export const WordAssemblySlot: React.FC<WordAssemblySlotProps> = ({
  word,
  placeholder = '...',
  onRemove,
  className = '',
}) => {
  return (
    <div
      onClick={word && onRemove ? onRemove : undefined}
      className={`min-w-28 min-h-18 px-5 py-3.5 rounded-3xl flex flex-col items-center justify-center transition-all ${
        word
          ? 'bg-accent-primary-subtle text-accent-primary-text cursor-pointer hover:bg-accent-primary-hover/20'
          : 'border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-400'
      } ${className}`}
    >
      {word ? (
        <>
          <span className="font-arabic font-extrabold text-2xl sm:text-3xl" dir="rtl">
            {word.arabic}
          </span>
          {word.translation && (
            <span className="text-xs font-english-bold mt-0.5 opacity-90">
              {word.translation}
            </span>
          )}
        </>
      ) : (
        <span className="text-sm font-mono font-bold opacity-60">{placeholder}</span>
      )}
    </div>
  );
};

export interface DemonstrativeBadgeProps {
  arabic: string;
  type: 'near' | 'far';
  meaning: string;
  variant?: 'sovereign' | 'accent';
  className?: string;
}

export const DemonstrativeBadge: React.FC<DemonstrativeBadgeProps> = ({
  arabic,
  type,
  meaning,
  variant = 'accent',
  className = '',
}) => {
  const bgClass =
    variant === 'accent'
      ? 'bg-accent-primary text-white'
      : 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950';

  return (
    <div
      className={`price-tag-rtl rounded-r-3xl ${bgClass} px-6 py-3 inline-flex items-center gap-4 select-none ${className}`}
    >
      <div className="space-y-0.5 text-right">
        <span className="font-arabic font-extrabold text-2xl sm:text-3xl block" dir="rtl">
          {arabic}
        </span>
        <span className="text-xs font-english-bold uppercase tracking-wider opacity-85 block">
          {type === 'near' ? 'Near (Qareeb)' : 'Far (Baeed)'} · {meaning}
        </span>
      </div>
    </div>
  );
};

export interface AudioButtonProps {
  onClick?: () => void;
  isPlaying?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  onClick,
  isPlaying = false,
  size = 'md',
  label = 'Pronounce',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }[size];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      whileTap={{ scale: 0.92 }}
      className={`relative rounded-full flex items-center justify-center transition-all cursor-pointer outline-none ${sizeClasses} ${
        isPlaying
          ? 'bg-accent-primary text-white'
          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/80 dark:hover:bg-neutral-700'
      } ${className}`}
    >
      {isPlaying ? (
        <div className="flex items-center gap-0.5">
          <motion.span
            animate={{ height: ['4px', '14px', '4px'] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
            className="w-1 bg-white rounded-full"
          />
          <motion.span
            animate={{ height: ['8px', '18px', '6px'] }}
            transition={{ repeat: Infinity, duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
            className="w-1 bg-white rounded-full"
          />
          <motion.span
            animate={{ height: ['4px', '12px', '4px'] }}
            transition={{ repeat: Infinity, duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
            className="w-1 bg-white rounded-full"
          />
        </div>
      ) : (
        <Volume2 size={size === 'sm' ? 14 : size === 'md' ? 18 : 22} />
      )}
    </motion.button>
  );
};

export interface FlashcardProps {
  arabic: string;
  transliteration: string;
  translation: string;
  rootLetters?: string[];
  grammaticalNote?: string;
  className?: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({
  arabic,
  transliteration,
  translation,
  rootLetters,
  grammaticalNote,
  className = '',
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`w-full max-w-sm h-64 rounded-[32px] p-6 bg-neutral-100 dark:bg-neutral-900 cursor-pointer select-none transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between font-english relative overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest text-accent-primary font-bold">
          {flipped ? 'Definition & Root' : 'Vocabulary Flashcard'}
        </span>
        <span className="p-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-400">
          <RotateCcw size={14} />
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-2">
        {!flipped ? (
          <>
            <span className="font-arabic font-extrabold text-5xl sm:text-6xl leading-loose text-neutral-950 dark:text-white" dir="rtl">
              {arabic}
            </span>
            <span className="text-base font-english-bold text-neutral-500 dark:text-neutral-400">
              {transliteration}
            </span>
          </>
        ) : (
          <div className="space-y-3">
            <span className="text-2xl sm:text-3xl font-english-black text-neutral-950 dark:text-white block tracking-tight">
              {translation}
            </span>
            {rootLetters && (
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-english-bold text-neutral-400 uppercase tracking-wider">Root:</span>
                <div className="flex items-center gap-1.5">
                  {rootLetters.map((letter, i) => (
                    <span
                      key={i}
                      className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-800 font-arabic text-xl font-bold flex items-center justify-center shadow-none"
                      dir="rtl"
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {grammaticalNote && (
              <p className="text-xs font-english-medium text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
                {grammaticalNote}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="text-center text-xs font-english-bold text-neutral-400 uppercase tracking-wider">
        Tap to {flipped ? 'see Arabic' : 'reveal meaning'}
      </div>
    </div>
  );
};

export interface TarkeebNodeProps {
  role: string;
  arabicRole: string;
  word: string;
  harakahState: 'Marfoo' | 'Mansub' | 'Majroor' | 'Majzoom';
  className?: string;
}

export const TarkeebNode: React.FC<TarkeebNodeProps> = ({
  role,
  arabicRole,
  word,
  harakahState,
  className = '',
}) => {
  const harakahColor = {
    Marfoo: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 ring-2 ring-emerald-500/30',
    Mansub: 'bg-accent-primary-subtle text-accent-primary-text ring-2 ring-accent-primary/30',
    Majroor: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 ring-2 ring-amber-500/30',
    Majzoom: 'bg-rose-500/15 text-rose-800 dark:text-rose-300 ring-2 ring-rose-500/30',
  }[harakahState];

  return (
    <div
      className={`p-5 rounded-3xl bg-neutral-200/60 dark:bg-neutral-800 flex flex-col items-center text-center space-y-2 font-english ${className}`}
    >
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
        {role}
      </span>
      <span className="text-base font-arabic font-bold text-neutral-500" dir="rtl">
        {arabicRole}
      </span>
      <span className="font-arabic font-extrabold text-3xl sm:text-4xl text-neutral-950 dark:text-white py-1" dir="rtl">
        {word}
      </span>
      <span className={`px-3 py-1 rounded-full text-xs font-english-bold ${harakahColor}`}>
        {harakahState}
      </span>
    </div>
  );
};

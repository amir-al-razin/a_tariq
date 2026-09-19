import React from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import type { ItemRetention } from '@/state/retentionStore';
import { useLanguage } from '@/hooks/useLanguage';
import { playArabicAudio } from '@/lib/arabicAudio';
import { playTapSound } from '@/lib/sound';

interface WordCardProps {
  item: ItemRetention;
  rootFamily?: string;
  quranOccurrences?: number;
}

export const WordCard: React.FC<WordCardProps> = ({
  item,
  rootFamily,
  quranOccurrences,
}) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTapSound();
    playArabicAudio(item.arabic);
  };

  const isMastered = item.box >= 4;
  const isDue = Date.now() >= item.nextReviewDue;
  const meaning = isBn ? item.meaningBn || item.meaningEn : item.meaningEn;

  return (
    <div className="group relative bg-neutral-100/80 dark:bg-neutral-900/80 hover:bg-neutral-200/50 dark:hover:bg-neutral-850 rounded-3xl p-6 transition-all duration-200 flex flex-col justify-between min-h-[190px]">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Subtle Leitner Level Pill */}
          <span
            className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
              isMastered
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                : 'bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
            }`}
          >
            {isMastered ? (isBn ? 'আয়ত্তাধীন' : 'Mastered') : `${isBn ? 'বক্স' : 'Box'} ${item.box}`}
          </span>

          {/* Due Indicator */}
          {isDue && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
              {isBn ? 'রিভিউ বাকি' : 'Due'}
            </span>
          )}
        </div>

        {/* Audio Speaker Button */}
        <button
          type="button"
          onClick={handleAudio}
          className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          title={isBn ? 'উচ্চারণ শুনুন' : 'Pronounce word'}
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Arabic Typography */}
      <div className="my-3 text-center" dir="rtl">
        <span className="font-arabic text-3xl font-bold text-neutral-950 dark:text-neutral-50 tracking-normal leading-loose select-all inline-block">
          {item.arabic}
        </span>
      </div>

      {/* Single Script Translation */}
      <div className="text-center">
        <p className={`text-sm font-medium text-neutral-700 dark:text-neutral-300 ${isBn ? 'font-bangla' : 'font-english'}`}>
          {meaning}
        </p>

        {/* Optional Root & Quran Metadata */}
        {(rootFamily || (quranOccurrences !== undefined && quranOccurrences > 0)) && (
          <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-neutral-500 dark:text-neutral-400">
            {rootFamily && (
              <span className="font-arabic font-medium">
                {isBn ? 'মূল' : 'Root'}: {rootFamily}
              </span>
            )}
            {quranOccurrences !== undefined && quranOccurrences > 0 && (
              <span className="flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3 text-neutral-400" />
                {quranOccurrences}x
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

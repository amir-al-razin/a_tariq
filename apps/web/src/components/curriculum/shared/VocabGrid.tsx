import { useState } from 'react';
import { audioService } from '@/lib/audioService';

export interface VocabItem {
  id: number;
  ar: string;
  en: string;
  roman?: string;
}

interface VocabGridProps {
  items: VocabItem[];
  audioEnabled: boolean;
}

export function VocabGrid({ items, audioEnabled }: VocabGridProps) {
  const [revealedVocab, setRevealedVocab] = useState<Record<number, boolean>>({});

  const handleTapVocab = (item: VocabItem) => {
    audioService.speakArabic(item.ar, audioEnabled);
    setRevealedVocab((prev) => ({ ...prev, [item.id]: true }));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {items.map((v, idx) => {
        const isTapped = revealedVocab[v.id];
        return (
          <div 
            key={v.id} 
            onClick={() => handleTapVocab(v)}
            className="bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 active:scale-95 transition-all p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between items-center text-center cursor-pointer min-h-[140px] sm:min-h-[175px]"
          >
            <div className="w-full flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                Card {String(idx + 1).padStart(2, '0')}
              </span>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                isTapped 
                  ? 'border-green-500 bg-green-500 dark:border-green-400 dark:bg-green-400' 
                  : 'border-neutral-300 dark:border-neutral-600'
              }`}>
                {isTapped && <svg className="w-2.5 h-2.5 text-white dark:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
              </div>
            </div>

            <div className="my-2">
              <span className="font-arabic text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">{v.ar}</span>
            </div>

            <div className="w-full pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
              <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 block font-sans">{v.en}</span>
              {isTapped && v.roman && (
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">{v.roman}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

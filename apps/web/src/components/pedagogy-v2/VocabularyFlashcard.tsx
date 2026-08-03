import { audioService } from '@/lib/audioService';


export interface VocabItem {
  id: number;
  ar: string;
  roman: string;
  en: string;
  emoji?: string;
}

export interface VocabularyFlashcardProps {
  item: VocabItem;
  index: number;
  isRevealed?: boolean;
  audioEnabled?: boolean;
  onTap?: (item: VocabItem) => void;
  className?: string;
}

export function VocabularyFlashcard({
  item,
  index,
  isRevealed = false,
  audioEnabled = true,
  onTap,
  className = '',
}: VocabularyFlashcardProps) {
  const handleClick = () => {
    audioService.speakArabic(item.ar, audioEnabled);
    if (onTap) {
      onTap(item);
    }
  };

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div
      onClick={handleClick}
      className={`bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 active:scale-95 transition-all p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between items-center text-center cursor-pointer min-h-[140px] sm:min-h-[175px] ${className}`}
    >
      <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
        <span>Card {formattedIndex}</span>
        <span className={isRevealed ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
          {isRevealed ? '✓' : ''}
        </span>
      </div>

      <div className="my-2">
        <span className="font-arabic text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 block">
          {item.ar}
        </span>
      </div>

      <div className="w-full pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
        <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 block font-sans">
          {item.en}
        </span>
        {isRevealed && (
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">
            {item.roman}
          </span>
        )}
      </div>
    </div>
  );
}

import { audioService } from '@/lib/audioService';

export interface PointerDrillItem {
  id: number;
  ar: string;
  emoji: string;
  distance: 'near' | 'far';
}

interface PointerDrillListProps {
  items: PointerDrillItem[];
  audioEnabled: boolean;
}

export function PointerDrillList({ items, audioEnabled }: PointerDrillListProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div 
          key={item.id} 
          onClick={() => audioService.speakArabic(item.ar, audioEnabled)}
          className="bg-neutral-100 dark:bg-neutral-900 p-3 sm:p-4 rounded-2xl sm:rounded-3xl flex items-center justify-between group hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 transition-colors cursor-pointer" 
          dir="rtl"
        >
          <div className="px-4 py-2 sm:px-6 sm:py-3.5 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 shrink-0 rounded-r-xl sm:rounded-r-2xl price-tag-rtl transition-colors max-w-[65%]">
            <span className="font-arabic text-lg sm:text-2xl font-bold break-words leading-tight">{item.ar}</span>
          </div>
          <div className={`flex-1 flex items-center ${item.distance === 'near' ? 'justify-start pr-3 sm:pr-6' : 'justify-end pl-3 sm:pl-6'}`}>
            {item.distance === 'near' ? (
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 sm:w-12 h-0.5 bg-neutral-300 dark:bg-neutral-700" />
                <span className="text-3xl sm:text-4xl transition-transform group-hover:scale-110">{item.emoji}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3 w-full justify-end">
                <div className="flex-1 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-2 sm:mx-4" />
                <span className="text-2xl sm:text-3xl opacity-60 transition-transform group-hover:scale-110">{item.emoji}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';
import { Volume2, ArrowLeft } from 'lucide-react';
import { audioService } from '@/lib/audioService';

interface VocativeItem {
  id: number;
  orig: string;
  voc: string;
  en: string;
  note: string;
}

const VOCATIVE_ITEMS: VocativeItem[] = [
  { id: 1, orig: 'وَلَدٌ', voc: 'يَا وَلَدُ !', en: 'O boy!', note: 'Tanween Dammah drops to single Dammah' },
  { id: 2, orig: 'بِنْتٌ', voc: 'يَا بِنْتُ !', en: 'O girl!', note: 'Tanween Dammah drops to single Dammah' },
  { id: 3, orig: 'بِلَالٌ', voc: 'يَا بِلَالُ !', en: 'O Belal!', note: 'Proper masculine name drops Tanween' },
  { id: 4, orig: 'زَيْنَبُ', voc: 'يَا زَيْنَبُ !', en: 'O Zaynab!', note: 'Diptote name preserves single Dammah' },
  { id: 5, orig: 'مُعَلِّمٌ', voc: 'يَا مُعَلِّمُ !', en: 'O teacher!', note: 'Vocative noun becomes Mabni on Dammah' },
  { id: 6, orig: 'تِلْمِيْذٌ', voc: 'يَا تِلْمِيْذُ !', en: 'O student!', note: 'Drops Tanween upon direct address' },
];

export function VocativeParticleComp() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleSpeak = (text: string, id: number) => {
    setActiveItem(id);
    audioService.speakArabic(text, true);
  };

  return (
    <section id="comp-15" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 15
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Vocative Particle Transformer (يَا + المُنَادَى المُفْرَد)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 31
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-neutral-800 text-center">
        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-english-medium">
          When directly addressing someone with the vocative particle <span className="font-arabic font-extrabold text-xl px-1 text-accent-primary">يَا</span> (O / Hey), the singular addressed noun (المُنَادَى المُفْرَدُ) sheds its Tanween and becomes fixed upon a <strong className="text-neutral-950 dark:text-white">single Dammah (ـُ)</strong>.
        </p>
      </div>

      {/* Grid of transformation cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" dir="rtl">
        {VOCATIVE_ITEMS.map((item) => {
          const isSelected = activeItem === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleSpeak(item.voc, item.id)}
              className={`p-5 rounded-2xl sm:rounded-3xl cursor-pointer select-none transition-all flex flex-col justify-between items-center text-center space-y-3 ${
                isSelected
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 scale-[1.02]'
                  : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
              }`}
            >
              <div className="flex items-center justify-center gap-3 w-full my-1">
                <span className={`font-arabic text-xl sm:text-2xl ${isSelected ? 'opacity-60' : 'text-neutral-400'}`}>
                  {item.orig}
                </span>
                <ArrowLeft size={16} className={isSelected ? 'text-accent-primary-hover' : 'text-accent-primary'} />
                <span className="font-arabic font-extrabold text-2xl sm:text-3xl leading-[2.2] tracking-normal">
                  {item.voc}
                </span>
              </div>

              <div className="w-full pt-2 border-t border-neutral-100 dark:border-neutral-700/60" dir="ltr">
                <div className={`text-xs sm:text-sm font-english-bold ${isSelected ? 'text-neutral-200 dark:text-neutral-700' : 'text-neutral-700 dark:text-neutral-300'}`}>
                  {item.en}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {item.note}
                </div>
              </div>

              <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-accent-primary" dir="ltr">
                <Volume2 size={12} />
                <span>Tap to pronounce</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

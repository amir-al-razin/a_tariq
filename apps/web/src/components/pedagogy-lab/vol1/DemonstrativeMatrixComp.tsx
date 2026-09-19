import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

export function DemonstrativeMatrixComp() {
  const [activeCell, setActiveCell] = useState<string | null>(null);

  const cells = [
    {
      id: 'near_base',
      ar: 'هٰذَا - هٰذِهِ',
      en: 'This (Near Distance)',
      speak: 'هٰذَا',
      detail: 'هٰذَا (Masc.) · هٰذِهِ (Fem.)',
    },
    {
      id: 'far_base',
      ar: 'ذٰلِكَ - تِلْكَ',
      en: 'That (Far Distance)',
      speak: 'ذٰلِكَ',
      detail: 'ذٰلِكَ (Masc.) · تِلْكَ (Fem.)',
    },
    {
      id: 'near_example',
      ar: 'هٰذَا كِتَابٌ',
      en: 'This is a book',
      speak: 'هٰذَا كِتَابٌ',
      detail: 'Near Demonstrative + Indefinite Noun',
    },
    {
      id: 'far_example',
      ar: 'ذٰلِكَ قَلَمٌ',
      en: 'That is a pen',
      speak: 'ذٰلِكَ قَلَمٌ',
      detail: 'Far Demonstrative + Indefinite Noun',
    },
  ];

  const handleCellClick = (cell: typeof cells[0]) => {
    setActiveCell(cell.id);
    audioService.speakArabic(cell.speak, true);
  };

  return (
    <section id="comp-2" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 02
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Demonstrative Binary Matrix (هٰذَا / ذٰلِكَ)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 15
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Tap any quadrant to hear native pronunciation. Contrasts near deictic pointers (هٰذَا / هٰذِهِ) against far deictic pointers (ذٰلِكَ / تِلْكَ) and basic nominal predications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="rtl">
        {cells.map((cell) => {
          const isSelected = activeCell === cell.id;
          return (
            <div
              key={cell.id}
              onClick={() => handleCellClick(cell)}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl cursor-pointer text-center select-none transition-all ${
                isSelected
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 scale-[1.01]'
                  : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
              }`}
            >
              <div className="flex justify-between items-center mb-2" dir="ltr">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'opacity-70' : 'text-neutral-400'}`}>
                  {cell.detail}
                </span>
                <div className={`p-1 rounded-full ${isSelected ? 'bg-white/20 dark:bg-black/20' : 'bg-neutral-100 dark:bg-neutral-700'}`}>
                  <Volume2 size={14} />
                </div>
              </div>

              <div className="my-3">
                <span className="font-arabic font-extrabold text-3xl sm:text-4xl block leading-[2.2] tracking-normal" dir="rtl">
                  {cell.ar}
                </span>
              </div>

              <div className="pt-2" dir="ltr">
                <span className={`text-xs sm:text-sm font-english-bold block ${isSelected ? 'text-neutral-200 dark:text-neutral-700' : 'text-neutral-600 dark:text-neutral-400'}`}>
                  {cell.en}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

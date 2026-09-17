import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

interface DescribedPointerItem {
  id: number;
  ar: string;
  en: string;
  pointer: string;
  noun: string;
  adjective: string;
  distance: 'near' | 'far';
  gender: 'Masc' | 'Fem';
  emoji: string;
}

const DESCRIBED_POINTER_DATA: DescribedPointerItem[] = [
  {
    id: 1,
    ar: 'هَذَا كِتَابٌ جَدِيدٌ',
    en: 'This is a new book',
    pointer: 'هَذَا',
    noun: 'كِتَابٌ',
    adjective: 'جَدِيدٌ',
    distance: 'near',
    gender: 'Masc',
    emoji: '📖',
  },
  {
    id: 2,
    ar: 'تِلْكَ سَاعَةٌ جَدِيدَةٌ',
    en: 'That is a new clock',
    pointer: 'تِلْكَ',
    noun: 'سَاعَةٌ',
    adjective: 'جَدِيدَةٌ',
    distance: 'far',
    gender: 'Fem',
    emoji: '⌚',
  },
  {
    id: 3,
    ar: 'ذَلِكَ عَلَمٌ جَمِيلٌ',
    en: 'That is a beautiful flag',
    pointer: 'ذَلِكَ',
    noun: 'عَلَمٌ',
    adjective: 'جَمِيلٌ',
    distance: 'far',
    gender: 'Masc',
    emoji: '🎌',
  },
  {
    id: 4,
    ar: 'هَذِهِ مِرْوَحَةٌ جَيِّدَةٌ',
    en: 'This is a good fan',
    pointer: 'هَذِهِ',
    noun: 'مِرْوَحَةٌ',
    adjective: 'جَيِّدَةٌ',
    distance: 'near',
    gender: 'Fem',
    emoji: '🪭',
  },
  {
    id: 5,
    ar: 'تِلْكَ حَقِيبَةٌ صَغِيرَةٌ',
    en: 'That is a small bag',
    pointer: 'تِلْكَ',
    noun: 'حَقِيبَةٌ',
    adjective: 'صَغِيرَةٌ',
    distance: 'far',
    gender: 'Fem',
    emoji: '🎒',
  },
  {
    id: 6,
    ar: 'هَذَا بَيْتٌ صَغِيرٌ',
    en: 'This is a small house',
    pointer: 'هَذَا',
    noun: 'بَيْتٌ',
    adjective: 'صَغِيرٌ',
    distance: 'near',
    gender: 'Masc',
    emoji: '🏠',
  },
  {
    id: 7,
    ar: 'ذَلِكَ مَسْجِدٌ كَبِيرٌ',
    en: 'That is a big mosque',
    pointer: 'ذَلِكَ',
    noun: 'مَسْجِدٌ',
    adjective: 'كَبِيرٌ',
    distance: 'far',
    gender: 'Masc',
    emoji: '🕌',
  },
  {
    id: 8,
    ar: 'هَذِهِ مِظَلَّةٌ قَدِيمَةٌ',
    en: 'This is an old umbrella',
    pointer: 'هَذِهِ',
    noun: 'مِظَلَّةٌ',
    adjective: 'قَدِيمَةٌ',
    distance: 'near',
    gender: 'Fem',
    emoji: '☂️',
  },
];

export function DescribedPointerComp() {
  const [selectedId, setSelectedId] = useState<number>(1);

  const activeItem = DESCRIBED_POINTER_DATA.find((i) => i.id === selectedId) || DESCRIBED_POINTER_DATA[0];

  const handleSelect = (item: DescribedPointerItem) => {
    setSelectedId(item.id);
    audioService.speakArabic(item.ar, true);
  };

  return (
    <section id="comp-8" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 08
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Demonstrative Described Phrase (Pointer + Noun + Adjective)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 22
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Combines spatial deictic pointers with noun-adjective pairs. Syntactically decomposes the clause into: Pointer (مُبْتَدَأٌ) + Described Noun (مَوْصُوفٌ) + Adjective (صِفَةٌ).
      </p>

      {/* Syntax Inspector Well */}
      <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60" dir="rtl">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{activeItem.emoji}</span>
            <div>
              <span className="font-arabic font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-white block leading-[2.2] tracking-normal">
                {activeItem.ar}
              </span>
              <span className="text-xs font-english-bold text-neutral-500 dark:text-neutral-400 block" dir="ltr">
                {activeItem.en} • {activeItem.distance === 'near' ? 'Near Distance' : 'Far Distance'} • {activeItem.gender}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => audioService.speakArabic(activeItem.ar, true)}
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            dir="ltr"
          >
            <Volume2 size={18} />
          </button>
        </div>

        {/* 3-Tier Syntactic Breakdown */}
        <div className="grid grid-cols-3 gap-3 text-center" dir="rtl">
          <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block" dir="ltr">
              1. Pointer (إِشَارَة)
            </span>
            <span className="font-arabic font-extrabold text-2xl sm:text-3xl text-accent-primary block leading-[2.2]">
              {activeItem.pointer}
            </span>
            <span className="text-[11px] font-english-medium text-neutral-500 block" dir="ltr">
              {activeItem.distance === 'near' ? 'Near' : 'Far'}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block" dir="ltr">
              2. Noun (مَوْصُوف)
            </span>
            <span className="font-arabic font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white block leading-[2.2]">
              {activeItem.noun}
            </span>
            <span className="text-[11px] font-english-medium text-neutral-500 block" dir="ltr">
              Head Noun
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block" dir="ltr">
              3. Adjective (صِفَة)
            </span>
            <span className="font-arabic font-extrabold text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 block leading-[2.2]">
              {activeItem.adjective}
            </span>
            <span className="text-[11px] font-english-medium text-neutral-500 block" dir="ltr">
              Concordant
            </span>
          </div>
        </div>

        {/* Phrase Selector Carousel/Grid */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 text-center">
            Tap a sentence to inspect its syntactic layers
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" dir="rtl">
            {DESCRIBED_POINTER_DATA.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`p-3 rounded-2xl text-center transition-all cursor-pointer select-none outline-none ${
                    isSelected
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                  }`}
                >
                  <span className="text-xl block mb-0.5">{item.emoji}</span>
                  <span className="font-arabic font-bold text-lg block leading-[2.2]">
                    {item.ar}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

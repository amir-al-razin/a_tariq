import { useState } from 'react';
import { audioService } from '@/lib/audioService';
import { DemonstrativeBadge } from '@/components/pedagogy-v2/DemonstrativeBadge';

export interface PointerSentenceItem {
  id: number;
  ar: string;
  en: string;
  distance: 'near' | 'far';
  emoji: string;
}

const POINTER_DATA: Record<'masculine' | 'feminine', PointerSentenceItem[]> = {
  masculine: [
    { id: 1, ar: 'هٰذَا كِتَابٌ', en: 'This is a book', distance: 'near', emoji: '📖' },
    { id: 2, ar: 'ذٰلِكَ قَلَمٌ', en: 'That is a pen', distance: 'far', emoji: '🖊️' },
    { id: 3, ar: 'هٰذَا مَسْجِدٌ', en: 'This is a mosque', distance: 'near', emoji: '🕌' },
    { id: 4, ar: 'ذٰلِكَ بَيْتٌ', en: 'That is a house', distance: 'far', emoji: '🏠' },
    { id: 5, ar: 'هٰذَا بَابٌ', en: 'This is a door', distance: 'near', emoji: '🚪' },
    { id: 6, ar: 'ذٰلِكَ مِصْبَاحٌ', en: 'That is a lamp', distance: 'far', emoji: '💡' },
    { id: 7, ar: 'هٰذَا جِدَارٌ', en: 'This is a wall', distance: 'near', emoji: '🧱' },
    { id: 8, ar: 'ذٰلِكَ كُرْسِيٌّ', en: 'That is a chair', distance: 'far', emoji: '🪑' },
  ],
  feminine: [
    { id: 9, ar: 'هٰذِهِ مَدْرَسَةٌ', en: 'This is a school', distance: 'near', emoji: '🏫' },
    { id: 10, ar: 'تِلْكَ سَبُّوْرَةٌ', en: 'That is a blackboard', distance: 'far', emoji: '🖥️' },
    { id: 11, ar: 'هٰذِهِ حُجْرَةٌ', en: 'This is a room', distance: 'near', emoji: '🚪' },
    { id: 12, ar: 'تِلْكَ حَقِيْبَةٌ', en: 'That is a bag', distance: 'far', emoji: '🎒' },
    { id: 13, ar: 'هٰذِهِ كُرَّاسَةٌ', en: 'This is a notebook', distance: 'near', emoji: '📓' },
    { id: 14, ar: 'تِلْكَ طَاوِلَةٌ', en: 'That is a table', distance: 'far', emoji: '🪵' },
    { id: 15, ar: 'هٰذِهِ مِسْطَرَةٌ', en: 'This is a ruler', distance: 'near', emoji: '📏' },
    { id: 16, ar: 'تِلْكَ نَافِذَةٌ', en: 'That is a window', distance: 'far', emoji: '🪟' },
  ],
};

export function SpatialPointerComp() {
  const [filter, setFilter] = useState<'all' | 'masculine' | 'feminine'>('all');

  const items =
    filter === 'all'
      ? [...POINTER_DATA.masculine.slice(0, 4), ...POINTER_DATA.feminine.slice(0, 4)]
      : filter === 'masculine'
      ? POINTER_DATA.masculine
      : POINTER_DATA.feminine;

  const handleSpeak = (ar: string) => {
    audioService.speakArabic(ar, true);
  };

  return (
    <section id="comp-3-drill" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Imported Drill Engine
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Pointer Drill List (Spatial Distance Pointing)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Pages 15-18
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Authentic pointer drills directly imported from Lesson 1 and 2 engines. Uses the characteristic price-tag badge shape and distance indicator lines. Tap any row to listen.
      </p>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        {(['all', 'masculine', 'feminine'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-full text-xs font-english-bold transition-all cursor-pointer ${
              filter === tab
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            {tab === 'all' ? 'All Samples' : tab === 'masculine' ? 'Masculine (هٰذَا / ذٰلِكَ)' : 'Feminine (هٰذِهِ / تِلْكَ)'}
          </button>
        ))}
      </div>

      {/* Authentic Pointer Rows in Canvas */}
      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl space-y-3">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 text-center mb-1">
          Demonstrative Pointer Rows • Authentic Directional Indicator Badges
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSpeak(item.ar)}
            className="bg-neutral-100 dark:bg-neutral-900 p-3 sm:p-4 rounded-2xl sm:rounded-3xl flex items-center justify-between group hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 transition-colors cursor-pointer select-none"
            dir="rtl"
          >
            {/* Authentic Price-Tag Demonstrative Badge */}
            <DemonstrativeBadge
              text={item.ar}
              direction="rtl"
              variant="neutral"
              className="max-w-[65%]"
              textClassName="text-xl sm:text-2xl"
            />

            {/* Distance Indicator Line + Emoji */}
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
    </section>
  );
}

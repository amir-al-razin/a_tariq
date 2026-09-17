import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

export function DeicticPointerPlaygroundComp() {
  const [pointerNear, setPointerNear] = useState(false);

  const handleSpeak = (text: string) => {
    audioService.speakArabic(text, true);
  };

  return (
    <section id="comp-3-playground" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 03 (Earlier Interactive Engine)
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Deictic Near / Far Pointer (Spatial Distance Playground)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Pages 15-16
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Original interactive spatial demonstration. Toggle between Near distance (هَٰذَا) and Far distance (ذَٰلِكَ) to see the dynamic distance vector line expand and contract in real time.
      </p>

      <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
        {/* Toggle pill */}
        <div className="inline-flex rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-1">
          <button
            type="button"
            onClick={() => setPointerNear(true)}
            className={`px-5 py-2.5 rounded-xl text-xs font-english-bold transition-all cursor-pointer ${
              pointerNear
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Near Distance (هَٰذَا)
          </button>
          <button
            type="button"
            onClick={() => setPointerNear(false)}
            className={`px-5 py-2.5 rounded-xl text-xs font-english-bold transition-all cursor-pointer ${
              !pointerNear
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Far Distance (ذَٰلِكَ)
          </button>
        </div>

        {/* Dynamic distance presentation */}
        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🖊️</span>
            <div
              className={`h-0.5 bg-neutral-400 dark:bg-neutral-600 transition-all duration-300 ${
                pointerNear ? 'w-12' : 'w-36 sm:w-48'
              }`}
            />
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">
              {pointerNear ? 'Short Distance Indicator' : 'Long Distance Line'}
            </span>
            <div className="flex items-center justify-end gap-2">
              <div
                onClick={() => handleSpeak(pointerNear ? 'هَٰذَا قَلَمٌ' : 'ذَٰلِكَ قَلَمٌ')}
                className="font-arabic text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white cursor-pointer leading-[2.2] tracking-normal"
                dir="rtl"
              >
                {pointerNear ? 'هَٰذَا قَلَمٌ' : 'ذَٰلِكَ قَلَمٌ'}
              </div>
              <button
                type="button"
                onClick={() => handleSpeak(pointerNear ? 'هَٰذَا قَلَمٌ' : 'ذَٰلِكَ قَلَمٌ')}
                className="p-2 rounded-full bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 transition-colors cursor-pointer"
                title="Pronounce"
              >
                <Volume2 size={16} />
              </button>
            </div>
            <div className="text-xs text-neutral-500 font-english-medium">
              {pointerNear ? 'This is a pen (Nearby)' : 'That is a pen (Far away)'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

export function IdafahSyntacticComp() {
  const [idafahBaseIdx, setIdafahBaseIdx] = useState(0);

  const idafahPairs = [
    { base1: 'كِتَابٌ', base2: 'اللَّهُ', result: 'كِتَابُ اللَّهِ', meaning: 'The Book of Allah' },
    { base1: 'بَيْتٌ', base2: 'الْمُدَرِّسُ', result: 'بَيْتُ الْمُدَرِّسِ', meaning: "The teacher's house" },
    { base1: 'قَلَمٌ', base2: 'الْوَلَدُ', result: 'قَلَمُ الْوَلَدِ', meaning: "The boy's pen" },
  ];

  const current = idafahPairs[idafahBaseIdx];

  const handleSpeak = (text: string) => {
    audioService.speakArabic(text, true);
  };

  return (
    <section id="comp-14-original" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 14 (Earlier Interactive Engine)
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Idafah Possession Assembler (Syntactic Compounding)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 80
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Syntactic compounding demonstration: observe the base components merge into an Idafah structure where the Mudāf sheds Tanween and the Mudāf Ilayh takes Kasrah.
      </p>

      <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
        <div className="flex justify-center gap-2 flex-wrap">
          {idafahPairs.map((p, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => {
                setIdafahBaseIdx(idx);
                handleSpeak(p.result);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all cursor-pointer ${
                idafahBaseIdx === idx
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              <span className="font-arabic text-base px-1" dir="rtl">{p.result}</span>
            </button>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 font-arabic text-2xl sm:text-3xl text-neutral-500" dir="rtl">
            <span className="p-3 rounded-2xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white leading-[2.2]">{current.base1}</span>
            <span className="font-english-extrabold text-neutral-400">+</span>
            <span className="p-3 rounded-2xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white leading-[2.2]">{current.base2}</span>
          </div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">➔ Combines into:</div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-arabic text-3xl sm:text-4xl font-bold text-accent-primary leading-[2.2] tracking-normal" dir="rtl">
              {current.result}
            </div>
            <button
              type="button"
              onClick={() => handleSpeak(current.result)}
              className="p-2 rounded-full bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 transition-colors cursor-pointer"
              title="Pronounce"
            >
              <Volume2 size={18} />
            </button>
          </div>
          <div className="text-xs text-neutral-500 font-english-medium">
            {current.meaning} • Mudaf sheds Tanween and Al; Mudaf Ilayh takes Kasrah.
          </div>
        </div>
      </div>
    </section>
  );
}

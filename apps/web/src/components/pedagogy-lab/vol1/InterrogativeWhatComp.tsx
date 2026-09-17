import { useState } from 'react';
import { audioService } from '@/lib/audioService';
import { DemonstrativeBadge } from '@/components/pedagogy-v2/DemonstrativeBadge';

export function InterrogativeWhatComp() {
  const [activePair, setActivePair] = useState<number | null>(null);

  const demoPairs = [
    {
      id: 1,
      qAr: 'مَا هٰذَا ؟',
      aAr: 'هٰذَا كِتَابٌ',
      en: 'What is this? This is a book.',
      distance: 'near',
      gender: 'Masculine',
      emoji: '📖',
    },
    {
      id: 2,
      qAr: 'مَا ذٰلِكَ ؟',
      aAr: 'ذٰلِكَ قَلَمٌ',
      en: 'What is that? That is a pen.',
      distance: 'far',
      gender: 'Masculine',
      emoji: '🖊️',
    },
    {
      id: 3,
      qAr: 'مَا هٰذِهِ ؟',
      aAr: 'هٰذِهِ مِسْطَرَةٌ',
      en: 'What is this? This is a ruler.',
      distance: 'near',
      gender: 'Feminine',
      emoji: '📏',
    },
    {
      id: 4,
      qAr: 'مَا تِلْكَ ؟',
      aAr: 'تِلْكَ سَبُّوْرَةٌ',
      en: 'What is that? That is a blackboard.',
      distance: 'far',
      gender: 'Feminine',
      emoji: '🖥️',
    },
  ];

  const handleSpeak = (text: string, id: number) => {
    setActivePair(id);
    audioService.speakArabic(text, true);
  };

  return (
    <section id="comp-4" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 04
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Interrogative What-Drill (مَا هٰذَا / مَا ذٰلِكَ)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 18
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Introduces the interrogative particle <span className="font-arabic font-bold text-base px-1">مَا</span> (What?). First review the dual gender question formula, then tap any demonstration drill row to hear the question and answer spoken sequentially.
      </p>

      {/* 2-Column Formula Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="rtl">
        <div
          onClick={() => audioService.speakArabic('مَا هٰذَا مَا هٰذِهِ', true)}
          className="bg-white dark:bg-neutral-800 p-6 rounded-2xl sm:rounded-3xl text-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-all select-none"
        >
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1" dir="ltr">
            Near Distance Question Formula
          </span>
          <span className="font-arabic font-extrabold text-3xl text-neutral-900 dark:text-white block leading-[2.2] tracking-normal">
            مَا هٰذَا - مَا هٰذِهِ
          </span>
          <span className="text-xs font-english-bold text-neutral-500 dark:text-neutral-400 block mt-2" dir="ltr">
            What is this? (Masc. / Fem.)
          </span>
        </div>

        <div
          onClick={() => audioService.speakArabic('مَا ذٰلِكَ مَا تِلْكَ', true)}
          className="bg-white dark:bg-neutral-800 p-6 rounded-2xl sm:rounded-3xl text-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-all select-none"
        >
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1" dir="ltr">
            Far Distance Question Formula
          </span>
          <span className="font-arabic font-extrabold text-3xl text-neutral-900 dark:text-white block leading-[2.2] tracking-normal">
            مَا ذٰلِكَ - مَا تِلْكَ
          </span>
          <span className="text-xs font-english-bold text-neutral-500 dark:text-neutral-400 block mt-2" dir="ltr">
            What is that? (Masc. / Fem.)
          </span>
        </div>
      </div>

      {/* Authentic Demonstration Drills with Pointed Indicator Badges */}
      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl space-y-3">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 text-center mb-1">
          Demonstration Q&amp;A Pairs • Directional Indicator Badges
        </div>
        {demoPairs.map((pair) => {
          const isSelected = activePair === pair.id;
          return (
            <div
              key={pair.id}
              onClick={() => handleSpeak(`${pair.qAr} ${pair.aAr}`, pair.id)}
              className={`bg-neutral-100 dark:bg-neutral-900 p-3 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 cursor-pointer group hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 transition-colors select-none ${
                isSelected ? 'ring-2 ring-neutral-400 dark:ring-neutral-500' : ''
              }`}
              dir="rtl"
            >
              {/* First Side (RTL Start): Question Badge + Line + Emoji */}
              <div className="flex items-center w-full sm:w-auto sm:flex-1">
                <DemonstrativeBadge
                  text={pair.qAr}
                  direction="rtl"
                  variant="neutral"
                  className="sm:rounded-l-none max-w-[65%] sm:max-w-none"
                  textClassName="text-xl sm:text-2xl"
                />

                <div className={`flex-1 flex items-center ${pair.distance === 'near' ? 'justify-start pr-3 sm:pr-6' : 'justify-end pl-3 sm:pl-6'}`}>
                  {pair.distance === 'near' ? (
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 sm:w-12 h-0.5 bg-neutral-300 dark:bg-neutral-700" />
                      <span className="text-3xl sm:text-4xl transition-transform group-hover:scale-110">{pair.emoji}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 sm:gap-3 w-full justify-end">
                      <div className="flex-1 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-2 sm:mx-4" />
                      <span className="text-2xl sm:text-3xl opacity-60 transition-transform group-hover:scale-110">{pair.emoji}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Second Side (RTL End): Answer Badge */}
              <DemonstrativeBadge
                text={pair.aAr}
                direction="ltr"
                variant="dark"
                className="sm:rounded-r-none self-end sm:self-auto mr-auto sm:mr-0"
                textClassName="text-xl sm:text-2xl"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

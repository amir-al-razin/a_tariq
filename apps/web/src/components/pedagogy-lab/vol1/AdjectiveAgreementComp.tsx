import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

export function AdjectiveAgreementComp() {
  const [selectedPair, setSelectedPair] = useState<number | null>(null);

  const adjectivePairs = [
    { id: 1, masc: 'جَدِيدٌ', fem: 'جَدِيدَةٌ', en: 'New', rom: 'jadīdun / jadīdatun' },
    { id: 2, masc: 'قَدِيمٌ', fem: 'قَدِيمَةٌ', en: 'Old', rom: 'qadīmun / qadīmatun' },
    { id: 3, masc: 'جَمِيلٌ', fem: 'جَمِيلَةٌ', en: 'Beautiful', rom: 'jamīlun / jamīlatun' },
    { id: 4, masc: 'كَبِيرٌ', fem: 'كَبِيرَةٌ', en: 'Big / Large', rom: 'kabīrun / kabīratun' },
    { id: 5, masc: 'صَغِيرٌ', fem: 'صَغِيرَةٌ', en: 'Small', rom: 'ṣaghīrun / ṣaghīratun' },
    { id: 6, masc: 'نَظِيفٌ', fem: 'نَظِيفَةٌ', en: 'Clean', rom: 'naẓīfun / naẓīfatun' },
    { id: 7, masc: 'وَسِخٌ', fem: 'وَسِخَةٌ', en: 'Dirty', rom: 'wasikhun / wasikhatun' },
    { id: 8, masc: 'جَيِّدٌ', fem: 'جَيِّدَةٌ', en: 'Good', rom: 'jayyidun / jayyidatun' },
  ];

  const concordanceExamples = [
    {
      id: 1,
      ar: 'كِتَابٌ جَدِيدٌ',
      en: 'A new book (Masculine Agreement)',
      gender: 'Masc.',
      rule: 'Masculine noun takes masculine adjective ending in Tanween Dammah',
    },
    {
      id: 2,
      ar: 'كُرَّاسَةٌ جَدِيدَةٌ',
      en: 'A new notebook (Feminine Agreement)',
      gender: 'Fem.',
      rule: 'Feminine noun with Ta Marbutah requires adjective with Ta Marbutah',
    },
  ];

  const handleSpeak = (text: string, id?: number) => {
    if (id !== undefined) setSelectedPair(id);
    audioService.speakArabic(text, true);
  };

  return (
    <section id="comp-6" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 06
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Dual Gender Adjective Grid &amp; Agreement (Mawsoof &amp; Sifah)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Pages 20-21
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        In Arabic descriptive phrases (مَوْصُوفٌ وَصِفَةٌ), the adjective follows the noun and agrees with it in gender. Feminine adjectives append Ta Marbutah (ـة). Tap any card to hear the contrast.
      </p>

      {/* 2-Column Concordance Demonstration */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="rtl">
        {concordanceExamples.map((ex) => (
          <div
            key={ex.id}
            onClick={() => handleSpeak(ex.ar)}
            className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-neutral-800 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-all text-center select-none"
          >
            <div className="flex justify-between items-center mb-2" dir="ltr">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-primary">
                {ex.gender} Concordance
              </span>
              <div className="p-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-400">
                <Volume2 size={14} />
              </div>
            </div>

            <div className="my-2">
              <span className="font-arabic font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-white block leading-[2.2] tracking-normal">
                {ex.ar}
              </span>
            </div>

            <div className="pt-2" dir="ltr">
              <span className="text-xs sm:text-sm font-english-bold text-neutral-800 dark:text-neutral-200 block">
                {ex.en}
              </span>
              <span className="text-[11px] text-neutral-400 block mt-1">
                {ex.rule}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Adjective Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {adjectivePairs.map((pair) => {
          const isSelected = selectedPair === pair.id;
          return (
            <div
              key={pair.id}
              onClick={() => handleSpeak(`${pair.masc} ${pair.fem}`, pair.id)}
              className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl cursor-pointer text-center select-none transition-all ${
                isSelected
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1" dir="ltr">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'opacity-70' : 'text-neutral-400'}`}>
                  {pair.en}
                </span>
                <Volume2 size={12} className={isSelected ? 'opacity-80' : 'text-neutral-400'} />
              </div>

              <div className="my-2">
                <span className="font-arabic font-extrabold text-2xl sm:text-3xl block leading-[2.2] tracking-normal" dir="rtl">
                  {pair.masc}
                </span>
                <span className={`font-arabic font-bold text-lg sm:text-xl block leading-[2.2] tracking-normal ${isSelected ? 'text-accent-primary-hover' : 'text-accent-primary'}`} dir="rtl">
                  {pair.fem}
                </span>
              </div>

              <div className="text-[10px] font-mono opacity-60 mt-1" dir="ltr">
                {pair.rom}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

export function ProperNameTanweenComp() {
  const [activeName, setActiveName] = useState<string | null>(null);

  const masculineNames = [
    { ar: 'مَحْمُوْدٌ', rom: 'Maḥmūdun', note: 'Ends in Tanween Dammah' },
    { ar: 'رَاشِدٌ', rom: 'Rāshidun', note: 'Ends in Tanween Dammah' },
    { ar: 'خَالِدٌ', rom: 'Khālidun', note: 'Ends in Tanween Dammah' },
    { ar: 'سَعِيْدٌ', rom: "Sa'īdun", note: 'Ends in Tanween Dammah' },
    { ar: 'بِلَالٌ', rom: 'Bilālun', note: 'Ends in Tanween Dammah' },
    { ar: 'مَاجِدٌ', rom: 'Mājidun', note: 'Ends in Tanween Dammah' },
  ];

  const feminineNames = [
    { ar: 'خَدِيْجَةُ', rom: 'Khadījatu', note: 'Single Dammah (Diptote / No Tanween)' },
    { ar: 'فَرْحَانَةُ', rom: 'Farḥānatu', note: 'Single Dammah (Diptote / No Tanween)' },
    { ar: 'فَاطِمَةُ', rom: 'Fāṭimatu', note: 'Single Dammah (Diptote / No Tanween)' },
    { ar: 'عَائِشَةُ', rom: "'Ā'ishatu", note: 'Single Dammah (Diptote / No Tanween)' },
    { ar: 'زَيْنَبُ', rom: 'Zaynabu', note: 'Single Dammah (Diptote / No Tanween)' },
    { ar: 'رَيْحَانَةُ', rom: 'Rayḥānatu', note: 'Single Dammah (Diptote / No Tanween)' },
  ];

  const handleSpeak = (name: string) => {
    setActiveName(name);
    audioService.speakArabic(name, true);
  };

  return (
    <section id="comp-10" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 10
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Proper Name Tanween Contrast (Diptote vs Fully Declined)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 29
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-neutral-800 text-center">
        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-english-medium">
          In Arabic grammar, masculine proper names generally take <strong className="text-neutral-950 dark:text-white">Tanween</strong> (ـٌ double damma ending), whereas feminine proper names are <strong className="text-neutral-950 dark:text-white">diptotes (مَمْنُوعٌ مِنَ الصَّرْفِ)</strong> and take only a <strong className="text-neutral-950 dark:text-white">single Dammah</strong> without Tanween.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir="rtl">
        {/* Masculine Column */}
        <div className="space-y-3">
          <div className="text-center font-english-bold text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pb-1" dir="ltr">
            Masculine Names (With Tanween: ـٌ)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {masculineNames.map((item) => {
              const isSelected = activeName === item.ar;
              return (
                <div
                  key={item.ar}
                  onClick={() => handleSpeak(item.ar)}
                  className={`p-4 rounded-2xl sm:rounded-3xl text-center cursor-pointer select-none transition-all ${
                    isSelected
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 scale-105'
                      : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
                  }`}
                >
                  <span className="font-arabic font-extrabold text-2xl sm:text-3xl block leading-[2.2] tracking-normal">
                    {item.ar}
                  </span>
                  <span className="text-[10px] font-mono opacity-60 block mt-0.5" dir="ltr">
                    {item.rom}
                  </span>
                  <div className="flex justify-center mt-1" dir="ltr">
                    <Volume2 size={12} className="opacity-40" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feminine Column */}
        <div className="space-y-3">
          <div className="text-center font-english-bold text-xs uppercase tracking-wider text-accent-primary pb-1" dir="ltr">
            Feminine Names (Diptote: Single Dammah ـُ)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {feminineNames.map((item) => {
              const isSelected = activeName === item.ar;
              return (
                <div
                  key={item.ar}
                  onClick={() => handleSpeak(item.ar)}
                  className={`p-4 rounded-2xl sm:rounded-3xl text-center cursor-pointer select-none transition-all ${
                    isSelected
                      ? 'bg-accent-primary text-white scale-105'
                      : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
                  }`}
                >
                  <span className="font-arabic font-extrabold text-2xl sm:text-3xl block leading-[2.2] tracking-normal">
                    {item.ar}
                  </span>
                  <span className="text-[10px] font-mono opacity-60 block mt-0.5" dir="ltr">
                    {item.rom}
                  </span>
                  <div className="flex justify-center mt-1" dir="ltr">
                    <Volume2 size={12} className="opacity-40" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

interface WaslItem {
  id: number;
  ar: string;
  pron: string;
  en: string;
  rule: string;
  isolated: boolean;
}

const WASL_ITEMS: WaslItem[] = [
  {
    id: 1,
    ar: 'اِمْرَأَةٌ',
    pron: "imra'atun",
    en: 'A woman (Isolated position)',
    rule: 'Initial Hamzat al-Wasl (اِ) is clearly vocalized with Kasrah at the onset of speech',
    isolated: true,
  },
  {
    id: 2,
    ar: 'هِيَ امْرَأَةٌ',
    pron: "hiya mra'atun",
    en: 'She is a woman',
    rule: 'The vowel of (هِيَ) connects directly into the Meem; the Alif is written but silent',
    isolated: false,
  },
  {
    id: 3,
    ar: 'رَيْحَانَةُ امْرَأَةٌ فَقِيْرَةٌ',
    pron: "Rayḥānatu mra'atun faqīratun",
    en: 'Rayhana is a poor woman',
    rule: 'Dammah on (رَيْحَانَةُ) bridges seamlessly into the quiescent Meem without break',
    isolated: false,
  },
  {
    id: 4,
    ar: 'عَائِشَةُ امْرَأَةٌ ذَكِيَّةٌ',
    pron: "'Ā'ishatu mra'atun dhakiyyatun",
    en: 'Ayesha is an intelligent woman',
    rule: 'Connected speech elides the connecting Hamzah across sentence boundaries',
    isolated: false,
  },
];

export function HamzatWaslComp() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleSpeak = (text: string, id: number) => {
    setActiveItem(id);
    audioService.speakArabic(text, true);
  };

  return (
    <section id="comp-16" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 16
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Hamzat al-Wasl Elision Drill (Phonetic Continuity in اِمْرَأَة)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 32
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-neutral-800 text-center">
        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-english-medium">
          When another word precedes <span className="font-arabic font-extrabold text-xl px-1 text-accent-primary">اِمْرَأَةٌ</span> (a woman), the initial connecting Alif (<strong className="font-arabic text-base">هَمْزَةُ الوَصْلِ</strong>) remains in orthography but is <strong className="text-neutral-950 dark:text-white">omitted during oral articulation</strong>.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="rtl">
        {WASL_ITEMS.map((item) => {
          const isSelected = activeItem === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleSpeak(item.ar, item.id)}
              className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl cursor-pointer select-none transition-all flex flex-col justify-between items-center text-center space-y-3 ${
                isSelected
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 scale-[1.02]'
                  : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
              }`}
            >
              <div className="w-full flex justify-between items-center" dir="ltr">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${item.isolated ? 'text-accent-primary' : 'text-neutral-400'}`}>
                  {item.isolated ? 'Vocalized Alif' : 'Elided Silent Alif'}
                </span>
                <div className={`p-1 rounded-full ${isSelected ? 'bg-white/20 dark:bg-black/20' : 'bg-neutral-100 dark:bg-neutral-700'}`}>
                  <Volume2 size={14} />
                </div>
              </div>

              <div className="my-2">
                <span className="font-arabic font-extrabold text-2xl sm:text-3xl block leading-[2.2] tracking-normal">
                  {item.ar}
                </span>
                <span className={`text-xs font-mono font-bold block mt-1 ${isSelected ? 'text-accent-primary-hover' : 'text-emerald-600 dark:text-emerald-400'}`} dir="ltr">
                  Pronounced: &ldquo;{item.pron}&rdquo;
                </span>
              </div>

              <div className="w-full pt-2 border-t border-neutral-100 dark:border-neutral-700/60" dir="ltr">
                <span className={`text-xs sm:text-sm font-english-bold block ${isSelected ? 'text-neutral-200 dark:text-neutral-700' : 'text-neutral-700 dark:text-neutral-300'}`}>
                  {item.en}
                </span>
                <span className="text-[11px] text-neutral-400 block mt-1">
                  {item.rule}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

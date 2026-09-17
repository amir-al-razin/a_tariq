import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

interface PronounItem {
  id: string;
  ar: string;
  rom: string;
  en: string;
  person: string;
  gender: string;
  sampleAr: string;
  sampleEn: string;
}

const PRONOUNS: PronounItem[] = [
  {
    id: 'ana',
    ar: 'أَنَا',
    rom: 'anā',
    en: 'I (Common)',
    person: '1st Person',
    gender: 'Masc. & Fem.',
    sampleAr: 'أَنَا تِلْمِيْذٌ جَدِيْدٌ',
    sampleEn: 'I am a new student',
  },
  {
    id: 'anta',
    ar: 'أَنْتَ',
    rom: 'anta',
    en: 'You (Masculine)',
    person: '2nd Person',
    gender: 'Masculine Singular',
    sampleAr: 'أَنْتَ مُعَلِّمٌ جَيِّدٌ',
    sampleEn: 'You are a good teacher',
  },
  {
    id: 'anti',
    ar: 'أَنْتِ',
    rom: 'anti',
    en: 'You (Feminine)',
    person: '2nd Person',
    gender: 'Feminine Singular',
    sampleAr: 'أَنْتِ تِلْمِيْذَةٌ ذَكِيَّةٌ',
    sampleEn: 'You are an intelligent student',
  },
  {
    id: 'huwa',
    ar: 'هُوَ',
    rom: 'huwa',
    en: 'He / It',
    person: '3rd Person',
    gender: 'Masculine Singular',
    sampleAr: 'هُوَ تَاجِرٌ غَنِيٌّ',
    sampleEn: 'He is a rich merchant',
  },
  {
    id: 'hiya',
    ar: 'هِيَ',
    rom: 'hiya',
    en: 'She / It',
    person: '3rd Person',
    gender: 'Feminine Singular',
    sampleAr: 'هِيَ بِنْتٌ مُؤَدَّبَةٌ',
    sampleEn: 'She is a polite girl',
  },
];

export function PronounMatrixComp() {
  const [selectedId, setSelectedId] = useState('ana');

  const activeItem = PRONOUNS.find((p) => p.id === selectedId) || PRONOUNS[0];

  const handleSelect = (item: PronounItem) => {
    setSelectedId(item.id);
    audioService.speakArabic(item.ar, true);
  };

  return (
    <section id="comp-11" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 11
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Personal Pronoun Matrix (الضَّمَائِرُ المُنْفَصِلَة)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 29
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Singular independent subject pronouns acting as the subject (مُبْتَدَأٌ) of nominal equations. Tap any pronoun card to inspect its grammatical profile and sample sentence.
      </p>

      {/* Interactive Pronoun Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3" dir="rtl">
        {PRONOUNS.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`p-5 rounded-2xl sm:rounded-3xl cursor-pointer text-center select-none transition-all ${
                isSelected
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 scale-105'
                  : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
              }`}
            >
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${isSelected ? 'opacity-70' : 'text-neutral-400'}`} dir="ltr">
                {item.person}
              </span>
              <span className="font-arabic font-extrabold text-3xl sm:text-4xl block leading-[2.2] tracking-normal">
                {item.ar}
              </span>
              <span className={`text-xs font-english-bold block mt-1 ${isSelected ? 'opacity-80' : 'text-neutral-500'}`} dir="ltr">
                {item.en}
              </span>
            </div>
          );
        })}
      </div>

      {/* Active Inspector Card */}
      <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-neutral-800 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Grammatical Identity: {activeItem.person} • {activeItem.gender}
            </span>
            <div className="font-arabic font-extrabold text-4xl text-neutral-900 dark:text-white mt-1 leading-[2.2]" dir="rtl">
              {activeItem.ar} <span className="text-sm font-mono text-neutral-400">({activeItem.rom})</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => audioService.speakArabic(activeItem.sampleAr, true)}
            className="px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-english-bold hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors cursor-pointer flex items-center gap-2"
          >
            <Volume2 size={16} />
            <span>Speak Sentence</span>
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-right w-full sm:w-auto" dir="rtl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1" dir="ltr">
              Nominal Equation Example:
            </span>
            <span className="font-arabic font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white leading-[2.2] tracking-normal block">
              {activeItem.sampleAr}
            </span>
          </div>
          <div className="text-left w-full sm:w-auto">
            <span className="text-sm font-english-bold text-neutral-700 dark:text-neutral-300 block">
              {activeItem.sampleEn}
            </span>
            <span className="text-xs text-neutral-400 block mt-0.5">
              Subject ({activeItem.ar}) + Predicate Nominal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

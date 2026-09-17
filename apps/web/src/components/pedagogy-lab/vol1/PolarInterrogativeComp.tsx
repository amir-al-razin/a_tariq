import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

interface PolarDialogue {
  id: number;
  qAr: string;
  aAr: string;
  en: string;
  type: 'affirm' | 'negate_correct';
  category: string;
}

const DIALOGUES: PolarDialogue[] = [
  {
    id: 1,
    qAr: 'هَلْ أَنْتَ مُعَلِّمٌ ؟',
    aAr: 'لَا، بَلْ أَنَا تِلْمِيْذٌ.',
    en: 'Are you a teacher? - No, rather I am a student.',
    type: 'negate_correct',
    category: '2nd Person Correction',
  },
  {
    id: 2,
    qAr: 'هَلْ أَنْتَ تِلْمِيْذٌ جَدِيْدٌ ؟',
    aAr: 'نَعَمْ، أَنَا تِلْمِيْذٌ جَدِيْدٌ.',
    en: 'Are you a new student? - Yes, I am a new student.',
    type: 'affirm',
    category: '2nd Person Affirmation',
  },
  {
    id: 3,
    qAr: 'هَلْ هُوَ مُعَلِّمٌ ؟',
    aAr: 'لَا، بَلْ هُوَ تِلْمِيْذٌ.',
    en: 'Is he a teacher? - No, rather he is a student.',
    type: 'negate_correct',
    category: '3rd Person Correction',
  },
  {
    id: 4,
    qAr: 'هَلْ خَالِدٌ وَلَدٌ مُؤَدَّبٌ ؟',
    aAr: 'نَعَمْ، هُوَ وَلَدٌ مُؤَدَّبٌ.',
    en: 'Is Khaled a polite boy? - Yes, he is a polite boy.',
    type: 'affirm',
    category: '3rd Person Affirmation',
  },
  {
    id: 5,
    qAr: 'هَلْ زَيْنَبُ بِنْتٌ كَبِيْرَةٌ ؟',
    aAr: 'لَا، بَلْ هِيَ بِنْتٌ صَغِيْرَةٌ.',
    en: 'Is Zaynab a big girl? - No, rather she is a small girl.',
    type: 'negate_correct',
    category: 'Feminine Correction',
  },
];

export function PolarInterrogativeComp() {
  const [activeDialogueId, setActiveDialogueId] = useState(1);
  const [revealedTranslation, setRevealedTranslation] = useState<Record<number, boolean>>({});


  const handleSpeak = (text: string) => {
    audioService.speakArabic(text, true);
  };

  const handleToggleTranslation = (id: number) => {
    setRevealedTranslation((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="comp-13" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 13
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Polar Interrogative &amp; Correction Drill (هَلْ / نَعَمْ / لَا، بَلْ)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 31
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        In Arabic, yes/no inquiries begin with <span className="font-arabic font-bold text-base px-1">هَلْ</span>. Affirmation uses <span className="font-arabic font-bold text-base px-1">نَعَمْ</span> (Yes), while refutation with rectifying clarification uses <span className="font-arabic font-bold text-base px-1">لَا، بَلْ</span> (No, rather...).
      </p>

      {/* Particle Overview Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center" dir="rtl">
        <div className="p-4 rounded-2xl bg-white dark:bg-neutral-800">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block" dir="ltr">
            Question Particle
          </span>
          <span className="font-arabic font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white block leading-[2.2]">
            هَلْ ؟
          </span>
          <span className="text-xs font-english-bold text-neutral-500 block" dir="ltr">
            Is / Are / Do?
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-neutral-800">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block" dir="ltr">
            Affirmation Particle
          </span>
          <span className="font-arabic font-extrabold text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 block leading-[2.2]">
            نَعَمْ
          </span>
          <span className="text-xs font-english-bold text-neutral-500 block" dir="ltr">
            Yes (Agrees with prompt)
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-neutral-800">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-primary block" dir="ltr">
            Rectification Particle
          </span>
          <span className="font-arabic font-extrabold text-2xl sm:text-3xl text-accent-primary block leading-[2.2]">
            لَا، بَلْ
          </span>
          <span className="text-xs font-english-bold text-neutral-500 block" dir="ltr">
            No, but rather...
          </span>
        </div>
      </div>

      {/* Dialogue List Cards */}
      <div className="space-y-3">
        {DIALOGUES.map((item) => {
          const isSelected = item.id === activeDialogueId;
          const isTranslated = revealedTranslation[item.id];
          return (
            <div
              key={item.id}
              onClick={() => setActiveDialogueId(item.id)}
              className={`p-5 rounded-2xl sm:rounded-3xl cursor-pointer transition-all space-y-3 select-none ${
                isSelected
                  ? 'bg-white dark:bg-neutral-800 ring-2 ring-accent-primary'
                  : 'bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-primary">
                  {item.category}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleTranslation(item.id);
                    }}
                    className="text-[11px] font-english-bold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 transition-colors"
                  >
                    {isTranslated ? 'Hide Translation' : 'Show Translation'}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(`${item.qAr} ${item.aAr}`);
                    }}
                    className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 transition-colors"
                    title="Pronounce Dialogue"
                  >
                    <Volume2 size={14} />
                  </button>
                </div>
              </div>

              {/* Conversational Turns */}
              <div className="space-y-2" dir="rtl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-xs font-english-bold text-neutral-500 shrink-0" dir="ltr">
                    Q:
                  </span>
                  <span className="font-arabic font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white leading-[2.2]">
                    {item.qAr}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-accent-primary-subtle text-accent-primary-text text-xs font-english-bold shrink-0" dir="ltr">
                    A:
                  </span>
                  <span className={`font-arabic font-extrabold text-2xl sm:text-3xl leading-[2.2] ${item.type === 'affirm' ? 'text-emerald-600 dark:text-emerald-400' : 'text-accent-primary'}`}>
                    {item.aAr}
                  </span>
                </div>
              </div>

              {isTranslated && (
                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-700 text-xs sm:text-sm font-english-bold text-neutral-600 dark:text-neutral-400">
                  {item.en}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { RotateCcw, CheckCircle2, ArrowRight, Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';
import { WordChip, WordAssemblySlot } from '../../design-system/primitives/PedagogyComponents';
import { Button } from '../../design-system/primitives/Button';

interface IntroDrill {
  id: number;
  promptEn: string;
  expectedAr: string[];
  chips: string[];
  grammarTip: string;
}

const INTRO_DRILLS: IntroDrill[] = [
  {
    id: 1,
    promptEn: 'I am a new student',
    expectedAr: ['أَنَا', 'تِلْمِيْذٌ', 'جَدِيْدٌ'],
    chips: ['تِلْمِيْذٌ', 'أَنَا', 'جَدِيْدٌ', 'هُوَ', 'مُعَلِّمٌ'],
    grammarTip: 'Pronoun (أَنَا) + Indefinite Noun (تِلْمِيْذٌ) + Adjective (جَدِيْدٌ)',
  },
  {
    id: 2,
    promptEn: 'I am Belal - I am a student',
    expectedAr: ['أَنَا', 'بِلَالٌ', 'أَنَا', 'تِلْمِيْذٌ'],
    chips: ['بِلَالٌ', 'أَنَا', 'تِلْمِيْذٌ', 'أَنَا', 'عَائِشَةُ', 'مُعَلِّمٌ'],
    grammarTip: 'Self introduction with proper name + profession',
  },
  {
    id: 3,
    promptEn: 'She is Ayesha - She is a student',
    expectedAr: ['هِيَ', 'عَائِشَةُ', 'هِيَ', 'تِلْمِيْذَةٌ'],
    chips: ['هِيَ', 'عَائِشَةُ', 'هِيَ', 'تِلْمِيْذَةٌ', 'هُوَ', 'تِلْمِيْذٌ'],
    grammarTip: 'Feminine 3rd person pronoun (هِيَ) + Diptote Name (عَائِشَةُ)',
  },
  {
    id: 4,
    promptEn: 'He is a polite boy',
    expectedAr: ['هُوَ', 'وَلَدٌ', 'مُؤَدَّبٌ'],
    chips: ['مُؤَدَّبٌ', 'هُوَ', 'وَلَدٌ', 'بِنْتٌ', 'مُؤَدَّبَةٌ'],
    grammarTip: 'Masculine 3rd person pronoun + noun + adjective',
  },
];

export function NominalIntroComp() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'error'>('idle');

  const currentDrill = INTRO_DRILLS[activeIdx];

  const handleChipClick = (chip: string) => {
    audioService.playClick();
    if (status !== 'idle') setStatus('idle');
    setSelectedChips((prev) => [...prev, chip]);
  };

  const handleRemoveChip = (index: number) => {
    audioService.playClick();
    if (status !== 'idle') setStatus('idle');
    setSelectedChips((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    audioService.playClick();
    setSelectedChips([]);
    setStatus('idle');
  };

  const handleVerify = () => {
    const isCorrect =
      selectedChips.length === currentDrill.expectedAr.length &&
      selectedChips.every((val, i) => val === currentDrill.expectedAr[i]);

    if (isCorrect) {
      setStatus('correct');
      audioService.playSuccess();
      audioService.speakArabic(selectedChips.join(' '), true);
    } else {
      setStatus('error');
      audioService.playError();
    }
  };

  const handleNext = () => {
    audioService.playClick();
    setSelectedChips([]);
    setStatus('idle');
    setActiveIdx((prev) => (prev + 1) % INTRO_DRILLS.length);
  };

  return (
    <section id="comp-12" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 12
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Nominal Sentence Introduction Assembler (Self &amp; Peer Identity)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 30 • Exercise {activeIdx + 1}/{INTRO_DRILLS.length}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        In Arabic nominal equations (الجُمْلَةُ الاسْمِيَّةُ), the pronoun acts as Subject (مُبْتَدَأٌ) and the title/name acts as Predicate (خَبَرٌ). Assemble the authentic textbook introduction.
      </p>

      {/* Assembly Canvas */}
      <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
              Translate English Prompt into Arabic:
            </span>
            <div className="text-xl sm:text-2xl font-english-extrabold text-neutral-900 dark:text-white">
              &ldquo;{currentDrill.promptEn}&rdquo;
            </div>
            <span className="text-xs text-neutral-500 block mt-1">
              Tip: {currentDrill.grammarTip}
            </span>
          </div>
          <button
            type="button"
            onClick={() => audioService.speakArabic(currentDrill.expectedAr.join(' '), true)}
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer shrink-0"
            title="Listen to Model Sentence"
          >
            <Volume2 size={18} />
          </button>
        </div>

        {/* Dropzone */}
        <div className="min-h-24 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 flex items-center justify-center gap-3 flex-wrap" dir="rtl">
          {selectedChips.length === 0 ? (
            <span className="text-xs font-english-bold text-neutral-400 select-none" dir="ltr">
              Tap chips from the bank below to assemble the sentence...
            </span>
          ) : (
            selectedChips.map((chip, idx) => (
              <WordAssemblySlot
                key={`${chip}-${idx}`}
                word={{ arabic: chip }}
                onRemove={() => handleRemoveChip(idx)}
              />
            ))
          )}
        </div>

        {/* Candidate Chips Bank */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 text-center">
            Word Bank
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap" dir="rtl">
            {currentDrill.chips.map((chip, idx) => (
              <WordChip
                key={`${chip}-${idx}`}
                arabic={chip}
                onClick={() => handleChipClick(chip)}
                disabled={status === 'correct'}
              />
            ))}
          </div>
        </div>

        {/* Semantic Status Banner */}
        {status === 'correct' && (
          <div className="p-4 rounded-2xl bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 text-center flex items-center justify-center gap-2">
            <CheckCircle2 size={18} />
            <span className="font-english-bold text-sm">
              Correct! Authentic phrasing:{' '}
              <span className="font-arabic font-bold text-xl px-1" dir="rtl">
                {currentDrill.expectedAr.join(' ')}
              </span>
            </span>
          </div>
        )}
        {status === 'error' && (
          <div className="p-4 rounded-2xl bg-rose-500/15 text-rose-800 dark:text-rose-300 text-center font-english-bold text-sm">
            Check word sequence and gender agreement between subject and predicate.
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <Button
            variant="ghost"
            size="md"
            onClick={handleReset}
            disabled={selectedChips.length === 0}
          >
            <RotateCcw size={16} />
            <span>Reset</span>
          </Button>

          {status === 'correct' ? (
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
            >
              <span>Next Sentence</span>
              <ArrowRight size={16} />
            </Button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              onClick={handleVerify}
              disabled={selectedChips.length === 0}
            >
              Verify Sentence
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

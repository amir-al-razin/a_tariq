import { useState } from 'react';
import { RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react';
import { audioService } from '@/lib/audioService';
import { WordChip, WordAssemblySlot } from '../../design-system/primitives/PedagogyComponents';
import { Button } from '../../design-system/primitives/Button';

interface QAExerciseItem {
  id: number;
  questionAr: string;
  emoji: string;
  expectedAnswer: string[];
  chips: string[];
}

const QA_EXERCISES: QAExerciseItem[] = [
  { id: 1, questionAr: 'مَا هٰذَا ؟', emoji: '🪑', expectedAnswer: ['هٰذَا', 'كُرْسِيٌّ'], chips: ['كُرْسِيٌّ', 'ذٰلِكَ', 'هٰذَا', 'بَيْتٌ', 'قَلَمٌ'] },
  { id: 2, questionAr: 'مَا ذٰلِكَ ؟', emoji: '🏠', expectedAnswer: ['ذٰلِكَ', 'بَيْتٌ'], chips: ['هٰذَا', 'بَيْتٌ', 'ذٰلِكَ', 'كِتَابٌ', 'مَسْجِدٌ'] },
  { id: 3, questionAr: 'مَا تِلْكَ ؟', emoji: '⌚', expectedAnswer: ['تِلْكَ', 'سَاعَةٌ'], chips: ['تِلْكَ', 'سَاعَةٌ', 'هٰذِهِ', 'نَظَّارَةٌ', 'دَرَّاجَةٌ'] },
  { id: 4, questionAr: 'مَا هٰذَا ؟', emoji: '🔒', expectedAnswer: ['هٰذَا', 'قُفْلٌ'], chips: ['هٰذَا', 'قُفْلٌ', 'ذٰلِكَ', 'مِفْتَاحٌ', 'صُنْدُوْقٌ'] },
  { id: 5, questionAr: 'مَا ذٰلِكَ ؟', emoji: '🧱', expectedAnswer: ['ذٰلِكَ', 'جِدَارٌ'], chips: ['ذٰلِكَ', 'جِدَارٌ', 'هٰذَا', 'بَابٌ', 'كُرْسِيٌّ'] },
  { id: 6, questionAr: 'مَا هٰذِهِ ؟', emoji: '👓', expectedAnswer: ['هٰذِهِ', 'نَظَّارَةٌ'], chips: ['هٰذِهِ', 'نَظَّارَةٌ', 'تِلْكَ', 'سَاعَةٌ', 'مِظَلَّةٌ'] },
  { id: 7, questionAr: 'مَا هٰذَا ؟', emoji: '🔑', expectedAnswer: ['هٰذَا', 'مِفْتَاحٌ'], chips: ['هٰذَا', 'مِفْتَاحٌ', 'ذٰلِكَ', 'قُفْلٌ', 'بَيْتٌ'] },
  { id: 8, questionAr: 'مَا تِلْكَ ؟', emoji: '🎒', expectedAnswer: ['تِلْكَ', 'حَقِيْبَةٌ'], chips: ['تِلْكَ', 'حَقِيْبَةٌ', 'هٰذِهِ', 'كُرَّاسَةٌ', 'طَاوِلَةٌ'] },
  { id: 9, questionAr: 'مَا هٰذَا ؟', emoji: '🕌', expectedAnswer: ['هٰذَا', 'مَسْجِدٌ'], chips: ['هٰذَا', 'مَسْجِدٌ', 'ذٰلِكَ', 'بَيْتٌ', 'جِدَارٌ'] },
  { id: 10, questionAr: 'مَا تِلْكَ ؟', emoji: '🚗', expectedAnswer: ['تِلْكَ', 'سَيَّارَةٌ'], chips: ['تِلْكَ', 'سَيَّارَةٌ', 'هٰذِهِ', 'دَرَّاجَةٌ', 'سَاعَةٌ'] },
  { id: 11, questionAr: 'مَا هٰذِهِ ؟', emoji: '☂️', expectedAnswer: ['هٰذِهِ', 'مِظَلَّةٌ'], chips: ['هٰذِهِ', 'مِظَلَّةٌ', 'تِلْكَ', 'نَظَّارَةٌ', 'حَقِيْبَةٌ'] },
];

export function PictureQAAssemblyComp() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'error'>('idle');

  const currentQ = QA_EXERCISES[activeIdx];

  const handleChipClick = (chip: string) => {
    audioService.playClick();
    if (status !== 'idle') {
      setStatus('idle');
    }
    if (selectedChips.includes(chip)) return;
    setSelectedChips((prev) => [...prev, chip]);
  };

  const handleRemoveChip = (index: number) => {
    audioService.playClick();
    if (status !== 'idle') {
      setStatus('idle');
    }
    setSelectedChips((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    audioService.playClick();
    setSelectedChips([]);
    setStatus('idle');
  };

  const handleVerify = () => {
    const isCorrect =
      selectedChips.length === currentQ.expectedAnswer.length &&
      selectedChips.every((val, i) => val === currentQ.expectedAnswer[i]);

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
    setActiveIdx((prev) => (prev + 1) % QA_EXERCISES.length);
  };

  return (
    <section id="comp-5" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 05
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Picture Q&amp;A Word Assembly Drill (Receptive Synthesizer)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 19 • Drill {activeIdx + 1}/{QA_EXERCISES.length}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Look at the illustrated object and question prompt, then tap word chips in correct syntactic order to construct the answer sentence.
      </p>

      {/* Playable Canvas Container */}
      <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6">
        {/* Question Banner */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60" dir="rtl">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{currentQ.emoji}</span>
            <span className="font-arabic font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-white leading-[2.2] tracking-normal">
              {currentQ.questionAr}
            </span>
          </div>
          <button
            type="button"
            onClick={() => audioService.speakArabic(currentQ.questionAr, true)}
            className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-english-bold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            dir="ltr"
          >
            🔊 Question
          </button>
        </div>

        {/* Assembly Dropzone Target */}
        <div className="min-h-24 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 flex items-center justify-center gap-3 flex-wrap" dir="rtl">
          {selectedChips.length === 0 ? (
            <span className="text-xs font-english-bold text-neutral-400 select-none" dir="ltr">
              Tap chips from the bank below to assemble your answer...
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

        {/* Word Token Bank */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 text-center">
            Word Bank
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap" dir="rtl">
            {currentQ.chips.map((chip, idx) => {
              const isPlaced = selectedChips.includes(chip);
              return (
                <WordChip
                  key={`${chip}-${idx}`}
                  arabic={chip}
                  state={isPlaced ? 'placed' : 'idle'}
                  onClick={() => handleChipClick(chip)}
                  disabled={isPlaced || status === 'correct'}
                />
              );
            })}
          </div>
        </div>

        {/* Semantic Status Banner */}
        {status === 'correct' && (
          <div className="p-4 rounded-2xl bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 text-center flex items-center justify-center gap-2">
            <CheckCircle2 size={18} />
            <span className="font-english-bold text-sm">
              Correct! Authentic syntax:{' '}
              <span className="font-arabic font-bold text-lg px-1" dir="rtl">
                {currentQ.expectedAnswer.join(' ')}
              </span>
            </span>
          </div>
        )}
        {status === 'error' && (
          <div className="p-4 rounded-2xl bg-rose-500/15 text-rose-800 dark:text-rose-300 text-center font-english-bold text-sm">
            Not quite right. Check word order and demonstrative agreement.
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
              <span>Next Exercise</span>
              <ArrowRight size={16} />
            </Button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              onClick={handleVerify}
              disabled={selectedChips.length === 0}
            >
              Verify Answer
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

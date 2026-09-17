import { useState } from 'react';
import { RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react';
import { audioService } from '@/lib/audioService';
import { WordChip, WordAssemblySlot } from '../../design-system/primitives/PedagogyComponents';
import { Button } from '../../design-system/primitives/Button';

interface ClozeExercise {
  id: number;
  promptAr: string;
  expected: string[];
  chips: string[];
  hint: string;
}

const CLOZE_ADJECTIVES: ClozeExercise[] = [
  { id: 1, promptAr: 'مِظَلَّةٌ [ ــــــ ]', expected: ['قَدِيمَةٌ'], chips: ['قَدِيمٌ', 'قَدِيمَةٌ', 'كَبِيرٌ'], hint: 'Umbrella (Fem) requires feminine adjective' },
  { id: 2, promptAr: 'مِفْتَاحٌ [ ــــــ ]', expected: ['صَغِيرٌ'], chips: ['صَغِيرٌ', 'صَغِيرَةٌ', 'جَمِيلَةٌ'], hint: 'Key (Masc) requires masculine adjective' },
  { id: 3, promptAr: 'بَيْتٌ [ ــــــ ]', expected: ['جَدِيدٌ'], chips: ['جَدِيدَةٌ', 'جَدِيدٌ', 'صَغِيرَةٌ'], hint: 'House (Masc) requires masculine adjective' },
  { id: 4, promptAr: 'نَظَّارَةٌ [ ــــــ ]', expected: ['جَيِّدَةٌ'], chips: ['جَيِّدَةٌ', 'جَيِّدٌ', 'قَدِيمٌ'], hint: 'Spectacles (Fem) requires feminine adjective' },
  { id: 5, promptAr: 'مِرْوَحَةٌ [ ــــــ ]', expected: ['جَمِيلَةٌ'], chips: ['جَمِيلَةٌ', 'كَبِيرٌ', 'جَمِيلٌ'], hint: 'Fan (Fem) requires feminine adjective' },
];

const CLOZE_NOUNS: ClozeExercise[] = [
  { id: 6, promptAr: '[ ــــــ ] قَدِيمٌ', expected: ['قُفْلٌ'], chips: ['قُفْلٌ', 'سَاعَةٌ', 'حَقِيبَةٌ'], hint: 'Old (Masc) requires a masculine noun' },
  { id: 7, promptAr: '[ ــــــ ] جَدِيدَةٌ', expected: ['مِسْطَرَةٌ'], chips: ['قَلَمٌ', 'مِسْطَرَةٌ', 'كِتَابٌ'], hint: 'New (Fem) requires a feminine noun' },
  { id: 8, promptAr: '[ ــــــ ] جَمِيلٌ', expected: ['عَلَمٌ'], chips: ['عَلَمٌ', 'حَدِيقَةٌ', 'مَدْرَسَةٌ'], hint: 'Beautiful (Masc) requires a masculine noun' },
  { id: 9, promptAr: '[ ــــــ ] صَغِيرَةٌ', expected: ['حُجْرَةٌ'], chips: ['بَيْتٌ', 'حُجْرَةٌ', 'مَسْجِدٌ'], hint: 'Small (Fem) requires a feminine noun' },
  { id: 10, promptAr: '[ ــــــ ] كَبِيرٌ', expected: ['بَابٌ'], chips: ['بَابٌ', 'نَافِذَةٌ', 'كُرَّاسَةٌ'], hint: 'Big (Masc) requires a masculine noun' },
];

export function AdjectiveClozeComp() {
  const [subTab, setSubTab] = useState<'adj' | 'noun'>('adj');
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'error'>('idle');

  const currentDataset = subTab === 'adj' ? CLOZE_ADJECTIVES : CLOZE_NOUNS;
  const currentQ = currentDataset[activeIdx % currentDataset.length];

  const handleChipClick = (chip: string) => {
    audioService.playClick();
    if (status !== 'idle') setStatus('idle');
    if (selectedChips.includes(chip)) return;
    setSelectedChips([chip]);
  };

  const handleRemoveChip = () => {
    audioService.playClick();
    if (status !== 'idle') setStatus('idle');
    setSelectedChips([]);
  };

  const handleReset = () => {
    audioService.playClick();
    setSelectedChips([]);
    setStatus('idle');
  };

  const handleVerify = () => {
    const isCorrect =
      selectedChips.length === currentQ.expected.length &&
      selectedChips.every((c, i) => c === currentQ.expected[i]);

    if (isCorrect) {
      setStatus('correct');
      audioService.playSuccess();
      audioService.speakArabic(selectedChips[0], true);
    } else {
      setStatus('error');
      audioService.playError();
    }
  };

  const handleNext = () => {
    audioService.playClick();
    setSelectedChips([]);
    setStatus('idle');
    setActiveIdx((prev) => (prev + 1) % currentDataset.length);
  };

  return (
    <section id="comp-7" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 07
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Adjective Concordance Cloze Fill (In-Context Agreement)
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 1, Page 21 • {subTab === 'adj' ? 'Adjective' : 'Noun'} Cloze {activeIdx + 1}/{currentDataset.length}
          </span>
          <div className="inline-flex rounded-full bg-white dark:bg-neutral-800 p-1">
            <button
              onClick={() => {
                setSubTab('adj');
                setActiveIdx(0);
                setSelectedChips([]);
                setStatus('idle');
              }}
              className={`px-3 py-1 rounded-full text-xs font-english-bold transition-all cursor-pointer ${
                subTab === 'adj'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Fill Adjective
            </button>
            <button
              onClick={() => {
                setSubTab('noun');
                setActiveIdx(0);
                setSelectedChips([]);
                setStatus('idle');
              }}
              className={`px-3 py-1 rounded-full text-xs font-english-bold transition-all cursor-pointer ${
                subTab === 'noun'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Fill Noun
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Direct digital replica of textbook page 21. Select the grammatically harmonious word from the choices to complete the descriptive phrase.
      </p>

      {/* Playable Canvas */}
      <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6">
        {/* Question Prompt */}
        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 text-center space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
            {currentQ.hint}
          </span>
          <div className="font-arabic font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-white leading-[2.2] tracking-normal" dir="rtl">
            {currentQ.promptAr}
          </div>
        </div>

        {/* Selected Chip Slot */}
        <div className="min-h-24 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 flex items-center justify-center" dir="rtl">
          {selectedChips.length === 0 ? (
            <span className="text-xs font-english-bold text-neutral-400 select-none" dir="ltr">
              Tap the matching word chip below to fill the slot...
            </span>
          ) : (
            <WordAssemblySlot
              word={{ arabic: selectedChips[0] }}
              onRemove={handleRemoveChip}
            />
          )}
        </div>

        {/* Candidate Chips */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 text-center">
            Candidate Options
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap" dir="rtl">
            {currentQ.chips.map((chip, idx) => {
              const isSelected = selectedChips.includes(chip);
              return (
                <WordChip
                  key={`${chip}-${idx}`}
                  arabic={chip}
                  state={isSelected ? 'placed' : 'idle'}
                  onClick={() => handleChipClick(chip)}
                  disabled={isSelected || status === 'correct'}
                />
              );
            })}
          </div>
        </div>

        {/* Status Feedback */}
        {status === 'correct' && (
          <div className="p-4 rounded-2xl bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 text-center flex items-center justify-center gap-2">
            <CheckCircle2 size={18} />
            <span className="font-english-bold text-sm">
              Correct Concordance! Gender matches perfectly.
            </span>
          </div>
        )}
        {status === 'error' && (
          <div className="p-4 rounded-2xl bg-rose-500/15 text-rose-800 dark:text-rose-300 text-center font-english-bold text-sm">
            Gender mismatch. Remember that feminine nouns require an adjective ending with Ta Marbutah (ـة).
          </div>
        )}

        {/* Actions */}
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
              Verify Concordance
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

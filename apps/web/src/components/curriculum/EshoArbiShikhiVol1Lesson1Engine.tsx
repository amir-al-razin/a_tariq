import { useState } from 'react';
import { CheckCircle, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

// Web Audio API Synthesizer & Speech Synthesis Service
class AudioService {
  private ctx: AudioContext | null = null;

  public playTone(freq: number, type: OscillatorType = 'sine', duration: number = 0.15): void {
    try {
      if (typeof window === 'undefined') return;
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Graceful fallback if Web Audio is restricted
    }
  }

  public playClick(): void {
    this.playTone(400, 'triangle', 0.05);
  }

  public playSuccess(): void {
    this.playTone(523.25, 'sine', 0.1);
    setTimeout(() => this.playTone(659.25, 'sine', 0.15), 80);
    setTimeout(() => this.playTone(783.99, 'sine', 0.25), 160);
  }

  public playError(): void {
    this.playTone(240, 'sawtooth', 0.18);
  }

  public speakArabic(text: string, enabled: boolean): void {
    if (!enabled || typeof window === 'undefined') return;
    this.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  }
}

const audioService = new AudioService();

interface VocabItem {
  id: number;
  ar: string;
  roman: string;
  en: string;
  emoji: string;
}

// 3 VOCABULARY SETS FROM THE PHYSICAL BOOK
const vocabSegment1: VocabItem[] = [
  { id: 1, ar: 'كِتَابٌ', roman: 'kitābun', en: 'A book', emoji: '📖' },
  { id: 2, ar: 'قَلَمٌ', roman: 'qalamun', en: 'A pen', emoji: '🖊️' },
  { id: 3, ar: 'كُرْسِيٌّ', roman: 'kursiyyun', en: 'A chair', emoji: '🪑' },
  { id: 4, ar: 'بَيْتٌ', roman: 'baytun', en: 'A house', emoji: '🏠' },
  { id: 5, ar: 'بَابٌ', roman: 'bābun', en: 'A door', emoji: '🚪' },
  { id: 6, ar: 'مِصْبَاحٌ', roman: 'miṣbāḥun', en: 'A lamp', emoji: '💡' },
  { id: 7, ar: 'جِدَارٌ', roman: 'jidārun', en: 'A wall', emoji: '🧱' },
  { id: 8, ar: 'سَرِيْرٌ', roman: 'sarīrun', en: 'A bed', emoji: '🛏️' },
];

const vocabSegment2: VocabItem[] = [
  { id: 9, ar: 'مَدْرَسَةٌ', roman: 'madrasatun', en: 'A school', emoji: '🏫' },
  { id: 10, ar: 'سَبُّوْرَةٌ', roman: 'sabbūratun', en: 'A blackboard', emoji: '🖥️' },
  { id: 11, ar: 'مِسْطَرَةٌ', roman: 'misṭaratun', en: 'A ruler', emoji: '📏' },
  { id: 12, ar: 'حَقِيْبَةٌ', roman: 'ḥaqībatun', en: 'A bag', emoji: '🎒' },
  { id: 13, ar: 'كُرَّاسَةٌ', roman: 'kurrāsatun', en: 'A notebook', emoji: '📓' },
  { id: 14, ar: 'طَاوِلَةٌ', roman: 'ṭāwilatun', en: 'A table', emoji: '🪵' },
  { id: 15, ar: 'حُجْرَةٌ / غُرْفَةٌ', roman: 'ḥujratun', en: 'A room', emoji: '🚪' },
  { id: 16, ar: 'نَافِذَةٌ', roman: 'nāfidhatun', en: 'A window', emoji: '🪟' },
];

const vocabSegment3: VocabItem[] = [
  { id: 17, ar: 'قُفْلٌ', roman: 'quflun', en: 'A lock', emoji: '🔒' },
  { id: 18, ar: 'مِفْتَاحٌ', roman: 'miftāḥun', en: 'A key', emoji: '🔑' },
  { id: 19, ar: 'صُنْدُوْقٌ', roman: 'ṣundūqun', en: 'A box', emoji: '📦' },
  { id: 20, ar: 'سَاعَةٌ', roman: 'sā‘atun', en: 'A clock', emoji: '⌚' },
  { id: 21, ar: 'مِظَلَّةٌ', roman: 'miẓallatun', en: 'An umbrella', emoji: '☂️' },
  { id: 22, ar: 'نَظَّارَةٌ', roman: 'naẓẓāratun', en: 'Spectacles', emoji: '👓' },
  { id: 23, ar: 'سَيَّارَةٌ', roman: 'sayyāratun', en: 'A car', emoji: '🚗' },
  { id: 24, ar: 'دَرَّاجَةٌ', roman: 'darrājatun', en: 'A bicycle', emoji: '🚲' },
];

interface PointSentenceItem {
  id: number;
  ar: string;
  distance: 'near' | 'far';
  emoji: string;
}

// 17 MASCULINE POINTING DRILLS FROM PAGES 15 & 16
const segment1PointSentences: PointSentenceItem[] = [
  { id: 1, ar: 'هٰذَا كِتَابٌ', distance: 'near', emoji: '📖' },
  { id: 2, ar: 'ذٰلِكَ قَلَمٌ', distance: 'far', emoji: '🖊️' },
  { id: 3, ar: 'هٰذَا مَسْجِدٌ', distance: 'near', emoji: '🕌' },
  { id: 4, ar: 'ذٰلِكَ بَيْتٌ', distance: 'far', emoji: '🏠' },
  { id: 5, ar: 'هٰذَا بَابٌ', distance: 'near', emoji: '🚪' },
  { id: 6, ar: 'ذٰلِكَ مِصْبَاحٌ', distance: 'far', emoji: '💡' },
  { id: 7, ar: 'هٰذَا جِدَارٌ', distance: 'near', emoji: '🧱' },
  { id: 8, ar: 'ذٰلِكَ كُرْسِيٌّ', distance: 'far', emoji: '🪑' },
  { id: 9, ar: 'هٰذَا بَيْتٌ', distance: 'near', emoji: '🏠' },
  { id: 10, ar: 'هٰذَا كُرْسِيٌّ', distance: 'near', emoji: '🪑' },
  { id: 11, ar: 'ذٰلِكَ مَسْجِدٌ', distance: 'far', emoji: '🕌' },
  { id: 12, ar: 'هٰذَا سَرِيْرٌ', distance: 'near', emoji: '🛏️' },
  { id: 13, ar: 'هٰذَا جِدَارٌ', distance: 'near', emoji: '🧱' },
  { id: 14, ar: 'ذٰلِكَ مِصْبَاحٌ', distance: 'far', emoji: '💡' },
  { id: 15, ar: 'ذٰلِكَ سَرِيْرٌ', distance: 'far', emoji: '🛏️' },
  { id: 16, ar: 'هٰذَا بَابٌ', distance: 'near', emoji: '🚪' },
  { id: 17, ar: 'ذٰلِكَ جِدَارٌ', distance: 'far', emoji: '🧱' },
];

// 13 FEMININE POINTING DRILLS FROM PAGES 17 & 18
const segment2PointSentences: PointSentenceItem[] = [
  { id: 1, ar: 'هٰذِهِ مَدْرَسَةٌ', distance: 'near', emoji: '🏫' },
  { id: 2, ar: 'تِلْكَ سَبُّوْرَةٌ', distance: 'far', emoji: '🖥️' },
  { id: 3, ar: 'هٰذِهِ حُجْرَةٌ', distance: 'near', emoji: '🚪' },
  { id: 4, ar: 'تِلْكَ حَقِيْبَةٌ', distance: 'far', emoji: '🎒' },
  { id: 5, ar: 'هٰذِهِ كُرَّاسَةٌ', distance: 'near', emoji: '📓' },
  { id: 6, ar: 'تِلْكَ طَاوِلَةٌ', distance: 'far', emoji: '🪵' },
  { id: 7, ar: 'هٰذِهِ مِسْطَرَةٌ', distance: 'near', emoji: '📏' },
  { id: 8, ar: 'هٰذِهِ سَبُّوْرَةٌ', distance: 'near', emoji: '🖥️' },
  { id: 9, ar: 'تِلْكَ نَافِذَةٌ', distance: 'far', emoji: '🪟' },
  { id: 10, ar: 'هٰذِهِ طَاوِلَةٌ', distance: 'near', emoji: '🪵' },
  { id: 11, ar: 'تِلْكَ مِسْطَرَةٌ', distance: 'far', emoji: '📏' },
  { id: 12, ar: 'تِلْكَ كُرَّاسَةٌ', distance: 'far', emoji: '📓' },
  { id: 13, ar: 'هٰذِهِ حَقِيْبَةٌ', distance: 'near', emoji: '🎒' },
];

// 4 DEMONSTRATION QA PAIRS FROM PAGE 18
const demoQAPairs = [
  { qAr: 'مَا هٰذَا ؟', aAr: 'هٰذَا كِتَابٌ', distance: 'near' as const, emoji: '📖' },
  { qAr: 'مَا ذٰلِكَ ؟', aAr: 'ذٰلِكَ قَلَمٌ', distance: 'far' as const, emoji: '🖊️' },
  { qAr: 'مَا هٰذِهِ ؟', aAr: 'هٰذِهِ مِسْطَرَةٌ', distance: 'near' as const, emoji: '📏' },
  { qAr: 'مَا تِلْكَ ؟', aAr: 'تِلْكَ سَبُّوْرَةٌ', distance: 'far' as const, emoji: '🖥️' },
];

interface QAExerciseItem {
  id: number;
  questionAr: string;
  emoji: string;
  expectedAnswer: string[];
  chips: string[];
}

// 11 INTERACTIVE PICTURE QA EXERCISES FROM PAGE 19
const qaExercises: QAExerciseItem[] = [
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

const STEPS = [
  { id: 'step_1', title: 'Step 1 of 10' },
  { id: 'step_2', title: 'Step 2 of 10' },
  { id: 'step_3', title: 'Step 3 of 10' },
  { id: 'step_4', title: 'Step 4 of 10' },
  { id: 'step_5', title: 'Step 5 of 10' },
  { id: 'step_6', title: 'Step 6 of 10' },
  { id: 'step_7', title: 'Step 7 of 10' },
  { id: 'step_8', title: 'Step 8 of 10' },
  { id: 'step_9', title: 'Step 9 of 10' },
  { id: 'step_10', title: 'Step 10 of 10' },
];

export function EshoArbiShikhiVol1Lesson1Engine() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [audioEnabled] = useState<boolean>(true);
  const [revealedVocab, setRevealedVocab] = useState<Record<number, boolean>>({});

  // Q&A Chip Assembly state
  const [activeQAIndex, setActiveQAIndex] = useState<number>(0);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [verificationResult, setVerificationResult] = useState<{ checked: boolean; success: boolean }>({
    checked: false,
    success: false,
  });

  const handleNextStep = () => {
    audioService.playClick();
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      audioService.playSuccess();
      setCurrentStep(0);
    }
  };

  const handlePrevStep = () => {
    audioService.playClick();
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleGoToStep = (idx: number) => {
    audioService.playClick();
    setCurrentStep(idx);
  };

  const handleTapVocab = (item: VocabItem) => {
    audioService.speakArabic(item.ar, audioEnabled);
    setRevealedVocab((prev) => ({ ...prev, [item.id]: true }));
  };

  const handleChipClick = (chip: string) => {
    audioService.playClick();
    if (verificationResult.checked) {
      setVerificationResult({ checked: false, success: false });
    }
    setSelectedChips((prev) => [...prev, chip]);
  };

  const handleRemoveChip = (index: number) => {
    audioService.playClick();
    if (verificationResult.checked) {
      setVerificationResult({ checked: false, success: false });
    }
    setSelectedChips((prev) => prev.filter((_, i) => i !== index));
  };

  const handleResetChips = () => {
    audioService.playClick();
    setSelectedChips([]);
    setVerificationResult({ checked: false, success: false });
  };

  const handleVerifySentence = () => {
    const activeQ = qaExercises[activeQAIndex];
    const isCorrect =
      selectedChips.length === activeQ.expectedAnswer.length &&
      selectedChips.every((chip, i) => chip === activeQ.expectedAnswer[i]);

    if (isCorrect) {
      audioService.playSuccess();
      setVerificationResult({ checked: true, success: true });
      audioService.speakArabic(selectedChips.join(' '), audioEnabled);
    } else {
      audioService.playError();
      setVerificationResult({ checked: true, success: false });
    }
  };

  const progressPercent = Math.round(((currentStep + 1) / STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col justify-between p-3 md:p-6 transition-colors">
      {/* CLEAN HEADER */}
      <header className="max-w-4xl w-full mx-auto bg-white dark:bg-neutral-800 rounded-3xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-3xl bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 font-bold font-arabic text-xl shrink-0">
            ١
          </div>
          <div>
            <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Volume 1 • Lesson 1
            </h1>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full sm:w-64 flex flex-col gap-1.5">
          <div className="flex justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400 font-mono">
            <span>{STEPS[currentStep].title}</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full bg-neutral-200 dark:bg-neutral-950 h-3 rounded-full overflow-hidden p-0.5">
            <div
              className="bg-neutral-900 dark:bg-neutral-100 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

      </header>

      {/* MAIN PLAYABLE CANVAS */}
      <main className="max-w-4xl w-full mx-auto flex-1 flex flex-col justify-center mb-6">
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 min-h-[540px] flex flex-col justify-between transition-colors relative">
          
          {/* STEP CONTENT AREA */}
          <div className="w-full flex-1 flex flex-col justify-center">

            {/* STEP 0: FIRST VOCABULARY (PAGE 15 TOP - 8 WORDS) */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {vocabSegment1.map((v, idx) => {
                    const isTapped = revealedVocab[v.id];
                    return (
                      <div
                        key={v.id}
                        onClick={() => handleTapVocab(v)}
                        className="bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 active:scale-95 transition-all p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between items-center text-center cursor-pointer min-h-[140px] sm:min-h-[175px]"
                      >
                        <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                          <span>Card 0{idx + 1}</span>
                          <span className={isTapped ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>{isTapped ? '✓' : ''}</span>
                        </div>

                        <div className="my-2">
                          <span className="font-arabic text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 block">
                            {v.ar}
                          </span>
                        </div>

                        <div className="w-full pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
                          <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 block font-sans">
                            {v.en}
                          </span>
                          {isTapped && (
                            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">
                              {v.roman}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 1: PAGE 15 POINTER DEMONSTRATION TABLE (2-ROW, 2-COL TABLE) */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-4 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center" dir="rtl">
                    <div onClick={() => audioService.speakArabic('هٰذَا', audioEnabled)} className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl cursor-pointer flex flex-col items-center justify-center">
                      <span className="font-arabic text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">هٰذَا - هٰذِهِ</span>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 block mt-2" dir="ltr">This</span>
                    </div>

                    <div onClick={() => audioService.speakArabic('ذٰلِكَ', audioEnabled)} className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl cursor-pointer flex flex-col items-center justify-center">
                      <span className="font-arabic text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">ذٰلِكَ - تِلْكَ</span>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 block mt-2" dir="ltr">That</span>
                    </div>

                    <div onClick={() => audioService.speakArabic('هٰذَا كِتَابٌ', audioEnabled)} className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl cursor-pointer flex flex-col items-center justify-center">
                      <span className="font-arabic text-xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">هٰذَا كِتَابٌ</span>
                      <span className="text-[10px] sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 block mt-2" dir="ltr">This is a book</span>
                    </div>

                    <div onClick={() => audioService.speakArabic('ذٰلِكَ قَلَمٌ', audioEnabled)} className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl cursor-pointer flex flex-col items-center justify-center">
                      <span className="font-arabic text-xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">ذٰلِكَ قَلَمٌ</span>
                      <span className="text-[10px] sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 block mt-2" dir="ltr">That is a pen</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: MASCULINE POINTING DRILLS (PAGES 15 & 16 - 17 ITEMS) */}
            {currentStep === 2 && (
              <div className="space-y-3">
                {segment1PointSentences.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => audioService.speakArabic(item.ar, audioEnabled)}
                    className="bg-neutral-100 dark:bg-neutral-900 p-3 sm:p-4 rounded-2xl sm:rounded-3xl flex items-center justify-between cursor-pointer group hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 transition-colors"
                    dir="rtl"
                  >
                    <div className="px-4 py-2 sm:px-6 sm:py-3.5 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 shrink-0 rounded-r-xl sm:rounded-r-2xl price-tag-rtl transition-colors max-w-[65%]">
                      <span className="font-arabic text-lg sm:text-2xl font-bold break-words leading-tight">{item.ar}</span>
                    </div>

                    <div className={`flex-1 flex items-center ${item.distance === 'near' ? 'justify-start pr-3 sm:pr-6' : 'justify-end pl-3 sm:pl-6'}`}>
                      {item.distance === 'near' ? (
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 sm:w-12 h-0.5 bg-neutral-300 dark:bg-neutral-700" />
                          <span className="text-3xl sm:text-4xl transition-transform group-hover:scale-110">{item.emoji}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 sm:gap-3 w-full justify-end">
                          <div className="flex-1 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-2 sm:mx-4" />
                          <span className="text-2xl sm:text-3xl opacity-60 transition-transform group-hover:scale-110">{item.emoji}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* STEP 3: SECOND VOCABULARY (PAGE 17 TOP - 8 WORDS) */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {vocabSegment2.map((v, idx) => {
                    const isTapped = revealedVocab[v.id];
                    return (
                      <div
                        key={v.id}
                        onClick={() => handleTapVocab(v)}
                        className="bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 active:scale-95 transition-all p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between items-center text-center cursor-pointer min-h-[140px] sm:min-h-[175px]"
                      >
                        <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                          <span>Card 0{idx + 1}</span>
                          <span className={isTapped ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>{isTapped ? '✓' : ''}</span>
                        </div>

                        <div className="my-2">
                          <span className="font-arabic text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 block">
                            {v.ar}
                          </span>
                        </div>

                        <div className="w-full pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
                          <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 block font-sans">
                            {v.en}
                          </span>
                          {isTapped && (
                            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">
                              {v.roman}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: FEMININE POINTING DRILLS (PAGES 17 & 18 - 13 ITEMS) */}
            {currentStep === 4 && (
              <div className="space-y-3">
                {segment2PointSentences.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => audioService.speakArabic(item.ar, audioEnabled)}
                    className="bg-neutral-100 dark:bg-neutral-900 p-3 sm:p-4 rounded-2xl sm:rounded-3xl flex items-center justify-between cursor-pointer group hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 transition-colors"
                    dir="rtl"
                  >
                    <div className="px-4 py-2 sm:px-6 sm:py-3.5 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 shrink-0 rounded-r-xl sm:rounded-r-2xl price-tag-rtl transition-colors max-w-[65%]">
                      <span className="font-arabic text-lg sm:text-2xl font-bold break-words leading-tight">{item.ar}</span>
                    </div>

                    <div className={`flex-1 flex items-center ${item.distance === 'near' ? 'justify-start pr-3 sm:pr-6' : 'justify-end pl-3 sm:pl-6'}`}>
                      {item.distance === 'near' ? (
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 sm:w-12 h-0.5 bg-neutral-300 dark:bg-neutral-700" />
                          <span className="text-3xl sm:text-4xl transition-transform group-hover:scale-110">{item.emoji}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 sm:gap-3 w-full justify-end">
                          <div className="flex-1 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-2 sm:mx-4" />
                          <span className="text-2xl sm:text-3xl opacity-60 transition-transform group-hover:scale-110">{item.emoji}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* STEP 5: THIRD VOCABULARY (PAGE 18 TOP - 8 WORDS) */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {vocabSegment3.map((v, idx) => {
                    const isTapped = revealedVocab[v.id];
                    return (
                      <div
                        key={v.id}
                        onClick={() => handleTapVocab(v)}
                        className="bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 active:scale-95 transition-all p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between items-center text-center cursor-pointer min-h-[140px] sm:min-h-[175px]"
                      >
                        <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                          <span>Card 0{idx + 1}</span>
                          <span className={isTapped ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>{isTapped ? '✓' : ''}</span>
                        </div>

                        <div className="my-2">
                          <span className="font-arabic text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 block">
                            {v.ar}
                          </span>
                        </div>

                        <div className="w-full pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
                          <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 block font-sans">
                            {v.en}
                          </span>
                          {isTapped && (
                            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">
                              {v.roman}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 6: PAGE 18 Q&A FORMULA TABLE (2-COL TABLE) */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-4 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center" dir="rtl">
                    <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center">
                      <span className="font-arabic text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">مَا هٰذَا - مَا هٰذِهِ</span>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 block mt-2" dir="ltr">What is this?</span>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center">
                      <span className="font-arabic text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">مَا ذٰلِكَ - مَا تِلْكَ</span>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 block mt-2" dir="ltr">What is that?</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 7: Q&A DEMONSTRATION DRILLS (PAGE 18 BOTTOM - 4 ITEMS) */}
            {currentStep === 7 && (
              <div className="space-y-4">
                {demoQAPairs.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => audioService.speakArabic(`${item.qAr} ${item.aAr}`, audioEnabled)}
                    className="bg-neutral-100 dark:bg-neutral-900 p-3 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 cursor-pointer group hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 transition-colors"
                    dir="rtl"
                  >
                    {/* First Line (Mobile): Question + Emoji */}
                    <div className="flex items-center w-full sm:w-auto sm:flex-1">
                      <div className="px-4 py-2 sm:px-6 sm:py-3.5 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 shrink-0 rounded-r-xl sm:rounded-r-2xl sm:rounded-l-none price-tag-rtl transition-colors max-w-[65%] sm:max-w-none">
                        <span className="font-arabic text-xl sm:text-2xl font-bold break-words leading-tight">{item.qAr}</span>
                      </div>

                      <div className={`flex-1 flex items-center ${item.distance === 'near' ? 'justify-start pr-3 sm:pr-6' : 'justify-end pl-3 sm:pl-6'}`}>
                        {item.distance === 'near' ? (
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-6 sm:w-12 h-0.5 bg-neutral-300 dark:bg-neutral-700" />
                            <span className="text-3xl sm:text-4xl transition-transform group-hover:scale-110">{item.emoji}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 sm:gap-3 w-full justify-end">
                            <div className="flex-1 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-2 sm:mx-4" />
                            <span className="text-2xl sm:text-3xl opacity-60 transition-transform group-hover:scale-110">{item.emoji}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Second Line (Mobile): Answer */}
                    <div className="px-4 py-2 sm:px-6 sm:py-3.5 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 shrink-0 rounded-l-xl sm:rounded-l-2xl sm:rounded-r-none price-tag-ltr transition-colors self-end sm:self-auto mr-auto sm:mr-0">
                      <span className="font-arabic text-xl sm:text-2xl font-bold">{item.aAr}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* STEP 8: INTERACTIVE PICTURE Q&A (PAGE 19 - 11 EXERCISES) */}
            {currentStep === 8 && (
              <div className="space-y-4">
                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-6 space-y-5">
                  <div className="flex items-center justify-center gap-1.5 pb-1">
                    {qaExercises.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          i === activeQAIndex 
                            ? 'bg-neutral-900 dark:bg-neutral-100 scale-125' 
                            : i < activeQAIndex 
                              ? 'bg-emerald-500' 
                              : 'bg-neutral-300 dark:bg-neutral-700'
                        }`} 
                      />
                    ))}
                  </div>

                  {(() => {
                    const activeQ = qaExercises[activeQAIndex];
                    return (
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-neutral-800 p-3 sm:p-5 rounded-2xl flex items-center justify-between gap-4" dir="rtl">
                          <div className="flex items-center w-full sm:flex-1">
                            <div className="px-4 py-2 sm:px-6 sm:py-3.5 bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 shrink-0 rounded-r-xl sm:rounded-r-2xl sm:rounded-l-none price-tag-rtl transition-colors max-w-[65%] sm:max-w-none">
                              <span className="font-arabic text-xl sm:text-2xl font-bold break-words leading-tight">{activeQ.questionAr}</span>
                            </div>

                            <div className={`flex-1 flex items-center ${(activeQ.questionAr.includes('هٰذَا') || activeQ.questionAr.includes('هٰذِهِ')) ? 'justify-start pr-3 sm:pr-6' : 'justify-end pl-3 sm:pl-6'}`}>
                              {(activeQ.questionAr.includes('هٰذَا') || activeQ.questionAr.includes('هٰذِهِ')) ? (
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <div className="w-6 sm:w-12 h-0.5 bg-neutral-300 dark:bg-neutral-600" />
                                  <span className="text-3xl sm:text-4xl">{activeQ.emoji}</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 sm:gap-3 w-full justify-end">
                                  <div className="flex-1 h-0.5 bg-neutral-300 dark:bg-neutral-600 mx-2 sm:mx-4" />
                                  <span className="text-2xl sm:text-3xl opacity-60">{activeQ.emoji}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-neutral-800 min-h-[76px] rounded-2xl p-4 flex items-center justify-center flex-wrap gap-3" dir="rtl">
                          {selectedChips.length === 0 ? (
                            <span className="text-xs text-neutral-400 dark:text-neutral-500" dir="ltr">
                              Tap word chips below in sequence to assemble your answer
                            </span>
                          ) : (
                            selectedChips.map((chip, index) => (
                              <button
                                key={`${chip}-${index}`}
                                onClick={() => handleRemoveChip(index)}
                                className="bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-arabic font-semibold text-xl px-5 py-2.5 rounded-2xl flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
                              >
                                <span>{chip}</span>
                                <span className="text-xs text-neutral-400 font-mono">✕</span>
                              </button>
                            ))
                          )}
                        </div>

                        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-2" dir="rtl">
                          {activeQ.chips.map((chip, i) => (
                            <button
                              key={`chip-${chip}-${i}`}
                              onClick={() => handleChipClick(chip)}
                              className="bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-arabic font-semibold text-base sm:text-lg px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all active:scale-95"
                            >
                              {chip}
                            </button>
                          ))}
                        </div>

                        {verificationResult.checked && (
                          <div
                            className={`p-4 rounded-2xl text-center text-sm font-semibold transition-all ${
                              verificationResult.success
                                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300'
                                : 'bg-rose-100 dark:bg-rose-950/80 text-rose-900 dark:text-rose-300'
                            }`}
                          >
                            {verificationResult.success ? (
                              <div className="flex items-center justify-center gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <span>Correct: {activeQ.expectedAnswer.join(' ')}</span>
                              </div>
                            ) : (
                              <span>Try again! Select the words in order.</span>
                            )}
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-3 pt-2">
                          <button
                            onClick={handleResetChips}
                            disabled={verificationResult.success}
                            className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Reset</span>
                          </button>
                          
                          {verificationResult.success ? (
                            <button
                              onClick={() => {
                                audioService.playClick();
                                if (activeQAIndex < qaExercises.length - 1) {
                                  setActiveQAIndex((prev) => prev + 1);
                                  handleResetChips();
                                } else {
                                  handleNextStep();
                                }
                              }}
                              className="px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5"
                            >
                              <span>{activeQAIndex < qaExercises.length - 1 ? 'Next' : 'Finish'}</span>
                              {activeQAIndex < qaExercises.length - 1 && <ArrowRight className="w-4 h-4" />}
                            </button>
                          ) : (
                            <button
                              disabled={selectedChips.length === 0}
                              onClick={handleVerifySentence}
                              className="px-6 py-2.5 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                              Verify Answer
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* STEP 9: PARTNER PRACTICE DIRECTIVE (PAGE 19 BOTTOM) */}
            {currentStep === 9 && (
              <div className="space-y-6">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl space-y-4 text-center">
                  <p className="text-xl font-bold text-neutral-900 dark:text-neutral-100 leading-relaxed py-6">
                    "Stand in pairs and point with your hand to various objects near and far, asking and answering questions."
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* FOOTER STAGE NAVIGATION */}
          <div className="mt-8 pt-6 border-t-0 bg-neutral-100/60 dark:bg-neutral-900/60 rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className="w-full sm:w-auto px-6 py-3.5 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-3xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Step Dots Indicator */}
            <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 max-w-[200px] sm:max-w-none mx-auto py-2 sm:py-0">
              {STEPS.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => handleGoToStep(i)}
                  className={`w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    i === currentStep
                      ? 'bg-neutral-900 dark:bg-neutral-100 scale-125'
                      : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                  }`}
                  title={step.title}
                />
              ))}
            </div>

            <button
              onClick={handleNextStep}
              disabled={currentStep === STEPS.length - 1}
              className="w-full sm:w-auto px-6 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed rounded-3xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

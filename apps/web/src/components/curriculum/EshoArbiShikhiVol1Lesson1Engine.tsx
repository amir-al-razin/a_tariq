import { useState } from 'react';
import { Volume2, VolumeX, CheckCircle, Sparkles, Users, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

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
  bn: string;
  emoji: string;
}

// 3 SEGMENTS OF VOCABULARY AS IN THE PHYSICAL BOOK
const vocabSegment1: VocabItem[] = [
  { id: 1, ar: 'كِتَابٌ', roman: 'kitābun', bn: 'একটি বই', emoji: '📖' },
  { id: 2, ar: 'قَلَمٌ', roman: 'qalamun', bn: 'একটি কলম', emoji: '🖊️' },
  { id: 3, ar: 'كُرْسِيٌّ', roman: 'kursiyyun', bn: 'একটি চেয়ার', emoji: '🪑' },
  { id: 4, ar: 'بَيْتٌ', roman: 'baytun', bn: 'একটি ঘর', emoji: '🏠' },
  { id: 5, ar: 'بَابٌ', roman: 'bābun', bn: 'একটি দরজা', emoji: '🚪' },
  { id: 6, ar: 'مِصْبَاحٌ', roman: 'miṣbāḥun', bn: 'একটি বাতি', emoji: '💡' },
  { id: 7, ar: 'جِدَارٌ', roman: 'jidārun', bn: 'একটি দেয়াল', emoji: '🧱' },
  { id: 8, ar: 'سَرِيْرٌ', roman: 'sarīrun', bn: 'একটি খাট', emoji: '🛏️' },
];

const vocabSegment2: VocabItem[] = [
  { id: 9, ar: 'مَدْرَسَةٌ', roman: 'madrasatun', bn: 'একটি মাদ্রাসা', emoji: '🏫' },
  { id: 10, ar: 'كُرَّاسَةٌ', roman: 'kurrāsatun', bn: 'একটি খাতা', emoji: '📓' },
  { id: 11, ar: 'طَاوِلَةٌ', roman: 'ṭāwilatun', bn: 'একটি টেবিল', emoji: '🪵' },
  { id: 12, ar: 'حَقِيْبَةٌ', roman: 'ḥaqībatun', bn: 'একটি ব্যাগ', emoji: '🎒' },
  { id: 13, ar: 'حُجْرَةٌ', roman: 'ḥujratun', bn: 'একটি কামরা', emoji: '🚪' },
  { id: 14, ar: 'نَافِذَةٌ', roman: 'nāfidhatun', bn: 'একটি জানালা', emoji: '🪟' },
  { id: 15, ar: 'سَاعَةٌ', roman: 'sā‘atun', bn: 'একটি ঘড়ি', emoji: '⌚' },
  { id: 16, ar: 'نَظَّارَةٌ', roman: 'naẓẓāratun', bn: 'একটি চশমা', emoji: '👓' },
];

const vocabSegment3: VocabItem[] = [
  { id: 17, ar: 'قُفْلٌ', roman: 'quflun', bn: 'একটি তালা', emoji: '🔒' },
  { id: 18, ar: 'مِفْتَاحٌ', roman: 'miftāḥun', bn: 'একটি চাবি', emoji: '🔑' },
  { id: 19, ar: 'صُنْدُوْقٌ', roman: 'ṣundūqun', bn: 'একটি বাক্স', emoji: '📦' },
  { id: 20, ar: 'مِظَلَّةٌ', roman: 'miẓallatun', bn: 'একটি ছাতা', emoji: '☂️' },
  { id: 21, ar: 'سَيَّارَةٌ', roman: 'sayyāratun', bn: 'একটি কার', emoji: '🚗' },
  { id: 22, ar: 'دَرَّاجَةٌ', roman: 'darrājatun', bn: 'একটি সাইকেল', emoji: '🚲' },
];

interface PointSentenceItem {
  id: number;
  ar: string;
  bn: string;
  pointer: string;
  distance: 'near' | 'far';
  emoji: string;
}

const segment1PointSentences: PointSentenceItem[] = [
  { id: 1, ar: 'هَذَا كِتَابٌ', bn: 'এটি একটি বই', pointer: 'هَذَا', distance: 'near', emoji: '📖' },
  { id: 2, ar: 'ذَلِكَ قَلَمٌ', bn: 'ওটি একটি কলম', pointer: 'ذَلِكَ', distance: 'far', emoji: '🖊️' },
  { id: 3, ar: 'هَذَا بَيْتٌ', bn: 'এটি একটি ঘর', pointer: 'هَذَا', distance: 'near', emoji: '🏠' },
  { id: 4, ar: 'ذَلِكَ كُرْسِيٌّ', bn: 'ওটি একটি চেয়ার', pointer: 'ذَلِكَ', distance: 'far', emoji: '🪑' },
];

const segment2PointSentences: PointSentenceItem[] = [
  { id: 1, ar: 'هَذِهِ مَدْرَسَةٌ', bn: 'এটি একটি মাদ্রাসা', pointer: 'هَذِهِ', distance: 'near', emoji: '🏫' },
  { id: 2, ar: 'تِلْكَ كُرَّاسَةٌ', bn: 'ওটি একটি খাতা', pointer: 'تِلْكَ', distance: 'far', emoji: '📓' },
  { id: 3, ar: 'هَذِهِ حَقِيْبَةٌ', bn: 'এটি একটি ব্যাগ', pointer: 'هَذِهِ', distance: 'near', emoji: '🎒' },
  { id: 4, ar: 'تِلْكَ طَاوِلَةٌ', bn: 'ওটি একটি টেবিল', pointer: 'تِلْكَ', distance: 'far', emoji: '🪵' },
];

interface QAExerciseItem {
  id: number;
  questionAr: string;
  questionBn: string;
  distance: 'near' | 'far';
  emoji: string;
  expectedAnswer: string[];
  chips: string[];
}

const qaExercises: QAExerciseItem[] = [
  {
    id: 1,
    questionAr: 'مَا هَذَا؟',
    questionBn: 'এটি কী?',
    distance: 'near',
    emoji: '🪑',
    expectedAnswer: ['هَذَا', 'كُرْسِيٌّ'],
    chips: ['كُرْسِيٌّ', 'ذَلِكَ', 'هَذَا', 'بَيْتٌ', 'قَلَمٌ'],
  },
  {
    id: 2,
    questionAr: 'مَا ذَلِكَ؟',
    questionBn: 'ওটি কী?',
    distance: 'far',
    emoji: '🏠',
    expectedAnswer: ['ذَلِكَ', 'بَيْتٌ'],
    chips: ['هَذَا', 'بَيْتٌ', 'ذَلِكَ', 'كِتَابٌ', 'مَسْجِدٌ'],
  },
  {
    id: 3,
    questionAr: 'مَا هَذِهِ؟',
    questionBn: 'এটি কী?',
    distance: 'near',
    emoji: '📓',
    expectedAnswer: ['هَذِهِ', 'كُرَّاسَةٌ'],
    chips: ['تِلْكَ', 'كُرَّاسَةٌ', 'هَذِهِ', 'طَاوِلَةٌ', 'هَذَا'],
  },
  {
    id: 4,
    questionAr: 'مَا تِلْكَ؟',
    questionBn: 'ওটি কী?',
    distance: 'far',
    emoji: '🚗',
    expectedAnswer: ['تِلْكَ', 'سَيَّارَةٌ'],
    chips: ['تِلْكَ', 'سَيَّارَةٌ', 'هَذِهِ', 'دَرَّاجَةٌ', 'سَاعَةٌ'],
  },
  {
    id: 5,
    questionAr: 'مَا هَذَا؟',
    questionBn: 'এটি কী?',
    distance: 'near',
    emoji: '🔒',
    expectedAnswer: ['هَذَا', 'قُفْلٌ'],
    chips: ['هَذَا', 'قُفْلٌ', 'ذَلِكَ', 'مِفْتَاحٌ', 'صُنْدُوْقٌ'],
  },
];

const STEPS = [
  { id: 'seg1_vocab', titleEn: 'Segment 1: Initial Masculine Vocab', titleBn: '১ম খণ্ড: পুংলিঙ্গ শব্দাবলী' },
  { id: 'seg1_drill', titleEn: 'Segment 1 Exercises: Near & Far Pointers (هَذَا / ذَلِكَ)', titleBn: '১ম খণ্ড: ইশারা অনুশীলন' },
  { id: 'seg2_vocab', titleEn: 'Segment 2: Feminine Vocab (ending in ة)', titleBn: '২য় খণ্ড: স্ত্রীলিঙ্গ শব্দাবলী' },
  { id: 'seg2_drill', titleEn: 'Segment 2 Exercises: Feminine Pointers (هَذِهِ / تِلْكَ)', titleBn: '২য় খণ্ড: স্ত্রীলিঙ্গ ইশারা' },
  { id: 'seg3_vocab_qa', titleEn: 'Segment 3: Household Vocab & RTL Badge Q&A', titleBn: '৩য় খণ্ড: শব্দাবলী ও প্রশ্নোত্তর' },
  { id: 'partner_practice', titleEn: 'Author Partner Practice Notice', titleBn: 'উস্তাদের সাথী অনুশীলন নির্দেশ' },
];

export function EshoArbiShikhiVol1Lesson1Engine() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
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
      {/* HEADER NAVIGATION */}
      <header className="max-w-4xl w-full mx-auto bg-white dark:bg-neutral-800 rounded-3xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-3xl bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 font-bold font-arabic text-xl shrink-0">
            أم
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                3-Segment Book Flow Engine
              </span>
              <span className="text-[10px] bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2.5 py-0.5 rounded-full font-mono">
                Abu Taher Misbah
              </span>
            </div>
            <h1 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              إسأل وتعلم • الدرس الأول
              <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400">
                (Volume 1, Lesson 1)
              </span>
            </h1>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full sm:w-72 flex flex-col gap-1.5">
          <div className="flex justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
            <span>{STEPS[currentStep].titleEn}</span>
            <span className="font-mono">{progressPercent}%</span>
          </div>
          <div className="w-full bg-neutral-200 dark:bg-neutral-950 h-3 rounded-full overflow-hidden p-0.5">
            <div
              className="bg-neutral-900 dark:bg-neutral-100 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Audio Action Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              audioService.playClick();
              setAudioEnabled(!audioEnabled);
            }}
            className="p-3 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-200 rounded-3xl transition-colors text-xs font-semibold flex items-center gap-2"
            title="Toggle Audio"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" /> : <VolumeX className="w-4 h-4 text-neutral-400" />}
          </button>
        </div>
      </header>

      {/* MAIN PLAYABLE CANVAS */}
      <main className="max-w-4xl w-full mx-auto flex-1 flex flex-col justify-center mb-6">
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 min-h-[540px] flex flex-col justify-between transition-colors relative">
          
          {/* STEP CONTENT AREA */}
          <div className="w-full flex-1 flex flex-col justify-center">

            {/* SEGMENT 1 VOCAB (INITIAL MASCULINE VOCAB) */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-5 rounded-3xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                    Segment 1 • المفردات الأولى (المذكر)
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
                    1st Vocabulary Segment (Masculine Nouns)
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Read vowelled Arabic first as in the book table. Tap for teacher audio and transliteration help.
                  </p>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vocabSegment1.map((v) => {
                      const isTapped = revealedVocab[v.id];
                      return (
                        <div
                          key={v.id}
                          onClick={() => handleTapVocab(v)}
                          className="bg-white dark:bg-neutral-800 hover:bg-neutral-200/70 dark:hover:bg-neutral-700 active:scale-98 transition-all p-4 rounded-2xl flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-4" dir="rtl">
                            <span className="font-arabic text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                              {v.ar}
                            </span>
                            <span className="text-sm font-bengali text-neutral-700 dark:text-neutral-300 font-medium">
                              {v.bn}
                            </span>
                          </div>

                          <div className="text-right">
                            {isTapped ? (
                              <div>
                                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 block">
                                  {v.roman}
                                </span>
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">
                                  🔊 Audio Played
                                </span>
                              </div>
                            ) : (
                              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">
                                Tap for Audio
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* SEGMENT 1 DRILL (هَذَا / ذَلِكَ) */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-5 rounded-3xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                    Segment 1 Demonstration • هَذَا / ذَلِكَ
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
                    Spatial Demonstration for 1st Segment
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Rightmost: Arabic sentence tag badge. Image placed to its left at close vs far distance.
                  </p>
                </div>

                <div className="space-y-4">
                  {segment1PointSentences.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => audioService.speakArabic(item.ar, audioEnabled)}
                      className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-3xl flex items-center justify-between cursor-pointer group transition-colors"
                      dir="rtl"
                    >
                      <div
                        className="px-8 py-4 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 shrink-0 rounded-r-2xl price-tag-rtl transition-colors"
                      >
                        <span className="font-arabic text-3xl font-bold">{item.ar}</span>
                      </div>

                      <div
                        className={`flex-1 flex items-center gap-3 ${
                          item.distance === 'near' ? 'justify-start pr-6' : 'justify-end pl-6'
                        }`}
                      >
                        {item.distance === 'near' ? (
                          <>
                            <span className="text-5xl transition-transform group-hover:scale-110">
                              {item.emoji}
                            </span>
                            <span className="text-xs font-mono bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400" dir="ltr">
                              Near ({item.pointer})
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-xs font-mono bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400" dir="ltr">
                              Far ({item.pointer})
                            </span>
                            <span className="text-3xl opacity-60 transition-transform group-hover:scale-110">
                              {item.emoji}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEGMENT 2 VOCAB (FEMININE NOUNS WITH ة) */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-5 rounded-3xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                    Segment 2 • المفردات الثانية (المؤنث)
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
                    2nd Vocabulary Segment (Feminine Nouns with ة)
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Introduced after initial masculine exercises. Read vowelled Arabic first.
                  </p>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vocabSegment2.map((v) => {
                      const isTapped = revealedVocab[v.id];
                      return (
                        <div
                          key={v.id}
                          onClick={() => handleTapVocab(v)}
                          className="bg-white dark:bg-neutral-800 hover:bg-neutral-200/70 dark:hover:bg-neutral-700 active:scale-98 transition-all p-4 rounded-2xl flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-4" dir="rtl">
                            <span className="font-arabic text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                              {v.ar}
                            </span>
                            <span className="text-sm font-bengali text-neutral-700 dark:text-neutral-300 font-medium">
                              {v.bn}
                            </span>
                          </div>

                          <div className="text-right">
                            {isTapped ? (
                              <div>
                                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 block">
                                  {v.roman}
                                </span>
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">
                                  🔊 Audio Played
                                </span>
                              </div>
                            ) : (
                              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">
                                Tap for Audio
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* SEGMENT 2 DRILL (هَذِهِ / تِلْكَ) */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-5 rounded-3xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                    Segment 2 Demonstration • هَذِهِ / تِلْكَ
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
                    Feminine Pointers Demonstration
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Feminine demonstratives naturally pair with nouns ending in ة.
                  </p>
                </div>

                <div className="space-y-4">
                  {segment2PointSentences.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => audioService.speakArabic(item.ar, audioEnabled)}
                      className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-3xl flex items-center justify-between cursor-pointer group transition-colors"
                      dir="rtl"
                    >
                      <div
                        className="px-8 py-4 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 shrink-0 rounded-r-2xl price-tag-rtl transition-colors"
                      >
                        <span className="font-arabic text-3xl font-bold">{item.ar}</span>
                      </div>

                      <div
                        className={`flex-1 flex items-center gap-3 ${
                          item.distance === 'near' ? 'justify-start pr-6' : 'justify-end pl-6'
                        }`}
                      >
                        {item.distance === 'near' ? (
                          <>
                            <span className="text-5xl transition-transform group-hover:scale-110">
                              {item.emoji}
                            </span>
                            <span className="text-xs font-mono bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400" dir="ltr">
                              Fem Near ({item.pointer})
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-xs font-mono bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400" dir="ltr">
                              Fem Far ({item.pointer})
                            </span>
                            <span className="text-3xl opacity-60 transition-transform group-hover:scale-110">
                              {item.emoji}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEGMENT 3 VOCAB */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    Segment 3 • Household Objects (المفردات الثالثة)
                  </h2>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    Tap card to play audio & reveal transliteration
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {vocabSegment3.map((v, idx) => {
                    const isTapped = revealedVocab[v.id];
                    return (
                      <div
                        key={v.id}
                        onClick={() => handleTapVocab(v)}
                        className="bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 active:scale-95 transition-all p-6 rounded-3xl flex flex-col justify-between items-center text-center cursor-pointer min-h-[175px]"
                      >
                        <div className="w-full flex items-center justify-between text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                          <span>Card 0{idx + 1}</span>
                          <span className={isTapped ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>{isTapped ? '✓ Audio Played' : ''}</span>
                        </div>

                        <div className="my-2">
                          <span className="font-arabic text-4xl font-bold text-neutral-900 dark:text-neutral-100 block">
                            {v.ar}
                          </span>
                        </div>

                        <div className="w-full pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
                          <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 block font-sans">
                            {v.bn}
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

            {/* SEGMENT 3 INTERACTIVE Q&A */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  Segment 3 • Interactive Q&A Exercises
                </h2>

                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold">
                      Exercise {activeQAIndex + 1} of {qaExercises.length}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={activeQAIndex === 0}
                        onClick={() => {
                          audioService.playClick();
                          setActiveQAIndex((prev) => prev - 1);
                          handleResetChips();
                        }}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        disabled={activeQAIndex === qaExercises.length - 1}
                        onClick={() => {
                          audioService.playClick();
                          setActiveQAIndex((prev) => prev + 1);
                          handleResetChips();
                        }}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  {(() => {
                    const activeQ = qaExercises[activeQAIndex];
                    return (
                      <div className="space-y-4">
                        {/* Question Box */}
                        <div className="bg-white dark:bg-neutral-800 p-5 rounded-2xl flex items-center justify-between" dir="rtl">
                          <div className="flex items-center gap-4">
                            <span className="text-4xl">{activeQ.emoji}</span>
                            <div>
                              <span className="font-arabic font-bold text-3xl text-neutral-900 dark:text-neutral-100 block">
                                {activeQ.questionAr}
                              </span>
                              <span className="text-xs font-bengali text-neutral-500 dark:text-neutral-400 block mt-1" dir="ltr">
                                {activeQ.questionBn} ({activeQ.distance === 'near' ? 'Near Pointer' : 'Far Pointer'})
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => audioService.speakArabic(activeQ.questionAr, audioEnabled)}
                            className="p-3 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full transition-colors"
                          >
                            <Volume2 className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                          </button>
                        </div>

                        {/* Selected Answer Slot */}
                        <div className="bg-white dark:bg-neutral-800 min-h-[76px] rounded-2xl p-4 flex items-center justify-center flex-wrap gap-3" dir="rtl">
                          {selectedChips.length === 0 ? (
                            <span className="text-xs font-bengali text-neutral-400 dark:text-neutral-500" dir="ltr">
                              নিচের শব্দগুলোতে চাপ দিয়ে ক্রমানুসারে আপনার উত্তর সাজান
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

                        {/* Available Word Chips */}
                        <div className="flex items-center justify-center flex-wrap gap-3 pt-2" dir="rtl">
                          {activeQ.chips.map((chip, i) => (
                            <button
                              key={`chip-${chip}-${i}`}
                              onClick={() => handleChipClick(chip)}
                              className="bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-arabic font-semibold text-lg px-5 py-2.5 rounded-2xl transition-all active:scale-95"
                            >
                              {chip}
                            </button>
                          ))}
                        </div>

                        {/* Verification Result Banner */}
                        {verificationResult.checked && (
                          <div
                            className={`p-4 rounded-2xl text-center text-sm font-bengali font-semibold transition-all ${
                              verificationResult.success
                                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300'
                                : 'bg-rose-100 dark:bg-rose-950/80 text-rose-900 dark:text-rose-300'
                            }`}
                          >
                            {verificationResult.success ? (
                              <div className="flex items-center justify-center gap-2">
                                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <span>চমৎকার! সঠিক উত্তর: {activeQ.expectedAnswer.join(' ')}</span>
                              </div>
                            ) : (
                              <span>আবার চেষ্টা করুন! সঠিক শব্দগুলো ক্রমানুসারে নির্বাচন করুন।</span>
                            )}
                          </div>
                        )}

                        {/* Controls */}
                        <div className="flex items-center justify-end gap-3 pt-2">
                          <button
                            onClick={handleResetChips}
                            className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-1.5"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Reset</span>
                          </button>
                          <button
                            disabled={selectedChips.length === 0}
                            onClick={handleVerifySentence}
                            className="px-6 py-2.5 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            Verify Answer
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* AUTHOR PARTNER PRACTICE NOTICE */}
            {currentStep === 6 && (
              <div className="space-y-6">
                {/* Maulana Misbah's Exact Instructions */}
                <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-3xl space-y-3 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>Author's Physical Partner Instructions</span>
                    </span>
                    <span className="text-xs font-bengali text-neutral-500 dark:text-neutral-400">
                      মাওলানা আবু তাহের মিসবাহ (দা.বা.)
                    </span>
                  </div>

                  <p className="text-base font-bengali font-semibold text-neutral-900 dark:text-neutral-100 pt-1 leading-relaxed">
                    "দু'জন দাঁড়াও এবং দূর ও নিকট থেকে বিভিন্ন বস্তুর দিকে হাতে ইশারা করে প্রশ্ন করো এবং উত্তর দাও।"
                  </p>
                </div>

                {/* AI Voice Partner Active Cooking Notice */}
                <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-3xl space-y-2 transition-colors">
                  <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <h3 className="text-base font-bold">
                      Interactive AI Voice Speaking Partner Notice
                    </h3>
                  </div>
                  <p className="text-sm font-bengali text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    মাওলানা আবু তাহের মিসবাহ (দা.বা.) মূল পাঠ্যবইয়ে ২ জন শিক্ষার্থীর মুখোমুখি সক্রিয় ইশারা ও অনুশীলনের নির্দেশ দিয়েছেন। আমরা বর্তমানে এই বিভাগের জন্য একটি রিয়েল-টাইম ইন্টারেক্টিভ AI ভয়েস স্পিকিং পার্টনার তৈরি করছি, যার মাধ্যমে আপনি সরাসরি অ্যাপের সাথেই কথা বলে ইশারা অনুশীলন করতে পারবেন!
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
              <span>Previous Section</span>
            </button>

            {/* Step Dots Indicator */}
            <div className="flex items-center gap-2">
              {STEPS.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => handleGoToStep(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentStep
                      ? 'bg-neutral-900 dark:bg-neutral-100 scale-125'
                      : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                  }`}
                  title={step.titleEn}
                />
              ))}
            </div>

            <button
              onClick={handleNextStep}
              className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 rounded-3xl font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>{currentStep === STEPS.length - 1 ? 'Lesson Finished 🎉' : 'Next Section →'}</span>
              {currentStep < STEPS.length - 1 && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </main>

      <footer className="max-w-4xl w-full mx-auto text-center text-xs text-neutral-500 dark:text-neutral-400 py-4 font-bengali">
        মাওলানা আবু তাহের মিসবাহ (দা.বা.) প্রণীত <span className="text-neutral-700 dark:text-neutral-200 font-semibold">এসো আরবী শিখি (১ম খণ্ড, ১ম পাঠ)</span> এর ৩-খণ্ড বুক ফ্লো এডাপ্টেশন।
      </footer>
    </div>
  );
}

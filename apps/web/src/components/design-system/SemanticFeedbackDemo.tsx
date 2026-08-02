import { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, ShieldAlert, Sun, Moon, Split, Layers, ShieldCheck } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

interface QuizOption {
  id: string;
  arabic: string;
  romanized: string;
  status: 'success' | 'error' | 'warning';
  label: string;
  explanation: string;
}

export function SemanticFeedbackDemo() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'system' | 'split' | 'force-dark' | 'force-light'>('split');

  const quizOptions: QuizOption[] = [
    {
      id: 'opt1',
      arabic: 'رَسُولُ اللَّهِ',
      romanized: 'rasūlu -llāhi',
      status: 'success',
      label: 'Correct (Success Green)',
      explanation: 'Flawless Idafah possessive structure! The possessed noun (Mudhaf - rasūlu) takes NO Alif-Lam and NO Tanween, while the Almighty Possessor (Mudhaf Ilayhi - Allāhi) resides correctly in Genitive Case (Majrur with Kasra).'
    },
    {
      id: 'opt2',
      arabic: 'الرَّسُولُ اللَّهِ',
      romanized: 'ar-rasūlu -llāhi',
      status: 'error',
      label: 'Not Right / Error (Red)',
      explanation: "Not quite right! In classical Arabic syntax, the first word in an Idafah chain (Mudhaf) is strictly forbidden from taking the definite article Alif-Lam ('الـ'). Remove Alif-Lam to restore grammatical harmony."
    },
    {
      id: 'opt3',
      arabic: 'رَسُولٌ لِلَّهِ',
      romanized: 'rasūlun lillāhi',
      status: 'warning',
      label: 'Warning / Prepositional Variant (Amber)',
      explanation: "Grammatically intelligible in extended Arabic ('a messenger belonging to Allah' using preposition Lam), but this does NOT constitute a direct Idafah possessive chain! Use simple juxtaposition without prepositions."
    }
  ];

  const currentSelectionObj = quizOptions.find(o => o.id === selectedOption);

  const renderFeedbackDemoContent = (isForcedDark: boolean, isForcedLight: boolean, labelSuffix: string) => {
    /* Compute classes based on theme mode to showcase against explicit dark (#000000) and light (#FFFFFF) backgrounds without borders */
    const containerClass = isForcedDark
      ? 'bg-[#000000] text-neutral-50'
      : isForcedLight
      ? 'bg-[#FFFFFF] text-neutral-900'
      : 'bg-neutral-100 dark:bg-[#000000] text-neutral-900 dark:text-neutral-50';

    const cardLayerClass = isForcedDark
      ? 'bg-[#121212]'
      : isForcedLight
      ? 'bg-neutral-100/80'
      : 'bg-white dark:bg-[#141414]';

    return (
      <div className={`rounded-3xl p-6 md:p-8 space-y-10 transition-all ${containerClass}`}>
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" title="Active Canvas Status" />
            <span className="font-english-semibold text-sm tracking-wide uppercase">
              {labelSuffix}
            </span>
          </div>
          <span className={`text-[11px] font-mono px-3 py-1 rounded-full font-semibold ${
            isForcedDark ? 'bg-neutral-800 text-neutral-200' : isForcedLight ? 'bg-neutral-200 text-neutral-800' : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
          }`}>
            {isForcedDark ? 'Canvas: Pure Black #000000' : isForcedLight ? 'Canvas: Pure White #FFFFFF' : 'Live Responsive Canvas'}
          </span>
        </div>

        {/* Demo 1: Interactive Quiz Feedback States */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="font-english-semibold text-lg flex items-center gap-2">
              <span>1. Interactive Quiz Feedback Engine</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981]">Invariable States</span>
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Tap any option to witness zero-border tone-on-tone semantic feedback transitions against this exact canvas.
            </p>
          </div>

          <div className={`p-6 sm:p-8 rounded-3xl space-y-6 ${cardLayerClass}`}>
            <div className="text-center space-y-2 max-w-lg mx-auto">
              <span className="text-xs font-english uppercase tracking-wider text-neutral-400 block">
                Idafah Syntax Drill · Select One Option
              </span>
              <p className="font-english-semibold text-base sm:text-lg">
                Select the correct Idafah possessive chain for &quot;The Messenger of Allah&quot;:
              </p>
            </div>

            <div className="space-y-3 max-w-xl mx-auto">
              {quizOptions.map((opt) => {
                const isThisSelected = selectedOption === opt.id;
                let pillToneClass = isForcedDark ? 'bg-[#1A1A1A] hover:bg-neutral-800 text-neutral-100' : isForcedLight ? 'bg-white hover:bg-neutral-50 text-neutral-900' : 'bg-neutral-100 dark:bg-[#1A1A1A] hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100';

                if (isThisSelected) {
                  if (opt.status === 'success') {
                    pillToneClass = isForcedDark ? 'bg-[#052E16] text-[#4ADE80] font-semibold scale-[1.02]' : isForcedLight ? 'bg-[#F0FDF4] text-[#15803D] font-semibold scale-[1.02]' : 'bg-[#F0FDF4] dark:bg-[#052E16] text-[#15803D] dark:text-[#4ADE80] font-semibold scale-[1.02]';
                  } else if (opt.status === 'error') {
                    pillToneClass = isForcedDark ? 'bg-[#3F0C0C] text-[#F87171] font-semibold scale-[1.02]' : isForcedLight ? 'bg-[#FEF2F2] text-[#B91C1C] font-semibold scale-[1.02]' : 'bg-[#FEF2F2] dark:bg-[#3F0C0C] text-[#B91C1C] dark:text-[#F87171] font-semibold scale-[1.02]';
                  } else {
                    pillToneClass = isForcedDark ? 'bg-[#3E270A] text-[#FBBF24] font-semibold scale-[1.02]' : isForcedLight ? 'bg-[#FEF3C7] text-[#B45309] font-semibold scale-[1.02]' : 'bg-[#FEF3C7] dark:bg-[#3E270A] text-[#B45309] dark:text-[#FBBF24] font-semibold scale-[1.02]';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedOption(opt.id)}
                    className={`w-full p-5 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer outline-none ${pillToneClass}`}
                  >
                    <div className="text-left font-english text-xs sm:text-sm flex items-center gap-3">
                      {opt.status === 'success' && <CheckCircle2 className={`w-5 h-5 shrink-0 ${isThisSelected ? (isForcedDark ? 'text-[#4ADE80]' : isForcedLight ? 'text-[#15803D]' : 'text-[#15803D] dark:text-[#4ADE80]') : 'text-neutral-400'}`} />}
                      {opt.status === 'error' && <XCircle className={`w-5 h-5 shrink-0 ${isThisSelected ? (isForcedDark ? 'text-[#F87171]' : isForcedLight ? 'text-[#B91C1C]' : 'text-[#B91C1C] dark:text-[#F87171]') : 'text-neutral-400'}`} />}
                      {opt.status === 'warning' && <AlertTriangle className={`w-5 h-5 shrink-0 ${isThisSelected ? (isForcedDark ? 'text-[#FBBF24]' : isForcedLight ? 'text-[#B45309]' : 'text-[#B45309] dark:text-[#FBBF24]') : 'text-neutral-400'}`} />}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="block font-semibold">{opt.label}</span>
                          {isThisSelected && (
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10 font-bold">Selected</span>
                          )}
                        </div>
                        <span className="text-[11px] opacity-85 font-mono block mt-0.5">{opt.romanized}</span>
                      </div>
                    </div>
                    <span className="font-cairo font-bold text-2xl sm:text-3xl pl-4 leading-[2.4]" dir="rtl">
                      {opt.arabic}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Tone-on-Tone Box (Zero Borders) */}
            {currentSelectionObj && (
              <div className={`max-w-xl mx-auto p-6 rounded-2xl transition-all duration-300 ${
                currentSelectionObj.status === 'success'
                  ? (isForcedDark ? 'bg-[#052E16]/95 text-[#4ADE80]' : isForcedLight ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#F0FDF4] dark:bg-[#052E16] text-[#15803D] dark:text-[#4ADE80]')
                  : currentSelectionObj.status === 'error'
                  ? (isForcedDark ? 'bg-[#3F0C0C]/95 text-[#F87171]' : isForcedLight ? 'bg-[#FEF2F2] text-[#B91C1C]' : 'bg-[#FEF2F2] dark:bg-[#3F0C0C] text-[#B91C1C] dark:text-[#F87171]')
                  : (isForcedDark ? 'bg-[#3E270A]/95 text-[#FBBF24]' : isForcedLight ? 'bg-[#FEF3C7] text-[#B45309]' : 'bg-[#FEF3C7] dark:bg-[#3E270A] text-[#B45309] dark:text-[#FBBF24]')
              }`}>
                <div className="flex items-start gap-3">
                  {currentSelectionObj.status === 'success' && <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />}
                  {currentSelectionObj.status === 'error' && <XCircle className="w-6 h-6 shrink-0 mt-0.5" />}
                  {currentSelectionObj.status === 'warning' && <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />}
                  <div className="space-y-1">
                    <span className="font-english-semibold text-sm uppercase tracking-wider block">
                      {currentSelectionObj.status === 'success' ? '✓ Excellent Mastery (Invariable Success Green)' : currentSelectionObj.status === 'error' ? '× Opportunity to Review (Invariable Error Red)' : '! Grammatical Caution (Invariable Warning Amber)'}
                    </span>
                    <p className="font-english text-xs sm:text-sm leading-relaxed opacity-95">
                      {currentSelectionObj.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Demo 2: Zero-Border Notification Banners */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h4 className="font-english-semibold text-lg">
              2. Zero-Border Notification Banners
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              High-impact pedagogical messaging engineered with permanent semantic state colors relying strictly on pure flat tone-on-tone background separation without a single pixel of border or drop shadow.
            </p>
          </div>

          <div className="space-y-4">
            {/* Success Banner */}
            <div className={`p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isForcedDark ? 'bg-[#052E16] text-[#4ADE80]' : isForcedLight ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#F0FDF4] dark:bg-[#052E16] text-[#15803D] dark:text-[#4ADE80]'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isForcedDark ? 'bg-[#4ADE80]/20 text-[#4ADE80]' : isForcedLight ? 'bg-[#15803D]/15 text-[#15803D]' : 'bg-[#15803D]/15 dark:bg-[#4ADE80]/20'}`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-english-semibold text-sm block">Chapter 1 Complete! · تم الجزء الأول</span>
                  <span className="text-xs opacity-90 font-english block">All 20 vocabulary nouns and demonstratives have reached Stage 3 Harakat proficiency.</span>
                </div>
              </div>
              <button type="button" onClick={() => {}} className={`px-4 py-2 rounded-full text-xs font-english-semibold shrink-0 cursor-pointer outline-none transition-opacity hover:opacity-85 ${
                isForcedDark ? 'bg-[#4ADE80] text-[#052E16]' : isForcedLight ? 'bg-[#15803D] text-white' : 'bg-[#15803D] text-white dark:bg-[#4ADE80] dark:text-[#052E16]'
              }`}>
                Next Volume
              </button>
            </div>

            {/* Not Right / Error Banner */}
            <div className={`p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isForcedDark ? 'bg-[#3F0C0C] text-[#F87171]' : isForcedLight ? 'bg-[#FEF2F2] text-[#B91C1C]' : 'bg-[#FEF2F2] dark:bg-[#3F0C0C] text-[#B91C1C] dark:text-[#F87171]'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isForcedDark ? 'bg-[#F87171]/20 text-[#F87171]' : isForcedLight ? 'bg-[#B91C1C]/15 text-[#B91C1C]' : 'bg-[#B91C1C]/15 dark:bg-[#F87171]/20'}`}>
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-english-semibold text-sm block">Not Right / Needs Review · Pronoun Gender Disconnect</span>
                  <span className="text-xs opacity-90 font-english block">You matched a masculine verb Form I (&apos;kataba&apos;) with a feminine pronoun (&apos;hiya&apos;). Let&apos;s do a quick brush-up!</span>
                </div>
              </div>
              <button type="button" onClick={() => {}} className={`px-4 py-2 rounded-full text-xs font-english-semibold shrink-0 cursor-pointer outline-none transition-opacity hover:opacity-85 ${
                isForcedDark ? 'bg-[#F87171] text-[#3F0C0C]' : isForcedLight ? 'bg-[#B91C1C] text-white' : 'bg-[#B91C1C] text-white dark:bg-[#F87171] dark:text-[#3F0C0C]'
              }`}>
                Review Rule
              </button>
            </div>

            {/* Warning / Guidance Banner */}
            <div className={`p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isForcedDark ? 'bg-[#3E270A] text-[#FBBF24]' : isForcedLight ? 'bg-[#FEF3C7] text-[#B45309]' : 'bg-[#FEF3C7] dark:bg-[#3E270A] text-[#B45309] dark:text-[#FBBF24]'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isForcedDark ? 'bg-[#FBBF24]/20 text-[#FBBF24]' : isForcedLight ? 'bg-[#B45309]/15 text-[#B45309]' : 'bg-[#B45309]/15 dark:bg-[#FBBF24]/20'}`}>
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-english-semibold text-sm block">Warning Guidance · Unvoweled Stage Transition</span>
                  <span className="text-xs opacity-90 font-english block">You are stepping into Stage 4 (Zero Harakat Mastery). Rely on syntactic structural clues rather than vowel diacritics.</span>
                </div>
              </div>
              <button type="button" onClick={() => {}} className={`px-4 py-2 rounded-full text-xs font-english-semibold shrink-0 cursor-pointer outline-none transition-opacity hover:opacity-85 ${
                isForcedDark ? 'bg-[#FBBF24] text-[#3E270A]' : isForcedLight ? 'bg-[#B45309] text-white' : 'bg-[#B45309] text-white dark:bg-[#FBBF24] dark:text-[#3E270A]'
              }`}>
                Proceed Safely
              </button>
            </div>
          </div>
        </div>

        {/* Demo 3: Status Pills Gallery */}
        <div className="space-y-3">
          <h4 className="font-english-semibold text-lg">
            3. Invariant Status Pills Gallery
          </h4>
          <div className="flex flex-wrap gap-3">
            <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-english-semibold ${
              isForcedDark ? 'bg-[#052E16] text-[#4ADE80]' : isForcedLight ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#F0FDF4] dark:bg-[#052E16] text-[#15803D] dark:text-[#4ADE80]'
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>✓ Mastered Structure (Success Green)</span>
            </span>

            <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-english-semibold ${
              isForcedDark ? 'bg-[#3F0C0C] text-[#F87171]' : isForcedLight ? 'bg-[#FEF2F2] text-[#B91C1C]' : 'bg-[#FEF2F2] dark:bg-[#3F0C0C] text-[#B91C1C] dark:text-[#F87171]'
            }`}>
              <XCircle className="w-3.5 h-3.5" />
              <span>× Not Right / Needs Practice (Error Red)</span>
            </span>

            <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-english-semibold ${
              isForcedDark ? 'bg-[#3E270A] text-[#FBBF24]' : isForcedLight ? 'bg-[#FEF3C7] text-[#B45309]' : 'bg-[#FEF3C7] dark:bg-[#3E270A] text-[#B45309] dark:text-[#FBBF24]'
            }`}>
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>! Partial Vocabulary (Warning Amber)</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-english-semibold bg-[#10b981]/15 text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>● Active Node (Emerald Accent #10b981)</span>
            </span>

            <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-english-semibold ${
              isForcedDark ? 'bg-[#1A1A1A] text-neutral-300' : isForcedLight ? 'bg-neutral-200 text-neutral-800' : 'bg-neutral-200 dark:bg-[#1A1A1A] text-neutral-800 dark:text-neutral-300'
            }`}>
              <Layers className="w-3.5 h-3.5" />
              <span>- Tier 3 Unexplored (Neutral Grayscale)</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* Semantic Feedback Hero */}
      <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 md:p-10 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 font-english-semibold text-xs tracking-wider uppercase">
            <ShieldAlert className="w-4 h-4 text-neutral-900 dark:text-white" />
            <span>Universal Invariant Architecture V2</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/15 text-xs font-english-semibold text-[#10b981]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Captain Locked Invariants</span>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-english-semibold text-neutral-950 dark:text-white tracking-tight">
          Permanent Semantic State Colors &amp; Dual Canvas Verification
        </h2>
        <p className="text-base font-english text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
          Each curriculum volume features scoped accent palettes (Vol 1 Emerald Teal, Vol 2 Amber Gold, Vol 3 Violet Indigo). However, our Semantic Feedback Colors (<strong className="text-[#15803D] dark:text-[#4ADE80] font-semibold">Success Green</strong>, <strong className="text-[#B91C1C] dark:text-[#F87171] font-semibold">Not Right / Error Red</strong>, and <strong className="text-[#B45309] dark:text-[#FBBF24] font-semibold">Warning Amber</strong>) are strictly defined as <strong className="text-neutral-950 dark:text-white">permanent architectural invariants</strong> locked in during visual review. They remain constant across all themes and future accent changes to assure instantaneous pedagogical comprehension without decorative borders or drop shadows.
        </p>

        {/* Semantic Color Tokens Specs Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Success Green Card */}
          <div className="rounded-2xl bg-[#15803D]/10 dark:bg-[#4ADE80]/15 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-english-semibold text-base text-[#15803D] dark:text-[#4ADE80] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Success / Correct</span>
              </span>
              <span className="text-xs font-mono text-[#15803D] dark:text-[#4ADE80]">status.success</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between p-2.5 rounded bg-[#F0FDF4] text-[#15803D]">
                <span>Light Mode (#FFFFFF):</span>
                <span className="font-bold">#F0FDF4 · #15803D</span>
              </div>
              <div className="flex justify-between p-2.5 rounded bg-[#052E16] text-[#4ADE80]">
                <span>Dark Mode (#000000):</span>
                <span className="font-bold">#052E16 · #4ADE80</span>
              </div>
            </div>
            <p className="text-xs font-english text-neutral-700 dark:text-neutral-300 leading-normal">
              Applied exclusively when confirming accurate quiz answers, completed chapters, and verified Tarkeeb syntactic structures.
            </p>
          </div>

          {/* Not Right / Error Red Card */}
          <div className="rounded-2xl bg-[#B91C1C]/10 dark:bg-[#F87171]/15 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-english-semibold text-base text-[#B91C1C] dark:text-[#F87171] flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                <span>Not Right / Error</span>
              </span>
              <span className="text-xs font-mono text-[#B91C1C] dark:text-[#F87171]">status.danger</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between p-2.5 rounded bg-[#FEF2F2] text-[#B91C1C]">
                <span>Light Mode (#FFFFFF):</span>
                <span className="font-bold">#FEF2F2 · #B91C1C</span>
              </div>
              <div className="flex justify-between p-2.5 rounded bg-[#3F0C0C] text-[#F87171]">
                <span>Dark Mode (#000000):</span>
                <span className="font-bold">#3F0C0C · #F87171</span>
              </div>
            </div>
            <p className="text-xs font-english text-neutral-700 dark:text-neutral-300 leading-normal">
              Framed gently as &quot;Not Right&quot; rather than abrasive punishment. Guides students to self-correct anatomical grammar slips.
            </p>
          </div>

          {/* Warning Amber Card */}
          <div className="rounded-2xl bg-[#B45309]/10 dark:bg-[#FBBF24]/15 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-english-semibold text-base text-[#B45309] dark:text-[#FBBF24] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Warning / Guidance</span>
              </span>
              <span className="text-xs font-mono text-[#B45309] dark:text-[#FBBF24]">status.warning</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between p-2.5 rounded bg-[#FEF3C7] text-[#B45309]">
                <span>Light Mode (#FFFFFF):</span>
                <span className="font-bold">#FEF3C7 · #B45309</span>
              </div>
              <div className="flex justify-between p-2.5 rounded bg-[#3E270A] text-[#FBBF24]">
                <span>Dark Mode (#000000):</span>
                <span className="font-bold">#3E270A · #FBBF24</span>
              </div>
            </div>
            <p className="text-xs font-english text-neutral-700 dark:text-neutral-300 leading-normal">
              Signals partial vocabulary mastery, close translation attempts, or cautionary stage progression notes without harsh alarms.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Demonstration Controls & Split View Matrix */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl">
          <div>
            <h3 className="text-xl font-english-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>Dual Canvas Theme Verification Ground</span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981]">
                ● Active Emerald Selection Controls
              </span>
            </h3>
            <p className="text-sm font-english text-neutral-500 dark:text-neutral-400 mt-1">
              Verify invariant semantic colors against both pure black (#000000) and pure white (#FFFFFF) backgrounds, or toggle your global theme!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Pills with Emerald Green Active Markers */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-[#141414] p-1.5 rounded-2xl sm:rounded-full">
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                  viewMode === 'split' ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold scale-[1.02]' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {viewMode === 'split' && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />}
                <Split className="w-3.5 h-3.5" />
                <span>Split Comparison (Both)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('system')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                  viewMode === 'system' ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold scale-[1.02]' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {viewMode === 'system' && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />}
                <span>Live System Theme</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('force-dark')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                  viewMode === 'force-dark' ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold scale-[1.02]' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {viewMode === 'force-dark' && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />}
                <Moon className="w-3.5 h-3.5 text-neutral-400" />
                <span>Pure Dark (#000000)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('force-light')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                  viewMode === 'force-light' ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold scale-[1.02]' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {viewMode === 'force-light' && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />}
                <Sun className="w-3.5 h-3.5 text-neutral-400" />
                <span>Pure Light (#FFFFFF)</span>
              </button>
            </div>

            {/* Global Theme Switcher */}
            <div className="flex items-center gap-2 pl-2">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Dynamic Display Rendering */}
        {viewMode === 'split' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Light Mode Column (#FFFFFF) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-english-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 pl-2">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-neutral-500" />
                  <span>Explicit Light Canvas (#FFFFFF)</span>
                </div>
                <span className="text-[11px] font-mono text-[#10b981]">Verified Invariant Contrast</span>
              </div>
              {renderFeedbackDemoContent(false, true, 'Light Background Verification (#FFFFFF)')}
            </div>

            {/* Dark Mode Column (#000000) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-english-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 pl-2">
                <div className="flex items-center gap-2">
                  <Moon className="w-4 h-4 text-neutral-400" />
                  <span>Explicit Dark Canvas (#000000)</span>
                </div>
                <span className="text-[11px] font-mono text-[#10b981]">Verified Invariant Contrast</span>
              </div>
              {renderFeedbackDemoContent(true, false, 'Dark Background Verification (#000000)')}
            </div>
          </div>
        )}

        {viewMode === 'system' && (
          <div>
            {renderFeedbackDemoContent(false, false, 'Inherited Live System Theme Canvas')}
          </div>
        )}

        {viewMode === 'force-dark' && (
          <div>
            {renderFeedbackDemoContent(true, false, 'Force Pure Dark Canvas (#000000)')}
          </div>
        )}

        {viewMode === 'force-light' && (
          <div>
            {renderFeedbackDemoContent(false, true, 'Force Pure Light Canvas (#FFFFFF)')}
          </div>
        )}
      </div>
    </div>
  );
}

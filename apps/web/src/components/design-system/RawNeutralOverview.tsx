import { useState } from 'react';
import { Layers, ShieldCheck, Zap, XCircle, CheckCircle2, Sparkles } from 'lucide-react';

export function RawNeutralOverview() {
  const [showBadExample, setShowBadExample] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number>(1);

  return (
    <div className="space-y-12">
      {/* Philosophy Header Banner */}
      <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 md:p-10 space-y-6 transition-colors">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 font-english-semibold text-xs tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-neutral-900 dark:text-white" />
            <span>Core Pedagogical Philosophy V2</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/15 text-xs font-english-semibold text-[#10b981]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>Official Accent: Emerald Green (#10b981)</span>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-english-semibold text-neutral-950 dark:text-white tracking-tight">
          Raw Neutral Minimalist Architecture &amp; Emerald Accents
        </h2>
        <p className="text-base font-english text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
          Traditional language learning apps rely heavily on gamified dopamine triggers: neon colors, bouncy drop shadows, and noisy visual interruptions. In Tariq, we fundamentally reject gamified cartoon effects in favor of a mature, tranquil, grayscale minimalism with a dignified Islamic flavor - an approach we term <strong className="text-neutral-950 dark:text-white font-semibold">Raw Neutral V2</strong>. To anchor interactive awareness without disturbing this serenity, we introduce subtle touches of our official accent color: <strong className="text-[#10b981]">Emerald Green (emerald-500, #10b981)</strong> for status markers, active selections, and recommendations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          <div className="rounded-2xl bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white shrink-0" />
              <h3 className="font-english-semibold text-base text-neutral-900 dark:text-neutral-100">
                1. Sacred Reverence
              </h3>
            </div>
            <p className="font-english text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-normal">
              Sacred Quranic texts and classical linguistic mechanics demand an environment of serenity and profound focus rather than gamified distraction.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white shrink-0" />
              <h3 className="font-english-semibold text-base text-neutral-900 dark:text-neutral-100">
                2. Zero Overlap
              </h3>
            </div>
            <p className="font-english text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-normal">
              Inflectional Arabic grammar has high native complexity. By rendering our canvas into an invisible neutral slate, 100% of cognitive focus remains on linguistic diacritics.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white shrink-0" />
              <h3 className="font-english-semibold text-base text-neutral-900 dark:text-neutral-100">
                3. Direct Immersion
              </h3>
            </div>
            <p className="font-english text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-normal">
              Transition directly into thinking in Arabic. High-contrast tone-on-tone container differentiation allows students to internalize syntax and morphology organically.
            </p>
          </div>

          <div className="rounded-2xl bg-[#10b981]/10 dark:bg-[#10b981]/15 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" />
              <h3 className="font-english-semibold text-base text-neutral-900 dark:text-neutral-100">
                4. Emerald Accents
              </h3>
            </div>
            <p className="font-english text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-normal">
              We complement our tone-on-tone canvas with targeted touches of <strong className="text-[#10b981]">Emerald Green (#10b981)</strong> to signal status markers, active selections, and pedagogical recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Zero Borders & Zero Shadows Enforcement Demo */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-xl font-english-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>Zero Borders &amp; Zero Shadows Mandate</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981]">V2 Standard</span>
            </h3>
            <p className="text-sm font-english text-neutral-500 dark:text-neutral-400 mt-1">
              Interactive comparison: Toggle between a traditional gamified card and our Raw Neutral V2 standard enhanced with subtle emerald touches.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full">
            <button
              type="button"
              onClick={() => setShowBadExample(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                !showBadExample
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {!showBadExample ? (
                <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" title="Active Selection (Emerald)" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
              )}
              <span>Raw Neutral V2 (Approved)</span>
            </button>
            <button
              type="button"
              onClick={() => setShowBadExample(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                showBadExample
                  ? 'bg-red-600 text-white dark:bg-red-500 dark:text-white font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>Gamified UI (Rejected)</span>
            </button>
          </div>
        </div>

        {showBadExample ? (
          /* Rejected Gamified UI Example (EXEMPTED DEMONSTRATION OF WHAT NOT TO DO) */
          <div className="border-4 border-amber-500 bg-amber-50 dark:bg-amber-950/40 rounded-xl p-8 shadow-xl space-y-6 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white font-english font-bold text-xs uppercase tracking-widest py-1 px-8 rotate-45 translate-x-3 translate-y-3 shadow-md">
              Rejected UI
            </div>
            <div className="flex items-center gap-2 pb-4 border-b-2 border-amber-300 dark:border-amber-700">
              <Zap className="w-6 h-6 text-amber-500 fill-amber-500 animate-bounce" />
              <span className="font-english font-bold text-lg text-amber-900 dark:text-amber-200">
                Gamified Vocabulary Flash - +50 XP!
              </span>
            </div>
            <div className="bg-white dark:bg-neutral-800 border-2 border-amber-400 dark:border-amber-600 rounded-lg p-6 shadow-md flex flex-col items-center justify-center space-y-3">
              <span className="font-arabic-semibold text-3xl text-neutral-900 dark:text-white" dir="rtl">
                هَذَا كِتَابٌ
              </span>
              <span className="font-english text-base font-bold text-amber-700 dark:text-amber-400 underline decoration-wavy decoration-amber-500">
                hādha kitābun
              </span>
              <span className="font-english text-xs bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 px-3 py-1 rounded border border-amber-500 shadow-xs font-bold">
                Meaning: This is a book
              </span>
            </div>
            <p className="text-xs font-english font-medium text-red-600 dark:text-red-400 flex items-center gap-2">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>Violation analysis: Hard outline borders, drop shadows, visually intrusive dividing lines, and high-saturation cartoon colors degrade cognitive focus.</span>
            </p>
          </div>
        ) : (
          /* Approved Raw Neutral V2 Standard with Emerald Accents (100% Flat Design) */
          <div className="flex flex-col rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 space-y-6 transition-all duration-300 relative overflow-hidden">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" title="Status Marker: Active Learning Node" />
                <span className="font-english text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Grammar Focus · Nominal Sentence
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-english-semibold px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981]">
                  ★ Captain Recommended Structure
                </span>
                <span className="rounded-full px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs font-english-semibold">
                  Dars 1
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-8 space-y-3 bg-white dark:bg-[#141414] rounded-2xl p-6 transition-colors">
              <span className="font-cairo font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white leading-[2.4] text-center" dir="rtl">
                هَذَا كِتَابٌ
              </span>
              <span className="font-english text-lg font-semibold text-neutral-800 dark:text-neutral-200 text-center">
                hādha kitābun
              </span>
              <span className="font-english text-sm text-neutral-500 dark:text-neutral-400 text-center">
                This is a book
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs font-english text-neutral-500 dark:text-neutral-400 flex items-center gap-2 max-w-xl">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#10b981]" />
                <span>V2 Compliant: Zero outline borders, zero drop shadows. Container hierarchy is achieved via tone shifts, while subtle touches of <strong className="text-[#10b981]">Emerald Green (#10b981)</strong> highlight active state markers and recommendations.</span>
              </p>
              <button
                type="button"
                onClick={() => {}}
                className="px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 font-english-semibold text-xs flex items-center gap-2 cursor-pointer outline-none transition-all shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Next Vocabulary Node</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Squircle vs Pill Geometry Architecture */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            Tone-on-Tone Squircle vs. Interactive Pill Geometry
          </h3>
          <p className="text-sm font-english text-neutral-500 dark:text-neutral-400 mt-1">
            Our geometry clearly signals structural weight (Squircles) versus interactive triggers (Pills). Click layers below to observe how active selections utilize our subtle <strong className="text-[#10b981]">Emerald Green (#10b981)</strong> accent marker without a single pixel of border or drop shadow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Layer Controls & Descriptions */}
          <div className="md:col-span-5 space-y-3">
            {[
              {
                layer: 1,
                title: 'Layer 1: Structural Squircles',
                badge: 'rounded-3xl',
                classes: 'bg-neutral-100 dark:bg-neutral-900',
                desc: 'Outer passive containers, flashcard wrapper boxes, and lesson section cards. Uses generous rounded-3xl geometry and subtle neutral fills without borders.'
              },
              {
                layer: 2,
                title: 'Layer 2: Nested Child Cells',
                badge: 'rounded-2xl',
                classes: 'bg-white dark:bg-[#141414]',
                desc: 'Internal data matrix rows, word cells, and syntax wells residing inside Layer 1. Shifts tone by one step to create depth entirely via flat contrast.'
              },
              {
                layer: 3,
                title: 'Layer 3: Interactive Pills',
                badge: 'rounded-full',
                classes: 'bg-neutral-900 text-white dark:bg-white dark:text-black',
                desc: 'Primary navigation controls, state toggles, and reveal triggers. Uses fully rounded pills with inverted monochrome contrast and emerald markers.'
              },
            ].map((item) => {
              const isSelected = activeLayer === item.layer;
              return (
                <button
                  key={item.layer}
                  type="button"
                  onClick={() => setActiveLayer(item.layer)}
                  className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer outline-none flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-black scale-[1.01]'
                      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" title="Active Selection (Emerald)" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
                      )}
                      <span className="font-english-semibold text-base">{item.title}</span>
                    </div>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono ${
                      isSelected
                        ? 'bg-[#10b981]/20 text-[#10b981] dark:text-[#10b981] font-bold'
                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                  <code className={`text-xs font-mono py-1 px-2 rounded w-fit ${
                    isSelected
                      ? 'bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800'
                      : 'bg-white dark:bg-[#141414] text-neutral-700 dark:text-neutral-300'
                  }`}>
                    {item.classes}
                  </code>
                  <p className={`text-xs font-english leading-normal ${
                    isSelected
                      ? 'text-neutral-300 dark:text-neutral-700'
                      : 'text-neutral-500 dark:text-neutral-400'
                  }`}>
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive Live Preview Box */}
          <div className="md:col-span-7 flex flex-col justify-center items-center p-8 md:p-12 rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/50 relative overflow-hidden">
            <div className="w-full max-w-md space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-english text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                  Live Geometry Preview
                </span>
                <span className="text-[11px] font-mono text-[#10b981] flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  <span>Emerald Selection Marker Active</span>
                </span>
              </div>
              
              {/* Simulated Container Structure */}
              <div className={`p-8 rounded-3xl transition-all duration-500 relative ${
                activeLayer === 1
                  ? 'bg-neutral-200 dark:bg-neutral-800 scale-[1.02]'
                  : 'bg-neutral-100 dark:bg-neutral-900'
              }`}>
                {activeLayer === 1 && (
                  <div className="absolute top-3 left-3 bg-[#10b981] text-white dark:bg-[#10b981] dark:text-black text-[10px] font-english-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <span>● Layer 1 Active (rounded-3xl)</span>
                  </div>
                )}
                
                <div className="space-y-4 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" title="Status: Mastered Word" />
                      <span className="text-xs font-english uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        Vocabulary Cell · Status Mastered
                      </span>
                    </div>
                    <span className="text-xl">📖</span>
                  </div>

                  {/* Inner Cell Layer 2 */}
                  <div className={`p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 relative ${
                    activeLayer === 2
                      ? 'bg-neutral-300 dark:bg-neutral-700 scale-[1.03]'
                      : 'bg-white dark:bg-[#141414]'
                  }`}>
                    {activeLayer === 2 && (
                      <div className="absolute top-2 left-2 bg-[#10b981] text-white dark:bg-[#10b981] dark:text-black text-[10px] font-english-semibold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <span>● Layer 2 Active (rounded-2xl)</span>
                      </div>
                    )}
                    <span className="font-cairo font-bold text-3xl text-neutral-950 dark:text-white mb-1 leading-[2.4]" dir="rtl">
                      مَدْرَسَةٌ
                    </span>
                    <span className="font-english-semibold text-base text-neutral-800 dark:text-neutral-200">
                      madrasatun
                    </span>
                    <span className="font-english text-sm text-neutral-500 dark:text-neutral-400">
                      A school
                    </span>
                  </div>

                  {/* Action Pill Layer 3 */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {}}
                      className={`w-full py-3.5 px-6 rounded-full font-english-semibold text-sm transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer outline-none relative ${
                        activeLayer === 3
                          ? 'bg-[#10b981] text-neutral-950 font-bold scale-105'
                          : 'bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90'
                      }`}
                    >
                      {activeLayer === 3 && (
                        <span className="w-2 h-2 rounded-full bg-neutral-950 animate-ping shrink-0" />
                      )}
                      <Layers className={`w-4 h-4 ${activeLayer === 3 ? 'text-neutral-950' : 'text-[#10b981]'}`} />
                      <span>Flip Card (Interactive Pill)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

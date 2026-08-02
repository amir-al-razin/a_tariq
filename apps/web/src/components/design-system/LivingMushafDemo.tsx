import { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, HelpCircle, ArrowUpRight } from 'lucide-react';

interface QuranicWord {
  id: string;
  arabic: string;
  tier: 1 | 2 | 3;
  lemma?: string;
  root?: string;
  meaningEn: string;
  grammarRule?: string;
  curriculumRef?: string;
}

/**
 * FONT SEPARATION RULE (Captain Mandated):
 *
 * - Mushaf Inspection / Living Mushaf Reading Rooms:
 *   STRICTLY use font-mushaf (KFGQPC Uthmani Script HAFS / King Fahad Complex v2)
 *   for ALL Quranic text rendering within this component.
 *
 * - Pedagogical Components (vocab cards, grammar trees, lesson headers, Q&A):
 *   Use font-cairo, font-tajawal, font-vazirmatn, or font-noto-arabic as appropriate.
 *   font-mushaf is NEVER used in pedagogical non-Mushaf contexts.
 */

export function LivingMushafDemo() {
  const [selectedWordId, setSelectedWordId] = useState<string>('w2');
  const [activeTab, setActiveTab] = useState<'verse1' | 'verse2'>('verse1');

  const verse1Words: QuranicWord[] = [
    {
      id: 'w1',
      arabic: 'بِسْمِ',
      tier: 1,
      lemma: 'اسْم (ism)',
      root: 'س - م - و',
      meaningEn: 'In the name of',
      grammarRule: 'Idafah Possessive Prefix & Genitive Case (Majrur with Kasra due to preposition Ba).',
      curriculumRef: 'Volume 1 · Chapter 1 · Dars 3 (Prepositions & Genitive Case)'
    },
    {
      id: 'w2',
      arabic: 'اللَّهِ',
      tier: 1,
      lemma: 'اللَّه (Allāh)',
      root: 'أ - ل - ه',
      meaningEn: 'Allah (The Almighty God)',
      grammarRule: 'Mudhaf Ilayhi (Possessor) in Genitive Case (Majrur) finishing the possessive Idafah chain.',
      curriculumRef: 'Volume 1 · Chapter 2 · Dars 8 (Idafah Possession Chains)'
    },
    {
      id: 'w3',
      arabic: 'الرَّحْمَٰنِ',
      tier: 2,
      lemma: 'رَحْمَٰن (Raḥmān)',
      root: 'ر - ح - م',
      meaningEn: 'The Most Gracious',
      grammarRule: 'Adjectival modifier (Naʻt/Sifah) following Genitive agreement. Root mastered in vocabulary sessions.',
      curriculumRef: 'Volume 2 · Chapter 1 (Intensive Adjectives)'
    },
    {
      id: 'w4',
      arabic: 'الرَّحِيمِ',
      tier: 2,
      lemma: 'رَحِيم (Raḥīm)',
      root: 'ر - ح - م',
      meaningEn: 'The Most Merciful',
      grammarRule: 'Second adjectival attribute deriving from the same triteram root ra-ḥa-ma.',
      curriculumRef: 'Volume 2 · Chapter 1 (Intensive Adjectives)'
    }
  ];

  const verse2Words: QuranicWord[] = [
    {
      id: 'v1',
      arabic: 'ذَٰلِكَ',
      tier: 1,
      lemma: 'ذَٰلِكَ (dhālika)',
      root: 'Demonstrative Pronoun',
      meaningEn: 'That (distant demonstrative pronoun)',
      grammarRule: 'Ism Isharah (Demonstrative Noun for distant masculine singular), taking position of Mubtada (Subject).',
      curriculumRef: 'Volume 1 · Chapter 1 · Dars 2 (Demonstratives: This & That)'
    },
    {
      id: 'v2',
      arabic: 'الْكِتَابُ',
      tier: 1,
      lemma: 'كِتَاب (kitāb)',
      root: 'ك - ت - ب',
      meaningEn: 'The book',
      grammarRule: 'Definite noun with Alif-Lam in Nominative Case (Marfu with Damma), functioning as Badaliyyah (substantive apposition) or Khabar.',
      curriculumRef: 'Volume 1 · Chapter 1 · Dars 4 (The Definite Article & Nominal Sentence)'
    },
    {
      id: 'v3',
      arabic: 'لَا',
      tier: 2,
      lemma: 'لَا (lā)',
      root: 'Particle of Negation',
      meaningEn: 'No / Absolutely no',
      grammarRule: 'La Nafi li-l-Jins (Absolute negative categorical denial). Vocabulary particle drilled in Volume 1.',
      curriculumRef: 'Volume 2 · Chapter 2 (Particles of Denial)'
    },
    {
      id: 'v4',
      arabic: 'رَيْبَ ۛ',
      tier: 2,
      lemma: 'رَيْب (rayb)',
      root: 'ر - ي - ب',
      meaningEn: 'Doubt or ambiguity',
      grammarRule: 'Noun governed by absolute negation, taking Fatha without Tanween.',
      curriculumRef: 'Volume 2 · Chapter 2 · Dars 14'
    },
    {
      id: 'v5',
      arabic: 'فِيهِ ۛ',
      tier: 3,
      lemma: 'فِي + هِ (fīhi)',
      root: 'Preposition + Attached Pronoun',
      meaningEn: 'In it',
      grammarRule: 'Prepositional phrase tied to the sentence predicate. Full structural syntax covered in advanced reading modules.',
      curriculumRef: 'Volume 3 · Chapter 1 (Attached Pronouns with Prepositions)'
    },
    {
      id: 'v6',
      arabic: 'هُدًى',
      tier: 3,
      lemma: 'هُدًى (hudan)',
      root: 'ه - د - ي',
      meaningEn: 'Guidance',
      grammarRule: 'Indefinite verbal noun (Masdar) representing infallible divine direction.',
      curriculumRef: 'Volume 3 · Chapter 3 (Irregular Weak Nouns & Tanween Fatha)'
    },
    {
      id: 'v7',
      arabic: 'لِلْمُتَّقِينَ',
      tier: 3,
      lemma: 'مُتَّقِين (muttaqīn)',
      root: 'و - ق - ي',
      meaningEn: 'For the mindful / pious of Allah',
      grammarRule: 'Preposition Lam + Plural active participle (Ism Faʻil Form VIII) in Genitive sound plural ending (-īn).',
      curriculumRef: 'Volume 3 · Chapter 4 · Dars 22 (Sound Masculine Plurals & Derivatives)'
    }
  ];

  const currentWords = activeTab === 'verse1' ? verse1Words : verse2Words;
  const selectedWord = currentWords.find(w => w.id === selectedWordId) || currentWords[0];

  return (
    <div className="space-y-12">
      {/* Living Mushaf Hero Banner */}
      <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 md:p-10 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 font-english-semibold text-xs tracking-wider uppercase">
            <BookOpen className="w-4 h-4 text-neutral-900 dark:text-white" />
            <span>Scriptural Comprehension Engine V2</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/15 text-xs font-english-semibold text-[#10b981]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>King Fahad Complex v2 Script · #10b981 Active Markers</span>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-english-semibold text-neutral-950 dark:text-white tracking-tight">
          Living Mushaf 3-Tier Comprehension Highlights
        </h2>
        <p className="text-base font-english text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
          Scripture is rendered exclusively in the <strong className="text-neutral-950 dark:text-white font-semibold">KFGQPC Uthmani Script HAFS (King Fahad Complex v2)</strong> - our strict Mushaf font. All pedagogical contexts outside the Mushaf reading room (vocabulary cards, grammar trees, Q&amp;A) use Cairo, Tajawal, Vazirmatn, or Noto Sans Arabic. This component demonstrates the 3-Tier Tonal Hierarchy using subtle <strong className="text-[#10b981]">Emerald Green (#10b981)</strong> markers on a borderless flat canvas.
        </p>

        {/* Font Separation Rule Notice */}
        <div className="rounded-2xl bg-[#10b981]/10 dark:bg-[#10b981]/15 p-5 flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0 mt-1" />
          <div className="space-y-1">
            <span className="font-english-semibold text-sm text-neutral-900 dark:text-neutral-100 block">
              Official Font Separation Rule (Captain Mandated)
            </span>
            <div className="text-xs font-english text-neutral-600 dark:text-neutral-300 space-y-1">
              <p><strong className="text-[#10b981]">Mushaf / Living Mushaf rooms:</strong> <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-mushaf</code> (KFGQPC Uthmani Script HAFS / Quran.com King Fahad v2) - strictly for all Quranic text.</p>
              <p><strong className="text-neutral-900 dark:text-neutral-100">Pedagogical components</strong> (vocab, grammar, Q&amp;A, lesson headers): <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-cairo</code>, <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-tajawal</code>, <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-vazirmatn</code>, <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-noto-arabic</code> - never font-mushaf.</p>
            </div>
          </div>
        </div>

        {/* Tier Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-2xl bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-english-semibold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" title="Active Mastery Marker" />
                <span>Tier 1: Mastered Phrase</span>
              </span>
              <span className="rounded-full px-2.5 py-0.5 text-[10px] font-mono font-semibold bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                Interactive Pill
              </span>
            </div>
            <p className="text-xs font-english text-neutral-500 dark:text-neutral-400 leading-normal">
              Full vocabulary &amp; syntax mastery. Illuminated as a tone-on-tone squircle pill (<code className="text-[10px] font-mono">bg-neutral-200/80 dark:bg-neutral-800</code>). Tapping opens verified Tarkeeb syntactic trees.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-english-semibold text-sm text-neutral-900 dark:text-white">Tier 2: Known Word / Root</span>
              <span className="underline decoration-neutral-400 dark:decoration-neutral-600 decoration-2 underline-offset-4 text-xs font-arabic-medium text-neutral-800 dark:text-neutral-200">
                Underlined Root
              </span>
            </div>
            <p className="text-xs font-english text-neutral-500 dark:text-neutral-400 leading-normal">
              Triliterate root drilled in vocabulary, awaiting complex verse syntax. Highlighted with a subtle monochrome underline without container fills.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-english-semibold text-sm text-neutral-500 dark:text-neutral-400">Tier 3: Unexplored Text</span>
              <span className="text-xs font-arabic text-neutral-400 dark:text-neutral-500 opacity-80">
                Muted Script
              </span>
            </div>
            <p className="text-xs font-english text-neutral-500 dark:text-neutral-400 leading-normal">
              Concepts lying in future chapters. Rendered in a restful scripture tone (<code className="text-[10px] font-mono">text-neutral-500 opacity-75</code>) to keep focus on mastered pieces.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Quranic Verse Simulation Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-xl font-english-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>Interactive Scripture Inspection Ground</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981]">font-mushaf (KFGQPC KF v2) · leading-[2.4]</span>
            </h3>
            <p className="text-sm font-english text-neutral-500 dark:text-neutral-400 mt-1">
              Click any word in the verse below to test how our tone-on-tone highlight tiers unveil pedagogical breakdowns in real-time. All scripture text uses King Fahad Complex v2 exclusively.
            </p>
          </div>

          {/* Ayah Switcher */}
          <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full">
            <button
              type="button"
              onClick={() => {
                setActiveTab('verse1');
                setSelectedWordId('w2');
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                activeTab === 'verse1'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'verse1' && <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" />}
              <span>Surah Al-Fatiha 1:1 (Basmalah)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('verse2');
                setSelectedWordId('v2');
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                activeTab === 'verse2'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'verse2' && <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" />}
              <span>Surah Al-Baqarah 2:2 (Guidance)</span>
            </button>
          </div>
        </div>

        {/* Verse Canvas & Interactive Words */}
        <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 md:p-12 space-y-10 transition-colors">
          <div className="text-center font-english text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {activeTab === 'verse1' ? "سُورَةُ الْفَاتِحَةِ · SURAH AL-FATIHA (1:1) · KING FAHAD COMPLEX v2 SCRIPT (KFGQPC HAFS)" : "سُورَةُ الْبَقَرَةِ · SURAH AL-BAQARAH (2:2) · KING FAHAD COMPLEX v2 SCRIPT (KFGQPC HAFS)"}
          </div>

          {/* Word Interactive Flexbox - font-mushaf (KFGQPC King Fahad v2) for all Quranic text */}
          <div
            className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 py-8 px-4 bg-white dark:bg-[#141414] rounded-2xl min-h-[160px]"
            dir="rtl"
          >
            {currentWords.map((word) => {
              const isSelected = selectedWord.id === word.id;

              if (word.tier === 1) {
                /* Tier 1: Tone-on-Tone Squircle Pill with Emerald Active - font-mushaf (KFGQPC KF v2) */
                return (
                  <button
                    key={word.id}
                    type="button"
                    onClick={() => setSelectedWordId(word.id)}
                    className={`rounded-2xl px-5 py-2 text-3xl sm:text-4xl font-mushaf font-normal transition-all cursor-pointer outline-none leading-[2.4] ${
                      isSelected
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-black scale-[1.04]'
                        : 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-950 dark:text-white hover:bg-neutral-300/80 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {isSelected && (
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#10b981] mx-auto mb-1" />
                    )}
                    {word.arabic}
                  </button>
                );
              }

              if (word.tier === 2) {
                /* Tier 2: Subtle Monochrome Underline - font-mushaf (KFGQPC KF v2) */
                return (
                  <button
                    key={word.id}
                    type="button"
                    onClick={() => setSelectedWordId(word.id)}
                    className={`px-3 py-2 text-3xl sm:text-4xl font-mushaf font-normal transition-all cursor-pointer outline-none leading-[2.4] underline decoration-2 underline-offset-10 ${
                      isSelected
                        ? 'text-neutral-950 dark:text-white decoration-[#10b981] rounded-xl scale-[1.03] bg-neutral-100 dark:bg-neutral-800'
                        : 'text-neutral-800 dark:text-neutral-200 decoration-neutral-400 dark:decoration-neutral-600 hover:text-neutral-950 dark:hover:text-white'
                    }`}
                  >
                    {word.arabic}
                  </button>
                );
              }

              /* Tier 3: Muted Scripture Tone - font-mushaf (KFGQPC KF v2) */
              return (
                <button
                  key={word.id}
                  type="button"
                  onClick={() => setSelectedWordId(word.id)}
                  className={`px-3 py-2 text-3xl sm:text-4xl font-mushaf font-normal transition-all cursor-pointer outline-none leading-[2.4] ${
                    isSelected
                      ? 'text-neutral-800 dark:text-neutral-200 opacity-100 bg-neutral-100 dark:bg-neutral-800 rounded-xl scale-[1.02]'
                      : 'text-neutral-500 dark:text-neutral-400 opacity-70 hover:opacity-90'
                  }`}
                >
                  {word.arabic}
                </button>
              );
            })}
          </div>

          {/* Zero-Border Inspection Drawer / Pedagogical Details */}
          <div className="bg-white dark:bg-neutral-800/60 rounded-2xl p-6 md:p-8 space-y-6 transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4">
              <div className="flex items-center gap-3">
                {/* Quranic text in Mushaf font - KFGQPC KF v2 */}
                <span className="font-mushaf font-normal text-3xl sm:text-4xl text-neutral-950 dark:text-white leading-[2.4] py-1" dir="rtl">
                  {selectedWord.arabic}
                </span>
                <div className="h-8 w-0.5 bg-neutral-300 dark:bg-neutral-600" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" title="Active Selection Inspection" />
                    {/* English label uses font-english-semibold (not Mushaf) */}
                    <span className="text-lg font-english-semibold text-neutral-900 dark:text-neutral-100 block">
                      {selectedWord.meaningEn}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 block mt-0.5">
                    Lemma: {selectedWord.lemma} · Root: {selectedWord.root}
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                {selectedWord.tier === 1 && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black text-xs font-english-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Tier 1 · Mastered Phrase (Tarkeeb Ready)</span>
                  </span>
                )}
                {selectedWord.tier === 2 && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs font-english-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Tier 2 · Known Root (Vocab Drilled)</span>
                  </span>
                )}
                {selectedWord.tier === 3 && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 text-xs font-english">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Tier 3 · Unexplored Text (Awaiting Unlock)</span>
                  </span>
                )}
              </div>
            </div>

            {/* Detailed Explanations based on Tier */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 space-y-2">
                <span className="font-english text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                  Syntactic &amp; Morphological Breakdown
                </span>
                {/* Grammar explanation uses font-english (pedagogical - not Mushaf) */}
                <p className="font-english text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl">
                  {selectedWord.grammarRule}
                </p>
                {selectedWord.tier === 3 && (
                  <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-english-semibold flex items-center justify-between">
                    <span>🌱 Keep advancing in Esho Arbi Shikhi to illuminate this revelation!</span>
                    <span className="text-[11px] font-mono underline">{selectedWord.curriculumRef}</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-4 space-y-2 flex flex-col justify-between">
                <span className="font-english text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                  Curriculum Source Map
                </span>
                <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-english-semibold text-neutral-900 dark:text-neutral-100 block">
                      {selectedWord.curriculumRef}
                    </span>
                    <span className="text-[11px] font-english text-neutral-500 dark:text-neutral-400 block mt-1">
                      Direct synchronization with Maulana Abu Taher Misbah&apos;s textbook lessons.
                    </span>
                  </div>
                  {selectedWord.tier === 1 && (
                    <button
                      type="button"
                      onClick={() => {}}
                      className="mt-3 w-full py-2.5 px-4 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black text-xs font-english-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer outline-none hover:opacity-90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                      <span>Open Verified Tarkeeb Tree</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import {
  Check,
  ArrowRight,
  Sparkles,
  Volume2,
  RotateCcw,
  Star,
  Lock,
  CheckCircle2,
  AlertCircle,
  Info,
} from 'lucide-react';
import {
  ACCENT_PALETTES,
  DEFAULT_ACCENT_PALETTE,
  type AccentPaletteId,
  applyPaletteToDocument,
} from '@tariq/shared';
import { usePaletteStore } from '../../state/paletteStore';

export function DesignSystemWorkbench() {
  const { paletteId, setPalette } = usePaletteStore();
  const [isDark, setIsDark] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Pattern 1: Lexical Priming state
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const sampleWords = [
    {
      arabic: 'كِتَابٌ',
      transliteration: 'kitābun',
      meaning: 'A Book',
      type: 'Ism',
      gender: 'Masc',
      state: 'Nakirah',
      example: 'هَٰذَا كِتَابٌ جَدِيدٌ',
    },
    {
      arabic: 'قَلَمٌ',
      transliteration: 'qalamun',
      meaning: 'A Pen',
      type: 'Ism',
      gender: 'Masc',
      state: 'Nakirah',
      example: 'الْقَلَمُ عَلَى الْمَكْتَبِ',
    },
    {
      arabic: 'مَسْجِدٌ',
      transliteration: 'masjidun',
      meaning: 'A Mosque',
      type: 'Ism',
      gender: 'Masc',
      state: 'Nakirah',
      example: 'هَٰذَا مَسْجِدٌ، وَذَٰلِكَ بَيْتٌ',
    },
  ];


  // Pattern 3: Sentence Assembly state
  const [assembled, setAssembled] = useState<Array<{ id: string; arabic: string; meaning: string }>>([]);
  const wordBank = [
    { id: '1', arabic: 'هَٰذَا', transliteration: 'haadhaa', meaning: 'This is' },
    { id: '2', arabic: 'كِتَابٌ', transliteration: 'kitaabun', meaning: 'a book' },
    { id: '3', arabic: 'جَدِيدٌ', transliteration: 'jadeedun', meaning: 'new' },
  ];

  // Sync theme with document
  useEffect(() => {
    const updateThemeState = () => {
      const isDarkTheme = document.documentElement.classList.contains('dark');
      setIsDark(isDarkTheme);
      applyPaletteToDocument(paletteId || DEFAULT_ACCENT_PALETTE, isDarkTheme);
    };

    updateThemeState();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          updateThemeState();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [paletteId]);

  const handleSelectPalette = (id: AccentPaletteId) => {
    setPalette(id);
    applyPaletteToDocument(id, isDark);
  };

  const handleAssembleChip = (item: { id: string; arabic: string; meaning: string }) => {
    if (!assembled.some((a) => a.id === item.id) && assembled.length < 3) {
      setAssembled([...assembled, item]);
    }
  };

  const handleResetAssembly = () => {
    setAssembled([]);
  };

  // Grayscale Ladder Data
  const grayscaleTokens = [
    { token: 'neutral-50', lightHex: '#FAFAFA', darkHex: '#0A0A0A', role: 'Root application canvas tint' },
    { token: 'neutral-100', lightHex: '#F5F5F5', darkHex: '#141414', role: 'Level 1 surface well / card frame' },
    { token: 'neutral-200', lightHex: '#E5E5E5', darkHex: '#1F1F1F', role: 'Level 2 recessed well / hover states' },
    { token: 'neutral-300', lightHex: '#D4D4D4', darkHex: '#2E2E2E', role: 'Inactive stepper dots / subtle separators' },
    { token: 'neutral-400', lightHex: '#A3A3A3', darkHex: '#525252', role: 'Tertiary metadata / subtext / footnotes' },
    { token: 'neutral-500', lightHex: '#737373', darkHex: '#737373', role: 'Balanced secondary labels / transliteration' },
    { token: 'neutral-600', lightHex: '#525252', darkHex: '#A3A3A3', role: 'Legible body text & translations' },
    { token: 'neutral-700', lightHex: '#404040', darkHex: '#D4D4D4', role: 'High-emphasis body copy' },
    { token: 'neutral-800', lightHex: '#262626', darkHex: '#E5E5E5', role: 'Strong card titles & dark raised cards' },
    { token: 'neutral-900', lightHex: '#171717', darkHex: '#F5F5F5', role: 'Primary headings & dark action pills' },
    { token: 'neutral-950', lightHex: '#0A0A0A', darkHex: '#FFFFFF', role: 'Maximum contrast sovereign elements' },
  ];

  // Radius Guidelines Data
  const radiusTokens = [
    { token: 'rounded-none', px: '0px', usage: 'Continuous progress tracks, edge dividers' },
    { token: 'rounded-sm', px: '4px', usage: 'Micro badges, sub-chips, tooltip indicators' },
    { token: 'rounded-md', px: '6px', usage: 'Compact inputs, form checkboxes' },
    { token: 'rounded-xl', px: '12px', usage: 'Word chips, dropdown menus, grammar tags' },
    { token: 'rounded-2xl', px: '16px', usage: 'Inner cards, dialog items, alerts, feedback panels' },
    { token: 'rounded-3xl', px: '24px', usage: 'Primary surface cards, milestone blocks, drill wells' },
    { token: 'rounded-4xl', px: '32px', usage: 'Outer section containers, major modal envelopes' },
    { token: 'rounded-full', px: '9999px', usage: '56px action pills, touch icon buttons, status beacons' },
  ];

  // Font Size Hierarchy Data
  const typeScale = [
    {
      sizeToken: 'text-6xl',
      px: '60px',
      lineHeight: 'leading-[1.8]',
      weight: 'Cairo Extrabold (800)',
      role: 'Hero Lexical Focal Lemma (good.png)',
      arabicSample: 'كِتَابٌ',
      latinSample: 'Hero Vocabulary Display',
    },
    {
      sizeToken: 'text-4xl',
      px: '36px',
      lineHeight: 'leading-relaxed',
      weight: 'Cairo Bold (700)',
      role: 'Drill Question & Flashcard Arabic',
      arabicSample: 'هَٰذَا كِتَابٌ جَدِيدٌ',
      latinSample: 'Drill Question Display',
    },
    {
      sizeToken: 'text-2xl',
      px: '24px',
      lineHeight: 'leading-loose',
      weight: 'Cairo Semibold (600)',
      role: 'Reading Paragraphs & Verse Segments',
      arabicSample: 'الْقَلَمُ عَلَى الْمَكْتَبِ',
      latinSample: 'Reading Passages & Sentences',
    },
    {
      sizeToken: 'text-xl',
      px: '20px',
      lineHeight: 'leading-snug',
      weight: 'Plus Jakarta Sans Extrabold (800)',
      role: 'Screen Headers & Milestone Titles',
      arabicSample: 'الدَّرْسُ الْأَوَّلُ',
      latinSample: 'Major Screen Section Heading',
    },
    {
      sizeToken: 'text-base',
      px: '16px',
      lineHeight: 'leading-normal',
      weight: 'Plus Jakarta Sans Bold (700)',
      role: 'Primary Interactive Options & Word Chips',
      arabicSample: 'مَفْتُوحٌ',
      latinSample: 'Interactive Choice Pill Option',
    },
    {
      sizeToken: 'text-sm',
      px: '14px',
      lineHeight: 'leading-normal',
      weight: 'Plus Jakarta Sans Medium (500)',
      role: 'English Meanings & Explanatory Notes',
      arabicSample: 'بَيْتٌ قَدِيمٌ',
      latinSample: 'A newly purchased reference book',
    },
    {
      sizeToken: 'text-xs',
      px: '12px',
      lineHeight: 'leading-tight',
      weight: 'Plus Jakarta Sans Bold (700)',
      role: 'Transliteration & Linguistic Specs',
      arabicSample: 'مُبْتَدَأٌ',
      latinSample: 'kitābun jadīdun • Noun (Ism)',
    },
    {
      sizeToken: 'text-[11px]',
      px: '11px',
      lineHeight: 'leading-none',
      weight: 'JetBrains Mono Bold (700)',
      role: 'Micro Badges, Step Counters, XP Indicators',
      arabicSample: '١ / ٥',
      latinSample: 'STAGE 01 • +20 XP • STEP 2 OF 5',
    },
  ];

  // Spacing Scale Data
  const spacingScale = [
    { token: 'p-1 / gap-1', px: '4px', usage: 'Micro offsets, icon badge padding' },
    { token: 'p-2 / gap-2', px: '8px', usage: 'Chip internal gaps, stepper dot spacing' },
    { token: 'p-3 / gap-3', px: '12px', usage: 'Compact container padding, button icon gaps' },
    { token: 'p-4 / gap-4', px: '16px', usage: 'Standard inner card padding, form field spacing' },
    { token: 'p-6 / gap-6', px: '24px', usage: 'Primary surface card padding, card grid gaps' },
    { token: 'p-8 / gap-8', px: '32px', usage: 'Outer container padding, section vertical flow' },
    { token: 'p-12 / gap-12', px: '48px', usage: 'Major content grouping separation' },
    { token: 'space-y-16', px: '64px', usage: 'Section-to-section architectural division' },
  ];

  return (
    <div className="space-y-20 pb-28 font-english">
      {/* ========================================================= */}
      {/* TOP EDITORIAL HERO & SYSTEM BLUEPRINT MANIFESTO           */}
      {/* ========================================================= */}
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            <span>Authoritative Blueprint</span>
            <span>•</span>
            <span>Raw Neutral V3</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-english-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
            Design System Specification &amp; Token Blueprint
          </h1>

          <p className="max-w-3xl text-base sm:text-lg font-english-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The foundational single source of truth for all design tokens, geometric constraints, typography hierarchy, and surface luminance. Every future screen, drill, and component in Tariq must strictly derive from this blueprint.
          </p>
        </div>

        {/* The 3 Core Architectural Invariants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
              Invariant 01
            </span>
            <h3 className="text-base font-english-bold text-neutral-950 dark:text-white">
              Tone-on-Tone Luminance Depth
            </h3>
            <p className="text-xs font-english-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Visual elevation is achieved exclusively through luminance shifts between layered flat surfaces (Canvas → Card → Inset Well). Strictly zero 1px borders and zero drop shadows.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
              Invariant 02
            </span>
            <h3 className="text-base font-english-bold text-neutral-950 dark:text-white">
              Sacred Arabic Breathing Room
            </h3>
            <p className="text-xs font-english-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Zero letter-spacing (tracking-normal) and mandatory generous line-heights (leading-relaxed/loose). Diacritics (Harakat) never touch glyph baselines or card boundaries.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
              Invariant 03
            </span>
            <h3 className="text-base font-english-bold text-neutral-950 dark:text-white">
              Tactile Touch Ergonomics
            </h3>
            <p className="text-xs font-english-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Action buttons require generous 56px height, full-pill contours, and tactile spring responsiveness inspired by physical hardware (good.png).
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 01: COLOR ARCHITECTURE & ALL COLOR SHADES         */}
      {/* ========================================================= */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            Section 01 · Tokens
          </span>
          <h2 className="text-2xl font-english-extrabold text-neutral-950 dark:text-white">
            Color System &amp; Surface Luminance Ladder
          </h2>
          <p className="text-sm font-english-medium text-neutral-600 dark:text-neutral-400">
            The complete primitive grayscale ladder, 4-tier elevation plane system, 6 heritage accent palettes, and invariant status tokens.
          </p>
        </div>

        {/* 1.1 Primitive Grayscale Ladder */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                1.1 Primitive Grayscale Ladder (Raw Neutral)
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                11 strict tonal steps calibrated for paper-white daylight and nocturnal obsidian contrast.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">No Warm Stones • Pure Neutrals</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {grayscaleTokens.map((item) => (
              <div
                key={item.token}
                className="p-4 rounded-2xl bg-white dark:bg-neutral-950 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-neutral-950 dark:text-white">
                    {item.token}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-neutral-400">
                      {isDark ? item.darkHex : item.lightHex}
                    </span>
                    <div
                      className="w-4 h-4 rounded-full border border-black/10 dark:border-white/10"
                      style={{ backgroundColor: isDark ? item.darkHex : item.lightHex }}
                    />
                  </div>
                </div>
                <p className="text-[11px] font-english-medium text-neutral-500 dark:text-neutral-400 leading-snug">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 1.2 The 4 Plane-on-Plane Luminance Elevation Levels */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                1.2 Plane-on-Plane Elevation Architecture
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Depth achieved strictly by nesting luminance planes. Zero drop shadows, zero outline borders.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              Zero Shadows • Zero Borders
            </span>
          </div>

          {/* Visual Nested Demonstration */}
          <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#0A0A0A] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-400">
              <span>Level 0: Canvas (bg-neutral-50 / #FAFAFA | dark #0A0A0A)</span>
              <span>Root Screen Canvas</span>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-500 dark:text-neutral-300">
                <span>Level 1: Surface Card (bg-white / #FFFFFF | dark bg-neutral-900)</span>
                <span>Primary Content Envelope</span>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-950 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400">
                  <span>Level 2: Recessed Well (bg-neutral-100 / #F5F5F5 | dark bg-neutral-950)</span>
                  <span>Focal Arabic Display Cutout</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                    Level 3: Sunken / Active Pill (bg-neutral-200 / #E5E5E5 | dark bg-neutral-800)
                  </span>
                  <span className="text-xs font-english-bold text-neutral-600 dark:text-neutral-400">
                    Active Choice / Word Slot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1.3 The 6 Curated Heritage Accent Palettes */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                1.3 The 6 Curated Heritage Accent Palettes
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Click any palette below to instantly switch the active theme across the entire application.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-accent-primary">
              Active: {ACCENT_PALETTES[paletteId]?.name || 'Kairouan Indigo'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(Object.keys(ACCENT_PALETTES) as AccentPaletteId[]).map((id) => {
              const pal = ACCENT_PALETTES[id];
              const isSelected = paletteId === id;
              const pColor = isDark ? pal.dark.primary.main : pal.light.primary.main;
              const sColor = isDark ? pal.dark.secondary.main : pal.light.secondary.main;
              const pSubtle = isDark ? pal.dark.primary.subtle : pal.light.primary.subtle;
              const sSubtle = isDark ? pal.dark.secondary.subtle : pal.light.secondary.subtle;

              return (
                <div
                  key={id}
                  onClick={() => handleSelectPalette(id)}
                  className={`p-5 rounded-3xl transition-all cursor-pointer space-y-3 select-none ${
                    isSelected
                      ? 'bg-white dark:bg-neutral-950 ring-2 ring-accent-primary'
                      : 'bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-850'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-english-bold text-sm text-neutral-950 dark:text-white">
                          {pal.name}
                        </h4>
                        {id === DEFAULT_ACCENT_PALETTE && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-950">
                            DEFAULT
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400 block mt-0.5">
                        {pal.tagline}
                      </span>
                    </div>

                    <div className="flex items-center -space-x-1.5">
                      <div
                        className="w-6 h-6 rounded-full z-10 border border-white dark:border-neutral-900"
                        style={{ backgroundColor: pColor }}
                        title={`Primary: ${pColor}`}
                      />
                      <div
                        className="w-6 h-6 rounded-full border border-white dark:border-neutral-900"
                        style={{ backgroundColor: sColor }}
                        title={`Secondary: ${sColor}`}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {pal.description}
                  </p>

                  <div className="flex items-center gap-2 pt-1 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pColor }} />
                      <span className="text-neutral-600 dark:text-neutral-400">{pColor}</span>
                    </div>
                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: sColor }} />
                      <span className="text-neutral-600 dark:text-neutral-400">{sColor}</span>
                    </div>
                  </div>

                  {/* Swatch Strip */}
                  <div className="grid grid-cols-4 gap-1.5 pt-1">
                    <div
                      className="h-6 rounded-lg flex items-center justify-center text-[10px] font-mono text-white font-bold"
                      style={{ backgroundColor: pColor }}
                      title="Primary Main"
                    >
                      P
                    </div>
                    <div
                      className="h-6 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold"
                      style={{ backgroundColor: pSubtle, color: pColor }}
                      title="Primary Subtle"
                    >
                      P.sub
                    </div>
                    <div
                      className="h-6 rounded-lg flex items-center justify-center text-[10px] font-mono text-white font-bold"
                      style={{ backgroundColor: sColor }}
                      title="Secondary Main"
                    >
                      S
                    </div>
                    <div
                      className="h-6 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold"
                      style={{ backgroundColor: sSubtle, color: sColor }}
                      title="Secondary Subtle"
                    >
                      S.sub
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 1.4 Invariant Semantic Feedback Tokens */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                1.4 Invariant Semantic Feedback Tokens
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                These status colors NEVER adapt to theme accents. Permanently invariant to guarantee pedagogical clarity.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">Theme-Agnostic</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Success */}
            <div className="p-5 rounded-3xl bg-white dark:bg-neutral-950 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {isDark ? '#22C55E' : '#15803D'}
                </span>
              </div>
              <h4 className="font-english-bold text-sm text-neutral-900 dark:text-white">
                Status: Success
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                Correct answer, matched grammatical case, drill mastery.
              </p>
            </div>

            {/* Warning */}
            <div className="p-5 rounded-3xl bg-white dark:bg-neutral-950 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                  <AlertCircle size={16} />
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  {isDark ? '#F59E0B' : '#B45309'}
                </span>
              </div>
              <h4 className="font-english-bold text-sm text-neutral-900 dark:text-white">
                Status: Warning
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                Incomplete sequence, partial assembly, review suggestion.
              </p>
            </div>

            {/* Danger */}
            <div className="p-5 rounded-3xl bg-white dark:bg-neutral-950 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 flex items-center justify-center font-bold">
                  <AlertCircle size={16} />
                </div>
                <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                  {isDark ? '#EF4444' : '#DC2626'}
                </span>
              </div>
              <h4 className="font-english-bold text-sm text-neutral-900 dark:text-white">
                Status: Danger
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                Grammatical syntax mismatch, incorrect particle choice.
              </p>
            </div>

            {/* Info */}
            <div className="p-5 rounded-3xl bg-white dark:bg-neutral-950 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Info size={16} />
                </div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                  {isDark ? '#3B82F6' : '#1D4ED8'}
                </span>
              </div>
              <h4 className="font-english-bold text-sm text-neutral-900 dark:text-white">
                Status: Info
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                Grammatical rule breakdown, morphological tooltip note.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 02: TYPOGRAPHY & ARABIC SCRIPT HIERARCHY          */}
      {/* ========================================================= */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            Section 02 · Typography
          </span>
          <h2 className="text-2xl font-english-extrabold text-neutral-950 dark:text-white">
            Bilingual Typography &amp; Arabic Script Scale
          </h2>
          <p className="text-sm font-english-medium text-neutral-600 dark:text-neutral-400">
            Font families, font weights, size hierarchy, and sacred Tashkeel vertical clearance specifications.
          </p>
        </div>

        {/* 2.1 Multilingual Font Families */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
            2.1 Font Family Pairings &amp; Design Roles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-accent-primary uppercase">
                  Instructional Arabic
                </span>
                <span className="text-[11px] font-mono text-neutral-400">Cairo</span>
              </div>
              <div className="text-3xl font-arabic font-extrabold text-neutral-950 dark:text-white py-1" dir="rtl">
                الْكِتَابُ الْجَدِيدُ
              </div>
              <p className="text-xs font-english-medium text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Balanced geometric Naskh with distinct Tashkeel (vowel) placement. Default for interactive drills.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-accent-secondary uppercase">
                  Scholarly Quranic
                </span>
                <span className="text-[11px] font-mono text-neutral-400">Amiri</span>
              </div>
              <div className="text-3xl font-serif font-bold text-neutral-950 dark:text-white py-1" dir="rtl">
                بِسْمِ اللَّـهِ الرَّحْمَٰنِ
              </div>
              <p className="text-xs font-english-medium text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Classical Bulaq Press Arabic typography. Dedicated to Quranic verses, Tafseer, and classical hadith.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                  Latin Primary
                </span>
                <span className="text-[11px] font-mono text-neutral-400">Plus Jakarta Sans</span>
              </div>
              <div className="text-2xl font-english-extrabold text-neutral-950 dark:text-white py-1">
                Classical Foundations
              </div>
              <p className="text-xs font-english-medium text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Humanist geometric sans-serif for crystal-clear navigation, button copy, and linguistic definitions.
              </p>
            </div>
          </div>
        </div>

        {/* 2.2 Complete Font Size & Line Height Hierarchy */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                2.2 Complete Font Size, Weight &amp; Line-Height Scale
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Calibrated with extra vertical clearance to guarantee Harakat vowels never clip or overlap.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">8 Standard Steps</span>
          </div>

          <div className="space-y-4">
            {typeScale.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white dark:bg-neutral-950 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 font-mono text-xs font-bold text-neutral-900 dark:text-white">
                      {item.sizeToken} ({item.px})
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {item.lineHeight}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">•</span>
                    <span className="text-xs font-mono text-neutral-400">
                      {item.weight}
                    </span>
                  </div>
                  <p className="text-xs font-english-medium text-neutral-500 dark:text-neutral-400">
                    {item.role}
                  </p>
                </div>

                <div className="flex items-center justify-between lg:justify-end gap-8" dir="rtl">
                  <span
                    className={`font-arabic text-neutral-950 dark:text-white ${item.sizeToken} ${item.lineHeight}`}
                  >
                    {item.arabicSample}
                  </span>
                  <span className="text-xs font-english-bold text-neutral-400 text-left hidden sm:inline" dir="ltr">
                    {item.latinSample}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2.3 Sacred Arabic Typesetting Invariants */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
            2.3 Sacred Arabic Typesetting Invariants (Rules)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-2">
              <span className="text-xs font-mono font-bold text-accent-primary uppercase">
                Rule 01
              </span>
              <h4 className="text-sm font-english-bold text-neutral-950 dark:text-white">
                Zero Letter-Spacing (Tracking)
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Letter spacing must strictly be normal (<code className="font-mono text-[11px] bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">tracking-normal</code>). Never apply negative or positive tracking to Arabic text; doing so breaks cursive ligature continuity.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-2">
              <span className="text-xs font-mono font-bold text-accent-primary uppercase">
                Rule 02
              </span>
              <h4 className="text-sm font-english-bold text-neutral-950 dark:text-white">
                Vertical Harakat Cushioning
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Arabic with full diacritics requires <code className="font-mono text-[11px] bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">leading-relaxed</code> (1.625) or <code className="font-mono text-[11px] bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">leading-loose</code> (2.0) to prevent Fathah/Dammah clipping.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-2">
              <span className="text-xs font-mono font-bold text-accent-primary uppercase">
                Rule 03
              </span>
              <h4 className="text-sm font-english-bold text-neutral-950 dark:text-white">
                Logical RTL Properties
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Always specify <code className="font-mono text-[11px] bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">dir="rtl"</code> on Arabic containers and use logical utilities (<code className="font-mono text-[11px] bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">ms-*</code>, <code className="font-mono text-[11px] bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">me-*</code>) instead of left/right.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 03: CORNER RADIUS SCALE & GUIDELINES              */}
      {/* ========================================================= */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            Section 03 · Geometry
          </span>
          <h2 className="text-2xl font-english-extrabold text-neutral-950 dark:text-white">
            Corner Radius Scale &amp; Geometric Guidelines
          </h2>
          <p className="text-sm font-english-medium text-neutral-600 dark:text-neutral-400">
            Strict squircle radius tokens from 0px to 9999px and the decision rulebook for developers.
          </p>
        </div>

        {/* 3.1 Visual Swatches */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                3.1 Visual Corner Radius Swatches
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Visual demonstration of each radius token in the design system.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">Pure Squircles</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {radiusTokens.map((item) => (
              <div
                key={item.token}
                className="p-5 bg-white dark:bg-neutral-950 flex flex-col justify-between space-y-4"
                style={{
                  borderRadius:
                    item.token === 'rounded-none'
                      ? '0px'
                      : item.token === 'rounded-sm'
                      ? '4px'
                      : item.token === 'rounded-md'
                      ? '6px'
                      : item.token === 'rounded-xl'
                      ? '12px'
                      : item.token === 'rounded-2xl'
                      ? '16px'
                      : item.token === 'rounded-3xl'
                      ? '24px'
                      : item.token === 'rounded-4xl'
                      ? '32px'
                      : '9999px',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-neutral-900 dark:text-white">
                    {item.token}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">{item.px}</span>
                </div>
                <div
                  className="w-full h-12 bg-neutral-100 dark:bg-neutral-850 flex items-center justify-center text-[10px] font-mono text-neutral-500"
                  style={{
                    borderRadius:
                      item.token === 'rounded-none'
                        ? '0px'
                        : item.token === 'rounded-sm'
                        ? '4px'
                        : item.token === 'rounded-md'
                        ? '6px'
                        : item.token === 'rounded-xl'
                        ? '12px'
                        : item.token === 'rounded-2xl'
                        ? '16px'
                        : item.token === 'rounded-3xl'
                        ? '24px'
                        : item.token === 'rounded-4xl'
                        ? '32px'
                        : '9999px',
                  }}
                >
                  Preview
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
                  {item.usage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3.2 Developer Decision Matrix: When to use which radius */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
            3.2 Developer Decision Matrix: "Which Radius Should I Use?"
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-english-medium">
              <thead>
                <tr className="border-b border-black/5 dark:border-white/5 font-mono text-neutral-400 uppercase text-[11px]">
                  <th className="pb-3 pr-4">Component Category</th>
                  <th className="pb-3 pr-4">Required Radius Token</th>
                  <th className="pb-3 pr-4">CSS Value</th>
                  <th className="pb-3">Architectural Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/5 text-neutral-700 dark:text-neutral-300">
                <tr>
                  <td className="py-3.5 pr-4 font-bold text-neutral-950 dark:text-white">
                    Outer Section Containers &amp; App Envelopes
                  </td>
                  <td className="py-3.5 pr-4 font-mono font-bold text-accent-primary">
                    rounded-4xl
                  </td>
                  <td className="py-3.5 pr-4 font-mono text-neutral-400">32px (2rem)</td>
                  <td className="py-3.5 text-neutral-500 dark:text-neutral-400">
                    Creates the broad architectural boundary that anchors full drill stages.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-bold text-neutral-950 dark:text-white">
                    Primary Surface Cards &amp; Milestone Blocks
                  </td>
                  <td className="py-3.5 pr-4 font-mono font-bold text-accent-primary">
                    rounded-3xl
                  </td>
                  <td className="py-3.5 pr-4 font-mono text-neutral-400">24px (1.5rem)</td>
                  <td className="py-3.5 text-neutral-500 dark:text-neutral-400">
                    Primary content containers, lesson stage cards, and spatial stage cutouts.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-bold text-neutral-950 dark:text-white">
                    Inner Cards, Dialogs, Alerts &amp; Feedback Panels
                  </td>
                  <td className="py-3.5 pr-4 font-mono font-bold text-accent-primary">
                    rounded-2xl
                  </td>
                  <td className="py-3.5 pr-4 font-mono text-neutral-400">16px (1rem)</td>
                  <td className="py-3.5 text-neutral-500 dark:text-neutral-400">
                    Grammar specification wells, interactive options, and dismissible callouts.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-bold text-neutral-950 dark:text-white">
                    Word Chips &amp; Dropdown Menus
                  </td>
                  <td className="py-3.5 pr-4 font-mono font-bold text-accent-primary">
                    rounded-xl
                  </td>
                  <td className="py-3.5 pr-4 font-mono text-neutral-400">12px (0.75rem)</td>
                  <td className="py-3.5 text-neutral-500 dark:text-neutral-400">
                    Compact token elements that need distinct tactile individuality.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-bold text-neutral-950 dark:text-white">
                    Action Buttons, Touch Pills, Badges &amp; Beacons
                  </td>
                  <td className="py-3.5 pr-4 font-mono font-bold text-accent-primary">
                    rounded-full
                  </td>
                  <td className="py-3.5 pr-4 font-mono text-neutral-400">9999px</td>
                  <td className="py-3.5 text-neutral-500 dark:text-neutral-400">
                    Authoritative plush 56px action pills, circular icon buttons, and XP chips.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 04: SPACING SCALE, PADDING & TOUCH ERGONOMICS    */}
      {/* ========================================================= */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            Section 04 · Ergonomics
          </span>
          <h2 className="text-2xl font-english-extrabold text-neutral-950 dark:text-white">
            Spacing Scale, Padding &amp; Touch Ergonomics
          </h2>
          <p className="text-sm font-english-medium text-neutral-600 dark:text-neutral-400">
            The 4px base grid, 56px touch target mandate, and tone-on-tone luminance rules.
          </p>
        </div>

        {/* 4.1 Spacing Scale */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                4.1 The 4px Base Grid Spacing Scale
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                All padding, margins, and gaps strictly multiply from a 4px base step.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">4px Base Metric</span>
          </div>

          <div className="space-y-3">
            {spacingScale.map((item) => (
              <div
                key={item.token}
                className="p-4 rounded-2xl bg-white dark:bg-neutral-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-neutral-950 dark:text-white w-32">
                    {item.token}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 w-16">
                    {item.px}
                  </span>
                  <div
                    className="h-3 rounded-full bg-accent-primary shrink-0"
                    style={{ width: item.px }}
                  />
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {item.usage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4.2 Touch Target Ergonomics Mandates */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
            4.2 Touch Target &amp; Physical Hardware Ergonomics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-3">
              <span className="text-xs font-mono font-bold text-accent-primary uppercase">
                Primary Standard
              </span>
              <h4 className="text-base font-english-bold text-neutral-950 dark:text-white">
                56px (h-14) Action Pills
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Commanding action buttons (Continue, Start Drill) strictly use 56px height with py-[18px] and px-[36px].
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                Secondary Controls
              </span>
              <h4 className="text-base font-english-bold text-neutral-950 dark:text-white">
                44px (h-11) Secondary Buttons
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Secondary actions (Review Stage, Reset Drill) use 44px minimum height to guarantee touch accessibility.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 space-y-3">
              <span className="text-xs font-mono font-bold text-accent-secondary uppercase">
                Circular Triggers
              </span>
              <h4 className="text-base font-english-bold text-neutral-950 dark:text-white">
                48px / 40px Icon Triggers
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Audio pronounce buttons and reset icons use minimum 40px to 48px circular touch footprints.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 05: LIVING COMPONENT BLUEPRINTS (IN PRACTICE)     */}
      {/* ========================================================= */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
            Section 05 · Proof of Blueprint
          </span>
          <h2 className="text-2xl font-english-extrabold text-neutral-950 dark:text-white">
            Living Component Blueprints (Tokens in Practice)
          </h2>
          <p className="text-sm font-english-medium text-neutral-600 dark:text-neutral-400">
            Canonical implementations showing how these tokens assemble into production pedagogical widgets.
          </p>
        </div>

        {/* 5.1 Plush 56px Action Pills */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
              5.1 Plush 56px Action Pills
            </h3>
            <span className="text-xs font-mono text-neutral-400">Hardware Feel</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* 1. Sovereign CTA */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase block">
                Sovereign Hero CTA
              </span>
              <button className="w-full h-14 px-6 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-english-bold text-sm tracking-wide transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                <span>Continue · التَّالِي</span>
                <ArrowRight size={16} />
              </button>
              <span className="text-[11px] text-neutral-500 block">
                Deep obsidian for primary progression.
              </span>
            </div>

            {/* 2. Primary Accent */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-accent-primary uppercase block">
                Primary Heritage Accent
              </span>
              <button className="w-full h-14 px-6 rounded-full bg-accent-primary hover:bg-accent-primary-hover text-white font-english-bold text-sm tracking-wide transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                <span>Start Drill · ابْدَأْ</span>
                <Sparkles size={16} />
              </button>
              <span className="text-[11px] text-neutral-500 block">
                Active theme accent for interactive drills.
              </span>
            </div>

            {/* 3. Secondary Milestone */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-accent-secondary uppercase block">
                Secondary Milestone
              </span>
              <button className="w-full h-14 px-6 rounded-full bg-accent-secondary hover:bg-accent-secondary-hover text-white font-english-bold text-sm tracking-wide transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                <span>Mastered · اسْتَمِرّ</span>
                <Star size={16} />
              </button>
              <span className="text-[11px] text-neutral-500 block">
                Warm Ochre/Gold for milestones and badges.
              </span>
            </div>

            {/* 4. Inset Neutral */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase block">
                Quiet Secondary Inset
              </span>
              <button className="w-full h-14 px-6 rounded-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-english-bold text-sm tracking-wide transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                <span>Review · السَّابِق</span>
              </button>
              <span className="text-[11px] text-neutral-500 block">
                Raised surface for secondary actions.
              </span>
            </div>
          </div>
        </div>

        {/* 5.2 Gamified Milestones & Progression States */}
        <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                5.2 Gamified Milestones &amp; Progression States
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Distinct visual identities for completed, active, and upcoming stages. Short, focused, and intuitive.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-accent-secondary">
              Approved Blueprint
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Status 1: Completed / Done (Mastered) */}
            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 flex flex-col justify-between space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-accent-secondary text-white flex items-center justify-center shrink-0">
                  <Check size={20} className="stroke-[3]" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-secondary-subtle text-accent-secondary">
                  +20 XP · Mastered
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  Stage 01
                </span>
                <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                  Demonstratives
                </h3>
              </div>

              <button className="w-full h-11 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-850 text-neutral-700 dark:text-neutral-300 font-english-bold text-xs transition-colors cursor-pointer flex items-center justify-center">
                Review Stage
              </button>
            </div>

            {/* Status 2: In Progress / Active (Current Stage) */}
            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 flex flex-col justify-between space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-accent-primary text-white flex items-center justify-center shrink-0">
                  <ArrowRight size={20} className="stroke-[2.5]" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-primary-subtle text-accent-primary">
                  <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                  <span>Step 2 of 5</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-accent-primary uppercase tracking-wider">
                    Current Stage
                  </span>
                  <h3 className="text-lg font-english-bold text-neutral-950 dark:text-white">
                    Definite Articles
                  </h3>
                </div>

                <div className="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                  <div className="h-full bg-accent-primary w-[40%] rounded-full transition-all" />
                </div>
              </div>

              <button className="w-full h-11 px-4 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-english-bold text-xs transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-1.5">
                <span>Continue Drill</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Status 3: Locked / Upcoming */}
            <div className="p-6 rounded-3xl bg-neutral-200/50 dark:bg-neutral-850/40 flex flex-col justify-between space-y-5 opacity-70">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 flex items-center justify-center shrink-0">
                  <Lock size={18} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-neutral-400 dark:text-neutral-500 bg-black/5 dark:bg-white/5">
                  Locked
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  Stage 03
                </span>
                <h3 className="text-lg font-english-bold text-neutral-600 dark:text-neutral-400">
                  Attached Pronouns
                </h3>
              </div>

              <div className="h-11 flex items-center justify-center text-xs font-mono text-neutral-400">
                Unlocks after Stage 02
              </div>
            </div>
          </div>

          {/* Gamified Drill Feedback Strip */}
          <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-secondary-subtle text-accent-secondary flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-sm font-english-bold text-neutral-950 dark:text-white">
                  Exercise Complete · +15 XP
                </h4>
                <span className="text-xs text-neutral-500 font-mono">
                  All 3 targets placed accurately
                </span>
              </div>
            </div>

            <button className="w-full sm:w-auto h-10 px-5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-english-bold text-xs transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-1.5">
              <span>Next Challenge</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* 5.3 Lexical Priming Hero Card & Sentence Assembly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Lexical Priming Card */}
          <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-xs font-mono font-bold text-neutral-900 dark:text-white">
                  Word {currentWordIdx + 1} of {sampleWords.length}
                </span>
                <span className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
                  Lexical Priming
                </span>
              </div>

              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white transition-transform active:scale-95 cursor-pointer"
                title="Play Audio"
                aria-label="Play Arabic Audio Pronunciation"
              >
                <Volume2 size={18} className={isPlayingAudio ? 'text-accent-primary animate-pulse' : ''} />
              </button>
            </div>

            {/* Recessed Cutout Well with Huge Arabic Display */}
            <div className="h-56 rounded-3xl bg-white dark:bg-neutral-950 flex flex-col items-center justify-center text-center p-6 space-y-2 relative">
              <span
                className="font-arabic font-extrabold text-6xl sm:text-7xl text-neutral-950 dark:text-white leading-[1.8] select-none"
                dir="rtl"
              >
                {sampleWords[currentWordIdx].arabic}
              </span>
              <span className="text-xs font-mono font-bold text-neutral-400 block tracking-wider">
                {sampleWords[currentWordIdx].transliteration}
              </span>
              <span className="text-lg font-english-extrabold text-neutral-900 dark:text-neutral-100 block">
                {sampleWords[currentWordIdx].meaning}
              </span>
            </div>

            {/* Linguistic Specification Well with Dividers */}
            <div className="p-4 rounded-2xl bg-white dark:bg-neutral-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-english-bold text-neutral-500 dark:text-neutral-400">
                <span>Type: {sampleWords[currentWordIdx].type}</span>
                <span className="opacity-30">|</span>
                <span>Gender: {sampleWords[currentWordIdx].gender}</span>
                <span className="opacity-30">|</span>
                <span>State: {sampleWords[currentWordIdx].state}</span>
              </div>
              <div className="h-px w-full bg-neutral-100 dark:bg-neutral-700/60" />
              <div className="flex items-center justify-between text-sm font-arabic pt-0.5" dir="rtl">
                <span className="font-bold text-neutral-400 text-xs font-mono">مِثَالٌ:</span>
                <span className="font-bold text-neutral-900 dark:text-neutral-100 text-base">
                  {sampleWords[currentWordIdx].example}
                </span>
              </div>
            </div>

            {/* Plush 56px Action Pill */}
            <button
              onClick={() => setCurrentWordIdx((currentWordIdx + 1) % sampleWords.length)}
              className="w-full h-14 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-english-bold text-sm tracking-wide transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Next Lemma · التَّالِي</span>
              <ArrowRight size={16} />
            </button>

            {/* 8-Dot Stepper */}
            <div className="flex items-center justify-center gap-2 pt-1">
              {sampleWords.map((_, i) => (
                <span
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentWordIdx
                      ? 'w-6 h-2 bg-accent-primary'
                      : i < currentWordIdx
                      ? 'w-2 h-2 bg-accent-secondary'
                      : 'w-2 h-2 bg-neutral-300 dark:bg-neutral-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Interactive Sentence Assembly Engine */}
          <div className="p-8 rounded-4xl bg-neutral-100 dark:bg-neutral-900 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
                  Interactive Drill Builder
                </span>
                <h3 className="text-xl font-english-extrabold text-neutral-950 dark:text-white">
                  Sentence Assembly Engine
                </h3>
              </div>

              <button
                onClick={handleResetAssembly}
                className="px-4 py-2 rounded-full bg-white dark:bg-neutral-800 text-xs font-english-bold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw size={13} />
                <span>Reset Drill</span>
              </button>
            </div>

            {/* Dashed Target Drop Slots */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                Assembly Sequence Target (RTL):
              </span>
              <div className="flex items-center gap-3 flex-wrap justify-end" dir="rtl">
                {[0, 1, 2].map((slotIdx) => {
                  const item = assembled[slotIdx];
                  return (
                    <div
                      key={slotIdx}
                      className={`min-w-32 min-h-20 px-6 py-4 rounded-3xl flex flex-col items-center justify-center transition-all ${
                        item
                          ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white cursor-pointer'
                          : 'border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-400'
                      }`}
                      onClick={() => {
                        if (item) {
                          setAssembled(assembled.filter((_, idx) => idx !== slotIdx));
                        }
                      }}
                    >
                      {item ? (
                        <>
                          <span className="font-arabic font-extrabold text-2xl sm:text-3xl" dir="rtl">
                            {item.arabic}
                          </span>
                          <span className="text-xs font-english-bold mt-0.5 text-neutral-500">
                            {item.meaning}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs font-mono font-bold opacity-60">
                          Drop slot {slotIdx + 1}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Word Bank Chips (Pure Tone-on-Tone, No Outline Rings) */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                Word Bank Source Chips (Tap to place into slot):
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                {wordBank.map((word) => {
                  const isPlaced = assembled.some((a) => a.id === word.id);
                  return (
                    <button
                      key={word.id}
                      disabled={isPlaced}
                      onClick={() => handleAssembleChip(word)}
                      className={`inline-flex flex-col items-center justify-center px-6 py-4 rounded-3xl transition-all cursor-pointer select-none ${
                        isPlaced
                          ? 'bg-neutral-200/50 dark:bg-neutral-800/40 text-neutral-400 opacity-40 cursor-default'
                          : 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700 active:scale-95'
                      }`}
                    >
                      <span className="font-arabic font-extrabold text-3xl leading-[2.2]" dir="rtl">
                        {word.arabic}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                        {word.transliteration}
                      </span>
                      <span className="text-xs font-english-bold mt-0.5 text-neutral-700 dark:text-neutral-300">
                        {word.meaning}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

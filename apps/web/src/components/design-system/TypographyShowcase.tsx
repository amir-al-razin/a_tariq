import { useState } from 'react';
import { Type, Check, Sparkles, BookOpen, ShieldCheck, Eye } from 'lucide-react';

/**
 * OFFICIAL FONT SEPARATION RULE (Captain Mandated):
 *
 * - Mushaf Inspection Rooms / Living Mushaf Reading:  font-mushaf only
 *   (KFGQPC Uthmani Script HAFS / Quran.com King Fahad Complex v2)
 *
 * - ALL other pedagogical components (vocab cards, grammar trees,
 *   lesson headers, Q&A modules, dashboards, interfaces):
 *   font-cairo, font-tajawal, font-vazirmatn, font-noto-arabic
 *   font-mushaf is NEVER used in pedagogical non-Mushaf contexts.
 */

interface FontOption {
  id: string;
  name: string;
  className: string;
  description: string;
  bestFor: string;
  sampleAyah: string;
  sampleGrammar: string;
  isRecommended?: boolean;
}

export function TypographyShowcase() {
  const [showBufferLines, setShowBufferLines] = useState(true);
  const [selectedFontId, setSelectedFontId] = useState<string>('cairo');
  const [sampleMode, setSampleMode] = useState<'quran' | 'grammar'>('quran');

  const fontOptions: FontOption[] = [
    {
      id: 'cairo',
      name: 'Cairo',
      className: 'font-cairo font-bold',
      description: 'Classical vocalized Arabic script & primary instruction font with exceptional structural harmony and balanced vertical stroke proportions.',
      bestFor: 'Classical Grammar & Pedagogy',
      isRecommended: true,
      sampleAyah: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
      sampleGrammar: 'ذَهَبَ خَالِدٌ إِلَى مَكْتَبَةِ الْمَدْرَسَةِ أَمْسِ، وَجَدَ كُتُبًا كَثِيرَةً فِي الْعُلُومِ وَالتَّارِيخِ.'
    },
    {
      id: 'tajawal',
      name: 'Tajawal',
      className: 'font-tajawal font-bold',
      description: 'Modern geometric clarity featuring friendly rounded terminals and sharp readability across diverse screen sizes.',
      bestFor: 'Modern Interface & Dashboards',
      sampleAyah: 'شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ',
      sampleGrammar: 'الْعِلْمُ نُورٌ وَالْجَهْلُ ظُلْمَةٌ، يَطْلُبُ الطَّالِبُ الْمُجْتَهِدُ الْكُتُبَ الْمُفِيدَةَ كُلَّ يَوْمٍ بِصَبْرٍ.'
    },
    {
      id: 'vazirmatn',
      name: 'Vazirmatn',
      className: 'font-vazirmatn font-semibold',
      description: 'Refined Naskh-inspired typography calibrated for low eye fatigue during extended reading and narrative immersion.',
      bestFor: 'Extended Reading & Immersion',
      sampleAyah: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ',
      sampleGrammar: 'الْقِرَاءَةُ مُפِيدَةٌ لِلْعَقْلِ، تَمْنَحُ الْإِنْسَانَ فَهْمًا عَمِيقًا لِلْقَوَاعِدِ النَّحْوِيَّةِ وَالصَّرْفِيَّةِ.'
    },
    {
      id: 'noto-arabic',
      name: 'Noto Sans Arabic',
      className: 'font-noto-arabic font-semibold',
      description: 'Universal harmonic standard ensuring uncompromising Unicode precision and crisp separation of multi-tiered vowel diacritics.',
      bestFor: 'Universal Standard & Reference',
      sampleAyah: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا ۖ إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ',
      sampleGrammar: 'يَدْرُسُ التَّلَامِيذُ فِي الْفَصْلِ بِهِمَّةٍ عَالِيَةٍ، وَيَسْتَمِعُونَ إِلَى شَرْحِ الْمُعَلِّمِ بِانْتِبَاهٍ.'
    },
    {
      id: 'mushaf',
      name: "Mus'haf Script (KFGQPC King Fahad v2)",
      className: 'font-mushaf font-normal',
      description: "KFGQPC Uthmanic Script HAFS (King Fahad Complex v2) - the actual Quran.com King Fahad font. Strictly reserved for Mushaf inspection rooms and Living Mushaf reading rooms only. Never used in pedagogical UI.",
      bestFor: 'Mushaf Room ONLY · Sacred Scripture',
      isRecommended: true,
      sampleAyah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ',
      sampleGrammar: 'إِنَّ كَلَامَ اللَّهِ تَعَالَى أَعْظَمُ كَلَامٍ، يَهْدِي الْقُلُوبَ وَيُنَوِّرُ الْبَصَائِرَ وَيَرْفَعُ الدَّرَجَاتِ.'
    }
  ];

  const currentFont = fontOptions.find(f => f.id === selectedFontId) || fontOptions[0];

  const englishTypeScale = [
    { name: 'Display', token: 'text-display', size: '34px', leading: '40px', tracking: '-0.4px', example: 'Pedagogical Engine Architecture' },
    { name: 'Heading 1', token: 'text-h1', size: '28px', leading: '34px', tracking: '-0.2px', example: 'Volume One · Foundations' },
    { name: 'Heading 2', token: 'text-h2', size: '22px', leading: '28px', tracking: '-0.1px', example: 'Lesson 4 · The Definite Article' },
    { name: 'Body Primary', token: 'text-body', size: '16px', leading: '26px', tracking: 'Normal', example: 'In classical Arabic syntax, every nominal sentence consists of a subject (Mubtada) and a predicate (Khabar).' },
    { name: 'Body Small', token: 'text-body-sm', size: '14px', leading: '22px', tracking: 'Normal', example: 'Observe how the adjective agrees in definiteness, gender, number, and case.' },
    { name: 'Caption / Badge', token: 'text-caption', size: '12px', leading: '18px', tracking: 'Normal', example: 'CHAPTER 2 · 8 LESSONS REMAINING' },
  ];

  return (
    <div className="space-y-12">
      {/* Overview Banner */}
      <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 md:p-10 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 font-english-semibold text-xs tracking-wider uppercase">
            <Type className="w-4 h-4 text-neutral-900 dark:text-white" />
            <span>Typography Engine &amp; RTL Architecture V2</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/15 text-xs font-english-semibold text-[#10b981]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>Captain Approved Suite · Verified Diacritic Cushioning</span>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-english-semibold text-neutral-950 dark:text-white tracking-tight">
          Expanded Captain-Approved Typography Suite
        </h2>
        <p className="text-base font-english text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
          Our typography uses a strict font separation: <strong className="text-neutral-950 dark:text-white">Cairo</strong>, <strong className="text-neutral-950 dark:text-white">Tajawal</strong>, <strong className="text-neutral-950 dark:text-white">Vazirmatn</strong>, and <strong className="text-neutral-950 dark:text-white">Noto Sans Arabic</strong> serve all pedagogical contexts (vocab cards, grammar trees, lesson headers, Q&amp;A). The <strong className="text-neutral-950 dark:text-white">KFGQPC Uthmanic Script HAFS (King Fahad v2)</strong> is strictly reserved for Mushaf inspection rooms and Living Mushaf reading rooms only. Every font family is permanently paired with generous line-height cushions (<code className="text-xs font-mono px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800">leading-[2.4]</code> and <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800">py-2</code>).
        </p>

        {/* Font Separation Rule Box */}
        <div className="rounded-2xl bg-[#10b981]/10 dark:bg-[#10b981]/15 p-5 flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0 mt-1" />
          <div className="space-y-2">
            <span className="font-english-semibold text-sm text-neutral-900 dark:text-neutral-100 block">
              Official Font Separation Rule (Captain Mandated)
            </span>
            <div className="text-xs font-english text-neutral-600 dark:text-neutral-300 space-y-1">
              <p><strong className="text-[#10b981]">Mushaf / Living Mushaf rooms only:</strong> <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-mushaf</code> - KFGQPC Uthmanic Script HAFS (King Fahad Complex v2). Never in pedagogical UI.</p>
              <p><strong className="text-neutral-900 dark:text-neutral-100">All pedagogical UI</strong> (vocab, grammar, Q&amp;A, lesson headers, dashboards): <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-cairo</code> · <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-tajawal</code> · <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-vazirmatn</code> · <code className="font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded">font-noto-arabic</code></p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Font Toggle & Diacritic Verification Studio */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-xl font-english-semibold text-neutral-900 dark:text-neutral-100">
              Interactive Typography &amp; Diacritic Cushion Studio
            </h3>
            <p className="text-sm font-english text-neutral-500 dark:text-neutral-400 mt-1">
              Toggle across all captain-approved font families and inspect real-time vertical buffer protection against diacritic collisions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Sample Mode Switcher */}
            <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-full">
              <button
                type="button"
                onClick={() => setSampleMode('quran')}
                className={`px-3 py-1.5 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none flex items-center gap-1.5 ${
                  sampleMode === 'quran'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Sacred Scripture</span>
              </button>
              <button
                type="button"
                onClick={() => setSampleMode('grammar')}
                className={`px-3 py-1.5 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none flex items-center gap-1.5 ${
                  sampleMode === 'grammar'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Classical Grammar</span>
              </button>
            </div>

            {/* Buffer Line Inspector Button */}
            <button
              type="button"
              onClick={() => setShowBufferLines(!showBufferLines)}
              className={`px-4 py-2 rounded-full text-xs font-english-semibold transition-all flex items-center gap-2 cursor-pointer outline-none ${
                showBufferLines
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold'
                  : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#10b981]" />
              <span>{showBufferLines ? 'Cushion Tone: ON (leading-[2.4], py-2)' : 'Cushion Tone: OFF'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Font Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {fontOptions.map((font) => {
            const isSelected = selectedFontId === font.id;
            return (
              <button
                key={font.id}
                type="button"
                onClick={() => setSelectedFontId(font.id)}
                className={`text-left p-4 rounded-2xl transition-all cursor-pointer outline-none flex flex-col justify-between h-full ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black scale-[1.02]'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" title="Active Selection (Emerald Accent)" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
                      )}
                      <span className="font-english-semibold text-base leading-tight">{font.name}</span>
                    </div>
                    {font.isRecommended && (
                      <span className={`text-[10px] font-english-semibold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-[#10b981]/20 text-[#10b981] dark:bg-[#10b981]/15 font-bold'
                          : 'bg-[#10b981]/15 text-[#10b981]'
                      }`}>
                        ★ Recommended
                      </span>
                    )}
                  </div>
                  <span className={`text-xs block font-english ${isSelected ? 'text-neutral-300 dark:text-neutral-700' : 'text-neutral-500 dark:text-neutral-400'}`}>
                    Best for: {font.bestFor}
                  </span>
                </div>

                <div className="mt-4 pt-2 text-right overflow-hidden" dir="rtl">
                  <span className={`${font.className} text-xl block truncate leading-normal`}>
                    أَبْجَدِية الْعَرَبِ
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Font Showcase Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* Active Font Overview & Specs */}
          <div className="lg:col-span-4 rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white dark:bg-[#141414] text-neutral-800 dark:text-neutral-200">
                  Selected Type Engine
                </span>
                {currentFont.isRecommended && (
                  <span className="inline-flex items-center gap-1 text-xs font-english-semibold text-[#10b981]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Captain Verified</span>
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-2xl font-english-semibold text-neutral-950 dark:text-white">
                  {currentFont.name}
                </h4>
                <p className="text-xs font-mono text-[#10b981] mt-0.5">
                  className=&quot;{currentFont.className}&quot;
                </p>
              </div>

              <p className="text-sm font-english text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {currentFont.description}
              </p>

              <div className="bg-white dark:bg-[#141414] p-4 rounded-2xl space-y-2">
                <span className="text-xs font-english-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>Diacritic Cushion Specification</span>
                </span>
                <div className="space-y-1 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <div className="flex justify-between">
                    <span>Vertical Rhythm:</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-200">leading-[2.4]</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vertical Cushion:</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-200">py-2 / py-4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Text Alignment:</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-200">dir=&quot;rtl&quot;</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 text-xs font-english text-neutral-500 dark:text-neutral-400">
              ⚡ Notice how our subtle Emerald Green accent (<strong className="text-[#10b981]">#10b981</strong>) activates to clearly identify current interface selections without compromising our flat grayscale canvas.
            </div>
          </div>

          {/* Live Text Inspection Area */}
          <div className="lg:col-span-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 flex flex-col justify-between space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4">
              <div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white dark:bg-[#141414] text-neutral-900 dark:text-neutral-100 font-semibold">
                  {sampleMode === 'quran' ? 'Quranic Display · text-3xl / 4xl' : 'Classical Grammar · text-2xl'}
                </span>
              </div>
              <span className="text-xs font-english text-neutral-500">
                Active Buffer: <strong className="text-[#10b981] font-mono">leading-[2.4] + py-2</strong>
              </span>
            </div>

            {/* Main Interactive Text Well (Zero-border tone background when buffer cushion is active) */}
            <div className={`transition-all duration-300 rounded-2xl p-6 sm:p-10 flex items-center justify-center relative ${
              showBufferLines
                ? 'bg-[#10b981]/10 dark:bg-[#10b981]/15'
                : 'bg-white dark:bg-[#141414]'
            }`}>
              {showBufferLines && (
                <div className="absolute top-2 right-3 flex items-center gap-1 text-[11px] font-mono text-[#10b981] font-semibold bg-black/5 dark:bg-white/5 px-2.5 py-0.5 rounded-full">
                  <span>● py-2 Buffer Safe Zone</span>
                </div>
              )}

              <div className="w-full py-2">
                <p
                  className={`${currentFont.className} ${
                    sampleMode === 'quran' ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl'
                  } text-neutral-950 dark:text-white text-right leading-[2.4] transition-all`}
                  dir="rtl"
                >
                  {sampleMode === 'quran' ? currentFont.sampleAyah : currentFont.sampleGrammar}
                </p>
              </div>
            </div>

            {/* Pedagogical Verification Footer */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#141414] flex items-start gap-3">
              <Check className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs font-english text-neutral-600 dark:text-neutral-300">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                  ✓ Diacritic &amp; Descender Integrity Verified
                </span>
                <span>
                  Whether rendering tall Shadda + Fatha combinations on Lam in <strong className="text-neutral-900 dark:text-white">Cairo</strong> or profound descending sweeps of Jeem, Raa, and Meem in authentic <strong className="text-neutral-900 dark:text-white">Mus&apos;haf script</strong>, our generous <code className="font-mono text-[11px] text-[#10b981]">leading-[2.4]</code> line-height cushions ensure flawless visual clearance and zero clipping.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory RTL Directionality Rule Box */}
        <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-6 text-sm text-neutral-600 dark:text-neutral-300 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] shrink-0" />
            <span className="font-english-semibold text-neutral-950 dark:text-white">Mandatory RTL Directionality Rule:</span>
            <span>Every container wrapping Arabic script must explicitly declare <code className="text-xs font-mono bg-white dark:bg-neutral-800 px-2 py-0.5 rounded">dir=&quot;rtl&quot;</code> to guarantee correct bi-directional Unicode rendering, punctuation placement, and Harakat alignment without borders.</span>
          </div>
          <span className="text-xs text-[#10b981] font-mono font-semibold">dir=&quot;rtl&quot; · leading-[2.4] · py-2</span>
        </div>
      </div>

      {/* Quicksand English Type Scale */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            Quicksand English &amp; Administrative Type Scale
          </h3>
          <p className="text-sm font-english text-neutral-500 dark:text-neutral-400 mt-1">
            Calibrated tokens applied across all user interface controls, grammar explanations, and navigational metadata labels.
          </p>
        </div>

        <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <div className="p-6 md:p-8 space-y-6">
            {englishTypeScale.map((item, idx) => (
              <div key={item.token} className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${idx > 0 ? 'pt-4' : ''}`}>
                <div className="md:w-1/3 shrink-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                    <span className="font-english-semibold text-base text-neutral-900 dark:text-neutral-100">
                      {item.name}
                    </span>
                    <code className="text-xs font-mono bg-white dark:bg-[#161616] px-2 py-0.5 rounded text-neutral-700 dark:text-neutral-300">
                      {item.token}
                    </code>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 pl-3.5">
                    Size: {item.size} · Line: {item.leading} · Tracking: {item.tracking}
                  </div>
                </div>

                <div className="md:w-2/3 md:text-right overflow-hidden">
                  <span className={`${item.token === 'text-display' ? 'text-2xl md:text-3xl font-english-semibold' : item.token === 'text-h1' ? 'text-2xl font-english-semibold' : item.token === 'text-h2' ? 'text-xl font-english-semibold' : item.token === 'text-body' ? 'text-base font-english' : item.token === 'text-body-sm' ? 'text-sm font-english' : 'text-xs font-english font-semibold uppercase tracking-wider text-neutral-500'} text-neutral-900 dark:text-neutral-100 block truncate`}>
                    {item.example}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

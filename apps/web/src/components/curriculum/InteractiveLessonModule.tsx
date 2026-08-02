import { useState, useMemo } from 'react';
import {
  BookOpen,
  Sparkles,
  Volume2,
  CheckCircle2,
  Award,
  Eye,
  EyeOff,
  Layers,
  Lightbulb,
  Compass,
  Check,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Navigation,
  RefreshCw,
} from 'lucide-react';
import {
  HarakatEngine,
  ARABIC_FONT_OPTIONS,
  STAGE_CONFIGS,
  renderHarakat,
} from '../../lib/harakat/Engine';
import type { HarakatStage, ArabicFontFamily } from '../../lib/harakat/Engine';
import type { LessonData } from '@tariq/shared';

interface InteractiveLessonModuleProps {
  lesson: LessonData;
  lessonTitle: string;
  subtitle: string;
  prevLessonRoute?: string;
  nextLessonRoute?: string;
}

// Global rule helper: Ensure no em dashes or en dashes ever get rendered
const cleanDash = (text: string | undefined): string => {
  if (!text) return '';
  return text.replace(/-|–/g, '-');
};

type TabType = 'all' | 'vocab' | 'distance' | 'reflex' | 'grammar';

export function InteractiveLessonModule({
  lesson,
  lessonTitle,
  subtitle,
  prevLessonRoute,
  nextLessonRoute,
}: InteractiveLessonModuleProps) {
  // Harakat FSM & Font State
  const [harakatStage, setHarakatStage] = useState<HarakatStage>('STAGE_0');
  const [arabicFont, setArabicFont] = useState<ArabicFontFamily>('cairo');
  const [activeTab, setActiveTab] = useState<TabType>('all');
  
  // Student Interactive Mastery Tracking
  const [masteredWords, setMasteredWords] = useState<Record<string, boolean>>({});
  const [masteredSentences, setMasteredSentences] = useState<Record<string, boolean>>({});
  const [showTranslations, setShowTranslations] = useState<boolean>(true);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [grammarHighlightMode, setGrammarHighlightMode] = useState<Record<string, boolean>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Initialize engine instance for structural lookups
  const engine = useMemo(() => new HarakatEngine(harakatStage), [harakatStage]);
  const currentStageConfig = engine.getConfig();

  // Find font class for selected Arabic typography
  const currentFontClass = useMemo(() => {
    const selected = ARABIC_FONT_OPTIONS.find((f) => f.id === arabicFont);
    return selected ? selected.className : 'font-cairo';
  }, [arabicFont]);

  // Calculate overall lesson stats for interactive feedback
  const { totalItems, masteredCount, percentage } = useMemo(() => {
    let vocabCount = 0;
    let sentenceCount = 0;
    
    lesson.chunks.forEach((c) => {
      if (!c.payload) return;
      if (c.type === 'vocabulary' && 'words' in c.payload) {
        vocabCount += (c.payload as any).words.length;
      }
      if (c.type === 'application' && 'items' in c.payload) {
        sentenceCount += (c.payload as any).items.length;
      }
      if (c.type === 'q_and_a' && 'questions' in c.payload) {
        sentenceCount += (c.payload as any).questions.length;
      }
    });

    // We add 5 item checkpoints for the Distance and Reflex immersion modules
    const extraCheckpoints = 10;
    const wordsMastered = Object.values(masteredWords).filter(Boolean).length;
    const sentencesMastered = Object.values(masteredSentences).filter(Boolean).length;
    
    const total = vocabCount + sentenceCount + extraCheckpoints || 1;
    const mastered = Math.min(total, wordsMastered + sentencesMastered);
    const perc = Math.min(100, Math.round((mastered / total) * 100));

    return { totalItems: total, masteredCount: mastered, percentage: perc };
  }, [lesson, masteredWords, masteredSentences]);

  // Toggle audio speech simulation with visual feedback
  const triggerAudioSimulation = (id: string) => {
    setActiveAudioId(id);
    setTimeout(() => {
      setActiveAudioId((prev) => (prev === id ? null : prev));
    }, 1600);
  };

  const toggleWordMastery = (key: string) => {
    setMasteredWords((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSentenceMastery = (key: string) => {
    setMasteredSentences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCardFlip = (key: string) => {
    setFlippedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Recommended stage guidance based on mastery percentage
  const stageRecommendation = useMemo(() => {
    if (percentage < 25) return { text: 'Recommended: Stage 0 (Full Vocalization)', target: 'STAGE_0' as HarakatStage };
    if (percentage < 55) return { text: 'Recommended: Stage 1 - 2 (Waqf & Article Fading)', target: 'STAGE_2' as HarakatStage };
    if (percentage < 85) return { text: 'Recommended: Stage 3 (Root & Disambiguation Only)', target: 'STAGE_3' as HarakatStage };
    return { text: 'Recommended: Stage 4 (Zero Harakat Mastery - Native Level)', target: 'STAGE_4' as HarakatStage };
  }, [percentage]);

  // Extract vocabulary words from lesson for our immersion drills
  const extractedVocabulary = useMemo(() => {
    const words: any[] = [];
    lesson.chunks.forEach((c) => {
      if (c.type === 'vocabulary' && c.payload && 'words' in c.payload) {
        (c.payload as any).words.forEach((w: any) => words.push(w));
      }
    });
    if (words.length === 0) {
      // Classic Esho Arbi Shikhi fallback immersion set
      return [
        { id: 1, ar: 'كِتَابٌ', romanized: 'kitābun', en: 'A book', bn: 'একটি বই', emoji: '📖' },
        { id: 2, ar: 'قَلَمٌ', romanized: 'qalamun', en: 'A pen', bn: 'একটি কলম', emoji: '🖊️' },
        { id: 3, ar: 'مَسْجِدٌ', romanized: 'masjidun', en: 'A mosque', bn: 'একটি মসজিদ', emoji: '🕌' },
        { id: 4, ar: 'بَيْتٌ', romanized: 'baytun', en: 'A house', bn: 'একটি ঘর', emoji: '🏠' },
        { id: 5, ar: 'مَدْرَسَةٌ', romanized: 'madrasatun', en: 'A school', bn: 'একটি মাদ্রাসা', emoji: '🏫' },
        { id: 6, ar: 'سَبُّورَةٌ', romanized: 'sabbūratun', en: 'A chalkboard', bn: 'একটি ব্ল্যাকবোর্ড', emoji: ' blackboard ' },
      ];
    }
    return words;
  }, [lesson]);

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 pb-24 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-12">
        
        {/* TOP HERO & PEDAGOGY HEADER (RAW NEUTRAL MANDATE) */}
        <section className="bg-neutral-100 dark:bg-neutral-800 rounded-[2.5rem] p-6 sm:p-10 space-y-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-4 py-1.5 rounded-full text-xs font-english font-bold tracking-wide">
                <Compass className="w-4 h-4 text-neutral-900 dark:text-neutral-100 animate-pulse" />
                <span>Esho Arbi Shikhi - Maulana Abu Taher Misbah's Methodology</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-english font-extrabold tracking-tight text-neutral-950 dark:text-white">
                {cleanDash(lessonTitle)}
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-english leading-relaxed">
                {cleanDash(subtitle)}
              </p>
            </div>

            {/* LIVE MASTERY SCOREBOX (FLAT TONE-ON-TONE) */}
            <div className="bg-neutral-200/70 dark:bg-neutral-900/80 rounded-[2rem] p-6 min-w-[250px] flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-english font-bold text-neutral-600 dark:text-neutral-400">
                  Immersion Mastery
                </span>
                <Award className="w-5 h-5 text-neutral-900 dark:text-white" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-english font-black text-neutral-950 dark:text-white">
                  {percentage}%
                </span>
                <span className="text-sm font-english font-medium text-neutral-600 dark:text-neutral-400">
                  {masteredCount} / {totalItems} items
                </span>
              </div>
              <div className="w-full bg-neutral-300/80 dark:bg-neutral-700 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-neutral-900 dark:bg-white h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* INTERACTIVE FONT SUITE SELECTOR */}
          <div className="bg-white/60 dark:bg-neutral-900/60 rounded-3xl p-5 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-english font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-neutral-900 dark:text-white" />
                <span>Arabic Font Suite (Interactive Toggle)</span>
              </span>
              <span className="text-xs font-english text-neutral-500 dark:text-neutral-400">
                Switch typography to train reading proficiency across classical & modern fonts
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ARABIC_FONT_OPTIONS.map((font) => {
                const isSelected = arabicFont === font.id;
                return (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => setArabicFont(font.id)}
                    className={`px-4 py-3 rounded-2xl font-english text-sm font-bold transition-all duration-200 flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 scale-[1.02]'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80'
                    }`}
                  >
                    <span>{font.name}</span>
                    <span className={`text-base ${font.className} ${isSelected ? 'text-neutral-100 dark:text-neutral-900' : 'text-neutral-600 dark:text-neutral-400'}`}>
                      {font.sample}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5-STAGE HARAKAT FADING FSM CONTROLLER */}
          <div className="bg-white/60 dark:bg-neutral-900/60 rounded-3xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-neutral-900 dark:text-white" />
                <span className="font-english font-bold text-sm text-neutral-900 dark:text-white">
                  5-Stage Harakat Fading FSM Engine
                </span>
              </div>
              <button
                type="button"
                onClick={() => setHarakatStage(stageRecommendation.target)}
                className="inline-flex items-center gap-1.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-3.5 py-1.5 rounded-full text-xs font-english font-bold transition-all cursor-pointer w-fit"
              >
                <Lightbulb className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
                <span>{stageRecommendation.text}</span>
              </button>
            </div>

            {/* Stage Toggle Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {(['STAGE_0', 'STAGE_1', 'STAGE_2', 'STAGE_3', 'STAGE_4'] as HarakatStage[]).map((stage) => {
                const cfg = STAGE_CONFIGS[stage];
                const isActive = harakatStage === stage;
                return (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setHarakatStage(stage)}
                    className={`px-3 py-2.5 rounded-2xl text-xs font-english font-bold transition-all duration-200 flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 scale-[1.02]'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80'
                    }`}
                  >
                    <span>{cfg.badge}</span>
                    <span className={`text-[10px] opacity-90 text-center line-clamp-1 ${isActive ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'}`}>
                      {cfg.shortDesc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Description */}
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-english text-neutral-700 dark:text-neutral-300">
              <div className="space-y-1">
                <p className="font-bold text-neutral-950 dark:text-white">
                  Active Rule: {currentStageConfig.name}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {currentStageConfig.description}
                </p>
              </div>
              <div className="bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-3.5 py-2 rounded-xl shrink-0 font-bold text-center">
                <span>🛡️ Immutable Shaddah Protected</span>
              </div>
            </div>
          </div>

          {/* MODULE TAB NAVIGATION & TRANSLATION TOGGLE */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2 bg-neutral-200/70 dark:bg-neutral-900/70 p-1.5 rounded-3xl w-fit">
              {[
                { id: 'all', label: 'All Modules' },
                { id: 'vocab', label: 'Vocabulary Cards' },
                { id: 'distance', label: 'Visual Distance' },
                { id: 'reflex', label: 'Reflex Drills' },
                { id: 'grammar', label: 'Grammar & Syntax' },
              ].map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-english font-bold transition-all cursor-pointer ${
                      active
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-300/50 dark:hover:bg-neutral-800/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowTranslations(!showTranslations)}
              className="inline-flex items-center gap-2 bg-neutral-200/80 hover:bg-neutral-300 text-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-100 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-english font-bold transition-all cursor-pointer self-start sm:self-auto"
            >
              {showTranslations ? (
                <>
                  <EyeOff className="w-4 h-4 text-neutral-900 dark:text-white" />
                  <span>Hide Translations (Test Mode)</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-neutral-900 dark:text-white" />
                  <span>Show Translations</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* INTERACTIVE LESSON MODULES */}
        <div className="space-y-16">
          
          {/* MODULE 1: INTERACTIVE VOCABULARY CARDS (FLIP / REVEAL) */}
          {(activeTab === 'all' || activeTab === 'vocab') && (
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-neutral-100 dark:bg-neutral-800 px-6 py-5 rounded-3xl gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-neutral-900 dark:text-white" />
                    <h2 className="text-xl sm:text-2xl font-english font-bold text-neutral-900 dark:text-neutral-100">
                      Interactive Vocabulary - Tone-on-Tone Reveal Cards
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm font-english text-neutral-600 dark:text-neutral-400">
                    Tap any vocabulary card to flip between classical Arabic vocalization and conversational grounding.
                  </p>
                </div>
                <div className="text-xs font-english font-bold bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-2xl">
                  {extractedVocabulary.length} Grounding Words
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {extractedVocabulary.map((word: any, index: number) => {
                  const cardKey = `vocab-${word.id || index}`;
                  const isFlipped = !!flippedCards[cardKey];
                  const isMastered = !!masteredWords[cardKey];
                  const isSpeaking = activeAudioId === cardKey;
                  const renderedArabic = renderHarakat(word.ar, harakatStage);

                  return (
                    <div
                      key={cardKey}
                      onClick={() => toggleCardFlip(cardKey)}
                      className={`group bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-750 p-6 rounded-[2.5rem] flex flex-col justify-between min-h-[340px] transition-all duration-300 active:scale-[0.98] cursor-pointer relative ${
                        isMastered ? 'bg-neutral-200/90 dark:bg-neutral-850' : ''
                      }`}
                    >
                      {/* Top Action Header */}
                      <div className="flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
                        <span className="text-3xl bg-neutral-200/80 dark:bg-neutral-700/80 p-3.5 rounded-3xl">
                          {word.emoji || '📖'}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => triggerAudioSimulation(cardKey)}
                            className={`px-3 py-2 rounded-2xl text-xs font-english font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isSpeaking
                                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 animate-pulse'
                                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                            }`}
                          >
                            <Volume2 className="w-4 h-4" />
                            <span>{isSpeaking ? 'Playing audio...' : 'Audio'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => toggleWordMastery(cardKey)}
                            title="Mark as Mastered"
                            className={`p-2.5 rounded-2xl transition-all cursor-pointer ${
                              isMastered
                                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                            }`}
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Card Center Content: Front vs Back */}
                      {!isFlipped ? (
                        <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                          <span className={`text-4xl sm:text-5xl font-bold ${currentFontClass} text-neutral-950 dark:text-white transition-all duration-300 leading-relaxed dir-rtl`}>
                            {renderedArabic}
                          </span>
                          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                            {cleanDash(word.romanized)}
                          </span>
                        </div>
                      ) : (
                        <div className="py-6 flex flex-col items-center justify-center text-center space-y-3 px-2">
                          <div className="bg-neutral-200/70 dark:bg-neutral-700/70 px-3 py-1 rounded-full text-[10px] font-english font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                            Immersion Grounding
                          </div>
                          <h3 className="text-2xl font-english font-extrabold text-neutral-950 dark:text-white">
                            {cleanDash(word.en)}
                          </h3>
                          {word.bn && (
                            <p className="text-base font-bengali font-semibold text-neutral-700 dark:text-neutral-300">
                              {cleanDash(word.bn)}
                            </p>
                          )}
                          <p className="text-xs font-english text-neutral-500 dark:text-neutral-400 leading-normal max-w-[220px]">
                            Essential everyday situational noun in Maulana Abu Taher Misbah's immersion methodology.
                          </p>
                        </div>
                      )}

                      {/* Bottom Footer Indicator */}
                      <div className="pt-2 bg-neutral-200/50 dark:bg-neutral-700/50 p-4 rounded-3xl flex items-center justify-between text-xs font-english font-bold text-neutral-700 dark:text-neutral-300">
                        <span>{isFlipped ? 'Translation Revealed' : 'Arabic Vocalization'}</span>
                        <span className="bg-neutral-300/80 dark:bg-neutral-600/80 px-2.5 py-1 rounded-xl">
                          {isFlipped ? 'Tap to Flip Back' : 'Tap to Reveal ->'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* MODULE 2: VISUAL DISTANCE DEMONSTRATION (NEAR vs. FAR SPATIAL IMMERSION) */}
          {(activeTab === 'all' || activeTab === 'distance') && (
            <DistanceDemonstrationSection
              vocabulary={extractedVocabulary}
              harakatStage={harakatStage}
              fontClass={currentFontClass}
              showTranslations={showTranslations}
              onMasteryToggle={toggleSentenceMastery}
              masteredMap={masteredSentences}
              activeAudio={activeAudioId}
              onAudioTrigger={triggerAudioSimulation}
            />
          )}

          {/* MODULE 3: CONVERSATIONAL REFLEX DRILLS (Q&A DIALOGUE ARENA) */}
          {(activeTab === 'all' || activeTab === 'reflex') && (
            <ConversationalReflexArena
              vocabulary={extractedVocabulary}
              harakatStage={harakatStage}
              fontClass={currentFontClass}
              onMasteryToggle={toggleSentenceMastery}
              masteredMap={masteredSentences}
            />
          )}

          {/* MODULE 4: GRAMMAR & SYNTAX SECTION (RAW NEUTRAL V2 COMPLIANT) */}
          {(activeTab === 'all' || activeTab === 'grammar') && (
            <GrammarSyntaxSection
              chunks={lesson.chunks}
              harakatStage={harakatStage}
              fontClass={currentFontClass}
              grammarHighlightMode={grammarHighlightMode}
              setGrammarHighlightMode={setGrammarHighlightMode}
            />
          )}

        </div>

        {/* BOTTOM LESSON NAVIGATION FOOTER (TONE-ON-TONE MINIMALISM) */}
        <section className="bg-neutral-100 dark:bg-neutral-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 transition-colors duration-300">
          {prevLessonRoute ? (
            <a
              href={prevLessonRoute}
              className="inline-flex items-center gap-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100 px-6 py-3.5 rounded-2xl font-english font-bold text-sm transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
              <span>Previous Lesson (Volume 1)</span>
            </a>
          ) : (
            <div className="hidden sm:block" />
          )}

          <div className="text-center space-y-1">
            <p className="text-xs uppercase tracking-widest font-english font-extrabold text-neutral-900 dark:text-white">
              Esho Arbi Shikhi Pedagogical Engine
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-english">
              Keep progressing through the immersion stages to attain authentic Arabic fluency!
            </p>
          </div>

          {nextLessonRoute ? (
            <a
              href={nextLessonRoute}
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 px-6 py-3.5 rounded-2xl font-english font-bold text-sm transition-all"
            >
              <span>Next Lesson (Volume 1)</span>
              <ChevronRight className="w-4 h-4 text-white dark:text-neutral-950" />
            </a>
          ) : (
            <div className="hidden sm:block" />
          )}
        </section>

      </div>
    </main>
  );
}

/* ============================================================================
   SUB-COMPONENT 1: VISUAL DISTANCE DEMONSTRATION (SPATIAL PERSPECTIVE)
   ============================================================================ */
interface DistanceProps {
  vocabulary: any[];
  harakatStage: HarakatStage;
  fontClass: string;
  showTranslations: boolean;
  onMasteryToggle: (key: string) => void;
  masteredMap: Record<string, boolean>;
  activeAudio: string | null;
  onAudioTrigger: (id: string) => void;
}

function DistanceDemonstrationSection({
  vocabulary,
  harakatStage,
  fontClass,
  showTranslations,
  onMasteryToggle,
  masteredMap,
  activeAudio,
  onAudioTrigger,
}: DistanceProps) {
  const [perspective, setPerspective] = useState<'near' | 'far'>('near');

  // We generate spatial demonstratives intuitively without abstract theory
  const demonstrativeItems = useMemo(() => {
    return vocabulary.map((word, i) => {
      // Natural immersion check for feminine nouns (ends in ta-marbuta ة or specific feminine nouns)
      const isFeminine = wIsFeminine(word.ar);
      const pointerAr = perspective === 'near' ? (isFeminine ? 'هَذِهِ' : 'هَذَا') : (isFeminine ? 'تِلْكَ' : 'ذَلِكَ');
      const pointerEn = perspective === 'near' ? 'This is' : 'That is';
      const pointerBn = perspective === 'near' ? 'এই' : 'ঐ';
      const distanceBadge = perspective === 'near' ? '📍 Near Pointer (Right at hand)' : '🔭 Far Pointer (Across distance)';

      const fullAr = `${pointerAr} ${word.ar}`;
      const fullEn = `${pointerEn} ${word.en.toLowerCase().replace(/^(a|an) /, 'a ')}`;
      const fullBn = `${pointerBn} ${word.bn || 'একটি বস্তু'}`;

      return {
        key: `dist-${perspective}-${i}`,
        word,
        pointerAr,
        fullAr,
        fullEn,
        fullBn,
        distanceBadge,
        isFeminine,
      };
    });
  }, [vocabulary, perspective]);

  return (
    <section className="bg-neutral-100 dark:bg-neutral-800 rounded-[2.5rem] p-6 sm:p-10 space-y-8 transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-english font-bold text-lg sm:text-xl">
            <Navigation className="w-5 h-5" />
            <span>Visual Distance Demonstration - Intuitive Spatial Demonstratives</span>
          </div>
          <p className="text-xs sm:text-sm font-english text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Experience near and far pointers instinctively without theoretical grammatical jargon. Notice how words ending in ta-marbuta naturally harmonize with feminine spatial pointers during conversational usage.
          </p>
        </div>

        {/* PERSPECTIVE SELECTOR TOGGLE (RAW NEUTRAL PILLS) */}
        <div className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-900 p-2 rounded-3xl">
          <button
            type="button"
            onClick={() => setPerspective('near')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-english font-bold transition-all cursor-pointer ${
              perspective === 'near'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-extrabold shadow-none'
                : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-300/60 dark:hover:bg-neutral-800/60'
            }`}
          >
            <span>📍 Near Perspective (هَذَا / هَذِهِ)</span>
          </button>
          <button
            type="button"
            onClick={() => setPerspective('far')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-english font-bold transition-all cursor-pointer ${
              perspective === 'far'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-extrabold shadow-none'
                : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-300/60 dark:hover:bg-neutral-800/60'
            }`}
          >
            <span>🔭 Far Perspective (ذَلِكَ / تِلْكَ)</span>
          </button>
        </div>
      </div>

      {/* DEMONSTRATIVE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demonstrativeItems.map((item) => {
          const isMastered = !!masteredMap[item.key];
          const isSpeaking = activeAudio === item.key;
          const renderedSentence = renderHarakat(item.fullAr, harakatStage);

          return (
            <div
              key={item.key}
              onClick={() => onMasteryToggle(item.key)}
              className={`bg-white dark:bg-neutral-900 rounded-[2rem] p-6 flex flex-col justify-between space-y-6 transition-all duration-200 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-850 ${
                isMastered ? 'bg-neutral-200/80 dark:bg-neutral-800' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-english font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-full">
                  {item.distanceBadge}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMasteryToggle(item.key);
                  }}
                  className={`p-2 rounded-xl transition-all ${
                    isMastered
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                  }`}
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>

              {/* Large Arabic Demonstrative Sentence */}
              <div className="py-4 px-4 bg-neutral-100/70 dark:bg-neutral-800/70 rounded-3xl text-right dir-rtl flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAudioTrigger(item.key);
                  }}
                  className={`p-3 rounded-2xl transition-all ${
                    isSpeaking
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 animate-bounce'
                      : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                  }`}
                  title="Pronunciation Audio"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <span className={`text-3xl sm:text-4xl font-bold ${fontClass} text-neutral-950 dark:text-white leading-relaxed text-right`}>
                  {renderedSentence}
                </span>
              </div>

              {/* Translation Reveal Box */}
              <div className="space-y-1.5 bg-neutral-100 dark:bg-neutral-800/90 p-4 rounded-2xl">
                {showTranslations ? (
                  <>
                    <p className="text-base font-english font-bold text-neutral-900 dark:text-neutral-100">
                      {cleanDash(item.fullEn)}
                    </p>
                    <p className="text-sm font-bengali font-semibold text-neutral-700 dark:text-neutral-300">
                      {cleanDash(item.fullBn)}
                    </p>
                  </>
                ) : (
                  <p className="text-xs font-english text-neutral-500 dark:text-neutral-400 text-center italic py-2">
                    [Translations hidden in Test Mode]
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================================
   SUB-COMPONENT 2: CONVERSATIONAL REFLEX DRILLS (INTERACTIVE Q&A CHAT ARENA)
   ============================================================================ */
interface ReflexProps {
  vocabulary: any[];
  harakatStage: HarakatStage;
  fontClass: string;
  onMasteryToggle: (key: string) => void;
  masteredMap: Record<string, boolean>;
}

function ConversationalReflexArena({
  vocabulary,
  harakatStage,
  fontClass,
  onMasteryToggle,
}: ReflexProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Generate immersive situational Q&A reflex dialogues
  const dialogues = useMemo(() => {
    const defaultDialogues = [
      {
        questionAr: 'مَا هَذَا؟',
        questionEn: 'What is this? (Asking about an object at hand)',
        scenario: 'Situational immersion: A teacher points directly to a book on the student desk.',
        options: ['نَعَمْ، هَذَا كِتَابٌ', 'هَذَا كِتَابٌ', 'ذَلِكَ بَيْتٌ'],
        correct: 'هَذَا كِتَابٌ',
        explanation: 'When prompted with "مَا" (What), reply directly with the demonstrative and noun without saying "نَعَمْ" (Yes).',
      },
      {
        questionAr: 'هَلْ هَذَا كِتَابٌ؟',
        questionEn: 'Is this a book? (Verifying object recognition)',
        scenario: 'Situational immersion: A conversational partner holds up a pen and asks to test your vocabulary.',
        options: ['نَعَمْ، هَذَا كِتَابٌ', 'لَا، هَذَا قَلَمٌ', 'ذَلِكَ مَسْجِدٌ'],
        correct: 'لَا، هَذَا قَلَمٌ',
        explanation: 'Since the partner is holding a pen, reply natively with "لَا" (No) followed by the true object statement.',
      },
      {
        questionAr: 'هَلْ ذَلِكَ مَسْجِدٌ؟',
        questionEn: 'Is that a mosque over there across the road?',
        scenario: 'Situational immersion: Walking outdoors, looking toward a mosque in the distance.',
        options: ['نَعَمْ، ذَلِكَ مَسْجِدٌ', 'لَا، هَذَا كِتَابٌ', 'ذَلِكَ قَلَمٌ'],
        correct: 'نَعَمْ، ذَلِكَ مَسْجِدٌ',
        explanation: 'When confirming a far pointer "ذَلِكَ", reply with "نَعَمْ" (Yes) maintaining the distant perspective.',
      },
      {
        questionAr: 'مَا ذَلِكَ؟',
        questionEn: 'What is that far across the landscape?',
        scenario: 'Situational immersion: Pointing toward a distant house across the field.',
        options: ['ذَلِكَ بَيْتٌ', 'هَذَا بَيْتٌ', 'نَعَمْ، ذَلِكَ بَيْتٌ'],
        correct: 'ذَلِكَ بَيْتٌ',
        explanation: 'Match the far interrogative prompt natively with "ذَلِكَ بَيْتٌ" (That is a house).',
      },
      {
        questionAr: 'هَلْ هَذِهِ مَدْرَسَةٌ؟',
        questionEn: 'Is this a school right here?',
        scenario: 'Situational immersion: Standing at the gates of an educational institute.',
        options: ['نَعَمْ، هَذِهِ مَدْرَسَةٌ', 'لَا، تِلْكَ سَبُّورَةٌ', 'هَذَا كِتَابٌ'],
        correct: 'نَعَمْ، هَذِهِ مَدْرَسَةٌ',
        explanation: 'Notice how the feminine pointer "هَذِهِ" seamlessly pairs with the feminine noun "مَدْرَسَةٌ".',
      },
    ];

    return defaultDialogues;
  }, [vocabulary]);

  const currentDialogue = dialogues[currentIdx] || dialogues[0];
  const isCorrect = selectedOpt === currentDialogue.correct;

  const handleSelect = (opt: string) => {
    if (isAnswered) return;
    setSelectedOpt(opt);
    setIsAnswered(true);
    if (opt === currentDialogue.correct) {
      onMasteryToggle(`reflex-dialogue-${currentIdx}`);
    }
  };

  const handleNextDialogue = () => {
    setSelectedOpt(null);
    setIsAnswered(false);
    setCurrentIdx((prev) => (prev + 1) % dialogues.length);
  };

  const handleReset = () => {
    setSelectedOpt(null);
    setIsAnswered(false);
    setCurrentIdx(0);
  };

  return (
    <section className="bg-neutral-100 dark:bg-neutral-800 rounded-[2.5rem] p-6 sm:p-10 space-y-8 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-none">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-english font-bold text-lg sm:text-xl">
            <MessageSquare className="w-5 h-5" />
            <span>Conversational Reflex Drills - Active Q&A Dialogue Arena</span>
          </div>
          <p className="text-xs sm:text-sm font-english text-neutral-600 dark:text-neutral-400">
            Train your rapid spoken reflexes. Read the situational dialogue prompt and choose the linguistically natural response without hesitation.
          </p>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="text-xs font-english font-extrabold bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-4 py-2 rounded-2xl">
            Dialogue {currentIdx + 1} of {dialogues.length}
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="p-2.5 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-2xl text-neutral-700 dark:text-neutral-200 transition-all cursor-pointer"
            title="Reset Drill"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DIALOGUE CHAT ARENA CONTAINER (FLAT RAW NEUTRAL LAYER) */}
      <div className="bg-white dark:bg-neutral-900 rounded-[2rem] p-6 sm:p-8 space-y-8 transition-colors duration-300">
        
        {/* Scenario Banner */}
        <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-2xl flex items-center justify-between text-xs font-english text-neutral-600 dark:text-neutral-300">
          <span className="font-bold">✨ {currentDialogue.scenario}</span>
          <span className="uppercase tracking-wider font-mono text-[10px] bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded-lg text-neutral-800 dark:text-neutral-200">
            Active Immersion
          </span>
        </div>

        {/* Teacher Question Prompt (Right-aligned conversational speech bubble) */}
        <div className="flex flex-col items-end space-y-2 text-right w-full">
          <span className="text-xs font-english font-bold text-neutral-500 dark:text-neutral-400 px-2">
            🗣️ Conversational Prompt
          </span>
          <div className="bg-neutral-200/80 dark:bg-neutral-800 text-neutral-950 dark:text-white p-6 rounded-3xl rounded-tr-sm w-full max-w-2xl text-right dir-rtl">
            <span className={`text-3xl sm:text-4xl font-bold ${fontClass} leading-relaxed`}>
              {renderHarakat(currentDialogue.questionAr, harakatStage)}
            </span>
          </div>
          <span className="text-sm font-english font-semibold text-neutral-600 dark:text-neutral-300 px-2">
            {currentDialogue.questionEn}
          </span>
        </div>

        {/* Student Response Selector (Left-aligned or full-width option pills) */}
        <div className="space-y-4 pt-4">
          <span className="text-xs font-english font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
            Select Your Natural Spoken Reflex Response:
          </span>

          <div className="grid grid-cols-1 gap-3.5">
            {currentDialogue.options.map((opt, idx) => {
              const isThisChosen = selectedOpt === opt;
              const isThisCorrect = opt === currentDialogue.correct;
              const renderedOpt = renderHarakat(opt, harakatStage);

              let pillStyles = 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-neutral-900 dark:text-neutral-100';
              
              if (isAnswered) {
                if (isThisCorrect) {
                  pillStyles = 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-extrabold scale-[1.01]';
                } else if (isThisChosen && !isThisCorrect) {
                  pillStyles = 'bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-400 dark:text-neutral-500 opacity-60 line-through';
                } else {
                  pillStyles = 'bg-neutral-100/50 dark:bg-neutral-800/50 text-neutral-400 dark:text-neutral-600 opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelect(opt)}
                  className={`p-6 rounded-3xl flex items-center justify-between transition-all duration-200 cursor-pointer text-right dir-rtl ${pillStyles}`}
                >
                  <span className={`text-2xl sm:text-3xl font-bold ${fontClass} leading-relaxed flex-1`}>
                    {renderedOpt}
                  </span>
                  <div className="px-4 py-2 rounded-2xl text-xs font-english font-bold tracking-wide shrink-0">
                    {isAnswered && isThisCorrect ? (
                      <span className="flex items-center gap-1.5">
                        <Check className="w-4 h-4" />
                        <span>Natural Reflex Confirmed</span>
                      </span>
                    ) : (
                      <span className="opacity-70">Option {idx + 1}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Semantic Explanation & Next Button (Zero cartoon colors, pure tone-on-tone) */}
        {isAnswered && (
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all animate-fadeIn">
            <div className="space-y-2 max-w-xl">
              <p className="text-sm font-english font-extrabold text-neutral-950 dark:text-white flex items-center gap-2">
                <span>{isCorrect ? '✓ Excellent Conversational Reflex!' : '💡 Pedagogical Insight:'}</span>
              </p>
              <p className="text-xs sm:text-sm font-english text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {currentDialogue.explanation}
              </p>
            </div>

            <button
              type="button"
              onClick={handleNextDialogue}
              className="bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 px-8 py-4 rounded-full font-english font-bold text-sm transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Next Dialogue Prompt</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

/* ============================================================================
   SUB-COMPONENT 3: GRAMMAR & SYNTAX MODULE (RAW NEUTRAL V2 COMPATIBLE)
   ============================================================================ */
interface GrammarProps {
  chunks: any[];
  harakatStage: HarakatStage;
  fontClass: string;
  grammarHighlightMode: Record<string, boolean>;
  setGrammarHighlightMode: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

function GrammarSyntaxSection({
  chunks,
  harakatStage,
  fontClass,
  grammarHighlightMode,
  setGrammarHighlightMode,
}: GrammarProps) {
  const grammarChunks = chunks.filter((c) => c.type === 'grammar_rule');

  if (grammarChunks.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      {grammarChunks.map((chunk) => {
        if (!chunk.payload || !('rules' in chunk.payload)) return null;

        return (
          <div key={chunk.id} className="bg-neutral-100 dark:bg-neutral-800 rounded-[2.5rem] p-6 sm:p-10 space-y-8 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-200/70 dark:bg-neutral-900 p-5 rounded-3xl">
              <div className="space-y-1">
                <h3 className="text-lg font-english font-bold text-neutral-950 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-neutral-900 dark:text-white" />
                  <span>{cleanDash(chunk.titleEn || 'Maulana Abu Taher Misbah\'s Grammatical Framework')}</span>
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-english">
                  {cleanDash(chunk.titleBn || 'এসো আরবী শিখি - grammar analysis')}
                </p>
              </div>
              <span className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-4 py-2 rounded-2xl text-xs font-english font-bold">
                Syntax Analysis Mode Active
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {(chunk.payload as any).rules.map((rule: any, ruleIdx: number) => {
                const hlKey = `rule-${chunk.id}-${ruleIdx}`;
                const isHl = !!grammarHighlightMode[hlKey];

                return (
                  <div
                    key={ruleIdx}
                    className="bg-white dark:bg-neutral-900 rounded-[2rem] p-6 flex flex-col justify-between space-y-6 transition-colors duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-3 py-1.5 rounded-xl text-xs font-english font-bold">
                          {cleanDash(rule.label)}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setGrammarHighlightMode((prev) => ({ ...prev, [hlKey]: !prev[hlKey] }))
                          }
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-english font-bold transition-all cursor-pointer ${
                            isHl
                              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                          }`}
                        >
                          {isHl ? '✨ Agreement Highlighted' : '🔍 Analyze Syntax'}
                        </button>
                      </div>

                      <div className="py-5 px-6 bg-neutral-100 dark:bg-neutral-800/80 rounded-3xl text-right dir-rtl">
                        <p className={`text-2xl sm:text-3xl font-bold ${fontClass} text-neutral-950 dark:text-white leading-loose`}>
                          {renderHarakat(rule.arabic, harakatStage)}
                        </p>
                      </div>

                      {isHl && (
                        <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 p-4 rounded-2xl text-xs font-english space-y-1.5">
                          <p className="font-bold text-neutral-950 dark:text-white">Pedagogical Syntax Breakdown:</p>
                          <p>
                            Notice how noun and demonstrative gender align seamlessly in Maulana Abu Taher Misbah's method. In our engine, Shaddah remains immutable across all reading levels.
                          </p>
                        </div>
                      )}

                      <div className="space-y-1">
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-english uppercase tracking-wide font-mono">
                          {cleanDash(rule.romanized)}
                        </p>
                        <p className="text-lg font-english font-extrabold text-neutral-950 dark:text-white">
                          {cleanDash(rule.meaning)}
                        </p>
                        {rule.meaningBn && (
                          <p className="text-sm font-bengali font-semibold text-neutral-700 dark:text-neutral-300">
                            {cleanDash(rule.meaningBn)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Practice Examples */}
                    {rule.examples && rule.examples.length > 0 && (
                      <div className="space-y-2.5 pt-4 bg-neutral-100/70 dark:bg-neutral-800/70 p-4 rounded-2xl">
                        <p className="text-xs font-english font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                          Practice Examples ({fontClass.replace('font-', '')}):
                        </p>
                        <div className="space-y-2">
                          {rule.examples.map((ex: any, exIdx: number) => (
                            <div
                              key={exIdx}
                              className="flex items-center justify-between gap-4 bg-white dark:bg-neutral-900 p-3.5 rounded-2xl transition-all"
                            >
                              <span className="text-sm font-english font-semibold text-neutral-800 dark:text-neutral-200">
                                {cleanDash(ex.en)}
                              </span>
                              <span className={`text-xl font-bold ${fontClass} text-neutral-950 dark:text-white dir-rtl text-right`}>
                                {renderHarakat(ex.ar, harakatStage)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Helper to check feminine nouns by ta-marbuta or classical usage
function wIsFeminine(arabic: string | undefined): boolean {
  if (!arabic) return false;
  return arabic.includes('ة') || arabic.includes('هَذِهِ') || arabic.includes('تِلْكَ') || arabic.includes('مَدْرَسَة') || arabic.includes('سَبُّورَة') || arabic.includes('حَقِيبَة') || arabic.includes('سَيَّارَة');
}

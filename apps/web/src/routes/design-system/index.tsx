import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import ThemeToggle from '../../components/ThemeToggle';
import { RawNeutralOverview } from '../../components/design-system/RawNeutralOverview';
import { TypographyShowcase } from '../../components/design-system/TypographyShowcase';
import { HarakatFadingDemo } from '../../components/design-system/HarakatFadingDemo';
import { LivingMushafDemo } from '../../components/design-system/LivingMushafDemo';
import { SemanticFeedbackDemo } from '../../components/design-system/SemanticFeedbackDemo';
import { Sparkles, Compass, Layers, Type, BookOpen, ShieldAlert, ArrowUp } from 'lucide-react';

export const Route = createFileRoute('/design-system/')({
  component: DesignSystemShowcasePage,
});

function DesignSystemShowcasePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'raw-neutral' | 'typography' | 'harakat' | 'mushaf' | 'feedback'>('all');

  const scrollToSection = (id: string, tabName?: 'all' | 'raw-neutral' | 'typography' | 'harakat' | 'mushaf' | 'feedback') => {
    if (tabName && activeTab !== 'all' && activeTab !== tabName) {
      setActiveTab('all');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-50 pb-32 transition-colors selection:bg-neutral-200 dark:selection:bg-neutral-800">
      {/* Showcase Navigation & Header Bar */}
      <div className="bg-neutral-100 dark:bg-neutral-900 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black flex items-center justify-center font-english-semibold text-sm">
                T
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-base font-english-semibold text-neutral-950 dark:text-white leading-tight">
                    Tariq Design System Showcase
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] text-[10px] font-english-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span>Captain Approved V2</span>
                  </span>
                </div>
                <span className="text-xs font-english text-neutral-500 dark:text-neutral-400 block">
                  Raw Neutral V2 · #10b981 Emerald Accents · Invariant Semantic Feedback
                </span>
              </div>
            </div>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation Jump Pill Links */}
          <div className="flex items-center gap-2 flex-wrap justify-center w-full md:w-auto">
            <button
              type="button"
              onClick={() => scrollToSection('sec-raw-neutral', 'raw-neutral')}
              className="px-3 py-1.5 rounded-full text-xs font-english-semibold bg-white hover:bg-[#10b981]/15 dark:bg-[#141414] dark:hover:bg-[#10b981]/20 text-neutral-800 dark:text-neutral-200 hover:text-[#10b981] dark:hover:text-[#10b981] transition-all cursor-pointer outline-none flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Raw Neutral &amp; Accents</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('sec-typography', 'typography')}
              className="px-3 py-1.5 rounded-full text-xs font-english-semibold bg-white hover:bg-[#10b981]/15 dark:bg-[#141414] dark:hover:bg-[#10b981]/20 text-neutral-800 dark:text-neutral-200 hover:text-[#10b981] dark:hover:text-[#10b981] transition-all cursor-pointer outline-none flex items-center gap-1.5"
            >
              <Type className="w-3.5 h-3.5 text-[#10b981]" />
              <span>5-Font Typography Suite</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('sec-harakat', 'harakat')}
              className="px-3 py-1.5 rounded-full text-xs font-english-semibold bg-white hover:bg-[#10b981]/15 dark:bg-[#141414] dark:hover:bg-[#10b981]/20 text-neutral-800 dark:text-neutral-200 hover:text-[#10b981] dark:hover:text-[#10b981] transition-all cursor-pointer outline-none flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
              <span>5-Stage Harakat</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('sec-mushaf', 'mushaf')}
              className="px-3 py-1.5 rounded-full text-xs font-english-semibold bg-white hover:bg-[#10b981]/15 dark:bg-[#141414] dark:hover:bg-[#10b981]/20 text-neutral-800 dark:text-neutral-200 hover:text-[#10b981] dark:hover:text-[#10b981] transition-all cursor-pointer outline-none flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Living Mushaf</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('sec-feedback', 'feedback')}
              className="px-3 py-1.5 rounded-full text-xs font-english-semibold bg-white hover:bg-[#10b981]/15 dark:bg-[#141414] dark:hover:bg-[#10b981]/20 text-neutral-800 dark:text-neutral-200 hover:text-[#10b981] dark:hover:text-[#10b981] transition-all cursor-pointer outline-none flex items-center gap-1.5"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Semantic Feedback</span>
            </button>
            <div className="hidden md:flex items-center pl-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-10 space-y-24">
        {/* Top Hero Showcase Intro */}
        <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black text-xs font-english-semibold tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5 text-[#10b981] animate-pulse" />
              <span>Pedagogical UI Architecture V2</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-english-semibold text-neutral-950 dark:text-white tracking-tight leading-tight">
              A Serene, Grayscale Canvas Enhanced with Emerald Green Accents
            </h2>
            <p className="text-base sm:text-lg font-english text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Explore the permanent codification of Tariq&apos;s UI philosophy. Built for deep focus on Maulana Abu Taher Misbah&apos;s <em className="italic font-semibold">Esho Arbi Shikhi</em> curriculum without gamified distractions, featuring subtle <strong className="text-[#10b981]">Emerald Green (#10b981)</strong> markers, an expanded five-font Arabic typography suite with verified diacritic cushioning, and permanent invariant semantic states.
            </p>

            {/* Filter Tabs */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-english text-neutral-500 dark:text-neutral-400 mr-2">Filter Display Mode:</span>
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                  activeTab === 'all' ? 'bg-[#10b981]/20 text-[#10b981] font-bold' : 'bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                }`}
              >
                {activeTab === 'all' && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />}
                <span>Show All Sections</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('feedback')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                  activeTab === 'feedback' ? 'bg-[#10b981]/20 text-[#10b981] font-bold' : 'bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                }`}
              >
                {activeTab === 'feedback' && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />}
                <span>Focus Invariant Feedback &amp; Themes</span>
              </button>
            </div>
          </div>

          {/* Hero Decorative Arabic Well */}
          <div className="w-full md:w-80 p-8 rounded-2xl bg-white dark:bg-[#141414] shrink-0 flex flex-col items-center justify-center text-center space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#10b981] px-2.5 py-0.5 rounded bg-[#10b981]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span>Direct Immersion</span>
            </span>
            <p className="font-mushaf font-normal text-3xl sm:text-4xl text-neutral-950 dark:text-white leading-[2.4] py-1" dir="rtl">
              اِقْرَأْ بِاسْمِ رَبِّكَ
            </p>
            <span className="font-english-semibold text-sm text-neutral-700 dark:text-neutral-300">
              Read in the name of your Lord
            </span>
            <div className="h-1 w-12 rounded-full bg-[#10b981]" />
            <span className="text-[11px] font-english text-neutral-500 dark:text-neutral-400">
              Zero Borders · Zero Drop Shadows · Squircles
            </span>
          </div>
        </div>

        {/* Section 1: Raw Neutral Overview */}
        {(activeTab === 'all' || activeTab === 'raw-neutral') && (
          <section id="sec-raw-neutral" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900">
              <span className="text-sm font-english-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                <span>Section 01 · Design Foundations &amp; Emerald Accents</span>
              </span>
              <span className="text-xs font-mono text-[#10b981]">Raw Neutral V2 · #10b981 Accents</span>
            </div>
            <RawNeutralOverview />
          </section>
        )}

        {/* Section 2: Typography Showcase */}
        {(activeTab === 'all' || activeTab === 'typography') && (
          <section id="sec-typography" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900">
              <span className="text-sm font-english-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Section 02 · Typography &amp; Diacritic Cushioning V2
              </span>
              <span className="text-xs font-mono text-[#10b981]">Cairo, Tajawal, Vazirmatn, Noto Arabic &amp; Mus&apos;haf Tokens</span>
            </div>
            <TypographyShowcase />
          </section>
        )}

        {/* Section 3: 5-Stage Harakat Fading */}
        {(activeTab === 'all' || activeTab === 'harakat') && (
          <section id="sec-harakat" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900">
              <span className="text-sm font-english-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Section 03 · Comprehension Innovation
              </span>
              <span className="text-xs font-mono text-[#10b981]">5-Stage Fading Engine · #10b981 Glints</span>
            </div>
            <HarakatFadingDemo />
          </section>
        )}

        {/* Section 4: Living Mushaf Highlights */}
        {(activeTab === 'all' || activeTab === 'mushaf') && (
          <section id="sec-mushaf" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900">
              <span className="text-sm font-english-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Section 04 · Scripture Synchronization
              </span>
              <span className="text-xs font-mono text-[#10b981]">3-Tier Tonal Highlights · font-mushaf</span>
            </div>
            <LivingMushafDemo />
          </section>
        )}

        {/* Section 5: Permanent Invariant Semantic Feedback */}
        {(activeTab === 'all' || activeTab === 'feedback') && (
          <section id="sec-feedback" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900">
              <span className="text-sm font-english-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Section 05 · Permanent Invariant Colors &amp; Dual Canvas Tests
              </span>
              <span className="text-xs font-mono text-[#10b981]">Success Green · Not Right Red · Warning Amber</span>
            </div>
            <SemanticFeedbackDemo />
          </section>
        )}

        {/* Footer & Back to Top */}
        <footer className="pt-16 pb-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-english text-neutral-500 dark:text-neutral-400">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">Tariq Pedagogical Engine · Esho Arbi Shikhi</p>
            </div>
            <p className="text-xs mt-1 pl-4">Built with TanStack Start, Vite, React, &amp; Raw Neutral Minimalist Architecture V2.</p>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-[#10b981]/15 dark:bg-neutral-900 dark:hover:bg-[#10b981]/20 text-neutral-900 dark:text-neutral-100 hover:text-[#10b981] dark:hover:text-[#10b981] font-english-semibold text-xs transition-all flex items-center gap-2 cursor-pointer outline-none"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-4 h-4 text-[#10b981]" />
          </button>
        </footer>
      </div>
    </div>
  );
}

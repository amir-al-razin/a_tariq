import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import ThemeToggle from '../../components/ThemeToggle';
import {
  ApplicationView,
  ArabicText,
  ExampleCard,
  GrammarRuleView,
  IdafahView,
  LessonHeader,
  MasdarFactoryView,
  ParagraphView,
  QAndAView,
  Romanization,
  TarkeebView,
  TranslationToggle,
  VerbTableView,
  VocabularyView,
} from '../../components/pedagogy-v2';

export const Route = createFileRoute('/demo-v2/')({
  component: DemoV2Page,
});

function DemoV2Page() {
  const [headerProgress, setHeaderProgress] = useState(0.4);

  return (
    <div className="min-h-screen pb-24 bg-white dark:bg-black text-neutral-900 dark:text-neutral-50 transition-colors">
      {/* V2 Lesson Header Demo at top */}
      <LessonHeader
        title="Raw Neutral V2 Design System"
        subtitle="Tone-on-Tone · Borderless · Squircle Geometry"
        progress={headerProgress}
        onBack={() => {}}
        showClose={true}
        onClose={() => {}}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-12 space-y-20">
        {/* Title & Theme Switcher */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl">
          <div>
            <h1 className="text-3xl font-english-semibold text-neutral-950 dark:text-white">
              Pedagogy V2 Testing Ground
            </h1>
            <p className="text-sm font-english text-neutral-500 dark:text-neutral-400 mt-2">
              Explore our minimalist, borderless, grayscale aesthetic across all components.
            </p>
          </div>
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>

        {/* LessonHeader Demo section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
              LessonHeader (Interactive Preview)
            </h2>
            <button
              onClick={() => setHeaderProgress((p) => (p >= 1 ? 0.2 : p + 0.2))}
              className="px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-english-semibold text-xs transition-opacity hover:opacity-90 cursor-pointer outline-none"
            >
              Advance Progress Header
            </button>
          </div>
          <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
            <LessonHeader
              title="Dars 4 · The Definite Article"
              subtitle="Alif-Lam & Sun/Moon Letters"
              progress={headerProgress}
            />
            <div className="p-8 text-center text-sm font-english text-neutral-500 dark:text-neutral-400">
              (Sticky top navigation header with tone-on-tone progress fill and round pill geometry)
            </div>
          </div>
        </section>

        {/* VocabularyView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            VocabularyView
          </h2>
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a0a0a]">
            <VocabularyView
              payload={{
                words: [
                  { id: 1, ar: 'كِتَابٌ', romanized: 'kitābun', en: 'A book', bn: 'একটি বই', emoji: '📖' },
                  { id: 2, ar: 'قَلَمٌ', romanized: 'qalamun', en: 'A pen', bn: 'একটি কলম', emoji: '🖊️' },
                  { id: 3, ar: 'مَدْرَسَةٌ', romanized: 'madrasatun', en: 'A school', bn: 'একটি স্কুল', emoji: '🏫' }
                ],
              }}
            />
          </div>
        </section>

        {/* ArabicText & Romanization */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            ArabicText & Romanization
          </h2>
          <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl flex flex-col items-end space-y-4">
            <ArabicText size="3xl">السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ</ArabicText>
            <Romanization size="base">as-salāmu ʿalaykum wa-raḥmatu -llāhi</Romanization>
          </div>
        </section>

        {/* ExampleCard */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            ExampleCard
          </h2>
          <ExampleCard
            arabic="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
            romanized="al-ḥamdu lillāhi rabbi l-ʿālamīn"
            english="Praise be to Allah, Lord of the worlds"
            showRomanization={true}
          />
        </section>

        {/* TranslationToggle */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            TranslationToggle
          </h2>
          <div className="bg-neutral-100/60 dark:bg-neutral-900/60 p-8 rounded-3xl space-y-6">
            <ArabicText size="2xl">إِنَّ مَعَ الْعُسْرِ يُسْرًا</ArabicText>
            <TranslationToggle translation="Indeed, with hardship comes ease." defaultOpen={false} />
          </div>
        </section>

        {/* ApplicationView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            ApplicationView
          </h2>
          <ApplicationView
            payload={{
              instruction: "Observe how the noun adjective agrees in definiteness and gender.",
              items: [
                { emoji: "📖", ar: "هذا **كِتَابٌ مُفِيدٌ**", en: "This is a useful book." },
                { emoji: "🌟", ar: "تِلْكَ **شَجَرَةٌ جَمِيلَةٌ**", en: "That is a beautiful tree." }
              ]
            }}
          />
        </section>

        {/* GrammarRuleView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            GrammarRuleView
          </h2>
          <GrammarRuleView
            payload={{
              rules: [
                {
                  label: "Mubtada (Subject)",
                  arabic: "المُبْتَدَأ",
                  romanized: "al-mubtada'",
                  meaning: "The commencing noun in a nominal sentence, typically definite and in the nominative case (Marfu').",
                  examples: [
                    { ar: "الكِتَابُ مُفِيدٌ", en: "The book is useful." },
                    { ar: "الطَّالِبُ حَاضِرٌ", en: "The student is present." }
                  ]
                },
                {
                  label: "Khabar (Predicate)",
                  arabic: "الخَبَر",
                  romanized: "al-khabar",
                  meaning: "The news or completion of the subject, typically indefinite and in the nominative case.",
                  examples: [
                    { ar: "العِلْمُ نُورٌ", en: "Knowledge is light." }
                  ]
                }
              ]
            }}
          />
        </section>

        {/* IdafahView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            IdafahView
          </h2>
          <IdafahView
            payload={{
              instruction: "Tap any possession phrase card to reveal the combined Idafah form.",
              idafahPairs: [
                {
                  baseAr: "كِتَابٌ + اللَّهُ",
                  baseEn: "A book + Allah",
                  expandedAr: "كِتَابُ اللَّهِ",
                  expandedEn: "The book of Allah"
                },
                {
                  baseAr: "بَيْتٌ + الْمُدَرِّسُ",
                  baseEn: "A house + The teacher",
                  expandedAr: "بَيْتُ الْمُدَرِّسِ",
                  expandedEn: "The teacher's house"
                }
              ]
            }}
          />
        </section>

        {/* MasdarFactoryView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            MasdarFactoryView
          </h2>
          <MasdarFactoryView
            payload={{
              baabLabel: "بَاب كَتَبَ يَكْتُبُ (Form I)",
              instruction: "Observe how different tenses derive from the Trilateral Root via the Verbal Noun.",
              masdarRows: [
                { masdar: "فَعْلٌ", masdarEn: "Doing", past: "فَعَلَ", present: "يَفْعَلُ", imperative: "اِفْعَلْ", prohibitive: "لَا تَفْعَلْ" },
                { masdar: "كِتَابَةٌ", masdarEn: "Writing", past: "كَتَبَ", present: "يَكْتُبُ", imperative: "اُكْتُبْ", prohibitive: "لَا تَكْتُبْ" }
              ]
            }}
          />
        </section>

        {/* ParagraphView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            ParagraphView
          </h2>
          <ParagraphView
            payload={{
              instruction: "Read the short Arabic reading practice below, then check your comprehension.",
              paragraphs: [
                {
                  title: "فِي الْمَكْتَبَةِ",
                  titleEn: "In the Library",
                  lines: [
                    "ذَهَبَ خَالِدٌ إِلَى مَكْتَبَةِ الْمَدْرَسَةِ أَمْسِ.",
                    "وَجَدَ كُتُبًا كَثِيرَةً فِي الْعُلُومِ وَالتَّارِيخِ وَالْأَدَبِ.",
                    "جَلَسَ فِي هُدُوءٍ وَقَرَأَ سَاعَةً كَامِلَةً."
                  ],
                  translationEn: "Khalid went to the school library yesterday. He found many books on science, history, and literature. He sat down quietly and read for a full hour."
                }
              ]
            }}
          />
        </section>

        {/* QAndAView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            QAndAView
          </h2>
          <div className="p-8 rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/50">
            <QAndAView
              payload={{
                instruction: "Select the correct Arabic sentence corresponding to the English prompt.",
                questions: [
                  {
                    emoji: "📖",
                    question_ar: "مَا هَٰذَا؟",
                    question_en: "What is this?",
                    correct_ar: "هَٰذَا كِتَابٌ.",
                    correct_en: "This is a book.",
                    explanation: "Remember to use the masculine demonstrative 'هَٰذَا' for masculine nouns like 'كِتَاب'.",
                    options_ar: ["هَٰذَا كِتَابٌ.", "هَٰذِهِ مَدْرَسَةٌ.", "ذَٰلِكَ بَيْتٌ."]
                  }
                ]
              }}
            />
          </div>
        </section>

        {/* TarkeebView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            TarkeebView
          </h2>
          <TarkeebView
            payload={{
              tarkeeb: [
                {
                  type: 'complete',
                  sentence: "الْكِتَابُ جَدِيدٌ",
                  sentenceEn: "The book is new",
                  tree: [
                    { text: "الْكِتَابُ", label: "مُبْتَدَأ", labelEn: "Subject" },
                    { text: "جَدِيدٌ", label: "خَبَر", labelEn: "Predicate" }
                  ]
                },
                {
                  type: 'incomplete',
                  sentence: "كِتَابُ اللَّهِ",
                  sentenceEn: "The book of Allah",
                  tree: [
                    { text: "كِتَابُ", label: "مُضَاف", labelEn: "Possessed (Mudhaf)" },
                    { text: "اللَّهِ", label: "مُضَاف إِلَيْه", labelEn: "Possessor (Mudhaf Ilayhi)" }
                  ]
                }
              ]
            }}
          />
        </section>

        {/* VerbTableView */}
        <section className="space-y-6">
          <h2 className="text-2xl font-english-semibold text-neutral-900 dark:text-neutral-100">
            VerbTableView
          </h2>
          <VerbTableView
            payload={{
              verbTense: 'past',
              instruction: "Conjugation of Trilateral Verbs in the Past Tense across singular pronouns.",
              verbTable: [
                { root: "فَعَلَ", meaning: "to do / make", he: "فَعَلَ", she: "فَعَلَتْ", youM: "فَعَلْتَ", youF: "فَعَلْتِ", i: "فَعَلْتُ" },
                { root: "عَلِمَ", meaning: "to know", he: "عَلِمَ", she: "عَلِمَتْ", youM: "عَلِمْتَ", youF: "عَلِمْتِ", i: "عَلِمْتُ" }
              ]
            }}
          />
        </section>

      </div>
    </div>
  );
}

import { createFileRoute } from '@tanstack/react-router'
import ThemeToggle from '../../components/ThemeToggle'
import { ApplicationView } from '../../components/pedagogy/ApplicationView'
import { ArabicText } from '../../components/pedagogy/ArabicText'
import { ExampleCard } from '../../components/pedagogy/ExampleCard'
import { GrammarRuleView } from '../../components/pedagogy/GrammarRuleView'
import { IdafahDrillView } from '../../components/pedagogy/IdafahDrillView'
import { MasdarFactoryView } from '../../components/pedagogy/MasdarFactoryView'
import { ParagraphView } from '../../components/pedagogy/ParagraphView'
import { QAndAView } from '../../components/pedagogy/QAndAView'
import { Romanization } from '../../components/pedagogy/Romanization'
import { TarkeebView } from '../../components/pedagogy/TarkeebView'
import { TranslationToggle } from '../../components/pedagogy/TranslationToggle'
import { VerbTableView } from '../../components/pedagogy/VerbTableView'
import { VocabularyView } from '../../components/pedagogy/VocabularyView'

export const Route = createFileRoute('/demo/')({
  component: DemoPage,
})

function DemoPage() {
  return (
    <div className="min-h-screen p-8 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-english-semibold">Pedagogy Components Demo</h1>
          <ThemeToggle />
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">VocabularyView</h2>
          <VocabularyView payload={{
            words: [
              { id: 1, ar: 'كِتَابٌ', romanized: 'kitābun', en: 'A book', bn: 'একটি বই', emoji: '📖' },
              { id: 2, ar: 'قَلَمٌ', romanized: 'qalamun', en: 'A pen', bn: 'একটি কলম', emoji: '🖊️' }
            ]
          }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">ArabicText</h2>
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
            <ArabicText size="lg">السَّلَامُ عَلَيْكُمْ</ArabicText>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">ApplicationView</h2>
          <ApplicationView payload={{
            items: [
              { emoji: "🚀", ar: "هذا مثال تطبيقي", en: "This is a practical example." }
            ]
          }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">ExampleCard</h2>
          <ExampleCard
            arabic="الْحَمْدُ لِلَّهِ"
            romanized="al-ḥamdu lillāh"
            english="Praise be to Allah"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">GrammarRuleView</h2>
          <GrammarRuleView payload={{
            rules: [
              {
                label: "Mubtada",
                arabic: "المبتدأ",
                romanized: "al-mubtada'",
                meaning: "The Subject",
                examples: [
                  { ar: "الكتابُ مفيدٌ", en: "The book is useful." }
                ]
              }
            ]
          }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">IdafahDrillView</h2>
          <IdafahDrillView payload={{
            idafahPairs: [
              {
                baseAr: "كِتَابٌ + اللَّهُ",
                baseEn: "A book + Allah",
                expandedAr: "كِتَابُ اللَّهِ",
                expandedEn: "The book of Allah"
              }
            ]
          }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">MasdarFactoryView</h2>
          <MasdarFactoryView payload={{
            masdarRows: [
              { masdar: "فَعْلٌ", masdarEn: "Doing", past: "فَعَلَ", present: "يَفْعَلُ", imperative: "اِفْعَلْ", prohibitive: "لَا تَفْعَلْ" }
            ]
          }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">ParagraphView</h2>
          <ParagraphView payload={{
            paragraphs: [
              { lines: ["هذه فقرة عربية طويلة نوعا ما.", "نحن نتعلم اللغة العربية."], translationEn: "This is a somewhat long Arabic paragraph. We are learning the Arabic language." }
            ]
          }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">QAndAView</h2>
          <QAndAView payload={{
            questions: [
              {
                emoji: "📖",
                question_ar: "ما هذا؟",
                question_en: "What is this?",
                correct_ar: "هذا كتاب.",
                correct_en: "This is a book.",
                options_ar: ["هذا كتاب.", "هذا قلم.", "هذا باب."]
              }
            ]
          }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">Romanization</h2>
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
            <Romanization>kitābun</Romanization>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">TarkeebView</h2>
          <TarkeebView payload={{
            tarkeeb: [
              {
                type: 'complete',
                sentence: "الْكِتَابُ جَدِيدٌ",
                sentenceEn: "The book is new",
                tree: [
                  { text: "الْكِتَابُ", label: "مبتدأ", labelEn: "Subject" },
                  { text: "جَدِيدٌ", label: "خبر", labelEn: "Predicate" }
                ]
              }
            ]
          }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">TranslationToggle</h2>
          <TranslationToggle translation="Peace be upon you" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-english-medium border-b border-neutral-200 dark:border-neutral-700 pb-2">VerbTableView</h2>
          <VerbTableView payload={{
            verbTable: [
              { root: "فَعَلَ", meaning: "to do", he: "فَعَلَ", she: "فَعَلَتْ" }
            ]
          }} />
        </section>

      </div>
    </div>
  )
}

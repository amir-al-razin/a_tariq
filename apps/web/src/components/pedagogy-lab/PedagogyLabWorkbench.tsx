import { useState } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import { Volume1Section } from './Volume1Section';
import { Volume2Section } from './Volume2Section';
import { Volume3Section } from './Volume3Section';
import { Volume4Section } from './Volume4Section';
import { SlotFillDrill } from './SlotFillDrill';
import { BinaryChoiceDrill } from './BinaryChoiceDrill';
import { SentenceMutationDrill } from './SentenceMutationDrill';
import { DialogueQADrill } from './DialogueQADrill';
import { SentenceAssemblyDrill } from './SentenceAssemblyDrill';
import { ErrorHunterDrill } from './ErrorHunterDrill';

type ActiveView = 'vol4' | 'vol3' | 'vol2' | 'vol1' | 'archetypes' | 'all';

export function PedagogyLabWorkbench() {
  const [activeView, setActiveView] = useState<ActiveView>('vol4');

  return (
    <div className="space-y-16 pb-32 font-english">
      {/* Top Editorial Banner */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          <Sparkles size={14} className="text-accent-primary" />
          <span>Authoritative Curriculum Lab</span>
          <span>•</span>
          <span>Raw Neutral V3</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-english-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
            Pedagogical Component Workbench
          </h1>
          <p className="max-w-3xl text-base sm:text-lg font-english-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
            All 64 interactive pedagogical components mapped directly across Volumes 1 to 4 of <em>Esho Arbi Shikhi</em>. Built with pure Raw Neutral luminance surfaces, zero 1px borders, and zero box shadows.
          </p>
        </div>

        {/* Volume & Archetype Navigation Strip */}
        <div className="flex items-center gap-2 flex-wrap pt-4">
          <button
            onClick={() => setActiveView('vol4')}
            className={`h-11 px-5 rounded-full text-xs font-english-bold transition-all cursor-pointer outline-none ${
              activeView === 'vol4'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
            }`}
          >
            Volume 4 (Comps 58-64)
          </button>
          <button
            onClick={() => setActiveView('vol3')}
            className={`h-11 px-5 rounded-full text-xs font-english-bold transition-all cursor-pointer outline-none ${
              activeView === 'vol3'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
            }`}
          >
            Volume 3 (Comps 47-57)
          </button>
          <button
            onClick={() => setActiveView('vol2')}
            className={`h-11 px-5 rounded-full text-xs font-english-bold transition-all cursor-pointer outline-none ${
              activeView === 'vol2'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
            }`}
          >
            Volume 2 (Comps 27-46)
          </button>
          <button
            onClick={() => setActiveView('vol1')}
            className={`h-11 px-5 rounded-full text-xs font-english-bold transition-all cursor-pointer outline-none ${
              activeView === 'vol1'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
            }`}
          >
            Volume 1 (Comps 1-26)
          </button>
          <button
            onClick={() => setActiveView('archetypes')}
            className={`h-11 px-5 rounded-full text-xs font-english-bold transition-all cursor-pointer outline-none ${
              activeView === 'archetypes'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
            }`}
          >
            Archetype Drills
          </button>
          <button
            onClick={() => setActiveView('all')}
            className={`h-11 px-5 rounded-full text-xs font-english-bold transition-all cursor-pointer outline-none ${
              activeView === 'all'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
            }`}
          >
            View All Volumes
          </button>
        </div>
      </div>

      {/* Render Active View */}
      <div className="space-y-16">
        {/* Volume 4 */}
        {(activeView === 'vol4' || activeView === 'all') && <Volume4Section />}

        {/* Volume 3 */}
        {(activeView === 'vol3' || activeView === 'all') && <Volume3Section />}

        {/* Volume 2 */}
        {(activeView === 'vol2' || activeView === 'all') && <Volume2Section />}

        {/* Volume 1 */}
        {(activeView === 'vol1' || activeView === 'all') && <Volume1Section />}

        {/* Modular Archetypes */}
        {(activeView === 'archetypes' || activeView === 'all') && (
          <div className="space-y-12">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
                  <Layers size={14} />
                  <span>Interaction Patterns</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-english-extrabold text-neutral-950 dark:text-white mt-1">
                  6 Universal Drill Archetypes
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  Minimal single-action drills: 1 focused task, 1 tap, immediate success or failure.
                </p>
              </div>
            </div>

            <SlotFillDrill
              bookRef="Vol 1 · Page 18"
              instruction="Choose the matching adjective"
              sentencePrefix="هَٰذَا كِتَابٌ"
              options={['جَدِيدٌ', 'جَدِيدَةٌ', 'مَفْتُوحَةٌ']}
              correctAnswer="جَدِيدٌ"
            />

            <BinaryChoiceDrill
              bookRef="Vol 1 · Page 12"
              instruction="Choose the appropriate demonstrative"
              promptWord="سَاعَةٌ جَمِيلَةٌ"
              optionA="هَٰذَا"
              optionB="هَٰذِهِ"
              correctAnswer="هَٰذِهِ"
            />

            <SentenceMutationDrill
              bookRef="Vol 2 · Page 45"
              instruction="Transform the sentence to plural"
              baseSentence="الْوَلَدُ يَكْتُبُ دَرْسَهُ"
              mutationTargetPrefix="الأَوْلَادُ"
              options={['يَكْتُبُونَ دَرْسَهُمْ', 'تَكْتُبْنَ دَرْسَهُنَّ', 'يَكْتُبُ دَرْسَهُ']}
              correctAnswer="يَكْتُبُونَ دَرْسَهُمْ"
            />

            <DialogueQADrill
              bookRef="Vol 1 · Page 54"
              instruction="Select the natural conversational reply"
              question="أَيْنَ مِفْتَاحُ الْبَيْتِ؟"
              options={[
                'مِفْتَاحُ الْبَيْتِ عَلَى الْمَكْتَبِ.',
                'الْبَيْتُ كَبِيرٌ وَجَمِيلٌ.',
                'هَٰذَا مِفْتَاحٌ صَغِيرٌ.',
              ]}
              correctAnswer="مِفْتَاحُ الْبَيْتِ عَلَى الْمَكْتَبِ."
            />

            <SentenceAssemblyDrill
              bookRef="Vol 1 · Page 24"
              instruction="Assemble the sentence in correct syntax"
              tokens={['هَٰذَا', 'كِتَابُ', 'اللَّهِ']}
            />

            <ErrorHunterDrill
              bookRef="Vol 2 · Page 88"
              instruction="Tap the word with the incorrect vowel mark"
              words={[
                { word: 'خَرَجَ' },
                { word: 'الْمُعَلِّمُ' },
                { word: 'مِنَ' },
                { word: 'الْمَدْرَسَةُ', isError: true, correctedWord: 'الْمَدْرَسَةِ' },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

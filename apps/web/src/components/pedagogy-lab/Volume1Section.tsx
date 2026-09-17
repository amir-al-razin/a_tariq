import { BookOpen } from 'lucide-react';
import { AudioFlashcardFlipComp } from './vol1/AudioFlashcardFlipComp';
import { VocabGridComp } from './vol1/VocabGridComp';
import { DemonstrativeMatrixComp } from './vol1/DemonstrativeMatrixComp';
import { DeicticPointerPlaygroundComp } from './vol1/DeicticPointerPlaygroundComp';
import { SpatialPointerComp } from './vol1/SpatialPointerComp';
import { InterrogativeWhatComp } from './vol1/InterrogativeWhatComp';
import { PictureQAAssemblyComp } from './vol1/PictureQAAssemblyComp';
import { AdjectiveAgreementComp } from './vol1/AdjectiveAgreementComp';
import { AdjectiveClozeComp } from './vol1/AdjectiveClozeComp';
import { DescribedPointerComp } from './vol1/DescribedPointerComp';
import { ProperNameTanweenComp } from './vol1/ProperNameTanweenComp';
import { PronounMatrixComp } from './vol1/PronounMatrixComp';
import { NominalIntroComp } from './vol1/NominalIntroComp';
import { PolarInterrogativeComp } from './vol1/PolarInterrogativeComp';
import { IdafahSyntacticComp } from './vol1/IdafahSyntacticComp';
import { IdafahComp } from './vol1/IdafahComp';
import { VocativeParticleComp } from './vol1/VocativeParticleComp';
import { HamzatWaslComp } from './vol1/HamzatWaslComp';

export function Volume1Section() {
  return (
    <div className="space-y-16 font-english">
      {/* Volume 1 Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Volume 1 Curriculum Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-english-extrabold text-neutral-950 dark:text-white mt-1">
            Foundations &amp; Nominal Syntax
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Comprehensive Volume 1 suite: Earlier interactive foundations alongside all imported drill engines from Lessons 1, 2, and 3.
          </p>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white dark:bg-neutral-800 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
          18 Live Components
        </div>
      </div>

      {/* Earlier Component 01: Audio Flashcard (Flip Card) */}
      <AudioFlashcardFlipComp />

      {/* Imported Component 01: Vocabulary Flashcard & Grid */}
      <VocabGridComp />

      {/* Component 02: Demonstrative Binary Matrix */}
      <DemonstrativeMatrixComp />

      {/* Earlier Component 03: Deictic Near / Far Pointer (Spatial Distance Playground) */}
      <DeicticPointerPlaygroundComp />

      {/* Imported Component 03: Pointer Drill List (Spatial Distance Pointing) */}
      <SpatialPointerComp />

      {/* Component 04: Interrogative What-Drill (Directional Indicator Badges) */}
      <InterrogativeWhatComp />

      {/* Component 05: Picture Q&A Word Assembly Drill */}
      <PictureQAAssemblyComp />

      {/* Component 06: Dual Gender Adjective Grid & Agreement */}
      <AdjectiveAgreementComp />

      {/* Component 07: Adjective Concordance Cloze Fill */}
      <AdjectiveClozeComp />

      {/* Component 08: Demonstrative Described Phrase */}
      <DescribedPointerComp />

      {/* Component 10: Diptote Proper Name Contrast */}
      <ProperNameTanweenComp />

      {/* Component 11: Personal Pronoun Matrix */}
      <PronounMatrixComp />

      {/* Component 12: Nominal Sentence Introduction Assembler */}
      <NominalIntroComp />

      {/* Component 13: Polar Interrogative & Correction Drill */}
      <PolarInterrogativeComp />

      {/* Earlier Component 14: Idafah Possession Assembler (Syntactic Compounding) */}
      <IdafahSyntacticComp />

      {/* Imported Component 14: Idafah Possession Assembler */}
      <IdafahComp />

      {/* Component 15: Vocative Particle Transformer */}
      <VocativeParticleComp />

      {/* Component 16: Hamzat al-Wasl Elision Drill */}
      <HamzatWaslComp />
    </div>
  );
}

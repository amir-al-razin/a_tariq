import { useState } from 'react';
import { VocabGrid, type VocabItem } from './shared/VocabGrid';
import { PointerDrillList, type PointerDrillItem } from './shared/PointerDrillList';
import { InteractiveDrill, type InteractiveExercise } from './shared/InteractiveDrill';
import { CurriculumHeader } from './shared/CurriculumHeader';
import { CurriculumFooter } from './shared/CurriculumFooter';

// --- DATA ---
const vocabAdjectives: VocabItem[] = [
  { id: 1, ar: 'جَدِيدٌ - جَدِيدَةٌ', en: 'New', roman: 'jadeedun - jadeedatun' },
  { id: 2, ar: 'قَدِيمٌ - قَدِيمَةٌ', en: 'Old', roman: 'qadeemun - qadeematun' },
  { id: 3, ar: 'جَمِيلٌ - جَمِيلَةٌ', en: 'Beautiful', roman: 'jameelun - jameelatun' },
  { id: 4, ar: 'كَبِيرٌ - كَبِيرَةٌ', en: 'Big', roman: 'kabeerun - kabeeratun' },
  { id: 5, ar: 'صَغِيرٌ - صَغِيرَةٌ', en: 'Small', roman: 'sagheerun - sagheeratun' },
  { id: 6, ar: 'جَيِّدٌ - جَيِّدَةٌ', en: 'Good', roman: 'jayyidun - jayyidatun' }
];

const vocabNouns: VocabItem[] = [
  { id: 10, ar: 'فِرَاشٌ', en: 'A bed', roman: 'firaashun' },
  { id: 11, ar: 'وِسَادَةٌ', en: 'A pillow', roman: 'wisaadatun' },
  { id: 12, ar: 'قَمِيصٌ', en: 'A shirt', roman: 'qameesun' },
  { id: 13, ar: 'قَلَنْسُوَةٌ', en: 'A cap', roman: 'qalansuuwatun' },
  { id: 14, ar: 'لِبَاسٌ', en: 'A garment', roman: 'libaasun' },
  { id: 15, ar: 'عِمَامَةٌ', en: 'A turban', roman: 'imaamatun' },
  { id: 16, ar: 'مِنْدِيلٌ', en: 'A handkerchief', roman: 'mindeelun' },
  { id: 17, ar: 'حِذَاءٌ', en: 'A shoe', roman: 'hithaa\'un' },
  { id: 18, ar: 'نَظِيفٌ - نَظِيفَةٌ', en: 'Clean', roman: 'natheefun - natheefatun' },
  { id: 19, ar: 'وَسِخٌ - وَسِخَةٌ', en: 'Dirty', roman: 'wasikhun - wasikhatun' }
];

const readingPairsTranslations: InteractiveExercise[] = [
  { id: 1, q: 'عَلَمٌ جَمِيلٌ', expected: ['A', 'beautiful', 'flag'], chips: ['A', 'beautiful', 'flag', 'garden', 'good'] },
  { id: 2, q: 'حَدِيقَةٌ جَمِيلَةٌ', expected: ['A', 'beautiful', 'garden'], chips: ['A', 'beautiful', 'flag', 'garden', 'good'] },
  { id: 3, q: 'قُفْلٌ جَيِّدٌ', expected: ['A', 'good', 'lock'], chips: ['A', 'good', 'lock', 'fan', 'big'] },
  { id: 4, q: 'مِرْوَحَةٌ جَيِّدَةٌ', expected: ['A', 'good', 'fan'], chips: ['A', 'good', 'lock', 'fan', 'big'] },
  { id: 5, q: 'مَسْجِدٌ كَبِيرٌ', expected: ['A', 'big', 'mosque'], chips: ['A', 'big', 'mosque', 'school', 'small'] },
  { id: 6, q: 'مَدْرَسَةٌ كَبِيرَةٌ', expected: ['A', 'big', 'school'], chips: ['A', 'big', 'mosque', 'school', 'small'] },
  { id: 7, q: 'بَيْتٌ صَغِيرٌ', expected: ['A', 'small', 'house'], chips: ['A', 'small', 'house', 'room', 'old'] },
  { id: 8, q: 'حُجْرَةٌ صَغِيرَةٌ', expected: ['A', 'small', 'room'], chips: ['A', 'small', 'house', 'room', 'old'] },
  { id: 9, q: 'مِصْبَاحٌ قَدِيمٌ', expected: ['An', 'old', 'lamp'], chips: ['An', 'old', 'lamp', 'clock', 'new'] },
  { id: 10, q: 'سَاعَةٌ قَدِيمَةٌ', expected: ['An', 'old', 'clock'], chips: ['An', 'old', 'lamp', 'clock', 'new'] }
];

const fillAdjective: InteractiveExercise[] = [
  { id: 1, q: 'مِظَلَّةٌ ــــــ', expected: ['قَدِيمَةٌ'], chips: ['قَدِيمٌ', 'قَدِيمَةٌ', 'كَبِيرٌ'] },
  { id: 2, q: 'مِفْتَاحٌ ــــــ', expected: ['صَغِيرٌ'], chips: ['صَغِيرٌ', 'صَغِيرَةٌ', 'جَمِيلَةٌ'] },
  { id: 3, q: 'بَيْتٌ ــــــ', expected: ['جَدِيدٌ'], chips: ['جَدِيدَةٌ', 'جَدِيدٌ', 'صَغِيرَةٌ'] },
  { id: 4, q: 'نَظَّارَةٌ ــــــ', expected: ['جَيِّدَةٌ'], chips: ['جَيِّدَةٌ', 'جَيِّدٌ', 'قَدِيمٌ'] },
  { id: 5, q: 'مِرْوَحَةٌ ــــــ', expected: ['جَمِيلَةٌ'], chips: ['جَمِيلَةٌ', 'كَبِيرٌ', 'جَمِيلٌ'] }
];

const fillNoun: InteractiveExercise[] = [
  { id: 6, q: 'ــــــ قَدِيمٌ', expected: ['قُفْلٌ'], chips: ['قُفْلٌ', 'سَاعَةٌ', 'حَقِيبَةٌ'] },
  { id: 7, q: 'ــــــ جَدِيدَةٌ', expected: ['مِسْطَرَةٌ'], chips: ['قَلَمٌ', 'مِسْطَرَةٌ', 'كِتَابٌ'] },
  { id: 8, q: 'ــــــ جَمِيلٌ', expected: ['عَلَمٌ'], chips: ['عَلَمٌ', 'حَدِيقَةٌ', 'مَدْرَسَةٌ'] },
  { id: 9, q: 'ــــــ صَغِيرَةٌ', expected: ['حُجْرَةٌ'], chips: ['بَيْتٌ', 'حُجْرَةٌ', 'مَسْجِدٌ'] },
  { id: 10, q: 'ــــــ كَبِيرٌ', expected: ['بَابٌ'], chips: ['بَابٌ', 'نَافِذَةٌ', 'كُرَّاسَةٌ'] }
];

const pointerDrills: PointerDrillItem[] = [
  { id: 1, ar: 'هَذَا كِتَابٌ جَدِيدٌ', emoji: '📖', distance: 'near' },
  { id: 2, ar: 'تِلْكَ سَاعَةٌ جَدِيدَةٌ', emoji: '⌚', distance: 'far' },
  { id: 3, ar: 'ذَلِكَ عَلَمٌ جَمِيلٌ', emoji: '🎌', distance: 'far' },
  { id: 4, ar: 'هَذِهِ مِرْوَحَةٌ جَيِّدَةٌ', emoji: '🪭', distance: 'near' },
  { id: 5, ar: 'تِلْكَ حَقِيبَةٌ صَغِيرَةٌ', emoji: '🎒', distance: 'far' },
  { id: 6, ar: 'تِلْكَ حَقِيبَةٌ جَمِيلَةٌ', emoji: '🎒', distance: 'far' },
  { id: 7, ar: 'هَذَا بَيْتٌ صَغِيرٌ', emoji: '🏠', distance: 'near' },
  { id: 8, ar: 'ذَلِكَ مَسْجِدٌ كَبِيرٌ', emoji: '🕌', distance: 'far' },
  { id: 9, ar: 'هَذِهِ مِظَلَّةٌ قَدِيمَةٌ', emoji: '☂️', distance: 'near' },
  { id: 10, ar: 'تِلْكَ نَظَّارَةٌ جَدِيدَةٌ', emoji: '👓', distance: 'far' },
  { id: 11, ar: 'هَذَا سَرِيرٌ', emoji: '🛏️', distance: 'near' },
  { id: 12, ar: 'ذَلِكَ قُفْلٌ', emoji: '🔒', distance: 'far' }
];

const translationPile: InteractiveExercise[] = [
  { id: 1, q: 'هَذَا مَسْجِدٌ جَدِيدٌ', expected: ['This', 'is', 'a', 'new', 'mosque'], chips: ['This', 'a', 'is', 'new', 'house', 'mosque', 'old'] },
  { id: 2, q: 'هَذَا قُفْلٌ جَيِّدٌ', expected: ['This', 'is', 'a', 'good', 'lock'], chips: ['This', 'is', 'a', 'good', 'lock', 'That', 'new'] },
  { id: 3, q: 'هَذَا فِرَاشٌ نَظِيفٌ', expected: ['This', 'is', 'a', 'clean', 'bed'], chips: ['This', 'is', 'a', 'clean', 'bed', 'shirt', 'That'] },
  { id: 4, q: 'تِلْكَ حُجْرَةٌ نَظِيفَةٌ', expected: ['That', 'is', 'a', 'clean', 'room'], chips: ['That', 'is', 'a', 'dirty', 'clean', 'room', 'bed'] },
  { id: 5, q: 'ذَلِكَ مِنْدِيلٌ صَغِيرٌ', expected: ['That', 'is', 'a', 'small', 'handkerchief'], chips: ['This', 'is', 'a', 'small', 'handkerchief', 'That', 'big'] },
  { id: 6, q: 'هَذِهِ عِمَامَةٌ جَدِيدَةٌ', expected: ['This', 'is', 'a', 'new', 'turban'], chips: ['This', 'is', 'a', 'new', 'turban', 'old', 'shirt'] },
  { id: 7, q: 'هَذَا قَمِيصٌ جَدِيدٌ', expected: ['This', 'is', 'a', 'new', 'shirt'], chips: ['This', 'is', 'a', 'new', 'shirt', 'old', 'cap'] },
  { id: 8, q: 'تِلْكَ قَلَنْسُوَةٌ جَدِيدَةٌ', expected: ['That', 'is', 'a', 'new', 'cap'], chips: ['That', 'is', 'a', 'new', 'cap', 'dirty', 'garment'] },
  { id: 9, q: 'هَذَا لِبَاسٌ نَظِيفٌ', expected: ['This', 'is', 'a', 'clean', 'garment'], chips: ['This', 'is', 'a', 'clean', 'garment', 'dirty', 'shoe'] },
  { id: 10, q: 'ذَلِكَ حِذَاءٌ صَغِيرٌ', expected: ['That', 'is', 'a', 'small', 'shoe'], chips: ['That', 'is', 'a', 'small', 'shoe', 'big', 'pillow'] },
  { id: 11, q: 'هَذِهِ وِسَادَةٌ جَمِيلَةٌ', expected: ['This', 'is', 'a', 'beautiful', 'pillow'], chips: ['This', 'is', 'a', 'beautiful', 'pillow', 'ugly', 'bed'] },
  { id: 12, q: 'ذَلِكَ مِفْتَاحٌ صَغِيرٌ', expected: ['That', 'is', 'a', 'small', 'key'], chips: ['That', 'is', 'a', 'small', 'key', 'big', 'lock'] },
  { id: 13, q: 'هَذِهِ سَبُّورَةٌ وَسِخَةٌ', expected: ['This', 'is', 'a', 'dirty', 'blackboard'], chips: ['This', 'is', 'a', 'dirty', 'blackboard', 'clean', 'school'] },
  { id: 14, q: 'ذَلِكَ مِنْدِيلٌ وَسِخٌ', expected: ['That', 'is', 'a', 'dirty', 'handkerchief'], chips: ['That', 'is', 'a', 'dirty', 'handkerchief', 'clean', 'shirt'] }
];

const STEPS = [
  { id: 'adjectives', title: 'Adjectives' },
  { id: 'agreement', title: 'Gender Agreement' },
  { id: 'reading', title: 'Reading Pairs' },
  { id: 'fill_noun', title: 'Fill Blanks (Noun)' },
  { id: 'fill_adj', title: 'Fill Blanks (Adj)' },
  { id: 'pointers', title: 'Pointer Drills' },
  { id: 'nouns', title: 'Household Items' },
  { id: 'translation', title: 'Interactive Translation' },
  { id: 'homework', title: 'Homework' }
];

export function EshoArbiShikhiVol1Lesson2Engine() {
  const [currentStep, setCurrentStep] = useState(0);

  // Note: True audio implementation would use a toggle, defaulting to true here for functionality
  const audioEnabled = true; 

  const handleNextStep = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleGoToStep = (idx: number) => {
    setCurrentStep(idx);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col justify-between p-3 md:p-6 transition-colors">
      
      {/* HEADER */}
      <CurriculumHeader 
        volume={1}
        lesson={2}
        steps={STEPS}
        currentStep={currentStep}
      />

      {/* MAIN CANVAS */}
      <main className="max-w-4xl w-full mx-auto flex-1 flex flex-col justify-center mb-6">
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 min-h-[540px] flex flex-col justify-between transition-colors relative">
          
          <div className="w-full flex-1 flex flex-col justify-center">

            {/* STEPS CONTENT */}
            {currentStep === 0 && (
              <VocabGrid items={vocabAdjectives} audioEnabled={audioEnabled} />
            )}

            {currentStep === 1 && (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-4 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center" dir="rtl">
                  <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center">
                    <span className="font-arabic text-xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">كِتَابٌ جَدِيدٌ</span>
                    <span className="text-[10px] sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 block mt-2" dir="ltr">A new book (Masculine)</span>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center">
                    <span className="font-arabic text-xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">كُرَّاسَةٌ جَدِيدَةٌ</span>
                    <span className="text-[10px] sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 block mt-2" dir="ltr">A new notebook (Feminine)</span>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <InteractiveDrill exercises={readingPairsTranslations} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}
            
            {currentStep === 3 && (
              <InteractiveDrill exercises={fillNoun} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}
            
            {currentStep === 4 && (
              <InteractiveDrill exercises={fillAdjective} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}

            {currentStep === 5 && (
              <PointerDrillList items={pointerDrills} audioEnabled={audioEnabled} />
            )}

            {currentStep === 6 && (
              <VocabGrid items={vocabNouns} audioEnabled={audioEnabled} />
            )}

            {currentStep === 7 && (
              <InteractiveDrill exercises={translationPile} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}

            {currentStep === 8 && (
              <div className="space-y-6">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-3xl space-y-4 text-center">
                  <p className="text-xl font-bold text-neutral-900 dark:text-neutral-100 leading-relaxed py-6">
                    "Point to various objects around you and practice speaking Arabic following the examples from this lesson."
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* EXACT LESSON 1 FOOTER STAGE NAVIGATION */}
          <CurriculumFooter
            steps={STEPS}
            currentStep={currentStep}
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            onGoToStep={handleGoToStep}
          />

        </div>
      </main>
    </div>
  );
}

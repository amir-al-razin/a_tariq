import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CurriculumFooterProps {
  steps: { id: string; title: string }[];
  currentStep: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToStep: (index: number) => void;
}

export function CurriculumFooter({ steps, currentStep, onPrev, onNext, onGoToStep }: CurriculumFooterProps) {
  return (
    <div className="mt-8 pt-6 border-t-0 bg-neutral-100/60 dark:bg-neutral-900/60 rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={currentStep === 0}
        className="w-full sm:w-auto px-6 py-3.5 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-3xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Previous</span>
      </button>

      {/* Step Dots Indicator */}
      <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 max-w-[200px] sm:max-w-none mx-auto py-2 sm:py-0">
        {steps.map((step, i) => (
          <button
            type="button"
            key={step.id}
            onClick={() => onGoToStep(i)}
            className={`w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
              i === currentStep
                ? 'bg-neutral-900 dark:bg-neutral-100 scale-125'
                : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
            }`}
            title={step.title}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={currentStep === steps.length - 1}
        className="w-full sm:w-auto px-6 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed rounded-3xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
      >
        <span>Next</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

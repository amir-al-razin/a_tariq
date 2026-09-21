interface CurriculumHeaderProps {
  volume: number;
  lesson: number;
  steps: { id: string; title: string }[];
  currentStep: number;
}

const toArabicNumeral = (num: number): string => {
  const arabicNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(num)
    .split('')
    .map((char) => {
      const idx = parseInt(char, 10);
      return !isNaN(idx) ? arabicNums[idx] : char;
    })
    .join('');
};

export function CurriculumHeader({ volume, lesson, steps, currentStep }: CurriculumHeaderProps) {
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);
  const currentStepTitle = steps[currentStep]?.title || '';

  return (
    <header className="max-w-4xl w-full mx-auto bg-white dark:bg-neutral-800 rounded-3xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-3xl bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-neutral-100 font-bold font-arabic text-xl shrink-0">
          {toArabicNumeral(lesson)}
        </div>
        <div>
          <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Volume {volume} • Lesson {lesson}
          </h1>
        </div>
      </div>

      {/* Step Progress Bar */}
      <div className="w-full sm:w-64 flex flex-col gap-1.5">
        <div className="flex justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400 font-mono">
          <span>{currentStepTitle}</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-neutral-200 dark:bg-neutral-950 h-3 rounded-full overflow-hidden p-0.5">
          <div
            className="bg-neutral-900 dark:bg-neutral-100 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import { lesson02 } from '@tariq/shared';
import { InteractiveLessonModule } from '../../../../components/curriculum/InteractiveLessonModule';

export const Route = createFileRoute('/curriculum/vol1/lesson2/')({
  component: LessonTwoRoute,
  pendingComponent: () => (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-8 text-neutral-600 font-english">
      <div className="animate-pulse bg-emerald-500/20 text-emerald-950 px-6 py-3 rounded-2xl font-semibold">
        Loading Lesson 2: Esho Arbi Shikhi...
      </div>
    </div>
  ),
});

function LessonTwoRoute() {
  return (
    <InteractiveLessonModule
      lesson={lesson02}
      lessonTitle="Volume 1 - Lesson 2: Adjectives & Noun Agreement"
      subtitle="Mastering Noun-Adjective Agreement (مُطَابَقَةُ الصِّفَةِ لِلْمَوْصُوفِ) Across Masculine and Feminine Forms"
      prevLessonRoute="/curriculum/vol1/lesson1/"
    />
  );
}

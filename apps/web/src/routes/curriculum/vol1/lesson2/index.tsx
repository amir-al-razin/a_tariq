import { createFileRoute } from '@tanstack/react-router';
import { EshoArbiShikhiVol1Lesson2Engine } from '../../../../components/curriculum/EshoArbiShikhiVol1Lesson2Engine';

export const Route = createFileRoute('/curriculum/vol1/lesson2/')({
  component: LessonTwoRoute,
  pendingComponent: () => (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-8 text-neutral-400 font-sans">
      <div className="animate-pulse bg-neutral-900 text-neutral-200 px-6 py-3 rounded-2xl font-semibold">
        Loading Volume 1 Lesson 2 Engine...
      </div>
    </div>
  ),
});

function LessonTwoRoute() {
  return <EshoArbiShikhiVol1Lesson2Engine />;
}

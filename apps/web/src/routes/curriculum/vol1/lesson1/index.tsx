import { createFileRoute } from '@tanstack/react-router';
import { EshoArbiShikhiVol1Lesson1Engine } from '../../../../components/curriculum/EshoArbiShikhiVol1Lesson1Engine';

export const Route = createFileRoute('/curriculum/vol1/lesson1/')({
  component: LessonOneRoute,
  pendingComponent: () => (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-8 text-neutral-400 font-sans">
      <div className="animate-pulse bg-neutral-900 text-neutral-200 px-6 py-3 rounded-2xl font-semibold">
        Loading Volume 1 Lesson 1 Engine...
      </div>
    </div>
  ),
});

function LessonOneRoute() {
  return <EshoArbiShikhiVol1Lesson1Engine />;
}


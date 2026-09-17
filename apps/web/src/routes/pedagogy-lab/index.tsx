import { createFileRoute } from '@tanstack/react-router';
import { PedagogyLabWorkbench } from '../../components/pedagogy-lab';

export const Route = createFileRoute('/pedagogy-lab/')({
  component: PedagogyLabPage,
});

function PedagogyLabPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pb-32 pt-8 transition-colors selection:bg-accent-primary-subtle selection:text-accent-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <PedagogyLabWorkbench />
      </div>
    </div>
  );
}

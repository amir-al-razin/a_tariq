import { createFileRoute } from '@tanstack/react-router';
import { DesignSystemWorkbench } from '../../components/design-system/DesignSystemWorkbench';

export const Route = createFileRoute('/design-system/')({
  component: DesignSystemPage,
});

function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pb-32 pt-8 transition-colors selection:bg-accent-primary-subtle selection:text-accent-primary">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <DesignSystemWorkbench />
      </div>
    </div>
  );
}

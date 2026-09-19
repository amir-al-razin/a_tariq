import { createFileRoute, useNavigate } from '@tanstack/react-router';
import DailyReviewRunner from '@/components/runner/DailyReviewRunner';

export const Route = createFileRoute('/review/')({
  component: ReviewPage,
});

function ReviewPage() {
  const navigate = useNavigate();

  return (
    <DailyReviewRunner
      onExit={() => navigate({ to: '/' })}
      onNavigateToMushaf={() => navigate({ to: '/mushaf-v2' })}
    />
  );
}

export default ReviewPage;

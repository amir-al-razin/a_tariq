import { createFileRoute, notFound } from '@tanstack/react-router';
import { ChunkEngineScreen } from '../../../../../../../../components/screens/ChunkEngineScreen';

export const Route = createFileRoute(
  '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum/chunk/$chunkId'
)({
  params: {
    parse: (params) => {
      const chunkId = params.chunkId;
      if (!chunkId || chunkId.trim() === '') {
        throw notFound();
      }

      return {
        chunkId: chunkId,
      };
    },
    stringify: (params) => ({
      chunkId: String(params.chunkId),
    }),
  },
  component: ChunkEngineRoute,
  pendingComponent: () => <div>Loading Chunk Engine...</div>,
});

function ChunkEngineRoute() {
  const { volumeId, chapterId, darsNum, chunkId } = Route.useParams();

  return (
    <ChunkEngineScreen
      volumeId={Number(volumeId) as 1 | 2 | 3}
      chapterId={Number(chapterId)}
      darsNum={Number(darsNum)}
      chunkId={chunkId}
    />
  );
}

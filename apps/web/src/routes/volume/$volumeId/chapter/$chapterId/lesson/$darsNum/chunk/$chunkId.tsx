import { createFileRoute, Link, notFound } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum/chunk/$chunkId',
)({
  params: {
    parse: (params) => {
      const chunkId = params.chunkId
      if (!chunkId || chunkId.trim() === '') {
        throw notFound()
      }

      return {
        chunkId: chunkId,
      }
    },
    stringify: (params) => ({
      chunkId: String(params.chunkId),
    }),
  },
  component: ChunkEngineScreen,
  pendingComponent: () => <div>Loading Chunk Engine...</div>,
})

function ChunkEngineScreen() {
  const { volumeId, chapterId, darsNum, chunkId } = Route.useParams()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">
        Chunk {chunkId} Engine (Lesson {darsNum}, Chapter {chapterId}, Volume {volumeId})
      </h1>
      <div className="mt-8 flex flex-col gap-2">
        <Link
          to="/volume/$volumeId/chapter/$chapterId/lesson/$darsNum"
          params={{ volumeId, chapterId, darsNum }}
          className="text-blue-500 hover:underline"
        >
          Back to Lesson {darsNum}
        </Link>
        <Link
          to="/"
          className="text-blue-500 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

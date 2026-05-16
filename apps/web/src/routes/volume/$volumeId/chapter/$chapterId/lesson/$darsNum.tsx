import { createFileRoute, Link, notFound } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/volume/$volumeId/chapter/$chapterId/lesson/$darsNum',
)({
  params: {
    parse: (params) => {
      const chapId = Number(params.chapterId)
      if (!Number.isInteger(chapId) || chapId <= 0) {
        throw notFound()
      }

      const lessonNum = Number(params.darsNum)
      if (!Number.isInteger(lessonNum) || lessonNum <= 0) {
        throw notFound()
      }

      return {
        chapterId: chapId,
        darsNum: lessonNum,
      }
    },
    stringify: (params) => ({
      chapterId: String(params.chapterId),
      darsNum: String(params.darsNum),
    }),
  },
  component: LessonScreen,
  pendingComponent: () => <div>Loading Lesson...</div>,
})

function LessonScreen() {
  const { volumeId, chapterId, darsNum } = Route.useParams()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">
        Lesson {darsNum} Screen (Volume {volumeId}, Chapter {chapterId})
      </h1>
      <div className="mt-8 flex flex-col gap-2">
        <Link
          to="/volume/$volumeId"
          params={{ volumeId }}
          className="text-blue-500 hover:underline"
        >
          Back to Volume {volumeId}
        </Link>
        <Link
          to="/volume/$volumeId/chapter/$chapterId/lesson/$darsNum/chunk/$chunkId"
          params={{ volumeId, chapterId, darsNum, chunkId: '1' }}
          className="text-blue-500 hover:underline"
        >
          Go to Chunk 1
        </Link>
      </div>
    </main>
  )
}

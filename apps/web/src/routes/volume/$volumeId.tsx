import { createFileRoute, Link, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/volume/$volumeId')({
  params: {
    parse: (params) => {
      const volId = Number(params.volumeId)
      if (volId !== 1 && volId !== 2 && volId !== 3) {
        throw notFound()
      }
      return { volumeId: volId }
    },
    stringify: (params) => ({
      volumeId: String(params.volumeId),
    }),
  },
  component: VolumeScreen,
  pendingComponent: () => <div>Loading Volume...</div>,
})

function VolumeScreen() {
  const { volumeId } = Route.useParams()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Volume {volumeId} Screen</h1>
      <div className="mt-8 flex flex-col gap-2">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
        <Link
          to="/volume/$volumeId/chapter/$chapterId/lesson/$darsNum"
          params={{ volumeId, chapterId: 1, darsNum: 1 }}
          className="text-blue-500 hover:underline"
        >
          Go to Chapter 1, Lesson 1
        </Link>
      </div>
    </main>
  )
}

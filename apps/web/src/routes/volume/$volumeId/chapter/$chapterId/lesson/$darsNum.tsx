import { createFileRoute, notFound } from '@tanstack/react-router'

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
  component: LessonRoute,
  pendingComponent: () => <div>Loading Lesson...</div>,
})

import { LessonScreen } from '../../../../../../components/screens/LessonScreen'

function LessonRoute() {
  const { volumeId, chapterId, darsNum } = Route.useParams()

  return (
    <LessonScreen
      volumeId={Number(volumeId) as 1 | 2 | 3}
      chapterId={Number(chapterId)}
      darsNum={Number(darsNum)}
    />
  )
}

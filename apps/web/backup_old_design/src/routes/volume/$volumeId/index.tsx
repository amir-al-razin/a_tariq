import { createFileRoute, notFound } from '@tanstack/react-router'
import { VolumeScreen as VolumeScreenComponent } from '../../../components/screens/VolumeScreen'
export const Route = createFileRoute('/volume/$volumeId/')({
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

  return <VolumeScreenComponent volumeId={volumeId as 1 | 2 | 3} />
}

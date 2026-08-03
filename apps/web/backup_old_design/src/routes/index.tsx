import { createFileRoute } from '@tanstack/react-router'
import { HomeScreen } from '../components/screens/HomeScreen'

export const Route = createFileRoute('/')({
  component: HomeScreen,
  pendingComponent: () => <div>Loading Home...</div>,
})

import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeScreen,
  pendingComponent: () => <div>Loading Home...</div>,
})

function HomeScreen() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Home Screen</h1>
      <p className="mt-4">
        Welcome to the Home Screen! This is a placeholder for Issue #19.
      </p>
      <div className="mt-8 flex flex-col gap-2">
        <Link to="/volume/$volumeId" params={{ volumeId: 1 }} className="text-blue-500 hover:underline">
          Go to Volume 1
        </Link>
        <Link to="/volume/$volumeId" params={{ volumeId: 2 }} className="text-blue-500 hover:underline">
          Go to Volume 2
        </Link>
        <Link to="/volume/$volumeId" params={{ volumeId: 3 }} className="text-blue-500 hover:underline">
          Go to Volume 3
        </Link>
      </div>
    </main>
  )
}

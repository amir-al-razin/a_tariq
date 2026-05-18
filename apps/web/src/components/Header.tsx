import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-[1024px] mx-auto w-full flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-english-bold text-[22px] tracking-tight text-primary-600 dark:text-primary-400 no-underline"
        >
          Tariq
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

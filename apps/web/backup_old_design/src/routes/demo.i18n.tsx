import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import LanguageSwitcher from '../components/LanguageSwitcher'

export const Route = createFileRoute('/demo/i18n')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)] gap-4">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>I18n Demo</p>
        <div className="mt-3">
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  )
}

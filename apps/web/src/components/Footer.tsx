import TariqLogo from './TariqLogo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-neutral-100/50 dark:bg-neutral-900/50 px-6 pb-14 pt-12 text-neutral-500 dark:text-neutral-400 transition-colors">
      <div className="max-w-[1024px] mx-auto w-full flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <TariqLogo size="sm" />
          <p className="m-0 text-xs sm:text-sm font-english">
            &copy; {year} Tariq. All rights reserved.
          </p>
        </div>
        <p className="font-english-semibold text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 m-0">
          Arabic Pedagogical Engine
        </p>
      </div>
    </footer>
  )
}

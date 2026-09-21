import { useState, useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code2, Brain, BookMarked } from 'lucide-react'
import { useRetentionStore } from '@/state/retentionStore'
import ThemeToggle from './ThemeToggle'
import FontToggle from './FontToggle'
import PaletteToggle from './PaletteToggle'
import TariqLogo from './TariqLogo'
import { GamificationHeaderWidget } from './gamification/GamificationHeaderWidget'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dueCount = useRetentionStore((state) => state.getDueItemsCount())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1024px] mx-auto px-3.5 sm:px-6 h-16 flex items-center justify-between">
        
        <Link
          to="/"
          className="no-underline group focus:outline-none shrink-0"
        >
          <TariqLogo />
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Lexical Vault Words Link */}
          <Link
            to="/words"
            className="h-9 flex items-center gap-1.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-2.5 sm:px-3 py-2 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 outline-none whitespace-nowrap shrink-0"
            activeProps={{ className: "text-neutral-950 dark:text-white font-bold bg-neutral-200/80 dark:bg-neutral-800" }}
          >
            <BookMarked size={15} className="opacity-80 shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Words</span>
          </Link>

          {/* Daily SRS Review Link */}
          <Link
            to="/review"
            className="h-9 flex items-center gap-1.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-2.5 sm:px-3 py-2 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 outline-none whitespace-nowrap shrink-0"
            activeProps={{ className: "text-neutral-950 dark:text-white font-bold bg-neutral-200/80 dark:bg-neutral-800" }}
          >
            <Brain size={15} className="opacity-80 shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Review</span>
            {dueCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.5 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-[10px] font-bold leading-none shrink-0">
                {dueCount}
              </span>
            )}
          </Link>

          <div className="relative hidden md:block shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`h-9 flex items-center gap-1.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-3 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 outline-none cursor-pointer whitespace-nowrap shrink-0 ${
                isDropdownOpen ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' : ''
              }`}
            >
              <Code2 size={16} className="shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">Dev Tools</span>
              <ChevronDown size={14} className={`transition-transform duration-200 shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden flex flex-col p-2 backdrop-blur-md shadow-xl border border-neutral-200/60 dark:border-neutral-800"
                >
                  {/* Gamification Sandbox Section inside Dev Tools */}
                  <div className="px-3 py-2 mb-1 flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800">
                    <span className="text-[10px] font-english-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Sandbox XP</span>
                    <GamificationHeaderWidget />
                  </div>

                  <Link
                    to="/vocabulary"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none whitespace-nowrap"
                  >
                    Vocab & Quran Meter
                  </Link>
                  <Link
                    to="/practice/$volumeId/$lessonId"
                    params={{ volumeId: 'vol1', lessonId: 'lesson1' }}
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none whitespace-nowrap"
                  >
                    Practice Hub
                  </Link>
                  <Link
                    to="/design-system"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none whitespace-nowrap"
                  >
                    Design System
                  </Link>
                  <Link
                    to="/mushaf-v2"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none whitespace-nowrap"
                  >
                    Mushaf Viewer
                  </Link>
                  <Link
                    to="/demo-v2"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none whitespace-nowrap"
                  >
                    Pedagogy Engine
                  </Link>
                  <Link
                    to="/demo/video"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none whitespace-nowrap"
                  >
                    Video Player
                  </Link>
                  <Link
                    to="/pedagogy-lab"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none whitespace-nowrap"
                  >
                    Pedagogy Lab
                  </Link>
                  <a
                    href="/prd-and-architecture.html"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsDropdownOpen(false)}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none flex items-center justify-between whitespace-nowrap"
                  >
                    <span>Architecture / PRD</span>
                    <span className="text-[10px] font-mono uppercase bg-accent-primary-subtle text-accent-primary px-1.5 py-0.5 rounded font-bold">HTML</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <PaletteToggle />
            <FontToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

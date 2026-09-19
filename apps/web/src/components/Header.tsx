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

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Lexical Vault Words Link */}
          <Link
            to="/words"
            className="h-9 flex items-center gap-1.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-2 sm:px-3 py-2 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 outline-none"
            activeProps={{ className: "text-neutral-950 dark:text-white font-bold bg-neutral-200/80 dark:bg-neutral-850" }}
          >
            <BookMarked size={15} className="opacity-80" />
            <span className="hidden sm:inline">Words</span>
          </Link>

          {/* Daily SRS Review Link */}
          <Link
            to="/review"
            className="h-9 flex items-center gap-1.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-2 sm:px-3 py-2 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800 outline-none"
            activeProps={{ className: "text-neutral-950 dark:text-white font-bold bg-neutral-200/80 dark:bg-neutral-850" }}
          >
            <Brain size={15} className="opacity-80" />
            <span className="hidden sm:inline">Review</span>
            {dueCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.5 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-[10px] font-bold leading-none">
                {dueCount}
              </span>
            )}
          </Link>

          <div className="relative hidden md:block" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`h-9 flex items-center gap-1.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-3 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 outline-none cursor-pointer ${
                isDropdownOpen ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' : ''
              }`}
            >
              <Code2 size={16} />
              <span className="hidden sm:inline">Dev Tools</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden flex flex-col p-2 backdrop-blur-md"
                >
                  <Link
                    to="/vocabulary"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none"
                  >
                    Vocab & Quran Meter
                  </Link>
                  <Link
                    to="/practice/$volumeId/$lessonId"
                    params={{ volumeId: 'vol1', lessonId: 'lesson1' }}
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none"
                  >
                    Practice Hub
                  </Link>
                  <Link
                    to="/design-system"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none"
                  >
                    Design System
                  </Link>
                  <Link
                    to="/mushaf-v2"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none"
                  >
                    Mushaf Viewer
                  </Link>
                  <Link
                    to="/demo-v2"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none"
                  >
                    Pedagogy Engine
                  </Link>
                  <Link
                    to="/demo/video"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none"
                  >
                    Video Player
                  </Link>
                  <Link
                    to="/pedagogy-lab"
                    onClick={() => setIsDropdownOpen(false)}
                    activeProps={{ className: "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 font-bold" }}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none"
                  >
                    Pedagogy Lab
                  </Link>
                  <a
                    href="/prd-and-architecture.html"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsDropdownOpen(false)}
                    className="px-4 py-2.5 text-sm font-english-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 rounded-2xl transition-colors outline-none flex items-center justify-between"
                  >
                    <span>Architecture / PRD</span>
                    <span className="text-[10px] font-mono uppercase bg-accent-primary-subtle text-accent-primary px-1.5 py-0.5 rounded font-bold">HTML</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2">
            <GamificationHeaderWidget />
            <PaletteToggle />
            <FontToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

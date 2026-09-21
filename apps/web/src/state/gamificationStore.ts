import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface DailyTask {
  id: string
  title: string
  titleAr: string
  description: string
  targetCount: number
  currentCount: number
  isCompleted: boolean
  isClaimed: boolean
  xpReward: number
  coinReward: number
  icon: string
}

export interface AchievementBadge {
  id: string
  title: string
  titleAr: string
  description: string
  icon: string
  unlockedAt: string | null
}

interface GamificationState {
  xp: number
  coins: number
  streak: number
  lastActiveDate: string | null
  consecutiveFlawlessPracticeCount: number
  dailyTasks: DailyTask[]
  badges: AchievementBadge[]
  pendingReward: {
    title: string
    xp: number
    coins: number
    badge?: AchievementBadge
  } | null

  // Actions
  recordActivity: () => void
  recordWordLearned: (count?: number) => void
  recordPracticeResult: (isFlawless: boolean) => void
  recordPronunciationCompleted: (score: number) => void
  recordComprehensionCheck: (understood: boolean) => void
  claimDailyTaskReward: (taskId: string) => void
  clearPendingReward: () => void
  addXp: (amount: number, reason?: string) => void
  checkStreak: () => void
}

const INITIAL_TASKS: DailyTask[] = [
  {
    id: 'learn_10_words',
    title: 'Learn 10 Words',
    titleAr: 'تعلَّمْ ١٠ كَلِمَاتٍ',
    description: 'Encounter or master 10 vocabulary words today',
    targetCount: 10,
    currentCount: 0,
    isCompleted: false,
    isClaimed: false,
    xpReward: 50,
    coinReward: 10,
    icon: '📚',
  },
  {
    id: 'practice_5_streak',
    title: 'Complete 5 Practice in a Row',
    titleAr: 'أَكْمِلْ ٥ تَمَارِينَ مُتَتَالِيَةً',
    description: 'Solve 5 practice challenges consecutively without mistakes',
    targetCount: 5,
    currentCount: 0,
    isCompleted: false,
    isClaimed: false,
    xpReward: 75,
    coinReward: 15,
    icon: '⚡',
  },
  {
    id: 'tarteel_pronunciation',
    title: 'Recite with Tarteel',
    titleAr: 'النُّطْقُ السَّلِيمُ',
    description: 'Recite at least 1 Arabic phrase with 80%+ pronunciation accuracy',
    targetCount: 1,
    currentCount: 0,
    isCompleted: false,
    isClaimed: false,
    xpReward: 60,
    coinReward: 12,
    icon: '🎙️',
  },
  {
    id: 'lesson_comprehension',
    title: 'Check Understanding',
    titleAr: 'فَهِمْتُ الدَّرْسَ',
    description: 'Complete a post-lesson "Hal Fahimta?" comprehension check',
    targetCount: 1,
    currentCount: 0,
    isCompleted: false,
    isClaimed: false,
    xpReward: 50,
    coinReward: 10,
    icon: '✨',
  },
]

const INITIAL_BADGES: AchievementBadge[] = [
  {
    id: 'first_word',
    title: 'First Word',
    titleAr: 'الْكَلِمَةُ الأُولَى',
    description: 'Mastered your first Arabic word',
    icon: '🌱',
    unlockedAt: null,
  },
  {
    id: 'practice_whiz',
    title: 'Practice Whiz',
    titleAr: 'بَطَلُ التَّدْرِيبَاتِ',
    description: 'Achieved a 5-in-a-row practice streak',
    icon: '⚡',
    unlockedAt: null,
  },
  {
    id: 'tarteel_voice',
    title: 'Tarteel Voice',
    titleAr: 'صَوْتٌ فَصِيحٌ',
    description: 'Earned 90%+ in the Pronunciation Evaluator',
    icon: '🎙️',
    unlockedAt: null,
  },
  {
    id: 'quran_explorer_5pct',
    title: 'Quran Explorer',
    titleAr: 'مُسْتَكْشِفُ الْقُرْآنِ',
    description: 'Unlocked 5% of Quranic vocabulary',
    icon: '📖',
    unlockedAt: null,
  },
  {
    id: 'streak_3_days',
    title: 'Consistent Seeker',
    titleAr: 'المُثَابِرُ',
    description: 'Maintained a 3-day learning streak',
    icon: '🔥',
    unlockedAt: null,
  },
]

function getTodayString(): string {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set, get) => ({
      xp: 120,
      coins: 35,
      streak: 3,
      lastActiveDate: getTodayString(),
      consecutiveFlawlessPracticeCount: 0,
      dailyTasks: INITIAL_TASKS,
      badges: INITIAL_BADGES,
      pendingReward: null,

      checkStreak: () => {
        const today = getTodayString()
        const last = get().lastActiveDate

        if (!last) {
          set({ lastActiveDate: today, streak: 1 })
          return
        }

        if (last === today) {
          return // already counted today
        }

        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`

        if (last === yesterdayStr) {
          const newStreak = get().streak + 1
          set({
            streak: newStreak,
            lastActiveDate: today,
            // Reset daily quests for new day
            dailyTasks: INITIAL_TASKS.map((t) => ({ ...t })),
          })
          if (newStreak >= 3) {
            set((state) => ({
              badges: state.badges.map((b) =>
                b.id === 'streak_3_days' && !b.unlockedAt
                  ? { ...b, unlockedAt: new Date().toISOString() }
                  : b
              ),
            }))
          }
        } else {
          // Missed a day
          set({
            streak: 1,
            lastActiveDate: today,
            dailyTasks: INITIAL_TASKS.map((t) => ({ ...t })),
          })
        }
      },

      recordActivity: () => {
        get().checkStreak()
      },

      addXp: (amount: number, reason?: string) => {
        set((state) => ({
          xp: state.xp + amount,
          pendingReward: {
            title: reason || 'Well done!',
            xp: amount,
            coins: Math.floor(amount / 5),
          },
        }))
      },

      recordWordLearned: (count = 1) => {
        get().checkStreak()
        set((state) => {
          let badgeUnlocked: AchievementBadge | undefined
          const updatedBadges = state.badges.map((b) => {
            if (b.id === 'first_word' && !b.unlockedAt) {
              badgeUnlocked = { ...b, unlockedAt: new Date().toISOString() }
              return badgeUnlocked
            }
            return b
          })

          const updatedTasks = state.dailyTasks.map((task) => {
            if (task.id === 'learn_10_words') {
              const newCount = Math.min(task.targetCount, task.currentCount + count)
              return {
                ...task,
                currentCount: newCount,
                isCompleted: newCount >= task.targetCount,
              }
            }
            return task
          })

          return {
            dailyTasks: updatedTasks,
            badges: updatedBadges,
            pendingReward: badgeUnlocked
              ? {
                  title: `Badge Unlocked: ${badgeUnlocked.title}!`,
                  xp: 100,
                  coins: 25,
                  badge: badgeUnlocked,
                }
              : state.pendingReward,
          }
        })
      },

      recordPracticeResult: (isFlawless: boolean) => {
        get().checkStreak()
        set((state) => {
          const newFlawless = isFlawless ? state.consecutiveFlawlessPracticeCount + 1 : 0

          let badgeUnlocked: AchievementBadge | undefined
          const updatedBadges = state.badges.map((b) => {
            if (b.id === 'practice_whiz' && newFlawless >= 5 && !b.unlockedAt) {
              badgeUnlocked = { ...b, unlockedAt: new Date().toISOString() }
              return badgeUnlocked
            }
            return b
          })

          const updatedTasks = state.dailyTasks.map((task) => {
            if (task.id === 'practice_5_streak') {
              const newCount = Math.min(task.targetCount, isFlawless ? task.currentCount + 1 : task.currentCount)
              return {
                ...task,
                currentCount: newCount,
                isCompleted: newCount >= task.targetCount,
              }
            }
            return task
          })

          return {
            consecutiveFlawlessPracticeCount: newFlawless,
            dailyTasks: updatedTasks,
            badges: updatedBadges,
            pendingReward: badgeUnlocked
              ? {
                  title: `Badge Unlocked: ${badgeUnlocked.title}!`,
                  xp: 150,
                  coins: 30,
                  badge: badgeUnlocked,
                }
              : state.pendingReward,
          }
        })
      },

      recordPronunciationCompleted: (score: number) => {
        get().checkStreak()
        set((state) => {
          let badgeUnlocked: AchievementBadge | undefined
          const updatedBadges = state.badges.map((b) => {
            if (b.id === 'tarteel_voice' && score >= 90 && !b.unlockedAt) {
              badgeUnlocked = { ...b, unlockedAt: new Date().toISOString() }
              return badgeUnlocked
            }
            return b
          })

          const updatedTasks = state.dailyTasks.map((task) => {
            if (task.id === 'tarteel_pronunciation' && score >= 80) {
              return {
                ...task,
                currentCount: 1,
                isCompleted: true,
              }
            }
            return task
          })

          return {
            dailyTasks: updatedTasks,
            badges: updatedBadges,
            pendingReward: badgeUnlocked
              ? {
                  title: `Badge Unlocked: ${badgeUnlocked.title}!`,
                  xp: 120,
                  coins: 20,
                  badge: badgeUnlocked,
                }
              : state.pendingReward,
          }
        })
      },

      recordComprehensionCheck: (understood: boolean) => {
        get().checkStreak()
        if (understood) {
          set((state) => {
            const updatedTasks = state.dailyTasks.map((task) => {
              if (task.id === 'lesson_comprehension') {
                return {
                  ...task,
                  currentCount: 1,
                  isCompleted: true,
                }
              }
              return task
            })
            return {
              xp: state.xp + 40,
              coins: state.coins + 10,
              dailyTasks: updatedTasks,
            }
          })
        }
      },

      claimDailyTaskReward: (taskId: string) => {
        set((state) => {
          const task = state.dailyTasks.find((t) => t.id === taskId)
          if (!task || !task.isCompleted || task.isClaimed) return state

          const updatedTasks = state.dailyTasks.map((t) =>
            t.id === taskId ? { ...t, isClaimed: true } : t
          )

          return {
            xp: state.xp + task.xpReward,
            coins: state.coins + task.coinReward,
            dailyTasks: updatedTasks,
            pendingReward: {
              title: `Daily Task Complete: ${task.title}!`,
              xp: task.xpReward,
              coins: task.coinReward,
            },
          }
        })
      },

      clearPendingReward: () => {
        set({ pendingReward: null })
      },
    }),
    {
      name: 'tariq_gamification_store',
    }
  )
)

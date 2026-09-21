import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ItemRetention {
  itemId: string;
  itemType: 'word' | 'phrase' | 'pattern';
  arabic: string;
  lemma: string;
  meaningEn: string;
  meaningBn: string;
  volume: number;
  chapter: number;
  lesson: number;

  box: number; // 0 = New, 1 = Learning (1d), 2 = Familiar (3d), 3 = Proficient (7d), 4 = Mastered (16d+)
  consecutiveCorrect: number;
  totalAttempts: number;
  totalErrors: number;
  lastPracticedAt: number;
  nextReviewDue: number;
  stability: number; // Days
}

export interface SessionRecord {
  id: string;
  volumeId: number;
  chapterId: number;
  lessonNum: number;
  completedAt: number;
  totalQuestions: number;
  firstTryCorrect: number;
  recycledErrorsResolved: number;
  accuracyRate: number;
  timeSpentSeconds: number;
  wordsLearned: string[];
}

interface RetentionState {
  items: Record<string, ItemRetention>;
  sessions: SessionRecord[];

  recordItemResult: (
    itemData: {
      itemId: string;
      itemType: 'word' | 'phrase' | 'pattern';
      arabic: string;
      lemma: string;
      meaningEn: string;
      meaningBn: string;
      volume: number;
      chapter: number;
      lesson: number;
    },
    isCorrect: boolean
  ) => void;

  recordSessionComplete: (session: Omit<SessionRecord, 'id' | 'completedAt'>) => void;

  getItem: (itemId: string) => ItemRetention | undefined;
  getDueItemsCount: (volumeId?: number) => number;
  getDueItems: (volumeId?: number, limit?: number) => ItemRetention[];
  getPracticeItems: (volumeId?: number, limit?: number) => ItemRetention[];
  recordReviewResult: (itemId: string, isCorrect: boolean) => void;
  getRetentionStats: (volumeId?: number) => {
    totalLearned: number;
    dueCount: number;
    masteredCount: number;
    learningCount: number;
    boxes: { 1: number; 2: number; 3: number; 4: number };
  };
  getLearnedWords: (volumeId?: number) => ItemRetention[];
  getLessonMastery: (
    volumeId: number,
    chapterId: number,
    lessonNum: number
  ) => {
    totalItems: number;
    masteredItems: number;
    learningItems: number;
    averageAccuracy: number;
  };
  resetAllRetention: () => void;
}

const BOX_INTERVALS = [1, 3, 7, 16, 35];

export const useRetentionStore = create<RetentionState>()(
  persist(
    (set, get) => ({
      items: {},
      sessions: [],

      recordItemResult: (itemData, isCorrect) => {
        set((state) => {
          const now = Date.now();
          const existing = state.items[itemData.itemId];

          let newBox = 1;
          let newStreak = 0;
          let totalAttempts = 1;
          let totalErrors = 0;

          if (existing) {
            totalAttempts = existing.totalAttempts + 1;
            totalErrors = isCorrect ? existing.totalErrors : existing.totalErrors + 1;

            if (isCorrect) {
              newStreak = existing.consecutiveCorrect + 1;
              newBox = Math.min(BOX_INTERVALS.length - 1, existing.box + 1);
            } else {
              newStreak = 0;
              newBox = Math.max(1, existing.box - 1);
            }
          } else {
            newStreak = isCorrect ? 1 : 0;
            newBox = isCorrect ? 1 : 0;
            totalErrors = isCorrect ? 0 : 1;
          }

          const intervalDays = BOX_INTERVALS[newBox] || 1;
          const nextDue = now + intervalDays * 24 * 60 * 60 * 1000;

          const updated: ItemRetention = {
            itemId: itemData.itemId,
            itemType: itemData.itemType,
            arabic: itemData.arabic,
            lemma: itemData.lemma,
            meaningEn: itemData.meaningEn,
            meaningBn: itemData.meaningBn,
            volume: itemData.volume,
            chapter: itemData.chapter,
            lesson: itemData.lesson,
            box: newBox,
            consecutiveCorrect: newStreak,
            totalAttempts,
            totalErrors,
            lastPracticedAt: now,
            nextReviewDue: nextDue,
            stability: intervalDays,
          };

          return {
            items: {
              ...state.items,
              [itemData.itemId]: updated,
            },
          };
        });
      },

      recordSessionComplete: (session) => {
        const now = Date.now();
        const record: SessionRecord = {
          ...session,
          id: `session_${now}_${session.volumeId}_${session.chapterId}_${session.lessonNum}`,
          completedAt: now,
        };

        set((state) => ({
          sessions: [record, ...state.sessions].slice(0, 100),
        }));
      },

      getItem: (itemId: string) => {
        return get().items[itemId];
      },

      getDueItemsCount: (volumeId?: number) => {
        const now = Date.now();
        const all = Object.values(get().items);
        return all.filter((item) => {
          if (volumeId && item.volume !== volumeId) return false;
          return item.nextReviewDue <= now;
        }).length;
      },

      getDueItems: (volumeId, limit = 20) => {
        const now = Date.now();
        const items = Object.values(get().items);
        return items
          .filter((item) => {
            if (volumeId !== undefined && item.volume !== volumeId) return false;
            return item.nextReviewDue <= now;
          })
          .sort((a, b) => a.nextReviewDue - b.nextReviewDue)
          .slice(0, limit);
      },

      getPracticeItems: (volumeId, limit = 20) => {
        const items = Object.values(get().items);
        return items
          .filter((item) => {
            if (volumeId !== undefined && item.volume !== volumeId) return false;
            return true;
          })
          .sort((a, b) => {
            if (a.box !== b.box) return a.box - b.box;
            if (a.stability !== b.stability) return a.stability - b.stability;
            return a.lastPracticedAt - b.lastPracticedAt;
          })
          .slice(0, limit);
      },

      recordReviewResult: (itemId, isCorrect) => {
        set((state) => {
          const now = Date.now();
          const existing = state.items[itemId];
          if (!existing) return state;

          let newBox = existing.box;
          let newStreak = existing.consecutiveCorrect;
          let totalAttempts = existing.totalAttempts + 1;
          let totalErrors = existing.totalErrors;

          if (isCorrect) {
            newStreak += 1;
            newBox = Math.min(BOX_INTERVALS.length - 1, existing.box + 1);
          } else {
            newStreak = 0;
            totalErrors += 1;
            newBox = Math.max(1, existing.box - 1);
          }

          const intervalDays = BOX_INTERVALS[newBox] || 1;
          const nextReviewDue = now + intervalDays * 24 * 60 * 60 * 1000;

          const updatedItem: ItemRetention = {
            ...existing,
            box: newBox,
            consecutiveCorrect: newStreak,
            totalAttempts,
            totalErrors,
            lastPracticedAt: now,
            nextReviewDue,
            stability: intervalDays,
          };

          return {
            items: {
              ...state.items,
              [itemId]: updatedItem,
            },
          };
        });
      },

      getRetentionStats: (volumeId) => {
        const items = Object.values(get().items).filter((item) => {
          if (volumeId !== undefined && item.volume !== volumeId) return false;
          return true;
        });
        const now = Date.now();
        const dueCount = items.filter((i) => i.nextReviewDue <= now).length;
        const masteredCount = items.filter((i) => i.box >= 4).length;
        const learningCount = items.filter((i) => i.box < 4).length;

        const boxes = {
          1: items.filter((i) => i.box === 1).length,
          2: items.filter((i) => i.box === 2).length,
          3: items.filter((i) => i.box === 3).length,
          4: items.filter((i) => i.box >= 4).length,
        };

        return {
          totalLearned: items.length,
          dueCount,
          masteredCount,
          learningCount,
          boxes,
        };
      },

      getLearnedWords: (volumeId) => {
        return Object.values(get().items).filter((item) => {
          if (volumeId !== undefined && item.volume !== volumeId) return false;
          return item.itemType === 'word';
        });
      },

      getLessonMastery: (volumeId: number, chapterId: number, lessonNum: number) => {
        const all = Object.values(get().items).filter(
          (item) =>
            item.volume === volumeId && item.chapter === chapterId && item.lesson === lessonNum
        );

        if (all.length === 0) {
          return {
            totalItems: 0,
            masteredItems: 0,
            learningItems: 0,
            averageAccuracy: 0,
          };
        }

        const mastered = all.filter((i) => i.box >= 3).length;
        const learning = all.filter((i) => i.box > 0 && i.box < 3).length;
        const totalAttempts = all.reduce((acc, curr) => acc + curr.totalAttempts, 0);
        const totalErrors = all.reduce((acc, curr) => acc + curr.totalErrors, 0);
        const avgAccuracy =
          totalAttempts > 0 ? Math.round(((totalAttempts - totalErrors) / totalAttempts) * 100) : 0;

        return {
          totalItems: all.length,
          masteredItems: mastered,
          learningItems: learning,
          averageAccuracy: avgAccuracy,
        };
      },

      resetAllRetention: () => {
        set({ items: {}, sessions: [] });
      },
    }),
    {
      name: 'tariq-mobile-retention-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

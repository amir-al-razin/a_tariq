import { useState, useCallback } from 'react';
import {
  getChunkProgress,
  setChunkProgress,
  getLessonProgress,
  resetLesson,
  useProgressStore,
  type ChunkProgress,
} from '../state/progressStore';

export function useProgress() {
  // Use the zustand store directly to trigger re-renders on any progress change
  const progressState = useProgressStore((state) => state.progress);
  const [loading, setLoading] = useState(false);

  const loadChunkProgress = useCallback(
    async (vol: number, ch: number, dars: number, chunkId: string) => {
      setLoading(true);
      const res = await getChunkProgress(vol, ch, dars, chunkId);
      setLoading(false);
      return res;
    },
    []
  );

  const saveChunkProgress = useCallback(
    async (vol: number, ch: number, dars: number, chunkId: string, status: ChunkProgress) => {
      await setChunkProgress(vol, ch, dars, chunkId, status);
    },
    []
  );

  const loadLessonProgress = useCallback(
    async (vol: number, ch: number, dars: number, chunkIds: string[]) => {
      setLoading(true);
      const res = await getLessonProgress(vol, ch, dars, chunkIds);
      setLoading(false);
      return res;
    },
    []
  );

  const clearLessonProgress = useCallback(
    async (vol: number, ch: number, dars: number, chunkIds: string[]) => {
      await resetLesson(vol, ch, dars, chunkIds);
    },
    []
  );

  return {
    progressState, // Reactively updated dictionary of all progress
    loading,
    loadChunkProgress,
    saveChunkProgress,
    loadLessonProgress,
    clearLessonProgress,
  };
}

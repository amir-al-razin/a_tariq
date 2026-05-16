export function getLastVisitedChunk(chapterId: number, darsNum: number): number | null {
  if (typeof window === 'undefined') return null;
  const key = `lesson_progress_${chapterId}_${darsNum}`;
  const stored = localStorage.getItem(key);
  if (stored !== null) {
    const parsed = parseInt(stored, 10);
    if (!isNaN(parsed)) return parsed;
  }
  return null;
}

export function setLastVisitedChunk(chapterId: number, darsNum: number, chunkIndex: number): void {
  if (typeof window === 'undefined') return;
  const key = `lesson_progress_${chapterId}_${darsNum}`;
  localStorage.setItem(key, chunkIndex.toString());
}

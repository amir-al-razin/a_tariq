import type { LessonSessionData } from './lessonSessionTypes';
import { LESSON_01_SESSION } from './lesson1Session';
import { LESSON_02_SESSION } from './lesson2Session';
import { LESSON_03_SESSION } from './lesson3Session';
import { LESSON_04_SESSION } from './lesson4Session';
import { LESSON_05_SESSION } from './lesson5Session';
import { LESSON_06_SESSION } from './lesson6Session';
import { LESSON_07_SESSION } from './lesson7Session';

const SESSION_REGISTRY: Record<string, LessonSessionData> = {
  '1-1-1': LESSON_01_SESSION,
  '1-1-2': LESSON_02_SESSION,
  '1-1-3': LESSON_03_SESSION,
  '1-1-4': LESSON_04_SESSION,
  '1-1-5': LESSON_05_SESSION,
  '1-1-6': LESSON_06_SESSION,
  '1-1-7': LESSON_07_SESSION,
};

/**
 * Retrieve the interactive micro-step session for a specific lesson.
 */
export function getLessonSession(
  volumeId: number,
  chapterId: number,
  lessonNum: number
): LessonSessionData | null {
  const key = `${volumeId}-${chapterId}-${lessonNum}`;
  return SESSION_REGISTRY[key] || null;
}

/**
 * Check whether an interactive micro-step session exists for a specific lesson.
 */
export function hasLessonSession(
  volumeId: number,
  chapterId: number,
  lessonNum: number
): boolean {
  const key = `${volumeId}-${chapterId}-${lessonNum}`;
  return Boolean(SESSION_REGISTRY[key]);
}

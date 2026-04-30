import type { ChapterData } from './curriculum';
import { lesson01 } from './vol2/ch1/lesson01';
import { lesson02 } from './vol2/ch1/lesson02';
import { lesson03 } from './vol2/ch1/lesson03';

// ─────────────────────────────────────────────
// Volume 2 — Pedagogical Data
// Source: "Esho Arbi Shikhi" Vol 2
// Language: English-primary, Bangla optional (bn? fields)
// ─────────────────────────────────────────────

export const CHAPTERS_VOL2: ChapterData[] = [
    {
        id: 1,
        titleAr: 'الباب الأول',
        titleEn: 'Chapter One',
        subtitle: 'Applying verbs to build real Arabic sentences',
        lessons: [
            lesson01,
            lesson02,
            lesson03,
            // Lessons 4-22: pending data entry
        ],
    },
    {
        id: 2,
        titleAr: 'الباب الثاني',
        titleEn: 'Chapter Two',
        subtitle: 'Transitioning into conversational Arabic',
        lessons: [],
    },
    {
        id: 3,
        titleAr: 'الباب الثالث',
        titleEn: 'Chapter Three',
        subtitle: 'Spiritual guidance for the sincere student',
        lessons: [],
    },
];

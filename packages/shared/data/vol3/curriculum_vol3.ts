import type { ChapterData } from '../curriculum';
import { lesson01 } from './ch1/lesson01';
import { lesson02 } from './ch1/lesson02';
import { lesson03 } from './ch1/lesson03';
import { lesson04 } from './ch1/lesson04';
import { lesson05 } from './ch1/lesson05';
import { lesson06 } from './ch1/lesson06';
import { lesson07 } from './ch1/lesson07';
import { lesson08 } from './ch1/lesson08';
import { lesson09 } from './ch1/lesson09';
import { lesson01 as ch2lesson01 } from './ch2/lesson01';
import { lesson02 as ch2lesson02 } from './ch2/lesson02';
import { lesson03 as ch2lesson03 } from './ch2/lesson03';
import { lesson04 as ch2lesson04 } from './ch2/lesson04';
import { lesson05 as ch2lesson05 } from './ch2/lesson05';
import { lesson06 as ch2lesson06 } from './ch2/lesson06';
import { lesson07 as ch2lesson07 } from './ch2/lesson07';
import { lesson08 as ch2lesson08 } from './ch2/lesson08';

import { lesson01 as ch3lesson01 } from './ch3/lesson01';
import { lesson02 as ch3lesson02 } from './ch3/lesson02';
import { lesson03 as ch3lesson03 } from './ch3/lesson03';
import { lesson04 as ch3lesson04 } from './ch3/lesson04';
import { lesson05 as ch3lesson05 } from './ch3/lesson05';
import { lesson06 as ch3lesson06 } from './ch3/lesson06';
import { lesson07 as ch3lesson07 } from './ch3/lesson07';

import { lesson01 as ch4lesson01 } from './ch4/lesson01';
import { lesson02 as ch4lesson02 } from './ch4/lesson02';

// ─────────────────────────────────────────────
// Volume 3 - Pedagogical Data
// Source: "Esho Arbi Shikhi" Vol 3
// Language: English-primary, Bangla optional (bn? fields)
// ─────────────────────────────────────────────

export const CHAPTERS_VOL3: ChapterData[] = [
    {
        id: 1,
        titleAr: 'الباب الأول',
        titleEn: 'Chapter One',
        subtitle: 'Advanced verb forms and plural conjugations',
        lessons: [
            lesson01,
            lesson02,
            lesson03,
            lesson04,
            lesson05,
            lesson06,
            lesson07,
            lesson08,
            lesson09,
        ],
    },
    {
        id: 2,
        titleAr: 'الباب الثاني',
        titleEn: 'Chapter Two',
        subtitle: 'Complex sentence structures and advanced grammar',
        lessons: [
            ch2lesson01,
            ch2lesson02,
            ch2lesson03,
            ch2lesson04,
            ch2lesson05,
            ch2lesson06,
            ch2lesson07,
            ch2lesson08,
        ],
    },
    {
        id: 3,
        titleAr: 'الباب الثالث',
        titleEn: 'Chapter Three',
        subtitle: 'Advanced grammar and linguistic structures',
        lessons: [
            ch3lesson01,
            ch3lesson02,
            ch3lesson03,
            ch3lesson04,
            ch3lesson05,
            ch3lesson06,
            ch3lesson07,
        ],
    },

    {
        id: 4,
        titleAr: 'الباب الرابع',
        titleEn: 'Chapter Four',
        subtitle: 'From the Shades of the Quran and Prophetic Hadith',
        lessons: [
            ch4lesson01,
            ch4lesson02,
        ],
    },
];
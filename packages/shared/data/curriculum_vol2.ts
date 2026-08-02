import type { ChapterData } from './curriculum';
import { lesson01 } from './vol2/ch1/lesson01';
import { lesson02 } from './vol2/ch1/lesson02';
import { lesson03 } from './vol2/ch1/lesson03';
import { lesson04 } from './vol2/ch1/lesson04';
import { lesson05 } from './vol2/ch1/lesson05';
import { lesson06 } from './vol2/ch1/lesson06';
import { lesson07 } from './vol2/ch1/lesson07';
import { lesson08 } from './vol2/ch1/lesson08';
import { lesson09 } from './vol2/ch1/lesson09';
import { lesson10 } from './vol2/ch1/lesson10';
import { lesson11 } from './vol2/ch1/lesson11';
import { lesson12 } from './vol2/ch1/lesson12';
import { lesson13 } from './vol2/ch1/lesson13';
import { lesson14 } from './vol2/ch1/lesson14';
import { lesson15 } from './vol2/ch1/lesson15';
import { lesson16 } from './vol2/ch1/lesson16';
import { lesson17 } from './vol2/ch1/lesson17';
import { lesson18 } from './vol2/ch1/lesson18';
import { lesson19 } from './vol2/ch1/lesson19';
import { lesson20 } from './vol2/ch1/lesson20';
import { lesson21 } from './vol2/ch1/lesson21';
import { lesson22 } from './vol2/ch1/lesson22';
import { lesson01 as ch2lesson01 } from './vol2/ch2/lesson01';
import { lesson02 as ch2lesson02 } from './vol2/ch2/lesson02';
import { lesson03 as ch2lesson03 } from './vol2/ch2/lesson03';
import { lesson04 as ch2lesson04 } from './vol2/ch2/lesson04';
import { lesson05 as ch2lesson05 } from './vol2/ch2/lesson05';
import { lesson06 as ch2lesson06 } from './vol2/ch2/lesson06';
import { lesson07 as ch2lesson07 } from './vol2/ch2/lesson07';
import { lesson08 as ch2lesson08 } from './vol2/ch2/lesson08';
import { lesson09 as ch2lesson09 } from './vol2/ch2/lesson09';
import { lesson01 as ch3lesson01 } from './vol2/ch3/lesson01';
import { lesson02 as ch3lesson02 } from './vol2/ch3/lesson02';
import { lesson03 as ch3lesson03 } from './vol2/ch3/lesson03';

// ─────────────────────────────────────────────
// Volume 2 - Pedagogical Data
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
            lesson04,
            lesson05,
            lesson06,
            lesson07,
            lesson08,
            lesson09,
            lesson10,
            lesson11,
            lesson12,
            lesson13,
            lesson14,
            lesson15,
            lesson16,
            lesson17,
            lesson18,
            lesson19,
            lesson20,
            lesson21,
            lesson22,
        ],
    },
    {
        id: 2,
        titleAr: 'الباب الثاني',
        titleEn: 'Chapter Two',
        subtitle: 'Transitioning into conversational Arabic',
        lessons: [
            ch2lesson01,
            ch2lesson02,
            ch2lesson03,
            ch2lesson04,
            ch2lesson05,
            ch2lesson06,
            ch2lesson07,
            ch2lesson08,
            ch2lesson09,
        ],
    },
    {
        id: 3,
        titleAr: 'الباب الثالث',
        titleEn: 'Chapter Three',
        subtitle: 'Spiritual guidance for the sincere student',
        lessons: [
            ch3lesson01,
            ch3lesson02,
            ch3lesson03,
        ],
    },
];

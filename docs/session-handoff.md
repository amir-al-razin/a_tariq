# Session Handoff — Quranic Arabic App (Tariq)

**Last updated:** 2026-05-01  
**Repo:** `/home/amir/Desktop/tariq`  
**HEAD commit:** `f3b1107` — feat(vol2): populate lessons 1-3 and wire Vol 2 navigation  
**Stack:** Expo (React Native), TypeScript, NativeWind, i18next, React Navigation

---

## 1. What This App Is

An Arabic learning app based on the book "Esho Arbi Shikhi" (Let's Learn Arabic). The book has 3 volumes. Each volume has chapters, each chapter has lessons, each lesson is broken into pedagogical "chunks" (vocabulary, grammar rules, reading passages, Q&A, etc.). The app renders these chunks interactively.

---

## 2. Current State (What's Done)

### Volume 1 — Complete ✅
- All 3 chapters, 9 lessons fully populated in `data/curriculum.ts`
- All chunk types working end-to-end
- Sent to testers

### Volume 2 — In Progress 🔄
- Learning path screen built (`screens/VolumeTwoScreen.tsx`) — amber/gold color palette
- Navigation wired: Vol 2 lessons now navigate correctly to `LessonScreen` and `ChunkEngineScreen`
- **Lessons 1, 2, 3 data populated** in `data/vol2/ch1/lesson01.ts`, `lesson02.ts`, `lesson03.ts`
- Lessons 4–22 data NOT yet entered (source files exist in `docs/notebooklm/vol2-chapter-1/`)

### Volume 3 — Screen only 🔄
- Learning path screen built (`screens/VolumeThreeScreen.tsx`) — violet/indigo palette
- No content yet

### i18n — Complete ✅
- `i18next` + `react-i18next` installed
- English (default) + Bangla supported
- All UI strings use `t()` from `locales/en.json` and `locales/bn.json`
- Curriculum content uses `t_content(en, bn)` from `i18n/LanguageContext.tsx`
- Language switcher in Settings screen

---

## 3. Key Architecture Decisions

### Data Layer
- **Vol 1 data:** `data/curriculum.ts` — single file, `CHAPTERS` export
- **Vol 2 data:** `data/curriculum_vol2.ts` — `CHAPTERS_VOL2` export, imports from `data/vol2/ch1/lessonXX.ts`
- **Vol 3 data:** Not started yet — will follow same pattern as Vol 2

### Navigation
- `HomeNavigator.tsx` has a `volumeNumber` param on both `Lesson` and `ChunkEngine` routes
- `LessonScreen` and `ChunkEngineScreen` use `volumeNumber` to pick `CHAPTERS` vs `CHAPTERS_VOL2`
- Vol 3 will need `CHAPTERS_VOL3` and `volumeNumber === 3` branch added

### Styling
- Hybrid: NativeWind `className` for app shell/settings, inline `C` token map for learning screens
- **Never** put visual styles on `Pressable` with function-style props on Android — use inner `View`
- Volume accent colors are scoped to each volume screen only — home screen and tab bar are neutral-only

### i18n Pattern
```ts
// UI strings
const { t } = useTranslation();
t('lesson.dars', { number: 3 })  // → "Dars 3" or "দরস ৩"

// Curriculum content (Arabic → English/Bangla)
const { t_content } = useLanguage();
t_content(word.en, word.bn)  // → shows bn when Bangla active, else en
```

---

## 4. Component Types (ChunkType)

All defined in `data/curriculum.ts`. All registered in `ChunkEngineScreen.tsx`.

| Type | Component | Notes |
|---|---|---|
| `vocabulary` | `VocabularyView` | Flip cards, prev/next navigation |
| `grammar_rule` | `GrammarRuleView` | Rule + examples, scroll-to-complete |
| `application` | `ApplicationView` | Emoji + Arabic + English, scroll-to-complete |
| `q_and_a` | `QAndAView` | MCQ, green/red feedback |
| `assessment` | `QAndAView` | Same as q_and_a, used for exercises |
| `paragraph` | `ParagraphView` | Reading passage, reveal-translation button |
| `verb_table` | `VerbTableView` | 5-column conjugation grid (هُوَ/هِيَ/أَنْتَ/أَنْتِ/أَنَا) |
| `tarkeeb` | `TarkeebView` | Sentence diagram tree |
| `idafah_drill` | `IdafahDrillView` | Base phrase → possession phrase reveal |
| `masdar_factory` | `MasdarFactoryView` | **NEW** — masdar + baab → 4 forms table |

`masdar_factory` is the only new component added for Vol 2. It shows:
```
مَصْدَر | مَاضٍ | مُضَارِع | أَمْر | نَهْي
```
Data shape: `MasdarRow` interface in `data/curriculum.ts`, payload field `masdarRows`.

---

## 5. Vol 2 Chapter 1 — Lesson Status

Source files: `docs/notebooklm/vol2-chapter-1/lesson01.md` through `lesson22.md`  
Component mapping: `docs/vol2-chapter1-component-map.md` (full analysis, read this first)

| Lesson | Topic | Data entered? |
|---|---|---|
| 1 | Prepositions + Past/Present/Imperative verbs | ✅ `data/vol2/ch1/lesson01.ts` |
| 2 | Negation: مَا (past) + لَا (present) | ✅ `data/vol2/ch1/lesson02.ts` |
| 3 | Masdars + 4 Abwaab (masdar_factory) | ✅ `data/vol2/ch1/lesson03.ts` |
| 4 | Transitive verbs + Object (مَفْعُول بِهِ) | ❌ |
| 5 | Attached object pronouns (ـهُ، ـهَا، ـكَ) | ❌ |
| 6 | Hollow verbs (قَالَ، بَاعَ، نَامَ) | ❌ |
| 7 | Form IV verbs (بَابُ الإِفْعَال) | ❌ |
| 8 | Future negation with لَنْ | ❌ |
| 9 | Lam of purpose (لِـ + subjunctive) | ❌ |
| 10 | أَنْ + verb (يُرِيدُ أَنْ يَفْعَلَ) | ❌ |
| 11 | إِنَّ and لَعَلَّ particles | ❌ |
| 12 | كَانَ، صَارَ، لَيْسَ (Kana sisters) | ❌ |
| 13 | Past continuous: كَانَ + مضارع | ❌ |
| 14 | Form II verbs (بَابُ التَّفْعِيل) | ❌ |
| 15 | Form V verbs (بَابُ التَّفَعُّل) | ❌ |
| 16 | Form VIII verbs (بَابُ الإِفْتِعَال) | ❌ |
| 17 | Form X verbs (بَابُ الإِسْتِفْعَال) | ❌ |
| 18 | Form X review + لَعَلَّ in context | ❌ (source partial — pages missing) |
| 19 | Form III verbs (بَابُ الْمُفَاعَلَة) | ❌ |
| 20 | Masdar review + لِـ consolidation | ❌ |
| 21 | أَنْ: same vs different subject | ❌ |
| 22 | Irrational plurals (جَمْع غَيْر الْعَاقِل) | ❌ |

**Lessons that need `masdar_factory`:** 3, 6, 7, 14, 15, 16, 17, 19  
**All other lessons:** use existing component types only (no new components needed)

---

## 6. Immediate Next Tasks (Priority Order)

1. **Populate Vol 2 Ch 1 Lessons 4–22** — read each `docs/notebooklm/vol2-chapter-1/lessonXX.md`, create `data/vol2/ch1/lessonXX.ts`, add to `data/curriculum_vol2.ts`
2. **Unlock lessons in VolumeTwoScreen** — currently only Lesson 1 is `current`, rest are `locked`. As lessons get data, change `getLessonStatus()` to return `'open'` for populated lessons
3. **Vol 2 Chapter 2 & 3 data** — fetch from NotebookLM when Ch 1 is done
4. **Vol 3 data** — same pattern, create `data/curriculum_vol3.ts`

---

## 7. NotebookLM Access

- **Notebook ID:** `a8570edf-81be-4419-b5f4-93f404ec79bb` — "lets learn arabic" (4 sources, Vol 1 only)
- **Notebook ID:** `ad1567db-4cef-4e07-a05a-d636a26905ea` — "esho arbi shikhi" (6 sources, full book including Vol 2)
- **Session file:** `~/.notebooklm/session.json`
- **Working transport:** `--transport http --session-path ~/.notebooklm/session.json`
- **Fetch command pattern:**
  ```bash
  notebooklm chat ad1567db-4cef-4e07-a05a-d636a26905ea \
    --transport http --session-path ~/.notebooklm/session.json \
    --question "Volume 2 Chapter 1 Lesson N: vocabulary with English meanings, verb tables, reading passages, Q&A, exercises. Full Arabic diacritics." \
    > docs/notebooklm/vol2-chapter-1/lessonNN.md 2>&1
  ```
- **Fetch prompt template:** `docs/notebooklm/fetch-prompt-template.md`

---

## 8. File Structure Reference

```
data/
  curriculum.ts          ← Vol 1 data + all shared interfaces/types
  curriculum_vol2.ts     ← Vol 2 data (imports from vol2/)
  vol2/
    ch1/
      lesson01.ts        ← Lesson 1 chunks
      lesson02.ts        ← Lesson 2 chunks
      lesson03.ts        ← Lesson 3 chunks
      lesson04.ts...     ← TO BE CREATED

screens/
  HomeScreen.tsx         ← Volume selection (all neutral, no accent)
  VolumeOneScreen.tsx    ← Vol 1 path (teal/primary palette)
  VolumeTwoScreen.tsx    ← Vol 2 path (amber palette)
  VolumeThreeScreen.tsx  ← Vol 3 path (violet palette)
  LessonScreen.tsx       ← Orbital chunk selector
  ChunkEngineScreen.tsx  ← Renders pedagogy views
  HomeNavigator.tsx      ← Stack navigator with volumeNumber param

components/pedagogy/
  VocabularyView.tsx
  GrammarRuleView.tsx
  ApplicationView.tsx
  QAndAView.tsx
  ParagraphView.tsx
  VerbTableView.tsx
  TarkeebView.tsx
  IdafahDrillView.tsx
  MasdarFactoryView.tsx  ← NEW for Vol 2

i18n/
  index.ts               ← i18next config, LANGUAGES array, AppLanguage type
  LanguageContext.tsx     ← LanguageProvider, useLanguage(), t_content()

locales/
  en.json                ← All UI strings in English
  bn.json                ← All UI strings in Bangla

docs/
  design-system.md       ← Full design system reference
  vol2-chapter1-component-map.md  ← Lesson-by-lesson component mapping
  notebooklm/
    vol2-chapter-1/      ← Raw lesson extracts (lesson01.md–lesson22.md)
```

---

## 9. Key Interfaces (data/curriculum.ts)

```ts
// Adding a new language: add optional field (e.g. ur?: string) to these interfaces
// and add a new locale file + entry in i18n/index.ts LANGUAGES array

VocabWord     { ar, romanized, en, bn?, emoji? }
GrammarRule   { label, arabic, romanized, meaning, examples?: { ar, en, bn? }[] }
ApplicationItem { emoji, ar, en, bn? }
QAItem        { emoji, question_ar, question_en, correct_ar, correct_en, options_ar[], questionType? }
TarkeebItem   { sentence, sentenceEn, sentenceBn?, type, tree }
VerbTableRow  { root, meaning, he, she, youM, youF, i }
IdafahPair    { baseAr, baseEn, expandedAr, expandedEn, baseBn?, expandedBn? }
ParagraphBlock { title?, titleEn?, lines[], translationEn?, translationBn? }
MasdarRow     { masdar, masdarEn, baab?, past, present, imperative, prohibitive }
```

---

## 10. Known Issues / Watch Out For

- `VolumeOneScreen` dark mode: locked button base layer was `neutral-900` (same as bg) — fixed to `neutral-600`. Same fix applied to Vol 2 and 3 screens.
- `Pressable` with function-style `style` prop doesn't reliably apply `backgroundColor`/`borderRadius` on Android. Always use inner `View` for visuals.
- `useTranslation` must be called inside the component body, not at module level. `ChapterBanner` in `VolumeOneScreen` had this bug — fixed.
- Vol 2 lessons 4–22 are locked in `VolumeTwoScreen.getLessonStatus()`. Change to `'open'` as data is added.
- Lesson 18 source is incomplete (pages 75 and 77 missing from the notebook). Only reading passage available.

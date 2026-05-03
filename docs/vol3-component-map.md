# Volume 3 Component & Data Mapping Decision

## Scope audited
- Source: `docs/notebooklm/vol3-chapter-1..4/lessonNN.md`
- App renderer: `screens/ChunkEngineScreen.tsx`
- Current chunk types: `data/curriculum.ts`
- Existing pedagogy views under `components/pedagogy/*`

---

## 1) Do we need a new component for Volume 3?

## Decision: **No new component required for initial Volume 3 implementation.**

All fetched Volume 3 content can be represented with existing chunk/component pairs:
- `vocabulary` -> `VocabularyView`
- `grammar_rule` -> `GrammarRuleView`
- `application` -> `ApplicationView`
- `q_and_a` / `assessment` -> `QAndAView`
- `paragraph` -> `ParagraphView`
- `verb_table` -> `VerbTableView`
- `masdar_factory` -> `MasdarFactoryView`
- `tarkeeb` -> `TarkeebView`

### Why `NEW_COMPONENT_NEEDED` appears in markdown
NotebookLM uses this label in multiple non-critical situations:
1. It says some sections are missing in the source excerpt (not a UI limitation).
2. It indicates a lesson has only conjugation drill blocks (still renderable with `verb_table` + `grammar_rule`).
3. It suggests optional future Quran/Hadith-focused presentation, but the current `paragraph` + `vocabulary` + `grammar_rule` pattern already supports MVP rendering.

---

## 2) `NEW_COMPONENT_NEEDED` cases and action

| Lesson | Marker meaning | Action |
|---|---|---|
| `vol3/ch1/lesson02` | Explicitly says "None" | Ignore marker |
| `vol3/ch1/lesson07` | Says missing vocab/paragraph/qa/exercise in source | Keep only available blocks |
| `vol3/ch2/lesson06` | QA/assessment absent in source | Do **not** fabricate; skip empty blocks |
| `vol3/ch2/lesson08` | Says no new component strictly needed | Ignore marker |
| `vol3/ch3/lesson03` | Says "None" | Ignore marker |
| `vol3/ch3/lesson07` | Only conjugation-focused content | Use existing `verb_table` + `grammar_rule` |
| `vol3/ch4/lesson01` | Suggests optional Quranic module | Defer; use existing chunks now |
| `vol3/ch4/lesson02` | Incomplete source pages | Keep available content; mark lesson partial |

---

## 3) TypeScript convention to follow (same as Volume 2)

Use the same convention already used in `data/vol2`:

1. **Per-lesson TypeScript file**
   - Path pattern: `data/vol3/ch{chapter}/lessonNN.ts`
   - Export pattern: `export const lessonNN: LessonData = { ... }`

2. **Chunk IDs**
   - Follow stable deterministic IDs, aligned to existing style:
   - `3-{chapter}-{lesson}-{chunkIndex}`
   - Example: `3-2-6-1`

3. **Only existing `ChunkType` values**
   - Never introduce new chunk types during Vol 3 MVP ingestion.

4. **No empty synthetic chunks**
   - If a block does not exist in source, do not invent it.
   - Keep lessons lean with only present blocks.

5. **Language rules**
   - English primary in `en` fields.
   - Bangla only in optional `bn?` fields when available.

6. **Quote safety**
   - Romanization with apostrophes must use double-quoted TS strings.

---

## 4) Mapping rules from fetched markdown to TS chunks

Normalize headers before mapping:
- `**[VOCABULARY]**`, `**VOCABULARY**`, `### **VOCABULARY**` -> `vocabulary`
- `GRAMMAR_RULE / TARKEEB` -> split into two chunks if both are present; otherwise map by actual body
- `NEW_COMPONENT_NEEDED` -> metadata note only (ignore for UI chunk creation)

Recommended fallback handling:
- If a lesson has no clean labeled blocks but has valid text, map the dominant body to `paragraph` (not JSON/raw blobs), then refine manually.

---

## 5) Practical implementation plan for Vol 3 TS data

1. Create folder structure:
   - `data/vol3/ch1` (9)
   - `data/vol3/ch2` (8)
   - `data/vol3/ch3` (7)
   - `data/vol3/ch4` (2)

2. Generate lesson stubs in TS (`lesson01.ts` ...).
3. Populate chunks lesson-by-lesson from markdown labels.
4. Add `data/curriculum_vol3.ts` with imports and chapter metadata matching `VolumeThreeScreen` counts.
5. Wire into navigation/data access where volume data source is selected (without changing UI behavior).

---

## 6) MVP policy for Chapter 4 (Quran/Hadith-heavy)

- Implement now using existing `paragraph`, `vocabulary`, `grammar_rule`, `q_and_a`/`assessment` where present.
- If later UX needs verse-level highlighting, tafsir toggles, or isnad metadata, that can be a **post-MVP** new component project.

---

## Final recommendation

Proceed with Volume 3 ingestion using existing components only.
No blocking component gap exists for MVP.

# Gamification & Paragraph Composition Integration Plan

> **Branch Target**: `integration/gamification-paragraph`  
> **Source Branch**: `origin/feat/gamification-paragraph-merged`  
> **Base**: `main` (commit `2c8bd9e`)  
> **Contributors Preserved**: `Saad0110meh <sajid589karim@gmail.com>`, `Mostafa Galeeb <galeeb8917@gmail.com>`

---

## 1. Objectives & Guidelines

1. **Contributor Credit**: Preserve all 13 commits from Saad and Mostafa on git history and GitHub contributor graphs.
2. **Zero Invariant Regressions**:
   - Zero 1px borders, zero box shadows (100% luminance-based depth).
   - Zero raw hex codes; consume designated tokens (`bg-accent-primary`, `bg-neutral-100`, etc.).
   - Full Tashkeel on all Arabic practice sentences (never leave unvowelled text).
   - Strict script isolation: clean English for `en`, natural Bengali for `bn`.
3. **Bloatware Elimination**:
   - Pruned 20,000-line raw SQL dumps and multi-megabyte JSON transcripts.
   - Removed redundant third-party dependencies (`canvas-confetti`, `react-tooltip`) and cleaned `pnpm-lock.yaml`.
4. **Decongested Home Screen UX**:
   - Removed the massive `ArabicDoodleCanvas` embedded on the bottom of `HomeScreen.tsx`.
   - Implemented an engaging, animated launch badge/card ("Calligraphy & Doodle Atelier · مَرْسَمُ الخَطِّ") with a tactile 56px action button that opens the atelier in a dedicated, focused modal.
5. **No Em Dash Rule**: Strict enforcement of plain dash "-" across all files.

---

## 2. Execution Phases & Progress Tracking

| Phase | Description | Status | Verification Gate |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Create staging branch & merge `origin/feat/gamification-paragraph-merged` (`--no-ff`) | **Complete** | Commit `b577e50` preserves all 13 commits from Saad & Mostafa |
| **Phase 2** | Prune bloatware: delete `seed_video_transcripts.sql`, `downloads/*.json`, `raw_whisper_result.json` | **Complete** | 43,000+ lines of raw bloat pruned |
| **Phase 3** | Prune unused dependencies (`canvas-confetti`, `react-tooltip`) & update `pnpm-lock.yaml` | **Complete** | Created zero-dep `confetti.ts`, native tooltips, `pnpm install` clean |
| **Phase 4** | Normalize `practice-data.ts` & `practiceLessonData.ts`: full Tashkeel & Bengali translations | **Complete** | Verified Tashkeel across Vol 1 Lessons 1-9; full Bengali support |
| **Phase 5** | Design System Normalization: 100% luminance depth across gamification & practice modules | **Complete** | Zero 1px borders, zero box shadows, 56px action buttons |
| **Phase 6** | Home Screen Decongestion & Card Polish: PenTool badge, clean copy, white button text in light/dark mode | **Complete** | Verified via agent-browser screenshots `browser_verify_home_light_mode.png` & `browser_verify_atelier_light_mode.png` |
| **Phase 7** | Full Validation Gate: typecheck web & mobile, run tests | **Complete** | Web TSC 0 errors, Mobile TSC 0 errors, Vitest 24/24 passing, Invariants 100% |

---

## 3. Detailed Audit of Files Modified & Pruned

### A. Pruned Bloatware
- `scripts/seed_video_transcripts.sql` (20,027 lines raw SQL deleted)
- `apps/web/public/downloads/*_transcript.json` (over 20,000 lines transcript JSON deleted)
- `scripts/raw_whisper_result.json` (3,009 lines raw audio model dump deleted)

### B. Normalized & Refactored Modules
- `apps/web/package.json` & `pnpm-lock.yaml`: Removed `canvas-confetti` and `react-tooltip`.
- `apps/web/tailwind.config.js`: Added `foreground: '#ffffff'` to `accent.primary`.
- `apps/web/src/styles.css`: Added `--accent-primary-foreground: #ffffff;` in `:root` and `.dark`.
- `apps/web/src/lib/confetti.ts`: Created lightweight zero-dependency canvas particle burst.
- `apps/web/src/lib/practice-data.ts`: Complete verified Arabic Tashkeel endings and pure Bengali translations.
- `apps/web/src/components/practice/practiceLessonData.ts`: Added `bn` property and natural Bengali vocabulary for all blitz pairs.
- `apps/web/src/components/practice/VocabSpeedBlitzModule.tsx`: Raw Neutral tokens, zero borders/shadows, 56px action buttons, white text on vibrant button, bilingual English/Bengali modes.
- `apps/web/src/components/practice/SentenceScrambleModule.tsx`: Raw Neutral tokens, zero borders/shadows, 56px action button, bilingual mode.
- `apps/web/src/components/practice/HarakatDetectiveModule.tsx`: Raw Neutral tokens, zero borders/shadows, 56px action button, bilingual mode.
- `apps/web/src/components/gamification/DailyTasksDrawer.tsx`: Raw Neutral tokens, zero borders/shadows, bilingual Bengali quest descriptions.
- `apps/web/src/components/gamification/GamificationHeaderWidget.tsx`: Raw Neutral tokens, zero 1px borders.
- `apps/web/src/components/gamification/RewardCelebrationModal.tsx`: Raw Neutral tokens, 56px action button, zero shadows.
- `apps/web/src/components/doodle/ArabicDoodleCanvas.tsx`: Raw Neutral tokens, zero 1px borders, zero shadows, PenTool icon header, clean copy, white text on evaluate button, bilingual labels.
- `apps/web/src/components/screens/HomeScreen.tsx`: Replaced congested embedded canvas with a minimalist launcher card (PenTool icon, clean description, white button text in light/dark mode) and dedicated modal.
- `apps/web/src/routes/practice/$volumeId/$lessonId/index.tsx`: Raw Neutral tokens, 56px action buttons, white text on vibrant buttons, full Bengali translation mode with inline blanks.

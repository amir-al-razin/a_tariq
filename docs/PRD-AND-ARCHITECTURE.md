# Specification: Revolutionary Quranic Arabic Pedagogical Engine

## Executive Overview
This document defines the Product Requirements (PRD), System Architecture, and Phased Implementation Plan for transforming the **Tariq** repository into a high-retention, direct-method Quranic Arabic learning platform.

It directly solves the structural failure modes diagnosed in the existing app:
1. **Abolishes "Scroll-to-Complete"**: Deletes passive completion hacks (`SCROLL_COMPLETE_TYPES` in `apps/web/src/lib/pedagogy.ts`). Every step requires active cognitive production.
2. **Item-Level Spaced Repetition (SRS)**: Replaces binary chunk completion flags (`progressStore`) with granular memory tracking for every word (`vocab:id`), phrase (`phrase:id`), and grammar pattern (`pattern:id`).
3. **Session Error Recycling Queue**: A lesson cannot be finished until the student resolves 100% of their mistakes.
4. **Cognitive Singularity**: Every screen tests exactly one thing. Zero multi-table grammar bombardments.
5. **Quran Mushaf Heatmap Illumination**: Real-time mapping of mastered vocabulary and syntax onto the 604 pages of the King Fahd Complex QCF v2 digital Quran (`/mushaf-v2`).

---

## Assumptions Surfaced
1. **Web-First with Shared Mobile Compatibility**: The primary runner, retention engine, and Mushaf heatmap will be built and validated in `apps/web/` first, while keeping types and state stores strictly modular in `packages/shared/` or mirrorable to `apps/mobile/`.
2. **Data Strategy (Dual-Track Velocity)**: We leverage existing JSON/TS curriculum data in `packages/shared/data/` immediately to build and test the 9 unified engines and the `LessonSessionRunner`. As we progress, we cross-validate and patch text fidelity against the single source of truth: the physical textbook scans in `resources/pages/vol{N}/chapter_{N}/lesson_{N}/page-XXX.png`.
3. **Offline-First Persistence**: Item-level retention and session logs persist in client `localStorage` via Zustand `persist` middleware, with optional cloud sync to PostgreSQL (Neon + Drizzle) for authenticated users.
4. **Design System Strict Compliance**: Strict adherence to the Raw Neutral design system documented in `docs/design-system.md` (0 box shadows, 0 1px solid borders, pure luminance depth, 56px touch targets, `dir="rtl"`, Harakat vertical clearance).

---

## Tech Stack & Commands

### Tech Stack
- **Framework**: TanStack Start / Vite / React 18 / TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v3 + CSS custom property luminance tokens (`bg-canvas-light`, `bg-neutral-100`, `bg-accent-primary`)
- **State Management**: Zustand v4 + `persist` middleware
- **Router**: TanStack Router (file-based routing)
- **Digital Quran**: King Fahd Complex QCF v2 Uthmani fonts (`/fonts/quran/hafs/v2/woff2/p{N}.woff2`) + Word-by-word token metadata
- **Testing & Quality**: Vitest, TypeScript Compiler (`tsc --noEmit`), ESLint, Agent Browser CLI

### Commands
```bash
# Type check (Run before any PR or merge)
pnpm --filter web exec tsc --noEmit

# Lint check
pnpm run lint

# Web Dev Server (Port 3000)
pnpm --filter web run dev

# Run Vitest unit tests
pnpm --filter web run test

# Build production bundle
pnpm --filter web run build
```

---

## Project Structure
```
apps/web/
├── public/
│   ├── prd-and-architecture.html        # Interactive System PRD & Architecture Visualizer
│   └── design-system.html               # Design system token interactive showcase
├── src/
│   ├── components/
│   │   ├── engines/                     # The 9 Unified Interactive Pedagogical Engines
│   │   │   ├── HeroWordPrime.tsx        # Prime new word with audio & glyph
│   │   │   ├── WordChipAssembly.tsx     # Sentence assembly with Fisher-Yates shuffled chips
│   │   │   ├── ClozeFillDrill.tsx       # Single-blank slot selector
│   │   │   ├── BinaryPolarSort.tsx      # Near/Far (هذا/ذلك) & Gender sorting
│   │   │   ├── SpeedPairMatch.tsx       # 4x4 or 3x3 synaptic pair matching
│   │   │   ├── ConjugationMatrix.tsx    # Vol 2 verbal paradigm solver
│   │   │   ├── CaseEndingSelector.tsx   # Vol 2 I'rab terminal vowel tuner
│   │   │   ├── RootMorphologyDeriver.tsx# Vol 3 Awzan root-and-pattern engine
│   │   │   └── PassageReader.tsx        # Vol 2/3 continuous narrative reader
│   │   ├── runner/
│   │   │   ├── LessonSessionRunner.tsx  # Continuous session harness (HUD, queue, error recycle)
│   │   │   └── SessionSummaryModal.tsx  # Post-lesson accuracy, XP, words mastered, Quranic Echo
│   │   └── words/
│   │       ├── WordCard.tsx             # Lexical item card with root and audio
│   │       └── RootClusterView.tsx      # Trilateral root explorer
│   ├── state/
│   │   ├── retentionStore.ts            # Item-level FSRS/SRS memory store
│   │   └── progressStore.ts             # Session & lesson completion aggregator
│   └── routes/
│       ├── words/                       # Lexical Vault & Words Analysis Page
│       │   └── index.tsx
│       ├── mushaf-v2/                   # Real-Time Quran Illumination Heatmap
│       │   └── index.tsx
│       └── volume/$volumeId/chapter/$chapterId/lesson/$darsNum/
│           └── index.tsx                # Mounts LessonSessionRunner
packages/shared/
├── src/types/
│   ├── retention.ts                     # ItemRetention, SessionStep, LessonSummary contracts
│   └── curriculum.ts                    # Universal lesson and chunk schemas
└── data/                                # Curriculum data (validated against resources/pages/)
resources/pages/                         # Authoritative single source of truth (Book scans)
```

---

## Code Style & Architectural Conventions
- **TypeScript**: Strict mode enabled. No `any` types. Discriminated unions for step types.
- **RTL & Arabic Invariants**: Always `dir="rtl"` on Arabic containers, `tracking-normal` (zero letter-spacing on cursive), and `leading-relaxed` or `leading-loose` for Harakat vertical clearance.
- **Cognitive Singularity**: No component may render more than one interactive challenge simultaneously.
- **Design System Mandate**: Zero box shadows (`shadow-*` is forbidden), zero 1px borders, pure luminance depth via neutral backgrounds (`bg-neutral-100 dark:bg-neutral-900`), and 56px (`h-14`) primary action buttons.

```typescript
// Example: Standardized Engine Component Contract
export interface EngineProps<TPayload> {
  payload: TPayload;
  onPass: (result: { itemId: string; timeSpentMs: number }) => void;
  onFail: (result: { itemId: string; selectedAnswer: string }) => void;
}
```

---

## Boundaries (Anti-Regression Rules)

### Always Do
- Enforce the 56px (`h-14`) touch target height for primary action buttons.
- Fisher-Yates shuffle word chips with an anti-identity check so chips never match the correct answer sequence initially.
- Recycle incorrect answers into the active session queue until the student answers them correctly.
- Cross-verify lesson content against `resources/pages/vol{N}/chapter_{N}/lesson_{N}/page-XXX.png`.
- Run `pnpm --filter web exec tsc --noEmit` before concluding any feature.

### Ask First
- Modifying database schemas in `apps/web/src/db/schema.ts` or running Neon migrations.
- Adding third-party NPM dependencies.

### Never Do
- Never use CSS box shadows (`shadow-*`) anywhere in UI components.
- Never use 1px solid outline borders for card boundaries.
- Never restore `SCROLL_COMPLETE_TYPES` or permit passive scrolling completion.
- Never execute `git add`, `git commit`, or `git push` without explicit user permission.
- Never kill the herdr server.
- Never use the em dash "—"; use plain dash "-" instead.

---

## Success Criteria (Testable Conditions)

| Requirement | Testable Success Criteria |
|---|---|
| **Zero Passive Completion** | No lesson chunk can be marked complete by scrolling. `SCROLL_COMPLETE_TYPES` deleted. |
| **In-Session Mistake Recovery** | Failing any drill adds it to `sessionErrorQueue`. The lesson runner will not show the completion screen until the error queue is 0. |
| **Item-Level SRS Memory** | Answering a drill updates `retentionStore` for that item. Next review date is calculated using SRS interval multiplier. |
| **Lesson Summary & Metrics** | Finishing a lesson displays the `SessionSummaryModal` showing: Accuracy %, Mistakes Cleared, Duration, and Words Mastered. |
| **Quran Mushaf Illumination** | Visiting `/mushaf-v2` highlights mastered vocabulary tokens in gold/emerald on King Fahd QCF v2 pages with calculated comprehension %. |
| **Lexical Vault (`/words`)** | Dedicated page displaying all encountered vocabulary, trilateral roots, and Quranic frequency count. |
| **Type Integrity** | `pnpm --filter web exec tsc --noEmit` exits with 0 errors. |

---

## Phased Implementation Plan

```
PHASE 1: Retention Engine & Core Nominal Primitives
   │
   ▼
PHASE 2: Continuous LessonSessionRunner & Mistake Recovery
   │
   ▼
PHASE 3: Lexical Vault & Words Analysis Page (/words)
   │
   ▼
PHASE 4: Real-Time Quran Mushaf Illumination (/mushaf-v2)
   │
   ▼
PHASE 5: Verbal Conjugation & Morphological Awzan Engines (Vols 2 & 3)
```

### Phase 1: Retention Engine & Core Nominal Primitives
- [ ] **Task 1.1: Build `retentionStore.ts`**
  - Acceptance: Tracks items by ID (`vocab:id`, `pattern:id`) with Leitner boxes (0-4), consecutive streaks, stability, and `nextReviewDue` timestamps.
  - Verify: Unit test verifying interval multiplication upon success and reset to box 1 upon error.
  - Files: `apps/web/src/state/retentionStore.ts`, `packages/shared/src/types/retention.ts`.
- [ ] **Task 1.2: Purge `SCROLL_COMPLETE_TYPES`**
  - Acceptance: Delete scroll completion mechanics from `apps/web/src/lib/pedagogy.ts` and `ChunkEngineScreen.tsx`.
  - Verify: Manual test verifying scrolling to bottom does not complete chunks.
  - Files: `apps/web/src/lib/pedagogy.ts`, `apps/web/src/components/screens/ChunkEngineScreen.tsx`.
- [ ] **Task 1.3: Standardize Tier-1 Core Nominal Engines**
  - Acceptance: Standardize `HeroWordPrime.tsx`, `WordChipAssembly.tsx`, `ClozeFillDrill.tsx`, `BinaryPolarSort.tsx`, `SpeedPairMatch.tsx` with standard `{ payload, onPass, onFail }` props.
  - Verify: Render components in Pedagogy Lab, test tap interactions.
  - Files: `apps/web/src/components/engines/*`.

### Phase 2: Continuous LessonSessionRunner & Mistake Recovery
- [ ] **Task 2.1: Build `LessonSessionRunner.tsx`**
  - Acceptance: Takes lesson payload, steps through sequence with Cognitive Singularity. Manages `stepQueue`, `errorQueue`, and accuracy tracking.
  - Verify: Simulated test where failing an item re-queues it at the end.
  - Files: `apps/web/src/components/runner/LessonSessionRunner.tsx`.
- [ ] **Task 2.2: Build `SessionSummaryModal.tsx`**
  - Acceptance: Renders post-session stats: Accuracy %, mistakes resolved, words mastered, and Quranic Echo milestone.
  - Verify: Complete a session and inspect summary modal in browser.
  - Files: `apps/web/src/components/runner/SessionSummaryModal.tsx`.
- [ ] **Task 2.3: Volume 1 Lesson 1 Vertical Slice**
  - Acceptance: Connect Volume 1 Lesson 1 (Pages 15-19) to `LessonSessionRunner`.
  - Verify: Play through end-to-end with Agent Browser on desktop and mobile viewports.
  - Files: `apps/web/src/routes/volume/$volumeId/chapter/$chapterId/lesson/$darsNum/index.tsx`.

### Phase 3: Lexical Vault & Words Analysis Page (`/words`)
- [ ] **Task 3.1: Create Route `/words`**
  - Acceptance: Displays inventory of learned vocabulary cards with audio pronunciation, meaning (En/Bn), and mastery status.
  - Verify: Open `http://localhost:3000/words` and test search/filter.
  - Files: `apps/web/src/routes/words/index.tsx`, `apps/web/src/components/words/WordCard.tsx`.
- [ ] **Task 3.2: Trilateral Root Indexing**
  - Acceptance: Group words by trilateral roots (`ك-ت-ب`, `ق-ل-م`) with Quranic occurrence counters.
  - Verify: Click root pill to expand all derived family words.
  - Files: `apps/web/src/components/words/RootClusterView.tsx`.

### Phase 4: Real-Time Quran Mushaf Illumination (`/mushaf-v2`)
- [ ] **Task 4.1: Build Lemma Matching Engine**
  - Acceptance: Matches normalized curriculum vocabulary against `WordAPI.text_uthmani` tokens across all 604 pages.
  - Verify: Benchmark test confirming lookup takes < 10ms per page.
  - Files: `apps/web/src/lib/mushafMatcher.ts`.
- [ ] **Task 4.2: Mushaf Illumination & Comprehension Score**
  - Acceptance: In `/mushaf-v2`, mastered words glow in soft emerald/accent-secondary with page comprehension percentage displayed in header.
  - Verify: Inspect Surah Al-Baqarah (Page 2) with Agent Browser to verify illuminated tokens.
  - Files: `apps/web/src/routes/mushaf-v2/index.tsx`.

### Phase 5: Verbal & Advanced Morphology Engines (Vols 2 & 3)
- [ ] **Task 5.1: Build `ConjugationMatrix.tsx` & `CaseEndingSelector.tsx`**
  - Acceptance: Interactive 5-cell and 14-cell verb conjugation paradigm solver and I'rab vowel tuner.
  - Verify: Volume 2 Lesson 1 (Page 5 past tense verbs) runs in engine.
  - Files: `apps/web/src/components/engines/ConjugationMatrix.tsx`, `CaseEndingSelector.tsx`.
- [ ] **Task 5.2: Build `RootMorphologyDeriver.tsx` & `PassageReader.tsx`**
  - Acceptance: Awzan template derivation and continuous Hadith/narrative reading engine with tap-to-inspect morphology.
  - Verify: Volume 3 Lesson 1 runs in engine.
  - Files: `apps/web/src/components/engines/RootMorphologyDeriver.tsx`, `PassageReader.tsx`.

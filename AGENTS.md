# AI Agent Rules - Universal

## Project Context

**Repository**: Arabic Pedagogical Engine (Mobile + Web Monorepo)
**Tech Stack**: 
- Mobile: React Native + Expo + NativeWind + Zustand
- Web: Tanstack start + Vite + React + Tailwind + Drizzle ORM + shadcn/ui
- Shared: TypeScript packages with Arabic curriculum data
- Database: PostgreSQL (Neon) with Drizzle ORM
- i18n: Arabic (RTL), English, Bangla

---

## Core Execution Rules (CRITICAL - All Agents Must Follow)

### 1. Plan-First Execution
- **BEFORE writing any code**: Read the plan file specified in your task prompt
- The plan file path will be in the format: `docs/plans/issue-N-plan.md`
- If no plan file is specified, STOP and comment in PR: "No plan file provided"

### 2. File Scope Discipline
- **ONLY modify files listed in the plan** under "Files to modify" or "Files to create"
- **NEVER touch files** listed under "Files NOT to touch"
- If you need to modify an unlisted file, STOP and comment in PR explaining why

### 3. Branch Management
- **Always branch from**: `integration-sprint-{N}` (specified in plan)
- **Never branch from**: `main` or any feature branch
- **Branch naming**: `feat/issue-{N}` (e.g., `feat/issue-07`)

### 4. Validation Before PR
- **Run ALL validation commands** listed in the plan before opening PR
- Common validation commands:
  - `npx tsc --noEmit` (type check - ALWAYS run this)
  - `pnpm run lint`
  - `pnpm run build` (if specified)
  - `pnpm test` (if specified)
- If ANY validation fails, fix it before opening PR

### 5. When Blocked
- **Do NOT guess or improvise**
- **Do NOT skip validation steps**
- **STOP and leave a detailed comment in the PR** explaining:
  - What you were trying to do
  - What blocked you
  - What information or clarification you need

### 6. Database Migrations
- If the plan involves schema changes, run: `bun run scripts/migrate.ts` after code changes
- Verify migration succeeded before opening PR

### 7. Arabic RTL Requirements
- All UI components MUST respect `dir="rtl"` set at HTML root
- Use Tailwind RTL utilities (e.g., `ms-4` instead of `ml-4`)
- Test Arabic text rendering in all components

### 8. Import from Shared Package
- Import Arabic curriculum data from: `@arabic-app/shared`
- **NEVER duplicate content** from `packages/shared/data/`
- Example: `import { lesson01 } from '@arabic-app/shared'`

### 9. Design System Compliance
- **Mandatory Blueprint**: BEFORE creating or editing any UI component, you MUST read `docs/design-system.md` and inspect the interactive workbench at `apps/web/src/components/design-system/DesignSystemWorkbench.tsx`.
- **Zero Hardcoded Colors**: Strictly prohibited to write raw hex codes (`#...`, `bg-[#...]`) or ad-hoc Tailwind colors (`bg-blue-600`, `text-green-500`). All UI components must strictly consume designated tokens (`bg-accent-primary`, `bg-accent-secondary`, `bg-neutral-100`, etc.) specified in `docs/design-system.md`.
- **Zero 1px Borders & Zero Shadows**: Depth is 100% luminance-based. Outlines and drop shadows (`shadow-*`) are strictly prohibited (dashed borders permitted only on empty assembly drop target slots).
- **Geometric & Touch Mandates**: Strictly follow the 5-tier corner radius hierarchy (`rounded-4xl` to `rounded-full`) and 56px (`h-14`) touch target standards specified in `docs/design-system.md`.
- **Arabic Typography Invariants**: Strictly `tracking-normal` (zero letter-spacing on Arabic cursive) and `leading-relaxed` or `leading-loose` (Harakat vertical clearance).

### 10. i18n Requirements
- Use `t()` function for ALL user-facing strings
- **No hardcoded Arabic, English, or Bangla text** in components
- Translation keys must exist in `messages/` directory
- **Strict Script Isolation**: `en` fields must contain only clean English; `bn` fields must contain only natural Bangla. Never mix scripts or English words into Bangla fields.
- **Arabic Tashkeel Fidelity**: Every Arabic word in curriculum data must have complete, accurate Harakat (never guess or drop grammatical vowel endings).

### 11. Pedagogical Anti-Patterns & Common Mistakes
- **Mandatory Pre-Flight**: BEFORE creating or modifying any lesson session, data file, or interactive exercise, you MUST read `docs/common-mistakes.md` (or `COMMON_MISTAKES.md`).
- **Zero Solution Leakage**: NEVER include `promptAr` in `sentence_assembly` (leaves only `promptEn`/`promptBn` so the learner builds the Arabic from scratch). In `cloze_choice`, never put the target word or bracketed blanks in `partialAnswerAr` (always use standard `...`).
- **Zero Static Translations on Reading Passages**: NEVER include `contextEn` or `contextBn` on reading comprehension cards (`alternative_qa`). The learner must read the Arabic text directly. Verify `contextAr` contains all information needed to answer the questions.
- **Strict Textbook Fidelity**: Transcribe textbook passages verbatim. Never omit sentences from multi-sentence reading units, and never invent or alter textbook dialogue.
- **Zero Screen Duplication**: Never repeat the exact same sentence 2-3 times across instructions, questions, and prompts on a single card.
- **Scope Discipline**: Always restrict verb paradigms using `targetTense` (e.g., `targetTense: 'past'` for `لَيْسَ`) to prevent un-taught or invalid tenses from displaying.

### 12. Sarf & Masdar Factory Pedagogy
- **Never Introduce Bab Without Functional Explanation**: Don't just show an abstract label like "Fataha Pattern (a - a)". Always explain how the middle radical vowel changes between past and present, and why this matters for forming commands and prohibitions.
- **Zero "Reveal All" or Skip Exploits**: Multi-step interactive drills must never provide reveal-all buttons or allow skipping past unrevealed forms without active student interaction.
- **Cognitive Separation**: Commands (`الأَمْر`) and Prohibitions (`النَّهْي`) must always be taught in separate, sequential micro-steps, never combined into cluttered dual-form rows.

### 13. Locked Unimplemented Lessons
- **Lock Icons on Unimplemented Units**: Any lesson lacking an interactive session implementation MUST render a Lock icon instead of a lesson number in learning journey views.
- **Zero Fallback Navigation**: Stepping stone buttons for locked lessons must be strictly disabled and inert (`disabled={!isImplemented}`, `cursor-not-allowed`) to prevent accidental navigation or silent fallbacks to Lesson 1.
- **Beacon Targeting**: The active curriculum beacon (`START` / `CURRENT`) must exclusively target implemented, uncompleted lessons.

### 14. Arabic Neural TTS Audio Standards
- **Standardized Male Neural Voice**: Arabic speech synthesis must exclusively utilize `ar-XA-Wavenet-B` (high-fidelity male neural voice, pitch: 0.0, rate: 0.88). Female voices are prohibited for core lesson audio.
- **Wasl Continuation Trimming**: Always append an unstressed continuation token (` نَعَمْ`) during synthesis to prevent the engine from applying pausal stop (Waqf) silencing on final case vowels (I'rab/Tanwin), then slice cleanly at the boundary using `ffmpeg` with a 30ms fade-out.

---

## Code Style & Conventions

### TypeScript
- **Strict mode enabled** - no `any` types
- Use `type` for object shapes, `interface` for extensible contracts
- Prefer named exports over default exports
- Use `import type` for type-only imports

### React Components
- **Functional components only** - no class components
- Use hooks for state and side effects
- Component file naming: `PascalCase.tsx`
- Utility file naming: `kebab-case.ts`

### File Organization
```
src/
├── components/     # Reusable UI components
├── pages/          # Route pages
├── hooks/          # Custom React hooks
├── lib/            # Utilities and helpers
├── state/          # Zustand stores
└── types/          # TypeScript type definitions
```

### Naming Conventions
- **Components**: `PascalCase` (e.g., `ArabicText`, `LessonCard`)
- **Functions**: `camelCase` (e.g., `getUserProgress`, `formatArabicText`)
- **Files**: `kebab-case.ts` or `PascalCase.tsx` (components)
- **Constants**: `SCREAMING_SNAKE_CASE` (e.g., `MAX_RETRIES`)

### Error Handling
- Use custom error classes from `lib/errors.ts`
- Always provide user-friendly error messages
- Log errors with context for debugging

### Testing
- Test files: `__tests__/{filename}.test.ts`
- Use Vitest for unit tests
- Test utilities in `lib/` directory
- Mock external dependencies

---

## Mobile-Specific Rules (React Native)

### NativeWind (Tailwind for React Native)
- Use NativeWind classes, NOT inline styles
- Example: `<View className="flex-1 bg-white p-4">`
- RTL support: Use logical properties (`ms-4` not `ml-4`)

### React Navigation
- Use typed navigation (see `types/navigation.ts`)
- Screen components in `screens/` directory
- Navigation config in `navigation/` directory

### State Management
- Use Zustand for global state
- Store files in `state/` directory
- Keep stores focused and small

---

## Web-Specific Rules (Vite + React)

### Routing
- Use React Router v6 or TanStack Router
- Route files in `src/pages/` or `src/routes/`
- URL-based routing (not stack-based like mobile)

### Styling
- Use Tailwind CSS with RTL plugin
- shadcn/ui components for UI primitives
- CSS variables for theming (see `docs/theming.md`)

### Database Access
- Use Drizzle ORM for all database operations
- Schema in `src/db/schema.ts`
- Queries in `src/db/queries.ts`
- Migrations in `drizzle/` directory

---

## Lesson Structure Rules (Vol3 Curriculum)

### CRITICAL: Always Use Working Templates
**BEFORE creating any lesson file:**
1. Open a similar, recently-created lesson (e.g., `lesson08.ts`)
2. Copy the ENTIRE file structure as scaffold
3. Replace ONLY content inside payloads, NOT structure
4. NEVER invent property names

### Chunk Type Payloads (FIXED STRUCTURES)

#### GRAMMAR_RULE
```typescript
payload: {
  rules: [{
    label: string,
    labelBn: string,
    arabic: string,
    romanized: string,
    meaning: string,
    meaningBn: string,
    examples: [{ ar: string, en: string, bn: string }],
  }],
}
```

#### VOCABULARY
```typescript
payload: {
  words: [{
    id: number,
    ar: string,
    romanized: string,
    en: string,
    bn: string,
    emoji: string,
  }],
}
```

#### Q_AND_A
```typescript
payload: {
  instruction: string,
  instructionBn: string,
  questions: [{
    question_ar: string,
    question_en: string,
    question_bn: string,
    correct_ar: string,
    correct_en: string,
    correct_bn: string,
    options_ar: string[],
    questionType: 'hal' | 'a_am' | 'general',  // ONLY these values
  }],
}
```

### Every Chunk Must Have
```typescript
{
  id: string,           // '1', '2', '3', etc.
  type: ChunkType,      // Valid chunk type
  titleEn: string,      // REQUIRED
  titleAr: string,      // REQUIRED
  titleBn: string,      // REQUIRED
  payload: { ... },     // Type-specific structure
}
```

### Validation Workflow
1. Run `npx tsc --noEmit` after creating lesson file
2. Expected: "No errors found"
3. If errors: Read error message, check chunk type structure
4. Do NOT proceed until zero errors

---

## Common Mistakes to Avoid

### ❌ DON'T
- Provide competing action buttons simultaneously (e.g. "Next Verb" alongside "Continue"); never split navigation choices at the bottom of the card
- Include `promptAr` in `sentence_assembly` (spoils the exercise by revealing the Arabic solution above the chips)
- Leak target answers into `partialAnswerAr` in `cloze_choice` or use bracketed blanks like `[···]` (always use clean `...`)
- Provide static English or Bangla translations (`contextEn` / `contextBn`) for reading passages in `alternative_qa`
- Omit sentences from multi-sentence textbook passages or fabricate dialogue not in the book
- Render the exact same sentence multiple times on a single screen
- Display un-taught or invalid verb tenses (always set `targetTense` on verb conjugators)
- Use `fsWrite` on existing files with working code (use `strReplace` instead)
- Invent payload structures for lesson chunks (copy from working examples)
- Use `questionType: 'multiple_choice'` (use 'hal', 'a_am', or 'general')
- Hardcode user-facing strings (use i18n)
- Branch from `main` (branch from integration branch)
- Skip validation commands
- Touch files not listed in the plan
- Use shadow CSS utilities (`shadow-*`) anywhere in UI components (strictly prohibited by Raw Neutral design system)
- Add inline theme toggle buttons or local theme state variables in lesson engines (managed globally by navbar)
- Invent new UI components, wrappers, or emojis for curriculum lessons (restrict to authorized existing modules)
- Combine introductory familiarization examples and interactive student practice into a single mixed lesson step
- Write static translations for textbook practice dialogues/sentences (put them into interactive translation drills)
- Render word chip options in static answer order (always use Fisher-Yates shuffling memoized with `useMemo`)
- Hardcode hex colors or arbitrary Tailwind color classes (strictly use designated tokens like `bg-accent-primary`, `bg-neutral-100`, etc.)
- Use 1px solid outline borders or drop shadows (`shadow-*`) anywhere in UI components (strictly prohibited by Raw Neutral)
- Use arbitrary border radii (strictly follow the 5-tier radius hierarchy: `rounded-4xl` to `rounded-full`)
- Display raw citation infinitives ("To do", "To exit") for conjugated verbs without tense anchors (always use concrete 3rd person past "He did" and state tense "PAST TENSE · المَاضِي")
- Add redundant subtitle bloat under paradigm rows (e.g. repeating "He" under "He did" or leaking "{meaning.bn}" into English mode)
- Mix languages across content fields or UI labels (English mode = Arabic + English ONLY; Bangla mode = Arabic + Bangla ONLY; zero cross-script contamination)
- Render developer role badges (`Model · النموذج`, `Practice · التَّمْرِين`) or abstract Sarf classification badges (`بَاب فَتَحَ يَفْتَحُ`); never burden learners with developer jargon or un-taught grammar categories
- Add multi-line subtitle paragraphs explaining suffixes or instructions under hero cards; keep cards clean, uncluttered, and focused
- Output Arabic words without complete, accurate Harakat (never guess or drop vowel endings)
- Display citation past root (e.g. خَرَجَ) in the hero or audio of present/imperative verb conjugators; hero Arabic word and audio must match active tense (e.g. يَخْرُجُ for present)
- Provide "Reveal All" cheat buttons or dump multiple un-practiced tenses at once onto a passive card
- Allow users to skip past interactive paradigm or masdar steps without actively solving the pattern challenge
- Display active lesson numbers on unimplemented curriculum units or allow clicking locked stepping stones
- Combine Command and Prohibition into dual-form rows on a single card; always split into separate micro-steps
- Use female voice models or synthesize Arabic audio without Wasl continuation trimming

### ✅ DO
- Follow the Single Action Principle: exactly ONE 56px action button at the bottom of multi-item sequences (Next Verb/Item -> then Continue on final item)
- Read `docs/common-mistakes.md` (or `COMMON_MISTAKES.md`) and the plan file FIRST before building or modifying lessons
- Copy structures from working examples
- Strictly use designated tokens from the design system blueprint (`apps/web/src/components/design-system/DesignSystemWorkbench.tsx` and `docs/design-system.md`)
- Enforce 56px (`h-14`) touch target height for primary action buttons
- Run `npx tsc --noEmit` before opening PR
- Use `strReplace` for editing existing files
- Follow existing patterns in the codebase
- Ask for clarification when blocked
- Test Arabic RTL rendering
- Use `CurriculumHeader` and `CurriculumFooter` from shared components to ensure mobile responsive layout
- Separate translated textbook examples (Familiarization) from non-translated interactive exercises (Practice)
- Display explicit Tense Pill (`PAST TENSE · المَاضِي`) and concrete 3rd-person past meaning ("He did" / "সে করল") in verb conjugator hero
- Strictly synchronize hero Arabic word, audio, and action button labels with active tense using getRootVerbArabic (خَرَجَ for past, يَخْرُجُ for present, اخْرُجْ for imperative)
- Keep paradigm rows clean: rounded pronoun badge (`[ هُوَ ]`) + single bold concrete meaning ("He did" / "সে করল") + inflected form / target slot
- Verify Arabic Tashkeel against textbook sources and keep English/Bangla fields 100% script-pure
- Validate UI visually in BOTH English (`en`) and Bengali (`bn`) modes before declaring complete
- Lock unimplemented lessons with a lock icon, disable stepping stone clicks, and target the progress beacon strictly to implemented lessons
- Teach the function of Sarf Bab patterns (explaining vowel shifts from past to present) before testing learners
- Separate Command (`الأَمْر`) and Prohibition (`النَّهْي`) into distinct sequential micro-steps
- Synthesize Arabic audio using `ar-XA-Wavenet-B` with Wasl continuation tokens (` نَعَمْ`) trimmed via ffmpeg for pristine I'rab

---

## Success Criteria

A successful PR / Contribution:
- ✅ Follows the plan exactly
- ✅ All validation commands pass
- ✅ No TypeScript errors (`npx tsc --noEmit`)
- ✅ Follows existing code patterns
- ✅ Arabic RTL works correctly
- ✅ i18n keys exist for all user-facing text
- ✅ Only modifies files listed in plan
- ✅ Adheres to all rules in `docs/common-mistakes.md`
- ✅ Includes clear commit message

---

## Resources

- **Common Mistakes Log**: `docs/common-mistakes.md` (or `COMMON_MISTAKES.md`)
- **Design System**: `docs/design-system.md`
- **Pedagogical Implementation Principles**: `docs/engine-design-guidelines.md`
- **Theming Guide**: `docs/theming.md`
- **Mobile Reference**: `apps/mobile/` (working implementation)
- **Shared Data**: `packages/shared/data/`
- **Lesson Templates**: `packages/shared/data/vol3/lessons/lesson08.ts`

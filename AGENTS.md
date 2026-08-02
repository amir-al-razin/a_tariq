# AI Agent Rules — Universal (Jules + Local IDE)

## Project Context

**Repository**: Arabic Pedagogical Engine (Mobile + Web Monorepo)
**Tech Stack**: 
- Mobile: React Native + Expo + NativeWind + Zustand
- Web: Tanstack start + Vite + React + Tailwind + Drizzle ORM + shadcn/ui
- Shared: TypeScript packages with Arabic curriculum data
- Database: PostgreSQL (Neon) with Drizzle ORM
- i18n: Arabic (RTL), English, Bangla

---

## Jules Execution Rules (CRITICAL — Jules Must Follow)

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
  - `npx tsc --noEmit` (type check — ALWAYS run this)
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
- **Read `docs/design-system.md`** before building any UI component
- Follow existing component patterns from mobile app
- Match visual design language (colors, spacing, typography)

### 10. i18n Requirements
- Use `t()` function for ALL user-facing strings
- **No hardcoded Arabic, English, or Bangla text** in components
- Translation keys must exist in `messages/` directory

---

## Code Style & Conventions

### TypeScript
- **Strict mode enabled** — no `any` types
- Use `type` for object shapes, `interface` for extensible contracts
- Prefer named exports over default exports
- Use `import type` for type-only imports

### React Components
- **Functional components only** — no class components
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
- Use `fsWrite` on existing files with working code (use `strReplace` instead)
- Invent payload structures for lesson chunks (copy from working examples)
- Use `questionType: 'multiple_choice'` (use 'hal', 'a_am', or 'general')
- Hardcode user-facing strings (use i18n)
- Branch from `main` (branch from integration branch)
- Skip validation commands
- Touch files not listed in the plan

### ✅ DO
- Read the plan file FIRST
- Copy structures from working examples
- Run `npx tsc --noEmit` before opening PR
- Use `strReplace` for editing existing files
- Follow existing patterns in the codebase
- Ask for clarification when blocked
- Test Arabic RTL rendering

---

## Success Criteria

A successful Jules PR:
- ✅ Follows the plan exactly
- ✅ All validation commands pass
- ✅ No TypeScript errors (`npx tsc --noEmit`)
- ✅ Follows existing code patterns
- ✅ Arabic RTL works correctly
- ✅ i18n keys exist for all user-facing text
- ✅ Only modifies files listed in plan
- ✅ Includes clear commit message

---

## Resources

- **Design System**: `docs/design-system.md`
- **Pedagogical Implementation Principles**: `docs/engine-design-guidelines.md`
- **Theming Guide**: `docs/theming.md`
- **Mobile Reference**: `apps/mobile/` (working implementation)
- **Shared Data**: `packages/shared/data/`
- **Lesson Templates**: `packages/shared/data/vol3/lessons/lesson08.ts`

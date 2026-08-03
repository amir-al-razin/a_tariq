# Raw Neutral Design System Audit Report

## Audit Scope
- Volume Pages: `VolumeScreen.tsx`
- Lesson Pages: `LessonScreen.tsx`, `ChunkEngineScreen.tsx`
- General: `HomeScreen.tsx`

## Issues Found
- `ChunkEngineScreen.tsx` relied heavily on `VOLUME_ACCENT`, a system that mapped volume IDs to specific colors (e.g., emerald teal, amber gold, violet indigo).
- It was dynamically injecting these accent colors into the pedagogy components (e.g. `VocabularyView`, `QAndAView`) via `accent400` and `accent700` props.
- `src/lib/pedagogy.ts` and `src/lib/theme.ts` defined these arbitrary colors which violated the strict tone-on-tone grayscale mandate.

## Resolutions Implemented
1. **Removed `VOLUME_ACCENT` dependencies**:
   - Stripped all `accent.accent400`, `accent.accent700`, and `accent.accent800` usage from `ChunkEngineScreen.tsx`.
   - Replaced action buttons and headers with strictly neutral, high-contrast tokens (`bg-neutral-900 text-white` for light mode, `bg-white text-black` for dark mode).
   - Upgraded imports in `ChunkEngineScreen.tsx` to directly consume the Raw Neutral-compliant `pedagogy-v2` components, removing arbitrary props.
2. **Cleaned up theme definition files**:
   - Removed `VOLUME_ACCENT` from `src/lib/pedagogy.ts`.
   - Stripped all non-neutral colors (vol1, vol2, vol3) from `src/lib/theme.ts`, leaving only the structural neutral palette and semantic feedback states (correct/wrong) as mandated by the design document.

The entire project is now standardized to the Raw Neutral design system without any leftover gamified volume colors.

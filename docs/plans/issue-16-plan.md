# Issue #16: Setup Web App Foundation

## Objective

Establish the foundational infrastructure for the web application to match the mobile app's architecture. This includes theme system, state management, RTL support, and essential dependencies. The web app uses TanStack Start (not React Native), so we need localStorage instead of AsyncStorage, and standard Tailwind (not NativeWind).

This is a critical foundation issue that other issues depend on. The theme colors, progress store API, and RTL configuration must match mobile exactly to ensure consistent behavior across platforms.

## Requirements

### Theme System
- Copy all color palettes from `apps/mobile/theme/colors.ts` to `apps/web/src/lib/theme.ts`
- Include: neutral, vol1 (teal), vol2 (amber), vol3 (violet), feedback colors
- Export `VolumeAccent` type and `VOLUME_ACCENT` mapping
- Colors must match mobile exactly (same hex values)

### Progress Store (Zustand)
- Create web version of `apps/mobile/state/progressStore.ts` using localStorage
- Replace AsyncStorage with localStorage API
- Maintain same function signatures: `getChunkProgress`, `setChunkProgress`, `getLessonProgress`, `resetLesson`
- Same types: `ChunkProgress = 'not_started' | 'in_progress' | 'completed'`
- Create React hook `useProgress` for component access

### Tailwind Configuration
- Add `tailwindcss-rtl` plugin to support RTL layouts
- Configure logical properties (ms/me/ps/pe instead of ml/mr/pl/pr)
- Add custom font families: Lexend (English), Noto Sans Arabic (Arabic), Noto Sans Bengali (Bangla)
- Add custom font sizes matching mobile (display, h1, h2, body, arabic-display, arabic-body)
- Extend colors with theme palettes

### Dependencies
- Add `framer-motion` for animations
- Add `lucide-react` for icons
- Add `zustand` for state management
- Add `tailwindcss-rtl` for RTL support

### Root Layout RTL Support
- Modify `apps/web/src/routes/__root.tsx` to support `dir="rtl"` attribute
- RTL should activate when Arabic content is displayed
- Default to LTR for English/Bangla

## Reference Implementation

**Mobile files to read:**
- `apps/mobile/theme/colors.ts` - Complete color system
- `apps/mobile/state/progressStore.ts` - Progress tracking API
- `apps/mobile/tailwind.config.js` - Tailwind configuration

**Key differences (Mobile vs Web):**
- Mobile: AsyncStorage → Web: localStorage
- Mobile: NativeWind → Web: Standard Tailwind
- Mobile: React Native components → Web: HTML elements

## Files to Create

- `apps/web/src/lib/theme.ts` - Theme colors and types
- `apps/web/src/state/progressStore.ts` - Zustand store with localStorage
- `apps/web/src/hooks/useProgress.ts` - React hook for progress access

## Files to Modify

- `apps/web/package.json` - Add dependencies (framer-motion, lucide-react, zustand, tailwindcss-rtl)
- `apps/web/tailwind.config.js` - Add RTL plugin, custom fonts, colors
- `apps/web/src/routes/__root.tsx` - Add RTL support with dir attribute

## Files NOT to Touch

- `apps/mobile/*` - Do not modify mobile app
- `packages/shared/*` - Do not modify shared packages
- `apps/web/src/routeTree.gen.ts` - Auto-generated file

## Validation Commands

```bash
# Type check
npx tsc --noEmit

# Build check
pnpm --filter web run build

# Dev server (manual test)
pnpm --filter web dev
```

## Success Criteria

- ✅ Theme colors imported and match mobile exactly
- ✅ Progress store has same API as mobile (different implementation)
- ✅ Tailwind RTL utilities work (test with `className="ms-4"`)
- ✅ All dependencies installed and importable
- ✅ Root layout supports RTL switching
- ✅ No TypeScript errors
- ✅ Build succeeds

## Notes

- This is Phase 1 foundation work - other issues depend on this
- Focus on API compatibility, not implementation details
- Web uses localStorage (synchronous), mobile uses AsyncStorage (async)
- Keep progress store functions async for API compatibility

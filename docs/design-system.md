# Quranic Arabic App — Design System

Last updated: 2026-04-29
Reflects the current state of the codebase.

---

## 1. Architecture Overview

Styling is a **hybrid system** — both approaches are intentional and should not be consolidated:

| Layer | Approach | Where |
|---|---|---|
| App shell, settings, home | NativeWind `className` | `HomeScreen`, `SettingsScreen`, `ParagraphView` |
| Learning path, chunk engine, pedagogy | Inline styles with `C` token map | `VolumeOneScreen`, `VolumeTwoScreen`, `VolumeThreeScreen`, `LessonScreen`, `ChunkEngineScreen`, most pedagogy views |

The reason for the split: NativeWind `className` on `Pressable` with function-style style props is unreliable on Android. Any component with press-depth animation or complex conditional styling uses inline styles with the `C` map instead.

Source of truth files:
- Token definitions: `tailwind.config.js`
- App-level theme + nav + tab bar: `App.tsx`
- Volume screen patterns: `screens/VolumeOneScreen.tsx` (reference implementation)

---

## 2. Color System

### 2.1 Global Tokens (tailwind.config.js)

#### Neutral — warm manuscript gray (used everywhere)

| Token | Hex |
|---|---|
| `neutral-50` | `#F8F7F4` |
| `neutral-100` | `#F0EEE8` |
| `neutral-200` | `#E5E1D8` |
| `neutral-300` | `#D5CEBF` |
| `neutral-400` | `#B9AF9C` |
| `neutral-500` | `#9A8F7B` |
| `neutral-600` | `#7D7463` |
| `neutral-700` | `#4F4A40` |
| `neutral-800` | `#22201B` |
| `neutral-900` | `#1A1815` |
| `neutral-950` | `#0D0C0A` |

#### Primary — emerald teal (Volume 1 accent only)

| Token | Hex |
|---|---|
| `primary-50` | `#ECFDF8` |
| `primary-100` | `#D1FAEF` |
| `primary-200` | `#A7F3DE` |
| `primary-300` | `#6EE7C8` |
| `primary-400` | `#34D3AA` |
| `primary-500` | `#16B78E` |
| `primary-600` | `#0F9373` |
| `primary-700` | `#0D775F` |
| `primary-800` | `#0F5F4D` |
| `primary-900` | `#124E41` |

#### Status (reserved, not yet used in UI)

| Name | Hex |
|---|---|
| `status.success` | `#2E7D32` |
| `status.warning` | `#C77D00` |
| `status.danger` | `#C62828` |
| `status.info` | `#1565C0` |

---

### 2.2 Volume Accent Colors (inline only, not in Tailwind)

Each volume has its own accent palette. These are defined locally inside each volume screen file and are **not** global tokens. They are intentionally scoped — the home screen and tab bar use neutral only.

#### Volume 1 — Emerald Teal
Same as the global `primary` palette above. Used in `VolumeOneScreen`, `LessonScreen`, `ChunkEngineScreen`, and all pedagogy views.

#### Volume 2 — Amber Gold
Signals action, verbs, time. Defined in `VolumeTwoScreen.tsx`.

| Local name | Hex |
|---|---|
| `accent50` | `#FFFBEB` |
| `accent100` | `#FEF3C7` |
| `accent200` | `#FDE68A` |
| `accent300` | `#FCD34D` |
| `accent400` | `#FBBF24` |
| `accent500` | `#F59E0B` |
| `accent600` | `#D97706` |
| `accent700` | `#B45309` |
| `accent800` | `#92400E` |
| `accent900` | `#78350F` |

#### Volume 3 — Violet Indigo
Signals mastery, advanced grammar, Quranic immersion. Defined in `VolumeThreeScreen.tsx`.

| Local name | Hex |
|---|---|
| `accent50` | `#F5F3FF` |
| `accent100` | `#EDE9FE` |
| `accent200` | `#DDD6FE` |
| `accent300` | `#C4B5FD` |
| `accent400` | `#A78BFA` |
| `accent500` | `#8B5CF6` |
| `accent600` | `#7C3AED` |
| `accent700` | `#6D28D9` |
| `accent800` | `#5B21B6` |
| `accent900` | `#4C1D95` |

**Rule:** Volume accent colors must never appear on the home screen or tab bar. The home screen is intentionally neutral — all three volume cards use identical neutral styling. Color differentiation happens only after the user enters a volume.

---

### 2.3 Semantic Color Usage

#### Surfaces

| Context | Light | Dark |
|---|---|---|
| Page background | `neutral-50` `#F8F7F4` | `neutral-900` `#1A1815` |
| Card / panel | `neutral-100` `#F0EEE8` | `neutral-800` `#22201B` |
| Subtle inset | `neutral-200` `#E5E1D8` | `neutral-700` `#4F4A40` |
| Border | `neutral-200` | `neutral-700` |

#### 3D Push Button Nodes (lesson/chunk circles)

The circular nodes use a two-layer structural depth system — no blur or shadow:

| State | Face color | Base (shadow) color |
|---|---|---|
| Current / completed | `accent500` | `accent700` (dark) / `accent600` (light) |
| Open / available | `accent800` (dark) / `accent100` (light) | `accent900` (dark) / `accent200` (light) |
| Locked | `neutral-700` (dark) / `neutral-300` (light) | `neutral-600` (dark) / `neutral-500` (light) |

Critical rule: the base layer must always be **visibly darker** than the face layer. Using `neutral-900` as the base in dark mode was a known bug (base matched background, making depth invisible) — fixed to `neutral-600`.

#### Interactive feedback (Q&A)

| State | Border | Background |
|---|---|---|
| Correct | `#22c55e` | `#f0fdf4` (light) / `#052e16` (dark) |
| Incorrect | `#ef4444` | `#fef2f2` (light) / `#3f0c0c` (dark) |

---

## 3. Theme System

- Two themes: `light` (default) and `dark`.
- Cold start default: **light**.
- Persisted in `AsyncStorage` under key `app.theme.preference`.
- Applied via both `nativewind` `useColorScheme()` and `Appearance.setColorScheme()` to keep React Navigation and NativeWind in sync.
- Navigation theme colors are explicitly set in `App.tsx`:
  - Background/card light: `#F8F7F4` — dark: `#1A1815`
  - Text light: `#1A1815` — dark: `#F0EEE8`
  - Border light: `#E5E1D8` — dark: `#22201B`

---

## 4. Tab Bar

- Background matches page background (no elevation, no shadow).
- Border: 1px top, `neutral-200` light / `neutral-800` dark.
- Active icon + label: `neutral-100` dark / `neutral-900` light — **neutral only, no accent color**.
- Inactive icon + label: `neutral-700` dark / `neutral-400` light.
- Label font: `Lexend_500Medium`, 12px.
- Icons: Ionicons, filled when active, outline when inactive.

The tab bar is intentionally neutral. Volume accent colors do not bleed into the global chrome.

---

## 5. Typography

### Font Families

| Token | Font | NativeWind class |
|---|---|---|
| English regular | `Lexend_400Regular` | `font-english` |
| English medium | `Lexend_500Medium` | `font-english-medium` |
| English semibold | `Lexend_600SemiBold` | `font-english-semibold` |
| Arabic regular | `NotoSansArabic_400Regular` | `font-arabic` |
| Arabic medium | `NotoSansArabic_500Medium` | `font-arabic-medium` |
| Arabic semibold | `NotoSansArabic_600SemiBold` | `font-arabic-semibold` |

### Type Scale

| Token | Size / Line height | Tracking | Use |
|---|---|---|---|
| `text-display` | 34 / 40 | -0.4 | Screen titles |
| `text-h1` | 28 / 34 | -0.2 | Section headers |
| `text-h2` | 22 / 28 | -0.1 | Card titles, volume names |
| `text-body` | 16 / 26 | — | Primary body copy |
| `text-body-sm` | 14 / 22 | — | Supporting text, subtitles |
| `text-caption` | 12 / 18 | — | Labels, badges, metadata |
| `text-arabic-display` | 44 / 60 | — | Large Arabic (vocabulary cards) |
| `text-arabic-body` | 18 / 34 | — | Arabic sentences, examples |

Arabic text always uses `textAlign: 'right'` and `writingDirection: 'rtl'`.

---

## 6. Language Policy

The app is **English-first**. All UI strings, instruction text, labels, and component copy must be in English only.

- The `VocabWord` schema has an optional `bn` field for future multilingual support — it is stored in data but **never rendered**.
- `TarkeebItem.sentenceBn`, `IdafahPair.baseBn/expandedBn` are optional and not rendered.
- When adding new content or components, use English only. Other languages will be added as a separate feature pass.
- `IdafahPair` uses `baseEn` / `expandedEn` as the primary English label fields.

---

## 7. Spacing & Layout

- Page horizontal padding: `24px` (`px-6`)
- Card padding: `16–20px`
- Section vertical gap: `12–20px`
- Preferred border radius: `rounded-xl` (12) and `rounded-2xl` (16)
- Circular node diameter: `72px` (lesson path), `64px` (chunk orbit)
- Vertical spacing between path nodes: `28px`

---

## 8. Component Patterns

### Volume Screen (learning path)

All three volume screens (`VolumeOneScreen`, `VolumeTwoScreen`, `VolumeThreeScreen`) share the same layout pattern:

- Winding snake path using a `WAVE` array `[0.27, 0.40, 0.56, 0.73, 0.56, 0.40]` for horizontal positions.
- Each node is a 3D push button (two-layer circle, no absolute positioning in the row flow).
- Chapter banners between lesson groups.
- Completion footer at the bottom.
- No back button — navigation handled by OS gesture / React Navigation stack.
- Volume title uses the volume's accent color. Everything else uses neutral.

### Home Screen

- All volume cards use identical neutral styling (`neutral-100` bg, `neutral-200` border).
- Available volumes: tappable `Pressable`, full neutral text.
- Locked volumes: non-interactive `View`, muted text + lock icon.
- No accent colors on the home screen.

### Chunk Engine (ChunkEngineScreen)

- Progress bar at top: fills 0–100% driven by child `onProgress` callbacks.
- Scroll-aware completion for read-only views (grammar, application, paragraph): fires `onComplete` when user scrolls within 80px of bottom.
- Interactive views (vocabulary, Q&A) fire `onComplete` when the user finishes the last item.
- CONTINUE button hidden until `onComplete` fires.
- No heart icon. Percentage label beside progress bar.

### Pedagogy Views

| View | Completion trigger |
|---|---|
| `VocabularyView` | User reaches last card and taps Finish |
| `GrammarRuleView` | Scroll to bottom |
| `ApplicationView` | Scroll to bottom |
| `QAndAView` | Last question answered |
| `TarkeebView` | Scroll to bottom |
| `VerbTableView` | Scroll to bottom |
| `IdafahDrillView` | All pairs revealed |
| `ParagraphView` | Scroll to bottom |

Translation reveal in `ParagraphView`: hidden by default, full-width button to reveal/hide, shown in a neutral bordered panel.

### Cards (general)

Standard card shell:
- Light: `border border-neutral-200 bg-neutral-100 rounded-2xl`
- Dark: `dark:border-neutral-700 dark:bg-neutral-800`

Primary emphasis card:
- Light: `border border-primary-200 bg-primary-50`
- Dark: `dark:border-primary-700 dark:bg-primary-900/30`

---

## 9. Android Reliability Rules

- Never put visual styles (backgroundColor, borderRadius) directly on a `Pressable` with a function-style `style` prop — they don't reliably apply on Android.
- Pattern: `Pressable` handles touch, inner `View` carries all visual styles.
- For press-depth animation: outer `MotiView` for entrance animation, inner `View` layers for the two-layer cylinder effect.
- Validate any new interactive component on Android before merging.

---

## 10. What Not To Do

- No soft drop shadows or glow effects anywhere.
- No accent colors on the home screen or tab bar.
- No Bengali or mixed-language strings in UI copy, instructions, or component labels.
- No new brand color families — use the existing neutral + per-volume accent system.
- Do not add `bn` rendering to any component — the field exists in data only for future use.
- Do not use `position: absolute` for lesson path node layout — use padding + row-reverse instead.

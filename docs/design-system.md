# Quranic Arabic App Design System (Current Implementation)

This document reflects the app as currently implemented in code.

## 1) Scope + Architecture

- Styling is a **hybrid system**:
  - **NativeWind className** in primary app shell and core screens (`Home`, `Settings`, `ScreenContent`, parts of pedagogy like `ParagraphView`).
  - **Inline style objects with token map `C`** in interaction-heavy learning screens (`VolumeOne`, `Lesson`, `ChunkEngine`, several pedagogy views).
- Source of truth files:
  - Token/typography definitions: `tailwind.config.js`
  - App-level theme + nav colors: `App.tsx`
  - Core screen patterns: `screens/HomeScreen.tsx`, `screens/SettingsScreen.tsx`
  - Learning flow patterns: `screens/VolumeOneScreen.tsx`, `screens/LessonScreen.tsx`, `screens/ChunkEngineScreen.tsx`

## 2) Color System (Authoritative Tokens)

Use only these palette families for UI surfaces and text.

### Primary (emerald-teal)

- `primary-50`  `#ECFDF8`
- `primary-100` `#D1FAEF`
- `primary-200` `#A7F3DE`
- `primary-300` `#6EE7C8`
- `primary-400` `#34D3AA`
- `primary-500` `#16B78E`
- `primary-600` `#0F9373`
- `primary-700` `#0D775F`
- `primary-800` `#0F5F4D`
- `primary-900` `#124E41`

> Note: some inline `C` maps in learning screens still define `primary900` as `#0A4134` for depth effects in circular controls. This is a known local divergence from Tailwind token `primary-900`.

### Neutral (warm manuscript gray)

- `neutral-50`  `#F8F7F4`
- `neutral-100` `#F0EEE8`
- `neutral-200` `#E5E1D8`
- `neutral-300` `#D5CEBF`
- `neutral-400` `#B9AF9C`
- `neutral-500` `#9A8F7B`
- `neutral-600` `#7D7463`
- `neutral-700` `#4F4A40`
- `neutral-800` `#22201B`
- `neutral-900` `#1A1815`
- `neutral-950` `#0D0C0A`

### Status (reserved)

- `status.success` `#2E7D32`
- `status.warning` `#C77D00`
- `status.danger`  `#C62828`
- `status.info`    `#1565C0`

## 3) Theme Behavior

- Two themes: `light` and `dark`.
- Default on cold start: **light**.
- Theme preference is persisted in AsyncStorage under `app.theme.preference`.
- Theme is applied through both:
  - NativeWind `useColorScheme()` / `dark:` variants.
  - React Native `Appearance.setColorScheme()` override.
- Navigation theme is explicitly synchronized in `App.tsx`:
  - Light background/card: `#F8F7F4`
  - Dark background/card: `#1A1815`

## 4) Typography Scale (from Tailwind)

### Font families

- English regular: `Lexend_400Regular` (`font-english`)
- English medium: `Lexend_500Medium` (`font-english-medium`)
- English semibold: `Lexend_600SemiBold` (`font-english-semibold`)
- Arabic regular: `NotoSansArabic_400Regular` (`font-arabic`)
- Arabic medium: `NotoSansArabic_500Medium` (`font-arabic-medium`)
- Arabic semibold: `NotoSansArabic_600SemiBold` (`font-arabic-semibold`)

### Type tokens

- `text-display`: `34 / 40`, tracking `-0.4`
- `text-h1`: `28 / 34`, tracking `-0.2`
- `text-h2`: `22 / 28`, tracking `-0.1`
- `text-body`: `16 / 26`
- `text-body-sm`: `14 / 22`
- `text-caption`: `12 / 18`
- `text-arabic-display`: `44 / 60`
- `text-arabic-body`: `18 / 34`

## 5) Surface, Radius, and Layout Patterns

- Preferred radius values in use:
  - `rounded-xl` (12)
  - `rounded-2xl` (16)
  - Circular controls for lesson/chunk nodes
- Common card shell (used broadly):
  - Light: `border-neutral-200 bg-neutral-100`
  - Dark:  `dark:border-neutral-700 dark:bg-neutral-800`
- Primary emphasis card/button shell:
  - Light: `border-primary-200 bg-primary-50`
  - Dark:  `dark:border-primary-700 dark:bg-primary-900/30`
- Spacing rhythm most used in screens:
  - page horizontal padding: `24` (`px-6`)
  - vertical section gap: `12-20`
  - card padding: `16-20`

## 6) Interaction + Component Rules

### Buttons / Press Targets

- Minimum practical touch height in current app patterns: `48+`.
- Prominent action buttons are **full width** with rounded corners and border/fill contrast.
- Avoid tiny chip-style actions for primary study flow actions.

### Reading/Learning Cards

- Arabic content prioritizes right alignment and generous line height.
- English supporting text uses body/body-sm sizes with breathable leading.
- Translation reveal pattern (current `ParagraphView`):
  - Hidden by default.
  - Full-width reveal/hide button.
  - Translation appears in neutral bordered panel (no vertical accent rule).

### Depth + Shadows

- Global rule remains: no soft drop-shadows/glow-driven UI.
- Existing exception: lesson/chunk circular nodes implement **structural press depth** using layered shapes (not blurred shadow effects).
- For new components, prefer border + tone contrast first.

## 7) Android Reliability Notes (Current Constraint)

- In interactive circular controls, `Pressable` function-style visual rendering has been inconsistent on Android for some style properties.
- Stable pattern used in current implementation:
  - Keep touch handling on `Pressable` / `TouchableOpacity`.
  - Render critical circle visuals on nested plain `View` layers.
- If a control must animate press-depth, validate on Android before merging.

## 8) Usage Guidance for Future Work

- For standard screens/components:
  - Prefer NativeWind tokens/classes (`bg-neutral-50 dark:bg-neutral-900`, etc.).
- For complex animated/geometry-heavy layouts:
  - Inline styles with the shared token map are acceptable.
- Keep all new visuals within the existing token families and typography scale.
- Do not introduce new brand colors, shadow systems, or decorative effects.

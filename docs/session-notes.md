# Session Notes (Short)

Purpose: quick context for future LLM sessions.

## 2026-04-25

### Implemented
- Added two-color design system (`primary`, `neutral`) + status colors.
- Added custom fonts: Lexend (English), Noto Sans Arabic (Arabic).
- Added bottom tabs: Home + Settings.
- Moved theme controls to Settings with detailed cards.
- Added dark/light persistence via AsyncStorage.
- Added Home volume flow:
  - Volume 1 (enabled) -> blank Volume 1 screen
  - Volume 2/3 locked
- Kept bottom tab bar visible across Home stack screens.

### Issues Faced
- Expo sometimes launched in dev-client mode unexpectedly.
- Remote update download error on phone (`java.io.IOException`).
- Expo package compatibility warnings (font/gesture/screens/async-storage versions).
- Dark theme initially blinked/reset to light (forced light on mount).
- Dark mode background appeared white on Home due to navigation/scene background defaults.
- Some screens initially lacked scrolling.

### Fixes Applied
- Forced Expo Go scripts; added tunnel-based default scripts.
- Aligned package versions to Expo 54 expectations.
- Persisted theme and removed forced light reset.
- Set explicit navigation + scene dark/light backgrounds.
- Added ScrollView where needed.
- Grouped work into clean feature-based commits.

### Current Status
- Lint clean.
- Git history organized into scoped commits.

---

## 2026-04-25 (Session 2) — Learning Path (VolumeOneScreen)

### Goal
Build a Duolingo-style winding learning path for Volume 1: 3 chapters, 20 lessons, lesson numbering resetting to 1 per chapter.

### Implemented
- `VolumeOneScreen` rebuilt as a snake-path: nodes at alternating horizontal positions, chapter banners, "Start Here" badge, completion footer.
- `LessonScreen` (blank placeholder) with a custom back-button header.
- `HomeNavigator` updated with typed `HomeStackParamList`; lesson tap navigates to `LessonScreen`.
- Lesson numbering resets to 1 per chapter (matches book structure).

### Struggle Log (critical for future sessions)
1. **Connector lines removed** — straight/diagonal lines between offset nodes looked wrong. Removed entirely; spacing alone creates the path feel.
2. **Absolute-positioned container collapsed** — placing all nodes `position: absolute` inside one tall container caused React Native to collapse it. Fix: give each lesson its own fixed-height `View` in normal flow, node absolute inside only that row.
3. **Horizontal bar bug** — even with per-row Views, nodes appeared as a horizontal strip. Root cause: `position: absolute` inside a flex-row row conflicted with the parent flow. Fix: switch to `paddingLeft` / `paddingRight` + `flexDirection: row-reverse` to push nodes horizontally — zero absolute positioning.
4. **Circles not rendering on Android** — `Pressable` with a function-style prop (`style={({ pressed }) => ...}`) does **not** reliably apply `backgroundColor` or `borderRadius` on Android/Expo. Fix: use `TouchableOpacity` wrapping a plain inner `<View>` for all circle visuals. This is the correct Android-safe pattern.
5. **Locks invisible** — `neutral200` background on `neutral50` screen is nearly identical beige. Fix: bump locked nodes to `neutral300` bg + `neutral500` border.
6. **Path not centered** — WAVE values `[0.04…0.76]` are asymmetric. Fix: use symmetric values where `min + max = 1.0` (e.g. `[0.27, 0.40, 0.56, 0.73, 0.56, 0.40]`) so left and right margins are always equal.
7. **Dark Mode lost during inline style refactor** — NativeWind `className` usage was heavily stripped out because it caused issues with `Pressable` on Android. This inherently broke dark mode. Fix: Instead of rewriting DOM structures to accept `className` again alongside `TouchableOpacity/View/MotiView`, we explicitly extracted `const { colorScheme } = useColorScheme()` from `nativewind` and passed `isDark` to dynamically choose inline hex colours. Highly resilient fix.
8. **SafeAreaView Deprecation Warning** — Started getting `SafeAreaView has been deprecated...` warning. Found that our app is correctly using `react-native-safe-area-context`. The warning is emerging from an older 3rd-party library (like navigation or gesture internals) referencing standard React Native `SafeAreaView`. Safe to ignore.

### Animation Stack
- Installed `moti` and `lottie-react-native`.
- Added a continuous `scale` loop on the "Start Here" badge.
- Pushed staggered entrance animations on the `LessonRow` circular nodes using standard spring physics via Moti. Reanimated worklets are fully functional without any babel config problems since it was already wired up.

### Current Status
- `VolumeOneScreen`, `LessonScreen`, `HomeNavigator` all TypeScript + ESLint clean.
- Winding path centered, nodes render as proper circles, navigation wired.
- Dark mode works perfectly using inline conditionals.
- Animations actively firing.

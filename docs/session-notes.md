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

### Animation & Interactive Stack Updates
- **3D Push Buttons (Pill Cylinder Logic):** Designed away from the "offset overlapping circles" that produced unrealistic crescent drops. Instead, dynamically mapped the shadow layer on both screens to physically extend vertically as a solid pill column bounding down to the base coordinate, stretching flat structural walls. Pressing physically suppresses the cylinder height instead of purely sliding the face layer avoiding all exposed seams. True solid 3D.
- **Unified Color Contrasts:** Re-calibrated token sets mapping shadow bases. Previously completed states broke optical limits by presenting lighter bases than their faces. Restored strict rule mapping ensuring shadows cast down purely darker values (`Face: primary500` -> `Base: primary700`), dropping the rogue mint colors entirely so completed buttons flawlessly copy current elements distinct only by iconography.
- **Nested Layout Condensation (`LessonScreen.tsx`):** Ripped out the obtrusive center graphic animation entirely, and crushed the underlying `RADIUS` property back to `70px`. This pulled the entire nested lesson selection wheel securely into a massive consolidated cluster without spatial isolation.
- **Circular Math Layout (`LessonScreen.tsx`):** Arranged dynamic sub-lessons radically around a central coordinate using standard trig (`Math.sin`/`Math.cos`), generating geometric shapes instantly based on array length.
- **Tighter Moti Physics:** Bumped underlying spring physics globally (`stiffness: 250`, `damping: 20`) to eradicate loose floppiness. Nodes now pop in with swift snapping.
- **Removed Radial Explosions:** On `LessonScreen`, the initial Moti wrapper scaled *and* translated outwards radially. Changed this so the nodes sit statically at their computed trig coordinates, and simply scale/fade in exactly like `VolumeOneScreen`.

### Current Status
- `VolumeOneScreen`, `LessonScreen`, `HomeNavigator` all TypeScript + ESLint clean.
- Winding path centered, nodes render as true 3D interactive push buttons, navigation wired.
- Dark mode works perfectly using inline conditionals.
- Animations actively firing with strict responsive bounds.

---

## 2026-04-26 — Real Data Migration (Curriculum Integration)

### Goal
Replace mocked UI chunking (`numChunks = (darsNumber % 4) + 3`) with actual pedagogical lesson chunks derived from the NotebookLM analysis of the textbook "Let's Learn Arabic".

### Implemented
- Scaffolded data layer `data/curriculum.ts` containing structurally typed curriculum definitions (`Chunk`, `Lesson`, `Chapter`).
- Mapped Chapter 1, Lesson 1 correctly into 10 explicit learning chunks (Vocabulary, Grammar Rules, Interrogatives, etc.).

### Current State
- `VolumeOneScreen` and `LessonScreen` now consume `curriculum.ts` instead of using math-based mock generation.
- Lesson 1 dynamically generates 10 orbiting nodes correctly.
- Application logic is ready for further gamification iteration and progression persistence.

---

## Technical Future Plan: Interactive Pedagogical Engine

### The Problem
Pressing a chunk in `LessonScreen` currently does nothing. Each chunk requires a specific interactive UI format (Flashcards, Image selections, Fill-in-the-blanks).

### Engine Architecture
Instead of hardcoding a custom screen per lesson, we will deploy a universal `ChunkEngineScreen`. This central component will parse the `chunk.type` and render universal sub-components tailored to the exact pedagogy:

1. **`VocabularyView`**: Renders nouns (e.g., *kitabun*) alongside translated images. Tap to flip/reveal.
2. **`GrammarRuleView`**: Presents structural rules (e.g., demonstrative pronouns) in highlighted tooltip cards.
3. **`ApplicationView`**: Combines images and vocabulary to reinforce proximity/gender rules.
4. **`QAndAView`**: Evaluates interrogative setups (e.g. *What is this?*) prompting active user input or multiple choice.

The payload structure inside `data/curriculum.ts` will drive these templates purely by typed JSON payloads.

---

## 2026-04-26 (Session 3) — Chapter 1 Data Expansion (Lessons 6–9)

### Goal
Continue the interrupted NotebookLM ingestion flow and complete Chapter 1 lesson content coverage for MVP.

### Implemented
- Resumed extraction from NotebookLM (`Let's Learn Arabic`) lesson-by-lesson after previous session stopped during Lesson 6.
- Confirmed lesson source files exist under `/tmp` for `lesson1.txt` through `lesson9.txt`.
- Populated `data/curriculum.ts` for Chapter 1 Lessons **6, 7, 8, 9** with structured chunk payloads matching current engine types:
  - `vocabulary`
  - `grammar_rule`
  - `application`
  - `q_and_a`
  - `assessment`
- Preserved Arabic text with diacritics and included transliteration/Bengali where applicable to align with the teaching style.

### Data Modeling Decisions
- Kept the existing typed schema (`ChunkPayload`) unchanged to avoid engine breakage.
- Represented long reading blocks as `application.items` to enable scroll-based completion behavior in `ChunkEngineScreen`.
- Represented comprehension sections as `q_and_a`/`assessment` to reuse interactive question flow.
- Prioritized faithful pedagogical sequencing over adding new component types (MVP constraint).

### Current Status
- Chapter 1 now has lesson data for `darsNumber` 1 through 9 (no empty lesson placeholders in Chapter 1).
- File-level diagnostics for updated curriculum are clean.

### Fidelity Pass Delta (same session)
- Expanded Lesson 6 with missing long-form sections:
  - descriptive reading block (village/city comparisons)
  - Islamic context reading block
  - additional comprehension assessment chunk
- Expanded Lesson 9 with additional assessment chunk so comprehension coverage better reflects source text.
- Result: curriculum is now closer to full-book sequencing for Chapter 1 MVP while still using existing engine components.

### Source Storage Update
- Moved NotebookLM extraction workflow away from `/tmp` (ephemeral) to tracked project files.
- Canonical source location for Chapter 1 extracts:
  - `docs/notebooklm/chapter-1/lesson2.md` ... `lesson9.md`
  - existing `docs/notebooklm/chapter-1/lesson1.txt`
- This prevents data loss across sessions and gives future LLM sessions stable source references.

### Next Recommended Step
- Run in-app pass for Lesson 6–9 chunk-by-chunk to catch text-level fidelity issues (minor transliteration/wording adjustments) before moving to Chapter 2.

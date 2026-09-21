# Project Status, Invariants, and User Preferences

> **Purpose**: This persistent document serves as the single source of truth for project status, pedagogical invariants, design system mandates, and user preferences established across all sessions. Any AI agent or developer starting a new session MUST review this document to maintain strict continuity without requiring the user to repeat requirements.

---

## 1. Executive Summary & Core Rules

1. **Zero Em Dash Policy**: Never use the em dash character. Always use the plain dash "-".
2. **Git Safety & User Control**: Never execute `git add`, `git commit`, `git merge`, or `git push` without explicit user validation and consent.
3. **No Sycophancy**: Do NOT act as a yes-man. Call out flawed ideas, bad code, or pedagogical anti-patterns directly with sound rationale.
4. **Server Safety**: Never kill or terminate the background herdr server.
5. **Quality over Development Cost**: Always prefer simplicity, robustness, scalability, and long-term maintainability over quick shortcuts.

---

## 2. Curriculum Implementation Matrix

| Level / Unit | Lessons | Status | Implementation Notes |
| :--- | :--- | :--- | :--- |
| **Volume 1 (Book 1)** | Lessons 1 - 23 | **Complete** | All 23 lessons implemented with interactive sessions, audio, and bilingual support. |
| **Volume 2 Ch 1** | Lessons 1 - 12 | **Complete** | Verb conjugation, Sarf patterns, Masdar Factory, Hamzah rules, dual/plural paradigms. |
| **Volume 2 Ch 1** | Lessons 13 - 22 | **Pending (Locked)** | Stepping stones locked with `<Lock />` icon. Clicks disabled. Prevents accidental fallback to Lesson 1. |
| **Volume 2 Ch 2** | Lessons 1 - 15 | **Pending (Locked)** | Stepping stones locked with `<Lock />` icon. Clicks disabled. |
| **Volume 2 Ch 3** | Lessons 1 - 15 | **Pending (Locked)** | Stepping stones locked with `<Lock />` icon. Clicks disabled. |
| **Volume 3 (Book 3)** | All Chapters | **Pending (Locked)** | Stepping stones locked with `<Lock />` icon. Clicks disabled. |

### Locked Lessons Behavioral Invariants
- Unimplemented curriculum units MUST render a **Lock icon** instead of a lesson number.
- Stepping stone buttons MUST be strictly disabled (`disabled={!isImplemented}`, `cursor-not-allowed`) with tactile press translation suppressed.
- The active curriculum beacon (`START` / `CURRENT`) must **only** target implemented, uncompleted lessons; never point to a locked unit.
- Direct navigation fallbacks to Lesson 1 are strictly removed; locked units render a clean "Coming Soon" screen with a Lock icon.

---

## 3. Pedagogical Rules & Lesson Architecture

### A. The Single Action Principle
- Multi-step interactive drills (such as Verb Conjugation sequences, Masdar Factory, and Cloze exercises) must provide exactly **ONE** primary 56px (`h-14`) action button at the bottom of the card.
- **NEVER** provide competing navigation buttons (e.g. "Next Verb" alongside "Continue").
- On intermediate steps, the button advances the sequence (e.g. "Next Masdar", "Next Verb").
- On the final step, the button completes the card (e.g. "Continue").

### B. Anti-Cheating & Active Interaction
- **Zero "Reveal All" Buttons**: Never provide a reveal-all or skip exploit on learning cards.
- Multi-step drills must require student interaction (e.g. selecting the correct present tense pattern chip) before the advance button activates.
- If the user has not solved the challenge, the 56px button remains disabled with instructive text (e.g. "Select the Present Tense to Continue").

### C. Sarf & Bab Pedagogy (Why Bab Matters)
- Never introduce a verb group or Bab without explaining its grammatical function.
- In Arabic morphology (Sarf), the 4 base families (Abwaab) govern how the middle root vowel (`عَيْنُ الفِعْلِ`) shifts between Past and Present (`a -> a`, `a -> u`, `a -> i`, `i -> a`).
- Imperative (`الأَمْر`) and Prohibition (`النَّهْي`) derive directly from the Present tense (`المُضَارِعُ`).
- Demonstrate this mechanism interactively before presenting derivative forms.

### D. Single Cognitive Focus (Separation of Commands & Prohibitions)
- Commands (`الأَمْر`) and Prohibitions (`النَّهْي`) MUST always be delivered as **two separate, sequential micro-steps**.
- Never cram affirmative and negative directives into dual-form rows on a single card.
- Step 1: Affirmative Command (`الأَمْر`), practice with interactive blanks.
- Step 2: Negative Prohibition (`النَّهْي`), practice with interactive blanks.

### E. Verb Conjugator Standards
- **Explicit Tense Pill**: Always display the active tense (e.g. `PAST TENSE · المَاضِي`, `PRESENT TENSE · المُضَارِعُ`).
- **Concrete Meanings**: Always display concrete 3rd-person past meaning ("He did" / "সে করল"), never raw citation infinitives ("To do").
- **Hero Synchronization**: The hero Arabic word and audio must match the active tense (`getRootVerbArabic`: `خَرَجَ` for past, `يَخْرُجُ` for present, `اُخْرُجْ` for imperative).
- **Clean Paradigm Rows**: Exactly 3 elements: rounded pronoun badge (`[ هُوَ ]`) + single bold concrete meaning + inflected Arabic form (or interactive blank).
- **Zero Developer Badges**: Never render developer role pills (`Model · النموذج`, `Practice · التَّمْرِين`) or abstract Sarf classification badges (`بَاب فَتَحَ يَفْتَحُ`).
- **Zero Subtitle Bloat**: Do not add redundant explanatory paragraphs under hero cards; keep cards clean and focused.
- **Shuffled Options**: Always randomize word chip options using Fisher-Yates shuffling memoized with `useMemo`.

### F. Exercise Anti-Patterns & Leakage Prevention
- **Zero Solution Leakage in Sentence Assembly**: Never include `promptAr` in `sentence_assembly`. Only provide `promptEn` / `promptBn` so the learner constructs Arabic from scratch.
- **Clean Cloze Blanks**: In `cloze_choice`, never put target words or bracketed placeholders (`[···]`) in `partialAnswerAr`. Always use clean ellipsis `...`.
- **Zero Static Translations on Reading Passages**: In `alternative_qa`, never include `contextEn` or `contextBn`. The learner must read the Arabic text directly.
- **Strict Textbook Fidelity**: Transcribe textbook passages verbatim; never omit sentences or invent dialogue.
- **Zero Screen Duplication**: Never repeat the exact same sentence 2-3 times across instructions, questions, and prompts on a single card.

---

## 4. Arabic Audio Standards & Neural TTS Pipeline

### A. Male Neural Voice Standard
- All core Arabic lesson audio must be synthesized using high-fidelity male neural TTS:
  - **Voice Model**: `ar-XA-Wavenet-B` (or Google Cloud Text-to-Speech male neural equivalent).
  - **Pitch**: `0.0`
  - **Speaking Rate**: `0.88`
- Female voices (such as `ar-XA-Wavenet-A` or Zariyah) are strictly prohibited for core lesson audio.

### B. Wasl Continuation Trimming for Full Case Endings (I'rab)
- **Problem**: Passing isolated Arabic words to TTS engines triggers pausal stop (Waqf) rules, eliding final short vowels and tanwin (e.g. producing `yakhruj` instead of `yakhruju`).
- **Solution**: Always append an unstressed Wasl continuation token (` نَعَمْ`) to the synthesis string.
- **Trimming**: Use `WordBoundary` timestamps to identify the exact end of the target word. Slice the audio at that boundary using `ffmpeg` with a 30ms fade-out curve, ensuring 100% of the case ending is audible with 0% of the continuation token.

---

## 5. Design System Mandates (Raw Neutral)

### A. Zero 1px Borders & Zero Shadows
- Depth is 100% luminance-based.
- Outlines, 1px solid borders, and box shadows (`shadow-*`) are strictly prohibited across all UI components.
- Dashed borders are permitted ONLY on empty assembly drop target slots.

### B. Designated Color Tokens Only
- Raw hex codes (`#...`, `bg-[#...]`) and ad-hoc Tailwind colors (`bg-blue-600`, `text-green-500`) are prohibited.
- Strictly use designated tokens:
  - Backgrounds: `bg-neutral-50`, `bg-neutral-100`, `bg-neutral-200`, `bg-accent-primary`, `bg-accent-primary-subtle`
  - Text: `text-neutral-900`, `text-neutral-700`, `text-neutral-500`, `text-accent-primary`
  - State indicators: `bg-emerald-500/15 text-emerald-700`, `bg-rose-500/15 text-rose-700`

### C. Touch Target & Geometric Standards
- Primary action buttons: Minimum height of 56px (`h-14`).
- Corner Radii Hierarchy: Strictly adhere to the 5-tier system (`rounded-4xl`, `rounded-3xl`, `rounded-2xl`, `rounded-xl`, `rounded-full`).

### D. Arabic Typography
- Strictly `tracking-normal` (zero letter-spacing on Arabic cursive script).
- Vertical clearance: `leading-relaxed` or `leading-loose` to prevent vowel clash.

---

## 6. Internationalization & Script Purity

### A. Strict Script Isolation
- **English Mode (`en`)**: English and Arabic ONLY. Never allow Bengali words or script to leak.
- **Bengali Mode (`bn`)**: Bengali and Arabic ONLY. Never allow English words or Latin script to leak.
- Verify both languages visually and programmatically before finalizing any feature.

### B. Arabic Tashkeel Fidelity
- Every Arabic word in curriculum data must have complete, verified Harakat.
- Never drop grammatical vowel endings or guess vowels.

---

## 7. Feature Backlog (Pending Implementation)

1. **Paragraph Composition & Translation Practice**:
   - Interactive paragraph-level translation drilling with word alignment.
   - Source: Teammate branch `Paragraph-Composition` (requires normalization, see Section 8).
2. **Spaced Repetition Retention Engine Integration**:
   - Wire `RetentionStore` directly into the `LessonSessionRunner` completion lifecycle for automated SRS scheduling.
3. **Audio Caching & Offline Storage**:
   - Cache downloaded MP3s in local device storage for mobile app offline resilience.
4. **End-of-Chapter Checkpoint Exams**:
   - Comprehensive multi-stage review checkpoints after completing all lessons in each chapter.

---

## 8. Teammate Branch (`Paragraph-Composition`) Audit & Integration Plan

### A. Branch Overview
- **Branch Name**: `origin/Paragraph-Composition`
- **Merge Base**: `44d0e71`
- **Commit**: `82c02b9465e84e7f8ed418f825ccbdcc43f90bf7`
- **Author**: `Saad0110meh <sajid589karim@gmail.com>`
- **Core Feature**: Interactive paragraph composition and translation drilling for Volume 1 Lessons 1 - 9.

### B. Assets to Retain
- High-pedagogy exercise concept: drilling paragraph-level comprehension with inline blanks and word chips.
- Word-level mapping schema between Arabic text tokens and English translation tokens.

### C. Bloatware & Invariant Violations to Refactor
1. **Design System Violations**:
   - Contains 1px solid borders (`border border-neutral-200/60`, `border border-neutral-100`).
   - Contains arbitrary drop shadows (`shadow-[0_8px_30px_rgb(0,0,0,0.12)]`, `shadow-sm`).
2. **Legacy / Hardcoded Color Classes**:
   - Uses obsolete classes: `bg-primary-50`, `focus:ring-primary-500`, `border-primary-500`, `border-red-300`, `text-red-900`.
3. **Missing Tashkeel (Severe Invariant Failure)**:
   - Arabic text in `practice-data.ts` is completely unvowelled (e.g. `هذا بيت كبير` instead of `هَٰذَا بَيْتٌ كَبِيرٌ`).
4. **Missing Bengali Support**:
   - Purely English-only; zero Bengali translation fields (`bnClean`, `bnSentence`).
5. **Dependency Bloat**:
   - Added `canvas-confetti` and `react-tooltip` (with extra CSS), resulting in 2,500 lines of `pnpm-lock.yaml` churn. Tooltips and celebrations should use lightweight internal components without external packages.
6. **Isolated Routing**:
   - Built as a disconnected route `/practice/$volumeId/$lessonId` instead of an integrated chunk type inside the unified `LessonSessionRunner`.

### D. Safe Integration Procedure (Preserving Teammate Attribution)
To ensure `Saad0110meh` remains properly credited on the GitHub contributor graph without introducing bloat into production:
1. **Step 1 (Merge Commit)**: Execute a non-fast-forward merge (`git merge --no-ff Paragraph-Composition`) to preserve commit `82c02b9` in git history with Saad0110meh as author.
2. **Step 2 (Normalization & Cleanup Commit)**:
   - Remove unused external packages (`canvas-confetti`, `react-tooltip`) and restore clean `pnpm-lock.yaml`.
   - Add full, accurate Tashkeel to all Arabic sentences in `practice-data.ts`.
   - Add complete Bengali translations for strict script isolation.
   - Refactor UI components to strictly adhere to Raw Neutral design tokens (zero 1px borders, zero shadows, luminance depth, 56px action button).
   - Integrate paragraph composition into the shared lesson runner chunk registry.
3. **Explicit Consent Rule**: No git merge or commit commands will be executed until explicitly approved by the user.

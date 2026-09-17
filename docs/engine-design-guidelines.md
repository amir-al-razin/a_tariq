# Pedagogical Implementation Principles (V2 Curriculum Protocol)

This document serves as the authoritative "North Star" and Anti-Regression Protocol for all curriculum engines, lessons, and interactive modules built for the Esho Arbi Shikhi curriculum. Whenever spinning up an AI agent or developer to implement a new lesson or modify an existing one, strictly adhere to these rules without exception.

## 1. Absolute Fidelity to the Book
- **100% Content Extraction:** Ensure 100% extraction of textbook content without skipping any words, sentences, or dialogue lines. Always verify against physical textbook page images before completing an engine.
- **No Hallucinations or Additions:** Do not add extra exercises, alter the Arabic text, or invent new structural components unless explicitly directed.
- **Strict Component Integrity:** Rely solely on approved, existing pedagogical components (e.g., `VocabGrid`, `VocabularyFlashcard`, `InteractiveDrill`, `WordChipExercise`). Never invent ad-hoc components, wrapper layouts, or arbitrary emojis.

## 2. Pedagogical Step Sequencing & Separation of Concerns
- **Page Vocabulary Precedes Content:** Words located at the bottom of a textbook page (new vocabulary) MUST be presented in our app as a dedicated, standalone vocabulary step *before* the reading, grammar, or practice content of that page starts.
- **Separate Examples from Practice (No Mixed Steps):** Do not combine introductory format demonstrations and interactive user practice within the same step. Always split them into separate sequential steps:
  - **Familiarization Step (Examples):** When the textbook provides sentences with accompanying translations (e.g., introductory pattern examples or dialogue formats), put them in a dedicated standalone step so the learner gets familiarized with the linguistic structure.
  - **Interactive Translation & Drills:** When subsequent sentences or dialogues do NOT have translations in the textbook (e.g., student self-introductions or dialogue practice), DO NOT write static translations yourself. Instead, put them into an interactive translation component (`InteractiveDrill` / `WordChipExercise`) where the learner actively reconstructs and translates the text.

## 3. Design System Alignment & Prohibitions
- **Zero Shadow Prohibition:** It is strictly prohibited to use CSS box shadows (`shadow-*`) anywhere in our design system. Rely strictly on shape, spacing, borders, and neutral color contrast (`bg-neutral-100`, `bg-white`, `dark:bg-neutral-800`).
- **No Inline Theme Toggles:** Never create inline theme toggle buttons, local `isDark` state variables, or `useEffect` hooks that manually toggle DOM classes inside lesson engines. Theme switching is managed globally and exclusively by the navbar header.
- **Mobile-First Responsive Navigation:** All lesson engines must utilize `CurriculumHeader` and `CurriculumFooter` from the shared module (following the Vol 1 Lesson 1 design pattern):
  - Containers must use responsive flex wrapping (`flex-col sm:flex-row gap-4`) and rounded card styling (`rounded-3xl p-4`).
  - Headers must include dynamic Arabic numeral badge boxes (`١`, `٢`, `٣`...) and step title labels above the progress bar.
  - Footer navigation must provide full-width touch targets on small mobile screens (`w-full sm:w-auto px-6 py-3.5`).

## 4. Interactive Exercise Mechanics (Word Chips)
- **Automatic Fisher-Yates Shuffling:** Word chip choices (`chips`) must never appear in the static sequence of the correct answer. 
- **Memoized Randomization:** Use React memoization (`useMemo` keyed to the active question index) to randomize chips once when a question loads so they remain stable while the user interacts with them.
- **Anti-Identity Check:** Ensure the randomization logic re-shuffles if the random output accidentally matches the correct target sequence.

## 5. Pedagogical Purity & Zero Noise
- **No Extra Jargon:** Exclude internal developer nomenclature from user-facing interfaces.
- **Clean Learning Canvas:** The UI should present only the immediate learning material without meta-commentary, authors, or clutter.

## 6. Harakat & Tashkeel Scope (Full Harakat Standard)
- **Full Harakat by Default:** Arabic text across all active lessons, vocabulary steps, drills, and scripture references must always display full vowel marks (Harakat / Tashkeel), exactly matching standard printed Quran/Mushaf and printed textbooks.
- **Zero Fading Overhead:** Dynamic diacritic fading, regex stripping, and fading state machines are strictly out of scope for the current stage. Modern readers and beginning students read text with full vowel marks; stripping or fading introduces needless complexity before the interactive pedagogy and lesson session runner are solidified.
- **Future Phase Consideration:** Mimicking book diacritic fading or implementing a progressive fading engine is deferred until the core curriculum foundation, database models, and interactive drill mechanics are rock-solid.

By strictly enforcing these principles, we guarantee a premium, consistent, and architecturally robust learning experience across every lesson in the curriculum.


# Volume 1 Pedagogical Parity & Gamified Learning Plan

> **Authoritative Specification & Execution Blueprint**  
> **Target**: Esho Arbi Shikhi (دروس اللغة العربية) - Volume 1 (Chapters 1, 2, 3)  
> **Governing Design System**: Raw Neutral Minimalist Architecture (Zero Shadows, Luminance Contrast, 56px Touch Targets, Sacred Reverence)  
> **Pedagogical Target**: 100% Textbook Parity via Gamified, Bite-Sized Interactive Drills (No Walls of Text, No Translation Crutches)

---

## 1. Vision & Core Philosophy

This plan establishes a rigid, step-by-step roadmap to transform the digital implementation of *Esho Arbi Shikhi* from a superficial 8-step quiz into a world-class, gamified pedagogical engine.

### The Core Invariants:
1. **100% Textbook Data Parity**: Every single word, phrase, exercise question, dialogue exchange, and reading passage from the physical textbook pages in `resources/pages/vol1/` MUST be accounted for. Zero dropped vocabulary, zero omitted exercises.
2. **Gamified & Interactive, NOT a Static Reader**: We are NOT creating a PDF viewer or passive reading comprehension app. We are building a **tactile, interactive language training engine**. Every textbook drill is translated into an active learning mechanic (sorting, tapping, assembling, audio-first Q&A, synaptic matching, syntactic slotting).
3. **Zero Textbook Metadata Leaks in UI (Pure Learning Canvas)**: NEVER display the textbook title ("Esho Arbi Shikhi"), page numbers ("Page 15"), author references, or editorial notes anywhere in user-facing UI (titles, instructions, reflections, or badges). To the end user, this is Tariq - an immersive, sacred Arabic learning experience. All book scans and page references exist strictly for internal development tracking.

---

## 2. Gamified Step Mechanics Catalog

To ensure lessons are dynamic and engaging rather than monotonous text, the engine utilizes a suite of distinct, punchy step mechanics:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          GAMIFIED STEP MECHANICS CATALOG                               │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│ 1. [vocab_prime]         Tactile flashcards with native audio, high-contrast Harakat, │
│                          and clear visual cues. (4-6 words per chunk, no cognitive     │
│                          overload).                                                    │
│                                                                                        │
│ 2. [speed_pair]          Rapid synaptic matching game. Connects Arabic terms to        │
│                          meanings with immediate chime feedback and mistake recycling. │
│                                                                                        │
│ 3. [spatial_pointing]    Visual near vs. far discrimination. Shows illustrated objects │
│                          at varying distances. Student taps/selects the correct        │
│                          demonstrative (هٰذَا vs ذٰلِكَ / هٰذِهِ vs تِلْكَ) without English.  │
│                                                                                        │
│ 4. [alternative_qa]      Rapid-fire dialogic mini-game (أ... أم... battery). Simulates │
│                          madrasa partner drill ("দু'জন দাঁড়াও"). Punchy, spoken-style   │
│                          choice chips with instant feedback.                           │
│                                                                                        │
│ 5. [sentence_assembly]   Tactile word chip builder. Fisher-Yates shuffled chips.       │
│                          Constructs grammatically sound phrases from visual prompts.   │
│                                                                                        │
│ 6. [cloze_choice]        Targeted fill-in-the-blank with intelligent grammatical       │
│                          distractors (testing case endings and gender agreement).      │
│                                                                                        │
│ 7. [tarkib_dissector]    Interactive syntactic tree builder. Student drags or taps     │
│                          words into grammatical role slots (مبتدأ / خبر / موصوف / صفة).│
│                                                                                        │
│ 8. [story_dialogue]      Interactive dialogic narrative. Short comic-strip or chat-    │
│                          style exchanges with audio playback and student response      │
│                          completion.                                                   │
│                                                                                        │
│ 9. [quranic_echo]        Sacred milestone reflection. Connects the exact grammatical   │
│                          pattern mastered in the lesson directly to a Quranic Ayah.    │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. The 6-Step Per-Lesson Execution Protocol (AI Guardrail)

To prevent skipping content or improvising shortcuts, EVERY lesson upgrade MUST execute through this strict sequence:

```
  ┌────────────────────────────────────────────────────────┐
  │  Step 1: Physical Book Scan Audit                     │
  │  Inspect all PNG scans in resources/pages/vol1/...     │
  └───────────────────────────┬────────────────────────────┘
                              │
  ┌───────────────────────────▼────────────────────────────┐
  │  Step 2: 100% Data Extraction Inventory               │
  │  List all nouns, adjectives, Q&As, dialogues, & rules  │
  └───────────────────────────┬────────────────────────────┘
                              │
  ┌───────────────────────────▼────────────────────────────┐
  │  Step 3: Gamified Step Design (14-20 Micro-Steps)      │
  │  Sequence into bite-sized, interactive chunks          │
  └───────────────────────────┬────────────────────────────┘
                              │
  ┌───────────────────────────▼────────────────────────────┐
  │  Step 4: Design System Audit                           │
  │  Verify zero shadows, raw neutral tokens, 56px buttons │
  └───────────────────────────┬────────────────────────────┘
                              │
  ┌───────────────────────────▼────────────────────────────┐
  │  Step 5: Typecheck & Lint Verification                │
  │  Run `npx tsc --noEmit` and ensure zero errors         │
  └───────────────────────────┬────────────────────────────┘
                              │
  ┌───────────────────────────▼────────────────────────────┐
  │  Step 6: End-to-End Browser Verification               │
  │  Verify visuals, audio keys, and interaction flow      │
  └────────────────────────────────────────────────────────┘
```

---

## 4. Phase-by-Phase Implementation Roadmap

Work proceeds strictly **one lesson at a time**. Never bundle multiple lessons into a single unvalidated step.

### Phase 1: Interactive Engine Primitives & Shared Types
- [ ] **Task 1.1**: Update `lessonSessionTypes.ts` with support for `spatial_pointing`, `alternative_qa`, and `tarkib_dissector`.
- [ ] **Task 1.2**: Implement `alternative_qa` interactive step UI in `LessonSessionRunner.tsx`.
- [ ] **Task 1.3**: Implement `spatial_pointing` interactive step UI in `LessonSessionRunner.tsx`.
- [ ] **Task 1.4**: Implement `tarkib_dissector` interactive step UI in `LessonSessionRunner.tsx`.
- [ ] **Checkpoint**: Run `npx tsc --noEmit` to verify type safety across runner components.

---

### Phase 2: Volume 1 Chapter 1 Lessons (Full Parity Sprints)

#### Lesson 1: Demonstrative Pointers & Everyday Objects (Pages 15-19)
- [ ] **Scan Audit**: Inspect `resources/pages/vol1/chapter_01/lesson_01/page-015.png` to `page-019.png`.
- [ ] **Data Extraction**: Extract all 24 nouns (Masculine Block: 8, Feminine Block: 8, Mixed Block: 8), 4 demonstrative pointers (`هذا`, `ذلك`, `هذه`, `تلك`), 11 visual pointing items, and 4 question forms (`ما هذا؟`, etc.).
- [ ] **Implementation**: Refactor `lesson1Session.ts` into a complete 16-step gamified flow with dual spatial pointing and no translation crutches.
- [ ] **Validation**: `npx tsc --noEmit` and browser inspection.

#### Lesson 2: Descriptive Adjectives & Qualities (Pages 20-22)
- [ ] **Scan Audit**: Inspect `resources/pages/vol1/chapter_01/lesson_02/page-020.png` to `page-022.png`.
- [ ] **Data Extraction**: Extract 6 adjective pairs, 3 footnote nouns (`عَلَمٌ`, `مِرْوَحَةٌ`, `حَدِيقَةٌ`), 8 clothing nouns (`فِرَاشٌ`, `وِسَادَةٌ`, `قَلَنْسُوَةٌ`, `لِبَاسٌ`, `عِمَامَةٌ`, `مِنْدِيلٌ`, `حِذَاءٌ`, `قَمِيصٌ`), `نَظِيفٌ / وَسِخٌ`, and the 15-item cloze table.
- [ ] **Implementation**: Refactor `lesson2Session.ts` into a complete 16-step interactive session.
- [ ] **Validation**: `npx tsc --noEmit` and browser inspection.

#### Lesson 3: People, Personal Pronouns & Vocative (Pages 23-26)
- [ ] **Scan Audit**: Inspect `resources/pages/vol1/chapter_01/lesson_03/page-023.png` to `page-026.png`.
- [ ] **Data Extraction**: Extract 10 role nouns, 6 pronouns, diptote names, vocative `يَا`, 10 profession/status nouns, and all 35 Q&A dialogue exchanges.
- [ ] **Implementation**: Refactor `lesson3Session.ts` to include interactive dialogue mini-drills.
- [ ] **Validation**: `npx tsc --noEmit` and browser inspection.

#### Lessons 4 - 9: Progressive Parity Sprints
- [ ] **Task 2.4**: Chapter 1 Lesson 4 (Definite Article `ال` & Sun/Moon Letters, Pages 27-31).
- [ ] **Task 2.5**: Chapter 1 Lesson 5 (Possessive Pronouns / Attached Pronouns, Pages 32-35).
- [ ] **Task 2.6**: Chapter 1 Lesson 6 (Prepositions `فِي` & `عَلَى`, Pages 36-39).
- [ ] **Task 2.7**: Chapter 1 Lesson 7 (Spatial Adverbs `أَمَامَ`, `خَلْفَ`, `فَوْقَ`, `تَحْتَ`, Pages 40-42).
- [ ] **Task 2.8**: Chapter 1 Lesson 8 (Idafah / Genitive Construction, Pages 43-45).
- [ ] **Task 2.9**: Chapter 1 Lesson 9 (Demonstrative with Idafah & Comprehension, Pages 46-48).

---

### Phase 3: Volume 1 Chapter 2 Lessons (Lessons 1-8)
- [ ] **Task 3.1**: Chapter 2 Lesson 1 (Pages 50-54) - Interrogative Battery (`هل` vs `أ... أم...`).
- [ ] **Task 3.2**: Chapter 2 Lesson 2 (Pages 55-58) - Spatial Adverb Expansions (`عِنْدَ`, `مَعَ`).
- [ ] **Task 3.3**: Chapter 2 Lesson 3 (Pages 59-62) - Genitive Construction with Pronouns.
- [ ] **Task 3.4**: Chapter 2 Lesson 4 (Pages 63-70) - Interactive Tarkib Dissection & 15-line classical reading.
- [ ] **Task 3.5**: Chapter 2 Lesson 5 (Pages 71-75) - Attached Pronouns & Prepositions.
- [ ] **Task 3.6**: Chapter 2 Lesson 6 (Pages 76-80) - Dual Adjectives & Complex Sentences.
- [ ] **Task 3.7**: Chapter 2 Lesson 7 (Pages 81-84) - Conversational Dialogue Batteries.
- [ ] **Task 3.8**: Chapter 2 Lesson 8 (Pages 85-88) - Comprehensive Synthesis Drill.

---

### Phase 4: Volume 1 Chapter 3 Lessons (Lessons 1-3)
- [ ] **Task 4.1**: Chapter 3 Lesson 1 (Pages 90-94) - The Kaaba Text, 10-question comprehension drill, 22-question Q&A dialogue battery.
- [ ] **Task 4.2**: Chapter 3 Lesson 2 (Pages 95-98) - 4-step progression, definite Sifah-Mawsoof.
- [ ] **Task 4.3**: Chapter 3 Lesson 3 (Pages 99-103) - Fatima's Room & Old Village scene narrative drills.

---

## 5. Design System Compliance Checklist

Every screen and component must satisfy:
- [ ] **Zero Hardcoded Colors**: Consume only designated tokens (`bg-accent-primary`, `bg-neutral-100`, etc.).
- [ ] **Zero Box Shadows**: CSS shadows (`shadow-*`) are strictly prohibited. Depth is 100% luminance-based.
- [ ] **Touch Target Standard**: Primary action buttons must be at least 56px (`h-14`) high.
- [ ] **Arabic Typography**: `tracking-normal` with ample vertical breathing room (`leading-relaxed` or `leading-loose`).
- [ ] **Script Isolation**: Pure English in `en`, pure natural Bangla in `bn`. No mixed scripts.
- [ ] **Tashkeel Fidelity**: 100% full, accurate Harakat on all Arabic text.

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
4. **Zero Spoiled Answers & Clean Prompts**: NEVER append answers, hints, or emojis inside question prompts in parentheses (e.g., `(🤝 صَدِيقِي)` or `(🚪 مَفْتُوحٌ)`). Non-practice grammar demonstrations labeled "শুধু বোঝার জন্য, অনুশীলনের জন্য নয়" must be rendered as explanatory Syntax Contrast cards, not fake spoiled quizzes.
5. **Strictly Single-Word Chips in Sentence Assembly**: Every chip in `sentence_assembly` must be a single word (or at most an inseparable grammatical compound particle). Never place entire clauses or multi-word phrases (e.g. `"My house is old"`) on a single chip.

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

## 5. Critical Pedagogical Defects Tracker

### Defect TRACK-D01: Spoiled / Bracketed Answers in Question Prompts
- **Issue**: Non-practice demonstration tables in textbook labeled "শুধু বোঝার জন্য, অনুশীলনের জন্য নয়" (e.g., Vol 1, Ch 2, Lesson 5, p. 76) were converted into multiple-choice quizzes, and because there was no prior story context, answers were appended inside brackets in `questionAr` (e.g. `أَ صَدِيقُكَ مَاجِدٌ أَمْ صَدِيقُ خَالِدٍ ؟ (🤝 صَدِيقِي)`). Over 170 instances across Ch 2.
- **Remediation**:
  - Convert non-practice demonstrations to clean **Syntax Contrast / Model Demonstration** views (showing question, focus shift, and model answer without fake spoiled quizzes).
  - Strip all bracketed text/emojis from `questionAr` in all exercises. Where visual cues were intended, place them in dedicated UI containers (`visualCue`) or provide clear contextual premises (`contextAr`, `contextEn`, `contextBn`).
- **Tasks**:
  - [x] **D01.1**: Chapter 2 Lesson 5 - Fix Step 11 (`ch2-l5-step-11-dialogue-kinship`) and Step 12 (`ch2-l5-step-12-dialogue-friendship`) in both `apps/web/src/lib/ch2Lesson5Session.ts` and `packages/shared/sessions/ch2Lesson5Session.ts`.
  - [x] **D01.2**: Chapter 2 Lesson 4 - Fix Step 11 (`ch2-l4-step-11-choice-adjectives`) and Step 14 (`ch2-l4-step-14-dialogue-al-battery`).
  - [x] **D01.3**: Chapter 2 Lesson 2 - Fix Steps 8 and 11 (`questionAr` with `(🗝️ - صَغِيرٌ)`, etc.).
  - [x] **D01.4**: Chapter 2 Lesson 1 - Fix Step 8 (`questionAr` with `(🖊️)`, etc.).
  - [x] **D01.5**: Chapter 2 Lessons 6, 7, 8 - Sweep and fix all remaining bracketed prompts.
  - [x] **D01.6**: Chapter 1 Lessons 1, 2, 3 - Sweep and migrate all bracketed cues to `visualCue`.
  - [x] **D01.7**: Chapter 3 Lessons 1, 2, 3 - Sweep and migrate all bracketed cues to `visualCue` and contextual premises.

### Defect TRACK-D02: Multi-Word / Whole-Clause Word Chips in Sentence Assembly
- **Issue**: In `sentence_assembly` drills translating Arabic into English or Bangla, entire clauses and multi-word phrases were bundled into single chips (e.g. `'My house is old'`, `'and your house'`, `'is new'` or `'আমার বাড়ি পুরনো'`, `'এবং তোমার বাড়ি'`), pre-solving half the sentence and reducing the exercise to a trivial 3-block clicker.
- **Remediation**:
  - Decompose all multi-word assembly chips into strictly **single-word chips** (e.g., `['My', 'house', 'is', 'old', 'and', 'your', 'house', 'is', 'new']` / `['আমার', 'বাড়ি', 'পুরনো', 'এবং', 'তোমার', 'বাড়ি', 'নতুন']`).
  - Add relevant lexical distractors (single words).
- **Tasks**:
  - [x] **D02.1**: Chapter 2 Lesson 5 - Fix Step 14 (`ch2-l5-step-14-assembly-houses`), Step 15 (`ch2-l5-step-15-assembly-hair`), Step 16 (`ch2-l5-step-16-assembly-pocket`) in web and shared sessions.
  - [x] **D02.2**: Chapter 2 Lesson 4 - Fix Step 10 and Step 15 multi-word translation chips.
  - [x] **D02.3**: Chapter 2 Lesson 1 - Fix Step 10 (`ch2-l1-step-10-assembly-hal-correction`).
  - [x] **D02.4**: Chapter 2 Lessons 2, 3, 6, 7, 8 - Sweep and fix all remaining multi-word chips across all assembly drills.
  - [x] **D02.5**: Chapter 1 Lessons 3, 6, 7, 8, 9 - Sweep and decompose all multi-word assembly chips into single words in English and Bangla.
  - [x] **D02.6**: Chapter 3 Lessons 1, 2, 3 - Sweep and decompose all multi-word assembly chips into single words in English and Bangla.

---

## 6. Phase 6: Spoken Fluency, Speech Tracking & Dialogic Role Reversal ("দু'জন দাঁড়াও") Roadmap

Based on the full pedagogical audit against 102 physical textbook pages, the following capabilities are queued for post-Volume-1 implementation to bridge the gap between passive quiz completion and active spoken fluency:

### 6.1 Spoken Fluency & Speech Tracking Engine
- [ ] **Task 6.1.1 (Oral Vocalization Prompts & Audio Echo)**:
  - In `concept_intro`, `sentence_assembly`, and `reading_passage` steps, add an authoritative vocalization badge: *"উচ্চস্বরে ৩ বার পড়ুন"* / *"Read aloud 3 times before tapping Continue"*.
  - When the user finishes assembling a sentence, automatically play the complete native audio so the ear reinforces what the fingers assembled.
- [ ] **Task 6.1.2 (Browser Web Speech API & Pronunciation Scoring)**:
  - Integrate browser speech recognition (`webkitSpeechRecognition` / Web Speech API) for Arabic.
  - Implement a `speech_verification` step where the user holds a mic button and speaks the target Arabic phrase.
  - Compute phonetic similarity (Levenshtein / character distance ignoring diacritics) to provide real-time pronunciation feedback ("ممتاز", "حاول مرة أخرى").
- [ ] **Task 6.1.3 (Speech Latency & Spoken Recall Analytics)**:
  - Track "Time to First Utterance" (hesitation latency) to measure whether the learner is translating in their head or responding with natural automaticity.

### 6.2 The Dialogic Role-Reversal Engine ("দু'জন দাঁড়াও" / Asymmetric Interrogator Solution)
- [ ] **Task 6.2.1 (The Inquisitor Mini-Drill / Reverse Q&A)**:
  - In the physical textbook, students alternate roles: Student A asks the question, Student B answers.
  - Implement reverse Q&A steps:
    - Present a response: `لَا، هٰذَا قَلَمٌ` (No, this is a pen).
    - Prompt: *"Your peer answered this. What question did you ask them?"*
    - Options: `أَ هٰذَا مِرْسَامٌ؟` vs `مَا هٰذَا؟` vs `مَنْ هٰذَا؟`.
- [ ] **Task 6.2.2 (Question Assembly Drills)**:
  - Train active question formulation: give the user single-word chips to construct questions (`أَ`, `هٰذَا`, `كِتَابٌ`, `أَمْ`, `ذٰلِكَ`, `دَفْتَرٌ`, `؟`).

### 6.3 Pedagogical Onboarding & Study Cadence
- [ ] **Task 6.3.1 (Author's Preface & Study Method Orientation)**:
  - Expose Allama Abu Taher Misbah's preface ("প্রিয় তালিবে ইলম!") as an inspirational onboarding modal before Lesson 1.
  - Instruct the learner on the core method: read aloud, do not memorize dry grammar rules upfront, focus on immediate spoken usage.
- [ ] **Task 6.3.2 (The 15-Day Pledge Milestone Card)**:
  - Replicate the textbook's "তালিবে ইলমের পাক্ষিক স্বাক্ষর" (Fortnightly pledge) as a celebration card at the end of Chapter 1 and Chapter 2.

### 6.4 Layman Syntactic Framing & Verb Tasting Disclaimers
- [ ] **Task 6.4.1 (Plain-Language Subtitles in Tarkib Dissector)**:
  - In `tarkib_dissector` (Ch 2 Lesson 4), provide layman bilingual subtitles alongside Arabic technical terms:
    - `مُبْتَدَأٌ` -> The Topic / Anchor (যার সম্পর্কে বলা হচ্ছে)
    - `خَبَرٌ` -> The Information / News (যা বলা হচ্ছে)
    - `مَوْصُوفٌ` -> The Object (যার বর্ণনা দেওয়া হচ্ছে)
    - `صِفَةٌ` -> The Description (যে গুণ বা অবস্থা প্রকাশ পাচ্ছে)
- [ ] **Task 6.4.2 (Verb Tasting Reassurance Callouts)**:
  - In Chapter 2 Lesson 5 (`ch2-l5-step-17-verb-preview`) and Lesson 8 (`ch2-l8-step-17-verb-preview`), display a comforting teacher callout:
    - *"নোট: এগুলো মুখস্থ করার প্রয়োজন নেই, নিয়ম শেখারও দরকার নেই। শুধু অর্থসহ কয়েকবার পড়ে নিন - দ্বিতীয় খণ্ডে বিস্তারিত আসবে ইনশাআল্লাহ।"*

---

## 7. Design System Compliance Checklist

Every screen and component must satisfy:
- [ ] **Zero Hardcoded Colors**: Consume only designated tokens (`bg-accent-primary`, `bg-neutral-100`, etc.).
- [ ] **Zero Box Shadows**: CSS shadows (`shadow-*`) are strictly prohibited. Depth is 100% luminance-based.
- [ ] **Touch Target Standard**: Primary action buttons must be at least 56px (`h-14`) high.
- [ ] **Arabic Typography**: `tracking-normal` with ample vertical breathing room (`leading-relaxed` or `leading-loose`).
- [ ] **Script Isolation**: Pure English in `en`, pure natural Bangla in `bn`. No mixed scripts.
- [ ] **Tashkeel Fidelity**: 100% full, accurate Harakat on all Arabic text.

# 🛡️ Project Tariq: Quota Handover & Engineering Backlog Checkpoint

**Timestamp:** 2026-08-01  
**Author:** Firstmate (Antigravity AI Agent & Fleet Governor)  
**Purpose:** Preservation of absolute architectural truth, active worker states, and prioritized engineering backlog prior to account re-authentication and quota reset.

---

## 📍 1. Executive Summary
When resuming operations under the new account in this tab, read this document first to instantaneously reload our entire operational framework, verified design rules, and active tasks. Zero git commits have been executed without captain authorization, and all foundational progress is safely recorded on disk.

---

## 🏛️ 2. Immutable Design & Architectural Rules (Locked In by Captain)

### A. Raw Neutral Aesthetic & 100% Flat Design Mandate
- **Zero Borders & Zero Shadows:** Absolute ban on decorative outline borders (`border`, `border-2`, `border-b`, `border-t`, `ring-*`) and drop shadows (`shadow-*`, `shadow-md`, `shadow-inner`).
- **Pure Tone-on-Tone Separation:** Container hierarchy and depth must be achieved 100% via background luminance shifts (e.g., `#000000` canvas $\to$ `neutral-900` cards $\to$ `neutral-800` or `#141413` active wells) paired with generous padding.
- **Strict Neutral Palette:** NEVER use `stone-*`, `zinc-*`, `gray-*`, or `slate-*` classes. Strictly enforce pure `neutral-*` tones!
- **Soft Geometry Duality:** Passive content cards use squircles (`rounded-3xl` / `rounded-2xl`); interactive navigation buttons and state triggers use pills (`rounded-full`).

### B. Official Accent Color (Subtle Emerald Green)
- Incorporate clean, subtle touches of **Emerald Green (`emerald-500` / `#10b981`)** for status tags, active recommendations, and interaction glints within the grayscale Raw Neutral canvas, mirroring our Lavish report aesthetic.

### C. Permanent Invariant Semantic Feedback States
- Semantic state feedback tokens are hardcoded fixtures that never change regardless of volume themes or color modes:
  - 🟢 **Success / Correct:** High-contrast emerald/green tokens (e.g., flat `bg-[#10b981]/15 text-[#10b981]`) for correct answers and mastered rules, with ZERO borders or drop shadows!
  - 🔴 **Not Right / Error:** Distinctive red tones for vocabulary mistakes or form errors, purely flat with ZERO borders!
  - 🟠 **Warning / Attention:** Vibrant amber tones for grammar reminders, purely flat with ZERO borders!

### D. Typographic Separation Mandate & Diacritic Cushioning
- 📖 **Mushaf Inspection & Living Mushaf (`/mushaf-v2`):** STRICTLY use the actual **King Fahad Complex Version 2 font** (*KFGQPC Uthmani Script HAFS* / Quran.com King Fahd v2 font assets) exactly as implemented in the open-source Quran.com architecture!
- 📚 **Instructional & Lesson Components:** For all general pedagogical elements (vocabulary lists, grammar charts, Harakat fading exercises), our existing approved font options (**Cairo**, **Tajawal**, **Vazirmatn**, and **Noto Sans Arabic**) remain active and user-selectable!
- **Diacritic Buffers:** Enforce generous vertical line-height cushions (`leading-[2.4]`, `py-2`) to ensure ascenders (*Maddah*) and descenders (*Kasrah*, *Jeem*, *Meem*) are never severed or clipped by container edges.

---

## 🛠️ 3. Foundational Engineering Baseline (Already Accomplished)
1. **Curriculum Extraction Pipeline:** 445 high-resolution PNG pages sliced from *Esho Arbi Shikhi* Volumes 1-4 residing in `resources/pages/vol1/` through `vol4/`.
2. **Spring Boot 3.2+ Microservice Backend:** Initialized in `apps/api-java/` with domain entities (`Volume`, `Chapter`, `Lesson`, `CurriculumChunk`, `UserProgress`), JPA repositories, and an in-memory H2 data seeder for zero-config rapid iterations.
3. **Herdr Worker Governance Reform:** All tasks are strictly deployed to physical, dedicated Herdr tabs running visible `agy` terminals under Firstmate supervision—never using background internal subagents or leaving idle windows!
4. **Design System Showcase Foundations:** Built at `apps/web/src/routes/design-system/index.tsx` (served locally on port `3000`).

---

## 📋 4. Prioritized Engineering Backlog (Immediate Tasks Upon Relogin)

When the captain re-authenticates and says *"let's proceed"* or *"check status"*, immediately execute this sequence:

### ⚡ Priority 1: Finalize Design System Verification (Tab: `ui-design-system`)
- **Action:**
  1. Inspect `apps/web/src/components/design-system/` and run `pnpm exec tsc --noEmit` in `apps/web/`.
  2. Verify that all 50+ decorative border and shadow classes were completely purged and that notification banners are 100% flat design without borders.
  3. Confirm the King Fahd Complex v2 font specification is clearly documented for Mushaf interfaces.
  4. Present `http://localhost:3000/design-system` to the captain for final sign-off (*"The design system is finalized"*).
  5. Once approved, close the `ui-design-system` tab!

### ⚡ Priority 2: Option 1 — Harakat Engine & Book Rebuild (Tab: `team-book-harakat`)
- **Action:**
  1. Verify/implement `src/lib/harakat/Engine.ts`: 5-Stage Harakat Fading Finite State Machine (`STAGE_0` through `STAGE_4`) enforcing immutable Shaddah preservation and gender pronoun homograph disambiguation (`أَنْتَ` vs `أَنْتِ` with permanent Ta-Kasra).
  2. Rebuild *Esho Arbi Shikhi* Volume 1 Lessons 1 & 2 completely from scratch at `src/routes/curriculum/vol1/lesson1/index.tsx` and `lesson2/index.tsx`.
  3. Ensure every module is intensely engaging, educational, borderless, shadowless, and styled with our **Subtle Emerald Green accent** (`#10b981`) and 4-font instructional toggle (Cairo/Tajawal/Vazirmatn/Noto).

### ⚡ Priority 3: Option 3 — Living Mushaf via Quran.com Architecture (Tab: `team-mushaf-quran`)
- **Action:**
  1. Adapt the open-source Quran.com Mus'haf typographic layout and King Fahd Complex Version 2 font assets at `src/routes/mushaf-v2/index.tsx`—do not build from scratch!
  2. Inject our 3-Tier comprehension highlighting pipeline for Surah Al-Mulk (67:1-5) and Al-Fatihah:
     - **Tier 1 (Mastered Syntax):** Flat squircle pills accented with **Subtle Emerald Green** (`#10b981`). Clicking drills down into Tarkeeb syntax trees!
     - **Tier 2 (Known Words/Roots):** Monochrome underline without background fill. Clicking displays lemma flashcards!
     - **Tier 3 (Unexplored Scripture):** Muted script tone (`text-neutral-500 opacity-75`).

### ⏳ Priority 4 (Subsequent Phase): App-Wide Design Migration
- Take the approved zero-border, shadowless, neutral design system and systematically convert the entire application around it, Inshallah!

---
*End of Checkpoint. Ready for instant operational resumption upon account re-login!*

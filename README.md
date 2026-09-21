# Tariq (طَرِيق) - Quranic Arabic Pedagogical Engine & Immersion Platform

> **Interactive, Direct-Method Arabic Learning for Modern Web & Mobile**  
> Digitizing Maulana Abu Taher Misbah's renowned curriculum (*Esho Arbi Shikhi*, Volumes 1 - 3) through cognitive micro-steps, Harakat fading, and authentic Quranic application.

---

## 🎥 Final Project Presentation Video

> **YouTube Presentation Walkthrough**:  
> 🔗 **[Watch the Tariq Final Project Demonstration on YouTube](https://youtu.be/vi4DOnKeCGw)**  
>
> [![Tariq Final Presentation Video](https://img.youtube.com/vi/vi4DOnKeCGw/maxresdefault.jpg)](https://youtu.be/vi4DOnKeCGw)
>
> *Direct Link: [https://youtu.be/vi4DOnKeCGw](https://youtu.be/vi4DOnKeCGw)*  
> *Demonstrates the core pedagogical engine, interactive micro-step session runners, 5-stage Harakat fading, Living Mushaf immersion, and cross-platform Web/Mobile architecture.*

---

## 📖 Executive Summary & Pedagogical Vision

Classical Arabic pedagogy often struggles with a fundamental barrier: translation dependency. Learners become reliant on English or Bengali translations rather than directly parsing Arabic sentence structures and Quranic morphology.

**Project Tariq** resolves this by adapting the time-tested "Direct Method" from the classic madrasa curriculum *Esho Arbi Shikhi* (Vol 1, 2, and 3) into an interactive digital learning system:
1. **Zero Translation Crutch**: Concepts are acquired through intuitive pairing, visual spatial cues, polar sorting, and sentence assembly before explicit grammar rules are codified.
2. **Cognitive Micro-Steps**: Each textbook chapter is split into 18+ bite-sized, sequential micro-steps (100% mastery drills) that build effortless comprehension.
3. **Direct Quranic Connection**: Every lesson concludes with a "Sacred Milestone" (Quranic Pattern Echo) that demonstrates the identical syntactic structure directly inside the text of the Holy Quran.

---

## 🚀 Core Features & Innovations

### 1. Interactive Micro-Step Session Runner
- **18+ Interactive Archetypes**:
  - `vocab_prime`: Audio-supported vocabulary familiarization with script-isolated translations.
  - `concept_intro`: Visual grammar rules explaining grammatical shifts and gender agreement.
  - `polar_sort`: Binary categorization (e.g. Masculine vs. Feminine, Singular vs. Plural).
  - `spatial_pointing`: Dynamic spatial distance tracks (`👉 ────────▶ [ Object ]`) teaching near (`هَذَا / هَذِهِ`) vs far (`ذَلِكَ / تِلْكَ`) demonstrative pronouns.
  - `cloze_choice`: Contextual fill-in-the-blank drills with vector cues and instant audio feedback.
  - `sentence_assembly`: Receptive synthesizer assembling word tokens in exact Arabic syntactic order.
  - `alternative_qa`: Conversational reflex drills (`أَ... أَمْ...`) without yes/no shortcuts.
  - `idafah_equation`: Visual compound analysis connecting Mudaf (`مُضَاف`) and Mudaf Ilayh (`مُضَاف إِلَيْهِ`).
  - `syntax_fronting`: Fronted predicate structures (`خَبَر مُقَدَّم`) with delayed subjects (`مُبْتَدَأ مُؤَخَّر`).
  - `verb_conjugator`: Interactive Sarf paradigm drills with tense locking, root synchronization, and pronoun badges.
  - `masdar_factory`: Derivation drills exploring the morpho-semantic patterns from triliteral roots.
  - `quranic_echo`: Direct Quranic verse application highlighting the learned grammar in authentic Quranic context.
- **Audio Integration**: Male neural TTS synthesis tuned to classical Arabic pronunciation standards (`ar-XA-Wavenet-B`), complete with Wasl continuation trimming for pristine case endings (I'rab).
- **Session Checkpoints**: Automatic progress persistence allowing users to resume interrupted lessons seamlessly.

### 2. 5-Stage Harakat Fading FSM Engine
- A pedagogical finite-state machine that progressively fades Arabic diacritical marks (vowels) across 5 stages:
  - **Stage 0**: Full Vocalization (all vowels and markings visible).
  - **Stage 1**: Ending Tanween / I'rab Fading (inflectional case endings faded).
  - **Stage 2**: Pattern & Particle Fading (frequently used structural words drop vowels).
  - **Stage 3**: Disambiguation / Root Only (retains only essential vowels to avoid ambiguity).
  - **Stage 4**: Zero Harakat Mastery (100% unvoweled authentic reading fluency).
- **Homograph Protection**: Intelligently safeguards ambiguous pronouns and gender pairs (such as `أَنْتَ` vs `أَنْتِ`, `-ka` vs `-ki`) from premature stripping.

### 3. Living Mushaf & Quranic Immersion
- **King Fahd Complex (KFGQPC v2) Typography**: Page-accurate, authentic Uthmanic Hafs Quran text with custom glyph layouts.
- **Morphological Word-by-Word Analysis**: Hover and click interactions revealing root clusters, lemma breakdowns, and grammatical classifications.
- **3-Tier Comprehension Highlighting**: Dynamic visual tiers indicating vocabulary known, grammar mastered, and active learning targets.

### 4. Raw Neutral Design System
- **Tone-on-Tone Luminance Depth**: 100% borderless, shadow-free visual hierarchy designed to keep student focus entirely on the Arabic script.
- **Arabic Typography Suite**: Zero letter-spacing (`tracking-normal`) and relaxed vertical clearance (`leading-relaxed`) ensuring clear Harakat visibility. Choice of Arabic typefaces: Cairo, Tajawal, Vazirmatn, and Noto Sans Arabic.
- **56px Touch Targets**: Mobile-optimized, accessible interaction zones for chip assembly and selection controls.
- **Strict RTL (Right-to-Left) Support**: Native logical layout flow respecting Arabic directionality across web and mobile.

### 5. Gamification & Retention Engine
- **Streak & Habit Tracker**: Daily goal tracking, streak maintenance, and motivational celebration modals.
- **Daily Tasks & Quests**: Dynamic challenges reinforcing retention.
- **Arabic Doodle Canvas**: Interactive calligraphic drawing tool evaluating letter stroke fidelity.
- **Root Cluster Blitz**: Rapid vocabulary recall drills reinforcing morphological families.

---

## 🏛️ Architecture & Tech Stack

The project is structured as a high-performance monorepo using **pnpm workspaces**:

```
a_tariq/
├── apps/
│   ├── web/               # TanStack Start + Vite + React 19 + Tailwind CSS v4
│   ├── mobile/            # React Native + Expo SDK 53 + NativeWind + Zustand
│   └── api-java/          # Spring Boot 3.2.5 + Spring Data JPA + H2 / PostgreSQL
├── packages/
│   └── shared/            # Shared TypeScript curriculum data, sessions, & validators
├── docs/                  # Architecture specs, design system, and pedagogical guidelines
└── scripts/               # Invariant checkers, transcript migrators, and TTS tools
```

| Domain | Technology |
|---|---|
| **Web Frontend** | React 19, TanStack Start, TanStack Router, Vite, Tailwind CSS v4, Framer Motion, Lucide Icons |
| **Mobile App** | React Native, Expo SDK 53, NativeWind, React Navigation, Zustand |
| **Shared Data** | TypeScript, Vol 1/2/3 Curriculum Payloads, Invariant Test Suite |
| **Database & ORM** | PostgreSQL (Neon), Drizzle ORM, Spring Data JPA |
| **Backend Services** | Spring Boot 3.2.5 (Java 17+), Node.js / Nitro SSR, Cloudflare / Vercel Edge |
| **Typography** | King Fahd Complex (KFGQPC Uthmanic Hafs v2), Cairo, Tajawal, Noto Sans Arabic |
| **Audio** | Neural Google Cloud TTS (`ar-XA-Wavenet-B`), Deepgram Audio Pipeline |

---

## 🔍 Note for the Judges: Visual Pedagogy Prioritization & Backend Roadmap

In our initial progress presentation, the team outlined an architectural roadmap featuring a dedicated Spring Boot microservice (`apps/api-java`).

During sprint execution, our engineering team made a deliberate, strategic prioritization:
1. **Interactive Visual Immersion**: Quranic Arabic education requires unprecedented visual and pedagogical fidelity. Building the 18+ interactive micro-step archetypes, the 5-stage Harakat fading engine, the King Fahd Complex v2 Living Mushaf renderer, the Arabic doodle canvas, and sub-millisecond audio synchronization demanded intensive full-stack attention.
2. **Production-Ready Client & Data Layer**: To deliver immediate, zero-latency feedback for interactive exercises, we implemented a full-stack database architecture using **PostgreSQL** paired with **Drizzle ORM** and client-side Zustand persistence on both Web and Mobile.
3. **Spring Boot Microservice Status (`apps/api-java`)**:
   - The Spring Boot 3.2+ service is fully scaffolded inside `apps/api-java/`.
   - It contains the complete domain model hierarchy (`Volume` -> `Chapter` -> `Lesson` -> `CurriculumChunk` -> `UserProgress`), JPA entity definitions, and H2/PostgreSQL database connection profiles.
   - It is architected to serve as the unified Headless CMS in the upcoming production rollout.

This deliberate engineering focus ensured that the final deliverable is not just an API shell, but a living, highly-polished, pedagogical product that students and judges can actively experience.

---

## 🛠️ How to Run the Project Locally

### Prerequisites
- **Node.js**: v20.x or higher
- **pnpm**: v9.x or higher
- **Java**: JDK 17 or higher (only required for running `apps/api-java`)

### 1. Installation
Clone the repository and install dependencies across all workspaces:
```bash
git clone https://github.com/amir-al-razin/a_tariq.git
cd a_tariq
pnpm install
```

### 2. Run the Web Application
```bash
# Starts the TanStack Start + Vite development server on http://localhost:3000
pnpm dev:web
```
Open `http://localhost:3000` in your browser to experience the web application.

### 3. Run the Mobile Application (Expo)
```bash
# Starts Expo Metro bundler for iOS / Android / Web preview
pnpm dev:mobile
```

### 4. Run the Spring Boot API (Optional)
```bash
cd apps/api-java
./mvnw spring-boot:run
```
The API server will start on `http://localhost:8080` with the embedded H2 database.

### 5. Automated Tests & Pedagogical Invariant Verification
To verify type safety, code quality, and strict pedagogical rules across the curriculum:
```bash
# Run the 19-point pedagogical & design system invariant verification
pnpm verify:invariants

# Run frontend Vitest test suite
pnpm --filter web exec vitest run

# Run TypeScript strict checks
pnpm --filter web exec tsc --noEmit
pnpm --filter mobile exec tsc --noEmit
```

---

## 📚 Curriculum Alignment & Reference

- **Primary Textbook**: *Esho Arbi Shikhi* (এসো আরবী শিখি / Let Us Learn Arabic), Volumes 1, 2, and 3 by **Maulana Abu Taher Misbah**.
- **Quranic Scripture**: Holy Quran (Hafs transmission) via King Fahd Glorious Quran Printing Complex (KFGQPC v2).
- **Pedagogical Standards**: Documented in [`docs/engine-design-guidelines.md`](docs/engine-design-guidelines.md) and [`COMMON_MISTAKES.md`](COMMON_MISTAKES.md).
- **Design Specifications**: Documented in [`docs/design-system.md`](docs/design-system.md) and [`DESIGN_SYSTEM_RAW_NEUTRAL.md`](DESIGN_SYSTEM_RAW_NEUTRAL.md).

---

## 👥 Project Team & Credits

- **Project Lead & Core Pedagogical Engine**: Interactive lesson runners, Harakat fading FSM, monorepo architecture, and audio synchronization.
- **UI/UX & Gamification**: Raw Neutral design system, streak system, badges, and calligraphy doodle integration.
- **Curriculum Research**: Verification of Arabic Tashkeel, Bengali translations, and Quranic morphological mappings against classical madrasa texts.

*Developed with devotion for learners of Quranic Arabic worldwide.*
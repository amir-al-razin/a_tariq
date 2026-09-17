# Tariq Pedagogical Design System - Official Specification

Last updated: 2026-09-15  
Status: Production Standard V3  
Governing Architecture: Raw Neutral Minimalist Architecture with Curated Heritage Accents

---

## 1. System Vision & Foundational Philosophy

The Tariq Design System is an industry-grade pedagogical design framework built specifically for sacred language instruction (Quranic Arabic). It fundamentally rejects the noisy gamified dopamine loops of contemporary language apps (cartoon borders, bouncy drop shadows, floating coins, neon clashes).

### The Three Foundational Pillars

1. **Sacred Reverence**: Quranic scriptures, classical linguistics, and morphological rules demand an environment of quiet nobility, dignity, and deep focus.
2. **Zero Visual Overlap**: Arabic diacritics (Harakat: Fathah, Dammah, Kasrah, Sukun, Shaddah, Tanwin) demand pixel-perfect vertical breathing room. Borders and drop shadows crowd glyph baselines; borderless tone-on-tone surfaces grant infinite air.
3. **Surgical Accents**: Color is never applied as arbitrary decoration. It is reserved strictly for semantic signaling (active learning beacons, completion states, grammatical role focus, form focus states).

---

## 2. Design Token Architecture (Tiered Model)

Tariq strictly enforces an industry-standard three-tier design token model:

- **Tier 1 (Primitives)**: Raw values (Grayscale hex codes, base spacing steps, corner radii, raw font families).
- **Tier 2 (Semantic)**: Purpose-driven tokens (`bg-accent-primary`, `surface-base`, `text-primary`, `status-success`).
- **Tier 3 (Component)**: Component-specific role mappings (`button-primary-bg`, `chunk-node-active-ring`).

### 2.1 Primitive Grayscale Ladder (Raw Neutral)

| Token | Light Paper Hex | Nocturnal Obsidian Hex | Purpose |
|---|---|---|---|
| `neutral-50` | `#FAFAFA` | `#0A0A0A` | Canvas background tint |
| `neutral-100` | `#F5F5F5` | `#141414` | Level 1 surface well / card background |
| `neutral-200` | `#E5E5E5` | `#1F1F1F` | Level 2 raised surface / interactive hover |
| `neutral-300` | `#D4D4D4` | `#2E2E2E` | Inactive stepper dots / subtle separators |
| `neutral-400` | `#A3A3A3` | `#525252` | Tertiary metadata / subtext |
| `neutral-500` | `#737373` | `#737373` | Balanced secondary label |
| `neutral-600` | `#525252` | `#A3A3A3` | Legible body text |
| `neutral-700` | `#404040` | `#D4D4D4` | High-emphasis body text |
| `neutral-800` | `#262626` | `#E5E5E5` | Strong titles / active dark icons |
| `neutral-900` | `#171717` | `#F5F5F5` | Primary headings / high-contrast pills |
| `neutral-950` | `#0A0A0A` | `#FFFFFF` | Maximum contrast display |

---

## 3. The 6 Curated Heritage Palettes

The design system defaults to **Kairouan Indigo** (inspired by the 9th-century Blue Quran of Kairouan), while registering 6 historically authentic, cognitive-calibrated palettes in `@tariq/shared/theme`. All palettes maintain 100% hue consistency across Light and Dark modes.

### 3.1 Palette Registry

#### 1. Kairouan Indigo (Locked Production Default)
- **Heritage**: 9th-century Fatimid Blue Quran of Kairouan. Gold Kufic script on nocturnal indigo vellum.
- **Primary Accent**: Royal Indigo (`#4338CA` Light / `#6366F1` Dark)
- **Primary Subtle**: `#EEF2FF` Light / `rgba(67, 56, 202, 0.16)` Dark
- **Secondary Accent**: Dune Sand Gold (`#C28135` Light / `#D99B4B` Dark)
- **Secondary Subtle**: `#FDF8F0` Light / `rgba(194, 129, 53, 0.16)` Dark
- **Roles**: Primary marks interactive actions, verbs, and active nodes; Secondary marks milestones, beacons, and `CURRENT` indicators.

#### 2. Academic Lapis
- **Heritage**: Classical Tezhip manuscript illumination and scholarly focus.
- **Primary Accent**: Lapis Lazuli (`#2563EB` Light / `#3B82F6` Dark)
- **Secondary Accent**: Solar Amber (`#D97706` Light / `#F59E0B` Dark)

#### 3. Andalusian Jade
- **Heritage**: Cordoba courtyard gardens and classical North African scholarship.
- **Primary Accent**: Forest Jade (`#059669` Light / `#10B981` Dark)
- **Secondary Accent**: Honey Gold (`#D97706` Light / `#F59E0B` Dark)

#### 4. Persian Teal
- **Heritage**: Silk Road architectural tilework (Isfahan and Samarkand).
- **Primary Accent**: Persian Teal (`#0D9488` Light / `#14B8A6` Dark)
- **Secondary Accent**: Clay Terracotta (`#C2410C` Light / `#EA580C` Dark)

#### 5. Hijazi Olive
- **Heritage**: Mediterranean and Hijaz olive groves; restful mindfulness for extended nocturnal reading.
- **Primary Accent**: Olive Grove (`#4D5B44` Light / `#65775A` Dark)
- **Secondary Accent**: Desert Ochre (`#C28135` Light / `#D99B4B` Dark)

#### 6. Monastic Cobalt
- **Heritage**: Minimalist discipline with surgical single-accent focus (Apple / Linear aesthetic).
- **Primary Accent**: Cobalt Solo (`#1D4ED8` Light / `#2563EB` Dark)
- **Secondary Accent**: Slate Carbon (`#475569` Light / `#64748B` Dark)

---

## 4. Semantic Token Mapping & CSS Variables

Component code must NEVER hardcode hex colors. All components consume CSS variables mapped into Tailwind CSS:

```css
:root {
  --accent-primary: #4338CA;
  --accent-primary-hover: #3730A3;
  --accent-primary-subtle: #EEF2FF;
  --accent-primary-text: #3730A3;
  --accent-primary-glow: rgba(67, 56, 202, 0.08);

  --accent-secondary: #C28135;
  --accent-secondary-hover: #9A6321;
  --accent-secondary-subtle: #FDF8F0;
  --accent-secondary-text: #7C4A14;
  --accent-secondary-glow: rgba(194, 129, 53, 0.08);
}

.dark {
  --accent-primary: #6366F1;
  --accent-primary-hover: #4F46E5;
  --accent-primary-subtle: rgba(67, 56, 202, 0.16);
  --accent-primary-text: #A5B4FC;
  --accent-primary-glow: rgba(99, 102, 241, 0.24);

  --accent-secondary: #D99B4B;
  --accent-secondary-hover: #C28135;
  --accent-secondary-subtle: rgba(194, 129, 53, 0.16);
  --accent-secondary-text: #FDE68A;
  --accent-secondary-glow: rgba(217, 155, 75, 0.24);
}
```

### Utility Classes

| Utility Class | Description |
|---|---|
| `bg-accent-primary` | Primary action button, active drill progress, active circular node |
| `hover:bg-accent-primary-hover` | Micro-interaction hover compression |
| `bg-accent-primary-subtle` | Soft completed node background, word chip base, tag wells |
| `text-accent-primary-text` | High-legibility text on subtle background |
| `bg-accent-secondary` | Floating `CURRENT` beacon, milestone path nodes, stars |
| `text-accent-secondary` | Grammatical role indicators, secondary action accents |

---

## 5. Raw Neutral Elevation Architecture

Depth is achieved exclusively through **background luminance shifts** and **nested squircle cards**, never drop shadows or outline borders.

### The 4 Elevation Levels

| Level | Light Paper | Nocturnal Obsidian | Use Case |
|---|---|---|---|
| **Level 0 (Canvas)** | `bg-white` (`#FFFFFF`) | `bg-neutral-950` (`#0A0A0A`) | Root application canvas |
| **Level 1 (Well)** | `bg-neutral-100` (`#F5F5F5`) | `bg-neutral-900` (`#141414`) | Content container, lesson group card, drill frame |
| **Level 2 (Raised)** | `bg-white` (`#FFFFFF`) | `bg-[#181818]` | Focused card inside well, vocabulary flashcard, answer button |
| **Level 3 (Overlay)** | `bg-white/85` + blur | `bg-neutral-900/85` + blur | Sticky navigation headers, modal dialogs |

### 5.1 Corner Radius Scale & Decision Matrix

Strict squircle geometry ensures consistent visual curvature across all application surfaces:

| Token | Radius Value | Component Scope & Architectural Rationale |
|---|---|---|
| `rounded-4xl` | 32px (2rem) | **Outer Section Containers & App Envelopes**: Major screen wrappers and modal boundaries |
| `rounded-3xl` | 24px (1.5rem) | **Primary Surface Cards & Drill Blocks**: Lesson stage frames, milestone cards, focal well containers |
| `rounded-2xl` | 16px (1rem) | **Inner Wells, Alerts & Dialogs**: Linguistic specification boxes, question cards, feedback strips |
| `rounded-xl` | 12px (0.75rem) | **Word Chips & Dropdowns**: Interactive grammar tokens, dropdown menus, scramble bank chips |
| `rounded-full` | 9999px | **Action Buttons, Pills & Badges**: 56px action pills, touch icon buttons, status beacons, XP tags |

### 5.2 Spacing Scale & Touch Ergonomics Mandates

- **4px Base Metric**: All layout spacing multiplies strictly from a 4px base step (`p-1`/4px, `p-2`/8px, `p-3`/12px, `p-4`/16px, `p-6`/24px, `p-8`/32px, `p-12`/48px, `space-y-16`/64px).
- **56px Action Pill Mandate**: Primary action triggers (Continue, Start Drill) must have a 56px height (`h-14` / `min-h-[56px]`), `rounded-full`, and generous padding (`px-6` to `px-9`).
- **Secondary Controls**: Minimum 44px height (`h-11`) for secondary action buttons (Review Stage, Reset Drill).
- **Circular Triggers**: Audio pronunciation and reset triggers require 40px to 48px (`w-10 h-10` to `w-12 h-12`) circular touch footprints.
- **Zero Border & Shadow Rule**: Strictly prohibited to apply 1px solid borders (`border`, `border-neutral-*`) or drop shadows (`shadow-*`). Depth is 100% luminance-based. Dashed borders are permitted ONLY on empty assembly drop target slots (`border-2 border-dashed border-neutral-300 dark:border-neutral-700`).

---

## 6. Multilingual Typography Suite

### 6.1 Font Pairings

| Role | Font Family | Weights | Best For |
|---|---|---|---|
| **English Primary** | Plus Jakarta Sans | 400, 500, 600, 700, 800 | Section titles, navigation, button copy, counters |
| **English Reading** | Lexend | 400, 500, 600 | Translations, pedagogical rule notes, explanations |
| **Arabic Instructional** | Cairo | 400, 500, 600, 700 | Primary textbook font, balanced geometric Naskh |
| **Arabic Universal** | Noto Sans Arabic | 400, 500, 600, 700 | Clean cross-platform multi-device rendering |
| **Arabic Scholarly** | Amiri | 400, 700 | Classical Bulaq Press typography, literature |
| **Arabic Modern** | Tajawal | 400, 500, 700 | Contemporary low-contrast interface typography |
| **Arabic Clear** | Vazirmatn | 400, 500, 600, 700 | Extended fatigue-free reading sessions |
| **Authentic Mus'haf** | Uthmanic Hafs | Normal | Sacred Quranic verses and Living Mushaf view |
| **Bengali** | Noto Sans Bengali | 400, 500, 600, 700 | Bengali translations and transliterations |

### 6.2 Arabic Typesetting Rules

1. **Strict Letter-Spacing Prohibition**: Letter-spacing (tracking) on Arabic text must strictly be 0 (`tracking-normal`). Never apply negative or positive tracking to Arabic glyphs.
2. **Vertical Diacritic Cushioning**: Arabic with Harakat requires a line-height multiplier between 1.8x and 2.4x (`leading-relaxed` or `leading-loose`) to prevent Tashkeel glyph collision.
3. **RTL Directionality**: All Arabic text containers must explicitly carry `dir="rtl"` and use logical margin/padding utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`).

---

## 7. Component Primitives Standards & API Contracts

### 7.1 Actions & Buttons Suite (`Button.tsx`)
- **`Button`**:
  - Variants: `sovereign` (commanding black/white pill from good.png), `primary` (heritage accent), `secondary` (warm gold/coral), `subtle` (tinted wash), `ghost` (neutral well), `destructive` (rose red).
  - Sizes: `sm` (h-9, 36px), `md` (h-11, 44px), `lg` (h-14, 56px), `xl` (h-16, 64px).
  - Micro-interactions: Framer-motion spring damping with `whileTap={{ scale: 0.97 }}`.
  - Zero drop shadows (`shadow-none`) and zero outline borders (`border-0`).
- **`IconButton`**: Circular or squircle touch targets (`w-8`, `w-11`, `w-14`, `w-16`).
- **`CounterStepper`**: Tactile `-` / `+` capsule control inspired by good.png for quantities, lesson repetitions, and audio speed.
- **`ButtonGroup`**: Grouped segmented container pill.

### 7.2 Form Controls & Inputs (`Input.tsx`)
- **`TextInput`**: Single-line input with left icon, clear button, helper text, and error validation state. Focus states automatically illuminate with `focus:ring-2 focus:ring-accent-primary`.
- **`SearchInput`**: Full-bleed capsule with search magnifying icon, `⌘K` keyboard badge, and instant clear trigger.
- **`Textarea`**: Multiline input with live character counter.
- **`Select`**: Styled native select with custom chevron arrow and accent focus ring.

### 7.3 Selection Controls (`SelectionControls.tsx`)
- **`Switch`**: Smooth toggle switch with spring-animated white circular thumb. Actively paints `bg-accent-primary` when enabled.
- **`Checkbox`**: Squircle box with animated checkmark. Actively paints `bg-accent-primary` when checked.
- **`RadioGroup` & `Radio`**: Circular radio with outer ring and centered filled circle in `bg-accent-primary`.
- **`Slider`**: Range slider with track filled in `bg-accent-primary` and tactile white circular thumb.

### 7.4 Navigation & Wayfinding (`Navigation.tsx`)
- **`SegmentedControl`**: Pill tabs with animated sliding background capsule in `bg-neutral-950` or `bg-accent-primary`.
- **`UnderlineTabs`**: Classic tab bar with sliding bottom border accent indicator.
- **`Breadcrumbs`**: Hierarchical path with chevron separators and active badge in subtle accent wash.
- **`Stepper`**: Multi-step drill progress indicator with completed checkmarks in `bg-accent-primary`, current step pulse, and upcoming steps.
- **`PathNode`**: Pedagogical curriculum milestone node with active pulsing beacon, completed gold star, and locked states.

### 7.5 Surfaces, Cards & Data Display (`Card.tsx`)
- **`Card`**: 4 elevation levels (`base`, `raised`, `sunken`, `accent`), with customizable padding and radii (`rounded-2xl`, `rounded-3xl`, `rounded-[32px]`).
- **`StatCard`**: KPI metric card with title, bold value, trend badge (`+18%`), icon container, and subtitle.
- **`Accordion`**: Expandable disclosure item with smooth height animation and chevron rotation.
- **`Avatar`**: User photo or letter monogram with online status beacon dot.
- **`Divider`**: Subtle tone-on-tone horizontal or vertical separator line.

### 7.6 Feedback, Alerts & Overlays (`Feedback.tsx`)
- **`AlertBanner`**: Dismissible callout banner in 4 semantic variants: `info` (accent wash), `success` (emerald wash), `warning` (amber wash), `danger` (rose wash).
- **`Toast`**: Floating notification with icon, title, message, and dismiss button.
- **`Tooltip`**: Micro tooltip with smooth spring animation on hover.
- **`Skeleton`**: Shimmer loading placeholder for text lines, circular avatars, and rectangular cards.
- **`EmptyState`**: Centered empty view with icon container, title, description, and primary CTA.

### 7.7 Progress Indicators (`Progress.tsx`)
- **`ProgressBar`**: Linear bar with accent fill and optional percentage label.
- **`ProgressRing`**: SVG circular gauge with animated stroke.
- **`StepDots`**: Chunk pagination dots with active pill elongation.

### 7.8 Domain Pedagogy Suite (`PedagogyComponents.tsx`)
- **`WordChip`**: Interactive Arabic word token with Harakat, transliteration, and translation. States: `idle`, `selected` (`bg-accent-primary`), `placed`, `correct` (emerald), `error` (rose with shake animation).
- **`WordAssemblySlot`**: Target slot with dashed border where words snap into place.
- **`DemonstrativeBadge`**: Directional RTL price-tag pointing leftwards (`هَٰذَا` near, `ذَٰلِكَ` far).
- **`AudioButton`**: Pronunciation play trigger with animated sound wave bars in `accent-primary`.
- **`Flashcard`**: Flip card with front Arabic vocalization and back grammatical root breakdown.
- **`TarkeebNode`**: Grammatical syntax tree node (`Mubtada`, `Khabar`, `Harf Jarr`, `Majroor`) with case state indicators.

---

## 8. Invariant Semantic Feedback

Status colors never adapt to theme accents. They are permanent invariants ensuring zero pedagogical confusion:

| Status | Light Paper | Nocturnal Obsidian | Semantic Meaning |
|---|---|---|---|
| **Success** | `#15803D` (green-700) | `#22C55E` (green-500) | Correct answer, verified grammar match |
| **Warning** | `#B45309` (amber-700) | `#F59E0B` (amber-500) | Incomplete phrase, study reminder |
| **Danger** | `#DC2626` (red-600) | `#EF4444` (red-500) | Syntax error, incorrect particle selection |
| **Info** | `#1D4ED8` (blue-700) | `#3B82F6` (blue-500) | Grammatical focus rule tooltip |

---

## 9. Engineering Invariants & Developer Checklist

### DO
- Import all palette definitions and token helpers from `@tariq/shared`.
- Use `bg-accent-primary`, `bg-accent-secondary`, and their subtle variants.
- Center contextual sentences, examples, and subordinate translations (`text-center`).
- Use `whitespace-nowrap` on comparative Arabic words to prevent glyph fragmentation across lines.
- Use logical CSS properties (`ms-*`, `me-*`, `ps-*`, `pe-*`) for RTL layout integrity.
- Verify every visual change in both Dark and Light modes using `agent-browser`.
- Maintain zero TypeScript errors across all packages.
- Follow the commanding pill style (`h-14` / `h-16`, `rounded-full`) for hero actions as seen in `good.png`.

### DON'T
- NEVER use drop shadows (`shadow-*`).
- NEVER use decorative outline borders (`border-*`) on cards.
- NEVER use uppercase meta-labels (`BASE NOUN`, `EXAMPLE:`, `NOTE:`) or fragment content into multiple nested mini-cards (use a single Level 2 raised card with whitespace).
- NEVER hardcode hex codes like `#4338CA` in UI components.
- NEVER use cartoon sounds, bouncy floating coins, or playful dopamine triggers.
- NEVER use em dashes in documentation or UI copy (use plain dash `-` instead).
- NEVER execute git add, commit, or push commands without explicit user permission.

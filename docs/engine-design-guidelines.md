# Pedagogical Implementation Principles

This document serves as the "North Star" for all engine components and lessons built for the Esho Arbi Shikhi curriculum. Whenever implementing a new lesson or modifying an existing one, strictly adhere to these high-level principles.

## 1. Absolute Fidelity to the Book
- **Strictly Follow the Source Material:** The content presented to the user must mirror Maulana Abu Taher Misbah's original book as closely as possible. 
- **No Hallucinations or Additions:** Do not add extra exercises, alter the Arabic text, or invent new structural components unless explicitly directed.

## 2. Pedagogical Purity (Zero Noise)
- **No Extra Labels:** Do not introduce UI text, badges, or headers that explain the engine mechanics to the user. 
- **No Developer Jargon:** Exclude all internal terminology (e.g., "3-Segment Flow", "Masculine Vocab Chunk", "Interactive Q&A") from the user-facing interface. 
- **Clean Learning Canvas:** The interface should only contain the lesson title and the immediate pedagogical content. Remove unnecessary author names, logos, or meta-commentary that distract from learning.

## 3. Design System Alignment
- **Raw Neutral Aesthetic:** All UI components must align perfectly with the established design system. Rely strictly on shape, spacing, and neutral color contrast (`bg-neutral-100`, `bg-white`). 
- **No Extraneous Styling:** Do not inject borders, shadows, or custom CSS decorations that violate the approved aesthetic. Rely entirely on the design system's tokens and components.
- **Mobile-First Responsiveness:** Ensure that complex pedagogical components (like side-by-side tables or pointing drills) degrade elegantly on smaller screens without sacrificing their educational clarity.

## 4. Separation of Concerns
- **Data vs. Presentation:** Keep the curriculum data (vocabulary, sentences, rules) strictly separated from the UI logic. 
- **Component Modularity:** Build reusable, self-contained pedagogical components (e.g., a unified flashcard grid, a standard Q&A block) rather than hardcoding layout logic for every single lesson.

By adhering to these core philosophies, we ensure a consistent, premium, and distraction-free learning experience across every lesson in the curriculum.

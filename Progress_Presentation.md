# Project Tariq: Esho Arbi Shikhi - Progress Presentation

## 1. Project Vision & Executive Summary
**Project Tariq** is an Interactive Quranic Arabic Immersion App designed to help learners understand Quranic Arabic natively, bypassing translation-heavy barriers. We are digitizing Maulana Abu Taher Misbah's proven "Direct Method" curriculum from *Esho Arbi Shikhi*, merging classic Madrasa pedagogy with modern, gamified learning experiences.

---

## 2. Current Features & Implementations

### Feature 1: 5-Stage Harakat Fading FSM Engine
**Description:** A core pedagogical feature that gradually removes vowel marks (harakat) in 5 systematic stages (from Full Vocalization to Zero Harakat Mastery). This trains unvoweled reading fluency while intelligently preserving immutable rules like Shaddah and gender homographs (e.g., *anta* vs *anti*).

**Location in Code:** `apps/web/src/lib/harakat/Engine.ts`

**Core Code Snippet:**
```typescript
// 5-Stage FSM Configuration
export const STAGE_CONFIGS: Record<HarakatStage, StageConfig> = {
  STAGE_0: { name: 'Full Vocalization', description: 'Complete vowel diacritics.' },
  STAGE_1: { name: "Ending Tanween / I'rab Fading", description: 'Final inflectional endings faded.' },
  STAGE_2: { name: 'Pattern & Article Fading', description: 'Structural particles drop harakat.' },
  STAGE_3: { name: 'Disambiguation / Root Only', description: 'Preserves selective diacritics.' },
  STAGE_4: { name: 'Zero Harakat Mastery', description: '100% unvoweled authentic reading text.' },
};

// Core Engine Logic for Fading Harakat while preserving protected homographs
function transformWord(word: string, stage: HarakatStage): string {
  if (stage === 'STAGE_0') return word;
  
  // Protects critical homographs (-ka vs -ki, anta vs anti) before stripping harakat
  const { protectedWord, restore } = protectHomographs(word);
  
  if (stage === 'STAGE_4') {
    const unvoweled = stripVowelsKeepShaddah(protectedWord);
    return restore(unvoweled);
  }
  
  // ... logic for intermediate stages (structural words, waqf, disambiguation)
}
```

---

### Feature 2: Interactive Lesson Modules & Immersive Drills
**Description:** Dynamic, gamified learning modules built using React. Includes vocabulary tone-on-tone reveal cards, visual distance demonstrations (Near vs. Far spatial immersion), conversational reflex Q&A drills, and an interactive Arabic font suite (Cairo, Tajawal, Vazirmatn, Noto Sans) toggle.

**Location in Code:** `apps/web/src/components/curriculum/InteractiveLessonModule.tsx`

**Core Code Snippet:**
```tsx
// Using the Harakat Engine in the UI to dynamically render Arabic text
const renderedArabic = renderHarakat(word.ar, harakatStage);

return (
  <div 
    onClick={() => toggleCardFlip(cardKey)} 
    className="group bg-neutral-100 dark:bg-neutral-800 p-6 rounded-[2.5rem] cursor-pointer"
  >
    {!isFlipped ? (
      // Front of Card: Voweled/Unvoweled Arabic based on FSM Stage
      <span className={`text-5xl font-bold ${currentFontClass} leading-relaxed dir-rtl`}>
        {renderedArabic}
      </span>
    ) : (
      // Back of Card: Translation / Immersion Grounding
      <h3 className="text-2xl font-english font-extrabold text-neutral-950 dark:text-white">
        {cleanDash(word.en)}
      </h3>
    )}
  </div>
);
```

---

### Feature 3: Raw Neutral Aesthetic Design System
**Description:** A 100% flat design system utilizing Pure Tone-on-Tone separation, without relying on decorative borders or drop shadows. Uses a strict `neutral-*` palette, soft squircle geometries for cards, and subtle Emerald Green accents for success feedback states.

**Location in Code:** Documented in `QUOTA_HANDOVER_CHECKPOINT.md` and implemented across `apps/web/src/components/design-system/` and lesson modules.

**Core Code Snippet (Styling Approach):**
```tsx
// Example of tone-on-tone separation for selection states (No borders or shadows)
<div
  className={`bg-white dark:bg-neutral-900 rounded-[2rem] p-6 transition-all duration-200 ${
    isMastered ? 'bg-neutral-200/80 dark:bg-neutral-800' : '' // Subtle tone shift on mastery
  }`}
>
   {/* Semantic Mastery Button - pure flat design */}
   <button className={`p-2 rounded-xl transition-all ${
     isMastered 
       ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950' 
       : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400'
     }`}
   >
     <Check className="w-4 h-4" />
   </button>
</div>
```

---

### Feature 4: Translational Practice Route (Unseen Paragraphs)
**Description:** A dedicated practice environment where users are presented with unseen Arabic paragraphs. It features an interactive translation system where users can click individual words, type their translations using inline blanks as guides, and receive immediate feedback. Progress is tracked via a visual progress bar and identical words are auto-solved across the paragraph to build momentum.

**Location in Code:** `apps/web/src/routes/practice/$volumeId/$lessonId/index.tsx`

**Core Code Snippet (Translation Logic):**
```tsx
const handleInputSubmit = (e: React.FormEvent, word: any) => {
  e.preventDefault()
  
  const answer = inputValue.toLowerCase().trim()
  const expected = word.enClean
  const expectedBase = expected.replace(/\s*\([^)]*\)/g, '').trim()

  if (answer === expected || answer === expectedBase) {
    setSolvedIds(prev => {
      const newSet = new Set(prev)
      // Auto-solve identical words across the entire paragraph
      allWords.forEach(w => {
        if (w.ar === word.ar) newSet.add(w.id)
      })
      return newSet
    })
    setSelectedId(null)
    setError(false)
  } else {
    setError(true)
  }
}
```

---

### Feature 5: Interactive Video Demo Pipeline
**Description:** A demonstration pipeline showcasing multimedia integration. It features a synchronized video player where the Arabic transcript scrolls alongside the video. As the video plays, the active sentence is highlighted, and users can click individual words in the transcript to reveal popover dictionary definitions and transliterations.

**Location in Code:**
- Route: `apps/web/src/routes/demo/video.tsx`
- Component: `apps/web/src/components/curriculum/shared/InteractiveVideoPlayer.tsx`

**Core Code Snippet (Transcript Synchronization):**
```tsx
// Find the currently active sentence based on the video's current time
const activeSentenceIndex = transcript.findIndex(s => 
  currentTime >= s.words[0].start && 
  currentTime <= s.words[s.words.length - 1].end + 1.0 // 1s buffer
)

// Automatically scroll to keep the active sentence in view
useEffect(() => {
  if (activeSentenceIndex !== -1 && transcriptContainerRef.current) {
    const activeElement = transcriptContainerRef.current.children[activeSentenceIndex] as HTMLElement;
    if (activeElement) {
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}, [activeSentenceIndex]);
```

---

## 3. Next Steps & Development Backlog
1. **Living Mushaf Integration:** Implementing the Quran.com architecture (King Fahd Complex v2 font) with a 3-Tier comprehension highlighting pipeline.
2. **Volume 1 Rebuild:** Structuring *Esho Arbi Shikhi* Volume 1 Lessons around the new Harakat Engine.
3. **Microservice Backend Validation:** Testing the Spring Boot 3.2+ API (`apps/api-java/`) with the H2 data seeder for curriculum endpoints.

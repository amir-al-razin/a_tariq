# Volume 2 Implementation Plan

## Status: Data Collection Phase
- ✅ Lessons 1-4 fetched successfully
- ⏳ Lesson 5 in progress
- ⏳ Lessons 6-22 pending

---

## Key Findings from Lessons 1-4

### Volume 2 is fundamentally different from Volume 1:
- **Vol 1**: Static nouns, descriptions, "what is this?"
- **Vol 2**: Dynamic verbs, actions, time, "who did what when?"

### Core Teaching Mechanics:

1. **Verb Conjugation Tables** (every lesson)
   - 8 root verbs per lesson
   - 3 tenses × 5 subjects = 15 forms per verb
   - Pattern: Past → Present → Imperative → Prohibition

2. **Masdar (Verbal Noun) System** (Lesson 3+)
   - Shows how verbs are derived from verbal nouns
   - 4 "Abwaab" (verb patterns/families):
     - بَاب فَتَحَ يَفْتَحُ
     - بَاب نَصَرَ يَنْصُرُ  
     - بَاب ضَرَبَ يَضْرِبُ
     - بَاب سَمِعَ يَسْمَعُ
   - This is the "factory" concept from the analysis

3. **Grammar Concepts** (progressive)
   - Lesson 1: Verbal sentences (فِعْل + فَاعِل)
   - Lesson 2: Negation (مَا + past, لَا + present)
   - Lesson 3: Causal particles (لِأَنَّ)
   - Lesson 4: Object/Maf'ul (مفعول به) with nasb case

4. **Reading Passages** (narrative-driven)
   - Past tense stories
   - Present tense descriptions
   - Imperative dialogues
   - Islamic context throughout

5. **Q&A Comprehension** (passage-based)
   - Questions reference the reading passage
   - Who/what/where/when/why questions
   - Yes/no and either/or questions

---

## Required New Components

### 1. MasdarFactoryView ❌ NEW
**Purpose**: Teach verb derivation from verbal nouns

**UI Design**:
```
┌─────────────────────────────────┐
│  Masdar (Verbal Noun)           │
│  ┌───────────────────────────┐  │
│  │   الْفِعْلُ                │  │
│  │   (করা - to do)            │  │
│  └───────────────────────────┘  │
│                                 │
│  Baab Pattern:                  │
│  بَاب فَتَحَ يَفْتَحُ           │
│                                 │
│  Tap to reveal forms:           │
│  ┌─────────┐ ┌─────────┐       │
│  │ Past    │ │ Present │       │
│  │ فَعَلَ  │ │ يَفْعَلُ│       │
│  └─────────┘ └─────────┘       │
│  ┌─────────┐ ┌─────────┐       │
│  │Command  │ │ Prohibit│       │
│  │ اِفْعَلْ│ │لَا تَفْعَلْ│    │
│  └─────────┘ └─────────┘       │
└─────────────────────────────────┘
```

**Data Structure**:
```typescript
interface MasdarItem {
  masdar: string;           // الْفِعْلُ
  masdarMeaning: string;    // করা
  baab: string;             // بَاب فَتَحَ يَفْتَحُ
  past: string;             // فَعَلَ
  present: string;          // يَفْعَلُ
  imperative: string;       // اِفْعَلْ
  prohibition: string;      // لَا تَفْعَلْ
}
```

**Interaction**:
- User taps each card to flip and reveal
- Progress tracked (4 cards = 100%)
- onComplete fires when all 4 revealed

---

### 2. VerbConjugatorView ❌ NEW (for practice/drills)
**Purpose**: Interactive verb conjugation practice

**UI Design**:
```
┌─────────────────────────────────┐
│  Root Verb: كَتَبَ (to write)   │
│                                 │
│  Select Tense:                  │
│  ○ Past  ● Present  ○ Command  │
│                                 │
│  Select Subject:                │
│  ○ He  ● She  ○ You(m)  ○ I    │
│                                 │
│  ┌───────────────────────────┐  │
│  │      تَكْتُبُ              │  │
│  │   (She writes)             │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Use Case**: Exercises/drills, not primary teaching

---

### 3. NarrativeView ❌ NEW
**Purpose**: Reading comprehension with passage + Q&A

**UI Design**:
```
┌─────────────────────────────────┐
│  Reading Passage:               │
│  ┌───────────────────────────┐  │
│  │ خَرَجَ رَاشِدٌ مِنْ بَيْتِهِ│  │
│  │ وَذَهَبَ إِلَى الْمَدْرَسَةِ│  │
│  │ ...                        │  │
│  └───────────────────────────┘  │
│                                 │
│  [Scroll to continue]           │
│                                 │
│  --- After scroll ---           │
│                                 │
│  Q: مَنْ خَرَجَ مِنَ الْبَيْتِ؟ │
│  ○ خَالِدٌ                      │
│  ● رَاشِدٌ                      │
│  ○ بِلَالٌ                      │
└─────────────────────────────────┘
```

**Data Structure**:
```typescript
interface NarrativePayload {
  passage: string[];        // Array of Arabic sentences
  passageEn?: string;       // Optional translation
  questions: QAItem[];      // Comprehension questions
}
```

**Interaction**:
- User scrolls through passage first
- Questions appear after scroll complete
- Standard MCQ interaction from QAndAView

---

### 4. Existing Components (reusable)

✅ **VerbTableView** - Already exists, perfect for conjugation tables
✅ **VocabularyView** - Works for new verb vocabulary  
✅ **GrammarRuleView** - Works for grammar explanations
✅ **QAndAView** - Works for standalone Q&A
✅ **ApplicationView** - Works for example sentences
✅ **ParagraphView** - Works for reading passages (but NarrativeView better for comprehension)

---

## Lesson 1 Chunk Breakdown (Example)

Based on the fetched data, here's how Lesson 1 should be chunked:

1. **Chunk 1-1**: Vocabulary (Prepositions)
   - Type: `vocabulary`
   - Words: مِنْ, إِلَى, عَلَى, بِ, مَعَ, مَلْعَبٌ, مَنْزِلٌ, ثُمَّ

2. **Chunk 1-2**: Verb Table (Past Tense)
   - Type: `verb_table`
   - Tense: `past`
   - 8 verbs × 5 subjects

3. **Chunk 1-3**: Reading Passage (Past Tense)
   - Type: `paragraph`
   - Content: خَرَجَ رَاشِدٌ مِنْ بَيْتِهِ...

4. **Chunk 1-4**: Q&A (Past Tense Comprehension)
   - Type: `q_and_a`
   - Questions about the passage

5. **Chunk 1-5**: Vocabulary (Time Adverbs)
   - Type: `vocabulary`
   - Words: بَعْدَ, قَبْلَ, الْيَوْمَ, الْآنَ, صَبَاحًا, مَسَاءً, غَدًا, أَبَدًا, مَتَى

6. **Chunk 1-6**: Verb Table (Present Tense)
   - Type: `verb_table`
   - Tense: `present`

7. **Chunk 1-7**: Reading Passage (Present Tense)
   - Type: `paragraph`
   - Content: يَخْرُجُ خَالِدٌ الْآنَ...

8. **Chunk 1-8**: Q&A (Present Tense Comprehension)
   - Type: `q_and_a`

9. **Chunk 1-9**: Verb Table (Imperative)
   - Type: `verb_table`
   - Tense: `imperative`

10. **Chunk 1-10**: Reading Passage (Commands)
    - Type: `paragraph`
    - Content: يَا رَاشِدُ! اُخْرُجْ...

11. **Chunk 1-11**: Exercises (Fill-in-the-blank)
    - Type: `q_and_a` (adapted)
    - Preposition insertion exercises

12. **Chunk 1-12**: Grammar Rule (Tarkeeb)
    - Type: `grammar_rule`
    - Verbal vs Nominal sentences

---

## Next Steps (Priority Order)

### Phase 1: Build Missing Components (1-2 days)
1. ✅ VerbTableView (already exists)
2. ❌ Build MasdarFactoryView
3. ❌ Build NarrativeView (optional - can use ParagraphView + QAndAView separately)

### Phase 2: Data Entry (2-3 days)
1. ❌ Fetch remaining lessons (5-22)
2. ❌ Structure Lesson 1 data in curriculum.ts
3. ❌ Test Lesson 1 end-to-end
4. ❌ Structure Lessons 2-5 data
5. ❌ Defer Lessons 6-22 for post-MVP

### Phase 3: Testing & Polish (1 day)
1. ❌ Test all Vol 2 components with real data
2. ❌ Fix any layout/interaction issues
3. ❌ Verify Arabic diacritics render correctly
4. ❌ Test dark mode

---

## Data Structure Extensions Needed

```typescript
// Extend ChunkType
export type ChunkType =
  | 'vocabulary'
  | 'grammar_rule'
  | 'application'
  | 'q_and_a'
  | 'assessment'
  | 'mixed'
  | 'tarkeeb'
  | 'verb_table'      // ✅ Already exists
  | 'idafah_drill'    // ✅ Already exists
  | 'paragraph'       // ✅ Already exists
  | 'masdar_factory'  // ❌ NEW
  | 'narrative';      // ❌ NEW (optional)

// Extend ChunkPayload
interface ChunkPayload {
  // ... existing fields ...
  
  // NEW for masdar factory
  masdarItems?: MasdarItem[];
  
  // NEW for narrative (optional - can use paragraph + q_and_a separately)
  narrative?: {
    passage: string[];
    passageEn?: string;
    questions: QAItem[];
  };
}
```

---

## Recommendation

**Start with Lesson 1 only** - build the 3 new components (MasdarFactoryView is most critical), populate Lesson 1 data, and test end-to-end. Once Lesson 1 works perfectly, the rest will follow the same pattern.

MasdarFactoryView is needed starting Lesson 3, so we can defer it slightly and focus on:
1. VerbTableView (already done)
2. Lesson 1 data entry
3. Test with existing components

Then build MasdarFactoryView before tackling Lesson 3.

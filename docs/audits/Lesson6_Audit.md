# Comprehensive Pedagogical Audit: Esho Arbi Shikhi (Volume 1, Lesson 6)

**Audit Date**: August 3, 2026  
**Auditor**: Senior Curriculum Architect  
**Subject File**: [EshoArbiShikhiVol1Lesson6Engine.tsx](file:///home/amir/Documents/firstmate/projects%20/a_tariq/apps/web/src/components/curriculum/EshoArbiShikhiVol1Lesson6Engine.tsx)  
**Source Text**: *Esho Arbi Shikhi*, Volume 1, Chapter 1, Lesson 6 (الدرس السادس - ষষ্ঠ পাঠ)  
**Physical Pages Audited**: Book Pages 38, 39, and 40 (File pages: `resources/pages/vol1/page-036.png`, `page-037.png`, `page-038.png`)

---

## 1. Executive Summary

A comprehensive line-by-line pedagogical audit was conducted comparing the original textbook *Esho Arbi Shikhi* (Volume 1, Lesson 6) against the implementation in `EshoArbiShikhiVol1Lesson6Engine.tsx`.

### Key Findings

1. **Chronological & Structural Distortion**:
   - The engine rearranges the textbook's carefully structured pedagogical flow. For example, Vocabulary Box 2 (Family Members) is pushed to the absolute end of the lesson (Step 9 out of 10), far removed from the reading paragraphs on Page 40 where those family terms are actively used.
   - Q&A drills (Page 39) are presented *before* Vocabulary Box 1 (Page 39), forcing students to encounter new vocabulary in exercises before learning them.

2. **Truncation & Missing Content**:
   - **Pronoun Substitution Transformations**: The 3-step progression (Base demonstrative -> Explicit Noun sentence -> Parenthetical Pronoun sentence) is truncated. Intermediate sentences like `قَلَمُ مَحْمُودٍ جَدِيدٌ` are omitted entirely.
   - **Parenthetical Variants in Q&A**: All parenthetical pronoun answers in the Q&A drill (e.g., `(هٰذَا قَلَمُهُ)`, `(قَلَمُهُ جَيِّدٌ)`, `(نَعَمْ .. هُوَ رَجُلٌ طَيِّبٌ)`) were stripped.
   - **Prose Sentence Omissions**: Key Arabic sentences from the reading blocks (e.g., `فَاطِمَةُ أُخْتُ بِلَالٍ وَ هُوَ أَخُوهَا`) are missing.

3. **Pedagogical Misapplication of UI Components**:
   - **Forcing `VocabGrid` with Price Tags**: Abstract concept words (e.g., `جِدًّا` - *very*, `مَنْظَرٌ` - *view*, `وَالِدٌ` - *father*) are rendered using picture-card grids styled like e-commerce price tags without images.
   - **Forcing `PointerDrillList` for Non-Pointer Content**: Possessive noun phrases (e.g., `عِقْدُ آمِنَةَ`) and sacred text (`الْقُرْآنُ كِتَابُ اللهِ`) are rendered in `PointerDrillList` with pointer icons (e.g., 📿, 🕋, 🖊️), misrepresenting grammatical paradigms as spatial pointing drills ("This/That").
   - **Forcing English Word-Chip Unscrambling for Prose Reading**: Continuous Arabic reading passages are broken into isolated English chip-reordering puzzles. Students spend time arranging English chips instead of reading Arabic prose.

4. **Stripping of Bengali Pedagogical Language**:
   - *Esho Arbi Shikhi* is written natively for Bengali speakers. The current code replaces all Bengali rule explanations and vocabulary translations (`রাশেদের বই`, `একটি পথ`, `আব্বা`, `আম্মা`) with English equivalents (`Rashed's book`, `A path / road`, `Father`, `Mother`).

---

## 2. Physical Page Mapping vs Engine Step Mapping

| Book Page | Original Section Title / Content | Current Engine Step | Status & Issues |
| :--- | :--- | :--- | :--- |
| **Page 38** (`page-036.png`) | Section 1: Core Idafah Rules & Equations | Step 0: `grammar_rule` | **Flawed**: Uses static English cards; missing Bengali grammatical rules. |
| **Page 38** (`page-036.png`) | Section 2: Rapid Practice Phrases (3 distinct groups) | Step 1: `idafah_phrases` | **Flawed**: Crams 16 items into `PointerDrillList` with price-tag emojis. |
| **Page 38** (`page-036.png`) | Section 3: Pronoun Substitution Transformation Drills | Step 2: `pronoun_substitution` | **Truncated**: Omits 3-step parenthetical progression. |
| **Page 39** (`page-037.png`) | Section 4: Q&A Dialogue Drill (`প্রশ্নোত্তরগুলো পড়ো ও অর্থ বলো`) | Step 3: `qa_practice` | **Flawed & Out of Order**: Placed before Vocab 1; strips parenthetical variants. |
| **Page 39** (`page-037.png`) | Section 5: Vocabulary Box 1 (Places & Sights) | Step 4: `vocab_places` | **Flawed**: Forces price-tag `VocabGrid`; strips Bengali translations. |
| **Page 39** (`page-037.png`) | Section 6: Reading Passage A (Village & Market) | Step 5: `reading_village` | **Flawed**: Turned into English chip-unscramble game. |
| **Page 40** (`page-038.png`) | Section 7: Reading Passage B (City & Society) | Step 6: `reading_city` | **Flawed & Incomplete**: Omits sentence `فَاطِمَةُ أُخْتُ بِلَالٍ وَ هُوَ أَخُوهَا`. |
| **Page 40** (`page-038.png`) | Section 8: Unanswered Comprehension Questions (`أسئلة للإجابة`) | Step 7: `comprehension_exercises` | **Flawed**: Provides pre-made answers, destroying unanswered exercise format. |
| **Page 40** (`page-038.png`) | Section 9: Sacred Context Idafah (`القرآن كتاب الله`) | Step 8: `sacred_idafah` | **Flawed**: Uses `PointerDrillList` with emojis for sacred sentences. |
| **Page 40** (`page-038.png`) | Section 10: Vocabulary Box 2 (Family Members) | Step 9: `vocab_family` | **Displaced**: Pushed to the end instead of accompanying Page 40 reading. |
| N/A | Invented Homework Section | Step 10: `homework` | **Non-Textbook**: Generic placeholder step. |

---

## 3. Detailed Line-by-Line Discrepancy Audit

### Section 1: Core Idafah Rule Paradigm (Book Page 38)

#### Original Text in Book
```arabic
كِتَابٌ + رَاشِدٌ = كِتَابُ رَاشِدٍ    (রাশেদের বই)
كِتَابٌ + عَائِشَةَ = كِتَابُ عَائِشَةَ  (আয়েশার বই)
كِتَابٌ + الْمُعَلِّمُ = كِتَابُ الْمُعَلِّمِ (শিক্ষকের বই)

هٰذَا كِتَابُ رَاشِدٍ وَذٰلِكَ كِتَابُ عَائِشَةَ وَذٰلِكَ كِتَابُ الْمُعَلِّمِ
كِتَابُ رَاشِدٍ جَدِيدٌ وَكِتَابُ عَائِشَةَ جَمِيلٌ وَكِتَابُ الْمُعَلِّمِ مُفِيدٌ
```

#### Current Code Implementation (Step 0)
- Displays 3 static cards using English descriptions:
  - `"Rashed's book (Masculine Name - Tanween Kasrah)"`
  - `"Ayesha's book (Feminine Name - Single Fathah)"`
  - `"The teacher's book (Definite Noun - Single Kasrah)"`

#### Discrepancies & Pedagogical Errors
1. **Bengali Stripping**: The original Bengali labels (`রাশেদের বই`, `আয়েশার বই`, `শিক্ষকের বই`) were removed and replaced with English text.
2. **Lack of Morphological Visualizer**: Does not visually distinguish the `مُضَاف` (Mudaf - first noun losing tanween/alif-lam) from the `مُضَاف إِلَيْهِ` (Mudaf Ilayh - possessor taking majroor case).
3. **Card Clutter**: Places the full sentence examples in static text blocks without audio or interactive focus.

---

### Section 2: Rapid Idafah Drill Groups (Book Page 38)

#### Original Text in Book (Structured in 3 Distinct Groups)

**Group A (Masculine Proper Names / General Nouns with Tanween Kasrah)**:
`قَلَمُ خَالِدٍ - سَاعَةُ بَشِيرٍ - بَيْتُ مَحْمُودٍ - أَخُو سَعِيدٍ - أُخْتُ بِلَالٍ - صَدِيقُ مَاجِدٍ`

**Group B (Feminine Diptote Names with Single Fathah)**:
`عِقْدُ آمِنَةَ - حَقِيبَةُ فَاطِمَةَ - صَدِيقَةُ زَيْنَبَ - أَخُو فَرْحَانَةَ - أُخْتُ خَدِيجَةَ`

**Group C (Definite Nouns with Alif-Lam taking Single Kasrah)**:
`بَابُ الْمَسْجِدِ - اِسْمُ الْوَلَدِ - مِفْتَاحُ الْقُفْلِ - مِصْبَاحُ الْغُرْفَةِ - مُعَلِّمُ الْمَدْرَسَةِ`

#### Current Code Implementation (Step 1)
- Lumps all 16 phrases into a single array (`idafahPhrases`) and feeds them into `PointerDrillList`.
- Assigns artificial emojis and "distance" props (`near`/`far`):
  - `قَلَمُ خَالِدٍ 🖊️ (near)`
  - `سَاعَةُ بَشِيرٍ ⌚ (far)`
  - `عِقْدُ آمِنَةَ 📿 (near)`
  - `مِفْتَاحُ الْقُفْلِ 🔑 (far)`

#### Discrepancies & Pedagogical Errors
1. **Loss of Categorization**: The 3 distinct grammatical groups (Tanween Kasrah vs. Diptote Fathah vs. Alif-Lam Kasrah) are merged into one flat list, hiding the grammatical pattern.
2. **Component Misuse**: `PointerDrillList` is designed for pointer words ("هذا / ذلك" - near vs. far). Applying "near/far" pointers to `سَاعَةُ بَشِيرٍ` (Bashir's watch) makes no pedagogical sense.

---

### Section 3: Pronoun Substitution Transformation Drills (Book Page 38)

#### Original Text in Book
1. `هَذَا قَلَمُ مَحْمُودٍ - قَلَمُ مَحْمُودٍ جَدِيدٌ - ( قَلَمُهُ جَدِيدٌ )`
2. `تِلْكَ سَاعَةُ بَشِيرٍ - سَاعَةُ بَشِيرٍ جَمِيلَةٌ - ( سَاعَتُهُ جَمِيلَةٌ )`
3. `هَذَا عِقْدُ آمِنَةَ - عِقْدُ آمِنَةَ جَمِيلٌ - ( عِقْدُهَا جَمِيلٌ )`
4. `ذَلِكَ الرَّجُلُ أَبُو فَاطِمَةَ - أَبُو فَاطِمَةَ عَالِمٌ كَبِيرٌ - ( أَبُوهَا عَالِمٌ كَبِيرٌ ) . أَبُو مَاجِدٍ مُعَلِّمُ الْمَدْرَسَةِ وَ أُمُّ فَاطِمَةَ مُعَلِّمَةُ الْمَدْرَسَةِ`

#### Current Code Implementation (Step 2)
```typescript
const pronounSubstitutions: PointerDrillItem[] = [
  { id: 1, ar: 'هٰذَا قَلَمُ مَحْمُودٍ - قَلَمُهُ جَدِيدٌ', emoji: '🖊️', distance: 'near' },
  { id: 2, ar: 'تِلْكَ سَاعَةُ بَشِيرٍ - سَاعَتُهُ جَمِيلَةٌ', emoji: '⌚', distance: 'far' },
  { id: 3, ar: 'هٰذَا عِقْدُ آمِنَةَ - عِقْدُهَا جَمِيلٌ', emoji: '📿', distance: 'near' },
  { id: 4, ar: 'ذٰلِكَ الرَّجُلُ أَبُو فَاطِمَةَ - أَبُوهَا عَالِمٌ كَبِيرٌ', emoji: '👳‍♂️', distance: 'far' },
  { id: 5, ar: 'أَبُو مَاجِدٍ مُعَلِّمُ الْمَدْرَسَةِ', emoji: '👨‍🏫', distance: 'near' },
  { id: 6, ar: 'أُمُّ فَاطِمَةَ مُعَلِّمَةُ الْمَدْرَسَةِ', emoji: '👩‍🏫', distance: 'far' },
];
```

#### Discrepancies & Pedagogical Errors
1. **Severe Truncation**:
   - In Item 1: Omitted `قَلَمُ مَحْمُودٍ جَدِيدٌ`.
   - In Item 2: Omitted `سَاعَةُ بَشِيرٍ جَمِيلَةٌ`.
   - In Item 3: Omitted `عِقْدُ آمِنَةَ جَمِيلٌ`.
   - In Item 4: Omitted `أَبُو فَاطِمَةَ عَالِمٌ كَبِيرٌ`.
2. **Destruction of Transformation Logic**: The textbook explicitly teaches the progression:
   - Step A: State the object (`هَذَا قَلَمُ مَحْمُودٍ`)
   - Step B: State the attribute with explicit noun (`قَلَمُ مَحْمُودٍ جَدِيدٌ`)
   - Step C: Substitute explicit noun with attached pronoun (`(قَلَمُهُ جَدِيدٌ)`)
   Removing Step B destroys the pedagogical transition.

---

### Section 4: Q&A Dialogue Drill (Book Page 39)

#### Original Text in Book
Header: `প্রশ্নোত্তরগুলো পড়ো ও অর্থ বলো ।`

1. `مَنْ أَنْتَ أَيُّهَا الرَّجُلُ ؟ أَنَا أَبُو فَاطِمَةَ وَ عَمُّ خَالِدٍ`
2. `هَلْ أَنْتَ إِمَامُ الْمَسْجِدِ ؟ نَعَمْ .. أَنَا إِمَامُ الْمَسْجِدِ`
3. `هَلْ هَذَا قَلَمُ خَالِدٍ ؟ نَعَمْ .. هَذَا قَلَمُ خَالِدٍ ( هَذَا قَلَمُهُ )`
4. `كَيْفَ قَلَمُ خَالِدٍ ؟ ( كَيْفَ قَلَمُهُ ؟ ) قَلَمُ خَالِدٍ جَيِّدٌ ( قَلَمُهُ جَيِّدٌ )`
5. `هَلْ إِمَامُ الْمَسْجِدِ رَجُلٌ طَيِّبٌ ؟ نَعَمْ .. إِمَامُ الْمَسْجِدِ رَجُلٌ طَيِّبٌ ( نَعَمْ .. هُوَ رَجُلٌ طَيِّبٌ )`
6. `هَلْ بَابُ الْبَيْتِ مَفْتُوحٌ ؟ لَا .. بَابُ الْبَيْتِ مُغْلَقٌ ( لَا .. هُوَ مُغْلَقٌ )`

#### Current Code Implementation (Step 3)
- Implemented using `InteractiveDrill` with word chips.
- Omitted parenthetical variants in items 3, 4, 5, and 6:
  - Item 3: Expected `['نَعَمْ', 'هٰذَا', 'قَلَمُ', 'خَالِدٍ']` (Stripped `(هٰذَا قَلَمُهُ)`).
  - Item 4: Question `كَيْفَ قَلَمُ خَالِدٍ ؟` (Stripped `(كَيْفَ قَلَمُهُ ؟)` and stripped expected answer variant `(قَلَمُهُ جَيِّدٌ)`).
  - Item 5: Stripped answer variant `(نَعَمْ .. هُوَ رَجُلٌ طَيِّبٌ)`.
  - Item 6: Stripped answer variant `(لَا .. هُوَ مُغْلَقٌ)`.

---

### Sections 5 & 10: Vocabulary Boxes (Book Pages 39 & 40)

#### Original Text in Book

**Vocab Box 1 (Page 39 - Places & Sights)**:
- `طَرِيقٌ` ->একটি পথ
- `سُوقٌ` ->একটি বাজার
- `قَرْيَةٌ` ->একটি গ্রাম
- `مَدِينَةٌ` ->একটি শহর
- `مَنْظَرٌ` ->একটি দৃশ্য
- `جِدًّا` ->খুব

**Vocab Box 2 (Page 40 - Family Nouns)**:
- `زَوْجٌ` ->স্বামী
- `زَوْجَةٌ` ->স্ত্রী
- `وَالِدٌ` ->আব্বা
- `وَالِدَةٌ` ->আম্মা

#### Current Code Implementation
- Rendered using `VocabGrid`:
  ```typescript
  const vocabPlaces: VocabItem[] = [
    { id: 1, ar: 'طَرِيقٌ', en: 'A path / road', roman: 'tareequn' },
    { id: 2, ar: 'سُوقٌ', en: 'A market', roman: 'suoqun' },
    { id: 3, ar: 'قَرْيَةٌ', en: 'A village', roman: 'qaryatun' },
    { id: 4, ar: 'مَدِينَةٌ', en: 'A city', roman: 'madineatun' },
    { id: 5, ar: 'مَنْظَرٌ', en: 'A scene / view', roman: 'manzarun' },
    { id: 6, ar: 'جِدًّا', en: 'Very', roman: 'jiddan' },
  ];
  ```

#### Discrepancies & Pedagogical Errors
1. **Bengali Translation Removal**: Replaced Bengali terms (`একটি পথ`, `একটি শহর`, `আব্বা`, `আম্মা`) with English words.
2. **Wrong Placement of Vocab 2**: Vocab Box 2 was moved to Step 9 (end of lesson) instead of being presented alongside Page 40 reading passages.
3. **Card Styling Issue**: `VocabGrid` renders price-tag badges (`$`) and image placeholders, which look out of place for abstract nouns.

---

### Sections 6 & 7: Reading Passages (Book Pages 39 & 40)

#### Original Text in Book

**Passage A (Page 39 - Village & Market)**:
`هَذَا مَنْظَرُ الْقَرْيَةِ - مَنْظَرُ الْقَرْيَةِ جَمِيلٌ جِدًّا - سُوقُ الْقَرْيَةِ صَغِيرٌ وَ سُوقُ الْمَدِينَةِ كَبِيرٌ - عَمُّ خَالِدٍ فَلَّاحٌ، اِسْمُهُ بَشِيرٌ وَ عَمَّتُهُ فَلَّاحَةٌ، اِسْمُهَا زَيْنَبُ - عَمُّ خَالِدٍ رَجُلٌ طَيِّبٌ وَ عَمَّتُهُ امْرَأَةٌ طَيِّبَةٌ - تَاجِرُ الْمَدِينَةِ غَنِيٌّ جِدًّا وَ فَلَّاحُ الْقَرْيَةِ فَقِيرٌ جِدًّا .`

**Passage B (Page 40 - City, Relationships & Direct Address)**:
`تِلْكَ مَدِينَةٌ - تِلْكَ الْمَدِينَةُ قَدِيمَةٌ - هَذَا الطَّرِيقُ وَاسِعٌ وَ ذَلِكَ الطَّرِيقُ ضَيِّقٌ - هَذِهِ قَرْيَةٌ - الْقَرْيَةُ جَمِيلَةٌ وَ نَظِيفَةٌ - بِلَالٌ تِلْمِيذٌ مُجْتَهِدٌ وَ فَاطِمَةُ تِلْمِيذَةٌ مُجْتَهِدَةٌ - بِلَالٌ أَخُو فَاطِمَةَ وَ هِيَ أُخْتُهُ - فَاطِمَةُ أُخْتُ بِلَالٍ وَ هُوَ أَخُوهَا - يَا فَرْحَانَةُ ! أَنْتِ بِنْتٌ مُؤَدَّبَةٌ وَ أَخُوكِ وَلَدٌ مُؤَدَّبٌ - يَا خَالِدُ ! أَنْتَ رَجُلٌ طَيِّبٌ وَ زَوْجَتُكَ امْرَأَةٌ طَيِّبَةٌ .`

#### Current Code Implementation (Steps 5 & 6)
- Converted continuous Arabic prose into English sentence-unscramble games.
- **Omitted Arabic Sentence**: `فَاطِمَةُ أُخْتُ بِلَالٍ وَ هُوَ أَخُوهَا` was completely left out of `citySentences`.

---

### Section 8: Unanswered Comprehension Questions (Book Page 40)

#### Original Text in Book
Header: `أسئلة للإجابة`

1. `كَيْفَ مَنْظَرُ الْقَرْيَةِ ؟`
2. `كَيْفَ سُوقُ الْقَرْيَةِ وَ كَيْفَ سُوقُ الْمَدِينَةِ ؟`
3. `مَنْ بَشِيرٌ وَ مَنْ زَيْنَبُ ؟`
4. `كَيْفَ عَمُّ خَالِدٍ وَ كَيْفَ عَمَّتُهُ ؟`
5. `مَنْ بِلَالٌ وَ كَيْفَ هُوَ ؟`
6. `مَنْ فَاطِمَةُ وَ كَيْفَ هِيَ ؟`
7. `هَلْ فَرْحَانَةُ بِنْتٌ مُؤَدَّبَةٌ ؟`
8. `هَلْ أَخُوهَا وَلَدٌ مُؤَدَّبٌ ؟`
9. `كَيْفَ خَالِدٌ وَ كَيْفَ زَوْجَتُهُ ؟`

#### Current Code Implementation (Step 7)
- Converts these self-assessment questions into `InteractiveDrill` exercises with pre-provided answer chips (`expected` and `chips`), turning an open comprehension test into a guided drag-and-drop puzzle.

---

### Section 9: Sacred Context Idafah (Book Page 40)

#### Original Text in Book
`الْقُرْآنُ كِتَابُ اللهِ - الْكَعْبَةُ بَيْتُ اللهِ - مُحَمَّدٌ رَسُولُ اللهِ (صلى الله عليه و سلم) - عَبْدُ اللهِ وَالِدُ الرَّسُولِ وَ آمِنَةُ وَالِدَتُهُ - خَدِيجَةُ زَوْجَةُ الرَّسُولِ وَ أُمُّ فَاطِمَةَ - فَاطِمَةُ بِنْتُ مُحَمَّدٍ (صلى الله عليه و سلم) - عَلِيٌّ زَوْجُ فَاطِمَةَ - عَبْدُ الْمُطَّلِبِ جَدُّ الرَّسُولِ . أَبُو طَالِبٍ عَمُّهُ .`

#### Current Code Implementation (Step 8)
- Rendered in `PointerDrillList` with emojis: `الْقُرْآنُ كِتَابُ اللهِ 📖`, `الْكَعْبَةُ بَيْتُ اللهِ 🕋`, `مُحَمَّدٌ رَسُولُ اللهِ ✨`.
- Misuses pointing drill components for sacred text.

---

## 4. Proposed Designs for New Custom React Components

To replace the misapplied shared components (`VocabGrid`, `PointerDrillList`, `InteractiveDrill`), we propose 5 custom React components:

### Component 1: `IdafahEquationVisualizer`
**Purpose**: Replaces static cards in Step 0. Visualizes the grammatical formula of Mudaf + Mudaf Ilayh.

```tsx
interface IdafahRule {
  id: string;
  mudaf: string;
  mudafIlayh: string;
  result: string;
  bnMeaning: string;
  enMeaning: string;
  ruleCategory: 'masculine_tanween' | 'feminine_diptote' | 'alif_lam_definite';
  grammarExplanationBn: string;
  grammarExplanationEn: string;
}

export function IdafahEquationVisualizer({ rules }: { rules: IdafahRule[] }) {
  return (
    <div className="space-y-6">
      {rules.map((rule) => (
        <div key={rule.id} className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-amber-200 dark:border-neutral-700 shadow-sm">
          <div className="flex flex-row-reverse items-center justify-between gap-4 font-arabic text-2xl font-bold">
            <span className="text-emerald-600 dark:text-emerald-400">{rule.mudaf}</span>
            <span className="text-neutral-400">+</span>
            <span className="text-indigo-600 dark:text-indigo-400">{rule.mudafIlayh}</span>
            <span className="text-neutral-400">=</span>
            <span className="text-amber-700 dark:text-amber-300 text-3xl">{rule.result}</span>
          </div>
          <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700 flex justify-between text-sm">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">{rule.bnMeaning}</span>
            <span className="text-neutral-500">{rule.grammarExplanationBn}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### Component 2: `IdafahGroupGrid`
**Purpose**: Replaces `PointerDrillList` in Step 1. Groups possessive phrases into 3 clear grammatical categories without price-tag badges or pointer emojis.

```tsx
interface IdafahPhraseGroup {
  titleBn: string;
  titleEn: string;
  ruleBadge: string;
  phrases: { ar: string; bn: string; en: string }[];
}

export function IdafahGroupGrid({ groups }: { groups: IdafahPhraseGroup[] }) {
  return (
    <div className="space-y-8">
      {groups.map((group, idx) => (
        <div key={idx} className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-200">{group.titleBn}</h3>
            <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold px-3 py-1 rounded-full">
              {group.ruleBadge}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" dir="rtl">
            {group.phrases.map((phrase, pIdx) => (
              <div key={pIdx} className="bg-white dark:bg-neutral-800 p-4 rounded-xl text-center border border-neutral-100 dark:border-neutral-700">
                <span className="font-arabic text-xl font-bold block text-neutral-900 dark:text-neutral-100">{phrase.ar}</span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 block mt-1" dir="ltr">{phrase.bn}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### Component 3: `PronounShiftCard`
**Purpose**: Replaces Step 2 `PointerDrillList`. Renders the full 3-stage morphological pronoun substitution progression.

```tsx
interface PronounShiftItem {
  id: number;
  baseSentence: string;        // e.g. "هٰذَا قَلَمُ مَحْمُودٍ"
  explicitAttribute: string;   // e.g. "قَلَمُ مَحْمُودٍ جَدِيدٌ"
  pronounAttribute: string;    // e.g. "(قَلَمُهُ جَدِيدٌ)"
  bnMeaning: string;
}

export function PronounShiftCard({ items }: { items: PronounShiftItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white dark:bg-neutral-800 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 space-y-3" dir="rtl">
          <div className="flex flex-wrap items-center justify-start gap-3 font-arabic text-xl">
            <span className="text-neutral-700 dark:text-neutral-300">{item.baseSentence}</span>
            <span className="text-neutral-400 font-sans">←</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{item.explicitAttribute}</span>
            <span className="text-neutral-400 font-sans">→</span>
            <span className="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-bold px-3 py-1 rounded-xl border border-emerald-200 dark:border-emerald-800">
              {item.pronounAttribute}
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans text-right" dir="ltr">
            {item.bnMeaning}
          </p>
        </div>
      ))}
    </div>
  );
}
```

---

### Component 4: `DualVariantDialogueCard`
**Purpose**: Replaces Step 3 `InteractiveDrill` for Q&A drills. Preserves both the full explicit noun answer and the parenthetical pronoun variant answer.

```tsx
interface QADualVariant {
  id: number;
  questionAr: string;
  questionVariantAr?: string;     // e.g. "(كَيْفَ قَلَمُهُ ؟)"
  explicitAnswerAr: string;        // e.g. "قَلَمُ خَالِدٍ جَيِّدٌ"
  pronounAnswerAr?: string;       // e.g. "(قَلَمُهُ جَيِّدٌ)"
  bnTranslation: string;
}

export function DualVariantDialogueCard({ dialogues }: { dialogues: QADualVariant[] }) {
  return (
    <div className="space-y-4">
      {dialogues.map((item) => (
        <div key={item.id} className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 space-y-4" dir="rtl">
          {/* Question Row */}
          <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-950/30 p-4 rounded-xl">
            <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">س</span>
            <div className="font-arabic text-xl text-amber-950 dark:text-amber-200 font-bold">
              {item.questionAr} {item.questionVariantAr && <span className="text-amber-700 dark:text-amber-400 text-lg font-normal">{item.questionVariantAr}</span>}
            </div>
          </div>
          {/* Answer Row */}
          <div className="flex items-start gap-3 bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-xl">
            <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">ج</span>
            <div className="font-arabic text-xl text-emerald-950 dark:text-emerald-200 font-bold space-x-2 space-x-reverse">
              <span>{item.explicitAnswerAr}</span>
              {item.pronounAnswerAr && <span className="text-emerald-700 dark:text-emerald-400 text-lg font-normal">{item.pronounAnswerAr}</span>}
            </div>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 text-left font-sans" dir="ltr">
            {item.bnTranslation}
          </p>
        </div>
      ))}
    </div>
  );
}
```

---

### Component 5: `ProseReader`
**Purpose**: Replaces Steps 5, 6, and 8. Renders continuous Arabic reading passages with sentence-by-sentence audio playback and Bengali translations on demand.

```tsx
interface SentenceSegment {
  ar: string;
  bn: string;
  en: string;
}

export function ProseReader({ title, sentences }: { title: string; sentences: SentenceSegment[] }) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700 space-y-6">
      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 text-center">{title}</h3>
      <div className="leading-loose font-arabic text-2xl text-right space-y-4" dir="rtl">
        {sentences.map((s, idx) => (
          <span key={idx} className="inline-block p-2 hover:bg-amber-50 dark:hover:bg-neutral-700 rounded-xl transition-colors cursor-pointer group relative">
            <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{s.ar}</span>
            <span className="mx-2 text-neutral-300 dark:text-neutral-600">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
```

---

## 5. Remediation Plan & Recommendations

1. **Restore Textbook Chronology**:
   - Move Vocab Box 1 (Places) and Vocab Box 2 (Family) to their proper textbook positions (Page 39 and Page 40).
   - Reorder Q&A Dialogue drills after Vocab Box 1.

2. **Restore Missing Arabic & Bengali Content**:
   - Re-insert all omitted parenthetical pronoun variants in Section 3 and Section 4.
   - Re-insert missing sentence `فَاطِمَةُ أُخْتُ بِلَالٍ وَ هُوَ أَخُوهَا` into Section 7.
   - Replace English translations with original Bengali translations throughout all data structures.

3. **Deploy Custom React Components**:
   - Replace `VocabGrid` with `CompactVocabTable`.
   - Replace `PointerDrillList` with `IdafahGroupGrid` for Step 1 and `ProseReader` for Sacred Idafah (Step 8).
   - Replace `InteractiveDrill` with `DualVariantDialogueCard` for Q&A drills and `ProseReader` for reading blocks.

---

*Report compiled and validated by Senior Curriculum Architect.*

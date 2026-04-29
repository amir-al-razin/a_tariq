# Volume 2, Chapter 1 - Pedagogical Analysis

## Overview
Volume 2 shifts from **nominal sentences (describing things)** to **verbal sentences (actions, time, movement)**. The core mechanic is verb conjugation across tenses and subjects.

## Lessons Fetched (3/22)
- ✅ Lesson 1: Complete
- ✅ Lesson 2: Complete  
- ✅ Lesson 3: Complete
- ⏳ Lessons 4-22: Pending

---

## Lesson 1 Structure

### Content Types Identified:
1. **Verb Conjugation Tables** (3 tenses × 5 subjects = 15 forms per verb)
   - Past (ماضٍ): فَعَلَ, فَعَلَتْ, فَعَلْتَ, فَعَلْتِ, فَعَلْتُ
   - Present/Future (مُضَارِع): يَفْعَلُ, تَفْعَلُ, تَفْعَلُ, تَفْعَلِيْنَ, أَفْعَلُ
   - Imperative/Prohibition (أَمْر و نَهْي): اِفْعَلْ/اِفْعَلِي, لَا تَفْعَلْ/لَا تَفْعَلِي

2. **Vocabulary** (Prepositions, Adverbs of Time, Nouns)
   - Prepositions: مِنْ, إِلَى, عَلَى, بِ, مَعَ
   - Time adverbs: الْيَوْمَ, الْآنَ, صَبَاحًا, مَسَاءً, غَدًا, أَبَدًا, مَتَى
   - Nouns: مَلْعَبٌ, مَنْزِلٌ, حَصِيْرٌ, مَقْعَدٌ, سَبِيْلٌ

3. **Reading Passages** (Narrative with verbs in context)
   - Past tense narrative: خَرَجَ رَاشِدٌ مِنْ بَيْتِهِ...
   - Present tense narrative: يَخْرُجُ خَالِدٌ الْآنَ...
   - Imperative narrative: يَا رَاشِدُ! اُخْرُجْ مِنْ غُرْفَتِكَ...

4. **Q&A Pairs** (Comprehension questions)
   - مَنْ / مِنْ أَيْنَ / إِلَى أَيْنَ / مَتَى / مَاذَا questions
   - Yes/no questions with هَلْ
   - Either/or questions with أَ...أَمْ

5. **Exercises** (Fill-in-the-blank, translation)
   - Preposition insertion
   - Reading comprehension Q&A

6. **Grammar Rules (Tarkeeb)** - Sentence diagramming
   - Verbal sentence: فِعْل + فَاعِل = جُمْلَة فِعْلِيَّة
   - Nominal sentence: مُبْتَدَأ + خَبَر = جُمْلَة اِسْمِيَّة

---

## Lesson 2 Structure

### New Content:
1. **Negative Past Tense** (مَا + past verb)
   - مَا فَعَلَ, مَا فَعَلَتْ, مَا فَعَلْتَ, مَا فَعَلْتِ, مَا فَعَلْتُ

2. **Negative Present/Future** (لَا + present verb)
   - لَا يَفْعَلُ, لَا تَفْعَلُ, لَا تَفْعَلِينَ, لَا أَفْعَلُ

3. **New Vocabulary**
   - شِمَالٌ (left), يَمِينٌ (right), نَوْمٌ (sleep), ضَوْءٌ (light), رَدِيءٌ (bad), وَرَقَةٌ (paper/leaf)

4. **Answer Particles Rule**
   - نَعَمْ / لَا for positive questions
   - بَلَى for negative questions (أَ مَا...)

---

## Lesson 3 Structure

### New Content:
1. **Masdar (Verbal Nouns)** - The "factory" concept
   - Shows how to derive verbs from verbal nouns
   - 4 verb patterns (Abwaab):
     - بَاب فَتَحَ يَفْتَحُ
     - بَاب نَصَرَ يَنْصُرُ
     - بَاب ضَرَبَ يَضْرِبُ
     - بَاب سَمِعَ يَسْمَعُ

2. **New Verbs** (8 new roots)
   - سَبَحَ (swim), نَجَحَ (succeed), نَزَلَ (descend), كَذَبَ (lie)
   - صَدَقَ (tell truth), أَكَلَ (eat), شَرِبَ (drink), ضَحِكَ (laugh)

3. **Causal Particle** (لِأَنَّ - because)
   - لِأَنَّكَ, لِأَنَّكِ, لِأَنَّهُ, لِأَنَّهَا, لِأَنِّيْ

4. **Islamic Context Vocabulary**
   - شَهْرٌ, سَنَةٌ, نَهَارٌ, رَمَضَانُ, صَائِمٌ, حَيَاةٌ, مَطَرٌ

---

## Required New View Components

Based on the analysis, Volume 2 needs these NEW components:

### 1. **VerbTableView** ✅ (Already exists)
- Display conjugation tables for all tenses
- 5 columns (هُوَ, هِيَ, أَنْتَ, أَنْتِ, أَنَا)
- 3 tense modes (Past, Present, Imperative)

### 2. **MasdarFactoryView** ❌ (NEW - needed for Lesson 3+)
- Shows verbal noun (masdar) at top
- User selects a "baab" (verb pattern)
- Displays the 4 derived forms (past, present, imperative, prohibition)
- Interactive: tap to reveal each form

### 3. **VerbConjugatorView** ❌ (NEW - for practice)
- User given a root verb
- Toggle switches for:
  - Tense (Past / Present / Command)
  - Subject (He / She / You-m / You-f / I)
- Shows correct conjugated form
- Used for drills/practice

### 4. **NarrativeView** ❌ (NEW - combines paragraph + Q&A)
- Shows reading passage first (scrollable)
- Then shows comprehension questions
- Questions reference the passage content
- Different from standalone Q&A

### 5. Existing components that work:
- ✅ VocabularyView (for new verb vocabulary)
- ✅ GrammarRuleView (for grammar explanations)
- ✅ QAndAView (for Q&A pairs)
- ✅ ApplicationView (for example sentences)
- ✅ ParagraphView (for reading passages)

---

## Data Structure Needed

```typescript
// Extend existing ChunkPayload
interface ChunkPayload {
  // ... existing fields ...
  
  // NEW for Vol 2:
  verbTable?: VerbTableRow[];
  verbTense?: 'past' | 'present' | 'imperative';
  
  masdarFactory?: {
    masdar: string;           // الْفِعْلُ
    masdarMeaning: string;    // করা
    baab: string;             // بَاب فَتَحَ يَفْتَحُ
    past: string;             // فَعَلَ
    present: string;          // يَفْعَلُ
    imperative: string;       // اِفْعَلْ
    prohibition: string;      // لَا تَفْعَلْ
  }[];
  
  narrative?: {
    passage: string[];        // Array of Arabic sentences
    passageEn?: string;
    questions: QAItem[];      // Comprehension questions
  };
}
```

---

## Next Steps

1. ✅ Fetch remaining lessons (4-22) from NotebookLM
2. ❌ Build MasdarFactoryView component
3. ❌ Build NarrativeView component  
4. ❌ Build VerbConjugatorView component
5. ❌ Populate curriculum.ts with Vol 2 Ch 1 data
6. ❌ Test all components with real data

---

## Notes

- Volume 2 is significantly more interactive than Volume 1
- The "Abwaab" (verb patterns) are the core teaching mechanic
- Each lesson builds on previous verb knowledge
- Islamic context is woven throughout (Ramadan, prayer times, Quran)
- Bengali translations are preserved throughout

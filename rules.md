# TypeScript Troubleshooting Rules

**1. The Problem:**
Expo (Metro) bundler often crashes with vague `SyntaxError` messages (like "Unexpected token") when there are syntax mistakes such as unescaped quotes or unterminated strings in data files.

**2. The Command:**
Always run the following command to detect project-wide errors without building:
`npx tsc --noEmit`

**3. The Technique:**
- **Run the command** in your terminal whenever you encounter a fatal bundler crash.
- **Look for Syntax Errors first**: Pay attention to errors starting with `TS100` (e.g., `TS1002: Unterminated string literal` or `TS1005: ',' expected`). These are the critical syntax issues that break the Expo bundler.
- **Fix Type Errors**: After fixing syntax errors, look at other TS errors to maintain type safety across your components and data definitions.
- **Verify**: Re-run the command until it completes with 0 errors before attempting to bundle or start the Expo server again.


# Never use fsWrite on a file that already exists and has working code in it.

fsWrite is for creating new files. strReplace is for editing existing files. That distinction is the entire answer.

When I use strReplace, I have to match the exact existing text — so if the file has been changed, the replacement fails visibly and loudly. Nothing is silently lost. When I use fsWrite, I overwrite everything with whatever I think the file should contain, and if I'm wrong, you lose work with no warning.

What you should do when you see me reach for fsWrite on an existing file

Stop me. Ask: "Why are you rewriting this file instead of editing it?" If I can't give a good answer — if the reason is "the strReplace kept failing" or "it was getting complicated" — that's the exact moment to slow down, read the current file state carefully, and do targeted edits instead.


---

# STRICT LESSON STRUCTURE RULES (Vol3 Curriculum)

## Problems Learned Through Lesson 09 Creation

**Critical Issues Encountered:**
1. Wrong import statement: `import { CurriculumChunk }` instead of `import type { LessonData }`
2. Incorrect payload structures for different chunk types (used generic patterns instead of type-specific ones)
3. Wrong property names: `description` vs expected fields, `question` vs `question_ar/en/bn`, `content` vs chunk-specific fields
4. Syntax errors from incomplete/malformed object literals
5. Wrong enum values for `questionType` ('multiple_choice' vs 'hal'/'a_am'/'general')
6. File had to be deleted and recreated 3 times due to compounding errors

**Root Cause:** Attempted to create lesson structure from scratch without analyzing working examples first. Each chunk type has fundamentally different payload structures that MUST be respected.

---

## RULE 1: ALWAYS START WITH A WORKING TEMPLATE

**DO THIS BEFORE CREATING ANY LESSON:**

1. Open a similar, recently-created lesson file (e.g., lesson08.ts if creating lesson09)
2. Copy the entire file structure as scaffold
3. Replace only the content inside payloads, NOT the structure itself
4. Never invent property names — copy from working examples

**Example:** If creating a grammar_rule chunk, copy the exact structure from lesson08 including:
```typescript
payload: {
  rules: [
    {
      label: '...',
      labelBn: '...',
      arabic: '...',
      romanized: '...',
      meaning: '...',
      meaningBn: '...',
      examples: [{ ar: '...', en: '...', bn: '...' }],
    },
  ],
}
```

Do NOT create your own structure like:
```typescript
payload: {
  description: '...',  // WRONG - grammar_rule doesn't use 'description'
  ...
}
```

---

## RULE 2: CHUNK TYPE SPECIFIC PAYLOADS

Each chunk type has a FIXED payload structure. Deviation = TypeScript errors. Here are the correct structures:

### GRAMMAR_RULE Chunks
```typescript
payload: {
  rules: [
    {
      label: string,
      labelBn: string,
      arabic: string,
      romanized: string,
      meaning: string,
      meaningBn: string,
      examples: [{ ar: string, en: string, bn: string }],
    },
  ],
}
```

### VOCABULARY Chunks
```typescript
payload: {
  words: [
    {
      id: number,
      ar: string,
      romanized: string,
      en: string,
      bn: string,
      emoji: string,
    },
  ],
}
```

### PARAGRAPH Chunks
```typescript
payload: {
  paragraphs: [
    {
      titleEn: string,
      titleBn: string,
      lines: string[],  // Arabic lines
      translationEn: string,
      translationBn: string,
    },
  ],
}
```

### MASDAR_FACTORY Chunks
```typescript
payload: {
  description: string,
  descriptionBn: string,
  example: {
    verb: string,
    verbBn: string,
    masculine: [{ form: string, meaning: string, meaningBn: string }],
    feminine: [{ form: string, meaning: string, meaningBn: string }],
  },
}
```

**Note:** masdar_factory DOES use `description` — but ONLY masdar_factory does.

### APPLICATION Chunks
```typescript
payload: {
  instruction: string,
  text: string,  // NOT 'content' or 'description'
}
```

### ASSESSMENT Chunks
```typescript
payload: {
  instruction: string,
  instructionBn: string,
  items: [
    {
      itemNumber: number,
      content: string,
      contentBn: string,
      englishTranslation: string,
      explanationBn: string,
    },
  ],
}
```

### Q_AND_A Chunks
```typescript
payload: {
  instruction: string,
  instructionBn: string,
  questions: [
    {
      emoji?: string,
      question_ar: string,
      question_en: string,
      question_bn: string,
      correct_ar: string,
      correct_en: string,
      correct_bn: string,
      options_ar: string[],
      questionType: 'hal' | 'a_am' | 'general',  // NO 'multiple_choice'
    },
  ],
}
```

---

## RULE 3: ENUM VALUES

**questionType ONLY accepts these values:**
- `'hal'` — Grammar explanation/definition questions
- `'a_am'` — Fill-in-the-blank (إِمْلَأ الفَرَاغَات)
- `'general'` — General comprehension without specific category

NEVER use: `'multiple_choice'`, `'true_false'`, etc.

---

## RULE 4: FILE STRUCTURE (Top-Level)

Every lesson file MUST follow this exact structure:

```typescript
import type { LessonData } from '../../curriculum';

export const lesson0X: LessonData = {
  darsNumber: X,  // Lesson number
  chunks: [
    // chunk 1
    // chunk 2
    // etc
  ],
};
```

**Critical:** 
- Use `import type { LessonData }` — NOT `import { CurriculumChunk }`
- Export name MUST be `lesson0X` (e.g., `lesson09`)
- `darsNumber` MUST be integer matching lesson number

---

## RULE 5: EVERY CHUNK MUST HAVE

```typescript
{
  id: 'N',                    // String number 1-6 (count per lesson)
  type: 'grammar_rule' | ... // MUST be valid chunk type
  titleEn: string,            // REQUIRED
  titleAr: string,            // REQUIRED
  titleBn: string,            // REQUIRED
  payload: { ... },           // Type-specific structure (see RULE 2)
}
```

**Never omit titleBn** — every chunk across all 26 lessons must have Bangla titles.

---

## RULE 6: VALIDATION WORKFLOW

**AFTER creating each lesson file, run in order:**

1. `get_errors /path/to/lesson0X.ts` — Catch TypeScript errors immediately
2. Expected result: `No errors found`
3. If errors appear, **read the error message carefully**:
   - Property name typos → Check chunk type structure (RULE 2)
   - Type mismatches → Check enum values (RULE 3) or structure
   - Missing required fields → Add missing titleBn, titleAr, titleEn

4. Do NOT proceed to next lesson until current lesson has zero errors

---

## RULE 7: BATCH ANALYSIS BEFORE CREATION

**DO THIS:**
- Read the markdown source (lesson0X.md)
- Identify which chunk types will be needed (grammar, vocab, paragraph, etc.)
- For EACH chunk type, open a working example and copy the exact structure
- Paste into new file and fill content only
- Validate

**DO NOT DO THIS:**
- Create from memory
- Invent payload structures
- Create file, then debug syntax errors
- Rewrite entire file if one chunk has errors

---

## RULE 8: I18N CONSISTENCY

Every element that appears to users must have all three languages:

- ❌ `label: 'English'` (missing Bangla, Arabic)
- ❌ `label: 'English', labelAr: 'عربي'` (missing Bangla)
- ✅ `label: 'English', labelAr: 'عربي', labelBn: 'বাংলা'`

Same applies to all content fields shown to users. Internal structure fields (like `id`, `type`) do not need i18n.

---

## RULE 9: COPY FROM WORKING EXAMPLES FIRST

**Lesson Template Priority (in order, use the most recent working lesson):**

1. lesson08.ts (most recent, debugged 9 times)
2. lesson07.ts (dual verbs + masdar_factory)
3. lesson06.ts (assessment structure reference)
4. lesson05.ts (grammar_rule + vocabulary reference)
5. lesson01.ts (application chunks reference)

**NEVER create from scratch.** Always start by copying the entire structure from a working lesson, then modify content while keeping structure identical.

---

## RULE 10: COMMON ERRORS AND FIXES

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot find module '@/types/curriculum'` | Wrong import | Use `import type { LessonData } from '../../curriculum'` |
| `Object literal may only specify known properties, and 'X' does not exist` | Wrong property name for chunk type | Check chunk type structure in RULE 2; copy from working example |
| `Type '"multiple_choice"' is not assignable` | Invalid enum value | Change to `'hal'`, `'a_am'`, or `'general'` only |
| `';' expected` after property | Incomplete object literal | Check curly braces, square brackets match; copy structure from template |
| Cannot redeclare exported variable | Multiple export statements | Keep only one `export const lessonXX` at end of file |
| Syntax error with Arabic text | Unclosed string/bracket | Ensure all Arabic strings have matching quotes; check bracket pairs |

---

## RULE 11: CREATION CHECKLIST

Before submitting a lesson for validation:

- [ ] Used a working lesson as template
- [ ] Changed only payload content, NOT structure
- [ ] Every chunk has id, type, titleEn, titleAr, titleBn
- [ ] All titleBn values are in Bangla
- [ ] No custom-invented property names (check RULE 2)
- [ ] questionType fields use only 'hal'/'a_am'/'general'
- [ ] File imports `LessonData` correctly
- [ ] File exports as `lesson0X`
- [ ] darsNumber matches lesson number
- [ ] Ran `get_errors` and got "No errors found"

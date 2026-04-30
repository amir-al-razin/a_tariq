# NotebookLM Fetch Prompt Template — Vol 2 Chapter 1

Use this prompt for each lesson. Replace LESSON_NUMBER and LESSON_ARABIC.

---

From Volume 2 (الجزء الثاني), Chapter 1 (الباب الأول), extract the COMPLETE content of Lesson LESSON_NUMBER (LESSON_ARABIC).

FORMAT RULES — follow exactly:
1. All meanings must be in ENGLISH first, then Bangla in parentheses. Example: "to go (যাওয়া)"
2. Preserve ALL Arabic text with full diacritics (harakat) exactly as printed
3. Include every vocabulary word, grammar rule, reading passage, Q&A pair, and exercise — miss nothing

For each content block, also label it with one of these component types:
- VOCABULARY — list of words with Arabic + transliteration + English meaning (+ Bangla)
- VERB_TABLE — conjugation table (past/present/imperative) for multiple verbs
- GRAMMAR_RULE — a structural rule with Arabic formula + examples
- APPLICATION — example sentences with emoji/image context
- PARAGRAPH — a reading passage (narrative text)
- QA — question and answer pairs for comprehension
- ASSESSMENT — exercises or fill-in-the-blank drills
- TARKEEB — sentence diagramming (فعل/فاعل/مفعول analysis)
- MASDAR_FACTORY — masdar (verbal noun) → verb derivation table showing all 4 forms
- NEW_COMPONENT_NEEDED — if the content does not fit any above type, describe what it is and why it needs a new component

Structure your response as:

## Lesson LESSON_NUMBER — [Arabic title]

### Block 1 — [COMPONENT_TYPE]
[content]

### Block 2 — [COMPONENT_TYPE]
[content]

...and so on for every block in the lesson.

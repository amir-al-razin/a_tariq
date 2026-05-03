# NotebookLM Fetch Procedure & Prompt Template

This file is the single source of truth for fetching lesson content from NotebookLM.
Read this entirely before running any fetch command.

---

## 1. Notebook IDs

Do NOT run `notebooklm list` to find these — it wastes credits and time. Use the IDs below directly.

| Notebook | ID | Contents |
|---|---|---|
| "lets learn arabic" | `a8570edf-81be-4419-b5f4-93f404ec79bb` | Vol 1 only (4 sources) |
| "esho arbi shikhi" | `ad1567db-4cef-4e07-a05a-d636a26905ea` | Full book — Vol 1, 2, 3 (6 sources) |

**Always use `ad1567db-4cef-4e07-a05a-d636a26905ea` for Vol 2 and Vol 3 content.**

---

## 2. Transport & Session

The `browser` transport (default) is unreliable — it often returns empty responses or times out.

**Always use:**
```
--transport http --session-path ~/.notebooklm/session.json
```

The session file at `~/.notebooklm/session.json` contains saved login credentials.
If it returns an auth error, the session has expired and needs to be refreshed by running:
```bash
notebooklm export-session --transport browser
```

---

## 3. Fetch Command

```bash
notebooklm chat ad1567db-4cef-4e07-a05a-d636a26905ea \
  --transport http \
  --session-path ~/.notebooklm/session.json \
  --question "QUESTION_HERE" \
  > OUTPUT_FILE.md 2>&1
echo "EXIT:$?"
```

**Important notes:**
- Always redirect both stdout and stderr (`2>&1`) so errors are captured in the file
- Always echo the exit code after so you know if it succeeded
- The command often appears to time out in the shell but completes in the background — always check the output file line count before assuming failure: `wc -l OUTPUT_FILE.md`
- Keep questions short (under 200 characters) — long prompts cause timeouts
- Fetch one lesson at a time; parallel fetches cause session conflicts

---

## 4. Output Directory Convention

```
docs/notebooklm/
  vol1-chapter-1/     ← lesson01.md ... lesson09.md
  vol2-chapter-1/     ← lesson01.md ... lesson22.md
  vol2-chapter-2/     ← lesson01.md ... lesson09.md
  vol2-chapter-3/     ← lesson01.md ... lesson03.md
  vol3-chapter-1/     ← (future)
```

File naming: always zero-padded two digits — `lesson01.md`, `lesson09.md`, `lesson22.md`.

---

## 5. The Fetch Question

Keep it short. This version works reliably:

```
Volume X Chapter Y Lesson N: all vocabulary with English meanings, grammar rules,
reading passages, Q&A, exercises. Full Arabic diacritics. Label each block:
VOCABULARY, GRAMMAR_RULE, PARAGRAPH, QA, ASSESSMENT, VERB_TABLE,
MASDAR_FACTORY, or NEW_COMPONENT_NEEDED.
```

Replace `X`, `Y`, `N` with the actual numbers. Example for Vol 2, Ch 1, Lesson 7:

```bash
notebooklm chat ad1567db-4cef-4e07-a05a-d636a26905ea \
  --transport http \
  --session-path ~/.notebooklm/session.json \
  --question "Volume 2 Chapter 1 Lesson 7: all vocabulary with English meanings, grammar rules, reading passages, Q&A, exercises. Full Arabic diacritics. Label each block: VOCABULARY, GRAMMAR_RULE, PARAGRAPH, QA, ASSESSMENT, VERB_TABLE, MASDAR_FACTORY, or NEW_COMPONENT_NEEDED." \
  > docs/notebooklm/vol2-chapter-1/lesson07.md 2>&1
echo "EXIT:$?"
```

---

## 6. Batch Fetch Loop

To fetch multiple lessons sequentially (do NOT run in parallel):

```bash
for L in 4 5 6 7 8; do
  notebooklm chat ad1567db-4cef-4e07-a05a-d636a26905ea \
    --transport http \
    --session-path ~/.notebooklm/session.json \
    --question "Volume 2 Chapter 1 Lesson $L: all vocabulary with English meanings, grammar rules, reading passages, Q&A, exercises. Full Arabic diacritics. Label each block: VOCABULARY, GRAMMAR_RULE, PARAGRAPH, QA, ASSESSMENT, VERB_TABLE, MASDAR_FACTORY, or NEW_COMPONENT_NEEDED." \
    > docs/notebooklm/vol2-chapter-1/lesson$(printf '%02d' $L).md 2>&1
  echo "L${L}: $? ($(wc -l < docs/notebooklm/vol2-chapter-1/lesson$(printf '%02d' $L).md) lines)"
done
```

A successful fetch produces 60–200 lines. Under 10 lines means it failed — retry that lesson individually.

---

## 7. Content Block Labels

When NotebookLM labels a block, map it to the app's ChunkType as follows:

| NotebookLM label | App ChunkType | Component |
|---|---|---|
| VOCABULARY | `vocabulary` | VocabularyView |
| GRAMMAR_RULE | `grammar_rule` | GrammarRuleView |
| PARAGRAPH | `paragraph` | ParagraphView |
| QA | `q_and_a` | QAndAView |
| ASSESSMENT | `assessment` | QAndAView |
| VERB_TABLE | `verb_table` | VerbTableView |
| MASDAR_FACTORY | `masdar_factory` | MasdarFactoryView |
| TARKEEB | `tarkeeb` | TarkeebView |
| APPLICATION | `application` | ApplicationView |
| NEW_COMPONENT_NEEDED | — | Read the description; may need a new component |

---

## 8. Language Rules for Fetched Content

- **English is primary** — all meanings, translations, and labels must be in English
- **Bangla is secondary** — only include if the source explicitly provides it; store in `bn?` optional fields
- Do NOT ask NotebookLM to provide Bangla — it will mix languages and make the output messy
- If Bangla appears in the fetched output, it goes into `bn?` fields only, never into `en` fields

---

## 9. String Safety Rules (Critical)

When writing fetched content into `.ts` data files, follow these rules to avoid bundler syntax errors:

1. **Never put a single quote inside a single-quoted string.**
   Wrong: `romanized: 'dam'un'`
   Right: `romanized: "dam'un"`

2. **Never put a double quote inside a double-quoted string.**
   Wrong: `meaning: "indicates "will do""`
   Right: `meaning: "indicates 'will do'"`

3. **When a string needs both types of quotes, use double quotes and replace inner double quotes with single quotes.**

4. **Romanization strings almost always contain apostrophes** (ʿayn, hamza). Always wrap them in double quotes: `romanized: "mu'allim"` not `romanized: 'mu'allim'`.

---

## 10. Verify Before Moving On

After fetching, always verify:

```bash
wc -l docs/notebooklm/FOLDER/lessonNN.md
head -5 docs/notebooklm/FOLDER/lessonNN.md
```

The first line should say `NotebookLM: Connected via undici` — if it says `Failed` or is empty, the fetch failed.

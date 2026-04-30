# Vol 2 Chapter 1 — Component Map

> Analysis of all 22 lessons in `docs/notebooklm/vol2-chapter-1/`  
> Mapped against existing `ChunkType` definitions in `data/curriculum.ts`

---

## 1. Component Inventory — Existing ChunkTypes

| ChunkType | Component | What it renders |
|---|---|---|
| `vocabulary` | `VocabularyView` | Flip cards + word list. Each card: Arabic word, romanization, English/Bangla meaning, optional emoji. |
| `grammar_rule` | `GrammarRuleView` | Rule label + Arabic form + romanization + meaning + expandable examples list. |
| `application` | `ApplicationView` | Emoji + Arabic sentence + English translation. Scrollable card deck for fluency reading. |
| `q_and_a` | `QAndAView` | MCQ with Arabic options. Question shown in Arabic + English; student taps correct Arabic answer. Supports `hal`, `a_am`, `general` question types. |
| `assessment` | `QAndAView` | Same MCQ engine as `q_and_a`, used for exercises/drills rather than conversational Q&A. |
| `paragraph` | `ParagraphView` | Reading passage (Arabic lines). Translation revealed on demand. Supports title + multi-line blocks. |
| `verb_table` | `VerbTableView` | Conjugation grid: one tense at a time (`past` / `present` / `imperative`). Columns: هُوَ / هِيَ / أَنْتَ / أَنْتِ / أَنَا. Multiple verb rows per table. |
| `tarkeeb` | `TarkeebView` | Sentence diagram tree. Each node has Arabic text + grammatical role label (Arabic + English). |
| `idafah_drill` | `IdafahDrillView` | Base phrase → possession phrase reveal. Tap to flip from base to expanded form. |
| `masdar_factory` | *(NOT YET BUILT)* | Masdar + Baab → 4 derived forms (past, present, imperative, prohibitive). |


---

## 2. Lesson-by-Lesson Block Map

### Lesson 01 — Prepositions, Past/Present/Imperative Verbs

**Grammar focus:** Prepositions (مِنْ، إِلَى، عَلَى، بِـ، مَعَ), past/present/imperative conjugation of 8 core verbs, prohibitive (لَا + imperative).

| Block | Content | Component |
|---|---|---|
| Vocabulary | 22 words: prepositions, time adverbs, nouns (مَلْعَبٌ، مَنْزِلٌ، حَصِيرٌ، مَقْعَدٌ…) | `vocabulary` |
| Verb Table — Past | 8 verbs × 5 subjects (هُوَ/هِيَ/أَنْتَ/أَنْتِ/أَنَا) | `verb_table` (tense: `past`) |
| Verb Table — Present | Same 8 verbs, present tense | `verb_table` (tense: `present`) |
| Verb Table — Imperative + Prohibitive | Imperative (m/f) + لَا تَفْعَلْ (m/f) | `verb_table` (tense: `imperative`) |
| Reading Passages (×5) | Narrative paragraphs using past, present, imperative | `paragraph` |
| Q&A Pairs (~45 items) | Comprehension questions on passages | `q_and_a` |
| Exercise 1 | Fill-in-the-blank: choose correct preposition | `assessment` |
| Exercise 2 | Fill-in-the-blank: choose correct Harf | `assessment` |
| Exercise 3 | Read passage + answer questions | `paragraph` + `q_and_a` |
| Exercise 4 (Tarkeeb) | Sentence structure diagrams (فعل+فاعل, مبتدأ+خبر…) | `tarkeeb` |


### Lesson 02 — Negation: مَا (past) and لَا (present)

**Grammar focus:** Negative past with مَا, negative present/future with لَا, answer particles (نَعَمْ / لَا / بَلَى).

| Block | Content | Component |
|---|---|---|
| Vocabulary | 6 words: يَمِينٌ، شِمَالٌ، نَوْمٌ، رَدِيءٌ، ضَوْءٌ، وَرَقَةٌ | `vocabulary` |
| Verb Table — Negative Past (مَا) | مَا فَعَلَ × 5 subjects | `verb_table` (tense: `past`) |
| Verb Table — Negative Present (لَا) | لَا يَفْعَلُ × 5 subjects | `verb_table` (tense: `present`) |
| Reading Passages (×3) | Sentences using مَا + past and لَا + present | `paragraph` |
| Q&A Pairs (~15 items) | Comprehension questions with negative answers | `q_and_a` |
| Exercise 1 | Add مَا / لَا to verbs | `assessment` |
| Exercise 2 | Say the meaning of given verb forms | `assessment` |
| Exercise 3 | Translate to Arabic (English → Arabic) | `assessment` |
| Exercise 4 | Conversational drill (open-ended) | `q_and_a` |
| Exercise 5 | Answer questions from passage | `q_and_a` |
| Exercise 6 | Answer-particle drill (نَعَمْ / بَلَى / لَا) | `grammar_rule` + `assessment` |


### Lesson 03 — Masdars (Verbal Nouns) + Baab System

**Grammar focus:** Masdar (verbal noun) for each verb; 4 Abwaab (فَتَحَ، نَصَرَ، ضَرَبَ، سَمِعَ); masdar → past/present/imperative/prohibitive table.

| Block | Content | Component |
|---|---|---|
| Vocabulary — Masdars | 16 core masdars (الْخُرُوجُ، الذَّهَابُ، الْجُلُوسُ…) | `vocabulary` |
| Vocabulary — لِأَنَّ particles | لِأَنَّ، لِأَنَّهُ، لِأَنَّكَ، لِأَنِّيْ | `vocabulary` |
| Vocabulary — Extended by Baab | ~30 masdars grouped under 4 Abwaab | `vocabulary` |
| Verb Tables (×8) | Masdar : ماضي - مضارع - أمر - نهي (8 tables, 2 verbs each) | `masdar_factory` *(NEW)* |
| Reading Passage | Ramadan passage using new verbs | `paragraph` |
| Q&A Pairs (~13 items) | Comprehension questions | `q_and_a` |
| Exercise 1–4 | Memorize/drill verbs, ask each other, Tarkeeb analysis | `assessment` + `tarkeeb` |

> **⚠️ New component needed:** The verb tables in this lesson are the canonical `masdar_factory` pattern: masdar + baab → 4 derived forms. This is the primary lesson introducing that structure.


### Lesson 04 — Transitive Verbs + Object (مَفْعُول بِهِ)

**Grammar focus:** Transitive verbs taking a direct object (مَفْعُول بِهِ); verbs: فَهِمَ، عَرَفَ، سَمِعَ، حَفِظَ، فَتَحَ، مَسَحَ، لَبِسَ، خَلَعَ، غَرَسَ، نَصَرَ.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 13 words: قَدْ، خَمْرٌ، يَوْمٌ، كَلِمَةٌ، جُمْلَةٌ، عَالِمٌ، حُبٌّ، قَوْلٌ… | `vocabulary` |
| Verb forms for قَالَ | Partial conjugation of قَالَ (present + imperative) | `verb_table` (tense: `present`) |
| Reading Passages (×8) | Narrative using transitive verbs with objects | `paragraph` |
| Q&A Pairs (~30 items) | Comprehension questions on passages | `q_and_a` |
| Exercise 1 | Fill-in-the-blank with correct object form | `assessment` |
| Exercise 2 | Complete sentences (nominative → accusative) | `assessment` |
| Exercise 3 | Yes/No answer-particle drill | `assessment` |


### Lesson 05 — Attached Object Pronouns (ضَمَائِر مُتَّصِلَة)

**Grammar focus:** Object pronouns attached to verbs (ـهُ، ـهَا، ـهُمَا، ـكَ، ـكِ، ـنِيْ، ـكُمْ); future with سَـ prefix.

| Block | Content | Component |
|---|---|---|
| Vocabulary — Pronouns | Attached pronouns: ـكَ، ـكِ، ـنِيْ، ـكُمْ، ـهُمَا… | `vocabulary` |
| Vocabulary — General | الْخَلْقُ، النَّظَرُ، السُّجُودُ، الشَّمْسُ، الْقَمَرُ… | `vocabulary` |
| Future with سَـ | سَيَقْرَأُ، سَيَكْتُبُ… (8 forms) | `grammar_rule` |
| Reading Passages (×2) | Sentences with attached pronouns | `paragraph` |
| Q&A Pairs (~24 items) | Comprehension questions using pronoun-attached answers | `q_and_a` |
| No formal exercises | Entire lesson is contextual practice | — |


### Lesson 06 — Hollow Verbs (Baab Qāla, Bā'a, Nāma)

**Grammar focus:** Hollow verbs (أَجْوَف): قَالَ، بَاعَ، نَامَ — full conjugation past/present/imperative/prohibitive.

| Block | Content | Component |
|---|---|---|
| Vocabulary — Masdars | الْقَوْلُ، الصَّوْمُ، التَّوْبَةُ، الْقِيَامُ، الْبَيْعُ، الصَّيْدُ، الْخِيَاطَةُ، الطَّيَرَانُ، النَّوْمُ، الْخَوْفُ | `vocabulary` |
| Verb Table — قَالَ | Past/present/imperative/prohibitive × 5 subjects | `masdar_factory` *(NEW)* |
| Verb Table — بَاعَ | Same pattern | `masdar_factory` *(NEW)* |
| Verb Table — نَامَ | Same pattern | `masdar_factory` *(NEW)* |
| Grammar note — قُلْتُ لَهُ | Pronoun attachment with قَالَ | `grammar_rule` |
| Grammar note — دَخَلَ / رَكِبَ usage | Preposition variation with specific verbs | `grammar_rule` |
| Reading Passages (×5) | Sentences using hollow verbs in context | `paragraph` |
| Q&A Pairs (~10 items) | Comprehension questions | `q_and_a` |
| Exercise 1 | Read and translate verb forms | `assessment` |
| Exercise 2 | Translate to Arabic (Bangla → Arabic) | `assessment` |
| Exercise 3 | Conversational drill | `q_and_a` |


### Lesson 07 — Form IV Verbs (بَابُ الإِفْعَالِ)

**Grammar focus:** Form IV (أَفْعَلَ / يُفْعِلُ): الإِخْرَاجُ، الإِنْزَالُ، الإِحْضَارُ… including hollow Form IV (أَجَابَ).

| Block | Content | Component |
|---|---|---|
| Vocabulary — Form IV Masdars | 19 masdars (الإِخْرَاجُ، الإِنْزَالُ، الإِرْسَالُ…) | `vocabulary` |
| Vocabulary — Nouns | ضَيْفٌ، خِطَابٌ، ظَلَامٌ، لِوَجْهِ اللهِ | `vocabulary` |
| Verb Table — Sound Form IV (أَخْرَجَ) | Past/present/imperative/prohibitive × 5 | `masdar_factory` *(NEW)* |
| Verb Table — Hollow Form IV (أَجَابَ) | Same pattern | `masdar_factory` *(NEW)* |
| Reading Passages (×3) | Contrastive pairs (Form I vs Form IV) + narrative | `paragraph` |
| Exercise 1 | Compare Form I vs Form IV forms | `assessment` |
| Exercise 2 | Form verbs from masdars (sound) | `assessment` |
| Exercise 3 | Form verbs from masdars (hollow) | `assessment` |
| Exercise 4 | Answer standalone questions | `q_and_a` |
| Exercise 5 | Affirmative/negative answer drill | `assessment` |


### Lesson 08 — Future Negation with لَنْ

**Grammar focus:** لَنْ + مضارع منصوب (definite future negation); Mudaf/Mudaf Ilayhi in vocative (يَا مُعَلِّمَ الْمَدْرَسَةِ).

| Block | Content | Component |
|---|---|---|
| Vocabulary | 14 present-tense verbs listed for لَنْ practice | `vocabulary` |
| Vocabulary — Noun phrases | وَلَدُ الْفَلَّاحِ vs وَلَدُ فَلَّاحٍ | `grammar_rule` |
| Verb Table — لَنْ | لَنْ يَفْعَلَ × 5 subjects | `grammar_rule` *(لَنْ rule + table)* |
| Reading Passages | 10 sentences using لَنْ in context | `paragraph` |
| Q&A Pairs (×4) | Dialogue pairs using لَنْ questions | `q_and_a` |
| Exercise 1 | Mudaf/Mudaf Ilayhi recognition | `grammar_rule` |
| Exercise 2 | Vocative with Mudaf (يَا + Mansub) | `assessment` |

> **Note:** The لَنْ conjugation table is a grammar rule, not a full verb table — it shows the particle's effect on the verb ending. Map to `grammar_rule` with examples, not `verb_table`.


### Lesson 09 — Lam of Purpose (لِـ + مضارع منصوب)

**Grammar focus:** لِـ attached to present tense verb = "in order to" (purpose clause); verb goes to subjunctive (fatha ending).

| Block | Content | Component |
|---|---|---|
| Vocabulary | 9 words: الدَّرْسُ، الْأَخْذُ، الطَّبْخُ، الْأُسْرَةُ، غَدَاءٌ، عَشَاءٌ، حَمَّامٌ، مُذْنِبٌ، شَيْخٌ كَبِيرٌ | `vocabulary` |
| Verb Table — لِـ + subjunctive | لِيَقْرَأَ × 5 subjects (past + present context) | `grammar_rule` |
| Reading Passages (×3) | Sentences using لِـ purpose clause | `paragraph` |
| Q&A Pairs (~16 items) | لِمَاذَا questions answered with لِـ clause | `q_and_a` |
| Exercise 1 | Add لِـ to masdars and conjugate | `assessment` |
| Exercise 2 | Vocative Mudaf drill (يَا صَدِيقَ رَاشِدٍ) | `assessment` |


### Lesson 10 — أَنْ + Verb (Infinitive Construction with يُرِيدُ)

**Grammar focus:** يُرِيدُ أَنْ يَفْعَلَ / أَرَادَ أَنْ يَفْعَلَ — "wants to do / wanted to do"; أَنْ puts verb in subjunctive.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 7 words: عَصِيرٌ، شَاةٌ، بَقَرَةٌ، كَبْشٌ، قِرْطَاسٌ، مِمَّ، إِلَامَ | `vocabulary` |
| Verb Table — يُرِيدُ أَنْ (present) | يُرِيدُ أَنْ يَفْعَلَ × 5 subjects | `grammar_rule` |
| Verb Table — أَرَادَ أَنْ (past) | أَرَادَ أَنْ يَفْعَلَ × 5 subjects | `grammar_rule` |
| Reading Passages | Sentences using يُرِيدُ أَنْ / أَرَادَ أَنْ | `paragraph` |
| Q&A Pairs (~10 items) | مَاذَا يُرِيدُ questions | `q_and_a` |
| Exercise 1 | Read/translate أَنْ constructions + extended passage | `paragraph` + `assessment` |
| Answer questions | ~18 comprehension questions | `q_and_a` |


### Lesson 11 — إِنَّ and لَعَلَّ (Particles of Emphasis/Hope)

**Grammar focus:** إِنَّ puts the subject (اسم إِنَّ) into accusative (Mansub/fatha); لَعَلَّ = "perhaps/maybe" with same effect.

| Block | Content | Component |
|---|---|---|
| Vocabulary | إِنَّ (certainly/indeed), لَعَلَّ (perhaps/maybe) | `vocabulary` |
| Grammar Rule — إِنَّ | إِنَّ + اسم منصوب + خبر مرفوع; transformation examples | `grammar_rule` |
| Grammar Rule — إِنَّ + verbal sentence | إِنَّ مَاجِدًا يَفْهَمُ… | `grammar_rule` |
| Reading Passage | 12 sentences using إِنَّ | `paragraph` |
| No Q&A / Exercises | Source only has page 1 of this lesson | — |

> **Note:** لَعَلَّ appears in lesson 18's reading passage but is not formally introduced until here. Both إِنَّ and لَعَلَّ map cleanly to `grammar_rule` with transformation examples.


### Lesson 12 — كَانَ، صَارَ، لَيْسَ (Kana Sisters — Past/Negative Copulas)

**Grammar focus:** كَانَ (was), صَارَ (became), لَيْسَ (is not) — all put their predicate (خبر) into accusative (Mansub). Also: لَيْسَ + بِـ construction.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 25 adjectives/nouns used in examples: تِلْمِيذٌ، مُعَلِّمٌ، فَقِيرٌ، غَنِيٌّ، فَاسِقٌ، صَالِحٌ… | `vocabulary` |
| Verb Table — كَانَ / صَارَ / لَيْسَ | 3-column table × 5 subjects | `verb_table` (tense: `past`) |
| Reading Passages — 3rd/2nd/1st person | Transformation sentences: X is Y → X was Y → X became Z → X is not Y | `paragraph` |
| Grammar Rule — لَيْسَ + بِـ | لَيْسَ رَاشِدٌ بِكَاذِبٍ (emphatic negation) | `grammar_rule` |
| No Q&A / Exercises | Lesson transitions directly to Lesson 13 | — |

> **Note:** The كَانَ/صَارَ/لَيْسَ table is a special case — it's a 3-verb comparison table, not a single-verb conjugation. The existing `verb_table` type (one row per verb) can accommodate this if each row is one of the three verbs.


### Lesson 13 — Past Continuous / Habitual Past (كَانَ + مضارع)

**Grammar focus:** كَانَ يَفْعَلُ = "used to do / was doing". Three word-order variants shown.

| Block | Content | Component |
|---|---|---|
| Verb Table — كَانَ + يَقْرَأُ | كَانَ يَقْرَأُ × 5 subjects | `grammar_rule` *(pattern table, not a full verb_table)* |
| Vocabulary examples | 15 كَانَ يَفْعَلُ forms listed | `grammar_rule` |
| Word-order variants | 3 orderings for masculine + 3 for feminine | `grammar_rule` |
| No reading passage / Q&A / Exercises | Single-page grammar lesson | — |

> **Note:** This is a pure grammar pattern lesson. The "table" is really a paradigm showing the كَانَ + مضارع construction across pronouns — best rendered as `grammar_rule` with examples, not `verb_table`.


### Lesson 14 — Form II Verbs (بَابُ التَّفْعِيل)

**Grammar focus:** Form II (فَعَّلَ / يُفَعِّلُ): التَّعْلِيمُ، التَّنْظِيفُ، التَّنْوِيرُ، التَّصْدِيقُ، التَّكْذِيبُ، السَّلَامُ.

| Block | Content | Component |
|---|---|---|
| Vocabulary — Form II Masdars | 8 masdars: التَّعْلِيمُ، التَّنْظِيفُ، التَّنْوِيرُ… | `vocabulary` |
| Vocabulary — General | شَيْءٌ، الطَّيْرُ، النَّحْلُ، أَصْحَابٌ… | `vocabulary` |
| Verb Table — عَلَّمَ | Past/present/imperative/prohibitive × 5 | `masdar_factory` *(NEW)* |
| Reading Passages (×8) | Sentences using Form II verbs | `paragraph` |
| No Q&A / Exercises | Lesson transitions directly to Lesson 15 | — |


### Lesson 15 — Form V Verbs (بَابُ التَّفَعُّل)

**Grammar focus:** Form V (تَفَعَّلَ / يَتَفَعَّلُ): التَّعَلُّمُ، التَّنَوُّرُ، التَّقَبُّلُ، التَّصَدُّقُ، التَّكَلُّمُ.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 6 words: التَّنَوُّرُ، التَّقَبُّلُ، التَّصَدُّقُ، التَّكَلُّمُ، بَدْرٌ، الإِنْجِلِيزِيَّةُ | `vocabulary` |
| Verb Table — تَعَلَّمَ | Past/present/imperative/prohibitive × 5 | `masdar_factory` *(NEW)* |
| Reading Passage | 3 paragraphs using Form V verbs | `paragraph` |
| Q&A (questions only) | 12 comprehension questions (no answers given) | `q_and_a` |
| Grammar note | كَلَّمَ vs تَكَلَّمَ مَعَ usage difference | `grammar_rule` |


### Lesson 16 — Form VIII Verbs (بَابُ الإِفْتِعَال)

**Grammar focus:** Form VIII (اِفْتَعَلَ / يَفْتَعِلُ): الإِبْتِسَامُ، الاِغْتِسَالُ، الاِقْتِرَابُ، الاِبْتِعَادُ. Also reviews كَانَ + مضارع and إِنَّ in context.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 10 words: الإِبْتِسَامُ، الاِغْتِسَالُ، الاِقْتِرَابُ، حِضْنٌ، شَاطِئٌ، الْغَرَقُ، سَاخِنٌ، سَاعَةٌ، السَّاعَةُ | `vocabulary` |
| Verb Table — اِبْتَسَمَ | Past/present/imperative/prohibitive × 5 | `masdar_factory` *(NEW)* |
| Reading Passages (×14) | Sentences using Form VIII + review of كَانَ/إِنَّ | `paragraph` |
| Grammar review block | كَانَ + adj, إِنَّ + verbal sentence side-by-side | `grammar_rule` |
| No Q&A / Exercises | Lesson transitions directly to Lesson 17 | — |


### Lesson 17 — Form X Verbs (بَابُ الإِسْتِفْعَال)

**Grammar focus:** Form X (اِسْتَفْعَلَ / يَسْتَفْعِلُ): اِسْتَعْمَلَ، اِسْتَغْفَرَ، اِسْتَطْعَمَ، اِسْتَقْبَلَ; hollow Form X: اِسْتَرَاحَ، اِسْتَعَانَ، اِسْتَطَاعَ، اِسْتَشَارَ.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 20 words: الإِسْتِغْفَارُ، الإِسْتِطْعَامُ، صَعْبٌ، سَهْلٌ، صَابُونَةٌ، الزِّيَارَةُ، الإِسْتِرَاحَةُ… | `vocabulary` |
| Verb Table — اِسْتَعْمَلَ (sound) | Past/present/imperative/prohibitive × 5 | `masdar_factory` *(NEW)* |
| Verb Table — اِسْتَرَاحَ (hollow) | Same pattern | `masdar_factory` *(NEW)* |
| Reading Passages — Part 1 | Sound Form X verbs in context | `paragraph` |
| Reading Passages — Part 2 | Hollow Form X verbs in context | `paragraph` |
| Q&A (~14 items) | Comprehension questions | `q_and_a` |


### Lesson 18 — Form X Review + لَعَلَّ in Context

**Grammar focus:** Continuation/review of Form X (اِسْتَرَاحَ، اِسْتَطَاعَ، اِسْتَشَارَ); لَعَلَّ used in a sentence (لَعَلَّ أَمَامَكِ عَمَلًا كَثِيرًا).

> **Note:** Pages 75 and 77 are missing from the source. Only page 76 (reading passages) is available.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 6 words (same as Lesson 17 continuation): الْعَمَلُ، التَّعَبُ، الْقُعُودُ، طَاعَةٌ، كَسُولٌ، مَشْغُولٌ | `vocabulary` |
| Reading Passages | Form X verbs + لَعَلَّ in one sentence | `paragraph` |
| لَعَلَّ usage | لَعَلَّ أَمَامَكِ عَمَلًا كَثِيرًا (perhaps you have much work) | `grammar_rule` |
| Verb tables / Q&A / Exercises | Missing from source | — |


### Lesson 19 — Form III Verbs (بَابُ الْمُفَاعَلَة)

**Grammar focus:** Form III (فَاعَلَ / يُفَاعِلُ): الْمُسَاعَدَةُ، الْمُهَاجَرَةُ، الْمُقَاتَلَةُ، الْمُشَاوَرَةُ، الْمُسَافَرَةُ، الْمُجَاهَدَةُ، الْمُجَادَلَةُ. Also: عَادَ (hollow verb = to return).

| Block | Content | Component |
|---|---|---|
| Vocabulary | 19 words: Form III masdars + شَابٌّ، أَمْرٌ، عِزٌّ، كَرَامَةٌ… | `vocabulary` |
| Verb Table — سَاعَدَ | Past/present/imperative/prohibitive × 5 | `masdar_factory` *(NEW)* |
| Reading Passages (~20 sentences) | Form III verbs in Islamic/narrative context | `paragraph` |
| No Q&A / Exercises | Lesson transitions directly to Lesson 20 | — |


### Lesson 20 — Masdar Review + لِـ Purpose Clause Consolidation

**Grammar focus:** Comprehensive masdar list across all Abwaab; fill-in-the-blank with لِـ + subjunctive; أَمَرَ أَنْ vs أَمَرَ بِـ + masdar equivalence.

| Block | Content | Component |
|---|---|---|
| Vocabulary — Masdars (all Abwaab) | 20 masdars spanning Forms I–X | `vocabulary` |
| Vocabulary — New verbs | النَّفْعُ، الرِّزْقُ، الشِّبَعُ، الْأَمْرُ، الْخِدْمَةُ، الشُّكْرُ، الإِجْتِهَادُ، الإِشْرَاكُ | `vocabulary` |
| Exercise — Fill-in-the-blank | 8 sentences: fill correct لِـ + verb form | `assessment` |
| Reading Passages (×5) | Theological/narrative passages using لِـ purpose | `paragraph` |
| Q&A (~14 items) | لِمَاذَا questions answered with لِـ clause | `q_and_a` |
| Grammar table — أَنْ vs بِـ + masdar | أَمَرَ أَنْ يَعْبُدَهُ ↔ أَمَرَ بِعِبَادَةِ اللهِ | `grammar_rule` |


### Lesson 21 — أَنْ Constructions: Same vs Different Subject

**Grammar focus:** أَنْ with same subject (أُرِيدُ أَنْ أَفْعَلَ) vs different subject (أُرِيدُ أَنْ تَفْعَلَ); بَعْدَ أَنْ / قَبْلَ أَنْ + past/present.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 5 words: الظُّهُورُ، التَّزَيُّنُ، السَّعَادَةُ، خَيْرٌ، الطَّلَبُ | `vocabulary` |
| Grammar Rule — same vs different subject | أَرَادَ أَنْ يَتَصَدَّقَ vs أَرَادَ أَنْ أَتَصَدَّقَ | `grammar_rule` |
| Grammar Rule — بَعْدَ أَنْ / قَبْلَ أَنْ | Before/after constructions with past + present | `grammar_rule` |
| Verb exercises (10 forms) | Read and translate أَنْ constructions | `assessment` |
| Reading Passages (×8) | Sentences using أَنْ with various subjects | `paragraph` |
| Q&A (~13 items) | Comprehension questions | `q_and_a` |


### Lesson 22 — Irrational Plurals (جَمْع غَيْر الْعَاقِل)

**Grammar focus:** Non-human plurals take feminine singular adjectives and demonstratives (هَذِهِ كُتُبٌ جَدِيدَةٌ). No verb tables or Q&A.

| Block | Content | Component |
|---|---|---|
| Vocabulary | 18 plural nouns: كُتُبٌ، مُدُنٌ، أَقْلَامٌ، بُيُوتٌ، غُرَفٌ، أَبْوَابٌ، طُرُقٌ، أَسْوَاقٌ… | `vocabulary` |
| Grammar Rule — Demonstratives with plurals | هَذَا كِتَابٌ → هَذِهِ كُتُبٌ | `grammar_rule` |
| Grammar Rule — Adjectives with plurals | كِتَابٌ جَدِيدٌ → كُتُبٌ جَدِيدَةٌ | `grammar_rule` |
| Reading Phrases | 15 demonstrative + plural phrases | `application` |
| Reading Phrases | 6 adjective + plural pairs | `application` |
| Exercise 1 | Fill adjective for singular → plural pairs | `assessment` |
| Exercise 2 | Fill adjective with definite article | `assessment` |
| Exercise 3 | Fill adjective in Idafah + plural context | `assessment` |
| Exercise 4 | Verb agreement with plurals | `assessment` |


---

## 3. New Component Candidates

### 3.1 `masdar_factory` — Masdar + Baab → 4 Derived Forms *(NOT YET BUILT)*

**Appears in:** Lessons 03, 06, 07, 14, 15, 16, 17, 19 (and implicitly in 01–02 as the underlying pattern)

**What it needs to do:**
- Accept a masdar (verbal noun) and its Baab label (e.g., "بَابُ التَّفْعِيل")
- Display 4 derived forms in a grid: ماضي / مضارع / أمر / نهي
- Each cell shows the Arabic form + optional English gloss
- Support both sound and hollow verb patterns (the hollow forms differ in past tense: e.g., قَالَ vs قَالَتْ, بِعْتَ not بَاعَتَ)
- Multiple rows per screen (typically 2–8 masdars per lesson)
- Optionally show the 5-subject conjugation for each tense on tap/expand

**Data shape needed:**
```typescript
interface MasdarFactoryRow {
  masdar: string;       // الْخُرُوجُ
  masdarEn: string;     // "to exit"
  baab?: string;        // بَابُ نَصَرَ يَنْصُرُ
  past: string;         // خَرَجَ
  present: string;      // يَخْرُجُ
  imperative: string;   // اُخْرُجْ
  prohibitive: string;  // لَا تَخْرُجْ
}
```

---

### 3.2 Potential: `kana_drill` — كَانَ/صَارَ/لَيْسَ Transformation Drill

**Appears in:** Lessons 12, 13, 16 (review)

**What it needs to do:**
- Show a base nominal sentence (X is Y)
- Student taps to reveal the كَانَ form (X was Y), صَارَ form (X became Z), لَيْسَ form (X is not Y)
- Essentially a 3-step reveal card

**Assessment:** This *could* be handled by `grammar_rule` with rich examples, or by `assessment` MCQ. A dedicated component would be better UX but is not strictly required for MVP. **Flag as optional enhancement.**

---

### 3.3 Potential: `sentence_transform` — Pattern Transformation Drill

**Appears in:** Lessons 20, 21 (أَنْ vs بِـ + masdar; same vs different subject)

**What it needs to do:**
- Show two equivalent sentence structures side by side
- Student reads both and confirms understanding
- Could be a 2-column `grammar_rule` variant

**Assessment:** The existing `grammar_rule` with `examples` array can handle this if examples include both forms. **No new component strictly needed — use `grammar_rule`.**

---

### 3.4 No New Component Needed: Fill-in-the-Blank Exercises

**Appears in:** Lessons 01, 02, 04, 09, 20, 22

**Assessment:** All fill-in-the-blank exercises in this chapter are **multiple-choice** (choose from 2–3 options). The existing `assessment` type (which uses `QAndAView` with MCQ) handles this correctly. The "blank" is the question, and the options are the choices. **No new component needed.**

---

### 3.5 No New Component Needed: Dialogue/Conversation Patterns

**Appears in:** Lessons 04, 06, 07, 09, 10, 14, 17, 21

**Assessment:** All dialogues in this chapter are teacher-student or character-character exchanges that follow the Q&A pattern. They map cleanly to `q_and_a` (conversational) or `paragraph` (narrative). No dedicated dialogue/conversation component is needed for this chapter. **Flag for review if Vol 2 Chapter 2 introduces multi-turn dialogue scripts.**


---

## 4. Summary Table

| Lesson | Block types used | New component needed? |
|---|---|---|
| 01 | `vocabulary`, `verb_table` ×3, `paragraph` ×5, `q_and_a`, `assessment` ×3, `tarkeeb` | No |
| 02 | `vocabulary`, `verb_table` ×2, `paragraph` ×3, `q_and_a`, `assessment` ×5, `grammar_rule` | No |
| 03 | `vocabulary` ×3, **`masdar_factory`** ×8, `paragraph`, `q_and_a`, `assessment`, `tarkeeb` | **YES — `masdar_factory`** |
| 04 | `vocabulary`, `verb_table`, `paragraph` ×8, `q_and_a`, `assessment` ×3 | No |
| 05 | `vocabulary` ×2, `grammar_rule`, `paragraph` ×2, `q_and_a` | No |
| 06 | `vocabulary`, **`masdar_factory`** ×3, `grammar_rule` ×3, `paragraph` ×5, `q_and_a`, `assessment` ×3 | **YES — `masdar_factory`** |
| 07 | `vocabulary` ×2, **`masdar_factory`** ×2, `paragraph` ×3, `q_and_a`, `assessment` ×5 | **YES — `masdar_factory`** |
| 08 | `vocabulary`, `grammar_rule` ×2, `paragraph`, `q_and_a`, `assessment` | No |
| 09 | `vocabulary`, `grammar_rule`, `paragraph` ×3, `q_and_a`, `assessment` ×2 | No |
| 10 | `vocabulary`, `grammar_rule` ×2, `paragraph`, `q_and_a`, `assessment` | No |
| 11 | `vocabulary`, `grammar_rule` ×2, `paragraph` | No |
| 12 | `vocabulary`, `verb_table`, `paragraph`, `grammar_rule` | No |
| 13 | `grammar_rule` ×3 | No |
| 14 | `vocabulary` ×2, **`masdar_factory`**, `paragraph` ×8 | **YES — `masdar_factory`** |
| 15 | `vocabulary`, **`masdar_factory`**, `paragraph`, `q_and_a`, `grammar_rule` | **YES — `masdar_factory`** |
| 16 | `vocabulary`, **`masdar_factory`**, `paragraph`, `grammar_rule` | **YES — `masdar_factory`** |
| 17 | `vocabulary`, **`masdar_factory`** ×2, `paragraph` ×2, `q_and_a` | **YES — `masdar_factory`** |
| 18 | `vocabulary`, `paragraph`, `grammar_rule` | No |
| 19 | `vocabulary`, **`masdar_factory`**, `paragraph` | **YES — `masdar_factory`** |
| 20 | `vocabulary` ×2, `assessment`, `paragraph` ×5, `q_and_a`, `grammar_rule` | No |
| 21 | `vocabulary`, `grammar_rule` ×2, `assessment`, `paragraph`, `q_and_a` | No |
| 22 | `vocabulary`, `grammar_rule` ×2, `application` ×2, `assessment` ×4 | No |


---

## 5. Key Findings & Implementation Notes

### The One Critical New Component: `masdar_factory`

Every lesson that introduces a new verb form (Abwaab) uses the same 4-column table pattern:

```
Masdar | ماضي | مضارع | أمر | نهي
الْخُرُوجُ | خَرَجَ | يَخْرُجُ | اُخْرُجْ | لَا تَخْرُجْ
```

This pattern appears in **9 of 22 lessons** (03, 06, 07, 14, 15, 16, 17, 19, and implicitly in 01). It is the single most important new component for Vol 2 Chapter 1. The existing `verb_table` type covers the 5-subject conjugation grid (هُوَ/هِيَ/أَنْتَ/أَنْتِ/أَنَا) but does **not** cover the masdar → 4-forms pattern. These are complementary, not overlapping.

### Grammar Rules That Map Cleanly

All of the following map to `grammar_rule` with no new component needed:
- **إِنَّ / لَعَلَّ** (Lessons 11, 18) — transformation examples
- **لَنْ** future negation (Lesson 08) — particle + subjunctive rule
- **لِـ** purpose clause (Lessons 09, 20) — particle + subjunctive rule
- **أَنْ** constructions (Lessons 10, 21) — same/different subject rule
- **كَانَ + مضارع** habitual past (Lesson 13) — pattern with examples
- **لَيْسَ + بِـ** emphatic negation (Lesson 12) — rule with examples
- **Irrational plural agreement** (Lesson 22) — rule with examples

### Verb Tables (existing `verb_table` type)

Used in Lessons 01 (past/present/imperative), 02 (negative past/present), 04 (partial قَالَ), 12 (كَانَ/صَارَ/لَيْسَ). The existing `VerbTableRow` interface handles all of these. The كَانَ/صَارَ/لَيْسَ table in Lesson 12 needs 3 rows (one per verb) with the same 5-subject columns.

### Reading Passages

Every lesson has at least one reading passage. All map to `paragraph`. The passages in this chapter are **narrative** (not dialogue scripts), so no `NarrativeView` is needed. The existing `ParagraphView` with multi-line `lines[]` and reveal-translation handles all cases.

### Q&A Pattern

All Q&A in this chapter is the standard question → answer format. The questions are open-ended (لِمَاذَا، مَاذَا، مَنْ، أَيْنَ) or yes/no (هَلْ) or either/or (أَ...أَمْ). All map to `q_and_a` with `questionType: 'general'`, `'hal'`, or `'a_am'` respectively.

### Exercises

All exercises in this chapter are either:
1. **Fill-in-the-blank with multiple choice** → `assessment`
2. **Translation drills** → `assessment`
3. **Comprehension questions** → `q_and_a`
4. **Tarkeeb/sentence diagram** → `tarkeeb` (only Lesson 01 and 03)

No fill-in-the-blank exercise requires free-text input — they all provide 2–3 options. The existing `assessment` MCQ engine covers all of them.


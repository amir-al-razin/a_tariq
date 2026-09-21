# Common Pedagogical & Design Mistakes to Avoid

A concise reference log of recurring pedagogical flaws and anti-patterns observed in AI-generated lessons, paired with their mandatory correct patterns. Every agent working on curriculum content or interactive exercises MUST review and adhere to these rules.

---

## 1. Zero Solution Leakage (Never Spoil the Exercise)

### ❌ Anti-Pattern: Displaying the Arabic Answer in Sentence Assembly
- **The Mistake**: Setting `promptAr` inside `assemblyPayload`.
- **Why it breaks learning**: The runner displays `promptAr` in prominent Arabic text right above the interactive word chips. The learner is supposed to translate the English/Bangla prompt into Arabic, but seeing the Arabic answer turns the exercise into a mindless letter-matching game.
- **Mandatory Rule**: In `sentence_assembly`, NEVER include `promptAr`. Provide only `promptEn` and `promptBn`. The student must formulate and construct the Arabic sentence from memory and understanding.

### ❌ Anti-Pattern: Exposing the Blank Solution in Cloze Choice
- **The Mistake**: Omitting the ellipsis `...` in `partialAnswerAr`, putting the complete answer inside `partialAnswerAr`, or using bracketed markers like `[···]`.
- **Why it breaks learning**: If `partialAnswerAr` contains the answer or lacks standard `...`, the runner treats the entire string as the prefix and reveals the target word right before the empty slot.
- **Mandatory Rule**: Always use a clean ellipsis `...` in `partialAnswerAr` to designate the blank slot (e.g. `'كَانَتِ المَدْرَسَةُ ... صَارَتْ كَبِيرَةً'`).

---

## 2. Active Reading vs Static Translation (No Bypassing Comprehension)

### ❌ Anti-Pattern: Providing Static English/Bangla Translations for Reading Passages
- **The Mistake**: Adding `contextEn` and `contextBn` to reading comprehension steps (`alternative_qa`).
- **Why it breaks learning**: The textbook intentionally presents Arabic passages so the student practices reading, parsing grammar, and extracting meaning directly from Arabic. Giving a full static translation allows the student to bypass the Arabic completely and just read English/Bangla.
- **Mandatory Rule**: NEVER include static translations (`contextEn`, `contextBn`) on reading comprehension passages. The card must show only `contextAr`.
- **Mandatory Rule**: Always verify that `contextAr` is complete and contains the exact factual basis required to answer all following questions without blind guessing.

---

## 3. Strict Textbook Fidelity (Never Invent, Alter, or Omit)

### ❌ Anti-Pattern: Hallucinating or Truncating Textbook Content
- **The Mistake**: Inventing dialogues, paraphrasing textbook sentences, or dropping sentences from multi-sentence reading passages.
- **Why it breaks learning**: The curriculum builds sequentially. Every word and grammatical structure in the textbook is chosen with pedagogical intention.
- **Mandatory Rule**: Transcribe textbook passages verbatim. Never skip a sentence from a dialogue or reading unit. If the textbook has three sentences in a passage, all three must be present in `contextAr`.
- **Mandatory Rule**: Every single Arabic word must have complete, accurate Harakat (Tashkeel) verified against the textbook. Never guess or omit case endings (I'rab).

---

## 4. Zero Screen Duplication & Visual Hierarchy

### ❌ Anti-Pattern: Rendering the Same Sentence Multiple Times on Screen
- **The Mistake**: Placing the same Arabic sentence into `instructionEn`, `questionAr`, and `partialAnswerAr`.
- **Why it breaks learning**: The student sees the exact same Arabic sentence duplicated 2-3 times on the card, cluttering the UI and confusing the goal of the exercise.
- **Mandatory Rule**: Each UI element has a single distinct role:
  - **Instruction (`instructionEn` / `instructionBn`)**: Prominent pedagogical command stating what action the student must take (e.g. "Select the correct accusative ending...").
  - **Prompt / Context**: The cue or question. In single-sentence cloze exercises, keep `questionAr` identical to `partialAnswerAr` so the runner suppresses redundant duplicate headers above the blank.
  - **Interaction Area**: The slots and chips for answering.

---

## 5. Scope & Paradigm Discipline

### ❌ Anti-Pattern: Presenting Un-Taught Grammar or Invalid Verb Tenses
- **The Mistake**: Allowing present or imperative tense tabs to display for frozen past-only verbs like `لَيْسَ`, or introducing grammatical rules that belong to later chapters.
- **Why it breaks learning**: Confuses the learner with un-taught forms and grammatically invalid states.
- **Mandatory Rule**: When configuring `verb_conjugator` for defective or tense-restricted verbs, always explicitly set `targetTense` (e.g. `targetTense: 'past'`). Never expose paradigms outside the scope of the current lesson.

---

## 6. Strict Language Isolation (Zero Bilingual Mixing)

### ❌ Anti-Pattern: Mixing Multiple Helper Languages on the Same Screen
- **The Mistake**: Showing both English and Bengali translations simultaneously (e.g. rendering `"He did"` with `"He · সে করল"` underneath, or putting English pronoun labels inside Bengali mode).
- **Why it breaks learning**: Clutters the UI with sensory overload and breaks cognitive focus. The student selected ONE interface language (English or Bengali). Mixing scripts looks broken and visually chaotic.
- **Mandatory Rule**:
  - **English Mode**: The screen must display **ONLY Arabic and English**. NEVER render Bengali script, transliteration, or cross-language secondary tags anywhere on the screen.
  - **Bangla Mode**: The screen must display **ONLY Arabic and Bangla**. NEVER render English words or Latin alphabet subtitles anywhere on the screen.
  - Strict 1:1 language pairing: Target Language (Arabic) + Active Interface Language (English OR Bangla). Never display two helper languages simultaneously.

---

## 7. Single Action Principle (Zero Split Navigation Choices)

### ❌ Anti-Pattern: Providing Competing Action Buttons ("Next Verb" alongside "Continue")
- **The Mistake**: Rendering two bottom action buttons simultaneously (e.g. "Next Verb" and "Continue").
- **Why it breaks learning**: Forces the learner to make an ambiguous meta-decision about navigation instead of focusing on the learning content. Clicking "Continue" prematurely skips the remaining verbs or items in the sequence, while having two buttons causes cognitive friction about which action to take.
- **Mandatory Rule**: Always present **EXACTLY ONE** full-width action button at the bottom of the card:
  - While more items/verbs remain in the sequence, the single button must advance to the next item (e.g. `Next Verb (خَرَجَ) ->`).
  - On the final item of the sequence, the single button becomes `Continue ->`, completing the step.
  - Re-exploring previous items belongs as a subtle navigation control in the header (e.g. a small back icon), never as a competing primary action button at the bottom.

---

## 8. Verb Conjugation Pedagogy (Tense Fidelity, Anti-Bloat, & Active Production)

### ❌ Anti-Pattern: Meaningless Citation Infinitives ("To do") Without Tense Context
- **The Mistake**: Labeling a past tense verb like `فَعَلَ` as `"To do"` or `خَرَجَ` as `"To exit / go out"` with no explicit mention of the past tense.
- **Why it breaks learning**: Arabic past verbs (`فَعَلَ`, `خَرَجَ`, `ذَهَبَ`) are not abstract dictionary infinitives (Masdar); they are 3rd-person masculine completed actions meaning **"He did"**, **"He went out"**, **"He went"**. Calling `فَعَلَ` "To do" confuses the learner and conceals the tense being studied.
- **Mandatory Rule**:
  - The hero section must **explicitly state the tense**: `PAST TENSE · المَاضِي` (or `المُضَارِع` for Present, `الأَمْر` for Command).
  - Never display bare citation infinitives ("To do", "To exit") for conjugated verbs. Display the concrete 3rd-person meaning: **"He did"** / **"সে করল"**, **"He went out"** / **"সে বের হলো"**, **"He went"** / **"সে গেল"**.

### ❌ Anti-Pattern: UI Bloat & Redundant Subtitles
- **The Mistake**: Stacking redundant secondary subtitles (e.g. rendering `"He did"` with `"He"` repeated directly underneath).
- **Why it breaks learning**: Redundant labels add zero educational value and clutter the interface.
- **Mandatory Rule**: Keep each paradigm row clean and uncluttered:
  - Left: Rounded pronoun badge (`[ هُوَ ]`) + single bold concrete meaning (`"He did"` or `"সে করল"`). Zero redundant subtitles.
  - Right: Inflected Arabic verb form (`فَعَلَ`) + audio button, or a clean dashed drop target slot.

### ❌ Anti-Pattern: Passive Clicking vs Active Student Production (Textbook Fidelity)
- **The Mistake**: Letting the student click through 8 verbs passively without interacting or producing any conjugations.
- **Why it breaks learning**: The textbook explicitly instructs: *"صَرِّفِ الأَفْعَالَ الآتِيَةَ مِثْلَ فَعَلَ"* (Conjugate the following verbs yourself!). Passive viewing fails to build morphological retrieval memory.
- **Mandatory Rule**:
  - **Verb 1 (`فَعَلَ`) - Master Model (`النموذج · Model`)**: Schema formation. All 5 forms are visible with full meanings for observation. Action button: `Start Practice (خَرَجَ) ->`.
  - **Verbs 2..N (`خَرَجَ`, `ذَهَبَ`, etc.) - Active Practice (`التَّمْرِين · Practice`)**: Row 0 (`هُوَ`) is pre-filled as anchor. Rows 1..4 (`هِيَ`, `أَنْتَ`, `أَنْتِ`, `أَنَا`) start as empty dashed slots. Candidate forms are displayed as interactive word chips below.
  - Tapping a chip validates against the targeted row. If correct, it snaps in and plays audio. If wrong, it gives error feedback and stays in the bank.
  - The single action button remains disabled (`Complete the conjugations above`) until all slots are filled, unlocking `Next Verb` (or `Continue` on the final verb).

### ❌ Anti-Pattern: Tense Mismatch in Hero Arabic Text and Audio
- **The Mistake**: Showing `Present Tense · المُضَارِع` and `"He goes out"`, but the prominent Arabic word at the top displays `خَرَجَ` (the past root) instead of `يَخْرُجُ` (the present form).
- **Why it breaks learning**: Severe pedagogical contradiction. The learner is studying present tense (or imperative), reading "He goes out", but the huge 48px Arabic text and the audio button reinforce the past tense root form (`خَرَجَ`).
- **Mandatory Rule**:
  - The hero Arabic word, the audio button, and transition button labels MUST always match the active tense using `getRootVerbArabic(verb, tense)`.
  - For Past: display 3rd-person past (`خَرَجَ`).
  - For Present: display 3rd-person present (`يَخْرُجُ`).
  - For Imperative: display 2nd-person masculine command (`اخْرُجْ`).
  - Button labels must also reflect the active tense (e.g. `Start Practice (يَخْرُجُ) ->` or `Next Verb (يَذْهَبُ) ->`).

---

## 9. Zero Developer Jargon & Unnecessary Metadata Clutter

### ❌ Anti-Pattern: Displaying Abstract Grammar Tags, Developer Roles, and Subtitle Explanations
- **The Mistake**: Stamping cards with abstract categorization badges like `بَاب فَتَحَ يَفْتَحُ`, developer role pills like `Model · النموذج` or `Practice · التَّمْرِين`, and multi-line subtitle paragraphs explaining suffixes.
- **Why it breaks learning**: Beginners are intimidated and distracted by abstract Sarf terminology (Abwaab) that hasn't been taught yet. Labels like `Model · النموذج` are internal developer classification jargon that adds zero learning value. Subtitle paragraphs clutter the card by restating what the paradigm rows already demonstrate visually.
- **Mandatory Rule**:
  - **Zero Baab Badges**: Never display `baabAr` or `baabPatternAr` badges on learning cards.
  - **Zero Developer Role Labels**: Never render `Model · النموذج` or `Practice · التَّمْرِين` pills. The interaction design itself makes the role obvious (all forms visible on Verb 1; empty slots and chips on Verbs 2..N).
  - **Zero Subtitle Bloat**: Never add redundant paragraphs explaining suffixes under the hero. The table rows speak for themselves.
  - **Clean, Focused Card Hierarchy**: Exactly 3 hero elements (Tense Pill -> Concrete Meaning -> Arabic Verb + Audio), followed directly by the 5 clean rows and the single 56px action button.

---

## 10. Single Cognitive Focus: Separation of Commands & Prohibitions

### ❌ Anti-Pattern: Cramming Commands (الأَمْر) and Prohibitions (النَّهْي) Together
- **The Mistake**: Combining affirmative commands (`اِفْعَلْ`) and negative prohibitions (`لَا تَفْعَلْ`) into a single matrix step, displaying both forms inside each row, and only offering practice for commands while prohibitions sit as passive text.
- **Why it breaks learning**: Violates the foundational principle: "Only one thing, one interaction at a time." The learner cannot focus on internalizing how the imperative is formed when negative commands are competing for attention on the same card. Dual-form rows clutter the UI with competing audio buttons and unnatural color hacking.
- **Mandatory Rule**:
  - Commands (`الأَمْر`, `targetTense: 'imperative'`) and Prohibitions (`النَّهْي`, `targetTense: 'prohibition'`) MUST always be delivered as **two separate, sequential micro-steps**.
  - **Step A: Command (`الأَمْر`)**: Hero shows `Command · الأَمْر`, `Do! (m)`, `اِفْعَلْ`. Practice verbs provide interactive chip blanks for command forms (`اُخْرُجِي`, `اِجْلِسِي`, `اُكْتُبِي`).
  - **Step B: Forbidding (`النَّهْي`)**: Hero shows `Forbidding · النَّهْي`, `Don't do! (m)`, `لَا تَفْعَلْ`. Practice verbs provide interactive chip blanks for prohibition forms (`لَا تَخْرُجِي`, `لَا تَجْلِسِي`, `لَا تَكْتُبِي`).
  - **Zero Dual-Form Rows**: Every paradigm row must render exactly one clean inflected form with its corresponding audio button.

---

## 11. Arabic Audio Fidelity: Vocalizing Full Ending Vowels (I'rab)

### ❌ Anti-Pattern: Truncating Final Vowels and Tanwīn via Pausal Stops (Waqf)
- **The Mistake**: Passing isolated Arabic words directly to neural TTS models without Wasl continuation tokens, causing the engine to apply pausal stop (Waqf) rules that silence the final short vowel or tanwīn (e.g. pronouncing `yakhruj` instead of `yakhruju`, `kitāb` instead of `kitābun`).
- **Why it breaks learning**: Beginners cannot learn correct Arabic grammar and I'rab if audio skips the case endings. Listening to truncated endings sounds unnatural and teaches incorrect pronunciation.
- **Mandatory Rule**:
  - All Arabic speech synthesis MUST use Wasl continuation anchoring (appending an unstressed token like ` نَعَمْ`) to prevent the TTS model from applying pausal elision on the word ending.
  - The continuation token must be trimmed via `ffmpeg` using precise millisecond `WordBoundary` timestamps and a 30ms fade-out, ensuring 100% of the target vowel is preserved and 0% of the continuation word is audible.

---

## 12. Masdar Factory & Bab Pattern Pedagogy (Why Bab Matters & Anti-Cheating)

### ❌ Anti-Pattern: Providing "Reveal All" Cheat Buttons & Dumping Tenses Simultaneously
- **The Mistake**: Including a "Reveal All" button and dumping 4 tenses (Past, Present, Command, Prohibition) onto passive cards simultaneously, or showing abstract labels like `Fataha Pattern (a - a)` without demonstrating what the pattern does.
- **Why it breaks learning**: Violates the single-focus principle and enables mindless skipping. In Arabic morphology (Sarf), the 4 base families (Abwaab) exist specifically to govern how the middle root vowel (`عَيْنُ الفِعْلِ`) shifts between Past and Present (`a ➔ a`, `a ➔ u`, `a ➔ i`, `i ➔ a`). Amr and Nahy are derived subsequently from the Present. Dumping everything at once conceals this core grammatical insight.
- **Mandatory Rule**:
  - **Zero "Reveal All" Cheat Buttons**: Never provide a reveal-all or bypass button.
  - **Strict Skip Prevention**: The primary 56px action button must remain disabled (`Select the Present Tense to Continue`) until the student actively interacts with and solves the pattern challenge.
  - **Demonstrate Sarf Function**: Explicitly teach that the Bab family governs the vowel shift from Past to Present. Present an interactive 3-chip challenge for the learner to apply the rule.
  - **Progressive Unveiling**: Only unveil derived directives (Command `الأَمْر` and Prohibition `النَّهْي`) after the present tense pattern has been successfully solved.

---

## 13. Locked Lessons & Progressive Curriculum Availability

### ❌ Anti-Pattern: Displaying Numbers on Unimplemented Lessons and Allowing Accidental Clicks
- **The Mistake**: Showing active numbers on lessons that have not yet been implemented (`!hasLessonSession`) and allowing users to click on them, causing silent fallbacks to Lesson 1 or blank screens.
- **Why it breaks learning**: Confuses the learner, breaks progression tracking, and causes accidental navigation into placeholder or repetitive lessons.
- **Mandatory Rule**:
  - Any lesson lacking an interactive session implementation MUST render a **Lock icon** instead of a number.
  - Stepping stone buttons for locked lessons MUST be **strictly disabled** (`disabled={!isImplemented}`, `cursor-not-allowed`) with tactile displacements suppressed.
  - The active curriculum beacon (`START` / `CURRENT`) must **only** target lessons that are implemented and uncompleted. It must never point to an unimplemented locked lesson.
  - If navigated to directly, the launchpad and lesson screens must display a disabled **"Coming Soon"** state with a Lock icon.

---

## 14. Arabic TTS Audio Pipeline: Male Voice Standard & Tashkeel Preservation

### ❌ Anti-Pattern: Using Inadequate Voices or Truncating Case Endings (I'rab)
- **The Mistake**: Using voice models that skip final vowels or awkward pauses, or using female voices where the user has standardized on a male voice.
- **Why it breaks learning**: Arabic learners depend heavily on hearing the precise vowel endings (Dammah, Fathah, Kasrah, Tanwīn). Missing endings sound unnatural and teach flawed grammar.
- **Mandatory Rule**:
  - **Standardized Male Voice**: Maintain high-fidelity male neural TTS (standardized on `ar-XA-Wavenet-B` / neural equivalent).
  - **Wasl Continuation Trimming**: Always append an unstressed continuation token (` نَعَمْ`) during neural synthesis to prevent the engine from applying pausal stop (Waqf) silencing on the final syllable, then cleanly slice it at the boundary using `ffmpeg` with a 30ms fade-out.



import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let failureCount = 0;

function reportPass(message: string) {
  console.log(`\x1b[32m✔ PASS\x1b[0m: ${message}`);
}

function reportFail(message: string, details?: string) {
  failureCount++;
  console.error(`\x1b[31m✖ FAIL\x1b[0m: ${message}`);
  if (details) {
    console.error(`  \x1b[90m${details}\x1b[0m`);
  }
}

// ----------------------------------------------------------------------------
// INVARIANT 1: Strict Script Isolation in Runner JSX
// ----------------------------------------------------------------------------
function checkRunnerScriptIsolation() {
  const webRunnerPath = path.join(rootDir, 'apps/web/src/components/runner/LessonSessionRunner.tsx');
  const mobileRunnerPath = path.join(rootDir, 'apps/mobile/components/runner/LessonSessionRunner.tsx');

  const runners = [
    { name: 'Web Runner', path: webRunnerPath },
    { name: 'Mobile Runner', path: mobileRunnerPath },
  ];

  for (const runner of runners) {
    if (!fs.existsSync(runner.path)) {
      reportFail(`${runner.name} not found at ${runner.path}`);
      continue;
    }

    const content = fs.readFileSync(runner.path, 'utf-8');

    // Check for banned bilingual leaking pattern: `{form.subjectEn} · {meaning.bn}` or `{meaning.bn}` in !isBn
    if (content.includes('form.subjectEn') && content.includes('meaning.bn') && content.includes('·')) {
      // Look specifically for `{form.subjectEn} · {meaning.bn}` or `{form.subjectEn} {isBn ? '' : (meaning.bn`
      if (/subjectEn.*·.*meaning\.bn/.test(content) || /subjectEn.*isBn\s*\?\s*''\s*:\s*\(meaning\.bn/.test(content)) {
        reportFail(
          `${runner.name} contains bilingual mixing ({meaning.bn} leaked into English mode)!`,
          'Never render Bengali meanings inside English subtitle rows.'
        );
      } else {
        reportPass(`${runner.name}: Paradigm rows do not leak Bengali into English mode`);
      }
    } else {
      reportPass(`${runner.name}: Paradigm rows do not leak Bengali into English mode`);
    }

    // Check for hero headline: must NOT use currentVerb.meaningEn directly (bare infinitive "To do")
    // Instead it must use rootMeaning
    if (content.includes('renderVerbConjugator') || content.includes("type === 'verb_conjugator'")) {
      if (content.includes('rootMeaning') && content.includes('getRootVerbMeaning')) {
        reportPass(`${runner.name}: Uses getRootVerbMeaning for tense-accurate headline`);
      } else {
        reportFail(
          `${runner.name}: Missing getRootVerbMeaning in verb conjugator hero!`,
          'Verb conjugator hero must use getRootVerbMeaning to avoid bare infinitives like "To do".'
        );
      }

      // Check for tense-accurate Arabic hero word via getRootVerbArabic
      if (content.includes('rootArabic') && content.includes('getRootVerbArabic')) {
        reportPass(`${runner.name}: Uses getRootVerbArabic for tense-accurate hero Arabic word`);
      } else {
        reportFail(
          `${runner.name}: Missing getRootVerbArabic in verb conjugator hero!`,
          'Verb conjugator hero must display the tense-appropriate Arabic form matching selectedConjugatorTense.'
        );
      }

      // Check for explicit Tense Pill
      if (content.includes('المَاضِي') && (content.includes('Past Tense') || content.includes('PAST TENSE'))) {
        reportPass(`${runner.name}: Contains explicit past tense pill (المَاضِي)`);
      } else {
        reportFail(
          `${runner.name}: Missing past tense anchor pill (المَاضِي)!`,
          'Verb conjugator must state the tense in the hero header.'
        );
      }

      // Check that meaningless developer tags and clutter are completely absent
      if (content.includes('currentVerb.baabAr') || content.includes('currentItem.baabPatternAr')) {
        reportFail(
          `${runner.name}: Contains baab badge clutter (baabAr/baabPatternAr)!`,
          'Learners must not be subjected to abstract Sarf categorization badges.'
        );
      } else {
        reportPass(`${runner.name}: Zero baab badge clutter`);
      }

      if (content.includes('Model · النموذج') || content.includes('النموذج · Model') || content.includes('التَّمْرِين · Practice')) {
        reportFail(
          `${runner.name}: Contains developer role badges (Model/Practice)!`,
          'Never stamp developer classification badges on learning cards.'
        );
      } else {
        reportPass(`${runner.name}: Zero developer role badges`);
      }
    }
  }
}

// ----------------------------------------------------------------------------
// INVARIANT 2: Shared Verb Conjugation Dictionary & Meanings
// ----------------------------------------------------------------------------
async function checkConjugationMeanings() {
  try {
    const { getRootVerbMeaning, getRootVerbArabic, VERB_CONJUGATION_DICTIONARY } = await import(
      '../packages/shared/sessions/conjugationMeanings'
    );

    // Test getRootVerbArabic across past, present, imperative
    const testVerb = {
      id: '2',
      rootAr: 'خَرَجَ',
      forms: [
        { subjectAr: 'هُوَ', pastAr: 'خَرَجَ', presentAr: 'يَخْرُجُ' },
        { subjectAr: 'أَنْتَ', imperativeAr: 'اخْرُجْ' },
      ],
    };
    if (getRootVerbArabic(testVerb as any, 'past') !== 'خَرَجَ') {
      reportFail(`getRootVerbArabic past returned wrong value: ${getRootVerbArabic(testVerb as any, 'past')}`);
    } else if (getRootVerbArabic(testVerb as any, 'present') !== 'يَخْرُجُ') {
      reportFail(`getRootVerbArabic present returned wrong value: ${getRootVerbArabic(testVerb as any, 'present')}`);
    } else if (getRootVerbArabic(testVerb as any, 'imperative') !== 'اخْرُجْ') {
      reportFail(`getRootVerbArabic imperative returned wrong value: ${getRootVerbArabic(testVerb as any, 'imperative')}`);
    } else {
      reportPass('getRootVerbArabic: Returns exact tense-matched Arabic word (خَرَجَ / يَخْرُجُ / اخْرُجْ)');
    }

    // Test foundation verbs
    const sampleVerbs = [
      { id: '1', rootAr: 'فَعَلَ', baabAr: 'بَاب فَتَحَ', forms: [] },
      { id: '2', rootAr: 'خَرَجَ', baabAr: 'بَاب نَصَرَ', forms: [] },
      { id: '3', rootAr: 'ذَهَبَ', baabAr: 'بَاب فَتَحَ', forms: [] },
      { id: '4', rootAr: 'جَلَسَ', baabAr: 'بَاب ضَرَبَ', forms: [] },
    ];

    for (const v of sampleVerbs) {
      const pastMeaning = getRootVerbMeaning(v as any, 'past');
      if (/^to\s+/i.test(pastMeaning.en)) {
        reportFail(
          `Verb ${v.rootAr} past meaning starts with "To ": "${pastMeaning.en}"`,
          'Past tense verbs must be concrete 3rd person past actions (e.g. "He did"), never infinitives.'
        );
      } else if (!pastMeaning.en || !pastMeaning.bn) {
        reportFail(`Verb ${v.rootAr} is missing English or Bengali past meaning`);
      } else {
        reportPass(`Verb ${v.rootAr}: Past meaning is concrete ("${pastMeaning.en}" / "${pastMeaning.bn}")`);
      }
    }

    // Verify script isolation in dictionary
    for (const [key, tenseMap] of Object.entries(VERB_CONJUGATION_DICTIONARY)) {
      for (const [tense, subjectMap] of Object.entries(tenseMap)) {
        if (!subjectMap) continue;
        for (const [subject, meaning] of Object.entries(subjectMap)) {
          // English field should NOT contain Bengali characters
          if (/[\u0980-\u09FF]/.test(meaning.en)) {
            reportFail(
              `Dictionary key "${key}" (${tense}, ${subject}): English field contains Bengali characters: "${meaning.en}"`
            );
          }
          // Bengali field should NOT contain English letters (allow standard punctuation)
          if (/[a-zA-Z]/.test(meaning.bn)) {
            reportFail(
              `Dictionary key "${key}" (${tense}, ${subject}): Bengali field contains Latin characters: "${meaning.bn}"`
            );
          }
        }
      }
    }
    reportPass('Conjugation Dictionary: Zero cross-script mixing between en and bn fields');
  } catch (err: any) {
    reportFail(`Failed to test conjugationMeanings: ${err.message}`);
  }
}

// ----------------------------------------------------------------------------
// INVARIANT 3: Session Data Files Pedagogical Rules
// ----------------------------------------------------------------------------
function checkSessionDataFiles() {
  const sessionsDir = path.join(rootDir, 'packages/shared/sessions');
  if (!fs.existsSync(sessionsDir)) {
    reportFail(`Sessions directory not found at ${sessionsDir}`);
    return;
  }

  const files = fs.readdirSync(sessionsDir).filter((f) => f.endsWith('.ts') && !f.endsWith('.d.ts'));

  for (const file of files) {
    const filePath = path.join(sessionsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Rule 1: Zero Solution Leakage in sentence_assembly when target is Arabic
    // If the student is assembling Arabic chips, promptAr must NOT be present (leaks answer)
    const assemblyMatches = content.match(/assemblyPayload\s*:\s*\{[\s\S]*?\n\s*\}/g);
    if (assemblyMatches) {
      for (const block of assemblyMatches) {
        const hasArabicChipsOrAnswer = /expectedAnswer\s*:\s*\[[\s\S]*?[\u0600-\u06FF]/.test(block) ||
          /chips\s*:\s*\[[\s\S]*?[\u0600-\u06FF]/.test(block);
        const hasPromptAr = /promptAr\s*:/.test(block);

        if (hasArabicChipsOrAnswer && hasPromptAr) {
          reportFail(
            `${file}: sentence_assembly with Arabic chips contains promptAr!`,
            'Zero Solution Leakage: When building Arabic from chips, promptAr spoils the answer.'
          );
        }
      }
    }

    // Rule 2: Zero Static Translations on Reading Passages
    // In alternative_qa or reading comprehension cards, contextEn / contextBn must NOT exist
    const qaMatches = content.match(/alternativeQaPayload\s*:\s*\{[\s\S]*?\}/g);
    if (qaMatches) {
      for (const block of qaMatches) {
        if (/contextEn\s*:/.test(block) || /contextBn\s*:/.test(block)) {
          reportFail(
            `${file}: alternative_qa reading passage contains contextEn or contextBn!`,
            'Active Reading: Learners must read Arabic context without English/Bangla bypass.'
          );
        }
      }
    }
  }

  reportPass(`Session data files (${files.length} files) adhere to pedagogical integrity rules`);
}

// ----------------------------------------------------------------------------
// MAIN RUNNER
// ----------------------------------------------------------------------------
async function main() {
  console.log('\n======================================================');
  console.log('   TARIQ CURRICULUM & ENGINE INVARIANT VERIFICATION   ');
  console.log('======================================================\n');

  checkRunnerScriptIsolation();
  await checkConjugationMeanings();
  checkSessionDataFiles();

  console.log('\n------------------------------------------------------');
  if (failureCount === 0) {
    console.log('\x1b[32m✔ ALL PEDAGOGICAL & DESIGN INVARIANTS PASSED!\x1b[0m\n');
    process.exit(0);
  } else {
    console.error(`\x1b[31m✖ ${failureCount} INVARIANT VIOLATION(S) DETECTED!\x1b[0m\n`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal error running invariant check:', err);
  process.exit(1);
});

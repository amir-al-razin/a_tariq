import { useState } from 'react';
import { BookOpen } from 'lucide-react';

export function Volume2Section() {
  // --- Comp 27: Verb Conjugation (تَصْرِيفُ الفِعْلِ) ---
  const [conjPronoun, setConjPronoun] = useState<'huwa' | 'hiya' | 'anta' | 'anti' | 'ana' | 'nahnu'>('huwa');
  const conjData = {
    huwa: { label: 'هُوَ (He)', past: 'كَتَبَ', pres: 'يَكْتُبُ', note: 'Standard base trilateral form (3rd person masc singular)' },
    hiya: { label: 'هِيَ (She)', past: 'كَتَبَتْ', pres: 'تَكْتُبُ', note: 'Takes quiescent Ta in past; Ta prefix in present' },
    anta: { label: 'أَنْتَ (You masc)', past: 'كَتَبْتَ', pres: 'تَكْتُبُ', note: 'Takes Ta with Fatha suffix in past' },
    anti: { label: 'أَنْتِ (You fem)', past: 'كَتَبْتِ', pres: 'تَكْتُبِينَ', note: 'Takes Ta with Kasrah in past; Ya & Nun suffix in present' },
    ana: { label: 'أَنَا (I)', past: 'كَتَبْتُ', pres: 'أَكْتُبُ', note: 'Takes Tu suffix in past; Alif prefix in present' },
    nahnu: { label: 'نَحْنُ (We)', past: 'كَتَبْنَا', pres: 'نَكْتُبُ', note: 'Takes Na suffix in past; Nun prefix in present' },
  };

  // --- Comp 31: Negation Matrix ---
  const [negParticle, setNegParticle] = useState<'ma' | 'la' | 'lan' | 'lam'>('ma');
  const negData = {
    ma: {
      sentence: 'مَا كَتَبَ زَيْدٌ الدَّرْسَ',
      label: 'مَا (Past Negation)',
      effect: 'Negates past tense with zero change to past verb vowels',
    },
    la: {
      sentence: 'لَا يَكْتُبُ زَيْدٌ فِي الكِتَابِ',
      label: 'لَا (Present Negation)',
      effect: 'Negates habit or present fact; verb remains Marfu (Dammah)',
    },
    lan: {
      sentence: 'لَنْ يَكْتُبَ زَيْدٌ أَبَدًا',
      label: 'لَنْ (Future Subjunctive)',
      effect: 'Emphatic future negation; verb becomes Mansoob (Fathah)',
    },
    lam: {
      sentence: 'لَمْ يَكْتُبْ زَيْدٌ دَرْسَهُ',
      label: 'لَمْ (Past Jussive)',
      effect: 'Flips present tense to past negative; verb becomes Majzoom (Sukun)',
    },
  };

  // --- Comp 34: Inna vs Kana Seesaw ---
  const [particle34, setParticle34] = useState<'base' | 'inna' | 'kana'>('base');

  // --- Comp 36: Answering Negative Questions ---
  const [answeringMode, setAnsweringMode] = useState<'affirm' | 'negate'>('affirm');

  return (
    <div className="space-y-16">
      {/* Volume 2 Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Volume 2 Curriculum Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-english-extrabold text-neutral-950 dark:text-white mt-1">
            Verbal Sentences, Conjugations &amp; Governing Particles
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Components 27 to 46: Verb paradigms, case shifters, negation particles, Kana &amp; Inna sisters, and weak verbs.
          </p>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white dark:bg-neutral-800 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
          20 Core Components
        </div>
      </div>

      {/* ======================================================== */}
      {/* Component 27: Verb Conjugation (تَصْرِيفُ الفِعْلِ)       */}
      {/* ======================================================== */}
      <section id="comp-27" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 27
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Verb Conjugation Table <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(تَصْرِيفُ الفِعْلِ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 2, Page 5
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="flex justify-center gap-2 flex-wrap">
            {(['huwa', 'hiya', 'anta', 'anti', 'ana', 'nahnu'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setConjPronoun(p)}
                className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                  conjPronoun === p
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
                }`}
              >
                {conjData[p].label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Past Tense (المَاضِي)</span>
              <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {conjData[conjPronoun].past}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Present Tense (المُضَارِع)</span>
              <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {conjData[conjPronoun].pres}
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-500 max-w-md mx-auto">
            {conjData[conjPronoun].note}
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 31: Fourfold Negation Matrix (النَّفْي)          */}
      {/* ======================================================== */}
      <section id="comp-31" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 31
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Fourfold Negation Matrix <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(النَّفْي: مَا / لَا / لَنْ / لَمْ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 2, Page 42
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl mx-auto">
            {(['ma', 'la', 'lan', 'lam'] as const).map((pKey) => (
              <button
                key={pKey}
                onClick={() => setNegParticle(pKey)}
                className={`py-3 px-2 rounded-2xl font-english-bold text-xs transition-all ${
                  negParticle === pKey
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
                }`}
              >
                {negData[pKey].label}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {negData[negParticle].sentence}
            </div>
            <div className="text-xs text-neutral-500">
              {negData[negParticle].effect}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 34: Inna vs Kana Seesaw                        */}
      {/* ======================================================== */}
      <section id="comp-34" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 34
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Inna vs Kana Case Seesaw <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(إِنَّ وَكَانَ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 2, Page 74
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => setParticle34('base')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                particle34 === 'base'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Base Nominal Sentence
            </button>
            <button
              onClick={() => setParticle34('inna')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                particle34 === 'inna'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              With إِنَّ (Inna)
            </button>
            <button
              onClick={() => setParticle34('kana')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                particle34 === 'kana'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              With كَانَ (Kana)
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {particle34 === 'base' && 'الْأُسْتَاذُ حَاضِرٌ'}
              {particle34 === 'inna' && 'إِنَّ الْأُسْتَاذَ حَاضِرٌ'}
              {particle34 === 'kana' && 'كَانَ الْأُسْتَاذُ حَاضِرًا'}
            </div>
            <div className="text-xs text-neutral-500">
              {particle34 === 'base' && 'Base: Both Subject and Predicate are Nominative (Marfu / Dammah).'}
              {particle34 === 'inna' && 'Inna: Forces Subject into Accusative (Mansoob / Fathah), Predicate remains Marfu.'}
              {particle34 === 'kana' && 'Kana: Subject remains Marfu, forces Predicate into Accusative (Mansoob / Fathah).'}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 36: Answering Negative Questions (Na'am vs Bala) */}
      {/* ======================================================== */}
      <section id="comp-36" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 36
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Answering Negative Questions <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(نَعَمْ وَبَلَى)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 2, Page 60
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto">
            <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">Negative Question Prompt</span>
            <div className="font-arabic text-2xl font-bold text-neutral-900 dark:text-white" dir="rtl">
              أَلَسْتَ بِطَالِبٍ؟ (Are you not a student?)
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setAnsweringMode('affirm')}
              className={`px-5 py-3 rounded-2xl text-xs font-english-bold transition-all ${
                answeringMode === 'affirm'
                  ? 'bg-accent-primary text-white font-bold'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Affirm (Yes, I AM a student) ➔ بَلَى
            </button>
            <button
              onClick={() => setAnsweringMode('negate')}
              className={`px-5 py-3 rounded-2xl text-xs font-english-bold transition-all ${
                answeringMode === 'negate'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Confirm Negative (No, I am NOT) ➔ نَعَمْ
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {answeringMode === 'affirm' ? 'بَلَى، أَنَا طَالِبٌ' : 'نَعَمْ، لَسْتُ بِطَالِبٍ'}
            </div>
            <div className="text-xs text-neutral-500">
              {answeringMode === 'affirm'
                ? 'Bala (بَلَى) shatters the negative and affirms the positive statement.'
                : 'Na‘am (نَعَمْ) affirms the negative formulation (confirming that you are not).'}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

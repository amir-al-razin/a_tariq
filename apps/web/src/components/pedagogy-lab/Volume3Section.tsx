import { useState } from 'react';
import { BookOpen } from 'lucide-react';

export function Volume3Section() {
  // --- Comp 47: Verb-Subject Agreement & Word Order ---
  const [agreementType, setAgreementType] = useState<'past_masc' | 'past_fem' | 'pres_masc' | 'pres_fem'>('past_masc');
  const [isNominalFirst, setIsNominalFirst] = useState(false);

  const agreementData = {
    past_masc: {
      verbal: { verb: 'ذَهَبَ', subject: 'الأَوْلَادُ', note: 'Verb stays strictly singular when preceding plural subject' },
      nominal: { subject: 'الأَوْلَادُ', verb: 'ذَهَبُوا', note: 'Verb must agree in plural number when following subject' },
    },
    past_fem: {
      verbal: { verb: 'ذَهَبَتِ', subject: 'البَنَاتُ', note: 'Singular feminine verb precedes plural feminine subject' },
      nominal: { subject: 'البَنَاتُ', verb: 'ذَهَبْنَ', note: 'Feminine plural Nun of women (Nūn al-Niswah) attaches' },
    },
    pres_masc: {
      verbal: { verb: 'يَذْهَبُ', subject: 'الأَوْلَادُ', note: 'Singular present verb precedes masculine plural subject' },
      nominal: { subject: 'الأَوْلَادُ', verb: 'يَذْهَبُونَ', note: 'Plural Waw and Nun attach to verb following subject' },
    },
    pres_fem: {
      verbal: { verb: 'تَذْهَبُ', subject: 'البَنَاتُ', note: 'Singular feminine present verb precedes feminine plural' },
      nominal: { subject: 'البَنَاتُ', verb: 'يَذْهَبْنَ', note: 'Prefix Ya + Nun of women attach to verb following subject' },
    },
  };

  // --- Comp 48: Sound Masculine Plural Case Matrix ---
  const [pluralCase, setPluralCase] = useState<'subject' | 'object' | 'prep' | 'idafah'>('subject');
  const pluralCaseData = {
    subject: {
      sentence: 'لَا يَشْرَبُ المُسْلِمُونَ الخَمْرَ',
      marker: 'ـُونَ (Waw & Nun)',
      role: 'Subject / Fā‘il (مَرْفُوع)',
      note: 'Nominative plural marked by Waw instead of Dammah.',
    },
    object: {
      sentence: 'مَنَعَ اللَّهُ المُسْلِمِينَ مِنَ الخَمْرِ',
      marker: 'ـِينَ (Ya & Nun)',
      role: 'Direct Object / Maf‘ūl (مَنْصُوب)',
      note: 'Accusative plural marked by Ya instead of Fathah.',
    },
    prep: {
      sentence: 'الخَمْرُ حَرَامٌ عَلَى المُسْلِمِينَ',
      marker: 'ـِينَ (Ya & Nun)',
      role: 'Genitive Preposition (مَجْرُور)',
      note: 'Genitive after Harf Jarr marked by Ya instead of Kasrah.',
    },
    idafah: {
      sentence: 'تَتَنَوَّرُ قُلُوبُ المُسْلِمِينَ بِنُورِ اللَّهِ',
      marker: 'ـِينَ (Ya & Nun)',
      role: 'Mudāf Ilayh (مُضَاف إِلَيْهِ)',
      note: 'Possessor noun in Idafah marked by Ya in genitive state.',
    },
  };

  // --- Comp 53: Reverse Gender Numbers 3-10 ---
  const [numDigit53, setNumDigit53] = useState(3);
  const [nounGender53, setNounGender53] = useState<'masc' | 'fem'>('masc');

  const numWordsMasc: Record<number, string> = {
    3: 'ثَلَاثَةُ', 4: 'أَرْبَعَةُ', 5: 'خَمْسَةُ', 6: 'سِتَّةُ',
    7: 'سَبْعَةُ', 8: 'ثَمَانِيَةُ', 9: 'تِسْعَةُ', 10: 'عَشَرَةُ',
  };
  const numWordsFem: Record<number, string> = {
    3: 'ثَلَاثُ', 4: 'أَرْبَعُ', 5: 'خَمْسُ', 6: 'سِتُّ',
    7: 'سَبْعُ', 8: 'ثَمَانِي', 9: 'تِسْعُ', 10: 'عَشْرُ',
  };

  const getNumberPhrase = () => {
    if (nounGender53 === 'masc') {
      return `${numWordsMasc[numDigit53]} رِجَالٍ`;
    }
    return `${numWordsFem[numDigit53]} نِسَاءٍ`;
  };

  // --- Comp 54: Comparative & Superlative Builder ---
  const [compMode, setCompMode] = useState<'comp' | 'sup'>('comp');
  const degreeData = {
    comp: {
      title: 'Comparative (أَفْعَلُ مِنْ)',
      main: 'هَذِهِ الغُرْفَةُ أَوْسَعُ مِنْ تِلْكَ الغُرْفَةِ',
      sub: 'Comparative pattern with مِنْ (more ... than)',
      items: [
        'العَسَلُ أَحْلَى مِنَ السُّكَّرِ',
        'نَحْنُ أَصْغَرُ مِنْكُمْ وَأَنْتُمْ أَكْبَرُ مِنَّا',
        'هَذَا التَّاجِرُ أَغْنَى مِنْ ذَلِكَ',
      ],
    },
    sup: {
      title: 'Superlative (أَفْعَلُ + مُضَاف إِلَيْهِ)',
      main: 'رَسُولُنَا أَفْضَلُ الرُّسُلِ',
      sub: 'Superlative pattern with Idafah (the most ...)',
      items: [
        'هَذِهِ الزَّهْرَةُ أَجْمَلُ الأَزْهَارِ',
        'هَذَا المُجَاهِدُ أَشْجَعُ النَّاسِ',
        'أَنْتَ أَغْنَى النَّاسِ وَأَسْخَاهُمْ',
      ],
    },
  };

  // --- Comp 55: Conditional Double Jussive ---
  const [condKey, setCondKey] = useState<'sukun' | 'hollow' | 'nun' | 'weak'>('sukun');
  const condExamples = {
    sukun: {
      sentence: 'إِنْ تَنْصُرْنِي أَنْصُرْكَ',
      verb1: 'تَنْصُرْ (Sukun on Ra)',
      verb2: 'أَنْصُرْ (Sukun on Ra)',
      note: 'Both verbs become Majzoom with standard Sukun.',
    },
    hollow: {
      sentence: 'إِنْ تُطِعِ اللَّهَ يَفُزْ عَبْدُهُ',
      verb1: 'تُطِعْ (Weak Ya dropped)',
      verb2: 'يَفُزْ (Weak Waw dropped)',
      note: 'Middle weak vowels drop to prevent meeting of two sukoons.',
    },
    nun: {
      sentence: 'إِنْ تَجْتَهِدُوا تَنْجَحُوا',
      verb1: 'تَجْتَهِدُوا (Nun dropped)',
      verb2: 'تَنْجَحُوا (Nun dropped)',
      note: 'The Five Verbs (Af‘āl Khamsah) drop Nun in Jussive state.',
    },
    weak: {
      sentence: 'إِنْ تَدْعُ اللَّهَ يَسْتَجِبْ لَكَ',
      verb1: 'تَدْعُ (Final Waw dropped)',
      verb2: 'يَسْتَجِبْ (Middle Ya dropped)',
      note: 'Final defective root letter drops entirely in Jussive.',
    },
  };

  // --- Comp 57: Classical Quranic Immersion ---
  const [selectedScriptureWord, setSelectedScriptureWord] = useState<string | null>(null);
  const scriptureTokens = [
    { ar: 'اهْدِنَا', gloss: 'Guide us (Imperative + Attached Clitic Pronoun)' },
    { ar: 'الصِّرَاطَ', gloss: 'The Path (First Direct Object / Mansoob)' },
    { ar: 'الْمُسْتَقِيمَ', gloss: 'The Straight (Adjective / Sifah in Accusative Harmony)' },
  ];

  return (
    <div className="space-y-16">
      {/* Volume 3 Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Volume 3 Curriculum Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-english-extrabold text-neutral-950 dark:text-white mt-1">
            Advanced Morphology &amp; Syntactic Structures
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Components 47 to 57: Word order inversion, case matrices, reverse gender numbers, participles, and conditional syntax.
          </p>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white dark:bg-neutral-800 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
          11 Advanced Components
        </div>
      </div>

      {/* ======================================================== */}
      {/* Component 47: Verb-Subject Agreement & Word Order         */}
      {/* ======================================================== */}
      <section id="comp-47" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 47
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Verb-Subject Agreement &amp; Word Order <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(تَطَابُقُ الفِعْلِ وَالفَاعِلِ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 2, Page 15
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          {/* Paradigm Selectors */}
          <div className="flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => setAgreementType('past_masc')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                agreementType === 'past_masc'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Past Masc (ذَهَبَ الأَوْلَادُ)
            </button>
            <button
              onClick={() => setAgreementType('past_fem')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                agreementType === 'past_fem'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Past Fem (ذَهَبَتِ البَنَاتُ)
            </button>
            <button
              onClick={() => setAgreementType('pres_masc')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                agreementType === 'pres_masc'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Present Masc (يَذْهَبُ الأَوْلَادُ)
            </button>
            <button
              onClick={() => setAgreementType('pres_fem')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                agreementType === 'pres_fem'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Present Fem (تَذْهَبُ البَنَاتُ)
            </button>
          </div>

          {/* Word Order Switcher Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsNominalFirst(!isNominalFirst)}
              className="h-12 px-6 rounded-full bg-accent-primary-subtle text-accent-primary font-english-bold text-xs flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer"
            >
              <span>⇄ Invert Word Order:</span>
              <span className="font-extrabold">{isNominalFirst ? 'Nominal First (الجُمْلَةُ الاسْمِيَّةُ)' : 'Verbal First (الجُمْلَةُ الفِعْلِيَّةُ)'}</span>
            </button>
          </div>

          {/* Rendered Arabic Sentence */}
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {isNominalFirst ? (
                <>
                  <span>{agreementData[agreementType].nominal.subject} </span>
                  <span className="text-accent-primary">{agreementData[agreementType].nominal.verb}</span>
                </>
              ) : (
                <>
                  <span className="text-accent-primary">{agreementData[agreementType].verbal.verb} </span>
                  <span>{agreementData[agreementType].verbal.subject}</span>
                </>
              )}
            </div>
            <div className="text-xs font-english text-neutral-500 dark:text-neutral-400">
              {isNominalFirst ? agreementData[agreementType].nominal.note : agreementData[agreementType].verbal.note}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 48: Sound Masculine Plural Case Matrix          */}
      {/* ======================================================== */}
      <section id="comp-48" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 48
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Sound Masculine Plural Case Matrix <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(إِعْرَابُ جَمْعِ المُذَكَّرِ السَّالِم)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 2, Page 32
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {(['subject', 'object', 'prep', 'idafah'] as const).map((cKey) => (
              <button
                key={cKey}
                onClick={() => setPluralCase(cKey)}
                className={`p-4 rounded-2xl text-start transition-all cursor-pointer ${
                  pluralCase === cKey
                    ? 'bg-accent-primary-subtle border-2 border-accent-primary'
                    : 'bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                }`}
              >
                <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                  {pluralCaseData[cKey].role}
                </span>
                <span className="text-xs font-english-bold text-neutral-900 dark:text-white block">
                  {pluralCaseData[cKey].marker}
                </span>
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {pluralCaseData[pluralCase].sentence}
            </div>
            <div className="text-xs text-neutral-500">
              {pluralCaseData[pluralCase].note}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 53: Reverse Gender Numbers 3-10                */}
      {/* ======================================================== */}
      <section id="comp-53" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 53
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Reverse Gender Numbers 3-10 <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(عَدَد 3-10 وَمُخَالَفَةُ المَعْدُود)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 112
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="inline-flex rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-1">
            <button
              onClick={() => setNounGender53('masc')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                nounGender53 === 'masc'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Masculine Noun (رِجَال)
            </button>
            <button
              onClick={() => setNounGender53('fem')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                nounGender53 === 'fem'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Feminine Noun (نِسَاء)
            </button>
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {[3, 4, 5, 6, 7, 8, 9, 10].map((d) => (
              <button
                key={d}
                onClick={() => setNumDigit53(d)}
                className={`w-11 h-11 rounded-2xl font-english-bold text-sm transition-all ${
                  numDigit53 === d
                    ? 'bg-accent-primary text-white font-bold'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {getNumberPhrase()}
            </div>
            <div className="text-xs text-neutral-500">
              {nounGender53 === 'masc'
                ? 'Number takes Ta Marbutah (feminine form) because the counted noun is masculine.'
                : 'Number drops Ta Marbutah (masculine form) because the counted noun is feminine.'}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 54: Comparative & Superlative Builder          */}
      {/* ======================================================== */}
      <section id="comp-54" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 54
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Comparative & Superlative Builder <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(اسْمُ التَّفْضِيلِ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 135
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="inline-flex rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-1">
            <button
              onClick={() => setCompMode('comp')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                compMode === 'comp'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Comparative (أَفْعَلُ مِنْ)
            </button>
            <button
              onClick={() => setCompMode('sup')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                compMode === 'sup'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Superlative (أَفْعَلُ + مُضَاف إِلَيْهِ)
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {degreeData[compMode].main}
            </div>
            <div className="text-xs text-neutral-500">
              {degreeData[compMode].sub}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {degreeData[compMode].items.map((it, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 text-center">
                <span className="font-arabic text-base font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
                  {it}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 55: Conditional Double Jussive                 */}
      {/* ======================================================== */}
      <section id="comp-55" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 55
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Conditional Double Jussive <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(أَدَوَاتُ الشَّرْطِ: إِنْ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 144
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="flex justify-center gap-2 flex-wrap">
            {(['sukun', 'hollow', 'nun', 'weak'] as const).map((k) => (
              <button
                key={k}
                onClick={() => setCondKey(k)}
                className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                  condKey === k
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
                }`}
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {condExamples[condKey].sentence}
            </div>
            <div className="text-xs text-neutral-500">
              {condExamples[condKey].note}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 57: Authentic Classical Immersion (Quran)      */}
      {/* ======================================================== */}
      <section id="comp-57" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 57
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Authentic Classical Immersion <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(نُصُوصٌ أَصِيلَة: قُرْآن وَحَدِيث)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 175
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <p className="text-xs text-neutral-500">
            Tap any word in the Quranic verse to inspect its syntactic analysis.
          </p>

          <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-2xl mx-auto flex items-center justify-center gap-4 flex-wrap" dir="rtl">
            {scriptureTokens.map((token) => (
              <button
                key={token.ar}
                onClick={() => setSelectedScriptureWord(token.ar)}
                className={`px-6 py-3 rounded-2xl font-arabic text-3xl font-bold transition-all cursor-pointer outline-none ${
                  selectedScriptureWord === token.ar
                    ? 'bg-accent-primary text-white scale-105'
                    : 'bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white'
                }`}
              >
                {token.ar}
              </button>
            ))}
          </div>

          {selectedScriptureWord && (
            <div className="p-4 rounded-2xl bg-accent-primary-subtle max-w-xl mx-auto text-center animate-fade-in">
              <span className="text-xs font-english-bold text-accent-primary">
                {scriptureTokens.find((t) => t.ar === selectedScriptureWord)?.gloss}
              </span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

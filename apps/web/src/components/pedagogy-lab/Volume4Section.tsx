import { useState } from 'react';
import { BookOpen } from 'lucide-react';

export function Volume4Section() {
  // --- Component 58: Compound Numbers 11-19 & Tamyiz ---
  const [compNumGender, setCompNumGender] = useState<'masc' | 'fem'>('masc');
  const [compNumPrep, setCompNumPrep] = useState(false);
  const [compNumDigit, setCompNumDigit] = useState(13);

  const compNumNames: Record<number, { masc1: string; masc2: string; fem1: string; fem2: string }> = {
    11: { masc1: 'أَحَدَ', masc2: 'عَشَرَ', fem1: 'إِحْدَى', fem2: 'عَشْرَةَ' },
    12: { masc1: 'اثْنَا', masc2: 'عَشَرَ', fem1: 'اثْنَتَا', fem2: 'عَشْرَةَ' },
    13: { masc1: 'ثَلَاثَةَ', masc2: 'عَشَرَ', fem1: 'ثَلَاثَ', fem2: 'عَشْرَةَ' },
    15: { masc1: 'خَمْسَةَ', masc2: 'عَشَرَ', fem1: 'خَمْسَ', fem2: 'عَشْرَةَ' },
    19: { masc1: 'تِسْعَةَ', masc2: 'عَشَرَ', fem1: 'تِسْعَ', fem2: 'عَشْرَةَ' },
  };

  const getCompNumSentence = () => {
    const isMasc = compNumGender === 'masc';
    const d = compNumNames[compNumDigit];
    const part1 = isMasc ? d.masc1 : d.fem1;
    const part2 = isMasc ? d.masc2 : d.fem2;
    const noun = isMasc ? 'كِتَابًا' : 'قِصَّةً';
    if (compNumPrep) {
      return `فِي المَكْتَبَةِ ${part1} ${part2} ${noun}`;
    }
    return `قَرَأْتُ ${part1} ${part2} ${noun}`;
  };

  // --- Component 59: Decade Numbers 20-90 ---
  const [decadeNum, setDecadeNum] = useState(20);
  const [decadeCase, setDecadeCase] = useState<'marfu' | 'mansub' | 'majrur'>('marfu');

  const decadeNames: Record<number, { root: string }> = {
    20: { root: 'عِشْر' },
    30: { root: 'ثَلَاث' },
    40: { root: 'أَرْبَع' },
    50: { root: 'خَمْس' },
    60: { root: 'سِتّ' },
    70: { root: 'سَبْع' },
    80: { root: 'ثَمَان' },
    90: { root: 'تِسْع' },
  };

  const getDecadeWord = () => {
    const r = decadeNames[decadeNum].root;
    if (decadeCase === 'marfu') {
      return `${r}ُونَ`;
    }
    return `${r}ِينَ`;
  };

  const getDecadeSentence = () => {
    const word = getDecadeWord();
    if (decadeCase === 'marfu') {
      return `حَضَرَ ${word} طَالِبًا فِي المَسْجِدِ`;
    }
    if (decadeCase === 'mansub') {
      return `رَأَيْتُ ${word} طَالِبًا فِي المَدْرَسَةِ`;
    }
    return `مَرَرْتُ بِـ${word} طَالِبًا فِي الشَّارِعِ`;
  };

  // --- Component 60: Diptote Flexibility Matrix ---
  const [diptoteWordKey, setDiptoteWordKey] = useState<'white' | 'blue' | 'ahmad' | 'mosque'>('white');
  const [diptoteState, setDiptoteState] = useState<'bare' | 'def' | 'idafah'>('bare');

  const diptoteWords = {
    white: {
      name: 'Color (بَيْضَاء)',
      bare: 'كَتَبْتُ عَلَى وَرَقَةٍ بَيْضَاءَ',
      bareNote: 'Takes Fatha instead of Kasrah; zero tanween.',
      def: 'كَتَبْتُ عَلَى الْوَرَقَةِ الْبَيْضَاءِ',
      defNote: 'Alif-Lam restores true Kasrah.',
      idafah: 'كَتَبْتُ فِي بَيْضَاءِ الصَّحَائِفِ',
      idafahNote: 'First term of Idafah takes true Kasrah.',
    },
    blue: {
      name: 'Color (زَرْقَاء)',
      bare: 'نَظَرْتُ إِلَى سَمَاءٍ زَرْقَاءَ',
      bareNote: 'Majroor with Fatha due to Diptote status.',
      def: 'نَظَرْتُ إِلَى السَّمَاءِ الزَّرْقَاءِ',
      defNote: 'Alif-Lam forces normal Kasrah.',
      idafah: 'نَظَرْتُ فِي زَرْقَاءِ العُيُونِ',
      idafahNote: 'Mudaf status restores Kasrah.',
    },
    ahmad: {
      name: 'Proper Name (أَحْمَد)',
      bare: 'سَلَّمْتُ عَلَى أَحْمَدَ',
      bareNote: 'Non-Arabic or verbal-pattern name takes Fatha.',
      def: 'سَلَّمْتُ عَلَى الْأَحْمَدِينَ',
      defNote: 'Pluralized with Al takes regular case ending.',
      idafah: 'كِتَابُ أَحْمَدَ مَفْتُوحٌ',
      idafahNote: 'Mudaf Ilayh takes Fatha without tanween.',
    },
    mosque: {
      name: 'Plural (مَسَاجِد)',
      bare: 'صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ',
      bareNote: 'Muntaha al-Jumoo takes Fatha when bare.',
      def: 'صَلَّيْتُ فِي الْمَسَاجِدِ الْكَبِيرَةِ',
      defNote: 'Alif-Lam allows standard Kasrah.',
      idafah: 'صَلَّيْتُ فِي مَسَاجِدِ المَدِينَةِ',
      idafahNote: 'Mudaf to another noun allows true Kasrah.',
    },
  };

  // --- Component 61: Form V Ambiguity Resolver ---
  const [formVVerb, setFormVVerb] = useState<'taallama' | 'takallama' | 'tadhakkara'>('taallama');
  const [formVMode, setFormVMode] = useState<'madi' | 'amr'>('madi');

  const formVData = {
    taallama: {
      madi: 'تَعَلَّمَ زَيْدٌ القُرْآنَ كَرِيمًا',
      madiNote: 'Past Tense: Zayd learned the Quran',
      amr: 'تَعَلَّمْ يَا زَيْدُ القُرْآنَ الكَرِيمَ!',
      amrNote: 'Imperative (Command): Learn the Quran, O Zayd!',
    },
    takallama: {
      madi: 'تَكَلَّمَ الأُسْتَاذُ بِاللُّغَةِ العَرَبِيَّةِ',
      madiNote: 'Past Tense: The professor spoke in Arabic',
      amr: 'تَكَلَّمْ يَا أَخِي بِالفُصْحَى!',
      amrNote: 'Imperative: Speak in standard Arabic, my brother!',
    },
    tadhakkara: {
      madi: 'تَذَكَّرَ الطَّالِبُ وَاجِبَهُ المَدْرَسِيَّ',
      madiNote: 'Past Tense: The student remembered his homework',
      amr: 'تَذَكَّرْ يَوْمَ الحِسَابِ!',
      amrNote: 'Imperative: Remember the Day of Reckoning!',
    },
  };

  // --- Component 62: Dual & Plural Participle Alignment ---
  const [participleRoot, setParticipleRoot] = useState<'nasr' | 'shukr' | 'ibadah'>('nasr');

  const participleData = {
    nasr: {
      label: 'النَّصْرُ (Help)',
      ms: 'نَاصِرٌ', md: 'نَاصِرَانِ', mp: 'نَاصِرُونَ',
      fs: 'نَاصِرَةٌ', fd: 'نَاصِرَتَانِ', fp: 'نَاصِرَاتٌ',
      verbSent: 'نَصَرَ خَالِدٌ وَأَخُوهُ بِلَالًا',
      nomSent: 'هُمَا نَاصِرَانِ',
    },
    shukr: {
      label: 'الشُّكْرُ (Thank)',
      ms: 'شَاكِرٌ', md: 'شَاكِرَانِ', mp: 'شَاكِرُونَ',
      fs: 'شَاكِرَةٌ', fd: 'شَاكِرَتَانِ', fp: 'شَاكِرَاتٌ',
      verbSent: 'شَكَرَ العَامِلَانِ رَبَّهُمَا',
      nomSent: 'العَامِلَانِ شَاكِرَانِ',
    },
    ibadah: {
      label: 'العِبَادَةُ (Worship)',
      ms: 'عَابِدٌ', md: 'عَابِدَانِ', mp: 'عَابِدُونَ',
      fs: 'عَابِدَةٌ', fd: 'عَابِدَتَانِ', fp: 'عَابِدَاتٌ',
      verbSent: 'عَبَدَ الصَّالِحُونَ رَبَّهُمْ',
      nomSent: 'المُسْلِمُونَ عَابِدُونَ',
    },
  };

  // --- Component 63: Defective & Hollow Verb Jussive ---
  const [verbType63, setVerbType63] = useState<'sound' | 'hollow' | 'defective'>('hollow');

  // --- Component 64: Imperative with Jussive Response ---
  const [jawabKey, setJawabKey] = useState<'peace' | 'mercy' | 'follow'>('peace');
  const jawabTexts = {
    peace: {
      imperative: 'أَفْشُوا السَّلَامَ بَيْنَكُمْ',
      responseWord: 'تَحَابُّوا',
      reason: 'Majzoom as response to command by omission of Nun (تَتَحَابُّونَ ➔ تَحَابُّوا)',
      translation: 'Spread peace amongst yourselves, and you will love one another.',
    },
    mercy: {
      imperative: 'ارْحَمُوا مَنْ فِي الأَرْضِ',
      responseWord: 'يَرْحَمْكُمْ',
      reason: 'Majzoom with Sukun on Meem as response to imperative (يَرْحَمُكُمْ ➔ يَرْحَمْكُمْ)',
      translation: 'Have mercy on those on earth; the One in heaven will have mercy on you.',
    },
    follow: {
      imperative: 'قُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي',
      responseWord: 'يُحْبِبْكُمُ اللَّهُ',
      reason: 'Majzoom response to imperative command (يُحِبُّكُمْ ➔ يُحْبِبْكُمْ with unravelling)',
      translation: 'Say: If you love Allah, follow me, and Allah will love you.',
    },
  };

  return (
    <div className="space-y-16">
      {/* Volume 4 Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
            <BookOpen size={14} />
            <span>Volume 4 Curriculum Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-english-extrabold text-neutral-950 dark:text-white mt-1">
            Classical Precision &amp; Balaghah
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Components 58 to 64: Compound numbers, decade numbers, diptotes, verb derivation nuances, and classical Quranic syntax.
          </p>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white dark:bg-neutral-800 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
          7 Advanced Components
        </div>
      </div>

      {/* ======================================================== */}
      {/* Component 58: Compound Numbers 11-19 & Tamyiz             */}
      {/* ======================================================== */}
      <section id="comp-58" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 58
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Compound Numbers 11-19 &amp; Tamyiz <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(الأَعْدَادُ المُرَكَّبَةُ وَالتَّمْيِيزُ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 125 &amp; 126
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-flex rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-1">
              <button
                onClick={() => setCompNumGender('masc')}
                className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                  compNumGender === 'masc'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Masculine Noun (كِتَابًا)
              </button>
              <button
                onClick={() => setCompNumGender('fem')}
                className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                  compNumGender === 'fem'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Feminine Noun (قِصَّةً)
              </button>
            </div>

            <div className="inline-flex rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-1">
              <button
                onClick={() => setCompNumPrep(false)}
                className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                  !compNumPrep
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Direct Sentence
              </button>
              <button
                onClick={() => setCompNumPrep(true)}
                className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                  compNumPrep
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                With Preposition (فِي...)
              </button>
            </div>
          </div>

          {/* Digit Selector */}
          <div className="flex justify-center gap-2 flex-wrap">
            {[11, 12, 13, 15, 19].map((digit) => (
              <button
                key={digit}
                onClick={() => setCompNumDigit(digit)}
                className={`w-12 h-12 rounded-2xl font-english-bold text-sm transition-all ${
                  compNumDigit === digit
                    ? 'bg-accent-primary text-white font-bold'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {digit}
              </button>
            ))}
          </div>

          {/* Display Output */}
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {getCompNumSentence()}
            </div>
            <div className="text-xs font-english text-neutral-500 dark:text-neutral-400">
              Both parts remain indeclinable upon Fathah (مَبْنِيٌّ عَلَى فَتْحِ الجُزْءَيْنِ) regardless of grammatical position.
            </div>
          </div>

          {/* 3-Part Syntactic Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-start text-xs">
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">1st Part (الجُزْءُ الأَوَّل)</span>
              <div className="font-arabic text-lg font-bold text-neutral-900 dark:text-white" dir="rtl">
                {compNumGender === 'masc' ? compNumNames[compNumDigit].masc1 : compNumNames[compNumDigit].fem1}
              </div>
              <div className="text-[11px] text-neutral-500">Opposes gender (3-19)</div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">2nd Part (الجُزْءُ الثَّانِي)</span>
              <div className="font-arabic text-lg font-bold text-neutral-900 dark:text-white" dir="rtl">
                {compNumGender === 'masc' ? compNumNames[compNumDigit].masc2 : compNumNames[compNumDigit].fem2}
              </div>
              <div className="text-[11px] text-neutral-500">Always agrees with noun</div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Tamyiz (المَعْدُود)</span>
              <div className="font-arabic text-lg font-bold text-neutral-900 dark:text-white" dir="rtl">
                {compNumGender === 'masc' ? 'كِتَابًا' : 'قِصَّةً'}
              </div>
              <div className="text-[11px] text-neutral-500">Singular accusative</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 59: Decade Numbers & Sound Plural Inflection   */}
      {/* ======================================================== */}
      <section id="comp-59" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 59
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Decade Numbers &amp; Sound Plural Inflection <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(أَلْفَاظُ العُقُودِ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 33
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          {/* Decade Selector */}
          <div className="flex justify-center gap-2 flex-wrap">
            {[20, 30, 40, 50, 60, 70, 80, 90].map((num) => (
              <button
                key={num}
                onClick={() => setDecadeNum(num)}
                className={`w-12 h-12 rounded-2xl font-english-bold text-sm transition-all ${
                  decadeNum === num
                    ? 'bg-accent-primary text-white font-bold'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Case Buttons */}
          <div className="flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => setDecadeCase('marfu')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                decadeCase === 'marfu'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              Subject / Marfu (-ُونَ)
            </button>
            <button
              onClick={() => setDecadeCase('mansub')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                decadeCase === 'mansub'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              Object / Mansoob (-ِينَ)
            </button>
            <button
              onClick={() => setDecadeCase('majrur')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                decadeCase === 'majrur'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              Preposition / Majroor (بِـ...-ِينَ)
            </button>
          </div>

          {/* Sentence Display */}
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {getDecadeSentence()}
            </div>
            <div className="text-xs text-neutral-500">
              Decades inflect like Sound Masculine Plurals (Jam' Mudhakkar Salim): Waw for Marfu, Ya for Mansoob &amp; Majroor.
            </div>
          </div>

          {/* Gender Invariance Proof */}
          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto flex items-center justify-around text-center">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">With Masculine Noun</span>
              <span className="font-arabic text-lg font-bold text-neutral-900 dark:text-white" dir="rtl">{getDecadeWord()} تِلْمِيذًا</span>
            </div>
            <div className="text-sm font-bold text-neutral-300 dark:text-neutral-600">=</div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">With Feminine Noun</span>
              <span className="font-arabic text-lg font-bold text-neutral-900 dark:text-white" dir="rtl">{getDecadeWord()} تِلْمِيذَةً</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 60: Diptote Flexibility Matrix                 */}
      {/* ======================================================== */}
      <section id="comp-60" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 60
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Diptote Flexibility Matrix <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(المَمْنُوعُ مِنَ الصَّرْفِ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 27
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="flex justify-center gap-2 flex-wrap">
            {(Object.keys(diptoteWords) as Array<keyof typeof diptoteWords>).map((key) => (
              <button
                key={key}
                onClick={() => setDiptoteWordKey(key)}
                className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                  diptoteWordKey === key
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {diptoteWords[key].name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-start">
            <div
              onClick={() => setDiptoteState('bare')}
              className={`p-5 rounded-2xl transition-all cursor-pointer ${
                diptoteState === 'bare'
                  ? 'bg-accent-primary-subtle border-2 border-accent-primary'
                  : 'bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-900'
              }`}
            >
              <span className="text-[10px] font-mono font-bold uppercase text-amber-600 dark:text-amber-400">1. Bare Genitive (Fatha)</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white mt-1" dir="rtl">
                {diptoteWords[diptoteWordKey].bare}
              </div>
              <p className="text-xs text-neutral-500 mt-2">{diptoteWords[diptoteWordKey].bareNote}</p>
            </div>

            <div
              onClick={() => setDiptoteState('def')}
              className={`p-5 rounded-2xl transition-all cursor-pointer ${
                diptoteState === 'def'
                  ? 'bg-accent-primary-subtle border-2 border-accent-primary'
                  : 'bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-900'
              }`}
            >
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">2. Definite with Al (Kasrah)</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white mt-1" dir="rtl">
                {diptoteWords[diptoteWordKey].def}
              </div>
              <p className="text-xs text-neutral-500 mt-2">{diptoteWords[diptoteWordKey].defNote}</p>
            </div>

            <div
              onClick={() => setDiptoteState('idafah')}
              className={`p-5 rounded-2xl transition-all cursor-pointer ${
                diptoteState === 'idafah'
                  ? 'bg-accent-primary-subtle border-2 border-accent-primary'
                  : 'bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-900'
              }`}
            >
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400">3. In Idafah (Kasrah)</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white mt-1" dir="rtl">
                {diptoteWords[diptoteWordKey].idafah}
              </div>
              <p className="text-xs text-neutral-500 mt-2">{diptoteWords[diptoteWordKey].idafahNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 61: Form V Ambiguity Resolver                  */}
      {/* ======================================================== */}
      <section id="comp-61" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 61
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Form V Ambiguity Resolver <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(بَابُ التَّفَعُّل: المَاضِي وَالأَمْر)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 115
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => setFormVVerb('taallama')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                formVVerb === 'taallama'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              تَعَلَّمَ (Learn)
            </button>
            <button
              onClick={() => setFormVVerb('takallama')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                formVVerb === 'takallama'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              تَكَلَّمَ (Speak)
            </button>
            <button
              onClick={() => setFormVVerb('tadhakkara')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                formVVerb === 'tadhakkara'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              تَذَكَّرَ (Remember)
            </button>
          </div>

          <div className="inline-flex rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-1">
            <button
              onClick={() => setFormVMode('madi')}
              className={`px-5 py-2.5 rounded-xl text-xs font-english-bold transition-all ${
                formVMode === 'madi'
                  ? 'bg-accent-primary text-white font-bold'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Past Tense (المَاضِي)
            </button>
            <button
              onClick={() => setFormVMode('amr')}
              className={`px-5 py-2.5 rounded-xl text-xs font-english-bold transition-all ${
                formVMode === 'amr'
                  ? 'bg-accent-primary text-white font-bold'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Imperative / Command (الأَمْر)
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-2">
            <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              {formVMode === 'madi' ? formVData[formVVerb].madi : formVData[formVVerb].amr}
            </div>
            <div className="text-xs font-english text-neutral-500">
              {formVMode === 'madi' ? formVData[formVVerb].madiNote : formVData[formVVerb].amrNote}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 62: Dual & Plural Participle Alignment         */}
      {/* ======================================================== */}
      <section id="comp-62" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 62
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Dual &amp; Plural Participle Alignment <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(اسْمُ الفَاعِلِ: مُثَنًّى وَجَمْع)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 53 &amp; 55
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="flex justify-center gap-2 flex-wrap">
            {(['nasr', 'shukr', 'ibadah'] as const).map((rKey) => (
              <button
                key={rKey}
                onClick={() => setParticipleRoot(rKey)}
                className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                  participleRoot === rKey
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {participleData[rKey].label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-center">
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Masc Singular</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {participleData[participleRoot].ms}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Masc Dual (-َانِ)</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {participleData[participleRoot].md}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Masc Plural (-ُونَ)</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {participleData[participleRoot].mp}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Fem Singular</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {participleData[participleRoot].fs}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Fem Dual (-َتَانِ)</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {participleData[participleRoot].fd}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Fem Plural (-َاتٌ)</span>
              <div className="font-arabic text-xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {participleData[participleRoot].fp}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-3 text-start">
            <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block">Textbook Transformation Drill</span>
            <div className="flex items-center justify-between flex-wrap gap-2 text-sm">
              <div className="space-y-1">
                <span className="text-[11px] text-neutral-400 block">Verbal Sentence</span>
                <span className="font-arabic text-lg font-bold text-neutral-900 dark:text-white" dir="rtl">
                  {participleData[participleRoot].verbSent}
                </span>
              </div>
              <span className="text-neutral-400 font-bold">➔</span>
              <div className="space-y-1">
                <span className="text-[11px] text-neutral-400 block">Nominal Participle</span>
                <span className="font-arabic text-lg font-bold text-accent-primary" dir="rtl">
                  {participleData[participleRoot].nomSent}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 63: Defective & Hollow Verb Jussive with Lam   */}
      {/* ======================================================== */}
      <section id="comp-63" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 63
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Defective &amp; Hollow Verb Jussive <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(جَزْمُ الأَجْوَفِ وَالنَّاقِصِ بِلَمْ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 141 &amp; 142
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => setVerbType63('sound')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                verbType63 === 'sound'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Sound (فَتَحَ / يَفْتَحُ)
            </button>
            <button
              onClick={() => setVerbType63('hollow')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                verbType63 === 'hollow'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Hollow / Ajwaf (قَامَ / يَقُومُ)
            </button>
            <button
              onClick={() => setVerbType63('defective')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                verbType63 === 'defective'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Defective / Naqis (دَعَا / يَدْعُو)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Singular Form (المُفْرَد)</span>
              <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {verbType63 === 'sound' ? 'لَمْ يَفْتَحْ' : verbType63 === 'hollow' ? 'لَمْ يَقُمْ' : 'لَمْ يَدْعُ'}
              </div>
              <p className="text-xs text-neutral-500">
                {verbType63 === 'sound'
                  ? 'Regular Sukun on Lam'
                  : verbType63 === 'hollow'
                  ? 'Weak Waw dropped to prevent two sukoons (يَقُومُ ➔ لَمْ يَقُمْ)'
                  : 'Final weak letter dropped completely (يَدْعُو ➔ لَمْ يَدْعُ)'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Plural Form (الجَمْع)</span>
              <div className="font-arabic text-3xl font-bold text-neutral-900 dark:text-white" dir="rtl">
                {verbType63 === 'sound' ? 'لَمْ يَفْتَحُوا' : verbType63 === 'hollow' ? 'لَمْ يَقُومُوا' : 'لَمْ يَدْعُوا'}
              </div>
              <p className="text-xs text-neutral-500">
                {verbType63 === 'sound'
                  ? 'Jussive by deletion of Nun'
                  : verbType63 === 'hollow'
                  ? 'Weak Waw restored because Meem has Dammah'
                  : 'Weak root drops before plural Waw'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Component 64: Imperative with Jussive Response           */}
      {/* ======================================================== */}
      <section id="comp-64" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
              Component 64
            </span>
            <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
              Imperative with Jussive Response <span className="font-arabic font-normal text-sm sm:text-base text-neutral-500" dir="rtl">(جَوَابُ الطَّلَبِ)</span>
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 3, Page 165
          </span>
        </div>

        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div className="flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => setJawabKey('peace')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                jawabKey === 'peace'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Hadith of Peace (أَفْشُوا السَّلَامَ)
            </button>
            <button
              onClick={() => setJawabKey('mercy')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                jawabKey === 'mercy'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Hadith of Mercy (ارْحَمُوا)
            </button>
            <button
              onClick={() => setJawabKey('follow')}
              className={`px-4 py-2 rounded-xl text-xs font-english-bold transition-all ${
                jawabKey === 'follow'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Noble Quran (فَاتَّبِعُونِي)
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-xl mx-auto space-y-4">
            <div className="font-arabic text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white leading-relaxed" dir="rtl">
              <span>{jawabTexts[jawabKey].imperative} </span>
              <span className="text-accent-primary underline decoration-accent-primary underline-offset-8">
                {jawabTexts[jawabKey].responseWord}
              </span>
            </div>
            <div className="text-xs font-english text-neutral-500">
              {jawabTexts[jawabKey].translation}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-start">
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">1. Imperative Command</span>
              <div className="font-arabic text-lg font-bold text-neutral-900 dark:text-white" dir="rtl">
                {jawabTexts[jawabKey].imperative}
              </div>
              <div className="text-[11px] text-neutral-500">Serves as the conditional trigger (Talab)</div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-accent-primary">2. Jussive Response (جَوَابُ الطَّلَبِ)</span>
              <div className="font-arabic text-lg font-bold text-accent-primary" dir="rtl">
                {jawabTexts[jawabKey].responseWord}
              </div>
              <div className="text-[11px] text-neutral-500">{jawabTexts[jawabKey].reason}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

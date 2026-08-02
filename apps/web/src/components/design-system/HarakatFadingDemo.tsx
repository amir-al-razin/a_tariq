import { useState } from 'react';
import { Sparkles, BookOpen, ChevronRight, Eye } from 'lucide-react';

interface FadingStage {
  id: number;
  token: string;
  name: string;
  shortDesc: string;
  ruleDesc: string;
  targetState: string;
}

interface Passage {
  id: string;
  title: string;
  titleEn: string;
  translation: string;
  versions: string[];
}

export function HarakatFadingDemo() {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [selectedPassage, setSelectedPassage] = useState<number>(0);

  const stages: FadingStage[] = [
    {
      id: 0,
      token: 'STAGE_0',
      name: 'Full Vocalization',
      shortDesc: 'Beginner / Intro',
      ruleDesc: 'Complete vowel diacritics on all characters (Fatha, Kasra, Damma, Sukun, Shadda, Tanween). Provides unconditional phonetic support.',
      targetState: 'High-contrast rendering in Cairo Semibold with full opacity on all vowel characters.'
    },
    {
      id: 1,
      token: 'STAGE_1',
      name: "Ending Tanween / I'rab Fading",
      shortDesc: 'Waqf Stop Training',
      ruleDesc: "Final grammatical inflectional endings (Tanween and short final case vowels) are dimmed or stripped to train natural stop reading (Waqf), preserving internal root vowels.",
      targetState: 'Final vowel diacritics removed or rendered with reduced visual weight.'
    },
    {
      id: 2,
      token: 'STAGE_2',
      name: 'Pattern & Article Fading',
      shortDesc: 'Structural Removal',
      ruleDesc: 'Highly predictable prefixes and structural morphemes (the definite article Alif-Lam, standard pronouns, prepositions) drop their harakat entirely.',
      targetState: 'Structural grammar words transition to unvoweled text; core verb and noun roots remain voweled for pronunciation.'
    },
    {
      id: 3,
      token: 'STAGE_3',
      name: 'Disambiguation / Root Only',
      shortDesc: 'Selective Diacritics',
      ruleDesc: 'Only visually ambiguous homographs or irregular conjugation forms retain selective diacritics (e.g., differentiating passive vs. active or plural patterns).',
      targetState: 'Minimum vital harakat rendered; standard narrative and conversational sentences are largely unvoweled.'
    },
    {
      id: 4,
      token: 'STAGE_4',
      name: 'Zero Harakat Mastery',
      shortDesc: 'Native Authentic Reading',
      ruleDesc: '100% unvoweled, authentic Arabic reading text typical of classical manuscripts, historical texts, and native modern publications.',
      targetState: 'Pure unvoweled string rendered in Cairo Semibold with expansive leading-[2.4] vertical rhythm.'
    }
  ];

  const passages: Passage[] = [
    {
      id: 'library',
      title: 'فِي الْمَكْتَبَةِ',
      titleEn: 'In the School Library',
      translation: 'Khalid went to the school library yesterday. He found many books on science, history, and literature. He sat down quietly and read for a full hour.',
      versions: [
        'ذَهَبَ خَالِدٌ إِلَى مَكْتَبَةِ الْمَدْرَسَةِ أَمْسِ، وَجَدَ كُتُبًا كَثِيرَةً فِي الْعُلُومِ وَالتَّارِيخِ وَالْأَدَبِ، وَجَلَسَ فِي هُدُوءٍ وَقَرَأَ سَاعَةً كَامِلَةً.',
        'ذَهَبَ خَالِدٌ إِلَى مَكْتَبَة الْمَدْرَسَة أَمْسِ، وَجَدَ كُتُبًا كَثِيرَة فِي الْعُلُوم وَالتَّارِيخ وَالْأَدَبِ، وَجَلَسَ فِي هُدُوء وَقَرَأَ سَاعَة كَامِلَة.',
        'ذهَبَ خَالِد إلى مَكْتَبَة المدرسة أمسِ، وَجَدَ كُتُبًا كَثِيرَة في العلوم والتَّارِيخ والأَدَبِ، وجَلَسَ في هُدُوء وقَرَأَ سَاعَة كَامِلَة.',
        'ذهب خالد إلى مكتبة المدرسة أمس، وجد كُتُبًا كثيرة في العلوم والتاريخ والأدب، وجلس في هدوء وقرأ ساعة كاملة.',
        'ذهب خالد إلى مكتبة المدرسة أمس، وجد كتبا كثيرة في العلوم والتاريخ والأدب، وجلس في هدوء وقرأ ساعة كاملة.'
      ]
    },
    {
      id: 'knowledge',
      title: 'فَضْلُ الْعِلْمِ',
      titleEn: 'The Virtue of Knowledge',
      translation: 'Knowledge is light and ignorance is darkness. The diligent student seeks useful books every single day with patience and gratitude.',
      versions: [
        'الْعِلْمُ نُورٌ وَالْجَهْلُ ظُلْمَةٌ، يَطْلُبُ الطَّالِبُ الْمُجْتَهِدُ الْكُتُبَ الْمُفِيدَةَ كُلَّ يَوْمٍ بِصَبْرٍ وَشُكْرٍ.',
        'الْعِلْم نُور وَالْجَهْل ظُلْمَة، يَطْلُب الطَّالِب الْمُجْتَهِد الْكُتُب الْمُفِيدَة كُلَّ يَوْم بِصَبْر وَشُكْر.',
        'العِلْم نور والجَهْل ظُلْمَة، يَطْلُب الطالب المُجْتَهِد الكُتُب المُفِيدَة كُلَّ يوم بِصَبْر وشُكْر.',
        'العلم نور والجهل ظُلْمة، يَطلُب الطالب المُجتَهد الكُتُب المفيدة كل يوم بـصبر وشكر.',
        'العلم نور والجهل ظلمة، يطلب الطالب المجتهد الكتب المفيدة كل يوم بصبر وشكر.'
      ]
    }
  ];

  const activePassage = passages[selectedPassage];
  const activeStageObj = stages[currentStage];

  return (
    <div className="space-y-12">
      {/* Harakat Fading Hero */}
      <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 md:p-10 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 font-english-semibold text-xs tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-neutral-900 dark:text-white" />
            <span>Comprehension Engine Innovation V2</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/15 text-xs font-english-semibold text-[#10b981]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>#10b981 Active Selection Glints</span>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-english-semibold text-neutral-950 dark:text-white tracking-tight">
          5-Stage Systematic Harakat Fading
        </h2>
        <p className="text-base font-english text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
          Traditional language learning apps leave vowel diacritics turned on indefinitely, creating an <strong className="text-neutral-950 dark:text-white font-semibold">&quot;Illusion of Fluency&quot;</strong> where students become helpless when confronting authentic unvoweled Arabic texts. Our pedagogical engine systematically peels away vowel diacritics across 5 structured stages as user mastery matures, anchoring current reading stages with our subtle <strong className="text-[#10b981]">Emerald Green (#10b981)</strong> accent marker.
        </p>
      </div>

      {/* Interactive Simulator Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-xl font-english-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>Interactive Diacritic Fading Simulator</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981]">leading-[2.4] · py-2</span>
            </h3>
            <p className="text-sm font-english text-neutral-500 dark:text-neutral-400 mt-1">
              Select a passage and click through Stages 0 to 4 to observe real-time diacritic shedding and text transformation.
            </p>
          </div>

          {/* Passage Switcher Pills */}
          <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full">
            {passages.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPassage(idx)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-english-semibold transition-all cursor-pointer outline-none ${
                  selectedPassage === idx
                    ? 'bg-[#10b981]/15 text-[#10b981] font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                }`}
              >
                {selectedPassage === idx ? (
                  <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" />
                ) : (
                  <BookOpen className="w-3.5 h-3.5" />
                )}
                <span>{p.titleEn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stage Selection Step Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 md:gap-3">
          {stages.map((stg) => {
            const isSelected = currentStage === stg.id;
            return (
              <button
                key={stg.token}
                type="button"
                onClick={() => setCurrentStage(stg.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all cursor-pointer outline-none text-center gap-1 ${
                  isSelected
                    ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white scale-[1.02]'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" title="Active Stage (Emerald)" />}
                  <div className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black font-bold' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}>
                    Stage {stg.id}
                  </div>
                </div>
                <span className="font-english-semibold text-xs md:text-sm mt-1 block">
                  {stg.shortDesc}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Passage Presentation Box */}
        <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 md:p-12 transition-all space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" title="Active Stage Marker" />
              <span className="text-xs font-mono bg-white dark:bg-[#141414] text-neutral-900 dark:text-neutral-100 px-3 py-1 rounded-full font-semibold">
                {activeStageObj.token} · {activeStageObj.name}
              </span>
            </div>
            <span className="text-sm font-arabic text-neutral-500 dark:text-neutral-400" dir="rtl">
              {activePassage.title} ({activePassage.titleEn})
            </span>
          </div>

          {/* Arabic Text Display Layer */}
          <div className="bg-white dark:bg-[#141414] rounded-2xl p-8 md:p-12 min-h-[160px] flex items-center justify-center transition-all duration-300">
            <div className="w-full py-2">
              <p
                className="font-cairo font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-950 dark:text-white text-right leading-[2.6] sm:leading-[2.4]"
                dir="rtl"
              >
                {activePassage.versions[currentStage]}
              </p>
            </div>
          </div>

          {/* Translation & Rule Explanation Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            <div className="md:col-span-6 space-y-2">
              <span className="font-english text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                English Translation Reference
              </span>
              <p className="font-english text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed bg-white dark:bg-[#141414] p-4 rounded-2xl">
                {activePassage.translation}
              </p>
            </div>

            <div className="md:col-span-6 space-y-2">
              <span className="font-english text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                Active Pedagogical Stage Rule
              </span>
              <div className="bg-white dark:bg-[#141414] p-4 rounded-2xl space-y-2">
                <p className="font-english text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>{activeStageObj.name} Mechanics</span>
                </p>
                <p className="font-english text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                  {activeStageObj.ruleDesc}
                </p>
                <div className="text-[11px] font-mono text-[#10b981] pt-1 font-semibold">
                  Target: {activeStageObj.targetState}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Advancement Pill */}
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setCurrentStage((prev) => (prev < 4 ? prev + 1 : 0))}
              className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-english-semibold text-xs md:text-sm transition-opacity hover:opacity-90 flex items-center gap-2 cursor-pointer outline-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>{currentStage === 4 ? 'Reset to Stage 0 (Full Harakat)' : `Advance to Stage ${currentStage + 1} (${stages[currentStage + 1].shortDesc})`}</span>
              <ChevronRight className="w-4 h-4 text-[#10b981]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

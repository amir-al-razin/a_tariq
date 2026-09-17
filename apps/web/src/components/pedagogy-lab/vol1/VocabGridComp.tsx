import { useState } from 'react';
import { RotateCcw, Volume2, Check } from 'lucide-react';
import { audioService } from '@/lib/audioService';

export interface VocabCardItem {
  id: number;
  ar: string;
  rom: string;
  en: string;
  category: string;
  emoji?: string;
}

const VOCAB_DATA: Record<string, VocabCardItem[]> = {
  nouns_m: [
    { id: 1, ar: 'كِتَابٌ', rom: 'kitābun', en: 'A book', category: 'Masculine Noun • Vol 1, Page 15', emoji: '📖' },
    { id: 2, ar: 'قَلَمٌ', rom: 'qalamun', en: 'A pen', category: 'Masculine Noun • Vol 1, Page 15', emoji: '🖊️' },
    { id: 3, ar: 'كُرْسِيٌّ', rom: 'kursiyyun', en: 'A chair', category: 'Masculine Noun • Vol 1, Page 15', emoji: '🪑' },
    { id: 4, ar: 'بَيْتٌ', rom: 'baytun', en: 'A house', category: 'Masculine Noun • Vol 1, Page 15', emoji: '🏠' },
    { id: 5, ar: 'بَابٌ', rom: 'bābun', en: 'A door', category: 'Masculine Noun • Vol 1, Page 15', emoji: '🚪' },
    { id: 6, ar: 'مِصْبَاحٌ', rom: 'miṣbāḥun', en: 'A lamp', category: 'Masculine Noun • Vol 1, Page 15', emoji: '💡' },
    { id: 7, ar: 'جِدَارٌ', rom: 'jidārun', en: 'A wall', category: 'Masculine Noun • Vol 1, Page 15', emoji: '🧱' },
    { id: 8, ar: 'سَرِيْرٌ', rom: 'sarīrun', en: 'A bed', category: 'Masculine Noun • Vol 1, Page 15', emoji: '🛏️' },
  ],
  nouns_f: [
    { id: 9, ar: 'مَدْرَسَةٌ', rom: 'madrasatun', en: 'A school', category: 'Feminine Noun • Vol 1, Page 17', emoji: '🏫' },
    { id: 10, ar: 'سَبُّوْرَةٌ', rom: 'sabbūratun', en: 'A blackboard', category: 'Feminine Noun • Vol 1, Page 17', emoji: '🖥️' },
    { id: 11, ar: 'مِسْطَرَةٌ', rom: 'misṭaratun', en: 'A ruler', category: 'Feminine Noun • Vol 1, Page 17', emoji: '📏' },
    { id: 12, ar: 'حَقِيْبَةٌ', rom: 'ḥaqībatun', en: 'A bag', category: 'Feminine Noun • Vol 1, Page 17', emoji: '🎒' },
    { id: 13, ar: 'كُرَّاسَةٌ', rom: 'kurrāsatun', en: 'A notebook', category: 'Feminine Noun • Vol 1, Page 17', emoji: '📓' },
    { id: 14, ar: 'طَاوِلَةٌ', rom: 'ṭāwilatun', en: 'A table', category: 'Feminine Noun • Vol 1, Page 17', emoji: '🪵' },
    { id: 15, ar: 'حُجْرَةٌ', rom: 'ḥujratun', en: 'A room', category: 'Feminine Noun • Vol 1, Page 17', emoji: '🚪' },
    { id: 16, ar: 'نَافِذَةٌ', rom: 'nāfidhatun', en: 'A window', category: 'Feminine Noun • Vol 1, Page 17', emoji: '🪟' },
  ],
  adjectives: [
    { id: 17, ar: 'جَدِيدٌ - جَدِيدَةٌ', rom: 'jadīdun - jadīdatun', en: 'New (m. / f.)', category: 'Adjective • Vol 1, Page 20' },
    { id: 18, ar: 'قَدِيمٌ - قَدِيمَةٌ', rom: 'qadīmun - qadīmatun', en: 'Old (m. / f.)', category: 'Adjective • Vol 1, Page 20' },
    { id: 19, ar: 'جَمِيلٌ - جَمِيلَةٌ', rom: 'jamīlun - jamīlatun', en: 'Beautiful (m. / f.)', category: 'Adjective • Vol 1, Page 20' },
    { id: 20, ar: 'كَبِيرٌ - كَبِيرَةٌ', rom: 'kabīrun - kabīratun', en: 'Big (m. / f.)', category: 'Adjective • Vol 1, Page 20' },
    { id: 21, ar: 'صَغِيرٌ - صَغِيرَةٌ', rom: 'ṣaghīrun - ṣaghīratun', en: 'Small (m. / f.)', category: 'Adjective • Vol 1, Page 20' },
    { id: 22, ar: 'نَظِيفٌ - نَظِيفَةٌ', rom: 'naẓīfun - naẓīfatun', en: 'Clean (m. / f.)', category: 'Adjective • Vol 1, Page 22' },
    { id: 23, ar: 'وَسِخٌ - وَسِخَةٌ', rom: 'wasikhun - wasikhatun', en: 'Dirty (m. / f.)', category: 'Adjective • Vol 1, Page 22' },
    { id: 24, ar: 'جَيِّدٌ - جَيِّدَةٌ', rom: 'jayyidun - jayyidatun', en: 'Good (m. / f.)', category: 'Adjective • Vol 1, Page 20' },
  ],
  people: [
    { id: 25, ar: 'تِلْمِيْذٌ - تِلْمِيْذَةٌ', rom: 'tilmīdhun - tilmīdhatun', en: 'Student (m. / f.)', category: 'People • Vol 1, Page 29' },
    { id: 26, ar: 'مُعَلِّمٌ - مُعَلِّمَةٌ', rom: "mu'allimun - mu'allimatun", en: 'Teacher (m. / f.)', category: 'People • Vol 1, Page 29' },
    { id: 27, ar: 'وَلَدٌ - بِنْتٌ', rom: 'waladun - bintun', en: 'Boy - Girl', category: 'People • Vol 1, Page 29' },
    { id: 28, ar: 'طِفْلٌ - طِفْلَةٌ', rom: 'ṭiflun - ṭiflatun', en: 'Child (m. / f.)', category: 'People • Vol 1, Page 29' },
    { id: 29, ar: 'مُؤَدَّبٌ - مُؤَدَّبَةٌ', rom: "mu'addabun - mu'addabatun", en: 'Polite (m. / f.)', category: 'People • Vol 1, Page 29' },
    { id: 30, ar: 'تَاجِرٌ - فَلَّاحٌ', rom: 'tājirun - fallāḥun', en: 'Merchant - Farmer', category: 'Occupations • Vol 1, Page 32' },
    { id: 31, ar: 'غَنِيٌّ - فَقِيْرٌ', rom: 'ghaniyyun - faqīrun', en: 'Rich - Poor', category: 'Qualities • Vol 1, Page 32' },
    { id: 32, ar: 'ذَكِيٌّ - غَبِيٌّ', rom: 'dhakiyyun - ghabiyyun', en: 'Intelligent - Dull', category: 'Qualities • Vol 1, Page 32' },
  ],
};

export function VocabGridComp() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof VOCAB_DATA>('nouns_m');
  const [viewMode, setViewMode] = useState<'grid' | 'flashcard'>('grid');
  const [flashIdx, setFlashIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [revealedCards, setRevealedCards] = useState<Record<number, boolean>>({});

  const currentList = VOCAB_DATA[activeCategory];
  const activeFlashcard = currentList[flashIdx % currentList.length];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashIdx((prev) => (prev + 1) % currentList.length);
  };

  const handleCardTap = (item: VocabCardItem) => {
    audioService.speakArabic(item.ar, true);
    setRevealedCards((prev) => ({ ...prev, [item.id]: true }));
  };

  return (
    <section id="comp-1" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 01
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Vocabulary Flashcard &amp; Grid (Receptive Lexical Priming)
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            Book: Vol 1, Pages 15, 17, 20, 29
          </span>
          <div className="inline-flex rounded-full bg-white dark:bg-neutral-800 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-full text-xs font-english-bold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('flashcard')}
              className={`px-3 py-1 rounded-full text-xs font-english-bold transition-all cursor-pointer ${
                viewMode === 'flashcard'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Flashcard Mode
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        {[
          { key: 'nouns_m', label: 'Masculine Nouns (Pg 15)' },
          { key: 'nouns_f', label: 'Feminine Nouns (Pg 17)' },
          { key: 'adjectives', label: 'Dual Adjectives (Pg 20)' },
          { key: 'people', label: 'People & Traits (Pg 29)' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveCategory(tab.key as keyof typeof VOCAB_DATA);
              setFlashIdx(0);
              setIsFlipped(false);
            }}
            className={`px-4 py-2 rounded-full text-xs font-english-bold transition-all cursor-pointer ${
              activeCategory === tab.key
                ? 'bg-accent-primary text-white'
                : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentList.map((item, idx) => {
            const isRevealed = revealedCards[item.id];
            return (
              <div
                key={item.id}
                onClick={() => handleCardTap(item)}
                className="bg-white dark:bg-neutral-800 p-4 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col justify-between items-center text-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 active:scale-95 transition-all min-h-[160px] select-none"
              >
                <div className="w-full flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                    Card {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                      isRevealed
                        ? 'bg-emerald-500 text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-400'
                    }`}
                  >
                    {isRevealed ? <Check size={12} strokeWidth={3} /> : <Volume2 size={12} />}
                  </div>
                </div>

                <div className="my-2 text-center">
                  {item.emoji && <span className="text-xl block mb-1">{item.emoji}</span>}
                  <span
                    className="font-arabic font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white block leading-[2.2] tracking-normal"
                    dir="rtl"
                  >
                    {item.ar}
                  </span>
                </div>

                <div className="w-full pt-2">
                  <span className="text-xs sm:text-sm font-english-bold text-neutral-700 dark:text-neutral-300 block">
                    {item.en}
                  </span>
                  {isRevealed && (
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block mt-0.5">
                      {item.rom}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Flashcard View */}
      {viewMode === 'flashcard' && (
        <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-md mx-auto cursor-pointer select-none space-y-3 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            {!isFlipped ? (
              <div className="space-y-3">
                {activeFlashcard.emoji && <span className="text-4xl block">{activeFlashcard.emoji}</span>}
                <div
                  className="font-arabic font-extrabold text-4xl sm:text-5xl text-neutral-900 dark:text-white leading-[2.2] tracking-normal"
                  dir="rtl"
                >
                  {activeFlashcard.ar}
                </div>
                <div className="text-xs font-mono text-neutral-400">{activeFlashcard.rom}</div>
                <div className="text-[11px] text-neutral-400 pt-2 flex items-center justify-center gap-1">
                  <RotateCcw size={12} />
                  <span>Tap card to reveal translation</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-2xl sm:text-3xl font-english-extrabold text-neutral-900 dark:text-white">
                  {activeFlashcard.en}
                </div>
                <div className="text-xs font-mono text-neutral-500">{activeFlashcard.category}</div>
                <div className="text-[11px] text-neutral-400 pt-2 flex items-center justify-center gap-1">
                  <RotateCcw size={12} />
                  <span>Tap to flip back</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => audioService.speakArabic(activeFlashcard.ar, true)}
              className="h-12 px-6 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white font-english-bold text-xs hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all cursor-pointer flex items-center gap-2"
            >
              <Volume2 size={16} />
              <span>Pronounce</span>
            </button>
            <button
              onClick={handleNextFlashcard}
              className="h-12 px-6 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-english-bold text-xs hover:opacity-90 transition-all cursor-pointer"
            >
              Next Word ({flashIdx + 1}/{currentList.length}) ➔
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

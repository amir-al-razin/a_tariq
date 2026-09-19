import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '@/lib/audioService';

export function AudioFlashcardFlipComp() {
  const flashcards = [
    { ar: 'كِتَابٌ', rom: 'kitābun', en: 'A book', type: 'Masculine Noun • Page 15' },
    { ar: 'قَلَمٌ', rom: 'qalamun', en: 'A pen', type: 'Masculine Noun • Page 15' },
    { ar: 'مَدْرَسَةٌ', rom: 'madrasatun', en: 'A school', type: 'Feminine Noun • Page 17' },
    { ar: 'حَقِيبَةٌ', rom: 'ḥaqībatun', en: 'A bag', type: 'Feminine Noun • Page 17' },
  ];
  const [flashIdx, setFlashIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = flashcards[flashIdx];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashIdx((prev) => (prev + 1) % flashcards.length);
  };

  const handleSpeak = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    audioService.speakArabic(text, true);
  };

  return (
    <section id="comp-1-flip" className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
            Component 01 (Earlier Interactive Engine)
          </span>
          <h3 className="text-xl font-english-bold text-neutral-950 dark:text-white">
            Audio Flashcard (Receptive Lexical Priming - Flip Card)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          Book: Vol 1, Page 15 &amp; 17
        </span>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
        Interactive flip card for rapid lexical priming. Tap the card surface to toggle between Arabic target script and English gloss, or click the audio icon to listen to native pronunciation.
      </p>

      <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 sm:p-8 space-y-6 text-center">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 max-w-md mx-auto cursor-pointer select-none space-y-3 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          {!isFlipped ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2" dir="rtl">
                <div className="font-arabic text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white leading-[2.2] tracking-normal">
                  {current.ar}
                </div>
                <button
                  type="button"
                  onClick={(e) => handleSpeak(current.ar, e)}
                  className="p-2 rounded-full bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 transition-colors"
                  title="Pronounce"
                >
                  <Volume2 size={16} />
                </button>
              </div>
              <div className="text-xs font-mono text-neutral-400">{current.rom}</div>
              <div className="text-[11px] text-neutral-400 pt-2 font-english-medium">Tap card to reveal meaning</div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-english-bold text-neutral-900 dark:text-white">
                {current.en}
              </div>
              <div className="text-xs text-neutral-500 font-mono">{current.type}</div>
              <div className="text-[11px] text-neutral-400 pt-2 font-english-medium">Tap to flip back</div>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={handleNextFlashcard}
            className="h-12 px-6 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-english-bold text-xs hover:opacity-90 transition-all cursor-pointer"
          >
            Next Word ➔
          </button>
        </div>
      </div>
    </section>
  );
}

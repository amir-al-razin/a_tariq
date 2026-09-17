import { useState, useMemo } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { WordChip, WordAssemblySlot } from '../design-system/primitives/PedagogyComponents';
import { Button } from '../design-system/primitives/Button';

interface AssemblyToken {
  id: string;
  word: string;
}

interface SentenceAssemblyProps {
  bookRef: string;
  instruction: string;
  tokens: string[]; // correct sequence
}

export function SentenceAssemblyDrill({
  bookRef,
  instruction,
  tokens,
}: SentenceAssemblyProps) {
  // Initial token objects with unique IDs
  const initialTokens = useMemo(() => {
    return tokens.map((word, idx) => ({ id: `${idx}-${word}`, word }));
  }, [tokens]);

  // Fisher-Yates shuffle that is guaranteed not to match initial order if tokens > 1
  const shuffledInitial = useMemo(() => {
    let arr = [...initialTokens];
    if (arr.length <= 1) return arr;
    let attempts = 0;
    while (attempts < 10) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      // Verify not identical to target sequence
      const isIdentical = arr.every((t, i) => t.word === tokens[i]);
      if (!isIdentical) break;
      attempts++;
    }
    return arr;
  }, [initialTokens, tokens]);

  const [available, setAvailable] = useState<AssemblyToken[]>(shuffledInitial);
  const [assembled, setAssembled] = useState<AssemblyToken[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const handleAddToken = (token: AssemblyToken) => {
    if (status === 'correct') return;
    setAvailable((prev) => prev.filter((t) => t.id !== token.id));
    setAssembled((prev) => [...prev, token]);
    setStatus('idle');
  };

  const handleRemoveToken = (token: AssemblyToken) => {
    if (status === 'correct') return;
    setAssembled((prev) => prev.filter((t) => t.id !== token.id));
    setAvailable((prev) => [...prev, token]);
    setStatus('idle');
  };

  const handleVerify = () => {
    const assembledText = assembled.map((t) => t.word).join(' ');
    const correctText = tokens.join(' ');
    if (assembledText === correctText) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };

  const handleReset = () => {
    setAvailable(shuffledInitial);
    setAssembled([]);
    setStatus('idle');
  };

  const isComplete = assembled.length === tokens.length;

  return (
    <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 space-y-6 transition-colors">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400">
          <span>{bookRef}</span>
          <span>•</span>
          <span className="font-english font-medium">{instruction}</span>
        </div>
        {(assembled.length > 0 || status !== 'idle') && (
          <Button
            variant="ghost"
            size="sm"
            pill
            onClick={handleReset}
            leftIcon={<RotateCcw size={13} />}
          >
            Reset
          </Button>
        )}
      </div>

      {/* Assembly Drop Target Slots */}
      <div
        className="min-h-[120px] p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-center flex-wrap gap-4 transition-colors"
        dir="rtl"
      >
        {tokens.map((_, idx) => {
          const token = assembled[idx];
          return (
            <WordAssemblySlot
              key={idx}
              word={token ? { arabic: token.word } : undefined}
              placeholder={`${idx + 1}`}
              onRemove={token && status !== 'correct' ? () => handleRemoveToken(token) : undefined}
              className="min-w-[120px] min-h-[64px]"
            />
          );
        })}
      </div>

      {/* Available Word Bank */}
      <div className="flex items-center justify-center flex-wrap gap-3 min-h-[64px] pt-1" dir="rtl">
        {available.map((token) => (
          <WordChip
            key={token.id}
            arabic={token.word}
            state="idle"
            onClick={() => handleAddToken(token)}
            className="min-w-[110px]"
          />
        ))}
      </div>

      {/* Verification Action Button */}
      {isComplete && status !== 'correct' && (
        <div className="flex justify-center pt-2">
          <Button
            variant="primary"
            size="lg"
            pill
            onClick={handleVerify}
          >
            Verify Order
          </Button>
        </div>
      )}

      {/* Immediate Minimal Feedback */}
      {status !== 'idle' && (
        <div className="flex items-center justify-center gap-2 text-sm font-english-semibold transition-all pt-1">
          {status === 'correct' ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Sentence assembled correctly</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
              <XCircle size={16} />
              <span>Incorrect sequence. Tap tokens to rearrange.</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

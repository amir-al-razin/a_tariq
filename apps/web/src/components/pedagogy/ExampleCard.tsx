import { ArabicText } from './ArabicText';
import { Romanization } from './Romanization';
import { useLanguageContent } from '@/hooks/useLanguageContent';
import { cn } from '@/lib/utils';

interface Props {
  arabic: string;
  romanized?: string;
  english: string;
  bangla?: string;
  showRomanization?: boolean;
  className?: string;
}

export function ExampleCard({
  arabic,
  romanized,
  english,
  bangla,
  showRomanization = true,
  className
}: Props) {
  const { getContent } = useLanguageContent();
  const translation = getContent({ english, bangla });

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800",
        className
      )}
    >
      <div className="flex flex-col gap-2 items-end">
        <ArabicText size="xl">{arabic}</ArabicText>
        {showRomanization && romanized && (
          <Romanization>{romanized}</Romanization>
        )}
      </div>

      <div className="my-3 h-[1px] w-full bg-neutral-200 dark:bg-neutral-700" />

      <div className="text-body text-neutral-800 dark:text-neutral-100 font-english">
        {translation}
      </div>
    </div>
  );
}

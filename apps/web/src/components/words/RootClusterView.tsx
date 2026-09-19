import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import type { ItemRetention } from '@/state/retentionStore';
import { useLanguage } from '@/hooks/useLanguage';
import { WordCard } from './WordCard';

interface RootCluster {
  root: string;
  transliteration?: string;
  meaningEn: string;
  meaningBn: string;
  quranOccurrences: number;
  words: ItemRetention[];
}

interface RootClusterViewProps {
  items: ItemRetention[];
}

// Known trilateral root groupings for Arabic pedagogical foundations
const KNOWN_ROOT_DICTIONARY: Record<string, { root: string; transliteration: string; meaningEn: string; meaningBn: string; quranOccurrences: number }> = {
  'كِتَابٌ': { root: 'ك-ت-ب', transliteration: 'k-t-b', meaningEn: 'Writing & Books', meaningBn: 'লেখা ও গ্রন্থ সম্পর্কিত', quranOccurrences: 319 },
  'مَكْتَبٌ': { root: 'ك-ت-ب', transliteration: 'k-t-b', meaningEn: 'Writing & Books', meaningBn: 'লেখা ও গ্রন্থ সম্পর্কিত', quranOccurrences: 319 },
  'قَلَمٌ': { root: 'ق-ل-م', transliteration: 'q-l-m', meaningEn: 'Pen & Instrument', meaningBn: 'কলম ও লিখন সরঞ্জাম', quranOccurrences: 4 },
  'بَيْتٌ': { root: 'ب-ي-ت', transliteration: 'b-y-t', meaningEn: 'Dwelling & Shelter', meaningBn: 'গৃহ ও আশ্রয়', quranOccurrences: 64 },
  'مَسْجِدٌ': { root: 'س-ج-د', transliteration: 's-j-d', meaningEn: 'Prostration & Worship', meaningBn: 'সিজদা ও উপাসনালয়', quranOccurrences: 92 },
  'بَابٌ': { root: 'ب-و-ب', transliteration: 'b-w-b', meaningEn: 'Portals & Entryways', meaningBn: 'দরজা ও প্রবেশদ্বার', quranOccurrences: 27 },
  'وَلَدٌ': { root: 'و-ل-د', transliteration: 'w-l-d', meaningEn: 'Child & Lineage', meaningBn: 'সন্তান ও বংশধর', quranOccurrences: 102 },
  'رَجُلٌ': { root: 'ر-ج-ل', transliteration: 'r-j-l', meaningEn: 'Man & Stepping', meaningBn: 'পুরুষ ও পদচিহ্ন', quranOccurrences: 73 },
  'طَالِبٌ': { root: 'ط-ل-ب', transliteration: 't-l-b', meaningEn: 'Seeking & Student', meaningBn: 'সন্ধান ও শিক্ষার্থী', quranOccurrences: 8 },
  'مَاءٌ': { root: 'م-و-ه', transliteration: 'm-w-h', meaningEn: 'Water & Sustenance', meaningBn: 'পানি ও জীবনোপকরণ', quranOccurrences: 63 },
  'سَيْفٌ': { root: 'س-ي-ف', transliteration: 's-y-f', meaningEn: 'Sword & Edge', meaningBn: 'তরবারি', quranOccurrences: 0 },
  'حِصْنٌ': { root: 'ح-ص-ن', transliteration: 'h-s-n', meaningEn: 'Fortress & Protection', meaningBn: 'দুর্গ ও নিরাপত্তা', quranOccurrences: 8 },
};

export const RootClusterView: React.FC<RootClusterViewProps> = ({ items }) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  // Group items by root
  const clusters = React.useMemo(() => {
    const clusterMap = new Map<string, RootCluster>();
    const unclustered: ItemRetention[] = [];

    for (const item of items) {
      const entry = KNOWN_ROOT_DICTIONARY[item.arabic];
      if (entry) {
        const key = entry.root;
        if (!clusterMap.has(key)) {
          clusterMap.set(key, {
            root: entry.root,
            transliteration: entry.transliteration,
            meaningEn: entry.meaningEn,
            meaningBn: entry.meaningBn,
            quranOccurrences: entry.quranOccurrences,
            words: [],
          });
        }
        clusterMap.get(key)!.words.push(item);
      } else {
        unclustered.push(item);
      }
    }

    return {
      clustered: Array.from(clusterMap.values()),
      unclustered,
    };
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Clustered Families */}
      {clusters.clustered.map((group) => {
        const title = isBn ? group.meaningBn : group.meaningEn;
        return (
          <div
            key={group.root}
            className="bg-neutral-100/50 dark:bg-neutral-900/40 rounded-4xl p-6 md:p-8"
          >
            {/* Root Family Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-2xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-arabic text-xl font-bold tracking-wider">
                  {group.root}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {group.quranOccurrences > 0 && (
                  <span className="flex items-center gap-1 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    {group.quranOccurrences}x {isBn ? 'কোরআনে' : 'in Quran'}
                  </span>
                )}
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-200/50 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400">
                  {group.words.length} {isBn ? 'শব্দ' : group.words.length === 1 ? 'word' : 'words'}
                </span>
              </div>
            </div>

            {/* Words in this family */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.words.map((w) => (
                <WordCard key={w.itemId} item={w} rootFamily={group.root} quranOccurrences={group.quranOccurrences} />
              ))}
            </div>
          </div>
        );
      })}

      {/* Other Curriculum Vocabulary */}
      {clusters.unclustered.length > 0 && (
        <div className="bg-neutral-100/30 dark:bg-neutral-900/30 rounded-4xl p-6 md:p-8">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-neutral-400" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                {isBn ? 'সাধারণ পাঠ্য শব্দাবলি' : 'General Vocabulary'}
              </h3>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-200/50 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400">
              {clusters.unclustered.length} {isBn ? 'শব্দ' : clusters.unclustered.length === 1 ? 'word' : 'words'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusters.unclustered.map((w) => (
              <WordCard key={w.itemId} item={w} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import { useState, useMemo } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Search,
  BookMarked,
  Sparkles,
  BookOpen,
  ArrowRight,
  LayoutGrid,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { useRetentionStore } from '@/state/retentionStore';
import { useLanguage } from '@/hooks/useLanguage';
import { WordCard } from '@/components/words/WordCard';
import { RootClusterView } from '@/components/words/RootClusterView';

export const Route = createFileRoute('/words/')({
  component: WordsVaultPage,
});

type FilterType = 'all' | 'learning' | 'mastered' | 'due';
type ViewMode = 'grid' | 'roots';

function WordsVaultPage() {
  const { language } = useLanguage();
  const isBn = language === 'bn';
  const itemsMap = useRetentionStore((state) => state.items);
  const items = useMemo(() => Object.values(itemsMap), [itemsMap]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Retention Metrics
  const now = Date.now();
  const dueItems = useMemo(() => items.filter((i) => now >= i.nextReviewDue), [items, now]);
  const masteredItems = useMemo(() => items.filter((i) => i.box >= 4), [items]);
  const learningItems = useMemo(() => items.filter((i) => i.box < 4), [items]);

  // Filter and search
  const filteredItems = useMemo(() => {
    let list = items;

    if (filterType === 'due') list = dueItems;
    else if (filterType === 'mastered') list = masteredItems;
    else if (filterType === 'learning') list = learningItems;

    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase().trim();
    return list.filter((item) => {
      const matchAr = item.arabic.includes(q);
      const matchEn = item.meaningEn?.toLowerCase().includes(q);
      const matchBn = item.meaningBn?.includes(q);
      return isBn ? matchAr || matchBn : matchAr || matchEn;
    });
  }, [items, filterType, dueItems, masteredItems, learningItems, searchQuery, isBn]);

  return (
    <div className="min-h-screen pb-24 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Top Header */}
      <div className="pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-100 dark:border-neutral-900">
          <div>
            <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 font-medium text-xs tracking-wider uppercase mb-1.5">
              <BookMarked className="w-3.5 h-3.5" />
              <span>{isBn ? 'শব্দকোষ' : 'Lexicon'}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              {isBn ? 'শব্দভাণ্ডার ও বিশ্লেষণ' : 'Lexical Vault'}
            </h1>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 max-w-xl">
              {isBn
                ? 'অধীত পাঠ্যক্রম ও কোরআনিক পাঠ থেকে সংগৃহীত শব্দাবলি এবং স্মৃতি সংরক্ষণ স্থিতি।'
                : 'Curriculum vocabulary, trilateral root groupings, and memory retention progress.'}
            </p>

            {/* Understated Minimalist Stat Line */}
            <div className="mt-4 flex items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-neutral-900 dark:text-neutral-100 font-mono text-sm">{items.length}</span>
                <span>{isBn ? 'সংগৃহীত শব্দ' : 'collected'}</span>
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm">{masteredItems.length}</span>
                <span>{isBn ? 'আয়ত্তাধীন' : 'mastered'}</span>
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-neutral-900 dark:text-neutral-100 font-mono text-sm">{dueItems.length}</span>
                <span>{isBn ? 'রিভিউ বাকি' : 'due today'}</span>
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <Link
              to="/review"
              className="h-11 px-5 rounded-2xl bg-accent-primary hover:bg-accent-primary-hover text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {dueItems.length > 0
                  ? isBn ? `রিভিউ (${dueItems.length})` : `Review (${dueItems.length})`
                  : isBn ? 'অনুশীলন' : 'Practice'}
              </span>
            </Link>

            <Link
              to="/mushaf-v2"
              className="h-11 px-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-850 font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 opacity-75" />
              <span>{isBn ? 'কোরআন মুসহাফ' : 'Quran Mushaf'}</span>
            </Link>
          </div>
        </div>

        {/* Toolbar: Search, Filters, Views */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Pill */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isBn ? 'শব্দ খুঁজুন...' : 'Search words...'}
              className="w-full h-10 pl-9 pr-4 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 transition-colors"
            />
          </div>

          {/* Segmented Filter & View Switcher */}
          <div className="flex items-center gap-2 flex-wrap justify-between md:justify-end">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-900/80 p-1 rounded-2xl text-xs">
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
                  filterType === 'all'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {isBn ? 'সব' : 'All'} ({items.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('learning')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
                  filterType === 'learning'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {isBn ? 'শিখছি' : 'Learning'} ({learningItems.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('mastered')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
                  filterType === 'mastered'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {isBn ? 'আয়ত্তাধীন' : 'Mastered'} ({masteredItems.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('due')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
                  filterType === 'due'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {isBn ? 'বাকি' : 'Due'} ({dueItems.length})
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-900/80 p-1 rounded-2xl">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    : 'text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
                title={isBn ? 'গ্রিড ভিউ' : 'Card Grid'}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('roots')}
                className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                  viewMode === 'roots'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    : 'text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
                title={isBn ? 'মূলশব্দ ক্লাস্টার ভিউ' : 'Root Families'}
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-neutral-100/40 dark:bg-neutral-900/40 rounded-3xl p-8 max-w-md mx-auto">
              <GraduationCap className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                {items.length === 0
                  ? isBn ? 'এখনো কোনো শব্দ শেখা হয়নি' : 'No words collected yet'
                  : isBn ? 'কোনো শব্দ পাওয়া যায়নি' : 'No matching words found'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                {items.length === 0
                  ? isBn
                    ? 'শব্দভাণ্ডার সমৃদ্ধ করতে পাঠ্যক্রমের পাঠ সম্পন্ন করুন।'
                    : 'Complete textbook lessons to collect vocabulary.'
                  : isBn
                    ? 'অন্য কোনো শব্দ দিয়ে অনুসন্ধান করুন।'
                    : 'Try another search keyword or filter.'}
              </p>
              {items.length === 0 && (
                <Link
                  to="/volume/$volumeId/chapter/$chapterId/lesson/$darsNum"
                  params={{ volumeId: '1', chapterId: 1, darsNum: 1 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium text-xs hover:opacity-90 transition-opacity"
                >
                  <span>{isBn ? 'পাঠ ১ শুরু করুন' : 'Start Lesson 1'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          ) : viewMode === 'roots' ? (
            <RootClusterView items={filteredItems} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <WordCard key={item.itemId} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WordsVaultPage;

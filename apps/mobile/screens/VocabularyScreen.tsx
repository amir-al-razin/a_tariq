import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRetentionStore, type ItemRetention } from '../state/retentionStore';
import { useLanguage } from '../i18n/LanguageContext';
import { useThemeTokens } from '../theme/colors';
import { playArabicAudio } from '../lib/arabicAudio';
import { playTapSound } from '../lib/sound';

type FilterType = 'all' | 'learning' | 'mastered' | 'due';
type ViewMode = 'list' | 'roots';

interface RootCluster {
  root: string;
  transliteration?: string;
  meaningEn: string;
  meaningBn: string;
  quranOccurrences: number;
  words: ItemRetention[];
}

// Known trilateral root groupings for Arabic pedagogical foundations
const KNOWN_ROOT_DICTIONARY: Record<
  string,
  {
    root: string;
    transliteration: string;
    meaningEn: string;
    meaningBn: string;
    quranOccurrences: number;
  }
> = {
  كِتَابٌ: {
    root: 'ك-ت-ب',
    transliteration: 'k-t-b',
    meaningEn: 'Writing & Books',
    meaningBn: 'লেখা ও গ্রন্থ সম্পর্কিত',
    quranOccurrences: 319,
  },
  مَكْتَبٌ: {
    root: 'ك-ت-ب',
    transliteration: 'k-t-b',
    meaningEn: 'Writing & Books',
    meaningBn: 'লেখা ও গ্রন্থ সম্পর্কিত',
    quranOccurrences: 319,
  },
  قَلَمٌ: {
    root: 'ق-ل-م',
    transliteration: 'q-l-m',
    meaningEn: 'Pen & Instrument',
    meaningBn: 'কলম ও লিখন সরঞ্জাম',
    quranOccurrences: 4,
  },
  بَيْتٌ: {
    root: 'ب-ي-ت',
    transliteration: 'b-y-t',
    meaningEn: 'Dwelling & Shelter',
    meaningBn: 'গৃহ ও আশ্রয়',
    quranOccurrences: 64,
  },
  مَسْجِدٌ: {
    root: 'س-ج-د',
    transliteration: 's-j-d',
    meaningEn: 'Prostration & Worship',
    meaningBn: 'সিজদা ও উপাসনালয়',
    quranOccurrences: 92,
  },
  بَابٌ: {
    root: 'ب-و-ب',
    transliteration: 'b-w-b',
    meaningEn: 'Portals & Entryways',
    meaningBn: 'দরজা ও প্রবেশদ্বার',
    quranOccurrences: 27,
  },
  وَلَدٌ: {
    root: 'و-ل-দ',
    transliteration: 'w-l-d',
    meaningEn: 'Child & Lineage',
    meaningBn: 'সন্তান ও বংশধর',
    quranOccurrences: 102,
  },
  رَجُلٌ: {
    root: 'ر-ج-ل',
    transliteration: 'r-j-l',
    meaningEn: 'Man & Stepping',
    meaningBn: 'পুরুষ ও পদচিহ্ন',
    quranOccurrences: 73,
  },
  طَالِبٌ: {
    root: 'ط-ل-ب',
    transliteration: 't-l-b',
    meaningEn: 'Seeking & Student',
    meaningBn: 'সন্ধান ও শিক্ষার্থী',
    quranOccurrences: 8,
  },
  مَاءٌ: {
    root: 'م-و-ه',
    transliteration: 'm-w-h',
    meaningEn: 'Water & Sustenance',
    meaningBn: 'পানি ও জীবনোপকরণ',
    quranOccurrences: 63,
  },
  سَيْفٌ: {
    root: 'س-ي-ف',
    transliteration: 's-y-f',
    meaningEn: 'Sword & Edge',
    meaningBn: 'তরবারি',
    quranOccurrences: 0,
  },
  حِصْنٌ: {
    root: 'ح-ص-ن',
    transliteration: 'h-s-n',
    meaningEn: 'Fortress & Protection',
    meaningBn: 'দুর্গ ও নিরাপত্তা',
    quranOccurrences: 8,
  },
};

export const VocabularyScreen: React.FC = () => {
  const theme = useThemeTokens();
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const itemsMap = useRetentionStore((state) => state.items);
  const items = useMemo(() => Object.values(itemsMap), [itemsMap]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  // Metrics
  const now = Date.now();
  const dueItems = useMemo(() => items.filter((i) => now >= i.nextReviewDue), [items, now]);
  const masteredItems = useMemo(() => items.filter((i) => i.box >= 4), [items]);
  const learningItems = useMemo(() => items.filter((i) => i.box < 4), [items]);

  // Filtered list
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

  // Root clusters
  const clusters = useMemo(() => {
    const clusterMap = new Map<string, RootCluster>();
    const unclustered: ItemRetention[] = [];

    for (const item of filteredItems) {
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
  }, [filteredItems]);

  const handleAudio = (arabicText: string) => {
    playTapSound();
    playArabicAudio(arabicText);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.canvas }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: Math.max(insets.bottom, 24) + 16,
        }}
        showsVerticalScrollIndicator={false}>
        {/* Top Header */}
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <Ionicons name="book" size={16} color={theme.accentPrimary} />
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 12,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: theme.accentPrimary,
              }}>
              {isBn ? 'শব্দকোষ' : 'Lexicon'}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 28,
              color: theme.textPrimary,
              marginBottom: 4,
            }}>
            {isBn ? 'শব্দভাণ্ডার ও বিশ্লেষণ' : 'Lexical Vault'}
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: theme.textMuted,
            }}>
            {isBn
              ? 'পাঠ্যক্রম থেকে সংগৃহীত শব্দাবলি ও স্মৃতি সংরক্ষণ স্থিতি।'
              : 'Curriculum vocabulary, root groupings, and memory retention progress.'}
          </Text>
        </View>

        {/* Minimalist Stat Line */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.surfaceWell,
            borderRadius: 20,
            paddingVertical: 14,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 20, color: theme.textPrimary }}>
              {items.length}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 11,
                color: theme.textMuted,
                marginTop: 2,
              }}>
              {isBn ? 'সংগৃহীত' : 'Collected'}
            </Text>
          </View>

          <View style={{ width: 1, height: 24, backgroundColor: theme.borderSubtle }} />

          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 20,
                color: theme.status.success,
              }}>
              {masteredItems.length}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 11,
                color: theme.textMuted,
                marginTop: 2,
              }}>
              {isBn ? 'আয়ত্তাধীন' : 'Mastered'}
            </Text>
          </View>

          <View style={{ width: 1, height: 24, backgroundColor: theme.borderSubtle }} />

          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 20,
                color: dueItems.length > 0 ? theme.accentPrimary : theme.textMuted,
              }}>
              {dueItems.length}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 11,
                color: theme.textMuted,
                marginTop: 2,
              }}>
              {isBn ? 'রিভিউ বাকি' : 'Due'}
            </Text>
          </View>
        </View>

        {/* Search Bar */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.surfaceWell,
            borderRadius: 18,
            paddingHorizontal: 14,
            height: 48,
            marginBottom: 16,
          }}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={isBn ? 'শব্দ খুঁজুন...' : 'Search words...'}
            placeholderTextColor={theme.textMuted}
            style={{
              flex: 1,
              marginLeft: 10,
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: theme.textPrimary,
            }}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </TouchableOpacity>
          )}
        </View>

        {/* Filter Pills & View Mode Switcher */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            flexWrap: 'wrap',
            gap: 8,
          }}>
          {/* Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 6 }}>
            {(
              [
                { key: 'all', labelEn: 'All', labelBn: 'সব', count: items.length },
                {
                  key: 'learning',
                  labelEn: 'Learning',
                  labelBn: 'শিখছি',
                  count: learningItems.length,
                },
                {
                  key: 'mastered',
                  labelEn: 'Mastered',
                  labelBn: 'আয়ত্তাধীন',
                  count: masteredItems.length,
                },
                { key: 'due', labelEn: 'Due', labelBn: 'বাকি', count: dueItems.length },
              ] as const
            ).map((filter) => {
              const isSelected = filterType === filter.key;
              return (
                <TouchableOpacity
                  key={filter.key}
                  onPress={() => {
                    playTapSound();
                    setFilterType(filter.key);
                  }}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 14,
                    backgroundColor: isSelected ? theme.accentPrimary : theme.surfaceWell,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 12,
                      color: isSelected ? '#FFFFFF' : theme.textMuted,
                    }}>
                    {isBn ? filter.labelBn : filter.labelEn} ({filter.count})
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* View Mode Toggle */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: theme.surfaceWell,
              borderRadius: 14,
              padding: 2,
            }}>
            <TouchableOpacity
              onPress={() => {
                playTapSound();
                setViewMode('list');
              }}
              style={{
                padding: 6,
                borderRadius: 12,
                backgroundColor: viewMode === 'list' ? theme.surfaceRaised : 'transparent',
              }}>
              <Ionicons
                name="list"
                size={16}
                color={viewMode === 'list' ? theme.textPrimary : theme.textMuted}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                playTapSound();
                setViewMode('roots');
              }}
              style={{
                padding: 6,
                borderRadius: 12,
                backgroundColor: viewMode === 'roots' ? theme.surfaceRaised : 'transparent',
              }}>
              <Ionicons
                name="layers"
                size={16}
                color={viewMode === 'roots' ? theme.textPrimary : theme.textMuted}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <View
            style={{
              padding: 32,
              borderRadius: 24,
              backgroundColor: theme.surfaceWell,
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Ionicons name="search-outline" size={36} color={theme.textMuted} />
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 16,
                color: theme.textPrimary,
                marginTop: 12,
                textAlign: 'center',
              }}>
              {isBn ? 'কোনো শব্দ পাওয়া যায়নি' : 'No words found'}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 13,
                color: theme.textMuted,
                marginTop: 4,
                textAlign: 'center',
              }}>
              {isBn
                ? 'অনুসন্ধান ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।'
                : 'Complete interactive lessons to collect more vocabulary in your vault.'}
            </Text>
          </View>
        )}

        {/* LIST / GRID VIEW */}
        {viewMode === 'list' && (
          <View style={{ gap: 12 }}>
            {filteredItems.map((item) => {
              const isMastered = item.box >= 4;
              const isDue = Date.now() >= item.nextReviewDue;
              const meaning = isBn ? item.meaningBn || item.meaningEn : item.meaningEn;
              const rootMeta = KNOWN_ROOT_DICTIONARY[item.arabic];

              return (
                <View
                  key={item.itemId}
                  style={{
                    borderRadius: 24,
                    backgroundColor: theme.surfaceWell,
                    padding: 18,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  {/* Left: Info */}
                  <View style={{ flex: 1, paddingRight: 16 }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 6,
                        marginBottom: 6,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: 8,
                          paddingVertical: 2,
                          borderRadius: 8,
                          backgroundColor: isMastered
                            ? theme.status.successSubtle
                            : theme.surfaceRaised,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 10,
                            color: isMastered ? theme.status.successText : theme.textMuted,
                          }}>
                          {isMastered
                            ? isBn
                              ? 'আয়ত্তাধীন'
                              : 'Mastered'
                            : `${isBn ? 'বক্স' : 'Box'} ${item.box}`}
                        </Text>
                      </View>

                      {isDue && (
                        <View
                          style={{
                            paddingHorizontal: 8,
                            paddingVertical: 2,
                            borderRadius: 8,
                            backgroundColor: theme.status.warningSubtle,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_600SemiBold',
                              fontSize: 10,
                              color: theme.status.warningText,
                            }}>
                            {isBn ? 'রিভিউ বাকি' : 'Due'}
                          </Text>
                        </View>
                      )}

                      {rootMeta && (
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_500Medium',
                            fontSize: 11,
                            color: theme.accentPrimary,
                          }}>
                          {rootMeta.root}
                        </Text>
                      )}
                    </View>

                    <Text
                      style={{
                        fontFamily: 'Lexend_500Medium',
                        fontSize: 14,
                        color: theme.textPrimary,
                      }}>
                      {meaning}
                    </Text>
                  </View>

                  {/* Right: Arabic & Audio */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text
                      style={{
                        fontFamily: 'NotoSansArabic_600SemiBold',
                        fontSize: 26,
                        lineHeight: 44,
                        color: theme.textPrimary,
                      }}>
                      {item.arabic}
                    </Text>

                    <TouchableOpacity
                      onPress={() => handleAudio(item.arabic)}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        backgroundColor: theme.surfaceRaised,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Ionicons name="volume-high" size={18} color={theme.accentPrimary} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        )}

        {/* ROOT CLUSTER VIEW */}
        {viewMode === 'roots' && (
          <View style={{ gap: 20 }}>
            {clusters.clustered.map((group) => {
              const rootTitle = isBn ? group.meaningBn : group.meaningEn;

              return (
                <View
                  key={group.root}
                  style={{
                    borderRadius: 28,
                    backgroundColor: theme.surfaceWell,
                    padding: 20,
                  }}>
                  {/* Family Header */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16,
                      paddingBottom: 4,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                      <View
                        style={{
                          paddingHorizontal: 12,
                          paddingVertical: 6,
                          borderRadius: 14,
                          backgroundColor: theme.surfaceRaised,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_600SemiBold',
                            fontSize: 16,
                            color: theme.textPrimary,
                          }}>
                          {group.root}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 14,
                            color: theme.textPrimary,
                          }}>
                          {rootTitle}
                        </Text>
                      </View>
                    </View>

                    {group.quranOccurrences > 0 && (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 4,
                          paddingHorizontal: 8,
                          paddingVertical: 3,
                          borderRadius: 8,
                          backgroundColor: theme.surfaceRaised,
                        }}>
                        <Ionicons name="sparkles" size={12} color={theme.accentPrimary} />
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 11,
                            color: theme.textMuted,
                          }}>
                          {group.quranOccurrences}x
                        </Text>
                      </View>
                    )}
                  </View>

                  {/* Words in Family */}
                  <View style={{ gap: 10 }}>
                    {group.words.map((item) => {
                      const meaning = isBn ? item.meaningBn || item.meaningEn : item.meaningEn;

                      return (
                        <View
                          key={item.itemId}
                          style={{
                            borderRadius: 18,
                            backgroundColor: theme.surfaceRaised,
                            padding: 14,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lexend_500Medium',
                              fontSize: 13,
                              color: theme.textPrimary,
                              flex: 1,
                            }}>
                            {meaning}
                          </Text>

                          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 22,
                                lineHeight: 38,
                                color: theme.textPrimary,
                              }}>
                              {item.arabic}
                            </Text>

                            <TouchableOpacity
                              onPress={() => handleAudio(item.arabic)}
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: 16,
                                backgroundColor: theme.surfaceWell,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Ionicons name="volume-high" size={16} color={theme.accentPrimary} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}

            {/* Unclustered Words */}
            {clusters.unclustered.length > 0 && (
              <View
                style={{
                  borderRadius: 28,
                  backgroundColor: theme.surfaceWell,
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 15,
                    color: theme.textPrimary,
                    marginBottom: 14,
                  }}>
                  {isBn ? 'অন্যান্য শব্দাবলি' : 'General Vocabulary'}
                </Text>

                <View style={{ gap: 10 }}>
                  {clusters.unclustered.map((item) => {
                    const meaning = isBn ? item.meaningBn || item.meaningEn : item.meaningEn;
                    return (
                      <View
                        key={item.itemId}
                        style={{
                          borderRadius: 18,
                          backgroundColor: theme.surfaceRaised,
                          padding: 14,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Lexend_500Medium',
                            fontSize: 13,
                            color: theme.textPrimary,
                            flex: 1,
                          }}>
                          {meaning}
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_600SemiBold',
                              fontSize: 22,
                              lineHeight: 38,
                              color: theme.textPrimary,
                            }}>
                            {item.arabic}
                          </Text>

                          <TouchableOpacity
                            onPress={() => handleAudio(item.arabic)}
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 16,
                              backgroundColor: theme.surfaceWell,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Ionicons name="volume-high" size={16} color={theme.accentPrimary} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

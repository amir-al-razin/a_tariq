import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRetentionStore } from '../state/retentionStore';
import { useLanguage } from '../i18n/LanguageContext';
import { useThemeTokens } from '../theme/colors';
import { buildKnownTokensSet, isWordMatch, calculatePageComprehension } from '../lib/mushafMatcher';
import { playTapSound } from '../lib/sound';

interface Chapter {
  id: number;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: [number, number];
  translated_name: {
    language_name: string;
    name: string;
  };
}

interface WordAPI {
  id: number;
  position: number;
  char_type_name: 'word' | 'end';
  text_uthmani: string;
  line_number?: number;
  page_number?: number;
  location?: string;
}

interface VerseAPI {
  id: number;
  verse_number: number;
  verse_key: string;
  chapter_id: number;
  page_number: number;
  text_uthmani: string;
  words: WordAPI[];
}

function toArabicNumerals(n: number): string {
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return n
    .toString()
    .split('')
    .map((d) => digits[parseInt(d, 10)] || d)
    .join('');
}

// In-memory page cache
const pageCache = new Map<number, VerseAPI[]>();
let chaptersCache: Chapter[] | null = null;

export const MushafScreen: React.FC = () => {
  const theme = useThemeTokens();
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const itemsMap = useRetentionStore((state) => state.items);
  const retentionItems = useMemo(() => Object.values(itemsMap), [itemsMap]);

  const knownTokensSet = useMemo(() => {
    return buildKnownTokensSet(retentionItems);
  }, [retentionItems]);

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [verses, setVerses] = useState<VerseAPI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<number>(24);

  // Map chapters by ID
  const chaptersMap = useMemo(() => {
    const map = new Map<number, Chapter>();
    chapters.forEach((ch) => map.set(ch.id, ch));
    return map;
  }, [chapters]);

  // Load chapters list
  useEffect(() => {
    let isMounted = true;
    async function loadChapters() {
      if (chaptersCache) {
        setChapters(chaptersCache);
        return;
      }
      try {
        const res = await fetch('https://api.quran.com/api/v4/chapters');
        if (!res.ok) throw new Error('Failed to load chapters');
        const data = await res.json();
        if (isMounted && data.chapters) {
          chaptersCache = data.chapters;
          setChapters(data.chapters);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message || 'Error loading Quran chapters');
      }
    }
    loadChapters();
    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch Page verses
  const fetchPage = useCallback(async (targetPage: number) => {
    setLoading(true);
    setError(null);

    if (pageCache.has(targetPage)) {
      setVerses(pageCache.get(targetPage)!);
      setLoading(false);
      return;
    }

    try {
      const url = `https://api.quran.com/api/v4/verses/by_page/${targetPage}?words=true&per_page=50&fields=text_uthmani,chapter_id,verse_key&word_fields=text_uthmani,line_number,location`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load page ${targetPage}`);
      const data = await res.json();

      if (data.verses) {
        pageCache.set(targetPage, data.verses);
        setVerses(data.verses);
      }
    } catch (err: any) {
      setError(err.message || `Error loading Mushaf page ${targetPage}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(pageNumber);
  }, [pageNumber, fetchPage]);

  // Calculate page words and comprehension
  const allPageWords = useMemo(() => {
    const list: WordAPI[] = [];
    verses.forEach((v) => {
      v.words?.forEach((w) => list.push(w));
    });
    return list;
  }, [verses]);

  const comprehension = useMemo(() => {
    return calculatePageComprehension(allPageWords, knownTokensSet);
  }, [allPageWords, knownTokensSet]);

  const currentChapterId = verses[0]?.chapter_id;
  const currentChapter = currentChapterId ? chaptersMap.get(currentChapterId) : undefined;

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      playTapSound();
      setPageNumber((p) => p - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < 604) {
      playTapSound();
      setPageNumber((p) => p + 1);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.canvas }}>
      {/* Top Header & Page Navigation Controls */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 12,
          paddingBottom: 10,
        }}>
        {/* Left: Surah Title */}
        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 15,
              color: theme.textPrimary,
            }}>
            {currentChapter?.name_simple || 'Quran Mushaf'}
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_500Medium',
              fontSize: 12,
              color: theme.accentPrimary,
            }}>
            {currentChapter?.name_arabic || ''}
          </Text>
        </View>

        {/* Center: Page Controls */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <TouchableOpacity
            onPress={handlePrevPage}
            disabled={pageNumber <= 1}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: theme.surfaceWell,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: pageNumber <= 1 ? 0.4 : 1,
            }}>
            <Ionicons name="chevron-back" size={18} color={theme.textPrimary} />
          </TouchableOpacity>

          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 14,
              backgroundColor: theme.surfaceWell,
            }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 12,
                color: theme.textPrimary,
              }}>
              p. {pageNumber}
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleNextPage}
            disabled={pageNumber >= 604}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: theme.surfaceWell,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: pageNumber >= 604 ? 0.4 : 1,
            }}>
            <Ionicons name="chevron-forward" size={18} color={theme.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Right: Font Zoom */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: 8 }}>
          <TouchableOpacity
            onPress={() => setFontSize((s) => Math.max(18, s - 2))}
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: theme.surfaceWell,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: theme.textMuted }}>
              A-
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFontSize((s) => Math.min(36, s + 2))}
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: theme.surfaceWell,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: theme.textPrimary }}>
              A+
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Real-time Illumination / Comprehension Bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 8,
          backgroundColor: theme.surfaceWell,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Ionicons name="sparkles" size={14} color={theme.accentPrimary} />
          <Text
            style={{
              fontFamily: 'Lexend_500Medium',
              fontSize: 12,
              color: theme.textPrimary,
            }}>
            {isBn ? 'শব্দ আত্মস্থকরণ' : 'Lexical Comprehension'}:
          </Text>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 12,
              color: theme.accentPrimary,
            }}>
            {comprehension.percentage}%
          </Text>
        </View>

        <Text
          style={{
            fontFamily: 'Lexend_400Regular',
            fontSize: 11,
            color: theme.textMuted,
          }}>
          {comprehension.matchedWords} / {comprehension.totalWords} {isBn ? 'শব্দ' : 'words'}
        </Text>
      </View>

      {/* Main Scripture Canvas */}
      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={theme.accentPrimary} />
          <Text
            style={{
              fontFamily: 'Lexend_500Medium',
              fontSize: 13,
              color: theme.textMuted,
              marginTop: 12,
            }}>
            {isBn ? 'মুসহাফ পৃষ্ঠা লোড হচ্ছে...' : 'Loading Mushaf page...'}
          </Text>
        </View>
      ) : error ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <Ionicons name="alert-circle-outline" size={40} color={theme.status.danger} />
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 15,
              color: theme.textPrimary,
              marginTop: 12,
              textAlign: 'center',
            }}>
            {error}
          </Text>
          <TouchableOpacity
            onPress={() => fetchPage(pageNumber)}
            style={{
              marginTop: 16,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor: theme.accentPrimary,
            }}>
            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: '#FFFFFF' }}>
              {isBn ? 'পুনরায় চেষ্টা করুন' : 'Retry'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            paddingBottom: Math.max(insets.bottom, 24) + 20,
          }}
          showsVerticalScrollIndicator={false}>
          {/* Group verses and render surah headers where verse_number === 1 */}
          <View style={{ width: '100%', maxWidth: 520, alignSelf: 'center' }}>
            {verses.map((verse) => {
              const isFirstVerseOfSurah = verse.verse_number === 1;
              const chapterMeta = chaptersMap.get(verse.chapter_id);

              return (
                <View key={verse.verse_key} style={{ marginBottom: 16 }}>
                  {/* Surah Banner if start of Surah */}
                  {isFirstVerseOfSurah && chapterMeta && (
                    <View
                      style={{
                        marginVertical: 16,
                        paddingVertical: 14,
                        paddingHorizontal: 18,
                        borderRadius: 24,
                        backgroundColor: theme.surfaceWell,
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'NotoSansArabic_600SemiBold',
                          fontSize: 26,
                          lineHeight: 46,
                          color: theme.textPrimary,
                        }}>
                        سُورَةُ {chapterMeta.name_arabic}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lexend_500Medium',
                          fontSize: 12,
                          color: theme.textMuted,
                          marginTop: 2,
                        }}>
                        Surah {chapterMeta.name_simple} · {chapterMeta.verses_count} Verses
                      </Text>

                      {/* Bismillah (except for Surah 9 and Surah 1 where it is Ayah 1) */}
                      {chapterMeta.id !== 9 && chapterMeta.id !== 1 && (
                        <Text
                          style={{
                            fontFamily: 'NotoSansArabic_500Medium',
                            fontSize: 20,
                            lineHeight: 38,
                            color: theme.textPrimary,
                            marginTop: 10,
                          }}>
                          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                        </Text>
                      )}
                    </View>
                  )}

                  {/* Words Row (RTL Flow) */}
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      rowGap: 10,
                      columnGap: 6,
                    }}>
                    {verse.words?.map((word) => {
                      if (word.char_type_name === 'end') {
                        // Verse number badge
                        return (
                          <View
                            key={`end-${word.id}`}
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: 14,
                              backgroundColor: theme.surfaceRaised,
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginHorizontal: 4,
                            }}>
                            <Text
                              style={{
                                fontFamily: 'NotoSansArabic_600SemiBold',
                                fontSize: 13,
                                color: theme.accentPrimary,
                              }}>
                              {toArabicNumerals(verse.verse_number)}
                            </Text>
                          </View>
                        );
                      }

                      const isLearned = isWordMatch(word.text_uthmani, knownTokensSet);

                      return (
                        <View
                          key={`w-${word.id}`}
                          style={{
                            paddingHorizontal: 4,
                            paddingVertical: 2,
                            borderRadius: 8,
                            backgroundColor: isLearned ? theme.accentPrimarySubtle : 'transparent',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'NotoSansArabic_500Medium',
                              fontSize,
                              lineHeight: Math.round(fontSize * 1.95),
                              color: isLearned ? theme.accentPrimaryText : theme.textPrimary,
                              textAlign: 'right',
                            }}>
                            {word.text_uthmani}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRetentionStore, type ItemRetention } from '../state/retentionStore';
import { useLanguage } from '../i18n/LanguageContext';
import { useThemeTokens } from '../theme/colors';
import { playSuccessChime, playErrorCue, playTapSound } from '../lib/sound';
import { playArabicAudio } from '../lib/arabicAudio';

type ReviewCardMode = 'flashcard' | 'mcq';

function toArabicNumerals(n: number): string {
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return n
    .toString()
    .split('')
    .map((d) => digits[parseInt(d, 10)] || d)
    .join('');
}

export const ReviewScreen: React.FC = () => {
  const theme = useThemeTokens();
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const itemsMap = useRetentionStore((state) => state.items);
  const getDueItems = useRetentionStore((state) => state.getDueItems);
  const getPracticeItems = useRetentionStore((state) => state.getPracticeItems);
  const getLearnedWords = useRetentionStore((state) => state.getLearnedWords);
  const recordReviewResult = useRetentionStore((state) => state.recordReviewResult);

  const allItems = useMemo(() => Object.values(itemsMap), [itemsMap]);
  const now = Date.now();
  const dueItems = useMemo(() => allItems.filter((i) => now >= i.nextReviewDue), [allItems, now]);
  const masteredItems = useMemo(() => allItems.filter((i) => i.box >= 4), [allItems]);

  // Session State
  const [isSessionActive, setIsSessionActive] = useState<boolean>(false);
  const [sessionQueue, setSessionQueue] = useState<ItemRetention[]>([]);
  const [errorQueue, setErrorQueue] = useState<ItemRetention[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isReviewingErrors, setIsReviewingErrors] = useState<boolean>(false);
  const [isSessionComplete, setIsSessionComplete] = useState<boolean>(false);
  const [cardMode, setCardMode] = useState<ReviewCardMode>('flashcard');

  // Interaction State
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [mcqStatus, setMcqStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  // Stats
  const [stats, setStats] = useState({
    totalInitial: 0,
    reviewedCount: 0,
    firstTryCorrect: 0,
    recycledResolved: 0,
    promotedCount: 0,
  });

  const activeList = isReviewingErrors ? errorQueue : sessionQueue;
  const currentItem = activeList[currentIndex] as ItemRetention | undefined;

  const startSession = useCallback(
    (forcePractice = false) => {
      const due = getDueItems(undefined, 15);
      const allLearned = getLearnedWords();

      let targetList: ItemRetention[] = [];
      if (due.length > 0 && !forcePractice) {
        targetList = due;
      } else if (allLearned.length > 0) {
        targetList = getPracticeItems(undefined, 15);
      }

      if (targetList.length === 0) return;

      setSessionQueue(targetList);
      setErrorQueue([]);
      setCurrentIndex(0);
      setIsReviewingErrors(false);
      setIsSessionComplete(false);
      setIsFlipped(false);
      setSelectedOption(null);
      setMcqStatus('idle');
      setStats({
        totalInitial: targetList.length,
        reviewedCount: 0,
        firstTryCorrect: 0,
        recycledResolved: 0,
        promotedCount: 0,
      });
      setIsSessionActive(true);
    },
    [getDueItems, getLearnedWords, getPracticeItems]
  );

  // Play audio when card changes
  useEffect(() => {
    if (isSessionActive && currentItem?.arabic) {
      playArabicAudio(currentItem.arabic);
      setIsFlipped(false);
      setSelectedOption(null);
      setMcqStatus('idle');
    }
  }, [currentItem?.itemId, currentItem?.arabic, isSessionActive]);

  // Multiple Choice Options for MCQ drill mode
  const mcqOptions = useMemo(() => {
    if (!currentItem) return [];
    const correctAnswer = isBn
      ? currentItem.meaningBn || currentItem.meaningEn
      : currentItem.meaningEn;
    const allLearned = getLearnedWords();

    const distractors = allLearned
      .filter((w) => w.itemId !== currentItem.itemId)
      .map((w) => (isBn ? w.meaningBn || w.meaningEn : w.meaningEn))
      .filter((text) => Boolean(text) && text !== correctAnswer);

    const fallbackPool = isBn
      ? [
          'একটি সুন্দর বই',
          'নতুন কলম',
          'বড় ঘর',
          'ছোট মসজিদ',
          'ঠান্ডা পানি',
          'গরম দুধ',
          'উপকারী জ্ঞান',
        ]
      : [
          'A beautiful book',
          'A new pen',
          'A big room',
          'A small masjid',
          'Cold water',
          'Hot milk',
          'Beneficial knowledge',
        ];

    const pool = [...new Set([...distractors, ...fallbackPool])].filter((t) => t !== correctAnswer);
    const shuffledDistractors = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [correctAnswer, ...shuffledDistractors].sort(() => 0.5 - Math.random());
  }, [currentItem, getLearnedWords, isBn]);

  const advanceQueue = () => {
    if (currentIndex + 1 < activeList.length) {
      setCurrentIndex((prev) => prev + 1);
    } else if (!isReviewingErrors && errorQueue.length > 0) {
      setIsReviewingErrors(true);
      setCurrentIndex(0);
    } else {
      setIsSessionComplete(true);
    }
  };

  const handleSuccess = () => {
    if (!currentItem) return;
    playSuccessChime();
    recordReviewResult(currentItem.itemId, true);

    setStats((prev) => ({
      ...prev,
      reviewedCount: prev.reviewedCount + 1,
      firstTryCorrect: isReviewingErrors ? prev.firstTryCorrect : prev.firstTryCorrect + 1,
      recycledResolved: isReviewingErrors ? prev.recycledResolved + 1 : prev.recycledResolved,
      promotedCount: currentItem.box < 4 ? prev.promotedCount + 1 : prev.promotedCount,
    }));

    advanceQueue();
  };

  const handleFailure = () => {
    if (!currentItem) return;
    playErrorCue();
    recordReviewResult(currentItem.itemId, false);

    setStats((prev) => ({
      ...prev,
      reviewedCount: prev.reviewedCount + 1,
    }));

    if (!isReviewingErrors) {
      setErrorQueue((prev) => {
        if (prev.some((item) => item.itemId === currentItem.itemId)) return prev;
        return [...prev, currentItem];
      });
    }

    advanceQueue();
  };

  const handleOptionSelect = (option: string) => {
    if (!currentItem || mcqStatus !== 'idle') return;
    setSelectedOption(option);
    playTapSound();

    const correctAnswer = isBn
      ? currentItem.meaningBn || currentItem.meaningEn
      : currentItem.meaningEn;
    if (option === correctAnswer) {
      setMcqStatus('correct');
      setTimeout(() => {
        handleSuccess();
      }, 600);
    } else {
      setMcqStatus('incorrect');
      setTimeout(() => {
        handleFailure();
      }, 800);
    }
  };

  // -------------------------------------------------------------
  // VIEW: SESSION COMPLETION SUMMARY
  // -------------------------------------------------------------
  if (isSessionActive && isSessionComplete) {
    const accuracy =
      stats.reviewedCount > 0
        ? Math.round((stats.firstTryCorrect / stats.totalInitial) * 100)
        : 100;

    return (
      <View style={{ flex: 1, backgroundColor: theme.canvas }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingBottom: Math.max(insets.bottom, 24),
          }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '100%',
              maxWidth: 420,
              borderRadius: 32,
              backgroundColor: theme.surfaceWell,
              padding: 28,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: theme.accentPrimarySubtle,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Ionicons name="trophy" size={38} color={theme.accentPrimary} />
            </View>

            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 22,
                color: theme.textPrimary,
                textAlign: 'center',
                marginBottom: 6,
              }}>
              {isBn ? 'রিভিউ সম্পন্ন!' : 'Review Complete!'}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 14,
                color: theme.textMuted,
                textAlign: 'center',
                marginBottom: 24,
              }}>
              {isBn
                ? 'আপনার স্মৃতিভাণ্ডার সফলভাবে হালনাগাদ করা হয়েছে।'
                : 'Your memory retention intervals have been successfully updated.'}
            </Text>

            {/* Stats Row */}
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: theme.surfaceRaised,
                borderRadius: 20,
                paddingVertical: 16,
                paddingHorizontal: 12,
                marginBottom: 28,
              }}>
              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 20,
                    color: theme.textPrimary,
                  }}>
                  {stats.totalInitial}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 12,
                    color: theme.textMuted,
                    marginTop: 2,
                  }}>
                  {isBn ? 'শব্দ' : 'Words'}
                </Text>
              </View>

              <View style={{ width: 1, backgroundColor: theme.borderSubtle }} />

              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 20,
                    color: theme.accentPrimary,
                  }}>
                  {accuracy}%
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 12,
                    color: theme.textMuted,
                    marginTop: 2,
                  }}>
                  {isBn ? 'নির্ভুলতা' : 'Accuracy'}
                </Text>
              </View>

              <View style={{ width: 1, backgroundColor: theme.borderSubtle }} />

              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 20,
                    color: theme.status.success,
                  }}>
                  +{stats.promotedCount}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 12,
                    color: theme.textMuted,
                    marginTop: 2,
                  }}>
                  {isBn ? 'উত্তীর্ণ' : 'Promoted'}
                </Text>
              </View>
            </View>

            {/* 56px Primary Action Button */}
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={() => setIsSessionActive(false)}
              style={{
                width: '100%',
                height: 56,
                borderRadius: 28,
                backgroundColor: theme.accentPrimary,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12,
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 16,
                  color: '#FFFFFF',
                }}>
                {isBn ? 'সম্পন্ন করুন' : 'Done'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.88}
              onPress={() => startSession(true)}
              style={{
                width: '100%',
                height: 50,
                borderRadius: 25,
                backgroundColor: theme.surfaceRaised,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend_500Medium',
                  fontSize: 15,
                  color: theme.textPrimary,
                }}>
                {isBn ? 'আরও অনুশীলন করুন' : 'Practice More Words'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  // -------------------------------------------------------------
  // VIEW: ACTIVE REVIEW DRILL RUNNER
  // -------------------------------------------------------------
  if (isSessionActive && currentItem) {
    const meaning = isBn ? currentItem.meaningBn || currentItem.meaningEn : currentItem.meaningEn;
    const progressFraction = (currentIndex + 1) / activeList.length;

    return (
      <View style={{ flex: 1, backgroundColor: theme.canvas }}>
        {/* Top Header & Progress */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingTop: 12,
            paddingBottom: 8,
          }}>
          <TouchableOpacity
            onPress={() => setIsSessionActive(false)}
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              backgroundColor: theme.surfaceWell,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="close" size={20} color={theme.textPrimary} />
          </TouchableOpacity>

          {/* Mode Switcher */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: theme.surfaceWell,
              borderRadius: 16,
              padding: 3,
            }}>
            <TouchableOpacity
              onPress={() => {
                playTapSound();
                setCardMode('flashcard');
              }}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 13,
                backgroundColor: cardMode === 'flashcard' ? theme.surfaceRaised : 'transparent',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 12,
                  color: cardMode === 'flashcard' ? theme.textPrimary : theme.textMuted,
                }}>
                {isBn ? 'ফ্ল্যাশ কার্ড' : 'Flashcard'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                playTapSound();
                setCardMode('mcq');
              }}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 13,
                backgroundColor: cardMode === 'mcq' ? theme.surfaceRaised : 'transparent',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 12,
                  color: cardMode === 'mcq' ? theme.textPrimary : theme.textMuted,
                }}>
                {isBn ? 'বহুনির্বাচনী' : 'Multiple Choice'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: 38, alignItems: 'flex-end' }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 12,
                color: theme.textMuted,
              }}>
              {toArabicNumerals(currentIndex + 1)}/{toArabicNumerals(activeList.length)}
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
          <View
            style={{
              width: '100%',
              height: 6,
              borderRadius: 3,
              backgroundColor: theme.surfaceWell,
              overflow: 'hidden',
            }}>
            <View
              style={{
                width: `${Math.round(progressFraction * 100)}%`,
                height: '100%',
                backgroundColor: isReviewingErrors ? theme.status.warning : theme.accentPrimary,
              }}
            />
          </View>
        </View>

        {/* Card Stage */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 16,
            paddingBottom: Math.max(insets.bottom, 20) + 16,
          }}
          showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%', maxWidth: 420, alignItems: 'center' }}>
            {isReviewingErrors && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 12,
                  backgroundColor: theme.status.warningSubtle,
                  marginBottom: 16,
                }}>
                <Ionicons name="repeat" size={14} color={theme.status.warning} />
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    fontSize: 12,
                    color: theme.status.warningText,
                  }}>
                  {isBn ? 'ভুল সংশোধনী পর্যায়' : 'Recycled Error Review'}
                </Text>
              </View>
            )}

            {/* FLASHCARD MODE */}
            {cardMode === 'flashcard' && (
              <Pressable
                onPress={() => {
                  playTapSound();
                  setIsFlipped((prev) => !prev);
                }}
                style={{
                  width: '100%',
                  borderRadius: 32,
                  backgroundColor: theme.surfaceWell,
                  padding: 32,
                  alignItems: 'center',
                  minHeight: 280,
                  justifyContent: 'space-between',
                  marginBottom: 24,
                }}>
                {/* Top Badge & Audio */}
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                      borderRadius: 10,
                      backgroundColor: theme.surfaceRaised,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 11,
                        color: theme.textMuted,
                      }}>
                      {currentItem.box >= 4
                        ? isBn
                          ? 'আয়ত্তাধীন'
                          : 'Mastered'
                        : `${isBn ? 'বক্স' : 'Box'} ${currentItem.box}`}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={(e) => {
                      e.stopPropagation?.();
                      playTapSound();
                      playArabicAudio(currentItem.arabic);
                    }}
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

                {/* Central Word */}
                <View style={{ alignItems: 'center', marginVertical: 24 }}>
                  <Text
                    style={{
                      fontFamily: 'NotoSansArabic_600SemiBold',
                      fontSize: 44,
                      lineHeight: 76,
                      color: theme.textPrimary,
                      textAlign: 'center',
                    }}>
                    {currentItem.arabic}
                  </Text>

                  {isFlipped ? (
                    <Text
                      style={{
                        fontFamily: 'Lexend_600SemiBold',
                        fontSize: 18,
                        color: theme.accentPrimaryText,
                        textAlign: 'center',
                        marginTop: 12,
                      }}>
                      {meaning}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontFamily: 'Lexend_400Regular',
                        fontSize: 13,
                        color: theme.textMuted,
                        textAlign: 'center',
                        marginTop: 12,
                      }}>
                      {isBn ? 'অর্থ দেখতে ট্যাপ করুন' : 'Tap to flip & reveal meaning'}
                    </Text>
                  )}
                </View>

                <View style={{ height: 20 }} />
              </Pressable>
            )}

            {/* FLASHCARD ACTION BUTTONS */}
            {cardMode === 'flashcard' && (
              <View style={{ width: '100%', flexDirection: 'row', gap: 12 }}>
                <TouchableOpacity
                  activeOpacity={0.88}
                  onPress={handleFailure}
                  style={{
                    flex: 1,
                    height: 56,
                    borderRadius: 28,
                    backgroundColor: theme.surfaceWell,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 8,
                  }}>
                  <Ionicons name="refresh" size={18} color={theme.textMuted} />
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 15,
                      color: theme.textMuted,
                    }}>
                    {isBn ? 'আবার দেখুন' : 'Needs Review'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.88}
                  onPress={handleSuccess}
                  style={{
                    flex: 1,
                    height: 56,
                    borderRadius: 28,
                    backgroundColor: theme.accentPrimary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 8,
                  }}>
                  <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 15,
                      color: '#FFFFFF',
                    }}>
                    {isBn ? 'মুখস্থ আছে' : 'Got It'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* MCQ DRILL MODE */}
            {cardMode === 'mcq' && (
              <View style={{ width: '100%', alignItems: 'center' }}>
                <View
                  style={{
                    width: '100%',
                    borderRadius: 28,
                    backgroundColor: theme.surfaceWell,
                    padding: 24,
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      playTapSound();
                      playArabicAudio(currentItem.arabic);
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: theme.surfaceRaised,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'flex-end',
                    }}>
                    <Ionicons name="volume-high" size={20} color={theme.accentPrimary} />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontFamily: 'NotoSansArabic_600SemiBold',
                      fontSize: 42,
                      lineHeight: 74,
                      color: theme.textPrimary,
                      textAlign: 'center',
                      marginVertical: 12,
                    }}>
                    {currentItem.arabic}
                  </Text>

                  <Text
                    style={{
                      fontFamily: 'Lexend_400Regular',
                      fontSize: 13,
                      color: theme.textMuted,
                    }}>
                    {isBn ? 'সঠিক অর্থ নির্বাচন করুন' : 'Select the correct meaning'}
                  </Text>
                </View>

                {/* 4 MCQ Option Chips */}
                <View style={{ width: '100%', gap: 10 }}>
                  {mcqOptions.map((opt, idx) => {
                    const isSelected = selectedOption === opt;
                    const correctAnswer = isBn
                      ? currentItem.meaningBn || currentItem.meaningEn
                      : currentItem.meaningEn;
                    const isCorrect = opt === correctAnswer;

                    let bgColor = theme.surfaceWell;
                    let textColor = theme.textPrimary;

                    if (selectedOption !== null) {
                      if (isSelected && isCorrect) {
                        bgColor = theme.status.success;
                        textColor = '#FFFFFF';
                      } else if (isSelected && !isCorrect) {
                        bgColor = theme.status.danger;
                        textColor = '#FFFFFF';
                      } else if (isCorrect) {
                        bgColor = theme.status.success;
                        textColor = '#FFFFFF';
                      }
                    }

                    return (
                      <TouchableOpacity
                        key={`mcq-${idx}`}
                        activeOpacity={0.88}
                        disabled={selectedOption !== null}
                        onPress={() => handleOptionSelect(opt)}
                        style={{
                          width: '100%',
                          minHeight: 56,
                          borderRadius: 20,
                          backgroundColor: bgColor,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 20,
                          paddingVertical: 14,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Lexend_600SemiBold',
                            fontSize: 15,
                            color: textColor,
                            textAlign: 'center',
                          }}>
                          {opt}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }

  // -------------------------------------------------------------
  // VIEW: DEFAULT DASHBOARD (Zero-inbox or Start Review CTA)
  // -------------------------------------------------------------
  return (
    <View style={{ flex: 1, backgroundColor: theme.canvas }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 24,
          paddingBottom: Math.max(insets.bottom, 24) + 16,
        }}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <Ionicons name="flash" size={16} color={theme.accentPrimary} />
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 12,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: theme.accentPrimary,
              }}>
              {isBn ? 'দৈনিক পর্যালোচনা' : 'Daily Review'}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 28,
              color: theme.textPrimary,
              marginBottom: 4,
            }}>
            {isBn ? 'স্মৃতি সংরক্ষণ ও অনুশীলন' : 'Spaced Retention Drill'}
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: theme.textMuted,
            }}>
            {isBn
              ? 'লাইতনার ব্যবধানে অধীত পাঠ্যক্রমের শব্দাবলি ঝালাই করে নিন।'
              : 'Review curriculum vocabulary using active recall and Leitner intervals.'}
          </Text>
        </View>

        {/* Minimalist Stat Line */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.surfaceWell,
            borderRadius: 20,
            paddingVertical: 16,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            marginBottom: 24,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 22,
                color: theme.textPrimary,
              }}>
              {allItems.length}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 12,
                color: theme.textMuted,
                marginTop: 2,
              }}>
              {isBn ? 'সংগৃহীত' : 'Collected'}
            </Text>
          </View>

          <View style={{ width: 1, height: 28, backgroundColor: theme.borderSubtle }} />

          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 22,
                color: theme.status.success,
              }}>
              {masteredItems.length}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 12,
                color: theme.textMuted,
                marginTop: 2,
              }}>
              {isBn ? 'আয়ত্তাধীন' : 'Mastered'}
            </Text>
          </View>

          <View style={{ width: 1, height: 28, backgroundColor: theme.borderSubtle }} />

          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 22,
                color: dueItems.length > 0 ? theme.accentPrimary : theme.textMuted,
              }}>
              {dueItems.length}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 12,
                color: theme.textMuted,
                marginTop: 2,
              }}>
              {isBn ? 'রিভিউ বাকি' : 'Due Today'}
            </Text>
          </View>
        </View>

        {/* Hero Card */}
        <View
          style={{
            borderRadius: 32,
            backgroundColor: theme.surfaceWell,
            padding: 28,
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <View
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              backgroundColor:
                dueItems.length > 0 ? theme.accentPrimarySubtle : theme.surfaceRaised,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}>
            <Ionicons
              name={dueItems.length > 0 ? 'sparkles' : 'checkmark-done'}
              size={32}
              color={dueItems.length > 0 ? theme.accentPrimary : theme.status.success}
            />
          </View>

          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 20,
              color: theme.textPrimary,
              textAlign: 'center',
              marginBottom: 8,
            }}>
            {dueItems.length > 0
              ? isBn
                ? `${dueItems.length} টি শব্দ পর্যালোচনার জন্য প্রস্তুত`
                : `${dueItems.length} Words Ready for Review`
              : isBn
                ? 'সব পর্যালোচনা সম্পন্ন!'
                : 'All Caught Up!'}
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: theme.textMuted,
              textAlign: 'center',
              marginBottom: 24,
              maxWidth: 320,
            }}>
            {dueItems.length > 0
              ? isBn
                ? 'দীর্ঘস্থায়ী স্মৃতির জন্য আজই শব্দগুলো রিভিশন দিয়ে নিন।'
                : 'Strengthen long-term retention by completing today’s review queue.'
              : isBn
                ? 'আজকের সকল নির্ধারিত শব্দ সফলভাবে পর্যালোচনা করা হয়েছে।'
                : 'You have reviewed all scheduled vocabulary items. Feel free to practice anytime.'}
          </Text>

          {/* 56px Action Button */}
          {dueItems.length > 0 ? (
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={() => startSession(false)}
              style={{
                width: '100%',
                height: 56,
                borderRadius: 28,
                backgroundColor: theme.accentPrimary,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Ionicons name="play" size={18} color="#FFFFFF" />
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 16,
                  color: '#FFFFFF',
                }}>
                {isBn
                  ? `রিভিউ শুরু করুন (${dueItems.length})`
                  : `Start Review (${dueItems.length})`}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={() => startSession(true)}
              style={{
                width: '100%',
                height: 56,
                borderRadius: 28,
                backgroundColor: theme.surfaceRaised,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Ionicons name="repeat" size={18} color={theme.textPrimary} />
              <Text
                style={{
                  fontFamily: 'Lexend_600SemiBold',
                  fontSize: 16,
                  color: theme.textPrimary,
                }}>
                {isBn ? 'সাধারণ অনুশীলন করুন' : 'Practice Any Words'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

import React, { useState, useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { IdafahPair } from '@tariq/shared';

type Props = {
  isDark: boolean;
  C: any;
  payload?: any;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
};

export const IdafahDrillView: React.FC<Props> = ({
  isDark,
  C,
  payload,
  onProgress,
  onComplete,
}) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();
  const pairs: IdafahPair[] = payload?.idafahPairs ?? payload?.pairs ?? [];
  const [revealed, setRevealed] = useState<boolean[]>(() => Array(pairs.length).fill(false));

  const toggle = useCallback(
    (i: number) => {
      setRevealed((prev) => {
        const next = [...prev];
        next[i] = !next[i];
        const doneCount = next.filter(Boolean).length;
        onProgress?.(doneCount / pairs.length);
        if (doneCount === pairs.length) onComplete?.();
        return next;
      });
    },
    [pairs.length, onProgress, onComplete]
  );

  const revealAll = useCallback(() => {
    setRevealed(Array(pairs.length).fill(true));
    onProgress?.(1);
    onComplete?.();
  }, [pairs.length, onProgress, onComplete]);

  if (pairs.length === 0) {
    const fallbackText = payload?.instruction;
    if (fallbackText) {
      return (
        <View
          style={{
            width: '100%',
            borderRadius: 24,
            backgroundColor: isDark ? C.neutral900 : C.neutral100,
            padding: 24,
          }}>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 20,
              color: isDark ? C.neutral100 : C.neutral900,
              textAlign: 'right',
              writingDirection: 'rtl',
              lineHeight: 34,
            }}>
            {fallbackText}
          </Text>
        </View>
      );
    }
    return null;
  }

  return (
    <View style={{ width: '100%', gap: 16 }}>
      {/* Optional Instruction */}
      {payload?.instruction && (
        <View
          style={{
            borderRadius: 24,
            backgroundColor: isDark ? C.neutral900 : C.neutral100,
            padding: 16,
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 13,
              color: isDark ? C.neutral300 : C.neutral700,
              textAlign: 'center',
            }}>
            {t_content(payload.instruction, payload.instructionBn)}
          </Text>
        </View>
      )}

      {/* Header labels */}
      <View style={{ flexDirection: 'row', gap: 12, paddingHorizontal: 4 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 11,
              color: isDark ? C.neutral500 : C.neutral400,
              textTransform: 'uppercase',
              letterSpacing: 0.8,
            }}>
            {t('idafah.basePhrase') ?? 'Base Phrase'}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 11,
              color: isDark ? C.neutral500 : C.neutral400,
              textTransform: 'uppercase',
              letterSpacing: 0.8,
            }}>
            {t('idafah.possessionPhrase') ?? 'Possession Phrase'}
          </Text>
        </View>
      </View>

      {/* Idafah Pairs */}
      <View style={{ gap: 14 }}>
        {pairs.map((pair, i) => (
          <Pressable
            key={i}
            onPress={() => toggle(i)}
            style={({ pressed }) => ({
              borderRadius: 24,
              backgroundColor: isDark ? C.neutral900 : C.neutral100,
              padding: 14,
              opacity: pressed ? 0.95 : 1,
            })}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              {/* Base Phrase Card */}
              <View
                style={{
                  flex: 1,
                  borderRadius: 20,
                  backgroundColor: isDark ? '#141414' : '#FFFFFF',
                  paddingVertical: 18,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                <Text
                  style={{
                    fontFamily: 'NotoSansArabic_600SemiBold',
                    fontSize: 20,
                    color: isDark ? C.neutral100 : C.neutral900,
                    textAlign: 'center',
                    writingDirection: 'rtl',
                  }}>
                  {pair.baseAr}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lexend_400Regular',
                    fontSize: 12,
                    color: isDark ? C.neutral400 : C.neutral500,
                    textAlign: 'center',
                  }}>
                  {t_content(pair.baseEn, pair.baseBn)}
                </Text>
              </View>

              {/* Possession Phrase Card (Tap to reveal with inverted contrast) */}
              <View
                style={{
                  flex: 1,
                  borderRadius: 20,
                  backgroundColor: revealed[i]
                    ? isDark
                      ? '#FFFFFF'
                      : '#0A0A0A'
                    : isDark
                      ? C.neutral800
                      : C.neutral200,
                  paddingVertical: 18,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                {revealed[i] ? (
                  <>
                    <Text
                      style={{
                        fontFamily: 'NotoSansArabic_600SemiBold',
                        fontSize: 20,
                        color: revealed[i]
                          ? isDark
                            ? '#0A0A0A'
                            : '#FFFFFF'
                          : isDark
                            ? C.neutral100
                            : C.neutral900,
                        textAlign: 'center',
                        writingDirection: 'rtl',
                      }}>
                      {pair.expandedAr}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lexend_400Regular',
                        fontSize: 12,
                        color: revealed[i]
                          ? isDark
                            ? '#525252'
                            : '#D4D4D4'
                          : isDark
                            ? C.neutral400
                            : C.neutral500,
                        textAlign: 'center',
                      }}>
                      {t_content(pair.expandedEn, pair.expandedBn)}
                    </Text>
                  </>
                ) : (
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 13,
                      color: isDark ? C.neutral300 : C.neutral600,
                      textAlign: 'center',
                    }}>
                    {t('idafah.tapToReveal') ?? 'Tap to reveal'}
                  </Text>
                )}
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      {/* Reveal All Shortcut Pill */}
      {revealed.some((r) => !r) && (
        <Pressable
          onPress={revealAll}
          style={({ pressed }) => ({
            alignSelf: 'center',
            marginTop: 8,
            height: 48,
            paddingHorizontal: 28,
            borderRadius: 24,
            backgroundColor: isDark ? '#FFFFFF' : '#0A0A0A',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.9 : 1,
          })}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 13,
              color: isDark ? '#0A0A0A' : '#FFFFFF',
            }}>
            {t('idafah.revealAll') ?? 'Reveal All'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export { IdafahDrillView as IdafahView };

import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { ParagraphBlock } from '@tariq/shared';

interface Props {
  isDark: boolean;
  C: Record<string, string>;
  payload?: {
    paragraphs?: ParagraphBlock[];
    instruction?: string;
    instructionBn?: string;
    text?: string;
  };
  onProgress: (v: number) => void;
  onComplete: () => void;
}

export const ParagraphView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();
  const blocks = payload?.paragraphs ?? [];
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    onProgress(1);
    onComplete();
  }, [onProgress, onComplete]);

  if (blocks.length === 0) {
    const fallbackText = payload?.text || payload?.instruction;
    if (!fallbackText) return null;
    return (
      <View style={{ width: '100%' }}>
        <View
          style={{
            borderRadius: 24,
            backgroundColor: isDark ? C.neutral900 : C.neutral100,
            padding: 24,
          }}>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 22,
              color: isDark ? C.neutral100 : C.neutral900,
              textAlign: 'right',
              writingDirection: 'rtl',
              lineHeight: 38,
            }}>
            {fallbackText}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ width: '100%', gap: 24 }}>
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

      {blocks.map((block, bi) => {
        const translationText = block.translationEn
          ? t_content(block.translationEn, block.translationBn)
          : block.translationBn;

        return (
          <View
            key={bi}
            style={{
              borderRadius: 24,
              backgroundColor: isDark ? C.neutral900 : C.neutral100,
              padding: 20,
              gap: 16,
            }}>
            {/* Block title */}
            {block.title && (
              <View style={{ alignItems: 'center', gap: 4 }}>
                <Text
                  style={{
                    fontFamily: 'NotoSansArabic_600SemiBold',
                    fontSize: 24,
                    color: isDark ? '#FFFFFF' : '#0A0A0A',
                    textAlign: 'center',
                    writingDirection: 'rtl',
                  }}>
                  {block.title}
                </Text>
                {(() => {
                  const titleLocalized = block.titleEn
                    ? t_content(block.titleEn, block.titleBn)
                    : block.titleBn;
                  return titleLocalized ? (
                    <Text
                      style={{
                        fontFamily: 'Lexend_400Regular',
                        fontSize: 13,
                        color: isDark ? C.neutral400 : C.neutral500,
                        textAlign: 'center',
                      }}>
                      {titleLocalized}
                    </Text>
                  ) : null;
                })()}
              </View>
            )}

            {/* Paragraph lines card */}
            <View
              style={{
                borderRadius: 20,
                backgroundColor: isDark ? '#141414' : '#FFFFFF',
                padding: 20,
                gap: 12,
              }}>
              {block.lines.map((line, li) => (
                <Text
                  key={li}
                  style={{
                    fontFamily: 'NotoSansArabic_600SemiBold',
                    fontSize: 20,
                    color: isDark ? C.neutral100 : C.neutral900,
                    textAlign: 'right',
                    writingDirection: 'rtl',
                    lineHeight: 36,
                  }}>
                  {line}
                </Text>
              ))}
            </View>

            {/* Reveal translation 56px action pill */}
            {translationText && (
              <View style={{ gap: 12 }}>
                <Pressable
                  onPress={() => setRevealed((prev) => ({ ...prev, [bi]: !prev[bi] }))}
                  style={({ pressed }) => ({
                    height: 56,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 28,
                    backgroundColor: isDark ? C.neutral800 : C.neutral200,
                    opacity: pressed ? 0.9 : 1,
                  })}>
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 14,
                      color: isDark ? C.neutral100 : C.neutral900,
                    }}>
                    {revealed[bi]
                      ? (t('paragraph.hideTranslation') ?? 'Hide Translation')
                      : (t('paragraph.revealTranslation') ?? 'Reveal Translation')}
                  </Text>
                </Pressable>

                {revealed[bi] && (
                  <View
                    style={{
                      width: '100%',
                      borderRadius: 20,
                      backgroundColor: isDark ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.7)',
                      padding: 18,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lexend_400Regular',
                        fontSize: 15,
                        color: isDark ? C.neutral200 : C.neutral700,
                        lineHeight: 24,
                      }}>
                      {translationText}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

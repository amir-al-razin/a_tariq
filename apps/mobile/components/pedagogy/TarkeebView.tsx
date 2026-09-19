import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { TarkeebItem, TarkeebNode } from '@tariq/shared';

type Props = {
  isDark: boolean;
  C: any;
  payload?: any;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
};

/** Recursively render a tree node and its children matching web's visual hierarchy */
const TreeNodeComponent: React.FC<{
  node: TarkeebNode;
  isDark: boolean;
  C: any;
  depth?: number;
}> = ({ node, isDark, C, depth = 0 }) => {
  const { t_content } = useLanguage();
  const isLeaf = !node.children || node.children.length === 0;

  return (
    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
      {/* Arabic text box - borderless tone-on-tone squircle */}
      <View
        style={{
          borderRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: isDark ? '#151515' : '#FFFFFF',
          minWidth: 88,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'NotoSansArabic_600SemiBold',
            fontSize: 20,
            color: isDark ? '#FFFFFF' : '#0A0A0A',
            textAlign: 'center',
            writingDirection: 'rtl',
            lineHeight: 28,
          }}>
          {node.text}
        </Text>
      </View>

      {/* Grammatical labels */}
      <Text
        style={{
          fontFamily: 'Lexend_600SemiBold',
          fontSize: 12,
          color: isDark ? C.neutral300 : C.neutral600,
          marginTop: 6,
          textAlign: 'center',
        }}>
        {node.label}
      </Text>
      <Text
        style={{
          fontFamily: 'Lexend_400Regular',
          fontSize: 10,
          color: isDark ? C.neutral500 : C.neutral400,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
          textAlign: 'center',
          marginTop: 2,
        }}>
        {t_content(node.labelEn, node.labelBn)}
      </Text>

      {/* Branch lines + children */}
      {!isLeaf && (
        <View style={{ alignItems: 'center', width: '100%' }}>
          {/* Vertical stem down */}
          <View
            style={{
              width: 2,
              height: 22,
              backgroundColor: isDark ? C.neutral800 : C.neutral300,
              marginVertical: 4,
              borderRadius: 1,
            }}
          />
          {node.children!.length === 1 ? (
            <TreeNodeComponent node={node.children![0]} isDark={isDark} C={C} depth={depth + 1} />
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', position: 'relative' }}>
              {/* Horizontal connecting branch */}
              <View
                style={{
                  position: 'absolute',
                  left: '15%',
                  right: '15%',
                  top: 0,
                  height: 2,
                  backgroundColor: isDark ? C.neutral800 : C.neutral300,
                  borderRadius: 1,
                }}
              />
              {node.children!.map((child, idx) => (
                <View key={idx} style={{ alignItems: 'center', flex: 1 }}>
                  {/* Vertical connector to child */}
                  <View
                    style={{
                      width: 2,
                      height: 16,
                      backgroundColor: isDark ? C.neutral800 : C.neutral300,
                      borderRadius: 1,
                    }}
                  />
                  <TreeNodeComponent node={child} isDark={isDark} C={C} depth={depth + 1} />
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export const TarkeebView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();
  const items: TarkeebItem[] = payload?.tarkeeb ?? payload?.items ?? [];

  useEffect(() => {
    onProgress?.(1);
    onComplete?.();
  }, [onProgress, onComplete]);

  if (items.length === 0) {
    const fallbackText = payload?.text || payload?.instruction;
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
              fontSize: 22,
              color: isDark ? C.neutral100 : C.neutral900,
              textAlign: 'right',
              writingDirection: 'rtl',
              lineHeight: 36,
            }}>
            {fallbackText}
          </Text>
        </View>
      );
    }
    return (
      <View style={{ width: '100%', padding: 24, alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Lexend_400Regular', color: C.neutral400, fontSize: 14 }}>
          {t('tarkeeb.noData') ?? 'No data available'}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ width: '100%', gap: 24 }}>
      {items.map((item, idx) => (
        <View
          key={idx}
          style={{
            borderRadius: 24,
            backgroundColor: isDark ? C.neutral900 : C.neutral100,
            padding: 24,
            alignItems: 'center',
            gap: 18,
          }}>
          {/* Monochrome Type pill badge */}
          <View
            style={{
              borderRadius: 9999,
              backgroundColor: isDark ? C.neutral800 : C.neutral200,
              paddingHorizontal: 16,
              paddingVertical: 6,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 11,
                color: isDark ? C.neutral200 : C.neutral800,
                textTransform: 'uppercase',
                letterSpacing: 0.8,
              }}>
              {item.type === 'complete'
                ? (t('tarkeeb.completeSentence') ?? 'Complete Sentence')
                : (t('tarkeeb.incompletePhrase') ?? 'Incomplete Phrase')}
            </Text>
          </View>

          {/* Full sentence */}
          <View style={{ alignItems: 'center', gap: 6 }}>
            <Text
              style={{
                fontFamily: 'NotoSansArabic_600SemiBold',
                fontSize: 28,
                color: isDark ? '#FFFFFF' : '#0A0A0A',
                textAlign: 'center',
                writingDirection: 'rtl',
                lineHeight: 42,
              }}>
              {item.sentence}
            </Text>
            <Text
              style={{
                fontFamily: 'Lexend_400Regular',
                fontSize: 14,
                color: isDark ? C.neutral400 : C.neutral500,
                textAlign: 'center',
              }}>
              {t_content(item.sentenceEn, item.sentenceBn)}
            </Text>
          </View>

          {/* Horizontally scrollable tree diagram */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingVertical: 12,
              paddingHorizontal: 8,
              minWidth: '100%',
            }}>
            {item.tree.map((node, i) => (
              <TreeNodeComponent key={i} node={node} isDark={isDark} C={C} />
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

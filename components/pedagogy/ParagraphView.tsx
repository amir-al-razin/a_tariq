import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import { ParagraphBlock } from '../../data/curriculum';

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

export const ParagraphView: React.FC<Props> = ({ payload, onProgress }) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();
  const blocks = payload?.paragraphs ?? [];
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  // Scroll-based completion handled by ChunkEngineScreen
  useEffect(() => {
    onProgress(0);
  }, []);

  if (blocks.length === 0) {
    const fallbackText = payload?.text || payload?.instruction;
    if (!fallbackText) return null;
    return (
      <View className="w-full gap-4">
        <View className="rounded-2xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
          <Text
            className="text-right font-arabic-semibold text-arabic-body leading-8 text-neutral-800 dark:text-neutral-100"
            style={{ writingDirection: 'rtl' }}>
            {fallbackText}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="w-full gap-6">
      {payload?.instruction && (
        <View className="rounded-xl bg-primary-50 p-3 dark:bg-primary-900/30">
          <Text className="text-center font-english text-caption text-primary-700 dark:text-primary-200">
            {t_content(payload.instruction, payload.instructionBn)}
          </Text>
        </View>
      )}

      {blocks.map((block, bi) => (
        <View key={bi} className="gap-3">
          {/* Block title */}
          {block.title && (
            <View className="items-center gap-1">
              <Text className="text-center font-arabic-semibold text-h2 text-primary-700 dark:text-primary-200">
                {block.title}
              </Text>
              {(() => {
                const titleLocalized = block.titleEn
                  ? t_content(block.titleEn, block.titleBn)
                  : block.titleBn;
                return titleLocalized ? (
                  <Text className="text-center font-english text-caption text-neutral-600 dark:text-neutral-300">
                    {titleLocalized}
                  </Text>
                ) : null;
              })()}
            </View>
          )}

          {/* Paragraph lines */}
          <View className="gap-3 rounded-2xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            {block.lines.map((line, li) => (
              <Text
                key={li}
                className="text-right font-arabic-semibold text-arabic-body leading-8 text-neutral-800 dark:text-neutral-100"
                style={{ writingDirection: 'rtl' }}>
                {line}
              </Text>
            ))}
          </View>

          {/* Reveal translation button + English translation (hidden by default) */}
          {(() => {
            const translationText = block.translationEn
              ? t_content(block.translationEn, block.translationBn)
              : block.translationBn;
            return translationText ? (
              <View className="gap-3">
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setRevealed((prev) => ({ ...prev, [bi]: !prev[bi] }))}
                  className="w-full items-center rounded-2xl border border-primary-200 bg-primary-50 p-4 dark:border-primary-700 dark:bg-primary-900/30">
                  <Text className="font-english-semibold text-body text-primary-800 dark:text-primary-100">
                    {revealed[bi]
                      ? t('paragraph.hideTranslation')
                      : t('paragraph.revealTranslation')}
                  </Text>
                </Pressable>

                {revealed[bi] && (
                  <View className="w-full rounded-2xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <Text className="font-english text-body leading-7 text-neutral-700 dark:text-neutral-200">
                      {translationText}
                    </Text>
                  </View>
                )}
              </View>
            ) : null;
          })()}

          {/* Divider between blocks */}
          {bi < blocks.length - 1 && (
            <View className="mt-1 h-px bg-neutral-200 dark:bg-neutral-700" />
          )}
        </View>
      ))}
    </View>
  );
};

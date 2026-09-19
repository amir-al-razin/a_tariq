import React, { useState, useCallback } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../i18n/LanguageContext';
import type { QAItem } from '@tariq/shared';

const FALLBACK_QUESTIONS: QAItem[] = [
  {
    question_ar: 'مَا هَٰذَا؟',
    question_en: 'What is this?',
    question_bn: 'এটা কী?',
    correct_ar: 'هَٰذَا كِتَابٌ',
    correct_en: 'This is a book',
    correct_bn: 'এটা একটি বই',
    options_ar: ['هَٰذَا كِتَابٌ', 'هَٰذَا قَلَمٌ'],
    questionType: 'general',
    emoji: '📖',
  },
];

type Props = {
  isDark: boolean;
  C: any;
  payload?: any;
  onProgress?: (v: number) => void;
  onComplete?: () => void;
};

export const QAndAView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
  const { t } = useTranslation();
  const { t_content } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const questions: QAItem[] =
    payload?.questions && payload.questions.length > 0 ? payload.questions : FALLBACK_QUESTIONS;
  const instruction: string = payload?.instruction || '';

  const handleNext = useCallback(() => {
    setSelected(null);
    setRevealed(false);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  if (questions.length === 0) {
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
          {t('qanda.noQuestions') ?? 'No questions available'}
        </Text>
      </View>
    );
  }

  const q = questions[currentIndex];
  const isCorrect = selected === q.correct_ar;
  const isLastQ = currentIndex === questions.length - 1;

  const handleSelect = (opt: string) => {
    if (revealed) return;
    setSelected(opt);
    setRevealed(true);
    const newProgress = (currentIndex + 1) / questions.length;
    onProgress?.(newProgress);
    if (isLastQ) {
      onComplete?.();
    }
  };

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      {instruction ? (
        <Text
          style={{
            fontFamily: 'Lexend_400Regular',
            fontSize: 13,
            color: isDark ? C.neutral400 : C.neutral500,
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: 16,
          }}>
          {instruction}
        </Text>
      ) : null}

      {/* Tone-on-Tone Progress dots */}
      <View
        style={{
          flexDirection: 'row',
          gap: 8,
          marginBottom: 20,
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {questions.map((_, i) => {
          const isCurrent = i === currentIndex;
          const isDone = i < currentIndex;
          return (
            <View
              key={i}
              style={{
                height: 6,
                width: isCurrent ? 24 : isDone ? 10 : 6,
                borderRadius: 3,
                backgroundColor: isCurrent
                  ? C.primary400
                  : isDone
                    ? C.primary300
                    : isDark
                      ? C.neutral800
                      : C.neutral200,
              }}
            />
          );
        })}
      </View>

      {/* Emoji / Image container */}
      {(q.imageUrl || q.emoji) && (
        <View
          style={{
            width: 104,
            height: 104,
            borderRadius: 24,
            backgroundColor: isDark ? C.neutral900 : C.neutral100,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            overflow: 'hidden',
          }}>
          {q.imageUrl ? (
            <Image
              source={{ uri: q.imageUrl }}
              style={{ width: 72, height: 72 }}
              resizeMode="contain"
            />
          ) : (
            <Text style={{ fontSize: 48 }}>{q.emoji}</Text>
          )}
        </View>
      )}

      {/* Question prompt */}
      <View style={{ alignItems: 'center', marginBottom: 24, paddingHorizontal: 8 }}>
        <Text
          style={{
            fontFamily: 'NotoSansArabic_600SemiBold',
            fontSize: 30,
            color: isDark ? '#FFFFFF' : '#0A0A0A',
            textAlign: 'center',
            writingDirection: 'rtl',
            lineHeight: 46,
            marginBottom: 6,
          }}>
          {q.question_ar}
        </Text>
        <Text
          style={{
            fontFamily: 'Lexend_400Regular',
            fontSize: 15,
            color: isDark ? C.neutral400 : C.neutral500,
            textAlign: 'center',
          }}>
          {t_content(q.question_en, q.question_bn)}
        </Text>
      </View>

      {/* Option pills / squircles */}
      <View style={{ width: '100%', gap: 12 }}>
        {q.options_ar.map((opt: string) => {
          const isChosen = selected === opt;
          const isThisCorrect = opt === q.correct_ar;

          let cardBg = isDark ? C.neutral900 : C.neutral100;
          let textColor = isDark ? C.neutral100 : C.neutral900;
          let opacity = 1;
          let strikeThrough = false;

          if (revealed) {
            if (isThisCorrect) {
              cardBg = C.primary400;
              textColor = '#FFFFFF';
            } else if (isChosen && !isCorrect) {
              cardBg = isDark ? C.neutral900 : C.neutral200;
              textColor = isDark ? C.neutral500 : C.neutral400;
              opacity = 0.6;
              strikeThrough = true;
            } else {
              cardBg = isDark ? C.neutral900 : C.neutral100;
              textColor = isDark ? C.neutral600 : C.neutral400;
              opacity = 0.4;
            }
          }

          return (
            <Pressable
              key={opt}
              disabled={revealed}
              onPress={() => handleSelect(opt)}
              style={({ pressed }) => ({
                paddingVertical: 18,
                paddingHorizontal: 20,
                borderRadius: 24,
                backgroundColor: cardBg,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: pressed && !revealed ? 0.85 : opacity,
              })}>
              <Text
                style={{
                  fontFamily: 'NotoSansArabic_600SemiBold',
                  fontSize: 22,
                  color: textColor,
                  textAlign: 'center',
                  writingDirection: 'rtl',
                  textDecorationLine: strikeThrough ? 'line-through' : 'none',
                }}>
                {opt}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Explanation / Answer Review Block (Borderless Tone-on-Tone) */}
      {revealed && (
        <View
          style={{
            marginTop: 20,
            padding: 20,
            borderRadius: 24,
            backgroundColor: isDark ? C.neutral900 : C.neutral100,
            width: '100%',
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 12,
              color: C.primary400,
              textTransform: 'uppercase',
              letterSpacing: 1,
              marginBottom: 8,
            }}>
            {isCorrect ? t('qanda.correct') : t('qanda.notQuite')}
          </Text>

          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 22,
              color: isDark ? '#FFFFFF' : '#0A0A0A',
              textAlign: 'right',
              writingDirection: 'rtl',
              marginBottom: 4,
            }}>
            {q.correct_ar}
          </Text>

          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: isDark ? C.neutral300 : C.neutral600,
            }}>
            {t_content(q.correct_en, q.correct_bn)}
          </Text>

          {q.explanation && (
            <View
              style={{
                marginTop: 14,
                padding: 14,
                borderRadius: 16,
                backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              }}>
              <Text
                style={{
                  fontFamily: 'Lexend_400Regular',
                  fontSize: 13,
                  color: isDark ? C.neutral300 : C.neutral700,
                  lineHeight: 20,
                }}>
                <Text
                  style={{
                    fontFamily: 'Lexend_600SemiBold',
                    color: isDark ? '#FFFFFF' : '#0A0A0A',
                  }}>
                  💡 {t('qanda.hint') ?? 'Hint:'}{' '}
                </Text>
                {q.explanation}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Next question button pill (56px touch target height) */}
      {revealed && !isLastQ && (
        <Pressable
          onPress={handleNext}
          style={({ pressed }) => ({
            marginTop: 24,
            height: 56,
            borderRadius: 28,
            backgroundColor: C.primary400,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            opacity: pressed ? 0.9 : 1,
          })}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 16,
              color: '#FFFFFF',
            }}>
            {t('qanda.nextQuestion')}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

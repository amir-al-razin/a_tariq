import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeTokens } from '../../theme/colors';
import { playSuccessChime, playErrorCue, playTapSound } from '../../lib/sound';
import { playArabicAudio } from '../../lib/arabicAudio';

export interface QAExerciseItem {
  id: number;
  questionAr: string;
  emoji: string;
  expectedAnswer: string[];
  chips: string[];
}

const shuffleArray = (array: string[], expected?: string[]): string[] => {
  const arr = [...array];
  if (arr.length <= 1) return arr;

  let attempts = 0;
  do {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    attempts++;
  } while (
    attempts < 10 &&
    expected &&
    arr.length === expected.length &&
    arr.every((val, idx) => val === expected[idx])
  );

  return arr;
};

export interface WordChipExerciseProps {
  exercises: QAExerciseItem[];
  activeQAIndex?: number;
  onFinish?: () => void;
  onProgress?: (progress: number) => void;
  instructionText?: string;
}

export const WordChipExercise: React.FC<WordChipExerciseProps> = ({
  exercises,
  activeQAIndex: controlledActiveIndex,
  onFinish,
  onProgress,
  instructionText = 'Tap word chips below in sequence to assemble your answer',
}) => {
  const theme = useThemeTokens();
  const [internalActiveIndex, setInternalActiveIndex] = useState<number>(0);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [verificationResult, setVerificationResult] = useState<{
    checked: boolean;
    success: boolean;
  }>({ checked: false, success: false });

  const activeIndex = controlledActiveIndex ?? internalActiveIndex;
  const activeQ = exercises[activeIndex];

  const shuffledChips = useMemo(() => {
    if (!activeQ) return [];
    return shuffleArray(activeQ.chips, activeQ.expectedAnswer);
  }, [activeQ]);

  // Available chips are chips from shuffledChips that aren't already used
  const availableChips = useMemo(() => {
    const selectedCopy = [...selectedChips];
    return shuffledChips.filter((chip) => {
      const idx = selectedCopy.indexOf(chip);
      if (idx !== -1) {
        selectedCopy.splice(idx, 1);
        return false;
      }
      return true;
    });
  }, [shuffledChips, selectedChips]);

  if (!activeQ) return null;

  const isArabicAnswer = activeQ.expectedAnswer.some((w) => /[\u0600-\u06FF]/.test(w));

  const handleChipPress = (chip: string) => {
    if (verificationResult.checked) {
      setVerificationResult({ checked: false, success: false });
    }
    if (isArabicAnswer) {
      playArabicAudio(chip);
    } else {
      playTapSound();
    }
    setSelectedChips((prev) => [...prev, chip]);
  };

  const handleRemoveChip = (index: number) => {
    playTapSound();
    if (verificationResult.checked) {
      setVerificationResult({ checked: false, success: false });
    }
    setSelectedChips((prev) => prev.filter((_, i) => i !== index));
  };

  const handleResetChips = () => {
    playTapSound();
    setSelectedChips([]);
    setVerificationResult({ checked: false, success: false });
  };

  const handleVerifySentence = () => {
    const isCorrect =
      selectedChips.length === activeQ.expectedAnswer.length &&
      selectedChips.every((chip, i) => chip === activeQ.expectedAnswer[i]);

    if (isCorrect) {
      playSuccessChime();
      if (isArabicAnswer) {
        playArabicAudio(selectedChips.join(' '));
      }
      setVerificationResult({ checked: true, success: true });
      const p = Math.min((activeIndex + 1) / exercises.length, 1);
      onProgress?.(p);
    } else {
      playErrorCue();
      setVerificationResult({ checked: true, success: false });
    }
  };

  const handleNext = () => {
    playTapSound();
    if (activeIndex < exercises.length - 1) {
      setInternalActiveIndex((prev) => prev + 1);
      setSelectedChips([]);
      setVerificationResult({ checked: false, success: false });
    } else if (onFinish) {
      onFinish();
    }
  };

  return (
    <View
      style={{
        width: '100%',
        maxWidth: 440,
        backgroundColor: theme.surfaceWell,
        borderRadius: 32,
        padding: 24,
      }}>
      {/* Progress Dots Indicator */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          marginBottom: 20,
        }}>
        {exercises.map((_, i) => (
          <View
            key={i}
            style={{
              height: 6,
              width: i === activeIndex ? 24 : 6,
              borderRadius: 3,
              backgroundColor:
                i === activeIndex
                  ? theme.accentPrimary
                  : i < activeIndex
                    ? theme.status.success
                    : theme.isDark
                      ? '#404040'
                      : '#D4D4D4',
            }}
          />
        ))}
      </View>

      {/* Question Prompt Card */}
      <View
        style={{
          backgroundColor: theme.isDark ? '#1A1A1A' : '#FFFFFF',
          borderRadius: 24,
          padding: 18,
          marginBottom: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 12 }}>
          <Text
            style={{
              fontFamily: 'NotoSansArabic_600SemiBold',
              fontSize: 24,
              lineHeight: 38,
              color: theme.textPrimary,
              textAlign: 'right',
            }}>
            {activeQ.questionAr}
          </Text>
        </View>
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 26,
            backgroundColor: theme.surfaceWell,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 28 }}>{activeQ.emoji}</Text>
        </View>
      </View>

      {/* Assembly Dropzone Slot */}
      <View
        style={{
          minHeight: 76,
          borderRadius: 24,
          padding: 14,
          backgroundColor: theme.isDark ? '#1A1A1A' : '#FFFFFF',
          borderWidth: selectedChips.length === 0 ? 2 : 0,
          borderStyle: 'dashed',
          borderColor: theme.isDark ? '#404040' : '#D4D4D4',
          flexDirection: isArabicAnswer ? 'row-reverse' : 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          marginBottom: 16,
        }}>
        {selectedChips.length === 0 ? (
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 12,
              color: theme.textMuted,
              textAlign: 'center',
            }}>
            {instructionText}
          </Text>
        ) : (
          selectedChips.map((chip, idx) => (
            <TouchableOpacity
              key={`${chip}-${idx}`}
              onPress={() => handleRemoveChip(idx)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                backgroundColor: theme.accentPrimarySubtle,
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 18,
              }}>
              <Text
                style={{
                  fontFamily: isArabicAnswer ? 'NotoSansArabic_600SemiBold' : 'Lexend_600SemiBold',
                  fontSize: isArabicAnswer ? 20 : 15,
                  color: theme.accentPrimaryText,
                }}>
                {chip}
              </Text>
              <Ionicons name="close-circle" size={16} color={theme.accentPrimaryText} />
            </TouchableOpacity>
          ))
        )}
      </View>

      {/* Available Choice Chips Pool */}
      <View
        style={{
          flexDirection: isArabicAnswer ? 'row-reverse' : 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          marginBottom: 20,
        }}>
        {availableChips.map((chip, i) => (
          <TouchableOpacity
            key={`chip-${chip}-${i}`}
            onPress={() => handleChipPress(chip)}
            style={{
              backgroundColor: theme.isDark ? '#262626' : '#FFFFFF',
              paddingHorizontal: 18,
              paddingVertical: 12,
              borderRadius: 20,
            }}>
            <Text
              style={{
                fontFamily: isArabicAnswer ? 'NotoSansArabic_600SemiBold' : 'Lexend_600SemiBold',
                fontSize: isArabicAnswer ? 20 : 15,
                color: theme.textPrimary,
              }}>
              {chip}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Verification Feedback Banner */}
      {verificationResult.checked ? (
        <View
          style={{
            padding: 14,
            borderRadius: 18,
            backgroundColor: verificationResult.success
              ? theme.status.successSubtle
              : theme.status.dangerSubtle,
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 13,
              color: verificationResult.success
                ? theme.status.successText
                : theme.status.dangerText,
            }}>
            {verificationResult.success
              ? `Correct: ${activeQ.expectedAnswer.join(' ')}`
              : 'Try again! Tap the words in the correct order.'}
          </Text>
        </View>
      ) : null}

      {/* Action Buttons: Reset & Verify/Next */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
        <TouchableOpacity
          onPress={handleResetChips}
          disabled={selectedChips.length === 0 || verificationResult.success}
          style={{
            height: 52,
            paddingHorizontal: 20,
            borderRadius: 26,
            backgroundColor: theme.isDark ? '#262626' : '#E5E5E5',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            opacity: selectedChips.length === 0 || verificationResult.success ? 0.4 : 1,
          }}>
          <Ionicons name="refresh" size={18} color={theme.textPrimary} />
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 13,
              color: theme.textPrimary,
            }}>
            Reset
          </Text>
        </TouchableOpacity>

        {verificationResult.success ? (
          <TouchableOpacity
            onPress={handleNext}
            style={{
              flex: 1,
              height: 52,
              borderRadius: 26,
              backgroundColor: theme.status.success,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 15,
                color: '#FFFFFF',
              }}>
              {activeIndex < exercises.length - 1 ? 'Next' : 'Finish'}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleVerifySentence}
            disabled={selectedChips.length === 0}
            style={{
              flex: 1,
              height: 52,
              borderRadius: 26,
              backgroundColor:
                selectedChips.length > 0
                  ? theme.accentPrimary
                  : theme.isDark
                    ? '#262626'
                    : '#E5E5E5',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Lexend_600SemiBold',
                fontSize: 15,
                color: selectedChips.length > 0 ? '#FFFFFF' : theme.textMuted,
              }}>
              Verify Answer
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { QAItem } from '../../data/curriculum';

type Props = { isDark: boolean; C: any; payload?: any; onProgress?: (v: number) => void; onComplete?: () => void };

export const QAndAView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
    const questions: QAItem[] = payload?.questions || [];
    const instruction: string = payload?.instruction || '';
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState<string | null>(null);
    const [revealed, setRevealed] = useState(false);

    if (questions.length === 0) return <Text style={{ color: isDark ? C.neutral100 : C.neutral800 }}>No questions yet.</Text>;

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

    const handleNext = () => {
        setSelected(null);
        setRevealed(false);
        setCurrentIndex((prev) => prev + 1);
    };

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            {instruction ? (
                <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral600, marginBottom: 20, textAlign: 'center', fontStyle: 'italic' }}>
                    {instruction}
                </Text>
            ) : null}

            {/* Progress dots */}
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
                {questions.map((_, i) => (
                    <View key={i} style={{ height: 6, width: i <= currentIndex ? 20 : 6, borderRadius: 3, backgroundColor: i < currentIndex ? C.primary400 : i === currentIndex ? C.primary400 : (isDark ? C.neutral700 : C.neutral200) }} />
                ))}
            </View>

            {/* Emoji */}
            <View style={{ width: 96, height: 96, borderRadius: 16, backgroundColor: isDark ? C.neutral800 : C.neutral100, borderWidth: 1, borderColor: isDark ? C.neutral700 : C.neutral200, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Text style={{ fontSize: 44 }}>{q.emoji}</Text>
            </View>

            <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 30, color: isDark ? C.neutral100 : C.neutral800, marginBottom: 4 }}>{q.question_ar}</Text>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral400 : C.neutral600, marginBottom: 24 }}>{q.question_en}</Text>

            {/* Options */}
            <View style={{ width: '100%', gap: 10 }}>
                {q.options_ar.map((opt) => {
                    const isChosen = selected === opt;
                    const isThisCorrect = opt === q.correct_ar;
                    let borderColor = isDark ? C.neutral700 : C.neutral200;
                    let bg = 'transparent';
                    let textColor = isDark ? C.neutral200 : C.neutral800;

                    if (revealed && isChosen && isCorrect) { borderColor = '#22c55e'; bg = isDark ? '#052e16' : '#f0fdf4'; textColor = '#22c55e'; }
                    else if (revealed && isChosen && !isCorrect) { borderColor = '#ef4444'; bg = isDark ? '#3f0c0c' : '#fef2f2'; textColor = '#ef4444'; }
                    else if (revealed && isThisCorrect) { borderColor = '#22c55e'; bg = isDark ? '#052e16' : '#f0fdf4'; textColor = '#22c55e'; }

                    return (
                        <Pressable key={opt} onPress={() => handleSelect(opt)}
                            style={{ padding: 16, borderRadius: 12, borderWidth: 2, borderColor, backgroundColor: bg, alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 20, color: textColor }}>{opt}</Text>
                        </Pressable>
                    );
                })}
            </View>

            {/* Show explanation after answering */}
            {revealed && (
                <View style={{ marginTop: 16, padding: 14, borderRadius: 12, backgroundColor: isCorrect ? (isDark ? '#052e16' : '#f0fdf4') : (isDark ? '#3f0c0c' : '#fef2f2'), width: '100%', borderWidth: 1, borderColor: isCorrect ? '#22c55e' : '#ef4444' }}>
                    <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 13, color: isCorrect ? '#22c55e' : '#ef4444', marginBottom: 4 }}>
                        {isCorrect ? '✓ Correct!' : '✗ Not quite'}
                    </Text>
                    <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 18, color: isDark ? C.neutral100 : C.neutral800 }}>{q.correct_ar}</Text>
                    <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral400 : C.neutral600 }}>{q.correct_en}</Text>
                </View>
            )}

            {/* Next button if not last question */}
            {revealed && !isLastQ && (
                <Pressable onPress={handleNext} style={{ marginTop: 20, paddingHorizontal: 32, paddingVertical: 14, borderRadius: 12, backgroundColor: C.primary400, alignItems: 'center', width: '100%' }}>
                    <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 15, color: '#fff' }}>Next →</Text>
                </Pressable>
            )}
        </View>
    );
};

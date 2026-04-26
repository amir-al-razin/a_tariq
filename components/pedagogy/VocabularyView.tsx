import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import type { VocabWord } from '../../data/curriculum';

const FALLBACK_WORDS: VocabWord[] = [
    { id: 1, ar: 'كِتَابٌ', romanized: 'kitābun', en: 'A book', bn: 'একটি বই', emoji: '📖' },
    { id: 2, ar: 'قَلَمٌ', romanized: 'qalamun', en: 'A pen', bn: 'একটি কলম', emoji: '🖊️' },
];

type Props = { isDark: boolean; C: any; payload?: any; onProgress?: (v: number) => void; onComplete?: () => void };

export const VocabularyView: React.FC<Props> = ({ isDark, C, payload, onProgress, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [done, setDone] = useState(false);

    const words: VocabWord[] = payload?.words?.length ? payload.words : FALLBACK_WORDS;
    const word = words[currentIndex];
    const isLast = currentIndex === words.length - 1;
    const isFirst = currentIndex === 0;
    const total = words.length;

    useEffect(() => {
        const steps = total * 2;
        const completed = currentIndex * 2 + (flipped ? 1 : 0);
        onProgress?.(Math.min(completed / steps, done ? 1 : 0.99));
    }, [currentIndex, flipped, total, onProgress, done]);

    const handleCardPress = () => {
        if (done) return;
        if (!flipped) {
            setFlipped(true);
        } else {
            if (isLast) {
                setDone(true);
                onComplete?.();
            } else {
                setFlipped(false);
                setCurrentIndex((prev) => prev + 1);
            }
        }
    };

    const handlePrev = () => {
        if (isFirst && !flipped) return;
        if (flipped) {
            // Just unflip the current card rather than going back
            setFlipped(false);
        } else {
            setCurrentIndex((prev) => prev - 1);
            setFlipped(false);
            if (done) setDone(false);
        }
    };

    const handleNext = () => {
        if (done) return;
        if (!flipped) {
            setFlipped(true);
        } else if (!isLast) {
            setFlipped(false);
            setCurrentIndex((prev) => prev + 1);
        } else {
            setDone(true);
            onComplete?.();
        }
    };

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral400 : C.neutral600, marginBottom: 20 }}>
                {done ? '🎉 All words reviewed!' : !flipped ? 'Tap card or use arrows' : isLast ? 'Tap to finish' : 'Tap again for next word'}
            </Text>

            {/* Card */}
            <Pressable onPress={handleCardPress} disabled={done} style={{ width: '100%', minHeight: 200, borderRadius: 20, borderWidth: 1, borderColor: isDark ? C.neutral700 : C.neutral200, overflow: 'hidden' }}>
                {!flipped ? (
                    <View style={{ flex: 1, minHeight: 200, backgroundColor: isDark ? C.neutral900 : '#ECFDF8', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                        <Text style={{ fontSize: 48, marginBottom: 12 }}>{word.emoji}</Text>
                        <Text style={{ fontFamily: 'NotoSansArabic_600SemiBold', fontSize: 44, color: C.primary700, textAlign: 'center' }}>{word.ar}</Text>
                        <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 14, color: isDark ? C.neutral400 : C.neutral500, marginTop: 8 }}>{word.romanized}</Text>
                    </View>
                ) : (
                    <View style={{ flex: 1, minHeight: 200, backgroundColor: isDark ? C.neutral800 : C.neutral50, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                        <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 28, color: isDark ? C.neutral100 : C.neutral800, textAlign: 'center' }}>{word.en}</Text>
                        <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 18, color: isDark ? C.neutral400 : C.neutral600, marginTop: 8, textAlign: 'center' }}>{word.bn}</Text>
                    </View>
                )}
            </Pressable>

            {/* Progress dots */}
            <View style={{ flexDirection: 'row', marginTop: 20, gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
                {words.map((_: VocabWord, i: number) => (
                    <View key={i} style={{ height: 6, width: i === currentIndex ? 20 : 6, borderRadius: 3, backgroundColor: i < currentIndex || done ? C.primary400 : i === currentIndex ? C.primary400 : (isDark ? C.neutral700 : C.neutral200) }} />
                ))}
            </View>
            <Text style={{ fontFamily: 'Lexend_400Regular', fontSize: 13, color: isDark ? C.neutral500 : C.neutral400, marginTop: 10 }}>
                {done ? `${total} / ${total}` : `${currentIndex + 1} / ${total}`}
            </Text>

            {/* ← Back / Forward → buttons */}
            <View style={{ flexDirection: 'row', gap: 16, marginTop: 20, width: '100%' }}>
                <Pressable
                    onPress={handlePrev}
                    disabled={isFirst && !flipped}
                    style={{
                        flex: 1, height: 48, borderRadius: 12, borderWidth: 1.5,
                        borderColor: (isFirst && !flipped) ? (isDark ? C.neutral800 : C.neutral200) : (isDark ? C.neutral600 : C.neutral400),
                        alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 6,
                        opacity: (isFirst && !flipped) ? 0.3 : 1,
                    }}>
                    <Ionicons name="arrow-back" size={18} color={isDark ? C.neutral300 : C.neutral600} />
                    <Text style={{ fontFamily: 'Lexend_500Medium', fontSize: 14, color: isDark ? C.neutral300 : C.neutral600 }}>
                        {flipped ? 'Flip back' : 'Previous'}
                    </Text>
                </Pressable>

                <Pressable
                    onPress={handleNext}
                    disabled={done}
                    style={{
                        flex: 1, height: 48, borderRadius: 12,
                        backgroundColor: done ? (isDark ? C.neutral800 : C.neutral200) : C.primary400,
                        alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 6,
                        opacity: done ? 0.4 : 1,
                    }}>
                    <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 14, color: done ? (isDark ? C.neutral500 : C.neutral500) : '#fff' }}>
                        {!flipped ? 'Reveal' : isLast ? 'Finish' : 'Next'}
                    </Text>
                    <Ionicons name={!flipped ? 'eye-outline' : isLast ? 'checkmark' : 'arrow-forward'} size={18} color={done ? (isDark ? C.neutral500 : C.neutral500) : '#fff'} />
                </Pressable>
            </View>
        </View>
    );
};

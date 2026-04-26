import Ionicons from '@expo/vector-icons/Ionicons';
import { MotiView } from 'moti';
import { useColorScheme } from 'nativewind';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

const C = {
    primary50: '#ECFDF8',
    primary100: '#D1FAEF',
    primary200: '#A7F3DE',
    primary300: '#6EE7C8',
    primary400: '#34D3AA',
    primary500: '#16B78E',
    primary600: '#0F9373',
    primary700: '#0D775F',
    primary800: '#0F5F4D',
    primary900: '#0A4134',
    neutral50: '#F8F7F4',
    neutral100: '#F0EEE8',
    neutral200: '#E5E1D8',
    neutral300: '#D5CEBF',
    neutral400: '#B9AF9C',
    neutral500: '#9A8F7B',
    neutral600: '#7D7463',
    neutral700: '#645C4E',
    neutral800: '#4F4A40',
    neutral900: '#3E3A33',
};

type LessonScreenProps = {
    route: {
        params: {
            chapterTitleAr: string;
            chapterTitleEn: string;
            darsNumber: number;
        };
    };
    navigation: {
        goBack: () => void;
    };
};

type ChunkStatus = 'current' | 'completed' | 'locked';

// Circular layout constants
const CHUNK_SIZE = 64;
const RADIUS = 70;

export const LessonScreen: React.FC<LessonScreenProps> = ({ route, navigation }) => {
    const { chapterTitleAr, chapterTitleEn, darsNumber } = route.params;
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    // Generate dynamic chunks based on darsNumber (yields between 3 to 6 chunks)
    const numChunks = (darsNumber % 4) + 3;

    const chunks = Array.from({ length: numChunks }, (_, idx) => {
        // Dummy logic: first is completed, second is current, rest are locked
        const status: ChunkStatus = idx === 0 ? 'completed' : idx === 1 ? 'current' : 'locked';
        return { id: idx + 1, status };
    });

    return (
        <View style={{ flex: 1, backgroundColor: isDark ? C.neutral900 : C.neutral50 }}>
            {/* ── Custom Header ── */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: isDark ? C.neutral800 : C.neutral200,
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                }}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                    style={{
                        height: 40, width: 40,
                        alignItems: 'center', justifyContent: 'center',
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: isDark ? C.neutral700 : C.neutral200,
                        backgroundColor: isDark ? C.neutral800 : C.neutral100,
                    }}>
                    <Ionicons name="arrow-back" size={20} color={isDark ? C.primary300 : C.primary700} />
                </Pressable>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 16, color: isDark ? C.primary100 : C.primary800 }}>
                        Dars {darsNumber} · {chapterTitleEn}
                    </Text>
                    <Text
                        style={{ fontFamily: 'NotoSansArabic_400Regular', fontSize: 14, color: isDark ? C.primary400 : C.primary600, textAlign: 'right' }}>
                        {chapterTitleAr}
                    </Text>
                </View>

                {/* Dars number badge */}
                <View style={{
                    height: 36, width: 36,
                    alignItems: 'center', justifyContent: 'center',
                    borderRadius: 18,
                    backgroundColor: isDark ? C.primary600 : C.primary500,
                }}>
                    <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 14, color: C.neutral50 }}>{darsNumber}</Text>
                </View>
            </View>

            {/* ── Circular Chunks Layout ── */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



                {/* Orbiting Chunks */}
                {chunks.map((chunk, idx) => {
                    const isCurrent = chunk.status === 'current';
                    const isCompleted = chunk.status === 'completed';
                    const isLocked = chunk.status === 'locked';
                    const isInteractive = !isLocked;

                    // Maths: Start at top (-90 deg), evenly distribute
                    const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / numChunks;
                    const x = RADIUS * Math.cos(angle);
                    const y = RADIUS * Math.sin(angle);

                    const circleBg = (isCurrent || isCompleted) ? C.primary500
                        : isLocked ? (isDark ? C.neutral700 : C.neutral300)
                            : (isDark ? `${C.primary900}80` : C.primary100);

                    const circleBorder = (isCurrent || isCompleted) ? (isDark ? C.primary700 : C.primary600)
                        : isLocked ? (isDark ? C.neutral900 : C.neutral500)
                            : (isDark ? C.primary800 : C.primary200);

                    const iconColor = isCurrent || isCompleted ? '#fff'
                        : isLocked ? (isDark ? C.neutral600 : C.neutral700)
                            : C.primary600;

                    return (
                        <View
                            key={chunk.id}
                            style={{
                                position: 'absolute',
                                transform: [{ translateX: x }, { translateY: y }],
                                width: CHUNK_SIZE,
                                height: CHUNK_SIZE + 6,
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                zIndex: isInteractive ? 5 : 1,
                            }}>
                            <MotiView
                                from={{ opacity: 0, scale: 0.4 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', delay: 100 + idx * 40, damping: 20, stiffness: 250 }}
                                style={{ width: '100%', height: '100%' }}>
                                <Pressable
                                    disabled={isLocked}
                                    style={{ width: '100%', height: '100%', justifyContent: 'flex-end' }}>
                                    {({ pressed }) => {
                                        const pushDepth = pressed && isInteractive ? 0 : -6;
                                        return (
                                            <View style={{ width: CHUNK_SIZE, height: CHUNK_SIZE + 6, justifyContent: 'flex-end' }}>
                                                {/* Shadow Base Layer (True Cylinder Wall) */}
                                                <View style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    width: CHUNK_SIZE,
                                                    height: CHUNK_SIZE + (pressed && isInteractive ? 0 : 6),
                                                    borderRadius: CHUNK_SIZE / 2,
                                                    backgroundColor: circleBorder,
                                                }} />

                                                {/* Top Face Layer */}
                                                <View style={{
                                                    width: CHUNK_SIZE,
                                                    height: CHUNK_SIZE,
                                                    borderRadius: CHUNK_SIZE / 2,
                                                    backgroundColor: circleBg,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transform: [{ translateY: pushDepth }],
                                                }}>
                                                    {isLocked ? (
                                                        <Ionicons name="lock-closed" size={24} color={iconColor} />
                                                    ) : isCompleted ? (
                                                        <Ionicons name="checkmark" size={28} color={iconColor} />
                                                    ) : (
                                                        <Ionicons name="star" size={26} color={iconColor} />
                                                    )}

                                                    {/* "START" floating tag */}
                                                    {isCurrent && (
                                                        <MotiView
                                                            from={{ scale: 1, translateY: 0 }}
                                                            animate={{ scale: 1.03, translateY: -3 }}
                                                            transition={{ type: 'timing', duration: 1000, loop: true, repeatReverse: true }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: -30,
                                                                alignSelf: 'center',
                                                                backgroundColor: C.primary100,
                                                                borderColor: C.primary400,
                                                                borderWidth: 1.5,
                                                                borderRadius: 8,
                                                                paddingHorizontal: 8,
                                                                paddingVertical: 3,
                                                            }}>
                                                            <Text style={{ fontFamily: 'Lexend_600SemiBold', fontSize: 10, color: C.primary700 }}>
                                                                START
                                                            </Text>
                                                            {/* Tiny caret indicator */}
                                                            <View style={{
                                                                position: 'absolute',
                                                                bottom: -4,
                                                                alignSelf: 'center',
                                                                width: 6,
                                                                height: 6,
                                                                backgroundColor: C.primary100,
                                                                borderRightWidth: 1.5,
                                                                borderBottomWidth: 1.5,
                                                                borderColor: C.primary400,
                                                                transform: [{ rotate: '45deg' }],
                                                            }} />
                                                        </MotiView>
                                                    )}
                                                </View>
                                            </View>
                                        );
                                    }}
                                </Pressable>
                            </MotiView>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

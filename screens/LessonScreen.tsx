import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text, View } from 'react-native';

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

export const LessonScreen: React.FC<LessonScreenProps> = ({ route, navigation }) => {
    const { chapterTitleAr, chapterTitleEn, darsNumber } = route.params;

    return (
        <View className="flex-1 bg-neutral-50 dark:bg-neutral-900">
            {/* ── Custom Header ── */}
            <View className="flex-row items-center gap-3 border-b border-neutral-200 px-4 py-4 dark:border-neutral-700">
                <Pressable
                    onPress={() => navigation.goBack()}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                    className="h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
                    <Ionicons name="arrow-back" size={20} color="#0D775F" />
                </Pressable>

                <View className="flex-1">
                    <Text className="font-english-semibold text-body text-primary-800 dark:text-primary-100">
                        Dars {darsNumber} · {chapterTitleEn}
                    </Text>
                    <Text
                        className="font-arabic text-caption text-primary-600 dark:text-primary-400"
                        style={{ textAlign: 'right' }}>
                        {chapterTitleAr}
                    </Text>
                </View>

                {/* Dars number badge */}
                <View className="h-9 w-9 items-center justify-center rounded-full bg-primary-500 dark:bg-primary-600">
                    <Text className="font-english-semibold text-caption text-neutral-50">{darsNumber}</Text>
                </View>
            </View>

            {/* ── Placeholder Body ── */}
            <View className="flex-1 items-center justify-center gap-4 px-8">
                <View className="h-16 w-16 items-center justify-center rounded-2xl border border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-primary-900/40">
                    <Ionicons name="book-outline" size={32} color="#16B78E" />
                </View>
                <Text className="text-center font-english-semibold text-h2 text-primary-800 dark:text-primary-100">
                    Lesson content coming soon
                </Text>
                <Text className="text-center font-english text-body-sm text-neutral-600 dark:text-neutral-400">
                    Dars {darsNumber} of {chapterTitleEn} will appear here.
                </Text>
            </View>
        </View>
    );
};

import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text, View } from 'react-native';

type HomeScreenProps = {
  navigation: {
    navigate: (screen: 'VolumeOne') => void;
  };
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View className="flex-1 gap-5 bg-neutral-50 px-6 py-8 dark:bg-neutral-900">
      <View className="gap-2">
        <Text className="font-english-semibold text-display text-primary-800 dark:text-primary-200">
          Quranic Arabic
        </Text>
        <Text className="font-english text-body text-neutral-700 dark:text-neutral-200">
          Select a volume to continue learning.
        </Text>
      </View>

      <View className="gap-3">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open Volume 1"
          onPress={() => navigation.navigate('VolumeOne')}
          className="w-full rounded-2xl border border-primary-200 bg-primary-50 p-5 dark:border-primary-700 dark:bg-primary-900/30">
          <Text className="font-english-semibold text-h2 text-primary-800 dark:text-primary-100">
            Volume 1
          </Text>
          <Text className="mt-2 font-english text-body-sm text-primary-700 dark:text-primary-200">
            Available now
          </Text>
        </Pressable>

        <View className="w-full flex-row items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-100 p-5 dark:border-neutral-700 dark:bg-neutral-800">
          <View>
            <Text className="font-english-semibold text-h2 text-neutral-700 dark:text-neutral-200">
              Volume 2
            </Text>
            <Text className="mt-2 font-english text-body-sm text-neutral-600 dark:text-neutral-300">
              Locked
            </Text>
          </View>
          <Ionicons name="lock-closed" size={20} color="#7D7463" />
        </View>

        <View className="w-full flex-row items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-100 p-5 dark:border-neutral-700 dark:bg-neutral-800">
          <View>
            <Text className="font-english-semibold text-h2 text-neutral-700 dark:text-neutral-200">
              Volume 3
            </Text>
            <Text className="mt-2 font-english text-body-sm text-neutral-600 dark:text-neutral-300">
              Locked
            </Text>
          </View>
          <Ionicons name="lock-closed" size={20} color="#7D7463" />
        </View>
      </View>
    </View>
  );
};

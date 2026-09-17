import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

type HomeScreenProps = {
  navigation: {
    navigate: (screen: 'VolumeOne' | 'VolumeTwo' | 'VolumeThree') => void;
  };
};

type VolumeKey = 'VolumeOne' | 'VolumeTwo' | 'VolumeThree';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  const VOLUMES: { key: VolumeKey; titleKey: string; subtitleKey: string; locked: boolean }[] = [
    { key: 'VolumeOne',   titleKey: 'home.volume1', subtitleKey: 'home.volume1Subtitle', locked: false },
    { key: 'VolumeTwo',   titleKey: 'home.volume2', subtitleKey: 'home.volume2Subtitle', locked: false },
    { key: 'VolumeThree', titleKey: 'home.volume3', subtitleKey: 'home.volume3Subtitle', locked: false },
  ];

  return (
    <View className="flex-1 gap-5 bg-white px-6 py-8 dark:bg-neutral-950">
      <View className="gap-2">
        <Text className="font-english-semibold text-display text-neutral-900 dark:text-neutral-100">
          {t('home.title')}
        </Text>
        <Text className="font-english text-body text-neutral-500 dark:text-neutral-400">
          {t('home.subtitle')}
        </Text>
      </View>

      <View className="gap-3">
        {VOLUMES.map((vol) => {
          if (vol.locked) {
            return (
              <View
                key={vol.key}
                className="w-full flex-row items-center justify-between rounded-2xl bg-neutral-100 p-5 dark:bg-neutral-900">
                <View className="gap-1">
                  <Text className="font-english-semibold text-h2 text-neutral-400 dark:text-neutral-500">
                    {t(vol.titleKey)}
                  </Text>
                  <Text className="font-english text-body-sm text-neutral-400 dark:text-neutral-600">
                    {t('home.locked')}
                  </Text>
                </View>
                <Ionicons name="lock-closed" size={18} color="#737373" />
              </View>
            );
          }
          return (
            <Pressable
              key={vol.key}
              accessibilityRole="button"
              onPress={() => navigation.navigate(vol.key)}
              className="w-full rounded-2xl bg-neutral-100 p-5 active:opacity-70 dark:bg-neutral-900">
              <Text className="font-english-semibold text-h2 text-neutral-900 dark:text-neutral-100">
                {t(vol.titleKey)}
              </Text>
              <Text className="mt-1 font-english text-body-sm text-neutral-500 dark:text-neutral-400">
                {t(vol.subtitleKey)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

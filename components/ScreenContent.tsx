import React from 'react';
import { ScrollView, Text, View } from 'react-native';

interface ScreenContentProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const ScreenContent: React.FC<ScreenContentProps> = ({ title, subtitle, children }) => {
  return (
    <ScrollView
      className="flex-1 bg-neutral-50 dark:bg-neutral-900"
      contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 32, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}>
      <View className={styles.container}>
        <View className={styles.headerRow}>
          <View className={styles.headerTextWrap}>
            <Text className={styles.title}>{title}</Text>
            <Text className={styles.subtitle}>{subtitle}</Text>
            <Text className={styles.arabicSubtitle}>تعلّم العربية القرآنية خطوة بخطوة</Text>
          </View>
        </View>

        <View className={styles.arabicDemoWrap}>
          <Text className={styles.arabicDemoLabel}>Arabic Bold Demo</Text>
          <Text className={styles.arabicDemoText}>ٱلْعَرَبِيَّةُ الْقُرْآنِيَّةُ</Text>
        </View>

        <View className={styles.panel}>
          <Text className={styles.panelTitle}>Design System Locked</Text>
          <Text className={styles.panelText}>Two-color system: primary + neutral shades only.</Text>
          <Text className={styles.panelText}>
            No shadows, no harsh saturation, minimal spacing rhythm.
          </Text>
          <Text className={styles.panelText}>
            Status colors are reserved for success/warning/error/info only.
          </Text>
        </View>

        <View className={styles.panel}>
          <Text className={styles.panelTitle}>Theme</Text>
          <Text className={styles.panelText}>
            Default is Light. Users can switch to Dark from the top-right toggle.
          </Text>
        </View>

        {children}
      </View>
    </ScrollView>
  );
};

const styles = {
  container: `gap-5`,
  headerRow: `flex-row items-start justify-between gap-4`,
  headerTextWrap: `flex-1 gap-2`,
  title: `font-english-semibold text-display text-primary-800 dark:text-primary-200`,
  subtitle: `font-english-medium text-body text-neutral-700 dark:text-neutral-200`,
  arabicSubtitle: `font-arabic text-arabic-body text-primary-700 dark:text-primary-300`,
  arabicDemoWrap:
    'rounded-2xl border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/30 p-5 gap-2',
  arabicDemoLabel: `font-english-medium text-caption uppercase tracking-[0.6px] text-primary-700 dark:text-primary-200`,
  arabicDemoText:
    'text-right font-arabic-semibold text-arabic-display text-primary-800 dark:text-primary-100',
  panel: `rounded-2xl border border-neutral-200 bg-neutral-100 p-4 gap-2 dark:border-neutral-700 dark:bg-neutral-800`,
  panelTitle: `font-english-semibold text-h2 text-primary-700 dark:text-primary-200`,
  panelText: `font-english text-body-sm text-neutral-700 dark:text-neutral-200`,
};

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './HomeScreen';
import { LessonScreen } from './LessonScreen';
import { VolumeOneScreen } from './VolumeOneScreen';

export type HomeStackParamList = {
  HomeMain: undefined;
  VolumeOne: undefined;
  Lesson: {
    chapterTitleAr: string;
    chapterTitleEn: string;
    darsNumber: number;
  };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="VolumeOne" component={VolumeOneScreen} />
      <HomeStack.Screen name="Lesson" component={LessonScreen} />
    </HomeStack.Navigator>
  );
};

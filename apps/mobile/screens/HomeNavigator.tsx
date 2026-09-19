import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './HomeScreen';
import { LessonScreen } from './LessonScreen';
import { VolumeOneScreen } from './VolumeOneScreen';
import { VolumeTwoScreen } from './VolumeTwoScreen';
import { VolumeThreeScreen } from './VolumeThreeScreen';
import { ChunkEngineScreen } from './ChunkEngineScreen';

export type HomeStackParamList = {
  HomeMain: undefined;
  VolumeOne: undefined;
  VolumeTwo: undefined;
  VolumeThree: undefined;
  Lesson: {
    volumeNumber: number;
    chapterId: number;
    chapterTitleAr: string;
    chapterTitleEn: string;
    darsNumber: number;
    autoStart?: boolean;
  };
  ChunkEngine: {
    chunkId: string;
    volumeNumber: number;
    chapterId: number;
    darsNumber: number;
  };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="VolumeOne" component={VolumeOneScreen} />
      <HomeStack.Screen name="VolumeTwo" component={VolumeTwoScreen} />
      <HomeStack.Screen name="VolumeThree" component={VolumeThreeScreen} />
      <HomeStack.Screen name="Lesson" component={LessonScreen} />
      <HomeStack.Screen name="ChunkEngine" component={ChunkEngineScreen} />
    </HomeStack.Navigator>
  );
};

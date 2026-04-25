import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './HomeScreen';
import { VolumeOneScreen } from './VolumeOneScreen';

const HomeStack = createNativeStackNavigator();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="VolumeOne" component={VolumeOneScreen} />
    </HomeStack.Navigator>
  );
};

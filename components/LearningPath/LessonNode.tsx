// components/LearningPath/LessonNode.tsx
import Ionicons from '@expo/vector-icons/Ionicons';
import { MotiView } from 'moti';
import { Pressable, Text, View } from 'react-native';

export type NodeStatus = 'completed' | 'current' | 'open' | 'locked';

type Props = {
  number: number;
  status: NodeStatus;
  // face / shadow colors passed in from volume screen
  faceColor: string;
  shadowColor: string;
  textColor: string;
  entryDelay?: number;
  onPress?: () => void;
};

export const LessonNode: React.FC<Props> = ({
  number,
  status,
  faceColor,
  shadowColor,
  textColor,
  entryDelay = 0,
  onPress,
}) => {
  const SIZE = 72;
  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';
  const canPress = !isLocked && !!onPress;

  return (
    <MotiView
      from={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', delay: entryDelay, damping: 20, stiffness: 250 }}
      style={{ flexShrink: 0 }}>
      <Pressable
        onPress={canPress ? onPress : undefined}
        disabled={!canPress}
        style={{ width: SIZE, height: SIZE + 6, justifyContent: 'flex-end' }}>
        {({ pressed }) => {
          const pushDepth = pressed && canPress ? 0 : -6;
          return (
            <View style={{ width: SIZE, height: SIZE + 6, justifyContent: 'flex-end' }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: SIZE,
                  height: SIZE + (pressed && canPress ? 0 : 6),
                  borderRadius: SIZE / 2,
                  backgroundColor: shadowColor,
                }}
              />
              <View
                style={{
                  width: SIZE,
                  height: SIZE,
                  borderRadius: SIZE / 2,
                  backgroundColor: faceColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: [{ translateY: pushDepth }],
                }}>
                {isLocked ? (
                  <Ionicons name="lock-closed" size={24} color={textColor} />
                ) : isCompleted ? (
                  <Ionicons name="checkmark" size={30} color={textColor} />
                ) : (
                  <Text
                    style={{
                      fontFamily: 'Lexend_600SemiBold',
                      fontSize: 24,
                      color: textColor,
                      lineHeight: 30,
                    }}>
                    {number}
                  </Text>
                )}
              </View>
            </View>
          );
        }}
      </Pressable>
    </MotiView>
  );
};

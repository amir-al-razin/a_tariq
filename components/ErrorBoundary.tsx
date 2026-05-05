import React from 'react';
import { View, Text, Pressable } from 'react-native';

type State = { hasError: boolean; message: string };

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onReset?: () => void },
  State
> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <Text style={{ fontSize: 48, marginBottom: 16 }}>🧩</Text>
          <Text
            style={{
              fontFamily: 'Lexend_600SemiBold',
              fontSize: 18,
              color: '#1A1815',
              textAlign: 'center',
              marginBottom: 8,
            }}>
            Something went wrong
          </Text>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: '#9A8F7B',
              textAlign: 'center',
              marginBottom: 24,
            }}>
            {this.state.message}
          </Text>
          <Pressable
            onPress={this.props.onReset}
            style={{
              backgroundColor: '#16B78E',
              paddingHorizontal: 32,
              paddingVertical: 14,
              borderRadius: 12,
            }}>
            <Text style={{ color: '#fff', fontFamily: 'Lexend_600SemiBold' }}>Go Back</Text>
          </Pressable>
        </View>
      );
    }
    return this.props.children;
  }
}

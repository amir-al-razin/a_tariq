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
              color: '#171717',
              textAlign: 'center',
              marginBottom: 8,
            }}>
            Something went wrong
          </Text>
          <Text
            style={{
              fontFamily: 'Lexend_400Regular',
              fontSize: 14,
              color: '#737373',
              textAlign: 'center',
              marginBottom: 24,
            }}>
            {this.state.message}
          </Text>
          <Pressable
            onPress={this.props.onReset}
            style={{
              backgroundColor: '#4338CA',
              paddingHorizontal: 32,
              height: 56,
              borderRadius: 9999,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#fff', fontFamily: 'Lexend_600SemiBold', fontSize: 16 }}>
              Go Back
            </Text>
          </Pressable>
        </View>
      );
    }
    return this.props.children;
  }
}

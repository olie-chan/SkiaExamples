import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const SPACE = 12;
export function Switcher() {
  const height = useSharedValue(0);
  const leftWidth = useSharedValue(0);
  const rightWidth = useSharedValue(0);

  const thumbRStyle = useAnimatedStyle(() => {
    return {
      height: height.value - 2,
      width: leftWidth.value + 2 * SPACE,
    };
  });

  // const gesture = Gesture()
  return (
    <View style={styles.container}>
      <GestureDetector>
        <Animated.View
          style={[
            {
              borderWidth: 1,
              borderColor: 'black',
              padding: SPACE,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}
          onLayout={({nativeEvent}) => {
            height.value = nativeEvent.layout.height;
          }}>
          <Animated.View
            style={[
              {
                position: 'absolute',
                backgroundColor: 'yellow',
                borderWidth: 1,
                borderColor: 'black',
              },
              thumbRStyle,
            ]}
          />
          <View
            onLayout={({nativeEvent}) => {
              leftWidth.value = nativeEvent.layout.width;
            }}>
            <Text>Option 1</Text>
          </View>
          <View style={{width: 2 * SPACE}} />
          <View
            onLayout={({nativeEvent}) => {
              rightWidth.value = nativeEvent.layout.width;
            }}>
            <Text>Option 2</Text>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

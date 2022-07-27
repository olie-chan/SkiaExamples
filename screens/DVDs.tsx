import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {DVDIcon} from '../components/DVDIcon';

const ICON_SIZE = 120;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const MAX_X = SCREEN_WIDTH - ICON_SIZE;
const MAX_Y = SCREEN_HEIGHT - ICON_SIZE;
const FACTOR = MAX_Y / MAX_X;
const DURATION = 2000;

const colors = [
  '#eb0909',
  '#ebe309',
  '#54eb09',
  '#09ebeb',
  '#1109eb',
  '#b209eb',
];

export function DVDs() {
  const [colorIndex, setColorIndex] = useState(0);
  const color = colors[colorIndex];
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => {
    const left = interpolate(x.value, [0, 1], [0, MAX_X]);
    const top = interpolate(y.value, [0, 1], [0, MAX_Y]);

    return {
      left,
      top,
    };
  });
  const toggleColor = useCallback(
    () => setColorIndex(prev => (prev + 1) % colors.length),
    [],
  );
  useEffect(() => {
    x.value = withRepeat(
      withTiming(1, {duration: DURATION, easing: Easing.linear}, () =>
        runOnJS(toggleColor)(),
      ),
      -1,
      true,
    );
    y.value = withRepeat(
      withTiming(1, {duration: DURATION * FACTOR, easing: Easing.linear}, () =>
        runOnJS(toggleColor)(),
      ),
      -1,
      true,
    );
  }, [x, y, toggleColor]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: ICON_SIZE,
            height: ICON_SIZE,
            position: 'absolute',
            top: 0,
            left: 0,
          },
          rStyle,
        ]}>
        <DVDIcon fill={color} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

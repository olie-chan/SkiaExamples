import {translate} from '@shopify/react-native-skia';
import React, {useCallback, useEffect} from 'react';
import {View, StyleSheet, Dimensions, LayoutChangeEvent} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
// import {DVDIcon} from '../components/DVDIcon';

const ICON_SIZE = 60;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const MAX_X = SCREEN_WIDTH - ICON_SIZE;
const MAX_Y = SCREEN_HEIGHT - ICON_SIZE;
const FACTOR = MAX_Y / MAX_X;
const DURATION = 2000;

export function DVDs() {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const screenHeight = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => {
    const left = interpolate(x.value, [0, 1], [0, SCREEN_WIDTH - ICON_SIZE]);
    const top = interpolate(y.value, [0, 1], [0, SCREEN_HEIGHT - ICON_SIZE]);

    return {
      left,
      top,
    };
  });
  useEffect(() => {
    x.value = withRepeat(
      withTiming(1, {duration: DURATION, easing: Easing.linear}),
      -1,
      true,
    );
    y.value = withRepeat(
      withTiming(1, {duration: DURATION * FACTOR, easing: Easing.linear}),
      -1,
      true,
    );
  }, [x, y]);

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      screenHeight.value = e.nativeEvent.layout.height;
    },
    [screenHeight],
  );

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Animated.View
        style={[
          {
            width: ICON_SIZE,
            height: ICON_SIZE,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            left: 0,
          },
          rStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

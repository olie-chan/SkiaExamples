import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {BackgroundGradient} from './components/BackgroundGradient';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

// From this tutorial https://www.youtube.com/watch?v=pVesCl7TY8A
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const HEIGHT = 250;
const WIDTH = SCREEN_WIDTH * 0.9;
const CARD_HEIGHT = HEIGHT - 5;
const CARD_WIDTH = WIDTH - 5;

function App() {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onBegin(ev => {
      rotateX.value = withTiming(
        interpolate(ev.y, [0, CARD_HEIGHT], [10, -10], Extrapolate.CLAMP),
      );
      rotateY.value = withTiming(
        interpolate(ev.x, [0, CARD_WIDTH], [-10, 10], Extrapolate.CLAMP),
      );
    })
    .onUpdate(ev => {
      rotateX.value = interpolate(
        ev.y,
        [0, CARD_HEIGHT],
        [10, -10],
        Extrapolate.CLAMP,
      );
      rotateY.value = interpolate(
        ev.x,
        [0, CARD_WIDTH],
        [-10, 10],
        Extrapolate.CLAMP,
      );
    })
    .onFinalize(() => {
      rotateX.value = withTiming(0);
      rotateY.value = withTiming(0);
    })
    .onEnd(() => {
      rotateX.value = withTiming(0);
      rotateY.value = withTiming(0);
    });

  const rStyle = useAnimatedStyle(() => {
    const rotateXValue = `${rotateX.value}deg`;
    const rotateYValue = `${rotateY.value}deg`;

    return {
      transform: [
        {
          perspective: 300,
        },
        {
          rotateY: rotateYValue,
        },
        {
          rotateX: rotateXValue,
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <BackgroundGradient width={WIDTH} height={HEIGHT} />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.card, rStyle]}>
          <CardDecorations />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const CardDecorations = () => (
  <View style={styles.cardDecorationsContainer}>
    <View style={styles.cardCircle} />
    <View style={styles.cardRowContainer}>
      <View style={styles.cardRow} />
      <View style={styles.cardRow} />
    </View>
    <View />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 20,
    zIndex: 300,
  },
  cardDecorationsContainer: {
    position: 'absolute',
    bottom: '10%',
    left: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRow: {
    width: 100,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#757474',
  },
  cardRowContainer: {
    justifyContent: 'space-between',
    height: 45,
    paddingLeft: 8,
  },
  cardCircle: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: '#757474',
  },
});

export default () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <App />
  </GestureHandlerRootView>
);

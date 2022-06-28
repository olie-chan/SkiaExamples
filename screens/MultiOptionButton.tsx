import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';

const OFFSET = 4;
const MAX_TRANSLATE = 120;
const ANGLE = 60;

/**
 *
 * https://www.patreon.com/posts/fabicon-multi-62249011
 */
export function MultiOptionButton() {
  const isActive = useSharedValue(0);
  const rotateStyle = useAnimatedStyle(() => {
    const rotate = `${interpolate(isActive.value, [0, 1], [0, -45])}deg`;
    return {
      transform: [
        {
          rotate,
        },
      ],
    };
  });

  const redTranslateStyle = useTranslateOptionButtonStyle(isActive, ANGLE);
  const greenTranslateStyle = useTranslateOptionButtonStyle(isActive, 0);
  const orangeTranslateStyle = useTranslateOptionButtonStyle(isActive, -ANGLE);

  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={[styles.optionButtonContainer, redTranslateStyle]}>
          <OptionButton onPress={() => {}} color="red">
            <Icon name="youtube" color="white" size={30} />
          </OptionButton>
        </Animated.View>
        <Animated.View
          style={[styles.optionButtonContainer, greenTranslateStyle]}>
          <OptionButton onPress={() => {}} color="green">
            <Icon name="reload1" color="white" size={30} />
          </OptionButton>
        </Animated.View>
        <Animated.View
          style={[styles.optionButtonContainer, orangeTranslateStyle]}>
          <OptionButton onPress={() => {}} color="orange">
            <Icon name="amazon" color="white" size={30} />
          </OptionButton>
        </Animated.View>

        <OptionButton
          onPress={() => (isActive.value = withSpring(isActive.value ? 0 : 1))}
          color="black">
          <Animated.View style={rotateStyle}>
            <Icon name="plus" color="white" size={30} />
          </Animated.View>
        </OptionButton>
      </View>
    </View>
  );
}

function useTranslateOptionButtonStyle(
  isActive: SharedValue<number>,
  angleInDegrees: number,
) {
  return useAnimatedStyle(() => {
    const translateY = interpolate(
      isActive.value,
      [0, 1],
      [-OFFSET, -MAX_TRANSLATE],
    );
    return {
      transform: [
        {
          rotate: `${angleInDegrees}deg`,
        },
        {
          translateY,
        },
        {
          rotate: `${-angleInDegrees}deg`,
        },
      ],
    };
  });
}

type OptionButtonProps = {
  color: string;
  size?: number;
  onPress: () => void;
  children: React.ReactNode;
};
function OptionButton({
  color,
  size = 64,
  onPress,
  children,
}: OptionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: color, height: size, borderRadius: size / 2},
      ]}>
      {children}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButtonContainer: {
    position: 'absolute',
  },
  button: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  size?: number;
};
export function Spacer({size = 8}: SpacerProps) {
  return <View style={{height: size}} />;
}

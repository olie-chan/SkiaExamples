import React, {useMemo} from 'react';
import {
  Box,
  BoxShadow,
  Canvas,
  Fill,
  rect,
  rrect,
  vec,
} from '@shopify/react-native-skia';
import {useWindowDimensions} from 'react-native';

export function Neumorphism() {
  const {width} = useWindowDimensions();

  const rct = useMemo(() => {
    const r = 150;
    const c = vec(width / 2, r);
    return rrect(rect(c.x - r, c.y, 2 * r, 2 * r), 50, 50);
  }, [width]);

  return (
    <Canvas style={{flex: 1}}>
      <Fill color={colours.background} />
      <Box box={rct} color={colours.background}>
        <BoxShadow dx={-10} dy={-10} blur={15} color={colours.lightShadow} />
        <BoxShadow dx={10} dy={10} blur={15} color={colours.darkShadow} />
        {/*  */}
      </Box>
    </Canvas>
  );
}

const colours = {
  background: '#E0E5EC',
  lightShadow: '#FFFFFF',
  darkShadow: '#A3B1C6',
};

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Canvas, Circle, Group } from "@shopify/react-native-skia";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HelloWorld />
    </SafeAreaView>
  );
};


export const HelloWorld = () => {
  const width = 256;
  const height = 256;
  const r = 215;
  return (
    <Canvas style={{ flex: 1 }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={height - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

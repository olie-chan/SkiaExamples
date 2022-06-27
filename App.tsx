import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootStackNavigator} from './navigation';
import {CardPerspective} from './screens/CardPerspective';
import {Home} from './screens/Home';
import {StyleSheet} from 'react-native';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <RootStackNavigator.Navigator>
          <RootStackNavigator.Screen name="Home" component={Home} />
          <RootStackNavigator.Group>
            <RootStackNavigator.Screen
              name="CardPerspective"
              component={CardPerspective}
            />
          </RootStackNavigator.Group>
        </RootStackNavigator.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

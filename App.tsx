import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootStackNavigator} from './navigation';
import {CreditCardPerspective} from './screens/CreditCardPerspective';
import {Home} from './screens/Home';
import {Neumorphism} from './screens/Neumorphism';
import {MultiOptionButton} from './screens/MultiOptionButton';
import {Switcher} from './screens/Switcher';
import {DVDs} from './screens/DVDs';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <RootStackNavigator.Navigator>
          <RootStackNavigator.Screen name="Home" component={Home} />
          <RootStackNavigator.Group>
            <RootStackNavigator.Screen
              name="CreditCardPerspective"
              component={CreditCardPerspective}
            />
            <RootStackNavigator.Screen
              name="Neumorphism"
              component={Neumorphism}
            />
            <RootStackNavigator.Screen
              name="MultiOptionButton"
              component={MultiOptionButton}
            />
            <RootStackNavigator.Screen name="Switcher" component={Switcher} />
            <RootStackNavigator.Screen
              name="DVDs"
              component={DVDs}
              options={{headerShown: false}}
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

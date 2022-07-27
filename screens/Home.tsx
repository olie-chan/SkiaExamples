import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useRootNavigation} from '../navigation';
import {Card} from '../components/Card';
import {Spacer} from '../components/Spacer';

export function Home() {
  const {navigate} = useRootNavigation();
  return (
    <View style={styles.container}>
      <Card
        text="Credit Card Perspective"
        onPress={() => navigate('CreditCardPerspective')}
      />
      <Spacer />
      <Card text="Neumorphism" onPress={() => navigate('Neumorphism')} />
      <Spacer />
      <Card
        text="Multi Option Button"
        onPress={() => navigate('MultiOptionButton')}
      />
      <Spacer />
      <Card text="Switcher" onPress={() => navigate('Switcher')} />
      <Spacer />
      <Card text="DVDs" onPress={() => navigate('DVDs')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
});

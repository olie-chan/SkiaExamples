import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useRootNavigation} from '../navigation';

export function Home() {
  const {navigate} = useRootNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{borderWidth: 1, borderColor: 'black'}}
        onPress={() => navigate('CardPerspective')}>
        <Text>Hello world</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

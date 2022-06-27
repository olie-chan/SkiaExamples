import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useRootNavigation} from '../navigation';
import Icon from 'react-native-vector-icons/AntDesign';

export function Home() {
  const {navigate} = useRootNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigate('CardPerspective')}>
        <Text style={styles.cardText}>Card Perspective</Text>
        <Icon name="right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
  card: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
  },
});

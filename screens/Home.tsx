import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useRootNavigation} from '../navigation';
import Icon from 'react-native-vector-icons/AntDesign';

export function Home() {
  const {navigate} = useRootNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{borderWidth: 1, borderColor: 'black', padding: 12}}
        onPress={() => navigate('CardPerspective')}>
        <Text
          style={{
            fontSize: 16,
          }}>
          Card Perspective
          <Icon name="stepforward" size={30} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

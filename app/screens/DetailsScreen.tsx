import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styelSheet.container}>
      <Text>Details Screen</Text>
    </View>
  );
};
const styelSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;

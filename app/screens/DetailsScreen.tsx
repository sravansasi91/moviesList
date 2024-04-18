import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';

const DetailsScreen = ({route}: any) => {
  // Extract the item data passed from the previous screen
  const {item} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FastImage
        style={styles.poster}
        source={{uri: item['#IMG_POSTER']}}
        resizeMode="cover"
      />
      <Text style={styles.heading}>{item['#TITLE']}</Text>
      <Text style={styles.description}>{item['#DESCRIPTION']}</Text>
      <Text style={styles.subHeading}>Actors:</Text>
      <Text style={styles.text}>{item['#ACTORS']}</Text>

      <View style={styles.reviewContainer}>
        <View style={styles.reviewRow}>
          <Text style={styles.reviewHeading}>Review: </Text>
          <Text style={styles.reviewValue}>{item['#RANK']}</Text>
        </View>
      </View>

      <View style={styles.reviewContainer}>
        <View style={styles.reviewRow}>
          <Text style={styles.reviewHeading}>Keywords: </Text>
          <Text style={styles.reviewValue}>{item['#AKA']}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    paddingVertical: 20,
  },
  poster: {
    height: '60%',
    width: '60%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 10,
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  sameLine: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
  },
  reviewHeading: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  reviewContainer: {
    marginTop: 10,
  },
  reviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewValue: {
    fontSize: 14,
  },
});

export default DetailsScreen;

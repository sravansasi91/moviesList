import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import fetchMoviesData from '../services/ApiServiceCall';

const HomeScreen = ({navigation}: any) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchMovieData();
  }, []);

  console.log('movieData fetch-------', movieData);

  const fetchMovieData = async () => {
    try {
      const data = await fetchMoviesData('');
      console.log('movieData fetch-------', movieData);
      setMovieData(data.description);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <View style={styelSheet.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styelSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default HomeScreen;

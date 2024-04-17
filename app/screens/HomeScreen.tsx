import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {fetchMoviesData} from '../services/ApiServiceCall';
import {Searchbar} from '../components/SearchBar';
import {MoviesListView} from '../components/MoviesListView';

const HomeScreen = ({navigation}: any) => {
  const [movieData, setMovieData] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    fetchMovieData(searchKey);
  }, []);

  useEffect(() => {
    fetchMovieData(searchKey);
  }, [searchKey]);

  const fetchMovieData = async (searchKey: string) => {
    try {
      const data = await fetchMoviesData(searchKey);
      setMovieData(data?.description);
    } catch ({error}: any) {
      // Handle error
      setError(error);
    }
  };

  const updateSearch = (searchText: string) => {
    setSearchKey(searchText);
  };

  return (
    <View style={styelSheet.container}>
      <Searchbar
        value={searchKey}
        updateSearch={updateSearch}
        style={styelSheet.searchBar}
      />
      <MoviesListView itemList={movieData}></MoviesListView>
      {error && <Text style={styelSheet.txtError}>{error}</Text>}
    </View>
  );
};

// Styles for the screen
const styelSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    marginTop: '2%',
    marginBottom: '2%',
  },
  txtError: {
    marginTop: '2%',
    color: 'red',
  },
});

export default HomeScreen;

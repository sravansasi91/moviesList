import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export const Searchbar = ({value, updateSearch, style}: any) => {
  const [query, setQuery] = useState('');

  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Image
            style={styles.icSearch}
            source={require('../assets/icons-search.png')}
          />
        </View>
        <TextInput
          value={query}
          placeholder="Search"
          style={styles.textInput}
          onChangeText={text => {
            setQuery(text);
            updateSearch(text);
          }}
        />
        {query ? (
          <TouchableOpacity onPress={() => setQuery('')} style={styles.vwClear}>
            <Image
              style={styles.icClear}
              source={require('../assets/icons-cancel.png')}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.vwClear} />
        )}
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  vwClear: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icSearch: {
    height: 24,
    width: 24,
  },
  searchContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    flexDirection: 'row',
  },
  container: {
    height: 40,
    alignItems: 'center',
  },
  icClear: {
    height: 26,
    width: 26,
  },
});

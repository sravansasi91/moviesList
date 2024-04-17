import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Define the interface
interface IParams {
  itemList: any;
}

const {width} = Dimensions.get('window');
const equalWidth = width / 2;

// Functional component to render a list of movies
export const MoviesListView = ({itemList}: IParams) => {
  const navigation = useNavigation();
  const _keyExtractor = (item: any) => item['#IMDB_ID'];
  const renderRowItem = ({item}: {item: any}) => {
    const handleItemPress = () => {
      // Navigate to another screen, passing the item data
      navigation.navigate('Details', {item});
    };
    return (
      <TouchableOpacity style={styles.cardStyle} onPress={handleItemPress}>
        <Image
          style={styles.poster}
          source={{uri: item['#IMG_POSTER']}}
          resizeMode="cover"
        />
        <Text style={styles.heading}>{item['#TITLE']}</Text>
      </TouchableOpacity>
    );
  };

  // Limit the list to display only the first 10 items
  const limitedItemList = itemList.slice(0, 10);

  return (
    <View style={styles.container}>
      <FlatList
        data={limitedItemList}
        numColumns={2}
        keyExtractor={_keyExtractor}
        renderItem={renderRowItem}
      />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  cardStyle: {
    padding: 10,
    width: equalWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    height: 250,
    width: equalWidth - 20,
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
});

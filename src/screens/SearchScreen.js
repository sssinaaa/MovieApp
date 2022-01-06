import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useFetchSearchMoviesQuery} from '../redux/features/movieApiSlice';

const SearchScreen = () => {
  const [text, setText] = useState();

  const {data, status} = useFetchSearchMoviesQuery(text);

  const onChangeText = input => {
    setText(input);
  };

  const renderSearch = searchResults => (
    <View style={styles.resultsWrapper}>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 12,
        }}>
        <Image
          style={{width: 120, height: 200}}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${searchResults.item.poster_path}`,
          }}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchInputWrapper}>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={text}
          placeholder="Discover"
        />
      </View>

      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>TV Shows</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Movies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>People</Text>
          </View>
        </TouchableOpacity>
      </View>
      {text ? null : (
        <View style={styles.titleWrapper}>
          <Text>Search</Text>
        </View>
      )}

      {text ? (
        <View style={styles.titleWrapper}>
          <Text>Results</Text>
        </View>
      ) : null}
      {status === 'fulfilled' ? (
        <View style={styles.flatlistWrapper}>
          <FlatList
            data={data.results}
            renderItem={renderSearch}
            numColumns={3}
          />
        </View>
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInputWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#ccc',
    borderRadius: 30,
    width: '90%',
    height: 40,
    padding: 10,
  },
  resultsWrapper: {
    padding: 5,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  buttonView: {},
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

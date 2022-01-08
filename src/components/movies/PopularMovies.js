import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {useFetchPopularMoviesQuery} from '../../redux/features/movieApiSlice';

const PopularMovies = ({navigation}) => {
  const {data, error, isLoading} = useFetchPopularMoviesQuery();

  const renderMovies = movies => {
    return (
      <View style={{flex: 1, marginHorizontal: 10}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MovieDetailScreen', {
              id: movies.item.id,
              navigation: navigation,
            })
          }>
          <ImageBackground
            style={{width: 140, height: 235, borderRadius: 100}}
            imageStyle={{borderRadius: 20}}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movies.item.poster_path}`,
            }}></ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Movies</Text>
      <FlatList
        data={data.results}
        renderItem={renderMovies}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
    color: '#fff',
  },
  imageTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    marginTop: 140,
    backgroundColor: '#00000080',
  },
  imageText: {
    color: '#fff',
    fontWeight: '500',
  },
  rateContainer: {
    width: 25,
    height: 25,
    borderRadius: 12,
    marginLeft: 110,
    marginTop: 5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rate: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

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

import {useSelector, useDispatch} from 'react-redux';
import {fetchPopularMovies} from '../../store/popularMovies/popularActions';

const PopularMovies = () => {
  const popularMovies = useSelector(
    state => state.popularMovies.popularMovies.results,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const renderMovies = movies => {
    return (
      <View style={{flex: 1, marginHorizontal: 10}}>
        <TouchableOpacity>
          <ImageBackground
            style={{width: 140, height: 235, borderRadius: 10}}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movies.item.backdrop_path}`,
            }}>
            <View style={styles.rateContainer}>
              <Text style={styles.rate}>{movies.item.vote_average}</Text>
            </View>
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageText}>
                {movies.item.release_date.substr(0, 4)}
              </Text>
              <Text style={styles.imageText}>{movies.item.original_title}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.heading}>Popular Movies</Text>
      <FlatList
        data={popularMovies}
        renderItem={renderMovies}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
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

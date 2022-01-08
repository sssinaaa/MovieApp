import React, {useEffect, useRef} from 'react';
import {useScrollToTop} from '@react-navigation/native';
import {StyleSheet, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import MovieGenreList from '../components/movies/MovieGenreList';
import PopularMovies from '../components/movies/PopularMovies';
import PopularSeries from '../components/series/PopularSeries';
import SeriesGenreList from '../components/series/SeriesGenreList';
import Trending from '../components/Trending';

import {useIsFocused} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <ScrollView style={styles.container} ref={ref}>
      {isFocused && <StatusBar barStyle="light-content" />}
      <PopularMovies navigation={navigation} />
      <PopularSeries navigation={navigation} />
      <MovieGenreList />
      <SeriesGenreList />
      <Trending navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

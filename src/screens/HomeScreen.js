import React, {useEffect, useRef} from 'react';
import {useScrollToTop} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import MovieGenreList from '../components/movies/MovieGenreList';
import PopularMovies from '../components/movies/PopularMovies';
import PopularSeries from '../components/series/PopularSeries';
import SeriesGenreList from '../components/series/SeriesGenreList';
import Trending from '../components/Trending';

const HomeScreen = ({navigation}) => {
  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <ScrollView style={styles.container} ref={ref}>
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
  },
});

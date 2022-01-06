import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MovieGenreList from '../components/MovieGenreList';
import PopularMovies from '../components/movies/PopularMovies';
import News from '../components/News';
import PopularSeries from '../components/series/PopularSeries';
import SeriesGenreList from '../components/SeriesGenreList';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container} alwaysBounceVertical={true}>
      <PopularMovies navigation={navigation} />
      <PopularSeries navigation={navigation} />
      <MovieGenreList />
      <SeriesGenreList />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MovieGenreList from '../components/MovieGenreList';
import PopularMovies from '../components/movies/PopularMovies';
import News from '../components/News';
import PopularSeries from '../components/series/PopularSeries';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PopularMovies navigation={navigation} />
      <PopularSeries navigation={navigation} />
      <MovieGenreList />
      <News />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

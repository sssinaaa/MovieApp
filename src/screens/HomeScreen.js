import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PopularMovies from '../components/movies/PopularMovies';
import PopularSeries from '../components/series/PopularSeries';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PopularMovies navigation={navigation} />
      <PopularSeries navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

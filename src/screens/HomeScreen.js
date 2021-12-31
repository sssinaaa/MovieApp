import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PopularMovies from '../components/movies/PopularMovies';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PopularMovies />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

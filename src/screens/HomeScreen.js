import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchPopularMovies} from '../store/popularMovies/popularActions';

const HomeScreen = ({popularMovieData, fetchPopularMovies}) => {
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    popularMovieData: state.popularMovies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({});

import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchPopularMovies} from '../store/popularMovies/popularActions';

const HomeScreen = ({data, fetchPopularMovies}) => {
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  console.log('popular movies: ', data);
  const renderMovies = ({movies}) => {
    return (
      <View style={{flex: 1}}>
        <Text>{movies}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* <FlatList data={data} renderItem={renderMovies} /> */}
      <Text>Hi</Text>
      {data.popularMovies.results.map(result => (
        <View>
          <Text>{result.overview}</Text>
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    data: state.popularMovies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({});

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  useFetchPersonMoviesQuery,
  useFetchPersonQuery,
} from '../redux/features/castApiSlice';

const CastScreen = ({route}) => {
  const {id} = route.params;

  const {data, status} = useFetchPersonQuery(id);
  const {data: movie, status: movieStatus} = useFetchPersonMoviesQuery(id);

  console.log(movie);

  console.log('person: ', data);
  return status === 'fulfilled' ? (
    <View>
      <Image
        style={{height: 350}}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data.profile_path}`,
        }}
      />
    </View>
  ) : (
    <View>
      <Text>Loading</Text>
    </View>
  );
};

export default CastScreen;

const styles = StyleSheet.create({});

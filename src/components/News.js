import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useFetchNewsQuery} from '../redux/features/newsApiSlice';

const News = () => {
  const {data, status} = useFetchNewsQuery();
  console.log('news data: ', data);

  return status === 'fulfilled' ? (
    <View>
      <FlatList />
    </View>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});

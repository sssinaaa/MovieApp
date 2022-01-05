import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useFetchNewsQuery} from '../redux/features/newsApiSlice';

const News = () => {
  const {data, status} = useFetchNewsQuery();
  console.log('news data: ', useFetchNewsQuery());

  const renderNews = news => (
    <View style={styles.newsBox}>
      <Image style={styles.newsImage} source={{uri: news.item.image_url}} />
      <Text>{news.item.description}</Text>
    </View>
  );

  return status === 'fulfilled' ? (
    <View style={styles.container}>
      <Text style={styles.heading}>News</Text>
      <FlatList data={data.results} renderItem={renderNews} />
    </View>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    padding: 10,
  },
  heading: {
    paddingLeft: 10,
  },
  newsBox: {
    backgroundColor: '#ccc',
    padding: 10,
    margin: 10,
  },
  newsImage: {
    width: '100%',
    height: 150,
  },
});

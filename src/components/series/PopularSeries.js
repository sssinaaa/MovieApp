import React, {useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useFetchPopularSeriesQuery} from '../../redux/features/seriesApiSlice';

const PopularSeries = () => {
  const {data} = useFetchPopularSeriesQuery();
  const popularSeries = data;

  const renderSeries = series => (
    <View style={styles.listContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${series.item.poster_path}`,
        }}></ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Series</Text>
      <FlatList
        data={popularSeries.results}
        renderItem={renderSeries}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularSeries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  backgroundImage: {
    width: 140,
    height: 235,
  },
});

import React, {useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useFetchPopularSeriesQuery} from '../../redux/features/seriesApiSlice';

const PopularSeries = ({navigation}) => {
  const {data, status} = useFetchPopularSeriesQuery();

  const renderSeries = series => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SeriesDetailScreen', {
          seriesId: series.item.id,
        })
      }>
      <View style={styles.listContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{borderRadius: 20}}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${series.item.poster_path}`,
          }}></ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return status === 'pending' ? (
    <View style={{paddingTop: 100}}>
      <Text>Loading</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Series</Text>
      <FlatList
        data={data.results}
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
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  backgroundImage: {
    width: 140,
    height: 235,
  },
});

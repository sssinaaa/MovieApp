import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const API_KEY = '2b1b9079d498141aae5ef2c64397bdbb';
const numColumns = 3;

const Trending = ({navigation}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getUsers = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?page=${page}?&api_key=${API_KEY}`,
      )
      .then(response => {
        console.log('page: ', response.data);
        setData([...data, ...response.data.results]);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigateHandler = trend => {
    if (trend.item.media_type === 'movie') {
      navigation.navigate('MovieDetailScreen', {
        id: trend.item.id,
      });
    } else if (trend.item.media_type === 'tv') {
      navigation.navigate('SeriesDetailScreen', {
        seriesId: trend.item.id,
      });
    }
  };

  const renderTrends = trend => (
    <TouchableOpacity
      style={styles.trendsContainer}
      onPress={() => navigateHandler(trend)}>
      <View>
        <Image
          style={{width: 120, height: 200}}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${trend.item.poster_path}`,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  const renderLoader = () => (
    <View>
      <ActivityIndicator size="large" color="#aaa" />
    </View>
  );

  const loadMoreItem = () => {
    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending</Text>

      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <FlatList
          data={data}
          renderItem={renderTrends}
          numColumns={numColumns}
          // keyExtractor={item => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      </View>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  trendsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

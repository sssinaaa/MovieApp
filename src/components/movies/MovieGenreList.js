import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useFetchMovieGenreQuery} from '../../redux/features/genreApiSlice';
import {useFetchDiscoverMoviesQuery} from '../../redux/features/movieApiSlice';

const MovieGenreList = () => {
  const [selected, setIsSelected] = useState(false);
  const [index, setIndex] = useState(28);
  const [genre, setGenre] = useState();
  const {data, status} = useFetchMovieGenreQuery();
  const {
    data: discover,
    status: discoverStatus,
    refetch,
  } = useFetchDiscoverMoviesQuery(genre);

  // console.log('data: ', discover);

  // console.log('query: ', useFetchDiscoverMoviesQuery(10752));

  // console.log('genre', genre);

  // console.log(index);

  const renderDiscover = discover => (
    <View style={styles.discoverResults}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${discover.item.backdrop_path}`,
        }}
      />
    </View>
  );

  const toggleDisplay =
    discoverStatus === 'fulfilled' ? (
      <View style={{flex: 1}}>
        <FlatList
          data={discover.results}
          renderItem={renderDiscover}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    ) : (
      <View>
        <Text>Loading</Text>
      </View>
    );

  const genreHandler = id => {
    setIsSelected(true);
    setIndex(id);
    setGenre(id);
  };

  const renderGenres = genre => (
    <TouchableOpacity onPress={() => genreHandler(genre.item.id)}>
      <View
        style={[
          styles.genreContainer,
          {
            backgroundColor: genre.item.id === index ? 'gold' : '#e11b38',
          },
        ]}>
        <Text
          style={{
            color: genre.item.id === index ? '#000' : '#fff',
            fontWeight: 'bold',
          }}>
          {genre.item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return status === 'fulfilled' ? (
    <View style={styles.container}>
      <Text style={styles.heading}>Discover Movies By Genre</Text>

      <View style={styles.genreFlatlist}>
        <FlatList
          data={data.genres}
          renderItem={renderGenres}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>{toggleDisplay}</View>
    </View>
  ) : (
    <View>
      <Text>Loading</Text>
    </View>
  );
};

export default MovieGenreList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    paddingLeft: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  genreFlatlist: {
    marginVertical: 20,
  },
  genreContainer: {
    backgroundColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 235,
    borderRadius: 20,
    marginRight: 20,
  },
  discoverResults: {},
});

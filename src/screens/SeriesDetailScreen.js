import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useFetchDetailSeriesQuery} from '../redux/features/seriesApiSlice';

const SeriesDetailScreen = ({route}) => {
  const {seriesId} = route.params;

  const {data: seriesDetails, status} = useFetchDetailSeriesQuery(seriesId);

  console.log(useFetchDetailSeriesQuery());
  console.log(seriesId);
  console.log('series details: ', seriesDetails);

  return status == 'fulfilled' ? (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${seriesDetails.backdrop_path}`,
        }}>
        <View style={styles.imageDetailsContainer}>
          <Text style={styles.title}>{seriesDetails.original_title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <Text>{seriesDetails.vote_average}</Text>
      </View>
      <View style={styles.genreContainer}>
        {seriesDetails.genres.map((genre, idx) => (
          <View key={idx} style={styles.genre}>
            <Text style={styles.genreText}>{genre.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.overview}>{seriesDetails.overview}</Text>
      </View>
      {/* <View style={{flex: 1}}>
        {creditStatus === 'pending' ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : (
          <FlatList
            data={movieCredits.cast}
            renderItem={renderCredits}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View> */}
    </ScrollView>
  ) : (
    <View style={{paddingTop: 100}}>
      <Text>Loading</Text>
    </View>
  );
};

export default SeriesDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  imageDetailsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  genre: {
    backgroundColor: '#000',
    borderRadius: 20,
    width: '30%',
    padding: 5,
    marginTop: 10,
  },
  genreText: {
    color: '#fff',
    textAlign: 'center',
  },
  budget: {
    alignItems: 'center',
    marginVertical: 10,
  },
  overviewContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  overview: {
    lineHeight: 20,
  },
  castContainer: {
    marginVertical: 20,
    paddingLeft: 10,
  },
  castAvatar: {
    width: 150,
    height: 250,
  },
  castName: {
    textAlign: 'center',
    padding: 10,
  },
});

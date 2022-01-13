import React from 'react';
import {
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  useFetchDetailScreenQuery,
  useFetchMovieCreditsQuery,
  useFetchMoviesReviewsQuery,
} from '../redux/features/movieApiSlice';
import Reviews from '../components/movies/Reviews';

const MovieDetailScreen = ({route, navigation}) => {
  const isFocused = useIsFocused();

  const {id} = route.params;

  const {data: moviesData, status} = useFetchDetailScreenQuery(id);
  const {data: movieCredits, status: creditStatus} =
    useFetchMovieCreditsQuery(id);

  console.log('movies data:', moviesData);

  let displayBudget;
  if (status === 'fulfilled') {
    const budget = moviesData.budget;

    function numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    displayBudget = numberWithSpaces(budget);
  }

  const renderCredits = credits => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CastScreen', {
          id: credits.item.id,
        })
      }>
      <View style={styles.castContainer}>
        <Image
          style={styles.castAvatar}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${credits.item.profile_path}`,
          }}
        />
        <Text style={styles.castName}>{credits.item.original_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return status == 'fulfilled' ? (
    <ScrollView style={styles.container}>
      {isFocused && <StatusBar barStyle="light-content" />}
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${moviesData.backdrop_path}`,
        }}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.imageDetailsContainer}>
          <Text style={styles.title}>{moviesData.original_title}</Text>
          <SafeAreaView style={styles.genreContainer}>
            {moviesData.genres.map((genre, idx) => (
              <SafeAreaView key={idx} style={styles.genre}>
                <Text style={styles.genreText}>{genre.name}</Text>
              </SafeAreaView>
            ))}
          </SafeAreaView>

          <View style={styles.rateContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.release_date}>
                {moviesData.release_date.substr(0, 4)} |
              </Text>
            </View>
            <AntDesign name="staro" color="gold" size={20} />
            <Text style={styles.rate}>{moviesData.vote_average}</Text>
          </View>

          <View>
            <Text style={styles.runtime}>{moviesData.runtime}m</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.overviewContainer}>
        <Text style={styles.overviewHeader}>Plot Summary</Text>
        <Text style={styles.overview}>{moviesData.overview}</Text>
      </View>
      <View style={{flex: 1}}>
        {creditStatus === 'pending' ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : (
          <SafeAreaView style={{flex: 1}}>
            <Text style={styles.castTitle}>Cast & Crew</Text>
            <FlatList
              data={movieCredits.cast}
              renderItem={renderCredits}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </SafeAreaView>
        )}
      </View>
      {/* <View style={{flex: 1}}>
        <Reviews id={id} />
      </View> */}
    </ScrollView>
  ) : (
    <View style={{paddingTop: 100}}>
      <Text>Loading</Text>
    </View>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    justifyContent: 'flex-end',
  },
  imageDetailsContainer: {
    flex: 1 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  release_date: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  runtime: {
    fontWeight: 'bold',
    color: '#fff',
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
    marginTop: 10,
    padding: 5,
  },
  genreText: {
    color: 'gold',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
  },
  budget: {
    alignItems: 'center',
    marginVertical: 10,
  },
  overviewContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  overviewHeader: {
    margin: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  overview: {
    margin: 10,
    lineHeight: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  castTitle: {
    color: '#fff',
    margin: 20,
    fontWeight: 'bold',
  },
  castContainer: {
    alignItems: 'center',
    margin: 20,
  },
  castAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  castName: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5,
  },
});

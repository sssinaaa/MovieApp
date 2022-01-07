import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import {useFetchDetailScreenQuery} from '../redux/features/movieApiSlice';
import {useFetchMovieCreditsQuery} from '../redux/features/movieApiSlice';

const MovieDetailScreen = ({route}) => {
  const {id} = route.params;

  const {data: moviesData, status} = useFetchDetailScreenQuery(id);
  const {data: movieCredits, status: creditStatus} =
    useFetchMovieCreditsQuery(id);

  console.log(useFetchDetailScreenQuery(id));

  let displayBudget;
  if (status === 'fulfilled') {
    const budget = moviesData.budget;

    function numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    displayBudget = numberWithSpaces(budget);
  }

  const renderCredits = credits => (
    <View style={styles.castContainer}>
      <Image
        style={styles.castAvatar}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${credits.item.profile_path}`,
        }}
      />
      <Text style={styles.castName}>{credits.item.original_name}</Text>
    </View>
  );

  return status == 'fulfilled' ? (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${moviesData.backdrop_path}`,
        }}>
        <View style={styles.imageDetailsContainer}>
          <Text style={styles.title}>{moviesData.original_title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <Text>{moviesData.release_date.substr(0, 4)}</Text>
        <Text>{moviesData.vote_average}</Text>
      </View>
      <View style={styles.genreContainer}>
        {moviesData.genres.map((genre, idx) => (
          <View key={idx} style={styles.genre}>
            <Text style={styles.genreText}>{genre.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.budget}>
        <Text>{displayBudget}</Text>
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.overview}>{moviesData.overview}</Text>
      </View>
      <View style={{flex: 1}}>
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
      </View>
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
    marginTop: 10,
    padding: 5,
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

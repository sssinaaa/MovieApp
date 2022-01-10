import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFetchPersonSeriesQuery} from '../redux/features/castApiSlice';
import {useFetchDetailSeriesQuery} from '../redux/features/seriesApiSlice';

const SeriesDetailScreen = ({route, navigation}) => {
  const {seriesId} = route.params;

  const {data: seriesDetails, status} = useFetchDetailSeriesQuery(seriesId);
  const {data: seriesCredits, status: creditStatus} =
    useFetchPersonSeriesQuery(seriesId);

  console.log('series cerdits: ', seriesCredits);

  console.log(useFetchDetailSeriesQuery());
  console.log(seriesId);
  console.log('series details: ', seriesDetails);

  const renderCredits = credit => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CastScreen', {
          id: credit.item.id,
        })
      }>
      <View style={styles.castContainer}>
        <Image
          style={styles.castAvatar}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${credit.item.profile_path}`,
          }}
        />
        <Text style={styles.castName}>{credit.item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return status == 'fulfilled' ? (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${seriesDetails.backdrop_path}`,
        }}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.imageDetailsContainer}>
          <Text style={styles.title}>{seriesDetails.original_name}</Text>
          <SafeAreaView style={styles.genreContainer}>
            {seriesDetails.genres.map((genre, idx) => (
              <View key={idx} style={styles.genre}>
                <Text style={styles.genreText}>{genre.name}</Text>
              </View>
            ))}
          </SafeAreaView>

          <View style={styles.rateContainer}>
            <AntDesign name="staro" color="gold" size={20} />
            <Text style={styles.rate}>{seriesDetails.vote_average}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.genreContainer}></View>
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewHeader}>Plot Summary</Text>
        <Text style={styles.overview}>{seriesDetails.overview}</Text>
      </View>
      <View style={{flex: 1}}>
        {creditStatus === 'pending' ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={seriesCredits.cast}
              renderItem={renderCredits}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
      </View>
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
    backgroundColor: '#000',
  },
  backgroundImage: {
    width: '100%',
    height: 400,
    justifyContent: 'flex-end',
  },
  imageDetailsContainer: {
    flex: 1 / 2,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 10,
    padding: 5,
  },
  genreText: {
    color: 'gold',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
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
    margin: 20,
  },
  castAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  castName: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

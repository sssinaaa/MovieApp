import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useFetchMoviesReviewsQuery} from '../../redux/features/movieApiSlice';

const Reviews = ({id}) => {
  const {data: reviews, status: reviewStatus} = useFetchMoviesReviewsQuery(id);

  const renderReviews = review => {
    let imagePath = review.item.author_details.avatar_path.substr(35);

    console.log('image path: ', imagePath);

    return (
      <View style={{flex: 1}}>
        <Image
          style={styles.avatar}
          source={{uri: `https://secure.gravatar.com/avatar${imagePath}`}}
        />
      </View>
    );
  };

  return reviewStatus === 'fulfilled' ? (
    <View style={styles.container}>
      <Text>Reviews</Text>

      <SafeAreaView>
        <FlatList
          data={reviews.results}
          keyExtractor={key => key.id}
          renderItem={renderReviews}
        />
      </SafeAreaView>
    </View>
  ) : (
    <View>
      <Text>Loading</Text>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ProfileScreen = () => {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused && <StatusBar barStyle="light-content" />}
      <ImageBackground
        style={{height: 400}}
        source={{
          uri: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
        }}>
        <View style={styles.overlay}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profile}
              source={{
                uri: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
              }}
            />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.stats}>
        <View style={styles.statsContainer}>
          <Text>WatchList</Text>
          <View style={styles.statsNumber}>
            <Text>20</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <Text>Favorites</Text>
          <View style={styles.statsNumber}>
            <Text>20</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <Text>Reviews</Text>
          <View style={styles.statsNumber}>
            <Text>20</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    paddingTop: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 400,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#fff',
  },
  imageContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  statsContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  statsNumber: {
    marginTop: 10,
  },
});

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import SeriesDetailScreen from '../screens/SeriesDetailScreen';
import CastScreen from '../screens/CastScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="SeriesDetailScreen"
        component={SeriesDetailScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="CastScreen"
        component={CastScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

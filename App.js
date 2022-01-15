import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import {useAppDispatch, useAppSelector} from './src/redux/app/hooks';
import LoginScreen from './src/screens/user/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from './src/screens/user/SignupScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {login, signUp} from './src/redux/features/userSlice';

const App = () => {
  const Stack = createNativeStackNavigator();

  const userToken = useAppSelector(state => state.user.userToken);
  const dispatch = useAppDispatch();

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('log');
      dispatch(login(jsonValue));
    } catch (e) {
      console.log(e);
    }
  };

  const getFavorites = async () => {
    let arr = AsyncStorage.getItem('favorite');
    console.log('async data in user slice: ', arr);
  };

  useEffect(() => {
    getData();
    getFavorites();
  }, []);

  return (
    <NavigationContainer>
      {userToken == null ? (
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

import {Provider} from 'react-redux';
import store from './src/store/store';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <HomeScreen />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

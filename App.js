import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import {Provider} from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <HomeScreen />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

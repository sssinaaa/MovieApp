import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../../redux/app/hooks';
import {login, signUp} from '../../redux/features/userSlice';

const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const userState = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  console.log('user state in login page: ', userState);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('register');
      return jsonValue != null ? dispatch(signUp(JSON.parse(jsonValue))) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const onPress = async () => {
    try {
      const userIndex = userState.findIndex(e => e.user == user);
      const passIndex = userState.findIndex(e => e.pass == pass);
      if (userIndex > -1) {
        if (passIndex > -1 && passIndex === userIndex) {
          const token = 'token';
          await AsyncStorage.setItem('log', token);
          dispatch(login(token));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput style={styles.input} onChangeText={text => setUser(text)} />
      <TextInput style={styles.input} onChangeText={text => setPass(text)} />
      <TouchableOpacity
        onPress={onPress}
        style={{width: 50, height: 50, backgroundColor: 'cyan'}}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#ccc',
    margin: 10,
  },
});

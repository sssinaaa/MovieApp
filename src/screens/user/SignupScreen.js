import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../../redux/app/hooks';
import {signUp} from '../../redux/features/userSlice';

const SignupScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useAppDispatch();

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('register', jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const onPress = () => {
    storeData({user, pass});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Signup</Text>

      <TextInput style={styles.input} onChangeText={text => setUser(text)} />
      <TextInput style={styles.input} onChangeText={text => setPass(text)} />

      <TouchableOpacity onPress={onPress}>
        <Text>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#ccc',
    margin: 10,
  },
});

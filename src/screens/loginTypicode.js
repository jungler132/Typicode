import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  StyleSheet,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [login, onLoginChange] = useState('');
  const [pass, onPassChange] = useState('');

  const clear = () => {
    onLoginChange('');
    onPassChange('');
  };

  const onPressApply = () => {
    if (login === 'admin' && pass === 'admin') {
      navigation.navigate('Home', {logged: true});
    } else {
      alertOnFail();
    }
  };

  const alertOnFail = () =>
    Alert.alert('ERROR', 'Wrong credentials', [
      {
        text: 'Try Again',
        onPress: clear,
        style: 'cancel',
      },
      {text: 'Login as Quest', onPress: () => navigation.navigate('Home')},
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME</Text>
      <View style={styles.textInputsBlock}>
        <TextInput
          onChangeText={onLoginChange}
          value={login}
          style={styles.textInputStyle}
          placeholder="Enter login"
        />
        <TextInput
          secureTextEntry
          onChangeText={onPassChange}
          value={pass}
          style={styles.textInputStyle}
          placeholder="Enter pass"
        />
      </View>
      <View style={styles.buttonsBlock}>
        <TouchableOpacity style={styles.buttonStyle} onPress={onPressApply}>
          <Text style={styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonTextStyle}>As quest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 40,
    color: 'teal',
  },
  textInputsBlock: {
    width: '90%',
    height: '30%',
    backgroundColor: 'teal',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
  },
  textInputStyle: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 20,
  },
  buttonsBlock: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'teal',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

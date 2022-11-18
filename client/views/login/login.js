import { StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useState, useRef } from 'react';
import apiService from '../../ApiService';
import { Alert } from 'react-native';//added for test

export default function Login({ navigation }) {
<<<<<<< HEAD:client/views/login/login.js

=======
>>>>>>> development:client/views/login.js
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearEmail = useRef();
  const clearPassword = useRef();

  const handleSubmit = async () => {
    const userDataToSend = { email, password };
    if (!email) {
<<<<<<< HEAD:client/views/login/login.js
      Alert.alert('Please enter email address');
      console.log('123123')
      return;
    }
    if (!password) {
      Alert.alert('Please enter password');
=======
      alert('Please enter email address');
      return;
    }
    if (!password) {
      alert('Please enter password');
>>>>>>> development:client/views/login.js
      return;
    }

    const result = await apiService.login(userDataToSend);

    if (result === 'Please register') {
<<<<<<< HEAD:client/views/login/login.js
      Alert.alert('Please register');
=======
      alert('Please register');
>>>>>>> development:client/views/login.js
      clearEmail.current.clear();
      clearPassword.current.clear();
    } else {
      navigation.replace('Habits');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD:client/views/login/login.js
      <Image style={styles.text} source={require('../../assets/Frame.png')} />
      <Image style={styles.marble} source={require('../../assets/Marbles.png')} />
=======
      <Image style={styles.text} source={require('../assets/Frame.png')} />
      <Image style={styles.marble} source={require('../assets/Marbles.png')} />
>>>>>>> development:client/views/login.js
      <View style={styles.inputView}>
        <TextInput
          testID='email-input'
          ref={clearEmail}
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          testID='password-input'
          ref={clearPassword}
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder="PASSWORD"
          placeholderTextColor="#353535"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
<<<<<<< HEAD:client/views/login/login.js
      <TouchableOpacity
        testID='login-button'
        style={styles.button}
        onPress={() => handleSubmit()}
      >
        <Image style={styles.login} source={require('../../assets/Group.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        testID='register-button'
        style={styles.button}
        onPress={() => { navigation.replace('Register') }}
      >
        <Image style={styles.register} source={require('../../assets/Register.png')} />
=======
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Image style={styles.login} source={require('../assets/Group.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace('Register');
        }}
      >
        <Image style={styles.register} source={require('../assets/Register.png')} />
>>>>>>> development:client/views/login.js
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7197AC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marble: {
    position: 'absolute',
    height: 300,
    width: 300,
    bottom: '47.5%',
  },
  text: {
    position: 'absolute',
    bottom: '70%',
  },
  inputView: {
    bottom: '-20%',
    backgroundColor: '#D9D9D9',
    opacity: 0.6,
    borderRadius: 30,
    width: '70%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    flex: 1,
    alignItems: 'stretch',
  },
  button: {
    bottom: '-20%',
  },
  login: {
    height: 50,
    width: 100,
  },
  register: {
    top: 120,
  },
});

import { StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import apiService from '../ApiServise';

export default function Register({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const userDataToSend = {email, password};
    if (!email) {
        alert('Please enter email address');
        return;
    }
    if (!password) {
        alert('Please enter password');
        return;
    }
    const result = await apiService.register(userDataToSend);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.loose} source={require('../assets/Loose.png')}/>
      <SafeAreaView style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="PASSWORD"
          placeholderTextColor="#353535"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </SafeAreaView>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
            handleSubmit();
            // navigation.navigate('Habits');
        }}
      >
      <Image style={styles.register} source={require('../assets/RegisterButton.png')}/>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {navigation.navigate('Login')}}
      >
      <Image style={styles.orLogin} source={require('../assets/OrLogin.png')}/>
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
  loose: {
    position: 'absolute',
    bottom: '52.5%',
    width: 200,
    height: 300
  },
  inputView: {
    bottom: '-20%',
    backgroundColor: "#D9D9D9",
    opacity: 0.6,
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  button: {
    bottom: '-20%',
  },
  orLogin: {
    bottom: -120,
    width: 80,
    height: 50
  }
});

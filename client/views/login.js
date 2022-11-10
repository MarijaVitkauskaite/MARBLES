import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Image style={styles.text} source={require('../assets/Frame.png')}/>
      <Image style={styles.marble} source={require('../assets/output-onlinejpgtools.png')}/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="PASSWORD"
          placeholderTextColor="#353535"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.button} >
        <Image style={styles.login} source={require('../assets/Group.png')}/>
      </TouchableOpacity>
    </View>
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
    bottom: '40%'
  },
  text: {
    position: 'absolute',
    bottom: '60%'
  },
  inputView: {
    bottom: '-20%',
    backgroundColor: "#D9D9D9",
    opacity: 0.8,
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
  login: {
    height: 50,
    width: 80
  }
});

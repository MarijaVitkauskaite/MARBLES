import { SafeAreaView, Image, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import { useRef, useState } from 'react';

export default function AddHabit({setSelectedDate, navigation}){

  const [habit, setHabit] = useState('');

  const clearhabit = useRef();

  const handleSubmit = async () => {
    const habitToSend = {habit};
    if (!habit) {
        alert('Please enter email address');
        return;
    }
    const result = await apiService.habit(habitToSend);
    clearhabit.current.clear();
  }

  return(
    <SafeAreaView style={styles.container}>
      <Image style={styles.addhabit} source={require('../assets/NewHabit.png')}/>
      <View style={styles.inputView}>
        <TextInput
          ref={clearhabit}
          style={styles.TextInput}
          autoCapitalize='characters'
          placeholder="HABIT"
          placeholderTextColor="#353535"
          onChangeText={(habit) => setHabit(habit)}
        />
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {navigation.replace('Habits')}} 
      >
        <Image style={styles.add} source={require('../assets/AddHabit.png')}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7197AC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addhabit: {
    position: 'absolute',
    height: 250,
    width: 300,
    bottom: '55%',
    right: '0%'
  },
  inputView: {
    bottom: '-10%',
    backgroundColor: "#D9D9D9",
    opacity: 0.5,
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    flex: 1,
    alignItems: 'stretch'
  },
  button: {
    bottom: '-10%',
  },
  add: {
    height: 50,
    width: 60
  },
  // cancel: {
  //   top: 120
  // }
})
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import apiService from '../ApiService';

export default function Habits({habitName, selectedDate, getHabits}) {

  const [check, setCheck] = useState();

  useEffect (() => {
    setCheck(habitName.completed.some(dateStr => dateStr === selectedDate.toISOString()))
  }, [habitName]) //!!!!!!!!!!!!!!!!!!! MAGIC

  const handleCheck = async(habitName) => { 
    try {
      await apiService.completeHabits(habitName, selectedDate);  
      setCheck(true);
    } catch (e) {
      alert('Soemthing went wrong');
    }
    getHabits();
  }

  return (
          <View style={styles.habit} >
          {check ? 
            <TouchableOpacity>
              <Image style={styles.tick} source={require('../assets/TickDone.png')}/> 
            </TouchableOpacity> : 
            <TouchableOpacity onPress={() => handleCheck(habitName)}>
              <Image style={styles.tick} source={require('../assets/Tick.png')}/> 
            </TouchableOpacity>
            }
            <Text style={styles.text}>
                {habitName.habit}
            </Text>
          </View>
  )
}
const styles = StyleSheet.create({
  habit: {
    height: 70,
    width: 300,
    margin: 20,
    backgroundColor: '#B0C2CA',
    borderRadius: 50,
    flexDirection: 'row',
  },
  tick: {
    height: 50,
    width: 50,
    top: 10,
    left: 10
  },
  text: {
    fontSize: 24,
    color: '#7197AC',
    fontWeight: 'bold',
    top: 20,
    left: 30
  }
})
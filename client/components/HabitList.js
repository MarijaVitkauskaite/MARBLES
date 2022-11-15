import { StyleSheet, View, TouchableOpacity } from 'react-native';
import HabitItem from './HabitItem';
import apiService from '../ApiService';

export default function HabitList({habits, selectedDate, getHabits, setHabits}) {
  console.log({habits});
  const handleDelete = async(habit) => {
    const habitsDelete = await apiService.deleteHabits(habit, selectedDate);  
    console.log('something')
    getHabits();
  } 

  return (
    <View style={styles.container}>
      {habits.map((habitName)=> {
        return (
          <TouchableOpacity onLongPress={() => handleDelete(habitName)}>
            <HabitItem
              habitName={habitName.habit}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    height: 580,
    width: 350,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
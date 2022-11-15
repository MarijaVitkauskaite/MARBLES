import { StyleSheet, View, TouchableOpacity } from 'react-native';
import HabitItem from './HabitItem';
import apiService from '../ApiService';

export default function HabitList({habits, selectedDate, setHabits}) {
  console.log({habits});
  const handleDelete = async(habit) => {
    console.log('delete');
    const habitsDelete = await apiService.deleteHabits(habit, selectedDate);
    // update the DB with the habit DeletedAt property
    // check what comes back from the server (success or not)
    // success -> update the habits' state (filter through the state, find the deleted habit and update)
    // setHabits -> the component will rerender  
  } 

  return (
    <View style={styles.container}>
      {habits.map((habitName)=> {
        // conditionally render habits (createdAt, deletedAt (less or null), selectedDate)
        // return habit item or null
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
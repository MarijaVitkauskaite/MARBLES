import { TouchableOpacity, View } from 'react-native';
import { Habit } from '../../../lib/api-intefaces';
import apiService from '../../ApiService';
import HabitItem from '../HabitItem/HabitItem';
import styles from './style'

export default function HabitList({ habits, selectedDate, getHabits }) {
  const handleDelete = async (habitName : Habit) => {
    await apiService.deleteHabits(habitName, selectedDate);
    getHabits();
  };

  return (
    <View style={styles.container} testID="container">
      {habits &&
        habits.map((habitName) => {
          return (
            <TouchableOpacity onLongPress={() => handleDelete(habitName)} key={habitName.id}>
              <HabitItem habitName={habitName} selectedDate={selectedDate} getHabits={getHabits} key={habitName.id}/>
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

import { StyleSheet, View, TouchableOpacity } from 'react-native';
import HabitItem from './HabitItem';
import apiService from '../ApiService';

export default function HabitList({ habits, selectedDate, getHabits, setHabits }) {
  const handleDelete = async (habitName) => {
    await apiService.deleteHabits(habitName, selectedDate);
    getHabits();
  };

  return (
    <View style={styles.container}>
      {habits &&
        habits.map((habitName) => {
          return (
            <TouchableOpacity onLongPress={() => handleDelete(habitName)} key={habitName.id}>
              <HabitItem habitName={habitName} selectedDate={selectedDate} getHabits={getHabits} />
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 580,
    width: 350,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

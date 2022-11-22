import { useContext } from 'react';
import { Pressable, View } from 'react-native';
import { Habit } from '../../../lib/api-intefaces';
import * as apiService from '../../ApiService';
import { userContext } from '../../user-context';
import HabitItem from '../HabitItem/HabitItem';
import styles from './style'

export default function HabitList({ selectedDate }) {

  const {user ,setUser} = useContext(userContext)
  const {habits} = user;

  const handleDelete = async (habit: Habit) => {
    try {
     //TODO MODIFY API TO DELETE THE HABIT AND RETURN UPDATED USER
      const updatedUser = await apiService.deleteHabits(habit, selectedDate);
     setUser(updatedUser)
    } catch (e) {
      console.log(e)
    }
  };
  return (
    <View style={styles.container} testID="container">
      {habits &&
        habits.map((habit: Habit) => {
          return (
            <Pressable onLongPress={() => handleDelete(habit)} key={habit.id} testID={`habit${habit.id}`}>
              <HabitItem habit={habit} selectedDate={selectedDate} key={habit.id} />
            </Pressable>
          );
        })}
    </View>
  );
}

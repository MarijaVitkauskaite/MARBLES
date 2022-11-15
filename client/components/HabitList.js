import { StyleSheet, View } from 'react-native';
import HabitItem from './HabitItem';

export default function HabitList({habits}) {
  
  return (
    <View style={styles.container}>
      {habits.map((habitName)=> {
        return (
            <HabitItem
              habitName={habitName.habit}
            />
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
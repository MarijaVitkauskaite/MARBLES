import { StyleSheet, View, Swipeable } from 'react-native';
import HabitItem from './HabitItem';

export default function HabitList({habits}) {

  const renderDelete = () => {}
  
  return (
    <View style={styles.container}>
      {habits.map((habitName)=> {
        return (
          <Swipeable renderDelete={renderDelete}>
            <HabitItem
              habitName={habitName.habit}
            />
          </Swipeable>
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
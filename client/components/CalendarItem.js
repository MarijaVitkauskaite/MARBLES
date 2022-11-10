import { Text, Pressable, Dimensions, StyleSheet } from 'react-native';

export default function CalendarItem ({ date, selectedDate, setSelectedDate }) {
  const dayNumber = date.getDate();
  const dayString = date.toString().split(' ')[0];
  const isActive = selectedDate.getDate() === date.getDate();
  
  return (
    <Pressable
      onPress={() => setSelectedDate(date)}
      style={[styles.date, isActive && { backgroundColor: 'white' }]}
    >
      <Text style={[styles.dateOutput, isActive && styles.activeText]}>
        {dayNumber}
      </Text>

      <Text style={[styles.dayStyle, isActive && styles.activeText]}>
        {dayString}
      </Text>
    </Pressable>
  );
};

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.15;
const ITEM_HEIGHT = 60; 
const ITEM_OFFSET = ITEM_WIDTH + 18;

const styles = StyleSheet.create({
  dateOutput: {
    color: '#353535',
    fontSize: 18,
    fontWeight: '900',
  },
  dayStyle: {
    color: '#353535',
    textTransform: 'lowercase',
  },
  activeText: {
    color: '#7197AC',
  },
  date: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
});


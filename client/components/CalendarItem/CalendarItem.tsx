import { Text, Pressable } from 'react-native';
import styles from './style';

export default function CalendarItem({ date, selectedDate, setSelectedDate }) {
  const dayNumber = date.getDate();
  const dayString: String = date.toString().split(' ')[0];
  const isActive: Boolean =
    selectedDate.getDate() === date.getDate() &&
    selectedDate.toString().split(' ')[1] === date.toString().split(' ')[1];

  async function pressHandler(date) {
    await setSelectedDate(date);
  }

  return (
    <Pressable
      onPress={() => pressHandler(date)}
      testID="button"
      style={[styles.date, isActive && { backgroundColor: '#B0C2CA' }]}
      accessible={true}
      accessibilityHint="press to select a date"
      accessibilityLanguage="en-US"
    >
      <Text style={[styles.dateOutput, isActive && styles.activeText]}>{dayNumber}</Text>
      <Text style={[styles.dayStyle, isActive && styles.activeText]}>{dayString}</Text>
    </Pressable>
  );
}

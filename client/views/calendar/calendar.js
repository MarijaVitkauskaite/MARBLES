import { SafeAreaView } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { useState } from 'react';
import BottomNav from '../../components/BottomNav';
import { styles, calendarStyle } from './style';
export default function CalendarScroll({ navigation }) {
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <SafeAreaView style={styles.container} data-testid="list">
      <CalendarList
        pastScrollRange={6}
        futureScrollRange={3}
        firstDay={1}
        scrollEnabled={true}
        markedDates={{ [selectedDay]: { selected: true } }}
        onDayPress={(day) => {
          setSelectedDay(day.dateString);
        }}
        onDayLongPress={(day) => {
          navigation.replace('AddHabit');
        }}
        theme={calendarStyle}
      />
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
}
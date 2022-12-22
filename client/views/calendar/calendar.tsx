import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import BottomNav from '../../components/BottomNav/BottomNav';
import { calendarStyle, styles } from './style';


export default function CalendarScroll({navigation}) {
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <CalendarList
        pastScrollRange={6}
        futureScrollRange={3}
        firstDay={1}
        scrollEnabled={true}
        markedDates={{ [selectedDay]: { selected: true } }}
        onDayPress={(day) => {
          setSelectedDay(day.dateString);
        }}
        onDayLongPress={() => {
          navigation.replace('AddHabit');
        }}
        //@ts-ignore I'm not sure why TS doesn't agree with me overriding theme (from the package)
        theme={calendarStyle}
        data-testid="calendar-list"
        accessible={true}
        accessibilityLabel="Calender List"
        accessibilityHint="Long press to add a habit"
        accessibilityLanguage="en-US"
      />
      <BottomNav navigation/>
    </SafeAreaView>
  );
}

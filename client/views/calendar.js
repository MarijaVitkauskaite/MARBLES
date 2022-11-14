import { SafeAreaView, StyleSheet } from 'react-native';
import {CalendarList} from 'react-native-calendars';
import { useState } from 'react';
import BottomNav from '../components/BottomNav';


export default function CalendarScroll({navigation}) {

  const [selectedDay, setSelectedDay] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <CalendarList 
      pastScrollRange={6}
      futureScrollRange={3}
      firstDay={1}
      scrollEnabled={true}
      markedDates={{[selectedDay]: { selected: true }}}
      onDayPress={(day) => {
        setSelectedDay(day.dateString)
      }}
      theme={{
        'stylesheet.calendar.main':{
          container: {
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: '#7197AC'
          },
          monthView: {
            backgroundColor: '#7197AC'
          },
        },
        'stylesheet.day.basic':{
          selected: {
            backgroundColor: '#D9D9D9',
            borderRadius: 16
          },
          selectedText: {
            color: '#7197AC'
          },
          today: {
            backgroundColor: '#7197AC',
            borderRadius: 16
          },
          todayText: {
            color: '#353535'
          },
      },
        'stylesheet.calendar.header':{
          monthText: {
            fontSize: 20,
            color: '#353535',
            margin: 10,
            fontWeight: 'bold',
            textTransform: 'uppercase'
          },
          dayHeader: {
            textTransform: 'lowercase',
            color: '#353535'
          }
        }
      }}
      />
      <BottomNav navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7197AC',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

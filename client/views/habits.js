import { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import HorizontalCalendar from '../components/HorizontalCalendar';
import HabitList from '../components/HabitList';
import BottomNav from '../components/BottomNav';

export default function Calendar({navigation}) {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [option, setOption] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HorizontalCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          navigation={navigation}
        />
      </View>
      <View style={styles.habit}>
        <HabitList />
      </View>
      <View style={styles.bottomnav}>
        <BottomNav 
        option={option}
        setOption={setOption}
        navigation={navigation}
        />
      </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7197AC',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'top',
  },
  habits: {

  },
  bottomnav: {
    top: '60%',
    width: '100%',
    flex: 0.2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'bottom',
  }
});
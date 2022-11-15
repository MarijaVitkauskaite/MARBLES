import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import HorizontalCalendar from '../components/HorizontalCalendar';
import HabitList from '../components/HabitList';
import BottomNav from '../components/BottomNav';
import apiService from '../ApiService';
import { useNavigation } from '@react-navigation/native';

export default function Habits() {
  const navigation = useNavigation();
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const [selectedDate, setSelectedDate] = useState(today);

  const [habits, setHabits] = useState([]);

  const getHabits = async() => {
    const updatedHabits = await apiService.getHabits(selectedDate);
    setHabits(updatedHabits)
  }

  useEffect(() => {
    getHabits();
  }, [selectedDate])

  return (
    <SafeAreaView style={styles.container}>
        <HorizontalCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          navigation={navigation}
          today={today}
        />
        <HabitList 
          habits={habits}
          setHabits={setHabits}
          selectedDate={selectedDate}
          getHabits={getHabits}
        />
        <BottomNav
          navigation={navigation}
        />
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
  }
});
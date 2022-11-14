import { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import HorizontalCalendar from '../components/HorizontalCalendar';
import HabitList from '../components/HabitList';
import BottomNav from '../components/BottomNav';
import apiService from '../ApiService';
import { useNavigation } from '@react-navigation/native';

export default function Habits() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
        <HorizontalCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          navigation={navigation}
        />
        <HabitList />
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
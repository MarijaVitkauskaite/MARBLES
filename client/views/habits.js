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
      <View>
        <HabitList />
      </View>
      <View >
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
  }
});
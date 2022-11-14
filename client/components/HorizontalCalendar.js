import { useMemo, useRef, useEffect } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';

import CalendarItem from './CalendarItem.js';
import CalendarHeader from './CalendarHeader.js';

function dateSubtractDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

function dateAddDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function generateHorizontalCalendarDates(datePast, dateFuture) {
  const today = new Date();
  let result = []; 
  // adding past days
  for (let i = 0; i < datePast; i++) {
    result[i] = dateSubtractDays(today, i);
  }
  result.reverse();
  // adding future days
  for (let i = 1; i < dateFuture; i++) {
    result.push(dateAddDays(today, i));
  }
  return result;
}

export default function HorizontalCalendar({ selectedDate, setSelectedDate, navigation }) {
  const datePast = 180;
  const dateFuture = 90;
  const scroller = useRef();

  const dates = useMemo(() => {
    return generateHorizontalCalendarDates(datePast, dateFuture);
  }, []);

  const scrollToToday = () => {
    scroller.current.scrollTo({ x: datePast * 78.65, y: 0 });
    setSelectedDate && setSelectedDate(new Date());
  }

  const addHabit = () => {
    navigation.navigate('AddHabit');
  }

  return (
    <SafeAreaView> 
      <View style={{height: 200}}>
        <CalendarHeader 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate}
        scrollToToday={scrollToToday}
        addHabit={addHabit}
        />
        <ScrollView ref={scroller} onContentSizeChange={()=>scrollToToday()} horizontal={true} showsHorizontalScrollIndicator={false}>
          {dates.map((date) => {
            return <CalendarItem 
              date={date} 
              key={date}
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate}
            />
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
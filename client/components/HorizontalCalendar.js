import { useMemo, useRef, useEffect } from 'react';
import { ScrollView } from 'react-native';

import CalendarItem from './CalendarItem.js';

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

function generateHorizontalCalendarDates(daysBack, daysForward) {
  const today = new Date();
  let result = []; 
  // adding past days
  for (let i = 0; i < daysBack; i++) {
    result[i] = dateSubtractDays(today, i);
  }
  // return result.reverse();
  result.reverse();
  // adding future days
  for (let i = 1; i < daysForward; i++) {
    result.push(dateAddDays(today, i));
  }
  return result;
}

export default function HorizontalCalendar({ selectedDate, setSelectedDate }) {
  const datePast = 180;
  const dateFuture = 90;
  const scroller = useRef();

  const dates = useMemo(() => {
    return generateHorizontalCalendarDates(datePast, dateFuture);
  }, []);

  useEffect(() => {
    scrollToToday();
  }, [])

  const scrollToToday = () => {
    scroller.current.scrollTo({ x: 270 * 48.1, y: 0 });
  }

  return (
    
    <ScrollView ref={scroller} horizontal={true}>
      {dates.map((date) => {
        return <CalendarItem 
          date={date} 
          selectedDate={selectedDate} 
          setSelectedDate={setSelectedDate}
        />
      })}
    </ScrollView>
  );
}
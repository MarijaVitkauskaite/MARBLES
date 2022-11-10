import { useMemo } from 'react';
import { FlatList, Dimensions, StyleSheet, Text, Pressable } from 'react-native';


const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.15;
const ITEM_HEIGHT = 60; 
const ITEM_OFFSET = ITEM_WIDTH + 18;

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


function getDayString(date) {
  return date.toString().split(' ')[0];
}

function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate();
}

// function isToday(date) {
//   return new Date().getDate() == date.getDate();
// }

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

export default function HorizontalCalendar({selectedDate, setSelectedDate}) {
  
  const datePast = 180;
  const dateFuture = 90;

  const dates = useMemo(() => {
    return generateHorizontalCalendarDates(datePast, dateFuture);
  }, []);

  const onDatePress = (date) => {
    setSelectedDate(date);
  };

  const renderItem = ({ item, index }) => {
    const dayNumber = item.getDate();
    const dayString = getDayString(item);
    const isActive = isSameDay(selectedDate, item);
    return (
      <Pressable
        onPress={() => onDatePress(item)}
        style={[styles.item, isActive && { backgroundColor: 'white' }]}>
        <Text style={[styles.dateOutput, isActive && styles.activeText]}>
          {dayNumber}
        </Text>
        <Text style={[styles.dayStyle, isActive && styles.activeText]}>
          {/* {isToday(item) ? 'today' : dayString} */}
          {dayString}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={dates}
      renderItem={renderItem}
      keyExtractor={(item) => item.toDateString()}
      horizontal={true}
      contentContainerStyle={[
        { paddingBottom: 16, paddingLeft: 4, paddingRight: 4 },
      ]}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={dates.length - dateFuture}
      getItemLayout={(_, index) => ({
        length: ITEM_WIDTH,
        offset: ITEM_OFFSET * index,
        index,
      })}
    />
  );
}

const styles = StyleSheet.create({
  dateOutput: {
    color: '#353535',
    fontSize: 18,
    fontWeight: '900',
  },
  dayStyle: {
    color: '#353535',
    textTransform: 'lowercase',
  },
  activeText: {
    color: '#7197AC',
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
});
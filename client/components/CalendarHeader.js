import { Text, Pressable, TouchableOpacity, SafeAreaView } from 'react-native';

export default function CalendarHeader({date, setSelectedDate, scrollToToday}) {
    return (
     <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={scrollToToday}>
          <Text>TODAY</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => setSelectedDate(date)}
          >
          <Text>ADD</Text>
        </Pressable>
     </SafeAreaView>
      
    )
}
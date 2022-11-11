import { Text, Pressable, TouchableOpacity, SafeAreaView, Image } from 'react-native';

export default function CalendarHeader({date, setSelectedDate, scrollToToday}) {
    return (
     <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={scrollToToday}>
          <Image source={require('../assets/Today.png')}/>
        </TouchableOpacity>
        <Pressable
          onPress={() => setSelectedDate(date)}
          >
          <Text>ADD</Text>
        </Pressable>
     </SafeAreaView>
      
    )
}
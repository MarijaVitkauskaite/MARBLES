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
          <Image source={require('../assets/Add.png')} style={{top: 7}}/>
        </Pressable>
     </SafeAreaView>
      
    )
}
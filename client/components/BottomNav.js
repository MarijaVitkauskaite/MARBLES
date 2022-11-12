import { TouchableOpacity, SafeAreaView, Text, Image } from 'react-native';

export default function BottomNav({navigation}){
  return (
    <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity onPress={navigation.replace('Calendar')}>
        <Image source={require('../assets/Today.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigation.replace('Login')}>
        <Image source={require('../assets/Add.png')}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
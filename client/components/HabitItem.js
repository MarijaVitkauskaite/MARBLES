import {View, StyleSheet, Image, Text} from 'react-native';

export default function Habits({habitName}) {
  return (
    <View style={styles.container}>
      <View style={styles.habit}>
        <Image style={styles.tick} source={require('../assets/Tick.png')}/>
        <Text style={styles.text}>
            {habitName}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  habit: {
    height: 70,
    width: 300,
    margin: 20,
    backgroundColor: '#B0C2CA',
    borderRadius: 50,
    flexDirection: 'row',
  },
  tick: {
    height: 50,
    width: 50,
    top: 10,
    left: 10
  },
  text: {
    fontSize: 24,
    color: '#7197AC',
    fontWeight: 'bold',
    top: 20,
    left: 30
  }
})
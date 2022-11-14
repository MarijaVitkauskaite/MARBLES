import {View, StyleSheet, Image, Text} from 'react-native';

export default function Habits() {
  return (
    <View style={styles.container}>
      <View style={styles.habit}>
        <Image style={styles.tick} source={require('../assets/Tick.png')}/>
        <Text style={styles.text}>
          theeth
        </Text>
      </View>
      {/* <View style={styles.habit}></View>
      <View style={styles.habit}></View>
      <View style={styles.habit}></View>
      <View style={styles.habit}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: '-5%',
    height: 510,
    width: 350,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'top'
  },
  habit: {
    height: 60,
    width: 300,
    backgroundColor: '#B0C2CA',
    borderRadius: 50,
    flexDirection: 'row',
  },
  tick: {
    height: 45,
    width: 45,
    top: 7.5,
    left: 7.5
  },
  text: {
    fontSize: 24,
    color: '#353535',
    opacity: 0.8,
    fontWeight: 'medium',
    top: 15,
    left: 30
  }
})
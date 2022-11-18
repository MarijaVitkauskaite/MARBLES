import { StyleSheet   } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7197AC',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 --ANDROID FRIENDLY --

  },
});
// TODO MAKE IT ANDROID FRIENDLY
// https://stackoverflow.com/questions/51289587/how-to-use-safeareaview-for-android-notch-devices
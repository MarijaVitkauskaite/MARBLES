import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default function Habits() {
    let datesWhitelist = [{
        start: moment().subtract(364, 'days'),
        start: moment(),
        end: moment().add(364, 'days'),
      }];

          return (
              <View style={styles.container}>
                <StatusBar style="auto"/>
                  <CalendarStrip
                      calendarAnimation={{type: 'sequence', duration: 30}}
                      daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                      style={{height: 150, paddingTop: 60, paddingBottom: 10}}
                      calendarHeaderStyle={{color: '#353535', fontSize: 20, height: 30}}
                      calendarColor={'#7197AC'}
                      dateNumberStyle={{color: 'white'}}
                      dateNameStyle={{color: 'white'}}
                      highlightDateNumberStyle={{color: '#353535'}}
                      highlightDateNameStyle={{color: '#353535'}}
                      datesWhitelist={datesWhitelist}
                  />
                  <View>

                  </View>
              </View>
          );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#7197AC',
    }
});
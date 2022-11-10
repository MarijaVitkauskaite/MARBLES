import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
// import calendar from 'react-native-calendars';



export default function Calendar() {

    return (

        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text>Yes</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7197AC',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

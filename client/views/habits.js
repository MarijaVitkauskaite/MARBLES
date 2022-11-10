import { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import HorizontalCalendar from '../components/HorizontalCalendar';



export default function Calendar() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <HorizontalCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            </View>
        </SafeAreaView>
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
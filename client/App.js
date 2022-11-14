import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './views/login';
import Calendar from './views/calendar';
import Habits from './views/habits';
import Register from './views/register';
import AddHabit from './components/AddHabit';
import { DateContext } from './context';

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Habits" component={Habits}/>
        <Stack.Screen name="AddHabit" component={AddHabit}/>
        <Stack.Screen name="Calendar" component={Calendar}/>
      </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <DateContext.Provider value={{ stuff: "things" }}>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </DateContext.Provider>
  );
}


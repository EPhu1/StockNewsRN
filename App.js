//How to set up the project directory: https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707016#questions
//1.) npx expo-cli init <projectName>
import 'react-native-gesture-handler'; //2.) https://reactnavigation.org/docs/getting-started/ (3 cmd prompt installs)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; //3.) https://reactnavigation.org/docs/hello-react-navigation/ (1 cmd prompt install)
import StatisticsScreen from './src/screens/StatisticsScreen';
import HomeScreen from './src/screens/HomeScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Stock Statistics">
        <Stack.Screen name= "Stock Statistics" component = {StatisticsScreen} />
        <Stack.Screen name= "Home" component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
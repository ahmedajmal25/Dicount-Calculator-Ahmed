/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import History from './History';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center', headerShown: true}}
        headerMode="screen"
        initialRouteName="Home">
        <Stack.Screen name="Home" options={{title: 'Home'}} component={Home} />
        <Stack.Screen
          name="History"
          options={{title: 'History'}}
          component={History}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

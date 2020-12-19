/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import History from './History';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#403cb8" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#403cb8'},
          }}
          headerMode="screen"
          initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{title: 'Home'}}
            component={Home}
          />
          <Stack.Screen
            name="History"
            options={{
              title: 'History',
            }}
            component={History}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

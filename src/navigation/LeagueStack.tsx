import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LeagueScreen from '../screens/LeagueScreen';

const Stack = createStackNavigator();

function LeagueStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="League" component={LeagueScreen} />
    </Stack.Navigator>
  );
}

export default LeagueStack;

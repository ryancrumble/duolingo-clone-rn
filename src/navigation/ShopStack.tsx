import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ShopScreen from '../screens/ShopScreen';

const Stack = createStackNavigator();

function CourseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
}

export default CourseStack;

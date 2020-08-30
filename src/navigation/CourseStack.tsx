import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CourseScreen from '../screens/CourseScreen';

const Stack = createStackNavigator();

function CourseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Course" component={CourseScreen} />
    </Stack.Navigator>
  );
}

export default CourseStack;

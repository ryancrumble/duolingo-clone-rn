import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ProfileStackParamList } from '../types/navigation';

import ProfileScreen from '../screens/ProfileScreen';
import FriendsScreen from '../screens/FriendsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator<ProfileStackParamList>();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;

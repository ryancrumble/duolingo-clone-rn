import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';

export default function App() {
    const [loaded] = useFonts({
        BalooTamma2: require('./assets/fonts/BalooTamma2-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <>
            <AppNavigator />
        </>
    );
}

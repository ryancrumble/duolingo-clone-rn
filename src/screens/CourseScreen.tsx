import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    name: string;
    color: string;
}

const CourseScreen: React.FC<Props> = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'BalooTamma2' }}>Course</Text>
        </View>
    );
};

export default CourseScreen;

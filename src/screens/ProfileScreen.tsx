import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    name: string;
    color: string;
}

const ProfileScreen: React.FC<Props> = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
        </View>
    );
};

export default ProfileScreen;

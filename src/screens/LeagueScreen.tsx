import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    name: string;
    color: string;
}

const LeagueScreen: React.FC<Props> = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>League</Text>
        </View>
    );
};

export default LeagueScreen;

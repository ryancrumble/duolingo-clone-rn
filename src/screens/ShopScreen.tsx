import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    name: string;
    color: string;
}

const ShopScreen: React.FC<Props> = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Shop</Text>
        </View>
    );
};

export default ShopScreen;

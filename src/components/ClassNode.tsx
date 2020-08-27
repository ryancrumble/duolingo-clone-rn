import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    name: string;
    color: string;
}

const ClassNode: React.FC<Props> = (props) => {
    return (
        <View>
            <Text></Text>
        </View>
    );
};

export default ClassNode;

const styles = StyleSheet.create({});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header/Header';
import SafeAreaView from '../components/SafeAreaView';

import { colors, typography } from '../styles/globalStyles';
import Token from '../components/Header/Token';

interface Props {}

const ShopScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Header>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ ...typography.headerText }}>Shop</Text>
        </View>
        <Token style={{ flex: 1 }} />
      </Header>
      {/* TODO: Add Flatlist and render shop items */}
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});

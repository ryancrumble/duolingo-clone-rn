import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header/Header';
import Token from '../components/Header/Token';
import ShopCard from '../components/Shop/ShopCard';
import { colors, typography, globalStyles } from '../styles/globalStyles';

import { AppLoading } from 'expo';
import { ShopItem } from '../types/data';

import mockShopData from '../../mocks/shopData.json';

interface Props {}

const ShopScreen: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ ...typography.headerText }}>Shop</Text>
        </View>
        <Token style={{ flex: 1 }} />
      </Header>
      <ScrollView style={styles.sectionBody} showsVerticalScrollIndicator={false}>
        {mockShopData.data.map((ShopSection: any) => {
          return (
            <View style={styles.sectionContainer} key={ShopSection.name}>
              <Text style={styles.sectionText}>{ShopSection.name}</Text>
              {ShopSection.items.map((item: ShopItem) => {
                return <ShopCard item={item} key={item.name} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.background,
  },
  sectionBody: {
    marginHorizontal: 12,
  },
  sectionContainer: {
    marginBottom: 40,
  },
  sectionText: {
    ...typography.headerText,
    fontSize: 26,
    color: colors.primary.black,
  },
});

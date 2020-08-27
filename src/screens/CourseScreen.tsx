import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaView from '../components/SafeAreaView';
import { FlatList } from 'react-native-gesture-handler';

import { colors, typography } from '../styles/globalStyles';
import Header from '../components/Header';
import Token from '../components/Header/Token';
import Streak from '../components/Header/Streak';
import Crown from '../components/Header/Crown';

interface Props {}

const CourseScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Header>
        <View style={{ flex: 2 }}>
          <Text>flag</Text>
        </View>
        <View style={styles.headerCenter}>
          <Crown />
          <Streak />
        </View>
        <View style={{ flex: 2 }}>
          <Token />
        </View>
      </Header>
      {/* TODO: Add Flatlist and render lesson tree */}
    </SafeAreaView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  headerCenter: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaView from '../components/SafeAreaView';

import Header from '../components/Header/Header';
import Token from '../components/Header/Token';
import Streak from '../components/Header/Streak';
import Crown from '../components/Header/Crown';
import LanguageFlag from '../components/LanguageFlag';

import data from '../../mocks/courseData/DE.json';
import ExerciseTree from '../components/Course/ExerciseTree';

interface Props {}

const CourseScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Header>
        <View style={styles.headerLeft}>
          <LanguageFlag countryCode="DE" size={50} />
        </View>
        <View style={styles.headerCenter}>
          <Crown />
          <Streak isTodayCompleted={false} />
        </View>
        <View style={styles.headerRight}>
          <Token />
        </View>
      </Header>
      <ExerciseTree data={data} />
    </SafeAreaView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  headerLeft: { flex: 2, marginLeft: 12 },
  headerCenter: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRight: { flex: 2 },
});

import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';

import LeagueSlider from '../components/Profile/LeagueSlider';
import Leaderboard from '../components/Profile/Leaderboard';

import mockLeagues from '../../mocks/leagueData.json';
import mockUsers from '../../mocks/leagueUserData.json';
import { globalStyles } from '../styles/globalStyles';

interface Props {}

const LeagueScreen: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <LeagueSlider data={mockLeagues.data} />
      <Leaderboard data={mockUsers.data} />
    </SafeAreaView>
  );
};

export default LeagueScreen;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.background,
    flex: 1,
  },
});

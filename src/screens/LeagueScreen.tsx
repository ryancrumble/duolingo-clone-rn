import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { AppLoading } from 'expo';

import { colors, globalStyles } from '../styles/globalStyles';
import { getLeagueColor } from '../utils/uiUtils';

import mockLeagues from '../../mocks/leagueData.json';
import mockUsers from '../../mocks/leagueUserData.json';

interface Props {
  name: string;
  color: string;
}

interface LeagueItem {
  name: string;
  isComplete: boolean;
  isActive: boolean;
  color: string;
}

const LeagueScreen: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [activeLeague, setActiveLeague] = useState({} as LeagueItem);

  const getActiveLeague = () => {
    const league = mockLeagues.data.find((league: LeagueItem) => league.isActive);
    if (league) {
      setActiveLeague(league);
    }
  };
  const getUserFirstLetter = (name: string) => {
    return name.slice(0, 1).toUpperCase();
  };

  useEffect(() => {
    getActiveLeague();
    setLoading(false);
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <View style={styles.sectionLeague}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={mockLeagues.data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <View style={styles.leagueItem}>
                <FontAwesome5
                  name="shield-alt"
                  size={item.isActive ? 84 : 48}
                  color={item.isActive || item.isComplete ? getLeagueColor(item.color) : colors.primary.gray}
                  style={styles.leagueIcon}
                />
              </View>
            );
          }}
        />
        <View style={styles.leagueDescription}>
          <Text style={styles.leagueTitle}>{activeLeague.name} League</Text>
          <Text style={styles.leagueSubText}>Top 15 advance to the next league</Text>
          <Text style={styles.leagueTimer}>3d 19h 1m</Text>
        </View>
      </View>
      <View style={styles.sectionLeaderboard}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={mockUsers.data}
          ItemSeparatorComponent={UserItemSeperator}
          keyExtractor={(item) => item.name + item.positon}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.userItem} activeOpacity={0.1}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ ...styles.userItemName, width: 26 }}>{item.positon}</Text>
                  <View style={styles.userItemAvatar}>
                    <Text style={styles.userItemAvatarText}>{getUserFirstLetter(item.name)}</Text>
                  </View>
                  <Text style={styles.userItemName}>{item.name}</Text>
                </View>
                <Text style={styles.userItemExp}>{item.exp} XP</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const UserItemSeperator: React.FC = () => {
  return (
    <View
      style={{
        borderColor: colors.tints.gray,
        borderBottomWidth: 1,
      }}
    ></View>
  );
};

export default LeagueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionLeague: {
    height: 220,
    borderBottomWidth: 2,
    borderColor: colors.tints.gray,
  },
  sectionLeaderboard: {},
  leagueDescription: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leagueItem: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  leagueTitle: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 28,
    color: colors.tints.black,
  },
  leagueSubText: {
    fontFamily: 'NunitoRegular',
    fontSize: 18,
    color: colors.primary.gray,
    marginBottom: 4,
  },
  leagueTimer: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 22,
    color: colors.secondary.yellow,
    marginBottom: 8,
  },
  leagueIcon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  // USERS
  userItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  userItemName: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 18,
    color: colors.primary.black,
  },
  userItemAvatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.secondary.lavendar,
    marginRight: 14,
    ...globalStyles.centerAlign,
  },
  userItemAvatarText: {
    color: colors.primary.white,
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 26,
    paddingTop: 6,
  },
  userItemExp: {
    fontFamily: 'NunitoRegular',
    fontSize: 18,
    color: colors.primary.gray,
  },
});

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { colors, typography, globalStyles } from '../styles/globalStyles';
import Header from '../components/Header/Header';
import StatisticCard from '../components/Profile/StatisticCard';
import MultiTabView from '../components/Tabs/MultiTabView';
import MultiTabListItem from '../components/Tabs/MultiTabListItem';

import mockFriends from '../../mocks/friendsData.json';
import { FriendItem } from '../types/data';
import { AppLoading } from 'expo';
interface Props {
  name: string;
  color: string;
}

const ProfileScreen: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [followingData, setFollowingData] = useState([] as FriendItem[]);
  const [followerData, setFollowerData] = useState([] as FriendItem[]);

  const sortListByExp = (arr: FriendItem[]) => {
    return arr.sort((a: FriendItem, b: FriendItem) => {
      return b.exp - a.exp;
    });
  };

  const fetchData = () => {
    setFollowingData(sortListByExp(mockFriends.data.following));
    setFollowerData(sortListByExp(mockFriends.data.followers));
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    <AppLoading />;
  }
  // FIXME: Scrollview doesn't allow the screen to scroll
  return (
    <SafeAreaView>
      <Header>
        <View style={styles.headerLeft}></View>
        <View style={styles.headerCenter}>
          <Text style={{ ...typography.headerText }}>Profile</Text>
        </View>
        <View style={styles.headerRight}>
          <Feather name="settings" size={32} color={colors.secondary.blueDark} style={{ paddingRight: 20 }} />
        </View>
      </Header>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.sectionStatistics}>
          <Text style={{ ...typography.headingOne, marginLeft: 4 }}>Statistics</Text>
          <View style={styles.cardRow}>
            <StatisticCard
              title={'Day Streak'}
              value={3}
              renderIcon={<FontAwesome5 name="fire-alt" size={24} color={colors.secondary.orange} />}
            />
            <StatisticCard
              title={'Total XP'}
              value={14398}
              renderIcon={<FontAwesome5 name="bolt" size={24} color={colors.secondary.yellow} />}
            />
          </View>
          <View style={styles.cardRow}>
            <StatisticCard
              title={'Total Crowns'}
              value={24}
              renderIcon={<FontAwesome5 name="crown" size={20} color={colors.secondary.yellow} />}
            />
            <StatisticCard
              title={'League'}
              value={'Silver'}
              renderIcon={<FontAwesome5 name="shield-alt" size={22} color={colors.leagues.silver} />}
            />
          </View>
        </View>
        <View style={styles.sectionFriends}>
          <View style={styles.friendsHeader}>
            <Text style={{ ...typography.headingOne, marginLeft: 4 }}>Friends</Text>
            <TouchableOpacity>
              <Text style={{ ...typography.linkText }}>Add Friends</Text>
            </TouchableOpacity>
          </View>
          <MultiTabView
            tabs={[
              { key: 't1', title: 'Following' },
              { key: 't2', title: 'Followers' },
            ]}
          >
            <View key={'t1'}>
              {followingData.map((friend: FriendItem, index) => {
                return <MultiTabListItem item={friend} key={index} />;
              })}
            </View>
            <View key={'t2'}>
              {followerData.map((friend: FriendItem, index) => {
                return <MultiTabListItem item={friend} key={index} />;
              })}
            </View>
          </MultiTabView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  bodyContainer: { marginHorizontal: 8 },
  sectionStatistics: {},
  sectionFriends: {},
  headerLeft: { flex: 1 },
  headerCenter: { flex: 1, ...globalStyles.centerAlign },
  headerRight: { flex: 1, alignItems: 'flex-end' },
  cardRow: {
    ...globalStyles.centerAlign,
    flexDirection: 'row',
    marginBottom: 12,
  },
  friendsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
});

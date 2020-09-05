import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { colors, typography, globalStyles } from '../styles/globalStyles';
import { sortListByExp } from '../utils/dataUtils';

import Header from '../components/Header/Header';
import StatisticCard from '../components/Profile/StatisticCard';
import MultiTabView from '../components/Tabs/MultiTabView';
import MultiTabListItem from '../components/Tabs/MultiTabListItem';
import MultiTabLastListItem from '../components/Tabs/MultiTabLastListItem';

import mockFriends from '../../mocks/friendsData.json';
interface Props {
  navigation: any;
}

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [followingList, setFollowingList] = useState([] as JSX.Element[]);
  const [followerList, setFollowerList] = useState([] as JSX.Element[]);

  const renderFriendsList = (data: any[]) => {
    const sortedData = sortListByExp(data);
    const arr: JSX.Element[] = [];

    for (let i = 0; i <= sortedData.length; i++) {
      if (i <= 4) {
        arr.push(<MultiTabListItem item={sortedData[i]} key={i} />);
      } else if (i === 5) {
        const remainingFriends = sortedData.length - 5;
        arr.push(
          <MultiTabLastListItem
            remainingItems={remainingFriends}
            key={i}
            onPress={() => navigation.navigate('Friends')}
          />,
        );
      } else {
        break;
      }
    }
    return arr;
  };

  const fetchData = () => {
    setFollowingList(renderFriendsList(mockFriends.data.following));
    setFollowerList(renderFriendsList(mockFriends.data.followers));
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.headerLeft}></View>
        <View style={styles.headerCenter}>
          <Text style={{ ...typography.headerText }}>Profile</Text>
        </View>
        <View style={styles.headerRight}>
          <Feather
            name="settings"
            size={32}
            color={colors.secondary.blue}
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </Header>
      <ScrollView style={styles.bodyContainer} showsVerticalScrollIndicator={false}>
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
            <View key={'t1'}>{followingList}</View>
            <View key={'t2'}>{followerList}</View>
          </MultiTabView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { ...globalStyles.background, paddingBottom: 40 },
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

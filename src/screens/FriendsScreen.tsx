import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import Header from '../components/Header/Header';
import MultiTabView from '../components/Tabs/MultiTabView';
import MultiTabListItem from '../components/Tabs/MultiTabListItem';

import { ProfileProps } from '../types/navigation';
import { globalStyles, typography, colors } from '../styles/globalStyles';
import { sortListByExp } from '../utils/dataUtils';

import mockFriends from '../../mocks/friendsData.json';

interface Props extends ProfileProps {}

const FriendsScreen: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [followingList, setFollowingList] = useState([] as JSX.Element[]);
  const [followerList, setFollowerList] = useState([] as JSX.Element[]);

  const renderFriendsList = (data: any[]) => {
    const sortedData = sortListByExp(data);
    // const arr: JSX.Element[] = [];

    return sortedData.map((item, i) => {
      let style = {};

      if (i === 0) {
        style = {
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          borderTopWidth: 3,
        };
      } else if (i === sortedData.length - 1) {
        style = {
          borderBottomStartRadius: 20,
          borderBottomEndRadius: 20,
        };
      }
      return <MultiTabListItem item={sortedData[i]} key={i} style={style ? style : null} />;
    });
  };

  const fetchData = () => {
    setFollowingList(renderFriendsList(mockFriends.data.following));
    setFollowerList(renderFriendsList(mockFriends.data.followers));
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.headerLeft}>
          <Feather name="arrow-left" size={28} color={colors.tints.grayThree} onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.headerCenter}>
          <Text style={{ ...typography.headerText }}>Friends</Text>
        </View>
        <View style={styles.headerRight}></View>
      </Header>
      <MultiTabView
        style={styles.multiTabContainer}
        selectorStyle={styles.multiTabSelector}
        viewStyle={styles.multiTabView}
        tabs={[
          { key: 't1', title: 'Following' },
          { key: 't2', title: 'Followers' },
        ]}
      >
        <View key={'t1'}>{followingList}</View>
        <View key={'t2'}>{followerList}</View>
      </MultiTabView>
    </SafeAreaView>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({
  container: { ...globalStyles.background, flex: 1 },
  headerLeft: { flex: 2, paddingLeft: 12 },
  headerCenter: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginLeft: -12,
  },
  headerRight: { flex: 2 },
  multiTabContainer: {},
  multiTabSelector: {
    marginBottom: 20,
    borderWidth: 0,
    borderBottomWidth: 2,
  },
  multiTabView: {
    marginHorizontal: 16,
  },
});

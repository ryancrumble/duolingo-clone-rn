import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { colors, globalStyles } from '../../styles/globalStyles';

interface Props {
  data: Array<any>;
  style?: Object;
  // style: StyleProp<ViewStyle>;
}

const Leaderboard: React.FC<Props> = (props) => {
  const getUserFirstLetter = (name: string) => {
    return name.slice(0, 1).toUpperCase();
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.data}
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

export default Leaderboard;

const styles = StyleSheet.create({
  container: {
    borderColor: 'blue',
    borderWidth: 4,
    paddingBottom: 10,
  },
  // USERS
  userItem: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 80,
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { colors, globalStyles, typography } from '../../styles/globalStyles';

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
    paddingBottom: 200,
  },
  // USERS
  userItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 80,
  },
  userItemName: {
    ...typography.fontPrimary,
    fontSize: 18,
    color: colors.primary.black,
  },
  userItemAvatar: {
    ...globalStyles.centerAlign,
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: colors.secondary.lavendar,
    marginRight: 14,
  },
  userItemAvatarText: {
    color: colors.primary.white,
    ...typography.fontPrimary,
    fontSize: 26,
    paddingTop: 6,
  },
  userItemExp: {
    ...typography.fontSecondary,
    fontSize: 18,
    color: colors.primary.gray,
  },
});

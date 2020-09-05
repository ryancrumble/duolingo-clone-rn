import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, globalStyles, typography } from '../../styles/globalStyles';
import { Avatar } from 'react-native-elements';
import { FriendItem } from '../../types/data';
import { FontAwesome5 } from '@expo/vector-icons';

interface Props {
  item: FriendItem;
  style?: any;
}

const MultiTabListItem: React.FC<Props> = ({ item, style }) => {
  const firstInitial = item.name.slice(0, 1);

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.leftInnerContainer}>
        <Avatar
          size="small"
          rounded
          title={firstInitial}
          activeOpacity={0.7}
          containerStyle={{ backgroundColor: colors.secondary.lavendar }}
        />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.userNameText}>{item.name}</Text>
          <Text style={styles.userExpText}>{item.exp} XP</Text>
        </View>
      </View>
      <View style={styles.rightInnerContainer}>
        <FontAwesome5 name="chevron-right" size={12} color={colors.primary.gray} />
      </View>
    </View>
  );
};

export default MultiTabListItem;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.centerAlign,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    borderWidth: 3,
    borderTopWidth: 0,
    borderColor: colors.tints.gray,
    backgroundColor: colors.primary.white,
    paddingHorizontal: 20,
  },
  leftInnerContainer: {
    ...globalStyles.centerAlign,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 11,
  },
  rightInnerContainer: {
    flex: 1,
  },
  userNameText: {
    ...typography.fontPrimary,
    color: colors.tints.black,
    fontSize: 22,
  },
  userExpText: {
    ...typography.fontSecondary,
    fontSize: 15,
    color: colors.primary.gray,
    top: -4,
  },
});

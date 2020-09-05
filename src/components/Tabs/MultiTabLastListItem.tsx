import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, globalStyles, typography } from '../../styles/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  remainingItems: number;
  onPress?: any;
}

const MultiTabLastListItem: React.FC<Props> = ({ remainingItems, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftInnerContainer}>
        <Text style={styles.text}>View {remainingItems} more</Text>
      </View>
      <View style={styles.rightInnerContainer}>
        <FontAwesome5 name="chevron-right" size={12} color={colors.primary.gray} />
      </View>
    </TouchableOpacity>
  );
};

export default MultiTabLastListItem;

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
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  leftInnerContainer: {
    ...globalStyles.centerAlign,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 11,
    paddingLeft: 8,
  },
  rightInnerContainer: {
    flex: 1,
  },
  text: {
    ...typography.fontPrimary,
    color: colors.tints.black,
    fontSize: 22,
  },
});

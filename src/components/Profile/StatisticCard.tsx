import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles, colors, typography } from '../../styles/globalStyles';

interface Props {
  title: string;
  value: string | number;
  renderIcon: React.ReactNode;
  style?: Object;
  // style: StyleProp<ViewStyle>;
}

const StatisticCard: React.FC<Props> = ({ title, value, renderIcon, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.icon}>{renderIcon}</View>
      <View style={styles.details}>
        <Text style={styles.valueText}>{value}</Text>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default StatisticCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 4,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.tints.gray,
    marginHorizontal: 5,
    marginVertical: 2,
    ...globalStyles.background,
  },
  icon: {
    width: 36,
    paddingTop: 4,
    paddingHorizontal: 4,
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 1,
  },
  titleText: {
    ...typography.fontSecondary,
    color: colors.primary.gray,
    top: -6,
  },
  valueText: {
    ...typography.fontPrimary,
    color: colors.tints.black,
  },
});

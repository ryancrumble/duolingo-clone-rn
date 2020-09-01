import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { colors, globalStyles } from '../../styles/globalStyles';

interface Props {
  children: React.ReactNode;
  style?: Object;
  // style: StyleProp<ViewStyle>;
}

const Header: React.FC<Props> = (props) => {
  return <View style={{ ...styles.container, ...props.style }}>{props.children}</View>;
};

export default Header;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.centerAlign,
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 2,
    borderColor: colors.tints.gray,
  },
});

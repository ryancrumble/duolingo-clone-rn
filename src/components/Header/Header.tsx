import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../styles/globalStyles';

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
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: colors.tints.gray,
  },
});

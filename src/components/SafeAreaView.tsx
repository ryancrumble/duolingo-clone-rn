import React from 'react';
import { StyleSheet, SafeAreaView as SAV } from 'react-native';
import Constants from 'expo-constants';

const SafeAreaView: React.FC<React.ReactNode> = ({ children }) => {
  return <SAV style={styles.container}>{children}</SAV>;
};

export default SafeAreaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

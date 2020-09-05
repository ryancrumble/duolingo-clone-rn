import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../components/Header/Header';

import { ProfileProps } from '../types/navigation';
import { globalStyles, typography, colors } from '../styles/globalStyles';

interface Props extends ProfileProps {}

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.headerLeft}>
          <Feather name="x" size={24} color={colors.tints.grayThree} onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.headerCenter}>
          <Text style={{ ...typography.headerText }}>Settings</Text>
        </View>
        <View style={styles.headerRight}></View>
      </Header>
      <View style={styles.bodyContainer}>
        <Text style={styles.text}>
          This was clone is built with React Native and Typescript. All screens are rendered with mock data.
        </Text>
        <Text style={{ ...typography.headingOne }}>Attribution</Text>
        <Text style={styles.text}>
          Icons made by Freepik from
          <Text style={{ ...typography.linkInlineText }} onPress={() => Linking.openURL('https://www.flaticon.com/')}>
            FreePik
          </Text>
        </Text>
        <Text style={styles.text}>
          Icons made by Icons8 from
          <Text style={{ ...typography.linkInlineText }} onPress={() => Linking.openURL('https://icons8.com/')}>
            Icons8
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { ...globalStyles.background, flex: 1 },
  headerLeft: { flex: 2, paddingLeft: 12 },
  headerCenter: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: -12,
  },
  headerRight: { flex: 2 },
  bodyContainer: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  text: {
    marginBottom: 10,
    ...typography.fontSecondary,
  },
});

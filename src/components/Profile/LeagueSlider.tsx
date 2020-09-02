import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import { colors, globalStyles, typography } from '../../styles/globalStyles';
import { getLeagueColor } from '../../utils/uiUtils';
import { LeagueItem } from '../../types/data';

interface Props {
  data: Array<any>;
  style?: Object;
  // style: StyleProp<ViewStyle>;
}

const LeagueSlider: React.FC<Props> = (props) => {
  const [activeLeague, setActiveLeague] = useState({} as LeagueItem);

  const getActiveLeague = () => {
    const league = props.data.find((league: LeagueItem) => league.isActive);
    if (league) {
      setActiveLeague(league);
    }
  };

  useEffect(() => {
    getActiveLeague();
  }, []);

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View style={styles.leagueItem}>
              <FontAwesome5
                name="shield-alt"
                size={item.isActive ? 84 : 48}
                color={item.isActive || item.isComplete ? getLeagueColor(item.color) : colors.primary.gray}
                style={styles.leagueIcon}
              />
            </View>
          );
        }}
      />
      <View style={styles.leagueDescription}>
        <Text style={styles.leagueTitle}>{activeLeague.name} League</Text>
        <Text style={styles.leagueSubText}>Top 15 advance to the next league</Text>
        <Text style={styles.leagueTimer}>3d 19h 1m</Text>
      </View>
    </View>
  );
};

export default LeagueSlider;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.centerAlign,
    height: 220,
    borderBottomWidth: 2,
    borderColor: colors.tints.gray,
  },
  leagueDescription: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leagueItem: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  leagueTitle: {
    ...typography.fontPrimary,
    fontSize: 28,
    color: colors.tints.black,
  },
  leagueSubText: {
    ...typography.fontSecondary,
    fontSize: 18,
    color: colors.primary.gray,
    marginBottom: 4,
  },
  leagueTimer: {
    ...typography.fontPrimary,
    fontSize: 22,
    color: colors.secondary.yellow,
    marginBottom: 8,
  },
  leagueIcon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

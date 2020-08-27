import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors, typography } from '../../styles/globalStyles';

interface Props {
  style?: Object;
  // style: StyleProp<ViewStyle>;
}

const Streak: React.FC<Props> = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <FontAwesome5 name="fire-alt" size={24} color={colors.secondary.orange} />
      <Text style={styles.text}>3</Text>
    </View>
  );
};

export default Streak;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 22,
    color: colors.secondary.orange,
    marginLeft: 6,
    marginRight: 10,
    textAlignVertical: 'center',
  },
});

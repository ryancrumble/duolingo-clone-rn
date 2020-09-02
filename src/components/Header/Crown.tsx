import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors, typography } from '../../styles/globalStyles';

interface Props {
  style?: Object;
  // style: StyleProp<ViewStyle>;
}

const Crown: React.FC<Props> = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <FontAwesome5 name="crown" size={24} color={colors.secondary.yellow} />
      <Text style={styles.text}>16</Text>
    </View>
  );
};

export default Crown;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    ...typography.fontPrimary,
    fontSize: 22,
    color: colors.secondary.yellow,
    marginLeft: 6,
    marginRight: 10,
    textAlignVertical: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors, typography } from '../../styles/globalStyles';

interface Props {
  style?: Object;
  // style: StyleProp<ViewStyle>;
}

const Tokens: React.FC<Props> = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <FontAwesome5 name="gem" size={22} color={colors.secondary.red} />
      <Text style={styles.text}>691</Text>
    </View>
  );
};

export default Tokens;

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
    color: colors.secondary.red,
    marginLeft: 6,
    marginRight: 10,
    textAlignVertical: 'center',
  },
});

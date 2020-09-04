import { StyleSheet } from 'react-native';

import colors from './colors';
import typography from './typography';

const globalStyles = StyleSheet.create({
  centerAlign: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: colors.primary.white,
  },
});

export { globalStyles, colors, typography };

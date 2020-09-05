import { StyleSheet } from 'react-native';

import colors from './colors';

/**
 * Baloo2SemiBold
 * Baloo2Bold
 * NunitoLight
 * NunitoRegular
 * NunitoSemiBold
 * NunitoBold
 *  */

const typography = StyleSheet.create({
  fontPrimary: {
    fontFamily: 'Baloo2SemiBold',
    fontSize: 20,
  },
  fontSecondary: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
  },
  fontSecondarySemiBold: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 20,
  },
  fontSecondaryBold: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
  },
  headerText: {
    fontFamily: 'Baloo2SemiBold',
    fontSize: 20,
    color: colors.tints.grayThree,
  },
  headingOne: {
    fontFamily: 'Baloo2SemiBold',
    fontSize: 32,
    color: colors.tints.black,
  },
  linkText: {
    fontFamily: 'Baloo2SemiBold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: colors.secondary.blue,
  },
  linkInlineText: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.secondary.blue,
  },
});

export default typography;

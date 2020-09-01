import { StyleSheet } from 'react-native';

import colors from './colors';

/**
 * BalooTamma2SemiBold
 * BalooTamma2Bold
 * NunitoLight
 * NunitoRegular
 * NunitoSemiBold
 * NunitoBold
 *  */

const typography = StyleSheet.create({
  headerText: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 20,
    color: '#B0B0B0',
  },
  headingOne: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 32,
    color: colors.tints.black,
  },
  linkText: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: colors.secondary.blue,
  },
});

export default typography;

import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { colors, globalStyles, typography } from '../../styles/globalStyles';

export interface TabType {
  key: string;
  title: string;
}

interface Props {
  selectedIndex: number;
  setSelectedIndex: any;
  tabs: TabType[];
  width?: string;
  style?: any;
}

const MultiTabSelector: React.FC<Props> = ({ selectedIndex, setSelectedIndex, tabs, style }) => {
  const buttons = tabs.map((tab) => tab.title);

  return (
    <ButtonGroup
      onPress={setSelectedIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      buttonStyle={styles.buttonStyle}
      selectedButtonStyle={styles.selectedButtonStyle}
      textStyle={styles.textStyle}
      innerBorderStyle={styles.innerBorderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      containerStyle={{ ...styles.containerStyle, ...style }}
    />
  );
};

export default MultiTabSelector;

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    borderWidth: 3,
    borderColor: colors.tints.gray,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  buttonStyle: {
    borderWidth: 0,
    marginHorizontal: 0,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },

  textStyle: {
    ...typography.fontPrimary,
    fontSize: 16,
    color: colors.secondary.blueDark,
    textTransform: 'uppercase',
  },
  selectedButtonStyle: {
    borderWidth: 0,
    borderColor: colors.secondary.yellow,
    backgroundColor: colors.primary.white,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  selectedTextStyle: {
    ...typography.fontPrimary,
    fontSize: 16,
    color: colors.primary.black,
  },
  innerBorderStyle: {
    width: 0,
  },
});

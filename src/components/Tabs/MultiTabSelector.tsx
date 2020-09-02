import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { colors, globalStyles } from '../../styles/globalStyles';

export interface TabType {
  key: string;
  title: string;
}

interface Props {
  selectedIndex: number;
  setSelectedIndex: any;
  tabs: TabType[];
  width?: string;
}

const MultiTabSelector: React.FC<Props> = ({ selectedIndex, setSelectedIndex, tabs, width }) => {
  const containerWidth = width ? width : '100%';
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
      containerStyle={{ ...styles.containerStyle, width: containerWidth }}
    />
  );
};

export default MultiTabSelector;

const styles = StyleSheet.create({
  containerStyle: {
    height: 60,
    borderWidth: 0,
  },
  buttonStyle: {
    borderWidth: 0,
  },
  textStyle: {
    color: colors.secondary.blueDark,
    fontWeight: '500',
  },
  selectedButtonStyle: {
    borderWidth: 0,
    borderColor: colors.secondary.yellow,
    backgroundColor: colors.primary.white,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: colors.primary.black,
  },
  innerBorderStyle: {
    width: 0,
  },
});

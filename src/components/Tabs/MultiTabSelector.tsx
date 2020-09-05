import React, { useState, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonGroup, ElementObject } from 'react-native-elements';
import { colors, typography } from '../../styles/globalStyles';

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

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const MultiTabSelector: React.FC<Props> = ({ selectedIndex, setSelectedIndex, tabs, style }) => {
  const [xPositions, setXPositions] = useState([] as number[]);
  const [buttons, setButtons] = useState([] as ElementObject[]);

  // const slideAnim = new Animated.Value(0);
  const buttonWidth = (1 / tabs.length) * 100 + '%';

  const initialTabs = () => {
    const _xPositions: number[] = [];
    const _buttons = tabs.map((tab, index) => {
      const component = () => {
        return (
          <AnimatedTouchable
            style={{ width: buttonWidth }}
            onLayout={(e: any) => _xPositions.push(e.nativeEvent.layout.x)}
            onPress={() => onPress(index)}
          >
            <Text style={styles.textStyle}>{tab.title}</Text>
          </AnimatedTouchable>
        );
      };

      return { element: component };
    });

    setXPositions(_xPositions);
    setButtons(_buttons);
  };

  const onPress = (index: number) => {
    setSelectedIndex(index);
    // handleSlide
    // Animated.spring(slideAnim, { toValue: xPositions[index], useNativeDriver: true }).start();
  };

  useEffect(() => {
    initialTabs();
  }, []);

  return (
    <View>
      <ButtonGroup
        onPress={() => onPress(selectedIndex)}
        selectedIndex={selectedIndex}
        buttons={buttons}
        selectedButtonStyle={styles.selectedButtonStyle}
        selectedTextStyle={styles.selectedTextStyle}
        innerBorderStyle={styles.innerBorderStyle}
        containerStyle={{ ...styles.containerStyle, ...style }}
      />
    </View>
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
    flexGrow: 0,
    flexBasis: 1,
    marginBottom: 2,
  },
  textStyle: {
    ...typography.fontPrimary,
    fontSize: 18,
    color: colors.tints.grayThree,
    textTransform: 'uppercase',
  },
  selectedButtonStyle: {
    backgroundColor: colors.primary.white,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    borderColor: colors.secondary.blue,
    borderWidth: 0,
    borderBottomWidth: 2,
  },
  selectedTextStyle: {
    ...typography.fontPrimary,
    fontSize: 16,
    color: colors.secondary.blue,
  },
  innerBorderStyle: {
    width: 0,
  },
});

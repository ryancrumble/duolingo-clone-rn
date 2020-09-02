import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import MultiTabSelector, { TabType } from './MultiTabSelector';

interface Props {
  tabs: TabType[];
}

const MultiTabView: React.FC<Props> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState({} as TabType);
  const children = props.children;

  const renderTabPane = () => {
    return React.Children.map(children, (child, i) => {
      if (child && child.hasOwnProperty('key')) {
        if (child.key === selectedTab.key) {
          return child;
        }
      }
    });
  };

  useEffect(() => {
    setSelectedTab(props.tabs[selectedIndex]);
  }, [selectedIndex]);

  return (
    <>
      <View style={styles.multiTabSelector}>
        <MultiTabSelector tabs={props.tabs} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </View>
      <View style={styles.childContainer}>{renderTabPane()}</View>
    </>
  );
};

export default MultiTabView;

const styles = StyleSheet.create({
  container: {},
  multiTabSelector: {},
  childContainer: {},
});

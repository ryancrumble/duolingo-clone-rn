import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps, BottomTabBarOptions } from '@react-navigation/bottom-tabs';

import { colors } from '../styles/globalStyles';

import { FontAwesome5 } from '@expo/vector-icons';
import CourseStack from './CourseStack';
import ProfileStack from './ProfileStack';
import LeagueStack from './LeagueStack';
import ShopStack from './ShopStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC<React.ReactNode> = () => (
  <Tab.Navigator
    tabBar={(props: BottomTabBarProps<BottomTabBarOptions>, index: number) => <BottomTabBar key={index} {...props} />}
  >
    <Tab.Screen name="Course" component={CourseStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
    <Tab.Screen name="League" component={LeagueStack} />
    <Tab.Screen name="Shop" component={ShopStack} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);

const BottomTabBar: React.FC<any> = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomTabBarContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconForBottomTabBar = (routeName: string): string => {
          switch (routeName) {
            case 'Course':
              return 'atom';
            case 'Profile':
              return 'user';
            case 'League':
              return 'shield-alt';
            case 'Shop':
              return 'store';
            default:
              return 'fontawesome5';
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            // accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={route.name}
          >
            {isFocused ? (
              // Button: Active
              <View style={styles.tabContainer}>
                <IconWithBadge
                  name={iconForBottomTabBar(route.name)}
                  size={24}
                  color={colors.primary.green}
                  badgeCount={0}
                />
              </View>
            ) : (
              // Button: Inactive
              <View style={styles.tabContainer}>
                <IconWithBadge name={iconForBottomTabBar(route.name)} size={24} color={'black'} badgeCount={0} />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const IconWithBadge: React.FC<any> = ({ name, badgeCount, color, size }) => {
  return (
    <View style={styles.iconBadgeContainer}>
      <FontAwesome5 name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.iconBadge}>
          <Text style={styles.iconBadgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBarContainer: {
    height: 60,
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  iconBadgeContainer: {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBadge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: '#CA5788',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBadgeText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default AppNavigator;

import { StackScreenProps } from '@react-navigation/stack';

/**
 * Root Stack
 */

export type RootStackParamList = {
  Course: undefined;
  Profile: undefined;
  League: undefined;
  Shop: undefined;
};

/**
 * Profile Stack
 */
export type ProfileStackParamList = {
  Profile: undefined;
  Friends: undefined;
  Settings: undefined;
};

export type ProfileProps = StackScreenProps<ProfileStackParamList, 'Profile'>;

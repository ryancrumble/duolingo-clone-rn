import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { CourseExercise } from '../../types/data';

interface Props {
  exercise: CourseExercise;
}

// TODO: Build Exercise node UI
// TODO: Get dimensions for mobile and tablet
// WIDTH: TABLET ~180px, MOBILE ~120px
// HEIGHT: width + exercise name
// Progress bar, icon, crown, name, extended details

const ExerciseNode: React.FC<Props> = ({ exercise }) => {
  const window = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text>ExerciseNode</Text>
    </View>
  );
};

export default ExerciseNode;

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 2,
    height: 120,
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FontAwesome5 } from '@expo/vector-icons';

import { CourseExercise } from '../../types/data';
import colors from '../../styles/colors';
import { getLevelColor } from '../../utils/uiUtils';

interface Props {
  exercise: CourseExercise;
}

const progressDiameter = 120;

const ExerciseNode: React.FC<Props> = ({ exercise }) => {
  const { id, definition, learner } = exercise;

  const levelColor = () => {
    return getLevelColor(learner.level, learner.isCompleted);
  };

  const getProgressPercentage = () => {
    if (!learner) {
      return 0;
    }
    return (learner.lesson / definition.lessons) * 100;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <AnimatedCircularProgress
        size={progressDiameter}
        width={8}
        fill={getProgressPercentage()}
        rotation={135}
        tintColor={colors.secondary.yellow}
        backgroundColor={colors.tints.grayTwo}
      >
        {() => <View style={{ ...styles.innerCircle, backgroundColor: levelColor() }}></View>}
      </AnimatedCircularProgress>
      {learner?.level > 0 ? (
        <View style={styles.crownContainer}>
          <FontAwesome5 name="crown" size={36} color={colors.primary.white} style={styles.crownWhiteBorder} />
          <FontAwesome5 name="crown" size={26} color={colors.secondary.yellow} style={styles.crownIcon} />
          <Text style={styles.crownText}>{learner.level}</Text>
        </View>
      ) : (
        <View style={styles.crownContainer}>
          <FontAwesome5 name="crown" size={40} color={colors.primary.white} style={styles.crownWhiteBorder} />
          <FontAwesome5 name="crown" size={32} color={colors.tints.grayTwo} style={styles.crownDisabled} />
        </View>
      )}

      <View style={styles.exerciseTextContainer}>
        <Text style={styles.exerciseText}>{definition.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseNode;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
  },
  innerCircle: {
    opacity: 0.8,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: progressDiameter * 0.75, // 90px
    width: progressDiameter * 0.75, // 90px
  },
  exerciseTextContainer: {
    marginTop: 6,
  },
  exerciseText: {
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 20,
  },
  crownContainer: {
    position: 'absolute',
    left: 98,
    top: 66,
    width: 52,
    height: 52,
  },
  crownWhiteBorder: {
    position: 'absolute',
    zIndex: 11,
  },
  crownDisabled: {
    position: 'absolute',
    top: 6,
    left: 5,
    zIndex: 12,
  },
  crownIcon: {
    position: 'absolute',
    top: 8,
    left: 6,
    zIndex: 13,
  },
  crownText: {
    position: 'absolute',
    top: 10,
    left: 18,
    textAlign: 'center',
    color: colors.tints.yellowDark,
    fontFamily: 'BalooTamma2SemiBold',
    fontSize: 18,
    zIndex: 14,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Course, CourseSection } from '../../types/data';
import ExerciseNode from './ExerciseNode';

interface Props {
  data: Course;
}

const renderSection = ({ item }: any) => {
  const { id, data } = item as CourseSection;

  return (
    <View style={styles.section}>
      {/* Section */}
      {data.map((tier) => {
        return (
          <View style={styles.tier} key={tier.tier}>
            {/* Tier */}
            {tier.exercises.map((exercise) => {
              return <ExerciseNode exercise={exercise} key={exercise.id} />;
            })}
          </View>
        );
      })}
    </View>
  );
};

const ExerciseTree: React.FC<Props> = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data.sections}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExerciseTree;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    paddingBottom: 60,
  },
  tier: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Course, CourseSection } from '../../types/data';
import ExerciseNode from './ExerciseNode';

interface Props {
  data: Course;
}

const renderSection = ({ item }: any) => {
  const { id, data } = item as CourseSection;
  // const backgroundColor = id === selectedId ? '#6e3b6e' : '#f9c2ff';

  // return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;

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
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View>
      <FlatList data={data.sections} renderItem={renderSection} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default ExerciseTree;

const styles = StyleSheet.create({
  section: {
    borderColor: 'green',
    borderWidth: 4,
    flex: 1,
    paddingHorizontal: '15%',
  },
  tier: {
    borderColor: 'lightgreen',
    borderWidth: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 40,
  },
});

/**
 * Course Data
 */
import { Language } from './language';

export interface Course {
  course?: Language;
  sections: CourseSection[];
}

export interface CourseSection {
  id: string;
  data: CourseTier[];
}

export interface CourseTier {
  tier: number;
  exercises: CourseExercise[];
}

export interface CourseExercise {
  id: string;
  definition: CourseExerciseDefinition;
  leaner?: {
    level: number;
    lesson: number;
  };
}

export interface CourseExerciseDefinition {
  name: string;
  levels: number;
  lessons: number;
}

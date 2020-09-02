import { Language } from './language';
/**
 * Course Data
 */

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
  learner: {
    level: number;
    lesson: number;
    isCompleted: boolean;
  };
}

export interface CourseExerciseDefinition {
  name: string;
  levels: number;
  lessons: number;
}

/**
 * Shop Data
 */

export interface ShopData {
  generalSections: ShopSection[];
  courseSections: ShopSection[];
}

export interface ShopSection {
  name: string;
  items: ShopItem[];
}

export interface ShopItem {
  name: string;
  description: string;
  tokenCost: number;
  image: string;
}

/**
 *
 * League Data
 */

export interface LeagueItem {
  name: string;
  isComplete: boolean;
  isActive: boolean;
  color: string;
}

/**
 *
 * Profile Data
 */

export interface FriendItem {
  name: string;
  exp: number;
}

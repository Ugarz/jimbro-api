import { ExerciseModel } from '../models/exercise.model';

export type SetContract = {
  id: string;
  repetitions: number;
  weight: number;
  exercise: ExerciseModel;
};

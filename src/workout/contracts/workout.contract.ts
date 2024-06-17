import { ExerciseModel } from '../models/exercise.model';
import { SessionModel } from '../models/session.model';

export type WorkoutContract = {
  id: string;
  name: string;
  description: string;
  duration: number;
  difficulty: string;
  exercises: ExerciseModel[];
  instances: SessionModel[];
};

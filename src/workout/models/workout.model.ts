import { WorkoutContract } from '../contracts/workout.contract';
import { ExerciseModel } from './exercise.model';
import { SessionModel } from './session.model';

export class WorkoutModel implements WorkoutContract {
  id: string;
  name: string;
  description: string;
  duration: number;
  difficulty: string;
  exercises: ExerciseModel[];
  instances: SessionModel[];
}

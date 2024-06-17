import { ExerciseContract } from '../contracts/exercise.contract';
import { SetModel } from './set.model';
import { WorkoutModel } from './workout.model';

export class ExerciseModel implements ExerciseContract {
  id: string;
  name: string;
  workout: WorkoutModel;
  sets: SetModel[];
}

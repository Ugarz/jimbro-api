import { SetModel } from '../models/set.model';
import { WorkoutModel } from '../models/workout.model';

export type ExerciseContract = {
  id: string;
  name: string;
  workout: WorkoutModel;
  sets: SetModel[];
};

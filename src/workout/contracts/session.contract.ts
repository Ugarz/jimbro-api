import { WorkoutModel } from '../models/workout.model';

export type SessionContract = {
  id: string;
  workout: WorkoutModel;
  date: Date;
};

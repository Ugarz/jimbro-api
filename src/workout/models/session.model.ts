import { SessionContract } from '../contracts/session.contract';
import { WorkoutModel } from './workout.model';

export class SessionModel implements SessionContract {
  id: string;
  workout: WorkoutModel;
  date: Date;
}

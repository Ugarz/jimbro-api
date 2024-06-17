import { SetContract } from '../contracts/set.contract';
import { ExerciseModel } from './exercise.model';

export class SetModel implements SetContract {
  id: string;
  repetitions: number;
  weight: number;
  exercise: ExerciseModel;
}

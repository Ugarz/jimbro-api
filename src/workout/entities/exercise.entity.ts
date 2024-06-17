import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { WorkoutEntity } from './workout.entity';
import { SetEntity } from './set.entity';

@Entity('exercises')
export class ExerciseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => WorkoutEntity, (workout) => workout.exercises)
  workout: WorkoutEntity;

  @OneToMany(() => SetEntity, (set) => set.exercise)
  sets: SetEntity[];
}

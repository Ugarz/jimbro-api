import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Workout } from './workout.entity';
import { Set } from './set.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Workout, (workout) => workout.exercises)
  workout: Workout;

  @OneToMany(() => Set, (set) => set.exercise)
  sets: Set[];
}

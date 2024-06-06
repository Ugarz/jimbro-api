import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Workout } from './workout.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Workout, (workout) => workout.instances)
  workout: Workout;

  @Column()
  date: Date;
}

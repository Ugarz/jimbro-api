import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity()
export class Set {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repetitions: number;

  @Column()
  weight: number; // weight in kg

  @ManyToOne(() => Exercise, (exercise) => exercise.sets)
  exercise: Exercise;
}

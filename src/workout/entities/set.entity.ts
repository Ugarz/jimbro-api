import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ExerciseEntity } from './exercise.entity';

@Entity('sets')
export class SetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repetitions: number;

  @Column()
  weight: number;

  @ManyToOne(() => ExerciseEntity, (exercise) => exercise.sets)
  exercise: ExerciseEntity;
}

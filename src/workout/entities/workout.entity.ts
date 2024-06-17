import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExerciseEntity } from './exercise.entity';
import { SessionEntity } from './session.entity';

@Entity('workouts')
export class WorkoutEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  difficulty: string;

  @OneToMany(() => ExerciseEntity, (exercise) => exercise.workout)
  exercises: ExerciseEntity[];

  @OneToMany(() => SessionEntity, (session) => session.workout)
  instances: SessionEntity[];
}

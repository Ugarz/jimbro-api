import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Exercise } from './exercise.entity';
import { Session } from './session.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number; // duration in minutes

  @Column()
  difficulty: string; // e.g., 'beginner', 'intermediate', 'advanced'

  @OneToMany(() => Exercise, (exercise) => exercise.workout)
  exercises: Exercise[];

  @OneToMany(() => Session, (session) => session.workout)
  instances: Session[];
}

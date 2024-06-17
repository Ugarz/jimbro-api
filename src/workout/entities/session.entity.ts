import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { WorkoutEntity } from './workout.entity';

@Entity('sessions')
export class SessionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => WorkoutEntity, (workout) => workout.instances)
  workout: WorkoutEntity;

  @Column()
  date: Date;
}

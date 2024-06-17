import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkoutEntity } from './entities/workout.entity';
import { ExerciseEntity } from './entities/exercise.entity';
import { SetEntity } from './entities/set.entity';
import { SessionEntity } from './entities/session.entity';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private workoutRepository: Repository<WorkoutEntity>,
    @InjectRepository(ExerciseEntity)
    private exerciseRepository: Repository<ExerciseEntity>,
    @InjectRepository(SetEntity)
    private setRepository: Repository<SetEntity>,
    @InjectRepository(SessionEntity)
    private sessionRepository: Repository<SessionEntity>,
  ) {}

  findAll(): Promise<WorkoutEntity[]> {
    return this.workoutRepository.find({
      relations: ['exercises', 'exercises.sets'],
    });
  }

  findOne(id: string): Promise<WorkoutEntity> {
    return this.workoutRepository.findOne({
      where: { id },
      relations: ['exercises', 'exercises.sets'],
    });
  }

  async create(workoutData: CreateWorkoutDto): Promise<WorkoutEntity> {
    const workout = new WorkoutEntity();
    workout.name = workoutData.name;
    workout.description = workoutData.description;
    workout.duration = workoutData.duration;
    workout.difficulty = workoutData.difficulty;

    const createdWorkout = await this.workoutRepository.save(workout);

    for (const exerciseData of workoutData.exercises) {
      const exercise = new ExerciseEntity();
      exercise.name = exerciseData.name;
      exercise.workout = createdWorkout;

      const createdExercise = await this.exerciseRepository.save(exercise);

      for (const setData of exerciseData.sets) {
        const set = new SetEntity();
        set.repetitions = setData.repetitions;
        set.weight = setData.weight;
        set.exercise = createdExercise;

        await this.setRepository.save(set);
      }
    }

    return this.findOne(createdWorkout.id);
  }

  async createInstance(workoutId: string): Promise<SessionEntity> {
    const workout = await this.findOne(workoutId);
    const session = new SessionEntity();
    session.workout = workout;
    session.date = new Date();

    return this.sessionRepository.save(session);
  }

  async remove(id: number): Promise<void> {
    await this.workoutRepository.delete(id);
  }
}

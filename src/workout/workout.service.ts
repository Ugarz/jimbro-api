import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';
import { Exercise } from './entities/exercise.entity';
import { Set } from './entities/set.entity';
import { Session } from './entities/session.entity';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>,
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
    @InjectRepository(Set)
    private setRepository: Repository<Set>,
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  findAll(): Promise<Workout[]> {
    return this.workoutRepository.find({
      relations: ['exercises', 'exercises.sets'],
    });
  }

  findOne(id: string): Promise<Workout> {
    return this.workoutRepository.findOne({
      where: { id },
      relations: ['exercises', 'exercises.sets'],
    });
  }

  async create(workoutData: CreateWorkoutDto): Promise<Workout> {
    const workout = new Workout();
    workout.name = workoutData.name;
    workout.description = workoutData.description;
    workout.duration = workoutData.duration;
    workout.difficulty = workoutData.difficulty;

    const createdWorkout = await this.workoutRepository.save(workout);

    for (const exerciseData of workoutData.exercises) {
      const exercise = new Exercise();
      exercise.name = exerciseData.name;
      exercise.workout = createdWorkout;

      const createdExercise = await this.exerciseRepository.save(exercise);

      for (const setData of exerciseData.sets) {
        const set = new Set();
        set.repetitions = setData.repetitions;
        set.weight = setData.weight;
        set.exercise = createdExercise;

        await this.setRepository.save(set);
      }
    }

    return this.findOne(createdWorkout.id);
  }

  async createInstance(workoutId: string): Promise<Session> {
    const workout = await this.findOne(workoutId);
    const session = new Session();
    session.workout = workout;
    session.date = new Date();

    return this.sessionRepository.save(session);
  }

  async update(id: number, workoutData: any): Promise<void> {
    // Mise à jour d'un workout avec logique similaire à la création
  }

  async remove(id: number): Promise<void> {
    await this.workoutRepository.delete(id);
  }
}

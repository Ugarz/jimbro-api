import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workout } from './entities/workout.entity';
import { Exercise } from './entities/exercise.entity';
import { Set } from './entities/set.entity';
import { Session } from './entities/session.entity';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Workout, Exercise, Set, Session])],
  providers: [WorkoutService],
  controllers: [WorkoutController],
})
export class WorkoutModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from './entities/workout.entity';
import { ExerciseEntity } from './entities/exercise.entity';
import { SetEntity } from './entities/set.entity';
import { SessionEntity } from './entities/session.entity';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutEntity, ExerciseEntity, SetEntity, SessionEntity])],
  providers: [WorkoutService],
  controllers: [WorkoutController],
})
export class WorkoutModule {}

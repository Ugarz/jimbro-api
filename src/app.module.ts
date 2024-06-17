import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutModule } from './workout/workout.module';
import { WorkoutEntity } from './workout/entities/workout.entity';
import { ExerciseEntity } from './workout/entities/exercise.entity';
import { SetEntity } from './workout/entities/set.entity';
import { SessionEntity } from './workout/entities/session.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [WorkoutEntity, ExerciseEntity, SetEntity, SessionEntity],
      synchronize: true,
    }),
    WorkoutModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutModule } from './workout/workout.module';
import { Workout } from './workout/entities/workout.entity';
import { Exercise } from './workout/entities/exercise.entity';
import { Set } from './workout/entities/set.entity';
import { Session } from './workout/entities/session.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // 'postgres' si vous exécutez à partir de Docker compose
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [Workout, Exercise, Set, Session],
      synchronize: true, // Ne pas utiliser en production - cela peut causer la perte de données
    }),
    WorkoutModule,
  ],
})
export class AppModule {}

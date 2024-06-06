import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkoutService,
        { provide: 'WorkoutRepository', useClass: MockWorkoutRepository },
        { provide: 'ExerciseRepository', useClass: MockExerciseRepository },
        { provide: 'SetRepository', useClass: MockSetRepository },
        { provide: 'SessionRepository', useClass: MockSessionRepository },
      ],
    }).compile();

    service = module.get<WorkoutService>(WorkoutService);
  });

  it('should create a workout', () => {
    expect(
      service.create({
        name: 'Morning Routine',
        description: 'A simple morning workout routine',
        duration: 30,
        difficulty: 'medium',
        exercises: [
          {
            name: 'Push-ups',
            sets: [
              {
                repetitions: 10,
                weight: 0,
              },
            ],
          },
          {
            name: 'Squats',
            sets: [
              {
                repetitions: 15,
                weight: 0,
              },
            ],
          },
        ],
      }),
    ).toBe('This action adds a new workout');
  });
});

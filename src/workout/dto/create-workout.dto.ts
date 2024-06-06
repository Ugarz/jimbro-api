import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkoutDto {
  @ApiProperty({
    example: 'Morning Routine',
    description: 'The name of the workout',
  })
  name: string;

  @ApiProperty({
    example: 'A simple morning workout routine',
    description: 'The description of the workout',
  })
  description: string;

  @ApiProperty({
    example: 30,
    description: 'The duration of the workout in minutes',
  })
  duration: number;

  @ApiProperty({
    example: 'medium',
    description: 'The difficulty level of the workout',
  })
  difficulty: string;

  @ApiProperty({
    example: [
      { name: 'Push-ups', sets: [{ repetitions: 10, weight: 0 }] },
      { name: 'Squats', sets: [{ repetitions: 15, weight: 0 }] },
    ],
    description: 'The exercises included in the workout',
  })
  exercises: {
    name: string;
    sets: { repetitions: number; weight: number }[];
  }[];
}

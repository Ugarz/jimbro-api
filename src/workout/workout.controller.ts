import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Workout } from './entities/workout.entity';

@ApiTags('workout')
@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get()
  @ApiOperation({ summary: 'Get all workouts' })
  @ApiResponse({
    status: 200,
    description: 'Return all workouts',
    type: [Workout],
  })
  findAll() {
    return this.workoutService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a workout by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the workout',
    type: Workout,
  })
  @ApiResponse({ status: 404, description: 'Workout not found' })
  findOne(@Param('id') id: string) {
    return this.workoutService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new workout' })
  @ApiResponse({
    status: 201,
    description: 'The workout has been successfully created.',
    type: Workout,
  })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  create(@Body() createWorkoutDto: CreateWorkoutDto) {
    return this.workoutService.create(createWorkoutDto);
  }
}

import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateExerciceTrainingDto {
  @IsNotEmpty()
  @IsNumber()
  trainingId: number;

  @IsNotEmpty()
  @IsNumber()
  exerciceId: number;

  @IsNotEmpty()
  @IsNumber()
  sets: number;

  @IsNotEmpty()
  @IsNumber()
  repetitions: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;
}

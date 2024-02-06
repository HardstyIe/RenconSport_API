import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRoundDto {
  @IsNotEmpty()
  @IsNumber()
  trainingId: string;

  @IsNotEmpty()
  @IsNumber()
  exerciceId: string;

  @IsNotEmpty()
  @IsNumber()
  sets: number;

  @IsNotEmpty()
  @IsNumber()
  repetitions: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}

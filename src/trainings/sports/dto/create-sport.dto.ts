import { Training } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateSportDto {
  @IsString()
  name: string;

  @IsString()
  icon: string;

  trainings: Training;
}

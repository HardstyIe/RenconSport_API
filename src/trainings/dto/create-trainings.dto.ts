import { Group, LocationType, Round } from '@prisma/client';
import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateTrainingDto {
  @IsUUID()
  @IsNotEmpty()
  user: string; // Cela devrait être l'ID de l'utilisateur créant l'entraînement

  @IsDateString()
  @IsNotEmpty()
  startedAt: Date;

  @IsDateString()
  @IsNotEmpty()
  finishedAt: Date;

  @IsString()
  @IsNotEmpty()
  location: LocationType;

  group: Group;

  rounds: Round[];

  @IsUUID()
  @IsNotEmpty()
  partners: string[];

  @IsString()
  @IsNotEmpty()
  mode: string;
}

import { Group, LocationType, Round, User } from '@prisma/client';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTrainingDto {
  @IsUUID()
  @IsNotEmpty()
  user: string;

  @IsDateString()
  @IsNotEmpty()
  startedAt: Date;

  @IsDateString()
  @IsNotEmpty()
  finishedAt: Date;

  @IsString()
  @IsNotEmpty()
  location: LocationType;

  @IsArray()
  @IsNotEmpty()
  group: Group;

  @IsArray()
  @IsNotEmpty()
  rounds: Round[];

  @IsArray()
  @IsNotEmpty()
  partners: User[];

  mode: string;
}

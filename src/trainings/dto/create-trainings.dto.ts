import { LocationType } from '@prisma/client';
import {
  IsArray,
  IsDate,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTrainingDto {
  @IsString()
  user: string;

  @IsString()
  sportId: string;

  @IsDate()
  startedAt: Date;

  @IsDate()
  finishedAt: Date;

  @IsString()
  mode: string;

  // Location
  @IsString()
  locationType: LocationType;

  @IsNumber()
  locationLatitude: number;

  @IsNumber()
  locationLongitude: number;

  // Rounds
  @IsArray()
  exerciceIds: string[];

  @IsOptional()
  @IsObject()
  commonRound?: {
    repetitions?: number;
    sets?: number;
    duration?: number;
    weight?: number;
  };

  @IsOptional()
  @IsArray()
  @IsObject({ each: true })
  specificRounds?: {
    exerciceId: string;
    repetitions?: number;
    sets?: number;
    duration?: number;
    weight?: number;
  }[];
}

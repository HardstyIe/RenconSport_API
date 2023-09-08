import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateTrainingDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsDateString()
  @IsNotEmpty()
  startAt: Date;

  @IsDateString()
  @IsNotEmpty()
  finishAt: Date;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  dynamicLatitude: number;

  dynamicLongitude: number;
}

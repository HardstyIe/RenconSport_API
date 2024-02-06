import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTrainingDto {
  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsDateString()
  @IsOptional()
  startAt?: Date;

  @IsDateString()
  @IsOptional()
  finishAt?: Date;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  status?: string;

  // Ajoutez d'autres champs si nécessaire
}

import { Difficulty, Round, User } from '@prisma/client';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateExerciceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  difficulty?: Difficulty;

  @IsOptional()
  @IsBoolean()
  is_liked?: boolean;

  @IsOptional()
  @IsString()
  round?: Round;

  @IsOptional()
  @IsString()
  user?: User;

  @IsOptional()
  @IsString()
  sport?: string;
}

import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateExerciceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  difficulty?: string;

  @IsOptional()
  @IsBoolean()
  is_liked?: boolean;
}

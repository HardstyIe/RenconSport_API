import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  difficulty: string;

  @IsBoolean()
  is_liked: boolean;
}

import { Difficulty, Round, User } from '@prisma/client';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  difficulty: Difficulty;

  @IsBoolean()
  is_liked: boolean;

  @IsNotEmpty()
  @IsString()
  round: Round;

  @IsNotEmpty()
  @IsString()
  user: User;
}

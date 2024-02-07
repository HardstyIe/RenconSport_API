import { Type } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  name: string;

  @IsString()
  training: string;

  @IsString()
  type: Type;

  @IsString()
  ownerId: string; // Ajoutez cette ligne
}

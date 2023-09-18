import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  training: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
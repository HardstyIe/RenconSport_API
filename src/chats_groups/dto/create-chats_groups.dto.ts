import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateChatGroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  training_id?: number;

  @IsNotEmpty()
  @IsString()
  type: string;
}

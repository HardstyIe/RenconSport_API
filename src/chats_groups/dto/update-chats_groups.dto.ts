import { IsOptional, IsString } from 'class-validator';

export class UpdateChatGroupDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  training_id?: number;

  @IsOptional()
  @IsString()
  type?: string;
}

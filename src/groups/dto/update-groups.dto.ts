import { IsOptional, IsString } from 'class-validator';

export class UpdateGroupDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  training_id?: string;

  @IsOptional()
  @IsString()
  type?: string;
}

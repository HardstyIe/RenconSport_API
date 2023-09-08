import { IsOptional, IsString } from 'class-validator';

export class UpdateUsersLikesDto {
  @IsString()
  @IsOptional()
  liker_id?: string;

  @IsString()
  @IsOptional()
  liked_id?: string;
}

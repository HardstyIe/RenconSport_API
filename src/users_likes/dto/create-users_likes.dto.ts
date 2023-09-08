import { IsString } from 'class-validator';

export class CreateUsersLikesDto {
  @IsString()
  liker_id: string;

  @IsString()
  liked_id: string;
}

import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @Length(5, 100)
  @IsEmail()
  email: string;

  @IsString()
  @Length(5, 100)
  password: string;
}

import { IsDate, IsEmail, IsString, Length } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @Length(5, 100)
  @IsEmail()
  email: string;

  @IsString()
  @Length(5, 100)
  password: string;

  @IsString()
  @Length(1, 50)
  first_name: string;

  @IsString()
  @Length(1, 50)
  last_name: string;

  @IsDate()
  birthday: Date;

  facebookId?: string;
  googleId?: string;
}

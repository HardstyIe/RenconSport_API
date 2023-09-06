import { IsDate, IsEmail, IsString, Length } from 'class-validator';

export class CreateUsersDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(5, 100)
  password: string;

  @IsString()
  @Length(1, 50)
  firstName: string;

  @IsString()
  @Length(1, 50)
  lastName: string;

  @IsDate()
  birthday: Date;
}

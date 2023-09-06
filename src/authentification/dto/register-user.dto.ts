import { IsString, Length } from 'class-validator';

export class RegisterUsersDto {
  @IsString()
  @Length(5, 100)
  email: string;

  @IsString()
  @Length(5, 100)
  password: string;

  @IsString()
  @Length(5, 100)
  firstName: string;

  @IsString()
  @Length(5, 100)
  lastName: string;

  @IsString()
  birthday: string;
}

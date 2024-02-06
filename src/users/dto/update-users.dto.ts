import { IsDate, IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUsersDto {
  @IsEmail()
  @Length(5, 100)
  @IsOptional()
  email?: string;

  @IsString()
  @Length(5, 100)
  @IsOptional()
  password?: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  first_name?: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  last_name?: string;

  @IsDate()
  @IsOptional()
  birthday?: Date;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  phoneNumber?: string;
}

import { IsDate, IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUsersDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @Length(5, 100)
  @IsOptional()
  password?: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  firstName?: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  lastName?: string;

  @IsDate()
  @IsOptional()
  birthday?: Date;
}

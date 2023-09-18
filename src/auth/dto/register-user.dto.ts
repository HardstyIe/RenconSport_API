import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterUsersDto {
  @ApiProperty({ description: "Email de l'utilisateur" })
  @IsEmail()
  @Length(5, 100)
  email: string;

  @ApiProperty({ description: "Mot de passe de l'utilisateur" })
  @IsString()
  @Length(5, 100)
  password: string;
}

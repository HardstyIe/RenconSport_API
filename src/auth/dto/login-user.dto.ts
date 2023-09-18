import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: "Email de l'utilisateur" })
  @IsString()
  @Length(5, 100)
  email: string;

  @ApiProperty({ description: "Mot de passe de l'utilisateur" })
  @IsString()
  @Length(5, 100)
  password: string;
}

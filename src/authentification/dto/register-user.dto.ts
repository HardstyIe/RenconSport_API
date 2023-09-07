import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class RegisterUsersDto {
  @ApiProperty({ description: "Email de l'utilisateur" })
  @IsString()
  @Length(5, 100)
  email: string;

  @ApiProperty({ description: "Mot de passe de l'utilisateur" })
  @IsString()
  @Length(5, 100)
  password: string;

  @ApiProperty({ description: "Prénom de l'utilisateur" })
  @IsString()
  @Length(5, 100)
  firstName: string;

  @ApiProperty({ description: "Nom de famille de l'utilisateur" })
  @IsString()
  @Length(5, 100)
  lastName: string;

  @ApiProperty({ description: "Anniversaire de l'utilisateur en timestamp" })
  @IsNumber()
  birthday: number;
}

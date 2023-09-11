import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GoogleLoginDto {
  @ApiProperty({
    description: 'Google ID token',
    example: 'your-google-id-token',
  })
  @IsNotEmpty()
  @IsString()
  token: string;
}

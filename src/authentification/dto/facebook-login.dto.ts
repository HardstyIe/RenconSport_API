import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FacebookLoginDto {
  @ApiProperty({
    description: 'Facebook access token',
    example: 'your-facebook-access-token',
  })
  @IsNotEmpty()
  @IsString()
  token: string;
}

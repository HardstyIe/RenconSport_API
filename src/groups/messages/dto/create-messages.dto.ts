import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  group: string;

  @IsNotEmpty()
  @IsUUID()
  sender_id: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}

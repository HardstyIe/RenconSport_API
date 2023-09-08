import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateChatMessageDto {
  @IsNotEmpty()
  chat_group_id: number;

  @IsNotEmpty()
  @IsUUID()
  sender_id: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  sent_at: Date;
}

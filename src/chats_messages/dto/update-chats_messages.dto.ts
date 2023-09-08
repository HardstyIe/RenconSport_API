import { IsDate, IsString } from 'class-validator';

export class UpdateChatMessageDto {
  @IsString()
  content?: string;

  @IsDate()
  sentAt?: Date;
}

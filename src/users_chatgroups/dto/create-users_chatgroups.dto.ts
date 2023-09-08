import { IsInt, IsString } from 'class-validator';

export class CreateUserChatGroupDto {
  @IsString()
  user_id: string;

  @IsInt()
  chat_group_id: number;
}

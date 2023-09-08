import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateUserChatGroupDto {
  @IsString()
  @IsOptional()
  user_id?: string;

  @IsInt()
  @IsOptional()
  chat_group_id?: number;
}

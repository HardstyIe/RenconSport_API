import { Prisma } from '@prisma/client';

export class UserChatGroup implements Prisma.UserChatGroupCreateInput {
  user: Prisma.UserCreateNestedOneWithoutUserChatGroupsInput;
  chat_group: Prisma.ChatGroupCreateNestedOneWithoutUserChatGroupsInput;
}

import { Prisma } from '@prisma/client';

export class message implements Prisma.MessageCreateInput {
  id?: string;
  content: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  group: Prisma.GroupCreateNestedOneWithoutMessagesInput;
  sender: Prisma.UserCreateNestedOneWithoutMessagesInput;
}

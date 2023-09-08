import { Prisma } from '@prisma/client';

export class ChatMessage implements Prisma.ChatMessageCreateInput {
  sent_at: string | Date;
  chat_group: Prisma.ChatGroupCreateNestedOneWithoutChatMessagesInput;
  sender: Prisma.UserCreateNestedOneWithoutChatMessagesInput;
  chatGroupId: number;
  senderId: string;
  content: string;
  sentAt: Date;
}

import { Prisma } from '@prisma/client';

export class ChatGroup implements Prisma.ChatGroupCreateInput {
  training: Prisma.TrainingCreateNestedOneWithoutChatGroupsInput;
  UserChatGroups?: Prisma.UserChatGroupCreateNestedManyWithoutChat_groupInput;
  ChatMessages?: Prisma.ChatMessageCreateNestedManyWithoutChat_groupInput;
  id: number;
  name: string;
  training_id?: number;
  type: string;
}

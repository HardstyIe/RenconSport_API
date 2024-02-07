import { $Enums, Prisma } from '@prisma/client';

export class Group implements Prisma.GroupCreateInput {
  owner: Prisma.UserCreateNestedOneWithoutCreatedGroupsInput;
  id?: string;
  name?: string;
  type: $Enums.Type;
  members?: Prisma.UserCreateNestedManyWithoutJoinedGroupsInput;
  training: Prisma.TrainingCreateNestedOneWithoutGroupInput;
  messages?: Prisma.MessageCreateNestedManyWithoutGroupInput;
}

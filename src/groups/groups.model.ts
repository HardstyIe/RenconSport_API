import { $Enums, Prisma } from '@prisma/client';

export class Group implements Prisma.GroupCreateInput {
  id?: string;
  name?: string;
  type: $Enums.Type;
  training: Prisma.TrainingCreateNestedOneWithoutGroupInput;
  messages?: Prisma.MessageCreateNestedManyWithoutGroupInput;
}

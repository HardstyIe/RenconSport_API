import { Prisma } from '@prisma/client';

export interface ChatGroup implements Prisma.ChatGroupCreateInput {
  id: number;
  name: string;
  training_id?: number;
  type: string;
}

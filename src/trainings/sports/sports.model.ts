import { Prisma } from '@prisma/client';

export class Sport implements Prisma.SportCreateInput {
  id?: string;
  name: string;
  icon: string;
  trainings?: Prisma.TrainingCreateNestedManyWithoutSportInput;
}

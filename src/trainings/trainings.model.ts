import { Prisma } from '@prisma/client';

export class Training implements Prisma.TrainingCreateInput {
  id?: string;
  startedAt: string | Date;
  finishedAt: string | Date;
  mode: string;
  user: Prisma.UserCreateNestedOneWithoutCreatedTrainingsInput;
  group?: Prisma.GroupCreateNestedOneWithoutTrainingInput;
  location?: Prisma.LocationCreateNestedOneWithoutTrainingInput;
  rounds?: Prisma.RoundCreateNestedManyWithoutTrainingInput;
  partners?: Prisma.UserCreateNestedManyWithoutJoinedTrainingsInput;
}

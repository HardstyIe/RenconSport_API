import { Prisma } from '@prisma/client';

export class Training implements Prisma.TrainingCreateInput {
  dynamic_latitude: number;
  dynamic_longitude: number;
  start_at: string | Date;
  finish_at: string | Date;
  location: string;
  status: string;
  user: Prisma.UserCreateNestedOneWithoutTrainingsInput;
  ExerciceTrainings?: Prisma.ExerciceTrainingCreateNestedManyWithoutTrainingInput;
  TrainingPartners?: Prisma.TrainingPartnerCreateNestedManyWithoutTrainingInput;
  ChatGroups?: Prisma.ChatGroupCreateNestedManyWithoutTrainingInput;
}

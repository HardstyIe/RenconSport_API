import { Prisma } from '@prisma/client';

export class TrainingPartner implements Prisma.TrainingPartnerCreateInput {
  status: string;
  training: Prisma.TrainingCreateNestedOneWithoutTrainingPartnersInput;
  user: Prisma.UserCreateNestedOneWithoutTrainingPartnersInput;
}

import { Prisma } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  birthday: Date;
  location?: string;
  phone?: string;
  ChatMessages?: Prisma.ChatMessageCreateNestedManyWithoutSenderInput;
  Trainings?: Prisma.TrainingCreateNestedManyWithoutUserInput;
  TrainingPartners?: Prisma.TrainingPartnerCreateNestedManyWithoutUserInput;
  ExerciceLikes?: Prisma.ExerciceLikeCreateNestedManyWithoutUserInput;
  Liked?: Prisma.UserLikeCreateNestedManyWithoutLikedInput;
  LikedBy?: Prisma.UserLikeCreateNestedManyWithoutLikerInput;
  UserChatGroups?: Prisma.UserChatGroupCreateNestedManyWithoutUserInput;
}

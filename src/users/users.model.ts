import { Prisma } from '@prisma/client';

export enum RegistrationMethod {
  EMAIL = 'EMAIL',
  GOOGLE = 'GOOGLE',
}

export class User implements Prisma.UserCreateInput {
  is_admin?: boolean;
  
  id?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  registrationMethod?: RegistrationMethod;
  password: string;
  birthday?: Date;
  location?: string;
  phoneNumber?: string;
  ChatMessages?: Prisma.ChatMessageCreateNestedManyWithoutSenderInput;
  Trainings?: Prisma.TrainingCreateNestedManyWithoutUserInput;
  TrainingPartners?: Prisma.TrainingPartnerCreateNestedManyWithoutUserInput;
  ExerciceLikes?: Prisma.ExerciceLikeCreateNestedManyWithoutUserInput;
  liked?: Prisma.UserLikeCreateNestedManyWithoutLikedInput;
  liked_by?: Prisma.UserLikeCreateNestedManyWithoutLikerInput;
  UserChatGroups?: Prisma.UserChatGroupCreateNestedManyWithoutUserInput;
  googleId?: string;
}

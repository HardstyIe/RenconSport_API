import { Prisma } from '@prisma/client';

export enum RegistrationMethod {
  EMAIL = 'EMAIL',
  GOOGLE = 'GOOGLE',
}

export class User implements Prisma.UserCreateInput {
  id?: string;
  email: string;
  phoneNumber?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  biography?: string;
  birthday?: string | Date;
  isAdmin?: boolean;
  location?: Prisma.LocationCreateNestedOneWithoutUserInput;
  messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
  likedExercices?: Prisma.ExerciceCreateNestedManyWithoutUsersInput;
  likedUsers?: Prisma.UserCreateNestedManyWithoutLikedByInput;
  likedBy?: Prisma.UserCreateNestedManyWithoutLikedUsersInput;
  createdTrainings?: Prisma.TrainingCreateNestedManyWithoutUserInput;
  joinedTrainings?: Prisma.TrainingCreateNestedManyWithoutPartnersInput;
}

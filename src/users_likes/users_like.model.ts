import { Prisma } from '@prisma/client';

export class UserLike implements Prisma.UserLikeCreateInput {
  liker: Prisma.UserCreateNestedOneWithoutLikedByInput;
  liked: Prisma.UserCreateNestedOneWithoutLikedInput;
}

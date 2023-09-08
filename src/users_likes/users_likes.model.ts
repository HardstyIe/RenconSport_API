import { Prisma } from '@prisma/client';

export class UserLike implements Prisma.UserLikeCreateInput {
  liker: Prisma.UserCreateNestedOneWithoutLike_byInput;
  liked: Prisma.UserCreateNestedOneWithoutLikedInput;
}

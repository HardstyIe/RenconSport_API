import { $Enums, Prisma } from '@prisma/client';

export class Exercice implements Prisma.ExerciceCreateInput {
  sport: Prisma.SportCreateNestedOneWithoutExercicesInput;
  id?: string;
  name: string;
  difficulty: $Enums.Difficulty;
  rounds?: Prisma.RoundCreateNestedManyWithoutExerciceInput;
  users?: Prisma.UserCreateNestedManyWithoutLikedExercicesInput;
}

import { Prisma } from '@prisma/client';

export class Exercice implements Prisma.ExerciceCreateInput {
  id?: number;
  name: string;
  difficulty: string;
  is_liked?: boolean;
  exerciceTrainings?: Prisma.ExerciceTrainingCreateNestedManyWithoutExerciceInput;
  exerciceLikes?: Prisma.ExerciceLikeCreateNestedManyWithoutExerciceInput;
}

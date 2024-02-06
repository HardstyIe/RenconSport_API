import { Prisma } from '@prisma/client';

export class Round implements Prisma.RoundCreateInput {
  id?: string;
  duration?: number;
  sets: number;
  repetitions?: number;
  weight?: number;
  training: Prisma.TrainingCreateNestedOneWithoutRoundsInput;
  exercice: Prisma.ExerciceCreateNestedOneWithoutRoundsInput;
}

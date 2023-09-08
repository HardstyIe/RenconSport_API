import { Prisma } from '@prisma/client';

export class ExerciceTraining implements Prisma.ExerciceTrainingCreateInput {
  training: Prisma.TrainingCreateNestedOneWithoutExerciceTrainingsInput;
  exercice: Prisma.ExerciceCreateNestedOneWithoutExerciceTrainingsInput;
  trainingId: number;
  exerciceId: number;
  sets: number;
  repetitions: number;
  weight: number;
}

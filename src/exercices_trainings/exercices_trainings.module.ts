import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExerciceTrainingController } from './exercices_trainings.controller';
import { ExerciceTrainingService } from './exercices_trainings.service';

@Module({
  imports: [],
  controllers: [ExerciceTrainingController],
  providers: [ExerciceTrainingService, PrismaService],
})
export class ExerciceTrainingModule {}

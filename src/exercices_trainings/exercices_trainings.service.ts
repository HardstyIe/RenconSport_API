import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateExerciceTrainingDto } from './dto/create-exercices_trainings.dto';
import { UpdateExerciceTrainingDto } from './dto/update-exercices_trainings.dto';

@Injectable()
export class ExerciceTrainingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateExerciceTrainingDto) {
    return this.prisma.exerciceTraining.create({
      data: {
        training: {
          connect: { id: dto.trainingId },
        },
        exercice: {
          connect: { id: dto.exerciceId },
        },
        sets: dto.sets,
        repetitions: dto.repetitions,
        weight: dto.weight,
      },
    });
  }

  async update(id: number, dto: UpdateExerciceTrainingDto) {
    return this.prisma.exerciceTraining.update({
      where: { id },
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.exerciceTraining.findMany();
  }

  async findOne(id: number) {
    return this.prisma.exerciceTraining.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.exerciceTraining.delete({
      where: { id },
    });
  }
}

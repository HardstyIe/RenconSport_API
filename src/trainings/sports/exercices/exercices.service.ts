import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { CreateExerciceDto } from './dto/create-exercices.dto';
import { UpdateExerciceDto } from './dto/update-exercices.dto';

@Injectable()
export class ExercicesService {
  constructor(private prisma: PrismaService) {}

  async getAllExercices() {
    return this.prisma.exercice.findMany();
  }

  async getExerciceById(id: string) {
    return this.prisma.exercice.findUnique({ where: { id } });
  }

  async createExercice(dto: CreateExerciceDto) {
    return this.prisma.exercice.create({
      data: {
        name: dto.name,
        difficulty: dto.difficulty,
        rounds: {
          connect: {
            id: dto.round.id,
          },
        },
        users: {
          connect: {
            id: dto.user.id,
          },
        },
      },
    });
  }

  async updateExercice(id: string, dto: UpdateExerciceDto) {
    return this.prisma.exercice.update({
      where: { id },
      data: {
        name: dto.name,
        difficulty: dto.difficulty,
        rounds: {
          connect: {
            id: dto.round.id,
          },
        },
        users: {
          connect: {
            id: dto.user.id,
          },
        },
      },
    });
  }

  async deleteExercice(id: string) {
    return this.prisma.exercice.delete({ where: { id } });
  }
}

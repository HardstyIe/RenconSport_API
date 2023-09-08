import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateExerciceDto } from './dto/create-exercices.dto';
import { UpdateExerciceDto } from './dto/update-exercices.dto';

@Injectable()
export class ExercicesService {
  constructor(private prisma: PrismaService) {}

  async getAllExercices() {
    return this.prisma.exercice.findMany();
  }

  async getExerciceById(id: number) {
    return this.prisma.exercice.findUnique({ where: { id } });
  }

  async createExercice(dto: CreateExerciceDto) {
    return this.prisma.exercice.create({ data: dto });
  }

  async updateExercice(id: number, dto: UpdateExerciceDto) {
    return this.prisma.exercice.update({ where: { id }, data: dto });
  }

  async deleteExercice(id: number) {
    return this.prisma.exercice.delete({ where: { id } });
  }
}

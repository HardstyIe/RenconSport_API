import { Injectable } from '@nestjs/common';
import { Sport } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';

@Injectable()
export class SportsService {
  constructor(private prisma: PrismaService) {}

  async getAllSports(): Promise<Sport[]> {
    return this.prisma.sport.findMany();
  }

  async getAllSportsWithExercices(): Promise<Sport[]> {
    return this.prisma.sport.findMany({
      include: {
        exercices: {
          select: {
            difficulty: true,
            id: true,
            name: true,
            rounds: true,
          },
        },
      },
    });
  }

  async getSportById(id: string): Promise<Sport> {
    return this.prisma.sport.findUnique({ where: { id } });
  }

  async createSport(dto: CreateSportDto) {
    return this.prisma.sport.create({
      data: {
        name: dto.name,
        icon: dto.icon,
        trainings: {
          connect: {
            id: dto.trainings.id,
          },
        },
      },
    });
  }

  async updateSport(id: string, dto: UpdateSportDto) {
    return this.prisma.sport.update({
      where: { id },
      data: {
        name: dto.name,
        icon: dto.icon,
      },
    });
  }

  async deleteSport(id: string) {
    return this.prisma.sport.delete({ where: { id } });
  }
}

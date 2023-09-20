import { Injectable, NotFoundException } from '@nestjs/common';
import { Training } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTrainingDto } from './dto/create-trainings.dto';

@Injectable()
export class TrainingsService {
  constructor(private prisma: PrismaService) {}

  async getAllTrainings(): Promise<Training[]> {
    return this.prisma.training.findMany({
      include: {
        user: true,
        location: true,
        partners: true,
        rounds: true,
        Sport: true,
      },
    });
  }

  async getAllTrainingsExceptUser(id: string): Promise<Training[]> {
    const trainings = await this.prisma.training.findMany({
      where: {
        NOT: {
          userId: id,
        },
      },
    });
    return trainings;
  }

  async getTrainingById(id: string): Promise<Training> {
    const training = await this.prisma.training.findUnique({
      where: { id },
      include: {
        user: true,
        location: true,
        partners: true,
        rounds: true,
        Sport: true,
        
      },
    });
    if (!training) {
      throw new NotFoundException(`No Training found with ID ${id}`);
    }
    return training;
  }

  async createTraining(dto: CreateTrainingDto): Promise<Training> {
    return this.prisma.training.create({
      data: {
        user: {
          connect: { id: dto.user },
        },
        finishedAt: dto.finishedAt,
        startedAt: dto.startedAt,
        mode: dto.mode,
        partners: {
          connect: {
            id: dto.user,
          },
        },
      },
    });
  }

  async updateTraining(
    id: string,
    dto: Partial<CreateTrainingDto>,
  ): Promise<Training> {
    const existing = await this.getTrainingById(id);
    if (!existing) {
      throw new NotFoundException(`No Training found with ID ${id}`);
    }

    return this.prisma.training.update({
      where: { id },
      data: {
        user: {
          connect: { id: dto.user },
        },
        finishedAt: dto.finishedAt,
        startedAt: dto.startedAt,
        mode: dto.mode,
        partners: {
          connect: {
            id: dto.user,
          },
        },
      },
    });
  }

  async deleteTraining(id: string): Promise<Training> {
    const existing = await this.getTrainingById(id);
    if (!existing) {
      throw new NotFoundException(`No Training found with ID ${id}`);
    }

    return this.prisma.training.delete({
      where: { id },
    });
  }
}

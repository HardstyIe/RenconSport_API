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
      },
    });
  }

  async getTrainingById(id: number): Promise<Training> {
    const training = await this.prisma.training.findUnique({
      where: { id },
      include: {
        user: true,
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
          connect: { id: dto.userId },
        },
        start_at: dto.startAt, // Remarquez le changement ici
        finish_at: dto.finishAt, // et ici
        location: dto.location,
        status: dto.status,
        dynamic_latitude: dto.dynamicLatitude,
        dynamic_longitude: dto.dynamicLongitude,
      },
    });
  }

  async updateTraining(
    id: number,
    dto: Partial<CreateTrainingDto>,
  ): Promise<Training> {
    const existing = await this.getTrainingById(id);
    if (!existing) {
      throw new NotFoundException(`No Training found with ID ${id}`);
    }

    return this.prisma.training.update({
      where: { id },
      data: dto,
    });
  }

  async deleteTraining(id: number): Promise<Training> {
    const existing = await this.getTrainingById(id);
    if (!existing) {
      throw new NotFoundException(`No Training found with ID ${id}`);
    }

    return this.prisma.training.delete({
      where: { id },
    });
  }
}

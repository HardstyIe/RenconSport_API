import { Injectable, NotFoundException } from '@nestjs/common';
import { TrainingPartner } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTrainingPartnerDto } from './dto/create-trainings_partners.dto';

@Injectable()
export class TrainingPartnerServices {
  constructor(private prisma: PrismaService) {}

  async getAllTrainingPartners(): Promise<TrainingPartner[]> {
    return this.prisma.trainingPartner.findMany({
      include: {
        training: true,
        user: true,
      },
    });
  }

  async getTrainingPartnerById(id: number): Promise<TrainingPartner> {
    const trainingPartner = await this.prisma.trainingPartner.findUnique({
      where: { id },
      include: {
        training: true,
        user: true,
      },
    });
    if (!trainingPartner) {
      throw new NotFoundException(`No TrainingPartner found with ID ${id}`);
    }
    return trainingPartner;
  }

  async createTrainingPartner(
    dto: CreateTrainingPartnerDto,
  ): Promise<TrainingPartner> {
    return this.prisma.trainingPartner.create({
      data: {
        training: {
          connect: { id: parseInt(dto.trainingId) },
        },
        user: {
          connect: { id: dto.userId },
        },
        status: dto.status,
      },
    });
  }

  async updateTrainingPartner(
    id: number,
    dto: Partial<CreateTrainingPartnerDto>,
  ): Promise<TrainingPartner> {
    const existing = await this.getTrainingPartnerById(id);
    if (!existing) {
      throw new NotFoundException(`No TrainingPartner found with ID ${id}`);
    }

    return this.prisma.trainingPartner.update({
      where: { id },
      data: {
        training: dto.trainingId
          ? { connect: { id: parseInt(dto.trainingId) } }
          : undefined,
        user: dto.userId ? { connect: { id: dto.userId } } : undefined,
        status: dto.status,
      },
    });
  }

  async deleteTrainingPartner(id: number): Promise<TrainingPartner> {
    const existing = await this.getTrainingPartnerById(id);
    if (!existing) {
      throw new NotFoundException(`No TrainingPartner found with ID ${id}`);
    }

    return this.prisma.trainingPartner.delete({
      where: { id },
    });
  }
}

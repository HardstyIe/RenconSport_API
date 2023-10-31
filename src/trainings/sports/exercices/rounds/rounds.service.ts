import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRoundDto } from './dto/create-rounds.dto';
import { UpdateRoundDto } from './dto/update-rounds.dto';

@Injectable()
export class RoundService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRoundDto) {
    return this.prisma.round.create({
      data: {
        sets: dto.sets,
        repetitions: dto.repetitions,
        weight: dto.weight,
        duration: dto.duration,
        training: {
          connect: {
            id: dto.trainingId,
          },
        },
        exercice: {
          connect: {
            id: dto.exerciceId,
          },
        },
      },
    });
  }

  async update(id: string, dto: UpdateRoundDto) {
    return this.prisma.round.update({
      where: { id },
      data: {
        sets: dto.sets,
        repetitions: dto.repetitions,
        weight: dto.weight,
        duration: dto.duration,
      },
    });
  }

  async findAll() {
    return this.prisma.round.findMany();
  }

  async findOne(id: string) {
    return this.prisma.round.findUnique({
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.round.delete({
      where: { id },
    });
  }
}

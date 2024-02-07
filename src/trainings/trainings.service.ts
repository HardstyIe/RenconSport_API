import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
        sport: true,
        group: true,
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
        sport: true,
        group: true,
      },
    });
    if (!training) {
      throw new NotFoundException(`No Training found with ID ${id}`);
    }
    return training;
  }

  async createTraining(dto: CreateTrainingDto): Promise<Training> {
    let rounds;

    if (dto.commonRound) {
      // Créer des rounds communs pour tous les exercices
      rounds = {
        create: dto.exerciceIds.map((exerciceId) => ({
          exercice: {
            connect: { id: exerciceId },
          },
          repetitions: dto.commonRound?.repetitions,
          sets: dto.commonRound?.sets,
          duration: dto.commonRound?.duration,
          weight: dto.commonRound?.weight,
        })),
      };
    } else if (dto.specificRounds) {
      // Créer des rounds spécifiques pour chaque exercice
      rounds = {
        create: dto.specificRounds.map((round) => ({
          exercice: {
            connect: { id: round.exerciceId },
          },
          reps: round.repetitions,
          sets: round.sets,
          duration: round.duration,
          weight: round.weight,
        })),
      };
    }

    if (
      !dto.user ||
      !dto.sportId ||
      !dto.startedAt ||
      !dto.finishedAt ||
      !dto.mode ||
      !dto.locationType ||
      !dto.locationLatitude ||
      !dto.locationLongitude ||
      !rounds
    ) {
      throw new BadRequestException('Missing required fields');
    }

    try {
      return this.prisma.training.create({
        data: {
          user: {
            connect: { id: dto.user },
          },
          sport: {
            connect: { id: dto.sportId },
          },
          startedAt: dto.startedAt,
          finishedAt: dto.finishedAt,
          mode: dto.mode,
          location: {
            create: {
              type: dto.locationType,
              latitude: dto.locationLatitude,
              longitude: dto.locationLongitude,
            },
          },
          rounds: rounds,
          group: {
            create: {
              type: 'PUBLIC',
              owner: {
                connect: {
                  id: dto.user,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'entraînement:", error);
      throw new InternalServerErrorException(
        "Erreur lors de la création de l'entraînement",
      );
    }
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

import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../prisma.service';
import { RoundController } from './rounds.controller';
import { RoundService } from './rounds.service';

@Module({
  imports: [],
  controllers: [RoundController],
  providers: [RoundService, PrismaService],
})
export class ExerciceTrainingModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExercicesController } from './exercices.controller';
import { ExercicesService } from './exercices.service';

@Module({
  providers: [ExercicesService, PrismaService],
  controllers: [ExercicesController],
})
export class ExercicesModule {}

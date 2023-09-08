// Module pour la gestion des partenaires d'entraînement
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TrainingPartnersController } from './trainings_partners.controller';
import { TrainingPartnerServices } from './trainings_partners.service';

@Module({
  controllers: [TrainingPartnersController],
  providers: [TrainingPartnerServices, PrismaService],
})
export class TrainingPartnersModule {}

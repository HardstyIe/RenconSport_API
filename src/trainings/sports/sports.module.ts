import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SportsController } from './sports.controller';
import { SportsService } from './sports.services';

@Module({
  controllers: [SportsController],
  providers: [SportsService, PrismaService],
})
export class SportsModule {}

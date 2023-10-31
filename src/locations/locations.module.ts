import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LocationController } from './locations.controller';
import { LocationService } from './locations.service';

@Module({
  controllers: [LocationController],
  providers: [LocationService, PrismaService],
})
export class LocationModule {}

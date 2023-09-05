import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersController } from './users.controller';
import { UsersServices } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersServices, PrismaService],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserLikesController } from './users_likes.controller';
import { UserLikesServices } from './users_likes.service';

@Module({
  controllers: [UserLikesController],
  providers: [UserLikesServices, PrismaService],
})
export class UserLikesModule {}

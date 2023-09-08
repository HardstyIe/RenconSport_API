import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserChatGroupController } from './users_chatgroups.controller';
import { UserChatGroupServices } from './users_chatgroups.service';

@Module({
  controllers: [UserChatGroupController],
  providers: [UserChatGroupServices, PrismaService],
})
export class UserChatGroupModule {}

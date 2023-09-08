import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ChatGroupsController } from './chats_groups.controller';
import { ChatGroupsService } from './chats_groups.service';

@Module({
  providers: [ChatGroupsService, PrismaService],
  controllers: [ChatGroupsController],
})
export class ChatGroupsModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ChatGroupsController } from './chat-groups.controller';
import { ChatGroupsService } from './chat-groups.service';

@Module({
  providers: [ChatGroupsService, PrismaService],
  controllers: [ChatGroupsController],
})
export class ChatGroupsModule {}

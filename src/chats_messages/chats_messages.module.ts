import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ChatMessagesController } from './chats_messages.controller';
import { ChatMessagesService } from './chats_messages.service';

@Module({
  controllers: [ChatMessagesController],
  providers: [ChatMessagesService, PrismaService],
})
export class ChatMessagesModule {}

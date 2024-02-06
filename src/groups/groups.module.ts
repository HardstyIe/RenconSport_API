import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ChatGroupsController } from './groups.controller';
import { GroupService } from './groups.service';

@Module({
  providers: [GroupService, PrismaService],
  controllers: [ChatGroupsController],
})
export class ChatGroupsModule {}

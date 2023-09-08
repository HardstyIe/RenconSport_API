import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateChatGroupDto } from './dto/create-chats_groups.dto';
import { UpdateChatGroupDto } from './dto/update-chats_groups.dto';

@Injectable()
export class ChatGroupsService {
  constructor(private prisma: PrismaService) {}

  async getAllChatGroups() {
    return this.prisma.chatGroup.findMany();
  }

  async getChatGroupById(id: number) {
    return this.prisma.chatGroup.findUnique({ where: { id } });
  }

  async createChatGroup(dto: CreateChatGroupDto) {
    return this.prisma.chatGroup.create({ data: dto });
  }

  async updateChatGroup(id: number, dto: UpdateChatGroupDto) {
    return this.prisma.chatGroup.update({ where: { id }, data: dto });
  }

  async deleteChatGroup(id: number) {
    return this.prisma.chatGroup.delete({ where: { id } });
  }
}

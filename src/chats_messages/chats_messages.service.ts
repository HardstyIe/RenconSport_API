import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateChatMessageDto } from './dto/create-chats_messages.dto';
import { UpdateChatMessageDto } from './dto/update-chats_messages.dto';

@Injectable()
export class ChatMessagesService {
  constructor(private prisma: PrismaService) {}

  async getAllChatMessages() {
    return this.prisma.chatMessage.findMany();
  }

  async getChatMessageById(id: number) {
    return this.prisma.chatMessage.findUnique({ where: { id } });
  }

  async createChatMessage(dto: CreateChatMessageDto) {
    return this.prisma.chatMessage.create({
      data: {
        chat_group: {
          connect: { id: dto.chat_group_id },
        },
        sender: {
          connect: { id: dto.sender_id },
        },
        content: dto.content,
        sent_at: new Date(), // Ajoutez cette ligne
      },
    });
  }

  async updateChatMessage(id: number, dto: UpdateChatMessageDto) {
    return this.prisma.chatMessage.update({ where: { id }, data: dto });
  }

  async deleteChatMessage(id: number) {
    return this.prisma.chatMessage.delete({ where: { id } });
  }
}

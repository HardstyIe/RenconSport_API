import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateMessageDto } from './dto/create-messages.dto';
import { UpdateMessageDto } from './dto/update-messages.dto';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async getAllChatMessages() {
    return this.prisma.message.findMany();
  }

  async getChatMessageById(id: string) {
    return this.prisma.message.findUnique({ where: { id } });
  }

  async createChatMessage(dto: CreateMessageDto) {
    return this.prisma.message.create({
      data: {
        content: dto.content,
        group: {
          connect: {
            id: dto.group,
          },
        },
        sender: {
          connect: {
            id: dto.sender_id,
          },
        },
      },
    });
  }

  async updateChatMessage(id: string, dto: UpdateMessageDto) {
    return this.prisma.message.update({ where: { id }, data: dto });
  }

  async deleteChatMessage(id: string) {
    return this.prisma.message.delete({ where: { id } });
  }
}

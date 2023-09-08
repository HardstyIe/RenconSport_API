import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserChatGroup } from './users_chatgroups.model';

@Injectable()
export class UserChatGroupServices {
  constructor(private prisma: PrismaService) {}

  async getAllUserChatGroups(): Promise<UserChatGroup[]> {
    return (await this.prisma.userChatGroup.findMany({
      include: {
        user: true,
        chat_group: true,
      },
    })) as unknown as UserChatGroup[];
  }

  async getUserChatGroupById(id: number): Promise<UserChatGroup> {
    const userChatGroup = await this.prisma.userChatGroup.findUnique({
      where: { id: id },
      include: {
        user: true,
        chat_group: true,
      },
    });

    if (!userChatGroup) {
      throw new NotFoundException(`No UserChatGroup found with the ID ${id}.`);
    }

    return userChatGroup as unknown as UserChatGroup;
  }

  async createUserChatGroup(data: UserChatGroup): Promise<UserChatGroup> {
    return (await this.prisma.userChatGroup.create({
      data: {
        user: {
          connect: { id: data.user.connect?.id },
        },
        chat_group: {
          connect: { id: data.chat_group.connect?.id },
        },
      },
    })) as unknown as UserChatGroup;
  }

  async updateUserChatGroup(
    id: number,
    data: Partial<UserChatGroup>,
  ): Promise<UserChatGroup> {
    const existing = await this.getUserChatGroupById(id);

    if (!existing) {
      throw new NotFoundException(
        `No UserChatGroup found with the ID ${id} for updating.`,
      );
    }

    return (await this.prisma.userChatGroup.update({
      where: { id: id },
      data,
    })) as unknown as UserChatGroup;
  }

  async deleteUserChatGroup(id: number): Promise<UserChatGroup> {
    const existing = await this.getUserChatGroupById(id);

    if (!existing) {
      throw new NotFoundException(
        `No UserChatGroup found with the ID ${id} for deletion.`,
      );
    }

    return (await this.prisma.userChatGroup.delete({
      where: { id: id },
    })) as unknown as UserChatGroup;
  }
}

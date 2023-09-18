import { Injectable } from '@nestjs/common';
import { Type } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateGroupDto } from './dto/create-groups.dto';
import { UpdateGroupDto } from './dto/update-groups.dto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async getAllGroups() {
    return this.prisma.group.findMany();
  }

  async getGroupById(id: string) {
    return this.prisma.group.findUnique({ where: { id } });
  }

  async createGroup(dto: CreateGroupDto) {
    return this.prisma.group.create({
      data: {
        name: dto.name,
        training: {
          connect: {
            id: dto.training,
          },
        },
        type: Type.PUBLIC,
      },
    });
  }

  async updateGroup(id: string, dto: UpdateGroupDto) {
    return this.prisma.group.update({
      where: { id },
      data: {
        name: dto.name,
        training: {
          connect: {
            id: dto.training_id,
          },
        },
        type: Type.PUBLIC,
      },
    });
  }

  async deleteGroup(id: string) {
    return this.prisma.group.delete({ where: { id } });
  }
}

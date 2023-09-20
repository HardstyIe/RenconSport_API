import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersServices {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      throw new NotFoundException(`No user found with the ID ${id}.`);
    }

    return user;
  }

  async createUser(data: { email: string; password: string }): Promise<User> {
    const existing = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      throw new ConflictException(
        'The email address is already associated with an account.',
      );
    }

    return this.prisma.user.create({ data });
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    const existing = await this.getUserById(id);

    if (!existing) {
      throw new NotFoundException(
        `No user found with the ID ${id} for updating.`,
      );
    }

    return this.prisma.user.update({
      where: { id: id },
      data,
    });
  }

  async deleteUser(id: string): Promise<User> {
    const existing = await this.getUserById(id);
    if (!existing) {
      throw new NotFoundException(
        `No user found with the ID ${id} for deletion.`,
      );
    }
    return this.prisma.user.delete({
      where: { id: id },
    });
  }

  async getUserWithGroups(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
      include: {
        messages: {
          include: {
            group: true,
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException(`No user found with the ID ${id}.`);
    }
    return user;
  }

  async getUserWithTrainings(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
      include: {
        createdTrainings: true,
      },
    });
    if (!user) {
      throw new NotFoundException(`No user found with the ID ${id}.`);
    }
    return user;
  }
}

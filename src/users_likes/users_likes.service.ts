import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUsersLikesDto } from './dto/create-users_likes.dto';
import { UpdateUsersLikesDto } from './dto/update-users_likes.dto';

@Injectable()
export class UserLikesServices {
  constructor(private prisma: PrismaService) {}

  async getAllLikes() {
    return this.prisma.userLike.findMany();
  }

  async createLike(data: CreateUsersLikesDto) {
    return this.prisma.userLike.create({ data });
  }

  async getLikeById(id: number) {
    const like = await this.prisma.userLike.findUnique({
      where: { id: id },
    });
    if (!like) {
      throw new NotFoundException(`No like found with the ID ${id}.`);
    }
    return like;
  }

  async updateLike(id: number, data: UpdateUsersLikesDto) {
    const existing = await this.getLikeById(id);
    if (!existing) {
      throw new NotFoundException(
        `No like found with the ID ${id} for updating.`,
      );
    }
    return this.prisma.userLike.update({
      where: { id: id },
      data,
    });
  }

  async deleteLike(id: number) {
    const existing = await this.prisma.userLike.findUnique({
      where: { id: id },
    });
    if (!existing) {
      throw new NotFoundException(`No like found with the ID ${id}.`);
    }
    return this.prisma.userLike.delete({
      where: { id: id },
    });
  }
}

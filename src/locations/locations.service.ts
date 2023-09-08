import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLocationDto } from './dto/create-locations.dto';
import { UpdateLocationDto } from './dto/update-locations.dto';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateLocationDto) {
    return this.prisma.location.create({
      data: dto,
    });
  }

  async update(id: number, dto: UpdateLocationDto) {
    return this.prisma.location.update({
      where: { id },
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.location.findMany();
  }

  async findOne(id: number) {
    return this.prisma.location.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.location.delete({
      where: { id },
    });
  }
}

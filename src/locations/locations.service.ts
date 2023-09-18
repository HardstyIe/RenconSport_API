import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLocationDto } from './dto/create-locations.dto';
import { UpdateLocationDto } from './dto/update-locations.dto';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateLocationDto) {
    return this.prisma.location.create({
      data: {
        latitude: dto.latitude,
        longitude: dto.longitude,
        type: dto.type,
      },
    });
  }

  async update(id: string, dto: UpdateLocationDto) {
    return this.prisma.location.update({
      where: { id },
      data: {
        address: dto.address,
        name: dto.name,
        latitude: dto.latitude,
        longitude: dto.longitude,
      },
    });
  }

  async findAll() {
    return this.prisma.location.findMany();
  }

  async findOne(id: string) {
    return this.prisma.location.findUnique({
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.location.delete({
      where: { id },
    });
  }
}

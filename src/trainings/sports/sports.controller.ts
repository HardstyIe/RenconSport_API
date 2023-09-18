import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { SportsService } from './sports.services';

@ApiTags('Sports')
@Controller('sports')
export class SportsController {
  constructor(private readonly service: SportsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllSports(@Res() response: Response) {
    const result = await this.service.getAllSports();
    return response.status(200).json(result);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getSportById(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.getSportById(id);
    return response.status(200).json(result);
  }

  @Post()
  async createSport(
    @Body() createDto: CreateSportDto,
    @Res() response: Response,
  ) {
    const result = await this.service.createSport(createDto);
    return response.status(201).json(result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateSport(
    @Param('id') id: string,
    @Body() updateDto: UpdateSportDto,
    @Res() response: Response,
  ) {
    const result = await this.service.updateSport(id, updateDto);
    return response.status(200).json(result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteSport(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.deleteSport(id);
    return response.status(200).json(result);
  }
}

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
import { CreateExerciceDto } from './dto/create-exercices.dto';
import { UpdateExerciceDto } from './dto/update-exercices.dto';
import { ExercicesService } from './exercices.service';

@ApiTags('Exercices')
@Controller('exercices')
export class ExercicesController {
  constructor(private readonly service: ExercicesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllExercices(@Res() response: Response) {
    const result = await this.service.getAllExercices();
    return response.status(200).json(result);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getExerciceById(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.getExerciceById(id);
    return response.status(200).json(result);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createExercice(
    @Body() createDto: CreateExerciceDto,
    @Res() response: Response,
  ) {
    const result = await this.service.createExercice(createDto);
    return response.status(201).json(result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateExercice(
    @Param('id') id: string,
    @Body() updateDto: UpdateExerciceDto,
    @Res() response: Response,
  ) {
    const result = await this.service.updateExercice(id, updateDto);
    return response.status(200).json(result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteExercice(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.deleteExercice(id);
    return response.status(200).json(result);
  }
}

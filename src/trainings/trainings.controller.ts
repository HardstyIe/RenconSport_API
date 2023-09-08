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
import { JwtAuthGuard } from 'src/authentification/auth.guard';
import { CreateTrainingDto } from './dto/create-trainings.dto';
import { TrainingsService } from './trainings.service';

@ApiTags('Trainings')
@Controller('trainings')
export class TrainingsController {
  constructor(private readonly service: TrainingsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllTrainings(@Res() response: Response) {
    const result = await this.service.getAllTrainings();
    return response.status(200).json(result);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getTrainingById(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.getTrainingById(+id);
    return response.status(200).json(result);
  }

  @Post()
  async createTraining(
    @Body() createDto: CreateTrainingDto,
    @Res() response: Response,
  ) {
    const result = await this.service.createTraining(createDto);
    return response.status(201).json(result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateTraining(
    @Param('id') id: string,
    @Body() updateDto: CreateTrainingDto,
    @Res() response: Response,
  ) {
    const result = await this.service.updateTraining(+id, updateDto);
    return response.status(200).json(result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteTraining(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.deleteTraining(+id);
    return response.status(200).json(result);
  }
}

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
import { CreateTrainingPartnerDto } from './dto/create-trainings_partners.dto';
import { UpdateTrainingPartnerDto } from './dto/update-trainings_partners.dto';
import { TrainingPartnerServices } from './trainings_partners.service';

@ApiTags('Trainings-Partners')
@Controller('training-partners')
export class TrainingPartnersController {
  constructor(private readonly service: TrainingPartnerServices) {}

  // Récupérer tous les partenaires d'entraînement
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllTrainingPartners(@Res() response: Response) {
    const result = await this.service.getAllTrainingPartners();
    return response.status(200).json(result);
  }

  // Récupérer un partenaire d'entraînement par son ID
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getTrainingPartnerById(
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    const result = await this.service.getTrainingPartnerById(+id);
    return response.status(200).json(result);
  }

  // Créer un nouveau partenaire d'entraînement
  @Post()
  async createTrainingPartner(
    @Body() createDto: CreateTrainingPartnerDto,
    @Res() response: Response,
  ) {
    const result = await this.service.createTrainingPartner(createDto);
    return response.status(201).json(result);
  }

  // Mettre à jour un partenaire d'entraînement existant
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateTrainingPartner(
    @Param('id') id: string,
    @Body() updateDto: UpdateTrainingPartnerDto,
    @Res() response: Response,
  ) {
    const result = await this.service.updateTrainingPartner(+id, updateDto);
    return response.status(200).json(result);
  }

  // Supprimer un partenaire d'entraînement
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteTrainingPartner(
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    const result = await this.service.deleteTrainingPartner(+id);
    return response.status(200).json(result);
  }
}

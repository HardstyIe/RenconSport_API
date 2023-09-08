import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateExerciceTrainingDto } from './dto/create-exercices_trainings.dto';
import { UpdateExerciceTrainingDto } from './dto/update-exercices_trainings.dto';
import { ExerciceTrainingService } from './exercices_trainings.service';

@ApiTags('ExerciceTrainings')
@Controller('exercice-trainings')
export class ExerciceTrainingController {
  constructor(private readonly service: ExerciceTrainingService) {}

  @Post()
  create(@Body() createDto: CreateExerciceTrainingDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateExerciceTrainingDto,
  ) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}

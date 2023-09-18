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
import { CreateRoundDto } from './dto/create-rounds.dto';
import { UpdateRoundDto } from './dto/update-rounds.dto';
import { RoundService } from './rounds.service';

@ApiTags('Rounds')
@Controller('rounds')
export class RoundController {
  constructor(private readonly service: RoundService) {}

  @Post()
  create(@Body() createDto: CreateRoundDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateRoundDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

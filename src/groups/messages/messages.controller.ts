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
import { CreateMessageDto } from './dto/create-messages.dto';
import { UpdateMessageDto } from './dto/update-messages.dto';
import { MessagesService } from './messages.service';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly service: MessagesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllChatMessages(@Res() response: Response) {
    const result = await this.service.getAllChatMessages();
    return response.status(200).json(result);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getChatMessageById(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.getChatMessageById(id);
    return response.status(200).json(result);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createChatMessage(
    @Body() createDto: CreateMessageDto,
    @Res() response: Response,
  ) {
    const result = await this.service.createChatMessage(createDto);
    return response.status(201).json(result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateChatMessage(
    @Param('id') id: string,
    @Body() updateDto: UpdateMessageDto,
    @Res() response: Response,
  ) {
    const result = await this.service.updateChatMessage(id, updateDto);
    return response.status(200).json(result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteChatMessage(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.deleteChatMessage(id);
    return response.status(200).json(result);
  }
}

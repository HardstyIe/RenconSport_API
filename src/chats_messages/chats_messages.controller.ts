import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ChatMessagesService } from './chats_messages.service';
import { CreateChatMessageDto } from './dto/create-chats_messages.dto';
import { UpdateChatMessageDto } from './dto/update-chats_messages.dto';

@ApiTags('Chat Messages')
@Controller('messages')
export class ChatMessagesController {
  constructor(private readonly service: ChatMessagesService) {}

  @Get()
  async getAllChatMessages(@Res() response: Response) {
    const result = await this.service.getAllChatMessages();
    return response.status(200).json(result);
  }

  @Get(':id')
  async getChatMessageById(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.getChatMessageById(+id);
    return response.status(200).json(result);
  }

  @Post()
  async createChatMessage(
    @Body() createDto: CreateChatMessageDto,
    @Res() response: Response,
  ) {
    const result = await this.service.createChatMessage(createDto);
    return response.status(201).json(result);
  }

  @Put(':id')
  async updateChatMessage(
    @Param('id') id: string,
    @Body() updateDto: UpdateChatMessageDto,
    @Res() response: Response,
  ) {
    const result = await this.service.updateChatMessage(+id, updateDto);
    return response.status(200).json(result);
  }

  @Delete(':id')
  async deleteChatMessage(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.deleteChatMessage(+id);
    return response.status(200).json(result);
  }
}

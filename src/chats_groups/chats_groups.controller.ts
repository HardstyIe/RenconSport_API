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
import { ChatGroupsService } from './chats_groups.service';
import { CreateChatGroupDto } from './dto/create-chats_groups.dto';
import { UpdateChatGroupDto } from './dto/update-chats_groups.dto';

@ApiTags('ChatGroups')
@Controller('chat-groups')
export class ChatGroupsController {
  constructor(private readonly service: ChatGroupsService) {}

  @Get()
  async getAllChatGroups(@Res() response: Response) {
    const result = await this.service.getAllChatGroups();
    return response.status(200).json(result);
  }

  @Get(':id')
  async getChatGroupById(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.getChatGroupById(+id);
    return response.status(200).json(result);
  }

  @Post()
  async createChatGroup(
    @Body() createDto: CreateChatGroupDto,
    @Res() response: Response,
  ) {
    const result = await this.service.createChatGroup({
      ...createDto,
    });
    return response.status(201).json(result);
  }

  @Put(':id')
  async updateChatGroup(
    @Param('id') id: string,
    @Body() updateDto: UpdateChatGroupDto,
    @Res() response: Response,
  ) {
    const result = await this.service.updateChatGroup(+id, updateDto);
    return response.status(200).json(result);
  }

  @Delete(':id')
  async deleteChatGroup(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.deleteChatGroup(+id);
    return response.status(200).json(result);
  }
}
